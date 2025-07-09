
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Zap, Upload, BarChart3, Bell, Info } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/', icon: Zap },
    { name: 'Upload', path: '/upload', icon: Upload },
    { name: 'Dashboard', path: '/dashboard', icon: BarChart3 },
    { name: 'Alerts', path: '/alerts', icon: Bell },
    { name: 'About', path: '/about', icon: Info },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              SolarFixR
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                asChild
                variant={isActive(item.path) ? "default" : "ghost"}
                className={isActive(item.path) ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-blue-50"}
              >
                <Link to={item.path} className="flex items-center space-x-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button - Simplified for MVP */}
          <div className="md:hidden">
            <Button asChild variant="outline">
              <Link to="/upload">
                <Upload className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
