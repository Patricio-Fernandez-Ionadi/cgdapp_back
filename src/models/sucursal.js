const { Schema, model } = require("mongoose")

const sucursalSchema = new Schema({
	sucursalID: String,
})

const Sucursal = model("sucursales", sucursalSchema)

module.exports = Sucursal
