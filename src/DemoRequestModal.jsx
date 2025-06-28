import React, { useState } from 'react';

const DemoRequestModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Formspree for real email functionality
      const response = await fetch('https://formspree.io/f/manjaljw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          _subject: `Waitlist Request from ${formData.name} - Evolution Software Services`,
          _replyto: formData.email,
          timestamp: new Date().toISOString(),
          source: 'evolution-landing-page'
        }),
      });

      if (response.ok) {
        console.log('Waitlist request submitted successfully via Formspree');
        setIsSubmitted(true);
        
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setFormData({ name: '', email: '', company: '', message: '' });
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
      
    } catch (error) {
      console.error('Error submitting waitlist request:', error);
      alert('Please try again or contact us directly at corey@evolutionsoftwareservices.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">Join the Waitlist</h2>
          <button 
            onClick={onClose}
            className="modal-close"
          >
            ×
          </button>
        </div>

        {isSubmitted ? (
          <div className="success-message">
            <div className="success-icon">✅</div>
            <h3 className="success-title">Request Received!</h3>
            <p className="success-text">
              Thank you for your interest in Evolution Software Services.
            </p>
            <div className="success-details">
              <p>• Your request has been sent to our team</p>
              <p>• We'll follow up within 24 hours</p>
              <p>• Questions? Email corey@evolutionsoftwareservices.com</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">
                Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your.email@company.com"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="form-input"
                placeholder="Your company or organization"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Tell us about your needs
              </label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="What software solutions are you looking for?"
              />
            </div>

            <div className="form-actions">
              <button
                type="button"
                onClick={onClose}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email}
                className="btn btn-primary"
              >
                {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default DemoRequestModal; 