const loginRouter = require("express").Router()

const User = require("../models/user")

loginRouter.post("/", async (req, res) => {
	const recivedUser = req.body.user
	const recivedPass = req.body.pass
	const userSaved = await User.find({ user: recivedUser, pass: recivedPass })

	if (userSaved[0]) {
		res.status(200).send(userSaved)
	} else {
		res.status(404).end()
	}
})

module.exports = loginRouter
