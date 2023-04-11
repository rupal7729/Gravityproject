import React from 'react';

function Form(props) {
    return (
        <div>
               <section className='get-started'>
                <div className='container'>
                    <div className='get-text text-center'>
                        <h2>Get started</h2>
                        <p>ARE YOU READY TO TURN YOUR IDEA INTO A FINISHED PRODUCT? WE'RE HERE TO HELP!</p>
                        <span>Please answer the following form below and we'll be in touch as soon as possible..</span>
                    </div>
                    <form>
                        <div className='get-row'>
                            <div className='col-md-6'>
                                <div className="mb-3 mx-4">
                                    <input type="text" placeholder="Name" />
                                    <input type="text" placeholder="Company" />
                                    <input type="number" placeholder="Phone" />
                                    <input type="text" placeholder="Email" />

                                </div>
                            </div>
                            <div className="col-md-6">
                                <textarea type="text" placeholder="About you, product, quantity..." />
                            </div>
                        </div>
                        <div className='form-button text-center mt-5'>
                            <button type="button" className="text-white rounded-pill">SEND</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Form;