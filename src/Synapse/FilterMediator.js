import React, { Component } from 'react';
import Sequence from './Sequence'

export default class FilterMediator extends Component {

  render() {
    console.log(this.props.value);

    var condition = " ";
    if(typeof this.props.value.$.xpath !== "undefined"){
      condition += this.props.value.$.xpath;
    }

    if(typeof this.props.value.$.source !== "undefined"){
      condition += this.props.value.$.source;
    }
    if(typeof this.props.value.$.regex !== "undefined"){
      condition += " "+this.props.value.$.regex;
    }

    var _then = "";
    if(this.props.value.then!==""){
      var thenIndex = this.props.index+"_then";
      _then = (<Sequence key={thenIndex} index={thenIndex} name='sequence' type="then" sequences={this.props.value.then[0]} />);
    }

    var _else = "";
    if(this.props.value.else!==""){
      var thenIndex = this.props.index+"_ele";
      _else = (<Sequence key={thenIndex} index={thenIndex} name='sequence' type="else" sequences={this.props.value.else[0]} />);
    }

    return (
      <div className="mediator mediator-filter">
        <div className="mediator-icon">
          <img src={"/icons/filter.svg"} alt="filter" />
          <div className="mediator-label">filter</div>
        </div>
        <div>
          <div className="mediator-filter-condition"><div className="mediator-filter-condition-text">{condition}</div></div>
          <div className="mediator-filter-actions">
            <div className="mediator-filter-actions-row">
              <div className="mediator-filter-action">
                <div className="mediator-filter-action-arrow">&#x2193; YES</div><div className="mediator-filter-then">{_then}</div>
              </div><div className="mediator-filter-action">
                <div  className="mediator-filter-action-arrow">&#x2193; NO</div><div className="mediator-filter-else">{_else}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
