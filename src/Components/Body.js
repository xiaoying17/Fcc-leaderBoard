import React, { Component } from 'react';
import $ from "jquery";
import Leaderboard from './Leaderboard';

class Body extends Component {
	constructor() {
    super();
    this.state = {
      users: [],
      reverse: true,
      column: "recent"
    }
  }
  getData(){
    $.ajax({
      url: this.props.apiroot + 'top/' + this.state.column,
      dataType: 'json',
      cache: false,
      success: function(data){
      	var users = data;
        this.setState({users: users});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }     
    });
  }
  sortTableNum(column){
    if(column !== this.state.column) {
      this.setState({reverse: true, column: column}, this.getData);
    }
  }
  componentDidMount(){
    this.getData();
  }

  render(){
    return (
      <div className="container">      	
        <div className="row">
           <div className="col-lg-12">
               <Leaderboard 
                users={this.state.users}
                apiroot={this.props.apiroot}
                updatePage={this.getData.bind(this)}
                sortTableNum={this.sortTableNum.bind(this)}
               />
          </div>
        </div>
      </div>
    );
  }
 
}

export default Body;
