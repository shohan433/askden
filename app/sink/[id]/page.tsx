import Link from 'next/link';
import { catalogSinks } from '../../data/products';
import { notFound } from 'next/navigation';

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = catalogSinks.find(p => p.id.toString() === id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; background: #ffffff; color: #1a1c20; }
        
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

        /* ── HEADER TITLE ── */
        .page-header { padding: 40px 60px 0; max-width: 1300px; margin: 0 auto; }
        .page-header h1 { font-family: 'Playfair Display', serif; font-size: 42px; color: #223747; font-weight: 500; }

        /* ── DETAILS LAYOUT ── */
        .details-container { max-width: 1300px; margin: 30px auto 100px; padding: 0 60px; display: grid; grid-template-columns: 1.4fr 1fr; gap: 60px; align-items: start; }
        
        /* ── LEFT GALLERY ── */
        .gallery-wrap { display: flex; flex-direction: column; gap: 10px; }
        .main-img-box { position: relative; width: 100%; aspect-ratio: 1; background: #fdfdfd; display: flex; justify-content: center; align-items: center; overflow: hidden; }
        .main-img-box img { width: 100%; height: 100%; object-fit: cover; }
        .nav-arrow { position: absolute; top: 50%; transform: translateY(-50%); width: 40px; height: 40px; background: transparent; border: none; cursor: pointer; z-index: 10; display: flex; align-items: center; justify-content: center; opacity: 0.5; transition: opacity 0.2s; }
        .nav-arrow:hover { opacity: 1; }
        .nav-arrow.left { left: 10px; }
        .nav-arrow.right { right: 10px; }
        .nav-arrow svg { width: 32px; height: 32px; stroke: #333; }
        
        .thumbnails { display: flex; gap: 10px; overflow-x: auto; padding-bottom: 5px; }
        .thumb-img { width: calc(11.11% - 9px); aspect-ratio: 1; object-fit: cover; cursor: pointer; border: 2px solid transparent; transition: border 0.2s; }
        .thumb-img:hover { border: 2px solid #000; }

        /* ── RIGHT INFO ── */
        .info-panel { display: flex; flex-direction: column; }
        .prod-title { font-size: 26px; font-weight: 500; color: #5c4f4a; line-height: 1.3; margin-bottom: 16px; font-family: 'Inter', sans-serif; letter-spacing: -0.5px; }
        
        .reviews-row { display: flex; align-items: center; gap: 6px; margin-bottom: 24px; }
        .stars { display: flex; gap: 2px; }
        .stars svg { width: 12px; height: 12px; fill: #ffd700; }
        .review-link { font-size: 11px; color: #a9cd5d; text-decoration: none; margin-left: 4px; }
        
        .price-sku-row { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 12px; }
        .prod-price { font-size: 30px; font-weight: 400; color: #222; letter-spacing: -1px; }
        .sku { font-size: 11px; color: #555; text-transform: uppercase; }
        .sku span { font-weight: 600; color: #333;}
        
        .wholesale-link { font-size: 10px; font-weight: 600; color: #72a31d; text-decoration: none; text-transform: uppercase; letter-spacing: 0.5px; line-height: 1.4; display: block; margin-bottom: 30px; }
        .wholesale-link span { font-weight: 400; color: #8ea760; display: block; text-transform: none; font-size: 11px; margin-top: 2px; }

        .divider { border-top: 1px solid #eaeaea; margin-bottom: 30px; }

        .control-group { margin-bottom: 24px; }
        .control-label { font-size: 13px; color: #333; margin-bottom: 10px; display: block; }
        
        .col-options { display: flex; gap: 8px; }
        .col-swatch { width: 34px; height: 34px; border-radius: 50%; border: 1px solid rgba(0,0,0,0.1); cursor: pointer; transition: transform 0.2s; }
        .col-swatch:hover { transform: scale(1.1); border-color: #333;}
        
        .size-select { width: 100%; padding: 12px 14px; font-size: 13px; color: #555; border: 1px solid #e0e0e0; font-family: 'Inter', sans-serif; appearance: none; background: #fff url('data:image/svg+xml;utf8,<svg fill="none" stroke="%23333" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6"></path></svg>') no-repeat right 14px center; background-size: 12px; border-radius: 2px; }
        
        .radio-list { display: flex; flex-direction: column; gap: 10px; }
        .radio-item { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #555; cursor: pointer; }
        .radio-item input { appearance: none; width: 14px; height: 14px; border: 1px solid #999; border-radius: 50%; outline: none; cursor: pointer; }
        .radio-item input:checked { border: 4px solid #72a31d; background: #fff; }

        .cart-row { display: flex; gap: 16px; margin: 30px 0 24px; align-items: stretch; height: 46px; }
        .qty-box { display: flex; align-items: center; border: 1px solid #e0e0e0; width: 90px; }
        .qty-btn { flex: 1; background: #fff; border: none; font-size: 16px; color: #888; cursor: pointer; display: flex; justify-content: center; align-items: center; }
        .qty-input { flex: 1; text-align: center; border: none; font-size: 14px; outline: none; color: #333; width: 100%; }
        .btn-add { flex: 1; background: #7ba82a; color: #fff; border: none; font-size: 12px; font-weight: 600; letter-spacing: 1px; cursor: pointer; transition: background 0.3s; text-transform: uppercase; border-radius: 2px; display: flex; justify-content: center; align-items: center;}
        .btn-add:hover { background: #689022; }

        .action-links { display: flex; gap: 24px; margin-bottom: 40px; }
        .action-btn { background: none; border: none; display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 500; color: #999; cursor: pointer; letter-spacing: 0.5px; transition: color 0.2s; }
        .action-btn:hover { color: #555; }
        .action-btn svg { width: 14px; height: 14px; stroke: #999; fill: none; }

        .prod-features { list-style: none; display: flex; flex-direction: column; gap: 14px; border-top: 1px solid #eaeaea; padding-top: 40px; }
        .prod-features li { display: flex; align-items: flex-start; gap: 8px; font-size: 11.5px; color: #555; line-height: 1.4; }
        .prod-features li::before { content: '•'; color: #999; font-size: 14px; line-height: 1; }

        @media (max-width: 992px) {
          .details-container { grid-template-columns: 1fr; gap: 40px; }
          .page-header, .details-container { padding: 0 30px; }
          .navbar { padding: 0 30px; }
          .nav-links { display: none; }
        }

        /* ── EXTENDED CONTENT TABS ── */
        .extended-content-section { max-width: 1300px; margin: 0 auto 100px; padding: 0 60px; font-family: 'Inter', sans-serif; }
        .tabs-container { display: flex; gap: 4px; border-bottom: 1px solid #d4d4d4; }
        .tab { padding: 14px 20px; background: transparent; border: 1px solid #d4d4d4; border-bottom: none; font-size: 11px; color: #555; text-transform: uppercase; cursor: pointer; position: relative; margin-bottom: -1px; background: #fff;}
        .tab.active { color: #333; font-weight: 500; border-top: 2px solid #7ba82a; z-index: 1; }
        
        .tab-content-panel { border: 1px solid #d4d4d4; border-top: none; padding: 40px; background: #fff; }
        
        .brand-text { font-size: 13px; color: #777; margin-bottom: 24px; }
        .brand-text span { color: #7ba82a; }
        
        .highlight-banner { border-left: 4px solid #00c27a; padding-left: 20px; margin-bottom: 40px; }
        .highlight-banner h3 { font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 500; color: #444; margin-bottom: 8px; }
        .highlight-banner p { font-size: 13px; color: #888; }
        
        .section-subtitle { font-size: 14px; font-weight: 400; color: #666; margin-bottom: 20px; }
        
        .text-content { display: flex; flex-direction: column; gap: 16px; margin-bottom: 40px; }
        .text-content p { font-size: 12px; color: #555; line-height: 1.6; }
        
        .section-divider { display: flex; align-items: center; justify-content: center; gap: 20px; margin: 50px 0 30px; }
        .section-divider .line { flex: 1; height: 1px; background: #d4d4d4; }
        .divider-title { font-size: 14px; font-weight: 400; color: #666; white-space: nowrap; }

        .carousel-wrapper { position: relative; display: flex; align-items: center; margin-top: 30px; }
        .carousel-track { display: flex; gap: 20px; overflow: hidden; padding: 10px 0; width: 100%; justify-content: space-between; }
        .carousel-card { flex: 0 0 calc(20% - 16px); display: flex; flex-direction: column; text-align: center; }
        .carousel-card img { width: 100%; aspect-ratio: 1; object-fit: cover; background: #fdfdfd; margin-bottom: 12px; transition: transform 0.3s; }
        .carousel-card img:hover { transform: scale(1.02); }
        .cc-info h5 { font-size: 11px; font-weight: 500; color: #222; margin-bottom: 6px; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .cc-price { font-size: 11px; color: #555; }
        .carousel-wrapper .nav-arrow { position: absolute; top: calc(50% - 40px); transform: translateY(-50%); width: 40px; height: 40px; background: none; border: none; cursor: pointer; z-index: 10; display: flex; align-items: center; justify-content: center; color: #333; }
        .carousel-wrapper .nav-arrow.left { left: -50px; }
        .carousel-wrapper .nav-arrow.right { right: -50px; }
        .carousel-wrapper .nav-arrow svg { stroke-width: 2 !important; width: 32px !important; height: 32px !important; }

        /* ── PLANTSCAPER FAVORITES ── */
        .favorites-section { max-width: 1300px; margin: 0 auto 100px; padding: 0 60px; font-family: 'Inter', sans-serif; }
        .favorites-section h2 { font-family: 'Inter', sans-serif; font-size: 24px; font-weight: 500; color: #5a5a5a; text-align: center; margin-bottom: 50px; }
        .fav-price { font-size: 13px; color: #777; margin-top: 4px; display: block; }
        .fav-price span { font-size: 11px; color: #aaa; display: block; margin-bottom: 2px; }
        .favorites-section .cc-info { text-align: left; }
        .favorites-section .cc-info h5 { font-size: 11.5px; font-weight: 700; color: #333; margin-bottom: 8px; line-height: 1.4; }

        /* ── FOOTER ── */
        .footer { background: #2a353c; padding: 60px 60px 30px; font-family: 'Inter', sans-serif; }
        .footer-top { display: flex; justify-content: space-between; align-items: flex-start; }
        .footer-left { display: flex; flex-direction: column; gap: 16px; margin-top: 10px; }
        .footer-logo { display: flex; align-items: center; gap: 8px; text-decoration: none; margin-bottom: 15px; }
        .footer-logo-main { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 24px; letter-spacing: 2px; color: #ffffff; text-transform: uppercase; }
        .footer-logo-main span { color: #00c27a; }
        .footer-logo-sub { font-size: 10px; letter-spacing: 4px; color: #b0c0c7; text-transform: uppercase; }
        .footer-brochure { font-size: 14px; color: #fff; text-decoration: none; margin-bottom: 12px; }
        .footer-nav { display: flex; gap: 24px; flex-wrap: wrap; margin-top: 4px; }
        .footer-nav a { font-size: 14px; color: #b0c0c7; text-decoration: none; transition: color 0.2s; }
        .footer-nav a:hover { color: #ffffff; }

        .footer-right { display: flex; flex-direction: column; gap: 12px; align-items: flex-start; }
        .get-app-label { font-size: 16px; color: #b0c0c7; margin-bottom: 8px; font-weight: 400; }
        .app-badge { display: flex; align-items: center; gap: 14px; background: #141c21; border-radius: 6px; padding: 10px 18px; text-decoration: none; width: 180px; transition: background 0.2s; }
        .app-badge:hover { background: #1a252c; }
        .app-badge-icon { display: flex; align-items: center; justify-content: center; }
        .app-badge-text { display: flex; flex-direction: column; line-height: 1.1; }
        .app-badge-small { font-size: 10px; color: #ffffff; font-weight: 500; }
        .app-badge-large { font-size: 16px; color: #ffffff; font-weight: 600; margin-top: 2px; }

        .footer-bottom { margin-top: 15px; }
        .footer-copy { font-size: 13px; color: #b0c0c7; }

        /* Mobile Menu */
        .nav-toggle { display: none; }
        .hamburger { display: none; font-size: 28px; color: #c8d6e0; cursor: pointer; z-index: 1001; margin: 0; line-height: 1;}
        .mobile-menu { position: fixed; inset: 0; background: #0d1f2d; z-index: 1000; display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0; pointer-events: none; transition: opacity 0.3s; }
        .mobile-nav-links { display: flex; flex-direction: column; gap: 32px; text-align: center; list-style: none; padding: 0; }
        .mobile-nav-links a { color: #ffffff; font-size: 24px; text-decoration: none; font-weight: 500; }
        .mobile-nav-links a.active { color: #00c27a; }

        .nav-toggle:checked ~ .mobile-menu { opacity: 1; pointer-events: auto; }
        .nav-toggle:checked ~ .navbar .hamburger::after { content: '✕'; font-size: 28px; }
        .hamburger::after { content: '☰'; font-size: 28px; }

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .hamburger { display: block; }
          .details-container { flex-direction: column; align-items: center; gap: 40px; }
          .gallery-wrap, .info-wrap { width: 100%; max-width: 600px; }
          .thumbnails { justify-content: center; }
        }

        @media (max-width: 992px) {
          .carousel-track { overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 20px; }
          .carousel-card { flex: 0 0 calc(45% - 10px); scroll-snap-align: start; }
          .carousel-wrapper .nav-arrow { display: none; }
        }

        @media (max-width: 768px) {
          .page-header h1 { font-size: 32px; }
          .extended-content-section, .favorites-section, .footer { padding-left: 30px; padding-right: 30px; }
          
          .tabs-container { overflow-x: auto; flex-wrap: nowrap; padding-bottom: 5px; }
          .tab { white-space: nowrap; font-size: 10px; padding: 12px 14px; }
          .tab-content-panel { padding: 30px 20px; }
          
          .footer-top { flex-direction: column; gap: 40px; }
          .footer-nav { flex-direction: column; gap: 16px; margin-top: 10px; }
        }

        @media (max-width: 576px) {
          .details-container, .extended-content-section, .favorites-section, .footer { padding-left: 20px; padding-right: 20px; }
          .page-header { padding-left: 20px; padding-right: 20px; }
          
          .prod-title { font-size: 22px; }
          .prod-price { font-size: 24px; }
          .highlight-banner h3 { font-size: 16px; }
          
          .carousel-card { flex: 0 0 calc(80% - 10px); }
          .cart-row { flex-direction: column; height: auto; gap: 12px; }
          .qty-box { width: 100%; height: 46px; }
          .btn-add { height: 46px; }
          .action-links { flex-direction: column; gap: 16px; align-items: flex-start; }
          
          .thumbnails { padding-bottom: 10px; }
          .thumb-img { width: calc(25% - 8px); flex-shrink: 0; }
        }
      `}</style>
      
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <nav className="navbar">
        <Link href="/" className="logo-wrap">
          <div className="logo-bar" />
          <div className="logo-text">
            <span className="logo-main">ASKD<span>E</span>N</span>
            <span className="logo-sub">Litecrete</span>
          </div>
        </Link>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/flower-pots">Flower Pots</Link></li>
          <li><Link href="/counter-top">Counter top</Link></li>
          <li><Link href="/sink" style={{ color: '#00c27a' }}>Sink</Link></li>
          <li><Link href="/blocks">Blocks</Link></li>
          <li><Link href="/construction">Construction</Link></li>
          <li><Link href="#" className="contact-btn">Contact us</Link></li>
        </ul>
        <label htmlFor="nav-toggle" className="hamburger"></label>
      </nav>

      <div className="mobile-menu">
        <ul className="mobile-nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/flower-pots">Flower Pots</Link></li>
          <li><Link href="/counter-top">Counter top</Link></li>
          <li><Link href="/sink" className="active">Sink</Link></li>
          <li><Link href="/blocks">Blocks</Link></li>
          <li><Link href="/construction">Construction</Link></li>
          <li>
            <Link href="/contact" style={{ color: '#00c27a', fontSize: '20px', marginTop: '16px', display: 'inline-block' }}>
              Contact Us →
            </Link>
          </li>
        </ul>
      </div>

      <div className="page-header">
        <h1>Sinks</h1>
      </div>

      <div className="details-container">
        <div className="gallery-wrap">
          <div className="main-img-box">
            <button className="nav-arrow left">
              <svg viewBox="0 0 24 24" strokeWidth="1"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <img src={product.image} alt={product.title} />
            <button className="nav-arrow right">
              <svg viewBox="0 0 24 24" strokeWidth="1"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
          <div className="thumbnails">
            {[product.image, '/project-sinks.png', '/project-vanity.png', '/project-stool.png', '/flowerpots-hero.png', '/services-countertop.png', '/services-blocks.png', '/project-planters.png', '/project-flowerpot.png'].map((src, i) => (
              <img key={i} src={src} className="thumb-img" alt="Thumbnail" />
            ))}
          </div>
        </div>

        <div className="info-panel">
          <h2 className="prod-title">{product.title}</h2>

          <div className="reviews-row">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
              ))}
            </div>
            <Link href="#" className="review-link">1 Review</Link>
          </div>

          <div className="price-sku-row">
            <div className="prod-price">{product.price.replace('$', '$')}</div>
            <div className="sku"><span>SKU#:</span> MO</div>
          </div>

          <Link href="#" className="wholesale-link">
            WHOLESALE OR TRADE PRO?
            <span>See exclusive pricing &rarr;</span>
          </Link>

          <div className="divider"></div>

          <div className="control-group">
            <label className="control-label">Color</label>
            <div className="col-options">
              {product.colors.map((c, i) => (
                <div key={i} className="col-swatch" style={{ backgroundColor: c }} />
              ))}
            </div>
          </div>

          <div className="control-group">
            <label className="control-label">Size</label>
            <select className="size-select">
              <option>Choose an Option...</option>
              <option>Small (15&quot;H)</option>
              <option>Medium (20&quot;H)</option>
              <option>Large (30&quot;H)</option>
            </select>
          </div>

          <div className="control-group">
            <label className="control-label" style={{ color: '#555', marginBottom: '14px' }}>Finish <span style={{ color: '#ff3b30' }}>*</span></label>
            <div className="radio-list">
              <label className="radio-item">
                <input type="radio" name="options" defaultChecked />
                Gloss
              </label>
              <label className="radio-item">
                <input type="radio" name="options" />
                Matte
              </label>
            </div>
          </div>

          <div className="cart-row">
            <div className="qty-box">
              <button className="qty-btn">-</button>
              <input type="text" className="qty-input" defaultValue="1" readOnly />
              <button className="qty-btn">+</button>
            </div>
            <button className="btn-add">Add to Cart</button>
          </div>

          <div className="action-links">
            <button className="action-btn">
              <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              ADD TO WISH LIST
            </button>
            <button className="action-btn" style={{ strokeWidth: "2" }}>
              <svg viewBox="0 0 24 24"><path d="M8 8H4v12h12v-4"></path><rect x="8" y="4" width="12" height="12"></rect></svg>
              ADD TO COMPARE
            </button>
          </div>

          <ul className="prod-features">
            <li>Made with top-quality resins and premium fiberglass</li>
            <li>Frost-resistant, ideal for all weather conditions</li>
            <li>Natural look for an organic and elegant aesthetic</li>
            <li>Raised bottom for optimal water drainage and plant health</li>
            <li>Backed by a 5-year warranty</li>
          </ul>
        </div>
      </div>

      <div className="extended-content-section" style={{ border: 'none', padding: '0 60px' }}>
        <div className="section-divider" style={{ justifyContent: 'flex-start' }}>
          <h4 className="divider-title" style={{ fontSize: '18px', color: '#777' }}>About Cosapots</h4>
          <span className="line" style={{ background: '#e0e0e0' }}></span>
        </div>

        <div className="text-content" style={{ marginTop: '20px', marginBottom: '80px' }}>
          <p>Inspiration is everywhere. On every corner. In every street. Shapes. Materials. Patterns. Our architects use this inspiration to design our unique Cosapots collection. Handcrafted excellence in large size planters. Designed for impact, build to last.</p>
          <p>Discover the beauty of Cosapots planters, meticulously crafted by skilled artisans under the guidance of Belgian architects. Each planter is handmade using premium resins and fiberglass, ensuring exceptional durability and backed by a 5-year warranty. These planters are frost-resistant and impermeable, guaranteeing long-lasting beauty in any weather. With their natural look, Cosapots seamlessly fit into any environment, adding elegance to your space. Thoughtful design features like the reinforced rim and raised bottom for optimal drainage enhance both the aesthetics and functionality.</p>
        </div>

        <div className="section-divider" style={{ justifyContent: 'flex-start' }}>
          <h4 className="divider-title" style={{ fontSize: '18px', color: '#777' }}>Additional Products from Cosapots</h4>
          <span className="line" style={{ background: '#e0e0e0' }}></span>
        </div>

        <div className="carousel-wrapper" style={{ marginTop: '40px', marginBottom: '100px' }}>
          <button className="nav-arrow left"><svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
          <div className="carousel-track">
            {catalogSinks.slice(0, 5).map(prod => (
              <div className="carousel-card" key={prod.id}>
                <img src={prod.image} alt={prod.title} />
                <div className="cc-info">
                  <h5 style={{ fontSize: '12px', fontWeight: 'bold' }}>{prod.title}</h5>
                  <span className="cc-price">{prod.price}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="nav-arrow right"><svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-left">
            <Link href="/" className="footer-logo">
              <div className="logo-bar" style={{ height: "26px" }} />
              <div className="logo-text">
                <span className="footer-logo-main">ASKD<span>E</span>N</span>
                <span className="footer-logo-sub">Litecrete</span>
              </div>
            </Link>
            <div className="footer-brochure">Download Brochure Now</div>
            <nav className="footer-nav">
              {["About", "Features", "Pricing", "Careers", "Help", "Privacy Policy"].map((item) => (
                <Link key={item} href="#">{item}</Link>
              ))}
            </nav>
            <div className="footer-bottom">
              <div className="footer-copy">© 2020 ISTAIX. All rights reserved</div>
            </div>
          </div>
          <div className="footer-right">
            <div className="get-app-label">Get the App</div>
            <a href="#" className="app-badge">
              <span className="app-badge-icon">
                <svg fill="#ffffff" viewBox="0 0 384 512" width="24" height="24">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.3zM34.4 46.4c28.3-31.7 68.1-46.4 105.2-46.4 1.3 34.3-13.2 65.8-34.8 89.6-24.1 26.8-63 41.6-105.2 41.6-1.2-34.9 13.9-63.5 34.8-84.8z" />
                </svg>
              </span>
              <div className="app-badge-text">
                <span className="app-badge-small">Download on the</span>
                <span className="app-badge-large">App Store</span>
              </div>
            </a>
            <a href="#" className="app-badge">
              <span className="app-badge-icon">
                <svg viewBox="0 0 512 512" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                  <path d="M49 14.9C36.6 22.4 30.1 35 30.1 52.8v406.4c0 17.8 6.5 30.5 18.9 37.9L288.5 256 49 14.9z" fill="#00f176" />
                  <path d="M369.3 336.8L288.5 256l-239.5-241 247.9 141.5 73.4 41.8-101 138.5z" fill="#00a0ff" />
                  <path d="M370.4 174.5L296.8 217 288.5 256l101 138.5c19.1 11.2 38.4-1.2 38.4-22.3V140c0-21.2-19.3-33.6-38.4-22.4l-19.1 56.9z" fill="#ffc100" />
                  <path d="M288.5 256l80.8 80.8-73.4 41.8-246.9 140.5L288.5 256z" fill="#ff3a44" />
                </svg>
              </span>
              <div className="app-badge-text">
                <span className="app-badge-small">GET IT ON</span>
                <span className="app-badge-large">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
