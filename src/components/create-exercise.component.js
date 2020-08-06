import React, { Component } from "react";
import DatePicker from "react-datepicker"; // calendar library
import "react-datepicker/dist/react-datepicker.css"; // this imports the styling of the datepicker

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
    this.setState({
      users: ["test user"],
      username: "test user",
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

  onChangeDate(e) {
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
        </form>
      </div>
    );
  }
}
