import React, { Fragment } from 'react';
import { Header } from './shared/common/header';

const Dashboard = (props: any) => {
  return (
    <Fragment>
      {Header()}
      <h1>Dashboard</h1>
      <p>Secret Page</p>
      <button onClick={props.handleLogout}>Log Out</button>
    </Fragment>
  )
};

export default Dashboard;