import React, { Component } from 'react';
import './loading.css';

class ColumnHeadings extends Component {
	render(){   
    return(
      <thead>
        <tr>
          <td colspan="4">
            <h3 className="text-center">LeaderBoard</h3>
          </td>          
        </tr>
        <tr>
          <th>#</th>
          <th>Camper Name</th>
          <th className="text-center sortable sorted" onClick={this.handleClickNum.bind(this, "recent")}>Points in past 30 days</th>
          <th className="text-center sortable" onClick={this.handleClickNum.bind(this, "alltime")}>All time points</th>
        </tr>
       </thead>
    )
  }
   handleClickNum(fieldname, e){
    if(!e.target.classList.contains('sorted')){
      var nodes = document.getElementsByClassName('sortable');
      for(var i=0; i < nodes.length; i++){
        nodes.item(i).className = "sortable text-center";
      }
      e.target.className = 'sortable text-center sorted';
      this.props.sortTableNum(fieldname);
    }
 }
}

export default ColumnHeadings;
