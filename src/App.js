import React, { Component } from 'react';
import Body from './Components/Body';

class App extends Component {
  render() {
    return (
      <div>
        <Body apiroot={this.props.apiroot}/>
      </div>
    );
  }
}

export default App;
