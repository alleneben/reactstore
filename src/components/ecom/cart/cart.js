import React from 'react';

import {Link} from 'react-router-dom';
import { ProductConsumer } from '../../../context';
import Title from '../../utils/title';
import CartColumns from './cartcolumns';
import CartList from './cartlist';
import CartTotals from './carttotals';


const Cart = () => {


  return (
    <section>
      <ProductConsumer>
        {
          value => {
            const {cart} = value;
            
            if (cart.length < 1) return <Title name='Your is currently' title='empty' />;
            return (
              <>
                <Title name='Your' title='cart' />
                <CartColumns />
                <CartList value={value}/>
                <CartTotals value={value}/>
              </>
            )
          }
        }
      </ProductConsumer>
    </section>
  )
} 


export default Cart;
