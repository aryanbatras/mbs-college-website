"use client";

import { useState } from "react";
import { FaCheckCircle, FaArrowRight, FaArrowLeft, FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaBook } from "react-icons/fa";

const STEPS = [
  { id: 1, title: "Personal Info", icon: FaUser },
  { id: 2, title: "Contact Details", icon: FaPhone },
  { id: 3, title: "Academic Interest", icon: FaBook },
  { id: 4, title: "Review & Submit", icon: FaPaperPlane },
];

const PROGRAMS = [
  "B.Tech Computer Science",
  "B.Tech Information Technology",
  "B.Tech Electronics & Communication",
  "B.Tech Electrical Engineering",
  "B.Tech Mechanical Engineering",
  "B.Tech Civil Engineering",
  "B.Tech CSE with AI&ML",
  "MCA",
];

export function InquiryForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const updateForm = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <FaCheckCircle className="text-[#FFCB05] text-6xl mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-[#00274C] mb-3">Inquiry Submitted!</h3>
        <p className="text-[#5C6370] max-w-md mx-auto">
          Thank you for your interest in MBSCET. Our admissions team will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress indicator */}
      <div className="flex items-center justify-between mb-10">
        {STEPS.map((step, i) => (
          <div key={step.id} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`size-10 flex items-center justify-center transition-colors ${
                  currentStep > step.id
                    ? "bg-[#FFCB05] text-[#00274C]"
                    : currentStep === step.id
                    ? "bg-[#00274C] text-[#FFCB05]"
                    : "bg-[#E5E7EB] text-[#9CA3AF]"
                }`}
              >
                {currentStep > step.id ? (
                  <FaCheckCircle className="text-lg" />
                ) : (
                  <step.icon className="text-lg" />
                )}
              </div>
              <span className="text-[10px] text-[#9CA3AF] mt-2 hidden sm:block">{step.title}</span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`w-12 sm:w-20 h-0.5 mx-2 ${
                  currentStep > step.id ? "bg-[#FFCB05]" : "bg-[#E5E7EB]"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Form steps */}
      <div>
        {currentStep === 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-sm font-bold text-[#00274C]">First Name *</label>
              <input
                id="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => updateForm("firstName", e.target.value)}
                className="px-4 py-3 text-sm bg-white border-2 border-[#E5E7EB] focus:border-[#FFCB05] focus:outline-none transition-colors"
                placeholder="Enter your first name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="text-sm font-bold text-[#00274C]">Last Name *</label>
              <input
                id="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => updateForm("lastName", e.target.value)}
                className="px-4 py-3 text-sm bg-white border-2 border-[#E5E7EB] focus:border-[#FFCB05] focus:outline-none transition-colors"
                placeholder="Enter your last name"
              />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold text-[#00274C]">Email Address *</label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => updateForm("email", e.target.value)}
                className="px-4 py-3 text-sm bg-white border-2 border-[#E5E7EB] focus:border-[#FFCB05] focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-bold text-[#00274C]">Phone Number *</label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => updateForm("phone", e.target.value)}
                className="px-4 py-3 text-sm bg-white border-2 border-[#E5E7EB] focus:border-[#FFCB05] focus:outline-none transition-colors"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="program" className="text-sm font-bold text-[#00274C]">Preferred Program *</label>
              <select
                id="program"
                required
                value={formData.program}
                onChange={(e) => updateForm("program", e.target.value)}
                className="px-4 py-3 text-sm bg-white border-2 border-[#E5E7EB] focus:border-[#FFCB05] focus:outline-none transition-colors text-[#00274C]"
              >
                <option value="">Select a program</option>
                {PROGRAMS.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold text-[#00274C]">Message (Optional)</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => updateForm("message", e.target.value)}
                className="px-4 py-3 text-sm bg-white border-2 border-[#E5E7EB] focus:border-[#FFCB05] focus:outline-none transition-colors resize-none"
                placeholder="Any specific questions or requirements..."
              />
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#00274C] mb-4">Review Your Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#FFCB05]/5">
                <div className="text-xs text-[#9CA3AF] mb-1">Name</div>
                <div className="text-sm font-bold text-[#00274C]">{formData.firstName} {formData.lastName}</div>
              </div>
              <div className="p-4 bg-[#FFCB05]/5">
                <div className="text-xs text-[#9CA3AF] mb-1">Email</div>
                <div className="text-sm font-bold text-[#00274C]">{formData.email}</div>
              </div>
              <div className="p-4 bg-[#FFCB05]/5">
                <div className="text-xs text-[#9CA3AF] mb-1">Phone</div>
                <div className="text-sm font-bold text-[#00274C]">{formData.phone}</div>
              </div>
              <div className="p-4 bg-[#FFCB05]/5">
                <div className="text-xs text-[#9CA3AF] mb-1">Program</div>
                <div className="text-sm font-bold text-[#00274C]">{formData.program || "Not selected"}</div>
              </div>
            </div>
            {formData.message && (
              <div className="p-4 bg-[#FFCB05]/5">
                <div className="text-xs text-[#9CA3AF] mb-1">Message</div>
                <div className="text-sm text-[#00274C]">{formData.message}</div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#E5E7EB]">
        {currentStep > 1 ? (
          <button
            onClick={prevStep}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-[#00274C] hover:text-[#FFCB05] transition-colors"
          >
            <FaArrowLeft className="text-xs" />
            Back
          </button>
        ) : (
          <div />
        )}
        {currentStep < 4 ? (
          <button
            onClick={nextStep}
            className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold bg-[#00274C] text-[#FFCB05] hover:bg-[#1E406B] transition-colors"
          >
            Continue
            <FaArrowRight className="text-xs" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold bg-[#FFCB05] text-[#00274C] hover:bg-white transition-colors"
          >
            <FaPaperPlane className="text-xs" />
            Submit Inquiry
          </button>
        )}
      </div>
    </div>
  );
}
