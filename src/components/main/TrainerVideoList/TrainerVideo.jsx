import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

class TrainerVideo extends Component {
  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };
    return (
      <Grid className="trainervideo" style={style}>
                <Grid.Column className="trainervideo-left" width={10}>
                    <div className="videosection">비디오</div>
                </Grid.Column>
                <Grid.Column className="trainervideo-right" width={5}>
                    <div>Name : </div>
                    <div>Gym : </div>
                    <div>운동부위 : </div>
                    <div>권장운동량 : </div>
                    
                </Grid.Column>
            </Grid>
    )
  }
}
export default TrainerVideo
