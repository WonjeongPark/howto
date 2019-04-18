import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import TrainerProfiles from '../TrainerProfileList/TrainerProfiles'
import TrainerVideos from '../TrainerVideoList/TrainerVideos'
import TrainerProfileForm from '../../TrainerProfileFrom/TrainerProfileForm'

class ProfileDashboard extends Component {
  id = 2
  state = {
    information: [
      {
        id:0,
        name: '박원정',
        gym: '스포애니문정점',
        gender: '여성',
        career:'1년~2년',
        dates:['2019년 4월 29일 월요일,2019년 4월 30일 화요일']
        
      },
      {
        id:1,
        name: '정수',
        gym: '스포애니대전시청점',
        gender: '남성',
        career:'2년~3년',
        dates:['2019년 4월 29일 월요일,2019년 4월 30일 화요일']
      }
    ]
  }
  profileCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  } 

  profileRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id!== id)
    })
  }

  render() {
    const { information } = this.state;
    // console.log(this.state)
    // - dates OK
    return (
      <Grid>
            <Grid.Column width={8}>
            <TrainerProfileForm
            onCreate={this.profileCreate}/>
            <TrainerProfiles data={information} onRemove={this.profileRemove}/>
            </Grid.Column>
            <Grid.Column width={6}>
            <TrainerVideos/>
            </Grid.Column>
      </Grid>
    )
  }
}

export default ProfileDashboard;
