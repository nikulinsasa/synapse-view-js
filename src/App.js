import React, { Component } from 'react';

import MediatorFactory from './Synapse/MediatorFactory';
import './App.css';

class App extends Component {

  testValue(){
      return [
      {
        type:"sequence",
        sequences:[
          {
            type:"property",
            name:"lala",
            value:"la"
          },
          {
            type:"property",
            name:"lala",
            value:"la"
          },
          {
            type:"log",
            properties:[
              {
                type:"property",
                name:"lala",
                value:"expretion=$body"
              }
            ]
          },
          {
            type:"sequence",
            sequences:[
              {
                type:"property",
                name:"lala",
                value:"la"
              },
              {
                type:"property",
                name:"lala",
                value:"la"
              },
              {
                type:"log",
                properties:[
                  {
                    type:"property",
                    name:"lala",
                    value:"expretion=$body"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type":"send"
      }
    ];
    }


  render() {
    var _sequences = this.testValue();
    var _mediatorElements = [];

    try{
      for(var i=0;i<_sequences.length;i++){
        _mediatorElements.push(<MediatorFactory key={i} index={i} type={_sequences[i].type} values={_sequences[i]} />);
        _mediatorElements.push(<div>&#x2193;</div>);
      }
    }catch(e){

    }

    return (
      <div className="App">
        <div className="App-header">
          <h2>Струтура</h2>
        </div>
        <div className="App-intro">
          {_mediatorElements}
        </div>
      </div>
    );
  }
}

export default App;
