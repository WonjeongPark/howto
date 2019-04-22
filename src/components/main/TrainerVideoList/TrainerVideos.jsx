import React, { Component } from 'react'
import TrainerVideo from './TrainerVideo'

class TrainerVideos extends Component {

  render() {
    const style = {
      height: '500px',
      overflow: 'scroll'
      
    }
    return (
      <div style={style}>
        <TrainerVideo />
        <TrainerVideo />
        <TrainerVideo />
        <TrainerVideo />
        <TrainerVideo />
      </div>
    )
  }
}
export default TrainerVideos;