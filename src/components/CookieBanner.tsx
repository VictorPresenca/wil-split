import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já fez uma escolha anterior
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShow(true);
    } else if (consent === "accepted") {
      enableAnalytics();
    }
  }, []);

  const enableAnalytics = () => {
    // Ativa a coleta do Google Analytics se o script do gtag já estiver carregado
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    enableAnalytics();
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[90] mx-auto max-w-xl rounded-2xl border border-border bg-card p-5 shadow-lift transition-all animate-in fade-in slide-in-from-bottom-5 md:left-6 md:right-auto">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
            <Cookie className="size-5" />
          </span>
          <p className="text-xs font-medium leading-relaxed text-navy/80">
            Utilizamos cookies para analisar o tráfego do site via Google Analytics e melhorar sua experiência. Ao continuar, você concorda com nossa política.
          </p>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-center">
          <button
            onClick={handleDecline}
            className="rounded-xl px-3 py-2 text-xs font-extrabold text-navy/70 transition-colors hover:bg-accent hover:text-navy"
          >
            Recusar
          </button>
          <button
            onClick={handleAccept}
            className="shrink-0 rounded-xl bg-primary px-4 py-2 text-xs font-extrabold text-primary-foreground shadow-sm transition-transform hover:scale-105 active:scale-95"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}