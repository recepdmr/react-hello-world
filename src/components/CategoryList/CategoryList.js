import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class CategoryList extends React.Component {
  render() {
    return (
      <div>
      <h1>{this.props.model.title}</h1>
      <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      </div>
    );
  }
}