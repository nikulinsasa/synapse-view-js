import React, { Component } from 'react';
import Sequence from './Sequence'

export default class FilterMediator extends Component {

  render() {
    console.log(this.props.value);

    var condition = " ";
    if(typeof this.props.value.attributes.xpath !== "undefined"){
        condition += this.props.value.attributes.xpath.value;
    }

    if(typeof this.props.value.attributes.source !== "undefined"){
        condition += this.props.value.attributes.source.value;
    }
    if(typeof this.props.value.attributes.regex !== "undefined"){
        condition += " "+this.props.value.attributes.regexvalue;
    }

    var _then = "";

    var thenElement = this.props.value.querySelector("then");
    if(typeof thenElement!=="undefined"){
        var thenIndex = this.props.index+"_then";
        _then = (<Sequence key={thenIndex} index={thenIndex} name='sequence' type="then" sequences={thenElement.children} />);
    }

    var _else = "";
    var elseElement = this.props.value.querySelector("else");
    if(elseElement!==null){
        var thenIndex = this.props.index+"_ele";
        _else = (<Sequence key={thenIndex} index={thenIndex} name='sequence' type="else" sequences={elseElement.children} />);
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
