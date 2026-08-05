"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, ArrowRight, ArrowLeft, Send, User, Mail, Phone, BookOpen } from "lucide-react";

const STEPS = [
  { id: 1, title: "Personal Info", icon: User },
  { id: 2, title: "Contact Details", icon: Phone },
  { id: 3, title: "Academic Interest", icon: BookOpen },
  { id: 4, title: "Review & Submit", icon: Send },
];

const PROGRAMS = [
  "B.E. Computer Science",
  "B.E. Information Technology",
  "B.E. Electronics & Communication",
  "B.E. Electrical Engineering",
  "B.E. Mechanical Engineering",
  "B.E. Civil Engineering",
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
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <CheckCircle className="size-16 text-accent mx-auto mb-6" />
        </motion.div>
        <h3 className="font-heading text-2xl font-semibold text-ink mb-3">Inquiry Submitted!</h3>
        <p className="text-ink-muted max-w-md mx-auto">
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
                    ? "bg-accent text-paper"
                    : currentStep === step.id
                    ? "bg-ink text-paper"
                    : "bg-ink/[0.05] text-ink-faint"
                }`}
              >
                {currentStep > step.id ? (
                  <CheckCircle className="size-5" />
                ) : (
                  <step.icon className="size-5" />
                )}
              </div>
              <span className="text-[10px] text-ink-faint mt-2 hidden sm:block">{step.title}</span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`w-12 sm:w-20 h-0.5 mx-2 ${
                  currentStep > step.id ? "bg-accent" : "bg-ink/[0.1]"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Form steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {currentStep === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm font-medium text-ink">First Name *</label>
                <input
                  id="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => updateForm("firstName", e.target.value)}
                  className="px-4 py-3 text-sm bg-white border border-ink/10 focus:border-accent focus:outline-none transition-colors"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm font-medium text-ink">Last Name *</label>
                <input
                  id="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => updateForm("lastName", e.target.value)}
                  className="px-4 py-3 text-sm bg-white border border-ink/10 focus:border-accent focus:outline-none transition-colors"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-ink">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateForm("email", e.target.value)}
                  className="px-4 py-3 text-sm bg-white border border-ink/10 focus:border-accent focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-ink">Phone Number *</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => updateForm("phone", e.target.value)}
                  className="px-4 py-3 text-sm bg-white border border-ink/10 focus:border-accent focus:outline-none transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="program" className="text-sm font-medium text-ink">Preferred Program *</label>
                <select
                  id="program"
                  required
                  value={formData.program}
                  onChange={(e) => updateForm("program", e.target.value)}
                  className="px-4 py-3 text-sm bg-white border border-ink/10 focus:border-accent focus:outline-none transition-colors text-ink"
                >
                  <option value="">Select a program</option>
                  {PROGRAMS.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-ink">Message (Optional)</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => updateForm("message", e.target.value)}
                  className="px-4 py-3 text-sm bg-white border border-ink/10 focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Any specific questions or requirements..."
                />
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-ink mb-4">Review Your Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-ink/[0.02]">
                  <div className="text-xs text-ink-faint mb-1">Name</div>
                  <div className="text-sm font-medium text-ink">{formData.firstName} {formData.lastName}</div>
                </div>
                <div className="p-4 bg-ink/[0.02]">
                  <div className="text-xs text-ink-faint mb-1">Email</div>
                  <div className="text-sm font-medium text-ink">{formData.email}</div>
                </div>
                <div className="p-4 bg-ink/[0.02]">
                  <div className="text-xs text-ink-faint mb-1">Phone</div>
                  <div className="text-sm font-medium text-ink">{formData.phone}</div>
                </div>
                <div className="p-4 bg-ink/[0.02]">
                  <div className="text-xs text-ink-faint mb-1">Program</div>
                  <div className="text-sm font-medium text-ink">{formData.program || "Not selected"}</div>
                </div>
              </div>
              {formData.message && (
                <div className="p-4 bg-ink/[0.02]">
                  <div className="text-xs text-ink-faint mb-1">Message</div>
                  <div className="text-sm text-ink">{formData.message}</div>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-ink/10">
        {currentStep > 1 ? (
          <button
            onClick={prevStep}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-ink hover:text-accent transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back
          </button>
        ) : (
          <div />
        )}
        {currentStep < 4 ? (
          <button
            onClick={nextStep}
            className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium bg-ink text-paper hover:bg-ink/90 transition-colors"
          >
            Continue
            <ArrowRight className="size-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium bg-accent text-paper hover:bg-accent-strong transition-colors"
          >
            <Send className="size-4" />
            Submit Inquiry
          </button>
        )}
      </div>
    </div>
  );
}
