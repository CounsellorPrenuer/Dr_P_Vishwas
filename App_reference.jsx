import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  Check, 
  BookOpen, 
  GraduationCap, 
  Heart, 
  Sparkles, 
  Users, 
  Star 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { client } from './sanityClient';
import './App.css';
import logoImg from './assets/logo.png';
import founderImg from './assets/founder.jpg';

function App() {
  // Navigation State
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Content States loaded from Sanity
  const [siteSettings, setSiteSettings] = useState({
    brandName: 'careercanvas',
    tagline: 'Know your current status for better choice of career',
    aboutBrand: 'Know your current status for better choice of career. Guidance available online. Enhance your skills with our programs.',
    phone: '9822870474',
    email: 'manikj61@gmail.com',
    location: '',
    instagram: '',
    linkedin: '',
    youtube: ''
  });
  
  const [founder, setFounder] = useState({
    name: 'Manik Hasabnis',
    bio: 'After completing B.Sc., M.Ed. from Pune University she has vast experience in teaching & training. Vocational guidance and career counselling with life skills training has been her passion. Conducted over 100 Human Resource and Management trainings for MNCs and SMEs over 20 years.'
  });

  const [service, setService] = useState({
    title: 'Psychometric Testing & Career Counselling',
    description: 'Helps you get clarity for your plans for the future. Individual guidance is a chance to clear your doubts if any. Once you subscribe access to our website is always available.',
    targetAudience: 'Students from 10th class to college level, job seekers, working professionals.',
    mode: 'Available online & offline'
  });

  const [packages, setPackages] = useState([
    {
      "_id": "plan-pkg-1",
      "planId": "pkg-1",
      "title": "Discover",
      "price": 5500,
      "category": "mentoria",
      "subgroup": "8-9 students",
      "isPopular": false,
      "features": [
        "Psychometric assessment to measure your interests",
        "1 career counselling session with Mentoria’s expert career coaches",
        "Lifetime access to Knowledge Gateway",
        "Invites to live webinars by industry experts"
      ]
    },
    {
      "_id": "plan-pkg-2",
      "planId": "pkg-2",
      "title": "Discover Plus+",
      "price": 15000,
      "category": "mentoria",
      "subgroup": "8-9 students",
      "isPopular": true,
      "features": [
        "Psychometric assessments to measure your interests, personality and abilities",
        "8 career counselling sessions (1 every year) with Mentoria’s expert career coaches until graduation",
        "Lifetime access to Knowledge Gateway",
        "Invites to live webinars by industry experts",
        "Customised reports after each session with education pathways",
        "Guidance on studying abroad",
        "CV building during internships/graduation"
      ]
    },
    {
      "_id": "plan-pkg-3",
      "planId": "pkg-3",
      "title": "Achieve Online",
      "price": 5999,
      "category": "mentoria",
      "subgroup": "10-12 students",
      "isPopular": false,
      "features": [
        "Psychometric assessment to measure your interests, personality and abilities",
        "1 career counselling session ",
        "Lifetime access to Knowledge Gateway",
        "Pre-recorded webinars by industry experts"
      ]
    },
    {
      "_id": "plan-pkg-4",
      "planId": "pkg-4",
      "title": "Achieve Plus+",
      "price": 10599,
      "category": "mentoria",
      "subgroup": "10-12 students",
      "isPopular": true,
      "features": [
        "Psychometric assessment to measure your interests, personality and abilities",
        "4 career counselling sessions",
        "Lifetime access to Knowledge Gateway",
        "Attend live webinars by industry experts",
        "Customised reports after each session with education pathways",
        "Guidance on studying abroad",
        "CV reviews during internships/graduation"
      ]
    },
    {
      "_id": "plan-pkg-5",
      "planId": "pkg-5",
      "title": "Ascend Online",
      "price": 6499,
      "category": "mentoria",
      "subgroup": "graduates",
      "isPopular": false,
      "features": [
        "Psychometric assessment to measure your interests, personality and abilities",
        "1 career counselling session",
        "Lifetime access to Knowledge Gateway",
        "Pre-recorded webinars by industry experts"
      ]
    },
    {
      "_id": "plan-pkg-6",
      "planId": "pkg-6",
      "title": "Ascend Plus+",
      "price": 10599,
      "category": "mentoria",
      "subgroup": "graduates",
      "isPopular": true,
      "features": [
        "Psychometric assessment to measure your interests, personality and abilities",
        "3 career counselling sessions",
        "Lifetime access to Knowledge Gateway",
        "Attend live webinars by industry experts",
        "Customised reports after each session with information on certificate/online courses",
        "Guidance on studying abroad",
        "CV reviews for job application"
      ]
    },
    {
      "_id": "plan-mp-3",
      "planId": "mp-3",
      "title": "Ascend Online",
      "price": 6499,
      "category": "mentoria",
      "subgroup": "working professionals",
      "isPopular": false,
      "features": [
        "Psychometric assessment to measure your interests, personality and abilities",
        "1 career counselling session ",
        "Lifetime access to Knowledge Gateway",
        "Pre-recorded webinars by industry experts"
      ]
    },
    {
      "_id": "plan-mp-2",
      "planId": "mp-2",
      "title": "Ascend Plus+",
      "price": 10599,
      "category": "mentoria",
      "subgroup": "working professionals",
      "isPopular": true,
      "features": [
        "Psychometric assessment to measure your interests, personality and abilities",
        "3 career counselling sessions",
        "Lifetime access to Knowledge Gateway",
        "Attend live webinars by industry experts",
        "Customised reports after each session with information on certificate/online courses",
        "Guidance on studying abroad",
        "CV reviews for job application"
      ]
    },
    {
      "_id": "plan-career-report",
      "planId": "career-report",
      "title": "Career Report",
      "price": 1500,
      "category": "mentoria-custom",
      "description": "Get a detailed report of your psychometric assessment for a scientific analysis of your interests. Find out where your interests lie and which future paths you can potentially consider."
    },
    {
      "_id": "plan-career-report-counselling",
      "planId": "career-report-counselling",
      "title": "Career Report + Career Counselling",
      "price": 3000,
      "category": "mentoria-custom",
      "description": "Connect with India's top career coaches to analyse your psychometric report and shortlist the top three career paths you're most likely to enjoy and excel at."
    },
    {
      "_id": "plan-knowledge-gateway",
      "planId": "knowledge-gateway",
      "title": "Knowledge Gateway + Career Helpline Access",
      "price": 100,
      "category": "mentoria-custom",
      "duration": "1 Month",
      "description": "Unlock holistic information on your career paths and get direct access to Mentoria's experts, who will resolve your career-related queries through our dedicated Career Helpline. Validate your career decisions from now until you land a job you love."
    },
    {
      "_id": "plan-one-to-one-session",
      "planId": "one-to-one-session",
      "title": "One-to-One Session with a Career Expert",
      "price": 3500,
      "category": "mentoria-custom",
      "duration": "1 Hour",
      "description": "Resolve your career queries and glimpse into your future world through a one-on-one session with an expert from your chosen field."
    },
    {
      "_id": "plan-college-admission-planning",
      "planId": "college-admission-planning",
      "title": "College Admission Planning",
      "price": 3000,
      "category": "mentoria-custom",
      "duration": "top 10 colleges",
      "description": "Get unbiased recommendations and details on your future college options in India and abroad, organised in one resourceful planner."
    },
    {
      "_id": "plan-exam-stress-management",
      "planId": "exam-stress-management",
      "title": "Exam Stress Management",
      "price": 1000,
      "category": "mentoria-custom",
      "duration": "1 hour session",
      "description": "Get expert guidance on tackling exam stress, planning your study schedule, revision tips and more from India's top educators. Increase your chances of acing exams with a calm and clear mind."
    },
    {
      "_id": "plan-cap-100",
      "planId": "cap-100",
      "title": "College Admissions Planner - 100 (CAP-100)",
      "price": 199,
      "category": "mentoria-custom",
      "description": "Get an expert-curated list of colleges based on verified cut-offs. CAP-100 ranks the top 100 colleges into four tiers to help you plan smarter."
    }
  ]);
  const [testimonials, setTestimonials] = useState([]);

  // UI Tabs State for Packages
  const [activeCategory, setActiveCategory] = useState('mentoria'); // 'mentoria' or 'mentoria-custom'
  const [activeSubgroup, setActiveSubgroup] = useState('10-12 students'); // default subgroup for mentoria

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: 'Career Counselling & Psychometric Testing',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch Sanity Data
  useEffect(() => {
    async function fetchData() {
      try {
        // 1. Fetch site settings
        const settingsRes = await client.fetch('*[_type == "siteSettings"][0]');
        if (settingsRes) setSiteSettings(settingsRes);

        // 2. Fetch founder
        const founderRes = await client.fetch('*[_type == "founder"][0]');
        if (founderRes) setFounder(founderRes);

        // 3. Fetch service
        const serviceRes = await client.fetch('*[_type == "service"][0]');
        if (serviceRes) setService(serviceRes);

        // 4. Fetch testimonials
        const testimonialsRes = await client.fetch('*[_type == "testimonial"]');
        if (testimonialsRes && testimonialsRes.length > 0) setTestimonials(testimonialsRes);

        // 5. Fetch packages
        const pricingRes = await client.fetch('*[_type == "pricing"] | order(order asc)');
        if (pricingRes && pricingRes.length > 0) setPackages(pricingRes);
      } catch (err) {
        console.error('Error fetching Sanity data:', err);
      }
    }
    fetchData();

    // Scroll Listener for Nav
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter Packages
  const mentoriaPackages = packages.filter(pkg => pkg.category === 'mentoria');
  const customisablePackages = packages.filter(pkg => pkg.category === 'mentoria-custom');

  // Subgroups available in mentoria
  const subgroups = ['8-9 students', '10-12 students', 'graduates', 'working professionals'];

  // Handle Form Input Change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Form Submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate lead submission or API call
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        purpose: 'Career Counselling & Psychometric Testing',
        message: ''
      });
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="app-wrapper">
      {/* Navbar */}
      <nav className={`navbar ${navScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <a href="#home" className="logo-link">
            <img src={logoImg} alt={`${siteSettings.brandName} Logo`} className="logo-img" />
            <span className="brand-name">{siteSettings.brandName}</span>
          </a>

          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#founder" className="nav-link">About Founder</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#packages" className="nav-link">Packages</a></li>
            <li><a href="#testimonials" className="nav-link">Testimonials</a></li>
            <li><a href="#contact" className="nav-link btn btn-primary" style={{ padding: '8px 20px', color: '#fff' }}>Contact Us</a></li>
          </ul>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-drawer"
            style={{
              position: 'fixed',
              top: '80px',
              left: 0,
              right: 0,
              background: '#fff',
              zIndex: 999,
              padding: '24px',
              boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              borderBottom: '1px solid var(--glass-border)'
            }}
          >
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#founder" onClick={() => setMobileMenuOpen(false)}>About Founder</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#packages" onClick={() => setMobileMenuOpen(false)}>Packages</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="btn btn-primary" style={{ justifyContent: 'center', color: '#fff' }} onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header id="home" className="hero">
        <div className="container hero-grid" style={{ gridTemplateColumns: '1fr', textAlign: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <span className="section-tag" style={{ color: 'var(--secondary)' }}>Welcome to {siteSettings.brandName}</span>
            <h1 className="hero-title" style={{ fontSize: '3.8rem' }}>
              Map Your Future with <span>Insight & Clarity</span>
            </h1>
            <p className="hero-subtitle" style={{ margin: '0 auto 36px auto' }}>
              {siteSettings.tagline}. {siteSettings.aboutBrand}
            </p>
            <div className="hero-cta" style={{ justifyContent: 'center' }}>
              <a href="#packages" className="btn btn-primary">
                View Packages <ChevronRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get Free Call
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* About Founder Section */}
      <section id="founder" className="founder py-24 md:py-32">
        <div className="container">
          <div className="section-title-wrapper mb-16 text-center">
            <h2 className="section-title font-serif text-4xl md:text-5xl font-bold mb-4">Meet the Founder</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              <span className="text-2xl font-bold text-foreground">{founder.name}</span> — {siteSettings.tagline}
            </p>
          </div>
          <div className="founder-grid grid lg:grid-cols-2 gap-12 items-center">
            <div className="founder-text-col order-2 lg:order-1">
              <div className="glass-effect border border-card-border shadow-2xl rounded-3xl p-8 md:p-12" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '32px', borderRadius: '24px' }}>
                <div className="mb-6">
                  <h3 className="font-serif text-3xl font-bold mb-4">{founder.name}</h3>
                  {founder.bio ? (
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {founder.bio}
                    </p>
                  ) : (
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Providing professional career guidance and psychometric testing solutions to help individuals discover their true path.
                    </p>
                  )}
                  <blockquote className="border-l-4 border-primary pl-6 italic text-lg mb-8" style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '24px', fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '32px' }}>
                    "Know your current status for better choice of career."
                  </blockquote>
                </div>
                
                <div className="founder-highlights space-y-3" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div className="highlight-item d-flex align-items-center gap-3" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Check size={16} style={{ color: 'var(--secondary)' }} />
                    <span className="highlight-text font-medium text-foreground">Personalized Scientific Psychometric Testing & Career Analysis</span>
                  </div>
                  <div className="highlight-item d-flex align-items-center gap-3" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Check size={16} style={{ color: 'var(--secondary)' }} />
                    <span className="highlight-text font-medium text-foreground">Guidance for Students, Job Seekers & Working Professionals</span>
                  </div>
                  <div className="highlight-item d-flex align-items-center gap-3" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Check size={16} style={{ color: 'var(--secondary)' }} />
                    <span className="highlight-text font-medium text-foreground">Available both Online & Offline for Maximum Accessibility</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="founder-image-wrapper order-1 lg:order-2" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <div className="founder-image-bg" style={{ position: 'absolute', width: '90%', height: '100%', background: 'var(--peach)', borderRadius: '24px', transform: 'rotate(-4deg)', zIndex: 1 }}></div>
              <img src={founderImg} alt={founder.name} className="founder-image" style={{ width: '90%', height: 'auto', borderRadius: '24px', zIndex: 2, boxShadow: 'var(--shadow-lg)', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services py-6">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag">Our Expertise</span>
            <h2 className="section-title">Services Offered</h2>
          </div>

          <div className="services-card">
            <div className="services-content">
              <h3>{service.title}</h3>
              <p className="services-description">{service.description}</p>
              
              <div className="services-meta">
                <div className="meta-item">
                  <div className="meta-icon-wrapper"><Users size={18} /></div>
                  <div className="meta-text">
                    <strong>Who it is for</strong>
                    <span>{service.targetAudience}</span>
                  </div>
                </div>
                
                <div className="meta-item">
                  <div className="meta-icon-wrapper"><BookOpen size={18} /></div>
                  <div className="meta-text">
                    <strong>Format</strong>
                    <span>{service.mode}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="services-graphics">
              <div className="graphics-circle">
                <div className="graphics-inner">
                  <Sparkles size={48} style={{ marginBottom: '12px' }} />
                  <h4>Psychometric Test</h4>
                  <p>Discover your key interests, personality traits & abilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="packages py-6" style={{ background: '#FFFDF9' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag">Plans & Pricing</span>
            <h2 className="section-title">Packages from Mentoria</h2>
          </div>

          <div className="packages-tabs">
            <button 
              className={`tab-btn ${activeCategory === 'mentoria' ? 'active' : ''}`}
              onClick={() => setActiveCategory('mentoria')}
            >
              Mentoria Plans
            </button>
            <button 
              className={`tab-btn ${activeCategory === 'mentoria-custom' ? 'active' : ''}`}
              onClick={() => setActiveCategory('mentoria-custom')}
            >
              Customisable Plans
            </button>
          </div>

          {activeCategory === 'mentoria' && (
            <div className="packages-subtabs">
              {subgroups.map(sub => (
                <button
                  key={sub}
                  className={`subtab-btn ${activeSubgroup === sub ? 'active' : ''}`}
                  onClick={() => setActiveSubgroup(sub)}
                  style={{ textTransform: 'capitalize' }}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

          <div className="packages-grid">
            {activeCategory === 'mentoria' ? (
              mentoriaPackages
                .filter(pkg => pkg.subgroup === activeSubgroup)
                .map(pkg => (
                  <div key={pkg._id} className={`package-card ${pkg.isPopular ? 'popular' : ''}`}>
                    {pkg.isPopular && <div className="popular-badge">Most Popular</div>}
                    <div className="package-header">
                      <h3 className="package-title">{pkg.title}</h3>
                      <span className="package-duration">Complete Program</span>
                      <div className="package-price">
                        INR {pkg.price} <span>/ total</span>
                      </div>
                    </div>

                    <ul className="package-features">
                      {pkg.features && pkg.features.map((feature, idx) => (
                        <li key={idx} className="package-feature-item">
                          <Check size={16} className="feature-check" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a href={`https://wa.me/${siteSettings.phone}?text=Hi,%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20package`} target="_blank" rel="noreferrer" className="btn btn-primary package-cta">
                      Enroll Now
                    </a>
                  </div>
                ))
            ) : (
              customisablePackages.map(pkg => (
                <div key={pkg._id} className="package-card">
                  <div className="package-header">
                    <h3 className="package-title">{pkg.title}</h3>
                    {pkg.duration && <span className="package-duration">{pkg.duration}</span>}
                    <div className="package-price">
                      INR {pkg.price} {pkg.duration ? <span>/ session</span> : <span>/ service</span>}
                    </div>
                  </div>

                  <p className="package-description">
                    {pkg.description}
                  </p>

                  <a href={`https://wa.me/${siteSettings.phone}?text=Hi,%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20customisable%20package`} target="_blank" rel="noreferrer" className="btn btn-primary package-cta">
                    Inquire Now
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section id="testimonials" className="testimonials py-6">
          <div className="container">
            <div className="section-title-wrapper">
              <span className="section-tag">Success Stories</span>
              <h2 className="section-title">What Our Clients Say</h2>
            </div>

            <div className="testimonials-grid">
              {testimonials.map(t => (
                <div key={t._id} className="testimonial-card">
                  <div className="rating-stars">
                    {Array.from({ length: t.rating || 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="testimonial-quote">
                    "{t.content}"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h5>{t.name}</h5>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Us Section */}
      <section id="contact" className="contact py-6" style={{ background: '#FFFDF9' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag">Start Today</span>
            <h2 className="section-title">Contact Us</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <h3>Send Us a Message</h3>
              {formSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="success-message"
                  style={{
                    background: '#E8F5E9',
                    color: '#2E7D32',
                    padding: '20px',
                    borderRadius: '12px',
                    textAlign: 'center',
                    fontWeight: 600
                  }}
                >
                  Thank you! We've received your query and will contact you shortly.
                </motion.div>
              ) : (
                <form className="contact-form" onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="form-control" 
                      required 
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="form-control" 
                      required 
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Contact Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="form-control" 
                      required 
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="purpose">Purpose of Inquiry</label>
                    <select 
                      id="purpose" 
                      name="purpose" 
                      className="form-control"
                      value={formData.purpose}
                      onChange={handleInputChange}
                    >
                      <option value="Career Counselling & Psychometric Testing">Psychometric Testing & Career Counselling</option>
                      <option value="Mentoria Program">Mentoria Package</option>
                      <option value="Customizable Plan">Customisable Plan</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      className="form-control"
                      placeholder="Tell us more about what you're looking for..."
                      style={{ minHeight: '120px', resize: 'none' }}
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ marginTop: '12px', justifyContent: 'center', width: '100%' }} disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            <div className="contact-details">
              <div className="contact-info-card">
                <h4>Get in Touch Directly</h4>
                <div className="info-list">
                  <div className="info-item">
                    <div className="info-icon">
                      <Phone size={20} />
                    </div>
                    <div className="info-content">
                      <strong>Phone / WhatsApp</strong>
                      <span>{siteSettings.phone}</span>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <Mail size={20} />
                    </div>
                    <div className="info-content">
                      <strong>Email Address</strong>
                      <span>{siteSettings.email}</span>
                    </div>
                  </div>

                  {siteSettings.location && (
                    <div className="info-item">
                      <div className="info-icon">
                        <MapPin size={20} />
                      </div>
                      <div className="info-content">
                        <strong>Office Location</strong>
                        <span>{siteSettings.location}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h4>{siteSettings.brandName}</h4>
              <p>{siteSettings.tagline}</p>
              <div className="social-links">
                {siteSettings.instagram && (
                  <a href={siteSettings.instagram} className="social-icon" target="_blank" rel="noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                )}
                {siteSettings.linkedin && (
                  <a href={siteSettings.linkedin} className="social-icon" target="_blank" rel="noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                )}
                {siteSettings.youtube && (
                  <a href={siteSettings.youtube} className="social-icon" target="_blank" rel="noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
                  </a>
                )}
              </div>
            </div>

            <div className="footer-links">
              <h5>Quick Links</h5>
              <ul className="footer-menu">
                <li><a href="#home" className="footer-menu-link">Home</a></li>
                <li><a href="#founder" className="footer-menu-link">About Founder</a></li>
                <li><a href="#services" className="footer-menu-link">Services</a></li>
                <li><a href="#packages" className="footer-menu-link">Packages</a></li>
                <li><a href="#testimonials" className="footer-menu-link">Testimonials</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h5>Contact Details</h5>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <Phone size={16} />
                  <span>{siteSettings.phone}</span>
                </div>
                <div className="footer-contact-item">
                  <Mail size={16} />
                  <span>{siteSettings.email}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} {siteSettings.brandName}. All rights reserved.</p>
            <p>Designed with premium aesthetics & certified framework integration</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
