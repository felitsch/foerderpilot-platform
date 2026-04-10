import { Button } from "@foerderis/ui";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Was ist IBB Pro FIT? Und wie bewerben? — Foerderis",
  description:
    "IBB Pro FIT ist das F&E-Förderprogramm der Investitionsbank Berlin für Berliner KMU. Bis zu 80 % der Personalkosten werden übernommen — Fördervolumen von 20.000 bis 500.000 EUR. Frist: 23. April 2026.",
  alternates: {
    canonical: "/blog/ibb-pro-fit",
  },
  openGraph: {
    title: "Was ist IBB Pro FIT? Und wie bewerben?",
    description:
      "IBB Pro FIT fördert F&E-Vorhaben Berliner KMU mit bis zu 80 % der Personalkosten. Alles zu Voraussetzungen, Förderhöhe und Bewerbungsablauf — Frist 23. April 2026.",
    type: "article",
    url: "https://foerderis.de/blog/ibb-pro-fit",
    locale: "de_DE",
    siteName: "Foerderis",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Was ist IBB Pro FIT? Und wie bewerben?",
  description:
    "IBB Pro FIT ist das F&E-Förderprogramm der Investitionsbank Berlin für Berliner KMU. Bis zu 80 % der Personalkosten werden übernommen — Fördervolumen von 20.000 bis 500.000 EUR.",
  author: {
    "@type": "Organization",
    name: "Foerderis",
    url: "https://foerderis.de",
  },
  publisher: {
    "@type": "Organization",
    name: "Foerderis",
    url: "https://foerderis.de",
  },
  inLanguage: "de",
  datePublished: "2026-04-10",
};

