export function CustomerConfirmation({ enquiry, referenceId, logoSrc }) {
  return (
    <div>
      <h2>Thank you for contacting OSD Apparels</h2>
      <p>Reference ID: {referenceId}</p>
      <p>Hi {enquiry?.name},</p>
      <p>We have received your enquiry and will get back to you shortly.</p>
    </div>
  );
}
