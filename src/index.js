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
// const User = require("./models/user")

// ---------------------------------------------------------------------
// Router
const infoRouter = require("./controllers/info")
const sucursalesRouter = require("./controllers/sucursales")
const loginRouter = require("./controllers/login.controller")
const usersRouter = require("./controllers/users.controller")

// ---------------------------------------------------------------------
// All Info
app.use("/api", infoRouter)
// ---------------------------------------------------------------------
// Sucursales
app.use("/api/sucursales", sucursalesRouter)
// ---------------------------------------------------------------------
// Login
app.use("/login", loginRouter)
// ---------------------------------------------------------------------
// Users
app.use("/api/users", usersRouter)

// ---------------------------------------------------------------------
app.use((err, req, res, next) => {
	console.log(err)
	res.status(404).send(err)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
