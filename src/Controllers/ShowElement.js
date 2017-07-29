import React, { Component } from 'react';

import MediatorFactory from '../Synapse/MediatorFactory';

class ShowElement extends Component {

  constructor(props) {
      super(props);
      this.state = {xml: 0};
       this.showXml = this.showXml.bind(this);
  }

  testValueXml() {
    return "<proxy name=\"StockQuoteProxy2\"><target><inSequence><property name=\"preserveProcessedHeaders\" value=\"true\"/><sequence key=\"main\"><in><property name=\"direction\" value=\"incoming\"/><sequence key=\"stockquote\"><log level=\"custom\"><property name=\"Text\" value=\"Sending quote request\"/><property expression=\"get-property('version')\" name=\"version\"/><property expression=\"get-property('direction')\" name=\"direction\"/></log><send><endpoint key=\"simple\"/></send></sequence></in><out><send/></out></sequence></inSequence><outSequence><send/></outSequence></target><publishWSDL uri=\"file:repository/conf/sample/resources/proxy/sample_proxy_1.wsdl\"/></proxy>";
  }

  showXml() {
    this.setState({xml:!this.state.xml});
  }

  render() {
    var _mediatorElements = [];

    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(this.props.xml,"text/xml");

    for(var i=0;i<xmlDoc.childNodes.length;i++){
      var key = xmlDoc.childNodes[i].tagName;

      _mediatorElements.push(<MediatorFactory key={i} index={i} type={key} values={xmlDoc.childNodes[i]} />);
      var keyArrow = key+"_arrow_main";
      _mediatorElements.push(<div key={keyArrow}>&#x2193;</div>);
    }


    return (
      <div>
        <a href="javascript://" onClick={this.showXml} className="show-xml">SHOW XML</a>
        {this.state.xml?<pre>{this.props.xml}</pre>:null}
        <div>{_mediatorElements}</div>
      </div>
    );

  }

}

export default ShowElement;
