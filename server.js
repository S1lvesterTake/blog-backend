/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const graphqlSchema = require('./src/graphql/schema');
const resolvers = require('./src/graphql/resolver');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: resolvers,
    graphiql: true,
  })
);

const uri =
  'mongodb+srv://silve:YXphFbHupQhLwfpA@dev.399zm.mongodb.net/blog-app?retryWrites=true&w=majority';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(uri, options)
  .then(() => app.listen(3000, console.log('Server is running in port :3000')))
  .catch((error) => {
    throw error;
  });
