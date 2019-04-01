import React, { Component } from 'react'



class TrainerProfileForm extends Component {
  state = {
    name: '',
    gym: ''
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
      gym: ''
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
        <button type="submit">등록</button>
      </form>
    );
  }
}


export default TrainerProfileForm;

