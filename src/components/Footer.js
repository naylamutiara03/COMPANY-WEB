import React from 'react';
import imgLoc from '../images/location.png';
import imgClock from '../images/clock.png';
import imgPhone from '../images/phone.png';
import imgEmail from '../images/email.png';

function Footer() {
  return (
    <div>
      <footer>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
        <link
          href="https://unpkg.com/tailwindcss@^2.2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <div className="p-10 bg-red-500 text-blue-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              <div className="mb-5">
                <div className="flex items-center">
                  <img src={imgLoc} alt="" className="w-5 h-5 mr-2" />
                  <h4 className="font-semibold text-white">Alamat Kami</h4>
                </div>
                <a href="#" className="bg-transparent">Jl Sultan Iskandar Muda Kav.24 | Jakarta Selatang</a>
              </div>
              <div className="mb-5">
                <div className="flex items-center">
                  <img src={imgClock} alt="" className="w-5 h-5 mr-2" />
                  <h4 className="font-semibold text-white">Jam Operasional</h4>
                </div>
                <p>Pukul 08:00 - 17:00</p>
              </div>
              <div className="mb-5">
                <div className="flex items-center">
                  <img src={imgPhone} alt="" className="w-5 h-5 mr-2" />
                  <h4 className="font-semibold text-white">Nomor Kami</h4>
                </div>
                <a href="tel:1234567890" className="bg-transparent">123-456-7890</a>
                <br />
                <a href="tel:1112223333" className="bg-transparent">111-222-3333</a>
              </div>
              <div className="mb-5">
                <div className="flex items-center">
                  <img src={imgEmail} alt="" className="w-5 h-5 mr-2" />
                  <h4 className="font-semibold text-white">Email kami</h4>
                </div>
                <a href="mailto:grahaismaya@gmail.com" className="bg-transparent">grahaismaya@gmail.com</a>
                <br />

              </div>
            </div>
          </div>
        </div>
        <div className="credit text-center bg-red-600 p-1 font-semibold text-sm text-blue-200">
          &copy; copyright @ {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
