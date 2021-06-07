const infoRouter = require("express").Router()

const Info = require("../models/info")

infoRouter.post("/", (req, res, next) => {
	const info = req.body

	if (!info) {
		return res.status(404).end({ error: "no content Info" })
	}

	const infoToAdd = new Info({
		sucursal: info.sucursal,
		fecha: info.fecha,
		factura: info.factura,
		dia: info.dia,
		neto: info.neto,
		id: info.id,
		mes: info.mes,
		proveedor: info.proveedor,
		detalle: info.detalle,
		rubro: info.rubro,
		apertura: info.apertura || null,
	})

	infoToAdd
		.save()
		.then((savedInfo) => res.json(savedInfo))
		.catch(next)
})

infoRouter.get("/", (req, res, next) => {
	Info.find({})
		.then((i) => res.json(i))
		.catch(next)
})

infoRouter.delete("/deleteInformation", (req, res, next) => {
	const body = req.body
	const id = body._id
	Info.findByIdAndDelete(id)
		.then(() => res.status(204).end())
		.catch(next)
})

module.exports = infoRouter
