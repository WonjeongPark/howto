import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import './App.css';
import ProfileDashboard from '../main/ProfileDashboard/ProfileDashboard'
import NavBar from '../nav/NavBar/NavBar'



class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Container className="main">
          <ProfileDashboard/>
        </Container>
      </div>
      
    );
  }
}

export default App;
