import React, { Component } from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import './TrainerVideo.css';
import TrainerVideofile from './TrainerVideofile'


class TrainerVideo extends Component {
  static defaultProps = {
    info: {
      name: '이름',
      gym: '헬스장',
      bodypart:'',
      playerSource: '',
      count: '',
      set:'',
      id: 0
    } 
  }
  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };
    const {
      name, gym, count, set, bodypart, playerSource, id
    } = this.props.info;
    return (
      <Grid className="trainervideo" style={style}>
                <Grid.Column className="trainervideo-left" width={10}>
                    <div className="videoSection" >
                    <TrainerVideofile videosrc ={playerSource}/>
                    </div>
                </Grid.Column>
                <Grid.Column className="trainervideo-right" width={6}>
                    <div>Name : {name}{id}</div>
                    <div>Gym : {gym}</div>
                    <div>운동부위 : {bodypart}</div>
                    <div>권장운동량 : {count}회 {set}set</div>
                    
                    <div >
                    <Icon className="icon" name="heart outline" size="large"/>
                    <Icon className="icon" name="comments outline" size="large"/>
                    <Icon className="icon" name="share square" size="large" />
                    </div>
                    
                </Grid.Column>
            </Grid>
    )
  }
}
export default TrainerVideo
