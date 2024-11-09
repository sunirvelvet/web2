import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <div style={{ flex: '1', padding: '20px' }}>
        <h1>Contact</h1>
        <p>This is the Contact page.</p>
      </div>
      <Footer style={{ backgroundColor: 'black', color: 'white' }} />
    </div>
  );
};

export default ContactPage;
