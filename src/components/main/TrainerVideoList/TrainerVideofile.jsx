import React from 'react';
import "../../../../node_modules/video-react/dist/video-react.css"
import { Player, ControlBar } from 'video-react';



export const TrainerVideofile=(videosrc)=>{
  console.log(videosrc)
    return (
    <Player src='videosrc' playsInline fluid={false} width={350} height={197} >
      <ControlBar autoHide={true} className="my-class" />
    </Player>
  )};
export default TrainerVideofile;