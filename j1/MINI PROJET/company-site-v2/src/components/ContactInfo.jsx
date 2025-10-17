import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <p>
        Contact us and we will get back to you within 24 hours.
      </p>
      <p>
        <FaMapMarkerAlt />
        Company Name
      </p>
      <p>
        <FaPhone />
        +256 778 000 900
      </p>
      <p>
        <FaEnvelope />
        company@gmail.com
      </p>
    </div>
  );
};

export default ContactInfo;