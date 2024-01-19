import React from 'react';
import './Skills.scss';
import { BsFiletypeScss } from "react-icons/bs";
import { BsFiletypeHtml } from "react-icons/bs";
import { BsFiletypeCss } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaSquareGit } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";

const Skills = () => {
  return (
    <div>
        <div className="skills">
            <div className="container">
                <div className="skills__wrapper">
                    <h2>My Skills</h2>
                    <div className="cart__wrapper">
                        <div className="cart">
                            <h4>HTML</h4>
                            <div className="circle">
                                <BsFiletypeHtml/>
                            </div>
                        </div>
                        <div className="cart">
                            <h4>CSS</h4>
                            <div className="circle">
                                <BsFiletypeCss/>
                            </div>
                        </div>
                        <div className="cart">
                            <h4>SCSS</h4>
                            <div className="circle">
                                <BsFiletypeScss/>
                            </div>
                        </div>
                        <div className="cart">
                            <h4>JavaScript</h4>
                            <div className="circle">
                                <IoLogoJavascript/>
                            </div>
                        </div>
                        <div className="cart">
                            <h4>Figma</h4>
                            <div className="circle">
                                <FaFigma/>
                            </div>
                        </div>
                        <div className="cart">
                            <h4>Git</h4>
                            <div className="circle">
                                <FaSquareGit/>
                            </div>
                        </div>
                        <div className="cart">
                            <h4>GitHub</h4>
                            <div className="circle">
                                <FaGithub/>
                            </div>
                        </div>
                        <div className="cart">
                            <h4>React js</h4>
                            <div className="circle">
                                <FaReact/>
                            </div>
                        </div>
                        <div className="cart">
                            <h4>Redux / Toolkit</h4>
                            <div className="circle">
                                <SiRedux/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills