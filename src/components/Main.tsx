import { image1, image2, image3, image4, image5, image6 } from '../assets';
import { Link } from 'react-router-dom';
import { products } from './Product/data';


export const ProductCard = ({ product }: any) => {
    return (
        // Card container with shadow, rounded corners, and hover effect
        <Link to={`/product/${product.id}`}>
            <div className=" rounded-xl shadow-lg hover:shadow-sm transition duration-300 overflow-hidden group bg-gray-100">
                {/* Image Container */}
                <div className="overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                    />
                </div>
                {/* Product Details */}
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                </div>

            </div>
        </Link>
    );
};


const Main = () => {
    return (
        <main className='p-4 sm:p-8 mt-4'>

            {/* main product showcase (Hero Section) */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-100 rounded-xl p-6 sm:p-12 shadow-sm'>

                {/* Text Content/Call to Action */}
                <div className='flex flex-col justify-center space-y-6 order-2 md:order-1'>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight'>
                        Discover **Amazing Product Collections**
                    </h1>
                    <h2 className='text-lg sm:text-xl text-gray-600'>
                        Shop the latest trends and styles with **3D experience**.
                    </h2>
                    <button className='w-fit px-8 py-3 text-lg font-semibold rounded-full text-white bg-gray-900 hover:bg-gray-700 transition duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50'>
                        Explore Now
                    </button>
                </div>

                {/* Image Showcase */}
                <div className='flex justify-center items-center order-1 md:order-2'>
                    <img
                        src={image3}
                        alt="3D Product Showcase"
                        className='w-full max-w-lg h-auto'
                    />
                </div>
            </div>

            {/* Product Listing Section */}
            <section className='mt-12'>
                <h3 className='text-3xl font-bold text-gray-900 mb-8 text-center md:text-left'>
                    Featured Products
                </h3>

                {/* Product Grid */}
                {/* Responsive grid: 1 column on mobile, 2 on small, 3 on medium, 4 on large */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12'>
                    {products.slice(0, 6).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}

                </div>
            </section>
        </main>
    )
}

export default Main