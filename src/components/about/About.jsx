import React from 'react';
import './About.scss';
import aboutImg from '../../assets/images/about1.JPG';
import aboutResponsive from '../../assets/images/aboutresponsive.JPG';

const About = () => {
  return (
    <div className='about'>
        <div className="container">
            <div className="about__wrapper">
                <div className="about__img">
                    <img className='aboutc' src={aboutImg} alt='about img' />
                    
                </div>
                <div className="about__content">
                    <b>Get to know me!</b>
                    <p>I'm a <span>Frontend Web Developer</span> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <span>Projects</span> section.</p>
                    <div className="aboutresponsive-img">
                        <img className='aboutm' src={aboutResponsive} alt="" />
                    </div>
                    <p>I'm open to <span>Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span>contact</span> me.</p>
                    <button type='button'>CONTACT</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About