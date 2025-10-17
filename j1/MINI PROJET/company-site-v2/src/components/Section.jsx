import React from 'react';

const Section = ({ Icon, title, content }) => {
  return (
    <div className="section-wrapper">
      <div className="section-icon">
        <Icon />
      </div>
      <div className="section-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Section;