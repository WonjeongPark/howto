import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'
// import logo from '../../logo.svg';

export default class hompage extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <p className="App-intro">
            <div className="homeTotal" >
              <p className="homeWelcome">Welcome to HowTO</p>
                <div className="homeH1">나에게 맞는
                <Link to ="TrainerEvent"><button><div>트레이너 찾기</div></button></Link>
                {/* <button><div>수강생 찾기(준비중)</div></button> */}</div>
          </div>
        </p>
      </div>
      
    )
  }
}