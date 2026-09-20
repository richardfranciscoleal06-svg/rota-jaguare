import { useState } from 'react';
import { mockMembers } from '@/data';
import { FileText, Send, CheckCircle2, Plus, Minus, Car } from 'lucide-react';

const viaturas = ['Golf 4440', 'Golf 4441', 'Tango 2230', 'Alpha 9910', 'Bravo 5520'];

interface Counter {
  key: string;
  label: string;
  value: number;
}

export default function RSOPage() {
  const [viatura, setViatura] = useState(viaturas[0]);
  const [barca, setBarca] = useState({ chefe: '', motorista: '', auxiliar: '' });
  const [counters, setCounters] = useState<Counter[]>([
    { key: 'ocorrencias', label: 'Ocorrências', value: 0 },
    { key: 'detidos', label: 'Detidos', value: 0 },
    { key: 'armamento', label: 'Armamento', value: 0 },
    { key: 'drogas', label: 'Drogas', value: 0 },
    { key: 'municoes', label: 'Munições', value: 0 },
    { key: 'bombas', label: 'Bombas', value: 0 },
    { key: 'dinheiro', label: 'Dinheiro Marcado', value: 0 },
  ]);
  const [resumo, setResumo] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const adjust = (key: string, delta: number) => {
    setCounters((prev) =>
      prev.map((c) =>
        c.key === key ? { ...c, value: Math.max(0, c.value + delta) } : c
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setCounters(counters.map((c) => ({ ...c, value: 0 })));
    setBarca({ chefe: '', motorista: '', auxiliar: '' });
    setResumo('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="animate-fade-in max-w-3xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-rota-white mb-1">
          Relatório de Serviço Ostensivo
        </h1>
        <p className="text-sm text-rota-muted">
          Transmissão de RSO ao final da patrulha
        </p>
      </div>

      <form onSubmit={handleSubmit} className="rota-card p-6 space-y-5">
        <div>
          <label className="block text-xs font-semibold text-rota-light mb-2 uppercase tracking-wide">
            <Car className="w-3.5 h-3.5 inline mr-1" />
            Viatura
          </label>
          <select
            value={viatura}
            onChange={(e) => setViatura(e.target.value)}
            className="rota-input w-full"
          >
            {viaturas.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>

        <div>
          <p className="text-xs font-semibold text-rota-light mb-2 uppercase tracking-wide">
            Composição da Barca
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[10px] text-rota-muted mb-1 uppercase">Chefe de Barca</label>
              <select
                value={barca.chefe}
                onChange={(e) => setBarca({ ...barca, chefe: e.target.value })}
                className="rota-input w-full"
              >
                <option value="">Selecione...</option>
                {mockMembers.map((m) => (
                  <option key={m.id} value={m.idJogo}>{m.idJogo} — {m.nome}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[10px] text-rota-muted mb-1 uppercase">Motorista</label>
              <select
                value={barca.motorista}
                onChange={(e) => setBarca({ ...barca, motorista: e.target.value })}
                className="rota-input w-full"
              >
                <option value="">Selecione...</option>
                {mockMembers.map((m) => (
                  <option key={m.id} value={m.idJogo}>{m.idJogo} — {m.nome}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[10px] text-rota-muted mb-1 uppercase">Auxiliar</label>
              <select
                value={barca.auxiliar}
                onChange={(e) => setBarca({ ...barca, auxiliar: e.target.value })}
                className="rota-input w-full"
              >
                <option value="">Selecione...</option>
                {mockMembers.map((m) => (
                  <option key={m.id} value={m.idJogo}>{m.idJogo} — {m.nome}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-rota-light mb-2 uppercase tracking-wide">
            Contadores de Apreensão
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {counters.map((c) => (
              <div key={c.key} className="rota-card bg-rota-panel p-3">
                <p className="text-[10px] text-rota-muted uppercase mb-2">{c.label}</p>
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => adjust(c.key, -1)}
                    className="w-7 h-7 rounded-md bg-rota-red/20 text-rota-red-light hover:bg-rota-red/30 flex items-center justify-center transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-xl font-bold text-rota-white tabular-nums">
                    {c.value}
                  </span>
                  <button
                    type="button"
                    onClick={() => adjust(c.key, 1)}
                    className="w-7 h-7 rounded-md bg-rota-green/20 text-rota-green-light hover:bg-rota-green/30 flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-rota-light mb-2 uppercase tracking-wide">
            Resumo da Ocorrência
          </label>
          <textarea
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            rows={4}
            placeholder="Descreva os fatos da patrulha..."
            className="rota-input w-full resize-none"
          />
        </div>

        <button type="submit" className="rota-btn-green w-full">
          {submitted ? (
            <>
              <CheckCircle2 className="w-4 h-4" />
              RSO Transmitido com Sucesso!
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Transmitir RSO
            </>
          )}
        </button>
      </form>

      <div className="mt-4 flex items-center gap-2 text-xs text-rota-muted">
        <FileText className="w-4 h-4" />
        <span>O RSO será enviado para validação do Comando antes de contabilizar no ranking.</span>
      </div>
    </div>
  );
}
