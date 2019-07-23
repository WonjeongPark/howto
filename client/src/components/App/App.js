import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import ProfileDashboard from '../main/ProfileDashboard/ProfileDashboard'
import HomePage from '../Home/Homepage.jsx'

import NavBar from '../nav/NavBar/NavBar'



class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
            render ={()=>(
            <div>
              <NavBar/>
              <Container className="main">
                <Switch>
                  <Route path="/TrainerEvent" component={ProfileDashboard} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    )}
        }
      

export default App;