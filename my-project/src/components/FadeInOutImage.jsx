import myImage from '../assets/Pictures/orta-logo.png'; // Resmi import ediyoruz
import '../styles.css'; // CSS dosyasını import ediyoruz

const FadeInOutImage = () => {
    return (
        <div className="fade-in-out-container">
            <img src={myImage} alt="Fading Animation" className="fade-in-out-image" />
        </div>
    );
};

export default FadeInOutImage;
