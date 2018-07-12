import React, {Component} from 'react'

class Services extends Component{
    render (){
        return (
            <section className='services container clearfix'>
                <div className='sectionHeader'>Usługi</div>
                <div id='servicesContent'>
                    <div id='textServices'>
                      <ul>W naszej ofercie znajdziecie Państwo następujące usługi:
                          <li>Lorem</li>
                          <li>Lorem</li>
                          <li>Lorem</li>
                      </ul>
                    </div>
                    <div id='imgServices'></div>
                </div>
            </section>
        )
    }
}

export {Services}