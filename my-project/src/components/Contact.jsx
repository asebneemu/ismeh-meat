import iletisimBg from '../assets/Pictures/iletisim-div-bg.png'; // Arka plan resmi
import iletisimBgAna from '../assets/Pictures/iletisim-bg.png'; // Yeni arka plan resmi
import { Link } from 'react-router-dom'; // Link bileşeni eklendi
import homepng from "../assets/Pictures/home.png";
import FadeInOutImage from './FadeInOutImage';

const Contact = () => {
    return (
        <div 
            className="flex flex-col items-center justify-center min-h-screen py-32" 
            style={{
                backgroundImage: `url(${iletisimBgAna})`, // Arka plan resmi
                backgroundSize: 'cover', // Resmi kaplamak için
                backgroundPosition: 'center' // Ortada konumlandır
            }}
        >
            <FadeInOutImage />
            <h1 className="py-10 text-4xl font-bold mb-8 lg:mb-[5%]">İLETİŞİM</h1> {/* Mesafe ayarı */}

            {/* İletişim Bilgileri ve Harita Konumu Divleri */}
            <div className="flex flex-col lg:flex-row flex-wrap justify-center lg:justify-between w-[90%] lg:w-[80%]">
                {/* İletişim Bilgileri Divi */}
                <div className="border-4 border-black p-1 rounded-md w-full lg:w-[48%] mb-8 lg:mb-0 flex flex-col justify-between h-auto">
                    <div 
                        className="bg-white p-6 rounded-md" 
                        style={{
                            backgroundImage: `url(${iletisimBg})`, // Arka plan resmi
                            backgroundSize: 'cover', // Resmi kaplamak için
                            backgroundPosition: 'center' // Ortada konumlandır
                        }}
                    >
                        <h2 className="text-2xl font-bold text-center">İletişim Bilgileri</h2> {/* Başlık ve merkezde hizalandı */}
                        <div className="flex flex-col"> {/* Dikey hizalama için flex-col */}
                            <p className="mt-2"><strong>İSMETCAN AKÇURAYA</strong></p>
                            <p className="mt-2"><strong>Telefon:</strong> 0 534 021 48 24</p> {/* Telefon */}
                            
                            <div className="my-4" /> {/* Boşluk */}
                            
                            <p className="mt-2"><strong>MEHMET ALİ TEMİZER</strong></p>
                            <p className="mt-2"><strong>Telefon:</strong> 0 533 293 56 07</p> {/* Telefon */}
                            
                            <div className="my-4" /> {/* Boşluk */}
                            
                            <p className="mt-2"><strong>Email:</strong> ismeh.meat@gmail.com</p> {/* Email */}
                            <p className="mt-2"><strong>Adres:</strong> Piyade Mahallesi, 1681 Cad.<br/> No: 22/A, Etimesgut/ANKARA</p> {/* Adres */}
                        </div>
                    </div>
                </div>

                {/* Harita Konumu Divi */}
                <div className="border-4 border-black p-1 rounded-md w-full lg:w-[48%] flex flex-col justify-center h-auto">
                    <div className="bg-white p-6 rounded-md flex flex-col justify-center items-center h-full"> {/* Harita divi için flex kullanıldı */}
                        <h2 className="text-2xl font-bold text-center mb-4">Harita Konumu</h2> {/* Merkezde hizalandı */}
                        {/* Harita iframe'i */}
                        <div className="h-64 w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.6739621264387!2d32.63724478051097!3d39.948682010574416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d339e24fd4b265%3A0x86e4327da439596c!2sPiyade%2C%201681.%20Cd.%20No%3A22%2C%2006794%20Etimesgut%2FAnkara!5e0!3m2!1str!2str!4v1728939759382!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Home Butonu Sağ Üstte */}
            <Link to="/" className="absolute top-4 right-4 bg-white p-4 rounded-full shadow-md">
                <img src={homepng} alt="Home" className="w-8 h-8" />
            </Link>
        </div>
    );
};

export default Contact;
