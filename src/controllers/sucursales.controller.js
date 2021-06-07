const sucursalesRouter = require("express").Router()
const Info = require("../models/info")
const sucursalesById = require("../helpers/sucursalesByIdSuc")

sucursalesRouter.get("/", (req, res) => {
	res.status(200).json(sucursalesById).end()
})

sucursalesRouter.get("/:id", async (req, res, next) => {
	const { id } = req.params
	Info.find({ sucursal: id })
		.then((result) => res.json(result))
		.catch(next)
})

sucursalesRouter.get("/:id/F/:_id", (req, res, next) => {
	const param = req.params._id
	Info.find({ _id: param })
		.then((data) => res.json([data]))
		.catch(next)
})

sucursalesRouter.get("/:id/PR/:proveedor", (req, res, next) => {
	const { proveedor, id } = req.params
	Info.find({ sucursal: id, proveedor: proveedor })
		.then((response) => res.json(response))
		.catch(next)
})

module.exports = sucursalesRouter
