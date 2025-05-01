import { ChevronUp, ChevronDown, Zap } from 'lucide-react';

interface DimensionControlsProps {
  activeDimensions: boolean[];
  setActiveDimensions: (dimensions: boolean[]) => void;
  rotationSpeed: number;
  setRotationSpeed: (speed: number) => void;
  complexity: number;
  setComplexity: (level: number) => void;
}

const DimensionControls = ({
  activeDimensions,
  setActiveDimensions,
  rotationSpeed,
  setRotationSpeed,
  complexity,
  setComplexity
}: DimensionControlsProps) => {
  
  const toggleDimension = (index: number) => {
    const newDimensions = [...activeDimensions];
    newDimensions[index] = !newDimensions[index];
    setActiveDimensions(newDimensions);
  };
  
  return (
    <div className="glass-panel p-4 flex flex-col md:flex-row gap-5">
      <div>
        <label className="text-sm text-gray-400 block mb-2">Dimensions</label>
        <div className="flex gap-2">
          {activeDimensions.map((isActive, i) => (
            <button
              key={`dim-btn-${i}`}
              className={`w-9 h-9 rounded-md flex items-center justify-center transition-all ${
                isActive 
                  ? 'bg-primary-500/40 text-white' 
                  : 'bg-dark-700/50 text-gray-400 hover:bg-dark-700'
              }`}
              onClick={() => toggleDimension(i)}
            >
              D{i+1}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <label className="text-sm text-gray-400 block mb-2">Rotation Speed</label>
        <div className="flex items-center">
          <button 
            className="w-8 h-8 bg-dark-700/50 rounded-l-md flex items-center justify-center text-gray-400 hover:bg-dark-700"
            onClick={() => setRotationSpeed(Math.max(0.1, rotationSpeed - 0.1))}
          >
            <ChevronDown size={18} />
          </button>
          <div className="px-3 py-1 bg-dark-700/30 text-center w-20">
            {rotationSpeed.toFixed(1)}x
          </div>
          <button 
            className="w-8 h-8 bg-dark-700/50 rounded-r-md flex items-center justify-center text-gray-400 hover:bg-dark-700"
            onClick={() => setRotationSpeed(Math.min(2, rotationSpeed + 0.1))}
          >
            <ChevronUp size={18} />
          </button>
        </div>
      </div>
      
      <div>
        <label className="text-sm text-gray-400 block mb-2">Complexity</label>
        <div className="flex items-center">
          <button 
            className="w-8 h-8 bg-dark-700/50 rounded-l-md flex items-center justify-center text-gray-400 hover:bg-dark-700"
            onClick={() => setComplexity(Math.max(1, complexity - 1))}
          >
            <ChevronDown size={18} />
          </button>
          <div className="px-3 py-1 bg-dark-700/30 text-center w-16">
            {complexity}
          </div>
          <button 
            className="w-8 h-8 bg-dark-700/50 rounded-r-md flex items-center justify-center text-gray-400 hover:bg-dark-700"
            onClick={() => setComplexity(Math.min(5, complexity + 1))}
          >
            <ChevronUp size={18} />
          </button>
        </div>
      </div>
      
      <button className="glass-button mt-auto md:mt-4 text-sm flex items-center justify-center gap-2">
        <Zap size={16} className="text-accent-400" />
        <span>Optimize Dimensions</span>
      </button>
    </div>
  );
};

export default DimensionControls;