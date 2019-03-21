import React, { Component } from 'react';
import './TrainerProfile.css';

class TrainerProfile extends Component {
    render() {
        return (
            <div className="trainerprofile">
                <div className="trainerprofile-right">
                    <img alt="profilePhoto" src="https://avatars2.githubusercontent.com/u/41983574?s=460&v=4"/>
                    <div className="trainer-name">트레이너이름</div>
                    <div className="trainer-gym">트레이너헬스장</div>
                </div>
                <div className="trainerprofile-left">
                
                </div>
            </div>
        )
    }
}



export default TrainerProfile;