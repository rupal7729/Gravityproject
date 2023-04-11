import React from 'react';

function ProductType(props) {
    return (
        <>
            <div className='product-type'>
                <div className='container'>
                    <div className='product-row product-font'>
                        <div className='col-md-3 d-flex product-bottom'>
                            <img src='../assest/image/Vector-1.png' className='img-fluid' />
                            <p className='mt-4 px-3'>GUMMIES</p>
                        </div>
                        <div className='col-md-3 d-flex product-bottom'>
                            <img src='../assest/image/Vector-2.png' className='img-fluid' />
                            <p className='mt-4 px-3'>CAPSULES</p>
                        </div>
                        <div className='col-md-3 d-flex product-bottom'>
                            <img src='../assest/image/Vector-3.png' className='img-fluid' />
                            <p className='mt-4 px-3'>POWDERS</p>
                        </div>
                        <div className='col-md-3 d-flex product-bottom'>
                            <img src='../assest/image/Vector-4.png' className='img-fluid' />
                            <p className='mt-4 px-3'>SOFTGELS</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductType;