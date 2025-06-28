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
      // For expo demo, just show success without backend complexity
      // In the future, you can add real API integration here
      
      console.log('Demo request submitted:', {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'evolution-landing-page'
      });

      // Show success immediately for clean expo experience
      setIsSubmitted(true);
      
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', message: '' });
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting demo request:', error);
      alert('Please contact us directly at corey@evolutionsoftwareservices.com');
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
              <p>• Thank you for your interest!</p>
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