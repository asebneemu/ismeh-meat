
import videoBackground from '../../assets/Pictures/dana-background-video-mobile.mp4'; // Arka plan videosu
import { danaProducts } from '../../data'; // Dana ürün verilerini import ettik
import backgroundImg from '../../assets/Pictures/bg-bg-dana2.png'; // Arka plan resmi
import { Link } from 'react-router-dom'; // Link bileşeni
import geriIcon from '../../assets/Pictures/geri.png'; // Geri butonu resmi
import homeIcon from '../../assets/Pictures/home.png'; // Ana sayfa butonu resmi

const MobilDanaProducts = () => {
  return (
    <div 
      className="relative w-full h-auto flex justify-center items-center" 
      style={{
        backgroundImage: `url(${backgroundImg})`, // Arka plan resmi
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }}
    >
      <div className="relative w-[80%] mx-4 my-6 p-2 bg-white bg-opacity-50"> {/* Şeffaf beyaz arka planlı dış div */}        
        {/* Arka planda video */}
        <video
          autoPlay
          loop
          muted
          className="w-full h-auto object-cover rounded-md"
        >
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Şeffaf siyah arka planlı iç div */}
        <div className="absolute top-0 w-[95%] h-[95%] left-[2.5%] top-[2.5%] bg-black bg-opacity-50 flex flex-col justify-center items-center px-10 pb-10 pt-5 rounded-md">
          <h1 className="text-white xs:text-4xl xxs:3xl mb-4">Dana Et Ürünleri</h1> {/* Başlık */}
          
          {/* Ürün Listesi */}
          <div className="w-full text-white">
            {danaProducts.map((product) => (
              <div key={product.id} className="flex justify-between py-2 border-b border-gray-500">
                <span className="xs:text-md xxs:text-xs">{product.name}</span> {/* Ürün adı */}
                <span className="xs:text-md xxs:text-xs">{product.price}</span> {/* Fiyat */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Geri butonu */}
      <Link to="/products" className="absolute bottom-4 right-4">
        <div className="bg-white rounded-full p-3 shadow-md flex justify-center items-center">
          <img src={geriIcon} alt="Geri" className="w-8 h-8" /> {/* Geri butonu */}
        </div>
      </Link>

      {/* Ana sayfa butonu */}
      <Link to="/" className="absolute top-4 right-4">
        <div className="bg-white rounded-full p-3 shadow-md flex justify-center items-center">
          <img src={homeIcon} alt="Ana Sayfa" className="w-8 h-8" /> {/* Ana sayfa butonu */}
        </div>
      </Link>
    </div>
  );
};

export default MobilDanaProducts;
