import { siteConfig } from "@/lib/data";

export function buildWhatsAppLink(productName: string) {
  const url = new URL(siteConfig.whatsappUrl);
  url.searchParams.set("text", `I want to order ${productName}`);
  return url.toString();
}

export function buildGenericWhatsAppLink() {
  const url = new URL(siteConfig.whatsappUrl);
  url.searchParams.set("text", "I want to order mobile accessories");
  return url.toString();
}
