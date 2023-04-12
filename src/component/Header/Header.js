import React, { useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header(props) {

    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    
    return (
        <div>
            <header>
                <div className='headers-logo'>
                    <img src='../assest/image/logo.png' className='img-fluid' />
                </div>
                <nav ref={navRef}>
                    <ul className='header-top'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Brandingdesign</a></li>
                        <li><a href="#">Cuttingoage</a></li>
                        <li><a href="#">Flexiblesection</a></li>
                    <div className="getbutton align-items-center">
                        <button>GET A QUOTE</button>
                    </div>
                    </ul>
                    <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                        <CloseIcon />
                    </button>
                </nav>
                <button className='nav-btn' onClick={showNavbar}>
                    <MenuIcon />
                </button>
            </header>

        </div>


    );
}

export default Header;