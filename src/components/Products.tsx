import { ProductCard } from './Main'
import { products } from './Product/data'

const Products = () => {
  return (
    <>
      <section className='w-full p-4 sm:p-8 mt-4'>
        <h3 className='text-3xl font-bold text-gray-900 mb-8 text-center md:text-left'>
          Featured
        </h3>

        {/* Product Grid */}
        {/* Responsive grid: 1 column on mobile, 2 on small, 3 on medium, 4 on large */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12'>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}

        </div>
      </section>
    </>
  )
}

export default Products