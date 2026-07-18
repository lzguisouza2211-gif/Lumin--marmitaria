import { Drumstick, Sandwich, IceCreamCone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/placeholder-image";
import { formatPrice } from "@/lib/format";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import {
  protocolos,
  proteinasDisponiveis,
  carboidratosDisponiveis,
  legumesObservacao,
  saboresSemana,
  lanches,
  sobremesaDefinida,
} from "@/lib/menu-data";

export default function CardapioPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 space-y-20">
      <header className="text-center">
        <h1 className="text-3xl font-semibold">Cardápio</h1>
        <p className="mt-2 text-muted-foreground">
          Escolha um protocolo por objetivo, um sabor da semana, ou monte seu lanche.
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold">Protocolos</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Cada protocolo define a gramagem e os macros. Proteína e carboidrato são combinados com você na hora do pedido.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {protocolos.map((protocolo) => (
            <Card key={protocolo.slug}>
              <div className="flex flex-col sm:flex-row">
                <PlaceholderImage
                  icon={Drumstick}
                  className="h-28 w-full rounded-t-xl sm:h-auto sm:w-28 sm:rounded-l-xl sm:rounded-tr-none"
                />
                <CardContent className="flex-1 p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold">{protocolo.nome}</p>
                      <p className="text-sm text-muted-foreground">{protocolo.gramagem}</p>
                    </div>
                    <p className="font-semibold text-primary">{formatPrice(protocolo.preco)}</p>
                  </div>

                  {protocolo.carboG && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="secondary">{protocolo.carboG}g carbo</Badge>
                      <Badge variant="secondary">{protocolo.proteinaG}g proteína</Badge>
                      <Badge variant="secondary">{protocolo.legumesG}g legumes</Badge>
                    </div>
                  )}

                  <Button asChild size="sm" className="mt-4">
                    <a
                      href={buildWhatsAppLink(
                        `Olá! Quero pedir o protocolo "${protocolo.nome}" (${protocolo.gramagem}).`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pedir via WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardContent className="grid gap-4 p-5 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold">Proteínas disponíveis</p>
              <p className="mt-1 text-sm text-muted-foreground">{proteinasDisponiveis.join(" · ")}</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Carboidratos disponíveis</p>
              <p className="mt-1 text-sm text-muted-foreground">{carboidratosDisponiveis.join(" · ")}</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Legumes</p>
              <p className="mt-1 text-sm text-muted-foreground">{legumesObservacao}</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <section>
        <h2 className="text-xl font-semibold">Sabores da Semana</h2>
        <p className="mt-1 text-sm text-muted-foreground">Pratos fixos — 250g ou 350g.</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {saboresSemana.map((sabor) => (
            <Card key={sabor.nome}>
              <div className="flex flex-col sm:flex-row">
                <PlaceholderImage
                  icon={Sandwich}
                  className="h-24 w-full rounded-t-xl sm:h-auto sm:w-24 sm:rounded-l-xl sm:rounded-tr-none"
                />
                <CardContent className="flex-1 p-5">
                  <p className="font-medium">{sabor.nome}</p>
                  {sabor.descricao && (
                    <p className="mt-1 text-sm text-muted-foreground">{sabor.descricao}</p>
                  )}
                  <Button asChild size="sm" variant="outline" className="mt-3">
                    <a
                      href={buildWhatsAppLink(`Olá! Quero pedir o sabor da semana "${sabor.nome}".`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pedir via WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <section>
        <h2 className="text-xl font-semibold">Lanches &amp; Sobremesas</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {lanches.map((lanche) => (
            <Card key={lanche.nome}>
              <PlaceholderImage icon={Sandwich} className="h-20 rounded-t-xl" />
              <CardContent className="p-4 text-center">
                <p className="font-medium">{lanche.nome}</p>
              </CardContent>
            </Card>
          ))}

          <Card className="border-dashed">
            <PlaceholderImage icon={IceCreamCone} className="h-20 rounded-t-xl" />
            <CardContent className="p-4 text-center">
              <p className="font-medium text-muted-foreground">Sobremesa</p>
              {!sobremesaDefinida && (
                <p className="mt-1 text-xs text-muted-foreground">Em breve</p>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
