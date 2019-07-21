import React, {useReducer, useEffect} from 'react';

import {storeProducts, detailsproducts} from './data';
const ProductContext = React.createContext()



const ProductProvider = (props) => {
  const [cs, setState] = useReducer((cs, newState) =>
  ({...cs, ...newState}), {
    products:[],
    detailsproduct: detailsproducts,
    cart: [],
    modalopen: false,
    additemmodal: false,
    modalproduct: detailsproducts,
    cartsubtotal: 0,
    carttax: 0,
    carttotal:0,
    clearcart:false
  })

  
  useEffect(() => { 
    setproducts()
  },[])

  useEffect(() => {
    addtotals()
  },[cs.cart])

  useEffect(() => {
    setproducts()
    addtotals()
  },[cs.clearcart])

  // useEffect(() => {
  //   addtotals()
  // },[cs.removeitem])

  const setproducts = () => {
    let products=[];
    storeProducts.forEach(item => {
      const singleitem = {...item};
      products = [...products, singleitem]
    })
    setState({products: products,clearcart: false})
  }

  const getitem = (id) => {
    const product = cs.products.find(item => item.id === id)
    return product;
  } 
  const handledetail = (id) => {
    const product = getitem(id);

    setState({detailsproduct: product})
  }
  const addtocart = (id) => {
    let temproducts = [...cs.products]
    const index = temproducts.indexOf(getitem(id))
    const product = temproducts[index];

    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    setState({products: temproducts, cart:[...cs.cart,product]})
  }  

  const openmodal = (id) => {
    const product = getitem(id);
    setState({modalproduct: product, modalopen: true})
  }
  const openordermodal = () => {
    setState({modalopen: true,additemmodal:true})
  }
  const closemodal = () => {
    setState({modalopen: false})
  }
  const closeordermodal = () => {
    setState({modalopen: false,additemmodal:false,cart:[],clearcart:true})
  }

  const increment = (id) =>{
    let tempcart = [...cs.cart];
    const selecteditem = tempcart.find(item => item.id === id);

    const index = tempcart.indexOf(selecteditem);
    const item = tempcart[index];

    item.count = item.count + 1;
    item.total = item.count * item.price;

    setState({cart: [...tempcart]})
  }
  const decrement = (id) => {
    let tempcart = [...cs.cart];
    const selecteditem = tempcart.find(item => item.id === id);

    const index = tempcart.indexOf(selecteditem);
    const item = tempcart[index];

    item.count = item.count - 1;
    if(item.count === 0) return removeitem(id);
    
    item.total = item.count * item.price;

    setState({cart: [...tempcart]})

  }
  const removeitem = (id) => {
    let tempproducts = [...cs.products];
    let tempcart = [...cs.cart];
    
    tempcart = tempcart.filter(item => item.id !== id);

    const index = tempproducts.indexOf(getitem(id));
    let removeditem = tempproducts[index];

    removeditem.inCart = false;
    removeditem.count = 0;
    removeditem.total = 0;   

    setState({cart:[...tempcart],products:[...tempproducts]})
  }
  const clearcart = () => {
     setState({cart:[],clearcart:true})
  }
  const addtotals = () => {
    let subtotal = 0;
    cs.cart.map(item => (subtotal += item.total))
    const temptax = subtotal * 0.1;
    const tax = parseFloat(temptax.toFixed(2))
    const total = subtotal + tax;

    setState({cartsubtotal: subtotal, carttax: tax, carttotal: total})
  }
  return (
    <ProductContext.Provider value={{...cs,handledetail,addtocart,openmodal,openordermodal,closeordermodal,closemodal,increment,decrement,removeitem,clearcart }}>
      { props.children }
    </ProductContext.Provider>
  );
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}
