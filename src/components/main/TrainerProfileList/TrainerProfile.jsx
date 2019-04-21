import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react'
import './TrainerProfile.css';

class TrainerProfile extends Component {
    static defaultProps = {
        info: {
          name: '이름',
          gym: '헬스장',
          gender:'',
          career:'',
          dates:[],
          id: 0
        } 
      }
      
      constructor() {
        super();
        this.state = {
          showPopup: false
        };
      }

      togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
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
        
        const dates = [...this.props.info.dates];
        // console.log(dates);
        const datesformat = dates.toLocaleString("ko-KR",
        { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).replace(/,/g, '\n');
        // 문자열? Date?
        const {
            name, gym, gender, career,  id
          } = this.props.info;

        return (
          
            <Grid className="trainerprofile" style={style}>
                <Grid.Column className="trainerprofile-left" width={5}>
                    <img alt="profilePhoto" src="https://randomuser.me/api/portraits/women/42.jpg"/>
                    <div className="trainer-name">{name}</div>
                    <div className="trainer-gym">{gym}</div>
                </Grid.Column>
                <Grid.Column className="trainerprofile-right" width={11}>
                    <div>성별 : {gender}</div>
                    <div>경력 :  {career}</div>
                    <button onClick={this.togglePopup.bind(this)} className="trainerTime" >가능날짜 보기</button>
                    {this.state.showPopup ? 
                        <Popup  text={datesformat} closePopup={this.togglePopup.bind(this)}
                        />
                        : null
                    }
                    <div>오른쪽에서 운동영상 보기</div>
                    <div>수강생평가 : {id}</div>
                    <Button className="delete" onClick={this.profileRemove}>해당 트레이너 그만보기</Button>
                </Grid.Column>
            </Grid>
        )
    }
}
class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
          {this.props.text.split('\n').map((item, key) => {
                  return <span key={key}>{item}<br/></span>
                })}
          </div>
        </div>
      );
    }
  }


export default TrainerProfile;