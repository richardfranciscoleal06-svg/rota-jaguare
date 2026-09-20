/*
# Create shared patrol and RSO records

1. New Tables
- `patrol_sessions` stores active and completed Bate-Ponto sessions, including the real-world-style ROTA prefix, the five-person composition, and start/end timestamps.
- `rso_reports` stores submitted RSO reports, including the five-person composition, operational counters, summary, and submission status.

2. Data Integrity
- Patrol and RSO compositions are stored as JSON arrays/objects so each record keeps the exact crew selected at submission time.
- RSO status is limited to pending, validated, or rejected.

3. Security
- RLS is enabled on both tables.
- This application currently uses its own internal access screen rather than Supabase Auth, so the single-tenant policies allow the anon and authenticated roles to manage the shared server data.

4. Important Notes
- Existing mock records remain available as the initial UI fallback while the app connects to these tables.
- No existing data is deleted or altered by this migration.
*/

CREATE TABLE IF NOT EXISTS patrol_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  viatura text NOT NULL,
  operators jsonb NOT NULL DEFAULT '[]'::jsonb,
  started_at timestamptz NOT NULL DEFAULT now(),
  ended_at timestamptz,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'ended')),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS rso_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  enviado_por text NOT NULL,
  id_militar text NOT NULL,
  viatura text NOT NULL,
  barca jsonb NOT NULL DEFAULT '{}'::jsonb,
  ocorrencias integer NOT NULL DEFAULT 0 CHECK (ocorrencias >= 0),
  detidos integer NOT NULL DEFAULT 0 CHECK (detidos >= 0),
  armamento integer NOT NULL DEFAULT 0 CHECK (armamento >= 0),
  drogas integer NOT NULL DEFAULT 0 CHECK (drogas >= 0),
  municoes integer NOT NULL DEFAULT 0 CHECK (municoes >= 0),
  bombas integer NOT NULL DEFAULT 0 CHECK (bombas >= 0),
  dinheiro_marcado numeric NOT NULL DEFAULT 0 CHECK (dinheiro_marcado >= 0),
  resumo text NOT NULL DEFAULT '',
  data_envio timestamptz NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'validated', 'rejected')),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE patrol_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE rso_reports ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "shared_select_patrol_sessions" ON patrol_sessions;
CREATE POLICY "shared_select_patrol_sessions" ON patrol_sessions FOR SELECT TO anon, authenticated USING (true);
DROP POLICY IF EXISTS "shared_insert_patrol_sessions" ON patrol_sessions;
CREATE POLICY "shared_insert_patrol_sessions" ON patrol_sessions FOR INSERT TO anon, authenticated WITH CHECK (true);
DROP POLICY IF EXISTS "shared_update_patrol_sessions" ON patrol_sessions;
CREATE POLICY "shared_update_patrol_sessions" ON patrol_sessions FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);
DROP POLICY IF EXISTS "shared_delete_patrol_sessions" ON patrol_sessions;
CREATE POLICY "shared_delete_patrol_sessions" ON patrol_sessions FOR DELETE TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "shared_select_rso_reports" ON rso_reports;
CREATE POLICY "shared_select_rso_reports" ON rso_reports FOR SELECT TO anon, authenticated USING (true);
DROP POLICY IF EXISTS "shared_insert_rso_reports" ON rso_reports;
CREATE POLICY "shared_insert_rso_reports" ON rso_reports FOR INSERT TO anon, authenticated WITH CHECK (true);
DROP POLICY IF EXISTS "shared_update_rso_reports" ON rso_reports;
CREATE POLICY "shared_update_rso_reports" ON rso_reports FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);
DROP POLICY IF EXISTS "shared_delete_rso_reports" ON rso_reports;
CREATE POLICY "shared_delete_rso_reports" ON rso_reports FOR DELETE TO anon, authenticated USING (true);