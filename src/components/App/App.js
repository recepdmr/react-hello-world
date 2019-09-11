
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
import { Row, Container,Col } from "reactstrap";
import './css/App.min.css';
export default class App extends React.Component {
  render() {
    const categoryModel={
      title:"Category List"
    }
    const productModel={
      title:"Product List"
    }
    return (
      <div>
        <Container>
            <Navi />
          <Row>
          <Col xs="3"> 
          
          <CategoryList model={categoryModel} />
          </Col>
          <Col xs="9">

          <ProductList  model={productModel}/>
          </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
