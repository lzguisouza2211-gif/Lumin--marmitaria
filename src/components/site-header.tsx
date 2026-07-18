"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/", label: "Início" },
  { href: "/cardapio", label: "Cardápio" },
  { href: "/kits", label: "Kits" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="font-logo text-lg font-semibold text-primary" onClick={() => setOpen(false)}>
          {siteConfig.nome}
        </Link>

        <nav className="hidden gap-6 text-sm font-medium sm:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-foreground/80 hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={buildWhatsAppLink(`Olá! Quero saber mais sobre a ${siteConfig.nome}.`)} target="_blank" rel="noopener noreferrer">
              Fale conosco
            </a>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground sm:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t px-4 py-4 sm:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={buildWhatsAppLink(`Olá! Quero saber mais sobre a ${siteConfig.nome}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-semibold text-primary"
                onClick={() => setOpen(false)}
              >
                Fale conosco
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
