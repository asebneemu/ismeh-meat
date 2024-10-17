import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import GradientLine from "./GradientLine";
import backgroundImage from '../assets/Pictures/arkaplan-mission.png';
import homeIcon from '../assets/Pictures/home.png'; // Home butonunun ikonu
import topImage from '../assets/Pictures/top-image.png';

const Mission = () => {
  const [confettiActive, setConfettiActive] = useState(true);
  const [confettiOpacity, setConfettiOpacity] = useState(1); // Opacity için state

  useEffect(() => {
    const timer = setTimeout(() => {
      // Konfeti opacity'sini yavaş yavaş azaltma
      const fadeOut = setInterval(() => {
        setConfettiOpacity(prev => {
          if (prev > 0) {
            return prev - 0.05; // Opacity'yi azalt
          } else {
            clearInterval(fadeOut);
            setConfettiActive(false); // Opacity sıfıra ulaştığında konfeti tamamen durur
            return 0;
          }
        });
      }, 100); // Her 100 milisaniyede opacity'yi 0.05 azalt

    }, 5000); // 5 saniye sonra konfeti kaybolmaya başlar

    return () => clearTimeout(timer); // Temizlik işlemi
  }, []);

  return (
    <div
      className="p-4 relative min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        opacity: 0.9
      }}
    >
      {/* Konfeti animasyonu */}
      {confettiActive && (
        <div style={{ opacity: confettiOpacity, transition: 'opacity 0.5s ease-out' }}>
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        </div>
      )}

      {/* Üstte ortalanmış resim, şeffaf siyah arka plan */}
      <div className="flex justify-center items-center mt-10">
        <div className="bg-black bg-opacity-50 rounded-full flex justify-center items-center" style={{ width: '300px', height: '300px' }}>
          <img src={topImage} alt="Top Image" className="w-72 h-auto" />
        </div>
      </div>

      {/* Ana Sayfa Resmi - Home Butonu Sağ Üstte */}
      <Link to="/" className="absolute top-4 right-4 bg-white p-4 rounded-full shadow-md">
        <img src={homeIcon} alt="Home" className="w-8 h-8" /> {/* Resmi biraz büyüttüm */}
      </Link>

      <h1 className="text-4xl font-bold text-center mt-40 mb-20 bg-gradient-to-r from-red-600 to-yellow-900 text-transparent bg-clip-text">
        MİSYONUMUZ
      </h1>
      <div className="flex flex-col md:flex-row justify-center mt-4 sm:items-center xs:items-center xxs:items-center">
        <div className="flex flex-col md:flex-row justify-between w-4/5">
          <p className="w-full md:w-1/2 xl:text-left text-xl xl:m-5 md:p-5 md:text-justify sm:text-justify md:mb-10 sm:mb-10 xs:mb-10 ">
            İsMeh-Meat olarak, 20 yılı aşkın süredir kasaplık ve gastronomi sektöründe edindiğimiz deneyimleri şimdi kendi markamız altında sizlere sunuyoruz. Uzun yıllar boyunca hem mutfakta hem de et ticaretinde çalışarak, kaliteli etin ne demek olduğunu derinlemesine öğrendik. Bu bilgi birikimimizi profesyonelliğe taşıyarak, en taze ve sağlıklı et ürünlerini müşterilerimize ulaştırmayı amaçlıyoruz. Her zaman doğallığı ve tazeliği ön planda tutuyor, en yüksek hijyen standartlarına uygun şekilde üretim yapıyoruz. Mutfakta kazandığımız titizlik ve özen ile her bir ürünü büyük bir hassasiyetle seçiyor, sofralarınıza güvenle sunuyoruz.
          </p>
          <p className="w-full md:w-1/2 xl:text-right text-xl xl:m-5 md:p-5 md:text-justify sm:text-justify md:mb-10 sm:mb-10 xs:mb-10">
            Müşterilerimize sadece lezzetli etler değil, aynı zamanda güvenilir ve uygun fiyatlı çözümler sunmak bizim için birinci öncelik. Toptan satış çözümlerimizle hem bireysel müşterilere hem de işletmelere ulaşmayı hedefliyoruz. Kaliteli ürünlerimizi en uygun fiyatlarla sunarak, herkesin bu ürünlere kolayca erişebilmesini sağlıyoruz. İsMeh-Meat olarak, taze ve sağlıklı et ürünleriyle müşterilerimize hizmet sunmanın yanı sıra, işletmelere esnek ve hızlı tedarik çözümleri sunarak işlerini destekliyoruz. Bizim için müşteri memnuniyeti ve güven en büyük motivasyon kaynağıdır; bu doğrultuda, her ürünümüzün arkasında duruyoruz.
          </p>
        </div>
      </div>
      
      <GradientLine />
    </div>
  );
};

export default Mission;
