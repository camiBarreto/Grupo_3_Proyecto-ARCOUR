import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import { Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import Users from './views/Users'
import Admins from './views/Admins'
import Flight from './views/Flight'

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <div id="wrapper">
          <SideBar />
          <Switch>
            <Route path='/' exact={true}>
              <ContentWrapper/>
            </Route>

            <Route path='/usuarios'>
              <Users/>
            </Route>

            <Route path='/administradores'>
              <Admins/>
            </Route>

            <Route path='/vuelos'>
              <Flight/>
            </Route>
            
          </Switch>
        </div> 
        
      </React.Fragment>
    );
  }
}

export default App;
