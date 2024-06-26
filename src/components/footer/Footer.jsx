import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaTelegramPlane,
} from "react-icons/fa";



import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href="https://www.facebook.com/"target="blank">
                        <FaFacebookF />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://www.instagram.com/" target="blank">
                            <FaInstagram />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://www.linkedin.com/" target="blank">
                            <FaLinkedin />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://github.com/" target="blank">
                            <FaGithub />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://telegram.org/" target="blank">
                            <FaTelegramPlane />
                        </a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;

