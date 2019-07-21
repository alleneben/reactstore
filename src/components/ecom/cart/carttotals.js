import React from 'react';
import { Link } from 'react-router-dom';



const CartTotals = ({value}) => {
    const {cartsubtotal,carttax,carttotal,clearcart,cart,openordermodal} = value;

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button type="button" className="btn btn-outline-danger text-uppercase mb-3 px-5" onClick={() => clearcart()}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subtotal : 
                            </span>
                            <strong>$ {cartsubtotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                tax : 
                            </span>
                            <strong>$ {carttax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                total : 
                            </span>
                            <strong>$ {carttotal}</strong>
                        </h5>
                        {cart && 
                            <button type="button" className="btn btn-info text-uppercase mb-3 px-5" onClick={() => openordermodal()}>
                                make order
                            </button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default CartTotals;