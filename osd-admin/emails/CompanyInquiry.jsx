export function CompanyInquiry({ enquiry, files, referenceId, logoSrc }) {
  return (
    <div>
      <h2>New Quote Request</h2>
      <p>Reference ID: {referenceId}</p>
      <p>Name: {enquiry?.name}</p>
      <p>Email: {enquiry?.email}</p>
      <p>Company: {enquiry?.company}</p>
      <p>Country: {enquiry?.country}</p>
      <p>Product Category: {enquiry?.productCategory}</p>
      <p>Quantity: {enquiry?.quantity}</p>
      <p>Fabric: {enquiry?.fabric}</p>
      <p>Decoration: {enquiry?.decoration}</p>
      <p>Description: {enquiry?.description}</p>
      {files?.length ? <p>Attachments: {files.length}</p> : null}
    </div>
  );
}
