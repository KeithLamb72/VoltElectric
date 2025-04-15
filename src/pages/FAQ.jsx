function FAQ() { // this is FAQ page
    return (
      <div className="container">
        <h1 className="section-title">Frequently Asked Questions</h1>
        <div className="faq-list">
          <div className="faq-item">
            <h3 className="faq-question">How quickly can you respond to an emergency?</h3>
            <p className="faq-answer">We offer 24/7 emergency services with response times typically under 60 minutes.</p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Are your electricians licensed?</h3>
            <p className="faq-answer">Yes, all our electricians are fully licensed, insured, and have undergone extensive training.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default FAQ;