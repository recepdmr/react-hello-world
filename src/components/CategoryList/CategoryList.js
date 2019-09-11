import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends React.Component {
  state = {
    categories: []
  };
  getCategories = () => {
    fetch("http://localhost:1453/categories")
      .then(response => response.json())
      .then(data =>this.setState({categories:data}));
  };
  componentDidMount() {
   this.getCategories();
  }
  render() {
    return (
      <div>
        <h1>{this.props.model.title}</h1>
        <p>{this.props.model.currentCategory}</p>
        <ListGroup>
          {this.state.categories.map((category, index) => (
            //key react için performansli işlem için kullanıyoruz bunu bu id den anliyor
            <ListGroupItem
              key={index}
              onClick={() => this.props.model.changeCategory(category)}
            >
              {category.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
