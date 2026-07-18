import { PackageCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/placeholder-image";
import { formatPrice } from "@/lib/format";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { kits } from "@/lib/menu-data";

export default function KitsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <header className="text-center">
        <h1 className="text-3xl font-semibold">Kits</h1>
        <p className="mt-2 text-muted-foreground">
          Compre por quantidade e ganhe brindes e sobremesas conforme o volume.
        </p>
      </header>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {kits.map((kit) => (
          <Card key={kit.quantidade}>
            <PlaceholderImage icon={PackageCheck} className="h-28 rounded-t-xl" />
            <CardContent className="p-5">
              <p className="text-lg font-semibold">{kit.quantidade} marmitas</p>
              <p className="mt-1 text-2xl font-semibold text-primary">{formatPrice(kit.preco)}</p>

              {(kit.brindes > 0 || kit.sobremesas > 0) && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {kit.brindes > 0 && (
                    <Badge variant="secondary">
                      {kit.brindes} {kit.brindes === 1 ? "brinde" : "brindes"}
                    </Badge>
                  )}
                  {kit.sobremesas > 0 && (
                    <Badge variant="secondary">
                      {kit.sobremesas} {kit.sobremesas === 1 ? "sobremesa" : "sobremesas"}
                    </Badge>
                  )}
                </div>
              )}

              <Button asChild className="mt-4 w-full">
                <a
                  href={buildWhatsAppLink(`Olá! Quero pedir o kit de ${kit.quantidade} marmitas.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pedir via WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
