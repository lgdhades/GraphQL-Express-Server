const mongoose = require('mongoose')
const MongoDBSchema = mongoose.Schema

const authorSchema = new MongoDBSchema({
	name: String,
	age: Number,
})

module.exports = mongoose.model('Author', authorSchema)