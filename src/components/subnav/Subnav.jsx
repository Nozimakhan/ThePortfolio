import React from 'react';
import './Subnav.scss';

const Subnav = () => {
    return (
        <div className='subnav-bg'>
            <div className="container">
                <div className='subnav'>
                    <a href={'/'}>HOME</a>
                    <a href={'/'}>ABOUT</a>
                    <a href={'/'}>SKILLS</a>
                    <a href={'/'}>PROJECTS</a>
                    <a href={'/'}>CONTACT</a>
                </div>
            </div>
        </div>
    )
}

export default Subnav