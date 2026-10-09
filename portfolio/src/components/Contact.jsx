import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { contactDetails, links } from '../data/portfolioData';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (value) => /\S+@\S+\.\S+/.test(value);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!validateEmail(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Message is required.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSuccessMessage('');
      return;
    }

    setErrors({});
    setSuccessMessage(
      'Your message has been validated. An email service or backend can be connected later to send messages.'
    );
    setFormData(initialForm);
  };

  return (
    <section id="contact" className="section reveal" data-reveal>
      <div className="container section-heading narrow">
        <p className="section-tag">CONTACT</p>
        <h2>Let&apos;s Connect</h2>
        <p className="section-subtitle">
          Feel free to reach out for internship and entry-level opportunities.
        </p>
      </div>

      <div className="container contact-layout">
        <div className="contact-panel info-panel">
          <div className="contact-item">
            <Mail size={18} />
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          </div>
          <div className="contact-item">
            <MapPin size={18} />
            <span>{contactDetails.location}</span>
          </div>
          <div className="contact-item">
            <ArrowUpRight size={18} />
            {links.github.startsWith('ADD_') ? (
              <span>GitHub: Add link later</span>
            ) : (
              <a href={links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
          </div>
          <div className="contact-item">
            <ArrowUpRight size={18} />
            <a href={contactDetails.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <form className="contact-panel form-panel" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name ? <span className="error-text">{errors.name}</span> : null}
          </div>

          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email ? <span className="error-text">{errors.email}</span> : null}
          </div>

          <div className="field-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message ? <span className="error-text">{errors.message}</span> : null}
          </div>

          <button type="submit" className="primary-btn full-width">
            Send Message
            <ArrowUpRight size={18} />
          </button>

          {successMessage ? <p className="success-text">{successMessage}</p> : null}
        </form>
      </div>
    </section>
  );
}

export default Contact;
