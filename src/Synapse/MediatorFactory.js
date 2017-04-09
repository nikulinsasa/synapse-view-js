import React, { Component } from 'react';

import Sequence from './Sequence'
import PropertyMediator from './PropertyMediator'
import SendMediator from './SendMediator'
import DefaultMediator from './DefaultMediator'
import LogMediator from './LogMediator'

class MediatorFactory extends Component{


  render(){

    if(typeof this.props.type === "undefined" ){
      return (<DefaultMediator name='Тип не передан' />);
    }
    console.log(this.props);
    var index=this.key+"_"+this.props.type;

    switch(this.props.type){
      case "sequence":
        return (<Sequence key={index} index={index} name='sequence' sequences={this.props.values.sequences} />);
      case "property":
        return (<PropertyMediator key={index} name={this.props.values.name} value={this.props.values.value} />);
      case "send":
          return (<SendMediator key={index} />);
      case "log":
          return (<LogMediator key={index} index={index} properties={this.props.values.properties} />);
      default:
        return (<DefaultMediator key={index} name='Неизвестный' />);
    }
  }

}

export default MediatorFactory;
