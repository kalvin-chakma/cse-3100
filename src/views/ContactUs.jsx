import React from 'react';
import InputField from '../Components/InputField.jsx';

const inputItems = [
  { name: 'Name', type: 'text', placeholder: 'Name' },
  { name: 'Phone', type: 'Phone', placeholder: 'Phone' },
  { name: 'Email', type: 'text', placeholder: 'Email' },
];

const ContactUs = () => {
  return (
    <div className="mt-8 flex flex-col space-y-4">
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Maecenas luc
      </p>
      <div className="mt-10">
        <InputField inputItems={inputItems} />
        <button
          className="mt-8 p-2 w-28 bg-blue-300 text-sm font-semibold text-black rounded-lg 
  hover:bg-blue-400 hover:text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
