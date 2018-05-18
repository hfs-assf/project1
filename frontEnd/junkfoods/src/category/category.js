import React, {Component} from 'react'
import './category.css';
import {Link, Route, Switch} from 'react-router-dom';

export default class Category extends Component {
  render() {
    return (
      <div className="col-lg-6 product" key={this.props.id}>
        
        <img src={this.props.gambar} className="img-responsive" alt="Image" />
        <div className="overlay">
            <p>{this.props.namaKategori}</p>
            <Link to ="/Menu" className="but" ><span>Detail Category</span></Link>
        </div>
    </div>
    )
  }
}