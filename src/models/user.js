const { Schema, model } = require("mongoose")

const userSchema = new Schema({
	user: String,
	password: String,
})

const User = model("users", userSchema)

module.exports = User
