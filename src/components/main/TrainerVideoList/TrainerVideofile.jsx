import React, { Component } from 'react';
import "../../../../node_modules/video-react/dist/video-react.css"
import { Player, ControlBar, PosterImage  } from 'video-react';



class TrainerVideofile extends Component {
  render() {
    return (
    <Player playsInline fluid={false} width={350} height={197} >
      <PosterImage poster="" />
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
      <ControlBar autoHide={true} className="my-class" />
    </Player>
  )};
};
export default TrainerVideofile;