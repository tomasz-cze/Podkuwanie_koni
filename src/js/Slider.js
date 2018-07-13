import React, { Component } from "react";
import a from '../images/a.jpg';
import b from '../images/b.jpg';
import c from '../images/c.jpg';
import d from '../images/d.jpg';




class Slider extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0
        }
    }

    componentDidMount () {
        let timeID= setInterval( ()=> {
            let current = this.state.currentSlide;
            // current = current +1
            current += 1;
            // current = current % 4
            current %= 4;
            this.setState ({
                currentSlide: current
            })
        }, 4000);
    }

    render() {

        console.log(this.state.currentSlide);
        return (
            <section className="container clearfix">
                <div id="slideshow">
                    <ul id="imageSlider">
                        {this.state.currentSlide === 0 && <li><img src={a}/></li>}
                        {this.state.currentSlide === 1 && <li><img src={b}/></li>}
                        {this.state.currentSlide === 2 && <li><img src={c}/></li>}
                        {this.state.currentSlide === 3 && <li><img src={d}/></li>}
                    </ul>
                </div>
            </section>
        )
    }

}

export {Slider}
