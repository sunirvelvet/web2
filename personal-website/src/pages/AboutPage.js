import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <div style={{ flex: '1', padding: '20px' }}>
        <h1>About Me</h1>
        <p>This is the About Me page.</p>
      </div>
      <Footer style={{ backgroundColor: 'black', color: 'white' }} />
    </div>
  );
};

export default AboutPage;
