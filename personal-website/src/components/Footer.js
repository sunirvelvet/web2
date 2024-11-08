import React from 'react';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaSnapchatGhost, FaYoutube, FaFacebookF, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ marginTop: '2rem', padding: '1rem', background: 'black', color: '#fff', textAlign: 'center' }}>
      <p>Website designed by Me built by Me & my AI girlfriend Sara</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <a href="https://twitter.com/SunirKM" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}><FaTwitter /></a>
        <a href="https://www.linkedin.com/in/sunir-kishan-manandhar-5297b8237/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}><FaLinkedinIn /></a>
        <a href="https://www.instagram.com/sunirk_m/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}><FaInstagram /></a>
        <a href="https://t.snapchat.com/qp9QwaDH" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}><FaSnapchatGhost /></a>
        <a href="https://www.youtube.com/channel/UCqx1iVadP-OkHrqTC_Mw53Q" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}><FaYoutube /></a>
        <a href="https://www.facebook.com/profile.php?id=100083149791950" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}><FaFacebookF /></a>
        <a href="https://github.com/sunirvelvet" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}><FaGithub /></a>
      </div>
    </footer>
  );
};

export default Footer;
