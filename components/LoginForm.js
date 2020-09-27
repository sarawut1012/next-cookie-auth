import React, { Component } from "react";
import { loginUser } from "../lib/auth";
import Route from "next/router";
export default class LoginForm extends Component {
  state = {
    email: "Sincere@april.biz",
    password: "hildegard.org",
    error: "",
    isLoading: false
  };
  handelChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (even) => {
    const { email, password } = this.state;
    this.setState({ error: "",isLoading :true });
    even.preventDefault();
    // console.log(this.state);
    loginUser(email, password)
      .then(() => {
        Route.push("/profile");
      })
      .catch(this.showError);
  };
  showError = (err) => {
    console.log(err);
    const error = (err.response && err.response.data) || err.massage;
    this.setState({ error ,isLoading :false});
  };
  render() {
    const { email, password, error,isLoading } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="email" name="email" value={email} placeholder="email" onChange={this.handelChange} />
          </div>
          <div>
            <input type="password" name="password" value={password} placeholder="password" onChange={this.handelChange} />
          </div>
          <button disabled={isLoading} type="submit">{isLoading ? "Sending" :"Submit" }</button>
          {error && <div>{error}</div>}
        </form>
      </div>
    );
  }
}
