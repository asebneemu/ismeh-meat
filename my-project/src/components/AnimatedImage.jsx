import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Rota kontrolü için useLocation hook'u
import yourImage from '../assets/Pictures/anaplan.png'; // Resmi burada da import et

function AnimatedImage() {
  const location = useLocation(); // Şu anki rotayı almak için kullanılıyor
  const [showImage, setShowImage] = useState(true); // Başlangıçta resmi göster
  const [isAnimating, setIsAnimating] = useState(false); // Animasyon kontrolü için state
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024); // Ekran genişliği kontrolü

  // Sadece anasayfada görüntülemek için rota kontrolü
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Ekran genişliğini kontrol et
    };

    window.addEventListener('resize', handleResize); // Resize olayını dinle

    if (isHomePage && isLargeScreen) {
      const timer = setTimeout(() => {
        if (showImage && !isAnimating) {
          setIsAnimating(true); // 15 saniye sonra animasyonu başlat
          setTimeout(() => {
            setShowImage(false); // Animasyon bittiğinde resmi gizle
          }, 1000); // Animasyon süresi
        }
      }, 5000); // 5 saniye sonra

      return () => {
        clearTimeout(timer); // Timer'ı temizle
        window.removeEventListener('resize', handleResize); // Resize dinleyicisini temizle
      };
    }
  }, [showImage, isAnimating, isHomePage, isLargeScreen]);

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true); // Animasyonu başlat
      setTimeout(() => {
        setShowImage(false); // Animasyon bittiğinde resmi gizle
      }, 1000); // Animasyon süresi
    }
  };

  return (
    <>
      {isHomePage && showImage && isLargeScreen && ( // Sadece anasayfada ve büyük ekranlarda gösterilecek
        <div className="fixed top-0 left-0 right-0 flex justify-center z-50" onClick={handleClick}>
          <img 
            src={yourImage} 
            alt="Animasyonlu Resim" 
            className={`transition-transform transform ${isAnimating ? 'animate-slideOut' : 'animate-slideIn'}`} 
          />
        </div>
      )}
    </>
  );
}

export default AnimatedImage;
