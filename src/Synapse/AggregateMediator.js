import React, { Component } from 'react';
import Sequence from './Sequence'

export default class AggregateMediator extends Component {
  render() {
      var value = this.props.value;
      var sequence = value.querySelector("onComplete");
      var _key = this.props.key+"_iterator";
      return (
          <div className="mediator mediator-aggregate">
              <div className="mediator-icon">
                  <img src={"/icons/iterator.svg"} alt="aggregator" />
                  <div className="mediator-label">aggregator</div>
              </div>
              <div>
                  <div>{sequence.attributes.expression.value}</div>
                  <div>
                      <Sequence key={_key} index={_key} name='sequence' type="aggregator" sequences={sequence.children} />
                  </div>
              </div>
          </div>
      );
  }
}
