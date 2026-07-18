import Link from "next/link";
import { Salad, Soup, PackageCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceholderImage } from "@/components/placeholder-image";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const destaques = [
  {
    icon: Salad,
    titulo: "Protocolos por objetivo",
    descricao: "Hipertrofia, emagrecimento e mais — macros calculados, você escolhe a proteína e o carboidrato.",
    href: "/cardapio",
  },
  {
    icon: Soup,
    titulo: "Sabores da semana",
    descricao: "Pratos fixos, pensados semana a semana, sem repetir o cardápio.",
    href: "/cardapio",
  },
  {
    icon: PackageCheck,
    titulo: "Kits com desconto",
    descricao: "De 10 a 60 marmitas, com brindes e sobremesas conforme a quantidade.",
    href: "/kits",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-4 py-20 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {siteConfig.tagline}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Marmitas fitness com protocolos por objetivo, sabores da semana e kits por quantidade — peça direto pelo WhatsApp.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/cardapio">Ver cardápio</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/kits">Ver kits</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {destaques.map((item) => (
            <Card key={item.titulo}>
              <PlaceholderImage icon={item.icon} className="h-32 rounded-t-xl" />
              <CardContent className="p-5">
                <p className="font-semibold">{item.titulo}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.descricao}</p>
                <Link href={item.href} className="mt-3 inline-block text-sm font-medium text-primary hover:underline">
                  Saiba mais →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t bg-secondary/30">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <h2 className="text-2xl font-semibold">Como funciona</h2>
          <div className="mt-8 grid gap-8 text-sm sm:grid-cols-3">
            <div>
              <p className="text-3xl font-semibold text-primary">1</p>
              <p className="mt-2 font-medium">Escolha seu protocolo ou kit</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-primary">2</p>
              <p className="mt-2 font-medium">Fale conosco pelo WhatsApp</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-primary">3</p>
              <p className="mt-2 font-medium">Combine pagamento e entrega</p>
            </div>
          </div>

          <Button asChild size="lg" className="mt-10">
            <a href={buildWhatsAppLink(`Olá! Quero fazer um pedido na ${siteConfig.nome}.`)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              Fazer pedido via WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
