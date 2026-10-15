"use client";

import { useState } from "react";
import { Send, Copy, Check, Terminal } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function ContactForm() {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const formattedBody = `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}`;

  const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    subject || "Portfolio Contact Inquiry"
  )}&body=${encodeURIComponent(formattedBody)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `To: ${personalInfo.email}\nSubject: ${subject || "Inquiry"}\n\n${formattedBody}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-[#10151D] border border-[#FF2638]/30 rounded-xl p-6 sm:p-8 shadow-[0_0_25px_rgba(255,38,56,0.1)]">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#FF2638]" />
          <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#F4F6FA]">
            TRANSMISSION INTERFACE
          </h3>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
          DIRECT MAIL PROTOCOL
        </span>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = mailtoLink;
        }}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-mono uppercase tracking-wider text-[#A4ADBD] mb-1.5"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="e.g. Alex Vance"
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#0A0D13] border border-white/10 focus:border-[#FF2638] focus:ring-1 focus:ring-[#FF2638] text-sm text-[#F4F6FA] placeholder-[#A4ADBD]/40 outline-none transition-all font-mono"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-mono uppercase tracking-wider text-[#A4ADBD] mb-1.5"
            >
              Your Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              placeholder="e.g. alex@example.com"
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#0A0D13] border border-white/10 focus:border-[#FF2638] focus:ring-1 focus:ring-[#FF2638] text-sm text-[#F4F6FA] placeholder-[#A4ADBD]/40 outline-none transition-all font-mono"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-xs font-mono uppercase tracking-wider text-[#A4ADBD] mb-1.5"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="e.g. Full-Stack Developer Opportunity / Project Collaboration"
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#0A0D13] border border-white/10 focus:border-[#FF2638] focus:ring-1 focus:ring-[#FF2638] text-sm text-[#F4F6FA] placeholder-[#A4ADBD]/40 outline-none transition-all font-mono"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs font-mono uppercase tracking-wider text-[#A4ADBD] mb-1.5"
          >
            Message Payload
          </label>
          <textarea
            id="message"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#0A0D13] border border-white/10 focus:border-[#FF2638] focus:ring-1 focus:ring-[#FF2638] text-sm text-[#F4F6FA] placeholder-[#A4ADBD]/40 outline-none transition-all font-mono resize-y"
          />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="submit"
            className="cursor-pointer w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-[#FF2638] hover:bg-[#FF2638]/90 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(255,38,56,0.4)] transition-all focus:outline-none focus:ring-2 focus:ring-[#FF2638]"
          >
            <Send className="w-4 h-4" />
            <span>Launch Transmission in Email Client</span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#0A0D13] hover:bg-[#161D28] border border-white/10 hover:border-[#FF2638]/50 text-[#F4F6FA] font-mono text-xs uppercase tracking-wider transition-all focus:outline-none focus:ring-2 focus:ring-[#FF2638]"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#A4ADBD]" />
                <span>Copy Payload</span>
              </>
            )}
          </button>
        </div>
      </form>

      <p className="mt-4 text-[11px] font-mono text-[#A4ADBD]/70 text-center">
        Sends directly to <span className="text-[#FF2638]">{personalInfo.email}</span> using your local email client or clipboard. Zero third-party data tracking.
      </p>
    </div>
  );
}
