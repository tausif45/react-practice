import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Header } from './shared/common/header';

const Home = (props:any) => {
  return (
    <Fragment>
      <Header/>
      <h1>Landing</h1>
      <p><Link to='/dashboard'>View Dashboard</Link></p>
      <p>Logged in status: {props.user}</p>
      <button onClick={props.handleLogin}>Log In</button>
    </Fragment>
  )
};

export default Home;