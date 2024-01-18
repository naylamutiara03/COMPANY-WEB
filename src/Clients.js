import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Clients() {
  const clientData = [
    { id: 1, name: 'Client A', image: 'path/to/image1.jpg' },
    { id: 2, name: 'Client B', image: 'path/to/image2.jpg' },
    { id: 3, name: 'Client C', image: 'path/to/image3.jpg' },
    { id: 4, name: 'Client D', image: 'path/to/image4.jpg' },
  ];

  return (
    <div>
        <Navbar/>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto mt-4">
        <link href="https://unpkg.com/tailwindcss@^2.2/dist/tailwind.min.css" rel="stylesheet" />
        {clientData.map((client) => (
        <div key={client.id} className="bg-red-600 p-2 relative flex flex-col items-center rounded">
            <img src={client.image} alt={client.name} className="max-w-full h-auto" style={{ width: '80%' }} />
            <div className="text-white text-center mt-2">
                <p>{client.name}</p>
                <p>More Details</p>
            </div>
            </div>
            ))}
        </div>
        <Footer/>
    </div>
    
  );
}

export default Clients;
