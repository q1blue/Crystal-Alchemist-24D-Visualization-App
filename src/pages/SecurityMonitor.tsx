import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Lock, 
  Server, 
  Shield, 
  Users,
  XCircle
} from 'lucide-react';

// Mock security data
const securityData = {
  securityLevel: 'Maximum',
  threatLevel: 'Low',
  lastScan: '12 minutes ago',
  activeShields: 4,
  totalShields: 4,
  encryptionStrength: '256-bit Quantum',
  recentIncidents: [
    { 
      id: 1, 
      type: 'Blocked', 
      description: 'Unauthorized access attempt from 185.72.xx.xx', 
      time: '14 minutes ago',
      severity: 'medium'
    },
    { 
      id: 2, 
      type: 'Warning', 
      description: 'Unusual authentication pattern detected', 
      time: '1 hour ago',
      severity: 'low'
    },
    { 
      id: 3, 
      type: 'Blocked', 
      description: 'Suspicious API call attempt', 
      time: '3 hours ago',
      severity: 'medium'
    },
    { 
      id: 4, 
      type: 'Critical', 
      description: 'Multiple failed authentication attempts for admin user', 
      time: '6 hours ago',
      severity: 'high'
    },
  ],
  systemHealth: [
    { name: 'Quantum Shield', status: 'Active', health: 100 },
    { name: 'Neural Firewall', status: 'Active', health: 97 },
    { name: 'Crystal Encryption', status: 'Active', health: 100 },
    { name: 'Dimension Gateway', status: 'Active', health: 93 },
  ]
};

