import React, { Component } from 'react';

import ShowElement from './Controllers/ShowElement';
import ListElements from './Controllers/ListElements';
import './App.css';

class LoaderPage extends Component {

  render(){
    var text = props.values;
    return (
      <div>{text}</div>
    );
  }

}

export default LoaderPage
