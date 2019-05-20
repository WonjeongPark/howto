import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import TrainerProfiles from '../TrainerProfileList/TrainerProfiles'
import TrainerVideos from '../TrainerVideoList/TrainerVideos'
import TrainerProfileForm from '../../TrainerProfileFrom/TrainerProfileForm'

class ProfileDashboard extends Component {
  id = 5
  state = {
    information: [
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
        set:'3',
        
      },
      {
        id:1,
        name: '정수',
        gym: '스포애니대전시청점',
        gender: '남성',
        career:'2년~3년',
        dates:[new Date(2019,4,1), new Date(2019,4,5), new Date(2019,4,8), new Date(2019,4,30), new Date(2019,5,11)],
        bodypart:'등',
        playerSource:'http://www.w3schools.com/html/mov_bbb.mp4',
        count:'12',
        set:'2'
      },
      {
        id:2,
        name: '박예은',
        gym: '스포애니대구점',
        gender: '남성',
        career:'3년~4년',
        dates:[new Date(2019,1,1), new Date(2019,2,5), new Date(2019,3,8), new Date(2019,4,30), new Date(2019,5,11), new Date(2019,11,11)],
        bodypart:'목',
        playerSource:'http://media.w3.org/2010/05/sintel/trailer.mp4',
        count:'12',
        set:'3'
      },
      {
        id:3,
        name: '허재욱',
        gym: '스포애니남양주점',
        gender: '남성',
        career:'1년~2년',
        dates:[new Date(2019,4,1)],
        bodypart:'종아리',
        playerSource:'http://www.w3schools.com/html/mov_bbb.mp4',
        count:'20',
        set:'2'
      },
      {
        id:4,
        name: '김은지',
        gym: '스포애니성주점',
        gender: '여성',
        career:'1년미만',
        dates:[new Date(2019,2,1), new Date(2019,3,1), new Date(2019,4,1), new Date(2019,5,5), new Date(2019,6,8), new Date(2019,7,30), new Date(2019,8,11)],
        bodypart:'엉덩이',
        playerSource:'http://www.w3schools.com/html/mov_bbb.mp4',
        count:'8',
        set:'4'
      },
      {
        id:5,
        name: '박예진',
        gym: '스포애니남양주점',
        gender: '남성',
        career:'1년~2년',
        dates:[new Date(2019,4,1)],
        bodypart:'종아리',
        playerSource:'http://www.w3schools.com/html/mov_bbb.mp4',
        count:'20',
        set:'2'
      },
      {
        id:6,
        name: '이지호',
        gym: '스포애니성주점',
        gender: '여성',
        career:'1년미만',
        dates:[new Date(2019,2,1), new Date(2019,3,1), new Date(2019,4,1), new Date(2019,5,5), new Date(2019,6,8), new Date(2019,7,30), new Date(2019,8,11)],
        bodypart:'엉덩이',
        playerSource:'http://www.w3schools.com/html/mov_bbb.mp4',
        count:'8',
        set:'4'
      },
      {
        id:7,
        name: '박상정',
        gym: '스포애니남양주점',
        gender: '남성',
        career:'1년~2년',
        dates:[new Date(2019,4,1)],
        bodypart:'종아리',
        playerSource:'http://www.w3schools.com/html/mov_bbb.mp4',
        count:'20',
        set:'2'
      },
      {
        id:8,
        name: '이재황',
        gym: '스포애니성주점',
        gender: '여성',
        career:'1년미만',
        dates:[new Date(2019,2,1), new Date(2019,3,1), new Date(2019,4,1), new Date(2019,5,5), new Date(2019,6,8), new Date(2019,7,30), new Date(2019,8,11)],
        bodypart:'엉덩이',
        playerSource:'http://www.w3schools.com/html/mov_bbb.mp4',
        count:'8',
        set:'4'
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
            <Grid.Column width={7}>
            <TrainerProfileForm
            onCreate={this.profileCreate}/>
            <TrainerProfiles data={information} onRemove={this.profileRemove}/>
            </Grid.Column>
            <Grid.Column width={9}>
            <TrainerVideos data={information}/>
            </Grid.Column>
      </Grid>
    )
  }
}

export default ProfileDashboard;
