"use client";

import { useEffect, useMemo, useState } from "react";
import { fetchSaasInvoices } from "@/app/demo/saas/_components/fakeApi";

type Invoice = { client: string; amount: string; status: "Paid" | "Pending" };

type StatusFilter = "All" | "Paid" | "Pending";

type SortKey = "amount" | "client";

const parseAmount = (value: string) => Number(value.replace(/[^0-9.]/g, ""));

export default function InvoicesTable() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<StatusFilter>("All");
  const [sortKey, setSortKey] = useState<SortKey>("amount");
  const [ascending, setAscending] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 3;

  useEffect(() => {
    fetchSaasInvoices().then((data) => {
      setInvoices(data);
      setLoading(false);
    });
  }, []);

  const filtered = useMemo(() => {
    const base = status === "All" ? invoices : invoices.filter((item) => item.status === status);
    const searched = base.filter((item) => item.client.toLowerCase().includes(query.toLowerCase()));
    const sorted = [...searched].sort((a, b) => {
      if (sortKey === "client") {
        return a.client.localeCompare(b.client);
      }
      return parseAmount(a.amount) - parseAmount(b.amount);
    });
    return ascending ? sorted : sorted.reverse();
  }, [status, sortKey, ascending, query, invoices]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  useEffect(() => {
    setPage(1);
  }, [status, sortKey, ascending, query]);

  if (loading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: pageSize }).map((_, index) => (
          <div key={index} className="rounded-2xl border border-white/10 bg-base-900 p-4">
            <div className="h-4 w-32 rounded-full bg-white/10" />
            <div className="mt-3 h-3 w-24 rounded-full bg-white/10" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {(["All", "Paid", "Pending"] as StatusFilter[]).map((item) => (
            <button
              key={item}
              onClick={() => setStatus(item)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                status === item
                  ? "bg-white/10 text-white"
                  : "border border-white/10 text-white/60 hover:border-white/30"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            className="secondary-button text-xs"
            onClick={() => {
              setSortKey("amount");
              setAscending((prev) => !prev);
            }}
          >
            Sort by Amount
          </button>
          <button
            className="secondary-button text-xs"
            onClick={() => {
              setSortKey("client");
              setAscending((prev) => !prev);
            }}
          >
            Sort by Client
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <input
          className="w-full rounded-xl border border-white/10 bg-base-900 px-4 py-3 text-sm text-white/80 md:w-64"
          placeholder="Search client"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <p className="text-xs text-white/50">Showing {filtered.length} results</p>
      </div>

      <div className="space-y-3">
        {paged.map((invoice) => (
          <div
            key={invoice.client}
            className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-base-900 p-4"
          >
            <div>
              <p className="font-semibold">{invoice.client}</p>
              <p className="text-sm text-white/60">Status: {invoice.status}</p>
            </div>
            <span className="font-semibold">{invoice.amount}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-white/60">
        <button
          className="secondary-button text-xs"
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1}
        >
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          className="secondary-button text-xs"
          onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
