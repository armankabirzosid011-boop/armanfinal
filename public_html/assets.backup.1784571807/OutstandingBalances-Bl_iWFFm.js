import { i as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Button, I as Input, ab as TriangleAlert } from "./index-DJeWhCy-.js";
import { l as loadReceipts } from "./MoneyReceipt-CSWlD73e.js";
import { D as Download } from "./download-qc_8yQ5r.js";
import { F as FileText } from "./file-text-DJrK52te.js";
import { S as Search } from "./search-BLymxia-.js";
import { M as MessageCircle } from "./message-circle-qSON-RM2.js";
import "./rotate-ccw-DEYXgLqp.js";
import "./printer-BQUreT8L.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
];
const Wallet = createLucideIcon("wallet", __iconNode);
const ADV_PAYMENTS_KEY = "advance_payments";
function loadAdvancePayments() {
  try {
    return JSON.parse(localStorage.getItem(ADV_PAYMENTS_KEY) || "[]");
  } catch {
    return [];
  }
}
function loadAppointmentPayments() {
  try {
    return JSON.parse(localStorage.getItem("appointmentPayments") || "[]");
  } catch {
    return [];
  }
}
function loadProcedureReceipts() {
  try {
    return JSON.parse(localStorage.getItem("procedurePayments") || "[]");
  } catch {
    return [];
  }
}
function buildBalanceRows() {
  const map = /* @__PURE__ */ new Map();
  function getKey(registerNumber, patientName) {
    return (registerNumber == null ? void 0 : registerNumber.trim()) || (patientName == null ? void 0 : patientName.trim().toLowerCase());
  }
  function ensureRow(key, patientName, phone = "") {
    if (!map.has(key)) {
      map.set(key, {
        patientName: patientName || key,
        phone,
        totalBilled: 0,
        totalPaid: 0,
        dates: []
      });
    }
    return map.get(key);
  }
  for (const r of loadReceipts()) {
    if (!r.dueAmount || r.dueAmount <= 0) continue;
    const key = getKey(r.registerNumber || "", r.patientName);
    const row = ensureRow(key, r.patientName, r.phone || "");
    const billed = r.finalAmount ?? r.amount ?? 0;
    const paid = r.amountPaid ?? (r.paid ? billed : 0);
    row.totalBilled += billed;
    row.totalPaid += paid;
    if (r.date) row.dates.push(r.date);
  }
  for (const a of loadAppointmentPayments()) {
    if (a.status === "paid") continue;
    const key = getKey(a.registerNumber, a.patientName);
    const row = ensureRow(key, a.patientName);
    const billed = a.fee;
    const paid = a.status === "partial" ? a.partialAmount ?? 0 : 0;
    const due = billed - paid;
    if (due <= 0) continue;
    row.totalBilled += billed;
    row.totalPaid += paid;
    if (a.date) row.dates.push(a.date);
  }
  for (const p of loadProcedureReceipts()) {
    if (!p.dueAmount || p.dueAmount <= 0) continue;
    const key = getKey(p.registerNumber || "", p.patientName);
    const row = ensureRow(key, p.patientName, p.phone || "");
    const billed = p.finalAmount ?? p.amount ?? 0;
    const paid = p.amountPaid ?? 0;
    row.totalBilled += billed;
    row.totalPaid += paid;
    if (p.date) row.dates.push(p.date);
  }
  const advMap = /* @__PURE__ */ new Map();
  for (const adv of loadAdvancePayments()) {
    if (!adv.appliedToReceipt) {
      const key = getKey(adv.registerNumber, adv.patientName);
      advMap.set(key, (advMap.get(key) ?? 0) + adv.amount);
    }
  }
  const now = /* @__PURE__ */ new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1e3);
  const rows = [];
  for (const [key, row] of map.entries()) {
    const advCredit = advMap.get(key) ?? 0;
    const due = row.totalBilled - row.totalPaid - advCredit;
    if (due <= 0) continue;
    const sortedDates = row.dates.sort().reverse();
    const lastDate = sortedDates[0] ?? null;
    const overdue = lastDate ? new Date(lastDate) < thirtyDaysAgo : true;
    rows.push({
      patientName: row.patientName,
      registerNumber: key,
      phone: row.phone,
      totalBilled: row.totalBilled,
      totalPaid: row.totalPaid,
      advanceCredit: advCredit,
      balanceDue: due,
      lastPaymentDate: lastDate,
      overdue
    });
  }
  return rows.sort((a, b) => b.balanceDue - a.balanceDue);
}
function openWhatsApp(row) {
  if (!row.phone) return;
  const phone = row.phone.replace(/\D/g, "");
  const e164 = phone.startsWith("0") ? `880${phone.slice(1)}` : phone;
  const msg = `Hello ${row.patientName}, this is a reminder from Dr. Arman Kabir's Clinic. Your outstanding balance is ৳${row.balanceDue.toLocaleString("en-BD")}. Please contact us at your earliest convenience. For queries call: +8801751959262`;
  window.open(
    `https://wa.me/${e164}?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
}
function OutstandingBalances() {
  const [search, setSearch] = reactExports.useState("");
  const [_refresh, setRefresh] = reactExports.useState(0);
  const rows = reactExports.useMemo(() => buildBalanceRows(), []);
  const filtered = reactExports.useMemo(() => {
    if (!search.trim()) return rows;
    const q = search.toLowerCase();
    return rows.filter(
      (r) => r.patientName.toLowerCase().includes(q) || r.registerNumber.toLowerCase().includes(q) || r.phone.includes(q)
    );
  }, [rows, search]);
  const totalOutstanding = filtered.reduce((s, r) => s + r.balanceDue, 0);
  const overdueCount = filtered.filter((r) => r.overdue).length;
  function exportCSV() {
    const headers = [
      "Patient Name",
      "Register No.",
      "Phone",
      "Total Billed (৳)",
      "Total Paid (৳)",
      "Advance Credit (৳)",
      "Balance Due (৳)",
      "Last Payment Date",
      "Status"
    ];
    const rows2 = filtered.map(
      (r) => [
        r.patientName,
        r.registerNumber,
        r.phone,
        r.totalBilled,
        r.totalPaid,
        r.advanceCredit,
        r.balanceDue,
        r.lastPaymentDate ?? "—",
        r.overdue ? "OVERDUE" : "Recent"
      ].join(",")
    );
    rows2.unshift(
      ["TOTAL OUTSTANDING:", "", "", "", "", "", totalOutstanding, "", ""].join(
        ","
      )
    );
    const csv = [headers.join(","), ...rows2].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `outstanding-balances-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  function exportPDF() {
    const tableRows = filtered.map(
      (r, i) => `<tr style="background:${r.overdue ? "#fff5f5" : i % 2 === 0 ? "#fff" : "#f9fafb"}">
          <td>${r.patientName}</td>
          <td style="font-family:monospace">${r.registerNumber}</td>
          <td>${r.phone || "—"}</td>
          <td style="text-align:right">৳${r.totalBilled.toLocaleString("en-BD")}</td>
          <td style="text-align:right">৳${r.totalPaid.toLocaleString("en-BD")}</td>
          <td style="text-align:right;color:#16a34a">${r.advanceCredit > 0 ? `৳${r.advanceCredit.toLocaleString("en-BD")}` : "—"}</td>
          <td style="text-align:right;font-weight:bold;color:${r.overdue ? "#dc2626" : "#d97706"}">৳${r.balanceDue.toLocaleString("en-BD")}</td>
          <td>${r.lastPaymentDate ? new Date(r.lastPaymentDate).toLocaleDateString("en-BD") : "—"}</td>
          <td style="color:${r.overdue ? "#dc2626" : "#d97706"};font-weight:bold">${r.overdue ? "OVERDUE" : "Recent"}</td>
        </tr>`
    ).join("");
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Outstanding Balances</title>
    <style>
      body{font-family:serif;max-width:1000px;margin:40px auto;padding:0 20px;color:#111}
      h1{font-size:22px;margin-bottom:4px}
      .subtitle{font-size:13px;color:#555;margin-bottom:20px}
      table{width:100%;border-collapse:collapse;font-size:12px}
      th{background:#fee2e2;text-align:left;padding:8px 10px;font-size:11px;border-bottom:2px solid #dc2626}
      td{padding:7px 10px;border-bottom:1px solid #e5e7eb}
      .total-row td{background:#fee2e2;font-weight:bold;border-top:2px solid #dc2626}
      @media print{body{margin:20px}}
    </style></head><body>
    <h1>Dr. Arman Kabir's Care — Outstanding Balances</h1>
    <div class="subtitle">বকেয়া পেমেন্ট রিপোর্ট · Generated: ${(/* @__PURE__ */ new Date()).toLocaleDateString("en-BD")}</div>
    <table>
      <thead><tr>
        <th>Patient</th><th>Register No.</th><th>Phone</th>
        <th style="text-align:right">Total Billed</th>
        <th style="text-align:right">Total Paid</th>
        <th style="text-align:right">Advance Credit</th>
        <th style="text-align:right">Balance Due</th>
        <th>Last Payment</th><th>Status</th>
      </tr></thead>
      <tbody>${tableRows}</tbody>
      <tfoot><tr class="total-row">
        <td colspan="6">TOTAL OUTSTANDING (${filtered.length} patients)</td>
        <td style="text-align:right">৳${totalOutstanding.toLocaleString("en-BD")}</td>
        <td></td><td></td>
      </tr></tfoot>
    </table>
    <script>window.onload=()=>{window.print();window.onafterprint=()=>window.close();}<\/script>
    </body></html>`;
    const win = window.open("", "_blank");
    if (win) {
      win.document.write(html);
      win.document.close();
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen bg-background",
      "data-ocid": "outstanding_balances.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-600 text-white px-4 sm:px-6 py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-200 text-xs mb-0.5", children: "Finance / বকেয়া" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-black tracking-tight flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-6 h-6" }),
                " Outstanding Balances"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-200 text-sm mt-0.5", children: "বকেয়া পেমেন্টের তালিকা" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  className: "bg-white text-red-700 hover:bg-red-50 font-semibold gap-1.5",
                  onClick: exportCSV,
                  "data-ocid": "outstanding.export_csv.button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                    " CSV"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  className: "bg-red-500 hover:bg-red-400 text-white border border-red-300 font-semibold gap-1.5",
                  onClick: exportPDF,
                  "data-ocid": "outstanding.export_pdf.button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
                    " PDF"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/15 rounded-xl p-4 backdrop-blur-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-100 text-xs mb-1", children: "Total Outstanding / মোট বকেয়া" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white font-black text-3xl tabular-nums", children: [
                "৳ ",
                totalOutstanding.toLocaleString("en-BD")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/15 rounded-xl p-4 backdrop-blur-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-100 text-xs mb-1", children: "Patients / রোগী" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-black text-3xl tabular-nums", children: filtered.length })
            ] }),
            overdueCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-800/40 rounded-xl p-4 backdrop-blur-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-200 text-xs mb-1", children: "Overdue (>30d)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-100 font-black text-3xl tabular-nums", children: overdueCount })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-center flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-48", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "Search by name, register no., or phone…",
                  value: search,
                  onChange: (e) => setSearch(e.target.value),
                  className: "pl-9 h-9",
                  "data-ocid": "outstanding.search_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => setRefresh((v) => v + 1),
                className: "gap-1.5",
                "data-ocid": "outstanding.refresh.button",
                children: "↺ Refresh"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 rounded-sm bg-red-200 border border-red-400" }),
              "Overdue — last payment over 30 days ago"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 rounded-sm bg-amber-100 border border-amber-300" }),
              "Recent partial payment"
            ] })
          ] }),
          filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col items-center justify-center py-20 text-muted-foreground gap-3",
              "data-ocid": "outstanding.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-12 h-12 opacity-20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-lg", children: rows.length === 0 ? "No outstanding balances! 🎉" : "No results for search" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: rows.length === 0 ? "All patients have paid their bills." : "Try a different search term." })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card rounded-xl border border-border shadow-sm overflow-hidden",
              "data-ocid": "outstanding.table",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-50 border-b border-red-100 px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-red-800", children: [
                  filtered.length,
                  " patient",
                  filtered.length !== 1 ? "s" : "",
                  " with outstanding balance"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/40 border-b border-border", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-semibold text-muted-foreground text-xs", children: "Patient" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-semibold text-muted-foreground text-xs hidden sm:table-cell", children: "Register No." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-semibold text-muted-foreground text-xs hidden md:table-cell", children: "Phone" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-semibold text-muted-foreground text-xs hidden lg:table-cell", children: "Total Billed" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-semibold text-muted-foreground text-xs hidden lg:table-cell", children: "Total Paid" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-semibold text-green-700 text-xs hidden lg:table-cell", children: "Advance Credit" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-semibold text-red-700 text-xs", children: "Balance Due" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-semibold text-muted-foreground text-xs hidden sm:table-cell", children: "Last Payment" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-semibold text-muted-foreground text-xs", children: "Actions" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.map((row, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "tr",
                    {
                      className: `border-b border-border last:border-0 transition-colors ${row.overdue ? "bg-red-50/60 hover:bg-red-50" : "hover:bg-amber-50/40"}`,
                      "data-ocid": `outstanding.item.${idx + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: row.patientName }),
                          row.overdue && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-0.5 text-xs font-semibold text-red-600 mt-0.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3" }),
                            " Overdue"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono text-xs text-muted-foreground hidden sm:table-cell", children: row.registerNumber }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground hidden md:table-cell", children: row.phone || "—" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right text-xs text-muted-foreground hidden lg:table-cell", children: [
                          "৳",
                          row.totalBilled.toLocaleString("en-BD")
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right text-xs text-muted-foreground hidden lg:table-cell", children: [
                          "৳",
                          row.totalPaid.toLocaleString("en-BD")
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right text-xs hidden lg:table-cell", children: row.advanceCredit > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-green-600 font-medium", children: [
                          "৳",
                          row.advanceCredit.toLocaleString("en-BD")
                        ] }) : "—" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: `font-black tabular-nums text-base ${row.overdue ? "text-red-600" : "text-amber-600"}`,
                            children: [
                              "৳",
                              row.balanceDue.toLocaleString("en-BD")
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground hidden sm:table-cell", children: row.lastPaymentDate ? new Date(row.lastPaymentDate).toLocaleDateString(
                          "en-BD",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                          }
                        ) : "—" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-end gap-1.5", children: row.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => openWhatsApp(row),
                            className: "w-7 h-7 rounded-full flex items-center justify-center hover:bg-green-100 transition-colors",
                            title: "Send WhatsApp reminder",
                            "aria-label": "Send WhatsApp reminder",
                            "data-ocid": `outstanding.whatsapp.${idx + 1}`,
                            style: { color: "#25D366" },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" })
                          }
                        ) }) })
                      ]
                    },
                    `${row.registerNumber}-${idx}`
                  )) })
                ] }) })
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  OutstandingBalances as default
};
