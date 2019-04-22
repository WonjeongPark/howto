import React, { Component } from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import './TrainerVideo.css';
import TrainerVideofile from './TrainerVideofile'


class TrainerVideo extends Component {
  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };
    const videoSectionStyle = {
      border: '1px solid black',
      width: '350px',
      height: '197px'
    }
    return (
      <Grid className="trainervideo" style={style}>
                <Grid.Column className="trainervideo-left" width={10}>
                    {/* <TrainerVideofile/> */}
                    <div className="videoSection" style={videoSectionStyle}>TrainerVideofile</div>
                </Grid.Column>
                <Grid.Column className="trainervideo-right" width={5}>
                    <div>Name : </div>
                    <div>Gym : </div>
                    <div>운동부위 : </div>
                    <div>권장운동량 : </div>
                    <div><Icon name="heart outline" size="large"/>
                    <Icon name="comments outline" size="large"/>
                    <Icon name="external alternate"size="large" /></div>
                    
                </Grid.Column>
            </Grid>
    )
  }
}
export default TrainerVideo
