
const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-gray-700 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-700 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm">Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm">Developers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-700 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm">GDPR</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-700 mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm">Discord</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">GameSnacks</span>
            </a>
          </div>
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} GameSnacks. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
