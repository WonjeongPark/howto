import React, { Component } from 'react';
import TrainerProfile from './TrainerProfile'

class TrainerProfiles extends Component {
    static defaultProps = {
        list: [],
        onRemove: () => console.warn('onRemove not defined')
      }

    render() {
       const { data, onRemove } = this.props;
    const list = data.map(
      info => (
      <TrainerProfile
       key={info.id}
       info={info}
       onRemove={onRemove}
       />)
    );

    return (
      <div>
        {list}    
      </div>
    );
  }
}

export default TrainerProfiles;