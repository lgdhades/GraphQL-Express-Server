const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./GraphQLSchema/GraphQLSchema')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000
app.use(cors())

mongoose.connect(process.env.DB_URL)
mongoose.connection.once('open', () => console.log('Connected to database !'))

app.listen(port, () => {
  console.log(`Server connected on port ${port} !`)
})

// root query
app.get('/', (req, res) => {
  res.send('Welcome to GraphQL Express Server !')
})

// GraphQL query
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
)
