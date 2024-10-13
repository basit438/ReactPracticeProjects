import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const apiKey = "Zt5LwnQ0kqGFMN6J0yFsGVQ_tup1zUzCPaE7NZPQAow";
  const [images, setImages] = useState([]);

  const getImages = async () => {
    try {
      const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}&count=50`);
      const data = await response.json();
      setImages((prevImages) => [...prevImages, ...data]); // Append new images to the existing ones
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    getImages(); // Fetch initial set of images
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
        getImages(); // Fetch more images when user scrolls near the bottom
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove the scroll listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to ensure this runs only once

  return (

    <div className="p-5 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Unsplash Infinite Scroll</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
        {images.map((image) => (
          <div key={image.id} className="break-inside-avoid overflow-hidden rounded-lg shadow-md">
            <img
              src={image.urls?.regular}
              alt={image.alt_description || 'Unsplash Image'}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