const SecurityMonitor = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const getIncidentIcon = (type: string) => {
    switch (type) {
      case 'Blocked':
        return <XCircle size={18} className="text-red-400" />;
      case 'Warning':
        return <AlertTriangle size={18} className="text-amber-400" />;
      case 'Critical':
        return <AlertTriangle size={18} className="text-red-500" />;
      default:
        return <CheckCircle size={18} className="text-green-400" />;
    }
  };

  const getIncidentClass = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'border-l-2 border-red-500 bg-red-500/10';
      case 'medium':
        return 'border-l-2 border-amber-500 bg-amber-500/5';
      case 'low':
        return 'border-l-2 border-blue-500 bg-blue-500/5';
      default:
        return 'border-l-2 border-gray-500 bg-dark-700/50';
    }
  };

  return (
    <div className="h-full">
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl font-bold mb-2">
          Security <span className="gradient-text">Monitor</span>
        </h1>
        <p className="text-gray-400">
          Real-time cybersecurity monitoring and threat detection
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="mb-6 border-b border-dark-700">
        <div className="flex space-x-6">
          <button
            className={`pb-3 text-sm font-medium ${
              activeTab === 'overview'
                ? 'text-primary-400 border-b-2 border-primary-400'
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`pb-3 text-sm font-medium ${
              activeTab === 'incidents'
                ? 'text-primary-400 border-b-2 border-primary-400'
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('incidents')}
          >
            Incidents
          </button>
          <button
            className={`pb-3 text-sm font-medium ${
              activeTab === 'system'
                ? 'text-primary-400 border-b-2 border-primary-400'
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('system')}
          >
            System Health
          </button>
        </div>
      </div>

      {/* Status Overview */}
      {activeTab === 'overview' && (
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* Top Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass-panel p-5">
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm font-medium text-gray-400">Security Level</div>
                <div className="p-2 rounded-full bg-dark-800/50">
                  <Shield className="text-green-400 h-5 w-5" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div className="text-xl font-bold text-green-400">{securityData.securityLevel}</div>
              </div>
            </div>

            <div className="glass-panel p-5">
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm font-medium text-gray-400">Threat Level</div>
                <div className="p-2 rounded-full bg-dark-800/50">
                  <AlertTriangle className="text-green-400 h-5 w-5" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div className="text-xl font-bold text-green-400">{securityData.threatLevel}</div>
              </div>
            </div>

            <div className="glass-panel p-5">
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm font-medium text-gray-400">Last Full Scan</div>
                <div className="p-2 rounded-full bg-dark-800/50">
                  <Clock className="text-primary-400 h-5 w-5" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div className="text-xl font-bold">{securityData.lastScan}</div>
              </div>
            </div>

            <div className="glass-panel p-5">
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm font-medium text-gray-400">Active Shields</div>
                <div className="p-2 rounded-full bg-dark-800/50">
                  <Lock className="text-accent-400 h-5 w-5" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div className="text-xl font-bold">
                  {securityData.activeShields}/{securityData.totalShields}
                </div>
              </div>
            </div>
          </div>

          {/* Security Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Status Panel */}
            <div className="glass-panel p-5 lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Security Status</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Overall Security Status</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">Optimal</span>
                  </div>
                  <div className="h-2 w-full bg-dark-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Neural Network Integrity</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">Strong</span>
                  </div>
                  <div className="h-2 w-full bg-dark-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-500 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Quantum Encryption</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">Secure</span>
                  </div>
                  <div className="h-2 w-full bg-dark-700 rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Dimensional Firewall</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-amber-500/20 text-amber-400">Attention</span>
                  </div>
                  <div className="h-2 w-full bg-dark-700 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="glass-panel p-3">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-dark-800/50 mr-3">
                      <Users className="text-primary-400 h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">User Authentication</div>
                      <div className="text-xs text-green-400">All systems secure</div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-panel p-3">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-dark-800/50 mr-3">
                      <Server className="text-accent-400 h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Data Integrity</div>
                      <div className="text-xs text-green-400">No vulnerabilities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recent Incidents Panel */}
            <div className="glass-panel p-5 h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Recent Incidents</h2>
                <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                  All Resolved
                </span>
              </div>
              
              <div className="space-y-3">
                {securityData.recentIncidents.slice(0, 3).map((incident) => (
                  <div 
                    key={incident.id} 
                    className={`p-3 rounded-md ${getIncidentClass(incident.severity)}`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        {getIncidentIcon(incident.type)}
                        <span className="text-sm font-medium ml-2">{incident.type}</span>
                      </div>
                      <div className="text-xs text-gray-400">{incident.time}</div>
                    </div>
                    <p className="text-xs text-gray-300 mt-1">{incident.description}</p>
                  </div>
                ))}
              </div>
              
              <button className="mt-4 text-xs text-primary-400 hover:text-primary-300">
                View all incidents
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Incidents Tab */}
      {activeTab === 'incidents' && (
        <motion.div 
          className="glass-panel p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Security Incidents</h2>
            <div className="flex gap-2">
              <select className="bg-dark-700 text-sm rounded-md border border-dark-600 p-2">
                <option>All Types</option>
                <option>Blocked</option>
                <option>Warning</option>
                <option>Critical</option>
              </select>
              <select className="bg-dark-700 text-sm rounded-md border border-dark-600 p-2">
                <option>Last 24 Hours</option>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-4">
            {securityData.recentIncidents.map((incident) => (
              <div 
                key={incident.id} 
                className={`p-4 rounded-md ${getIncidentClass(incident.severity)}`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {getIncidentIcon(incident.type)}
                    <span className="text-sm font-medium ml-2">{incident.type}</span>
                  </div>
                  <div className="text-xs text-gray-400">{incident.time}</div>
                </div>
                <p className="text-sm text-gray-300 mt-2">{incident.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <div className="text-xs text-gray-400">
                    Severity: <span className={`font-medium ${
                      incident.severity === 'high' ? 'text-red-400' : 
                      incident.severity === 'medium' ? 'text-amber-400' : 
                      'text-blue-400'
                    }`}>
                      {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                    </span>
                  </div>
                  <button className="text-xs text-primary-400 hover:text-primary-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* System Health Tab */}
      {activeTab === 'system' && (
        <motion.div 
          className="glass-panel p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-xl font-semibold mb-6">System Health</h2>
          
          <div className="space-y-6">
            {securityData.systemHealth.map((system, index) => (
              <div key={index} className="border-b border-dark-700 pb-5 last:border-0">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full ${
                      system.status === 'Active' ? 'bg-green-500/10 text-green-400' : 'bg-amber-500/10 text-amber-400'
                    }`}>
                      <Shield className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium">{system.name}</div>
                      <div className={`text-xs ${
                        system.status === 'Active' ? 'text-green-400' : 'text-amber-400'
                      }`}>
                        {system.status}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">{system.health}%</div>
                    <div className="text-xs text-gray-400">Health</div>
                  </div>
                </div>
                
                <div className="h-2 w-full bg-dark-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      system.health > 90 ? 'bg-green-500' :
                      system.health > 70 ? 'bg-accent-500' :
                      'bg-amber-500'
                    }`} 
                    style={{ width: `${system.health}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="glass-button py-3 flex items-center justify-center gap-2">
              <Shield className="h-5 w-5" />
              Run Security Scan
            </button>
            <button className="glass-button py-3 flex items-center justify-center gap-2">
              <Lock className="h-5 w-5" />
              Update Security Protocols
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SecurityMonitor;