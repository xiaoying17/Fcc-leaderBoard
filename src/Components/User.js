import React, { Component } from 'react';
import './loading.css';

class User extends Component {
	render(){
    return(
        <tr>
          <td>{this.props.count}</td>
          <td>
            <img src={this.props.user.img} alt="loading" className="userimage"/>        
            <span>{this.props.user.username}</span>
          </td>
          <td className="text-center">{this.props.user.recent}</td>
          <td className="text-center">{this.props.user.alltime}</td>
        </tr>
      );   
  }
}

export default User;
