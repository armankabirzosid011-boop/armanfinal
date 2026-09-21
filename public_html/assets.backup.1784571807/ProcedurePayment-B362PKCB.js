import { r as reactExports, j as jsxRuntimeExports, o as Stethoscope, B as Button, I as Input, L as Label, b as CircleCheck, h as Badge, X, u as ue, _ as __vitePreload } from "./index-DJeWhCy-.js";
import { a as CreditCard, C as Checkbox } from "./checkbox-ByWwQWzS.js";
import { c as PaymentMethodSelector, P as PartialPaymentFields, l as loadReceipts, R as RefundDialog, a as sendReceiptWhatsApp, g as generateTypedReceiptNumber, I as InvoiceStateBadge, s as saveReceiptToStore } from "./MoneyReceipt-CSWlD73e.js";
import { R as Receipt } from "./receipt-DqXr-L3S.js";
import { F as FileText } from "./file-text-DJrK52te.js";
import { U as Upload } from "./upload-10Urw3kY.js";
import { T as Trash2 } from "./trash-2-B3l-ZhdV.js";
import { P as Plus } from "./plus-CHPIrJ6M.js";
import { S as Search } from "./search-BLymxia-.js";
import { P as Printer } from "./printer-BQUreT8L.js";
import { M as MessageCircle } from "./message-circle-qSON-RM2.js";
import { R as RotateCcw } from "./rotate-ccw-DEYXgLqp.js";
import { D as Download } from "./download-qc_8yQ5r.js";
const RATES_KEY = "procedureRates";
const PAYMENTS_KEY = "procedurePayments";
function loadProcedureRates() {
  try {
    return JSON.parse(localStorage.getItem(RATES_KEY) || "[]");
  } catch {
    return [];
  }
}
function saveProcedureRates(rates) {
  localStorage.setItem(RATES_KEY, JSON.stringify(rates));
}
function loadProcedureReceipts() {
  try {
    const all = JSON.parse(
      localStorage.getItem(PAYMENTS_KEY) || "[]"
    );
    return all;
  } catch {
    return [];
  }
}
function saveProcedureReceipt(r) {
  const all = loadProcedureReceipts();
  const idx = all.findIndex((x) => x.id === r.id);
  if (idx >= 0) all[idx] = r;
  else all.unshift(r);
  localStorage.setItem(PAYMENTS_KEY, JSON.stringify(all));
  saveReceiptToStore(r);
}
function ProcedureReceiptDoc({
  receipt,
  printRef
}) {
  const formattedDate = new Date(receipt.date).toLocaleDateString("en-BD", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const items = receipt.procedures ?? receipt.investigations ?? [];
  const subtotal = items.reduce((s, i) => s + i.amount, 0);
  const discountAmt = subtotal * ((receipt.discountRate ?? 0) / 100);
  const finalTotal = receipt.finalAmount ?? subtotal - discountAmt;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: printRef,
      className: "bg-white border-2 border-gray-200 rounded-xl p-8 relative overflow-hidden",
      style: { fontFamily: "serif", minWidth: 420 },
      children: [
        receipt.paid && /* @__PURE__ */ jsxRuntimeExports.jsx(
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6 border-b-2 border-gray-800 pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center text-white font-black text-lg", children: "A" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-black text-xl text-gray-900 tracking-tight", children: "Dr. Arman Kabir's Care" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600", children: "Patient Management & Clinical Portal" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "University Dental College & Hospital, Moghbazar, Dhaka" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-gray-800 uppercase tracking-widest", children: "Procedure Receipt" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "পদ্ধতি রসিদ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-5 text-xs text-gray-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Receipt No: " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-gray-800", children: receipt.receiptNumber })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Date: " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formattedDate })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-6 gap-y-2 text-sm mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mb-0.5", children: "Patient / রোগী" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-800", children: receipt.patientName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mb-0.5", children: "Register No." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold font-mono text-gray-800", children: receipt.registerNumber || "—" })
          ] }),
          receipt.doctorName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mb-0.5", children: "Doctor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-800", children: receipt.doctorName })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm mb-5 border border-gray-300 rounded", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 text-xs text-gray-600 font-semibold border-b border-gray-300", children: "Procedure" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-2 py-2 text-xs text-gray-600 font-semibold border-b border-gray-300", children: "Qty" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-3 py-2 text-xs text-gray-600 font-semibold border-b border-gray-300", children: "Rate (৳)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-3 py-2 text-xs text-gray-600 font-semibold border-b border-gray-300", children: "Amount (৳)" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "border-b border-gray-200 last:border-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-gray-800", children: item.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-2 text-center text-gray-700", children: item.qty }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-right text-gray-700", children: item.unitRate.toLocaleString("en-BD") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-right font-semibold text-gray-800", children: item.amount.toLocaleString("en-BD") })
              ]
            },
            `${item.name}-${i}`
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto w-56 space-y-1.5 mb-5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600", children: "Subtotal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
              "৳ ",
              subtotal.toLocaleString("en-BD")
            ] })
          ] }),
          (receipt.discountRate ?? 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-emerald-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Discount (",
              receipt.discountRate,
              "%)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "− ৳ ",
              discountAmt.toLocaleString("en-BD")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-gray-400 pt-1.5 font-bold text-base text-gray-900", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Final Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "৳ ",
              finalTotal.toLocaleString("en-BD")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          InvoiceStateBadge,
          {
            state: receipt.invoiceState ?? (receipt.paid ? "paid" : "invoice")
          }
        ) }),
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
  );
}
function ReceiptModal({
  receipt: initialReceipt,
  onClose
}) {
  const [receipt, setReceipt] = reactExports.useState(initialReceipt);
  const printRef = reactExports.useRef(null);
  const [saving, setSaving] = reactExports.useState(false);
  const [showRefund, setShowRefund] = reactExports.useState(false);
  const [isPartial, setIsPartial] = reactExports.useState(
    initialReceipt.invoiceState === "partial"
  );
  const [amountPaid, setAmountPaid] = reactExports.useState(
    initialReceipt.amountPaid ?? initialReceipt.finalAmount ?? initialReceipt.amount ?? 0
  );
  const totalAmount = receipt.finalAmount ?? receipt.amount ?? 0;
  const isInvoiceStep = receipt.invoiceState === "invoice";
  const isRefunded = receipt.invoiceState === "refunded" || receipt.invoiceState === "partial_refunded";
  function handleMarkPaid() {
    if (!receipt.paymentMethod) {
      ue.error("Please select a payment method");
      return;
    }
    const paid = !isPartial;
    const paidAmt = isPartial ? amountPaid : totalAmount;
    const dueAmt = isPartial ? totalAmount - amountPaid : 0;
    const updated = {
      ...receipt,
      paid,
      amountPaid: paidAmt,
      dueAmount: dueAmt,
      invoiceState: isPartial ? "partial" : "paid"
    };
    setReceipt(updated);
    saveProcedureReceipt(updated);
    ue.success(`Receipt saved — ${updated.receiptNumber}`);
  }
  function handleRefund(refund) {
    const isFullRefund = refund.amount >= totalAmount;
    const updated = {
      ...receipt,
      paid: false,
      invoiceState: isFullRefund ? "refunded" : "partial_refunded",
      refund
    };
    setReceipt(updated);
    saveProcedureReceipt(updated);
    setShowRefund(false);
    ue.success(
      `Refund of ৳${refund.amount.toLocaleString("en-BD")} recorded`
    );
  }
  function handleSave() {
    saveProcedureReceipt(receipt);
    ue.success(`Receipt ${receipt.receiptNumber} saved`);
  }
  function handlePrint() {
    handleSave();
    window.print();
  }
  async function handleDownload() {
    if (!printRef.current) return;
    setSaving(true);
    try {
      const html2canvas = (await __vitePreload(async () => {
        const { default: __vite_default__ } = await import("./html2canvas.esm-Dtsxr8dG.js");
        return { default: __vite_default__ };
      }, true ? [] : void 0)).default;
      const canvas = await html2canvas(printRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff"
      });
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `proc-receipt-${receipt.receiptNumber}.png`;
      link.click();
      handleSave();
      ue.success("Receipt downloaded");
    } catch {
      ue.error("Could not generate download. Use Print instead.");
    } finally {
      setSaving(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @media print {
          body > *:not(#proc-receipt-print-root) { display: none !important; }
          #proc-receipt-print-root { display: block !important; position: fixed; inset: 0; z-index: 9999; background: white; }
          .proc-receipt-no-print { display: none !important; }
        }
      ` }),
    showRefund && /* @__PURE__ */ jsxRuntimeExports.jsx(
      RefundDialog,
      {
        maxAmount: receipt.amountPaid ?? totalAmount,
        onConfirm: handleRefund,
        onCancel: () => setShowRefund(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "dialog",
      {
        open: true,
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 proc-receipt-no-print border-0 max-w-none w-full h-full m-0",
        "aria-label": "Procedure Receipt",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] flex flex-col overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-3 border-b border-border proc-receipt-no-print", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-foreground text-base flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "w-4 h-4 text-orange-600" }),
              isInvoiceStep ? "Invoice" : "Procedure Receipt"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onClose,
                className: "text-muted-foreground hover:text-foreground p-1 rounded-md",
                "data-ocid": "proc_receipt.close_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-y-auto flex-1 p-5 space-y-4", children: [
            isInvoiceStep && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 proc-receipt-no-print", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 border border-orange-200 rounded-lg p-3 text-sm text-orange-700", children: [
                "📄 Review invoice then select payment method and click",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Mark as Paid" }),
                "."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                PaymentMethodSelector,
                {
                  value: receipt.paymentMethod,
                  onChange: (v) => setReceipt((r) => ({ ...r, paymentMethod: v })),
                  ocidPrefix: "proc_receipt"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                PartialPaymentFields,
                {
                  total: totalAmount,
                  amountPaid,
                  onAmountPaidChange: setAmountPaid,
                  isPartial,
                  onIsPartialChange: setIsPartial,
                  ocidPrefix: "proc_receipt"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "w-full bg-orange-600 hover:bg-orange-700 text-white gap-2",
                  onClick: handleMarkPaid,
                  "data-ocid": "proc_receipt.mark_paid.button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
                    "Mark as Paid — Generate Receipt"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "proc-receipt-print-root", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              ProcedureReceiptDoc,
              {
                receipt,
                printRef
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 px-5 py-3 border-t border-border proc-receipt-no-print", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  onClick: onClose,
                  "data-ocid": "proc_receipt.cancel_button",
                  children: "Close"
                }
              ),
              receipt.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  className: "gap-1.5 border-green-300 text-green-700 hover:bg-green-50",
                  onClick: () => sendReceiptWhatsApp(receipt),
                  "data-ocid": "proc_receipt.whatsapp_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                    " WhatsApp"
                  ]
                }
              ),
              (receipt.paid || receipt.invoiceState === "partial") && !isRefunded && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  className: "gap-1.5 border-rose-300 text-rose-700 hover:bg-rose-50",
                  onClick: () => setShowRefund(true),
                  "data-ocid": "proc_receipt.refund_button",
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
                  className: "gap-1.5 border-blue-300 text-blue-700 hover:bg-blue-50",
                  onClick: handleDownload,
                  disabled: saving,
                  "data-ocid": "proc_receipt.download_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                    saving ? "Generating…" : "Download"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "gap-1.5 bg-orange-600 hover:bg-orange-700 text-white",
                  onClick: handlePrint,
                  "data-ocid": "proc_receipt.print_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-4 h-4" }),
                    "Print"
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
function RateManagementPanel({
  rates,
  onUpdate
}) {
  const [localRates, setLocalRates] = reactExports.useState(rates);
  const [newName, setNewName] = reactExports.useState("");
  const [newRate, setNewRate] = reactExports.useState(500);
  const fileRef = reactExports.useRef(null);
  function handleAdd() {
    if (!newName.trim()) {
      ue.error("Procedure name required");
      return;
    }
    const updated = [
      ...localRates,
      { id: Date.now().toString(36), name: newName.trim(), rate: newRate }
    ];
    setLocalRates(updated);
    saveProcedureRates(updated);
    onUpdate(updated);
    setNewName("");
    setNewRate(500);
    ue.success("Procedure added");
  }
  function handleRemove(id) {
    const updated = localRates.filter((r) => r.id !== id);
    setLocalRates(updated);
    saveProcedureRates(updated);
    onUpdate(updated);
  }
  function handleRateEdit(id, rate) {
    const updated = localRates.map((r) => r.id === id ? { ...r, rate } : r);
    setLocalRates(updated);
    saveProcedureRates(updated);
    onUpdate(updated);
  }
  function handleCSVUpload(e) {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      var _a2;
      const text = (_a2 = ev.target) == null ? void 0 : _a2.result;
      const lines = text.split(/\r?\n/).filter(Boolean);
      const newRates = [];
      for (const line of lines) {
        const parts = line.split(",").map((p) => p.trim().replace(/^"|"$/g, ""));
        if (parts.length < 2) continue;
        const name = parts[0];
        const rate = Number.parseFloat(parts[1]);
        if (!name || Number.isNaN(rate)) continue;
        newRates.push({
          id: Date.now().toString(36) + Math.random().toString(36).slice(2),
          name,
          rate
        });
      }
      const merged = [...localRates];
      for (const nr of newRates) {
        const exists = merged.findIndex(
          (r) => r.name.toLowerCase() === nr.name.toLowerCase()
        );
        if (exists >= 0) merged[exists].rate = nr.rate;
        else merged.push(nr);
      }
      setLocalRates(merged);
      saveProcedureRates(merged);
      onUpdate(merged);
      ue.success(`${newRates.length} procedures imported`);
    };
    reader.readAsText(file);
    e.target.value = "";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border shadow-sm overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 border-b border-orange-100 px-4 py-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold text-orange-800 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
        "Procedure Rate List (",
        localRates.length,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          variant: "outline",
          className: "h-7 px-2 text-xs gap-1 text-orange-700 border-orange-300 hover:bg-orange-50",
          onClick: () => {
            var _a;
            return (_a = fileRef.current) == null ? void 0 : _a.click();
          },
          "data-ocid": "proc_payment.upload_csv.button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-3 h-3" }),
            "Import CSV"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          ref: fileRef,
          type: "file",
          accept: ".csv,.txt",
          className: "hidden",
          onChange: handleCSVUpload
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border max-h-64 overflow-y-auto", children: localRates.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "text-center text-muted-foreground text-sm py-8",
        "data-ocid": "proc_payment.rates.empty_state",
        children: "No procedures yet. Add manually or import CSV."
      }
    ) : localRates.map((r, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-3 px-4 py-2.5",
        "data-ocid": `proc_payment.rate.item.${idx + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-sm text-foreground", children: r.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "number",
              min: 0,
              value: r.rate,
              onChange: (e) => handleRateEdit(r.id, Number(e.target.value)),
              className: "w-24 h-7 text-xs text-right",
              "data-ocid": `proc_payment.rate.input.${idx + 1}`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "৳" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => handleRemove(r.id),
              className: "text-destructive hover:bg-destructive/10 p-1 rounded",
              "data-ocid": `proc_payment.rate.delete.${idx + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
            }
          )
        ]
      },
      r.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border px-4 py-3 bg-muted/20 flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: newName,
          onChange: (e) => setNewName(e.target.value),
          placeholder: "Procedure name",
          className: "flex-1 h-8 text-sm",
          "data-ocid": "proc_payment.new_name.input"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          type: "number",
          min: 0,
          value: newRate,
          onChange: (e) => setNewRate(Number(e.target.value)),
          className: "w-28 h-8 text-sm",
          placeholder: "Rate ৳",
          "data-ocid": "proc_payment.new_rate.input"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          className: "h-8 px-3 bg-orange-600 hover:bg-orange-700 text-white gap-1",
          onClick: handleAdd,
          "data-ocid": "proc_payment.add_rate.button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
            "Add"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "px-4 py-2 text-xs text-muted-foreground bg-muted/10 border-t border-border", children: [
      "CSV format: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: "Procedure Name, Rate" }),
      " — one per line"
    ] })
  ] });
}
function NewPaymentView({
  rates,
  onReceiptGenerated
}) {
  const [patientName, setPatientName] = reactExports.useState("");
  const [registerNumber, setRegisterNumber] = reactExports.useState("");
  const [doctorName, setDoctorName] = reactExports.useState("");
  const [selected, setSelected] = reactExports.useState(
    () => Object.fromEntries(rates.map((r) => [r.id, { checked: false, qty: 1 }]))
  );
  const [discountRate, setDiscountRate] = reactExports.useState(0);
  const [finalOverride, setFinalOverride] = reactExports.useState("");
  const [paymentMethod, setPaymentMethod] = reactExports.useState(
    void 0
  );
  const [isPartial, setIsPartial] = reactExports.useState(false);
  const [amountPaid, setAmountPaid] = reactExports.useState(0);
  const [invoiceStep, setInvoiceStep] = reactExports.useState("form");
  const checkedRates = rates.filter((r) => {
    var _a;
    return (_a = selected[r.id]) == null ? void 0 : _a.checked;
  });
  const subtotal = checkedRates.reduce(
    (sum, r) => {
      var _a;
      return sum + r.rate * (((_a = selected[r.id]) == null ? void 0 : _a.qty) ?? 1);
    },
    0
  );
  const autoFinal = Math.round(subtotal * (1 - discountRate / 100));
  const finalAmount = finalOverride !== "" ? Number(finalOverride) : autoFinal;
  const effectiveDiscount = finalOverride !== "" && subtotal > 0 ? Math.round((1 - Number(finalOverride) / subtotal) * 1e4) / 100 : discountRate;
  function handleToggle(id) {
    setSelected((prev) => {
      var _a, _b;
      return {
        ...prev,
        [id]: {
          ...prev[id],
          checked: !((_a = prev[id]) == null ? void 0 : _a.checked),
          qty: ((_b = prev[id]) == null ? void 0 : _b.qty) ?? 1
        }
      };
    });
  }
  function handleQty(id, qty) {
    setSelected((prev) => ({ ...prev, [id]: { ...prev[id], qty } }));
  }
  function handleDiscountChange(val) {
    setDiscountRate(Math.min(100, Math.max(0, Number(val) || 0)));
    setFinalOverride("");
  }
  function handleFinalChange(val) {
    setFinalOverride(val);
    const num = Number(val);
    if (subtotal > 0 && !Number.isNaN(num))
      setDiscountRate(
        Math.max(
          0,
          Math.min(100, Math.round((1 - num / subtotal) * 1e4) / 100)
        )
      );
  }
  function handleGenerateInvoice() {
    if (!patientName.trim()) {
      ue.error("Patient name is required");
      return;
    }
    if (checkedRates.length === 0) {
      ue.error("Select at least one procedure");
      return;
    }
    setInvoiceStep("invoice");
  }
  function handleMarkPaid() {
    if (!paymentMethod) {
      ue.error("Please select a payment method");
      return;
    }
    const procedures = checkedRates.map((r) => {
      var _a;
      const qty = ((_a = selected[r.id]) == null ? void 0 : _a.qty) ?? 1;
      return { name: r.name, qty, unitRate: r.rate, amount: r.rate * qty };
    });
    const paid = !isPartial;
    const paidAmt = isPartial ? amountPaid : finalAmount;
    const dueAmt = isPartial ? finalAmount - amountPaid : 0;
    const receipt = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2),
      receiptNumber: generateTypedReceiptNumber("PRO"),
      type: "procedure",
      patientName: patientName.trim(),
      registerNumber,
      doctorName,
      service: procedures.map((p) => p.name).join(", "),
      amount: finalAmount,
      finalAmount,
      discountRate: effectiveDiscount,
      paid,
      amountPaid: paidAmt,
      dueAmount: dueAmt,
      invoiceState: isPartial ? "partial" : "paid",
      paymentMethod,
      date: (/* @__PURE__ */ new Date()).toISOString(),
      procedures
    };
    saveProcedureReceipt(receipt);
    ue.success(`Receipt ${receipt.receiptNumber} generated`);
    onReceiptGenerated(receipt);
  }
  if (rates.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-16 text-muted-foreground gap-3 text-center",
        "data-ocid": "proc_payment.no_rates.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-10 h-10 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "No procedure rates configured" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Add procedures to the rate list above first." })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Patient Name *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: patientName,
            onChange: (e) => setPatientName(e.target.value),
            placeholder: "Full name",
            "data-ocid": "proc_payment.patient_name.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Register No." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: registerNumber,
            onChange: (e) => setRegisterNumber(e.target.value),
            placeholder: "0001/26",
            "data-ocid": "proc_payment.register.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Doctor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: doctorName,
            onChange: (e) => setDoctorName(e.target.value),
            placeholder: "Doctor name",
            "data-ocid": "proc_payment.doctor.input"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 border-b border-orange-100 px-4 py-2.5 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-orange-800", children: "Select Procedures" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          checkedRates.length,
          " selected"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border max-h-72 overflow-y-auto", children: rates.map((rate, idx) => {
        const s = selected[rate.id] ?? { checked: false, qty: 1 };
        const lineAmt = s.checked ? rate.rate * (s.qty || 1) : null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex items-center gap-3 px-4 py-3 transition-colors ${s.checked ? "bg-orange-50" : "hover:bg-muted/20"}`,
            "data-ocid": `proc_payment.item.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Checkbox,
                {
                  id: `proc-${rate.id}`,
                  checked: s.checked,
                  onCheckedChange: () => handleToggle(rate.id),
                  "data-ocid": `proc_payment.checkbox.${idx + 1}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: `proc-${rate.id}`,
                  className: "flex-1 text-sm font-medium text-foreground cursor-pointer select-none",
                  children: rate.name
                }
              ),
              s.checked && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  min: 1,
                  value: s.qty,
                  onChange: (e) => handleQty(
                    rate.id,
                    Math.max(1, Number(e.target.value) || 1)
                  ),
                  className: "w-16 h-7 text-xs text-center",
                  "aria-label": "Quantity"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: `text-sm font-semibold tabular-nums ${s.checked ? "text-orange-700" : "text-muted-foreground"}`,
                  children: [
                    "৳",
                    " ",
                    s.checked && lineAmt != null ? lineAmt.toLocaleString("en-BD") : rate.rate.toLocaleString("en-BD")
                  ]
                }
              )
            ]
          },
          rate.id
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 rounded-xl border border-border p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Subtotal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
          "৳ ",
          subtotal.toLocaleString("en-BD")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Label,
          {
            htmlFor: "proc-discount",
            className: "text-sm whitespace-nowrap shrink-0",
            children: "Discount Rate (%)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "proc-discount",
            type: "number",
            min: 0,
            max: 100,
            step: 0.5,
            value: discountRate === 0 ? "" : discountRate,
            placeholder: "0",
            onChange: (e) => handleDiscountChange(e.target.value),
            className: "w-24 h-8 text-sm",
            "data-ocid": "proc_payment.discount_rate.input"
          }
        ),
        discountRate > 0 && subtotal > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-emerald-700 font-semibold", children: [
          "− ৳",
          " ",
          Math.round(subtotal * (discountRate / 100)).toLocaleString(
            "en-BD"
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Label,
          {
            htmlFor: "proc-final",
            className: "text-sm whitespace-nowrap shrink-0",
            children: "Final Rate (৳)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "proc-final",
            type: "number",
            min: 0,
            value: finalOverride !== "" ? finalOverride : autoFinal || "",
            placeholder: "0",
            onChange: (e) => handleFinalChange(e.target.value),
            className: "w-32 h-8 text-sm font-bold text-orange-700",
            "data-ocid": "proc_payment.final_rate.input"
          }
        ),
        finalOverride !== "" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "text-xs text-muted-foreground hover:text-foreground",
            onClick: () => {
              setFinalOverride("");
            },
            children: "↺ Reset"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border-2 border-orange-300 rounded-lg p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5 uppercase font-semibold tracking-wide", children: "Final Total / মোট" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-black text-orange-700 tabular-nums", children: [
          "৳",
          " ",
          (checkedRates.length > 0 ? finalAmount : 0).toLocaleString(
            "en-BD"
          )
        ] }),
        effectiveDiscount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-emerald-600 mt-1", children: [
          effectiveDiscount.toFixed(1),
          "% discount applied"
        ] })
      ] })
    ] }),
    invoiceStep === "invoice" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 bg-orange-50 border border-orange-200 rounded-xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-orange-900 text-sm", children: "📄 Invoice Preview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setInvoiceStep("form"),
            className: "text-orange-600 text-xs hover:underline",
            children: "← Edit"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto w-48 space-y-1 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600", children: "Subtotal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "৳",
            subtotal.toLocaleString("en-BD")
          ] })
        ] }),
        effectiveDiscount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-emerald-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Discount (",
            effectiveDiscount.toFixed(1),
            "%)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "−৳",
            (subtotal - finalAmount).toLocaleString("en-BD")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-orange-300 pt-1 font-bold text-orange-900 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Due" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "৳",
            finalAmount.toLocaleString("en-BD")
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PaymentMethodSelector,
        {
          value: paymentMethod,
          onChange: setPaymentMethod,
          ocidPrefix: "proc_payment"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PartialPaymentFields,
        {
          total: finalAmount,
          amountPaid,
          onAmountPaidChange: setAmountPaid,
          isPartial,
          onIsPartialChange: setIsPartial,
          ocidPrefix: "proc_payment"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          className: "w-full gap-2 bg-orange-600 hover:bg-orange-700 text-white",
          onClick: handleMarkPaid,
          "data-ocid": "proc_payment.mark_paid.button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
            "Mark as Paid — Generate Receipt"
          ]
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        className: "w-full gap-2 bg-orange-600 hover:bg-orange-700 text-white",
        disabled: checkedRates.length === 0 || !patientName.trim(),
        onClick: handleGenerateInvoice,
        "data-ocid": "proc_payment.generate_receipt.button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "w-4 h-4" }),
          "Generate Invoice →"
        ]
      }
    )
  ] });
}
function HistoryView() {
  const [search, setSearch] = reactExports.useState("");
  const [viewing, setViewing] = reactExports.useState(null);
  const receipts = loadProcedureReceipts();
  const moneyReceipts = loadReceipts().filter((r) => r.type === "procedure");
  const allReceipts = [
    ...receipts,
    ...moneyReceipts.filter((m) => !receipts.find((r) => r.id === m.id))
  ];
  const filtered = allReceipts.filter((r) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return r.patientName.toLowerCase().includes(q) || r.service.toLowerCase().includes(q) || r.receiptNumber.toLowerCase().includes(q);
  });
  if (allReceipts.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-16 text-muted-foreground gap-3 text-center",
        "data-ocid": "proc_payment.history.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-10 h-10 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "No procedure payments yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Generated receipts will appear here." })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "Search by patient or procedure…",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          className: "pl-9 h-9 text-sm",
          "data-ocid": "proc_payment.history.search_input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/50 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-semibold text-muted-foreground text-xs", children: "Receipt #" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-semibold text-muted-foreground text-xs", children: "Patient" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-semibold text-muted-foreground text-xs hidden sm:table-cell", children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-semibold text-muted-foreground text-xs", children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-semibold text-muted-foreground text-xs hidden sm:table-cell", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-semibold text-muted-foreground text-xs", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.map((r, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "border-b border-border last:border-0 hover:bg-muted/20 transition-colors",
          "data-ocid": `proc_payment.history.item.${idx + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-orange-700 font-semibold", children: r.receiptNumber }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium text-foreground text-sm", children: r.patientName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground hidden sm:table-cell", children: new Date(r.date).toLocaleDateString("en-BD", {
              year: "numeric",
              month: "short",
              day: "numeric"
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right font-bold text-foreground", children: [
              "৳ ",
              (r.finalAmount ?? r.amount).toLocaleString("en-BD")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 hidden sm:table-cell", children: r.paid ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-emerald-100 text-emerald-700 border-emerald-200 text-xs", children: "Paid" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-amber-100 text-amber-700 border-amber-200 text-xs", children: "Unpaid" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-7 px-2 text-xs gap-1 text-orange-700 border-orange-200 hover:bg-orange-50",
                onClick: () => setViewing(r),
                "data-ocid": `proc_payment.history.view_button.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3 h-3" }),
                  "View"
                ]
              }
            ) })
          ]
        },
        r.id
      )) })
    ] }) }),
    viewing && /* @__PURE__ */ jsxRuntimeExports.jsx(ReceiptModal, { receipt: viewing, onClose: () => setViewing(null) })
  ] });
}
function ProcedurePayment() {
  const [rates, setRates] = reactExports.useState(
    () => loadProcedureRates()
  );
  const [view, setView] = reactExports.useState("new");
  const [previewReceipt, setPreviewReceipt] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen bg-background",
      "data-ocid": "procedure_payment.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-orange-600 text-white px-4 sm:px-6 py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-orange-100 text-xs mb-0.5", children: "Billing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-black tracking-tight flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-6 h-6" }),
            "Procedure Payment"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-orange-100 text-sm mt-0.5", children: "পদ্ধতি পেমেন্ট ব্যবস্থাপনা" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RateManagementPanel, { rates, onUpdate: setRates }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border shadow-sm overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 bg-muted/40 p-1 border-b border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setView("new"),
                  className: `flex-1 h-9 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-1.5 ${view === "new" ? "bg-orange-600 text-white shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
                  "data-ocid": "proc_payment.new_payment.tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "w-3.5 h-3.5" }),
                    "New Payment"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setView("history"),
                  className: `flex-1 h-9 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-1.5 ${view === "history" ? "bg-orange-600 text-white shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
                  "data-ocid": "proc_payment.history.tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-3.5 h-3.5" }),
                    "Payment History"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
              view === "new" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                NewPaymentView,
                {
                  rates,
                  onReceiptGenerated: (r) => setPreviewReceipt(r)
                }
              ),
              view === "history" && /* @__PURE__ */ jsxRuntimeExports.jsx(HistoryView, {})
            ] })
          ] })
        ] }),
        previewReceipt && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReceiptModal,
          {
            receipt: previewReceipt,
            onClose: () => setPreviewReceipt(null)
          }
        )
      ]
    }
  );
}
export {
  ProcedurePayment as default
};
