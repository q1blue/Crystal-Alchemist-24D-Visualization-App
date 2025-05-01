import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useState } from 'react';
import DimensionalCrystal from '../components/visualization/DimensionalCrystal';
import DimensionControls from '../components/visualization/DimensionControls';

const Visualization = () => {
  const [activeDimensions, setActiveDimensions] = useState([true, true, true, true]);
  const [rotationSpeed, setRotationSpeed] = useState(0.5);
  const [complexity, setComplexity] = useState(3);
  
  return (
    <div className="h-full">
      <motion.div 
        className="mb-6 flex flex-col lg:flex-row justify-between gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">
            24D <span className="gradient-text">Visualization</span>
          </h1>
          <p className="text-gray-400">
            Explore multidimensional crystalline structures in interactive 3D/4D space
          </p>
        </div>
        
        <DimensionControls 
          activeDimensions={activeDimensions}
          setActiveDimensions={setActiveDimensions}
          rotationSpeed={rotationSpeed}
          setRotationSpeed={setRotationSpeed}
          complexity={complexity}
          setComplexity={setComplexity}
        />
      </motion.div>
      
      <motion.div 
        className="glass-panel h-[calc(100vh-240px)] min-h-[400px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#04BFBF" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#724E91" />
          
          <DimensionalCrystal 
            activeDimensions={activeDimensions}
            rotationSpeed={rotationSpeed}
            complexity={complexity}
          />
          
          <Stars 
            radius={100} 
            depth={50} 
            count={5000} 
            factor={4} 
            saturation={0.5} 
            fade 
            speed={1} 
          />
          <OrbitControls 
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.5}
            panSpeed={0.5}
            rotateSpeed={0.5}
          />
        </Canvas>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="glass-panel p-4">
          <h3 className="text-lg font-medium mb-2">Dimension Stats</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Active Dimensions:</span>
              <span>{activeDimensions.filter(Boolean).length} / {activeDimensions.length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Complexity Level:</span>
              <span>{complexity}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Energy Consumption:</span>
              <span className="text-accent-400">Optimal</span>
            </div>
          </div>
        </div>
        
        <div className="glass-panel p-4">
          <h3 className="text-lg font-medium mb-2">Crystal Properties</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Structure Type:</span>
              <span>Hyperbolic</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Resonance:</span>
              <span className="text-gold-400">High</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Pattern Stability:</span>
              <span className="text-green-400">Stable</span>
            </div>
          </div>
        </div>
        
        <div className="glass-panel p-4">
          <h3 className="text-lg font-medium mb-2">Dimensional Analysis</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Time-Space Curvature:</span>
              <span>1.8π</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Quantum Entanglement:</span>
              <span className="text-secondary-400">98.2%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Harmonic Frequency:</span>
              <span>432 Hz</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Visualization;