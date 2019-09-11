/*
./ : BULUNDUGUM KLASOR
../BİR UST KLASOR
*/

import React from 'react';
import './App.css';
import Navi from '../Navi/Navi';
import Home from '../Home/Home';
import CategoryList from '../CategoryList/CategoryList';
import ProductList from '../ProductList/ProductList';
 export default class App extends React.Component{
render() {
  return(
    <div>
      <Home/>
    <Navi/>
    <CategoryList/>
    <ProductList/>
    </div>
    )
  }
 }