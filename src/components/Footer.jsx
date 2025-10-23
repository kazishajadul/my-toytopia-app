import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#fdf3f0] via-[#faf0fa] to-[#f5f7fa] text-gray-700 mt-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600 mb-3">ToyTopia</h2>
          <p className="text-sm leading-relaxed">
            Discover happiness in every toy!  
            We bring you safe, creative, and fun toys  
            that spark imagination for every child.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-pink-500">Home</a></li>
            <li><a href="/blogs" className="hover:text-pink-500">Blogs</a></li>
            <li><a href="/about" className="hover:text-pink-500">About Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>Email: <a href="mailto:support@toytopia.com" className="hover:text-pink-500">support@toytopia.com</a></li>
            <li>Phone: +880 1720211545</li>
            <li>Address: Dhanmondi, Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-500"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-600"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-700"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-500 bg-white/30 backdrop-blur-md">
        <p>© {new Date().getFullYear()} ToyTopia. All rights reserved.</p>
        <p className="mt-1">Made with 💖 by Programming Hero B12</p>
      </div>
    </footer>
  );
};

export default Footer;
