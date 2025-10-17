import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import { FaBuilding, FaGlobeAmericas, FaUniversity } from 'react-icons/fa';
import './App.css'; 


const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const App = () => {
  return (
    <div>
      <Header />
      
      <div className="container">
       
        <Section 
          Icon={FaBuilding} 
          title="About the Company"
          content={loremIpsum}
        />

        <Section 
          Icon={FaGlobeAmericas} 
          title="Our Values"
          content={loremIpsum}
        />

        <Section 
          Icon={FaUniversity} 
          title="Our Mission"
          content={loremIpsum}
        />

        <div className="contact-container">
          <h2>Contact us</h2>
          <div className="contact-content">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default App;