import React from 'react';
import {Link} from 'react-router-dom';
import {ProductWrapper} from '../utils/productwrapper';
import { ProductConsumer } from '../../context';


const Product = (props) => {
  const {id, title, price, img, inCart } = props.product;

  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <ProductConsumer>
          {
            value => {
              return <div className="img-container p-5" onClick={() =>{ value.handledetail(id)}}> 
              <Link to="/details">
                <img src={img} alt="product" className="card-img-top" />
              </Link>
              <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {value.addtocart(id);value.openmodal(id)}}>
                {inCart ? (<p className="text-capitalize mb-0" disabled> {" "} in cart</p>) : (<i className="fas fa-cart-plus" />)}
              </button>
            </div>
            }
          }
        </ProductConsumer>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">
            {title}
          </p>
          <h5 className="mr-1">
            <span className="mr-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  )
}


export default Product;
