import React from 'react';

const i = [
  {
    name: 'Bob Doe',
    position: 'Director',
    image:
      'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?t=st=1734961621~exp=1734965221~hmac=2f4f5c26a24dca2724e36f2a5d5c35534bc7a92ab28b7662e15bd9dfb9849901&w=826',
  },
  {
    name: 'Jane Doe',
    position: 'Volunter',
    image: 'https://img.freepik.com/free-vector/young-man-orange-hoodie_1308-175788.jpg?t=st=1734961643~exp=1734965243~hmac=3d39c9711e56ae7ee8bf58f448021932b6d06d9db96a52bbbab2c94cd3899c02&w=740',
  },
  {
    name: 'John Doe',
    position: 'Volunter',
    image: 'https://img.freepik.com/free-vector/happy-boy-orange-hoodie_1308-171154.jpg?t=st=1734961681~exp=1734965281~hmac=5ccea3465636f7254d89746fec913f012c2b2ac95d0ca7b44f8d35eed1ea416d&w=740',
  },
];

const AboutUs = () => {
  return (
    <div>
      <div className="mt-8 flex flex-col mb-8">
        <h1 className="text-xl font-semibold">Our Mission </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus interdum tristique. Sed nec purus nec orci tempus aliquam. Ut at elit vitae orci aliquam fermentum. Nullam nec elit
          nec nisi tincidunt scelerisque. Integer nec magna nec metus
        </p>
      </div>
      <div className="mt-8 flex flex-col mb-8">
        <h1 className="text-xl font-semibold">Our History </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus interdum tristique. Sed nec purus nec orci tempus aliquam. Ut at elit vitae orci aliquam fermentum. Nullam nec elit
          nec nisi tincidunt scelerisque. Integer nec magna nec metus
        </p>
      </div>
      <h1 className="text-xl font-semibold">Our Team</h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mt-8">
        {i.map((i, index) => (
          <div key={index} className="flex flex-col items-center justify-center bg-white rounded-md shadow-md overflow-hidden">
            <div className="h-[30vh] w-full bg-gray-300 flex justify-center items-center">
              <img src={i.image} alt={i.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{i.name}</h3>
              <p className="text-gray-600"> {i.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
