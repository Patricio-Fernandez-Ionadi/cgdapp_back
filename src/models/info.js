const { Schema, model } = require("mongoose")

const infoSchema = new Schema({
	sucursal: String,
	fecha: String,
	factura: String,
	proveedor: String,
	rubro: Number,
	mes: String,
	dia: String,
	neto: String,
	id: String,
	detalle: String,
})

/* infoSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id
		delete returnedObject._id
		delete returnedObject.__v
	},
}) */

const Info = model("informations", infoSchema)

module.exports = Info
