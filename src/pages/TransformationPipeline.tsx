import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Activity, 
  ArrowRight, 
  Clock, 
  GitBranch, 
  GitMerge,
  MoreHorizontal, 
  Play,
  RefreshCw, 
  Stars
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mock pipeline stages and tasks
const pipelineStages = [
  {
    id: 1,
    name: 'Data Collection',
    description: 'Collect and prepare data from various sources',
    status: 'completed',
    progress: 100,
    tasks: [
      { id: 101, name: 'Initialize collectors', status: 'completed' },
      { id: 102, name: 'Validate data sources', status: 'completed' },
      { id: 103, name: 'Apply initial filters', status: 'completed' },
    ]
  },
  {
    id: 2,
    name: 'Crystal Formation',
    description: 'Transform raw data into crystalline structures',
    status: 'in_progress',
    progress: 68,
    tasks: [
      { id: 201, name: 'Quantum pattern identification', status: 'completed' },
      { id: 202, name: 'Dimensional mapping', status: 'in_progress' },
      { id: 203, name: 'Crystalline binding', status: 'pending' },
    ]
  },
  {
    id: 3,
    name: 'Divine Timing Integration',
    description: 'Align data transformations with optimal timing patterns',
    status: 'pending',
    progress: 0,
    tasks: [
      { id: 301, name: 'Temporal resonance calibration', status: 'pending' },
      { id: 302, name: 'Synchronicity analysis', status: 'pending' },
      { id: 303, name: 'Flow optimization', status: 'pending' },
    ]
  },
  {
    id: 4,
    name: 'Final Transmission',
    description: 'Prepare and transmit the transformed data across dimensions',
    status: 'pending',
    progress: 0,
    tasks: [
      { id: 401, name: 'Encryption and encoding', status: 'pending' },
      { id: 402, name: 'Channel preparation', status: 'pending' },
      { id: 403, name: 'Transmission and verification', status: 'pending' },
    ]
  }
];

// Mock metrics
const pipelineMetrics = {
  efficiency: 94,
  alignment: 87,
  resonance: 92,
  processingRate: '2.4 TB/h',
  estimatedCompletion: '43 minutes',
  dimensionalReach: '24 dimensions'
};

