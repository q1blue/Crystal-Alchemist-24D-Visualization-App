import { AlertTriangle, Check, Lock, Shield } from 'lucide-react';

const SecurityStatusCard = () => {
  return (
    <div className="glass-panel p-5 h-full">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">Security Status</h2>
        <div className="flex items-center text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
          <Check size={12} className="mr-1" />
          Secured
        </div>
      </div>
      
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-green-500/10 text-green-400 mr-3">
              <Shield size={20} />
            </div>
            <div>
              <div className="text-sm font-medium">Quantum Shield</div>
              <div className="text-xs text-gray-400">Multi-dimensional protection</div>
            </div>
          </div>
          <div className="text-green-400">Active</div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-green-500/10 text-green-400 mr-3">
              <Lock size={20} />
            </div>
            <div>
              <div className="text-sm font-medium">Crystal Encryption</div>
              <div className="text-xs text-gray-400">Crystalline matrix active</div>
            </div>
          </div>
          <div className="text-green-400">Active</div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-amber-500/10 text-amber-400 mr-3">
              <AlertTriangle size={20} />
            </div>
            <div>
              <div className="text-sm font-medium">Threat Detection</div>
              <div className="text-xs text-gray-400">Enhanced monitoring in effect</div>
            </div>
          </div>
          <div className="text-amber-400">Elevated</div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-dark-700/50">
        <div className="text-sm font-medium mb-2">Security Recent Events</div>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between items-center py-1">
            <div className="text-gray-300">Blocked Attacks</div>
            <div className="text-amber-400">24</div>
          </div>
          <div className="flex justify-between items-center py-1">
            <div className="text-gray-300">Encryption Level</div>
            <div className="text-green-400">ULTRA</div>
          </div>
          <div className="flex justify-between items-center py-1">
            <div className="text-gray-300">Last Full Scan</div>
            <div className="text-gray-400">32 min ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityStatusCard;