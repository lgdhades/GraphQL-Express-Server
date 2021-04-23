const express = require('express')
const app = express()
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.dvqs8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
)

mongoose.connection.once('open', () => console.log('connected to database'))

app.listen(5000, () => console.log('Now listening for requests on port 5000'))

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
)
