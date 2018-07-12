import React, {Component} from 'react';


class Contact extends Component{
    render (){
        return (
            <section className='contact container clearfix'>
                <div className="sectionHeader">Kontakt</div>
                <div>
                    <form>
                        <input type='email' placeholder="wpisz swój adres email"/>
                        <input type='number' placeholder='wpisz swój numer telefonu'/>
                        <textarea placeholder='wpisz wiadomość'/>
                        <button></button>
                    </form>
                </div>
            </section>
        )
    }
}

export {Contact}