import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Orders from './Orders';
import PageNotFound from './pageNotFound';
import PaymentGateway from './paymentGateway';

const App = () => {
  return (
    <div style={{ backgroundColor: 'rgb(240, 177, 235)' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/paymentGateway" element={<PaymentGateway />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
