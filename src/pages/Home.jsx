import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return ( // Home Page right below nav Bar
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <p className="hero-subtitle">
            Licensed electricians serving residential and commercial clients with quality workmanship and excellent customer service.
          </p>
          <div className="button-group">
            <Link to="/contact" className="primary-button">
              Request a Quote for your Electrical
            </Link>
            <a href="tel:555-123-4567" className="secondary-button">
              
              Call Now: 555-123-4567
            </a>
          </div>
          <h1 className="hero-title">
            Texan Electrical Services You Can Trust
          </h1>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {[
              { title: "Residential", icon: "🏠", desc: "Complete home electrical services from repairs to full rewiring" },
              { title: "Commercial", icon: "🏢", desc: "Electrical solutions for businesses of all sizes" },
              { title: "EV Chargers", icon: "🔌", desc: "Installation and maintenance of electric vehicle charging stations" }
            ].map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.desc}</p>
                <Link to="/services" className="service-link">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            {[
              { title: "Licensed & Insured", icon: "✅" },
              { title: "24/7 Emergency Service", icon: "🕒" },
              { title: "100% Satisfaction Guarantee", icon: "🌟" },
              { title: "Fair & Transparent Pricing", icon: "💰" }
            ].map((item, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{item.icon}</div>
                <h3 className="feature-title">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            {[
              { name: "John D.", stars: "★★★★★", text: "Excellent service! Fixed our electrical problems quickly and professionally." },
              { name: "Sarah M.", stars: "★★★★★", text: "Very knowledgeable technicians. Fair pricing and great work quality." },
              { name: "Robert T.", stars: "★★★★☆", text: "Responsive and reliable. Would definitely hire again for future projects." }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="star-rating">{testimonial.stars}</div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {[
              { q: "How quickly can you respond to an emergency?", a: "We offer 24/7 emergency services with response times typically under 60 minutes." },
              { q: "Are your electricians licensed?", a: "Yes, all our electricians are fully licensed, insured, and have undergone extensive training." }
            ].map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">{faq.q}</h3>
                <p className="faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="view-more">
            <Link to="/faq" className="view-more-link">
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <form className="contact-form">
            <div className="form-row">
              <input
                type="text"
                placeholder="Your Name"
                className="form-input"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="form-input"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="form-input"
              required
            />
            <textarea
              placeholder="How can we help you?"
              rows="4"
              className="form-textarea"
              required
            ></textarea>
            <div className="form-submit">
              <button
                type="submit"
                className="submit-button"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Sticky Call Button - visible on mobile */}
      <div className="call-button-mobile">
        <a
          href="tel:555-123-4567"
          className="call-now-button"
        >
          <span className="call-icon">📞</span> Call Now
        </a>
      </div>
    </div>
  );
}

export default Home;