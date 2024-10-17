import SakatatProducts from './SakatatProducts';
import MobilSakatatProducts from './MobilSakatatProducts';

const Sakatat = () => {
    return (
        <div>
            {/* lg ve üstü ekranlar için */}
            <div className="hidden lg:block">
                <SakatatProducts />
            </div>

            {/* lg altı ekranlar için */}
            <div className="block lg:hidden">
                <MobilSakatatProducts />
            </div>
        </div>
    );
};

export default Sakatat;
