import React, { Component } from 'react';
import './TrainerProfile.css';

class TrainerProfile extends Component {
    render() {
        return (
            <div>
                <TrainerPhoto />
                <h1>Hello this is Trainer Profile</h1>
            </div>
        )
    }
}



class TrainerPhoto extends Component{
    render (){
        return (
            <div>
            <img alt="profilePhoto" src="https://avatars2.githubusercontent.com/u/41983574?s=460&v=4"/>
            </div>
        )
    }
}


export default TrainerProfile;