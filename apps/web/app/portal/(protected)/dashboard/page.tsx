/**
 * Kundenportal Dashboard — Stub (Phase 1)
 *
 * Placeholder UI for the customer dashboard.
 * Phase 2 will wire up real data from the `lead` and `customer` tables.
 */
export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Ihr Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Hier sehen Sie den aktuellen Status Ihrer Förderanträge.
        </p>
      </div>

      {/* Status-Karten */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatusCard label="In Bearbeitung" value="–" />
        <StatusCard label="Eingereicht" value="–" />
        <StatusCard label="Bewilligt" value="–" />
      </div>

      {/* Anträge-Tabelle (Stub) */}
      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">Meine Anträge</h2>
        <div className="rounded-lg border border-border p-8 text-center text-muted-foreground">
          Noch keine Förderanträge vorhanden.
          <br />
          Ihr Foerderis-Team meldet sich, sobald passende Programme gefunden wurden.
        </div>
      </section>
    </div>
  );
}

function StatusCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
    </div>
  );
}
