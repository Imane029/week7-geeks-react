import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    comment: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données envoyées :', formData);
    alert(`Merci pour votre message ! Email: ${formData.email}`);
    setFormData({ email: '', comment: '' });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="email address"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="comment"
        placeholder="comment"
        value={formData.comment}
        onChange={handleChange}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;