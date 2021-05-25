const mongoose = require("mongoose")

const MONGO_DB_URI = process.env
const connectionString = MONGO_DB_URI

mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
