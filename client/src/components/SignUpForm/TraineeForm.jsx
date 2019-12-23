import React, { Component } from 'react'
import { Button, Grid, Header, Image, Divider, Segment } from 'semantic-ui-react'
import Postcode from './Postcode'
import howto_logo from '../../howto_logo.png'
import Counter from './Counter'
import './TrainerForm.css';


class TrainerForm extends Component {
  state = {
    isModalOpen: false,
    loginID : 'howto2',
    loginPW : 'howto2',
    loginPWCK: 'howto2',
    name: '정수',
    email:'bnhs1127@gmail.com',
    local:'서울시 송파구 중대로 16',
    gender: '남성',
    prg: '개인',
    age:'20대',
    bodytarget: '목',
    purpose: '체형교정',
    week: 10,
    times: 3
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
          gender: this.state.gender,
          prg: this.state.prg,
          age:this.state.age,
          bodytarget: this.state.bodytarget,
          purpose:this.state.purpose,
          week:this.state.week,
          times:this.state.times
          } 
      console.log(data)
      
      fetch("/users/trainee", {
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
        <select name="age" required="required" value={this.state.age} onChange={this.ProfileChange}>
            <option value="">나이대설정</option>
            <option value="10대이하">10대이하</option>
            <option value="20대">20대</option>
            <option value="30대">30대</option>
            <option value="40대">40대</option>
            <option value="50대">50대</option>
            <option value="60대이상">60대이상</option>
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
        <select name="prg" required="required" value={this.state.prg} onChange={this.ProfileChange}>
            <option value="">개인/그룹선택</option>
            <option value="개인">개인</option>
            <option value="그룹">그룹</option>
            <option value="병행">병행</option>
            <option value="상관없음">상관없음</option>
        </select>
        <Divider/>
        <div style={fontStyle}>운동목적</div>
        <div className="group">
          <input type="text" value={this.state.purpose} onChange={this.ProfileChange}
          className="purpose" required="required"/>
          <span className="highlight"></span><span className="bar"></span>
          <label>ex)체형교정,다이어트,굽은어깨 등</label>
        </div>
        <div className="body" value={this.state.bodypart} onChange={this.ProfileChange} >
        <div style={fontStyle}>원하는 집중부위</div>
        <input type="checkbox" name="bodytarget" value="등"/>등
        <input type="checkbox" name="bodytarget" value="복부"/>복부
        <input type="checkbox" name="bodytarget" value="목"/>목
        <input type="checkbox" name="bodytarget" value="팔"/>팔
        <input type="checkbox" name="bodytarget" value="엉덩이"/>엉덩이
        <input type="checkbox" name="bodytarget" value="허벅지"/>허벅지
        <input type="checkbox" name="bodytarget" value="종아리"/>종아리
        </div>
        <div style={fontStyle}>원하는 기간(주/횟수)</div>
        <Counter countname="week" countvalue={this.state.week} onChangeCounter={this.counterChange}
         setname="setNum" setvalue={this.state.times} required="required"/>

        <Button className="submitBtn" type="submit"
        color='violet' fluid size='large'>등록</Button>
        </Segment>
      </form>
        </Grid.Column>
      </Grid>
    );
  }
}


export default TrainerForm;