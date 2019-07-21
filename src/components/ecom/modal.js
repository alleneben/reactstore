import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import { ProductConsumer } from '../../context';

import { Button } from '../utils/button';


const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:center;
    #modal{
        background: var(--mainWhite);
    }
`;
const Modal = () => {


    return (
        <ProductConsumer>
            {
                value => {
                    const { modalopen, closemodal,additemmodal,openordermodal,closeordermodal } = value;
                    const { img, title, price } = value.modalproduct;
                    
                    
                    if(!modalopen){
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                            
                                            {additemmodal ? 
                                            <>
                                                <h5>Success!!</h5>
                                            <h5></h5>
                                            <h5 className="text-muted">
                                                Thank for shopping with us!!!
                                            </h5>
                                            <Link to="/">
                                                <Button onClick={() => closeordermodal()}>
                                                  back to store  
                                                </Button>
                                            </Link>
                                            </>
                                            : 
                                            <>
                                            <h5>item added to cart </h5>
                                            <img src={img} alt="product" className="img-fluid"/>
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">price : $ {price}</h5>
                                            <Link to="/">
                                                <Button onClick={() => closemodal()}>
                                                  store  
                                                </Button>
                                            </Link>
                                            <Link to="/cart">
                                                <Button cart onClick={() => closemodal()}>
                                                  go to cart  
                                                </Button>
                                            </Link>
                                            </>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }
            }
        </ProductConsumer>
    )
}


export default Modal;