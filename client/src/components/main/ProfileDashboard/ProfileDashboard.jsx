import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import TrainerProfileList from '../TrainerProfileList/TrainerProfileList'
// import TrainerVideos from '../TrainerVideoList/TrainerVideos'
import TrainerProfileForm from '../../TrainerProfileFrom/TrainerProfileFrom'

class ProfileDashboard extends Component {
  id = 5
  state = {
    users: [
      {
        id:0,
        name: '박원정',
        gym: '스포애니문정점',
        gender: '여성',
        career:'1년~2년',
        dates:[new Date(2019,3,29), new Date(2019,6,20), new Date(2019,6,22), new Date(2019,7,3)],
        bodypart:'목',
        playerSource:'http://media.w3.org/2010/05/sintel/trailer.mp4',
        count:'10',
        set:'3'
        
      }
    ]
  }
  profileCreate = (data) => {
    const { users } = this.state;
    this.setState({
        users: users.concat({ id: this.id++, ...data })
    })
  } 

  profileRemove = (id) => {
    const {users} = this.state;
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
            {/* <TrainerVideos data={users}/> */}
            </Grid.Column>
      </Grid>
    )
  }
}

export default ProfileDashboard;