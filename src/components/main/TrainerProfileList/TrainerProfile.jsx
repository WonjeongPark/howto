import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import './TrainerProfile.css';
import {  } from '../../TrainerProfileFrom/TrainerProfileForm'

class TrainerProfile extends Component {
    render() {
        return (
            <Grid className="trainerprofile">
                <Grid.Column className="trainerprofile-right" width={4}>
                    <img alt="profilePhoto" src="https://avatars2.githubusercontent.com/u/41983574?s=460&v=4"/>
                    <div className="trainer-name">트레이너이름</div>
                    <div className="trainer-gym">트레이너헬스장</div>
                </Grid.Column>
                <Grid.Column className="trainerprofile-left" width={7}>
                    <div>성별 :</div>
                    <div>경력 :</div>
                    <div>가능시간 : (표로보이게?)</div>
                    <div>소개영상 (클릭하면 왼쪽에뜨게)</div>
                    <div>수강생평가(팝업창 ?)</div>
                </Grid.Column>
            </Grid>
        )
    }
}



export default TrainerProfile;