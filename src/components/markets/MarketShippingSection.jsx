import Link from "next/link";
import { ArrowRight, Check, FileText, Plane, Ship } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionIntro } from "@/components/shared/SectionIntro";

const shippingRows = [
  ["Shipping terms", "Your quotation states the agreed delivery term, named destination and included charges. DDP can be quoted where available."],
];

const deliveryMethods = [
  { title: "Air express", text: "For samples and time-sensitive orders. Availability and estimated transit are confirmed for your delivery address.", Icon: Plane },
  { title: "Sea freight", text: "Options for larger orders, based on shipment volume, destination and delivery requirements.", Icon: Ship },
];

const marketShipping = {
  usa: { heading: "USA", intro: "Plan your custom apparel shipment to the United States with clear garment specifications, delivery details and quotation terms.", rows: [["Documents", "Commercial invoice, packing list and transport documents. Provide accurate garment descriptions, composition, quantities, values and manufacturer details for customs."], ["Import coordination", "Confirm the importer and customs-broker arrangements before dispatch. Apparel entries may require manufacturer-identification information."], ["Delivery address", "Include the state, ZIP code, recipient details and warehouse receiving instructions."], ["Time zone", "Share your city and preferred contact hours so communication can be arranged around your local time."]], checks: ["Production based on your approved measurements and grading.", "Confirm the full size breakdown and fit sample before bulk production.", "Review fibre-content and country-of-origin information.", "Confirm responsible business identification required on labels.", "Include appropriate garment-care instructions.", "Supply barcode, carton and retail-packing requirements.", "Identify additional requirements, particularly for children’s garments."], duties: "Duty depends on tariff classification, country of origin and trade measures in force on the date of entry, which can change. We do not publish fixed duty figures; confirm the current rate with your customs broker." },
  uk: { heading: "the United Kingdom", intro: "Share your delivery location in England, Scotland, Wales or Northern Ireland so shipping and import arrangements can be assessed for your order.", rows: [["Documents", "Commercial invoice, packing list and transport documents, plus valid origin evidence where a preference claim is made."], ["Preferential origin", "DCTS treatment depends on the commodity code, origin rules and valid evidence. Confirm the current position with the importer’s broker."], ["Delivery address", "Include the postcode and confirm whether delivery is to Great Britain or Northern Ireland."], ["Time zone", "Pakistan is four hours ahead during UK summer time and five hours ahead during UK standard time. Agree suitable contact hours."]], checks: ["Garments made to your approved measurement chart.", "Confirm size labels, grading and fit requirements.", "Review fibre-composition information and relevant component details.", "Approve care information, brand labels and packaging.", "Supply barcode and warehouse-packing instructions.", "Confirm destination-specific requirements for Northern Ireland."], duties: "DCTS preference depends on the commodity code, origin rules and valid evidence; it does not promise duty-free entry. Confirm current treatment, VAT and quotation scope with the importer’s broker." },
  australia: { heading: "Australia", intro: "Coordinate your apparel order around the Australian delivery location, collection launch date and required garment specifications.", rows: [["Documents", "Commercial invoice, packing list and transport documents; confirm any import-declaration and broker requirements."], ["Delivery address", "Include the state or territory, postcode and recipient information. Confirm remote-location arrangements where relevant."], ["Shipment timing", "Distinguish the production schedule from the carrier transit estimate and customs-clearance time."], ["Time zone", "Pakistan is about 5 to 6 hours behind Australia’s eastern states. Calls fit comfortably in the Australian afternoon during Pakistan business hours."]], checks: ["Production follows your approved measurements and grading.", "Confirm intended Australian size labels.", "Review garment-care labelling for the applicable mandatory standard.", "Approve composition information and brand-label artwork.", "Supply retail-packing, barcode and carton requirements.", "Identify additional requirements for the garment type."], duties: "Australian imports can attract customs duty, GST and processing charges depending on the goods and import circumstances. Confirm the import process and whether the delivery quotation includes duties, taxes and clearance charges." },
  europe: { heading: "Europe", intro: "Tell us the actual destination country so manufacturing, labels, shipping and import arrangements can be planned for your market.", rows: [["Documents", "Commercial invoice, packing list and transport documents, with relevant origin evidence where preferential treatment is claimed."], ["Import coordination", "Confirm the importing business, customs representative and EORI details where required."], ["Destination", "EU countries share a customs framework, but tax and operational requirements depend on the shipment. Non-EU destinations need separate assessment."], ["Time zone", "Europe spans multiple time zones. Provide your city and preferred contact hours."]], checks: ["Production based on your own approved measurements.", "Confirm size labels and grading for each collection.", "Review fibre-composition information for EU textile labelling.", "Provide required destination-language versions.", "Declare non-textile parts of animal origin where applicable.", "Confirm additional requirements with the responsible importer."], duties: "Preferential access under the EU’s GSP+ scheme depends on Pakistan’s continued eligibility, origin rules and correct proof of origin. Confirm the current position with your broker; OSD does not guarantee duty-free entry." },
  canada: { heading: "Canada", intro: "Prepare your Canadian apparel order with an approved size chart, appropriate label artwork and a delivery quotation based on the actual province and postal code.", rows: [["Documents", "Commercial invoice, packing list, transport documents and any origin evidence required for claimed tariff treatment."], ["Import coordination", "Confirm the importer, customs broker and applicable business registration arrangements, including CARM where required."], ["Delivery address", "Include province or territory, postal code and warehouse or recipient instructions."], ["Time zone", "Canada spans multiple time zones; Pakistan is about 8 to 13 hours ahead depending on the province and daylight saving."]], checks: ["Production based on your approved measurements and size breakdown.", "Review required English/French fibre-content information.", "Include required dealer identification.", "Confirm additional language requirements for products marketed in Quebec.", "Approve care instructions and brand-label placement.", "Supply barcode, carton and retail-packing requirements."], duties: "Canadian import duties depend on classification, origin and applicable tariff treatment. GST and other charges may apply. Confirm importer arrangements and quotation included charges before shipment." },
  france: { heading: "France", intro: "Develop your collection for the French market with approved garment measurements, French-language fibre information and clear delivery arrangements.", rows: [["Documents", "Commercial invoice, packing list and transport documents, plus valid origin evidence where preferential treatment is claimed."], ["Import coordination", "Confirm importer or customs representative and required EORI information."], ["Delivery address", "Provide the postcode and specify mainland France, Corsica or an overseas destination."], ["Time zone", "Pakistan is three hours ahead of mainland France during summer time and four hours ahead during standard time."]], checks: ["Garments made to your approved measurements and grading.", "Confirm French-market size labels with your buyer.", "Prepare required textile fibre-composition information in French.", "Identify non-textile parts of animal origin where applicable.", "Have the responsible business confirm applicable packaging requirements.", "Supply barcode and warehouse requirements."], duties: "For imports into mainland France, EU customs rules and applicable preferential origin treatment must be assessed alongside import VAT. Overseas destinations can have different arrangements; confirm the actual destination and delivered-quotation scope." },
  italy: { heading: "Italy", intro: "Coordinate your Italian apparel order around garment construction, approved measurements, Italian-language fibre information and your delivery requirements.", rows: [["Documents", "Commercial invoice, packing list and transport documents, plus valid origin evidence where preferential treatment is claimed."], ["Import coordination", "Confirm the importer, customs representative and EORI information where required."], ["Delivery address", "Provide the full address, postcode and any warehouse appointment or island-delivery requirements."], ["Time zone", "Pakistan is three hours ahead during Italian summer time and four hours ahead during standard time."]], checks: ["Production follows your approved measurements and grading.", "Confirm Italian-market size labels with the buyer.", "Prepare required textile fibre-composition information in Italian.", "Identify non-textile parts of animal origin where applicable.", "Approve care instructions, trims and brand labels.", "Supply barcode, carton and receiving instructions."], duties: "Imports into Italy are assessed under the EU customs framework. Classification, origin and value determine customs treatment; import VAT and other charges are considered separately. Confirm preferential claims and included costs before dispatch." },
};

