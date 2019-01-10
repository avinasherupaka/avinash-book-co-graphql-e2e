const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross origin requests
app.use(cors());

mongoose.connect('mongodb://localhost:27018/graphql-playlist')
mongoose.connection.once('open', () => {
  console.log('Connected to graphql-playlist database')
})
app.use('/graphql', graphqlHTTP({
schema,
graphiql:true
}));

app.listen(4000, () => {
  console.log('app is up and ready for requests on port 4000')
});
