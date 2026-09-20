import { Shield } from 'lucide-react';

export default function PublicFooter() {
  return (
    <footer className="border-t border-rota-border bg-rota-dark mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-rota-muted">
          <Shield className="w-4 h-4" />
          <span>1º Batalhão de Choque — ROTA | Jaguaré RP © 2026</span>
        </div>
        <p className="text-xs text-rota-muted">
          Painel Operacional e Administrativo — Uso interno do servidor
        </p>
      </div>
    </footer>
  );
}
