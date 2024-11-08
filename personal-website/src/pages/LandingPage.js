import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const models = [
  { name: 'Shipping Container', path: '/models/shipping-containers/scene.gltf' },
  { name: 'Port', path: '/models/port.gltf' },
  { name: 'Industrial', path: '/models/industrial.gltf' },
  { name: 'Vehicle', path: '/models/vehicle.gltf' },
  { name: 'Drone', path: '/models/drone.gltf' }
];

const Model = ({ path }) => {
  const [gltf, setGltf] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      path,
      (loadedGltf) => {
        setGltf(loadedGltf);
      },
      undefined,
      (error) => {
        console.error('Error loading GLTF model:', error);
      }
    );
  }, [path]);

  return gltf ? <primitive object={gltf.scene} scale={0.5} /> : null;
};

const LandingPage = () => {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentModelIndex((prevIndex) => (prevIndex + 1) % models.length);
    }, 10000); // 10 seconds per model
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-page" style={{ position: 'relative' }}>
    <Link to="/" style={{ position: 'absolute', left: '1rem !important', top: '1rem', color: '#fff', textDecoration: 'none', fontSize: '1.5rem' }}>
    SUNIR
    </Link>

      <NavBar />
      <Canvas camera={{ position: [0, 2, 5] }} style={{ height: '500px', width: '100%' }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        <Model path={models[currentModelIndex].path} />
      </Canvas>
      <div style={{ padding: '20px' }}>
        <p>Moved to United States alone when I was 16 with $700. < br />I lived in garage for first few days. < br />I lived off bananas and water for 3 months. < br />I came here to train for 2024 Olympics. (100M Breaststroke)< br />I’m Junior National Swimmer for Nepal. < br />I only slept 4 days a week for over 1.5 years. < br />I worked from Friday evening to Monday morning non-stop for over 72 hours. < br /></p>
        <img src="/IMG_5931.jpeg" alt="Me" className="profile-picture" style={{ width: '150px', height: '180px', margin: '20px 0' }} />
        <p>My life’s Mission is Improvement of Humanity.</p>
        <p>The Mission of my company is Improving Transportation for Humanity.</p>
        <p>I am working with the current state of technology (Autonomous Vehicles) to improve transportation for Humanity.</p>
      </div>
      <Footer style={{ backgroundColor: 'black', color: 'white' }} />
    </div>
  );
};

export default LandingPage;
