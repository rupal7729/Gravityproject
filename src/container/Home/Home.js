import React from 'react';
import Brandingdesign from '../Brandingdesign';
import Cuttingpage from '../Cuttingpage';
import Flexiblesection from '../Flexiblesection';
import Form from '../Form';
import Privateicon from '../Privateicon';
import PrivateLabel from '../PrivateLabel';
import ProductType from '../ProductType';

function Home(props) {
    return (
        <>
            <section className='banner'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-12">

                            <div className='heading'>
                                <h1>
                                    Nutraceuticals Manufacturing & Private Label
                                </h1>
                            </div>
                            <div className="d-flex main-button">
                                <div className="getbutton-1">
                                    <button className='text-white'>GET A QUOTE</button>
                                    <button>CALL US NOW</button>
                                </div>
                            </div>
                            <div className='main-pricing'>
                                <div className='d-flex mx-4'>
                                    <img src='../assest/image/trueicon.png' />
                                    <p>COMPETITIVE PRICING</p>
                                </div>
                                <div className='d-flex mx-4'>
                                    <img src='../assest/image/trueicon.png' />
                                    <p>LOW MOQs</p>
                                </div>
                                <div className='d-flex mx-4'>
                                    <img src='../assest/image/trueicon.png' />
                                    <p>FAST TURNAROUND TIMES</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ProductType */}
            <ProductType />

            {/* PrivateLabel */}
            <PrivateLabel />

            {/* private-icons */}
            <Privateicon />

            {/* cutting-edge */}
            <Cuttingpage />

            {/* In-House Branding & Design */}
            <Brandingdesign />


            {/* Flexible Turnkey Solutions */}
            <Flexiblesection />


            {/* Get started */}
            <Form />


        </>


    );
}

export default Home;