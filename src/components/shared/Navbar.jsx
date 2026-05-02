"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Logo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="ebook logo"
  >
    <rect width="32" height="32" rx="10" fill="#ec4899" />
    <rect x="8" y="7" width="12" height="18" rx="2" fill="white" opacity="0.95" />
    <rect x="11" y="7" width="12" height="18" rx="2" fill="#fda4af" />
    <rect x="13" y="11" width="7" height="1.5" rx="0.75" fill="white" opacity="0.8" />
    <rect x="13" y="14" width="5" height="1.5" rx="0.75" fill="white" opacity="0.6" />
    <rect x="13" y="17" width="6" height="1.5" rx="0.75" fill="white" opacity="0.6" />
    <circle cx="23" cy="22" r="5" fill="#f97316" />
    <path d="M21 22h4M23 20v4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/allBooks", label: "All Books" },
  { href: "/profile", label: "Profile" },
];

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <>
      <style>{`
        @keyframes nav-slide-down {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .nav-animate { animation: nav-slide-down 0.5s ease both; }
        .nav-link-pill {
          position: relative;
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 500;
          color: #6b7280;
          transition: color 0.2s ease, background 0.2s ease;
          text-decoration: none;
        }
        .nav-link-pill:hover { color: #111827; background: #f3f4f6; }
        .nav-link-pill.active { color: #ec4899; background: #fce7f3; font-weight: 600; }
        .logo-text {
          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.5px;
          background: linear-gradient(135deg, #ec4899, #f97316);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .logo-wrap {
          display: flex; align-items: center; gap: 9px;
          text-decoration: none;
          transition: transform 0.2s ease;
        }
        .logo-wrap:hover { transform: scale(1.03); }
        .btn-register {
          background: linear-gradient(135deg, #ec4899, #f97316);
          color: white; font-size: 13px; font-weight: 600;
          padding: 8px 18px; border-radius: 10px; border: none;
          cursor: pointer; text-decoration: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
          box-shadow: 0 2px 10px rgba(236,72,153,0.3);
        }
        .btn-register:hover { opacity: 0.9; transform: translateY(-1px); }
        .btn-login {
          background: transparent;
          color: #ec4899; font-size: 13px; font-weight: 600;
          padding: 7px 18px; border-radius: 10px;
          border: 1.5px solid #fda4af;
          cursor: pointer; text-decoration: none;
          transition: all 0.2s ease;
        }
        .btn-login:hover { background: #fce7f3; transform: translateY(-1px); }
        .btn-logout {
          background: #fff1f2;
          color: #e11d48; font-size: 13px; font-weight: 600;
          padding: 7px 16px; border-radius: 10px;
          border: 1.5px solid #fecdd3;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-logout:hover { background: #ffe4e6; transform: translateY(-1px); }
        .avatar-ring {
          width: 34px; height: 34px; border-radius: 50%;
          border: 2px solid #fda4af;
          overflow: hidden; display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, #fce7f3, #fff7ed);
          color: #ec4899; font-weight: 700; font-size: 13px;
          flex-shrink: 0;
        }
        .avatar-ring img { width: 100%; height: 100%; object-fit: cover; }
        .hamburger {
          display: flex; flex-direction: column; gap: 5px;
          cursor: pointer; padding: 6px; border: none; background: none;
        }
        .hamburger span {
          display: block; width: 22px; height: 2px;
          background: #6b7280; border-radius: 2px;
          transition: all 0.3s ease;
        }
        .mobile-menu {
          border-top: 1px solid #f3f4f6;
          padding: 12px 20px 16px;
          display: flex; flex-direction: column; gap: 4px;
          animation: fade-in 0.2s ease;
        }
        .mobile-link {
          padding: 10px 14px; border-radius: 10px;
          font-size: 14px; font-weight: 500; color: #374151;
          text-decoration: none; transition: background 0.15s ease;
        }
        .mobile-link:hover { background: #f9fafb; }
        .mobile-link.active { color: #ec4899; background: #fce7f3; }
      `}</style>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-pink-100/60"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        <nav className="nav-animate max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-3">
          {/* ── LOGO ── */}
          <Link href="/" className="logo-wrap">
            <Logo />
            <span className="logo-text">ebook</span>
          </Link>

          {/* ── NAV LINKS (desktop) ── */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link-pill ${pathname === href ? "active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── RIGHT ACTIONS ── */}
          <div className="flex items-center gap-2">
            {!user && (
              <div className="flex gap-2 items-center">
                <Link href="/signup" className="btn-register">
                  Register
                </Link>
                <Link href="/signin" className="btn-login">
                  Log In
                </Link>
              </div>
            )}

            {user && (
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="hidden md:flex items-center gap-2">
                  <div className="avatar-ring">
                    {user?.image ? (
                      <img
                        src={user.image}
                        alt={user.name}
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      user?.name?.charAt(0)?.toUpperCase()
                    )}
                  </div>
                  <div className="hidden lg:block">
                    <p className="text-xs font-semibold text-gray-800 leading-none">
                      {user.name}
                    </p>
                    <p className="text-[11px] text-gray-400 leading-none mt-0.5">
                      {user.email}
                    </p>
                  </div>
                </div>

                <button onClick={handleSignOut} className="btn-logout">
                  Log Out
                </button>
              </div>
            )}

            {/* ── HAMBURGER (mobile) ── */}
            <button
              className="md:hidden hamburger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span
                style={{
                  transform: menuOpen
                    ? "rotate(45deg) translate(5px, 5px)"
                    : "none",
                }}
              />
              <span style={{ opacity: menuOpen ? 0 : 1 }} />
              <span
                style={{
                  transform: menuOpen
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                }}
              />
            </button>
          </div>
        </nav>

        {/* ── MOBILE MENU ── */}
        {menuOpen && (
          <div className="md:hidden mobile-menu">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`mobile-link ${pathname === href ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}

            {user && (
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
                <div className="avatar-ring">
                  {user?.image ? (
                    <img
                      src={user.image}
                      alt={user.name}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    user?.name?.charAt(0)?.toUpperCase()
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                  <p className="text-xs text-gray-400">{user.email}</p>
                </div>
                <button onClick={handleSignOut} className="btn-logout">
                  Log Out
                </button>
              </div>
            )}
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;