import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Zap, Upload, BarChart3, Info, Menu, X } from 'lucide-react';

const ModernNavigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '/', icon: Zap },
    { name: 'Upload', path: '/upload', icon: Upload },
    { name: 'Dashboard', path: '/dashboard', icon: BarChart3 },
    { name: 'About', path: '/about', icon: Info },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gradient-to-r from-cyan-400 to-blue-500 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-black" />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SOLARFIXR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                asChild
                variant={isActive(item.path) ? "default" : "ghost"}
                className={`relative overflow-hidden transition-all duration-300 ${
                  isActive(item.path) 
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25" 
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <Link to={item.path} className="flex items-center space-x-2 px-4 py-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  asChild
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    isActive(item.path) 
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white" 
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link to={item.path} className="flex items-center space-x-2 w-full">
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ModernNavigation;