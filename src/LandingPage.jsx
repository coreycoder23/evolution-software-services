import React, { useState } from "react";
import DemoRequestModal from "./DemoRequestModal";
import logo from "./assets/evo_homepage_logo.png"; // Updated to use actual logo

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="landing-container">
        {/* Logo */}
        <img
          src={logo}
          alt="Evolution Software Services Logo"
          className="logo"
        />

        {/* Tagline */}
        <p className="tagline">
          Intelligence Evolved
        </p>

        

        {/* Call-to-Action Button */}
        <button
          onClick={openModal}
          className="cta-button"
        >
          Join the Waitlist
        </button>

        {/* Minimal Footer */}
        <footer className="footer">
          &copy; {new Date().getFullYear()} Evolution Software Services. All rights reserved.
        </footer>
      </div>

      {/* Demo Request Modal */}
      <DemoRequestModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
} 