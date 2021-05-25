const sucursalesRouter = require("express").Router()
const Info = require("../models/info")

sucursalesRouter.get("/", async (req, res) => {
	const data = await Info.find({})

	let allIds = []
	let sucursalesToReturn = []

	data.map((each) => {
		if (!allIds.includes(each.sucursal)) {
			allIds.push(each.sucursal)
		}
	})

	for (let e in allIds) {
		let sucursalName = ""
		let sucId = allIds[e]
		switch (sucId) {
			case "CC0101":
				sucursalName = "Mercado Central"
				break
			case "CC0201":
				sucursalName = "Posadas"
				break
			case "CC0301":
				sucursalName = "Trelew"
				break
			case "CC0401":
				sucursalName = "Isidro Casanova"
				break
			case "CC0501":
				sucursalName = "San Martin"
				break
			case "CC0701":
				sucursalName = "Barracas"
				break
			case "CC0901":
				sucursalName = "Neuquen"
				break
			case "CC1001":
				sucursalName = "Junin"
				break
			case "CC1101":
				sucursalName = "Bahia Blanca"
				break
			case "CC1201":
				sucursalName = "La Rioja"
				break
			case "CC1301":
				sucursalName = "Pilar"
				break
			case "CC1501":
				sucursalName = "Berazategui"
				break
			case "CC1601":
				sucursalName = "Corrientes"
				break
			case "CC1801":
				sucursalName = "Pergamino"
				break
			case "CC1901":
				sucursalName = "Esquel"
				break
			case "CC2001":
				sucursalName = "Santa Rosa"
				break
			case "CC2101":
				sucursalName = "Comodoro Rivadavia"
				break
			case "CC2201":
				sucursalName = "9 de Julio"
				break
			case "CC2301":
				sucursalName = "Bariloche"
				break
			case "CC2401":
				sucursalName = "Lanus"
				break
			case "CC2501":
				sucursalName = "Pinamar"
				break
			case "CC2601":
				sucursalName = "Salta"
				break
			case "CC2701":
				sucursalName = "Villa Mercedes"
				break
			case "CC2801":
				sucursalName = "Zapala"
				break
			case "CC2901":
				sucursalName = "Moron"
				break
			case "CC3001":
				sucursalName = "Rio Gallegos"
				break
			case "CC3101":
				sucursalName = "Tandil"
				break
			case "CC3201":
				sucursalName = "Coronel Suarez"
				break
			case "CC3301":
				sucursalName = "Chascomus"
				break
			case "CC3401":
				sucursalName = "Viedma"
				break
			case "CC3501":
				sucursalName = "Concordia"
				break
			case "CC3601":
				sucursalName = "Parana"
				break
			case "CC3701":
				sucursalName = "Rio Grande"
				break
			case "CC3801":
				sucursalName = "Martinez"
				break
			case "CC4101":
				sucursalName = "Centro de Distribucion"
				break
			case "CC4201":
				sucursalName = "Caleta Olivia"
				break
			case "CC4301":
				sucursalName = "Roque Saenz Peña"
				break
			case "CC4401":
				sucursalName = "Calafate"
				break
			case "CC4501":
				sucursalName = "Santiago del Estero"
				break
			case "CC4601":
				sucursalName = "Cutral Co"
				break
			case "CC4701":
				sucursalName = "San Rafael"
				break
			case "CC4801":
				sucursalName = "Ushuaia"
				break
			case "CC4901":
				sucursalName = "Trenque Lauquen"
				break
			case "CC6201":
				sucursalName = "Tres Arroyos"
				break
			case "CC6401":
				sucursalName = "General Pico"
				break
			case "CC6601":
				sucursalName = "Lujan"
				break
			case "CC6701":
				sucursalName = "Piedrabuena"
				break
			case "CC6801":
				sucursalName = "El Bolson"
				break
			case "CC6901":
				sucursalName = "Venado Tuerto"
				break
			case "CC7001":
				sucursalName = "Pico Truncado"
				break
			case "CC9401":
				sucursalName = "Locales Pilar"
				break
			case "CC9601":
				sucursalName = "Ciudad Pyme"
				break
			case "CC00S10":
				sucursalName = "Administracion central ADM"
				break
			default:
				sucursalName = ""
		}
		sucursalesToReturn.push({ sucursal: sucursalName, sucursalID: sucId })
	}

	res.status(200).json(sucursalesToReturn).end()
})

sucursalesRouter.get("/:id", async (req, res) => {
	const { id } = req.params
	const result = await Info.find({ sucursal: id })
	res.json(result)
})

sucursalesRouter.get("/:id/F/:_id", async (req, res) => {
	const param = req.params._id
	const [data] = await Info.find({ _id: param })
	res.json(data)
})

sucursalesRouter.get("/:id/PR/:proveedor", async (req, res) => {
	const { proveedor, id } = req.params
	const response = await Info.find({ sucursal: id, proveedor: proveedor })
	res.json(response)
})

module.exports = sucursalesRouter
