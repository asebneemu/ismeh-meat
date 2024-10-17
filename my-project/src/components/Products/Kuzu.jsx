import KuzuProducts from './KuzuProducts';
import MobilKuzuProducts from './MobilKuzuProducts';

const Kuzu = () => {
    return (
        <div>
            {/* lg ve üstü ekranlar için */}
            <div className="hidden lg:block">
                <KuzuProducts />
            </div>

            {/* lg altı ekranlar için */}
            <div className="block lg:hidden">
                <MobilKuzuProducts />
            </div>
        </div>
    );
};

export default Kuzu;
