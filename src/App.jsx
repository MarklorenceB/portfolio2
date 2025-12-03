import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  ChevronDown,
  User,
} from "lucide-react";

import profileImageUrl from "/zelyn.png";

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [imageError, setImageError] = useState(false);

  // Replace this URL with Hazelyn's actual photo URL

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hardSkills = [
    "Dispatching/Inventory",
    "Accounts Payable & Receivable Reconciliation",
    "Expense Tracking",
    "Financial Reporting",
    "Data Entry",
    "Invoicing",
    "Microsoft Office Tools Proficiency",
    "Data Security Awareness",
    "Tax Preparation",
  ];

  const softSkills = [
    "Attention to Detail",
    "Time Management",
    "Observation",
    "Decision Making",
    "Communication",
    "Multi-tasking",
    "Adaptability",
    "Resourceful",
  ];

  const experience = [
    {
      role: "Finance Head/Controller",
      company: "Green Pasture Life Church",
      duration: "May 2025 - Present",
      description:
        "Responsible for overseeing all financial matters of the ministry, ensuring church resources are handled with integrity, transparency, and accountability.",
      color: "from-purple-500 to-pink-500",
    },
    {
      role: "Tax Compliance/Finance Officer",
      company: "Motorlandia Cycle Center",
      duration: "January 2022 - April 2025",
      responsibilities: [
        "Prepared monthly, quarterly, and annual BIR tax returns",
        "Processed withholding taxes for payables and purchases",
        "Monitored accountable forms inventory (SI/DR/CR/OR)",
        "Managed Loose Leaf Permit applications",
        "Assisted in BIR Audits compliance",
        "Handled municipal business permit compliance",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      role: "Dispatching/Inventory Officer",
      company: "Motorlandia Cycle Center",
      duration: "January 2020 - December 2021",
      description:
        "Monitored inventory of supplies for branches and ensured accuracy of item quantities and proper issuance of receipts.",
      color: "from-teal-500 to-green-500",
    },
    {
      role: "Tax Compliance Staff (Assistant)",
      company: "Motorlandia Cycle Center",
      duration: "December 2017 - December 2019",
      description:
        "Provided support in preparation, documentation, and submission of tax compliance reports. Encoded expenses and updated manual books.",
      color: "from-emerald-500 to-lime-500",
    },
    {
      role: "Closed Account Staff",
      company: "Motorlandia Cycle Center",
      duration: "April 2017 - November 2017",
      description:
        "Handled closed installment accounts, validated customer data, and coordinated with departments for account accuracy.",
      color: "from-amber-500 to-orange-500",
    },
  ];

  const trainings = [
    "QuickBook Training",
    "Virtual Assistant Training (Clairvoyance Academy)",
    "Understanding and Application of Republic Act No.11976 'EOPT'",
    "Tax Campaign Kick-Off CY 2023",
    "Seminar on VAT and Withholding Tax Developments",
    "Seminar on Tax Enforcement, Assessment and Collection",
    "Year-End Tax Planning and Financial Statement Preparation",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-block">
            {/* Profile Image Container */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              <div className="relative w-48 h-48 mx-auto">
                {!imageError ? (
                  <img
                    src={profileImageUrl}
                    alt="Hazelyn A. Cuenca"
                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-2xl animate-float"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white shadow-2xl animate-float">
                    <User size={80} />
                  </div>
                )}
              </div>
            </div>
          </div>

          <h1 className="text-[35px] md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-fade-in ">
            Hazelyn A. Cuenca
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-6 animate-fade-in-delay">
            Finance Professional | Bookkeeper | Tax Compliance Expert
          </p>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-delay-2">
            Detail-oriented Accounting and Finance professional with solid
            experience in bookkeeping, tax compliance, accounts management, and
            administrative support. Committed to excellence and integrity in
            financial management.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-delay-3">
            <a
              href="mailto:hazelyncuenca21@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Mail size={20} className="text-purple-600" />
              <span className="text-gray-700">hazelyncuenca21@gmail.com</span>
            </a>
            <a
              href="tel:09931334978"
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Phone size={20} className="text-pink-600" />
              <span className="text-gray-700">0993-133-4978</span>
            </a>
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg">
              <MapPin size={20} className="text-blue-600" />
              <span className="text-gray-700">San Pablo City, Laguna</span>
            </div>
          </div>

          <div className="animate-bounce">
            <ChevronDown size={40} className="text-purple-600 mx-auto" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Hard Skills */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-purple-700 mb-6 flex items-center gap-2">
                <Briefcase className="text-purple-600" />
                Hard Skills
              </h3>
              <ul className="space-y-3">
                {hardSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 group"
                  >
                    <span className="text-pink-500 text-xl mt-1 group-hover:scale-125 transition-transform">
                      ✦
                    </span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
                <Award className="text-blue-600" />
                Soft Skills
              </h3>
              <ul className="space-y-3">
                {softSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 group"
                  >
                    <span className="text-blue-500 text-xl mt-1 group-hover:scale-125 transition-transform">
                      ✦
                    </span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400 hidden md:block"></div>

            <div className="space-y-12">
              {experience.map((job, index) => (
                <div key={index} className="relative pl-0 md:pl-20">
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-5 top-6 w-7 h-7 bg-gradient-to-r ${job.color} rounded-full border-4 border-white shadow-lg hidden md:block animate-pulse`}
                  ></div>

                  <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-102">
                    <div
                      className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${job.color} text-white text-sm font-semibold mb-3`}
                    >
                      {job.duration}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {job.role}
                    </h3>
                    <p className="text-lg text-purple-600 font-semibold mb-4">
                      {job.company}
                    </p>

                    {job.description && (
                      <p className="text-gray-600 leading-relaxed">
                        {job.description}
                      </p>
                    )}

                    {job.responsibilities && (
                      <ul className="space-y-2 mt-4">
                        {job.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <span className="text-pink-500 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Training Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-3">
                <GraduationCap className="text-purple-600" size={40} />
                Education
              </h2>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Bachelor of Science in Business Administration
                </h3>
                <p className="text-purple-600 font-semibold mb-2">
                  Major in Financial Management
                </p>
                <p className="text-gray-600 mb-4">
                  Pamantasan ng Lunsod ng San Pablo
                </p>
                <p className="text-sm text-gray-500">Graduated March 2017</p>
              </div>

              <div className="mt-6 bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl shadow-xl">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  On-The-Job Training
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  SSS and BIR Assessment Division
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Encoder of Contributors information</li>
                  <li>• Encoder of Taxpayer BIR returns</li>
                </ul>
              </div>
            </div>

            {/* Trainings */}
            <div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-3">
                <Award className="text-purple-600" size={40} />
                Trainings & Seminars
              </h2>
              <div className="space-y-4">
                {trainings.map((training, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <p className="text-gray-700 flex items-start gap-2">
                      <span className="text-pink-500 text-lg">✓</span>
                      <span>{training}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white text-center">
        <p className="text-lg mb-4">Let's work together!</p>
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="mailto:hazelyncuenca21@gmail.com"
            className="hover:scale-110 transition-transform"
          >
            <Mail size={24} />
          </a>
          <a
            href="tel:09931334978"
            className="hover:scale-110 transition-transform"
          >
            <Phone size={24} />
          </a>
        </div>
        <p className="text-sm opacity-80">
          © 2025 Hazelyn A. Cuenca. All rights reserved.
        </p>
      </footer>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
        
        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.9s both;
        }

        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
