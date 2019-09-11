import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends React.Component {
  state = {
    categories: [
      {
        categoryName: "Cras justo odio",
        categoryId: 1
      },
      {
        categoryName: "Dapibus ac facilisis in",
        categoryId: 1
      },
      {
        categoryName: "Cras justo odio",
        categoryId: 1
      },
      {
        categoryName: "Dapibus ac facilisis in",
        categoryId: 1
      }
    ]
  };
  render() {
    return (
      <div>
        <h1>{this.props.model.title}</h1>
        <ListGroup>
          {this.state.categories.map(category => (
            //key react için performansli işlem için kullanıyoruz bunu bu id den anliyor
            <ListGroupItem key={category.categoryId}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
