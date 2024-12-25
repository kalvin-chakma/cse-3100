import React from 'react';

const InputField = ({ inputItems }) => {
  return (
    <div className="space-y-4">
      {inputItems.map((item, index) => (
        <div key={index}>
          <span className="block ml-2 text-sm font-medium text-gray-700">{item.name}</span>
          <input type={item.type} placeholder={item.placeholder} className="block w-[50%] p-2 border border-gray-300 rounded mt-2" />
        </div>
      ))}
    </div>
  );
};

export default InputField;
