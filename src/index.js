const express = require("express")
const app = express()
const cors = require("cors")

// ---------------------------------------------------------------------
// SCHEMA
const Info = require("./models/info")
// const User = require("./models/user")

// ---------------------------------------------------------------------
// Router
const infoRouter = require("./controllers/info")
const sucursalesRouter = require("./controllers/sucursales")

// ---------------------------------------------------------------------
app.use(cors())
app.use(express.json())
// ---------------------------------------------------------------------

app.use("/api", infoRouter)
app.use("/api/sucursales", sucursalesRouter)

// ---------------------------------------------------------------------
// LOGIN
/* app.get("/login", async (req, res) => {
	// const recivedUser = req.body
	// console.log(recivedUser)
	const usersSaved = await User.find({})
	res.json(usersSaved)
}) */

// ---------------------------------------------------------------------
app.use((err, req, res, next) => {
	console.log(err)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`)
})

module.exports = Info
