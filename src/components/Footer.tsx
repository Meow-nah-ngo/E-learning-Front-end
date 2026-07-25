import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-light-2 font-sans pt-12 sm:pt-16">
      
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-secondary leading-tight tracking-tight">
              Join Satriwit E-Learning Community Today!
            </h2>
            <button className="w-full sm:w-auto px-10 py-3.5 rounded-xl bg-primary hover:bg-primary-tint text-white text-base font-bold shadow-md transition-all duration-200 active:scale-95">
              Sign Up Now
            </button>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
            
            {/* Company Column */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-secondary tracking-wide">School</h3>
              <ul className="space-y-2 text-description-light font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Syllabus</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Personnel</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-secondary tracking-wide">Resources</h3>
              <ul className="space-y-2 text-description-light font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Video Guide</a></li>
              </ul>
            </div>

            {/* Contact Us Column */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-secondary tracking-wide">Contact Us</h3>
              <p className="text-description-light font-medium">hello@wdkittoolkit.com</p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                {/* YouTube */}
                <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white border border-neutral/40 flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-all shadow-xs">
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white border border-neutral/40 flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-all shadow-xs">
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white border border-neutral/40 flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-all shadow-xs">
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Crimson Copyright Bar */}
      <div className="w-full bg-primary text-white text-xs sm:text-sm py-4 px-4 sm:px-6 lg:px-8 font-medium">
        <div className="max-w-[1280px] w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>Copyright © 2024 Wdkittoolkit. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/90">
            <a href="#" className="hover:underline">Customer Service</a>
            <span>|</span>
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
