import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Visualization from './pages/Visualization';
import SecurityMonitor from './pages/SecurityMonitor';
import TransformationPipeline from './pages/TransformationPipeline';
import Settings from './pages/Settings';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/visualization" element={<Visualization />} />
        <Route path="/security" element={<SecurityMonitor />} />
        <Route path="/transformation" element={<TransformationPipeline />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
}

export default App;