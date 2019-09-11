/*
./ : BULUNDUGUM KLASOR
../BİR UST KLASOR

props:Bir componenrten bir componentte veri taşıma yonetmi
state : bir componenttin datasi 
*/

import React from "react";
import Navi from "../Navi/Navi";
import CategoryList from "../CategoryList/CategoryList";
import ProductList from "../ProductList/ProductList";
import { Row, Container, Col } from "reactstrap";
import "./css/App.min.css";

export default class App extends React.Component {
  componentDidMount() {
    this.getProducts();
  }
  getProducts = () => {
    fetch("http://localhost:1453/products")
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };
  changeCategory = category => {
    this.setState({ currentCategory: category.name });
  };
  state = {
    currentCategory: "",
    products: []
  };
  render() {
    const categoryModel = {
      title: "Category List",
      changeCategory: this.changeCategory,
      currentCategory: this.state.currentCategory
    };
    const productModel = {
      title: "Product List",
      currentCategory: this.state.currentCategory,
      products: this.state.products
    };
    return (
      <div>
        <Container>
          <Navi />
          <Row>
            <Col xs="3">
              <CategoryList model={categoryModel} />
            </Col>
            <Col xs="9">
              <ProductList model={productModel} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