const TransformationPipeline = () => {
  const [activeStage, setActiveStage] = useState(2);
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400';
      case 'in_progress':
        return 'text-amber-400';
      case 'pending':
        return 'text-gray-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20';
      case 'in_progress':
        return 'bg-amber-500/20';
      case 'pending':
        return 'bg-gray-500/20';
      default:
        return 'bg-gray-500/20';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in_progress':
        return 'In Progress';
      case 'pending':
        return 'Pending';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="h-full">
      <motion.div 
        className="mb-6 flex flex-col sm:flex-row justify-between gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">
            Divine Timing <span className="gradient-text">Transformation</span>
          </h1>
          <p className="text-gray-400">
            Aligning data processing with optimal temporal patterns
          </p>
        </div>
        
        <div className="flex gap-3">
          <button className="glass-button flex items-center gap-2">
            <Play size={18} className="text-accent-400" />
            <span>Resume</span>
          </button>
          <button className="glass-button flex items-center gap-2">
            <RefreshCw size={18} className="text-primary-400" />
            <span>Reset</span>
          </button>
        </div>
      </motion.div>

      {/* Pipeline Overview */}
      <motion.div 
        className="glass-panel p-5 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Pipeline Overview</h2>
          <div className="flex items-center text-sm">
            <span className="text-gray-400 mr-2">Est. Completion:</span>
            <span className="font-semibold flex items-center">
              <Clock size={16} className="text-primary-400 mr-1" />
              {pipelineMetrics.estimatedCompletion}
            </span>
          </div>
        </div>

        {/* Pipeline Stages Visual */}
        <div className="relative mb-8">
          <div className="absolute left-0 top-1/2 w-full h-1 bg-dark-700 transform -translate-y-1/2 z-0"></div>
          
          <div className="relative z-10 flex justify-between">
            {pipelineStages.map((stage, index) => (
              <div 
                key={stage.id} 
                className="flex flex-col items-center"
                onClick={() => setActiveStage(stage.id)}
              >
                {/* Connector Line */}
                {index > 0 && (
                  <div 
                    className={`absolute w-full h-1 left-0 top-1/2 transform -translate-y-1/2 -z-10 
                              ${index < activeStage ? 'bg-primary-500' : 'bg-dark-700'}`}
                    style={{ 
                      width: `${100 / (pipelineStages.length - 1)}%`, 
                      left: `${(index - 0.5) * (100 / (pipelineStages.length - 1))}%` 
                    }}
                  ></div>
                )}
                
                {/* Stage Marker */}
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer relative
                              ${stage.id < activeStage ? 'bg-primary-500 text-white' : 
                                stage.id === activeStage ? getStatusBg(stage.status) : 
                                'bg-dark-700 text-gray-400'}`}
                >
                  {stage.id < activeStage ? (
                    <CheckIcon />
                  ) : (
                    <span className="text-sm font-medium">{stage.id}</span>
                  )}
                  
                  {stage.status === 'in_progress' && (
                    <div className="absolute -right-1 -top-1 w-4 h-4 rounded-full bg-dark-800 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></div>
                    </div>
                  )}
                </div>
                
                {/* Stage Name */}
                <div className="mt-2 w-24 text-center">
                  <div className={`text-xs font-medium ${
                    stage.id === activeStage ? 'text-white' : 'text-gray-400'
                  }`}>
                    {stage.name}
                  </div>
                  {stage.status === 'in_progress' && (
                    <div className="text-[10px] text-amber-400 mt-1">{stage.progress}% Complete</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-1">Processing Rate</div>
            <div className="text-xl font-bold">{pipelineMetrics.processingRate}</div>
          </div>
          
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-1">Efficiency</div>
            <div className="text-xl font-bold">{pipelineMetrics.efficiency}%</div>
          </div>
          
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-1">Alignment</div>
            <div className="text-xl font-bold">{pipelineMetrics.alignment}%</div>
          </div>
          
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-1">Resonance</div>
            <div className="text-xl font-bold">{pipelineMetrics.resonance}%</div>
          </div>
          
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-1">Dimensions</div>
            <div className="text-xl font-bold">24D</div>
          </div>
          
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-1">Status</div>
            <div className="text-xl font-bold text-amber-400">Active</div>
          </div>
        </div>
      </motion.div>

      {/* Current Stage Details */}
      <motion.div 
        className="glass-panel p-5 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className={`p-2 rounded-full ${getStatusBg(pipelineStages[activeStage-1].status)} mr-3`}>
              <GitBranch className={`h-5 w-5 ${getStatusColor(pipelineStages[activeStage-1].status)}`} />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{pipelineStages[activeStage-1].name}</h2>
              <p className="text-sm text-gray-400">{pipelineStages[activeStage-1].description}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className={`px-3 py-1 rounded-full text-xs ${getStatusBg(pipelineStages[activeStage-1].status)} ${getStatusColor(pipelineStages[activeStage-1].status)}`}>
              {getStatusText(pipelineStages[activeStage-1].status)}
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        {pipelineStages[activeStage-1].status === 'in_progress' && (
          <div className="mb-6">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-400">Stage Progress</span>
              <span className="text-xs font-medium">{pipelineStages[activeStage-1].progress}%</span>
            </div>
            <div className="h-2 w-full bg-dark-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-amber-500 rounded-full transition-all duration-700"
                style={{ width: `${pipelineStages[activeStage-1].progress}%` }}
              ></div>
            </div>
          </div>
        )}
        
        {/* Tasks */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-300">Stage Tasks</h3>
          
          {pipelineStages[activeStage-1].tasks.map((task) => (
            <div 
              key={task.id}
              className={`p-4 rounded-md ${
                task.status === 'completed' ? 'bg-green-500/10 border border-green-500/20' :
                task.status === 'in_progress' ? 'bg-amber-500/10 border border-amber-500/20' :
                'bg-dark-700/50 border border-dark-600/50'
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {task.status === 'completed' ? (
                    <CheckIcon className="text-green-400 h-5 w-5" />
                  ) : task.status === 'in_progress' ? (
                    <div className="h-5 w-5 rounded-full border-2 border-amber-400 border-t-transparent animate-spin" />
                  ) : (
                    <div className="h-5 w-5 rounded-full border border-gray-600" />
                  )}
                  <span className={`text-sm font-medium ml-3 ${
                    task.status === 'completed' ? 'text-green-400' :
                    task.status === 'in_progress' ? 'text-amber-400' :
                    'text-gray-400'
                  }`}>
                    {task.name}
                  </span>
                </div>
                
                <div className="flex items-center">
                  {task.status === 'in_progress' && (
                    <button className="text-amber-400 hover:text-amber-300 p-1">
                      <Activity size={18} />
                    </button>
                  )}
                  <button className="text-gray-400 hover:text-gray-300 p-1">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Divine Timing Insights */}
      <motion.div 
        className="glass-panel p-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center">
            <Stars className="text-gold-400 mr-2 h-5 w-5" />
            Divine Timing Insights
          </h2>
          <button className="text-sm text-primary-400 hover:text-primary-300 flex items-center">
            View All <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 bg-dark-700/30 rounded-md border border-gold-500/20">
            <div className="flex items-center mb-2">
              <div className="p-1.5 rounded-full bg-gold-500/20 text-gold-400 mr-2">
                <GitMerge size={16} />
              </div>
              <span className="text-sm font-medium text-gold-400">Optimal Flow Alignment</span>
            </div>
            <p className="text-sm text-gray-300">
              Current processing aligns with optimal energy flows from 24D matrices. Maintaining this timing will enhance efficiency by approximately 17%.
            </p>
          </div>
          
          <div className="p-4 bg-dark-700/30 rounded-md border border-secondary-500/20">
            <div className="flex items-center mb-2">
              <div className="p-1.5 rounded-full bg-secondary-500/20 text-secondary-400 mr-2">
                <Clock size={16} />
              </div>
              <span className="text-sm font-medium text-secondary-400">Synchronicity Window</span>
            </div>
            <p className="text-sm text-gray-300">
              A synchronicity window will open in approximately 32 minutes. This presents an opportunity for enhanced crystalline formation.
            </p>
          </div>
          
          <div className="p-4 bg-dark-700/30 rounded-md border border-accent-500/20">
            <div className="flex items-center mb-2">
              <div className="p-1.5 rounded-full bg-accent-500/20 text-accent-400 mr-2">
                <Activity size={16} />
              </div>
              <span className="text-sm font-medium text-accent-400">Pattern Recognition</span>
            </div>
            <p className="text-sm text-gray-300">
              Quantum pattern analysis indicates resonance with previous successful transformations. Consider applying similar parameters for optimal results.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Check icon component
const CheckIcon = ({ className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={`h-5 w-5 ${className}`} 
    viewBox="0 0 20 20" 
    fill="currentColor"
  >
    <path 
      fillRule="evenodd" 
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
      clipRule="evenodd" 
    />
  </svg>
);

export default TransformationPipeline;