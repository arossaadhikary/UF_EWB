import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'; 
import ContactUs from './components/pages/ContactUs';
import GetInvolved from './components/pages/GetInvolved';
import Nepal from './components/pages/nepal/NepalHome';
import Peru from './components/pages/peru/PeruHome';
import FAQ from './components/pages/FAQ';

function Paths() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/get-involved" element={<GetInvolved />} />
      <Route path="/nepal" element={<Nepal />} />
      <Route path="/peru" element={<Peru />} />
      <Route path="/faq" element={<FAQ />} />
     </Routes>
  );
}

export default Paths;
