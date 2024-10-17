import TavukProducts from './TavukProducts';
import MobilTavukProducts from './MobilTavukProducts';

const Tavuk = () => {
    return (
        <div>
            {/* lg ve üstü ekranlar için */}
            <div className="hidden lg:block">
                <TavukProducts />
            </div>

            {/* lg altı ekranlar için */}
            <div className="block lg:hidden">
                <MobilTavukProducts />
            </div>
        </div>
    );
};

export default Tavuk;
