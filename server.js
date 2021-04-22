const express = require('express')
const app = express()
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema')

app.listen(5000, () => console.log('Now listening for requests on port 5000'))

app.use('/graphql', graphqlHTTP({
	schema: schema,
	graphiql: true
}))

