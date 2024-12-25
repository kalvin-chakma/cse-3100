import React, { useState } from 'react';
import DropdownButton from './DropdownButton.jsx';
import { FaSearch } from 'react-icons/fa';

const Filter = ({ onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('all');

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onFilterChange({ searchQuery: query, selectedBreed });
  };

  const handleDropdownSelection = (breed) => {
    setSelectedBreed(breed);
    onFilterChange({ searchQuery, selectedBreed: breed });
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-3xl font-semibold">Available Cats</h1>
      <div className="flex items-center gap-4">
        <FaSearch />
        <input type="text" placeholder="Search cats by name..." className="w-[35vh] p-2 border border-gray-300 rounded-md" onChange={handleSearch} value={searchQuery} />
        <DropdownButton onSelect={handleDropdownSelection} />
      </div>
    </div>
  );
};

export default Filter;
