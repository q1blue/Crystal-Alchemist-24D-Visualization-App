import { useEffect, useRef, useState } from 'react';

// Simulated pattern analysis data
const patternData = {
  complexity: 76,
  harmony: 92,
  stability: 68,
  energy: 83
};

const CrystalPatternCard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hovering, setHovering] = useState(false);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    let animationFrameId: number;
    let particles: { x: number; y: number; size: number; color: string; speed: number }[] = [];
    
    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        color: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 150 + 100)}, ${Math.floor(Math.random() * 200 + 55)}, ${Math.random() * 0.5 + 0.3})`,
        speed: Math.random() * 0.5 + 0.1
      });
    }
    
    // Draw crystalline pattern
    const drawPattern = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Move particles
        particle.y += particle.speed;
        
        // Reset particles that go off-screen
        if (particle.y > canvas.height) {
          particle.y = 0;
          particle.x = Math.random() * canvas.width;
        }
      });
      
      // Draw crystalline structure
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, canvas.height / 4);
      
      // Draw hexagonal structure
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i + (Date.now() / 4000);
        const x = canvas.width / 2 + Math.cos(angle) * (canvas.width / 3.5);
        const y = canvas.height / 2 + Math.sin(angle) * (canvas.height / 3.5);
        ctx.lineTo(x, y);
      }
      
      ctx.closePath();
      ctx.strokeStyle = 'rgba(79, 209, 197, 0.5)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Draw inner structure
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle1 = (Math.PI / 3) * i + (Date.now() / 3000);
        const x1 = canvas.width / 2 + Math.cos(angle1) * (canvas.width / 7);
        const y1 = canvas.height / 2 + Math.sin(angle1) * (canvas.height / 7);
        
        const angle2 = (Math.PI / 3) * ((i + 1) % 6) + (Date.now() / 3000);
        const x2 = canvas.width / 2 + Math.cos(angle2) * (canvas.width / 7);
        const y2 = canvas.height / 2 + Math.sin(angle2) * (canvas.height / 7);
        
        ctx.moveTo(x1, y1);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.lineTo(x2, y2);
      }
      
      ctx.strokeStyle = 'rgba(114, 78, 145, 0.4)';
      ctx.stroke();
      
      // Draw center point
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(242, 203, 5, 0.8)';
      ctx.fill();
      
      animationFrameId = requestAnimationFrame(drawPattern);
    };
    
    drawPattern();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div 
      className="glass-panel p-5 h-full"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <h2 className="text-xl font-semibold mb-4">Crystal Pattern Analysis</h2>
      
      <div className="flex flex-col h-[210px]">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full rounded-lg mb-4"
        />
        
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <div>
            <div className="text-xs text-gray-400">Complexity</div>
            <div className="h-1.5 w-full bg-dark-700 rounded-full mt-1 overflow-hidden">
              <div 
                className="h-full bg-primary-500 rounded-full transition-all duration-700"
                style={{ width: `${patternData.complexity}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="text-xs text-gray-400">Harmony</div>
            <div className="h-1.5 w-full bg-dark-700 rounded-full mt-1 overflow-hidden">
              <div 
                className="h-full bg-accent-500 rounded-full transition-all duration-700"
                style={{ width: `${patternData.harmony}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="text-xs text-gray-400">Stability</div>
            <div className="h-1.5 w-full bg-dark-700 rounded-full mt-1 overflow-hidden">
              <div 
                className="h-full bg-gold-500 rounded-full transition-all duration-700"
                style={{ width: `${patternData.stability}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="text-xs text-gray-400">Energy</div>
            <div className="h-1.5 w-full bg-dark-700 rounded-full mt-1 overflow-hidden">
              <div 
                className="h-full bg-secondary-500 rounded-full transition-all duration-700"
                style={{ width: `${patternData.energy}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrystalPatternCard;