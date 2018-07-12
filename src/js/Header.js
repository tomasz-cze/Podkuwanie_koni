import React, { Component } from 'react';

class Header extends Component{
    render(){
        return (
            <section className='navigation clearfix'>
                <div className='container'>
                    <div id='logo'></div>
                    <nav id='menu'>
                        <ul>
                            <li>Home</li>
                            <li>O mnie</li>
                            <li>Produkty</li>
                            <li>Kontakt</li>
                        </ul>
                    </nav>
                </div>

            </section>
        )
    }
}

export {Header}