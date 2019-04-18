import React, { Component } from 'react'
import MultipleDatePicker from 'react-multiple-datepicker'


class TrainerProfileForm extends Component {
  state = {
    name: '',
    gym: '',
    gender: '',
    career:'',
    dates: []
  }
  ProfileChange = (e) => {
    // console.log(e);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  dateChange = dates => {
    // dates = JSON.stringify(dates)
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dates = dates.toLocaleString('ko-KR', options)
    this.setState({ dates: [...dates] });
    console.log(this.state)
  }
  //dateChange -> ProfileChange로 refactoring?


  profileSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: '',
      gym: '',
      gender: '',
      career:'',
      dates: []
    })
    // console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.profileSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.ProfileChange}
          name="name" required="required"
        />
        <input
          placeholder="헬스장이름 지점"
          value={this.state.gym}
          onChange={this.ProfileChange}
          name="gym" required="required"
        />
        <select name="gender" required="required" value={this.state.value} onChange={this.ProfileChange}>
            <option value="">성별</option>
            <option value="여성">여성</option>
            <option value="남성">남성</option>
        </select>
        <select name="career" required="required" value={this.state.value} onChange={this.ProfileChange}>
            <option value="">지도경력</option>
            <option value="~1년">1년미만</option>
            <option value="1년~2년">1년~2년</option>
            <option value="2년~3년">2년~3년</option>
            <option value="3년~4년">3년~4년</option>
            <option value="4년~5년">4년~5년</option>
            <option value="5년이상">5년~</option>
        </select>
        <MultipleDatePicker key="" onSubmit={this.dateChange} minDate={new Date()} />
        <button type="submit">등록</button>
      </form>
    );
  }
}


export default TrainerProfileForm;

