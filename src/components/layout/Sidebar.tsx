import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Activity, 
  Shield, 
  GitBranch, 
  Settings as SettingsIcon, 
  X 
} from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-dark-900 bg-opacity-70 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <motion.div
        className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 
                   transform h-screen overflow-y-auto lg:overflow-y-auto no-scrollbar 
                   w-64 flex-shrink-0 bg-dark-800 p-4 transition-transform duration-200 ease-in-out ${
                     sidebarOpen ? 'translate-x-0' : '-translate-x-64'
                   }`}
        initial={{ x: '-100%' }}
        animate={{ x: sidebarOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <div className="relative w-10 h-10 mr-3 glow-effect">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 animate-pulse-slow opacity-70"></div>
              <div className="absolute inset-1 rounded-md bg-dark-800 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current text-primary-400">
                  <path d="M12 1L1 7l11 6l11-6l-11-6zM4 10l8 4l8-4v6l-8 4l-8-4v-6z" />
                </svg>
              </div>
            </div>
            <span className="text-lg font-semibold text-white">
              Crystal <span className="gradient-text">Alchemist</span>
            </span>
          </NavLink>
          {/* Mobile close button */}
          <button
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span className="sr-only">Close sidebar</span>
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-item ${isActive ? 'active' : ''}`
            }
            end
          >
            <Home size={20} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/visualization"
            className={({ isActive }) =>
              `nav-item ${isActive ? 'active' : ''}`
            }
          >
            <Activity size={20} />
            <span>24D Visualization</span>
          </NavLink>
          <NavLink
            to="/security"
            className={({ isActive }) =>
              `nav-item ${isActive ? 'active' : ''}`
            }
          >
            <Shield size={20} />
            <span>Security Monitor</span>
          </NavLink>
          <NavLink
            to="/transformation"
            className={({ isActive }) =>
              `nav-item ${isActive ? 'active' : ''}`
            }
          >
            <GitBranch size={20} />
            <span>Divine Timing</span>
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `nav-item ${isActive ? 'active' : ''}`
            }
          >
            <SettingsIcon size={20} />
            <span>Settings</span>
          </NavLink>
        </nav>

        {/* System status */}
        <div className="mt-auto pt-4">
          <div className="glass-panel p-4 space-y-3">
            <div className="text-sm font-medium text-gray-300">System Status</div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">AI Processing</span>
              <div className="w-24 h-2 bg-dark-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary-500 to-accent-500 w-4/5 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">Security Level</span>
              <div className="w-24 h-2 bg-dark-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-green-400 w-full rounded-full"></div>
              </div>
            </div>
            <div className="text-xs text-primary-400 flex justify-end mt-2">All systems operational</div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;