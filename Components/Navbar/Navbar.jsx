import React from "react";
import Toggle from "../Toggle/Toggle";
import './Navbar.css';

import { Link } from 'react-scroll'
//import Services from "../Services/Services";

const Navbar = () => {
    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Amol</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
    
                        <Link spy={true} to={Navbar} smooth={true} activeClass="activeClass">
                            <li style={{ fontWeight: 'bold', 
                                borderRadius: '34px',
                                border: 'none',
                                color: 'Black',
                                fontSize: '16px',
                                padding: '11px 26px 11px 26px',
                                background: 'linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)',
                                boxShadow: '0px 20px 24px 3px rgba(251, 161, 40, 0.42)'
                                }} >Home</li>
                         </Link>
                       
                        <Link spy={true} to="About" smooth={true} >
                            <li style={{ fontWeight: 'bold', 
                                borderRadius: '34px',
                                border: 'none',
                                color: 'Black',
                                fontSize: '16px',
                                padding: '11px 26px 11px 26px',
                                background: 'linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)',
                                boxShadow: '0px 20px 24px 3px rgba(251, 161, 40, 0.42)'
                                }}>About</li>  
                        </Link>
                       
                        <Link spy={true} to="Services" smooth={true} >
                            <li style={{ fontWeight: 'bold', 
                                borderRadius: '34px',
                                border: 'none',
                                color: 'Black',
                                fontSize: '16px',
                                padding: '11px 26px 11px 26px',
                                background: 'linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)',
                                boxShadow: '0px 20px 24px 3px rgba(251, 161, 40, 0.42)'
                                }}>Services</li>
                        </Link>
                        
                        <Link spy={true} to="Experience" smooth={true} >
                            <li style={{ fontWeight: 'bold', 
                                borderRadius: '34px',
                                border: 'none',
                                color: 'Black',
                                fontSize: '16px',
                                padding: '11px 26px 11px 26px',
                                background: 'linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)',
                                boxShadow: '0px 20px 24px 3px rgba(251, 161, 40, 0.42)'
                                }}>Experince</li>
                        </Link>

                        <Link spy={true} to="Skills" smooth={true} >
                            <li style={{ fontWeight: 'bold', 
                                borderRadius: '34px',
                                border: 'none',
                                color: 'Black',
                                fontSize: '16px',
                                padding: '11px 26px 11px 26px',
                                background: 'linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)',
                                boxShadow: '0px 20px 24px 3px rgba(251, 161, 40, 0.42)'
                                }}>Skills</li>
                        </Link>

                        <Link spy={true} to="Portfolio" smooth={true} >
                            <li style={{ fontWeight: 'bold', 
                                borderRadius: '34px',
                                border: 'none',
                                color: 'Black',
                                fontSize: '16px',
                                padding: '11px 26px 11px 26px',
                                background: 'linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)',
                                boxShadow: '0px 20px 24px 3px rgba(251, 161, 40, 0.42)'
                                }}>Portfolio</li>
                        </Link>
                        <Link spy={true} to="Contacts" smooth={true} >
                            <li style={{ fontWeight: 'bold', 
                                borderRadius: '34px',
                                border: 'none',
                                color: 'White',
                                fontSize: '16px',
                                cursor: 'pointer',
                                padding: '11px 26px 11px 26px',
                                background: 'linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)',
                                boxShadow: '0px 20px 24px 3px rgba(251, 161, 40, 0.42)'
                                }}>Conatct</li>
                        </Link>

                        {/*<Link spy={true} to="Testimonials" smooth={true} >
                            <li>Testmonials</li>
                        </Link>*/}
                        
                        
                    </ul>
                </div>
                {/* <button className="button n-button">
                    Contact
                </button> */}
            </div>
        </div> 
    )
}
export default Navbar