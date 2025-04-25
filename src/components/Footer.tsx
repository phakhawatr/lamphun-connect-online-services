
import React, { useState } from 'react';
import { useIntersectionObserver } from '@/utils/animations';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const footerRef = useIntersectionObserver((entry) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  });

  return (
    <footer ref={footerRef as React.RefObject<HTMLElement>} className="bg-lamphun-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-xl font-bold mb-4">องค์การบริหารส่วนจังหวัดลำพูน</h3>
            <div className="space-y-2 text-gray-300">
              <p>125 หมู่ 15 ถนนลำพูน-ป่าซาง</p>
              <p>ตำบลป่าสัก อำเภอเมือง</p>
              <p>จังหวัดลำพูน 51000</p>
              <p>โทรศัพท์: 053-597260</p>
              <p>โทรสาร: 053-597261</p>
              <p>อีเมล: info@lamphunpao.go.th</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className={`transition-all duration-700 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-xl font-bold mb-4">เมนูหลัก</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-lamphun-secondary transition-colors">หน้าหลัก</a></li>
              <li><a href="#about" className="hover:text-lamphun-secondary transition-colors">เกี่ยวกับ อบจ.</a></li>
              <li><a href="#structure" className="hover:text-lamphun-secondary transition-colors">โครงสร้างองค์กร</a></li>
              <li><a href="#policy" className="hover:text-lamphun-secondary transition-colors">นโยบายและยุทธศาสตร์</a></li>
              <li><a href="#executive" className="hover:text-lamphun-secondary transition-colors">นโยบายผู้บริหาร</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className={`transition-all duration-700 delay-400 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-xl font-bold mb-4">บริการออนไลน์</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#tax" className="hover:text-lamphun-secondary transition-colors">ยื่นแบบชำระภาษีออนไลน์</a></li>
              <li><a href="#corruption" className="hover:text-lamphun-secondary transition-colors">ระบบร้องเรียนการทุจริต</a></li>
              <li><a href="#service" className="hover:text-lamphun-secondary transition-colors">การจองบริการสาธารณะ</a></li>
              <li><a href="#documents" className="hover:text-lamphun-secondary transition-colors">เอกสารเผยแพร่</a></li>
              <li><a href="#development" className="hover:text-lamphun-secondary transition-colors">แผนพัฒนาท้องถิ่น</a></li>
            </ul>
          </div>
          
          {/* Operating Hours */}
          <div className={`transition-all duration-700 delay-600 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-xl font-bold mb-4">เวลาทำการ</h3>
            <div className="space-y-2 text-gray-300">
              <p>วันจันทร์ - วันศุกร์</p>
              <p>8:30 น. - 16:30 น.</p>
              <p>ปิดทำการวันเสาร์ - อาทิตย์</p>
              <p>และวันหยุดนักขัตฤกษ์</p>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">ติดตามเรา</h4>
              <div className="flex space-x-4">
                <a href="#facebook" className="text-white hover:text-lamphun-secondary transition-all hover:scale-110">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`border-t border-gray-700 pt-6 text-center text-sm text-gray-400 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p>© {new Date().getFullYear()} องค์การบริหารส่วนจังหวัดลำพูน. สงวนลิขสิทธิ์.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
