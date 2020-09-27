import React, { Component } from 'react'
import LoginForm from '../components/LoginForm'
import Layout from '../components/Layout';
import {authInitialProps} from '../lib/auth'
export default class login extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Layout title="Login" {...this.props}>
                    <LoginForm/>
                </Layout>
            </div>
        )
    }
}

login.getInitialProps = authInitialProps();
