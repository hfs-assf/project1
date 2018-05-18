import React, { Component } from 'react'
import './navbar.css';
import { Link, Route,Redirect  } from 'react-router-dom';
import axios from 'axios';



export default class Navbar extends Component {
    constructor()
    {
        super();
        this.state = {
            user:null,
            search:[],
            cari:{}
        }
    }

  



  render() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top navigation-clean-button">
            <div className="container">
                <div className="navbar-header"><Link className="navbar-brand" to="/">NYHC</Link>
                    <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
                </div>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="nav navbar-nav navbar-center">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Menu">Menu</Link></li>
                        {/* <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Category <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><Link to="/Menu">Food</Link></li>
                            <li><Link to="/Menu">Drink</Link></li>
                        </ul>
                        </li> */}
                        
                    </ul>
                    <p className="navbar-text navbar-right actions"><Link className="navbar-link login" to="#">Log In</Link> <Link className="btn btn-default action-button" role="button" to="#">Sign Up</Link></p>
                </div>
            </div>
        </nav>
    )
  }
}
