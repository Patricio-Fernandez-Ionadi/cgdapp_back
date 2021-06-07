const usersRouter = require("express").Router()
const { User, UserCreation } = require("../models/user")

usersRouter.get("/", (req, res, next) => {
	User.find({})
		.then((allUsers) => res.json(allUsers))
		.catch(next)
})

usersRouter.post("/control/edit", (req, res, next) => {
	const userIdToChange = req.body.userToChange._id
	const newValues = req.body.newValues // {...nuevos valores (existentes)}
	// actualizar valores existentes de un usuario-------------------------
	// User.findOneAndUpdate({ _id: userIdToChange }, newValues, {
	// 	new: true,
	// 	upsert: true,
	// })
	// --------------------------------------------------------------------
	// actualiza o crea nuevos valores

	User.findByIdAndUpdate(userIdToChange, newValues)
		.then(() => res.status(201).end())
		.catch((e) => {
			res.status(304)
			next(e)
		})
})

usersRouter.get("/control/userRequest", (req, res, next) => {
	UserCreation.find({})
		.then((pendingUsers) => res.json(pendingUsers))
		.catch(next)
})

module.exports = usersRouter
