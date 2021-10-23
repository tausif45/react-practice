import React, { useState, lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedRoute from './component/route/protectedRoute';
import Unauthorized from './component/route/unathorized';
const Home = lazy(() => import('./component/home'));
const Dashboard = lazy(() => import('./component/dashboard'));


function App() {

  const [user, setUser] = useState(false)

  const handleLogin = (e:any) => {
    setUser(true)
  }

  const handleLogout = (e:any) => {
    e.preventDefault();
    setUser(false);
  } 
  

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path='/'  render={
            props => <Home {...props} user={user.toString()} 
            handleLogin={handleLogin} />} />
          <ProtectedRoute exact path='/dashboard' user={user} handleLogout={handleLogout} component={Dashboard} />
          <Route exact path='/unauthorized' component={Unauthorized} />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;