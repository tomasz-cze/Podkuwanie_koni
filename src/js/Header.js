import React, { Component } from 'react';

class Header extends Component{
    render(){
        return (
            <section>
                <div className='logo'></div>
                <nav className='menu'>
                    <ul>
                        <li>Home</li>
                        <li>O mnie</li>
                        <li>Produkty</li>
                        <li>Kontakt</li>
                    </ul>
                </nav>
            </section>
        )
    }
}

export {Header}