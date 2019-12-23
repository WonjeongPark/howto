import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import './TrainerVideo.css';
import "../../../../node_modules/video-react/dist/video-react.css"
import { Player, ControlBar } from 'video-react';


class TrainerVideo extends Component {
  static defaultProps = {
    info: [{
      name: '이름',
      trainer : {
      gym: '헬스장',
      bodypart:'',
      playerSource: '',
      count: '',
      Num:''
    },
      id: 0
    }]
  }
  render() {
    const style = {
      border: '1px solid black',
      padding: '4px',
      margin: '12px'
    };
    const name = this.props.info[0].name;
    const {
      gym, count, Num, bodypart, playerSource
    } = this.props.info[0].trainer;
    return (
      <Grid className="trainervideo" style={style}>
                <Grid.Column className="trainervideo-left" width={10}>
                    <div className="videoSection" >
                    <Player src={playerSource} playsInline fluid={false} width={350} height={197} >
                      <ControlBar autoHide={true} className="playerSource" />
                    </Player>
                    </div>
                </Grid.Column>
                <Grid.Column className="trainervideo-right" width={6}>
                    <div>Name : {name}</div>
                    <div>Gym : {gym}</div>
                    <div>운동부위 : {bodypart}</div>
                    <div>권장운동량 : {count}회 {Num}set</div>
                    
                    <div className="videoIcons">
                    <Button icon='heart' />
                    <Button icon='envelope' />
                    </div>
                    
                </Grid.Column>
            </Grid>
    )
  }
}
export default TrainerVideo