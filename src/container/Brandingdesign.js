import React from 'react';

function Brandingdesign(props) {
    return (
        <div>
               <section className='branding-text w-100'>
                <div className='branding-flex m-0 align-items-center'>
                    <div className='col-md-6 p-0'>
                        <div className='cutting-img'>
                            <img src='../assest/image/happyimage.png' className='img-fluid' />
                            <p className='text-center'>Private label example</p>
                        </div>
                    </div>
                    <div className='col-md-6 p-0'>
                        <div className='cutting-box'>
                            <h2 className='text-dark'>In-House Branding & Design</h2>
                            <div className='borders'></div>
                            <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Brandingdesign;