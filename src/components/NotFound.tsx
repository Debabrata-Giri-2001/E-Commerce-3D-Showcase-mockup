import { CiFaceFrown, CiHome } from 'react-icons/ci';
import { Link } from 'react-router-dom'; // Make sure to import Link for navigation

const NotFound = () => {
  return (
    // Centered content, full height viewport, dark background for contrast
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      
      {/* Container for the main content, with a light background and shadow */}
      <div className="rounded-2xl p-8 sm:p-12 text-center max-w-xl w-full animate-fadeInUp">
        
        {/* Large, expressive icon */}
        <CiFaceFrown size={80} className="text-yellow-400 mx-auto mb-6" />

        {/* Main 404 text */}
        <h1 className="text-6xl sm:text-7xl font-extrabold text-red-500 mb-4">
          404
        </h1>
        
        {/* Catchy headline */}
        <h2 className="text-3xl sm:text-4xl font-bold  mb-4">
          Oops! Page Not Found
        </h2>
        
        {/* Descriptive message */}
        <p className="text-lg mb-8 leading-relaxed">
          It looks like the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        
    
        {/* Call to action button */}
        <Link 
          to="/" 
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-xl font-semibold rounded-full 
                     hover:bg-blue-700 transform hover:scale-105 transition duration-300 ease-in-out 
                     focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <CiHome size={24} className="mr-3" />
          Go Back Home
        </Link>
      </div>

      {/* Optional: Footer or small message */}
      <p className="mt-8 text-gray-500 text-sm">
        If you believe this is an error, please contact support.
      </p>
    </div>
  );
};

export default NotFound;

// Optional: Add a simple keyframe animation for a subtle effect
// If you are using a global CSS file, add this:
/*
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out forwards;
}
*/