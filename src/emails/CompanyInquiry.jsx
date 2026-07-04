import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

function DetailRow({ label, value }) {
  return (
    <tr>
      <td style={labelCell}>{label}</td>
      <td style={valueCell}>{value || "—"}</td>
    </tr>
  );
}

export function CompanyInquiry({ enquiry, files, referenceId, logoSrc }) {
  const customerInfo = [
    ["Reference ID", referenceId],
    ["Name", enquiry.name],
    ["Company", enquiry.company],
    ["Email", enquiry.email],
    ["Phone / WhatsApp", enquiry.whatsapp],
    ["Country", enquiry.country],
    ["Source Page", enquiry.sourcePage],
    ["Submission Date", new Date(enquiry.submittedAt).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })],
  ];

  const orderInfo = [
    ["Product", enquiry.productCategory],
    ["Quantity", enquiry.quantity],
    ["Fabric", enquiry.fabric],
    ["Printing", enquiry.decoration],
    ["Message", enquiry.description],
  ];

  return (
    <Html>
      <Head />
      <Preview>{`New Quote Request - ${enquiry.name}`}</Preview>
      <Body style={body}>
        <Container style={card}>
          <Section style={header}>
            {logoSrc ? <Img src={logoSrc} alt="OSD Apparels" width="124" height="44" style={logo} /> : null}
            <Text style={eyebrow}>OSD Apparels</Text>
            <Heading as="h1" style={title}>
              New Quote Request
            </Heading>
            <Text style={subtitle}>A new enquiry has been submitted through the quote form.</Text>
          </Section>

          <Section style={section}>
            <Heading as="h2" style={sectionTitle}>
              Customer Information
            </Heading>
            <table style={table}>
              <tbody>
                {customerInfo.map(([label, value]) => (
                  <DetailRow key={label} label={label} value={value} />
                ))}
              </tbody>
            </table>
          </Section>

          <Section style={section}>
            <Heading as="h2" style={sectionTitle}>
              Order Details
            </Heading>
            <table style={table}>
              <tbody>
                {orderInfo.map(([label, value]) => (
                  <DetailRow key={label} label={label} value={value} />
                ))}
              </tbody>
            </table>
          </Section>

          <Section style={section}>
            <Heading as="h2" style={sectionTitle}>
              Reference Files
            </Heading>
            {files.length ? (
              files.map((file) => (
                <Text key={file.fileKey || file.fileName} style={fileText}>
                  {file.fileUrl ? (
                    <Link href={file.fileUrl} style={fileLink}>
                      {file.fileName}
                    </Link>
                  ) : (
                    file.fileName
                  )}
                </Text>
              ))
            ) : (
              <Text style={mutedText}>No reference files were attached.</Text>
            )}
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
  maxWidth: "760px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  border: "1px solid #d9ddd7",
  borderRadius: "20px",
  overflow: "hidden",
};

const header = {
  backgroundColor: "#1f241e",
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
  color: "rgba(255,255,255,0.8)",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: 0,
};

const section = {
  padding: "24px 30px 0",
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

const labelCell = {
  borderBottom: "1px solid #e6e9e4",
  color: "#374034",
  fontSize: "14px",
  fontWeight: "700",
  padding: "12px 14px 12px 0",
  verticalAlign: "top",
  width: "34%",
};

const valueCell = {
  borderBottom: "1px solid #e6e9e4",
  color: "#1f241e",
  fontSize: "14px",
  lineHeight: "1.7",
  padding: "12px 0",
  verticalAlign: "top",
  whiteSpace: "pre-wrap",
};

const mutedText = {
  color: "#5f685a",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0 0 24px",
};

const fileText = {
  color: "#1f241e",
  fontSize: "14px",
  lineHeight: "1.7",
  margin: "0 0 10px",
};

const fileLink = {
  color: "#b78652",
  textDecoration: "none",
};
