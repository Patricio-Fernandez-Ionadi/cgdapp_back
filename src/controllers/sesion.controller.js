const sesionRouter = require("express").Router()

const User = require("../models/user")

sesionRouter.get("/", async (req, res, next) => {
	const usersOnline = await User.User.find({ isOnline: true })
	const usersOffline = await User.User.find({ isOnline: false })

	const sesions = [usersOnline, usersOffline]

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

	User.User.find({ user: recivedUser, pass: recivedPass }).then((response) => {
		const isEmpty = response.length === 0
		if (isEmpty) return res.status(404).end()

		const [user] = response

		User.User.findByIdAndUpdate({ _id: user._id }, { isOnline: true })
			.then(() => res.status(201).send(user))
			.catch(next)
	})
})

// ----------------------------------------------------
// ---------------------- LOGOUT ----------------------
// ----------------------------------------------------

sesionRouter.post("/logout", (req, res, next) => {
	const userID = req.body._id

	User.User.findByIdAndUpdate({ _id: userID }, { isOnline: false })
		.then(() => res.status(200).end())
		.catch(next)
})

module.exports = sesionRouter
