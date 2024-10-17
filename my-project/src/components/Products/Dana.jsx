import DanaProducts from './DanaProducts';
import MobilDanaProducts from './MobilDanaProducts';

const Dana = () => {
    return (
        <div>
            {/* lg ve üstü ekranlar için */}
            <div className="hidden lg:block">
                <DanaProducts />
            </div>

            {/* lg altı ekranlar için */}
            <div className="block lg:hidden">
                <MobilDanaProducts />
            </div>
        </div>
    );
};

export default Dana;
