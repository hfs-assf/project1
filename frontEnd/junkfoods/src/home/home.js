import React, {Component} from 'react'
import './home.css';
import Axios from 'axios';
import {Link, Route, Switch} from 'react-router-dom';
import {apiURL} from '../config.json'
import Category from '../category/category';

export default class Home extends Component {
    state = {
        listKategori: []
    }

    getKategori() {
        Axios
            .get(`${apiURL}/home`)
            .then(res => {
                this.setState({
                    listKategori: res
                        .data
                        .map((el, i) => <Category key={i} {...el}/>)
                })
            })
    }

    componentWillMount() {
        this.getKategori();
    }

    render() {
        return (
            <div>
                <div
                    class="carousel fade-carousel slide"
                    data-ride="carousel"
                    data-interval="4000"
                    id="bs-carousel">

                    <div class="overlay"></div>

                    <ol class="carousel-indicators">
                        <li data-target="#bs-carousel" data-slide-to="0" class="active"></li>
                        <li data-target="#bs-carousel" data-slide-to="1"></li>
                        <li data-target="#bs-carousel" data-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner">
                        <div class="item slides active">
                            <div class="slide-1"></div>
                            <div class="hero">
                                <hgroup>
                                    <h1>Black Flag</h1>
                                    <h3>Precious sense of taste</h3>
                                </hgroup>

                            </div>
                        </div>
                        <div class="item slides">
                            <div class="slide-2"></div>
                            <div class="hero">
                                <hgroup>
                                    <h1>Leeway</h1>
                                    <h3>The Combination of flavors will surprise you</h3>
                                </hgroup>
                            </div>
                        </div>
                        <div class="item slides">
                            <div class="slide-3"></div>
                            <div class="hero">
                                <hgroup>
                                    <h1>Cro Mags</h1>
                                    <h3>Fresh lettuce leaves and hot meat with spices</h3>
                                </hgroup>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center foods-container">
                    <h3>About</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.</p>

                </div>

                <div className="container">
                    {this.state.listKategori}
                </div>

            </div>
        )
    }
}