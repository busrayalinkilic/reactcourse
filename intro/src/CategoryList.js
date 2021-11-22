import React, { Component } from "react";
import {ListGroup, ListGroupItem} from "reactstrap";

export default class CategoryList extends Component {
  render() {
    return (
      <div>
           <h2>Category List</h2>
        <ListGroup>
          <ListGroupItem color="success">Chlotes</ListGroupItem>
          <ListGroupItem color="info">Shoes</ListGroupItem>
          <ListGroupItem color= "warning">Fruits</ListGroupItem>
          <ListGroupItem color= "danger">Snacks</ListGroupItem>
          <ListGroupItem color= "primary">Breads</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
