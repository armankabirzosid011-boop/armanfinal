import { i as createLucideIcon, r as reactExports, j as jsxRuntimeExports, X, L as Label, I as Input, B as Button, ab as TriangleAlert, S as Select, d as SelectTrigger, e as SelectValue, f as SelectContent, g as SelectItem, b as CircleCheck, u as ue } from "./index-DJeWhCy-.js";
import { M as MessageCircle } from "./message-circle-qSON-RM2.js";
import { R as RotateCcw } from "./rotate-ccw-DEYXgLqp.js";
import { P as Printer } from "./printer-BQUreT8L.js";
import { D as Download } from "./download-qc_8yQ5r.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M12 18v-6", key: "17g6i2" }],
  ["path", { d: "m9 15 3 3 3-3", key: "1npd3o" }]
];
const FileDown = createLucideIcon("file-down", __iconNode);
const RECEIPTS_KEY = "clinic_receipts";
function loadReceipts() {
  try {
    return JSON.parse(localStorage.getItem(RECEIPTS_KEY) || "[]");
  } catch {
    return [];
  }
}
function saveReceiptToStore(receipt) {
  const all = loadReceipts();
  const exists = all.findIndex((r) => r.id === receipt.id);
  if (exists >= 0) {
    all[exists] = receipt;
  } else {
    all.unshift(receipt);
  }
  localStorage.setItem(RECEIPTS_KEY, JSON.stringify(all));
}
function getCounterKey(prefix) {
  return `receipt_counter_${prefix.toLowerCase()}`;
}
function getYearKey(prefix) {
  return `receipt_year_${prefix.toLowerCase()}`;
}
function generateTypedReceiptNumber(prefix) {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const yearKey = getYearKey(prefix);
  const counterKey = getCounterKey(prefix);
  const storedYear = Number.parseInt(localStorage.getItem(yearKey) || "0", 10);
  let count = 1;
  if (storedYear === year) {
    count = Number.parseInt(localStorage.getItem(counterKey) || "0", 10) + 1;
  }
  localStorage.setItem(yearKey, String(year));
  localStorage.setItem(counterKey, String(count));
  return `${prefix}-${year}-${String(count).padStart(4, "0")}`;
}
function triggerReceiptPrint(opts) {
  var _a;
  const { bodyHtml, headerHtml, withHeader, paperSize, filename } = opts;
  const content = withHeader ? headerHtml + bodyHtml : bodyHtml;
  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${filename}</title><style>
    @page { size: ${paperSize} portrait; margin: 10mm; }
    * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    body { margin: 0; padding: 0; font-family: serif; background: white; }
    table { border-collapse: collapse; }
  </style></head><body>${content}</body></html>`;
  const stale = document.getElementById("_receipt_print_iframe");
  if (stale) stale.remove();
  const iframe = document.createElement("iframe");
  iframe.id = "_receipt_print_iframe";
  iframe.style.cssText = "position:fixed;top:-9999px;left:-9999px;width:0;height:0;border:0;opacity:0";
  document.body.appendChild(iframe);
  const doc = iframe.contentDocument ?? ((_a = iframe.contentWindow) == null ? void 0 : _a.document);
  if (!doc) {
    document.body.removeChild(iframe);
    return;
  }
  function doPrint() {
    var _a2, _b;
    try {
      (_a2 = iframe.contentWindow) == null ? void 0 : _a2.focus();
      (_b = iframe.contentWindow) == null ? void 0 : _b.print();
    } catch {
    }
    if (iframe.contentWindow) {
      iframe.contentWindow.addEventListener(
        "afterprint",
        () => {
          if (document.body.contains(iframe)) document.body.removeChild(iframe);
        },
        { once: true }
      );
    }
    setTimeout(() => {
      if (document.body.contains(iframe)) document.body.removeChild(iframe);
    }, 3e4);
  }
  doc.open();
  doc.write(html);
  doc.close();
  iframe.onload = () => doPrint();
  setTimeout(() => {
    if (document.body.contains(iframe)) doPrint();
  }, 500);
}
function DownloadOptionsDialog({
  receiptNumber,
  onDownload,
  onClose
}) {
  const [withHeader, setWithHeader] = reactExports.useState(true);
  const [paperSize, setPaperSize] = reactExports.useState("A4");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4",
      "data-ocid": "download_options.dialog",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-2xl w-full max-w-sm p-6 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "w-4 h-4 text-teal-600" }),
              "Download Receipt"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: receiptNumber })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onClose,
              className: "text-muted-foreground hover:text-foreground",
              "data-ocid": "download_options.close_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Receipt Header" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setWithHeader(true),
                className: `h-20 rounded-xl border-2 text-sm font-semibold transition-all flex flex-col items-center justify-center gap-1 ${withHeader ? "border-teal-500 bg-teal-50 text-teal-700" : "border-border bg-background text-muted-foreground hover:border-teal-300"}`,
                "data-ocid": "download_options.with_header.toggle",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "🏥" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "With Header" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-normal opacity-70", children: "Clinic branding" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setWithHeader(false),
                className: `h-20 rounded-xl border-2 text-sm font-semibold transition-all flex flex-col items-center justify-center gap-1 ${!withHeader ? "border-teal-500 bg-teal-50 text-teal-700" : "border-border bg-background text-muted-foreground hover:border-teal-300"}`,
                "data-ocid": "download_options.without_header.toggle",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "📄" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Without Header" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-normal opacity-70", children: "Body only" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Paper Size" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["A4", "A5", "A3"].map((sz) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setPaperSize(sz),
              className: `flex-1 h-9 rounded-lg text-sm font-semibold border-2 transition-colors ${paperSize === sz ? "bg-teal-600 text-white border-teal-600" : "bg-background text-muted-foreground border-border hover:border-teal-400"}`,
              "data-ocid": `download_options.paper_${sz.toLowerCase()}.toggle`,
              children: sz
            },
            sz
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onClose,
              className: "flex-1 h-10 rounded-lg border border-border text-sm font-semibold text-muted-foreground hover:bg-muted/40 transition-colors",
              "data-ocid": "download_options.cancel_button",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => onDownload(withHeader, paperSize),
              className: "flex-2 flex-grow h-10 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold transition-colors flex items-center justify-center gap-2",
              "data-ocid": "download_options.confirm_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                "Download PDF"
              ]
            }
          )
        ] })
      ] })
    }
  );
}
function sendReceiptWhatsApp(r) {
  if (!r.phone) return;
  const phone = r.phone.replace(/\D/g, "");
  const e164 = phone.startsWith("0") ? `880${phone.slice(1)}` : phone;
  const total = r.finalAmount ?? r.amount ?? 0;
  const paid = r.amountPaid ?? total;
  const due = r.dueAmount ?? 0;
  const msg = [
    `Hello ${r.patientName ?? "Patient"},`,
    `Your receipt from Dr. Arman Kabir's Clinic:`,
    `Receipt No: ${r.receiptNumber ?? "N/A"}`,
    `Date: ${r.date ? new Date(r.date).toLocaleDateString("en-BD") : "N/A"}`,
    `Amount: ৳${total.toLocaleString("en-BD")}`,
    `Paid: ৳${paid.toLocaleString("en-BD")}`,
    ...due > 0 ? [`Balance Due: ৳${due.toLocaleString("en-BD")}`] : [],
    "For queries call: +8801751959262"
  ].join("\n");
  window.open(
    `https://wa.me/${e164}?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
}
const PM_LABELS = {
  cash: "Cash",
  bkash: "bKash",
  nagad: "Nagad",
  card: "Card"
};
function InvoiceStateBadge({ state }) {
  if (!state || state === "paid")
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-700 font-bold text-sm px-4 py-1 rounded-full border border-emerald-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
      "PAID / পরিশোধিত"
    ] });
  if (state === "invoice")
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 font-bold text-sm px-4 py-1 rounded-full border border-blue-300", children: "📄 INVOICE / চালান" });
  if (state === "partial")
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 font-bold text-sm px-4 py-1 rounded-full border border-amber-300", children: "⏳ PARTIAL / আংশিক" });
  if (state === "refunded")
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1.5 bg-rose-100 text-rose-700 font-bold text-sm px-4 py-1 rounded-full border border-rose-300", children: "↩ REFUNDED / ফেরত" });
  if (state === "partial_refunded")
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 font-bold text-sm px-4 py-1 rounded-full border border-orange-300", children: "↩ PARTIAL REFUND" });
  return null;
}
function RefundDialog({
  maxAmount,
  onConfirm,
  onCancel
}) {
  const [amount, setAmount] = reactExports.useState(maxAmount);
  const [reason, setReason] = reactExports.useState("cancellation");
  function handleConfirm() {
    if (amount <= 0 || amount > maxAmount) {
      ue.error(`Refund amount must be between ৳1 and ৳${maxAmount}`);
      return;
    }
    onConfirm({
      refundId: `ref-${Date.now()}`,
      amount,
      reason,
      date: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4",
      "data-ocid": "refund.dialog",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-2xl w-full max-w-sm p-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-4 h-4 text-rose-600" }),
            "Process Refund"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onCancel,
              className: "text-muted-foreground hover:text-foreground",
              "data-ocid": "refund.close_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-rose-50 border border-rose-200 rounded-lg p-3 text-sm text-rose-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 inline mr-1" }),
          "Maximum refundable:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            "৳",
            maxAmount.toLocaleString("en-BD")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Refund Amount (৳)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "number",
              min: 1,
              max: maxAmount,
              value: amount,
              onChange: (e) => setAmount(Number(e.target.value)),
              className: "text-lg font-bold",
              "data-ocid": "refund.amount_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Reason" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: reason,
              onValueChange: (v) => setReason(v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "refund.reason_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "wrong_charge", children: "Wrong charge" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cancellation", children: "Cancellation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "duplicate_payment", children: "Duplicate payment" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "other", children: "Other" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              onClick: onCancel,
              "data-ocid": "refund.cancel_button",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              className: "bg-rose-600 hover:bg-rose-700 text-white gap-1.5",
              onClick: handleConfirm,
              "data-ocid": "refund.confirm_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-4 h-4" }),
                "Confirm Refund"
              ]
            }
          )
        ] })
      ] })
    }
  );
}
function PaymentMethodSelector({
  value,
  onChange,
  ocidPrefix = "receipt"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Payment Method * / পেমেন্ট পদ্ধতি" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Select,
      {
        value: value ?? "",
        onValueChange: (v) => onChange(v),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "h-9",
              "data-ocid": `${ocidPrefix}.payment_method.select`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select method…" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cash", children: "💵 Cash" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "bkash", children: "📱 bKash" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "nagad", children: "📱 Nagad" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "card", children: "💳 Card" })
          ] })
        ]
      }
    )
  ] });
}
function PartialPaymentFields({
  total,
  amountPaid,
  onAmountPaidChange,
  isPartial,
  onIsPartialChange,
  ocidPrefix = "receipt"
}) {
  const due = Math.max(0, total - amountPaid);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 bg-muted/30 rounded-xl border border-border p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => onIsPartialChange(false),
          className: `flex-1 h-9 rounded-lg text-sm font-semibold border transition-colors ${!isPartial ? "bg-emerald-600 text-white border-emerald-600" : "bg-card text-muted-foreground border-border"}`,
          "data-ocid": `${ocidPrefix}.full_payment.toggle`,
          children: "✓ Full Payment"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => onIsPartialChange(true),
          className: `flex-1 h-9 rounded-lg text-sm font-semibold border transition-colors ${isPartial ? "bg-amber-500 text-white border-amber-500" : "bg-card text-muted-foreground border-border"}`,
          "data-ocid": `${ocidPrefix}.partial_payment.toggle`,
          children: "⏳ Partial Payment"
        }
      )
    ] }),
    isPartial && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Amount Paid (৳)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "number",
            min: 0,
            max: total,
            value: amountPaid || "",
            onChange: (e) => onAmountPaidChange(
              Math.min(total, Math.max(0, Number(e.target.value)))
            ),
            className: "font-bold",
            "data-ocid": `${ocidPrefix}.amount_paid.input`
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Balance Due (৳)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-9 flex items-center px-3 rounded-md border border-amber-300 bg-amber-50 font-bold text-amber-700 tabular-nums", children: [
          "৳",
          due.toLocaleString("en-BD")
        ] })
      ] })
    ] })
  ] });
}
function MoneyReceipt({
  initialData,
  onClose
}) {
  const [data, setData] = reactExports.useState(() => {
    const id = initialData.id || Date.now().toString(36) + Math.random().toString(36).slice(2);
    const receiptNumber = initialData.receiptNumber || generateTypedReceiptNumber("REC");
    return {
      ...initialData,
      id,
      receiptNumber,
      invoiceState: initialData.invoiceState ?? "paid"
    };
  });
  const printRef = reactExports.useRef(null);
  const [showRefund, setShowRefund] = reactExports.useState(false);
  const [showDownloadOptions, setShowDownloadOptions] = reactExports.useState(false);
  const [isPartial, setIsPartial] = reactExports.useState(
    (initialData.amountPaid ?? 0) > 0 && (initialData.amountPaid ?? 0) < (initialData.finalAmount ?? initialData.amount ?? 0)
  );
  const [amountPaid, setAmountPaid] = reactExports.useState(
    initialData.amountPaid ?? initialData.amount ?? 0
  );
  const totalAmount = data.finalAmount ?? data.amount ?? 0;
  function handleSave() {
    const finalPaid = !isPartial;
    const finalAmountPaid = isPartial ? amountPaid : totalAmount;
    const due = isPartial ? totalAmount - amountPaid : 0;
    const updated = {
      ...data,
      paid: finalPaid,
      amountPaid: finalAmountPaid,
      dueAmount: due,
      invoiceState: isPartial ? "partial" : "paid"
    };
    setData(updated);
    saveReceiptToStore(updated);
    ue.success(`Receipt ${updated.receiptNumber} saved`);
  }
  function handlePrint() {
    handleSave();
    window.print();
  }
  function handleDownloadPDF() {
    setShowDownloadOptions(true);
  }
  function handleRefund(refund) {
    const isFullRefund = refund.amount >= totalAmount;
    const updated = {
      ...data,
      paid: false,
      invoiceState: isFullRefund ? "refunded" : "partial_refunded",
      refund
    };
    setData(updated);
    saveReceiptToStore(updated);
    setShowRefund(false);
    ue.success(
      `Refund of ৳${refund.amount.toLocaleString("en-BD")} recorded`
    );
  }
  const isAppointment = data.type === "appointment";
  const titleEn = isAppointment ? "Appointment Receipt" : "Procedure Receipt";
  const titleBn = isAppointment ? "অ্যাপয়েন্টমেন্ট রসিদ" : "পদ্ধতি রসিদ";
  const serviceLabel = isAppointment ? "Service / সেবা" : "Procedure / পদ্ধতি";
  const formattedDate = new Date(data.date).toLocaleDateString("en-BD", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const isRefunded = data.invoiceState === "refunded" || data.invoiceState === "partial_refunded";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @media print {
          body > *:not(#receipt-print-root) { display: none !important; }
          #receipt-print-root { display: block !important; position: fixed; inset: 0; z-index: 9999; background: white; }
          .receipt-no-print { display: none !important; }
        }
      ` }),
    showRefund && /* @__PURE__ */ jsxRuntimeExports.jsx(
      RefundDialog,
      {
        maxAmount: isPartial ? amountPaid : totalAmount,
        onConfirm: handleRefund,
        onCancel: () => setShowRefund(false)
      }
    ),
    showDownloadOptions && /* @__PURE__ */ jsxRuntimeExports.jsx(
      DownloadOptionsDialog,
      {
        receiptNumber: data.receiptNumber,
        onClose: () => setShowDownloadOptions(false),
        onDownload: (withHeader, paperSize) => {
          setShowDownloadOptions(false);
          const headerHtml = `<div style="text-align:center;margin-bottom:24px;padding-bottom:16px;border-bottom:2px solid #1f2937">
              <div style="display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:6px">
                <div style="width:40px;height:40px;background:#1d4ed8;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:900;font-size:18px;flex-shrink:0">A</div>
                <div>
                  <div style="font-weight:900;font-size:20px;color:#111827">Dr. Arman Kabir's Care</div>
                  <div style="font-size:12px;color:#6b7280">Patient Management &amp; Clinical Portal</div>
                </div>
              </div>
              <div style="font-size:12px;color:#9ca3af">University Dental College &amp; Hospital, Moghbazar, Dhaka</div>
            </div>`;
          const el = printRef.current;
          const bodyHtml = el ? el.innerHTML : "";
          triggerReceiptPrint({
            bodyHtml,
            headerHtml,
            withHeader,
            paperSize,
            filename: `receipt-${data.receiptNumber}`
          });
          handleSave();
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "dialog",
      {
        open: true,
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 receipt-no-print border-0 max-w-none w-full h-full m-0",
        "aria-label": "Money Receipt",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] flex flex-col overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-3 border-b border-border receipt-no-print", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-foreground text-base", children: titleEn }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onClose,
                className: "text-muted-foreground hover:text-foreground p-1 rounded-md",
                "aria-label": "Close receipt",
                "data-ocid": "receipt.close_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-y-auto flex-1 p-5 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 receipt-no-print", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Amount (৳)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    min: "0",
                    value: data.amount || "",
                    onChange: (e) => setData((d) => ({ ...d, amount: Number(e.target.value) })),
                    className: "text-lg font-bold",
                    "data-ocid": "receipt.amount_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "receipt-no-print", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                PaymentMethodSelector,
                {
                  value: data.paymentMethod,
                  onChange: (v) => setData((d) => ({ ...d, paymentMethod: v }))
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "receipt-no-print", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              PartialPaymentFields,
              {
                total: totalAmount,
                amountPaid,
                onAmountPaidChange: setAmountPaid,
                isPartial,
                onIsPartialChange: setIsPartial
              }
            ) }),
            data.notes !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 receipt-no-print", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Notes (optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "Additional notes…",
                  value: data.notes || "",
                  onChange: (e) => setData((d) => ({ ...d, notes: e.target.value })),
                  "data-ocid": "receipt.notes_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "receipt-print-root", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                ref: printRef,
                className: "bg-white border-2 border-gray-200 rounded-xl p-8 relative overflow-hidden",
                style: { fontFamily: "serif", minWidth: 420 },
                children: [
                  data.paid && !isRefunded && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-emerald-200 font-black select-none",
                          style: {
                            fontSize: 100,
                            transform: "rotate(-35deg)",
                            opacity: 0.18,
                            letterSpacing: 4
                          },
                          children: "PAID"
                        }
                      )
                    }
                  ),
                  isRefunded && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-rose-300 font-black select-none",
                          style: {
                            fontSize: 80,
                            transform: "rotate(-35deg)",
                            opacity: 0.22
                          },
                          children: "REFUNDED"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6 border-b-2 border-gray-800 pb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-black text-lg", children: "A" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-black text-xl text-gray-900 tracking-tight", children: "Dr. Arman Kabir's Care" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600", children: "Patient Management & Clinical Portal" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "University Dental College & Hospital, Moghbazar, Dhaka" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-gray-800 uppercase tracking-widest", children: titleEn }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: titleBn })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-5 text-xs text-gray-600", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Receipt No: " }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-gray-800", children: data.receiptNumber })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Date: " }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formattedDate })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-6 gap-y-3 text-sm mb-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ReceiptField,
                      {
                        label: "Patient Name / রোগীর নাম",
                        value: data.patientName
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ReceiptField,
                      {
                        label: "Register No. / রেজিস্টার নং",
                        value: data.registerNumber || "—",
                        mono: true
                      }
                    ),
                    data.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(ReceiptField, { label: "Phone / ফোন", value: data.phone }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ReceiptField,
                      {
                        label: "Doctor / ডাক্তার",
                        value: data.doctorName || "—"
                      }
                    ),
                    isAppointment && data.serialNumber !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ReceiptField,
                      {
                        label: "Serial No.",
                        value: `#${data.serialNumber}`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ReceiptField, { label: serviceLabel, value: data.service }),
                    data.paymentMethod && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ReceiptField,
                      {
                        label: "Payment Method / পেমেন্ট",
                        value: PM_LABELS[data.paymentMethod]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-2 border-gray-800 rounded-lg p-4 mb-4", children: [
                    isPartial ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm text-gray-600", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Billed" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                          "৳",
                          totalAmount.toLocaleString("en-BD")
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm text-emerald-700", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Amount Paid" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", children: [
                          "৳",
                          amountPaid.toLocaleString("en-BD")
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm text-amber-700 border-t border-gray-300 pt-1 font-bold", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Balance Due" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          "৳",
                          Math.max(0, totalAmount - amountPaid).toLocaleString(
                            "en-BD"
                          )
                        ] })
                      ] })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase font-semibold text-gray-500 mb-1", children: "Total Amount / মোট পরিমাণ" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-black text-gray-900", children: [
                        "৳",
                        " ",
                        (data.amount ?? 0) > 0 ? (data.amount ?? 0).toLocaleString("en-BD") : "0"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      InvoiceStateBadge,
                      {
                        state: isPartial ? "partial" : isRefunded ? data.invoiceState ?? "paid" : "paid"
                      }
                    ) })
                  ] }),
                  data.refund && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-rose-50 border border-rose-200 rounded-lg p-3 mb-4 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-rose-700 mb-1", children: "Refund Details" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-600 space-y-0.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                        "Amount: ৳",
                        data.refund.amount.toLocaleString("en-BD")
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                        "Reason: ",
                        data.refund.reason.replace("_", " ")
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                        "Date:",
                        " ",
                        new Date(data.refund.date).toLocaleDateString("en-BD")
                      ] })
                    ] })
                  ] }),
                  data.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-600 italic mb-4 text-center", children: [
                    "Note: ",
                    data.notes
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-end mt-6 pt-4 border-t border-gray-300", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-gray-500 w-32 mb-1" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Patient Signature" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-gray-500 w-32 mb-1" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Authorized Signature" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-gray-400 mt-4", children: "Computer-generated receipt — Dr. Arman Kabir's Care" })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 px-5 py-3 border-t border-border receipt-no-print", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  onClick: onClose,
                  "data-ocid": "receipt.cancel_button",
                  children: "Close"
                }
              ),
              data.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  className: "gap-1.5 border-green-300 text-green-700 hover:bg-green-50",
                  onClick: () => sendReceiptWhatsApp(data),
                  "data-ocid": "receipt.whatsapp_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                    " WhatsApp"
                  ]
                }
              ),
              (data.paid || isPartial) && !isRefunded && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  className: "gap-1.5 border-rose-300 text-rose-700 hover:bg-rose-50",
                  onClick: () => setShowRefund(true),
                  "data-ocid": "receipt.refund_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-4 h-4" }),
                    "Refund"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  className: "gap-1.5 border-teal-300 text-teal-700 hover:bg-teal-50",
                  onClick: handleDownloadPDF,
                  disabled: false,
                  "data-ocid": "receipt.download_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "w-4 h-4" }),
                    "Download"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "gap-1.5 bg-primary hover:bg-primary/90",
                  onClick: handlePrint,
                  "data-ocid": "receipt.print_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-4 h-4" }),
                    "Print Receipt"
                  ]
                }
              )
            ] })
          ] })
        ] })
      }
    )
  ] });
}
function ReceiptField({
  label,
  value,
  mono
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mb-0.5", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-semibold text-gray-800 ${mono ? "font-mono" : ""}`, children: value })
  ] });
}
function ReceiptsHistoryList() {
  const [receipts, setReceipts] = reactExports.useState(
    () => loadReceipts()
  );
  const [viewing, setViewing] = reactExports.useState(null);
  function handleDelete(id) {
    const updated = receipts.filter((r) => r.id !== id);
    setReceipts(updated);
    localStorage.setItem(RECEIPTS_KEY, JSON.stringify(updated));
    ue.success("Receipt deleted");
  }
  if (receipts.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-16 text-muted-foreground gap-3",
        "data-ocid": "receipts.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-10 h-10 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "No receipts yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Generate a receipt from an appointment or procedure" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "receipts.list", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
      receipts.length,
      " receipt",
      receipts.length !== 1 ? "s" : "",
      " stored locally"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/50 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-semibold text-muted-foreground", children: "Receipt #" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-semibold text-muted-foreground", children: "Patient" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-semibold text-muted-foreground hidden sm:table-cell", children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-semibold text-muted-foreground", children: "Amount" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-semibold text-muted-foreground hidden sm:table-cell", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-semibold text-muted-foreground", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: receipts.map((r, idx) => {
        var _a;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "border-b border-border last:border-0 hover:bg-muted/20 transition-colors",
            "data-ocid": `receipts.item.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-primary font-semibold", children: r.receiptNumber }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 font-medium text-foreground", children: [
                r.patientName,
                r.registerNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono text-muted-foreground", children: r.registerNumber })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 hidden sm:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-xs font-semibold px-2 py-0.5 rounded-full ${r.type === "appointment" ? "bg-blue-100 text-blue-700" : r.type === "investigation" ? "bg-purple-100 text-purple-700" : r.type === "other" ? "bg-amber-100 text-amber-700" : "bg-teal-100 text-teal-700"}`,
                  children: r.type.charAt(0).toUpperCase() + r.type.slice(1)
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right font-bold text-foreground", children: [
                "৳",
                (r.finalAmount ?? r.amount ?? 0).toLocaleString("en-BD"),
                (r.dueAmount ?? 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-600 font-medium", children: [
                  "Due: ৳",
                  (_a = r.dueAmount) == null ? void 0 : _a.toLocaleString("en-BD")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 hidden sm:table-cell", children: r.invoiceState === "refunded" || r.invoiceState === "partial_refunded" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200", children: "Refunded" }) : r.invoiceState === "partial" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200", children: "Partial" }) : r.paid ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200", children: "Paid" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200", children: "Unpaid" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 px-2 text-xs gap-1 text-primary border-primary/30 hover:bg-primary/10",
                    onClick: () => setViewing(r),
                    "data-ocid": `receipts.view_button.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3 h-3" }),
                      "Reprint"
                    ]
                  }
                ),
                r.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => sendReceiptWhatsApp(r),
                    className: "h-7 w-7 flex items-center justify-center rounded border border-green-200 hover:bg-green-50 transition-colors",
                    title: "Send via WhatsApp",
                    "data-ocid": `receipts.whatsapp_button.${idx + 1}`,
                    style: { color: "#25D366" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "ghost",
                    className: "h-7 w-7 p-0 text-destructive hover:bg-destructive/10",
                    onClick: () => handleDelete(r.id),
                    "data-ocid": `receipts.delete_button.${idx + 1}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" })
                  }
                )
              ] }) })
            ]
          },
          r.id
        );
      }) })
    ] }) }),
    viewing && /* @__PURE__ */ jsxRuntimeExports.jsx(MoneyReceipt, { initialData: viewing, onClose: () => setViewing(null) })
  ] });
}
export {
  DownloadOptionsDialog as D,
  FileDown as F,
  InvoiceStateBadge as I,
  MoneyReceipt as M,
  PartialPaymentFields as P,
  RefundDialog as R,
  sendReceiptWhatsApp as a,
  ReceiptsHistoryList as b,
  PaymentMethodSelector as c,
  generateTypedReceiptNumber as g,
  loadReceipts as l,
  saveReceiptToStore as s,
  triggerReceiptPrint as t
};
