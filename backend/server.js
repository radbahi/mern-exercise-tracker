const express = require("express"); // needed for backend
const cors = require("cors"); // needed for backend
const mongoose = require("mongoose"); // connects to mongoDB database

require("dotenv").config(); // used for environment variables for dotenv file

const app = express(); // needed for express server
const port = process.env.PORT || 5000; // needed for express server

app.use(cors()); // cors middleware
app.use(express.json()); // allows us to parse json

const uri = process.env.ATLAS_URI; // this is defined to get value from ATLAS_URI env variable. it is put as an argument in mongoose.connect to establish the connection
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}); // useNewUrlParser: true, useCreateIndex: true, and useUnifiedTopology: true must ALWAYS be added
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  // this is what actually starts the server
  console.log(`Server is running on port: ${port}`);
});

// then type 'nodemon server' in terminal to start server
// once this server file is set up, create schema file with mongoose. goto models folder.