import React, { Component } from 'react';
import Sequence from './Sequence'
import { Grid, Card, Image, Tab } from 'semantic-ui-react'

export default class FilterMediator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count_columns: 2,
      yes_show: "",
      no_show: ""
    };
  }

  hideShowColumnYes(){
    this.setState({count_columns:1});
    console.log(this.getState());
  }

  render() {

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

    var panes = [
      { menuItem: 'ИСТИНА', render: () => <Tab.Pane>{_then}</Tab.Pane> },
      { menuItem: 'ЛОЖЬ', render: () => <Tab.Pane>{_else}</Tab.Pane> }
    ];

    return (
      <Card.Group itemsPerRow={1}>
        <Card raised='true' centered='true'>
          <Image src='/icons/filter.svg' centered='true' title={this.props.type} alt={this.props.type} />
          <Card.Content>
            <Card.Header>{condition}</Card.Header>
            <Card.Description>
              <Tab  panes={panes} />

            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}
