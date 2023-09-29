import React from 'react';
import './Footer.css'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import GitHub from '@iconscout/react-unicons/icons/uil-github'
import WhatsApp from '@iconscout/react-unicons/icons/uil-whatsapp'
import Wave from '../../img/wave.png';

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{width: '100%'}}/>
            <div className="f-content">
                <span style={{ color: 'Black', fontFamily: 'Times New Roman', fontWeight: 'bold',fontSize: '1rem'}}>Made with 
                    <span style={{ color : 'Red'}}> ❤ </span>by Amol Pawar</span>
                    <div className="f-icons">
                        <Insta color='Red' size='3rem'/>
                        <Facebook color='Blue' size='3rem'/>
                        <LinkedIn color='LightBlue' size='3rem'/>
                        <GitHub color='Black' size='3rem'/>
                        <WhatsApp color='Green' size='3rem'/>
                      </div>
            </div>
        </div>          
    )
}



export default Footer