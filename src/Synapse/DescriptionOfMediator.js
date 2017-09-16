import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class DescriptionOfMediator extends Component {

  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    var text = "Атрибут description пустой";
    var color = "gray";

    if(typeof this.props.descriptionObject !=="undefined" && typeof this.props.descriptionObject.attributes !=="undefined"
       && typeof this.props.descriptionObject.attributes.description !=="undefined"){
       text = this.props.descriptionObject.attributes.description.value;
       color = "green";
    }else{
      return (<div/>);
    }


    return (
      <Modal
        trigger={<Button onClick={this.handleOpen} icon color={color}>?</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Modal.Content>
          <h3>Описание медиатора</h3>
          <p>{text}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='close' /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
