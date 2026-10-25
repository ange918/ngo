"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent)
    return (
      <div className="card pop grid h-full place-items-center p-10 text-center">
        <div>
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent text-2xl font-black text-black">✓</span>
          <h3 className="mt-5 text-xl font-extrabold">Message sent</h3>
          <p className="mt-2 text-sm text-muted">Thanks for reaching out — we&apos;ll reply soon.</p>
          <button onClick={() => setSent(false)} className="btn btn-ghost mt-6">Send another</button>
        </div>
      </div>
    );
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="card space-y-4 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <input required placeholder="Your name" aria-label="Name" className="field" />
        <input required type="email" placeholder="Email address" aria-label="Email" className="field" />
      </div>
      <select aria-label="Subject" className="field" defaultValue="General">
        {["General", "Partnership", "Press", "Support"].map((s) => <option key={s}>{s}</option>)}
      </select>
      <textarea required rows={6} placeholder="Your message" aria-label="Message" className="field resize-none" />
      <button className="btn btn-accent w-full justify-center !py-3.5">Send message</button>
    </form>
  );
}
