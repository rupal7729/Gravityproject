import React from 'react';

function Flexiblesection(props) {
    return (
        <div>
            <section className='flexible-section w-100'>
                <div className='row m-0'>
                    <div className='col-md-6 p-0'>
                        <div className='cutting-img'>
                            <img src='../assest/image/doctorimage-2.png' className='img-fluid' />
                        </div>
                    </div>
                    <div className='col-md-6 p-0'>
                        <div className='cutting-box'>
                            <h2 className='text-white'>Flexible
                                Turnkey Solutions</h2>
                            <div className='borders'></div>
                            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Flexiblesection;