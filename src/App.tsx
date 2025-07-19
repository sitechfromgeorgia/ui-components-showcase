import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GradientHero from './components/GradientHero';
import FileUploadComponent from './components/FileUpload';
import ButtonShowcase from './components/ButtonShowcase';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', title: 'Hero Section', component: GradientHero, source: 'MVPBlocks' },
    { id: 'fileupload', title: 'File Upload', component: FileUploadComponent, source: 'OriginUI' },
    { id: 'buttons', title: 'Button Components', component: ButtonShowcase, source: 'Kibo UI' },
  ];

  const activeComponent = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold text-white">🏃‍♂️ UI Showcase</h1>
              <span className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded">Marathon MCP</span>
            </div>
            
            <div className="flex space-x-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${activeSection === section.id
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }
                  `}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Source Badge */}
      {activeComponent && (
        <div className="container mx-auto px-4 pt-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-slate-400">Inspired by:</span>
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                {activeComponent.source}
              </span>
            </div>
            
            <div className="flex items-center space-x-2 text-xs text-slate-500">
              <span>Built with Marathon MCP Servers</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative">
        <AnimatePresence mode="wait">
          {activeComponent && (
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <activeComponent.component />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-800 bg-slate-900/50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">UI Libraries</h3>
              <div className="space-y-2">
                <a href="https://blocks.mvp-subha.me" className="block text-slate-400 hover:text-purple-400 transition-colors">
                  🧱 MVPBlocks - MVP component library
                </a>
                <a href="https://originui.com" className="block text-slate-400 hover:text-blue-400 transition-colors">
                  🎨 OriginUI - Advanced React hooks
                </a>
                <a href="https://kibo-ui.com" className="block text-slate-400 hover:text-green-400 transition-colors">
                  ⚡ Kibo UI - shadcn/ui components
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Technologies</h3>
              <div className="space-y-2 text-slate-400 text-sm">
                <div>React 18 + TypeScript</div>
                <div>Framer Motion for animations</div>
                <div>Tailwind CSS for styling</div>
                <div>Vite for build tooling</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Created With</h3>
              <div className="space-y-2 text-slate-400 text-sm">
                <div>🏃‍♂️ Marathon MCP Tool</div>
                <div>💻 GitHub MCP</div>
                <div>📁 Desktop Commander</div>
                <div>🧠 Marathon Memory</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-400">
              🇬🇪 Made with love in Batumi using Marathon MCP Servers
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Showcasing the power of multiple UI component libraries working together
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;