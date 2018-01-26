
import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {


  state = {
    user: {}
  }

  getData() {
    let gitHubusername = this.refs.name.value; 
    axios.get('https://api.github.com/users/' + gitHubusername ).then((res) => {
      console.log(res.data);
      this.setState({ user: res.data})
    })
  }

  render() {
    const  { user } = this.state;
    return (
      <div className=' col-md-offset-3 col-md-6'>
        <div className='form-group'>
          <input className='form-control' type="text" placeholder=" Enter Github Username " ref="name"/>
        </div>
        <button className='btn btn-primary col-md-offset-5 ' onClick={this.getData.bind(this)}>Call The User</button>
        
        <br />
        <h1 className="col-md-offset-4" >{user.login}</h1>
        {user.login ? <p className="col-md-offset-4"><span> Location = {user.location}</span> <br /> <span> Public Repos = {user.public_repos}</span></p> : ''}
        <img className="col-md-offset-4" src={user.avatar_url} alt={user.login}/> 
      </div>
    );
  }
}

export default App;
