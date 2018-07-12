import React, {Component} from 'react';
import photo1 from '../images/products/photo1.png';
import photo2 from '../images/products/photo2.jpg';
import photo3 from '../images/products/photo3.jpg';
import photo4 from '../images/products/photo4.jpg';


class Products extends Component{
    render() {
        return (
            <section className="products container clearfix">
                <div className="sectionHeader">Produkty</div>
                <div>
                    <ul id='gallery'>
                        <li><img src={photo1}/></li>
                        <li><img src={photo2}/></li>
                        <li><img src={photo3}/></li>
                        <li><img src={photo4}/></li>

                    </ul>
                </div>
            </section>
        )
    }
}

export {Products}