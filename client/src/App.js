import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
state = {
    users: [
      {
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
      }

    ]
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ users : [...res] }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. 
    //(Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/users');
    const body = await response.json();
    console.log(body)
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    const users = this.state;
    console.log(users)
    const datas = JSON.stringify(users)
    // const datas = users
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        {/* {console.log(datas)} */}
        {datas}</p>
      </div>
    );
  }
}

export default App;
