import { useState, useEffect } from 'react';
import { Play, Square, Car, Clock } from 'lucide-react';

const viaturas = ['Golf 4440', 'Golf 4441', 'Tango 2230', 'Alpha 9910', 'Bravo 5520'];

export default function BatePontoPage() {
  const [viatura, setViatura] = useState(viaturas[0]);
  const [active, setActive] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [active]);

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  const toggle = () => {
    if (active) {
      setActive(false);
    } else {
      setElapsed(0);
      setActive(true);
    }
  };

  return (
    <div className="animate-fade-in max-w-2xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-rota-white mb-1">Bate-Ponto</h1>
        <p className="text-sm text-rota-muted">Registro de patrulha em tempo real</p>
      </div>

      <div className="rota-card p-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4 text-rota-muted">
          <Car className="w-4 h-4" />
          <span className="text-xs uppercase tracking-wide">Viatura Selecionada</span>
        </div>
        <select
          value={viatura}
          onChange={(e) => setViatura(e.target.value)}
          disabled={active}
          className="rota-input w-full max-w-xs mx-auto mb-6 text-center font-bold"
        >
          {viaturas.map((v) => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>

        <div className="relative mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className={`w-5 h-5 ${active ? 'text-rota-green-light' : 'text-rota-muted'}`} />
            <span className="text-xs uppercase tracking-wide text-rota-muted">
              {active ? 'Patrulha em Andamento' : 'Aguardando Início'}
            </span>
          </div>
          <div className={`font-mono text-5xl font-bold tabular-nums ${
            active ? 'text-rota-green-light' : 'text-rota-white'
          }`}>
            {formatTime(elapsed)}
          </div>
          {active && (
            <div className="mt-2 flex items-center justify-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rota-green-light animate-pulse-slow" />
              <span className="text-xs text-rota-green-light font-semibold">REGISTRANDO</span>
            </div>
          )}
        </div>

        <button
          onClick={toggle}
          className={active ? 'rota-btn-red w-full max-w-xs' : 'rota-btn-green w-full max-w-xs'}
        >
          {active ? (
            <>
              <Square className="w-4 h-4" />
              Finalizar Patrulha
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              Iniciar Patrulha
            </>
          )}
        </button>
      </div>

      <div className="mt-4 rota-card p-4">
        <h3 className="text-xs font-semibold text-rota-muted uppercase tracking-wide mb-2">
          Histórico de Patrulha
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between py-2 border-b border-rota-border">
            <span className="text-rota-light">Golf 4440 — 19/09/2026</span>
            <span className="text-rota-gold font-mono">02:47:13</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-rota-border">
            <span className="text-rota-light">Tango 2230 — 18/09/2026</span>
            <span className="text-rota-gold font-mono">03:12:45</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-rota-light">Alpha 9910 — 17/09/2026</span>
            <span className="text-rota-gold font-mono">01:55:30</span>
          </div>
        </div>
      </div>
    </div>
  );
}
