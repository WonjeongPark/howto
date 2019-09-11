import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Homepage.css'
import {Container, Header, Image, Button, Icon, Responsive, Visibility, Segment, Menu} from 'semantic-ui-react'
import howto_logo from '../../howto_logo.png'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const HomepageHeading = ({ mobile }) => (
  <Container style={{backgroundColor : 'white'}}>
      <Image src={howto_logo}
            size='small'
            verticalAlign='middle'
            style={{
              marginTop: mobile ? '3em' : '5em',
              
            }} />
        <div>Find your Trainer!</div>
    
        <Container text>
          <Header
            as='h1'
            content='Welcome To HowTo'
            inverted
            color='violet'
            style={{
              fontSize: mobile ? '2em' : '4em',
              fontWeight: 'bold',
              marginBottom: 0,
              marginTop: mobile ? '0.5em' : '1em',
            }}
          />
          <Header
            as='h2'
            content='나에게 맞는 트레이너 찾기'
            inverted
            color='violet'
            style={{
              fontSize: mobile ? '1.5em' : '1.7em',
              fontWeight: 'bold',
              marginTop: mobile ? '0.5em' : '1.5em',
            }}
          />
          <Button as={Link} to='/SignIn' color='violet' size='huge' style={{margin: '1em'}} >
            트레이너 찾기
            <Icon name='right arrow' />
          </Button>
      </Container>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}


class hompage extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            color='violet'
            inverted
            textAlign='center'
            style={{ minHeight: 1000, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as={Link} to='/SignIn' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as={Link} to='/SignUp' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

hompage.propTypes = {
  children: PropTypes.node,
}

export default hompage;
