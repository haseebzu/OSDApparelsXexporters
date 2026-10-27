import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { createMetadata } from "@/lib/metadata";
import { requireVisibleDraftPage } from "@/lib/draft-pages";

export const metadata = createMetadata({
  title: "Export Markets for Apparel Brands | OSD",
  description: "Local draft for UK, US, EU, Australian and Canadian apparel buyers pending OSD commercial confirmation.",
  path: "/export-markets",
  noIndex: true,
  category: "Draft export market page",
});

const markets = [
  {
    name: "United Kingdom",
    official: { label: "GOV.UK: importing goods into the UK", href: "https://www.gov.uk/import-goods-into-uk" },
  },
  {
    name: "United States",
    official: { label: "CPSC clothing business guidance", href: "https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Clothing-OLD" },
  },
  {
    name: "European Union",
    official: { label: "European Commission textile-labelling guidance", href: "https://single-market-economy.ec.europa.eu/document/download/34fcf863-59ef-4352-8489-a2577102fd8f_en?filename=revised+FAQs+on+Regulation+1007-2011+-+published.pdf" },
  },
  {
    name: "Australia",
    official: { label: "Australian Border Force import requirements", href: "https://www.abf.gov.au/imports/Pages/How-to-import/Requirements.aspx" },
  },
  {
    name: "Canada",
    official: { label: "Canada Border Services Agency: commercial-import guide", href: "https://www.cbsa-asfc.gc.ca/import/guide-eng.html" },
  },
];

export default function ExportMarketsDraftPage() {
  requireVisibleDraftPage("/export-markets");

  return (
    <>
      <PageHero
        eyebrow="Export Market Draft — Owner Review Required"
        title="Custom apparel manufacturing for international brands."
        text="OSD manufactures apparel in Faisalabad, Pakistan. This local draft needs commercial and market-process confirmation before publication."
        primaryCta={{ href: "/quote", label: "Discuss Your Project" }}
        highlights={["Faisalabad Manufacturing", "Buyer Requirements", "Market Details to Confirm"]}
      />
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Before publication"
            title="Each market needs confirmed commercial details."
            text="Shipping route, Incoterm, payment, sample approval, documentation and destination responsibility must be confirmed in OSD’s current commercial policy. Regulations can change, so buyers should verify current requirements with the relevant authority or adviser."
          />
          <div className="cards-grid">
            {markets.map((market, index) => (
              <Reveal className="detail-card" delay={index * 0.05} key={market.name}>
                <div className="custom-order-card__body">
                  <h2>{market.name}</h2>
                  <p>[OWNER TO CONFIRM: shipping arrangement, payment process, sample-approval approach and destination responsibility for this market.]</p>
                  {market.official.href ? (
                    <p>
                      <a href={market.official.href} target="_blank" rel="noreferrer">{market.official.label}</a>
                    </p>
                  ) : <p>{market.official.label}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
