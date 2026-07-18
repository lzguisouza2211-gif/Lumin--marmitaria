import { siteConfig } from "@/lib/site-config";

export function buildWhatsAppLink(mensagem: string) {
  const texto = encodeURIComponent(mensagem);
  return `https://wa.me/${siteConfig.whatsapp}?text=${texto}`;
}
