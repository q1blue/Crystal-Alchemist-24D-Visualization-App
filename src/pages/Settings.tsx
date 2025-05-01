import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Bell, 
  Check, 
  ChevronDown, 
  Clock, 
  Download, 
  Eye, 
  Globe, 
  Key, 
  Lock, 
  Palette, 
  Save, 
  Shield, 
  ToggleLeft, 
  ToggleRight, 
  User
} from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [autoBackup, setAutoBackup] = useState(true);
  const [showApiKey, setShowApiKey] = useState(false);
  
  return (
    <div className="h-full">
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl font-bold mb-2">
          System <span className="gradient-text">Settings</span>
        </h1>
        <p className="text-gray-400">
          Configure and customize your Crystal Alchemist experience
        </p>
      </motion.div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Settings Navigation */}
        <motion.div 
          className="md:w-64 glass-panel p-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <nav className="space-y-1">
            <button
              className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-3 transition-colors ${
                activeTab === 'account' 
                  ? 'bg-primary-500/20 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-dark-700/50'
              }`}
              onClick={() => setActiveTab('account')}
            >
              <User size={18} />
              <span>Account</span>
            </button>
            
            <button
              className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-3 transition-colors ${
                activeTab === 'appearance' 
                  ? 'bg-primary-500/20 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-dark-700/50'
              }`}
              onClick={() => setActiveTab('appearance')}
            >
              <Palette size={18} />
              <span>Appearance</span>
            </button>
            
            <button
              className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-3 transition-colors ${
                activeTab === 'security' 
                  ? 'bg-primary-500/20 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-dark-700/50'
              }`}
              onClick={() => setActiveTab('security')}
            >
              <Shield size={18} />
              <span>Security</span>
            </button>
            
            <button
              className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-3 transition-colors ${
                activeTab === 'notifications' 
                  ? 'bg-primary-500/20 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-dark-700/50'
              }`}
              onClick={() => setActiveTab('notifications')}
            >
              <Bell size={18} />
              <span>Notifications</span>
            </button>
            
            <button
              className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-3 transition-colors ${
                activeTab === 'backup' 
                  ? 'bg-primary-500/20 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-dark-700/50'
              }`}
              onClick={() => setActiveTab('backup')}
            >
              <Download size={18} />
              <span>Backup & Restore</span>
            </button>
            
            <button
              className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-3 transition-colors ${
                activeTab === 'advanced' 
                  ? 'bg-primary-500/20 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-dark-700/50'
              }`}
              onClick={() => setActiveTab('advanced')}
            >
              <Key size={18} />
              <span>Advanced</span>
            </button>
          </nav>
        </motion.div>
        
        {/* Settings Content */}
        <motion.div 
          className="flex-1 glass-panel p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {/* Account Settings */}
          {activeTab === 'account' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
              
              <div className="space-y-6">
                {/* Profile Information */}
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-3">Profile Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                      <input 
                        type="text" 
                        className="w-full rounded-md bg-dark-700 border border-dark-600 px-3 py-2 text-white"
                        placeholder="Your Name"
                        defaultValue="Admin User"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full rounded-md bg-dark-700 border border-dark-600 px-3 py-2 text-white"
                        placeholder="email@example.com"
                        defaultValue="admin@crystal-alchemist.com"
                      />
                    </div>
                  </div>
                </div>
                
                {/* User Preferences */}
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-3">User Preferences</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">Language</div>
                        <div className="text-xs text-gray-400">Choose your preferred language</div>
                      </div>
                      <div className="flex items-center gap-1 px-3 py-1 bg-dark-700 rounded-md">
                        <Globe size={16} className="text-gray-400" />
                        <span>English</span>
                        <ChevronDown size={16} className="text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">Time Zone</div>
                        <div className="text-xs text-gray-400">Set your local time zone</div>
                      </div>
                      <div className="flex items-center gap-1 px-3 py-1 bg-dark-700 rounded-md">
                        <Clock size={16} className="text-gray-400" />
                        <span>UTC-08:00</span>
                        <ChevronDown size={16} className="text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">Dark Mode</div>
                        <div className="text-xs text-gray-400">Use dark theme throughout the application</div>
                      </div>
                      <button 
                        className="text-primary-400"
                        onClick={() => setDarkMode(!darkMode)}
                      >
                        {darkMode ? <ToggleRight size={22} /> : <ToggleLeft size={22} />}
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-dark-700 flex justify-end gap-3">
                  <button className="px-4 py-2 rounded-md border border-dark-600 text-gray-300 hover:text-white text-sm">
                    Cancel
                  </button>
                  <button className="glass-button text-sm flex items-center gap-2">
                    <Save size={16} />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Security Settings */}
          {activeTab === 'security' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Security Settings</h2>
              
              <div className="space-y-6">
                {/* Password */}
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-3">Change Password</h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Current Password</label>
                      <input 
                        type="password" 
                        className="w-full rounded-md bg-dark-700 border border-dark-600 px-3 py-2 text-white"
                        placeholder="••••••••••••"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">New Password</label>
                      <input 
                        type="password" 
                        className="w-full rounded-md bg-dark-700 border border-dark-600 px-3 py-2 text-white"
                        placeholder="••••••••••••"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Confirm New Password</label>
                      <input 
                        type="password" 
                        className="w-full rounded-md bg-dark-700 border border-dark-600 px-3 py-2 text-white"
                        placeholder="••••••••••••"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Two-Factor Authentication */}
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-3">Two-Factor Authentication</h3>
                  
                  <div className="flex items-center justify-between p-4 rounded-md bg-dark-700/50 border border-dark-600/50">
                    <div>
                      <div className="text-sm font-medium">Enable Two-Factor Authentication</div>
                      <div className="text-xs text-gray-400">Add an extra layer of security to your account</div>
                    </div>
                    <button 
                      className={`px-4 py-2 rounded-md text-sm flex items-center gap-2 ${
                        twoFactorAuth 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-dark-700 text-gray-300 border border-dark-600 hover:text-white'
                      }`}
                      onClick={() => setTwoFactorAuth(!twoFactorAuth)}
                    >
                      {twoFactorAuth ? (
                        <>
                          <Check size={16} />
                          <span>Enabled</span>
                        </>
                      ) : (
                        <>
                          <Lock size={16} />
                          <span>Enable</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
                
                {/* Session Management */}
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-3">Active Sessions</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-md bg-dark-700/50 border-l-2 border-green-500">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-green-500/10">
                          <Check size={16} className="text-green-400" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Current Session</div>
                          <div className="text-xs text-gray-400">Started 2 hours ago • Chrome on Windows</div>
                        </div>
                      </div>
                      <button className="text-xs text-primary-400 hover:text-primary-300">
                        Active
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 rounded-md bg-dark-700/50">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-dark-700/50">
                          <Check size={16} className="text-gray-400" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Mobile App</div>
                          <div className="text-xs text-gray-400">Last active 3 days ago • iPhone 13</div>
                        </div>
                      </div>
                      <button className="text-xs text-red-400 hover:text-red-300">
                        Revoke
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-dark-700 flex justify-end gap-3">
                  <button className="px-4 py-2 rounded-md border border-dark-600 text-gray-300 hover:text-white text-sm">
                    Cancel
                  </button>
                  <button className="glass-button text-sm flex items-center gap-2">
                    <Save size={16} />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Advanced Settings */}
          {activeTab === 'advanced' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Advanced Settings</h2>
              
              <div className="space-y-6">
                {/* API Keys */}
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-3">API Access</h3>
                  
                  <div className="p-4 rounded-md bg-dark-700/50 border border-dark-600/50 space-y-4">
                    <div>
                      <div className="text-sm font-medium">API Key</div>
                      <div className="text-xs text-gray-400 mb-2">Use this key to access the API programmatically</div>
                      
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-dark-800 px-3 py-2 rounded-md border border-dark-700 font-mono text-sm overflow-x-auto">
                          {showApiKey ? 'cs_ak_24D8F6A7E5B9C0D1E3F2A4B7C8D9E0F1' : '•••••••••••••••••••••••••••••••••••••••'}
                        </div>
                        <button 
                          className="p-2 rounded-md bg-dark-700 hover:bg-dark-600 text-gray-300"
                          onClick={() => setShowApiKey(!showApiKey)}
                        >
                          <Eye size={18} />
                        </button>
                      </div>
                    </div>
                    
                    <button className="text-sm text-primary-400 hover:text-primary-300">
                      Regenerate API Key
                    </button>
                  </div>
                </div>
                
                {/* Export Data */}
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-3">Export Data</h3>
                  
                  <div className="p-4 rounded-md bg-dark-700/50 border border-dark-600/50">
                    <div className="text-sm font-medium">Export All Data</div>
                    <div className="text-xs text-gray-400 mb-3">Download all your data in JSON format</div>
                    
                    <button className="px-4 py-2 rounded-md bg-dark-700 border border-dark-600 text-gray-300 hover:text-white text-sm flex items-center gap-2">
                      <Download size={16} />
                      <span>Export Data</span>
                    </button>
                  </div>
                </div>
                
                {/* Danger Zone */}
                <div>
                  <h3 className="text-sm font-medium text-red-400 mb-3">Danger Zone</h3>
                  
                  <div className="p-4 rounded-md bg-red-500/10 border border-red-500/30">
                    <div className="text-sm font-medium">Delete Account</div>
                    <div className="text-xs text-gray-400 mb-3">This action cannot be undone. All your data will be permanently deleted.</div>
                    
                    <button className="px-4 py-2 rounded-md bg-red-500/20 border border-red-500/30 text-red-400 hover:text-red-300 text-sm">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Backup Settings */}
          {activeTab === 'backup' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Backup & Restore</h2>
              
              <div className="space-y-6">
                {/* Automatic Backup */}
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-3">Automatic Backup</h3>
                  
                  <div className="flex items-center justify-between p-4 rounded-md bg-dark-700/50 border border-dark-600/50">
                    <div>
                      <div className="text-sm font-medium">Enable Automatic Backup</div>
                      <div className="text-xs text-gray-400">System will automatically back up data every 24 hours</div>
                    </div>
                    <button 
                      className="text-primary-400"
                      onClick={() => setAutoBackup(!autoBackup)}
                    >
                      {autoBackup ? <ToggleRight size={22} /> : <ToggleLeft size={22} />}
                    </button>
                  </div>
                </div>
                
                {/* Manual Backup */}
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-3">Manual Backup</h3>
                  
                  <div className="p-4 rounded-md bg-dark-700/50 border border-dark-600/50">
                    <div className="text-sm font-medium">Create Backup Now</div>
                    <div className="text-xs text-gray-400 mb-3">Generate a backup file with all current data</div>
                    
                    <button className="px-4 py-2 rounded-md bg-primary-500/20 border border-primary-500/30 text-white hover:bg-primary-500/30 text-sm flex items-center gap-2">
                      <Download size={16} />
                      <span>Create Backup</span>
                    </button>
                  </div>
                </div>
                
                {/* Restore Backup */}
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-3">Restore from Backup</h3>
                  
                  <div className="p-4 rounded-md bg-dark-700/50 border border-dark-600/50">
                    <div className="text-sm font-medium">Upload Backup File</div>
                    <div className="text-xs text-gray-400 mb-3">Restore data from a previous backup</div>
                    
                    <label className="block">
                      <span className="sr-only">Choose backup file</span>
                      <input 
                        type="file" 
                        className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-dark-700 file:text-gray-300 hover:file:bg-dark-600"
                      />
                    </label>
                  </div>
                </div>
                
                {/* Backup History */}
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-3">Backup History</h3>
                  
                  <div className="rounded-md bg-dark-700/50 border border-dark-600/50 overflow-hidden">
                    <table className="min-w-full divide-y divide-dark-600">
                      <thead className="bg-dark-800">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Size
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-dark-700/30 divide-y divide-dark-700">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-white">Today, 08:30 AM</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-300">42.3 MB</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
                              Complete
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-primary-400 hover:text-primary-300 mr-3">
                              Restore
                            </button>
                            <button className="text-gray-400 hover:text-gray-300">
                              Download
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-white">Yesterday, 08:30 AM</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-300">41.9 MB</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
                              Complete
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-primary-400 hover:text-primary-300 mr-3">
                              Restore
                            </button>
                            <button className="text-gray-400 hover:text-gray-300">
                              Download
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;