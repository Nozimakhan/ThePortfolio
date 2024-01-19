import React from 'react';
import './Navbar.scss';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { VscMenu } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";
import { Link } from 'react-router-dom';


const Navbar = () => {

    

    return (
        <div className='navbar-bg'>
            <div className="container">
                <div className="navbar">
                    <div className="contact">
                        <a href={'/'}><FaInstagram /></a>
                        <a href={'/'}><FaFacebookF /></a>
                        <a href={'/'}><FaLinkedinIn /></a>
                        <a href={'/'}><FaTelegram /></a>
                    </div>
                    <div className="contact">
                        <a href={'/'}><FaPhoneAlt /></a>
                        <a href={'/'}><MdAlternateEmail /></a>
                    </div>
                </div>
                <div className="sidebar">
                    <div className="sidebar-open">
                        <VscMenu />
                    </div>
                    {/* <div className="sidebar-close">
                        <VscClose/>
                    </div>
                    <div className="sidebar__content">
                        <a href={'/'}>HOME</a>
                        <a href={'/'}>ABOUT</a>
                        <a href={'/'}>SKILLS</a>
                        <a href={'/'}>PROJECTS</a>
                        <a href={'/'}>CONTACT</a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar