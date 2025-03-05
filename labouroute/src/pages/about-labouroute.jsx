import React from "react";
import { FaHandsHelping, FaListAlt, FaLanguage, FaRobot } from "react-icons/fa";
import "../styles/About.css"; // Ensure this is correctly linked!

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Labouroute</h1>
        <p className="text-gray-700 text-lg text-center leading-relaxed mb-6">
          Labouroute is a platform dedicated to guiding laborers through various claim processes and support systems.
          Our goal is to simplify access to resources, ensuring workers receive the benefits they are entitled to.
        </p>

        {/* Mission Section */}
        <div className="about-section">
          <h2 className="about-subtitle">
            <FaHandsHelping className="text-blue-600" /> Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mt-2">
            We aim to empower laborers by providing easy-to-understand information, legal support, and a streamlined process
            for filing claims, addressing disputes, and understanding their rights.
          </p>
        </div>

        {/* Features Section */}
        <h2 className="about-subtitle text-center">Key Features</h2>
        <div className="about-features">
          <div className="feature-card">
            <FaListAlt className="text-blue-600 text-3xl" />
            <p className="text-gray-700 text-lg">Step-by-step guidance for filing claims</p>
          </div>
          <div className="feature-card">
            <FaHandsHelping className="text-blue-600 text-3xl" />
            <p className="text-gray-700 text-lg">Legal support and resources</p>
          </div>
          <div className="feature-card">
            <FaLanguage className="text-blue-600 text-3xl" />
            <p className="text-gray-700 text-lg">Multilingual support for better accessibility</p>
          </div>
          <div className="feature-card">
            <FaRobot className="text-blue-600 text-3xl" />
            <p className="text-gray-700 text-lg">Chatbot assistance for quick query resolution</p>
          </div>
        </div>

        {/* Why Labouroute Section */}
        <div className="about-section">
          <h2 className="about-subtitle">Why Labouroute?</h2>
          <p className="text-gray-700 text-lg leading-relaxed mt-2">
            Unlike traditional methods, Labouroute leverages technology to provide a user-friendly experience,
            ensuring workers get the assistance they need without unnecessary delays or complexities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
