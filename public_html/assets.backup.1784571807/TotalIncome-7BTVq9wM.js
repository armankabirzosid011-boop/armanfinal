import { r as reactExports, j as jsxRuntimeExports, B as Button, L as Label, I as Input, S as Select, d as SelectTrigger, e as SelectValue, f as SelectContent, g as SelectItem, X, R as React } from "./index-DJeWhCy-.js";
import { l as loadReceipts } from "./MoneyReceipt-CSWlD73e.js";
import { T as TrendingUp } from "./trending-up-B6DQx806.js";
import { D as Download } from "./download-qc_8yQ5r.js";
import { F as FileText } from "./file-text-DJrK52te.js";
import { C as ChartNoAxesColumn } from "./chart-no-axes-column-aUF3iGvH.js";
import { C as Calendar } from "./calendar-BL7xJRSg.js";
import "./message-circle-qSON-RM2.js";
import "./rotate-ccw-DEYXgLqp.js";
import "./printer-BQUreT8L.js";
const PROC_PAYMENTS_KEY = "procedurePayments";
const APT_PAYMENTS_KEY = "appointmentPayments";
const OTHER_PAYMENTS_KEY = "otherPayments";
const REFUNDS_KEY = "paymentRefunds";
function loadProcedurePayments() {
  try {
    return JSON.parse(localStorage.getItem(PROC_PAYMENTS_KEY) || "[]");
  } catch {
    return [];
  }
}
function loadAppointmentPayments() {
  try {
    return JSON.parse(localStorage.getItem(APT_PAYMENTS_KEY) || "[]");
  } catch {
    return [];
  }
}
function loadOtherPayments() {
  try {
    return JSON.parse(localStorage.getItem(OTHER_PAYMENTS_KEY) || "[]");
  } catch {
    return [];
  }
}
function loadRefunds() {
  try {
    return JSON.parse(localStorage.getItem(REFUNDS_KEY) || "[]");
  } catch {
    return [];
  }
}
function getDateRange(filter, customFrom, customTo) {
  const now = /* @__PURE__ */ new Date();
  if (filter === "today") {
    const s = new Date(now);
    s.setHours(0, 0, 0, 0);
    const e = new Date(now);
    e.setHours(23, 59, 59, 999);
    return { from: s, to: e };
  }
  if (filter === "week") {
    const s = new Date(now);
    s.setDate(now.getDate() - 6);
    s.setHours(0, 0, 0, 0);
    const e = new Date(now);
    e.setHours(23, 59, 59, 999);
    return { from: s, to: e };
  }
  if (filter === "month") {
    return {
      from: new Date(now.getFullYear(), now.getMonth(), 1),
      to: (() => {
        const e = new Date(now);
        e.setHours(23, 59, 59, 999);
        return e;
      })()
    };
  }
  return {
    from: customFrom ? new Date(customFrom) : new Date(now.getFullYear(), now.getMonth(), 1),
    to: customTo ? /* @__PURE__ */ new Date(`${customTo}T23:59:59`) : new Date(now)
  };
}
function inRange(dateStr, from, to) {
  const d = new Date(dateStr);
  return d >= from && d <= to;
}
function getAllDoctors(aptPayments, allReceipts) {
  const set = /* @__PURE__ */ new Set();
  for (const p of aptPayments) if (p.doctor) set.add(p.doctor);
  for (const r of allReceipts) if (r.doctorName) set.add(r.doctorName);
  return [...set].sort();
}
const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
function buildMonthlyData(aptPayments, allReceipts, procPayments, otherPayments, filterDoctor, filterMethod) {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const months = Array.from({ length: 12 }, (_, i) => ({
    month: i,
    label: MONTH_LABELS[i],
    appointment: 0,
    investigation: 0,
    procedure: 0,
    other: 0,
    total: 0
  }));
  function addToMonth(dateStr, key, amount) {
    const d = new Date(dateStr);
    if (d.getFullYear() !== year) return;
    const m = months[d.getMonth()];
    if (!m) return;
    m[key] += amount;
    m.total += amount;
  }
  for (const p of aptPayments) {
    if (p.status !== "paid") continue;
    if (filterDoctor !== "all" && p.doctor !== filterDoctor) continue;
    if (filterMethod !== "all" && p.paymentMethod !== filterMethod) continue;
    addToMonth(p.date, "appointment", p.fee ?? p.amount ?? 0);
  }
  for (const r of allReceipts) {
    if (!r.paid) continue;
    if (filterDoctor !== "all" && r.doctorName !== filterDoctor) continue;
    const amt = r.finalAmount ?? r.amount;
    if (r.type === "investigation") addToMonth(r.date, "investigation", amt);
    else if (r.type === "procedure") addToMonth(r.date, "procedure", amt);
    else if (r.type === "appointment") addToMonth(r.date, "appointment", amt);
  }
  for (const r of procPayments) {
    if (!r.paid) continue;
    if (filterDoctor !== "all" && r.doctorName !== filterDoctor) continue;
    if (allReceipts.find((m) => m.id === r.id)) continue;
    addToMonth(r.date, "procedure", r.finalAmount ?? r.amount);
  }
  for (const p of otherPayments) {
    if (filterDoctor !== "all" && p.doctorName !== filterDoctor) continue;
    if (filterMethod !== "all" && p.paymentMethod !== filterMethod) continue;
    addToMonth(p.date, "other", p.amount);
  }
  return months;
}
const CHART_CATS = [
  { key: "appointment", color: "bg-green-500", label: "Appointment" },
  {
    key: "investigation",
    color: "bg-blue-500",
    label: "Investigation"
  },
  { key: "procedure", color: "bg-orange-500", label: "Procedure" },
  { key: "other", color: "bg-purple-500", label: "Other" }
];
function MonthlyBarChart({ data }) {
  const maxVal = Math.max(...data.map((d) => d.total), 1);
  const [hovIdx, setHovIdx] = React.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 mb-4 flex-wrap", children: CHART_CATS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-1.5 text-xs text-muted-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-3 h-3 rounded-sm ${c.color}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.label })
        ]
      },
      c.key
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto pb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 items-end", style: { minWidth: 540 }, children: data.map((month, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center gap-1 flex-1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "w-full flex flex-col-reverse gap-px relative cursor-pointer",
              style: { height: 120 },
              onMouseEnter: () => setHovIdx(idx),
              onMouseLeave: () => setHovIdx(null),
              children: [
                CHART_CATS.map((cat) => {
                  const val = month[cat.key];
                  const pct = maxVal > 0 ? val / maxVal * 100 : 0;
                  return pct > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `w-full rounded-sm ${cat.color} transition-opacity`,
                      style: { height: `${pct}%` },
                      title: `${cat.label}: ৳${val.toLocaleString("en-BD")}`
                    },
                    cat.key
                  ) : null;
                }),
                hovIdx === idx && month.total > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -top-9 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded shadow-md z-10 whitespace-nowrap pointer-events-none", children: [
                  "৳",
                  month.total.toLocaleString("en-BD")
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-xs text-muted-foreground",
              style: { fontSize: 9 },
              children: month.label
            }
          )
        ]
      },
      month.label
    )) }) })
  ] });
}
function SummaryCard({
  label,
  value,
  labelBn,
  color,
  icon,
  negative
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border shadow-sm p-4 flex items-start gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `w-10 h-10 rounded-xl ${color} flex items-center justify-center shrink-0`,
        children: icon
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/60 mb-1", children: labelBn }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "p",
        {
          className: `text-xl font-black tabular-nums ${negative ? "text-red-600" : "text-foreground"}`,
          children: [
            negative && value > 0 ? "−" : "",
            "৳ ",
            value.toLocaleString("en-BD")
          ]
        }
      )
    ] })
  ] });
}
function IncomeBarChart({ data }) {
  const maxVal = Math.max(...data.map((d) => d.total), 1);
  const cats = [
    {
      key: "appointment",
      color: "bg-green-500",
      label: "Appointment"
    },
    {
      key: "investigation",
      color: "bg-blue-500",
      label: "Investigation"
    },
    { key: "procedure", color: "bg-orange-500", label: "Procedure" },
    { key: "other", color: "bg-purple-500", label: "Other" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 mb-3 flex-wrap", children: cats.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-1.5 text-xs text-muted-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-3 h-3 rounded-sm ${c.color}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.label })
        ]
      },
      c.key
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex gap-2 items-end",
        style: { minWidth: data.length * 56 },
        children: data.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-col items-center gap-1 flex-1",
            style: { minWidth: 44 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-full flex flex-col-reverse gap-0.5",
                  style: { height: 120 },
                  children: cats.map((cat) => {
                    const val = day[cat.key];
                    const pct = maxVal > 0 ? val / maxVal * 100 : 0;
                    return pct > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `w-full rounded-sm ${cat.color} transition-all`,
                        style: { height: `${pct}%` },
                        title: `${cat.label}: ৳${val.toLocaleString("en-BD")}`
                      },
                      cat.key
                    ) : null;
                  })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs text-muted-foreground",
                  style: { fontSize: 9 },
                  children: new Date(day.date).toLocaleDateString("en-BD", {
                    month: "short",
                    day: "numeric"
                  })
                }
              )
            ]
          },
          day.date
        ))
      }
    ) })
  ] });
}
function TotalIncome() {
  const [dateFilter, setDateFilter] = reactExports.useState("month");
  const [customFrom, setCustomFrom] = reactExports.useState("");
  const [customTo, setCustomTo] = reactExports.useState("");
  const [filterDoctor, setFilterDoctor] = reactExports.useState("all");
  const [filterMethod, setFilterMethod] = reactExports.useState("all");
  const { from, to } = getDateRange(dateFilter, customFrom, customTo);
  const allReceipts = reactExports.useMemo(() => loadReceipts(), []);
  const procPayments = reactExports.useMemo(() => loadProcedurePayments(), []);
  const aptPayments = reactExports.useMemo(() => loadAppointmentPayments(), []);
  const otherPayments = reactExports.useMemo(() => loadOtherPayments(), []);
  const refunds = reactExports.useMemo(() => loadRefunds(), []);
  const doctors = reactExports.useMemo(
    () => getAllDoctors(aptPayments, allReceipts),
    [aptPayments, allReceipts]
  );
  const paymentMethods = [
    { label: "Cash", value: "cash" },
    { label: "bKash", value: "bkash" },
    { label: "Nagad", value: "nagad" },
    { label: "Card", value: "card" }
  ];
  const aptTotal = reactExports.useMemo(
    () => aptPayments.filter(
      (p) => p.status === "paid" && inRange(p.date, from, to) && (filterDoctor === "all" || p.doctor === filterDoctor) && (filterMethod === "all" || p.paymentMethod === filterMethod)
    ).reduce((s, p) => s + (p.fee ?? p.amount ?? 0), 0),
    [aptPayments, from, to, filterDoctor, filterMethod]
  );
  const invTotal = reactExports.useMemo(
    () => allReceipts.filter(
      (r) => r.type === "investigation" && r.paid && inRange(r.date, from, to) && (filterDoctor === "all" || r.doctorName === filterDoctor)
    ).reduce((s, r) => s + (r.finalAmount ?? r.amount), 0),
    [allReceipts, from, to, filterDoctor]
  );
  const procTotal = reactExports.useMemo(() => {
    const moneyReceipts = allReceipts.filter(
      (r) => r.type === "procedure" && r.paid && inRange(r.date, from, to) && (filterDoctor === "all" || r.doctorName === filterDoctor)
    );
    const procReceipts = procPayments.filter(
      (r) => r.paid && inRange(r.date, from, to) && (filterDoctor === "all" || r.doctorName === filterDoctor)
    );
    const combined = [...procReceipts];
    for (const m of moneyReceipts) {
      if (!combined.find((r) => r.id === m.id)) combined.push(m);
    }
    return combined.reduce((s, r) => s + (r.finalAmount ?? r.amount), 0);
  }, [allReceipts, procPayments, from, to, filterDoctor]);
  const otherTotal = reactExports.useMemo(
    () => otherPayments.filter(
      (p) => inRange(p.date, from, to) && (filterDoctor === "all" || p.doctorName === filterDoctor) && (filterMethod === "all" || p.paymentMethod === filterMethod)
    ).reduce((s, p) => s + p.amount, 0),
    [otherPayments, from, to, filterDoctor, filterMethod]
  );
  const refundsTotal = reactExports.useMemo(
    () => refunds.filter((r) => inRange(r.date, from, to)).reduce((s, r) => s + r.amount, 0),
    [refunds, from, to]
  );
  const grossTotal = aptTotal + invTotal + procTotal + otherTotal;
  const netTotal = grossTotal - refundsTotal;
  const breakdown = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    function getDay(dateStr) {
      const day = dateStr.split("T")[0];
      if (!map.has(day))
        map.set(day, {
          date: day,
          appointment: 0,
          investigation: 0,
          procedure: 0,
          other: 0,
          total: 0
        });
      return map.get(day);
    }
    for (const p of aptPayments) {
      if (p.status !== "paid" || !inRange(p.date, from, to)) continue;
      if (filterDoctor !== "all" && p.doctor !== filterDoctor) continue;
      if (filterMethod !== "all" && p.paymentMethod !== filterMethod) continue;
      const d = getDay(p.date);
      const amt = p.fee ?? p.amount ?? 0;
      d.appointment += amt;
      d.total += amt;
    }
    for (const r of allReceipts) {
      if (!r.paid || !inRange(r.date, from, to)) continue;
      if (filterDoctor !== "all" && r.doctorName !== filterDoctor) continue;
      const amt = r.finalAmount ?? r.amount;
      const d = getDay(r.date);
      if (r.type === "investigation") {
        d.investigation += amt;
        d.total += amt;
      } else if (r.type === "procedure") {
        d.procedure += amt;
        d.total += amt;
      } else if (r.type === "appointment") {
        d.appointment += amt;
        d.total += amt;
      }
    }
    for (const r of procPayments) {
      if (!r.paid || !inRange(r.date, from, to)) continue;
      if (filterDoctor !== "all" && r.doctorName !== filterDoctor) continue;
      if (allReceipts.find((m) => m.id === r.id)) continue;
      const amt = r.finalAmount ?? r.amount;
      const d = getDay(r.date);
      d.procedure += amt;
      d.total += amt;
    }
    for (const p of otherPayments) {
      if (!inRange(p.date, from, to)) continue;
      if (filterDoctor !== "all" && p.doctorName !== filterDoctor) continue;
      if (filterMethod !== "all" && p.paymentMethod !== filterMethod) continue;
      const d = getDay(p.date);
      d.other += p.amount;
      d.total += p.amount;
    }
    return [...map.values()].sort((a, b) => a.date.localeCompare(b.date));
  }, [
    aptPayments,
    allReceipts,
    procPayments,
    otherPayments,
    from,
    to,
    filterDoctor,
    filterMethod
  ]);
  function exportCSV() {
    const headers = [
      "Date",
      "Appointment (৳)",
      "Investigation (৳)",
      "Procedure (৳)",
      "Other (৳)",
      "Total (৳)"
    ];
    const rows = breakdown.map(
      (d) => [
        d.date,
        d.appointment,
        d.investigation,
        d.procedure,
        d.other,
        d.total
      ].join(",")
    );
    rows.push(
      [
        "GROSS TOTAL",
        aptTotal,
        invTotal,
        procTotal,
        otherTotal,
        grossTotal
      ].join(",")
    );
    rows.push(["REFUNDS", "", "", "", "", `-${refundsTotal}`].join(","));
    rows.push(["NET INCOME", "", "", "", "", netTotal].join(","));
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `income-report-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }
  function exportPDF() {
    const dateLabel = dateFilter === "custom" ? `${customFrom || "—"} to ${customTo || "—"}` : dateFilter === "today" ? "Today" : dateFilter === "week" ? "This Week" : "This Month";
    const rows = breakdown.map(
      (d) => `<tr>
            <td>${new Date(d.date).toLocaleDateString("en-BD", { year: "numeric", month: "short", day: "numeric" })}</td>
            <td style="text-align:right">${d.appointment > 0 ? `৳ ${d.appointment.toLocaleString("en-BD")}` : "—"}</td>
            <td style="text-align:right">${d.investigation > 0 ? `৳ ${d.investigation.toLocaleString("en-BD")}` : "—"}</td>
            <td style="text-align:right">${d.procedure > 0 ? `৳ ${d.procedure.toLocaleString("en-BD")}` : "—"}</td>
            <td style="text-align:right">${d.other > 0 ? `৳ ${d.other.toLocaleString("en-BD")}` : "—"}</td>
            <td style="text-align:right;font-weight:bold">৳ ${d.total.toLocaleString("en-BD")}</td>
          </tr>`
    ).join("");
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Income Report</title>
      <style>
        body{font-family:serif;max-width:800px;margin:40px auto;padding:0 20px;color:#111}
        h1{font-size:22px;margin-bottom:4px}
        .subtitle{font-size:13px;color:#555;margin-bottom:20px}
        .meta{display:flex;gap:24px;margin-bottom:20px;font-size:12px;color:#444}
        table{width:100%;border-collapse:collapse;font-size:13px}
        th{background:#e8eaf6;text-align:left;padding:8px 10px;font-size:11px;border-bottom:2px solid #3f51b5}
        td{padding:7px 10px;border-bottom:1px solid #e0e0e0}
        tr:last-child td{border-bottom:none}
        .totals-row td{background:#e8eaf6;font-weight:bold;border-top:2px solid #3f51b5}
        .net-row td{background:#c8e6c9;font-weight:bold;font-size:14px}
        .refund-row td{background:#fce4ec;color:#c62828}
        .summary{margin-top:24px;border:1px solid #ddd;border-radius:8px;padding:16px}
        .summary h2{font-size:14px;margin:0 0 12px}
        .summary-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
        .summary-item{font-size:12px;display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #eee}
        .summary-item span:last-child{font-weight:bold}
        @media print{body{margin:20px}}
      </style></head><body>
      <h1>Dr. Arman Kabir's Care — Income Report</h1>
      <div class="subtitle">মোট আয়ের প্রতিবেদন</div>
      <div class="meta">
        <span><strong>Period:</strong> ${dateLabel}</span>
        ${filterDoctor !== "all" ? `<span><strong>Doctor:</strong> ${filterDoctor}</span>` : ""}
        ${filterMethod !== "all" ? `<span><strong>Method:</strong> ${filterMethod}</span>` : ""}
        <span><strong>Generated:</strong> ${(/* @__PURE__ */ new Date()).toLocaleDateString("en-BD", { year: "numeric", month: "long", day: "numeric" })}</span>
      </div>
      <table>
        <thead><tr>
          <th>Date</th>
          <th style="text-align:right">Appointment</th>
          <th style="text-align:right">Investigation</th>
          <th style="text-align:right">Procedure</th>
          <th style="text-align:right">Other</th>
          <th style="text-align:right">Total</th>
        </tr></thead>
        <tbody>
          ${rows}
          <tr class="totals-row">
            <td>GROSS TOTAL</td>
            <td style="text-align:right">৳ ${aptTotal.toLocaleString("en-BD")}</td>
            <td style="text-align:right">৳ ${invTotal.toLocaleString("en-BD")}</td>
            <td style="text-align:right">৳ ${procTotal.toLocaleString("en-BD")}</td>
            <td style="text-align:right">৳ ${otherTotal.toLocaleString("en-BD")}</td>
            <td style="text-align:right">৳ ${grossTotal.toLocaleString("en-BD")}</td>
          </tr>
          ${refundsTotal > 0 ? `<tr class="refund-row">
            <td>REFUNDS</td>
            <td></td><td></td><td></td><td></td>
            <td style="text-align:right">− ৳ ${refundsTotal.toLocaleString("en-BD")}</td>
          </tr>` : ""}
          <tr class="net-row">
            <td>NET INCOME</td>
            <td></td><td></td><td></td><td></td>
            <td style="text-align:right">৳ ${netTotal.toLocaleString("en-BD")}</td>
          </tr>
        </tbody>
      </table>
      <script>window.onload=()=>{window.print();window.onafterprint=()=>window.close();}<\/script>
    </body></html>`;
    const win = window.open("", "_blank");
    if (win) {
      win.document.write(html);
      win.document.close();
    }
  }
  const filterBtns = [
    { label: "Today", value: "today" },
    { label: "This Week", value: "week" },
    { label: "This Month", value: "month" },
    { label: "Custom", value: "custom" }
  ];
  const hasActiveFilters = filterDoctor !== "all" || filterMethod !== "all";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "total_income.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-indigo-600 text-white px-4 sm:px-6 py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-indigo-200 text-xs mb-0.5", children: "Finance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-black tracking-tight flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-6 h-6" }),
            " Total Income"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-indigo-200 text-sm mt-0.5", children: "মোট আয়ের সারসংক্ষেপ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "bg-white text-indigo-700 hover:bg-indigo-50 font-semibold gap-1.5",
              onClick: exportCSV,
              "data-ocid": "total_income.export_csv.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                " Export CSV"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "bg-indigo-500 hover:bg-indigo-400 text-white border border-indigo-300 font-semibold gap-1.5",
              onClick: exportPDF,
              "data-ocid": "total_income.export_pdf.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
                " Export PDF"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 mt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/15 rounded-xl p-4 backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-indigo-100 text-xs mb-1", children: "Gross Income / মোট আয়" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white font-black text-3xl tabular-nums", children: [
            "৳ ",
            grossTotal.toLocaleString("en-BD")
          ] })
        ] }),
        refundsTotal > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-500/30 rounded-xl p-4 backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-100 text-xs mb-1", children: "Refunds / ফেরত" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-red-100 font-black text-3xl tabular-nums", children: [
            "− ৳ ",
            refundsTotal.toLocaleString("en-BD")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-emerald-500/30 rounded-xl p-4 backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-emerald-100 text-xs mb-1", children: "Net Income / নিট আয়" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white font-black text-3xl tabular-nums", children: [
            "৳ ",
            netTotal.toLocaleString("en-BD")
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border shadow-sm p-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: filterBtns.map((btn) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setDateFilter(btn.value),
            className: `px-4 py-1.5 rounded-lg text-sm font-semibold border transition-colors ${dateFilter === btn.value ? "bg-indigo-600 text-white border-indigo-600" : "bg-card text-muted-foreground border-border hover:border-indigo-300"}`,
            "data-ocid": `total_income.${btn.value}_filter.tab`,
            children: btn.label
          },
          btn.value
        )) }),
        dateFilter === "custom" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "income-date-from",
                className: "text-xs text-muted-foreground font-medium",
                children: "From"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "income-date-from",
                type: "date",
                value: customFrom,
                onChange: (e) => setCustomFrom(e.target.value),
                className: "h-8 text-sm w-36",
                "data-ocid": "total_income.date_from.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "income-date-to",
                className: "text-xs text-muted-foreground font-medium",
                children: "To"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "income-date-to",
                type: "date",
                value: customTo,
                onChange: (e) => setCustomTo(e.target.value),
                className: "h-8 text-sm w-36",
                "data-ocid": "total_income.date_to.input"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 items-center pt-1 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-medium shrink-0", children: "Filter by:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterDoctor, onValueChange: setFilterDoctor, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "h-8 text-sm w-52",
                "data-ocid": "total_income.doctor_filter.select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All Doctors" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Doctors" }),
              doctors.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: d, children: d }, d))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterMethod, onValueChange: setFilterMethod, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "h-8 text-sm w-40",
                "data-ocid": "total_income.method_filter.select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All Methods" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Methods" }),
              paymentMethods.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: m.value, children: m.label }, m.value))
            ] })
          ] }),
          hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "h-8 text-xs text-muted-foreground gap-1",
              onClick: () => {
                setFilterDoctor("all");
                setFilterMethod("all");
              },
              "data-ocid": "total_income.clear_filters.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }),
                " Clear filters"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SummaryCard,
          {
            label: "Appointment",
            labelBn: "অ্যাপয়েন্টমেন্ট",
            value: aptTotal,
            color: "bg-green-100",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-black text-sm", children: "APT" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SummaryCard,
          {
            label: "Investigation",
            labelBn: "তদন্ত",
            value: invTotal,
            color: "bg-blue-100",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-black text-sm", children: "INV" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SummaryCard,
          {
            label: "Procedure",
            labelBn: "পদ্ধতি",
            value: procTotal,
            color: "bg-orange-100",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-600 font-black text-sm", children: "PRO" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SummaryCard,
          {
            label: "Other Income",
            labelBn: "অন্যান্য",
            value: otherTotal,
            color: "bg-purple-100",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-600 font-black text-sm", children: "OTH" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SummaryCard,
          {
            label: "Total Refunds",
            labelBn: "মোট ফেরত",
            value: refundsTotal,
            color: "bg-red-100",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 font-black text-xs", children: "REF" }),
            negative: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SummaryCard,
          {
            label: "Net Income",
            labelBn: "নিট আয়",
            value: netTotal,
            color: "bg-emerald-100",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600 font-black text-xs", children: "NET" })
          }
        )
      ] }),
      breakdown.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border shadow-sm p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold text-foreground mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "w-4 h-4 text-indigo-600" }),
          " Income by Day"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(IncomeBarChart, { data: breakdown })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border shadow-sm p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold text-foreground mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-indigo-600" }),
          "Monthly Revenue — ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal text-muted-foreground ml-1", children: "বাৎসরিক আয়" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          MonthlyBarChart,
          {
            data: buildMonthlyData(
              aptPayments,
              allReceipts,
              procPayments,
              otherPayments,
              filterDoctor,
              filterMethod
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card rounded-xl border border-border shadow-sm overflow-hidden",
          "data-ocid": "total_income.breakdown.table",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-indigo-50 border-b border-indigo-100 px-4 py-3 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-indigo-800", children: "Daily Breakdown" }),
              hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full", children: "Filtered view" })
            ] }),
            breakdown.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex flex-col items-center justify-center py-16 text-muted-foreground gap-3",
                "data-ocid": "total_income.empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-10 h-10 opacity-30" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "No income data for this period" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Try a different date range or remove filters." })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/40 border-b border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-semibold text-muted-foreground text-xs", children: "Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-semibold text-muted-foreground text-xs text-green-700 hidden sm:table-cell", children: "Appt" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-semibold text-muted-foreground text-xs text-blue-700 hidden sm:table-cell", children: "Invest." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-semibold text-muted-foreground text-xs text-orange-700 hidden md:table-cell", children: "Proc." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-semibold text-muted-foreground text-xs text-purple-700 hidden md:table-cell", children: "Other" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-semibold text-foreground text-xs", children: "Total" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
                breakdown.map((d, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    className: "border-b border-border last:border-0 hover:bg-muted/20 transition-colors",
                    "data-ocid": `total_income.row.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-sm font-medium text-foreground", children: new Date(d.date).toLocaleDateString("en-BD", {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                      }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right text-xs text-green-700 hidden sm:table-cell", children: d.appointment > 0 ? `৳ ${d.appointment.toLocaleString("en-BD")}` : "—" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right text-xs text-blue-700 hidden sm:table-cell", children: d.investigation > 0 ? `৳ ${d.investigation.toLocaleString("en-BD")}` : "—" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right text-xs text-orange-700 hidden md:table-cell", children: d.procedure > 0 ? `৳ ${d.procedure.toLocaleString("en-BD")}` : "—" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right text-xs text-purple-700 hidden md:table-cell", children: d.other > 0 ? `৳ ${d.other.toLocaleString("en-BD")}` : "—" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right font-bold text-foreground", children: [
                        "৳ ",
                        d.total.toLocaleString("en-BD")
                      ] })
                    ]
                  },
                  d.date
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-indigo-50 border-t-2 border-indigo-200 font-bold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-sm text-indigo-800 font-black", children: "GROSS TOTAL" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right text-xs text-green-700 hidden sm:table-cell", children: [
                    "৳ ",
                    aptTotal.toLocaleString("en-BD")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right text-xs text-blue-700 hidden sm:table-cell", children: [
                    "৳ ",
                    invTotal.toLocaleString("en-BD")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right text-xs text-orange-700 hidden md:table-cell", children: [
                    "৳ ",
                    procTotal.toLocaleString("en-BD")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right text-xs text-purple-700 hidden md:table-cell", children: [
                    "৳ ",
                    otherTotal.toLocaleString("en-BD")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right text-indigo-800 font-black", children: [
                    "৳ ",
                    grossTotal.toLocaleString("en-BD")
                  ] })
                ] }),
                refundsTotal > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-red-50 border-t border-red-200", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: "px-4 py-2.5 text-xs text-red-700 font-semibold",
                      colSpan: 5,
                      children: "Refunds"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5 text-right text-xs text-red-700 font-bold", children: [
                    "− ৳ ",
                    refundsTotal.toLocaleString("en-BD")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-emerald-50 border-t-2 border-emerald-300 font-bold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: "px-4 py-3 text-sm text-emerald-800 font-black",
                      colSpan: 5,
                      children: "NET INCOME"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right text-emerald-800 font-black text-base", children: [
                    "৳ ",
                    netTotal.toLocaleString("en-BD")
                  ] })
                ] })
              ] })
            ] }) })
          ]
        }
      )
    ] })
  ] });
}
export {
  TotalIncome as default
};
