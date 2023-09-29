// import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import ContactsImage from '../../img/Contacts.png'

import {
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
    FaFacebook,
   
} from 'react-icons/fa';
// import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

// import { ThemeContext } from '../../contexts/ThemeContext';

import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

function Contacts() {
    // const [open, setOpen] = useState(false);

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');

    // const [success, setSuccess] = useState(false);
    // const [errMsg, setErrMsg] = useState('');

    // const { theme } = useContext(ThemeContext);

    // const handleClose = (event, reason) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }

    //     setOpen(false);
    // };

    const useStyles = makeStyles((t) => ({
        input: {
            border: `4px solid ${'#f03939cc'}`,
            backgroundColor: `${'#eaeaea'}`,
            color: `${'#212121'}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',
            '&:focus': {
                border: `4px solid ${'#ea2424'}`,
            },
        },
        message: {
            border: `4px solid ${'#f03939cc'}`,
            backgroundColor: `${'#eaeaea'}`,
            color: `${'#212121'}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',
            '&:focus': {
                border: `4px solid ${'#ea2424'}`,
            },
        },
        label: {
            backgroundColor: `${'#eaeaea'}`,
            color: `${'#f03939'}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 600,
            fontSize: '0.9rem',
            padding: '0 5px',
            transform: 'translate(25px,50%)',
            display: 'inline-flex',
        },
        socialIcon: {
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '21px',
            backgroundColor: '#f03939',
            color: '#eaeaea',
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
                color: '#eaeaea',
                backgroundColor: '#212121',
            },
        },
        detailsIcon: {
            backgroundColor: '#f03939',
            color: '#eaeaea',
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '23px',
            transition: '250ms ease-in-out',
            flexShrink: 0,
            '&:hover': {
                transform: 'scale(1.1)',
                color: '#eaeaea',
                backgroundColor: '#212121',
            },
        },
        submitBtn: {
            backgroundColor: '#f03939',
            color: '#eaeaea',
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.08)',
                color: '#eaeaea',
                backgroundColor: '#212121',
            },
        },
    }));

    const classes = useStyles();

    // const handleContactForm = (e) => {
    //     e.preventDefault();

    //     if (name && email && message) {
    //         if (isEmail(email)) {
    //             const responseData = {
    //                 name: name,
    //                 email: email,
    //                 message: message,
    //             };

    //             axios.post(contactsData.sheetAPI, responseData).then((res) => {
    //                 console.log('success');
    //                 setSuccess(true);
    //                 setErrMsg('');

    //                 setName('');
    //                 setEmail('');
    //                 setMessage('');
    //                 setOpen(false);
    //             });
    //         } else {
    //             setErrMsg('Invalid email');
    //             setOpen(true);
    //         }
    //     } else {
    //         setErrMsg('Enter all the fields');
    //         setOpen(true);
    //     }
    // };

    return (
        <div
            className='contacts'
            id='Contacts'
            style={{ Color: "black" }}
        >
            <div className='contacts--container'>
                <h1 style={{ color: "Orange",fontWeight: 'bold'}}>Contacts:-</h1>
                <div className='contacts-body'>

                    <div className='contacts-details'>
                        <a
                            href={`mailto:${contactsData.email}`}
                            className='personal-details'
                        >
                            <div className={classes.detailsIcon}>
                                <FiAtSign />
                            </div>
                            <p style={{ color: 'Red',fontWeight: 'bold',fontSize: '1rem' }}>
                                {contactsData.email}
                            </p>
                        </a>
                        <a
                            href={`tel:${contactsData.phone}`}
                            className='personal-details'
                        >
                            <div className={classes.detailsIcon}>
                                <FiPhone />
                            </div>
                            <p style={{ color: 'Red',fontWeight: 'bold',fontSize: '1rem' }}>
                                {contactsData.phone}
                            </p>
                        </a>
                        <div className='personal-details'>
                            <div className={classes.detailsIcon}>
                                <HiOutlineLocationMarker />
                            </div>
                            <p style={{ color: 'Red',fontWeight: 'bold',fontSize: '1rem' }}>
                                {contactsData.address}
                            </p>
                        </div>

                        <div className='socialmedia-icons'>
                            {socialsData.facebook && (
                                <a
                                    href={socialsData.facebook}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaFacebook aria-label='Facebook' />
                                </a>
                            )} 
                            
                            {socialsData.instagram && (
                                <a
                                    href={socialsData.instagram}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaInstagram aria-label='Instagram' />
                                </a>
                            )}

                            {socialsData.twitter && (
                                <a
                                    href={socialsData.twitter}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaTwitter aria-label='Twitter' />
                                </a>
                            )}
                            
                            {socialsData.linkedIn && (
                                <a
                                    href={socialsData.linkedIn}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaLinkedinIn aria-label='LinkedIn' />
                                </a>
                            )}

                            {socialsData.github && (
                                <a
                                    href={socialsData.github}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaGithub aria-label='GitHub' />
                                </a>
                            )}
                         
                         
                        </div>
                 
                    </div>
                    <div className="contacts-right" style={{scale: '0.7',right:'-55rem',top:'-45rem'}}>
            <img src={ContactsImage} alt="" />
        </div>
                </div>
            </div>

        
            

         <div className="blur Contacts1" style={{background: "rgb(238 210 255)", top: '19rem'}}></div>
         <div className="blur Conatcts2" style={{background: '#C1F5FF', top:'20rem', width:'21rem', height:'11rem', left:'-9rem'}}></div>
        </div>

        
         
    );
}

export default Contacts;
