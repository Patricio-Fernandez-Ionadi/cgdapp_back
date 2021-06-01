require("dotenv").config()
require("./connection")
const express = require("express")
const app = express()
const cors = require("cors")

// ---------------------------------------------------------------------
app.use(cors())
app.use(express.json())

// ---------------------------------------------------------------------
// MODELS
// const Info = require("./models/info")
const User = require("./models/user")

// ---------------------------------------------------------------------
// Router
const infoRouter = require("./controllers/info")
const sucursalesRouter = require("./controllers/sucursales")

// ---------------------------------------------------------------------

app.use("/api", infoRouter)
app.use("/api/sucursales", sucursalesRouter)

// ---------------------------------------------------------------------
// LOGIN
app.post("/login", async (req, res) => {
	const recivedUser = req.body.user
	const recivedPass = req.body.pass
	const userSaved = await User.find({ user: recivedUser, pass: recivedPass })

	if (userSaved[0]) {
		// console.log("existe el usuario")
		res.status(200).send(userSaved)
	} else {
		res.status(404).end()
		// console.log("no existe el usuario")
	}
})

// ---------------------------------------------------------------------
app.use((err, req, res, next) => {
	console.log(err)
	res.status(404).send(err)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
