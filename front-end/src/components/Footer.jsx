import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* BRANDING */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Link to="/">
            <h1 className="text-3xl font-serif tracking-wide text-white">
              <span className="text-pink-500">Miss</span> Elegance
            </h1>
          </Link>
          <p className="text-gray-400 text-sm max-w-xs">
            Elevate your wardrobe with our premium, curated fashion collections designed for elegance and grace.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold text-white mb-2">Quick Links</h3>
          <Link to="/" className="hover:text-pink-400 transition">Home</Link>
          <Link to="/shop" className="hover:text-pink-400 transition">Shop Collection</Link>
          <Link to="/categories" className="hover:text-pink-400 transition">Categories</Link>
          <Link to="/cart" className="hover:text-pink-400 transition">View Cart</Link>
        </div>

        {/* CUSTOMER CARE */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold text-white mb-2">Customer Care</h3>
          <Link to="#" className="hover:text-pink-400 transition">Contact Us</Link>
          <Link to="#" className="hover:text-pink-400 transition">Shipping & Returns</Link>
          <Link to="#" className="hover:text-pink-400 transition">Privacy Policy</Link>
          <Link to="#" className="hover:text-pink-400 transition">Terms of Service</Link>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Miss Elegance. All rights reserved.</p>
        <p className="mt-1">Crafted with ❤️ for full-stack excellence.</p>
      </div>
    </footer>
  );
}

export default Footer;
