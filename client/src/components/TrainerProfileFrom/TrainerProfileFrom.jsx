import React, { Component } from 'react'
import MultipleDatePicker from 'react-multiple-datepicker'
// import { Button } from 'semantic-ui-react'
import Counter from './Counter'

class TrainerProfileForm extends Component {
  
  state = {
    name: '',
    gym: '',
    gender: '',
    career:'',
    dates: [],
    bodypart: '',
    playerSource: '',
    count: 10,
    Num: 3
  }
  ProfileChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  counterChange = (countername, counter) => {
    this.setState({
      [countername]: counter
    });
  }
  dateChange = dates => {
    const datesformat= dates.map(dates => dates.toISOString())
    this.setState({ dates: datesformat });
  }

  profileSubmit = (e) => {
    e.preventDefault();
      const data = 
          { 
          name: this.state.name,
          gym: this.state.gym,
          gender: this.state.gender,
          career:this.state.career,
          bodypart: this.state.bodypart,
          playerSource:this.state.playerSource,
          count:this.state.count,
          Num:this.state.Num,
          dates: this.state.dates
          } 
      console.log(data)
      
      fetch("/users", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
      }).then(
          function(res) {
          if (res.status >= 400) {
            throw new Error("Bad response from server");
          }
          return res.json();
      }).then(function(data) {
          console.log(data)    
          if(data === "success"){
            console.log("Thanks for registering");  
          }
      }).catch(function(err) {
          console.log(err)
      });
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
        <MultipleDatePicker onSubmit={this.dateChange} minDate={new Date()} required="required"/>
        
        <div>
        동영상URL : 
        <input type= "text" ref="playerSource" name="playerSource" id="playerSource"
        value={this.state.value} onChange={this.ProfileChange} required="required"
        placeholder="http://media.w3.org/2010/05/bunny/trailer.mp4"
        />
        <div>http://media.w3.org/2010/05/bunny/trailer.mp4</div>

        <div className="body" value={this.state.value} onChange={this.ProfileChange} >주요운동부위
        <input type="radio" name="bodypart" value="등" required />등
        <input type="radio" name="bodypart" value="복부"/>복부
        <input type="radio" name="bodypart" value="목"/>목
        <input type="radio" name="bodypart" value="팔"/>팔
        <input type="radio" name="bodypart" value="엉덩이"/>엉덩이
        <input type="radio" name="bodypart" value="허벅지"/>허벅지
        <input type="radio" name="bodypart" value="종아리"/>종아리
        </div>
        <Counter countname="count" countvalue={this.state.value} onChangeCounter={this.counterChange}
         setname="setNum"  setvalue={this.state.value} required="required"/>
        </div>
        <button type="submit">등록</button>
      </form>
    );
  }
}


export default TrainerProfileForm;