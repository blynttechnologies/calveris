import React, { useState } from 'react';
import { siteConfig } from '../data/siteData';
import { Mail, Phone, MessageSquare, ArrowUpRight, Check, Copy } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    firm: '',
    email: '',
    role: '',
    details: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const roleText = formData.role || 'Audit & Accounting Capacity';
    const firmText = formData.firm || 'UK Practice';
    
    const subject = encodeURIComponent(`Calveris enquiry — ${roleText} for ${firmText}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Firm: ${formData.firm}\n` +
      `Email: ${formData.email}\n` +
      `Support needed: ${roleText}\n\n` +
      `Workload, software and start date:\n${formData.details}`
    );

    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    const text = `To: ${siteConfig.contact.email}\nSubject: Calveris enquiry — ${formData.role || 'Capacity'} for ${formData.firm || 'Practice'}\n\nName: ${formData.name}\nFirm: ${formData.firm}\nEmail: ${formData.email}\nDetails:\n${formData.details}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      {/* Left Info Column */}
      <div className="lg:col-span-5 space-y-8">
        <div>
          <h3 className="font-display text-2xl sm:text-3xl font-normal text-foreground">
            Direct Founder Consultation
          </h3>
          <p className="mt-4 text-sm sm:text-base text-foreground/75 font-light leading-relaxed">
            Speak directly with Sri Sivalingam (ACCA). We discuss your firm's immediate deadlines, required software workflows, and the exact seniority needed.
          </p>
        </div>

        <div className="border-t border-hairline pt-6 space-y-4">
          <div className="flex items-center gap-4 py-2">
            <div className="p-3 bg-accent/15 border border-accent/30 text-accent rounded-sm">
              <Mail className="size-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-accent font-semibold">Direct Email</p>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-sm font-medium text-foreground hover:text-accent">
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 py-2">
            <div className="p-3 bg-accent/15 border border-accent/30 text-accent rounded-sm">
              <Phone className="size-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-accent font-semibold">Direct Phone</p>
              <a href={`tel:${siteConfig.contact.phone}`} className="text-sm font-medium text-foreground hover:text-accent">
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 py-2">
            <div className="p-3 bg-accent/15 border border-accent/30 text-accent rounded-sm">
              <MessageSquare className="size-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-accent font-semibold">Instant Chat</p>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent hover:underline flex items-center gap-1"
              >
                <span>WhatsApp Sri directly</span>
                <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 border border-hairline rounded-sm">
          <p className="text-xs uppercase tracking-wider font-semibold text-accent mb-2">
            Confidentiality Guaranteed
          </p>
          <p className="text-xs text-foreground/70 leading-relaxed font-light">
            All conversations and sample file evaluations are conducted under mutual non-disclosure and strict UK GDPR compliance.
          </p>
        </div>
      </div>

      {/* Right Form Column */}
      <div className="lg:col-span-7 bg-card p-8 lg:p-10 border border-hairline shadow-xl rounded-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-accent mb-2">
                Your Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Full name"
                className="w-full bg-[#091210] border border-hairline px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none transition-colors rounded-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-accent mb-2">
                Firm / Practice Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.firm}
                onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                placeholder="Your practice"
                className="w-full bg-[#091210] border border-hairline px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none transition-colors rounded-sm"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-accent mb-2">
                Email Address <span className="text-accent">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@firm.co.uk"
                className="w-full bg-[#091210] border border-hairline px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none transition-colors rounded-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-accent mb-2">
                Service or Role Needed
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full bg-[#091210] border border-hairline px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition-colors rounded-sm"
              >
                <option value="">Select a service or role</option>
                <option value="Audit Junior">Audit Junior</option>
                <option value="Audit Semi-Senior">Audit Semi-Senior</option>
                <option value="Audit Senior">Audit Senior</option>
                <option value="Audit Manager">Audit Manager</option>
                <option value="Accounts Preparation">Accounts Preparation</option>
                <option value="Bookkeeping & VAT">Bookkeeping & VAT</option>
                <option value="Management Accounts">Management Accounts</option>
                <option value="ACCA Qualified Accountant">ACCA Qualified Accountant</option>
                <option value="Multiple Roles / Other">Multiple Roles / Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-accent mb-2">
              Workload, Software & Desired Start Date
            </label>
            <textarea
              rows={4}
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              placeholder="Tell us about your client portfolio, software (e.g. CCH, CaseWare, Xero) and when you need capacity."
              className="w-full bg-[#091210] border border-hairline px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none transition-colors rounded-sm"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] hover:bg-gold-hover transition-all shadow-lg rounded-sm"
            >
              <span>Draft Enquiry Email</span>
              <ArrowUpRight className="size-4" />
            </button>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-hairline bg-[#162621] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-foreground hover:border-accent transition-all rounded-sm"
            >
              {copied ? (
                <>
                  <Check className="size-4 text-accent" />
                  <span className="text-accent">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="size-4 text-muted-foreground" />
                  <span>Copy Details</span>
                </>
              )}
            </button>
          </div>

          {submitted && (
            <p className="text-xs text-accent font-medium">
              ✓ Email client opened! If your default mail client didn't launch, click "Copy Details" and send directly to sri@calveris.uk.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
