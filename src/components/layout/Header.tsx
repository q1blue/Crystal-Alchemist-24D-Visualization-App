import { Bell, Settings, User } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header = ({ sidebarOpen, setSidebarOpen }: HeaderProps) => {
  const [notifications, setNotifications] = useState(3);

  return (
    <header className="sticky top-0 bg-dark-800/80 backdrop-blur z-30 border-b border-dark-700/50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Left: Hamburger button */}
          <div className="flex lg:hidden">
            <button
              className="text-gray-300 hover:text-white"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>

          {/* Center: Search */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="max-w-md w-full">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full pl-10 pr-3 py-2 rounded-md text-sm 
                           bg-dark-700/50 border border-dark-600/50 
                           placeholder-gray-400 focus:outline-none focus:ring-1 
                           focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-300 hover:text-white rounded-full hover:bg-dark-700/50 relative">
              <Bell size={20} />
              {notifications > 0 && (
                <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
              )}
            </button>
            <button className="p-2 text-gray-300 hover:text-white rounded-full hover:bg-dark-700/50">
              <Settings size={20} />
            </button>
            <button className="flex items-center ml-2">
              <div className="relative w-8 h-8 rounded-full glow-effect">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 animate-pulse-slow opacity-70"></div>
                <div className="absolute inset-0.5 rounded-full bg-dark-800 flex items-center justify-center">
                  <User size={16} className="text-gray-300" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;