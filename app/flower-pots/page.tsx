"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function FlowerPotsPage() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Flower Pots", href: "/flower-pots" },
    { label: "Counter top", href: "/counter-top" },
    { label: "Sink", href: "/sink" },
    { label: "Blocks", href: "/blocks" },
    { label: "Construction", href: "/construction" },
  ];

  // MOCK PRODUCTS DATA
  const catalogProducts = [
    {
      id: 1,
      title: 'Cosapots Mondo Round Planter - 19"H-40"H',
      rating: 5,
      reviews: 1,
      price: '$379.95',
      colors: ['#eaddcd', '#9dafb0', '#818382', '#584d46', '#313231'],
      image: '/flowerpots-hero.png'
    },
    {
      id: 2,
      title: 'Cosapots Orbo Globe Sphere Planter - 20"H-30"H',
      price: '$399.95',
      colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'],
      image: '/project-flowerpot.png'
    },
    {
      id: 3,
      title: 'Cosapots Lofto Tall Round Planter - 30"H-43"H',
      rating: 5,
      reviews: 2,
      price: '$349.95',
      colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'],
      image: '/project-planters.png'
    },
    {
      id: 4,
      title: 'Cosapots Semplitio Modular Rectangle Planter Collection - 39"L x 19"W',
      price: '$749.95',
      colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'],
      image: '/project-vanity.png'
    },
    {
      id: 5,
      title: 'Cosapots Mondo High Tall Round Planter - 17" D x 30"H',
      price: '$549.95',
      colors: ['#eaddcd', '#9dafb0', '#818382', '#584d46', '#313231'],
      image: '/services-countertop.png'
    },
    {
      id: 6,
      title: 'Cosapots Reglito Cube Planter - 20"H-40"H',
      price: '$579.95',
      colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'],
      image: '/project-sinks.png'
    },
    {
      id: 7,
      title: 'Cosapots Reglo Modular Rectangle Planter Collection - 11" Wide',
      price: '$399.95',
      colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'],
      image: '/services-blocks.png'
    },
    {
      id: 8,
      title: 'Cosapots Semplitio Grand Wide Rectangle Planter - 59"L x 19"W x 23"H',
      price: '$1,299.95',
      colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'],
      image: '/banner.png'
    },
    {
      id: 9,
      title: 'Cosapots Lupo Tapered Round Planter - 15.4"H-28.3"H',
      isNew: true,
      price: '$299.95',
      colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'],
      image: '/project-stool.png'
    },
    {
      id: 10,
      title: 'Cosapots Reglito Tall Square Planter - 19"W x 31"H',
      price: '$719.95',
      colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'],
      image: '/project-flowerpot.png'
    },
    {
      id: 11,
      title: 'Cosapots Lonno Extra Large Long Rectangular Planter',
      isNew: true,
      price: '$1,699.95',
      colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'],
      image: '/project-planters.png'
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; background: #ffffff; }

        /* ── NAVBAR (Matching Homepage) ── */
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: #0d1f2d; display: flex; align-items: center;
          justify-content: space-between; padding: 0 40px; height: 70px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .logo-wrap { display: flex; align-items: center; gap: 10px; }
        .logo-bar { width: 4px; height: 36px; background: #00c27a; border-radius: 2px; }
        .logo-text { display: flex; flex-direction: column; line-height: 1; }
        .logo-main { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 22px; letter-spacing: 2px; color: #ffffff; text-transform: uppercase; }
        .logo-main span { color: #00c27a; }
        .logo-sub { font-size: 10px; letter-spacing: 4px; color: #8a9bb0; text-transform: uppercase; margin-top: 2px; }
        .nav-links { display: flex; align-items: center; gap: 32px; list-style: none; }
        .nav-links a { text-decoration: none; color: #c8d6e0; font-size: 14px; font-weight: 400; letter-spacing: 0.3px; transition: color 0.2s; }
        .nav-links a:hover { color: #ffffff; }
        .nav-links a.active { color: #ffffff; font-weight: 500; border-bottom: 2px solid #00c27a; padding-bottom: 2px; }
        .contact-btn { background: #2a3f52; color: #c8d6e0; border: none; padding: 10px 24px; border-radius: 6px; font-size: 14px; font-family: 'Inter', sans-serif; cursor: pointer; letter-spacing: 0.3px; transition: background 0.2s, color 0.2s; text-decoration: none; }
        .contact-btn:hover { background: #00c27a; color: #ffffff; }

        /* ── HERO ── */
        .hero { position: relative; width: 100%; height: 100vh; min-height: 560px; overflow: hidden; }
        .hero-bg { position: absolute; inset: 0; background-image: url('/flowerpots-hero.png'); background-size: cover; background-position: center center; background-repeat: no-repeat; filter: brightness(0.95); }
        .hero-content { position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: center; height: 100%; padding: 0 60px; max-width: 680px; }
        .hero-heading { font-family: 'Playfair Display', serif; font-size: clamp(48px, 5.5vw, 76px); font-weight: 400; color: #ffffff; line-height: 1.1; margin-bottom: 24px; text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
        .hero-body { font-size: 16px; line-height: 1.75; color: #ffffff; font-family: 'Inter', sans-serif; text-shadow: 0 1px 3px rgba(0,0,0,0.6); }
        .slider-dots { position: absolute; bottom: 30px; right: 40px; display: flex; gap: 8px; z-index: 10; }
        .dot { width: 24px; height: 8px; border-radius: 4px; background: rgba(255,255,255,0.4); cursor: pointer; }
        .dot.active { background: rgba(255,255,255,0.9); width: 32px; }

        /* ── SHOP BY SHAPE ── */
        .shop-section { padding: 90px 40px; background: #ffffff; text-align: center; }
        .shop-container { max-width: 1000px; margin: 0 auto; }
        .shop-heading { font-family: 'Playfair Display', serif; font-size: 42px; color: #1f3342; margin-bottom: 16px; font-weight: 500; }
        .shop-subheading { font-size: 15px; color: #7a8b99; max-width: 700px; margin: 0 auto 50px; line-height: 1.6; }
        
        .filter-dropdowns { display: flex; justify-content: center; gap: 60px; margin-bottom: 70px; }
        .dropdown { display: flex; justify-content: space-between; align-items: center; width: 140px; border-bottom: 1px solid #dcdcdc; padding-bottom: 8px; cursor: pointer; color: #5a6b7a; font-size: 12px; font-weight: 500; transition: border-color 0.2s; }
        .dropdown:hover { border-bottom-color: #1f3342; color: #1f3342; }

        .shapes-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .shape-card { display: flex; flex-direction: column; align-items: center; }
        .shape-img-wrap { padding: 20px 10px; height: 180px; width: 100%; display: flex; align-items: flex-end; justify-content: center; }
        .shape-btn { width: 100%; display: flex; justify-content: space-between; align-items: center; background: #1a1c20; color: #ffffff; border: none; padding: 14px 16px; font-family: 'Inter', sans-serif; font-size: 12px; letter-spacing: 0.5px; cursor: pointer; transition: background 0.2s; }
        .shape-btn:hover { background: #000000; }
        .btn-arrow { display: flex; align-items: center; justify-content: center; width: 22px; height: 22px; background: #ffffff; border-radius: 50%; color: #1a1c20; }
        .btn-arrow svg { width: 12px; height: 12px; }

        @media (max-width: 768px) {
          .navbar { padding: 0 20px; }
          .nav-links { display: none; }
          .hero-content { padding: 0 24px; }
          .hero-heading { font-size: 44px; }
          .shapes-grid { grid-template-columns: repeat(2, 1fr); }
          .filter-dropdowns { flex-wrap: wrap; gap: 20px; }
        }
        @media (max-width: 480px) {
          .shapes-grid { grid-template-columns: 1fr; }
        }

        /* ── VICTORIA PLANTERS ── */
        .victoria-section { padding: 40px 40px 80px; background: #ffffff; text-align: left; }
        .victoria-container { max-width: 1000px; margin: 0 auto; }
        .victoria-title { font-family: 'Inter', sans-serif; font-size: 24px; color: #5c4f4a; margin-bottom: 30px; font-weight: 500; }
        .victoria-heading { font-family: 'Inter', sans-serif; font-size: 18px; color: #5c4f4a; margin-bottom: 8px; font-weight: 500; }
        .victoria-body { font-size: 14px; color: #8e8783; line-height: 1.6; margin-bottom: 40px; text-align: justify; }
        
        .victoria-dropdowns { display: flex; flex-wrap: wrap; gap: 16px; justify-content: flex-start; }
        .vic-dropdown { display: flex; justify-content: space-between; align-items: center; width: 130px; border: 1px solid #e0dfdb; padding: 10px 14px; background: #ffffff; cursor: pointer; color: #8e8783; font-size: 11px; font-weight: 500; transition: border-color 0.2s; }
        .vic-dropdown:hover { border-color: #a09d9a; color: #5c4f4a; }
        .vic-dropdown svg { width: 12px; height: 12px; stroke: #a09d9a; }

        /* ── PRODUCTS GRID ── */
        .products-grid-section { padding: 40px 40px 100px; max-width: 1200px; margin: 0 auto; }
        .products-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e0dfdb; padding-bottom: 16px; margin-bottom: 40px; }
        .item-count { font-size: 13px; color: #5c4f4a; letter-spacing: 0.5px; }
        .sort-wrap { display: flex; align-items: center; gap: 12px; font-size: 12px; color: #5c4f4a; }
        .sort-select { border: none; border-bottom: 1px solid #dcdcdc; font-family: 'Inter', sans-serif; font-size: 12px; color: #5c4f4a; padding: 4px 20px 4px 0; appearance: none; background: transparent; cursor: pointer; background-image: url('data:image/svg+xml;utf8,<svg fill="none" stroke="%235c4f4a" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6"></path></svg>'); background-repeat: no-repeat; background-position: right center; background-size: 12px; }

        .products-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 60px 40px; }
        .product-card { display: flex; flex-direction: column; text-decoration: none; color: inherit; }
        .product-img-wrap { position: relative; width: 100%; aspect-ratio: 1; margin-bottom: 16px; overflow: hidden; background: #f9f9f9; }
        .product-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; mix-blend-mode: multiply; }
        .product-card:hover .product-img { transform: scale(1.05); }
        .badge-new { position: absolute; top: 0; left: 0; background: #355c91; color: #ffffff; font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 500; padding: 4px 10px; z-index: 5; text-transform: uppercase; letter-spacing: 0.5px; }

        .fav-btn { position: absolute; top: 12px; right: 12px; width: 32px; height: 32px; border-radius: 50%; background: rgba(255,255,255,0.7); backdrop-filter: blur(4px); display: flex; justify-content: center; align-items: center; cursor: pointer; border: none; transition: background 0.2s; z-index: 5; }
        .fav-btn:hover { background: rgba(255,255,255,1); }
        .fav-btn svg { width: 16px; height: 16px; stroke: #8e8783; fill: none; }

        .product-title { font-family: 'Inter', sans-serif; font-size: 14px; color: #1f3342; line-height: 1.4; margin-bottom: 8px; font-weight: 500; }
        .product-rating { display: flex; align-items: center; gap: 4px; margin-bottom: 8px; }
        .star { width: 12px; height: 12px; fill: #ffd700; }
        .rating-count { font-size: 12px; color: #8a9bb0; margin-left: 2px; }

        .product-price-label { font-size: 10px; color: #8e8783; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px; }
        .product-price { font-size: 15px; color: #1f3342; font-weight: 600; margin-bottom: 12px; }

        .product-colors { display: flex; gap: 6px; }
        .color-swatch { width: 18px; height: 18px; border-radius: 50%; border: 1px solid rgba(0,0,0,0.1); cursor: pointer; transition: transform 0.1s; }
        .color-swatch:hover { transform: scale(1.1); }

        @media (max-width: 992px) {
          .products-grid { grid-template-columns: repeat(2, 1fr); gap: 40px 30px; }
        }
        @media (max-width: 576px) {
          .products-grid { grid-template-columns: 1fr; }
        }

        /* ── FOOTER ── */
        .footer {
          background: #1a2e3b;
          padding: 50px 60px 30px;
        }
        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 40px;
        }
        .footer-left { display: flex; flex-direction: column; gap: 16px; }
        .footer-logo { display: flex; align-items: center; gap: 8px; text-decoration: none; }
        .footer-logo-main { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 20px; letter-spacing: 2px; color: #ffffff; text-transform: uppercase; }
        .footer-logo-main span { color: #00c27a; }
        .footer-logo-sub { font-size: 9px; letter-spacing: 4px; color: #8a9bb0; text-transform: uppercase; }
        .footer-brochure { font-size: 13px; color: #8a9bb0; text-decoration: underline; cursor: pointer; width: fit-content; transition: color 0.2s; }
        .footer-brochure:hover { color: #ffffff; }
        .footer-nav { display: flex; gap: 24px; flex-wrap: wrap; margin-top: 4px; }
        .footer-nav a { font-size: 13px; color: #8a9bb0; text-decoration: none; transition: color 0.2s; }
        .footer-nav a:hover { color: #ffffff; }

        .footer-right { display: flex; flex-direction: column; gap: 12px; }
        .get-app-label { font-family: 'Inter', sans-serif; font-size: 32px; color: #ccd6e0; margin-bottom: 8px; font-weight: 400; letter-spacing: -0.5px; }
        .app-badge {
          display: flex;
          align-items: center;
          gap: 14px;
          background: #141c21;
          border: none;
          border-radius: 12px;
          padding: 12px 24px;
          text-decoration: none;
          width: 220px;
          transition: background 0.2s;
        }
        .app-badge:hover { background: #1a252c; }
        .app-badge-icon { display: flex; align-items: center; justify-content: center; }
        .app-badge-text { display: flex; flex-direction: column; line-height: 1.1; margin-top: 2px; }
        .app-badge-small { font-size: 11px; color: #ffffff; font-weight: 500; font-family: 'Inter', sans-serif; }
        .app-badge-large { font-size: 21px; color: #ffffff; font-weight: 600; font-family: 'Inter', sans-serif; letter-spacing: -0.5px; margin-top: 2px; }

        .footer-bottom {
          border-top: 1px solid #2a3f52;
          padding-top: 20px;
        }
        .footer-copy { font-size: 12px; color: #5a7a8a; }
        /* Mobile Menu */
        .hamburger { display: none; background: none; border: none; font-size: 28px; color: #ffffff; cursor: pointer; z-index: 1001; }
        .mobile-menu { position: fixed; inset: 0; background: #0d1f2d; z-index: 1000; display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0; pointer-events: none; transition: opacity 0.3s; }
        .mobile-menu.open { opacity: 1; pointer-events: auto; }
        .mobile-nav-links { display: flex; flex-direction: column; gap: 32px; text-align: center; list-style: none; padding: 0; }
        .mobile-nav-links a { color: #ffffff; font-size: 24px; text-decoration: none; font-weight: 500; }
        .mobile-nav-links a.active { color: #00c27a; }

        @media (max-width: 900px) {
          .nav-links, .contact-btn { display: none; }
          .hamburger { display: block; }
          .hero-heading { font-size: clamp(40px, 8vw, 60px); }
        }

        @media (max-width: 768px) {
          .navbar { padding: 0 20px; }
          .footer-top { flex-direction: column; gap: 40px; }
          .hero-heading { font-size: clamp(36px, 8vw, 60px); }
          .hero-content { padding: 0 24px 60px; }
          .victoria-section, .products-grid-section { padding: 40px 24px 60px; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="navbar">
        <Link href="/" className="logo-wrap" style={{ textDecoration: "none" }}>
          <div className="logo-bar" />
          <div className="logo-text">
            <span className="logo-main">ASKD<span>E</span>N</span>
            <span className="logo-sub">Litecrete</span>
          </div>
        </Link>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={pathname === link.href ? "active" : ""}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="contact-btn">Contact us</Link>
        <button className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={`mobile-${link.href}`}>
              <Link href={link.href} className={pathname === link.href ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#00c27a', fontSize: '20px', marginTop: '16px', display: 'inline-block' }}>
              Contact Us →
            </Link>
          </li>
        </ul>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <h1 className="hero-heading">Brighten the corner<br />where you are</h1>
          <p className="hero-body">
            ASKDEN is a wholesale manufacturer of the finest quality hand-made
            fiberglass and concrete planters. Durable and stylish, our pots are suitable
            for both indoor and outdoor applications and can enhance any
            commercial or residential space.
          </p>
        </div>
        <div className="slider-dots">
          <div className="dot active" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </section>

      {/* SHOP BY SHAPE */}
      <section className="shop-section">
        <div className="shop-container">
          <h2 className="shop-heading">Shop by shape and size</h2>
          <p className="shop-subheading">
            Our extensive inventory of planter pots in 100+ unique shapes and sizes ensures you&apos;ll find the
            right accent for any space. Bring your custom design for us to produce it for you
          </p>

          <div className="filter-dropdowns">
            {["SMALL", "MEDIUM", "LARGE"].map(size => (
              <div className="dropdown" key={size}>
                <span>{size}</span>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            ))}
          </div>

          <div className="shapes-grid">
            <div className="shape-card">
              <div className="shape-img-wrap">
                <svg viewBox="0 0 100 100" width="100%" height="80%" preserveAspectRatio="xMidYMax meet">
                  <polygon points="15,25 65,25 75,35 25,35" fill="#9cbd68" />
                  <polygon points="15,25 15,75 25,85 25,35" fill="#71874b" />
                  <rect x="25" y="35" width="50" height="50" fill="#87a05b" />
                  <polygon points="25,30 60,30 67,35 30,35" fill="#4f5e33" />
                </svg>
              </div>
              <button className="shape-btn">
                SQUARE PLANTERS
                <span className="btn-arrow"><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
              </button>
            </div>

            <div className="shape-card">
              <div className="shape-img-wrap">
                <svg viewBox="0 0 120 100" width="100%" height="80%" preserveAspectRatio="xMidYMax meet">
                  {/* Tall Back Reactangle */}
                  <polygon points="15,20 60,20 65,25 20,25" fill="#9cbd68" />
                  <polygon points="15,20 15,75 20,80 20,25" fill="#71874b" />
                  <rect x="20" y="25" width="45" height="60" fill="#87a05b" />
                  <polygon points="20,22 55,22 60,25 25,25" fill="#4f5e33" />

                  {/* Short Front Rectangle */}
                  <polygon points="35,60 100,60 105,65 40,65" fill="#aace70" />
                  <polygon points="35,60 35,90 40,95 40,65" fill="#7b9351" />
                  <rect x="40" y="65" width="65" height="30" fill="#9bc05d" />
                  <polygon points="40,62 95,62 100,65 45,65" fill="#4f5e33" />
                </svg>
              </div>
              <button className="shape-btn">
                RECTANGLE PLANTERS
                <span className="btn-arrow"><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
              </button>
            </div>

            <div className="shape-card">
              <div className="shape-img-wrap">
                <svg viewBox="0 0 100 100" width="100%" height="80%" preserveAspectRatio="xMidYMax meet">
                  <path d="M 15 30 L 25 85 C 25 90, 75 90, 75 85 L 85 30 Z" fill="#87a05b" />
                  <ellipse cx="50" cy="30" rx="35" ry="8" fill="#9cbd68" />
                  <ellipse cx="50" cy="30" rx="28" ry="5" fill="#4f5e33" />
                </svg>
              </div>
              <button className="shape-btn">
                CONE PLANTERS
                <span className="btn-arrow"><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
              </button>
            </div>

            <div className="shape-card">
              <div className="shape-img-wrap">
                <svg viewBox="0 0 120 100" width="100%" height="80%" preserveAspectRatio="xMidYMax meet">
                  {/* Back Round */}
                  <circle cx="50" cy="45" r="35" fill="#7a9252" />
                  <ellipse cx="50" cy="18" rx="15" ry="4" fill="#4f5e33" />
                  
                  {/* Front Cylinder/Round */}
                  <path d="M 60 55 L 60 85 C 60 90, 95 90, 95 85 L 95 55 Z" fill="#87a05b" />
                  <ellipse cx="77.5" cy="55" rx="17.5" ry="5" fill="#9cbd68" />
                  <ellipse cx="77.5" cy="55" rx="13" ry="3" fill="#4f5e33" />
                </svg>
              </div>
              <button className="shape-btn">
                ROUND PLANTERS
                <span className="btn-arrow"><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VICTORIA PLANTERS */}
      <section className="victoria-section">
        <div className="victoria-container">
          <h2 className="victoria-title">Victoria Planters</h2>
          
          <h3 className="victoria-heading">Victoria Concrete Planters with Hand-Crafted Stone Finishes</h3>
          <p className="victoria-body">
            Discover the beauty of Victoria premium planters, meticulously crafted by skilled artisans under the guidance of Belgian architects. Each planter is handmade cement and fiberglass, with a double-textured finish that feels like stone. Available in five finishes — grey stone, sand stone, concrete stone, brown stone and river stone — these planters are UV coated and impermeable, guaranteeing long-lasting beauty in any weather. Add in design features like a reinforced rim and raised bottom for optimal drainage, and you get a natural stone look that fits seamlessly into any environment, adding elegance to your space.
          </p>

          <div className="victoria-dropdowns">
            {["SETTING", "PLACEMENT", "SHAPE", "DURABILITY", "DRAINAGE", "MATERIAL", "STYLE"].map(label => (
              <div className="vic-dropdown" key={label}>
                <span>{label}</span>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="products-grid-section">
        <div className="products-header">
          <span className="item-count">11 ITEMS</span>
          <div className="sort-wrap">
            <label>SORT BY</label>
            <select className="sort-select" defaultValue="best-selling">
              <optgroup label="Sort Options">
                 <option value="best-selling">BEST SELLING</option>
                 <option value="price-low-high">PRICE: LOW TO HIGH</option>
                 <option value="price-high-low">PRICE: HIGH TO LOW</option>
              </optgroup>
            </select>
          </div>
        </div>

        <div className="products-grid">
          {catalogProducts.map(product => (
            <Link href={`/flower-pots/${product.id}`} className="product-card" key={product.id}>
              <div className="product-img-wrap">
                {product.isNew && <span className="badge-new">NEW</span>}
                <img src={product.image} alt={product.title} className="product-img" />
                <button className="fav-btn">
                  <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
              </div>
              <h3 className="product-title">{product.title}</h3>
              
              {product.rating && (
                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="star" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                  ))}
                  <span className="rating-count">({product.reviews})</span>
                </div>
              )}
              
              <div className="product-price-label">AS LOW AS</div>
              <div className="product-price">{product.price}</div>
              
              <div className="product-colors">
                {product.colors.map((color, i) => (
                  <div key={i} className="color-swatch" style={{ backgroundColor: color }}></div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-left">
            <Link href="/" className="footer-logo">
              <div className="logo-bar" style={{ height: "28px" }} />
              <div className="logo-text">
                <span className="footer-logo-main">ASKD<span>E</span>N</span>
                <span className="footer-logo-sub">Litecrete</span>
              </div>
            </Link>
            <span className="footer-brochure">Download Brochure Now</span>
            <nav className="footer-nav">
              {["About", "Features", "Pricing", "Careers", "Help", "Privacy Policy"].map((item) => (
                <Link key={item} href="#">{item}</Link>
              ))}
            </nav>
          </div>
          <div className="footer-right">
            <p className="get-app-label">Get the App</p>
            <a href="#" className="app-badge">
              <span className="app-badge-icon">
                <svg fill="#ffffff" viewBox="0 0 384 512" width="28" height="28">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.3zM34.4 46.4c28.3-31.7 68.1-46.4 105.2-46.4 1.3 34.3-13.2 65.8-34.8 89.6-24.1 26.8-63 41.6-105.2 41.6-1.2-34.9 13.9-63.5 34.8-84.8z"/>
                </svg>
              </span>
              <div className="app-badge-text">
                <span className="app-badge-small">Download on the</span>
                <span className="app-badge-large">App Store</span>
              </div>
            </a>
            <a href="#" className="app-badge">
              <span className="app-badge-icon">
                <svg viewBox="0 0 512 512" width="26" height="26" xmlns="http://www.w3.org/2000/svg">
                  <path d="M49 14.9C36.6 22.4 30.1 35 30.1 52.8v406.4c0 17.8 6.5 30.5 18.9 37.9L288.5 256 49 14.9z" fill="#00f176"/>
                  <path d="M369.3 336.8L288.5 256l-239.5-241 247.9 141.5 73.4 41.8-101 138.5z" fill="#00a0ff"/>
                  <path d="M370.4 174.5L296.8 217 288.5 256l101 138.5c19.1 11.2 38.4-1.2 38.4-22.3V140c0-21.2-19.3-33.6-38.4-22.4l-19.1 56.9z" fill="#ffc100"/>
                  <path d="M288.5 256l80.8 80.8-73.4 41.8-246.9 140.5L288.5 256z" fill="#ff3a44"/>
                </svg>
              </span>
              <div className="app-badge-text">
                <span className="app-badge-small">GET IT ON</span>
                <span className="app-badge-large">Google Play</span>
              </div>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2020 ISTAIX. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
