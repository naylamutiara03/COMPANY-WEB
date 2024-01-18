import React from 'react';
import imgHome from './images/foto-beranda.jpg';
import productImage1 from './images/gambar1.jpg';
import productImage2 from './images/gambar2.jpg';
import productImage3 from './images/gambar3.jpg';
import productImage4 from './images/gambar4.png';

function Home() {
  return (
    <div className="text-center">
      <link href="https://unpkg.com/tailwindcss@^2.2/dist/tailwind.min.css" rel="stylesheet" />
      
      <h1 className="text-red-600 text-4xl mb-4 mt-2 italic">NEW EVENT</h1>
      
      <div className='w-full max-h-100 mx-auto mt-2'>
        <img src={imgHome} alt="Event" />
      </div>

      <div>
        <h1 className='text-red-600 text-4xl mb-4 mt-4 font-bold'>Welcome to our Company Website!</h1>
        <p className="mx-auto italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className='text-center'>
        <h1 className='text-red-600 text-4xl mb-4 mt-6 font-bold'>PRODUCT INFORMATION</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto mt-4">
        <div className="border border-red-600 p-2">
          <img src={productImage1} alt="Product 1" className="max-w-full h-auto" />
        </div>
        <div className="border border-red-600 p-2">
          <img src={productImage2} alt="Product 2" className="max-w-full h-auto" />
        </div>
        <div className="border border-red-600 p-2">
          <img src={productImage3} alt="Product 3" className="max-w-full h-auto" />
        </div>
        <div className="border border-red-600 p-2">
          <img src={productImage4} alt="Product 4" className="max-w-full h-auto" />
        </div>
      </div>
      <div className='text-center'>
        <p>see more products...</p>
      </div>
    </div>
  );
}

export default Home;
