import { q as useEmailAuth, N as useRolePermissions, r as reactExports, j as jsxRuntimeExports, ay as ShieldCheck, X, B as Button, b as CircleCheck, u as ue, D as Dialog, s as DialogContent, t as DialogHeader, v as DialogTitle, c as Clock, ad as useNavigate, ap as getDoctorEmail, bC as loadFromStorage, Y as loadFromAllDoctorKeys, a3 as Users, I as Input, S as Select, d as SelectTrigger, e as SelectValue, f as SelectContent, g as SelectItem, h as Badge, a as ChevronDown, Z as Bed, L as Label, a6 as CircleX, bD as saveToStorage } from "./index-DJeWhCy-.js";
import { T as Textarea } from "./textarea-BQiWEu5n.js";
import { L as Lock } from "./lock-BfuJZcFd.js";
import { f as format } from "./format-C8K1a6Fc.js";
import { C as CircleAlert } from "./circle-alert-3N-VW3xt.js";
import { P as Plus } from "./plus-CHPIrJ6M.js";
import { S as Search } from "./search-BLymxia-.js";
import { B as BedDouble } from "./bed-double-DSQN6_I2.js";
import { P as Pen } from "./pen-CfMhwJvZ.js";
const VITALS_KEY = (patientId) => `vital_verifications_${patientId}`;
function loadVerifiableVitals(patientId) {
  try {
    const raw = localStorage.getItem(VITALS_KEY(patientId));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveVerifiableVitals(patientId, vitals) {
  try {
    localStorage.setItem(VITALS_KEY(patientId), JSON.stringify(vitals));
  } catch {
  }
}
function VitalStatusBadge({
  status,
  compact = false
}) {
  const config = {
    drafted: {
      label: "Drafted",
      cls: "bg-muted text-muted-foreground border-border",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" })
    },
    pendingMOReview: {
      label: "Pending Review",
      cls: "bg-yellow-100 text-yellow-700 border-yellow-300",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" })
    },
    verifiedByMO: {
      label: "Verified",
      cls: "bg-green-100 text-green-700 border-green-300",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" })
    },
    finalized: {
      label: "Finalized",
      cls: "bg-blue-100 text-blue-700 border-blue-300",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3 h-3" })
    },
    rejected: {
      label: "Rejected",
      cls: "bg-red-100 text-red-700 border-red-300",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
    }
  };
  const c = config[status];
  if (compact) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        className: `inline-flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded-full border ${c.cls}`,
        children: [
          c.icon,
          c.label
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: `inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded-full border ${c.cls}`,
      children: [
        c.icon,
        c.label
      ]
    }
  );
}
function RejectVitalModal({
  vital,
  onConfirm,
  onClose
}) {
  const [reason, setReason] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: true, onOpenChange: (open) => !open && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "text-red-700 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5" }),
      " Reject Vital Entry"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-lg px-3 py-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: vital.code }),
        ": ",
        vital.value,
        " ",
        vital.unit,
        " — recorded by",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: vital.recordedByName })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "label",
          {
            htmlFor: "reject-reason",
            className: "text-sm font-semibold text-muted-foreground",
            children: [
              "Rejection Reason ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            id: "reject-reason",
            value: reason,
            onChange: (e) => setReason(e.target.value),
            placeholder: "Explain why this vital entry is being rejected…",
            rows: 3,
            "data-ocid": "vital_verification.reject_reason.textarea"
          }
        ),
        reason.trim() === "" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500", children: "Reason is required before rejecting." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "destructive",
            className: "flex-1",
            disabled: !reason.trim(),
            onClick: () => onConfirm(reason.trim()),
            "data-ocid": "vital_verification.confirm_reject.button",
            children: "Confirm Rejection"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: onClose,
            "data-ocid": "vital_verification.cancel_reject.button",
            children: "Cancel"
          }
        )
      ] })
    ] })
  ] }) });
}
function VitalVerification({
  patientId,
  patientName,
  onClose
}) {
  const { currentDoctor } = useEmailAuth();
  const permissions = useRolePermissions();
  const canVerify = permissions.canVerifyVitals;
  const [vitals, setVitals] = reactExports.useState(
    () => loadVerifiableVitals(patientId)
  );
  const [rejectTarget, setRejectTarget] = reactExports.useState(
    null
  );
  const verifyVital = (id) => {
    const updated = vitals.map(
      (v) => v.id === id ? {
        ...v,
        verificationStatus: "verifiedByMO",
        verifiedByName: (currentDoctor == null ? void 0 : currentDoctor.name) ?? "Unknown",
        verifiedAt: (/* @__PURE__ */ new Date()).toISOString()
      } : v
    );
    saveVerifiableVitals(patientId, updated);
    setVitals(updated);
    ue.success("Vital verified");
  };
  const rejectVital = (id, reason) => {
    const updated = vitals.map(
      (v) => v.id === id ? {
        ...v,
        verificationStatus: "rejected",
        rejectionReason: reason,
        verifiedByName: (currentDoctor == null ? void 0 : currentDoctor.name) ?? "Unknown",
        verifiedAt: (/* @__PURE__ */ new Date()).toISOString()
      } : v
    );
    saveVerifiableVitals(patientId, updated);
    setVitals(updated);
    setRejectTarget(null);
    ue.success("Vital rejected — reason recorded");
  };
  const pendingCount = vitals.filter(
    (v) => v.verificationStatus === "pendingMOReview"
  ).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border rounded-xl overflow-hidden",
      "data-ocid": "vital_verification.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-teal-50 border-b border-teal-200 px-4 py-3 flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-teal-700" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-sm text-teal-900", children: [
              "Vital Verification — ",
              patientName
            ] }),
            pendingCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-yellow-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full", children: [
              pendingCount,
              " pending"
            ] })
          ] }),
          onClose && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onClose,
              "data-ocid": "vital_verification.close_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 text-muted-foreground" })
            }
          )
        ] }),
        vitals.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "py-10 text-center text-muted-foreground text-sm",
            "data-ocid": "vital_verification.empty_state",
            children: "No vital entries recorded yet."
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: vitals.map((vital, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `px-4 py-3 ${vital.verificationStatus === "rejected" ? "bg-red-50/40" : vital.verificationStatus === "verifiedByMO" || vital.verificationStatus === "finalized" ? "bg-green-50/30" : ""}`,
            "data-ocid": `vital_verification.item.${idx + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm", children: vital.code }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-mono text-sm", children: [
                    vital.value,
                    " ",
                    vital.unit
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    VitalStatusBadge,
                    {
                      status: vital.verificationStatus,
                      compact: true
                    }
                  ),
                  (vital.verificationStatus === "verifiedByMO" || vital.verificationStatus === "finalized") && /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3 h-3 text-blue-500" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                  "By ",
                  vital.recordedByName,
                  " (",
                  vital.recordedByRole,
                  ") ·",
                  " ",
                  format(new Date(vital.recordedAt), "dd MMM HH:mm")
                ] }),
                vital.verificationStatus === "rejected" && vital.rejectionReason && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-red-600 mt-1 font-medium", children: [
                  "✗ Rejected: ",
                  vital.rejectionReason
                ] }),
                vital.verifiedByName && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: [
                  vital.verificationStatus === "rejected" ? "By" : "Verified by",
                  " ",
                  vital.verifiedByName,
                  " ",
                  vital.verifiedAt ? `at ${format(new Date(vital.verifiedAt), "HH:mm")}` : ""
                ] })
              ] }),
              canVerify && vital.verificationStatus === "pendingMOReview" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    className: "h-7 text-xs bg-green-600 hover:bg-green-700 gap-1",
                    onClick: () => verifyVital(vital.id),
                    "data-ocid": `vital_verification.verify.button.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
                      " Verify"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 text-xs text-red-700 border-red-300 hover:bg-red-50 gap-1",
                    onClick: () => setRejectTarget(vital),
                    "data-ocid": `vital_verification.reject.button.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" }),
                      " Reject"
                    ]
                  }
                )
              ] })
            ] })
          },
          vital.id
        )) }),
        rejectTarget && /* @__PURE__ */ jsxRuntimeExports.jsx(
          RejectVitalModal,
          {
            vital: rejectTarget,
            onConfirm: (reason) => rejectVital(rejectTarget.id, reason),
            onClose: () => setRejectTarget(null)
          }
        )
      ]
    }
  );
}
function getPendingVitalsCount(patientId) {
  try {
    const vitals = loadVerifiableVitals(patientId);
    return vitals.filter((v) => v.verificationStatus === "pendingMOReview").length;
  } catch {
    return 0;
  }
}
function getAge(dob) {
  if (!dob) return null;
  return Math.floor(
    (Date.now() - Number(dob / 1000000n)) / (365.25 * 24 * 3600 * 1e3)
  );
}
function daysSince(ts) {
  if (!ts) return 0;
  const ms = typeof ts === "bigint" ? Number(ts / 1000000n) : new Date(ts).getTime();
  return Math.max(1, Math.floor((Date.now() - ms) / (1e3 * 3600 * 24)));
}
const STATUS_CONFIG = {
  Admitted: {
    label: "Admitted",
    cls: "bg-orange-100 text-orange-700 border-orange-300"
  },
  Pending: {
    label: "Pending",
    cls: "bg-yellow-100 text-yellow-700 border-yellow-300"
  },
  Discharging: {
    label: "Discharging",
    cls: "bg-blue-100 text-blue-700 border-blue-300"
  },
  Discharged: {
    label: "Discharged",
    cls: "bg-green-100 text-green-700 border-green-300"
  }
};
function DischargeChecklistModal({
  patient,
  onConfirm,
  onClose
}) {
  const ITEMS = [
    "IV line removed",
    "Medications stopped / handed over",
    "Discharge summary signed",
    "Patient belongings collected",
    "Outstanding payment settled"
  ];
  const [checked, setChecked] = reactExports.useState(ITEMS.map(() => false));
  const allDone = checked.every(Boolean);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: true, onOpenChange: (open) => !open && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-green-600" }),
      "Discharge Checklist — ",
      patient.fullName
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Confirm all steps before marking as Discharged:" }),
      ITEMS.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "label",
        {
          className: "flex items-center gap-2.5 text-sm cursor-pointer",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: checked[i],
                onChange: (e) => {
                  const next = [...checked];
                  next[i] = e.target.checked;
                  setChecked(next);
                },
                className: "w-4 h-4 accent-green-600",
                "data-ocid": `registrar.discharge_checklist.item.${i + 1}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: checked[i] ? "line-through text-muted-foreground" : "",
                children: item
              }
            )
          ]
        },
        item
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "flex-1 bg-green-600 hover:bg-green-700",
            disabled: !allDone,
            onClick: onConfirm,
            "data-ocid": "registrar.discharge.confirm_button",
            children: "Approve Discharge"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: onClose,
            "data-ocid": "registrar.discharge.cancel_button",
            children: "Cancel"
          }
        )
      ] })
    ] })
  ] }) });
}
function NewAdmissionModal({
  patients,
  beds,
  onSaved,
  onClose
}) {
  const { currentDoctor } = useEmailAuth();
  const [search, setSearch] = reactExports.useState("");
  const [selectedPatient, setSelectedPatient] = reactExports.useState(null);
  const [ward, setWard] = reactExports.useState("");
  const [bed, setBed] = reactExports.useState("");
  const [department, setDepartment] = reactExports.useState("");
  const [consultant, setConsultant] = reactExports.useState("");
  const filtered = search.trim() ? patients.filter(
    (p) => p.fullName.toLowerCase().includes(search.toLowerCase()) || (p.registerNumber ?? "").includes(search)
  ) : patients.slice(0, 10);
  const availableBeds = beds.filter((b) => b.status === "Empty");
  const wards = [...new Set(beds.map((b) => b.ward).filter(Boolean))];
  const handleSave = () => {
    if (!selectedPatient) {
      ue.error("Select a patient");
      return;
    }
    if (!bed) {
      ue.error("Select a bed");
      return;
    }
    const email = getDoctorEmail();
    const allPatients = loadFromStorage(`patients_${email}`);
    const idx = allPatients.findIndex(
      (p) => String(p.id) === String(selectedPatient.id)
    );
    if (idx >= 0) {
      allPatients[idx] = {
        ...allPatients[idx],
        isAdmitted: true,
        patientType: "admitted",
        bedNumber: bed,
        ward,
        department,
        admittedOn: (/* @__PURE__ */ new Date()).toISOString(),
        consultantAssignment: {
          email: (currentDoctor == null ? void 0 : currentDoctor.email) ?? "",
          name: consultant || (currentDoctor == null ? void 0 : currentDoctor.name) || "",
          assignedAt: (/* @__PURE__ */ new Date()).toISOString(),
          assignedBy: (currentDoctor == null ? void 0 : currentDoctor.email) ?? ""
        }
      };
      saveToStorage(`patients_${email}`, allPatients);
      ue.success(`${selectedPatient.fullName} admitted to Bed ${bed}`);
      onSaved();
    } else {
      ue.error("Patient not found in local records");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: true, onOpenChange: (open) => !open && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-5 h-5 text-primary" }),
      " New Admission"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "new-admission-search", children: "Search Patient" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "new-admission-search",
              placeholder: "Name or register number…",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              className: "pl-8 text-sm",
              "data-ocid": "registrar.new_admission.search_input"
            }
          )
        ] }),
        !selectedPatient && search.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border rounded-lg overflow-hidden max-h-40 overflow-y-auto", children: filtered.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "w-full text-left px-3 py-2 text-sm hover:bg-muted border-b border-border last:border-0",
            onClick: () => {
              setSelectedPatient(p);
              setSearch(p.fullName);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: p.fullName }),
              p.registerNumber && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground ml-2 text-xs", children: [
                "#",
                p.registerNumber
              ] })
            ]
          },
          String(p.id)
        )) }),
        selectedPatient && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-lg px-3 py-2 text-sm flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: selectedPatient.fullName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setSelectedPatient(null);
                setSearch("");
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4 text-muted-foreground" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "new-admission-ward", children: "Ward" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: ward, onValueChange: setWard, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                id: "new-admission-ward",
                "data-ocid": "registrar.new_admission.ward.select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select ward" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              wards.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: w, children: w }, w)),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "General Ward", children: "General Ward" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "ICU", children: "ICU" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "HDU", children: "HDU" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "new-admission-bed", children: "Bed *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: bed, onValueChange: setBed, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                id: "new-admission-bed",
                "data-ocid": "registrar.new_admission.bed.select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select bed" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: availableBeds.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: b.bedNumber, children: [
              b.bedNumber,
              " — ",
              b.ward
            ] }, b.bedNumber)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "new-admission-dept", children: "Department" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "new-admission-dept",
              placeholder: "Medicine, Surgery…",
              value: department,
              onChange: (e) => setDepartment(e.target.value),
              "data-ocid": "registrar.new_admission.department.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "new-admission-consultant", children: "Consultant" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "new-admission-consultant",
              placeholder: "Consultant name",
              value: consultant,
              onChange: (e) => setConsultant(e.target.value),
              "data-ocid": "registrar.new_admission.consultant.input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "flex-1",
            onClick: handleSave,
            "data-ocid": "registrar.new_admission.submit_button",
            children: "Admit Patient"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: onClose,
            "data-ocid": "registrar.new_admission.cancel_button",
            children: "Cancel"
          }
        )
      ] })
    ] })
  ] }) });
}
function RegistrarPatientCard({
  patient,
  index,
  availableBeds,
  permissions,
  onStatusChange,
  onBedChange,
  onApproveDischarge,
  onVerifyVitals
}) {
  var _a, _b, _c;
  const age = getAge(patient.dateOfBirth);
  const dayCount = daysSince(
    patient.admittedOn ?? patient.admissionDate ?? patient.createdAt
  );
  const consultantName = ((_a = patient.consultantAssignment) == null ? void 0 : _a.name) ?? "—";
  const patientStatusStr = patient.status ?? "Active";
  const initialStatus = patientStatusStr === "Discharged" ? "Discharged" : "Admitted";
  const [localStatus, setLocalStatus] = reactExports.useState(initialStatus);
  const pendingVitals = getPendingVitalsCount(String(patient.id));
  const [editingBed, setEditingBed] = reactExports.useState(false);
  const [editingStatus, setEditingStatus] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow",
      "data-ocid": `registrar.patient_card.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 px-4 py-3 flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground text-sm truncate", children: patient.fullName }),
              patient.nameBn && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: patient.nameBn }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-mono", children: [
                "#",
                patient.registerNumber ?? "—"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-0.5 text-xs text-muted-foreground flex-wrap", children: [
              age !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                age,
                "y / ",
                patient.gender
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-3 h-3" }),
                " Bed ",
                patient.bedNumber ?? "—"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: patient.ward ?? patient.department ?? "General" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Day ",
                dayCount
              ] }),
              consultantName !== "—" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Dr. ",
                consultantName
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 flex flex-col items-end gap-1", children: editingStatus ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: localStatus,
              onValueChange: (v) => {
                const newStatus = v;
                setLocalStatus(newStatus);
                onStatusChange(patient, newStatus);
                setEditingStatus(false);
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "h-7 text-xs w-36",
                    "data-ocid": `registrar.status.select.${index + 1}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: Object.keys(STATUS_CONFIG).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, className: "text-xs", children: STATUS_CONFIG[s].label }, s)) })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setEditingStatus(true),
              className: `text-[11px] font-semibold px-2 py-0.5 rounded-full border ${((_b = STATUS_CONFIG[localStatus]) == null ? void 0 : _b.cls) ?? "bg-muted"}`,
              "data-ocid": `registrar.status.badge.${index + 1}`,
              children: [
                ((_c = STATUS_CONFIG[localStatus]) == null ? void 0 : _c.label) ?? localStatus,
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "inline w-3 h-3 ml-0.5" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 flex items-center gap-4 flex-wrap border-b border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bed, { className: "w-3.5 h-3.5 text-muted-foreground" }),
            editingBed ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: patient.bedNumber ?? "",
                onValueChange: (v) => {
                  onBedChange(patient, v);
                  setEditingBed(false);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "h-7 text-xs w-40",
                      "data-ocid": `registrar.bed.select.${index + 1}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select bed" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: availableBeds.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    SelectItem,
                    {
                      value: b.bedNumber,
                      className: "text-xs",
                      children: [
                        b.bedNumber,
                        " — ",
                        b.ward
                      ]
                    },
                    b.bedNumber
                  )) })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "text-xs font-mono text-foreground hover:text-primary flex items-center gap-1",
                onClick: () => setEditingBed(true),
                "data-ocid": `registrar.bed.edit.${index + 1}`,
                children: [
                  patient.bedNumber ?? "—",
                  permissions.canEditBedAssignment && /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3 h-3 text-muted-foreground" })
                ]
              }
            )
          ] }),
          pendingVitals > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-semibold bg-yellow-100 text-yellow-700 border border-yellow-300 px-1.5 py-0.5 rounded-full", children: [
            pendingVitals,
            " vitals pending review"
          ] }),
          patient.allergies.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-red-100 text-red-700 border border-red-200 px-1.5 py-0.5 rounded-full font-semibold", children: "⚠ Allergy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2.5 bg-muted/10 flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "h-7 text-xs gap-1",
              onClick: () => onVerifyVitals(patient),
              "data-ocid": `registrar.verify_vitals.button.${index + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-teal-600" }),
                " Vitals"
              ]
            }
          ),
          localStatus === "Discharging" && permissions.canApproveDischarge && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "h-7 text-xs gap-1 bg-green-600 hover:bg-green-700",
              onClick: () => onApproveDischarge(patient),
              "data-ocid": `registrar.approve_discharge.button.${index + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
                " Approve Discharge"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function RegistrarDashboardContent() {
  const permissions = useRolePermissions();
  const navigate = useNavigate();
  const email = getDoctorEmail();
  const [patients, setPatients] = reactExports.useState(() => {
    const primary = loadFromStorage(`patients_${email}`);
    const all = primary.length > 0 ? primary : loadFromAllDoctorKeys("patients");
    return all.filter(
      (p) => p.isAdmitted === true || p.patientType === "admitted" || p.patientType === "indoor"
    );
  });
  const [beds] = reactExports.useState(
    () => loadFromStorage("beds")
  );
  const [search, setSearch] = reactExports.useState("");
  const [filterConsultant, setFilterConsultant] = reactExports.useState("all");
  const [filterWard, setFilterWard] = reactExports.useState("all");
  const [filterDept, setFilterDept] = reactExports.useState("all");
  const [filterStatus, setFilterStatus] = reactExports.useState("all");
  const [showNewAdmission, setShowNewAdmission] = reactExports.useState(false);
  const [dischargeTarget, setDischargeTarget] = reactExports.useState(null);
  const [vitalPatient, setVitalPatient] = reactExports.useState(null);
  if (!permissions.canViewAllAdmittedPatients) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto p-8 text-center mt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-12 h-12 text-muted-foreground mx-auto mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold mb-2", children: "Access Restricted" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "This page is only available to Registrar and Admin." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          className: "mt-4",
          variant: "outline",
          onClick: () => navigate({ to: "/Dashboard" }),
          children: "Go to Dashboard"
        }
      )
    ] });
  }
  const consultants = [
    ...new Set(
      patients.map((p) => {
        var _a;
        return (_a = p.consultantAssignment) == null ? void 0 : _a.name;
      }).filter((n) => Boolean(n))
    )
  ];
  const wards = [
    ...new Set(
      patients.map((p) => p.ward ?? p.department ?? "").filter(Boolean)
    )
  ];
  const departments = [
    ...new Set(patients.map((p) => p.department ?? "").filter(Boolean))
  ];
  const allPatients = (() => {
    const primary = loadFromStorage(`patients_${email}`);
    const all = primary.length > 0 ? primary : loadFromAllDoctorKeys("patients");
    return all;
  })();
  const filteredPatients = (() => {
    let list = patients;
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) => p.fullName.toLowerCase().includes(q) || (p.registerNumber ?? "").includes(q) || (p.bedNumber ?? "").toLowerCase().includes(q)
      );
    }
    if (filterConsultant !== "all")
      list = list.filter(
        (p) => {
          var _a;
          return ((_a = p.consultantAssignment) == null ? void 0 : _a.name) === filterConsultant;
        }
      );
    if (filterWard !== "all")
      list = list.filter((p) => (p.ward ?? p.department) === filterWard);
    if (filterDept !== "all")
      list = list.filter((p) => p.department === filterDept);
    if (filterStatus !== "all")
      list = list.filter((p) => (p.status ?? "Active") === filterStatus);
    return list;
  })();
  const availableBeds = beds.filter((b) => b.status === "Empty");
  const updatePatient = (updated) => {
    const primary = loadFromStorage(`patients_${email}`);
    const idx = primary.findIndex((p) => String(p.id) === String(updated.id));
    if (idx >= 0) {
      primary[idx] = updated;
      saveToStorage(`patients_${email}`, primary);
    }
    setPatients(
      (prev) => prev.map((p) => String(p.id) === String(updated.id) ? updated : p)
    );
  };
  const handleStatusChange = (_patient, _status) => {
    ue.success(`Status updated to ${_status}`);
  };
  const handleBedChange = (patient, bed) => {
    updatePatient({ ...patient, bedNumber: bed });
    ue.success(`Bed changed to ${bed}`);
  };
  const handleApproveDischarge = (patient) => {
    updatePatient({
      ...patient,
      status: "Discharged",
      isAdmitted: false,
      patientType: "outdoor",
      dischargeDate: (/* @__PURE__ */ new Date()).toISOString()
    });
    setDischargeTarget(null);
    ue.success(`${patient.fullName} discharged`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col min-h-0 bg-background",
      "data-ocid": "registrar.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border-b border-border px-4 py-3 flex-shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 text-green-700" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold text-foreground text-base leading-tight", children: "All Admitted Patients" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  patients.length,
                  " admitted ·",
                  " ",
                  format(/* @__PURE__ */ new Date(), "EEEE, dd MMM yyyy")
                ] })
              ] })
            ] }),
            permissions.canManageAdmissions !== false && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "gap-1.5 bg-green-700 hover:bg-green-800",
                size: "sm",
                onClick: () => setShowNewAdmission(true),
                "data-ocid": "registrar.new_admission.open_modal_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                  " New Admission"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex gap-2 flex-wrap items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[180px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "Search patient, bed, register no.…",
                  value: search,
                  onChange: (e) => setSearch(e.target.value),
                  className: "pl-8 h-8 text-xs",
                  "data-ocid": "registrar.search_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterConsultant, onValueChange: setFilterConsultant, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "h-8 text-xs w-40",
                  "data-ocid": "registrar.filter.consultant.select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Consultant" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Consultants" }),
                consultants.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, className: "text-xs", children: c }, c))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterWard, onValueChange: setFilterWard, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "h-8 text-xs w-32",
                  "data-ocid": "registrar.filter.ward.select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Ward" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Wards" }),
                wards.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: w, className: "text-xs", children: w }, w))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterDept, onValueChange: setFilterDept, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "h-8 text-xs w-36",
                  "data-ocid": "registrar.filter.dept.select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Department" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Departments" }),
                departments.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: d, className: "text-xs", children: d }, d))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterStatus, onValueChange: setFilterStatus, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "h-8 text-xs w-36",
                  "data-ocid": "registrar.filter.status.select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Status" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Statuses" }),
                Object.keys(STATUS_CONFIG).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, className: "text-xs", children: STATUS_CONFIG[s].label }, s))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-xs h-8 px-2.5", children: [
              filteredPatients.length,
              " shown"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-4", children: filteredPatients.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center py-16 text-muted-foreground",
            "data-ocid": "registrar.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-12 h-12 mx-auto mb-3 opacity-30" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "No admitted patients match the filters." })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4", children: filteredPatients.map((patient, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          RegistrarPatientCard,
          {
            patient,
            index: idx,
            availableBeds,
            permissions,
            onStatusChange: handleStatusChange,
            onBedChange: handleBedChange,
            onApproveDischarge: (p) => setDischargeTarget(p),
            onVerifyVitals: (p) => setVitalPatient(p)
          },
          String(patient.id)
        )) }) }),
        vitalPatient && /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: true, onOpenChange: (open) => !open && setVitalPatient(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "max-w-xl max-h-[80vh] overflow-y-auto p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          VitalVerification,
          {
            patientId: String(vitalPatient.id),
            patientName: vitalPatient.fullName,
            onClose: () => setVitalPatient(null)
          }
        ) }) }),
        dischargeTarget && /* @__PURE__ */ jsxRuntimeExports.jsx(
          DischargeChecklistModal,
          {
            patient: dischargeTarget,
            onConfirm: () => handleApproveDischarge(dischargeTarget),
            onClose: () => setDischargeTarget(null)
          }
        ),
        showNewAdmission && /* @__PURE__ */ jsxRuntimeExports.jsx(
          NewAdmissionModal,
          {
            patients: allPatients,
            beds,
            onSaved: () => {
              setShowNewAdmission(false);
              const updated = loadFromStorage(`patients_${email}`);
              setPatients(
                updated.filter(
                  (p) => p.isAdmitted === true || p.patientType === "admitted" || p.patientType === "indoor"
                )
              );
            },
            onClose: () => setShowNewAdmission(false)
          }
        )
      ]
    }
  );
}
function RegistrarDashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RegistrarDashboardContent, {});
}
export {
  RegistrarDashboard as default
};
