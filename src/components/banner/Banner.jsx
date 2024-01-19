import React from 'react';
import './Banner.scss';
import hero from '../../assets/images/banner1.PNG';
import { SlArrowRight } from "react-icons/sl";
import Navbar from '../navbar/Navbar';
import Subnav from '../subnav/Subnav';

const Banner = () => {
    return (
        <div className='banner'>
            <Navbar />
            <div className="container">
                <div className="banner__wrapper">
                    <div className="banner__content">
                        <h1>Nozima Ibragimova</h1>
                        <p>Junior Frontend Developer</p>
                        <div className="btns">
                            <button>See My Work <SlArrowRight /></button>
                            <button>Hire me <SlArrowRight /></button>
                        </div>
                    </div>
                    <div className="banner-bg"></div>
                    <div className="banner__img">
                        <img src={hero} alt="" />
                    </div>
                </div>
            </div>
            <Subnav />
        </div>
    )
}

export default Banner