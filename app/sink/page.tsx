"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { catalogSinks } from "../data/products";

export default function SinkPage() {
  const pathname = usePathname();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Flower Pots", href: "/flower-pots" },
    { label: "Counter top", href: "/counter-top" },
    { label: "Sink", href: "/sink" },
    { label: "Blocks", href: "/blocks" },
    { label: "Construction", href: "/construction" },
  ];

  const sinks = catalogSinks.slice(0, 8);
  const commercialSinks = catalogSinks.slice(8, 12);

  const testimonials = [
    {
      quote: "We had an incredible experience working with them and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.",
      name: "Jane Cooper",
      role: "CEO, ABC Corporation",
      image: "/counter-top ceo.png",
    },
    {
      quote: "Absolutely outstanding craftsmanship. The concrete countertops they built for our kitchen are beyond what we imagined. The team was professional, timely, and incredibly detail-oriented throughout the entire process.",
      name: "Mark Williams",
      role: "Interior Designer",
      image: "/counter-top ceo.png",
    },
    {
      quote: "The flower pots and planters we ordered transformed our office space completely. Everyone who visits comments on how beautiful and unique they are. We will definitely be ordering again.",
      name: "Sarah Johnson",
      role: "Office Manager",
      image: "/counter-top ceo.png",
    },
    {
      quote: "From the initial consultation to final delivery, the experience was seamless. The quality of the concrete blocks exceeded our expectations and the project came in on time and on budget.",
      name: "David Mensah",
      role: "Project Manager",
      image: "/counter-top ceo.png",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; background: #ffffff; }

        /* ── NAVBAR ── */
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
        .hero { position: relative; width: 100%; height: 85vh; min-height: 600px; display: flex; align-items: stretch; }
        .hero-bg { position: absolute; inset: 0; background-image: url('/sink-banner.jpg'); background-size: cover; background-position: center center; background-repeat: no-repeat; z-index: 1; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(0,0,0, 0.4) 0%, rgba(0,0,0, 0.2) 50%, rgba(0,0,0,0) 100%); z-index: 2; pointer-events: none; }
        .hero-content { position: relative; z-index: 3; display: flex; flex-direction: column; justify-content: space-between; width: 100%; max-width: 1400px; margin: 0 auto; padding: 160px 80px 80px; }
        .hero-heading { font-family: 'Playfair Display', serif; font-size: clamp(50px, 6vw, 84px); font-weight: 400; color: #ffffff; line-height: 1.1; margin-bottom: 20px; }
        .hero-bottom-area { max-width: 380px; margin-top: auto; padding-bottom: 40px;}
        .hero-body { font-size: 14px; line-height: 1.6; color: #ffffff; font-family: 'Inter', sans-serif; font-weight: 400; margin-bottom: 30px; letter-spacing: 0.3px; }
        .hero-actions { display: flex; align-items: center; gap: 24px; }
        .btn-work { background: #253139; color: #ffffff; border: none; padding: 16px 40px; font-size: 14px; font-family: 'Inter', sans-serif; font-weight: 500; cursor: pointer; transition: background 0.2s; border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
        .btn-work:hover { background: #1a2329; }
        .explore-wrap { display: flex; align-items: center; gap: 12px; color: #ffffff; font-size: 15px; font-weight: 500; text-decoration: none; cursor: pointer; }
        .explore-icon { display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; border: 1.5px solid rgba(255,255,255,0.8); border-radius: 50%; padding-left: 2px; transition: border-color 0.2s; }
        .explore-wrap:hover .explore-icon { border-color: #ffffff; }
        .explore-line { width: 50px; height: 1.5px; background: rgba(255,255,255,0.8); }

        /* ── PAGE CONTENT ── */
        .text-section {
          padding: 80px 40px 60px;
          text-align: center;
          max-width: 860px;
          margin: 0 auto;
        }
        .text-section p {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          line-height: 1.8;
          color: #889bb0;
          font-weight: 400;
          margin-bottom: 16px;
        }
        
        .text-section p.sub-text {
          font-size: 15px;
          font-weight: 600;
          color: #a4b4c4;
        }

        /* ── FEATURE SINK SECTION ── */
        .feature-sink-section { display: flex; align-items: stretch; max-width: 1300px; margin: 0 auto 80px; padding: 0 60px; gap: 60px; }
        .fs-image { flex: 0 0 50%; display: flex; }
        .fs-image img { width: 100%; object-fit: cover; border-radius: 4px; display: block; }
        .fs-content { flex: 1; display: flex; flex-direction: column; justify-content: center; padding-top: 10px; }
        .fs-content h3 { font-family: 'Playfair Display', serif; font-size: 42px; font-weight: 400; color: #2a3a44; line-height: 1.25; margin-bottom: 24px; max-width: 480px; letter-spacing: -0.5px; }
        .fs-content p { font-size: 14.5px; line-height: 1.7; color: #889bb0; font-family: 'Inter', sans-serif; margin-bottom: 24px; max-width: 500px; }
        .fs-content .fs-bold { font-size: 16px; font-weight: 700; color: #889bb0; margin-top: 10px; }

        @media (max-width: 992px) {
          .feature-sink-section { flex-direction: column; padding: 0 40px; }
          .fs-content { margin-top: 30px; }
        }
        @media (max-width: 768px) {
          .feature-sink-section { padding: 0 30px; }
        }

        .products-section {
          padding: 20px 60px 100px;
          max-width: 1400px;
          margin: 0 auto;
        }
        .products-heading {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          font-weight: 400;
          color: #3b4b57;
          margin-bottom: 40px;
          padding-left: 10px;
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          padding: 0 10px;
        }

        .prod-card {
          display: flex;
          flex-direction: column;
        }

        .prod-img-wrap {
          background: #f4f6f8;
          border-radius: 4px;
          padding: 20px;
          position: relative;
          aspect-ratio: 1/1;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .prod-img-wrap img {
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
        }

        .icon-heart {
          position: absolute;
          top: 14px;
          right: 14px;
          color: #b0c0c7;
          cursor: pointer;
        }
        .icon-heart:hover { fill: #d64747; color: #d64747; }

        .prod-info {
           padding-left: 4px;
        }
        .prod-title {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #4a4a4a;
          margin-bottom: 6px;
        }
        .prod-price-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .price-new {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          font-weight: 700;
          color: #222;
        }
        .price-old {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          color: #a4b4c4;
          text-decoration: line-through;
        }
        .prod-size {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          color: #889bb0;
        }

        /* ── TESTIMONIALS ── */
        .testimonials-section {
          background: #e8f0f5;
          padding: 80px 40px 60px;
          text-align: center;
        }
        .testimonials-heading {
          font-family: 'Inter', sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #1a2e3b;
          margin-bottom: 40px;
        }
        .testimonial-card {
          background: #ffffff;
          border-radius: 10px;
          padding: 36px 44px;
          max-width: 700px;
          margin: 0 auto 0;
          text-align: left;
          position: relative;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
        }
        .testimonial-card::after {
          content: '';
          position: absolute;
          bottom: -18px;
          left: 50%;
          transform: translateX(-50%);
          border-width: 18px 16px 0;
          border-style: solid;
          border-color: #ffffff transparent transparent;
        }
        .quote-mark {
          font-size: 48px;
          font-family: Georgia, serif;
          font-weight: 900;
          color: #1a2e3b;
          line-height: 1;
          margin-bottom: 12px;
          display: block;
        }
        .testimonial-text { font-size: 14px; color: #4a6070; line-height: 1.85; }
        .testimonial-avatars {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-top: 48px;
          flex-wrap: wrap;
        }
        .avatar-item { display: flex; align-items: center; gap: 12px; cursor: pointer; }
        .avatar-item.active .avatar-info { display: flex; flex-direction: column; }
        .avatar-item:not(.active) .avatar-info { display: none; }
        .avatar-img-wrap {
          position: relative;
          width: 58px; height: 58px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid transparent;
          transition: border-color 0.2s;
          flex-shrink: 0;
          background: #c8d6e0;
        }
        .avatar-item.active .avatar-img-wrap { border-color: #1a2e3b; }
        .avatar-item:not(.active) .avatar-img-wrap { opacity: 0.85; }
        .avatar-info { text-align: left; }
        .avatar-name { font-size: 14px; font-weight: 700; color: #1a2e3b; }
        .avatar-role { font-size: 12px; font-weight: 600; color: #1a2e3b; }

        /* ── FOOTER ── */
        .footer {
          background: #2b3a47;
          padding: 50px 60px 30px;
          position: relative;
          overflow: hidden;
        }
        .footer::before {
          content: '';
          position: absolute;
          right: -80px; top: -80px;
          width: 420px; height: 420px;
          border-radius: 50%;
          background: rgba(0,0,0,0.15);
          pointer-events: none;
        }
        .footer-top {
          position: relative; z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 32px;
        }
        .footer-left { display: flex; flex-direction: column; gap: 14px; }
        .footer-logo { display: flex; align-items: center; gap: 8px; text-decoration: none; margin-bottom: 4px; }
        .footer-logo-main { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 22px; letter-spacing: 2px; color: #ffffff; text-transform: uppercase; }
        .footer-logo-main span { color: #00c27a; }
        .footer-logo-sub { font-size: 9px; letter-spacing: 4px; color: #8a9bb0; text-transform: uppercase; }
        .footer-brochure { font-size: 13px; color: #ffffff; text-decoration: none; cursor: pointer; width: fit-content; transition: color 0.2s; }
        .footer-brochure:hover { color: #00c27a; }
        .footer-nav { display: flex; gap: 20px; flex-wrap: wrap; }
        .footer-nav a { font-size: 13px; color: #9ab0bc; text-decoration: none; transition: color 0.2s; }
        .footer-nav a:hover { color: #ffffff; }
        .footer-right { display: flex; flex-direction: column; gap: 10px; position: relative; z-index: 1; }
        .get-app-label { font-size: 15px; color: #ffffff; margin-bottom: 6px; font-weight: 400; }
        .app-badge {
          display: flex; align-items: center; gap: 10px;
          background: #141c21; border-radius: 8px;
          padding: 9px 16px; text-decoration: none;
          transition: background 0.2s; width: 168px;
        }
        .app-badge:hover { background: #1e2d38; }
        .app-badge-icon { font-size: 20px; display: flex; align-items: center; }
        .app-badge-text { display: flex; flex-direction: column; line-height: 1.2; }
        .app-badge-small { font-size: 9px; color: #ffffff; font-weight: 400; letter-spacing: 0.3px; }
        .app-badge-large { font-size: 15px; color: #ffffff; font-weight: 600; }
        .footer-bottom {
          position: relative; z-index: 1;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 18px;
        }
        .footer-copy { font-size: 12px; color: #7a909c; }

        /* Mobile Menu */
        .hamburger { display: none; background: none; border: none; font-size: 28px; color: #c8d6e0; cursor: pointer; z-index: 1001; }
        .mobile-menu { position: fixed; inset: 0; background: #0d1f2d; z-index: 1000; display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0; pointer-events: none; transition: opacity 0.3s; }
        .mobile-menu.open { opacity: 1; pointer-events: auto; }
        .mobile-nav-links { display: flex; flex-direction: column; gap: 32px; text-align: center; list-style: none; padding: 0; }
        .mobile-nav-links a { color: #ffffff; font-size: 24px; text-decoration: none; font-weight: 500; }
        .mobile-nav-links a.active { color: #00c27a; }

        @media (max-width: 1200px) {
          .grid-container { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .grid-container { grid-template-columns: repeat(2, 1fr); }
          .hero-content { padding-left: 40px; padding-right: 40px; }
          .nav-links, .nav-contact-wrap { display: none; }
          .hamburger { display: block; }
          .footer-top { flex-direction: column; gap: 32px; }
          .footer { padding: 40px 24px 24px; }
        }
        @media (max-width: 600px) {
          .grid-container { grid-template-columns: repeat(1, 1fr); }
          .hero-actions { flex-direction: column; align-items: flex-start; }
          .hero-heading { font-size: clamp(40px, 8vw, 60px); }
          .products-section { padding: 20px 30px 60px; }
          .testimonial-card { padding: 28px 24px; }
          .navbar { padding: 0 20px; }
        }
      `}</style>

      <nav className="navbar">
        <Link href="/" className="logo-wrap">
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
        <div className="nav-contact-wrap">
          <Link href="/contact" className="contact-btn">Contact us</Link>
        </div>
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
            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#00c27a', fontSize: '20px', marginTop: '16px', display: 'inline-block' }}>
              Contact Us →
            </Link>
          </li>
        </ul>
      </div>

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-heading">Elegant Sink</h1>
          <div className="hero-bottom-area">
            <p className="hero-body">
              Get the sink the compliments your style and elegance
            </p>
            <div className="hero-actions">
              <button className="btn-work">See Our Work</button>
              <div className="explore-wrap">
                <div className="explore-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                <div className="explore-line"></div>
                <span>Explore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-section">
        <p>
          How do you build the perfect kitchen? Start with a kitchen sink you love. Askden offers a range of options to suit every need and satisfy any style preference, from Residential sinks to clean commercial styles with contemporary zero radius corners; spacious single bowl basin sinks to multitasking double bowls; extra-deep utility sinks, and a kitchen sink with drainboard to compact bar/prep sinks perfect for a smaller kitchen.
        </p>
        <p className="sub-text">
          we provide the option for one colour tone or two colour tone.
        </p>
      </section>

      <section className="feature-sink-section">
        <div className="fs-image">
          <img src="/sink img.jpg" alt="Modern Sink" />
        </div>
        <div className="fs-content">
          <h3>Find The Right Sink For Your Kitchen and Bathroom</h3>
          <p>
            Elevate the beauty of your home with our start-of-the-art modern sinks.<br />
            Select from any of our modern sink shapes and styles and have it painted to the color of your choice. we provide the option for one colour tone or two colour tone.
          </p>
          <div className="fs-bold">
            Your choice. Our expertise.<br />Made real.
          </div>
        </div>
      </section>

      <section className="products-section">
        <h2 className="products-heading">Residential Sink Designs</h2>
        <div className="grid-container">
          {sinks.map((s, idx) => (
            <div className="prod-card" key={idx}>
              <Link href={`/sink/${s.id}`} className="prod-img-wrap" style={{ textDecoration: 'none', display: 'flex' }}>
                <svg className="icon-heart" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                <img src={s.image} alt={s.title} />
              </Link>
              <div className="prod-info">
                <h4 className="prod-title">{s.title}</h4>
                <div className="prod-price-row">
                  <span className="price-new">{s.price}</span>
                  {s.oldPrice && <span className="price-old">{s.oldPrice}</span>}
                </div>
                <div className="prod-size">{s.size}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="products-section" style={{ paddingTop: '0' }}>
        <h2 className="products-heading">Commercial Sink Designs</h2>
        <div className="grid-container">
          {commercialSinks.map((s, idx) => (
            <div className="prod-card" key={idx}>
              <Link href={`/sink/${s.id}`} className="prod-img-wrap" style={{ textDecoration: 'none', display: 'flex' }}>
                <svg className="icon-heart" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                <img src={s.image} alt={s.title} />
              </Link>
              <div className="prod-info">
                <h4 className="prod-title">{s.title}</h4>
                <div className="prod-price-row">
                  <span className="price-new">{s.price}</span>
                  {s.oldPrice && <span className="price-old">{s.oldPrice}</span>}
                </div>
                <div className="prod-size">{s.size}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <div className="testimonials-section">
        <h2 className="testimonials-heading">Few Words From Our Clients</h2>
        <div className="testimonial-card">
          <span className="quote-mark">&ldquo;</span>
          <p className="testimonial-text">{testimonials[activeTestimonial].quote}</p>
        </div>
        <div className="testimonial-avatars">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`avatar-item ${i === activeTestimonial ? "active" : ""}`} onClick={() => setActiveTestimonial(i)}>
              <div className="avatar-img-wrap">
                <Image src={t.image} alt={t.name} fill style={{ objectFit: "cover" }} sizes="58px" />
              </div>
              {i === activeTestimonial && (
                <div className="avatar-info">
                  <div className="avatar-name">{t.name}</div>
                  <div className="avatar-role">{t.role}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

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
                <svg fill="#ffffff" viewBox="0 0 384 512" width="22" height="22"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.3zM254.2 0c-1.3 34.3-13.2 65.8-34.8 89.6-24.1 26.8-63 41.6-105.2 41.6-1.2-34.9 13.9-63.5 34.8-84.8C178.8 14.9 217.1 0 254.2 0z" /></svg>
              </span>
              <div className="app-badge-text">
                <span className="app-badge-small">Download on the</span>
                <span className="app-badge-large">App Store</span>
              </div>
            </a>
            <a href="#" className="app-badge">
              <span className="app-badge-icon">
                <svg viewBox="0 0 512 512" width="20" height="20"><path d="M49 14.9C36.6 22.4 30.1 35 30.1 52.8v406.4c0 17.8 6.5 30.5 18.9 37.9L288.5 256 49 14.9z" fill="#00f176" /><path d="M369.3 336.8L288.5 256 49 15l239.5 141.5 80.8 41.8z" fill="#00a0ff" /><path d="M428.7 233.3c11.6 6.5 19.2 18.5 19.2 32.7s-7.6 26.2-19.3 32.7l-59.3 33.3L288.5 256l80.8-75.5 59.4 52.8z" fill="#ffc100" /><path d="M288.5 256l-239.5 242 320.3-182.5-80.8-59.5z" fill="#ff3a44" /></svg>
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
