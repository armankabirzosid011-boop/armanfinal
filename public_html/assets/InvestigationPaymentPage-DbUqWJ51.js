import { r as reactExports, j as jsxRuntimeExports, X, B as Button, u as ue, ag as FlaskConical, b as CircleCheck, am as User, L as Label, I as Input, q as useEmailAuth, h as Badge } from "./index-DJeWhCy-.js";
import { l as loadInvestigationRates, I as InvestigationPayment } from "./InvestigationPayment-BfpQZUDn.js";
import { C as Checkbox, a as CreditCard } from "./checkbox-ByWwQWzS.js";
import { R as RefundDialog, D as DownloadOptionsDialog, a as sendReceiptWhatsApp, F as FileDown, t as triggerReceiptPrint, s as saveReceiptToStore, I as InvoiceStateBadge, c as PaymentMethodSelector, P as PartialPaymentFields, g as generateTypedReceiptNumber } from "./MoneyReceipt-CSWlD73e.js";
import { R as Receipt } from "./receipt-DqXr-L3S.js";
import { M as MessageCircle } from "./message-circle-qSON-RM2.js";
import { R as RotateCcw } from "./rotate-ccw-DEYXgLqp.js";
import { S as Search } from "./search-BLymxia-.js";
import { U as UserSearch } from "./user-search-CBqVxlq_.js";
import "./file-text-DJrK52te.js";
import "./printer-BQUreT8L.js";
import "./download-qc_8yQ5r.js";
const PM_LABELS = {
  cash: "Cash",
  bkash: "bKash",
  nagad: "Nagad",
  card: "Card"
};
function fmtDate(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-BD", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
function WalkInReceiptDoc({
  receipt,
  printRef
}) {
  const items = receipt.investigations ?? [];
  const subtotal = items.reduce((s, r) => s + r.amount, 0);
  const discountAmt = subtotal * ((receipt.discountRate ?? 0) / 100);
  const finalTotal = receipt.finalAmount ?? subtotal - discountAmt;
  const isPartial = receipt.invoiceState === "partial";
  const isRefunded = receipt.invoiceState === "refunded" || receipt.invoiceState === "partial_refunded";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "walkin-receipt-printable",
      ref: printRef,
      className: "bg-white rounded-xl overflow-hidden relative",
      style: {
        fontFamily: "serif",
        minWidth: 400,
        border: "2px solid #e5e7eb"
      },
      children: [
        receipt.paid && !isRefunded && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 flex items-center justify-center pointer-events-none",
            "aria-hidden": true,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-black select-none",
                style: {
                  fontSize: 96,
                  transform: "rotate(-35deg)",
                  opacity: 0.07,
                  color: "#16a34a"
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
            "aria-hidden": true,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-black select-none",
                style: {
                  fontSize: 80,
                  transform: "rotate(-35deg)",
                  opacity: 0.1,
                  color: "#e11d48"
                },
                children: "REFUNDED"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              background: "linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%)",
              padding: "20px 24px 16px"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                      fontSize: 22,
                      color: "white",
                      flexShrink: 0
                    },
                    children: "A"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      style: {
                        color: "white",
                        fontWeight: 900,
                        fontSize: 18,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.2
                      },
                      children: "Dr. Arman Kabir’s Care"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "rgba(255,255,255,0.75)", fontSize: 11 }, children: "Patient Management & Clinical Portal" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: 8,
                    padding: "10px 14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          style: {
                            color: "rgba(255,255,255,0.8)",
                            fontSize: 10,
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em"
                          },
                          children: "Investigation Receipt / তদন্ত রসিদ"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          style: {
                            color: "white",
                            fontWeight: 900,
                            fontSize: 20,
                            fontFamily: "monospace",
                            letterSpacing: "0.05em"
                          },
                          children: receipt.receiptNumber
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "right" }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          style: {
                            color: "rgba(255,255,255,0.8)",
                            fontSize: 10,
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em"
                          },
                          children: "Date"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "white", fontWeight: 700, fontSize: 13 }, children: fmtDate(receipt.investigationDate ?? receipt.date) })
                    ] })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "20px 24px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "table",
            {
              style: {
                width: "100%",
                fontSize: 13,
                marginBottom: 16,
                borderCollapse: "collapse"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      style: {
                        paddingBottom: 6,
                        color: "#6b7280",
                        fontSize: 11,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        width: "40%"
                      },
                      children: "Patient / রোগী"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      style: {
                        paddingBottom: 6,
                        color: "#6b7280",
                        fontSize: 11,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em"
                      },
                      children: "Age / Sex"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      style: {
                        fontWeight: 700,
                        color: "#111827",
                        fontSize: 15,
                        paddingBottom: 12
                      },
                      children: receipt.patientName
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "td",
                    {
                      style: {
                        fontWeight: 600,
                        color: "#374151",
                        fontSize: 14,
                        paddingBottom: 12
                      },
                      children: [
                        receipt.patientAge != null ? `${receipt.patientAge} yrs` : "—",
                        " ",
                        " ·  ",
                        receipt.patientSex ?? "—"
                      ]
                    }
                  )
                ] }),
                receipt.investigationDate && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        style: {
                          color: "#6b7280",
                          fontSize: 11,
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          paddingBottom: 4
                        },
                        children: "Investigation Date"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        style: {
                          color: "#6b7280",
                          fontSize: 11,
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          paddingBottom: 4
                        },
                        children: "Report Delivery Date"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        style: {
                          fontWeight: 600,
                          color: "#374151",
                          fontSize: 13,
                          paddingBottom: 12
                        },
                        children: fmtDate(receipt.investigationDate)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        style: {
                          fontWeight: 700,
                          color: "#7c3aed",
                          fontSize: 13,
                          paddingBottom: 12
                        },
                        children: fmtDate(receipt.reportDeliveryDate)
                      }
                    )
                  ] })
                ] }),
                receipt.doctorName && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "td",
                  {
                    colSpan: 2,
                    style: {
                      fontSize: 12,
                      color: "#6b7280",
                      paddingBottom: 10
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: 600 }, children: "Referred by: " }),
                      receipt.doctorName
                    ]
                  }
                ) })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                height: 1,
                background: "#e5e7eb",
                marginBottom: 14
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "table",
            {
              style: {
                width: "100%",
                fontSize: 12,
                borderCollapse: "collapse",
                marginBottom: 14
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { style: { background: "#f3f4f6" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "th",
                    {
                      style: {
                        textAlign: "left",
                        padding: "8px 10px",
                        fontSize: 11,
                        color: "#6b7280",
                        fontWeight: 700,
                        borderBottom: "1px solid #e5e7eb"
                      },
                      children: "Investigation"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "th",
                    {
                      style: {
                        textAlign: "center",
                        padding: "8px 6px",
                        fontSize: 11,
                        color: "#6b7280",
                        fontWeight: 700,
                        borderBottom: "1px solid #e5e7eb"
                      },
                      children: "Qty"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "th",
                    {
                      style: {
                        textAlign: "right",
                        padding: "8px 10px",
                        fontSize: 11,
                        color: "#6b7280",
                        fontWeight: 700,
                        borderBottom: "1px solid #e5e7eb"
                      },
                      children: "Rate (৳)"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "th",
                    {
                      style: {
                        textAlign: "right",
                        padding: "8px 10px",
                        fontSize: 11,
                        color: "#6b7280",
                        fontWeight: 700,
                        borderBottom: "1px solid #e5e7eb"
                      },
                      children: "Amount (৳)"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    style: { borderBottom: "1px solid #f3f4f6" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { padding: "8px 10px", color: "#1f2937" }, children: item.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "td",
                        {
                          style: {
                            padding: "8px 6px",
                            textAlign: "center",
                            color: "#374151"
                          },
                          children: item.qty
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "td",
                        {
                          style: {
                            padding: "8px 10px",
                            textAlign: "right",
                            color: "#374151"
                          },
                          children: item.unitRate.toLocaleString("en-BD")
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "td",
                        {
                          style: {
                            padding: "8px 10px",
                            textAlign: "right",
                            fontWeight: 700,
                            color: "#1f2937"
                          },
                          children: item.amount.toLocaleString("en-BD")
                        }
                      )
                    ]
                  },
                  `${item.name}-${i}`
                )) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                marginLeft: "auto",
                width: 220,
                fontSize: 13,
                marginBottom: 14
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 4
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#6b7280" }, children: "Subtotal / মোট" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: 600 }, children: [
                        "৳ ",
                        subtotal.toLocaleString("en-BD")
                      ] })
                    ]
                  }
                ),
                (receipt.discountRate ?? 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 4,
                      color: "#059669"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "Discount (",
                        receipt.discountRate,
                        "%)"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "− ৳ ",
                        discountAmt.toLocaleString("en-BD")
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      borderTop: "2px solid #374151",
                      paddingTop: 6,
                      fontWeight: 900,
                      fontSize: 16,
                      color: "#111827"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Final Total" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "৳ ",
                        finalTotal.toLocaleString("en-BD")
                      ] })
                    ]
                  }
                ),
                isPartial && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 4,
                        color: "#059669",
                        fontWeight: 600
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Paid" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          "৳ ",
                          (receipt.amountPaid ?? 0).toLocaleString("en-BD")
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 4,
                        color: "#d97706",
                        fontWeight: 700
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Balance Due" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          "৳ ",
                          (receipt.dueAmount ?? 0).toLocaleString("en-BD")
                        ] })
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: 14 }, children: [
            receipt.paymentMethod && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                style: {
                  display: "inline-block",
                  background: "#f3f4f6",
                  borderRadius: 6,
                  padding: "3px 10px",
                  fontSize: 12,
                  color: "#374151",
                  fontWeight: 600,
                  marginBottom: 6
                },
                children: [
                  "💳 ",
                  PM_LABELS[receipt.paymentMethod]
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceStateBadge, { state: receipt.invoiceState }) })
          ] }),
          receipt.refund && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                background: "#fff1f2",
                border: "1px solid #fecdd3",
                borderRadius: 6,
                padding: "8px 12px",
                fontSize: 12,
                color: "#be123c",
                marginBottom: 14
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontWeight: 700 }, children: [
                  "Refund: ৳",
                  receipt.refund.amount.toLocaleString("en-BD")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  "Reason: ",
                  receipt.refund.reason.replace("_", " ")
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "space-between",
                borderTop: "1px solid #d1d5db",
                paddingTop: 16,
                marginTop: 8
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        borderBottom: "1px solid #9ca3af",
                        width: 120,
                        marginBottom: 4
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 11, color: "#9ca3af" }, children: "Patient Signature" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        borderBottom: "1px solid #9ca3af",
                        width: 120,
                        marginBottom: 4
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 11, color: "#9ca3af" }, children: "Authorized Signature" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              style: {
                textAlign: "center",
                fontSize: 10,
                color: "#9ca3af",
                marginTop: 12
              },
              children: "Computer-generated receipt — Dr. Arman Kabir’s Care"
            }
          )
        ] })
      ]
    }
  );
}
function WalkInReceiptModal({
  receipt: initialReceipt,
  onClose
}) {
  const [receipt, setReceipt] = reactExports.useState(initialReceipt);
  const printRef = reactExports.useRef(null);
  const [showRefund, setShowRefund] = reactExports.useState(false);
  const [showDownloadOptions, setShowDownloadOptions] = reactExports.useState(false);
  function handlePrint(paperSize = "A4") {
    const old = document.getElementById("_wlk_ps");
    if (old) old.remove();
    const s = document.createElement("style");
    s.id = "_wlk_ps";
    s.textContent = `@media print{@page{size:${paperSize};margin:10mm}body *{visibility:hidden!important}#walkin-receipt-printable,#walkin-receipt-printable *{visibility:visible!important}#walkin-receipt-printable{position:fixed;left:0;top:0;width:100%}.no-print{display:none!important}}`;
    document.head.appendChild(s);
    window.print();
    setTimeout(() => {
      var _a;
      (_a = document.getElementById("_wlk_ps")) == null ? void 0 : _a.remove();
    }, 2e3);
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
          <div style="color:rgba(255,255,255,0.8);font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em">Investigation Receipt / তদন্ত রসিদ</div>
          <div style="color:white;font-weight:900;font-size:18px;font-family:monospace">${receipt.receiptNumber}</div>
        </div>
        <div style="text-align:right">
          <div style="color:rgba(255,255,255,0.8);font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em">Date</div>
          <div style="color:white;font-weight:700;font-size:13px">${new Date(receipt.investigationDate ?? receipt.date).toLocaleDateString("en-BD", { year: "numeric", month: "long", day: "numeric" })}</div>
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
          body > *:not(#walkin-receipt-print-root) { display: none !important; }
          #walkin-receipt-print-root { display: block !important; position: fixed; inset: 0; z-index: 9999; background: white; }
          .walkin-no-print { display: none !important; }
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
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 walkin-no-print border-0 max-w-none w-full h-full m-0",
        "aria-label": "Investigation Receipt",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] flex flex-col overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-3 border-b border-border walkin-no-print", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-foreground text-base flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "w-4 h-4 text-purple-600" }),
              "Investigation Receipt",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm text-purple-600 bg-purple-50 px-2 py-0.5 rounded", children: receipt.receiptNumber })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onClose,
                className: "text-muted-foreground hover:text-foreground p-1 rounded-md",
                "data-ocid": "walkin_receipt.close_button",
                "aria-label": "Close receipt",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 px-5 pt-3 walkin-no-print", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setReceipt((r) => ({ ...r, paid: true, invoiceState: "paid" })),
                className: `flex-1 h-9 rounded-lg text-sm font-semibold border transition-colors ${receipt.paid && receipt.invoiceState !== "partial" ? "bg-emerald-600 text-white border-emerald-600" : "bg-card text-muted-foreground border-border"}`,
                "data-ocid": "walkin_receipt.paid_toggle",
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
                "data-ocid": "walkin_receipt.unpaid_toggle",
                children: "⏳ Unpaid"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-y-auto flex-1 p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "walkin-receipt-print-root", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WalkInReceiptDoc, { receipt, printRef }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 px-5 py-3 border-t border-border walkin-no-print", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  onClick: onClose,
                  "data-ocid": "walkin_receipt.cancel_button",
                  children: "Close"
                }
              ),
              receipt.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  className: "gap-1.5 border-green-300 text-green-700 hover:bg-green-50",
                  onClick: () => sendReceiptWhatsApp(receipt),
                  "data-ocid": "walkin_receipt.whatsapp_button",
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
                  "data-ocid": "walkin_receipt.refund_button",
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
                  "data-ocid": "walkin_receipt.print_button",
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
                  "data-ocid": "walkin_receipt.download_button",
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
function todayIso() {
  return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function WalkInInvestigationForm({ doctorName }) {
  const rates = loadInvestigationRates();
  const [patientName, setPatientName] = reactExports.useState("");
  const [patientAge, setPatientAge] = reactExports.useState("");
  const [patientSex, setPatientSex] = reactExports.useState(
    "Male"
  );
  const [investigationDate, setInvestigationDate] = reactExports.useState(todayIso());
  const [reportDeliveryDate, setReportDeliveryDate] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [doctorField, setDoctorField] = reactExports.useState(doctorName ?? "");
  const [testSearch, setTestSearch] = reactExports.useState("");
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
  const [step, setStep] = reactExports.useState("form");
  const [receipt, setReceipt] = reactExports.useState(null);
  const [showReceiptModal, setShowReceiptModal] = reactExports.useState(false);
  const checkedRates = rates.filter((r) => {
    var _a;
    return (_a = selected[r.id]) == null ? void 0 : _a.checked;
  });
  const filteredRates = testSearch.trim() ? rates.filter(
    (r) => r.name.toLowerCase().includes(testSearch.toLowerCase())
  ) : rates;
  const subtotal = checkedRates.reduce(
    (sum, r) => {
      var _a;
      return sum + r.rate * (((_a = selected[r.id]) == null ? void 0 : _a.qty) ?? 1);
    },
    0
  );
  const autoFinal = Math.round(subtotal * (1 - discountRate / 100));
  const finalAmount = finalOverride !== "" ? Number(finalOverride) : autoFinal;
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
  function validateForm() {
    if (!patientName.trim()) {
      ue.error("Patient name is required");
      return false;
    }
    if (!patientAge || Number(patientAge) <= 0) {
      ue.error("Valid age is required");
      return false;
    }
    if (!investigationDate) {
      ue.error("Investigation date is required");
      return false;
    }
    if (!reportDeliveryDate) {
      ue.error("Report delivery date is required");
      return false;
    }
    if (new Date(reportDeliveryDate) < new Date(investigationDate)) {
      ue.error(
        "Report delivery date must be on or after investigation date"
      );
      return false;
    }
    if (checkedRates.length === 0) {
      ue.error("Select at least one test");
      return false;
    }
    return true;
  }
  function handleProceedToInvoice() {
    if (!validateForm()) return;
    setStep("invoice");
  }
  function handleGenerateReceipt() {
    if (!paymentMethod) {
      ue.error("Please select a payment method");
      return;
    }
    const investigations = checkedRates.map((r2) => {
      var _a;
      const qty = ((_a = selected[r2.id]) == null ? void 0 : _a.qty) ?? 1;
      return { name: r2.name, qty, unitRate: r2.rate, amount: r2.rate * qty };
    });
    const paid = !isPartial;
    const paidAmt = isPartial ? amountPaid : finalAmount;
    const dueAmt = isPartial ? finalAmount - amountPaid : 0;
    const r = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2),
      receiptNumber: generateTypedReceiptNumber("INV"),
      type: "investigation",
      patientName: patientName.trim(),
      patientAge: Number(patientAge),
      patientSex,
      phone: phone.trim() || void 0,
      doctorName: doctorField.trim() || void 0,
      service: investigations.map((i) => i.name).join(", "),
      amount: finalAmount,
      finalAmount,
      discountRate,
      paid,
      amountPaid: paidAmt,
      dueAmount: dueAmt,
      invoiceState: isPartial ? "partial" : "paid",
      paymentMethod,
      date: (/* @__PURE__ */ new Date()).toISOString(),
      investigationDate,
      reportDeliveryDate,
      investigations
    };
    saveReceiptToStore(r);
    setReceipt(r);
    setStep("done");
    setShowReceiptModal(true);
    ue.success(`Receipt ${r.receiptNumber} generated`);
  }
  function handleReset() {
    setPatientName("");
    setPatientAge("");
    setPatientSex("Male");
    setInvestigationDate(todayIso());
    setReportDeliveryDate("");
    setPhone("");
    setDoctorField(doctorName ?? "");
    setSelected(
      Object.fromEntries(rates.map((r) => [r.id, { checked: false, qty: 1 }]))
    );
    setDiscountRate(0);
    setFinalOverride("");
    setPaymentMethod(void 0);
    setIsPartial(false);
    setAmountPaid(0);
    setStep("form");
    setReceipt(null);
    setShowReceiptModal(false);
    setTestSearch("");
  }
  if (rates.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-16 text-muted-foreground gap-3 text-center bg-card border border-border rounded-2xl",
        "data-ocid": "walkin_inv.no_rates.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-10 h-10 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "No investigation rates configured" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Ask the admin to add rates in Settings → Investigation Rates." })
        ]
      }
    );
  }
  if (step === "done" && receipt) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3",
          "data-ocid": "walkin_inv.success.section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-10 h-10 text-emerald-600 mx-auto" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-emerald-800 text-lg", children: "Receipt Generated!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-emerald-700", children: [
              receipt.receiptNumber,
              " · ",
              receipt.patientName,
              " ·",
              " ",
              receipt.patientAge,
              "y"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-2 pt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "gap-2 bg-purple-600 hover:bg-purple-700 text-white",
                  onClick: () => setShowReceiptModal(true),
                  "data-ocid": "walkin_inv.view_receipt.button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "w-4 h-4" }),
                    " View & Print Receipt"
                  ]
                }
              ),
              receipt.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  className: "gap-2 border-green-300 text-green-700 hover:bg-green-50",
                  onClick: () => sendReceiptWhatsApp(receipt),
                  "data-ocid": "walkin_inv.whatsapp.button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                    " WhatsApp"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  onClick: handleReset,
                  "data-ocid": "walkin_inv.new_request.button",
                  children: "+ New Request"
                }
              )
            ] })
          ]
        }
      ),
      showReceiptModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
        WalkInReceiptModal,
        {
          receipt,
          onClose: () => setShowReceiptModal(false)
        }
      )
    ] });
  }
  if (step === "invoice") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-2xl overflow-hidden",
        "data-ocid": "walkin_inv.invoice.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-4 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-white flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "w-4 h-4" }),
              " Invoice Preview"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setStep("form"),
                className: "text-white/80 hover:text-white text-sm underline-offset-2 hover:underline",
                children: "← Edit"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-6 gap-y-1 bg-muted/30 rounded-xl p-4 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Patient" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: patientName })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Age / Sex" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold", children: [
                  patientAge,
                  "y ·",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `inline-block px-1.5 py-0.5 rounded text-xs font-bold ${patientSex === "Male" ? "bg-blue-100 text-blue-700" : patientSex === "Female" ? "bg-pink-100 text-pink-700" : "bg-muted text-foreground"}`,
                      children: patientSex
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Investigation Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: new Date(investigationDate).toLocaleDateString("en-BD", {
                  year: "numeric",
                  month: "short",
                  day: "numeric"
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Report Delivery" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-purple-700", children: new Date(reportDeliveryDate).toLocaleDateString("en-BD", {
                  year: "numeric",
                  month: "short",
                  day: "numeric"
                }) })
              ] }),
              doctorField && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Referred by" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: doctorField })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm border border-border rounded-xl overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-purple-50 text-purple-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2.5 font-semibold", children: "Investigation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-2 py-2.5 font-semibold", children: "Qty" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-3 py-2.5 font-semibold", children: "Rate" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-3 py-2.5 font-semibold", children: "Amount" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: checkedRates.map((r) => {
                var _a;
                const qty = ((_a = selected[r.id]) == null ? void 0 : _a.qty) ?? 1;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: r.name }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto w-52 space-y-1.5 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Subtotal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                  "৳",
                  subtotal.toLocaleString("en-BD")
                ] })
              ] }),
              discountRate > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-emerald-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Discount (",
                  discountRate,
                  "%)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "−৳",
                  (subtotal - finalAmount).toLocaleString("en-BD")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-border pt-1.5 font-bold text-base text-purple-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Due" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "৳",
                  finalAmount.toLocaleString("en-BD")
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                PaymentMethodSelector,
                {
                  value: paymentMethod,
                  onChange: setPaymentMethod,
                  ocidPrefix: "walkin_inv"
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
                  ocidPrefix: "walkin_inv"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "w-full gap-2 bg-purple-600 hover:bg-purple-700 text-white",
                onClick: handleGenerateReceipt,
                "data-ocid": "walkin_inv.generate_receipt.button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "w-4 h-4" }),
                  "Generate Receipt"
                ]
              }
            )
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border rounded-2xl overflow-hidden",
      "data-ocid": "walkin_inv.form.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-white flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-4 h-4" }),
            "New Investigation Request"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-xs mt-0.5", children: "Fill in patient details and select tests — receipt generated instantly" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5" }),
              " Patient Information"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "wi-name", className: "text-sm font-semibold", children: [
                  "Patient Name ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-rose-500", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "wi-name",
                    value: patientName,
                    onChange: (e) => setPatientName(e.target.value),
                    placeholder: "Full name",
                    className: "mt-1",
                    "data-ocid": "walkin_inv.patient_name.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "wi-age", className: "text-sm font-semibold", children: [
                  "Age (years) ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-rose-500", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "wi-age",
                    type: "number",
                    min: 0,
                    max: 150,
                    value: patientAge,
                    onChange: (e) => setPatientAge(e.target.value),
                    placeholder: "e.g. 35",
                    className: "mt-1",
                    "data-ocid": "walkin_inv.patient_age.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-semibold", children: [
                  "Sex ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-rose-500", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mt-1", children: ["Male", "Female", "Other"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setPatientSex(s),
                    className: `flex-1 h-9 rounded-lg text-sm font-semibold border transition-colors ${patientSex === s ? s === "Male" ? "bg-blue-600 text-white border-blue-600" : s === "Female" ? "bg-pink-500 text-white border-pink-500" : "bg-muted text-foreground border-border" : "bg-background text-muted-foreground border-border hover:border-primary/40"}`,
                    "data-ocid": `walkin_inv.sex_${s.toLowerCase()}.toggle`,
                    children: s
                  },
                  s
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "wi-inv-date", className: "text-sm font-semibold", children: [
                  "Date of Investigation ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-rose-500", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "wi-inv-date",
                    type: "date",
                    value: investigationDate,
                    onChange: (e) => setInvestigationDate(e.target.value),
                    className: "mt-1",
                    "data-ocid": "walkin_inv.investigation_date.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "wi-report-date", className: "text-sm font-semibold", children: [
                  "Report Delivery Date ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-rose-500", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "wi-report-date",
                    type: "date",
                    value: reportDeliveryDate,
                    min: investigationDate,
                    onChange: (e) => setReportDeliveryDate(e.target.value),
                    className: "mt-1",
                    "data-ocid": "walkin_inv.report_date.input"
                  }
                ),
                reportDeliveryDate && investigationDate && new Date(reportDeliveryDate) >= new Date(investigationDate) && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-emerald-600 mt-1", children: [
                  "✓ Reports ready in",
                  " ",
                  Math.round(
                    (new Date(reportDeliveryDate).getTime() - new Date(investigationDate).getTime()) / 864e5
                  ),
                  " ",
                  "day(s)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "wi-doctor", className: "text-sm font-semibold", children: [
                  "Referred by Doctor",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: "(optional)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "wi-doctor",
                    value: doctorField,
                    onChange: (e) => setDoctorField(e.target.value),
                    placeholder: "Doctor name",
                    className: "mt-1",
                    "data-ocid": "walkin_inv.doctor_name.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "wi-phone", className: "text-sm font-semibold", children: [
                  "Phone",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: "(for WhatsApp receipt)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "wi-phone",
                    type: "tel",
                    value: phone,
                    onChange: (e) => setPhone(e.target.value),
                    placeholder: "+8801XXXXXXXXX",
                    className: "mt-1",
                    "data-ocid": "walkin_inv.phone.input"
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-3.5 h-3.5" }),
              "Investigation Tests ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-rose-500", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 px-4 py-2.5 border-b border-border flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "Search tests…",
                      value: testSearch,
                      onChange: (e) => setTestSearch(e.target.value),
                      className: "w-full pl-8 h-7 text-sm bg-background border border-border rounded-md px-3 outline-none focus:ring-1 focus:ring-primary/40",
                      "data-ocid": "walkin_inv.test_search.input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground whitespace-nowrap shrink-0", children: [
                  checkedRates.length,
                  " selected"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border max-h-64 overflow-y-auto", children: filteredRates.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground text-center py-6", children: [
                'No tests match "',
                testSearch,
                '"'
              ] }) : filteredRates.map((rate, idx) => {
                const s = selected[rate.id] ?? { checked: false, qty: 1 };
                const lineAmt = s.checked ? rate.rate * (s.qty || 1) : null;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `flex items-center gap-3 px-4 py-3 transition-colors ${s.checked ? "bg-purple-50" : "hover:bg-muted/20"}`,
                    "data-ocid": `walkin_inv.test.item.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Checkbox,
                        {
                          id: `wi-${rate.id}`,
                          checked: s.checked,
                          onCheckedChange: () => handleToggle(rate.id),
                          "data-ocid": `walkin_inv.test.checkbox.${idx + 1}`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "label",
                        {
                          htmlFor: `wi-${rate.id}`,
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
                          onClick: (e) => e.stopPropagation(),
                          className: "w-16 h-7 text-xs text-center",
                          "aria-label": "Quantity"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: `text-sm font-semibold tabular-nums min-w-[4rem] text-right ${s.checked ? "text-purple-700" : "text-muted-foreground"}`,
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
            ] })
          ] }),
          checkedRates.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 rounded-xl border border-border p-4 space-y-3", children: [
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
                  htmlFor: "wi-discount",
                  className: "text-sm whitespace-nowrap shrink-0",
                  children: "Discount (%)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "wi-discount",
                  type: "number",
                  min: 0,
                  max: 100,
                  step: 0.5,
                  value: discountRate === 0 ? "" : discountRate,
                  placeholder: "0",
                  onChange: (e) => {
                    setDiscountRate(
                      Math.min(100, Math.max(0, Number(e.target.value) || 0))
                    );
                    setFinalOverride("");
                  },
                  className: "w-24 h-8 text-sm",
                  "data-ocid": "walkin_inv.discount_rate.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "wi-final",
                  className: "text-sm whitespace-nowrap shrink-0",
                  children: "Final Rate (৳)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "wi-final",
                  type: "number",
                  min: 0,
                  value: finalOverride !== "" ? finalOverride : autoFinal || "",
                  placeholder: "0",
                  onChange: (e) => {
                    setFinalOverride(e.target.value);
                    const num = Number(e.target.value);
                    if (subtotal > 0 && !Number.isNaN(num)) {
                      setDiscountRate(
                        Math.max(
                          0,
                          Math.min(
                            100,
                            Math.round((1 - num / subtotal) * 1e4) / 100
                          )
                        )
                      );
                    }
                  },
                  className: "w-32 h-8 text-sm font-bold text-purple-700",
                  "data-ocid": "walkin_inv.final_rate.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border-2 border-purple-300 rounded-lg p-3 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5 uppercase font-semibold tracking-wide", children: "Total / মোট" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-black text-purple-700 tabular-nums", children: [
                "৳ ",
                finalAmount.toLocaleString("en-BD")
              ] }),
              discountRate > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-emerald-600 mt-1", children: [
                discountRate.toFixed(1),
                "% discount applied"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              className: "w-full gap-2 bg-purple-600 hover:bg-purple-700 text-white",
              disabled: checkedRates.length === 0 || !patientName.trim() || !patientAge || !reportDeliveryDate,
              onClick: handleProceedToInvoice,
              "data-ocid": "walkin_inv.proceed_invoice.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "w-4 h-4" }),
                "Review Invoice →"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function loadAllPatients() {
  const results = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!(k == null ? void 0 : k.startsWith("patients_"))) continue;
      const arr = JSON.parse(localStorage.getItem(k) || "[]");
      results.push(...arr);
    }
  } catch {
  }
  return results;
}
function getPatientIdStr(p) {
  const rawId = p.id;
  return typeof rawId === "string" && rawId.startsWith("__bigint__") ? rawId.slice(10) : String(rawId);
}
function calcAge(dateOfBirth) {
  if (!dateOfBirth) return void 0;
  const dob = new Date(dateOfBirth);
  if (Number.isNaN(dob.getTime())) return void 0;
  const today = /* @__PURE__ */ new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || m === 0 && today.getDate() < dob.getDate()) age--;
  return age > 0 ? age : void 0;
}
function InvestigationPaymentPage() {
  const { currentDoctor } = useEmailAuth();
  const [mode, setMode] = reactExports.useState("walkin");
  const [search, setSearch] = reactExports.useState("");
  const [selected, setSelected] = reactExports.useState(null);
  const searchRef = reactExports.useRef(null);
  const patients = loadAllPatients();
  const filtered = search.trim() ? patients.filter((p) => {
    const name = (p.fullName ?? p.name ?? "").toLowerCase();
    const reg = (p.registerNumber ?? "").toLowerCase();
    const q = search.toLowerCase();
    return name.includes(q) || reg.includes(q);
  }) : [];
  const doctorLabel = currentDoctor ? `${currentDoctor.designation ?? ""} ${currentDoctor.name}`.trim() : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-5xl mx-auto px-4 py-6 space-y-6",
      "data-ocid": "inv_payment.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-5 h-5 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold font-display text-foreground", children: "Investigation Payment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Walk-in requests welcome — no prior registration required" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex gap-1 bg-muted/40 rounded-xl p-1 border border-border",
            "data-ocid": "inv_payment.mode.toggle",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setMode("walkin");
                    setSelected(null);
                    setSearch("");
                  },
                  className: `flex-1 h-9 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${mode === "walkin" ? "bg-purple-600 text-white shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
                  "data-ocid": "inv_payment.walkin.tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-3.5 h-3.5" }),
                    "Walk-in / New Patient"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setMode("registered");
                    setSelected(null);
                    setSearch("");
                    setTimeout(() => {
                      var _a;
                      return (_a = searchRef.current) == null ? void 0 : _a.focus();
                    }, 80);
                  },
                  className: `flex-1 h-9 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${mode === "registered" ? "bg-blue-600 text-white shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
                  "data-ocid": "inv_payment.registered.tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(UserSearch, { className: "w-3.5 h-3.5" }),
                    "Registered Patient"
                  ]
                }
              )
            ]
          }
        ),
        mode === "walkin" && /* @__PURE__ */ jsxRuntimeExports.jsx(WalkInInvestigationForm, { doctorName: doctorLabel }),
        mode === "registered" && (!selected ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 text-blue-600" }),
            "Search registered patient"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                ref: searchRef,
                placeholder: "Patient name or register number…",
                value: search,
                onChange: (e) => setSearch(e.target.value),
                className: "pl-9",
                "data-ocid": "inv_payment.search_input"
              }
            )
          ] }),
          search.trim() && filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-sm text-muted-foreground text-center py-6 space-y-2",
              "data-ocid": "inv_payment.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(UserSearch, { className: "w-8 h-8 opacity-30 mx-auto" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No registered patients found." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "text-purple-600 hover:underline text-xs font-semibold",
                    onClick: () => {
                      setMode("walkin");
                      setSearch("");
                    },
                    children: "Use Walk-in form instead →"
                  }
                )
              ]
            }
          ),
          filtered.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "space-y-2 max-h-80 overflow-y-auto",
              "data-ocid": "inv_payment.list",
              children: filtered.map((p, idx) => {
                const name = p.fullName ?? p.name ?? "Unknown";
                const age = p.age ?? calcAge(p.dateOfBirth);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setSelected(p);
                      setSearch("");
                    },
                    className: "w-full flex items-center gap-3 p-3 bg-background border border-border rounded-xl hover:border-blue-400 hover:bg-blue-50/40 transition-colors text-left",
                    "data-ocid": `inv_payment.item.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0", children: name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase() }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground truncate", children: name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                          age ? `${age} yrs` : "",
                          p.registerNumber ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono ml-1", children: [
                            "· ",
                            p.registerNumber
                          ] }) : null
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          variant: "outline",
                          className: "text-xs shrink-0 text-blue-700 border-blue-300",
                          children: "Select"
                        }
                      )
                    ]
                  },
                  getPatientIdStr(p)
                );
              })
            }
          ),
          !search.trim() && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 py-6 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserSearch, { className: "w-8 h-8 opacity-30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Type to search for a registered patient" })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-bold text-sm shrink-0", children: (selected.fullName ?? selected.name ?? "?").split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase() }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-blue-900 truncate", children: selected.fullName ?? selected.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-blue-700", children: [
                (() => {
                  const age = selected.age ?? calcAge(selected.dateOfBirth);
                  return age ? `${age} yrs · ` : "";
                })(),
                selected.registerNumber ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: selected.registerNumber }) : null
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-emerald-100 text-emerald-700 border-emerald-200 text-xs gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
                " Registered"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "gap-1 text-xs border-blue-300 text-blue-700 hover:bg-blue-100",
                  onClick: () => setSelected(null),
                  "data-ocid": "inv_payment.close_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" }),
                    "Change"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            InvestigationPayment,
            {
              patientId: getPatientIdStr(selected),
              patientName: selected.fullName ?? selected.name ?? "",
              registerNumber: selected.registerNumber,
              phone: selected.phone ?? selected.mobileNumber,
              doctorName: doctorLabel,
              patientAge: selected.age ?? calcAge(selected.dateOfBirth),
              patientSex: selected.sex ?? selected.gender
            }
          )
        ] })),
        mode === "walkin" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setMode("registered"),
            className: "text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors",
            "data-ocid": "inv_payment.switch_registered.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-3.5 h-3.5" }),
              "View registered patient history"
            ]
          }
        ) })
      ]
    }
  );
}
export {
  InvestigationPaymentPage as default
};
