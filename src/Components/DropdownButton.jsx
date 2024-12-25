import React, { useState } from 'react';

const DropdownButton = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const options = ['All', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className="justify-center w-full px-4 py-2 text-sm font-medium text-black rounded-md border-zinc-200 border-2 shadow-inner focus:outline-none">
        Breed
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
          <div className="py-1">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  onSelect(option.toLowerCase());
                  setIsOpen(false);
                }}
                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
