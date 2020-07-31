const mongoose = require("mongoose"); // use mongoose to get schema function

const Schema = mongoose.Schema; // define schema function here

const userSchema = new Schema(
  {
    // and the schema. remember how you did it in rails. pretty much the same thing.
    username: { // attribute name
      type: String, // String type
      required: true, // username must be provided
      unique: true, // username must not match with any other in the database
      trim: true, // trim gets rid of whitespaces at the end
      minlength: 3, // minimum number of characters
    },
  },
  {
    timestamps: true, // auto creates fields for when this was modified
  }
);

const User = mongoose.model('User', userSchema) // this uses mongoose to define it as a schema model

module.exports = User // export it when we call for this file

// once all schema models are done, work on crud. goto routes folder