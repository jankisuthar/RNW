import React from 'react';
import Header from './header';

function contact(props) {
    return (
        <>
        <Header/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <form action="">
                            <table className='table'>
                                <label htmlFor="">Name"</label>
                                <input type="text" className='form-control' />
                                <label htmlFor="" className='mt-3'>Email:</label>
                                <input type="email"  className='form-control'/>
                                <label htmlFor="" className='mt-3'>Message</label>
                                <textarea className='form-control'></textarea>
                                <button type='submit' className='btn btn-primary mt-3'></button>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default contact;