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
			case "CC0501":
				sucursalName = "San Martin"
				break
			case "CC0701":
				sucursalName = "Barracas"
				break
			case "CC1001":
				sucursalName = "Junin"
				break
			case "CC1101":
				sucursalName = "Bahia Blanca"
				break
			case "CC1301":
				sucursalName = "Pilar"
				break
			case "CC1501":
				sucursalName = "Berazategui"
				break
			case "CC2201":
				sucursalName = "Caleta Olivia"
				break
			case "CC2301":
				sucursalName = "Bariloche"
				break
			case "CC2401":
				sucursalName = "Lanus"
				break
			case "CC3001":
				sucursalName = "Rio Gallegos"
				break
			case "CC3701":
				sucursalName = "Rio Grande"
				break
			case "CC3801":
				sucursalName = "Martinez"
				break
			case "CC6601":
				sucursalName = "Lujan"
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

sucursalesRouter.get("/:id", async (req, res) => {})

module.exports = sucursalesRouter
