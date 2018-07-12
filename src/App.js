import React, { Component } from 'react';
import {UnderConstruction} from './js/UnderConstruction.js';
import "./scss/main.css";
import {Header} from './js/Header';
import {Slider} from './js/Slider';
import {About} from './js/About';
import {Services} from './js/Services'
import {Products} from './js/Products';
import {Contact} from "./js/Contact";
import {Footer} from './js/Footer';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Slider/>
            <About/>
            <Services/>
            <Products/>
            <Contact/>
            {/*<Footer/>*/}
        </div>
    )
  }
}

export default App;
