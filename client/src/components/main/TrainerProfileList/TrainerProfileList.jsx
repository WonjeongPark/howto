import React, { Component } from 'react';
import TrainerProfile from './TrainerProfile'

class TrainerProfileList extends Component {
    static defaultProps = {
        data: [],
        onRemove: () => console.warn('onRemove not defined')
      }

    render() {
    const { data, onRemove } = this.props;
    const list = data.map(
      info => (
      <TrainerProfile
       key={info[0].id}
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

export default TrainerProfileList;