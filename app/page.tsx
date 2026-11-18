"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  KeyRound,
  Mail,
  MapPin,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

const WHATSAPP_NUMBER = "6281234567890"; // <-- Replace with your actual WhatsApp number (no '+' or spaces)
const EMAIL_ADDRESS = "hello@auvala.com";

export default function AuvalaHome() {
  const [inquiryType, setInquiryType] = useState<"tenant" | "owner">("owner");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [area, setArea] = useState("Canggu / Pererenan");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const roleLabel =
      inquiryType === "owner"
        ? "Villa Owner / Management Partner Inquiry"
        : "Private Villa Sourcing Brief";

    const message = [
      `*AUVALA — ${roleLabel}*`,
      `Name / Company: ${name || "Not specified"}`,
      `Contact: ${contact || "Not specified"}`,
      `Area: ${area}`,
      `Details: ${details || "Requesting partner terms / portfolio access."}`,
    ].join("\n");

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0B0B0A] text-[#F4F1EA]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0B0A]/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#"
            className="font-serif text-2xl tracking-[0.28em] font-medium text-[#F4F1EA]"
          >
            AUVALA
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.18em] text-[#A39E93]">
            <a href="#mandate" className="hover:text-[#F4F1EA] transition-colors">
              Mandate
            </a>
            <a href="#partners" className="hover:text-[#F4F1EA] transition-colors">
              For Owners & Managers
            </a>
            <a href="#regions" className="hover:text-[#F4F1EA] transition-colors">
              Coverage
            </a>
            <a href="#desk" className="hover:text-[#F4F1EA] transition-colors">
              Partner Desk
            </a>
          </nav>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hi Auvala Desk, I'd like to connect regarding Bali villa placements."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#C6A87C]/50 bg-[#C6A87C]/10 px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#E6D3B3] hover:bg-[#C6A87C] hover:text-[#0B0B0A] transition-all"
          >
            <span>Direct Desk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-28 md:pt-36 md:pb-36 px-6 border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,168,124,0.09),transparent_55%)] pointer-events-none" />

          <div className="max-w-6xl mx-auto relative">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-white/10 bg-white/[0.02] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A87C]" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#A39E93]">
                Bali Private Villa Advisory & Partner Desk
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-[1.08] max-w-4xl text-[#F4F1EA]">
              Private Villa Sourcing & Long-Term Tenant Placement in Bali.
            </h1>

            <p className="mt-7 text-base sm:text-lg text-[#A39E93] max-w-2xl leading-relaxed font-light">
              We connect vetted monthly and yearly residents directly with
              private villa owners and hospitality management teams across
              Canggu, Pererenan, Uluwatu, and Ubud—without public listing
              clutter or daisy-chain intermediaries.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#desk"
                onClick={() => setInquiryType("owner")}
                className="inline-flex items-center justify-center gap-2 bg-[#F4F1EA] text-[#0B0B0A] px-7 py-4 text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#C6A87C] transition-colors"
              >
                <span>Register Property / Management</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#desk"
                onClick={() => setInquiryType("tenant")}
                className="inline-flex items-center justify-center gap-2 border border-white/15 bg-transparent px-7 py-4 text-xs uppercase tracking-[0.18em] text-[#F4F1EA] hover:border-[#C6A87C] transition-colors"
              >
                <span>Submit Resident Brief</span>
              </a>
            </div>

            {/* Key Pillars Strip */}
            <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#C6A87C]">
                  01 / Direct Mandate
                </p>
                <p className="mt-2 text-sm text-[#A39E93] leading-relaxed">
                  Direct partnerships with owners and professional management
                  operators—zero sub-agent price stacking.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase
