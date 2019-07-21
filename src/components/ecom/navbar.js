import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../logo.svg'
import {Button} from '../utils/button';


const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
const Navbar = () => {

  return (
    <>
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          {/*<img src={logo} alt="store" className="navbar-brand" />*/}
          Success & Sons Storeore
        </Link>
        <ul className="navbar-nav align-items-center brand">
          <li className="nav-items ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <Button>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </Button>
        </Link>
      </NavWrapper>
    </>
  )
}


export default Navbar;
