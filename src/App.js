import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import Agreements from './Agreements.js';
import Logout from './Logout.js';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import history from './history';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Logout history={history} />
          </header>
				  <Route path="/login" component={Login}/>
          <PrivateRoute path='/agreements' component={Agreements} />
          <Route exact path="/" render={() => (
              <Redirect to="/agreements"/>
          )}/>
        </div>
      </Router>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('authenticationToken') != null
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

export default App;
