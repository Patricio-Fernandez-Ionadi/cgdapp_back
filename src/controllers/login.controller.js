const loginRouter = require("express").Router()

const User = require("../models/user")

loginRouter.post("/", async (req, res) => {
	const recivedUser = req.body.user
	const recivedPass = req.body.pass
	const filter = { user: recivedUser, pass: recivedPass }
	const userSaved = await User.User.find(filter)

	try {
		if (userSaved[0]) {
			res.status(201).send(userSaved)
		} else {
			res.status(404).end()
		}
	} catch (e) {
		res.status().end()
	}
})

module.exports = loginRouter
