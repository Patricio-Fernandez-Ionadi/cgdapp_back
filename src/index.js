require("dotenv").config()
require("./connection")
const express = require("express")
const app = express()
const cors = require("cors")
// ---------------------------------------------------------------------
app.use(cors())
app.use(express.json())
// ---------------------------------------------------------------------
// CONTROLLERS
const infoRouter = require("./controllers/info")
const sucursalesRouter = require("./controllers/sucursales.controller")
const sesionRouter = require("./controllers/sesion.controller")
const usersRouter = require("./controllers/users.controller")
// ---------------------------------------------------------------------
// ROUTES

// All Info
app.use("/api", infoRouter)
// ----------------------------------
// Sucursales
app.use("/api/sucursales", sucursalesRouter)
// ----------------------------------
// Sesion
app.use("/sesion", sesionRouter)
// ----------------------------------
// Users
app.use("/api/users", usersRouter)

// ---------------------------------------------------------------------
// ERROR HANDLING
app.use((err, req, res, next) => {
	console.log(err)
	res.status(404).send(err)
})

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
