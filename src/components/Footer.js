import React from 'react';

const Footer = () => {
    return (
        <footer>
            <ul className="footer__socialmedia" target="_blank" rel="noopener noreferrer">
                <li>
                    <a href="https://www.facebook.com/paweennuch.tata">
                        <i className="fab fa-facebook-square relative-position">
                        <p class="media absolute-position">Facebook</p>
                        </i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Tata-paweennuch" target="_blank" rel="noopener noreferrer">
                        <i className="media-logo fab fa-github-square relative-position">
                        <p class="media absolute-position">Github</p>
                        </i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/tata-paweennuch/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin relative-position">
                        <p class="media absolute-position">Linkedin</p>
                        </i>
                    </a>
                </li>

            </ul>

            <p>&copy;2019 by <a href="https://github.com/Tata-paweennuch" target="_blank" rel="noopener noreferrer">Tata Paweennuch - All Rights Reserved</a></p>
            
{/*             <div className="box-arrow"> 
                <p className="goingup-arrow"><a href="#top"><i class="fa fa-arrow-up"></i></a></p>
            </div> 
 */}        </footer>
    );
}

export default Footer;