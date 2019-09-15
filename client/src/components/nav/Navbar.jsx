import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import howto_logo from '../../howto_logo.png'

class NavBar extends Component {
  
  render() {
    return (
            <Menu inverted color='violet'>
              <Container>
                <Link to='/'>
                <Menu.Item header >
                  <img src={howto_logo} alt="logo" style={{marginRight: '0.5em'}}/>
                  Howto
                </Menu.Item>
                </Link>
                {/* <Menu.Item name="Board" /> */}
                {/* <Menu.Item>
                  <Button floated="right" positive inverted content="Create Event" />
                </Menu.Item> */}
                <Menu.Item position="right">
                  <Button basic inverted content="My Profile" />
                  <Button basic inverted content="SignOut" style={{marginLeft: '0.5em'}} />
                </Menu.Item>
              </Container>
            </Menu>
    )
  }
}
export default NavBar;