const { Schema, model } = require("mongoose")

const userSchema = new Schema({
	user: String,
	pass: String,
	role: String,
	name: String,
	lastName: String,
	date: Date,
	gender: String,
	sector: String,
	sucursal: String,
	age: Number,
	_facturas: Array,
	email: String,
	_secQuest: String,
	_secAsk: String,
	nacionalidad: String,
	isOnline: Boolean,
})

const User = model("users", userSchema)
const UserCreation = model("userpendings", userSchema)

module.exports = { User, UserCreation }
