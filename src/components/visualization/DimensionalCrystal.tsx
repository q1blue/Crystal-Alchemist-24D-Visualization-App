import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';
import * as THREE from 'three';

interface DimensionalCrystalProps {
  activeDimensions: boolean[];
  rotationSpeed: number;
  complexity: number;
}

const DimensionalCrystal = ({ 
  activeDimensions, 
  rotationSpeed,
  complexity
}: DimensionalCrystalProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const crystalRef = useRef<THREE.Group>(null);
  const innerCrystalRef = useRef<THREE.Group>(null);
  
  // Create a pulsing effect for the crystal
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002 * rotationSpeed;
      groupRef.current.rotation.z += 0.001 * rotationSpeed;
    }
    
    if (crystalRef.current) {
      crystalRef.current.rotation.y -= 0.003 * rotationSpeed;
      crystalRef.current.rotation.x += 0.001 * rotationSpeed;
    }
    
    if (innerCrystalRef.current) {
      innerCrystalRef.current.rotation.y += 0.005 * rotationSpeed;
      innerCrystalRef.current.rotation.z -= 0.002 * rotationSpeed;
      
      // Apply pulsing effect
      const pulseScale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      innerCrystalRef.current.scale.set(pulseScale, pulseScale, pulseScale);
    }
  });
  
  const getColor = (index: number) => {
    const colors = [
      '#2456FF', // primary
      '#724E91', // secondary
      '#04BFBF', // accent
      '#F2CB05', // gold
    ];
    
    return colors[index % colors.length];
  };
  
  return (
    <group ref={groupRef}>
      {/* Main crystal structure */}
      <group ref={crystalRef}>
        {activeDimensions.map((isActive, i) => {
          if (!isActive) return null;
          
          return (
            <mesh key={`dimension-${i}`} position={[0, 0, 0]} rotation={[0, i * Math.PI / 4, 0]}>
              <octahedronGeometry args={[3 + i * 0.1, complexity]} />
              <meshPhongMaterial 
                color={getColor(i)}
                transparent
                opacity={0.2}
                wireframe={true}
              />
            </mesh>
          );
        })}
      </group>
      
      {/* Inner crystal core */}
      <group ref={innerCrystalRef}>
        <mesh>
          <dodecahedronGeometry args={[1.5, complexity]} />
          <meshPhongMaterial 
            color="#FFFFFF"
            emissive="#04BFBF"
            emissiveIntensity={0.5}
            wireframe={true}
          />
        </mesh>
        
        {/* Energy particles */}
        {Array.from({ length: 15 }).map((_, i) => {
          // Calculate position on a sphere
          const phi = MathUtils.degToRad(Math.random() * 360);
          const theta = MathUtils.degToRad(Math.random() * 180);
          const radius = 2 + Math.random() * 2;
          
          const x = radius * Math.sin(theta) * Math.cos(phi);
          const y = radius * Math.sin(theta) * Math.sin(phi);
          const z = radius * Math.cos(theta);
          
          return (
            <mesh key={`particle-${i}`} position={[x, y, z]}>
              <sphereGeometry args={[0.1, 8, 8]} />
              <meshBasicMaterial color={getColor(i % 4)} transparent opacity={0.8} />
            </mesh>
          );
        })}
      </group>
      
      {/* Connection lines */}
      {activeDimensions.slice(0, 2).map((isActive, i) => {
        if (!isActive) return null;
        
        return (
          <group key={`connections-${i}`}>
            {Array.from({ length: 8 }).map((_, j) => {
              const angle = (j / 8) * Math.PI * 2;
              const radius = 2.5;
              
              const x1 = Math.cos(angle) * radius;
              const z1 = Math.sin(angle) * radius;
              const y1 = 1.5;
              
              const x2 = Math.cos(angle + Math.PI / 8) * radius;
              const z2 = Math.sin(angle + Math.PI / 8) * radius;
              const y2 = -1.5;
              
              const points = [
                new THREE.Vector3(x1, y1, z1),
                new THREE.Vector3(x2, y2, z2),
              ];
              
              const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
              
              return (
                <line key={`line-${i}-${j}`} geometry={lineGeometry}>
                  <lineBasicMaterial color={getColor(i + j % 4)} transparent opacity={0.3} />
                </line>
              );
            })}
          </group>
        );
      })}
    </group>
  );
};

export default DimensionalCrystal;