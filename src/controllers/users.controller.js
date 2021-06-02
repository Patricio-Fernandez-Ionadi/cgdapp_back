const usersRouter = require("express").Router()
const { User, UserCreation } = require("../models/user")

usersRouter.get("/", async (req, res) => {
	const allUsers = await User.find({})
	res.json(allUsers)
})

usersRouter.post("/admin/control/edit", async (req, res) => {
	const userIdToChange = req.body.userToChange._id
	const newValues = req.body.newValues // {...nuevos valores (existentes)}
	try {
		// actualizar valores existentes de un usuario-------------------------
		// await User.findOneAndUpdate({ _id: userIdToChange }, newValues, {
		// 	new: true,
		// 	upsert: true,
		// })
		// --------------------------------------------------------------------
		// actualiza o crea nuevos valores
		await User.findByIdAndUpdate(userIdToChange, newValues)

		res.status(201).end()
	} catch (e) {
		res.status(304)
	}
})

usersRouter.post("/register", async (req, res) => {
	const userSolicitud = req.body
	console.log(userSolicitud)

	const [isExistentUser] = await User.find({ email: userSolicitud.email })

	if (isExistentUser) {
		return res.status(406)
	} else {
		const userToAdd = new UserCreation(userSolicitud)

		const savedUserToAdd = await userToAdd.save()
		res.status(201).json(savedUserToAdd).end()
	}
})

usersRouter.get("/register", async (req, res) => {
	const pendingUsers = await UserCreation.find({})
	res.json(pendingUsers)
})

module.exports = usersRouter
