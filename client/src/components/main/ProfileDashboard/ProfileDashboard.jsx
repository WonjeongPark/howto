import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import TrainerProfileList from '../TrainerProfileList/TrainerProfileList'
import TrainerVideos from '../TrainerVideoList/TrainerVideos'
import TrainerProfileForm from '../../TrainerProfileFrom/TrainerProfileFrom'

class ProfileDashboard extends Component {
  state = {
    users : []
  };

  componentDidMount() {
     this.callBackendAPI()
      .then(res => {
        this.setState( 
        {users : res}
      )} )
      .catch(err => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch('/users');
    const body = await response.json();
    console.log(body)
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  profileCreate = (data) => {
    const { users } = this.state;
    this.setState({
        users: users.concat({ id: this.id++, ...data })
    })
  } 

  profileRemove = (id) => {
    const { users } = this.state;
    this.setState({
      information: users.filter(info => info.id!== id)
    })
  }

  render() {
    const { users } = this.state;
    
    // console.log(this.state)
    // - dates OK
    return (
      <Grid>
            <Grid.Column width={7}>
            <TrainerProfileForm
            onCreate={this.profileCreate}/>
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