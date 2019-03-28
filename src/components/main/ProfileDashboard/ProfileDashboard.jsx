import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import TrainerProfiles from '../TrainerProfileList/TrainerProfiles'
import TrainerVideos from '../TrainerVideos'

class ProfileDashboard extends Component {
  render() {
    return (
      <Grid>
            <Grid.Column width={8}>
            <TrainerProfiles/>
            </Grid.Column>
            <Grid.Column width={4}>
            <TrainerVideos/>
            </Grid.Column>
      </Grid>
    )
  }
}

export default ProfileDashboard;
