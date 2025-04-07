
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-tea-cream">
      <div className="text-center p-8 tea-card max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-tea-dark-green mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">
          Oops! The page you're looking for cannot be found.
        </p>
        <p className="text-gray-600 mb-8">
          The page might have been moved, deleted, or never existed.
        </p>
        <Link
          to="/"
          className="tea-btn inline-flex items-center justify-center"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
