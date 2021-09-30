import React from 'react';
import './nav.css';

function Footer() {
    return (
        <div className="footer-div">

            <p className="footer-name">
                Chromaculture is the work of Amanda Hinton
            </p>

            <div className="footer-icon-div">
            <a href="https://github.com/amandahinton" target={"_blank"} rel={"noreferrer"}> <i className="fab fa-github-square footer-icon"></i> </a>
            <a href="https://amandahinton.com/" target={"_blank"} rel={"noreferrer"}> <i className="fas fa-id-card footer-icon"></i> </a>
            <a href="https://www.linkedin.com/in/amandahinton/" target={"_blank"} rel={"noreferrer"}> <i className="fab fa-linkedin footer-icon"></i> </a>
            </div>

            <p className="footer-copyright">Copyright ©2021 All Rights Reserved</p>
        </div>
    );
};

export default Footer;
