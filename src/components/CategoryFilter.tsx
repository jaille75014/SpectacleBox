import React from 'react';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="flex gap-4 mb-8">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 rounded-full ${
          selectedCategory === null 
            ? 'bg-indigo-600 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Tous
      </button>
      <button
        onClick={() => onCategoryChange('spectacle')}
        className={`px-4 py-2 rounded-full ${
          selectedCategory === 'spectacle'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Spectacles
      </button>
      <button
        onClick={() => onCategoryChange('theatre')}
        className={`px-4 py-2 rounded-full ${
          selectedCategory === 'theatre'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Théâtre
      </button>
      <button
        onClick={() => onCategoryChange('festival')}
        className={`px-4 py-2 rounded-full ${
          selectedCategory === 'festival'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Festivals
      </button>
    </div>
  );
};