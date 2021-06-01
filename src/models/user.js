const { Schema, model } = require("mongoose")

const userSchema = new Schema({
	user: String,
	pass: String,
	role: String,
	name: String,
	lastName: String,
	birth: Date,
})

const User = model("users", userSchema)

module.exports = User
