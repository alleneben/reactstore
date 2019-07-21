import React, {useReducer} from 'react';

import Product from './product';
import Title from '../utils/title';


import {ProductConsumer} from '../../context';

const ProductList = (props) => {
  // const [cs, setState] = useReducer((cs, newState) =>
  // ({...cs, ...newState}), {
  //   products:[]
  // })

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name='Our' title='Products'/>
          <div className="row">
            <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <Product key={product.id} product={product} />
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>

    </>
  )
}


export default ProductList;
