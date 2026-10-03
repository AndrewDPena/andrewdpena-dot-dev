"use client";

import { useState } from "react";
import { navLinks } from "@/content/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function SiteNav() {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathName === "/" : pathName.startsWith(href);

  return (
    <nav aria-label="Main">
      <ul className="hidden gap-6 sm:flex">
        {navLinks.map((link) => {
          const active = isActive(link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors ${
                  active
                    ? "font-medium text-foreground"
                    : "text-zinc-500 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="sm:hidden">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? "Close" : "Menu"}
        </button>
        {open && (
          <ul
            id="mobile-nav"
            className="absolute inset-x-0 top-full flex flex-col border-b border-zinc-200 bg-background px-6 py-2 dark:border-zinc-800"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`block py-3 text-base transition-colors ${
                      active
                        ? "font-medium text-foreground"
                        : "text-zinc-500 hover:text-foreground"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
}
