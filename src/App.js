
import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {


  state = {
    user: {}
  }

  getData() {
    
    let gitHubusername = this.refs.name.value;

    axios.get('https://api.github.com/users/' + gitHubusername ).then((res) =>{
      console.log(res.data);
      this.setState({ user: res.data})
    })
  }

  render() {

    return (
      <div>
        <input type="text" placeholder=" Enter Github Username " ref="name"/>
        <button onClick={this.getData.bind(this)}>Call the bitch</button>
        <hr />
        <h1>{this.state.user.login}</h1>
        <img src={this.state.user.avatar_url} alt={this.state.user.login}/>
      </div>
    );
  }
}

export default App;
