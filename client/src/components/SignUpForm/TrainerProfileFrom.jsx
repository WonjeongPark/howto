
import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Divider, Segment, Dropdown } from 'semantic-ui-react'
import howto_logo from '../../howto_logo.png'
import MultipleDatePicker from 'react-multiple-datepicker'
import Counter from './Counter'


class TrainerProfileForm extends Component {
  
  state = {
    loginID : '',
    loginPW : '',
    loginPWCK: '',
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
      fontSize : "15px",
      color : "#6435C9"
    }
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='violet' textAlign='center'>
            <Image src={howto_logo} /> Welcome to HowTo!
          </Header>
      <form onSubmit={this.profileSubmit}>
        <Segment stacked>
        <Form.Input
          placeholder="아이디"
          value={this.state.loginID}
          onChange={this.ProfileChange}
          name="loginID" required="required"
        />
        <Form.Input
          placeholder="비밀번호"
          value={this.state.loginPW}
          onChange={this.ProfileChange}
          type="password"
          name="loginPW" required="required"
        /><Form.Input
          placeholder="비밀번호체크"
          value={this.state.loginPWCK}
          onChange={this.ProfileChange}
          className={`${this.loginPWCKClassName()}`}
          type="password"
          name="loginPWCK" required="required"
        />
        {this.loginPWCKMessage()}
        <Form.Input
          placeholder="이름"
          value={this.state.name}
          onChange={this.ProfileChange}
          name="name" required="required"
        />
        <Form.Input
          placeholder="헬스장이름 지점"
          value={this.state.gym}
          onChange={this.ProfileChange}
          name="gym" required="required"
        />
        <Dropdown name="gender" required="required" value={this.state.value} onChange={this.ProfileChange}
          options={[
            { key: '여성', value: '여성', text: '여성' },
            { key: '남성', value: '남성', text: '남성' },
          ]}
          placeholder='성별'
          selection
        />
        <Dropdown name="career" required="required" value={this.state.value} onChange={this.ProfileChange}
          options={[
            { key: '1년미만', value: '1년미만', text: '1년미만' },
            { key: '1년~2년', value: '1년~2년', text: '1년~2년' },
            { key: '2년~3년', value: '2년~3년', text: '2년~3년' },
            { key: '3년~4년', value: '3년~4년', text: '3년~4년' },
            { key: '4년~5년', value: '4년~5년', text: '4년~5년' },
            { key: '5년이상', value: '5년이상', text: '5년이상' },
          ]}
          placeholder='지도경력'
          selection
        />
        <div style={fontStyle}>PT가능날짜</div><MultipleDatePicker onSubmit={this.dateChange} minDate={new Date()} required="required"/>
        <Divider/>
        <div>
        동영상URL : 
        <Form.Input type= "text" ref="playerSource" name="playerSource" id="playerSource"
        value={this.state.value} onChange={this.ProfileChange} required="required"
        placeholder="http://media.w3.org/2010/05/bunny/trailer.mp4"
        />
        <div>http://media.w3.org/2010/05/bunny/trailer.mp4</div>

        <div className="body" value={this.state.value} onChange={this.ProfileChange} >주요운동부위
        <input type="checkbox" name="bodypart" value="등" required/>등
        <input type="checkbox" name="bodypart" value="복부"/>복부
        <input type="checkbox" name="bodypart" value="목"/>목
        <input type="checkbox" name="bodypart" value="팔"/>팔
        <input type="checkbox" name="bodypart" value="엉덩이"/>엉덩이
        <input type="checkbox" name="bodypart" value="허벅지"/>허벅지
        <input type="checkbox" name="bodypart" value="종아리"/>종아리
        </div>
        <Counter countname="count" countvalue={this.state.value} onChangeCounter={this.counterChange}
         setname="setNum"  setvalue={this.state.value} required="required"/>
        </div>
        <Button type="submit">등록</Button>
        </Segment>
      </form>
        </Grid.Column>
      </Grid>
    );
  }
}


export default TrainerProfileForm;