
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
    const  { user } = this.state;
    return (
      <div className='col-md-6'>
        <div className='form-group'>
          <input className='form-control' type="text" placeholder=" Enter Github Username " ref="name"/>
        </div>
        <button className='btn btn-primary' onClick={this.getData.bind(this)}>Call the bitch</button>
        { user.login ? <UserDeatils user={user}/>  : <p>User not found</p> }
        </div>
    );
  }
}

export default App;

const UserDeatils = ({user}) =>{
  return (
    <div>
      <hr />
      <h1>{user.login}</h1>
      <img src={user.avatar_url} alt={user.login} />
      <button className='btn btn-primary'>Get {user.login} repos</button>
    </div>
  )
}
