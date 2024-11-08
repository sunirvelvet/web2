import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <div style={{ position: 'relative' }}>
      <Link to="/" style={{ position: 'absolute', right: '1rem', top: '1rem', color: '#fff', textDecoration: 'none', fontSize: '1.5rem' }}>SUNIR</Link>
      <nav style={{ display: 'flex', justifyContent: 'center', padding: '1rem', background: '#333', color: '#fff' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {location.pathname !== '/' && <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>}
          {location.pathname !== '/about' && <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>More About Me</Link>}
          {location.pathname !== '/projects' && <Link to="/projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</Link>}
          {location.pathname !== '/contact' && <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
