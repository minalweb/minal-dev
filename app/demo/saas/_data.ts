export const saasStats = [
  { label: "Monthly Recurring Revenue", value: "$86,420", trend: "+12.4%" },
  { label: "Active Workspaces", value: "1,248", trend: "+6.1%" },
  { label: "Conversion Rate", value: "4.8%", trend: "+0.9%" },
  { label: "Support SLA", value: "98.6%", trend: "+1.2%" },
];

export const saasTasks = [
  "Review onboarding funnel drop-off",
  "Launch Q2 pricing experiment",
  "Publish product update email",
  "Resolve priority enterprise ticket",
];

export const saasActivity = [
  { title: "Acme Corp upgraded to Growth", time: "2 hours ago" },
  { title: "New workspace created: Northwind", time: "5 hours ago" },
  { title: "Churn risk alert triggered", time: "Yesterday" },
  { title: "Quarterly report exported", time: "2 days ago" },
];

export type SaaSInvoice = {
  client: string;
  amount: string;
  status: "Paid" | "Pending";
};

export const saasInvoices: SaaSInvoice[] = [
  { client: "Venture Labs", amount: "$4,500", status: "Paid" },
  { client: "Orbit Systems", amount: "$2,100", status: "Pending" },
  { client: "Atlas Studio", amount: "$3,650", status: "Paid" },
  { client: "Nova Retail", amount: "$1,980", status: "Pending" },
  { client: "Helios Tech", amount: "$5,120", status: "Paid" },
];

export const saasPlans = [
  { name: "Starter", price: "$29", note: "For small teams" },
  { name: "Growth", price: "$79", note: "Most popular" },
  { name: "Enterprise", price: "Custom", note: "Custom scale" },
];
