import React from 'react';

function Footer(props) {
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <ul>
                                <li className='pb-3'>
                                    <a href='#' className='text-white'>Home</a>
                                </li>
                                <li className='pb-3'>
                                    <a href='#' className='text-white'>About Us</a>
                                </li>
                                <li className='pb-3'>
                                    <a href='#' className='text-white'>Products & Capabilities</a>
                                </li>
                                <li className='pb-3'>
                                    <a href='#' className='text-white'>Contact Us</a>
                                </li>

                            </ul>
                        </div>
                        <div className='col-md-4'>
                            <ul className='footer-text'>
                                <li className='footer-img'>
                                    <img src='../assest/image/Map.png' />
                                    <a href='#' className='text-white ms-3'>123 Main Street Midvale UT 84003</a>
                                </li>
                                <li className='footer-img'>
                                    <img src='../assest/image/Phone.png' />
                                    <a href='#' className='text-white ms-3'>801.450.5151</a>
                                </li>
                                <li className='footer-img'>
                                    <img src='../assest/image/Mail.png' />
                                    <a href='#' className='text-white ms-3'>info@gravitycm.com</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-4'>
                            <div className="main-button">
                                <div className="getbutton">
                                    <button className='text-dark mx-3 border'>GET A QUOTE</button>
                                </div>
                            </div>
                        </div>
                        <div className='footer-top'>
                            {/* <div className='col-md-2'> */}
                            <div className='footer-logo'>
                                <img src='../assest/image/logo-icon.png' /><br />
                                <img src='../assest/image/footertext.png' />
                            </div>  
                            {/* </div> */}
                            {/* <div className='col-md-10'> */}
                            <div className='footer-end'>
                                <p className='text-white'>Site Map | Privacy Policy</p>
                                <p className='text-white mb-0'>© Gravity 2023 - All Rights Reserved</p>
                            </div>
                            {/* </div>   */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;