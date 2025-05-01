import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Clock,
  Database,
  Lock,
  Shield,
  Users,
} from 'lucide-react';
import ActivityChart from '../components/charts/ActivityChart';
import StatCard from '../components/dashboard/StatCard';
import SecurityStatusCard from '../components/dashboard/SecurityStatusCard';
import CrystalPatternCard from '../components/dashboard/CrystalPatternCard';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTime, setActiveTime] = useState('week');

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <motion.h1 
          className="text-3xl font-bold mb-2 sm:mb-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          Crystal Command <span className="gradient-text">Center</span>
        </motion.h1>
        
        <motion.div 
          className="flex space-x-1 bg-dark-700/50 p-1 rounded-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <button
            className={`px-3 py-1 text-sm rounded-md transition ${
              activeTime === 'day' ? 'bg-primary-500/30 text-white' : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTime('day')}
          >
            Day
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-md transition ${
              activeTime === 'week' ? 'bg-primary-500/30 text-white' : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTime('week')}
          >
            Week
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-md transition ${
              activeTime === 'month' ? 'bg-primary-500/30 text-white' : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTime('month')}
          >
            Month
          </button>
        </motion.div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div {...fadeIn} transition={{ duration: 0.4, delay: 0.1 }}>
          <StatCard 
            title="Active Dimensions" 
            value="24/24" 
            trend="+2" 
            positive={true}
            icon={<Activity className="text-primary-400" />}
            color="primary"
          />
        </motion.div>
        
        <motion.div {...fadeIn} transition={{ duration: 0.4, delay: 0.2 }}>
          <StatCard 
            title="Data Processed" 
            value="6.8 TB" 
            trend="+14%" 
            positive={true}
            icon={<Database className="text-accent-400" />}
            color="accent"
          />
        </motion.div>
        
        <motion.div {...fadeIn} transition={{ duration: 0.4, delay: 0.3 }}>
          <StatCard 
            title="Cyberattack Attempts" 
            value="142" 
            trend="-8%" 
            positive={true}
            icon={<Shield className="text-gold-400" />}
            color="gold"
          />
        </motion.div>
        
        <motion.div {...fadeIn} transition={{ duration: 0.4, delay: 0.4 }}>
          <StatCard 
            title="Active Users" 
            value="1,248" 
            trend="+23%" 
            positive={true}
            icon={<Users className="text-secondary-400" />}
            color="secondary"
          />
        </motion.div>
      </div>

      {/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Activity Chart */}
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="glass-panel p-5 h-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Multi-Dimensional Activity</h2>
              <button className="text-xs text-primary-400 hover:text-primary-300 flex items-center">
                View Details <ArrowRight size={14} className="ml-1" />
              </button>
            </div>
            <div className="h-[300px]">
              <ActivityChart timeframe={activeTime} />
            </div>
          </div>
        </motion.div>

        {/* Right column - Security Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SecurityStatusCard />
        </motion.div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Crystal Pattern Analysis */}
        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <CrystalPatternCard />
        </motion.div>

        {/* Recent Timeline */}
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="glass-panel p-5 h-full">
            <h2 className="text-xl font-semibold mb-4">Divine Timing Timeline</h2>
            
            <div className="space-y-4">
              <div className="relative pl-6 pb-5 border-l border-dark-600">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-white">Security Enhancement Completed</h3>
                    <p className="text-xs text-gray-400 mt-1">Quantum encryption algorithms successfully implemented</p>
                  </div>
                  <div className="flex items-center text-xs text-gray-400">
                    <Clock size={14} className="mr-1" />
                    12 minutes ago
                  </div>
                </div>
              </div>
              
              <div className="relative pl-6 pb-5 border-l border-dark-600">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-accent-500"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-white">New Pattern Detected</h3>
                    <p className="text-xs text-gray-400 mt-1">AI identified a novel crystalline structure in dimension 17</p>
                  </div>
                  <div className="flex items-center text-xs text-gray-400">
                    <Clock size={14} className="mr-1" />
                    43 minutes ago
                  </div>
                </div>
              </div>
              
              <div className="relative pl-6 pb-5 border-l border-dark-600">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gold-500"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-white">Transformation Pipeline Optimized</h3>
                    <p className="text-xs text-gray-400 mt-1">Processing efficiency increased by 28%</p>
                  </div>
                  <div className="flex items-center text-xs text-gray-400">
                    <Clock size={14} className="mr-1" />
                    2 hours ago
                  </div>
                </div>
              </div>
              
              <div className="relative pl-6">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-red-500"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-white">Security Alert</h3>
                    <p className="text-xs text-gray-400 mt-1">Attempted unauthorized access blocked</p>
                  </div>
                  <div className="flex items-center text-xs text-gray-400">
                    <Clock size={14} className="mr-1" />
                    4 hours ago
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              className="mt-4 text-xs text-primary-400 hover:text-primary-300 flex items-center"
              onClick={() => navigate('/transformation')}
            >
              View Full Timeline <ArrowRight size={14} className="ml-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;