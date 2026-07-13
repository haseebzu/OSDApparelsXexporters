import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { contact } from "@/data/site";

function SummaryRow({ label, value }) {
  if (!value) {
    return null;
  }

  return (
    <tr>
      <td style={summaryLabel}>{label}</td>
      <td style={summaryValue}>{value}</td>
    </tr>
  );
}

export function CustomerConfirmation({ enquiry, referenceId, logoSrc }) {
  return (
    <Html>
      <Head />
      <Preview>{`Thank you for contacting OSD Apparels - ${referenceId}`}</Preview>
      <Body style={body}>
        <Container style={card}>
          <Section style={header}>
            {logoSrc ? <Img src={logoSrc} alt="OSD Apparels" width="124" height="44" style={logo} /> : null}
            <Text style={eyebrow}>OSD Apparels</Text>
            <Heading as="h1" style={title}>
              Thank you for contacting OSD Apparels
            </Heading>
            <Text style={subtitle}>We have successfully received your quotation request.</Text>
          </Section>

          <Section style={section}>
            <Text style={paragraph}>Hello {enquiry.name},</Text>
            <Text style={paragraph}>
              Thank you for reaching out to OSD Apparels. Our export team is now reviewing your inquiry and we will
              respond within 24 hours.
            </Text>

            <Section style={highlightBox}>
              <Text style={highlightLabel}>Reference Number</Text>
              <Text style={highlightValue}>{referenceId}</Text>
            </Section>
          </Section>

          <Section style={section}>
            <Heading as="h2" style={sectionTitle}>
              Quote Summary
            </Heading>
            <table style={table}>
              <tbody>
                <SummaryRow label="Product" value={enquiry.productCategory} />
                <SummaryRow label="Quantity" value={enquiry.quantity} />
                <SummaryRow label="Fabric" value={enquiry.fabric} />
                <SummaryRow label="Printing" value={enquiry.decoration} />
                <SummaryRow label="Message" value={enquiry.description} />
              </tbody>
            </table>
          </Section>

          <Section style={section}>
            <Heading as="h2" style={sectionTitle}>
              What Happens Next
            </Heading>
            <Text style={paragraph}>Our team will review your requirements, attached references, and sourcing needs.</Text>
            <Text style={paragraph}>You can expect a follow-up response within 24 hours.</Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>Contact us anytime:</Text>
            <Text style={footerText}>{contact.email}</Text>
            <Text style={footerText}>{contact.phone}</Text>
            <Text style={footerText}>{contact.address}</Text>
            <Text style={footerNote}>Thank you for choosing OSD Apparels.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#f3f4f1",
  fontFamily: "Arial, sans-serif",
  margin: 0,
  padding: "32px 16px",
};

const card = {
  maxWidth: "720px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  border: "1px solid #d9ddd7",
  borderRadius: "20px",
  overflow: "hidden",
};

const header = {
  backgroundColor: "#000000",
  color: "#ffffff",
  padding: "28px 30px",
};

const logo = {
  marginBottom: "12px",
};

const eyebrow = {
  color: "#d7b48a",
  fontSize: "12px",
  fontWeight: "700",
  letterSpacing: "0.18em",
  margin: "0 0 10px",
  textTransform: "uppercase",
};

const title = {
  color: "#ffffff",
  fontSize: "28px",
  lineHeight: "1.2",
  margin: "0 0 10px",
};

const subtitle = {
  color: "rgba(255,255,255,0.82)",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: 0,
};

const section = {
  padding: "24px 30px 0",
};

const paragraph = {
  color: "#374034",
  fontSize: "15px",
  lineHeight: "1.75",
  margin: "0 0 14px",
};

const highlightBox = {
  backgroundColor: "#f7f8f5",
  border: "1px solid #e6e9e4",
  borderRadius: "16px",
  marginTop: "18px",
  padding: "16px 18px",
};

const highlightLabel = {
  color: "#5f685a",
  fontSize: "12px",
  fontWeight: "700",
  letterSpacing: "0.16em",
  margin: "0 0 6px",
  textTransform: "uppercase",
};

const highlightValue = {
  color: "#1f241e",
  fontSize: "20px",
  fontWeight: "700",
  margin: 0,
};

const sectionTitle = {
  color: "#1f241e",
  fontSize: "18px",
  margin: "0 0 14px",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const summaryLabel = {
  borderBottom: "1px solid #e6e9e4",
  color: "#374034",
  fontSize: "14px",
  fontWeight: "700",
  padding: "12px 14px 12px 0",
  verticalAlign: "top",
  width: "34%",
};

const summaryValue = {
  borderBottom: "1px solid #e6e9e4",
  color: "#1f241e",
  fontSize: "14px",
  lineHeight: "1.7",
  padding: "12px 0",
  verticalAlign: "top",
  whiteSpace: "pre-wrap",
};

const footer = {
  padding: "26px 30px 30px",
};

const footerText = {
  color: "#5f685a",
  fontSize: "14px",
  lineHeight: "1.7",
  margin: "0 0 6px",
};

const footerNote = {
  color: "#1f241e",
  fontSize: "14px",
  fontWeight: "700",
  margin: "14px 0 0",
};
