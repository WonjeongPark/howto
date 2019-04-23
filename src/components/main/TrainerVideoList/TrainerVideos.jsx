
import React, { Component } from 'react';
import TrainerVideo from './TrainerVideo'

class TrainerVideos extends Component {
    static defaultProps = {
        data: []
      }

    render() {
    const { data} = this.props;
    const list = data.map(
      info => (
      <TrainerVideo
       key={info.id}
       info={info}
       />)
    );

    return (
      <div>
        {list}    
      </div>
    );
  }
}

export default TrainerVideos;