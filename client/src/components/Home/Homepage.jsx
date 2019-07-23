import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

export default class hompage extends Component {
  render() {
    return (
      <div className="homeTotal" >
        <p className="homeWelcome">Welcome to HowTO</p>
        <div className="homeH1">나에게 맞는
        <Link to ="TrainerEvent"><button><div>트레이너 찾기</div></button></Link>
        {/* <button><div>수강생 찾기(준비중)</div></button> */}</div>
      </div>
    )
  }
}