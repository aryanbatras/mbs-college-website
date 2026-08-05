"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle } from "lucide-react";

interface FormFieldProps {
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  success?: string;
  helperText?: string;
  options?: { label: string; value: string }[];
  rows?: number;
  className?: string;
}

export function FormField({
  label,
  type = "text",
  name,
  value = "",
  onChange,
  placeholder,
  required = false,
  error,
  success,
  helperText,
  options,
  rows = 4,
  className = "",
}: FormFieldProps) {
  const [touched, setTouched] = useState(false);
  const [localValue, setLocalValue] = useState(value);

  const handleChange = (newValue: string) => {
    setLocalValue(newValue);
    onChange?.(newValue);
  };

  const showError = touched && error;
  const showSuccess = touched && success && !error;

  const baseInputClasses = `w-full px-4 py-3 text-sm bg-white border transition-colors focus:outline-none ${
    showError
      ? "border-destructive focus:border-destructive"
      : showSuccess
      ? "border-green-500 focus:border-green-500"
      : "border-line focus:border-accent"
  }`;

  return (
    <div className={`space-y-1.5 ${className}`}>
      <label htmlFor={name} className="block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={localValue}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={`${baseInputClasses} resize-none`}
        />
      ) : type === "select" ? (
        <select
          id={name}
          name={name}
          value={localValue}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={() => setTouched(true)}
          required={required}
          className={baseInputClasses}
        >
          <option value="">{placeholder || "Select an option"}</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={localValue}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder={placeholder}
          required={required}
          className={baseInputClasses}
        />
      )}

      {/* Helper text, error, or success */}
      {(helperText || showError || showSuccess) && (
        <div className="flex items-center gap-1.5 text-xs mt-1">
          {showError && (
            <>
              <AlertCircle className="size-3.5 text-destructive" />
              <span className="text-destructive">{error}</span>
            </>
          )}
          {showSuccess && (
            <>
              <CheckCircle className="size-3.5 text-green-600" />
              <span className="text-green-600">{success}</span>
            </>
          )}
          {!showError && !showSuccess && helperText && (
            <span className="text-ink-muted">{helperText}</span>
          )}
        </div>
      )}
    </div>
  );
}

// Form group with label and field
export function FormGroup({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`space-y-6 ${className}`}>{children}</div>;
}

// Validation utilities
export const validators = {
  required: (value: string) => (!value ? "This field is required" : undefined),
  email: (value: string) =>
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Please enter a valid email" : undefined,
  phone: (value: string) =>
    !/^\d{10}$/.test(value.replace(/\D/g, ""))
      ? "Please enter a valid 10-digit phone number"
      : undefined,
  minLength: (min: number) => (value: string) =>
    value.length < min ? `Must be at least ${min} characters` : undefined,
  maxLength: (max: number) => (value: string) =>
    value.length > max ? `Must be no more than ${max} characters` : undefined,
};

// Hook for form validation
export function useFormValidation(
  initialValues: Record<string, string>,
  validationRules: Record<string, (value: string) => string | undefined>
) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    
    // Validate on change if touched
    if (touched[name] && validationRules[name]) {
      const error = validationRules[name](value);
      setErrors((prev) => ({ ...prev, [name]: error || "" }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    
    // Validate on blur
    if (validationRules[name]) {
      const error = validationRules[name](values[name]);
      setErrors((prev) => ({ ...prev, [name]: error || "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    Object.keys(validationRules).forEach((name) => {
      const error = validationRules[name](values[name]);
      if (error) {
        newErrors[name] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched(
      Object.keys(validationRules).reduce(
        (acc, name) => ({ ...acc, [name]: true }),
        {}
      )
    );

    return isValid;
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validate,
    reset,
    isValid: Object.keys(errors).length === 0 && Object.values(errors).every((e) => !e),
  };
}
