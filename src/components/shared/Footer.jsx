import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-pink-500 text-white">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand Section */}
          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-wide mb-2">
              📖 Ebook
            </h2>
            <p className="text-sm text-pink-100 mb-3">Your cozy corner for every story.</p>
            <p className="text-sm text-pink-100 leading-relaxed">
              Discover handpicked books across every genre. From bestsellers to hidden gems — we have your next favourite read.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              {['f', 'in', 'tw', 'ig'].map((s) => (
                <button
                  key={s}
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-sm font-bold"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Browse Links */}
          <div>
            <h3 className="font-serif text-base font-semibold mb-4 tracking-wide">Browse</h3>
            <ul className="space-y-2">
              {['Fiction', 'Non-Fiction', 'Children', 'Bestsellers', 'New Arrivals', 'Gift Cards'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-pink-100 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-serif text-base font-semibold mb-4 tracking-wide">Help</h3>
            <ul className="space-y-2">
              {['My Account', 'Orders', 'Returns', 'Shipping', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-pink-100 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-base font-semibold mb-3 tracking-wide">
              Book Club Newsletter
            </h3>
            <p className="text-sm text-pink-100 mb-4">
              Get weekly picks, author news & exclusive deals.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 rounded-l-lg text-sm bg-white/25 placeholder-pink-200 text-white outline-none focus:bg-white/30"
              />
              <button className="px-4 py-2 bg-pink-800 hover:bg-pink-900 transition-colors rounded-r-lg text-sm font-bold">
                Join
              </button>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full">
                Free Shipping ৳999+
              </span>
              <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full">
                30-Day Returns
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-pink-300/40 mb-5" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-pink-100">
          <span>© 2026 PageTurner Books. All rights reserved.</span>
          <div className="flex gap-5">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <Link key={item} href="#" className="hover:text-white transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;