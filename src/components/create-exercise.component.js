import React, { Component } from "react";
import DatePicker from "react-datepicker"; // calendar library
import "react-datepicker/dist/react-datepicker.css"; // this imports the styling of the datepicker
import axios from "axios";

export default class CreateExercise extends Component {
  constructor(props) {
    // oh GOD remember to do these components the more modern way. take a look at mod 4 project.
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    // remember to replace this with hooks. hardcoded user for testing purposes.
    axios.get("http://localhost:5000/users").then((res) => {
      if (res.data.length > 0) {
        this.setState({
          users: res.data.map((user) => user.username),
          username: res.data[0].username, // sets it to be the first user in the user database
        });
      }
    });
  }

  onChangeUsername(e) {
    // remember to replace this with hooks
    this.setState({
      username: e.target.value,
    });
  }

  onChangeDescription(e) {
    // remember to replace this with hooks
    this.setState({
      description: e.target.value,
    });
  }

  onChangeDuration(e) {
    // remember to replace this with hooks
    this.setState({
      duration: e.target.value,
    });
  }

  onChangeDate(date) {
    // remember to replace this with hooks
    this.setState({
      date: date, // going to be using a library to make a calendar appear for this
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    console.log(exercise);

    axios
      .post("http://localhost:3000/exercises/add", exercise) // library for doing fetches
      .then((res) => console.log(res.data));

    window.location = "/"; // takes user back to this url after submission
  }

  render() {
    return (
      // HTML FORM
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function (user) {
                // find out why function (user) is a thing here. don't remember that being necessary.
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            ></input>
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            ></input>
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker // from react-datepicker library
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
