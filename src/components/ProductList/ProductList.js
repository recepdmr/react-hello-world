import React from "react";
import { Table } from "reactstrap";
export default class ProductList extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.model.title}</h1>
        <h1>{this.props.model.currentCategory}</h1>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th>Units On Order</th>
              <th>Quantity Per Unit</th>
            </tr>
          </thead>
          <tbody>
            {this.props.model.products.map((product, index) => (
              <tr key={index}>
                <th scope="row">{product.productID}</th>
                <td>{product.name}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>{product.unitsOnOrder}</td>
                <td>{product.quantityPerUnit}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
