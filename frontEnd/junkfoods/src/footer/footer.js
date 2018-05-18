import React, { Component } from 'react'
import './footer.css';

export default class Footer extends Component {
  render() {
    return (
        
        <div>
            <div className="site-footer">
                <div className="row">
                        <div className="col-md-4">
                        <span><h2>Logo</h2></span>
                            <p>lorem ipsum</p>
                            <p>© 2018 Hafas, All rights reserved</p>
                        </div>
                        <div className="col-md-4">
                            <span>Contact</span>
                            <li>
                                <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>  &nbsp; &nbsp;&nbsp;
                            </li>
                            <li>
                                <a href="https://twitter.com/"><i className="fa fa-twitter"></i></a> &nbsp; &nbsp;&nbsp;
                            </li>
                            <li>
                                <a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>  &nbsp; &nbsp;&nbsp;
                            </li>
                        </div>
                        <div className="col-md-4">
                        <span>Newsletter</span>
                        <p>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for..."/>
                                <span className="input-group-btn">
                                <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-envelope"></span></button>
                                </span>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}