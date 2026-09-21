import { r as reactExports, j as jsxRuntimeExports, B as Button, C as ChevronUp, a as ChevronDown, b as CircleCheck, c as Clock, L as Label, I as Input, S as Select, d as SelectTrigger, e as SelectValue, f as SelectContent, g as SelectItem, X, h as Badge, u as ue, _ as __vitePreload } from "./index-DJeWhCy-.js";
import { g as generateTypedReceiptNumber, s as saveReceiptToStore, R as RefundDialog, P as PartialPaymentFields, a as sendReceiptWhatsApp, I as InvoiceStateBadge } from "./MoneyReceipt-CSWlD73e.js";
import { B as Banknote } from "./banknote-BqiHnhGo.js";
import { S as Settings2 } from "./settings-2-Bp-4AVPw.js";
import { F as Funnel } from "./funnel-BTA0vRsb.js";
import { R as Receipt } from "./receipt-DqXr-L3S.js";
import { P as Pencil } from "./pencil-BZAaPpo6.js";
import { T as Trash2 } from "./trash-2-B3l-ZhdV.js";
import { M as MessageCircle } from "./message-circle-qSON-RM2.js";
import { R as RotateCcw } from "./rotate-ccw-DEYXgLqp.js";
import { D as Download } from "./download-qc_8yQ5r.js";
import { P as Printer } from "./printer-BQUreT8L.js";
const APT_PAYMENTS_KEY = "appointmentPayments";
const APT_RATES_KEY = "appointment_rates";
const APPOINTMENT_TYPES = [
  "New Patient",
  "Follow-up",
  "Urgent",
  "Emergency",
  "Teleconsult"
];
const PAYMENT_METHODS = [
  { label: "Cash", value: "cash" },
  { label: "bKash", value: "bkash" },
  { label: "Nagad", value: "nagad" },
  { label: "Card", value: "card" }
];
function loadPayments() {
  try {
    return JSON.parse(localStorage.getItem(APT_PAYMENTS_KEY) || "[]");
  } catch {
    return [];
  }
}
function savePayments(data) {
  localStorage.setItem(APT_PAYMENTS_KEY, JSON.stringify(data));
}
function loadRates() {
  try {
    return JSON.parse(localStorage.getItem(APT_RATES_KEY) || "[]");
  } catch {
    return [];
  }
}
function saveRates(data) {
  localStorage.setItem(APT_RATES_KEY, JSON.stringify(data));
}
function findRate(rates, doctor, apptType) {
  const match = rates.find(
    (r) => r.doctorName.toLowerCase() === doctor.toLowerCase() && r.appointmentType === apptType
  );
  return match ? match.fee : null;
}
const DEFAULT_PAYMENTS = [
  {
    id: "apt-001",
    patientName: "Rahima Begum",
    registerNumber: "0012/26",
    date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    doctor: "Dr. Arman Kabir",
    appointmentType: "New Patient",
    chamber: "University Dental College, Dhaka",
    fee: 800,
    paymentMethod: "cash",
    status: "paid"
  },
  {
    id: "apt-002",
    patientName: "Karim Uddin",
    registerNumber: "0021/26",
    date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    doctor: "Dr. Samia Shikder",
    appointmentType: "Follow-up",
    chamber: "Moghbazar Chamber",
    fee: 500,
    paymentMethod: "bkash",
    status: "unpaid"
  },
  {
    id: "apt-003",
    patientName: "Nasreen Akter",
    registerNumber: "0035/26",
    date: new Date(Date.now() - 864e5).toISOString().split("T")[0],
    doctor: "Dr. Arman Kabir",
    appointmentType: "Urgent",
    chamber: "University Dental College, Dhaka",
    fee: 1e3,
    paymentMethod: "nagad",
    status: "partial",
    partialAmount: 500
  }
];
function AppointmentReceiptDoc({
  receipt,
  printRef
}) {
  var _a;
  const formatted = new Date(receipt.date).toLocaleDateString("en-BD", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
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
                  opacity: 0.18
                },
                children: "PAID"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6 border-b-2 border-gray-800 pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-white font-black text-lg", children: "A" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-black text-xl text-gray-900", children: "Dr. Arman Kabir's Care" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600", children: "Patient Management & Clinical Portal" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "University Dental College & Hospital, Moghbazar, Dhaka" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-gray-800 uppercase tracking-widest", children: "Appointment Receipt" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "অ্যাপয়েন্টমেন্ট রসিদ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-gray-600 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Receipt No: " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: receipt.receiptNumber })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Date: " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatted })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-6 gap-y-3 text-sm mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mb-0.5", children: "Patient / রোগী" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-800", children: receipt.patientName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mb-0.5", children: "Register No." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold font-mono text-gray-800", children: receipt.registerNumber || "—" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mb-0.5", children: "Doctor / ডাক্তার" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-800", children: receipt.doctorName || "—" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mb-0.5", children: "Type / ধরন" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-800", children: receipt.appointmentType ?? receipt.service })
          ] }),
          receipt.paymentMethod && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mb-0.5", children: "Payment / পেমেন্ট" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-800", children: ((_a = PAYMENT_METHODS.find((m) => m.value === receipt.paymentMethod)) == null ? void 0 : _a.label) ?? receipt.paymentMethod })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-2 border-gray-800 rounded-lg p-4 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase font-semibold text-gray-500 mb-2 text-center", children: "Consultation Fee / পরামর্শ ফি" }),
          receipt.invoiceState === "partial" && receipt.dueAmount != null ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600", children: "Total Billed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                "৳",
                receipt.amount.toLocaleString("en-BD")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-emerald-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Amount Paid" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", children: [
                "৳",
                (receipt.amountPaid ?? 0).toLocaleString("en-BD")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-amber-700 font-bold border-t border-gray-300 pt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Balance Due" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "৳",
                receipt.dueAmount.toLocaleString("en-BD")
              ] })
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-black text-gray-900 text-center", children: [
            "৳ ",
            receipt.amount.toLocaleString("en-BD")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceStateBadge, { state: receipt.invoiceState }) })
        ] }),
        receipt.refund && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-rose-50 border border-rose-200 rounded p-2 mb-4 text-xs text-rose-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold", children: [
            "Refund: ৳",
            receipt.refund.amount.toLocaleString("en-BD")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Reason: ",
            receipt.refund.reason.replace("_", " ")
          ] })
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
  );
}
function ReceiptModal({
  receipt: initial,
  onClose
}) {
  const [receipt, setReceipt] = reactExports.useState(initial);
  const printRef = reactExports.useRef(null);
  const [saving, setSaving] = reactExports.useState(false);
  const [showRefund, setShowRefund] = reactExports.useState(false);
  const [isPartial, setIsPartial] = reactExports.useState(
    initial.invoiceState === "partial"
  );
  const [amountPaid, setAmountPaid] = reactExports.useState(
    initial.amountPaid ?? initial.amount ?? 0
  );
  const totalAmount = receipt.finalAmount ?? receipt.amount ?? 0;
  const isInvoiceStep = receipt.invoiceState === "invoice";
  const isRefunded = receipt.invoiceState === "refunded" || receipt.invoiceState === "partial_refunded";
  function handleMarkPaid() {
    if (!receipt.paymentMethod) {
      ue.error("Payment method required");
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
    saveReceiptToStore(updated);
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
    saveReceiptToStore(updated);
    setShowRefund(false);
    ue.success(
      `Refund of ৳${refund.amount.toLocaleString("en-BD")} recorded`
    );
  }
  function handlePrint() {
    var _a, _b;
    saveReceiptToStore(receipt);
    const formatted = new Date(receipt.date).toLocaleDateString("en-BD", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    const pmLabel = ((_a = PAYMENT_METHODS.find((m) => m.value === receipt.paymentMethod)) == null ? void 0 : _a.label) ?? receipt.paymentMethod ?? "—";
    const headerHtml = `<div style="text-align:center;margin-bottom:20px;padding-bottom:12px;border-bottom:2px solid #1f2937">
      <div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:4px">
        <div style="width:36px;height:36px;background:#15803d;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:900;font-size:16px;flex-shrink:0">A</div>
        <div>
          <div style="font-weight:900;font-size:18px;color:#111827">Dr. Arman Kabir's Care</div>
          <div style="font-size:11px;color:#6b7280">Patient Management &amp; Clinical Portal</div>
        </div>
      </div>
      <div style="font-size:11px;color:#9ca3af">University Dental College &amp; Hospital, Moghbazar, Dhaka</div>
    </div>`;
    const bodyHtml = `<div style="font-family:serif;color:#111827;max-width:480px;margin:0 auto">
      <div style="text-align:center;margin-bottom:16px">
        <h2 style="font-size:16px;font-weight:800;text-transform:uppercase;letter-spacing:2px;margin:0">Appointment Receipt</h2>
        <p style="font-size:12px;color:#6b7280;margin:4px 0 0">অ্যাপয়েন্টমেন্ট রসিদ</p>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:11px;color:#4b5563;margin-bottom:14px">
        <div><strong>Receipt No:</strong> <span style="font-family:monospace">${receipt.receiptNumber}</span></div>
        <div><strong>Date:</strong> ${formatted}</div>
      </div>
      <table style="width:100%;font-size:12px;margin-bottom:14px">
        <tr><td style="color:#6b7280;padding-bottom:6px;width:40%">Patient / রোগী</td><td style="font-weight:700;padding-bottom:6px">${receipt.patientName}</td></tr>
        <tr><td style="color:#6b7280;padding-bottom:6px">Register No.</td><td style="font-weight:700;font-family:monospace;padding-bottom:6px">${receipt.registerNumber || "—"}</td></tr>
        <tr><td style="color:#6b7280;padding-bottom:6px">Doctor / ডাক্তার</td><td style="font-weight:700;padding-bottom:6px">${receipt.doctorName || "—"}</td></tr>
        <tr><td style="color:#6b7280;padding-bottom:6px">Type / ধরন</td><td style="font-weight:700;padding-bottom:6px">${receipt.appointmentType ?? receipt.service ?? "—"}</td></tr>
        <tr><td style="color:#6b7280;padding-bottom:6px">Payment / পেমেন্ট</td><td style="font-weight:700;padding-bottom:6px">${pmLabel}</td></tr>
      </table>
      <div style="border:2px solid #1f2937;border-radius:8px;padding:14px;margin-bottom:14px;text-align:center">
        <p style="font-size:10px;text-transform:uppercase;font-weight:700;color:#6b7280;margin:0 0 6px">Consultation Fee / পরামর্শ ফি</p>
        <p style="font-size:28px;font-weight:900;margin:0">৳ ${receipt.amount.toLocaleString("en-BD")}</p>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-top:18px;padding-top:12px;border-top:1px solid #d1d5db">
        <div style="text-align:center">
          <div style="border-bottom:1px solid #6b7280;width:120px;margin-bottom:4px"></div>
          <p style="font-size:10px;color:#6b7280;margin:0">Patient Signature</p>
        </div>
        <div style="text-align:center">
          <div style="border-bottom:1px solid #6b7280;width:120px;margin-bottom:4px"></div>
          <p style="font-size:10px;color:#6b7280;margin:0">Authorized Signature</p>
        </div>
      </div>
      <p style="text-align:center;font-size:10px;color:#9ca3af;margin-top:14px">Computer-generated receipt — Dr. Arman Kabir's Care</p>
    </div>`;
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Receipt ${receipt.receiptNumber}</title><style>
      @page { size: A5 portrait; margin: 8mm; }
      * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      body { margin: 0; padding: 0; font-family: serif; background: white; }
    </style></head><body>${headerHtml}${bodyHtml}</body></html>`;
    const stale = document.getElementById("_apt_receipt_print_iframe");
    if (stale) stale.remove();
    const iframe = document.createElement("iframe");
    iframe.id = "_apt_receipt_print_iframe";
    iframe.style.cssText = "position:fixed;top:-9999px;left:-9999px;width:0;height:0;border:0;opacity:0";
    document.body.appendChild(iframe);
    const doc = iframe.contentDocument ?? ((_b = iframe.contentWindow) == null ? void 0 : _b.document);
    if (!doc) {
      document.body.removeChild(iframe);
      return;
    }
    function doPrint() {
      var _a2, _b2;
      try {
        (_a2 = iframe.contentWindow) == null ? void 0 : _a2.focus();
        (_b2 = iframe.contentWindow) == null ? void 0 : _b2.print();
      } catch {
      }
      if (iframe.contentWindow) {
        iframe.contentWindow.addEventListener(
          "afterprint",
          () => {
            if (document.body.contains(iframe))
              document.body.removeChild(iframe);
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
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `apt-receipt-${receipt.receiptNumber}.png`;
      link.click();
      saveReceiptToStore(receipt);
      ue.success("Receipt downloaded");
    } catch {
      ue.error("Could not generate download. Use Print instead.");
    } finally {
      setSaving(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: "@media print { body > *:not(#apt-receipt-root){display:none!important} #apt-receipt-root{display:block!important;position:fixed;inset:0;z-index:9999;background:white} .apt-no-print{display:none!important} }" }),
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
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 apt-no-print border-0 max-w-none w-full h-full m-0",
        "aria-label": "Appointment Receipt",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] flex flex-col overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-3 border-b border-border apt-no-print", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-foreground text-base flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "w-4 h-4 text-green-600" }),
              isInvoiceStep ? "Invoice — Pending Payment" : "Appointment Receipt"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onClose,
                className: "text-muted-foreground hover:text-foreground p-1 rounded-md",
                "data-ocid": "apt_receipt.close_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-y-auto flex-1 p-5 space-y-4", children: [
            isInvoiceStep && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 apt-no-print", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-700", children: [
                "📄 Review invoice then select payment method and click",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Mark as Paid" }),
                "."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                PartialPaymentFields,
                {
                  total: totalAmount,
                  amountPaid,
                  onAmountPaidChange: setAmountPaid,
                  isPartial,
                  onIsPartialChange: setIsPartial,
                  ocidPrefix: "apt_receipt"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "w-full bg-green-600 hover:bg-green-700 text-white gap-2",
                  onClick: handleMarkPaid,
                  "data-ocid": "apt_receipt.mark_paid.button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
                    "Mark as Paid — Generate Receipt"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "apt-receipt-root", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppointmentReceiptDoc, { receipt, printRef }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 px-5 py-3 border-t border-border apt-no-print", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  onClick: onClose,
                  "data-ocid": "apt_receipt.cancel_button",
                  children: "Close"
                }
              ),
              receipt.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  className: "gap-1.5 border-green-300 text-green-700 hover:bg-green-50",
                  onClick: () => sendReceiptWhatsApp(receipt),
                  "data-ocid": "apt_receipt.whatsapp_button",
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
                  "data-ocid": "apt_receipt.refund_button",
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
                  "data-ocid": "apt_receipt.download_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                    saving ? "Generating…" : "Download"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "gap-1.5 bg-green-600 hover:bg-green-700 text-white",
                  onClick: handlePrint,
                  "data-ocid": "apt_receipt.print_button",
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
function FeeSettingsPanel({
  rates,
  onChange
}) {
  const [newDoctor, setNewDoctor] = reactExports.useState("");
  const [newType, setNewType] = reactExports.useState("New Patient");
  const [newFee, setNewFee] = reactExports.useState("");
  const [editId, setEditId] = reactExports.useState(null);
  const [editFee, setEditFee] = reactExports.useState("");
  function addRate() {
    if (!newDoctor.trim() || !newFee) {
      ue.error("Doctor name and fee required");
      return;
    }
    const duplicate = rates.find(
      (r) => r.doctorName.toLowerCase() === newDoctor.trim().toLowerCase() && r.appointmentType === newType
    );
    if (duplicate) {
      ue.error(
        `Rate for ${newDoctor} – ${newType} already exists. Delete it first.`
      );
      return;
    }
    const updated = [
      ...rates,
      {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2),
        doctorName: newDoctor.trim(),
        appointmentType: newType,
        fee: Number(newFee)
      }
    ];
    onChange(updated);
    saveRates(updated);
    setNewDoctor("");
    setNewFee("");
    ue.success("Fee rate added");
  }
  function deleteRate(id) {
    const updated = rates.filter((r) => r.id !== id);
    onChange(updated);
    saveRates(updated);
  }
  function saveEdit(id) {
    const updated = rates.map(
      (r) => r.id === id ? { ...r, fee: Number(editFee) } : r
    );
    onChange(updated);
    saveRates(updated);
    setEditId(null);
    ue.success("Fee updated");
  }
  const byDoctor = rates.reduce((acc, r) => {
    if (!acc[r.doctorName]) acc[r.doctorName] = [];
    acc[r.doctorName].push(r);
    return acc;
  }, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-green-50 border border-green-200 rounded-xl p-4 space-y-4",
      "data-ocid": "apt_payment.fee_settings.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-green-900 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "w-4 h-4" }),
          " Appointment Fee Settings",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal text-green-700", children: "— per Doctor per Appointment Type" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Doctor name",
              value: newDoctor,
              onChange: (e) => setNewDoctor(e.target.value),
              className: "h-8 text-sm",
              "data-ocid": "apt_payment.fee_doctor.input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: newType,
              onValueChange: (v) => setNewType(v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "h-8 text-sm",
                    "data-ocid": "apt_payment.fee_type.select",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: APPOINTMENT_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "number",
                placeholder: "Fee (৳)",
                value: newFee,
                onChange: (e) => setNewFee(e.target.value),
                className: "flex-1 h-8 text-sm",
                "data-ocid": "apt_payment.fee_amount.input"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                className: "h-8 bg-green-600 hover:bg-green-700 text-white px-3 shrink-0",
                onClick: addRate,
                "data-ocid": "apt_payment.add_fee.button",
                children: "Add"
              }
            )
          ] })
        ] }),
        Object.keys(byDoctor).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-green-200 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-green-100 border-b border-green-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 font-semibold text-green-800", children: "Doctor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 font-semibold text-green-800", children: "Appointment Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-3 py-2 font-semibold text-green-800", children: "Fee (৳)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-3 py-2 font-semibold text-green-800", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: Object.entries(byDoctor).flatMap(
            ([doctor, doctorRates], di) => doctorRates.map((r, ri) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-b border-green-100 last:border-0 bg-card hover:bg-green-50/50",
                "data-ocid": `apt_payment.fee_item.${di * 10 + ri + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-medium text-foreground", children: ri === 0 ? doctor : "" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-muted-foreground", children: r.appointmentType }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-right", children: editId === r.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 justify-end", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        type: "number",
                        value: editFee,
                        onChange: (e) => setEditFee(e.target.value),
                        className: "w-20 h-6 text-xs",
                        autoFocus: true
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        className: "text-green-700 font-semibold text-xs hover:underline",
                        onClick: () => saveEdit(r.id),
                        children: "Save"
                      }
                    )
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-green-700", children: [
                    "৳ ",
                    r.fee.toLocaleString("en-BD")
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          setEditId(r.id);
                          setEditFee(String(r.fee));
                        },
                        className: "text-muted-foreground hover:text-foreground p-0.5",
                        "aria-label": "Edit fee",
                        "data-ocid": `apt_payment.fee_edit.${di * 10 + ri + 1}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-3 h-3" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => deleteRate(r.id),
                        className: "text-destructive hover:bg-destructive/10 p-0.5 rounded",
                        "aria-label": "Delete fee",
                        "data-ocid": `apt_payment.fee_delete.${di * 10 + ri + 1}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" })
                      }
                    )
                  ] }) })
                ]
              },
              r.id
            ))
          ) })
        ] }) }),
        rates.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center py-2", children: "No fee rates yet. Add one above." })
      ]
    }
  );
}
function AppointmentPayment() {
  var _a;
  const [payments, setPayments] = reactExports.useState(() => {
    const saved = loadPayments();
    if (saved.length === 0) {
      savePayments(DEFAULT_PAYMENTS);
      return DEFAULT_PAYMENTS;
    }
    return saved;
  });
  const [rates, setRates] = reactExports.useState(() => loadRates());
  const [showFeePanel, setShowFeePanel] = reactExports.useState(false);
  const [filterDate, setFilterDate] = reactExports.useState("");
  const [filterDoctor, setFilterDoctor] = reactExports.useState("all");
  const [filterStatus, setFilterStatus] = reactExports.useState("all");
  const [viewingReceipt, setViewingReceipt] = reactExports.useState(
    null
  );
  const [showAddForm, setShowAddForm] = reactExports.useState(false);
  const [newPatient, setNewPatient] = reactExports.useState("");
  const [newRegNo, setNewRegNo] = reactExports.useState("");
  const [newDoctor, setNewDoctor] = reactExports.useState("");
  const [newChamber, setNewChamber] = reactExports.useState("");
  const [newApptType, setNewApptType] = reactExports.useState("New Patient");
  const [newFeeAmt, setNewFeeAmt] = reactExports.useState("");
  const [newPayMethod, setNewPayMethod] = reactExports.useState("cash");
  const [newDate, setNewDate] = reactExports.useState(
    (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  );
  function autoFillFee(doctor, apptType) {
    const found = findRate(rates, doctor, apptType);
    if (found !== null) setNewFeeAmt(String(found));
  }
  function getStatusBadge(status) {
    if (status === "paid")
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-emerald-100 text-emerald-700 border-emerald-200 text-xs", children: "Paid" });
    if (status === "partial")
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-blue-100 text-blue-700 border-blue-200 text-xs", children: "Partial" });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-amber-100 text-amber-700 border-amber-200 text-xs", children: "Unpaid" });
  }
  function handleGenerateReceipt(apt) {
    const receipt = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2),
      receiptNumber: generateTypedReceiptNumber("APT"),
      type: "appointment",
      patientName: apt.patientName,
      registerNumber: apt.registerNumber,
      doctorName: apt.doctor,
      service: apt.appointmentType,
      amount: apt.fee,
      finalAmount: apt.fee,
      paid: apt.status === "paid",
      invoiceState: apt.status === "paid" ? "paid" : "invoice",
      date: new Date(apt.date).toISOString(),
      paymentMethod: apt.paymentMethod,
      appointmentType: apt.appointmentType
    };
    saveReceiptToStore(receipt);
    setViewingReceipt(receipt);
  }
  function addPaymentEntry() {
    if (!newPatient.trim() || !newDoctor.trim() || !newFeeAmt) {
      ue.error("Patient name, doctor, and fee are required.");
      return;
    }
    const autoFee = findRate(rates, newDoctor, newApptType);
    const entry = {
      id: `apt-${Date.now()}`,
      patientName: newPatient.trim(),
      registerNumber: newRegNo.trim(),
      date: newDate,
      doctor: newDoctor.trim(),
      appointmentType: newApptType,
      chamber: newChamber.trim() || "—",
      fee: autoFee !== null ? autoFee : Number(newFeeAmt),
      paymentMethod: newPayMethod,
      status: "unpaid"
    };
    const updated = [entry, ...payments];
    savePayments(updated);
    setPayments(updated);
    setShowAddForm(false);
    setNewPatient("");
    setNewRegNo("");
    setNewDoctor("");
    setNewChamber("");
    setNewFeeAmt("");
    ue.success("Appointment entry added");
  }
  const doctors = [...new Set(payments.map((p) => p.doctor))];
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const filtered = payments.filter((p) => {
    if (filterDate && !p.date.startsWith(filterDate)) return false;
    if (filterDoctor !== "all" && p.doctor !== filterDoctor) return false;
    if (filterStatus !== "all" && p.status !== filterStatus) return false;
    return true;
  });
  const todayPayments = payments.filter((p) => p.date.startsWith(today));
  const totalToday = todayPayments.filter((p) => p.status === "paid").reduce((s, p) => s + p.fee, 0);
  const pendingToday = todayPayments.filter((p) => p.status !== "paid").reduce((s, p) => s + p.fee, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-50 border-b border-green-200 px-4 md:px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600 font-medium mb-0.5", children: "Payment / পেমেন্ট" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-xl font-bold text-green-900 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "w-5 h-5 text-green-600" }),
          " Appointment Payment"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            className: "gap-1.5 border-green-300 text-green-700 hover:bg-green-100 text-sm h-8",
            onClick: () => setShowFeePanel((v) => !v),
            "data-ocid": "apt_payment.fee_settings.toggle",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "w-3.5 h-3.5" }),
              " Fee Settings",
              showFeePanel ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "bg-green-600 hover:bg-green-700 text-white gap-1.5 text-sm h-8",
            onClick: () => setShowAddForm((v) => !v),
            "data-ocid": "apt_payment.add_entry.button",
            children: "+ Add Entry"
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 md:px-6 py-5 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-green-200 p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-1 flex items-center justify-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-green-600" }),
            " Collected Today"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-green-600", children: [
            "৳ ",
            totalToday.toLocaleString("en-BD")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-amber-200 p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-1 flex items-center justify-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-amber-500" }),
            " Pending Today"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-amber-500", children: [
            "৳ ",
            pendingToday.toLocaleString("en-BD")
          ] })
        ] })
      ] }),
      showFeePanel && /* @__PURE__ */ jsxRuntimeExports.jsx(FeeSettingsPanel, { rates, onChange: setRates }),
      showAddForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-green-200 p-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "New Appointment Entry" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Patient Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Patient name",
                value: newPatient,
                onChange: (e) => setNewPatient(e.target.value),
                className: "h-8 text-sm",
                "data-ocid": "apt_payment.new_patient.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Register No." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "0001/26",
                value: newRegNo,
                onChange: (e) => setNewRegNo(e.target.value),
                className: "h-8 text-sm font-mono",
                "data-ocid": "apt_payment.new_regno.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Doctor *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Dr. name",
                value: newDoctor,
                onChange: (e) => {
                  setNewDoctor(e.target.value);
                  autoFillFee(e.target.value, newApptType);
                },
                className: "h-8 text-sm",
                "data-ocid": "apt_payment.new_doctor.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Appointment Type *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: newApptType,
                onValueChange: (v) => {
                  const t = v;
                  setNewApptType(t);
                  autoFillFee(newDoctor, t);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "h-8 text-sm",
                      "data-ocid": "apt_payment.new_type.select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: APPOINTMENT_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Chamber" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Chamber or Hospital",
                value: newChamber,
                onChange: (e) => setNewChamber(e.target.value),
                className: "h-8 text-sm",
                "data-ocid": "apt_payment.new_chamber.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Fee (৳) *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "number",
                placeholder: "Auto-fill from rate list",
                value: newFeeAmt,
                onChange: (e) => setNewFeeAmt(e.target.value),
                className: "h-8 text-sm",
                "data-ocid": "apt_payment.new_fee.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Payment Method" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: newPayMethod,
                onValueChange: (v) => setNewPayMethod(v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "h-8 text-sm",
                      "data-ocid": "apt_payment.new_method.select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: PAYMENT_METHODS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: m.value, children: m.label }, m.value)) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "date",
                value: newDate,
                onChange: (e) => setNewDate(e.target.value),
                className: "h-8 text-sm",
                "data-ocid": "apt_payment.new_date.input"
              }
            )
          ] })
        ] }),
        newDoctor && newApptType && findRate(rates, newDoctor, newApptType) !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-green-700 flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
          "Fee auto-filled from rate list: ৳",
          " ",
          (_a = findRate(rates, newDoctor, newApptType)) == null ? void 0 : _a.toLocaleString(
            "en-BD"
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => setShowAddForm(false),
              "data-ocid": "apt_payment.add_entry_cancel.button",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              className: "bg-green-600 hover:bg-green-700 text-white",
              onClick: addPaymentEntry,
              "data-ocid": "apt_payment.add_entry_save.button",
              children: "Save Entry"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-xl border border-border p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-3.5 h-3.5 text-muted-foreground shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "date",
            value: filterDate,
            onChange: (e) => setFilterDate(e.target.value),
            className: "h-8 text-sm w-36",
            "data-ocid": "apt_payment.filter_date.input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterDoctor, onValueChange: setFilterDoctor, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "h-8 text-sm w-48",
              "data-ocid": "apt_payment.filter_doctor.select",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All Doctors" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Doctors" }),
            doctors.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: d, children: d }, d))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterStatus, onValueChange: setFilterStatus, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "h-8 text-sm w-36",
              "data-ocid": "apt_payment.filter_status.select",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All Status" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "paid", children: "Paid" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "unpaid", children: "Unpaid" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "partial", children: "Partial" })
          ] })
        ] }),
        (filterDate || filterDoctor !== "all" || filterStatus !== "all") && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-8 text-xs text-muted-foreground gap-1",
            onClick: () => {
              setFilterDate("");
              setFilterDoctor("all");
              setFilterStatus("all");
            },
            "data-ocid": "apt_payment.clear_filters.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }),
              " Clear"
            ]
          }
        )
      ] }) }),
      filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col items-center justify-center py-16 text-muted-foreground gap-3 text-center",
          "data-ocid": "apt_payment.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "w-10 h-10 opacity-30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "No appointments found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Add an entry or adjust filters." })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-50 px-4 py-2.5 border-b border-green-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-green-900", children: [
          filtered.length,
          " appointment",
          filtered.length !== 1 ? "s" : ""
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground", children: "Patient" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground hidden sm:table-cell", children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground hidden md:table-cell", children: "Doctor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground hidden lg:table-cell", children: "Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground hidden lg:table-cell", children: "Method" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 text-xs font-semibold text-muted-foreground", children: "Fee (৳)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 text-xs font-semibold text-muted-foreground", children: "Receipt" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.map((apt, idx) => {
            var _a2;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-b border-border last:border-0 hover:bg-muted/20 transition-colors",
                "data-ocid": `apt_payment.item.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: apt.patientName }),
                    apt.registerNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono text-muted-foreground", children: apt.registerNumber })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground hidden sm:table-cell", children: new Date(apt.date).toLocaleDateString("en-BD", {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                  }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-foreground hidden md:table-cell", children: apt.doctor }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 hidden lg:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: apt.appointmentType }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground hidden lg:table-cell", children: apt.paymentMethod ? ((_a2 = PAYMENT_METHODS.find(
                    (m) => m.value === apt.paymentMethod
                  )) == null ? void 0 : _a2.label) ?? apt.paymentMethod : "—" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right font-bold text-foreground", children: [
                    "৳ ",
                    apt.fee.toLocaleString("en-BD")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: getStatusBadge(apt.status) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "h-7 px-2 text-xs gap-1 text-green-700 border-green-200 hover:bg-green-50",
                      onClick: () => handleGenerateReceipt(apt),
                      "data-ocid": `apt_payment.generate_receipt.${idx + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "w-3 h-3" }),
                        " Receipt"
                      ]
                    }
                  ) })
                ]
              },
              apt.id
            );
          }) })
        ] }) })
      ] })
    ] }),
    viewingReceipt && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReceiptModal,
      {
        receipt: viewingReceipt,
        onClose: () => setViewingReceipt(null)
      }
    )
  ] });
}
export {
  APPOINTMENT_TYPES,
  PAYMENT_METHODS,
  AppointmentPayment as default
};
