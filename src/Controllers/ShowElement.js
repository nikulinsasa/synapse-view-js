import React, { Component } from 'react';

import MediatorFactory from '../Synapse/MediatorFactory';
import { Breadcrumb, Button, Segment, Checkbox, Modal, Icon } from 'semantic-ui-react'

class ShowElement extends Component {

  constructor(props) {
      super(props);
      this.state = {
        xml: 0,
        displayMediator: {
          property:true
        },
      };
      
  }

  testValueXml() {
    return "<proxy name=\"StockQuoteProxy2\"><target><inSequence><property name=\"preserveProcessedHeaders\" value=\"true\"/><sequence key=\"main\"><in><property name=\"direction\" value=\"incoming\"/><sequence key=\"stockquote\"><log level=\"custom\"><property name=\"Text\" value=\"Sending quote request\"/><property expression=\"get-property('version')\" name=\"version\"/><property expression=\"get-property('direction')\" name=\"direction\"/></log><send><endpoint key=\"simple\"/></send></sequence></in><out><send/></out></sequence></inSequence><outSequence><send/></outSequence></target><publishWSDL uri=\"file:repository/conf/sample/resources/proxy/sample_proxy_1.wsdl\"/></proxy>";
  }


  displayProperty = (e,e2) => this.setState({

    displayMediator: {
      property:e2.checked
    }
  })

  showModal = () => this.setState({
    modalOpen: true,
    displayMediator:this.state.displayMediator
  });

  moveToProxyList() {

  }

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    var _mediatorElements = [];

    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(this.props.xml,"text/xml");

    for(var i=0;i<xmlDoc.childNodes.length;i++){
      var key = xmlDoc.childNodes[i].tagName;

      _mediatorElements.push(<MediatorFactory displayMediator={this.state.displayMediator} key={i} index={i} type={key} values={xmlDoc.childNodes[i]} />);
      var keyArrow = key+"_arrow_main";
      _mediatorElements.push(<div key={keyArrow}>&#x2193;</div>);
    }


    return (
      <div>

        <div>
          <Breadcrumb size='large'>
            <Breadcrumb.Section link href="/">Главная</Breadcrumb.Section>
            <Breadcrumb.Divider icon='right chevron' />
            <Breadcrumb.Section link>Список проксей</Breadcrumb.Section>
            <Breadcrumb.Divider icon='right chevron' />
            <Breadcrumb.Section active>Выбранный элемент</Breadcrumb.Section>
          </Breadcrumb>
        </div>

        <Modal open={this.state.modalOpen} onClose={this.handleClose} trigger={<Button onClick={this.showModal}>SHOW XML</Button>}>
          <Modal.Header>XML</Modal.Header>
          <Modal.Content scrolling>
            <Modal.Description>
              <pre>{this.props.xml}</pre>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={this.handleClose} inverted>
              <Icon name='close' /> Close
            </Button>
          </Modal.Actions>
        </Modal>

        <Checkbox toggle onClick={this.displayProperty} label={<label>Скрыть медиаторы property</label>} />
        <div>{_mediatorElements}</div>
      </div>
    );

  }

}

export default ShowElement;
