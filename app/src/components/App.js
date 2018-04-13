import React, { Component } from 'react';
import Reciever from './Reciever';
import DataLoader from './DataLoader';


class App extends Component {
  render() {
    return (
        <DataLoader baseURL='//localhost:7000'>
          {props => (<Reciever {...props} />)}
        </DataLoader>
    );
  }
}


export default App;
