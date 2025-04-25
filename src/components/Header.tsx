
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Menu, X, Search } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { name: "หน้าหลัก", href: "/" },
    { name: "เกี่ยวกับ อบจ.", href: "#about" },
    { name: "โครงสร้างองค์กร", href: "#structure" },
    { name: "นโยบายและยุทธศาสตร์", href: "#policy" },
    { name: "นโยบายผู้บริหาร", href: "#executive" },
    { name: "แผนพัฒนาท้องถิ่น", href: "#development" },
    { name: "เอกสารเผยแพร่", href: "#documents" },
    { name: "ติดต่อเรา", href: "#contact" },
  ];

  return (
    <header className="w-full">
      {/* Top blue bar */}
      <div className="bg-lamphun-primary py-1">
        <div className="container mx-auto">
          <p className="text-white text-sm text-right">เว็บไซต์ราชการองค์การบริหารส่วนจังหวัดลำพูน</p>
        </div>
      </div>
      
      {/* Main header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-3 px-4 md:px-0">
            {/* Logo */}
            <div className="flex items-center space-x-3">
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
            
            {/* Search, Facebook and Mobile Menu Toggle */}
            <div className="flex items-center space-x-2">
              <div className="hidden md:flex items-center space-x-2">
                <div className="relative">
                  <Input 
                    type="text" 
                    placeholder="ค้นหา..." 
                    className="w-32 lg:w-48 rounded-full bg-gray-100 border-0 focus:ring-2 focus:ring-lamphun-primary"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
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
      
      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-lamphun-secondary text-white">
        <div className="container mx-auto">
          <ul className="flex">
            {menuItems.map((item, index) => (
              <li key={index} className="group">
                <a href={item.href} className="block px-4 py-3 hover:bg-opacity-80 transition-colors whitespace-nowrap">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg absolute w-full z-50">
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
                  <a 
                    href={item.href} 
                    className="block px-4 py-2 hover:bg-lamphun-light rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
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
