import React, { Component } from "react";
import { getUserProfile } from "../lib/auth";
import Layout from "../components/Layout";

import {authInitialProps} from '../lib/auth'
export default class profile extends Component {
  state = {
    user: null,
  };
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    getUserProfile().then((user) => this.setState({ user }));
  }
  render() {
    const { user } = this.state;
    return (
      <div>
        <Layout title="Profile" {...this.props}>
          <pre>
          {JSON.stringify(user, null, 2)}
            </pre></Layout>
      </div>
    );
  }
}
profile.getInitialProps = authInitialProps(true)