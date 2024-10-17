import { Link } from 'react-router-dom';
import topImage from '../../assets/Pictures/top-image.png';
import videoDana from '../../assets/Pictures/dana-background-video.mp4';
import videoKuzu from '../../assets/Pictures/kuzu-background-video.mp4';
import videoTavuk from '../../assets/Pictures/tavuk-background-video.mp4';
import videoSakatat from '../../assets/Pictures/sakatat-background-video.mp4';
import backgroundImg from '../../assets/Pictures/products-bg.png';
import homepng from "../../assets/Pictures/home.png";

const Products = () => {
    
    return (
        <div 
            className="flex flex-col items-center" 
            style={{
                backgroundImage: `url(${backgroundImg})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                minHeight: '100vh'
            }}
        >
            <div className="flex justify-center items-center mt-10">
                <div className="bg-black bg-opacity-80 rounded-full flex justify-center items-center" style={{ width: '200px', height: '200px' }}>
                    <img src={topImage} alt="Top Image" className="w-48 h-auto" />
                </div>
            </div>
            <h1 className="text-4xl font-bold mb-8 mt-[3%]">ÜRÜNLERİMİZ</h1>

            <div className="flex flex-wrap justify-center w-full px-10 py-10">
                <div className="border-4 border-black w-full sm:w-[45%] md:w-[22%] p-2 mb-4 relative sm:mx-2">
                    <div className="relative w-full h-[200px]">
                        <video
                            autoPlay
                            loop
                            muted
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src={videoDana} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <Link to="/dana">
                                <h1 className="text-white text-xl font-bold text-center">DANA ETİ ÜRÜNLERİ</h1>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Kuzu Eti Ürünleri Divi */}
                <div className="border-4 border-black w-full sm:w-[45%] md:w-[22%] p-2 mb-4 relative sm:mx-2">
                    <div className="relative w-full h-[200px]">
                        <video
                            autoPlay
                            loop
                            muted
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src={videoKuzu} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <Link to="/kuzu">
                                <h1 className="text-white text-xl font-bold text-center">KUZU ETİ ÜRÜNLERİ</h1>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Tavuk Eti Ürünleri Divi */}
                <div className="border-4 border-black w-full sm:w-[45%] md:w-[22%] p-2 mb-4 relative sm:mx-2">
                    <div className="relative w-full h-[200px]">
                        <video
                            autoPlay
                            loop
                            muted
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src={videoTavuk} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <Link to="/tavuk">
                                <h1 className="text-white text-xl font-bold text-center">TAVUK ETİ ÜRÜNLERİ</h1>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Sakatat Ürünleri Divi */}
                <div className="border-4 border-black w-full sm:w-[45%] md:w-[22%] p-2 mb-4 relative sm:mx-2">
                    <div className="relative w-full h-[200px]">
                        <video
                            autoPlay
                            loop
                            muted
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src={videoSakatat} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <Link to="/sakatat">
                                <h1 className="text-center text-white text-xl font-bold">SAKATAT ÜRÜNLERİ</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Home Butonu Sağ Üstte */}
            <Link to="/" className="fixed top-4 right-4 rounded-full bg-white p-5 shadow-md">
                <img src={homepng} alt="Home" className="w-8 h-8" />
            </Link>
        </div>
    );
};

export default Products;
