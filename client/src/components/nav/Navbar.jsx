import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'
import howto_logo from '../../howto_logo.png'

class NavBar extends Component {
  
  render() {
    return (
            <Menu inverted color='violet'>
              <Container>
                <Menu.Item header>
                  <img src={howto_logo} alt="logo" style={{marginRight: '0.5em'}}/>
                  Howto
                </Menu.Item>
                {/* <Menu.Item name="Board" /> */}
                {/* <Menu.Item>
                  <Button floated="right" positive inverted content="Create Event" />
                </Menu.Item> */}
                <Menu.Item position="right">
                  <Button basic inverted content="My profile" />
                  <Button basic inverted content="Sign out" style={{marginLeft: '0.5em'}} />
                </Menu.Item>
              </Container>
            </Menu>
    )
  }
}
export default NavBar;