import React, { Component } from 'react';

export default class EnrichMediator extends Component {

  render() {
      var source = this.props.value.querySelector("source");
      var target = this.props.value.querySelector("target");

      var sourceAttributes = [];
      for(var i=0;i<source.attributes.length;i++){
          sourceAttributes.push( (<div>{source.attributes[i].name}="{source.attributes[i].value}"</div>) );
      }

      var targetAttributes = [];
      for(var i=0;i<target.attributes.length;i++){
          targetAttributes.push( (<div>{source.attributes[i].name}="{target.attributes[i].value}"</div>) );
      }

      return (
        <div className="mediator mediator-enrich">
          <div className="mediator-icon">
            <img src={"/icons/enrich.svg"} alt="enrich" />
            <div className="mediator-label">enrich</div>
          </div>
          <div>
            <div className="mediator-enrich-source">{sourceAttributes}</div>
            <div className="mediator-enrich-target">{targetAttributes}</div>
          </div>
        </div>
      );

  }

}
