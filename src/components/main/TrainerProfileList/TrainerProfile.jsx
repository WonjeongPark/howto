import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import './TrainerProfile.css';

class TrainerProfile extends Component {
    static defaultProps = {
        info: {
          name: '이름',
          gym: '헬스장이름',
          gender:'',
          id: 0
        }
      }

    profileRemove = () =>{
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
          };

        const {
            name, gym, gender, id
          } = this.props.info;
        
        return (
            <Grid className="trainerprofile" style={style}>
                <Grid.Column className="trainerprofile-left" width={5}>
                    <img alt="profilePhoto" src="https://randomuser.me/api/portraits/women/42.jpg"/>
                    <div className="trainer-name">{name}</div>
                    <div className="trainer-gym">{gym}</div>
                </Grid.Column>
                <Grid.Column className="trainerprofile-right" width={7}>
                    <div>성별 : {gender}</div>
                    <div>경력 :  </div>
                    <div>가능시간 보기(캘린더? 효율적인것 생각)</div>
                    <div>운동영상 모두보기</div>
                    <div>수강생평가(팝업창 ?)</div>
                    <button onClick={this.profileRemove}>삭제</button>
                </Grid.Column>
            </Grid>
        )
    }
}



export default TrainerProfile;