import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Login from './login/login';
import Register from './register/register';
import Navbar from './navbar/navbar';
// import Carousel from './carousel/carousel';
import Home from './home/home';
import Footer from './footer/footer';
import {Link, Route, Switch} from 'react-router-dom';
import About from './about/about';
import Menu from './menu/menu';



class App extends Component {

  render() {
    return (
      <div>
        <Navbar />  
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/menu" component={Menu}/>      
        <Route path="/register" component={Register}/>
        <Footer />                 
      </div>
    );
  }
}

export default App;
