const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DJeWhCy-.js","assets/index-JEdqxkTH.css"])))=>i.map(i=>d[i]);
import { q as useEmailAuth, r as reactExports, j as jsxRuntimeExports, ah as CirclePlus, L as Label, I as Input, B as Button, X, b as CircleCheck, h as Badge, u as ue, _ as __vitePreload } from "./index-DJeWhCy-.js";
import { c as PaymentMethodSelector, P as PartialPaymentFields, I as InvoiceStateBadge, R as RefundDialog, g as generateTypedReceiptNumber, s as saveReceiptToStore, a as sendReceiptWhatsApp } from "./MoneyReceipt-CSWlD73e.js";
import { P as Plus } from "./plus-CHPIrJ6M.js";
import { R as Receipt } from "./receipt-DqXr-L3S.js";
import { P as Printer } from "./printer-BQUreT8L.js";
import { R as RotateCcw } from "./rotate-ccw-DEYXgLqp.js";
import { B as Banknote } from "./banknote-BqiHnhGo.js";
import { M as MessageCircle } from "./message-circle-qSON-RM2.js";
import "./download-qc_8yQ5r.js";
const OTHER_PAYMENTS_KEY = "other_payments_index";
const ADV_PAYMENTS_KEY = "advance_payments";
function loadAdvancePayments() {
  try {
    return JSON.parse(localStorage.getItem(ADV_PAYMENTS_KEY) || "[]");
  } catch {
    return [];
  }
}
function saveAdvancePayment(r) {
  const all = loadAdvancePayments();
  const idx = all.findIndex((x) => x.id === r.id);
  if (idx >= 0) all[idx] = r;
  else all.unshift(r);
  localStorage.setItem(ADV_PAYMENTS_KEY, JSON.stringify(all));
}
function getAdvCounter() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const yearKey = "receipt_year_adv";
  const counterKey = "receipt_counter_adv";
  const storedYear = Number.parseInt(localStorage.getItem(yearKey) || "0", 10);
  let count = 1;
  if (storedYear === year) {
    count = Number.parseInt(localStorage.getItem(counterKey) || "0", 10) + 1;
  }
  localStorage.setItem(yearKey, String(year));
  localStorage.setItem(counterKey, String(count));
  return `ADV-${year}-${String(count).padStart(4, "0")}`;
}
function loadOtherPayments() {
  try {
    return JSON.parse(localStorage.getItem(OTHER_PAYMENTS_KEY) || "[]");
  } catch {
    return [];
  }
}
function saveOtherPayment(r) {
  const all = loadOtherPayments();
  const idx = all.findIndex((x) => x.id === r.id);
  if (idx >= 0) all[idx] = r;
  else all.unshift(r);
  localStorage.setItem(OTHER_PAYMENTS_KEY, JSON.stringify(all));
}
const QUICK_ITEMS = [
  { description: "Admission Fee", amount: 500 },
  { description: "Registration Fee", amount: 200 },
  { description: "Bed Charge (per day)", amount: 800 },
  { description: "Attendant Charge", amount: 300 },
  { description: "Medical Certificate", amount: 500 },
  { description: "Report Collection Fee", amount: 100 }
];
function AdvancePaymentView() {
  const [patientName, setPatientName] = reactExports.useState("");
  const [registerNumber, setRegisterNumber] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [amount, setAmount] = reactExports.useState("");
  const [date, setDate] = reactExports.useState((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
  const [paymentMethod, setPaymentMethod] = reactExports.useState(
    void 0
  );
  const [notes, setNotes] = reactExports.useState("");
  const [history, setHistory] = reactExports.useState(
    () => loadAdvancePayments()
  );
  const [view, setView] = reactExports.useState("new");
  function handleSave() {
    if (!patientName.trim() || !amount || Number(amount) <= 0 || !paymentMethod)
      return;
    const rec = {
      id: `adv-${Date.now()}`,
      patientName: patientName.trim(),
      registerNumber: registerNumber.trim(),
      phone: phone.trim(),
      amount: Number(amount),
      date,
      paymentMethod,
      notes: notes.trim(),
      receiptNumber: getAdvCounter()
    };
    saveAdvancePayment(rec);
    saveReceiptToStore({
      id: rec.id,
      receiptNumber: rec.receiptNumber,
      type: "other",
      patientName: rec.patientName,
      registerNumber: rec.registerNumber,
      phone: rec.phone,
      service: "Advance Deposit",
      amount: rec.amount,
      finalAmount: rec.amount,
      paid: true,
      amountPaid: rec.amount,
      dueAmount: 0,
      invoiceState: "paid",
      paymentMethod: rec.paymentMethod,
      date: rec.date,
      notes: rec.notes ? `Advance deposit. ${rec.notes}` : "Advance deposit"
    });
    setHistory(loadAdvancePayments());
    setPatientName("");
    setRegisterNumber("");
    setPhone("");
    setAmount("");
    setNotes("");
    setPaymentMethod(void 0);
    setView("history");
    __vitePreload(async () => {
      const { toast: toast2 } = await import("./index-DJeWhCy-.js").then((n) => n.bQ);
      return { toast: toast2 };
    }, true ? __vite__mapDeps([0,1]) : void 0).then(
      ({ toast: toast2 }) => toast2.success(`Advance receipt ${rec.receiptNumber} generated`)
    );
  }
  const unusedCredit = history.filter((r) => !r.appliedToReceipt).reduce((s, r) => s + r.amount, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "advance_payment.panel", children: [
    unusedCredit > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 border border-green-200 rounded-xl px-4 py-3 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "w-5 h-5 text-green-600 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-800", children: "Total Unused Advance Credit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-black text-green-700", children: [
          "৳",
          unusedCredit.toLocaleString("en-BD")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 bg-muted/40 rounded-xl p-1 border border-border", children: ["new", "history"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          setView(t);
          if (t === "history") setHistory(loadAdvancePayments());
        },
        className: `flex-1 h-8 rounded-lg text-sm font-semibold transition-colors ${view === t ? "bg-teal-600 text-white shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
        "data-ocid": `advance_payment.${t}.tab`,
        children: t === "new" ? "New Advance" : "History"
      },
      t
    )) }),
    view === "new" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-teal-200 rounded-2xl p-5 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-teal-800 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "w-4 h-4" }),
        " Record Advance Deposit / অগ্রিম জমা"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "advance_patient",
              className: "text-xs font-semibold text-muted-foreground",
              children: "Patient Name *"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "advance_patient",
              className: "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm",
              value: patientName,
              onChange: (e) => setPatientName(e.target.value),
              placeholder: "Full name",
              "data-ocid": "advance.patient.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "advance_register",
              className: "text-xs font-semibold text-muted-foreground",
              children: "Register No."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "advance_register",
              className: "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm font-mono",
              value: registerNumber,
              onChange: (e) => setRegisterNumber(e.target.value),
              placeholder: "0001/26",
              "data-ocid": "advance.register.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "advance_phone",
              className: "text-xs font-semibold text-muted-foreground",
              children: "Phone"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "advance_phone",
              className: "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm",
              type: "tel",
              value: phone,
              onChange: (e) => setPhone(e.target.value),
              placeholder: "01XXXXXXXXX",
              "data-ocid": "advance.phone.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "advance_amount",
              className: "text-xs font-semibold text-muted-foreground",
              children: "Advance Amount (৳) *"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "advance_amount",
              className: "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm font-bold text-teal-700",
              type: "number",
              min: 1,
              value: amount,
              onChange: (e) => setAmount(e.target.value),
              placeholder: "0",
              "data-ocid": "advance.amount.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "advance_date",
              className: "text-xs font-semibold text-muted-foreground",
              children: "Date"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "advance_date",
              className: "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm",
              type: "date",
              value: date,
              onChange: (e) => setDate(e.target.value),
              "data-ocid": "advance.date.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "advance_notes",
              className: "text-xs font-semibold text-muted-foreground",
              children: "Notes (optional)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "advance_notes",
              className: "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm",
              value: notes,
              onChange: (e) => setNotes(e.target.value),
              placeholder: "e.g. Admission deposit",
              "data-ocid": "advance.notes.input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PaymentMethodSelector,
        {
          value: paymentMethod,
          onChange: setPaymentMethod,
          ocidPrefix: "advance"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: handleSave,
          disabled: !patientName.trim() || !amount || Number(amount) <= 0 || !paymentMethod,
          className: "w-full h-11 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-semibold flex items-center justify-center gap-2 transition-colors",
          "data-ocid": "advance.save.button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
            " Generate Advance Receipt (ADV-XXXX)"
          ]
        }
      )
    ] }),
    view === "history" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: history.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-16 text-muted-foreground gap-3 text-center",
        "data-ocid": "advance.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "w-10 h-10 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "No advance payments yet" })
        ]
      }
    ) : history.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `bg-card border rounded-xl p-4 flex items-start justify-between gap-3 ${r.appliedToReceipt ? "border-border opacity-70" : "border-teal-200"}`,
        "data-ocid": `advance.item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: r.patientName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-mono text-muted-foreground", children: [
              r.registerNumber || "—",
              " · ",
              r.receiptNumber
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              r.date,
              r.paymentMethod ? ` · ${r.paymentMethod}` : ""
            ] }),
            r.notes && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs italic text-muted-foreground mt-0.5", children: r.notes })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0 space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-black text-lg text-teal-700", children: [
              "৳",
              r.amount.toLocaleString("en-BD")
            ] }),
            r.appliedToReceipt ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Applied" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-green-600", children: "Available credit" }),
            r.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => sendReceiptWhatsApp({
                  patientName: r.patientName,
                  phone: r.phone,
                  receiptNumber: r.receiptNumber,
                  date: r.date,
                  finalAmount: r.amount,
                  amountPaid: r.amount,
                  dueAmount: 0
                }),
                className: "flex items-center justify-center w-7 h-7 rounded border border-green-200 hover:bg-green-50 transition-colors",
                title: "Send via WhatsApp",
                "data-ocid": `advance.whatsapp_button.${i + 1}`,
                style: { color: "#25D366" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ]
      },
      r.id
    )) })
  ] });
}
function OtherPayment() {
  var _a, _b;
  const { currentDoctor } = useEmailAuth();
  const [tab, setTab] = reactExports.useState("new");
  const [patientName, setPatientName] = reactExports.useState("");
  const [registerNumber, setRegisterNumber] = reactExports.useState("");
  const [date, setDate] = reactExports.useState((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
  const [notes, setNotes] = reactExports.useState("");
  const [lines, setLines] = reactExports.useState([]);
  const [newDesc, setNewDesc] = reactExports.useState("");
  const [newAmount, setNewAmount] = reactExports.useState("");
  const [discountPct, setDiscountPct] = reactExports.useState(0);
  const [invoiceStep, setInvoiceStep] = reactExports.useState("form");
  const [paymentMethod, setPaymentMethod] = reactExports.useState(
    void 0
  );
  const [isPartial, setIsPartial] = reactExports.useState(false);
  const [amountPaid, setAmountPaid] = reactExports.useState(0);
  const [savedReceipt, setSavedReceipt] = reactExports.useState(
    null
  );
  const printRef = reactExports.useRef(null);
  const subtotal = lines.reduce((s, l) => s + l.amount, 0);
  const discountAmt = subtotal * (discountPct / 100);
  const finalAmount = subtotal - discountAmt;
  const addLine = (desc, amount) => {
    if (!desc.trim() || amount <= 0) return;
    setLines([...lines, { description: desc.trim(), amount }]);
    setNewDesc("");
    setNewAmount("");
  };
  const removeLine = (idx) => setLines(lines.filter((_, i) => i !== idx));
  function handleGenerateInvoice() {
    if (!patientName.trim()) {
      ue.error("Enter patient name");
      return;
    }
    if (lines.length === 0) {
      ue.error("Add at least one item");
      return;
    }
    setInvoiceStep("invoice");
  }
  function handleMarkPaid() {
    if (!paymentMethod) {
      ue.error("Please select a payment method");
      return;
    }
    const paid = !isPartial;
    const paidAmt = isPartial ? amountPaid : finalAmount;
    const dueAmt = isPartial ? finalAmount - amountPaid : 0;
    const rec = {
      id: `other-${Date.now()}`,
      patientName: patientName.trim(),
      registerNumber: registerNumber.trim(),
      date,
      items: lines,
      subtotal,
      discountPct,
      finalAmount,
      receiptNumber: generateTypedReceiptNumber("OTH"),
      notes: notes.trim(),
      paymentMethod,
      amountPaid: paidAmt,
      dueAmount: dueAmt,
      invoiceState: isPartial ? "partial" : "paid"
    };
    saveOtherPayment(rec);
    const unified = {
      id: rec.id,
      receiptNumber: rec.receiptNumber,
      patientName: rec.patientName,
      registerNumber: rec.registerNumber,
      date: rec.date,
      type: "other",
      service: rec.items.map((i) => i.description).join(", "),
      amount: rec.finalAmount,
      discountRate: rec.discountPct,
      finalAmount: rec.finalAmount,
      paid,
      amountPaid: paidAmt,
      dueAmount: dueAmt,
      invoiceState: rec.invoiceState,
      paymentMethod,
      doctorName: currentDoctor ? `${currentDoctor.designation ?? ""} ${currentDoctor.name}`.trim() : "",
      notes: rec.notes
    };
    saveReceiptToStore(unified);
    setSavedReceipt(rec);
    ue.success("Receipt generated");
  }
  function resetForm() {
    setPatientName("");
    setRegisterNumber("");
    setDate((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    setNotes("");
    setLines([]);
    setDiscountPct(0);
    setInvoiceStep("form");
    setPaymentMethod(void 0);
    setIsPartial(false);
    setAmountPaid(0);
    setSavedReceipt(null);
  }
  const [history, setHistory] = reactExports.useState(
    () => loadOtherPayments()
  );
  const [showRefund, setShowRefund] = reactExports.useState(null);
  function handleRefund(recordId, refund) {
    const all = loadOtherPayments();
    const idx = all.findIndex((r) => r.id === recordId);
    if (idx < 0) return;
    const rec = all[idx];
    const totalAmt = rec.finalAmount;
    const isFullRefund = refund.amount >= totalAmt;
    const updated = {
      ...rec,
      invoiceState: isFullRefund ? "refunded" : "partial_refunded",
      refund
    };
    all[idx] = updated;
    localStorage.setItem(OTHER_PAYMENTS_KEY, JSON.stringify(all));
    setHistory(all);
    setShowRefund(null);
    ue.success(
      `Refund of ৳${refund.amount.toLocaleString("en-BD")} recorded`
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-4xl mx-auto px-4 py-6 space-y-5",
      "data-ocid": "other_payment.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { className: "w-5 h-5 text-amber-700" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold font-display text-foreground", children: "Other Payment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Miscellaneous fees — admission, registration, bed charges, etc." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 border-b border-border", children: ["new", "history", "advance"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setTab(t);
              if (t === "new") resetForm();
              else if (t === "history") setHistory(loadOtherPayments());
            },
            className: `px-4 py-2 text-sm font-medium border-b-2 transition-colors ${tab === t ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`,
            "data-ocid": `other_payment.${t}.tab`,
            children: t === "new" ? "New Receipt" : t === "history" ? "History" : "Advance Deposit"
          },
          t
        )) }),
        tab === "new" && !savedReceipt && invoiceStep === "form" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Patient Name *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: patientName,
                  onChange: (e) => setPatientName(e.target.value),
                  placeholder: "Full name",
                  "data-ocid": "other_payment.patient.input"
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
                  "data-ocid": "other_payment.reg.input"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "date",
                  value: date,
                  onChange: (e) => setDate(e.target.value),
                  "data-ocid": "other_payment.date.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Notes (optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: notes,
                  onChange: (e) => setNotes(e.target.value),
                  placeholder: "Additional notes...",
                  "data-ocid": "other_payment.notes.input"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-2 block", children: "Quick Add" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: QUICK_ITEMS.map((qi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => addLine(qi.description, qi.amount),
                className: "text-xs px-3 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors",
                "data-ocid": "other_payment.quick_item.button",
                children: [
                  "+ ",
                  qi.description,
                  " (৳",
                  qi.amount,
                  ")"
                ]
              },
              qi.description
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-end flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-40 space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Description" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: newDesc,
                  onChange: (e) => setNewDesc(e.target.value),
                  placeholder: "Description of payment...",
                  "data-ocid": "other_payment.desc.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-32 space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Amount (৳)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  value: newAmount,
                  onChange: (e) => setNewAmount(e.target.value),
                  placeholder: "0",
                  "data-ocid": "other_payment.amount.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: () => addLine(newDesc, Number.parseFloat(newAmount) || 0),
                className: "gap-1.5",
                "data-ocid": "other_payment.add_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                  " Add"
                ]
              }
            )
          ] }),
          lines.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left font-medium text-muted-foreground", children: "Description" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-right font-medium text-muted-foreground w-32", children: "Amount (৳)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-10" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: lines.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-t border-border",
                "data-ocid": `other_payment.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: l.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-right font-medium", children: l.amount.toLocaleString() }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-2 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => removeLine(i),
                      className: "text-red-400 hover:text-red-600",
                      "data-ocid": "other_payment.delete_button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                    }
                  ) })
                ]
              },
              `${l.description}-${i}`
            )) })
          ] }) }),
          lines.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Discount %" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    min: 0,
                    max: 100,
                    value: discountPct,
                    onChange: (e) => setDiscountPct(Number.parseFloat(e.target.value) || 0),
                    className: "w-24",
                    "data-ocid": "other_payment.discount.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
                  "Subtotal:",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground", children: [
                    "৳",
                    subtotal.toLocaleString()
                  ] })
                ] }),
                discountPct > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-red-600", children: [
                  "Discount (",
                  discountPct,
                  "%): −৳",
                  discountAmt.toLocaleString()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-bold text-foreground", children: [
                  "Final: ৳",
                  finalAmount.toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: handleGenerateInvoice,
                className: "gap-2 bg-amber-600 hover:bg-amber-700",
                "data-ocid": "other_payment.submit_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "w-4 h-4" }),
                  " Generate Invoice →"
                ]
              }
            )
          ] })
        ] }),
        tab === "new" && !savedReceipt && invoiceStep === "invoice" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 border border-amber-200 rounded-xl p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-amber-900 flex items-center gap-2", children: "📄 Invoice Preview" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setInvoiceStep("form"),
                  className: "text-amber-600 text-xs hover:underline",
                  children: "← Edit"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-amber-800 space-y-1 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Patient:" }),
              " ",
              patientName,
              registerNumber && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono ml-2", children: [
                "(",
                registerNumber,
                ")"
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm border border-amber-200 rounded overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-amber-100 text-amber-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2", children: "Description" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-3 py-2 w-32", children: "Amount (৳)" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: lines.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: "border-t border-amber-100",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: l.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-right", children: l.amount.toLocaleString() })
                  ]
                },
                `${l.description}-${i}`
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tfoot", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-amber-50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 text-right text-gray-600", children: "Subtotal" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-1.5 text-right", children: [
                    "৳",
                    subtotal.toLocaleString()
                  ] })
                ] }),
                discountPct > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-red-600", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-1.5 text-right", children: [
                    "Discount (",
                    discountPct,
                    "%)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-1.5 text-right", children: [
                    "−৳",
                    discountAmt.toLocaleString()
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-amber-100 font-bold text-amber-900", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-right", children: "Total Due" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2 text-right", children: [
                    "৳",
                    finalAmount.toLocaleString()
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PaymentMethodSelector,
            {
              value: paymentMethod,
              onChange: setPaymentMethod,
              ocidPrefix: "other_payment"
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
              ocidPrefix: "other_payment"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: handleMarkPaid,
              className: "w-full gap-2 bg-amber-600 hover:bg-amber-700",
              "data-ocid": "other_payment.mark_paid.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
                " Mark as Paid — Generate Receipt"
              ]
            }
          )
        ] }),
        tab === "new" && savedReceipt && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                className: "gap-2",
                onClick: resetForm,
                "data-ocid": "other_payment.cancel_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }),
                  " New Receipt"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                className: "gap-2",
                onClick: () => window.print(),
                "data-ocid": "other_payment.print_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-4 h-4" }),
                  " Print"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: printRef,
              className: "bg-white border border-gray-200 rounded-xl p-6 space-y-3 print:shadow-none",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center border-b border-gray-200 pb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-black text-lg text-gray-900", children: "Dr. Arman Kabir's Care" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Miscellaneous Payment Receipt" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500", children: "Patient:" }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: savedReceipt.patientName })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500", children: "Reg No:" }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: savedReceipt.registerNumber || "—" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500", children: "Date:" }),
                    " ",
                    savedReceipt.date
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500", children: "Receipt:" }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: savedReceipt.receiptNumber })
                  ] }),
                  savedReceipt.paymentMethod && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500", children: "Payment:" }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: {
                      cash: "Cash",
                      bkash: "bKash",
                      nagad: "Nagad",
                      card: "Card"
                    }[savedReceipt.paymentMethod] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm border-collapse", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-amber-50", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-200 px-3 py-1.5 text-left", children: "Description" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-200 px-3 py-1.5 text-right w-32", children: "Amount (৳)" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: savedReceipt.items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "tr",
                    {
                      className: "border-t border-gray-100",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-100 px-3 py-1.5", children: item.description }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-100 px-3 py-1.5 text-right", children: item.amount.toLocaleString() })
                      ]
                    },
                    `${item.description}-${i}`
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tfoot", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-50", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-200 px-3 py-1.5 text-right font-medium", children: "Subtotal" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "border border-gray-200 px-3 py-1.5 text-right", children: [
                        "৳",
                        savedReceipt.subtotal.toLocaleString()
                      ] })
                    ] }),
                    savedReceipt.discountPct > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-red-600", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "border border-gray-200 px-3 py-1.5 text-right", children: [
                        "Discount (",
                        savedReceipt.discountPct,
                        "%)"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "border border-gray-200 px-3 py-1.5 text-right", children: [
                        "−৳",
                        (savedReceipt.subtotal * savedReceipt.discountPct / 100).toLocaleString()
                      ] })
                    ] }),
                    savedReceipt.invoiceState === "partial" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-emerald-700", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-200 px-3 py-1.5 text-right", children: "Amount Paid" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "border border-gray-200 px-3 py-1.5 text-right", children: [
                          "৳",
                          (savedReceipt.amountPaid ?? 0).toLocaleString()
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-amber-700 font-bold", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-200 px-3 py-1.5 text-right", children: "Balance Due" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "border border-gray-200 px-3 py-1.5 text-right", children: [
                          "৳",
                          (savedReceipt.dueAmount ?? 0).toLocaleString()
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-amber-50 font-bold", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-200 px-3 py-2 text-right", children: "Total" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "border border-gray-200 px-3 py-2 text-right text-amber-800", children: [
                        "৳",
                        savedReceipt.finalAmount.toLocaleString()
                      ] })
                    ] })
                  ] })
                ] }),
                savedReceipt.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 italic", children: [
                  "Notes: ",
                  savedReceipt.notes
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceStateBadge, { state: savedReceipt.invoiceState ?? "paid" }) })
              ]
            }
          )
        ] }),
        tab === "history" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: history.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-2xl p-10 text-center",
            "data-ocid": "other_payment.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "w-9 h-9 text-muted-foreground mx-auto mb-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: "No receipts yet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Generate a receipt from the New Receipt tab." })
            ]
          }
        ) : history.map((r, i) => {
          const isRefunded = r.invoiceState === "refunded" || r.invoiceState === "partial_refunded";
          const canRefund = !isRefunded && (r.invoiceState === "paid" || r.invoiceState === "partial");
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-4 flex items-start justify-between gap-4",
              "data-ocid": `other_payment.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground truncate", children: r.patientName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    r.receiptNumber,
                    " · ",
                    r.date
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    r.items.length,
                    " item(s)",
                    r.paymentMethod && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 capitalize", children: [
                      "· ",
                      r.paymentMethod
                    ] })
                  ] }),
                  r.dueAmount && r.dueAmount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-600 font-medium mt-0.5", children: [
                    "Balance Due: ৳",
                    r.dueAmount.toLocaleString()
                  ] }),
                  r.notes && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic mt-0.5", children: r.notes })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-lg text-foreground", children: [
                    "৳",
                    r.finalAmount.toLocaleString()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: isRefunded ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: "bg-rose-50 text-rose-700 border-rose-200 text-xs",
                      children: "Refunded"
                    }
                  ) : r.invoiceState === "partial" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: "bg-amber-50 text-amber-700 border-amber-200 text-xs",
                      children: "Partial"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Badge,
                    {
                      variant: "outline",
                      className: "bg-emerald-50 text-emerald-700 border-emerald-200 text-xs",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 inline mr-1" }),
                        "Paid"
                      ]
                    }
                  ) }),
                  canRefund && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "mt-1 h-7 px-2 text-xs gap-1 border-rose-200 text-rose-700 hover:bg-rose-50",
                      onClick: () => setShowRefund(r.id),
                      "data-ocid": `other_payment.refund.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3 h-3" }),
                        "Refund"
                      ]
                    }
                  )
                ] })
              ]
            },
            r.id
          );
        }) }),
        tab === "advance" && /* @__PURE__ */ jsxRuntimeExports.jsx(AdvancePaymentView, {}),
        showRefund && /* @__PURE__ */ jsxRuntimeExports.jsx(
          RefundDialog,
          {
            maxAmount: ((_a = history.find((r) => r.id === showRefund)) == null ? void 0 : _a.amountPaid) ?? ((_b = history.find((r) => r.id === showRefund)) == null ? void 0 : _b.finalAmount) ?? 0,
            onConfirm: (refund) => handleRefund(showRefund, refund),
            onCancel: () => setShowRefund(null)
          }
        )
      ]
    }
  );
}
export {
  OtherPayment as default
};
