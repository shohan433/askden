"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function HomePage() {
  const pathname = usePathname();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Show popup 1.5 seconds after page load
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Flower Pots", href: "/flower-pots" },
    { label: "Counter top", href: "/counter-top" },
    { label: "Sink", href: "/sink" },
    { label: "Blocks", href: "/blocks" },
    { label: "Construction", href: "/construction" },
  ];

  const services = [
    {
      title: "Building Blocks & Construction",
      description: "We understand the challenges of construction in Ghana—wasted resources, prolonged timelines, and escalating costs.",
      href: "/construction",
      image: "/services-blocks.png",
    },
    {
      title: "Concrete Countertop & Kitchen Remodeling",
      description: "We create an array of signature concrete countertops and sinks while specializing in build-to-spec products that meet the unique demands of your project.",
      href: "/counter-top",
      image: "/services-countertop.png",
    },
    {
      title: "Flower Pots, Planters & Sinks",
      description: "Discover our exquisite collection of indoor and outdoor concrete pots and planters, perfect for fresh flowers, lush foliage, or potted plants.",
      href: "/flower-pots",
      image: "/services-flowerpots.png",
    },
  ];

  const projectTypes = [
    { title: "Concrete Sinks", image: "/project-sinks.png" },
    { title: "Vanity Tops", image: "/project-vanity.png" },
    { title: "Big Flower Pot", image: "/project-flowerpot.png" },
    { title: "Concrete Counter Top", image: "/project-countertop.png" },
    { title: "Concrete Planters", image: "/project-planters.png" },
    { title: "Concrete Stool", image: "/project-stool.png" },
  ];

  const testimonials = [
    {
      quote: "We had an incredible experience working with them and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.",
      name: "Jane Cooper",
      role: "CEO, ABC Corporation",
      image: "/testimonial-1.png",
    },
    {
      quote: "Absolutely outstanding craftsmanship. The concrete countertops they built for our kitchen are beyond what we imagined. The team was professional, timely, and incredibly detail-oriented throughout the entire process.",
      name: "Mark Williams",
      role: "Interior Designer",
      image: "/testimonial-2.png",
    },
    {
      quote: "The flower pots and planters we ordered transformed our office space completely. Everyone who visits comments on how beautiful and unique they are. We will definitely be ordering again.",
      name: "Sarah Johnson",
      role: "Office Manager",
      image: "/testimonial-3.png",
    },
    {
      quote: "From the initial consultation to final delivery, the experience was seamless. The quality of the concrete blocks exceeded our expectations and the project came in on time and on budget.",
      name: "David Mensah",
      role: "Project Manager",
      image: "/testimonial-4.png",
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
        .hero { position: relative; width: 100%; height: 100vh; min-height: 560px; overflow: hidden; }
        .hero-bg { position: absolute; inset: 0; background-image: url('/banner.png'); background-size: cover; background-position: center right; background-repeat: no-repeat; filter: brightness(0.88); }
        .hero-content { position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: flex-end; height: 100%; padding: 0 60px 80px; max-width: 620px; }
        .hero-heading { font-family: 'Playfair Display', serif; font-size: clamp(48px, 6vw, 72px); font-weight: 400; color: #1a2e3b; line-height: 1.1; margin-bottom: 24px; }
        .hero-body { font-size: 15px; line-height: 1.75; color: #e8f0f5; max-width: 480px; text-shadow: 0 1px 3px rgba(0,0,0,0.4); }
        .slider-dots { position: absolute; bottom: 30px; right: 40px; display: flex; gap: 8px; z-index: 10; }
        .dot { width: 24px; height: 8px; border-radius: 4px; background: rgba(255,255,255,0.35); cursor: pointer; }
        .dot.active { background: rgba(255,255,255,0.85); width: 32px; }

        /* ── INTRO ── */
        .intro-section { background: #ffffff; text-align: center; padding: 70px 40px 50px; }
        .intro-tagline { font-size: 15px; color: #5a7a8a; margin-bottom: 16px; font-weight: 400; letter-spacing: 0.3px; }
        .intro-body { font-size: 15px; color: #4a6070; line-height: 1.8; max-width: 680px; margin: 0 auto; }

        /* ── DIVIDER ── */
        .divider { display: flex; align-items: center; max-width: 900px; margin: 0 auto; padding: 0 40px; }
        .divider-line { flex: 1; height: 1px; background: #c8d6e0; }
        .divider-line.mid { flex: 3; }

        /* ── SERVICES ── */
        .services-section { background: #ffffff; padding: 60px 60px 80px; max-width: 1100px; margin: 0 auto; }
        .services-heading { font-family: 'Playfair Display', serif; font-size: 42px; font-weight: 400; color: #1a2e3b; text-align: center; margin-bottom: 50px; }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
        .service-card { display: flex; flex-direction: column; }
        .service-img-wrap { position: relative; width: 100%; aspect-ratio: 4 / 3; overflow: hidden; }
        .service-title { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 500; color: #1a2e3b; margin: 20px 0 12px; line-height: 1.3; }
        .service-desc { font-size: 14px; color: #5a7a8a; line-height: 1.75; flex: 1; }
        .read-more { display: inline-flex; align-items: center; gap: 6px; margin-top: 16px; color: #c8860a; font-size: 14px; font-weight: 500; text-decoration: none; transition: gap 0.2s; }
        .read-more:hover { gap: 10px; }

        /* ── PROJECT TYPES ── */
        .projects-section { background: #abb6c4; padding: 70px 40px 80px; }
        .projects-wrapper { max-width: 1100px; margin: 0 auto; }
        .projects-heading { font-family: 'Playfair Display', serif; font-size: 42px; font-weight: 400; color: #ffffff; text-align: center; margin-bottom: 40px; }
        .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .project-card { display: flex; flex-direction: column; align-items: center; }
        .project-img-wrap { position: relative; width: 100%; aspect-ratio: 4 / 3; overflow: hidden; margin-bottom: 16px; }
        .project-img-wrap img { transition: transform 0.5s ease; }
        .project-card:hover .project-img-wrap img { transform: scale(1.05); }
        .project-title { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 400; color: #ffffff; text-align: center; }

        /* ── LET US HELP ── */
        .help-section { background: #ffffff; padding: 80px 40px 0; text-align: center; }
        .help-heading { font-family: 'Playfair Display', serif; font-size: 46px; font-weight: 400; color: #1a2e3b; margin-bottom: 24px; }
        .help-body { font-size: 15px; color: #5a7a8a; line-height: 1.8; max-width: 660px; margin: 0 auto 48px; }
        .help-img-wrap { position: relative; width: 100%; height: 420px; overflow: hidden; }
        .see-our-work-btn { position: absolute; bottom: 30px; left: 30px; background: #1a2e3b; color: #ffffff; font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 500; padding: 16px 32px; border: none; cursor: pointer; text-decoration: none; letter-spacing: 0.3px; transition: background 0.2s; z-index: 2; }
        .see-our-work-btn:hover { background: #00c27a; }

        /* ── TESTIMONIALS ── */
        .testimonials-section {
          background: #dde8f0;
          padding: 80px 40px;
          text-align: center;
        }
        .testimonials-heading {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          font-weight: 600;
          color: #1a2e3b;
          margin-bottom: 40px;
        }
        .testimonial-card {
          background: #ffffff;
          border-radius: 8px;
          padding: 40px 48px;
          max-width: 680px;
          margin: 0 auto 40px;
          text-align: left;
          position: relative;
        }
        .quote-mark {
          font-size: 52px;
          font-family: Georgia, serif;
          font-weight: 900;
          color: #1a2e3b;
          line-height: 1;
          margin-bottom: 16px;
          display: block;
        }
        .testimonial-text {
          font-size: 15px;
          color: #4a6070;
          line-height: 1.8;
        }
        .testimonial-avatars {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .avatar-item {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }
        .avatar-item.active .avatar-info { display: block; }
        .avatar-item:not(.active) .avatar-info { display: none; }
        .avatar-img-wrap {
          position: relative;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid transparent;
          transition: border-color 0.2s;
          flex-shrink: 0;
        }
        .avatar-item.active .avatar-img-wrap { border-color: #1a2e3b; }
        .avatar-img-placeholder {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #c8d6e0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #5a7a8a;
          font-weight: 600;
          border: 3px solid transparent;
          flex-shrink: 0;
          cursor: pointer;
        }
        .avatar-item.active .avatar-img-placeholder { border-color: #1a2e3b; }
        .avatar-info { text-align: left; }
        .avatar-name { font-size: 14px; font-weight: 600; color: #1a2e3b; }
        .avatar-role { font-size: 12px; color: #5a7a8a; }

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

        /* ── POPUP ── */
        .popup-overlay { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.7); z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 20px; animation: fadeIn 0.4s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .popup-container { background: #ffffff; width: 100%; max-width: 800px; min-height: 480px; display: flex; position: relative; box-shadow: 0 20px 40px rgba(0,0,0,0.3); border-radius: 4px; overflow: hidden; }
        .popup-close { position: absolute; top: 16px; right: 16px; width: 32px; height: 32px; background: #ffffff; border: none; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 10; box-shadow: 0 2px 10px rgba(0,0,0,0.1); transition: transform 0.2s; color: #111; }
        .popup-close:hover { transform: scale(1.1); }
        .popup-left { flex: 1.2; padding: 60px 40px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
        .popup-logo-text { display: flex; flex-direction: column; line-height: 1; margin-bottom: 32px; width: fit-content; }
        .popup-logo-main { font-family: 'Inter', sans-serif; font-weight: 800; font-size: 32px; letter-spacing: 2px; color: #111111; text-transform: uppercase; display: flex; align-items: center; gap: 0px; }
        .popup-logo-main span { color: #00c27a; }
        .popup-logo-sub { font-size: 11px; letter-spacing: 4px; color: #111111; text-transform: uppercase; margin-top: 4px; font-weight: 800; align-self: flex-end; }
        .popup-title { font-family: 'Inter', sans-serif; font-size: 24px; font-weight: 400; color: #222222; margin-bottom: 16px; line-height: 1.3; }
        .popup-subtitle { font-size: 15px; color: #555555; line-height: 1.6; margin-bottom: 32px; max-width: 260px; font-family: 'Playfair Display', serif; }
        .popup-form { width: 100%; max-width: 320px; display: flex; flex-direction: column; gap: 16px; }
        .popup-input { width: 100%; padding: 14px 16px; border: 1px solid #333; background: transparent; font-size: 15px; font-family: 'Inter', sans-serif; color: #111; outline: none; transition: border-color 0.2s; }
        .popup-input::placeholder { color: #888; }
        .popup-input:focus { border-color: #00c27a; }
        .popup-submit { width: 100%; padding: 16px; background: #4a343a; color: #ffffff; border: none; font-size: 15px; font-weight: 500; letter-spacing: 1px; cursor: pointer; font-family: 'Inter', sans-serif; transition: background 0.2s; }
        .popup-submit:hover { background: #352429; }
        .popup-right { flex: 1; background-image: url('/project-sinks.png'); background-size: cover; background-position: center; }

        @media (max-width: 768px) {
          .popup-container { flex-direction: column; min-height: auto; max-height: 90vh; overflow-y: auto; }
          .popup-right { min-height: 200px; order: -1; }
          .popup-left { padding: 40px 20px; }
          .popup-logo-main { font-size: 28px; }
          .popup-title { font-size: 20px; }
        }

        @media (max-width: 900px) {
          .nav-links, .contact-btn { display: none; }
          .hamburger { display: block; }
          .services-grid, .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .navbar { padding: 0 20px; }
          .hero-content { padding: 0 24px 60px; }
          .hero-heading { font-size: 40px; }
          .services-grid { grid-template-columns: 1fr; }
          .services-section { padding: 40px 24px 60px; }
          .projects-grid { grid-template-columns: 1fr; }
          .projects-section { padding: 50px 24px 60px; }
          .help-heading { font-size: 32px; margin-bottom: 16px; }
          .help-img-wrap { height: 280px; }
          .help-body { font-size: 14px; margin-bottom: 24px; }
          .see-our-work-btn { position: relative; bottom: auto; left: auto; display: block; margin: 0 auto; width: fit-content; margin-bottom: 24px; }
          .footer { padding: 40px 24px 24px; }
          .footer-top { flex-direction: column; gap: 32px; }
          .testimonial-card { padding: 28px 24px; }
          .quote-mark { font-size: 40px; margin-bottom: 8px; }
          .testimonial-text { font-size: 14px; }
          .intro-section { padding: 50px 24px 40px; }
          .intro-tagline { font-size: 13px; }
          .intro-body { font-size: 14px; }
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
          <h1 className="hero-heading">Elegant, Handcrafted<br />Concrete</h1>
          <p className="hero-body">
            We embrace concrete as the ultimate material for creative expression.
            To that end, we act as creative enablers – employing concrete to realize
            the ideas and visions of our clients. Through a combination of high-quality
            materials and talent, we design and build concrete objects that inspire
            those who utilize them and elevate the spaces they inhabit.
          </p>
        </div>
        <div className="slider-dots">
          <div className="dot active" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </section>

      {/* INTRO TEXT */}
      <div className="intro-section">
        <p className="intro-tagline">We believe concrete is the ultimate medium for creative expression</p>
        <p className="intro-body">
          There is no material quite like concrete. Timeless. Natural. Unique. Artisanal concrete has a
          palpable warmth and richness that other stones can only emulate. Its ability to be crafted into
          myriad shapes, colors, and styles makes it the designer&apos;s ultimate canvas
        </p>
      </div>

      {/* DIVIDER */}
      <div className="divider">
        <div className="divider-line" />
        <div className="divider-line mid" />
        <div className="divider-line" />
      </div>

      {/* SERVICES */}
      <div className="services-section">
        <h2 className="services-heading">Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.href}>
              <div className="service-img-wrap">
                <img src={service.image} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <Link href={service.href} className="read-more">Read More <span>›</span></Link>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECT TYPES */}
      <div className="projects-section">
        <div className="projects-wrapper">
          <h2 className="projects-heading">Project Types</h2>
          <div className="projects-grid">
            {projectTypes.map((project) => (
              <div className="project-card" key={project.title}>
                <div className="project-img-wrap">
                  <img src={project.image} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <h3 className="project-title">{project.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LET US HELP YOU BUILD */}
      <div className="help-section">
        <h2 className="help-heading">Let us help you build.</h2>
        <p className="help-body">
          We understand that building a home can often become overwhelming without the right team in place.
          That&apos;s why we&apos;ve assembled a group of highly skilled professionals, each with extensive expertise in their specific
          areas. From the initial planning phase to construction and final touches, our team is dedicated to guiding you
          every step, ensuring a smooth and stress-free journey to bringing your dream home or project to life.
        </p>
        <div className="help-img-wrap">
          <Image src="/help-build.png" alt="Construction worker with hard hat" fill style={{ objectFit: "cover", objectPosition: "center" }} sizes="100vw" />
          <Link href="/construction" className="see-our-work-btn">See Our Work</Link>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="testimonials-section">
        <h2 className="testimonials-heading">Few Words From Our Clients</h2>
        <div className="testimonial-card">
          <span className="quote-mark">&ldquo;</span>
          <p className="testimonial-text">{testimonials[activeTestimonial].quote}</p>
        </div>
        <div className="testimonial-avatars">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`avatar-item ${i === activeTestimonial ? "active" : ""}`}
              onClick={() => setActiveTestimonial(i)}
            >
              <div className="avatar-img-placeholder">
                {t.name.charAt(0)}
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

      {/* POPUP MODAL */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button className="popup-close" onClick={() => setIsPopupOpen(false)}>
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="popup-left">
              <div className="popup-logo-text">
                <span className="popup-logo-main">ASKD<span>E</span>N</span>
                <span className="popup-logo-sub">Litecrete</span>
              </div>
              <h2 className="popup-title">Join Us and Step Into Luxury</h2>
              <p className="popup-subtitle">Get inspiration, inside information and more for your next project.</p>
              <form className="popup-form" onSubmit={(e) => { e.preventDefault(); setIsPopupOpen(false); }}>
                <input type="email" placeholder="Email" required className="popup-input" />
                <button type="submit" className="popup-submit">CONTINUE</button>
              </form>
            </div>
            <div className="popup-right" />
          </div>
        </div>
      )}
    </>
  );
}