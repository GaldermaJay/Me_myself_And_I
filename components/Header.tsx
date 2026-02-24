"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Career", href: "#career" },
  { label: "Why Lilly", href: "#why-lilly" },
  { label: "Contact", href: "#contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          className="focus-ring font-display text-sm font-bold uppercase tracking-[0.18em]"
          aria-label="상단으로 이동"
        >
          LIM JOOYOUNG
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="주요 메뉴">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`focus-ring text-sm font-semibold transition hover:text-ink ${
                link.label.includes("Lilly") ? "text-accent" : "text-slate-700"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="focus-ring inline-flex items-center justify-center rounded-full p-2 text-slate-700 md:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="모바일 메뉴"
          className="border-t border-slate-200 bg-white px-6 py-4 md:hidden"
        >
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`focus-ring block rounded-xl px-3 py-2 text-sm font-semibold transition hover:bg-slate-100 hover:text-accent ${
                    link.label.includes("Lilly") ? "text-accent" : "text-slate-700"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
