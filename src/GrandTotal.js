import React from 'react';
import { Link } from 'react-router-dom';

const GrandTotal = ({ totalAmount }) => {
  return (
    <div >
   <Link to='/paymentGateway'>  <button className='btn mt-5 mb-5' style={{backgroundColor:'rgb(158, 46, 133)',color:'white'}}>Total amount: RS{totalAmount}</button></Link> 
    </div>
  );
};

export default GrandTotal;
