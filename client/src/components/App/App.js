import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'
import ProfileDashboard from '../main/ProfileDashboard/ProfileDashboard'
import HomePage from '../Home/Homepage.jsx'
import NavBar from '../nav/Navbar'
import SignIn from '../SignInForm/SignIn'
import SignUp from '../SignUpForm/SignupForm'

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
                    <Route path="/SignIn" component={SignIn} />
                    <Route path="/SignUp" component={SignUp} />
                    <Route path="/TrainerList" component={ProfileDashboard} />
                  </Switch>
                </Container>
              </div>
            )}
          />
        </div>
    )}
        }
      

export default App;