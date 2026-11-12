import { ClipboardCheck, Factory, FileText, Shirt, Truck } from "lucide-react";

const processSteps = [
  { number: "01", title: "Inquiry", description: "Share your tech pack, references and quantities.", Icon: FileText },
  { number: "02", title: "Sampling", description: "Review and approve your paid sample.", Icon: Shirt },
  { number: "03", title: "Production", description: "Bulk manufacturing with progress and QC updates.", Icon: Factory },
  { number: "04", title: "Final QC", description: "Final checks before packing and dispatch.", Icon: ClipboardCheck },
  { number: "05", title: "Delivery", description: "Shipping arranged to your agreed destination and terms.", Icon: Truck },
];

export function ManufacturingProcess() {
  return <ol className="manufacturing-process">{processSteps.map(({ number, title, description, Icon }) => <li className="manufacturing-process__step" key={number}><div className="manufacturing-process__top"><span>{number}</span><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{description}</p></li>)}</ol>;
}
