"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function CounterTopPage() {
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500&display=swap');
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
        .hero-bg { position: absolute; inset: 0; background-image: url('/counter-top banner.png'); background-size: cover; background-position: center center; background-repeat: no-repeat; z-index: 1; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(23, 33, 40, 0.4) 0%, rgba(23, 33, 40, 0.1) 50%, rgba(0,0,0,0) 100%); z-index: 2; pointer-events: none; }
        .hero-content { position: relative; z-index: 3; display: flex; flex-direction: column; justify-content: space-between; width: 100%; max-width: 1400px; margin: 0 auto; padding: 160px 80px 80px; }
        .hero-heading { font-family: 'Playfair Display', serif; font-size: clamp(50px, 6vw, 84px); font-weight: 400; color: #ffffff; line-height: 1.1; margin-bottom: 20px; }
        .hero-bottom-area { max-width: 580px; margin-top: auto; padding-bottom: 40px;}
        .hero-body { font-size: 15px; line-height: 1.6; color: #ffffff; font-family: 'Inter', sans-serif; font-weight: 400; margin-bottom: 40px; }
        .hero-actions { display: flex; align-items: center; gap: 24px; }
        .btn-work { background: #253139; color: #ffffff; border: none; padding: 16px 40px; font-size: 15px; font-family: 'Inter', sans-serif; font-weight: 500; cursor: pointer; transition: background 0.2s; border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
        .btn-work:hover { background: #1a2329; }
        .explore-wrap { display: flex; align-items: center; gap: 12px; color: #ffffff; font-size: 15px; font-weight: 500; text-decoration: none; cursor: pointer; }
        .explore-icon { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border: 1.5px solid rgba(255,255,255,1); border-radius: 50%; padding-left: 2px; transition: background 0.2s; }
        .explore-wrap:hover .explore-icon { background: rgba(255,255,255,0.1); }
        .explore-line { width: 60px; height: 1.5px; background: rgba(255,255,255,1); }

        /* ── INTRO ── */
        .intro-section { padding: 80px 40px 100px; text-align: center; max-width: 900px; margin: 0 auto; }
        .intro-section h2 { font-family: 'Playfair Display', serif; font-size: 40px; font-weight: 400; color: #253139; margin-bottom: 24px; }
        .intro-section p { font-size: 16px; line-height: 1.8; color: #8a9bb0; font-family: 'Inter', sans-serif; }

        /* ── EXPERTISE ── */
        .expertise-section { padding: 40px 60px 100px; max-width: 1400px; margin: 0 auto; text-align: center; }
        .expertise-header h3 { font-family: 'Inter', sans-serif; font-size: 22px; font-weight: 600; color: #8a969f; margin-bottom: 20px; letter-spacing: 0.5px; }
        .customize-banner { display: inline-block; background: #e2f1ea; color: #849d97; font-size: 14px; font-weight: 500; font-family: 'Inter', sans-serif; padding: 12px 24px; border-radius: 4px; margin-bottom: 80px; letter-spacing: 0.3px; }
        .process-row { display: flex; align-items: stretch; justify-content: space-between; gap: 20px; margin-bottom: 100px; }
        .process-step { flex: 1; display: flex; flex-direction: column; align-items: center; position: relative; padding: 0 16px; }
        .process-step:not(:last-child)::after { content: ''; position: absolute; right: -10px; top: 15%; height: 70%; width: 1px; background: #e0e0e0; }
        .step-icon { height: 60px; margin-bottom: 24px; display: flex; align-items: center; justify-content: center; width: 60px; position: relative; }
        .step-icon svg { width: 100%; height: 100%; stroke: #333; fill: none; stroke-width: 1.5; }
        .process-step h4 { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 600; color: #333; margin-bottom: 14px; }
        .process-step p { font-size: 13px; line-height: 1.6; color: #999; font-family: 'Inter', sans-serif; }
        .cards-row { display: flex; justify-content: space-between; gap: 24px; }
        .feature-card { flex: 1; border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; text-align: left; background: #fff; box-shadow: 0 4px 20px rgba(0,0,0,0.04); }
        .fc-head { padding: 24px 30px; display: flex; align-items: center; justify-content: flex-start; height: 80px; }
        .fc-head h4 { font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 600; color: #222; }
        .fc-bg-1 { background: #e6ecfc; } .fc-bg-2 { background: #fcf1f3; } .fc-bg-3 { background: #e7eff0; }
        .feature-card img { width: 100%; height: 260px; object-fit: cover; display: block; }

        /* ── PROJECT IDEAS ── */
        .project-ideas-section { display: flex; align-items: stretch; max-width: 1400px; margin: 0 auto 100px; padding: 0 60px; gap: 60px; }
        .ideas-left { flex: 0 0 35%; padding-top: 20px; }
        .ideas-left h3 { font-family: 'Playfair Display', serif; font-size: 42px; font-weight: 400; color: #253139; margin-bottom: 40px; }
        .ideas-list { list-style: none; display: flex; flex-direction: column; gap: 14px; margin-left: 5px; }
        .ideas-list li { display: flex; align-items: center; gap: 16px; font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 600; color: #8a969f; }
        .ideas-list li::before { content: ''; width: 3px; height: 3px; border-radius: 50%; background: #8a969f; opacity: 0.6; }
        .ideas-right { flex: 1; display: flex; }
        .ideas-right img { width: 100%; height: 100%; object-fit: cover; display: block; min-height: 500px; }

        /* ── CUSTOM KITCHEN ── */
        .custom-kitchen-section { display: flex; align-items: stretch; max-width: 1400px; margin: 0 auto 100px; padding: 0 60px; gap: 60px; }
        .ck-images { flex: 0 0 45%; display: flex; flex-direction: column; gap: 24px; }
        .ck-images img { width: 100%; aspect-ratio: 16/10; object-fit: cover; border-radius: 2px; display: block; }
        .ck-content { flex: 1; display: flex; flex-direction: column; justify-content: center; padding-top: 20px; }
        .ck-content h3 { font-family: 'Playfair Display', serif; font-size: 38px; font-weight: 400; color: #253139; line-height: 1.3; margin-bottom: 40px; max-width: 530px; }
        .ck-content p { font-size: 15px; line-height: 1.7; color: #8a9bb0; font-family: 'Inter', sans-serif; margin-bottom: 24px; font-weight: 500;}
        .ck-content p u { text-decoration: underline; text-underline-offset: 3px; }
        .btn-get-started { align-self: center; margin-top: 30px; background: #5b3f46; color: #ffffff; border: none; padding: 16px 40px; font-size: 14px; font-weight: 600; font-family: 'Inter', sans-serif; cursor: pointer; border-radius: 2px; transition: background 0.2s; }
        .btn-get-started:hover { background: #4a333a; }

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

        @media (max-width: 992px) {
          .nav-links, .nav-contact-wrap { display: none; }
          .hamburger { display: block; }
          .hero-content { padding-left: 40px; padding-right: 40px; }
          .process-row { flex-wrap: wrap; }
          .process-step { flex: 1 1 45%; margin-bottom: 30px; }
          .process-step::after { display: none; }
          .cards-row { flex-direction: column; }
          .project-ideas-section { flex-direction: column; padding: 0 40px; gap: 40px; margin-bottom: 80px;}
          .project-ideas-img-wrap { width: 100% !important; aspectRatio: 16/9; }
          .custom-kitchen-section { flex-direction: column; padding: 0 40px; gap: 40px; margin-bottom: 80px;}
          .custom-kitchen-img-wrap { width: 100% !important; aspectRatio: 16/9; }
          .footer-top { flex-direction: column; gap: 32px; }
          .footer { padding: 40px 24px 24px; }
        }
        @media (max-width: 768px) {
          .navbar { padding: 0 20px; }
          .hero-actions { flex-direction: column; align-items: flex-start; }
          .hero-heading { font-size: clamp(40px, 8vw, 60px); }
          .process-step { flex: 1 1 100%; margin-bottom: 40px; }
          .expertise-section { padding-left: 30px; padding-right: 30px; }
          .project-ideas-section { padding: 0 30px; }
          .custom-kitchen-section { padding: 0 30px; }
          .testimonial-card { padding: 28px 24px; }
        }
      `}</style>

      {/* NAVBAR */}
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
          <Link href="#contact" className="contact-btn">Contact us</Link>
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

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-heading">Handcrafted<br />Concrete Countertop</h1>
          <div className="hero-bottom-area">
            <p className="hero-body">
              We create an array of signature concrete countertops and sinks while specializing in build-to-spec products that meet the unique demands of your project.
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

      {/* INTRO */}
      <section className="intro-section">
        <h2>From Your Idea to Reality</h2>
        <p>Every project starts with an idea. At Askden, we turn your concepts into tangible results. Collaborating closely with you, we refine your idea through detailed 3D design—iterating, adjusting, and perfecting until it's just right. Then, we bring it to life through precision production, expert finishing, quality checks, and seamless installation.</p>
      </section>

      {/* EXPERTISE */}
      <section className="expertise-section">
        <div className="expertise-header">
          <h3>Your idea. Our expertise. Made real.</h3>
          <div className="customize-banner">Want a personalized touch? Customize it in the color of your choice</div>
        </div>
        <div className="process-row">
          <div className="process-step">
            <div className="step-icon">
              <svg viewBox="0 0 64 64"><rect x="16" y="14" width="32" height="36" fill="#fff" stroke="#333" strokeLinejoin="round" /><path d="M32 18 l-10 24 h20 z" fill="#fde8ed" stroke="#333" strokeLinejoin="round" /><circle cx="32" cy="18" r="3" fill="#fff" stroke="#333" /><line x1="42" y1="20" x2="42" y2="40" stroke="#333" /><line x1="22" y1="44" x2="42" y2="44" stroke="#333" /></svg>
            </div>
            <h4>Design Iteration</h4>
            <p>"Working closely with customers, our design team develops custom solutions tailored to their specific requirements."</p>
          </div>
          <div className="process-step">
            <div className="step-icon">
              <svg viewBox="0 0 64 64"><path d="M22 46 v-6 c0-5 4-10 10-10 s10 5 10 10 v6" fill="#fff" stroke="#333" /><rect x="20" y="46" width="24" height="8" fill="#fde8ed" stroke="#333" /><circle cx="32" cy="22" r="8" fill="#fff" stroke="#333" /><path d="M24 22 c0-5 3-8 8-8 s8 3 8 8" fill="none" stroke="#333" /><rect x="26" y="48" width="6" height="3" fill="#fff" stroke="#333" /></svg>
            </div>
            <h4>Customer Review</h4>
            <p>The customer reviews and revises the designs until final approval.</p>
          </div>
          <div className="process-step">
            <div className="step-icon">
              <svg viewBox="0 0 64 64"><circle cx="32" cy="18" r="6" fill="#fff" stroke="#333" /><path d="M26 28 l-6 10 h24 l-6-10" fill="#fff" stroke="#333" /><rect x="16" y="38" width="32" height="12" fill="#fde8ed" stroke="#333" /><line x1="12" y1="38" x2="52" y2="38" stroke="#333" strokeWidth="2" /><rect x="22" y="32" width="6" height="6" fill="#fff" stroke="#333" /><rect x="36" y="32" width="6" height="6" fill="#fff" stroke="#333" /></svg>
            </div>
            <h4>Production</h4>
            <p>With exceptional craftsmanship, our production team transforms ideas and designs into reality.</p>
          </div>
          <div className="process-step">
            <div className="step-icon">
              <svg viewBox="0 0 64 64"><rect x="12" y="22" width="30" height="20" fill="#fde8ed" stroke="#333" /><path d="M42 26 h8 l5 6 v10 h-13 z" fill="#fff" stroke="#333" /><circle cx="20" cy="42" r="5" fill="#fff" stroke="#333" /><circle cx="46" cy="42" r="5" fill="#fff" stroke="#333" /><line x1="16" y1="28" x2="28" y2="28" stroke="#333" /><line x1="16" y1="32" x2="28" y2="32" stroke="#333" /><circle cx="50" cy="32" r="1.5" fill="#333" /></svg>
            </div>
            <h4>Delivery</h4>
            <p>Following thorough quality inspections, the product is now prepared for delivery</p>
          </div>
          <div className="process-step">
            <div className="step-icon">
              <svg viewBox="0 0 64 64"><path d="M26 14 l-6 20 h12 z" fill="#fff" stroke="#333" strokeLinejoin="round" /><rect x="23" y="34" width="6" height="12" fill="#fff" stroke="#333" /><rect x="36" y="14" width="10" height="32" fill="#fde8ed" stroke="#333" /><line x1="41" y1="20" x2="41" y2="40" stroke="#333" strokeWidth="2" /><rect x="39" y="30" width="4" height="4" fill="#333" stroke="none" /></svg>
            </div>
            <h4>Installation</h4>
            <p>With precision and expertise, our professionals install your product perfectly</p>
          </div>
        </div>
        <div className="cards-row">
          <div className="feature-card">
            <div className="fc-head fc-bg-1"><h4>Conference Room Table</h4></div>
            <img src="/services-countertop.png" alt="Conference Room Table" />
          </div>
          <div className="feature-card">
            <div className="fc-head fc-bg-2"><h4>Outdoor Kitchen</h4></div>
            <img src="/project-stool.png" alt="Outdoor Kitchen" />
          </div>
          <div className="feature-card">
            <div className="fc-head fc-bg-3"><h4>Concrete Bench</h4></div>
            <img src="/services-blocks.png" alt="Concrete Bench" />
          </div>
        </div>
      </section>

      {/* PROJECT IDEAS */}
      <section className="project-ideas-section">
        <div className="ideas-left">
          <h3>Project Ideas</h3>
          <ul className="ideas-list">
            <li>Kitchen Counter Tops</li><li>Bar Tops</li><li>Benches &amp; Seating</li>
            <li>Commercial Sinks</li><li>Conference Room Tables</li><li>Countertops</li>
            <li>Decor</li><li>Dining &amp; Coffee Tables</li><li>Planters</li>
            <li>Reception Desks</li><li>Residential Sinks</li><li>Stair Treads</li>
            <li>Vanities &amp; Washstands</li><li>Wall Panels &amp; Cladding</li>
          </ul>
        </div>
        <div className="ideas-right">
          <img src="/project-planters.png" alt="Project Ideas" />
        </div>
      </section>

      {/* CUSTOM KITCHEN */}
      <section className="custom-kitchen-section">
        <div className="ck-images">
          <img src="/services-countertop.png" alt="Custom Kitchen Renovation" />
          <img src="/project-stool.png" alt="Custom Kitchen Layout" />
        </div>
        <div className="ck-content">
          <h3>A New Kitchen Customized for You - From the Expert Kitchen Remodeling Experts.</h3>
          <p>For many homeowners, the kitchen is one of the most important spaces in the home. It&apos;s often the central gathering hub. It&apos;s also where important conversations tend to happen. But mostly, it&apos;s where great food is enjoyed. Your kitchen is often where your family experiences those special moments that will last a lifetime. It&apos;s also where generations of recipes were created and then passed down. So, why not invest in this space with a kitchen update that&apos;s just for you?</p>
          <p>Turn your <u>kitchen</u> into the vision of your dreams! Our expert kitchen remodelers will explain all of your design options and will offer you a wide selection of high-quality materials that we have at our disposal. We&apos;ll answer each of your questions, and we&apos;ll provide you with clear, honest communication regarding timelines, budget concerns, and our project processes. We want our clients to not only enjoy the finished product but also enjoy the journey of getting there. Let&apos;s work together to create something you&apos;ll take pride in for years to come.</p>
          <button className="btn-get-started">Get Started</button>
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