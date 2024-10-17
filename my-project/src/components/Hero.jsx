import { Link } from 'react-router-dom'; // Link bileşeni eklendi
import bgvideo from "../assets/Pictures/video.mp4";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center"> {/* Ekranı tamamen kaplayan div, dikey ve yatay ortalama */}
      {/* Arka planda video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={bgvideo} type="video/mp4" /> 
      </video>
      
      {/* İçerik */}
      <div className="w-[90%] md:w-[1140px] flex items-center justify-center h-[80%] p-4 md:p-8 m-4 bg-white bg-opacity-20 rounded-md"> {/* Şeffaf beyaz arka plan */}
        {/* Şeffaf siyah arka planlı iç div */}
        <div className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 bg-black bg-opacity-50 rounded-md h-[95%] space-y-4 md:space-y-8"> {/* Saydam siyah arka plan */}
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-16"> {/* Butonlar arasında mesafe artırıldı */}
            <Link 
              to="/mission" // Yönlendirme
              className="bg-gradient-to-r from-red-600 via-gray-300 to-orange-400 text-transparent bg-clip-text text-xl md:text-2xl font-bold border-2 border-transparent hover:text-red-600 transition duration-300 px-4 py-2 rounded"
            >
              Misyonumuz
            </Link>
            <Link 
              to="/products" // Ürünlerimiz linki için Link bileşeni kullanıldı
              className="bg-gradient-to-r from-red-600 via-gray-300 to-orange-400 text-transparent bg-clip-text text-xl md:text-2xl font-bold border-2 border-transparent hover:text-red-600 transition duration-300 px-4 py-2 rounded"
            >
              Ürünlerimiz
            </Link>
            <Link 
              to="/contact" // İletişim linki güncellendi
              className="bg-gradient-to-r from-red-600 via-gray-300 to-orange-400 text-transparent bg-clip-text text-xl md:text-2xl font-bold border-2 border-transparent hover:text-red-600 transition duration-300 px-4 py-2 rounded md:pr-16"
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
