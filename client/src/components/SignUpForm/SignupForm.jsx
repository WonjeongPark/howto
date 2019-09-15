
import React, { Component } from 'react'
import { Button, Grid, Header, Image, Divider, Segment } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
import Postcode from './Postcode'
import howto_logo from '../../howto_logo.png'
import MultipleDatePicker from 'react-multiple-datepicker'
import Counter from './Counter'
import './SignupForm.css';


class SignupForm extends Component {
  state = {
    isModalOpen: false,
    loginID : 'howto1',
    loginPW : 'howto1',
    loginPWCK: 'howto1',
    name: '박원정',
    email:'bnhs1127@gmail.com',
    local:'서울시 송파구 중대로 16',
    gender: '여성',
    gym: '스포애니문정점',
    career:'1년~2년',
    dates: [],
    bodypart: '목',
    playerSource: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
    count: 10,
    Num: 3
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  }

  closeModal = () => {
    this.setState({ isModalOpen: false }); 
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
  PasswordCheck() {
    const { loginPW, loginPWCK } = this.state;
    return loginPW === loginPWCK;
  }
  loginPWCKClassName() {
    const { loginPWCK } = this.state;
    if (loginPWCK) {
      return this.PasswordCheck() ? 'is-valid' : 'is-invalid';
    }
  }
  loginPWCKMessage() {
    const { loginPWCK } = this.state;
  
    if (loginPWCK) {
      if (!this.PasswordCheck()) {
        return (
          <div className="invalid-feedback" style={{ color: "red", fontWeight: "bold" }}>패스워드가 일치하지 않습니다</div>
        );
      }}}

  profileSubmit = (e) => {
    e.preventDefault();
      const data = 
          {
          loginID: this.state.loginID,
          loginPW: this.state.loginPW,
          name: this.state.name,
          email:this.state.email,
          local:this.state.local,
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
    const fontStyle = {
      fontFamily : "",
      fontWeight : "bold",
      fontSize : "20px",
      color : "#6435C9",
      margin : "30px auto"
    }
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 600 }}>
          <Header as='h2' color='violet' textAlign='center'>
            <Image src={howto_logo} /> Welcome to HowTo!
          </Header>
      <form onSubmit={this.profileSubmit} method='post'>
        <Segment stacked>
        <div className="group">
          <input type="text" className="loginID" value={this.state.loginID} onChange={this.ProfileChange}
           name="loginID" required="required"/>
          <span className="highlight"></span><span className="bar"></span>
          <label>아이디</label>
        </div>
        <div className="group">
          <input type="password" value={this.state.loginPW} onChange={this.ProfileChange}
          name="loginPW" required="required"/>
          <span className="highlight"></span><span className="bar"></span>
          <label>비밀번호</label>
        </div>
        <div className="group">
          <input type="password" value={this.state.loginPWCK} onChange={this.ProfileChange}
          className={`CheckForm ${this.loginPWCKClassName()}`} name="loginPWCK" required="required"/>
          <span className="highlight"></span><span className="bar"></span>
          <label>비밀번호체크</label>
        </div>
        {this.loginPWCKMessage()}
        <div className="group">
          <input type="text" className="name" value={this.state.name} onChange={this.ProfileChange}
           name="name" required="required"/>
          <span className="highlight"></span><span className="bar"></span>
          <label>이름</label>
        </div>
        <select name="gender" required="required" value={this.state.gender} onChange={this.ProfileChange}>
            <option value="">성별</option>
            <option value="여성">여성</option>
            <option value="남성">남성</option>
        </select>
        <div className="group">
          <input type="text" className="email" value={this.state.email} onChange={this.ProfileChange}
           name="email" required="required"/>
          <span className="highlight"></span><span className="bar"></span>
          <label>Email</label>
        </div>
        <div className="group">
        <input type="text" className="local" onClick={this.openModal} placeholder="주소입력" value={this.state.local} readOnly/>
        <Postcode localname="local" required="required" onChangePost={this.counterChange}
        isOpen={this.state.isModalOpen} close={this.closeModal}/>
        </div>
        <div className="group">
          <input type="text" value={this.state.gym} onChange={this.ProfileChange}
           name="gym" required="required"/>
          <span className="highlight"></span><span className="bar"></span>
          <label>헬스장이름-지점</label>
        </div>
        <select name="career" required="required" value={this.state.career} onChange={this.ProfileChange}>
            <option value="">지도경력</option>
            <option value="~1년">1년미만</option>
            <option value="1년~2년">1년~2년</option>
            <option value="2년~3년">2년~3년</option>
            <option value="3년~4년">3년~4년</option>
            <option value="4년~5년">4년~5년</option>
            <option value="5년이상">5년~</option>
        </select>
        <Divider/>
        <div style={fontStyle}>PT가능날짜</div>
        <div className="group" ><MultipleDatePicker  onSubmit={this.dateChange} minDate={new Date()}/></div>
        <Divider/>
        <div className="group">
          <input type="text" value={this.state.playerSource} onChange={this.ProfileChange}
          ref="playerSource" name="playerSource" id="playerSource"
           required="required"/>
          <span className="highlight"></span><span className="bar"></span>
          <label>동영상URL</label>
        </div>
        <div>http://media.w3.org/2010/05/bunny/trailer.mp4</div>
        <div className="body" value={this.state.bodypart} onChange={this.ProfileChange} > <div style={fontStyle}>주요운동부위</div>
        <input type="checkbox" name="bodypart" value="등"/>등
        <input type="checkbox" name="bodypart" value="복부"/>복부
        <input type="checkbox" name="bodypart" value="목"/>목
        <input type="checkbox" name="bodypart" value="팔"/>팔
        <input type="checkbox" name="bodypart" value="엉덩이"/>엉덩이
        <input type="checkbox" name="bodypart" value="허벅지"/>허벅지
        <input type="checkbox" name="bodypart" value="종아리"/>종아리
        </div>
        <Counter countname="count" countvalue={this.state.count} onChangeCounter={this.counterChange}
         setname="setNum"  setvalue={this.state.Num} required="required"/>

        <Button className="submitBtn" type="submit"
        color='violet' fluid size='large'>등록</Button>
        </Segment>
      </form>
        </Grid.Column>
      </Grid>
    );
  }
}


export default SignupForm;