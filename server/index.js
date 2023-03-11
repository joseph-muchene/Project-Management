const express = require("express");
require("dotenv").config();
const app = express();
const { graphqlHTTP } = require("express-graphql");
const port = process.env.PORT || 8000;
const Schema = require("../schema/schema");
const connectDb = require("../config/db");

connectDb();

app.use(
  "/graphql",
  graphqlHTTP({
    // schema
    schema: Schema,
    // use graphiql
    graphiql: process.env.NODE__ENV === "development",
    //
  })
);

app.listen(port, () => {
  console.log("server started on port " + port);
});
