import videoTavuk from '../../assets/Pictures/tavuk-background-video.mp4'; // Tavuk arka plan videosu
import { tavukProducts } from '../../data'; // Tavuk ürün verilerini import ettik
import backgroundImg from '../../assets/Pictures/bg-bg-tavuk4.png'; // Arka plan resmi
import { Link } from 'react-router-dom'; // Link bileşeni import edildi
import geriIcon from '../../assets/Pictures/geri.png'; // Geri butonu resmi
import homeIcon from '../../assets/Pictures/home.png'; // Ana sayfa butonu resmi

const TavukProducts = () => {
    return (
        <div 
            className="relative w-full h-screen flex justify-center items-center" 
            style={{
                backgroundImage: `url(${backgroundImg})`, 
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
                    <source src={videoTavuk} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* İçteki div, şeffaf siyah arka plan */}
                <div className="absolute top-0 w-[95%] h-[95%] left-[2.5%] top-[2.5%] bg-black bg-opacity-50 flex flex-col justify-center items-center px-10 pb-10 pt-5 rounded-md">
                    <h1 className="text-white text-4xl mb-4">Tavuk Et Ürünleri</h1> {/* Başlık */}
                    
                    {/* Ürün Listesi */}
                    <div className="w-full text-white">
                        {tavukProducts.map((product) => (
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

export default TavukProducts;
