import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Bengal' },
  { name: 'Shadow', age: '1', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Siamese' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(featuredCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Maecenas luc
        </p>
      </section>

      <section className="mt-5">
        <h1 className="text-2xl font-semibold mb-4">Featured cats</h1>
        <div className="mt-2 row g-4" id="cats-container"></div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {cats.map((cat, index) => (
            <div key={index} className="flex flex-col items-center justify-center bg-white rounded-md shadow-md overflow-hidden">
              <div className="h-[25vh] w-full bg-gray-300 flex justify-center items-center">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{cat.name}</h3>
                <p className="text-gray-600">Age: {cat.age}</p>
                <p className="text-gray-600">Breed: {cat.breed}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
