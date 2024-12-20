import React from 'react';
import { Music, LogIn, UserPlus } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">SpectacleBox</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
              <LogIn size={20} />
              <span>Connexion</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              <UserPlus size={20} />
              <span>Inscription</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};