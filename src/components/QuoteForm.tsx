import React, { useState, useRef, useEffect } from "react";
import {
  CheckCircle2,
  ShieldCheck,
  Upload,
  FileText,
  ArrowRight,
  AlertCircle,
  Loader2,
} from "lucide-react";

interface QuoteFormProps {
  defaultService?: string;
  initialNotes?: string;
  estimatedRangeSummary?: string;
  heading?: string;
  eyebrow?: string;
  onResetComplete?: () => void;
  resetButtonLabel?: string;
}

const MAX_TOTAL_BYTES = 25 * 1024 * 1024; // 25MB
const ALLOWED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "application/pdf",
]);

const SERVICE_OPTIONS = [
  "Roof Repairs & Storm Damage",
  "New Roof Installation (Pitched / Flat)",
  "Chimney Repairs & Leadwork",
  "Guttering, Fascias & Soffits",
  "Forensic Leak Detection",
  "Commercial Roofing & Maintenance",
];

export default function QuoteForm({
  defaultService = "Roof Repairs & Storm Damage",
  initialNotes = "",
  estimatedRangeSummary = "Direct Quote Inquiry",
  heading = "Register Your Roofing Inquiry",
  eyebrow = "PHYSICAL SITE APPRAISAL FORM",
  onResetComplete,
  resetButtonLabel = "Submit Another Inquiry",
}: QuoteFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [serviceType, setServiceType] = useState(defaultService);
  const [propertyType, setPropertyType] = useState("residential");
  const [contactTime, setContactTime] = useState("morning");
  const [additionalNotes, setAdditionalNotes] = useState(initialNotes);
  const [botField, setBotField] = useState("");
  const [photosUploaded, setPhotosUploaded] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setServiceType(defaultService);
  }, [defaultService]);

  useEffect(() => {
    if (initialNotes) {
      setAdditionalNotes(initialNotes);
    }
  }, [initialNotes]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    if (!e.target.files || e.target.files.length === 0) return;

    const incomingFiles = Array.from(e.target.files);
    const invalidFile = incomingFiles.find(
      (f) => f.type && !ALLOWED_MIME_TYPES.has(f.type)
    );
    if (invalidFile) {
      setFileError(
        `Unsupported file format (${invalidFile.name}). Please upload JPEG, PNG, WebP, or PDF files only.`
      );
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    const existingSize = photosUploaded.reduce((sum, f) => sum + f.size, 0);
    const incomingSize = incomingFiles.reduce((sum, f) => sum + f.size, 0);
    if (existingSize + incomingSize > MAX_TOTAL_BYTES) {
      setFileError(
        "Total upload size exceeds the 25MB limit. Please remove a file or upload smaller photos."
      );
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    setPhotosUploaded((prev) => [...prev, ...incomingFiles]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedEmail = email.trim();
    const trimmedAddress = address.trim();

    if (!trimmedName || trimmedName.length < 2) {
      setSubmitError("Please enter your full name so our surveyor knows who to ask for.");
      return;
    }

    const phoneDigits = trimmedPhone.replace(/\D/g, "");
    if (phoneDigits.length < 7) {
      setSubmitError(
        "Please enter a valid Irish or international phone number (at least 7 digits)."
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setSubmitError("Please enter a valid email address for your itemized quote.");
      return;
    }

    if (!trimmedAddress || trimmedAddress.length < 5) {
      setSubmitError(
        "Please provide your property address and Eircode/postcode for site survey scheduling."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      let response: Response;

      if (photosUploaded.length > 0) {
        const formData = new FormData();
        formData.append("form-name", "contact-quote");
        formData.append("bot-field", botField);
        formData.append("full_name", trimmedName);
        formData.append("phone", trimmedPhone);
        formData.append("email", trimmedEmail);
        formData.append("property_address", trimmedAddress);
        formData.append("service_type", serviceType);
        formData.append("property_type", propertyType);
        formData.append("contact_time", contactTime);
        formData.append("estimated_range", estimatedRangeSummary);
        formData.append("project_notes", additionalNotes.trim());
        photosUploaded.forEach((file) => {
          formData.append("roof_photos", file, file.name);
        });

        response = await fetch("/", {
          method: "POST",
          body: formData,
        });
      } else {
        const encoded = new URLSearchParams({
          "form-name": "contact-quote",
          "bot-field": botField,
          full_name: trimmedName,
          phone: trimmedPhone,
          email: trimmedEmail,
          property_address: trimmedAddress,
          service_type: serviceType,
          property_type: propertyType,
          contact_time: contactTime,
          estimated_range: estimatedRangeSummary,
          project_notes: additionalNotes.trim(),
        }).toString();

        response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encoded,
        });
      }

      if (response.status >= 500) {
        throw new Error("Server temporarily unavailable");
      }

      setFormSubmitted(true);
    } catch {
      setSubmitError(
        "We could not submit your survey request right now. Please check your internet connection or call us directly on"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setSubmitError(null);
    setFileError(null);
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setAdditionalNotes("");
    setPhotosUploaded([]);
    if (onResetComplete) {
      onResetComplete();
    }
  };

  if (formSubmitted) {
    return (
      <div className="text-center py-10 px-4 sm:px-6 space-y-6 max-w-lg mx-auto animate-fadeIn">
        <div className="w-16 h-16 bg-copper/10 text-copper rounded-full flex items-center justify-center mx-auto ring-8 ring-copper/5">
          <CheckCircle2 className="w-8 h-8 text-copper" />
        </div>

        <div className="space-y-2">
          <h3 className="font-display text-xl font-extrabold text-white uppercase tracking-tight">
            SURVEY REGISTRATION COMPLETE
          </h3>
          <p className="font-body text-xs text-slate-300 leading-relaxed">
            Thank you, <strong className="text-white">{name}</strong>. Your{" "}
            <strong className="text-white">{serviceType}</strong> request has been logged inside our Dublin operations calendar. A surveyor will contact you at{" "}
            <strong className="text-white">{phone}</strong> during your preferred{" "}
            <strong className="text-white">{contactTime}</strong> timeframe.
          </p>
        </div>

        <div className="p-4 bg-navy-deep rounded-lg border border-navy-border space-y-2 text-left">
          <span className="font-display text-[10px] text-copper uppercase tracking-wider block font-bold">
            WHAT TO EXPECT NEXT:
          </span>
          <ul className="space-y-1 text-[11px] text-slate-400 font-body">
            <li>· A local lead surveyor will phone you to confirm property access.</li>
            <li>· We inspect your roof edges, slates/tiles, flashings, and timbers.</li>
            <li>· An itemized, fixed-price final proposal is emailed to you.</li>
          </ul>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="btn-outline !px-6 !py-2.5 focus:outline-none"
        >
          {resetButtonLabel}
        </button>
      </div>
    );
  }

  return (
    <form
      name="contact-quote"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      encType="multipart/form-data"
      onSubmit={handleFormSubmit}
      noValidate
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="contact-quote" />
      <input type="hidden" name="estimated_range" value={estimatedRangeSummary} />
      <p className="hidden" aria-hidden="true">
        <label>
          Don&apos;t fill this out if you&apos;re human:{" "}
          <input
            name="bot-field"
            value={botField}
            onChange={(e) => setBotField(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </p>

      <div className="pb-4 border-b border-navy-border flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="font-display text-[10px] text-copper uppercase tracking-widest block font-bold">
            {eyebrow}
          </span>
          <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight">
            {heading}
          </h3>
        </div>
        <span className="text-[10px] text-slate-400 font-body">
          * Indicates required fields
        </span>
      </div>

      {submitError && (
        <div
          role="alert"
          className="p-4 rounded-lg bg-red-950/70 border border-red-500/50 text-red-200 text-xs flex items-start gap-3 animate-fadeIn"
        >
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <span>
            {submitError}{" "}
            <a
              href="tel:+353852248597"
              className="font-mono font-bold text-white underline hover:text-copper"
            >
              +353 85 224 8597
            </a>
          </span>
        </div>
      )}

      {/* Row 1: Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label
            htmlFor="quote-name"
            className="block font-display text-[10px] font-bold text-slate-400 uppercase tracking-wider"
          >
            Full Name *
          </label>
          <input
            id="quote-name"
            name="full_name"
            type="text"
            required
            aria-required="true"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. David Walker"
            className="w-full bg-navy-deep border border-navy-border rounded-lg px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-copper"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="quote-phone"
            className="block font-display text-[10px] font-bold text-slate-400 uppercase tracking-wider"
          >
            Phone Number *
          </label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            required
            aria-required="true"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. +353 85 224 8597"
            className="w-full bg-navy-deep border border-navy-border rounded-lg px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-copper"
          />
        </div>
      </div>

      {/* Row 2: Email & Address */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label
            htmlFor="quote-email"
            className="block font-display text-[10px] font-bold text-slate-400 uppercase tracking-wider"
          >
            Email Address *
          </label>
          <input
            id="quote-email"
            name="email"
            type="email"
            required
            aria-required="true"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            className="w-full bg-navy-deep border border-navy-border rounded-lg px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-copper"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="quote-address"
            className="block font-display text-[10px] font-bold text-slate-400 uppercase tracking-wider"
          >
            Property Address &amp; Eircode *
          </label>
          <input
            id="quote-address"
            name="property_address"
            type="text"
            required
            aria-required="true"
            autoComplete="street-address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Full street address and Eircode"
            className="w-full bg-navy-deep border border-navy-border rounded-lg px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-copper"
          />
        </div>
      </div>

      {/* Row 3: Service Required Dropdown */}
      <div className="space-y-1.5">
        <label
          htmlFor="quote-service"
          className="block font-display text-[10px] font-bold text-slate-400 uppercase tracking-wider"
        >
          Roofing Service Required
        </label>
        <select
          id="quote-service"
          name="service_type"
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          className="w-full bg-navy-deep border border-navy-border rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-copper"
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Row 4: Toggle Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <fieldset className="space-y-2">
          <legend className="block font-display text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Property Use Type
          </legend>
          <div className="grid grid-cols-3 gap-2">
            {["residential", "commercial", "other"].map((type) => (
              <label
                key={type}
                className={`p-2.5 border rounded-lg cursor-pointer text-center text-[10px] font-display uppercase tracking-wider font-bold block select-none transition-colors ${
                  propertyType === type
                    ? "bg-copper/5 border-copper text-copper"
                    : "bg-navy-deep border-navy-border text-slate-400 hover:border-slate-700"
                }`}
              >
                <input
                  type="radio"
                  name="property_type"
                  value={type}
                  checked={propertyType === type}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="sr-only"
                />
                {type}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="space-y-2">
          <legend className="block font-display text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Preferred Callback Hour
          </legend>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {["morning", "afternoon", "evening", "anytime"].map((time) => (
              <label
                key={time}
                className={`p-2.5 border rounded-lg cursor-pointer text-center text-[10px] font-display uppercase tracking-wider font-bold block select-none transition-colors ${
                  contactTime === time
                    ? "bg-copper/5 border-copper text-copper"
                    : "bg-navy-deep border-navy-border text-slate-400 hover:border-slate-700"
                }`}
              >
                <input
                  type="radio"
                  name="contact_time"
                  value={time}
                  checked={contactTime === time}
                  onChange={(e) => setContactTime(e.target.value)}
                  className="sr-only"
                />
                {time}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      {/* Notes */}
      <div className="space-y-1.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label
            htmlFor="quote-notes"
            className="block font-display text-[10px] font-bold text-slate-400 uppercase tracking-wider"
          >
            Project Details / Survey Objectives
          </label>
          {additionalNotes.startsWith("Estimator Summary") && (
            <span className="text-[10px] text-copper font-display font-semibold uppercase">
              Estimator parameters loaded
            </span>
          )}
        </div>
        <textarea
          id="quote-notes"
          name="project_notes"
          rows={4}
          value={additionalNotes}
          onChange={(e) => setAdditionalNotes(e.target.value)}
          placeholder="Symptoms observed (e.g. ceiling stains, slipped slates, leaking valley), target slate style, or access instructions..."
          className="w-full bg-navy-deep border border-navy-border rounded-lg p-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-copper leading-relaxed"
        />
      </div>

      {/* Roof Photo Upload */}
      <div className="space-y-2">
        <label
          htmlFor="quote-photos"
          className="block font-display text-[10px] font-bold text-slate-400 uppercase tracking-wider"
        >
          Upload Photos of Your Roof (Optional)
        </label>

        <div className="relative border-2 border-dashed border-navy-border bg-navy-deep/60 hover:bg-navy-deep/90 p-5 rounded-xl flex flex-col items-center justify-center text-center transition-colors group cursor-pointer hover:border-copper/40">
          <input
            ref={fileInputRef}
            id="quote-photos"
            name="roof_photos"
            type="file"
            multiple
            accept="image/jpeg,image/png,image/webp,application/pdf"
            onChange={handlePhotoUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          <Upload className="w-7 h-7 text-copper mb-2 transition-transform group-hover:scale-105" />
          <span className="font-display text-xs font-bold text-white uppercase block">
            Click or drag photos of your roof or leaks here
          </span>
          <span className="font-body text-[10px] text-slate-400 mt-1 block">
            Supports JPEG, PNG, WebP, or PDF. Max 25MB total.
          </span>
        </div>

        {fileError && (
          <p role="alert" className="text-xs text-red-400 flex items-center gap-1.5 pt-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{fileError}</span>
          </p>
        )}

        {photosUploaded.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {photosUploaded.map((file, idx) => (
              <span
                key={`${file.name}-${idx}`}
                className="inline-flex items-center gap-1.5 bg-navy-deep px-2.5 py-1 text-[10px] font-mono text-slate-300 rounded border border-navy-border"
              >
                <FileText className="w-3 h-3 text-copper shrink-0" />
                <span className="max-w-[140px] truncate">{file.name}</span>
                <button
                  type="button"
                  aria-label={`Remove ${file.name}`}
                  onClick={() =>
                    setPhotosUploaded((prev) => prev.filter((_, i) => i !== idx))
                  }
                  className="text-slate-400 hover:text-white ml-1 focus:outline-none cursor-pointer"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Submit */}
      <div className="pt-4 border-t border-navy-border/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary !px-6 !py-4 flex items-center justify-center gap-2 cursor-pointer focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span>Submitting Survey Request...</span>
            </>
          ) : (
            <>
              <span>Request Free Roofing Quote</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </>
          )}
        </button>

        <div className="flex items-center gap-2 text-xs text-slate-400 font-body justify-center">
          <ShieldCheck className="w-4 h-4 text-copper" />
          <span>Zero Obligation · GDPR Compliant</span>
        </div>
      </div>
    </form>
  );
}
