import { useEffect, useState } from 'react';
import Filter from '../Components/Filter.jsx';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Sphynx' },
  { name: 'Shadow', age: '1', breed: 'Peterbald' },
  { name: 'Pumpkin', age: '3', breed: 'Birman' },
  { name: 'Luna', age: '4', breed: 'Abyssinian' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const handleFilterChange = ({ searchQuery, selectedBreed }) => {
    const filtered = cats.filter((cat) => {
      const matchesSearch = cat.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBreed = selectedBreed === 'all' || cat.breed.toLowerCase() === selectedBreed.toLowerCase();
      return matchesSearch && matchesBreed;
    });

    setFilteredCats(filtered);
  };

  return (
    <section className="text-center mt-4">
      <Filter onFilterChange={handleFilterChange} />
      <div className="border-b-2"> </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mt-4">
        {filteredCats.map((cat, index) => (
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
  );
}
