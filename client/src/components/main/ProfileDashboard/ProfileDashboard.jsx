import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import TrainerProfileList from '../TrainerProfileList/TrainerProfileList'
import TrainerVideos from '../TrainerVideoList/TrainerVideos'

class ProfileDashboard extends Component {
  state = {
    users : []
  };

  componentDidMount() {
     this.callBackendAPI()
      .then(res => {
        this.setState( 
        {users : [res]}
      )} )
      .catch(err => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch('/users/trainer');
    const body = await response.json();
    console.log(body)
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  profileRemove = (id) => {
    const { users } = this.state;
    this.setState({
      information: users.filter(info => info.id!== id)
    })
  }

  render() {
    const { users } = this.state;
  
    return (
      <Grid>
            <Grid.Column width={7}>
            <TrainerProfileList data={users} onRemove={this.profileRemove}/>
            </Grid.Column>
            <Grid.Column width={9}>
            <TrainerVideos data={users}/>
            </Grid.Column>
      </Grid>
    )
  }
}

export default ProfileDashboard;