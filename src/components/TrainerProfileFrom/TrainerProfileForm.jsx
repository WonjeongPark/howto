import React, { Component } from 'react'



class TrainerProfileForm extends Component {
  state = {
    name: '',
    gym: '',
    gender: ''
  }
  ProfileChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  profileSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: '',
      gym: '',
      gender: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.profileSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.ProfileChange}
          name="name"
        />
        <input
          placeholder="헬스장이름"
          value={this.state.gym}
          onChange={this.ProfileChange}
          name="gym"
        />
        <select name="gender" value={this.state.value} onChange={this.ProfileChange}>
            <option value="여성">여성</option>
            <option value="남성">남성</option>
        </select>
        
        <button type="submit">등록</button>
      </form>
    );
  }
}


export default TrainerProfileForm;

