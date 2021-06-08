const sesionRouter = require("express").Router()

const { User } = require("../models/user")

sesionRouter.get("/", async (req, res, next) => {
	const usersOnline = await User.find({ isOnline: true })
	const usersOffline = await User.find({ isOnline: false })
	const allUsers = await User.find({})

	const sesions = [allUsers, usersOnline, usersOffline]

	try {
		res.json(sesions).end()
	} catch (e) {
		next(e)
	}
})

// ---------------------------------------------------
// ---------------------- LOGIN ----------------------
// ---------------------------------------------------
sesionRouter.post("/login", (req, res, next) => {
	const recivedUser = req.body.user
	const recivedPass = req.body.pass

	User.find({ user: recivedUser, pass: recivedPass }).then((response) => {
		const isEmpty = response.length === 0
		if (isEmpty) return res.status(404).end()

		const [user] = response

		User.findByIdAndUpdate({ _id: user._id }, { isOnline: true })
			.then(() => res.status(201).send(user))
			.catch(next)
	})
})

// ----------------------------------------------------
// ---------------------- LOGOUT ----------------------
// ----------------------------------------------------

sesionRouter.post("/logout", (req, res, next) => {
	const userID = req.body._id

	User.findByIdAndUpdate({ _id: userID }, { isOnline: false })
		.then(() => res.status(200).end())
		.catch(next)
})

// ----------------------------------------------------
// ---------------------- REGISTER --------------------
// ----------------------------------------------------
sesionRouter.post("/register", (req, res, next) => {
	const userSolicitud = req.body
	console.log(userSolicitud)

	// /*
	User.find({ email: userSolicitud.email }).then((isExistentUser) => {
		if ([isExistentUser]) {
			return res.status(406)
		} else {
			const userToAdd = new UserCreation(userSolicitud)

			userToAdd
				.save()
				.then((savedUserToAdd) => res.status(201).json(savedUserToAdd).end())
				.catch(next)
		}
	})
	// */
})

module.exports = sesionRouter
