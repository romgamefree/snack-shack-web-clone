
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">GameSnacks</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
          <a href="#" className="text-gray-700 hover:text-primary font-medium">Categories</a>
          <a href="#" className="text-gray-700 hover:text-primary font-medium">New Games</a>
          <a href="#" className="text-gray-700 hover:text-primary font-medium">Popular</a>
        </nav>

        {/* Search and mobile menu buttons */}
        <div className="flex items-center space-x-2">
          {isSearchOpen ? (
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
              <Input 
                className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0" 
                placeholder="Search games..." 
                autoFocus 
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8" 
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-700" 
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
          )}
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-gray-700" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-md">
          <nav className="container mx-auto px-4 py-3 flex flex-col">
            <Link to="/" className="py-2 text-gray-700 hover:text-primary">Home</Link>
            <a href="#" className="py-2 text-gray-700 hover:text-primary">Categories</a>
            <a href="#" className="py-2 text-gray-700 hover:text-primary">New Games</a>
            <a href="#" className="py-2 text-gray-700 hover:text-primary">Popular</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
