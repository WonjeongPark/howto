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

      <Form size='large' action="/login" method="post" name="frm_login" id="frm_login">
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='ID' name='loginID'/>
          <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password'
            type='password' name='loginPW'
          />

          <Button type="submit"  value="Login" color='violet' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        <Link to ="TrainerForm">New to us? Sign Up > 트레이너 </Link>
      </Message>
      <Message>
        <Link to ="TraineeForm">New to us? Sign Up > 수강생</Link>
      </Message>
    </Grid.Column>
  </Grid>
)
export default SignIn
