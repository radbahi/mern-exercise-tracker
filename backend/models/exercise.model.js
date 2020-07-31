const mongoose = require("mongoose"); // use mongoose to get schema function

const Schema = mongoose.Schema; // define schema function here

const exerciseSchema = new Schema(
  {
    // and the schema. remember how you did it in rails. pretty much the same thing.
    username: { // attribute name
      type: String, // String type
      required: true, // must be provided
    },
    description: { // attribute name
      type: String, // String type
      required: true, // must be provided
    },
    duration: { // attribute name
      type: Number, // Number type
      required: true, // must be provided
    },
    date: { // attribute name
        type: Date, // Date type
        required: true // must be provided
    },
  }, {
    timestamps: true, // auto creates fields for when this was modified
  }
);

const Exercise = mongoose.model('Exercise', exerciseSchema) // this uses mongoose to define it as a schema model

module.exports = Exercise // export it when we call for this file

// once all schema models are done, work on crud. goto routes folder