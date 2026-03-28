import { saasActivity, saasInvoices, saasStats, saasTasks } from "@/app/demo/saas/_data";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchSaasOverview() {
  await delay(700);
  return {
    stats: saasStats,
    tasks: saasTasks,
    activity: saasActivity,
  };
}

export async function fetchSaasInvoices() {
  await delay(800);
  return saasInvoices;
}

export async function fetchAnalyticsSummary() {
  await delay(650);
  return {
    activation: "54%",
    retention: "62%",
    conversion: "18%",
  };
}
