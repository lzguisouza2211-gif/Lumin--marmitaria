import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/40">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 text-sm sm:grid-cols-3">
        <div>
          <p className="font-semibold text-primary">{siteConfig.nome}</p>
          <p className="mt-2 text-muted-foreground">{siteConfig.tagline}</p>
        </div>

        <div>
          <p className="font-semibold">Áreas de entrega</p>
          <p className="mt-2 text-muted-foreground">{siteConfig.areasEntrega}</p>
        </div>

        <div>
          <p className="font-semibold">Contato</p>
          <p className="mt-2 text-muted-foreground">{siteConfig.telefoneExibicao}</p>
          <p className="text-muted-foreground">{siteConfig.email}</p>
          <p className="mt-2 text-muted-foreground">{siteConfig.horario}</p>
        </div>
      </div>

      <p className="border-t px-4 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.nome}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
