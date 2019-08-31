import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import howto_logo from '../../howto_logo.png'

const SignIn = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='violet' textAlign='center'>
        <Image src={howto_logo} /> Welcome Back!
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='ID' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button as={Link} to='/TrainerList' color='violet' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        <Link to ="SignUp">New to us? Sign Up</Link>
      </Message>
    </Grid.Column>
  </Grid>
)
export default SignIn
