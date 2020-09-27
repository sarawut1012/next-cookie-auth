import React from 'react'
import Layout from "../components/Layout";
import Link from 'next/link';
import {authInitialProps} from '../lib/auth'
export default function Index(props) {
    return (
        <div>
            <Layout title="Home" {...props}>
              <Link href="/profile">
                  <a> Go to profile</a>
              </Link>
            </Layout>
        </div>
    )
}

Index.getInitialProps = authInitialProps() 
