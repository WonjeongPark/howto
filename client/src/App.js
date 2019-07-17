import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
state = {
        id:'',
        name: '',
        gym: '',
        gender: '',
        career:'',
        dates:[],
        bodypart:'',
        playerSource:'',
        count:'',
        set:''
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      // .then(res => this.setState({ dates: [...res[0].dates] }))
      .then(res => this.setState({ name : res[0].name }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. 
    //(Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/users');
    const body = await response.json();
    // console.log(body)
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    console.log(this.state.dates)
    const dates = (this.state.dates).toString().replace(/,/g, '');
    console.log(dates)
    // const datesformat = Date.parse(dates)
    // .toLocaleString("ko-KR",
    // { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    // console.log(datesformat)

    // const users = this.state;
    console.log(this.state)
    // const datas = JSON.stringify(users)
    // const datas = users
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        {this.state.name}
        </p>
        <p>{dates}</p>
      </div>
    );
  }
}

export default App;