export function MarketShippingSection({ marketSlug }) {
  const data = marketShipping[marketSlug];
  return (
    <section className="section section--soft market-shipping">
      <div className="container">
        <SectionIntro eyebrow="Delivery planning" title={`Shipping, Duties & Sizing for ${data.heading}`} text={data.intro} />

        <div className="market-shipping__methods">
          {deliveryMethods.map(({ title, text, Icon }) => (
            <Reveal className="market-shipping__method" key={title}>
              <Icon aria-hidden="true" />
              <div><h3>{title}</h3><p>{text}</p></div>
            </Reveal>
          ))}
        </div>

        <div className="market-shipping__plan">
          <Reveal className="market-shipping__details">
            <h3><span>01 /</span> Shipping details</h3>
            <table><tbody>{[...shippingRows, ...data.rows].map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}</tbody></table>
          </Reveal>
          <Reveal className="market-shipping__compliance">
            <h3><span>02 /</span> Sizing &amp; compliance</h3>
            <ul>{data.checks.map((item) => <li key={item}><Check size={22} strokeWidth={2.5} aria-hidden="true" />{item}</li>)}</ul>
          </Reveal>
          <Reveal className="market-shipping__duties">
            <FileText aria-hidden="true" />
            <h3><span>03 /</span> Duties &amp; taxes</h3>
            <p>{data.duties}</p>
            <Link className="market-shipping__quote" href="#request-quote">Request a Delivered Quote <ArrowRight aria-hidden="true" /></Link>
            <small>Share your address and order details.</small>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
