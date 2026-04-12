"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function ContactPage() {
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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; background: #ffffff; }

        /* ── NAVBAR ── */
        .navbar {
          background: #253139; display: flex; align-items: center;
          justify-content: space-between; padding: 0 40px; height: 75px;
        }
        .logo-wrap { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .logo-bar { width: 4px; height: 36px; background: #00c27a; border-radius: 2px; }
        .logo-text { display: flex; flex-direction: column; line-height: 1; }
        .logo-main { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 22px; letter-spacing: 2px; color: #ffffff; text-transform: uppercase; }
        .logo-main span { color: #00c27a; }
        .logo-sub { font-size: 10px; letter-spacing: 4px; color: #8a9bb0; text-transform: uppercase; margin-top: 2px; }
        .nav-links { display: flex; align-items: center; gap: 32px; list-style: none; }
        .nav-links a { text-decoration: none; color: #ffffff; font-size: 14px; font-weight: 500; letter-spacing: 0.3px; transition: color 0.2s; }
        .nav-links a:hover { color: #00c27a; }
        .contact-btn { background: #7192a5; color: #ffffff; border: none; padding: 12px 28px; border-radius: 4px; font-size: 14px; font-weight: 500; font-family: 'Inter', sans-serif; cursor: pointer; transition: background 0.2s; text-decoration: none; }
        .contact-btn:hover { background: #5c7b8c; }
        
        /* ── CONTACT BODY ── */
        .contact-hero {
          max-width: 1300px;
          margin: 60px auto;
          background: #dde5e3;
          padding: 60px 80px;
          border-radius: 4px;
        }
        
        .contact-hero h1 {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 34px;
          color: #1a1a1a;
          margin-bottom: 24px;
          letter-spacing: -0.5px;
        }
        
        .contact-subtitle {
          font-size: 14px;
          color: #4a4a4a;
          margin-bottom: 40px;
          font-weight: 400;
        }
        
        .contact-block {
          font-size: 16px;
          color: #2a2a2a;
          line-height: 1.7;
          margin-bottom: 40px;
        }
        
        .contact-row {
          font-size: 16px;
          color: #2a2a2a;
          margin-bottom: 24px;
        }
        
        .contact-row u {
          text-decoration: underline;
          text-decoration-color: #555;
          text-underline-offset: 4px;
        }
        
        .hours-block {
          font-size: 16px;
          color: #2a2a2a;
          line-height: 1.7;
          margin-top: 40px;
        }
        
        .contact-divider {
          border: none;
          height: 1px;
          background: rgba(0,0,0,0.06);
          margin: 60px 0 40px;
        }
        
        .contact-form {
          max-width: 500px;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-label {
          display: block;
          font-size: 13px;
          font-weight: 500;
          color: #777;
          margin-bottom: 8px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .form-label span.req { color: #d64747; margin-left: 2px; }

        .radio-group {
          display: flex;
          gap: 20px;
          margin-top: 10px;
          margin-bottom: 30px;
        }
        .radio-label {
          font-size: 12px;
          color: #333;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .form-input, .form-textarea {
          width: 100%;
          border: 1px solid transparent;
          background: #ffffff;
          padding: 14px 16px;
          font-size: 14px;
          font-family: 'Inter', sans-serif;
          border-radius: 2px;
          outline: none;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .form-input:focus, .form-textarea:focus { border-color: #00c27a; }
        .form-textarea { resize: vertical; min-height: 120px; }
        
        .file-actions { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .btn-file {
          background: #3e2830;
          color: #ffffff;
          border: none;
          padding: 8px 16px;
          font-size: 11px;
          font-weight: 600;
          border-radius: 2px;
          cursor: pointer;
        }
        .btn-file:hover { background: #281a1f; }
        .file-status { font-size: 11px; color: #333; }
        
        .form-help { font-size: 11px; color: #444; line-height: 1.6; }

        .btn-submit {
          background: #5b3f46;
          color: #ffffff;
          border: none;
          padding: 14px 44px;
          font-size: 14px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          border-radius: 2px;
          transition: background 0.2s;
          display: block;
          margin: 60px auto 0;
        }
        .btn-submit:hover { background: #4a333a; }
        
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
          .contact-hero { margin: 40px 20px; padding: 40px; }
        }
        @media (max-width: 576px) {
          .navbar { padding: 0 20px; }
          .contact-hero h1 { font-size: 28px; }
          .contact-hero { padding: 30px 20px; }
          .form-group-split { flex-direction: column; gap: 24px; }
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
      
      <section className="contact-hero">
        <h1>Contact Us / Get an Estimate</h1>
        <p className="contact-subtitle">Submit the form below so we can get started on your project!</p>
        
        <div className="contact-block">
          Askdeb LiteCrete Ltd.<br />
          Pokuase, Katakpo<br />
          GW
        </div>
        
        <div className="contact-row">
          Phone: <u>(888) 9999999</u>
        </div>
        
        <div className="contact-row">
          Email: <u>askden25@gmail.com</u>
        </div>
        
        <div className="hours-block">
          Hours of Operation: Mon - Fri: 8:00am - 5:00pm Eastern Time<br />
          Showroom visits are by appointment only. Please call us to schedule.
        </div>

        <hr className="contact-divider" />
        
        <form className="contact-form">
          <div className="form-group">
            <label className="form-label">I AM HERE FOR<span className="req">*</span></label>
            <div className="radio-group">
              <label className="radio-label">
                <input type="radio" name="inquiryType" value="quotes" defaultChecked /> Quotes and Estimates
              </label>
              <label className="radio-label">
                <input type="radio" name="inquiryType" value="general" /> General Inquiries
              </label>
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">FIRST NAME</label>
            <input type="text" className="form-input" />
          </div>
          
          <div className="form-group">
            <label className="form-label">LAST NAME</label>
            <input type="text" className="form-input" />
          </div>
          
          <div className="form-group">
            <label className="form-label">EMAIL<span className="req">*</span></label>
            <input type="email" className="form-input" />
          </div>
          
          <div className="form-group">
            <label className="form-label">PHONE</label>
            <input type="tel" className="form-input" />
          </div>
          
          <div className="form-group">
            <label className="form-label">HOW CAN WE HELP?</label>
            <textarea className="form-textarea"></textarea>
          </div>
          
          <div className="form-group">
            <label className="form-label" style={{ marginBottom: "12px" }}>UPLOAD RELATED IMAGES OR DOCUMENTS</label>
            <div className="file-actions">
              <button type="button" className="btn-file">Choose File</button>
              <button type="button" className="btn-file">Remove File</button>
              <span className="file-status">No File Chosen</span>
            </div>
            <p className="form-help">
              Please upload any plans, drawings, dimensions, and inspirational imagery to receive a quicker, more accurate quote.
            </p>
          </div>
          
          <button type="submit" className="btn-submit">Submit Form</button>
        </form>
      </section>
    </>
  );
}
