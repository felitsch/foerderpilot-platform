import { Button } from "@foerderis/ui";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum — Foerderis",
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-24">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground">Impressum</h1>

      <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
        <section>
          <h2 className="text-lg font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
          <p className="mt-2">
            Felix Gaber
            <br />
            Software und KI Produkte
            <br />
            Baumreute 55
            <br />
            70199 Stuttgart
            <br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Kontakt</h2>
          <p className="mt-2">
            E-Mail:{" "}
            <a href="mailto:kontakt@foerderis.de" className="text-foreground hover:underline">
              kontakt@foerderis.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Umsatzsteuer</h2>
          <p className="mt-2">Kleinunternehmer nach § 19 UStG – keine Umsatzsteuer ausgewiesen.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="mt-2">Felix Gaber (Anschrift wie oben)</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Streitschlichtung</h2>
          <p className="mt-2">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p className="mt-2">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Haftung für Inhalte</h2>
          <p className="mt-2">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Haftung für Links</h2>
          <p className="mt-2">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
            übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Urheberrecht</h2>
          <p className="mt-2">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            Hinweis zu KI-gestützter Dienstleistung
          </h2>
          <p className="mt-2">
            Foerderis nutzt Künstliche Intelligenz zur Unterstützung bei der Fördermittelrecherche
            und Antragsvorbereitung. Alle finalen Entscheidungen und Qualitätsprüfungen werden durch
            Felix Gaber persönlich verantwortet.
          </p>
        </section>
      </div>

      <div className="mt-10">
        <Button asChild variant="outline">
          <Link href="/">← Zurück zur Startseite</Link>
        </Button>
      </div>
    </main>
  );
}
