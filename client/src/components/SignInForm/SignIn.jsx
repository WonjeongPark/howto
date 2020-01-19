import React, {useState} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import howto_logo from '../../howto_logo.png'



// ProfileChange = (e) => {
//   this.setState({
//     [e.target.name]: e.target.value
//   });
// }

const SignIn = () => { 
    const [loginID, setID] = useState('')
    const [loginPW, setPW] = useState('')

   function loginSubmit(e){
      e.preventDefault();
        const data = 
            {
            loginID: loginID,
            loginPW: loginPW,
            }
        console.log(data)
        fetch("/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
        }).then(
            function(res) {
            if (res.status >= 400) {
              throw new Error("Bad response from server");
            }
            return res.json();
        }).then(function(data) {
            console.log(data)    
            if(data === "success"){
              console.log("Thanks for registering");  
            }
        }).catch(function(err) {
            console.log(err)
        });
      }
  return(
  
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='violet' textAlign='center'>
        <Image src={howto_logo} /> Welcome Back!
      </Header>

      <Form size='large' name="login" id="login">
        <Segment stacked>
          {/* <Form.Input fluid icon='user' iconPosition='left' placeholder='ID' name='loginID'/>
          <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password'
            type='password' name='loginPW' /> */}
            <input type="text" placeholder='ID' name='loginID' onChange={(e)=> setID(e.target.value)}/>
            <input type='password' placeholder='Password'  name='loginPW' onChange={(e)=> setPW(e.target.value)} />
          <Button type="submit"  value="submit" onClick={loginSubmit} color='violet' fluid size='large'>
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
}
export default SignIn
