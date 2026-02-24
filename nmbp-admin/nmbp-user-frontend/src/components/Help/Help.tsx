import React, { useState } from "react";

const helplines = [
  {
    name: "NMBA Helpline",
    number: "14446",
    timing: "24x7 Toll Free",
    type: "Toll Free",
  },
  {
    name: "National Drug De-addiction",
    number: "1800-11-0031",
    timing: "24x7 Toll Free",
    type: "Toll Free",
  },
  {
    name: "NIMHANS Helpline",
    number: "080-46110007",
    timing: "Mon-Sat, 9am-5pm",
    type: "Landline",
  },
];

const faqs = [
  {
    q: "What is Nasha Mukt Bharat Abhiyaan?",
    a: "NMBA is a nationwide campaign launched by the Ministry of Social Justice and Empowerment to create drug-free communities through awareness, education, and de-addiction support.",
  },
  {
    q: "How can I take the pledge?",
    a: "Visit the E-Pledge section, read the oath, fill in your details, verify via OTP, and download your certificate.",
  },
  {
    q: "Where can I find de-addiction centres near me?",
    a: "Use the Facilities section to search for nearby de-addiction centres, rehabilitation facilities, and counselling services.",
  },
  {
    q: "How do I report drug abuse in my area?",
    a: "Contact the NMBA Helpline at 14446 or visit your nearest District Nodal Officer to report incidents.",
  },
  {
    q: "Is the helpline service confidential?",
    a: "Yes, all calls to the NMBA helpline are completely confidential and handled by trained counsellors.",
  },
];

const Help: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="px-4 py-4 sm:px-6 sm:py-6 md:px-12 md:py-8">
      <h1 className="text-xl sm:text-2xl font-bold help-page-title mb-1">
        Helpline & Support
      </h1>
      <p className="text-xs sm:text-sm help-page-subtitle mb-4 sm:mb-6">
        Get help, find resources, and connect with support services
      </p>

      {/* Helpline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 sm:mb-8">
        {helplines.map((h) => (
          <div
            key={h.number}
            className="help-card-bg rounded-xl border p-5 shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-base font-bold help-card-title mb-1">
                  {h.name}
                </h3>
                <p className="text-xs help-card-timing m-0">{h.timing}</p>
              </div>
              <span className="px-2.5 py-0.5 rounded-xl text-xs font-semibold help-badge-success">
                {h.type}
              </span>
            </div>
            <div className="text-2xl font-extrabold help-phone-number font-mono mt-3">
              {h.number}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Info */}
      <div className="help-card-bg rounded-xl border p-6 mb-8">
        <h2 className="text-lg font-bold help-card-title mb-4">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-xs help-contact-label mb-1 uppercase font-semibold">
              Email
            </div>
            <div className="text-sm help-contact-value font-medium">
              nmba-helpdesk@gov.in
            </div>
          </div>
          <div>
            <div className="text-xs help-contact-label mb-1 uppercase font-semibold">
              Website
            </div>
            <div className="text-sm help-contact-value font-medium">
              www.nmba.gov.in
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="text-xs help-contact-label mb-1 uppercase font-semibold">
              Address
            </div>
            <div className="text-sm help-address-text">
              Ministry of Social Justice & Empowerment, Shastri Bhawan, New
              Delhi - 110001
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="help-card-bg rounded-xl border overflow-hidden">
        <div className="px-6 py-5 border-b help-section-header">
          <h2 className="text-lg font-bold help-card-title m-0">
            Frequently Asked Questions
          </h2>
        </div>
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={i < faqs.length - 1 ? "border-b help-faq-border" : ""}
          >
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="w-full px-6 py-4 border-none help-faq-question flex justify-between items-center cursor-pointer text-left"
            >
              <span className="text-sm font-semibold help-card-title">
                {faq.q}
              </span>
              <span className="text-xs help-faq-icon">
                {openFaq === i ? "▲" : "▼"}
              </span>
            </button>
            {openFaq === i && (
              <div className="px-6 pb-4 text-sm help-faq-answer leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
