import React, { Component } from 'react'
import MultipleDatePicker from 'react-multiple-datepicker'


class TrainerProfileForm extends Component {
  state = {
    name: '',
    gym: '',
    gender: '',
    career:''
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
      gender: '',
      career:''
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
        <select name="career" value={this.state.value} onChange={this.ProfileChange}>
            <option value="~1년">1년미만</option>
            <option value="1년~2년">1년~2년</option>
            <option value="2년~3년">2년~3년</option>
            <option value="3년~4년">3년~4년</option>
            <option value="4년~5년">4년~5년</option>
            <option value="5년이상">5년~</option>
        </select>
        <MultipleDatePicker
          onSubmit={dates => console.log('selected date', dates)}
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}


export default TrainerProfileForm;

