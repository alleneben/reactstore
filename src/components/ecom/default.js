import React from 'react';
import { tsPropertySignature } from '@babel/types';


const Default = (props) => {


  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h1 className="display-3">404</h1>
          <h1>error</h1>
          <h3>
            the request URL
            <span className="text-danger">
              { props.location.pathname }
            </span>{" "}
            was not found
          </h3>
        </div>
      </div>
    </div>
  )
}


export default Default;
