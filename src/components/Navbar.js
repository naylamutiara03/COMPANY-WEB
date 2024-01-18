import React, { useState } from 'react';

function Navbar() {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible((prevVisible) => !prevVisible);
  };

  return (
    <div>
      <header className="bg-red-500 p-4">
        <link
          href="https://unpkg.com/tailwindcss@^2.2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <section className="container mx-auto flex items-center justify-between">
          <a href="index.php" className="text-2xl font-bold text-white">
            GRAHA ISMAYA
          </a>
          <div className="hidden md:flex md:items-center">
            <div id="userDropdown">
              <nav className="text-center md:text-left">
                <a
                  href="Home.js"
                  className="text-white hover:underline p-2 text-sm md:text-base"
                >
                  Home
                </a>
                <a
                  href="Clients.js"
                  className="text-white hover:underline p-2 text-sm md:text-base"
                >
                  Clients
                </a>
                <a
                  href="About.js"
                  className="text-white hover:underline p-2 text-sm md:text-base"
                >
                  About
                </a>
                <a
                  href="Contact.js"
                  className="text-white hover:underline p-2 text-sm md:text-base"
                >
                  Contact
                </a>
              </nav>
            </div>
            <div
              id="userIcon"
              className="sm:hidden text-white p-3 cursor-pointer"
              onClick={toggleSearch}
            >
              ☰
            </div>
            {searchVisible && (
              <div className="ml-3 relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-200 text-black rounded-full py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            )}
          </div>
        </section>
      </header>
    </div>
  );
}

export default Navbar;
