import React, {Component} from 'react';
import Axios from 'axios';
import Card from '../product/card';
import {apiURL} from '../config.json'
import './menu.css';


export default class Menu extends Component {
  state = {
    listProduct: []
  }

  getProduct() {
    Axios
      .get(`${apiURL}/menu`)
      .then(res => {
        this.setState({
          listProduct: res
            .data
            .map((el, i) => <Card key={i} {...el}/>)
        })
      })
  }

  componentWillMount() {
    this.getProduct();
  }

  render() {
    return (
      <div class="banner-breadcum section">
        <div class="row">
          <div class="breadcrumb-image">
            <div class="container text-center">
              <h1>Menu</h1>
            </div>
          </div>
          <div className = 'container'>
            {this.state.listProduct}
          </div>
        </div>
      </div>
        
    )
  }
}