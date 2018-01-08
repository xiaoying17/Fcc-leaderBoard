import React, { Component } from 'react';
import User from './User'
import ColumnHeadings from './ColumnHeadings'
//import Table from 'react-bootstrap/lib/Table'

class Leaderboard extends Component {
	render(){
    var count = 0;
    var userlist = this.props.users.map(function(user){
      count++;
      return(
        <User user={user} key={user.username} count={count} apiroot={this.props.apiroot} updatePage={this.props.updatePage} />
      );
    }.bind(this));
    return(
      <table className="table table-striped table-dark table-hover">
        <ColumnHeadings sortTableNum={this.props.sortTableNum}/>       
        <tbody>
          {userlist}
        </tbody>
      </table>
    )
  }
}

export default Leaderboard;
