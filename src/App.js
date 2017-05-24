import React, { Component } from 'react';

import MediatorFactory from './Synapse/MediatorFactory';
import './App.css';

class App extends Component {

  testValueXml() {
    return "<proxy name=\"StockQuoteProxy2\"><target><inSequence><property name=\"preserveProcessedHeaders\" value=\"true\"/><sequence key=\"main\"><in><property name=\"direction\" value=\"incoming\"/><sequence key=\"stockquote\"><log level=\"custom\"><property name=\"Text\" value=\"Sending quote request\"/><property expression=\"get-property('version')\" name=\"version\"/><property expression=\"get-property('direction')\" name=\"direction\"/></log><send><endpoint key=\"simple\"/></send></sequence></in><out><send/></out></sequence></inSequence><outSequence><send/></outSequence></target><publishWSDL uri=\"file:repository/conf/sample/resources/proxy/sample_proxy_1.wsdl\"/></proxy>";
  }

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

    var parseString = require('react-native-xml2js').parseString;
    parseString(this.testValueXml(), function (err, result) {
        var i=0;
        for(var key in result){
          _mediatorElements.push(<MediatorFactory key={i} index={i} type={key} values={result[key]} />);
          var keyArrow = key+"_arrow_main";
          _mediatorElements.push(<div key={keyArrow}>&#x2193;</div>);
          i++;
        }
    });
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
