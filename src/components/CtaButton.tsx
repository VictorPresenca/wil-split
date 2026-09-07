import { FaWhatsapp } from "react-icons/fa6";

export const WA_LINK =
  "https://wa.me/5511947290421?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site e gostaria de mais informações sobre o serviço da Wil Split.",
  );

interface CtaButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function CtaButton({ className = "", children }: CtaButtonProps) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-cta px-6 py-3.5 text-sm font-extrabold text-cta-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-95 cta-glow ${className}`}
    >
      <FaWhatsapp className="size-4.5" strokeWidth={2.5} />
      {children}
    </a>
  );
}