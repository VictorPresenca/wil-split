import { MessageCircle } from "lucide-react";
import { WA_LINK } from "./CtaButton";

export function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-cta text-cta-foreground shadow-lift transition-transform hover:scale-110 cta-glow"
    >
      <MessageCircle className="size-7" strokeWidth={2.25} />
    </a>
  );
}