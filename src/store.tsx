import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Member, PendingRegistration, RSOReport, ActivePatrol, Patente } from '@/types';
import {
  mockMembers, mockPendingRegistrations, mockRSOReports, mockActivePatrols,
} from '@/data';

interface StoreValue {
  members: Member[];
  setMembers: React.Dispatch<React.SetStateAction<Member[]>>;
  pendingRegs: PendingRegistration[];
  setPendingRegs: React.Dispatch<React.SetStateAction<PendingRegistration[]>>;
  reports: RSOReport[];
  setReports: React.Dispatch<React.SetStateAction<RSOReport[]>>;
  patrols: ActivePatrol[];
  setPatrols: React.Dispatch<React.SetStateAction<ActivePatrol[]>>;
  updateMember: (id: string, patch: Partial<Member>) => void;
  removeMember: (id: string) => void;
  resetRSOs: () => void;
  resetPatrols: () => void;
  resetAccounting: () => void;
}

const StoreContext = createContext<StoreValue | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [members, setMembers] = useState<Member[]>(mockMembers);
  const [pendingRegs, setPendingRegs] = useState<PendingRegistration[]>(mockPendingRegistrations);
  const [reports, setReports] = useState<RSOReport[]>(mockRSOReports);
  const [patrols, setPatrols] = useState<ActivePatrol[]>(mockActivePatrols);

  const updateMember = (id: string, patch: Partial<Member>) => {
    setMembers((prev) => prev.map((m) => (m.id === id ? { ...m, ...patch } : m)));
  };

  const removeMember = (id: string) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  const resetRSOs = () => setReports([]);
  const resetPatrols = () => setPatrols([]);
  const resetAccounting = () => {
    setMembers((prev) =>
      prev.map((m) => ({ ...m, horasPatrulha: 0, apreensoesRs: 0 }))
    );
  };

  return (
    <StoreContext.Provider
      value={{
        members, setMembers,
        pendingRegs, setPendingRegs,
        reports, setReports,
        patrols, setPatrols,
        updateMember, removeMember, resetRSOs, resetPatrols, resetAccounting,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used within StoreProvider');
  return ctx;
}

export const patenteOptions: Patente[] = [
  'General', 'Coronel', 'Tenente-Coronel', 'Major', 'Capitão',
  '1º Tenente', '2º Tenente', 'Aspirante', 'Subtenente',
  '1º Sargento', '2º Sargento', '3º Sargento', 'Cabo', 'Soldado', 'Recruta',
];
