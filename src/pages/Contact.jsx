function Contact() {// this is contact page
    return (
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <p>Have questions or need assistance? Reach out to us!</p>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name" className="form-input" required />
            <input type="tel" placeholder="Phone Number" className="form-input" required />
          </div>
          <input type="email" placeholder="Email Address" className="form-input" required />
          <textarea placeholder="Your Message" rows="4" className="form-textarea" required></textarea>
          <div className="form-submit">
            <button type="submit" className="submit-button">Send Message</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default Contact;