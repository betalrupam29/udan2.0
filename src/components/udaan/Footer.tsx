import { LogoPlaceholder } from "./Logo";
import { useState } from "react";
import { toast } from "sonner";

const quick = ["Home", "About", "Themes", "Awards"];
const useful = ["Guidelines", "FAQ", "Contact"];

export function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer className="relative gradient-navy text-white/85">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <LogoPlaceholder label="Logo 1" variant="dark" />
              <LogoPlaceholder label="Logo 2" variant="dark" />
            </div>
            <div className="mt-5 font-display text-2xl font-bold text-white">UDAAN 2.0</div>
            <p className="mt-2 text-sm text-white/60 max-w-xs">
              National Level Prototype & Business Model Competition by IIC, Heritage Institute of Technology.
            </p>
          </div>

          <FooterCol title="Quick Links" links={quick} />
          <FooterCol title="Useful Links" links={useful} />

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold-light">Newsletter</div>
            <p className="mt-3 text-sm text-white/60">Get updates about UDAAN 2.0 announcements.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: newsletter API
                toast.success("Subscribed. Watch your inbox for updates.");
                setEmail("");
              }}
              className="mt-4 flex gap-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-full bg-white/5 border border-white/15 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold/60"
              />
              <button className="rounded-full gradient-gold px-4 py-2.5 text-sm font-semibold text-navy-deep shadow-gold-glow">
                Join
              </button>
            </form>
            <div className="mt-6 text-xs uppercase tracking-[0.25em] text-gold-light">Contact</div>
            <div className="mt-2 text-sm text-white/70">iic-hitk@heritageit.edu</div>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
          <div>© 2026 UDAAN 2.0 | Institution's Innovation Council | Heritage Institute of Technology</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gold-light">Privacy</a>
            <a href="#" className="hover:text-gold-light">Terms</a>
            <a href="#" className="hover:text-gold-light">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.25em] text-gold-light">{title}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} className="text-white/70 hover:text-white transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
