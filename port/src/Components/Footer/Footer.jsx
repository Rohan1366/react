import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Rohan Ghadge</h1>

            <ul className="footer_list"> 
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#project" className="footer_link">Projects</a>
                </li>

                <li>
                    <a href="#skills" className="footer_link">Skills</a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="https://www.instagram.com/_rohan_ghadge_/" className="footer_social-link" target="_blank">
                    <i class="uil uil-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/rohan-ghadge-73963923b/ " className="footer_social-link" target="_blank">
                    <i class="uil uil-linkedin-alt"></i>
                </a>
                <a href="https://github.com/Rohan1366/" className="footer_social-link" target="_blank">
                    <i class="uil uil-github-alt"></i>
                </a>
            </div>

            <span className="footer_copy">&#169; Rohan. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer
