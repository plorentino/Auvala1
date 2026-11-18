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

const WHATSAPP_NUMBER = "628133976961"; // <-- Replace with your actual WhatsApp number (no '+' or spaces)
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
                <p className="text-xs uppercase tracking-[0.2em] text-[#C6A87C]">
                  02 / Off-Market Privacy
                </p>
                <p className="mt-2 text-sm text-[#A39E93] leading-relaxed">
                  Inventory is matched privately to qualified briefs rather than
                  scraped or blasted across public portals.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#C6A87C]">
                  03 / Long-Stay Focus
                </p>
                <p className="mt-2 text-sm text-[#A39E93] leading-relaxed">
                  Dedicated to monthly relocations, annual leases, and full
                  retreat buyouts with transparent B2B terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Two-Sided Value Proposition */}
        <section id="partners" className="py-24 px-6 border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-16">
              <p className="text-xs uppercase tracking-[0.22em] text-[#C6A87C]">
                Operating Model
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal">
                Built for Serious Operators & Discerning Residents.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* For Owners & Management */}
              <div className="border border-white/10 bg-white/[0.015] p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 border border-[#C6A87C]/40 flex items-center justify-center text-[#C6A87C] mb-6">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C6A87C]">
                    B2B Distribution
                  </p>
                  <h3 className="mt-2 font-serif text-2xl sm:text-3xl">
                    For Villa Owners & Management Companies
                  </h3>
                  <p className="mt-4 text-sm text-[#A39E93] leading-relaxed">
                    We act as a discreet, high-trust placement partner to fill
                    your monthly and annual availability gaps with verified
                    international tenants.
                  </p>

                  <ul className="mt-8 space-y-3.5 text-sm text-[#D6D1C7]">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#C6A87C] shrink-0 mt-0.5" />
                      <span>
                        No unauthorized photo scraping or public portal
                        re-listing
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#C6A87C] shrink-0 mt-0.5" />
                      <span>
                        Pre-screened tenants with confirmed budgets and move-in
                        dates
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#C6A87C] shrink-0 mt-0.5" />
                      <span>
                        Clear B2B net-rate or standard 10% placement fee
                        agreements
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#C6A87C] shrink-0 mt-0.5" />
                      <span>
                        Direct owner/operator settlement upon contract execution
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10">
                  <a
                    href="#desk"
                    onClick={() => setInquiryType("owner")}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#E6D3B3] hover:text-[#C6A87C] transition-colors"
                  >
                    <span>Share Net Rates & Terms</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* For Inbound Clients */}
              <div className="border border-white/10 bg-white/[0.015] p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 border border-[#C6A87C]/40 flex items-center justify-center text-[#C6A87C] mb-6">
                    <KeyRound className="w-5 h-5" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C6A87C]">
                    Private Advisory
                  </p>
                  <h3 className="mt-2 font-serif text-2xl sm:text-3xl">
                    For Monthly & Annual Residents
                  </h3>
                  <p className="mt-4 text-sm text-[#A39E93] leading-relaxed">
                    Skip outdated listings and inflated broker chains. Submit a
                    single brief and receive verified, available residences
                    sourced directly from management.
                  </p>

                  <ul className="mt-8 space-y-3.5 text-sm text-[#D6D1C7]">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#C6A87C] shrink-0 mt-0.5" />
                      <span>
                        Live availability verified directly with villa
                        operators
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#C6A87C] shrink-0 mt-0.5" />
                      <span>
                        Transparent net-aligned pricing with zero hidden markups
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#C6A87C] shrink-0 mt-0.5" />
                      <span>
                        Curated shortlist within 24 hours of brief submission
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#C6A87C] shrink-0 mt-0.5" />
                      <span>
                        Private viewings, video walkthroughs, and lease
                        coordination
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10">
                  <a
                    href="#desk"
                    onClick={() => setInquiryType("tenant")}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#E6D3B3] hover:text-[#C6A87C] transition-colors"
                  >
                    <span>Request Private Shortlist</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Private Portfolio / Sample Mandates */}
        <section id="mandate" className="py-24 px-6 border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#C6A87C]">
                  Private Portfolio
                </p>
                <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal">
                  Representative Mandates
                </h2>
              </div>
              <p className="text-sm text-[#A39E93] max-w-md leading-relaxed">
                To protect owner privacy and prevent unauthorized re-brokering,
                full photo dossiers and exact locations are shared strictly upon
                brief verification.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  tag: "Active Mandate • Canggu / Tibubeneng",
                  title: "Private River-Sanctuary Residence & 7-Key Compound",
                  specs: "Monthly Stay • Full Kitchen • Wellness & Retreat Capable",
                  note: "Direct owner representation. Available for single-residence monthly placement or full boutique group buyout.",
                },
                {
                  tag: "Active Mandate • Uluwatu / Bukit",
                  title: "3-Bedroom Ocean-View Cliffside Villa",
                  specs: "Monthly / Annual • Infinity Pool • Full Staff & Security",
                  note: "Direct management allocation within walking distance of premier Bukit beach clubs.",
                },
                {
                  tag: "Active Mandate • Pererenan / Berawa",
                  title: "2 to 4-Bedroom Architectural Residences",
                  specs: "Monthly / Yearly • Enclosed Living • Fiber Internet",
                  note: "Vetted multi-villa management portfolio tailored for founders, executives, and relocating families.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="border border-white/10 bg-[#111110] p-7 flex flex-col justify-between hover:border-[#C6A87C]/40 transition-colors"
                >
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-[#C6A87C]">
                      {item.tag}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl leading-snug text-[#F4F1EA]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs uppercase tracking-[0.12em] text-[#A39E93]">
                      {item.specs}
                    </p>
                    <p className="mt-4 text-sm text-[#A39E93] leading-relaxed">
                      {item.note}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#A39E93]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C6A87C]" />
                      <span>Direct Source Verified</span>
                    </span>
                    <a
                      href="#desk"
                      onClick={() => setInquiryType("tenant")}
                      className="text-xs uppercase tracking-[0.16em] text-[#E6D3B3] hover:text-[#C6A87C]"
                    >
                      Inquire →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Coverage */}
        <section id="regions" className="py-24 px-6 border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C6A87C]">
              Geographic Coverage
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal mb-12">
              Core Bali Corridors
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  area: "Canggu & Pererenan",
                  desc: "Berawa, Batu Bolong, Tibubeneng, and Seseh coastal pockets.",
                },
                {
                  area: "Uluwatu & Bukit",
                  desc: "Bingin, Padang Padang, Pecatu, and Nusa Dua luxury enclaves.",
                },
                {
                  area: "Seminyak & Kerobokan",
                  desc: "Established residential compounds with immediate airport access.",
                },
                {
                  area: "Ubud & Gianyar",
                  desc: "Sayan, Nyuh Kuning, and Tegallalang sanctuary residences.",
                },
              ].map((region) => (
                <div
                  key={region.area}
                  className="border border-white/10 p-6 bg-white/[0.01]"
                >
                  <MapPin className="w-4 h-4 text-[#C6A87C] mb-4" />
                  <h3 className="font-serif text-xl text-[#F4F1EA]">
                    {region.area}
                  </h3>
                  <p className="mt-2 text-sm text-[#A39E93] leading-relaxed">
                    {region.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Direct Partner & Client Desk */}
        <section id="desk" className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.22em] text-[#C6A87C]">
                Direct Desk
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal">
                Initiate a Conversation.
              </h2>
              <p className="mt-5 text-sm text-[#A39E93] leading-relaxed">
                Whether you manage a villa portfolio and want reliable monthly
                or annual tenant placements, or you are relocating to Bali and
                need vetted options, reach our desk directly.
              </p>

              <div className="mt-10 space-y-5 border-t border-white/10 pt-8 text-sm">
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex items-center gap-3 text-[#D6D1C7] hover:text-[#C6A87C] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C6A87C]" />
                  <span>{EMAIL_ADDRESS}</span>
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#D6D1C7] hover:text-[#C6A87C] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#C6A87C]" />
                  <span>WhatsApp Partner & Advisory Desk</span>
                </a>
                <div className="flex items-center gap-3 text-[#A39E93]">
                  <MapPin className="w-4 h-4 text-[#C6A87C]" />
                  <span>Badung & South Kuta, Bali, Indonesia</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="border border-white/10 bg-[#111110] p-8 sm:p-10 space-y-6"
              >
                {/* Toggle Role */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] text-[#A39E93] mb-3">
                    I am reaching out as
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setInquiryType("owner")}
                      className={`py-3 px-4 text-xs uppercase tracking-[0.16em] border transition-colors ${
                        inquiryType === "owner"
                          ? "border-[#C6A87C] bg-[#C6A87C]/15 text-[#F4F1EA]"
                          : "border-white/10 text-[#A39E93] hover:border-white/25"
                      }`}
                    >
                      Villa Owner / Manager
                    </button>
                    <button
                      type="button"
                      onClick={() => setInquiryType("tenant")}
                      className={`py-3 px-4 text-xs uppercase tracking-[0.16em] border transition-colors ${
                        inquiryType === "tenant"
                          ? "border-[#C6A87C] bg-[#C6A87C]/15 text-[#F4F1EA]"
                          : "border-white/10 text-[#A39E93] hover:border-white/25"
                      }`}
                    >
                      Prospective Tenant
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.16em] text-[#A39E93] mb-2">
                      {inquiryType === "owner"
                        ? "Name / Management Brand"
                        : "Your Name"}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={
                        inquiryType === "owner"
                          ? "e.g. Bukit Villa Management"
                          : "e.g. Alex Mercer"
                      }
                      className="w-full bg-[#0B0B0A] border border-white/15 px-4 py-3 text-sm text-[#F4F1EA] placeholder:text-white/25 focus:outline-none focus:border-[#C6A87C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.16em] text-[#A39E93] mb-2">
                      WhatsApp or Email
                    </label>
                    <input
                      type="text"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="+62 812..."
                      className="w-full bg-[#0B0B0A] border border-white/15 px-4 py-3 text-sm text-[#F4F1EA] placeholder:text-white/25 focus:outline-none focus:border-[#C6A87C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#A39E93] mb-2">
                    Primary Area
                  </label>
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full bg-[#0B0B0A] border border-white/15 px-4 py-3 text-sm text-[#F4F1EA] focus:outline-none focus:border-[#C6A87C]"
                  >
                    <option>Canggu / Pererenan</option>
                    <option>Uluwatu / Bukit / Nusa Dua</option>
                    <option>Seminyak / Kerobokan</option>
                    <option>Ubud / Gianyar</option>
                    <option>Multiple Bali Regions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#A39E93] mb-2">
                    {inquiryType === "owner"
                      ? "Property Overview & Net Rate Terms"
                      : "Stay Dates, Bedrooms & Monthly Budget"}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder={
                      inquiryType === "owner"
                        ? "Share bedroom count, monthly/yearly availability, and preferred B2B commission structure..."
                        : "Share target move-in date, duration (e.g. 3 months or 1 year), bedroom count, and budget..."
                    }
                    className="w-full bg-[#0B0B0A] border border-white/15 px-4 py-3 text-sm text-[#F4F1EA] placeholder:text-white/25 focus:outline-none focus:border-[#C6A87C]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F4F1EA] text-[#0B0B0A] py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C6A87C] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Send Direct to Auvala WhatsApp Desk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6 text-xs text-[#A39E93]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-serif text-base tracking-[0.25em] text-[#F4F1EA]">
              AUVALA
            </span>
            <span>•</span>
            <span>Bali Private Villa Advisory & Tenant Placement</span>
          </div>
          <p>© {new Date().getFullYear()} Auvala Bali. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
