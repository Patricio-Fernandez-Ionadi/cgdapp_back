const infoRouter = require("express").Router()

const Info = require("../models/info")

infoRouter.post("/", async (req, res, next) => {
	const info = req.body

	if (!info) {
		return res.status(404).end({ error: "no content Info" })
	}

	const infoToAdd = new Info({
		sucursal: info.sucursal,
		fecha: info.fecha,
		factura: info.factura,
	})

	try {
		const savedInfo = await infoToAdd.save()
		res.json(savedInfo)
	} catch (err) {
		next(err)
	}
})

infoRouter.get("/", async (req, res) => {
	// Info.find({}).then((i) => res.json(i))
	const infoToShow = await Info.find({})
	res.json(infoToShow)
})

infoRouter.delete("/", async (req, res) => {
	// const id = Number(req.params.id)
	const body = req.body
	const id = body._id
	await Info.findByIdAndDelete(id)
	res.status(204).end()
})

module.exports = infoRouter
