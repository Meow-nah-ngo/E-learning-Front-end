import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-light-2 font-sans pt-12 sm:pt-16">
      
      {/* Pre-Footer Banner & Navigation Links Container */}
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: CTA Title & Apply Button */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-secondary leading-tight tracking-tight">
              Let's Collect Your Card Now
            </h2>
            <button className="w-full sm:w-auto px-10 py-3.5 rounded-xl bg-primary hover:bg-primary-tint text-white text-base font-bold shadow-md transition-all duration-200 active:scale-95">
              Apply Now
            </button>
          </div>

          {/* Right Column: Footer Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
            
            {/* Company Column */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-secondary tracking-wide">Company</h3>
              <ul className="space-y-2 text-description-light font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
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

                {/* Telegram */}
                <a href="#" aria-label="Telegram" className="w-9 h-9 rounded-full bg-white border border-neutral/40 flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-all shadow-xs">
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white border border-neutral/40 flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-all shadow-xs">
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.239-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white border border-neutral/40 flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-all shadow-xs">
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
