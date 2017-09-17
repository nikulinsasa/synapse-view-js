import React, { Component } from 'react';
import { Grid, Label } from 'semantic-ui-react'

export default class SequencyLink extends Component {

  render() {
    var link = "/element/"+this.props.name;

    var parents = this.props.parents.map((index)=>
      <Label color='purple'><a href={"/element/"+index} data-name={index}>{index}</a></Label>,
    );

    return (
      <Grid padded='horizontally'>
        <Grid.Column width={5}>
          <a href={link} data-name={this.props.name}>{this.props.name}</a>
        </Grid.Column>
        <Grid.Column width={10}>
          {parents}
        </Grid.Column>
      </Grid>
    );
  }
}
