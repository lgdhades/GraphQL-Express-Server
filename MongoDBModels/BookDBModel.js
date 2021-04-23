const mongoose = require('mongoose')
const MongoDBSchema = mongoose.Schema

const bookSchema = new MongoDBSchema({
	name: String,
	genre: String,
	authorId: String
})

module.exports = mongoose.model('Book', bookSchema)