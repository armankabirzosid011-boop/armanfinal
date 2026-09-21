import { r as reactExports, j as jsxRuntimeExports, B as Button, b as CircleCheck, I as Input, L as Label, h as Badge, X, u as ue } from "./index-DJeWhCy-.js";
import { a as CreditCard, C as Checkbox } from "./checkbox-ByWwQWzS.js";
import { c as PaymentMethodSelector, P as PartialPaymentFields, l as loadReceipts, a as sendReceiptWhatsApp, R as RefundDialog, D as DownloadOptionsDialog, F as FileDown, g as generateTypedReceiptNumber, s as saveReceiptToStore, t as triggerReceiptPrint, I as InvoiceStateBadge } from "./MoneyReceipt-CSWlD73e.js";
import { R as Receipt } from "./receipt-DqXr-L3S.js";
import { F as FileText } from "./file-text-DJrK52te.js";
import { S as Search } from "./search-BLymxia-.js";
import { M as MessageCircle } from "./message-circle-qSON-RM2.js";
import { R as RotateCcw } from "./rotate-ccw-DEYXgLqp.js";
const RATES_KEY = "investigation_rates";
function loadInvestigationRates() {
  try {
    return JSON.parse(localStorage.getItem(RATES_KEY) || "[]");
  } catch {
    return [];
  }
}
function InvestigationReceiptDoc({
  receipt,
  printRef
}) {
  const formattedDate = new Date(receipt.date).toLocaleDateString("en-BD", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const items = receipt.investigations ?? [];
  const subtotal = items.reduce((s, r) => s + r.amount, 0);
  const discountAmt = subtotal * ((receipt.discountRate ?? 0) / 100);
  const finalTotal = receipt.finalAmount ?? subtotal - discountAmt;
  const isPartial = receipt.invoiceState === "partial";
  const isRefunded = receipt.invoiceState === "refunded" || receipt.invoiceState === "partial_refunded";
  const PM_LABELS = {
    cash: "Cash",
    bkash: "bKash",
    nagad: "Nagad",
    card: "Card"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "receipt-printable-inv",
      ref: printRef,
      className: "bg-white border-2 border-gray-200 rounded-xl p-8 relative overflow-hidden",
      style: { fontFamily: "serif", minWidth: 420 },
      children: [
        receipt.paid && !isRefunded && /* @__PURE__ */ jsxRuntimeExports.jsx(
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
        isRefunded && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 flex items-center justify-center pointer-events-none",
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-rose-300 font-black select-none",
                style: { fontSize: 80, transform: "rotate(-35deg)", opacity: 0.22 },
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-gray-800 uppercase tracking-widest", children: "Investigation Receipt" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "তদন্ত রসিদ" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-6 gap-y-2 text-sm mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mb-0.5", children: "Patient / রোগী" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-800", children: receipt.patientName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mb-0.5", children: "Register No." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold font-mono text-gray-800", children: receipt.registerNumber || "—" })
          ] }),
          (receipt.patientAge != null || receipt.patientSex) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mb-0.5", children: "Age / Sex" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-gray-800", children: [
              receipt.patientAge != null ? `${receipt.patientAge} yrs` : "",
              receipt.patientAge != null && receipt.patientSex ? " · " : "",
              receipt.patientSex ?? ""
            ] })
          ] }),
          receipt.investigationDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mb-0.5", children: "Investigation Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-800", children: new Date(receipt.investigationDate).toLocaleDateString("en-BD", {
              year: "numeric",
              month: "short",
              day: "numeric"
            }) })
          ] }),
          receipt.reportDeliveryDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mb-0.5", children: "Report Delivery" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-purple-700", children: new Date(receipt.reportDeliveryDate).toLocaleDateString(
              "en-BD",
              {
                year: "numeric",
                month: "short",
                day: "numeric"
              }
            ) })
          ] }),
          receipt.doctorName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mb-0.5", children: "Doctor / ডাক্তার" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-800", children: receipt.doctorName })
          ] }),
          receipt.paymentMethod && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mb-0.5", children: "Payment Method" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-800", children: PM_LABELS[receipt.paymentMethod] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm mb-4 border border-gray-300 rounded", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 text-xs text-gray-600 font-semibold border-b border-gray-300", children: "Investigation" }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto w-60 space-y-1.5 mb-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600", children: "Subtotal / মোট" }),
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
          ] }),
          isPartial && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-emerald-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Paid" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "৳ ",
                (receipt.amountPaid ?? 0).toLocaleString("en-BD")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-amber-700 font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Balance Due" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "৳ ",
                (receipt.dueAmount ?? 0).toLocaleString("en-BD")
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceStateBadge, { state: receipt.invoiceState }) }),
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
  receipt: initialReceipt,
  onClose
}) {
  const [receipt, setReceipt] = reactExports.useState(initialReceipt);
  const printRef = reactExports.useRef(null);
  const [showRefund, setShowRefund] = reactExports.useState(false);
  const [showDownloadOptions, setShowDownloadOptions] = reactExports.useState(false);
  function handlePrint(paperSize = "A4") {
    const bodyHtml = printRef.current ? printRef.current.innerHTML : "";
    const headerHtml = `<div style="background:linear-gradient(135deg,#1d4ed8 0%,#7c3aed 100%);padding:20px 24px 16px;margin-bottom:0">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
        <div style="width:44px;height:44px;border-radius:10px;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:22px;color:white;flex-shrink:0">A</div>
        <div>
          <div style="color:white;font-weight:900;font-size:18px;letter-spacing:-0.02em;line-height:1.2">Dr. Arman Kabir&#39;s Care</div>
          <div style="color:rgba(255,255,255,0.75);font-size:11px">Patient Management &amp; Clinical Portal</div>
        </div>
      </div>
      <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:10px 14px">
        <div style="color:rgba(255,255,255,0.8);font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em">Investigation Receipt</div>
        <div style="color:white;font-weight:900;font-size:18px;font-family:monospace">${receipt.receiptNumber}</div>
      </div>
    </div>`;
    triggerReceiptPrint({
      bodyHtml,
      headerHtml,
      withHeader: true,
      paperSize,
      filename: `receipt-${receipt.receiptNumber}`
    });
  }
  function handleDownload(withHeader, paperSize) {
    const headerHtml = `<div style="background:linear-gradient(135deg,#1d4ed8 0%,#7c3aed 100%);padding:20px 24px 16px;margin-bottom:0">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
        <div style="width:44px;height:44px;border-radius:10px;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:22px;color:white;flex-shrink:0">A</div>
        <div>
          <div style="color:white;font-weight:900;font-size:18px;letter-spacing:-0.02em;line-height:1.2">Dr. Arman Kabir's Care</div>
          <div style="color:rgba(255,255,255,0.75);font-size:11px">Patient Management &amp; Clinical Portal</div>
        </div>
      </div>
      <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="color:rgba(255,255,255,0.8);font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em">Investigation Receipt</div>
          <div style="color:white;font-weight:900;font-size:18px;font-family:monospace">${receipt.receiptNumber}</div>
        </div>
        <div style="text-align:right">
          <div style="color:rgba(255,255,255,0.8);font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em">Date</div>
          <div style="color:white;font-weight:700;font-size:13px">${new Date(receipt.date).toLocaleDateString("en-BD", { year: "numeric", month: "long", day: "numeric" })}</div>
        </div>
      </div>
    </div>`;
    const bodyHtml = printRef.current ? printRef.current.innerHTML : "";
    triggerReceiptPrint({
      bodyHtml,
      headerHtml,
      withHeader,
      paperSize,
      filename: `receipt-${receipt.receiptNumber}`
    });
  }
  function handleRefund(refund) {
    const totalAmount2 = receipt.finalAmount ?? receipt.amount ?? 0;
    const isFullRefund = refund.amount >= totalAmount2;
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
  const totalAmount = receipt.finalAmount ?? receipt.amount ?? 0;
  const isRefunded = receipt.invoiceState === "refunded" || receipt.invoiceState === "partial_refunded";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @media print {
          body > *:not(#inv-receipt-print-root) { display: none !important; }
          #inv-receipt-print-root { display: block !important; position: fixed; inset: 0; z-index: 9999; background: white; }
          .inv-receipt-no-print { display: none !important; }
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
    showDownloadOptions && /* @__PURE__ */ jsxRuntimeExports.jsx(
      DownloadOptionsDialog,
      {
        receiptNumber: receipt.receiptNumber,
        onClose: () => setShowDownloadOptions(false),
        onDownload: (withHeader, paperSize) => {
          setShowDownloadOptions(false);
          handleDownload(withHeader, paperSize);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "dialog",
      {
        open: true,
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 inv-receipt-no-print border-0 max-w-none w-full h-full m-0",
        "aria-label": "Investigation Receipt",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] flex flex-col overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-3 border-b border-border inv-receipt-no-print", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-foreground text-base flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "w-4 h-4 text-purple-600" }),
              "Investigation Receipt"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onClose,
                className: "text-muted-foreground hover:text-foreground p-1 rounded-md",
                "data-ocid": "inv_receipt.close_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-y-auto flex-1 p-5 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 inv-receipt-no-print", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setReceipt((r) => ({
                    ...r,
                    paid: true,
                    invoiceState: "paid"
                  })),
                  className: `flex-1 h-9 rounded-lg text-sm font-semibold border transition-colors ${receipt.paid && receipt.invoiceState !== "partial" ? "bg-emerald-600 text-white border-emerald-600" : "bg-card text-muted-foreground border-border"}`,
                  "data-ocid": "inv_receipt.paid_toggle",
                  children: "✓ Paid"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setReceipt((r) => ({
                    ...r,
                    paid: false,
                    invoiceState: "invoice"
                  })),
                  className: `flex-1 h-9 rounded-lg text-sm font-semibold border transition-colors ${!receipt.paid && receipt.invoiceState !== "partial" ? "bg-amber-500 text-white border-amber-500" : "bg-card text-muted-foreground border-border"}`,
                  "data-ocid": "inv_receipt.unpaid_toggle",
                  children: "⏳ Unpaid"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "inv-receipt-print-root", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InvestigationReceiptDoc, { receipt, printRef }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 px-5 py-3 border-t border-border inv-receipt-no-print", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  onClick: onClose,
                  "data-ocid": "inv_receipt.cancel_button",
                  children: "Close"
                }
              ),
              receipt.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  className: "gap-1.5 border-green-300 text-green-700 hover:bg-green-50",
                  onClick: () => sendReceiptWhatsApp(receipt),
                  "data-ocid": "inv_receipt.whatsapp_button",
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
                  "data-ocid": "inv_receipt.refund_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-4 h-4" }),
                    "Refund"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 no-print", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  className: "gap-1.5 border-blue-300 text-blue-700 hover:bg-blue-50",
                  onClick: () => handlePrint(),
                  "data-ocid": "inv_receipt.print_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "w-4 h-4" }),
                    " Print"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "gap-1.5 bg-teal-600 hover:bg-teal-700 text-white",
                  onClick: () => setShowDownloadOptions(true),
                  "data-ocid": "inv_receipt.download_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "w-4 h-4" }),
                    " Download"
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
function NewPaymentView({
  patientId,
  patientName,
  registerNumber,
  phone,
  doctorName,
  patientAge,
  patientSex,
  onReceiptGenerated
}) {
  const rates = loadInvestigationRates();
  const [selected, setSelected] = reactExports.useState(
    () => Object.fromEntries(rates.map((r) => [r.id, { checked: false, qty: 1 }]))
  );
  const [discountRate, setDiscountRate] = reactExports.useState(0);
  const [finalOverride, setFinalOverride] = reactExports.useState("");
  const [isPartial, setIsPartial] = reactExports.useState(false);
  const [amountPaid, setAmountPaid] = reactExports.useState(0);
  const [paymentMethod, setPaymentMethod] = reactExports.useState(
    void 0
  );
  const [invoiceStep, setInvoiceStep] = reactExports.useState(
    "form"
  );
  const [csvRates, setCsvRates] = reactExports.useState(
    []
  );
  reactExports.useEffect(() => {
    fetch("/assets/investigation-rates.csv").then((r) => r.ok ? r.text() : Promise.reject()).then((text) => {
      const parsed = text.trim().split(/\r?\n/).slice(1).map((line) => {
        const i = line.lastIndexOf(",");
        return {
          name: line.slice(0, i).replace(/^"|"$/g, "").trim(),
          rate: Number.parseFloat(line.slice(i + 1)) || 0
        };
      }).filter((r) => r.name && r.rate > 0);
      setCsvRates(parsed);
    }).catch(() => {
    });
  }, []);
  const localNames = new Set(rates.map((r) => {
    var _a;
    return (_a = r.name) == null ? void 0 : _a.toLowerCase();
  }));
  const mergedRates = [
    ...rates,
    ...csvRates.filter((r) => !localNames.has(r.name.toLowerCase())).map((r) => ({
      id: `csv_${r.name}`,
      name: r.name,
      rate: r.rate,
      category: "Imported"
    }))
  ];
  const checkedRates = mergedRates.filter((r) => {
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
  function handleDiscountChange(val) {
    const n = Math.min(100, Math.max(0, Number(val) || 0));
    setDiscountRate(n);
    setFinalOverride("");
  }
  function handleFinalChange(val) {
    setFinalOverride(val);
    const num = Number(val);
    if (subtotal > 0 && !Number.isNaN(num)) {
      const d = Math.round((1 - num / subtotal) * 1e4) / 100;
      setDiscountRate(Math.max(0, Math.min(100, d)));
    }
  }
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
  function handleGenerateInvoice() {
    if (checkedRates.length === 0) {
      ue.error("Select at least one investigation");
      return;
    }
    setInvoiceStep("invoice");
  }
  function handleMarkPaid() {
    if (!paymentMethod) {
      ue.error("Please select a payment method");
      return;
    }
    const investigations = checkedRates.map((r) => {
      var _a;
      const qty = ((_a = selected[r.id]) == null ? void 0 : _a.qty) ?? 1;
      return { name: r.name, qty, unitRate: r.rate, amount: r.rate * qty };
    });
    const paid = !isPartial;
    const paidAmount = isPartial ? amountPaid : finalAmount;
    const dueAmount = isPartial ? finalAmount - amountPaid : 0;
    const receipt = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2),
      receiptNumber: generateTypedReceiptNumber("INV"),
      type: "investigation",
      patientName,
      registerNumber,
      phone,
      doctorName,
      patientAge,
      patientSex,
      service: investigations.map((i) => i.name).join(", "),
      amount: finalAmount,
      finalAmount,
      discountRate: effectiveDiscount,
      paid,
      amountPaid: paidAmount,
      dueAmount,
      invoiceState: isPartial ? "partial" : "paid",
      paymentMethod,
      date: (/* @__PURE__ */ new Date()).toISOString(),
      investigationDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      investigations,
      patientId
    };
    saveReceiptToStore(receipt);
    ue.success(`Receipt ${receipt.receiptNumber} generated`);
    onReceiptGenerated(receipt);
  }
  if (rates.length === 0 && csvRates.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-16 text-muted-foreground gap-3 text-center",
        "data-ocid": "inv_payment.no_rates.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-10 h-10 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "No investigation rates configured" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Ask the admin to upload investigation rates in Settings → Investigation Rates." })
        ]
      }
    );
  }
  if (invoiceStep === "invoice") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-blue-900 flex items-center gap-2", children: [
            "📄 Invoice Preview",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal text-blue-600", children: "— Review before marking as paid" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setInvoiceStep("form"),
              className: "text-blue-600 text-xs hover:underline",
              children: "← Edit"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-blue-800 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Patient:" }),
            " ",
            patientName,
            " ",
            registerNumber && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
              "(",
              registerNumber,
              ")"
            ] })
          ] }),
          doctorName && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Doctor:" }),
            " ",
            doctorName
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm mt-3 border border-blue-200 rounded overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-blue-100 text-blue-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 font-semibold", children: "Investigation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-2 py-2 font-semibold", children: "Qty" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-3 py-2 font-semibold", children: "Rate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-3 py-2 font-semibold", children: "Amount" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: checkedRates.map((r) => {
            var _a;
            const qty = ((_a = selected[r.id]) == null ? void 0 : _a.qty) ?? 1;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-blue-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-gray-800", children: r.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-2 text-center", children: qty }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2 text-right", children: [
                "৳",
                r.rate.toLocaleString("en-BD")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2 text-right font-semibold", children: [
                "৳",
                (r.rate * qty).toLocaleString("en-BD")
              ] })
            ] }, r.id);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto w-52 mt-3 space-y-1 text-sm", children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-blue-300 pt-1 font-bold text-blue-900 text-base", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Due" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "৳",
              finalAmount.toLocaleString("en-BD")
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PaymentMethodSelector,
          {
            value: paymentMethod,
            onChange: setPaymentMethod,
            ocidPrefix: "inv_payment"
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
            ocidPrefix: "inv_payment"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          className: "w-full gap-2 bg-purple-600 hover:bg-purple-700 text-white",
          onClick: handleMarkPaid,
          "data-ocid": "inv_payment.mark_paid.button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
            "Mark as Paid — Generate Receipt"
          ]
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 px-4 py-2.5 border-b border-border flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Select Investigations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          checkedRates.length,
          " selected"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border max-h-72 overflow-y-auto", children: mergedRates.map((rate, idx) => {
        const s = selected[rate.id] ?? { checked: false, qty: 1 };
        const lineAmt = s.checked ? rate.rate * (s.qty || 1) : null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex items-center gap-3 px-4 py-3 transition-colors ${s.checked ? "bg-purple-50" : "hover:bg-muted/20"}`,
            "data-ocid": `inv_payment.item.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Checkbox,
                {
                  id: `inv-${rate.id}`,
                  checked: s.checked,
                  onCheckedChange: () => handleToggle(rate.id),
                  "data-ocid": `inv_payment.checkbox.${idx + 1}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: `inv-${rate.id}`,
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
                  className: `text-sm font-semibold tabular-nums ${s.checked ? "text-purple-700" : "text-muted-foreground"}`,
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
            htmlFor: "discount-rate",
            className: "text-sm whitespace-nowrap shrink-0",
            children: "Discount Rate (%)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "discount-rate",
            type: "number",
            min: 0,
            max: 100,
            step: 0.5,
            value: discountRate === 0 ? "" : discountRate,
            placeholder: "0",
            onChange: (e) => handleDiscountChange(e.target.value),
            className: "w-24 h-8 text-sm",
            "data-ocid": "inv_payment.discount_rate.input"
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
            htmlFor: "final-rate",
            className: "text-sm whitespace-nowrap shrink-0",
            children: "Final Rate (৳)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "final-rate",
            type: "number",
            min: 0,
            value: finalOverride !== "" ? finalOverride : autoFinal || "",
            placeholder: "0",
            onChange: (e) => handleFinalChange(e.target.value),
            className: "w-32 h-8 text-sm font-bold text-purple-700",
            "data-ocid": "inv_payment.final_rate.input"
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
            title: "Reset to auto-calculated",
            children: "↺ Reset"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border-2 border-purple-300 rounded-lg p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5 uppercase font-semibold tracking-wide", children: "Final Total / মোট" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-black text-purple-700 tabular-nums", children: [
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        className: "w-full gap-2 bg-purple-600 hover:bg-purple-700 text-white",
        disabled: checkedRates.length === 0,
        onClick: handleGenerateInvoice,
        "data-ocid": "inv_payment.generate_invoice.button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "w-4 h-4" }),
          "Generate Invoice →"
        ]
      }
    )
  ] });
}
function PaymentHistoryView({ patientId }) {
  const [search, setSearch] = reactExports.useState("");
  const [viewing, setViewing] = reactExports.useState(null);
  const receipts = loadReceipts().filter(
    (r) => r.type === "investigation" && (r.patientId === patientId || r.registerNumber)
  );
  const filtered = receipts.filter((r) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return r.service.toLowerCase().includes(q) || r.receiptNumber.toLowerCase().includes(q) || r.date.includes(q);
  });
  if (receipts.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-16 text-muted-foreground gap-3 text-center",
        "data-ocid": "inv_payment.history.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-10 h-10 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "No investigation payments yet" }),
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
          placeholder: "Search by investigation or date…",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          className: "pl-9 h-9 text-sm",
          "data-ocid": "inv_payment.history.search_input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/50 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-semibold text-muted-foreground text-xs", children: "Receipt #" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-semibold text-muted-foreground text-xs hidden sm:table-cell", children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-semibold text-muted-foreground text-xs", children: "Investigations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-semibold text-muted-foreground text-xs", children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-semibold text-muted-foreground text-xs hidden sm:table-cell", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-semibold text-muted-foreground text-xs", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.map((r, idx) => {
        var _a;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "border-b border-border last:border-0 hover:bg-muted/20 transition-colors",
            "data-ocid": `inv_payment.history.item.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-purple-700 font-semibold", children: r.receiptNumber }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground hidden sm:table-cell", children: new Date(r.date).toLocaleDateString("en-BD", {
                year: "numeric",
                month: "short",
                day: "numeric"
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-foreground max-w-[160px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-2", children: r.service }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right font-bold text-foreground", children: [
                "৳ ",
                (r.finalAmount ?? r.amount).toLocaleString("en-BD"),
                (r.dueAmount ?? 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-600 font-medium", children: [
                  "Due: ৳",
                  (_a = r.dueAmount) == null ? void 0 : _a.toLocaleString("en-BD")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 hidden sm:table-cell", children: r.invoiceState === "refunded" || r.invoiceState === "partial_refunded" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-rose-100 text-rose-700 border-rose-200 text-xs", children: "Refunded" }) : r.invoiceState === "partial" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-amber-100 text-amber-700 border-amber-200 text-xs", children: "Partial" }) : r.paid ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-emerald-100 text-emerald-700 border-emerald-200 text-xs", children: "Paid" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-amber-100 text-amber-700 border-amber-200 text-xs", children: "Unpaid" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 px-2 text-xs gap-1 text-purple-700 border-purple-200 hover:bg-purple-50",
                    onClick: () => setViewing(r),
                    "data-ocid": `inv_payment.history.view_button.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3 h-3" }),
                      "View"
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
                    "data-ocid": `inv_payment.history.whatsapp_button.${idx + 1}`,
                    style: { color: "#25D366" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5" })
                  }
                )
              ] })
            ]
          },
          r.id
        );
      }) })
    ] }) }),
    viewing && /* @__PURE__ */ jsxRuntimeExports.jsx(ReceiptModal, { receipt: viewing, onClose: () => setViewing(null) })
  ] });
}
function InvestigationPayment({
  patientId,
  patientName,
  registerNumber,
  phone,
  doctorName,
  patientAge,
  patientSex
}) {
  const [view, setView] = reactExports.useState("new");
  const [previewReceipt, setPreviewReceipt] = reactExports.useState(
    null
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "inv_payment.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 bg-muted/40 rounded-xl p-1 border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setView("new"),
          className: `flex-1 h-8 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-1.5 ${view === "new" ? "bg-purple-600 text-white shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
          "data-ocid": "inv_payment.new_payment.tab",
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
          className: `flex-1 h-8 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-1.5 ${view === "history" ? "bg-purple-600 text-white shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
          "data-ocid": "inv_payment.history.tab",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-3.5 h-3.5" }),
            "Payment History"
          ]
        }
      )
    ] }),
    view === "new" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      NewPaymentView,
      {
        patientId,
        patientName,
        registerNumber,
        phone,
        doctorName,
        patientAge,
        patientSex,
        onReceiptGenerated: (r) => {
          setPreviewReceipt(r);
        }
      }
    ),
    view === "history" && /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentHistoryView, { patientId }),
    previewReceipt && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReceiptModal,
      {
        receipt: previewReceipt,
        onClose: () => setPreviewReceipt(null)
      }
    )
  ] });
}
export {
  InvestigationPayment as I,
  loadInvestigationRates as l
};
