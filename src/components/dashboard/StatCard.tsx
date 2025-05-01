import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  positive: boolean;
  icon: ReactNode;
  color: 'primary' | 'secondary' | 'accent' | 'gold';
}

const StatCard = ({ title, value, trend, positive, icon, color }: StatCardProps) => {
  const getBgColor = () => {
    switch(color) {
      case 'primary': return 'from-primary-500/10 to-primary-600/5';
      case 'secondary': return 'from-secondary-500/10 to-secondary-600/5';
      case 'accent': return 'from-accent-500/10 to-accent-600/5';
      case 'gold': return 'from-gold-500/10 to-gold-600/5';
      default: return 'from-primary-500/10 to-primary-600/5';
    }
  };

  const getBorderColor = () => {
    switch(color) {
      case 'primary': return 'border-primary-500/20';
      case 'secondary': return 'border-secondary-500/20';
      case 'accent': return 'border-accent-500/20';
      case 'gold': return 'border-gold-500/20';
      default: return 'border-primary-500/20';
    }
  };

  return (
    <div className={`glass-panel p-5 bg-gradient-to-br ${getBgColor()} border ${getBorderColor()}`}>
      <div className="flex justify-between items-start mb-2">
        <div className="text-sm font-medium text-gray-400">{title}</div>
        <div className="p-2 rounded-full bg-dark-800/50">{icon}</div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <motion.div 
            className="text-2xl font-bold" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {value}
          </motion.div>
          <div className={`text-xs mt-1 ${positive ? 'text-green-400' : 'text-red-400'}`}>
            {positive ? '↑' : '↓'} {trend} from last period
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;