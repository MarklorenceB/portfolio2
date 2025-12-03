import React from "react";

const professionalExperience = [
  {
    role: "FINANCE HEAD/CONTROLLER",
    company: "GREEN PASTURE LIFE CHURCH",
    duration: "(May 2025 - up to present)",
    description:
      "Responsible for overseeing all financial matters of the ministry. This role ensures that church resources are handled with integrity, transparency, and accountability, all while supporting the mission of the church.",
  },
  {
    role: "TAX COMPLIANCE/FINANCE OFFICER",
    company: "MOTORLANDIA CYCLE CENTER",
    duration: "(January 2022 - April 2025)",
    responsibilities: [
      "Prepared monthly, quarterly, and annual BIR tax returns.",
      "Processed withholding taxes for payables and purchases.",
      "Accountable forms Monitoring Inventory of (SI/DR/CR/OR) for printing.",
      "Process, Compliance, and Application to Loose Leaf Permit of head office and all branches.",
      "Assist in BIR Audits compliance.",
    ],
  },
  {
    role: "DISPATCHING/INVENTORY OFFICER",
    company: "MOTORLANDIA CYCLE CENTER",
    duration: "(January 2020 - December 2021)",
    description:
      "Monitor the Inventory of (SI/DR/CR/OR) supplies for branch. Monitored the accuracy of item quantities and ensuring the proper issuance and delivery of receipts from the printing shop.",
  },
  {
    role: "TAX COMPLIANCE STAFF (ASSISTANT)",
    company: "MOTORLANDIA CYCLE CENTER",
    duration: "(December 2017 - December 2019)",
    description:
      "Provided support in the preparation, documentation, and submission of tax compliance reports. Encoded expenses and updated manual books.",
  },
  {
    role: "CLOSED ACCOUNT STAFF",
    company: "MOTORLANDIA CYCLE CENTER",
    duration: "(April 2017 - November 2017)",
    description:
      "Handled closed installment accounts and validated customer data. Coordinated with departments for account accuracy.",
  },
];

const ExperienceTimeline = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
          <span className="text-3xl">💼</span>
          Professional Experience
        </h1>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-400/30"></div>

          {professionalExperience.map((item, index) => (
            <div key={index} className="relative mb-12 pl-12">
              {/* Timeline Dot */}
              <div className="absolute left-2 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 shadow-lg shadow-blue-500/50"></div>

              {/* Content Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h2 className="text-xl font-bold text-blue-300 mb-1">
                  {item.role}
                </h2>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.company}
                </h3>
                <p className="text-blue-200 text-sm mb-4 font-medium">
                  {item.duration}
                </p>

                {/* Description or Responsibilities List */}
                {item.description && (
                  <p className="text-gray-200 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.responsibilities && (
                  <ul className="space-y-2">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i} className="text-gray-200 flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">•</span>
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
  );
};

export default ExperienceTimeline;
