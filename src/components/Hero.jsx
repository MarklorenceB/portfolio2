import React from "react";
// Assuming a library handles the typing animation for titles
// import Typewriter from 'react-ts-typewriter';

const Hero = () => {
  return (
    // Section using a flex layout for content centering
    <section
      id="home"
      className="py-24 md:py-32 flex items-center bg-white border-b-4 border-sky-blue"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        [cite_start]{/* Name [cite: 1] */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-navy-blue mb-4">
          [cite_start]HAZELYN A. CUENCA [cite: 1]
        </h1>
        [cite_start]{/* Animated Titles [cite: 2] */}
        <p className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
          {/* Placeholder for Typewriter Effect */}
          Finance Staff | Bookkeeper | [cite_start]Administrative/Accounting
          Clerk [cite: 2]
        </p>
        [cite_start]{/* About Me Summary [cite: 35, 37] */}
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
          [cite_start]Detail-oriented Accounting and Finance professional with
          solid experience in bookkeeping, tax compliance, accounts management,
          and administrative support[cite: 35]. [cite_start]Seeking
          opportunities as an Accounting Clerk, Finance Staff, Bookkeeper, or
          Administrative Personnel[cite: 37].
        </p>
        {/* Contact/Action Buttons */}
        <div className="space-x-4">
          <a
            href="mailto:hazelyncuenca21@gmail.com"
            className="bg-navy-blue text-white py-3 px-8 rounded-full font-semibold hover:bg-sky-blue transition duration-300"
          >
            [cite_start]Contact Me [cite: 4]
          </a>
          <button className="border-2 border-navy-blue text-navy-blue py-3 px-8 rounded-full font-semibold hover:bg-navy-blue hover:text-white transition duration-300">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
