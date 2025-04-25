
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Menu, X, Search } from "lucide-react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeItem, setActiveItem] = useState("หน้าหลัก");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add animation on component mount
    setIsVisible(true);

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "หน้าหลัก", href: "/" },
    { name: "เกี่ยวกับ อบจ.", href: "#about" },
    { name: "โครงสร้างองค์กร", href: "/structure" },
    { name: "นโยบายและยุทธศาสตร์", href: "#policy" },
    { name: "นโยบายผู้บริหาร", href: "#executive" },
    { name: "แผนพัฒนาท้องถิ่น", href: "#development" },
    { name: "เอกสารเผยแพร่", href: "#documents" },
    { name: "ติดต่อเรา", href: "#contact" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      {/* Top blue bar */}
      <div className={`bg-lamphun-primary py-1 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto">
          <p className="text-white text-sm text-right">เว็บไซต์ราชการองค์การบริหารส่วนจังหวัดลำพูน</p>
        </div>
      </div>
      
      {/* Main header */}
      <div className={`bg-white ${isScrolled ? 'py-2' : 'py-3'} transition-all duration-300`}>
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-3 px-4 md:px-0">
            {/* Logo */}
            <div className={`flex items-center space-x-3 transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <img 
                src="/lovable-uploads/2eef0083-fcad-4c0c-9d51-bdac581bf5ca.png" 
                alt="Lamphun Provincial Administrative Organization Logo" 
                className="h-12 w-12"
              />
              <div>
                <h1 className="text-sm md:text-base font-bold text-lamphun-dark">องค์การบริหารส่วนจังหวัดลำพูน</h1>
                <p className="text-xs md:text-sm text-gray-600">Lamphun Provincial Administrative Organization</p>
              </div>
            </div>
            
            {/* Facebook and Mobile Menu Toggle */}
            <div className={`flex items-center space-x-2 transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="hidden md:block">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                  <Button variant="ghost" size="icon" className="text-lamphun-primary">
                    <Facebook size={20} />
                  </Button>
                </a>
              </div>
              
              <Button variant="ghost" size="sm" className="md:hidden" onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop Navigation - New Style */}
      <div className={`hidden md:block bg-gray-800 text-white transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Search Icon */}
            <div className="py-2">
              <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700 rounded-full p-2">
                <Search size={20} />
              </Button>
            </div>
            
            {/* Menu Items */}
            <nav className="flex">
              <ul className="flex">
                {menuItems.map((item, index) => (
                  <li key={index} className="group">
                    <Link 
                      to={item.href}
                      className={`block px-4 py-3 transition-colors hover:bg-gray-700 whitespace-nowrap relative ${
                        activeItem === item.name ? 'after:content-[""] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-white' : ''
                      }`}
                      onClick={() => setActiveItem(item.name)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav 
          className="md:hidden bg-white shadow-lg absolute w-full z-50 overflow-hidden"
          style={{
            animation: mobileMenuOpen ? 'accordion-down 0.3s ease-out' : 'accordion-up 0.3s ease-out'
          }}
        >
          <div className="px-4 py-2">
            <div className="flex items-center justify-between mb-4">
              <div className="relative w-full">
                <Input 
                  type="text" 
                  placeholder="ค้นหา..." 
                  className="w-full rounded-full bg-gray-100 border-0 focus:ring-2 focus:ring-lamphun-primary"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="ml-2">
                <Button variant="ghost" size="icon" className="text-lamphun-primary">
                  <Facebook size={20} />
                </Button>
              </a>
            </div>
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href} 
                    className={`block px-4 py-2 hover:bg-lamphun-light rounded-md transition-colors ${
                      activeItem === item.name ? 'bg-lamphun-light text-lamphun-primary font-medium' : ''
                    }`}
                    onClick={() => {
                      setActiveItem(item.name);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
