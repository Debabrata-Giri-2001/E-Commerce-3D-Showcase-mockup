const Footer = () => {
  return (
    <footer className='w-full bg-gray-200 mt-12'>
      <div className='container mx-auto px-4 text-center'>
        <p className='text-sm sm:text-base'>
          &copy; {new Date().getFullYear()} E-Commerce 3D Showcase. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer