import videoSakatat from '../../assets/Pictures/sakatat-background-video.mp4'; // Sakatat arka plan videosu
import { sakatatProducts } from '../../data'; // Sakatat ürün verilerini import ettik
import backgroundImg from '../../assets/Pictures/bg-bg-sakatat.png'; // Arka plan resmi
import { Link } from 'react-router-dom'; // Link bileşeni import edildi
import geriIcon from '../../assets/Pictures/geri.png'; // Geri butonu resmi
import homeIcon from '../../assets/Pictures/home.png'; // Ana sayfa butonu resmi

const SakatatProducts = () => {
    return (
        <div 
            className="relative w-full h-screen flex justify-center items-center" 
            style={{
                backgroundImage: `url(${backgroundImg})`, // Arka plan resmi
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
            }} // Arka plan resmi ayarları
        >
            <div className="relative w-[80%] mx-4 my-6 p-2 bg-white bg-opacity-50"> {/* Dış div için şeffaf beyaz arka plan */}
                {/* Arka planda video */}
                <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-auto object-cover rounded-md"
                >
                    <source src={videoSakatat} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* İçteki div, şeffaf siyah arka plan */}
                <div className="absolute top-0 w-[95%] h-[95%] left-[2.5%] top-[2.5%] bg-black bg-opacity-50 flex flex-col justify-center items-center px-10 pb-10 pt-5 rounded-md">
                    <h1 className="text-white text-5xl mb-8">Sakatat Ürünleri</h1> {/* Başlık */}
                    
                    {/* Ürün Listesi */}
                    <div className="w-full text-white">
                        {sakatatProducts.map((product) => (
                            <div key={product.id} className="flex justify-between py-2 border-b border-gray-500">
                                <span className="text-md">{product.name}</span> {/* Ürün adı */}
                                <span className="text-md">{product.price}</span> {/* Fiyat */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Geri butonu */}
            <Link to="/products" className="absolute bottom-4 right-4"> {/* Sağ altta konumlandırma */}
                <div className="bg-white rounded-full p-4 shadow-md flex justify-center items-center"> {/* Daire boyutu */}
                    <img src={geriIcon} alt="Geri" className="w-8 h-8" /> {/* Geri butonu resmi */}
                </div>
            </Link>

            {/* Ana sayfa butonu */}
            <Link to="/" className="absolute top-4 right-4"> {/* Sağ üstte konumlandırma */}
                <div className="bg-white rounded-full p-4 shadow-md flex justify-center items-center"> {/* Daire boyutu */}
                    <img src={homeIcon} alt="Ana Sayfa" className="w-8 h-8" /> {/* Ana sayfa butonu resmi */}
                </div>
            </Link>
        </div>
    );
};

export default SakatatProducts;