export default function IbbProFitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data, no user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="mx-auto max-w-2xl px-4 py-24">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <Link href="/" className="hover:underline underline-offset-4">
            Startseite
          </Link>
          <span className="mx-2">/</span>
          <span>IBB Pro FIT</span>
        </nav>

        <article>
          <header className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Förderprogramm · Berlin
            </p>
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-foreground">
              Was ist IBB Pro FIT? Und wie bewerben?
            </h1>
            <p className="text-lg text-muted-foreground">
              IBB Pro FIT ist das F&E-Förderprogramm der Investitionsbank Berlin — ausschließlich
              für Berliner KMU. Wer ein Forschungs- oder Entwicklungsprojekt plant, kann bis zu
              80 % der Personalkosten erstattet bekommen. Die aktuelle Antragsrunde schließt am{" "}
              <strong className="text-foreground">23. April 2026</strong>.
            </p>
          </header>

          <div className="prose prose-invert max-w-none space-y-10 text-muted-foreground">
            {/* Section 1 */}
            <section aria-labelledby="was-ist">
              <h2
                id="was-ist"
                className="mb-4 text-2xl font-semibold tracking-tight text-foreground"
              >
                Was ist IBB Pro FIT?
              </h2>
              <p>
                IBB Pro FIT (Produktive Innovationen Fördern und Investitionen Tätigen) ist ein
                Förderprogramm der Investitionsbank Berlin (IBB). Es unterstützt kleine und
                mittlere Unternehmen mit Sitz oder Niederlassung in Berlin bei der Durchführung
                von Forschungs- und Entwicklungsprojekten.
              </p>
              <p className="mt-4">
                Anders als Bundesprogramme wie KMU-innovativ richtet sich Pro FIT gezielt an den
                Berliner Wirtschaftsraum. Das Programm ist Teil der Berliner Innovationsstrategie
                und wird aus Mitteln des Europäischen Fonds für regionale Entwicklung (EFRE)
                sowie des Landes Berlin finanziert. Die Kombination macht Pro FIT zu einem der
                attraktivsten regionalen F&E-Förderprogramme in Deutschland.
              </p>
            </section>

            {/* Section 2 */}
            <section aria-labelledby="wer-qualifiziert">
              <h2
                id="wer-qualifiziert"
                className="mb-4 text-2xl font-semibold tracking-tight text-foreground"
              >
                Wer qualifiziert sich?
              </h2>
              <p>Antragsberechtigt sind Unternehmen, die folgende Voraussetzungen erfüllen:</p>
              <ul className="mt-4 space-y-2 list-none">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-foreground">Sitz oder Niederlassung in Berlin</strong> —
                    die Forschungsleistung muss in Berlin erbracht werden
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-foreground">KMU-Status nach EU-Definition</strong>:
                    bis zu 250 Mitarbeiter, Jahresumsatz bis 50 Mio. € oder Bilanzsumme bis
                    43 Mio. €
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-foreground">F&E-Vorhaben mit Innovationscharakter</strong> —
                    das Projekt muss über den Stand der Technik hinausgehen
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-foreground">Wirtschaftliche Verwertungsabsicht</strong> —
                    die Ergebnisse sollen in Produkte, Verfahren oder Dienstleistungen münden
                  </span>
                </li>
              </ul>
              <p className="mt-4">
                Kooperationsprojekte mit anderen Unternehmen oder Berliner
                Forschungseinrichtungen sind ebenfalls förderfähig und werden bei der Bewertung
                positiv berücksichtigt.
              </p>
            </section>

            {/* Section 3 */}
            <section aria-labelledby="was-wird-gefoerdert">
              <h2
                id="was-wird-gefoerdert"
                className="mb-4 text-2xl font-semibold tracking-tight text-foreground"
              >
                Was wird gefördert?
              </h2>
              <p>
                Pro FIT finanziert die direkten Kosten eines F&E-Projekts. Im Mittelpunkt stehen
                Personalkosten für Forscher, Entwickler und technisches Personal, das am Projekt
                arbeitet. Dazu kommen projektbezogene Sachausgaben und Aufträge an Dritte.
              </p>
              <p className="mt-4">Die Förderquoten variieren nach Projekttyp:</p>
              <ul className="mt-4 space-y-2 list-none">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-foreground">Bis zu 50 %</strong> für industrielle
                    Forschung
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-foreground">Bis zu 80 %</strong> für experimentelle
                    Entwicklung — der häufigste Fall bei Berliner KMU
                  </span>
                </li>
              </ul>
              <p className="mt-4">
                Die förderfähigen Projektkosten liegen zwischen{" "}
                <strong className="text-foreground">20.000 und 500.000 EUR</strong> pro
                Vorhaben. Bei Kooperationsprojekten kann das Gesamtvolumen höher ausfallen.
              </p>
            </section>

            {/* Section 4 */}
            <section aria-labelledby="bewerbungsablauf">
              <h2
                id="bewerbungsablauf"
                className="mb-4 text-2xl font-semibold tracking-tight text-foreground"
              >
                Wie läuft die Bewerbung ab?
              </h2>
              <p>
                Der Antragsprozess ist dreistufig. Die aktuelle Einreichfrist endet am{" "}
                <strong className="text-foreground">23. April 2026</strong>:
              </p>
              <ol className="mt-4 space-y-5 list-none">
                <li className="flex gap-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-secondary text-sm font-bold text-foreground">
                    1
                  </span>
                  <div>
                    <strong className="text-foreground">Antrag einreichen</strong>
                    <p className="mt-1">
                      Einreichung über das IBB-Förderportal. Der Antrag umfasst eine
                      Projektbeschreibung (Ziele, Arbeitspakete, Zeitplan), einen
                      Finanzierungsplan sowie Angaben zur wirtschaftlichen Lage des
                      Unternehmens. Alle Unterlagen müssen vor Fristablauf vollständig
                      vorliegen.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-secondary text-sm font-bold text-foreground">
                    2
                  </span>
                  <div>
                    <strong className="text-foreground">Begutachtung</strong>
                    <p className="mt-1">
                      Die IBB prüft die formale Vollständigkeit, dann bewertet ein
                      unabhängiges Expertengremium die technisch-wissenschaftliche Qualität
                      und das Verwertungspotenzial. Rückmeldung in der Regel innerhalb von
                      8–12 Wochen nach Einreichfrist.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-secondary text-sm font-bold text-foreground">
                    3
                  </span>
                  <div>
                    <strong className="text-foreground">Bewilligung und Projektstart</strong>
                    <p className="mt-1">
                      Nach positivem Bescheid wird ein Zuwendungsvertrag geschlossen. Die
                      Fördermittel werden auf Nachweis der angefallenen Kosten abgerufen —
                      nicht pauschal vorab ausgezahlt. Von Antragstellung bis Projektstart
                      sind realistisch{" "}
                      <strong className="text-foreground">3–5 Monate</strong> einzuplanen.
                    </p>
                  </div>
                </li>
              </ol>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-border bg-secondary/30 p-8">
            <h2 className="mb-3 text-xl font-semibold tracking-tight text-foreground">
              Passt IBB Pro FIT zu Ihrem Berliner Unternehmen?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Die Frist läuft am 23. April 2026 ab. Foerderis prüft kostenlos, ob Ihr Vorhaben
              förderfähig ist — und übernimmt auf Wunsch Antrag, Kostenkalkulation und
              Fristmanagement. Sie zahlen 10 % der bewilligten Summe, und nur dann, wenn das Geld
              auf Ihrem Konto eingeht.
            </p>
            <Button asChild size="lg">
              <Link href="/#kontakt">Kostenloses Erstgespräch buchen</Link>
            </Button>
          </div>
        </article>

        <div className="mt-12">
          <Button asChild variant="outline">
            <Link href="/">← Zurück zur Startseite</Link>
          </Button>
        </div>
      </main>
    </>
  );
}
