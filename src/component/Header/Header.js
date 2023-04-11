import React from 'react';

function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <div className="images">
                        <img src='../assest/image/logo.png' className='img-fluid' />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <div className="d-flex getbutton mx-5">
                            <button>GET A QUOTE</button>
                        </div>
                        <div className='icons'>
                        <img src='../assest/image/line.png' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Header;