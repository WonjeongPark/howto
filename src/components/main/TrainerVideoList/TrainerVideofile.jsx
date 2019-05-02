import React from 'react'
import "../../../../node_modules/video-react/dist/video-react.css";
import { Player, ControlBar } from 'video-react';



export default props => {
  return (
    <Player playsInline fluid={false} width={350} height={197}>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
      <ControlBar>
          
      </ControlBar>
    </Player>
  );
};