import { i as createLucideIcon, q as useEmailAuth, N as useRolePermissions, bJ as useOnlineStatus, ap as getDoctorEmail, r as reactExports, bC as loadFromStorage, Y as loadFromAllDoctorKeys, j as jsxRuntimeExports, o as Stethoscope, bE as Wifi, bF as WifiOff, B as Button, ae as ClipboardList, I as Input, bK as useCreateOrder, X, ab as TriangleAlert, a as ChevronDown, bL as useCreateObservation, z as LoaderCircle, u as ue, bM as useCreateClinicalNote, b as CircleCheck, bN as isConsultantType, ag as FlaskConical, L as Label, a5 as STAFF_ROLE_LABELS, a7 as RefreshCw, af as Pill, a4 as UserCheck } from "./index-DJeWhCy-.js";
import { T as Textarea } from "./textarea-BQiWEu5n.js";
import { f as format } from "./format-C8K1a6Fc.js";
import { P as Plus } from "./plus-CHPIrJ6M.js";
import { T as Trash2 } from "./trash-2-B3l-ZhdV.js";
import { R as ResponsiveContainer, X as XAxis, Y as YAxis, z as Tooltip, B as Bar, E as Legend } from "./generateCategoricalChart-Dou_1HkF.js";
import { B as BarChart } from "./BarChart-Ch6XFCj8.js";
import { C as CartesianGrid, L as LineChart, a as Line, S as SystemicExaminationSection } from "./SystemicExaminationSection-CCL-4QQD.js";
import { D as Droplets } from "./droplets-Dr40MrVb.js";
import { B as BookOpen } from "./book-open-Bi6sJ5u3.js";
import { L as Lock } from "./lock-BfuJZcFd.js";
import { M as MessageCircle } from "./message-circle-qSON-RM2.js";
import { A as Activity } from "./activity-BRRgo98q.js";
import { L as Layers } from "./layers-DwYKTjmE.js";
import { S as Send } from "./send-cdrsuHAc.js";
import { R as RotateCcw } from "./rotate-ccw-DEYXgLqp.js";
import { F as FileText } from "./file-text-DJrK52te.js";
import { d as checkVitalAlerts, C as ClipboardCheck } from "./clinicalIntelligence-B4u_Xj_J.js";
import { B as BedDouble } from "./bed-double-DSQN6_I2.js";
import { S as Search } from "./search-BLymxia-.js";
import { S as Shield } from "./shield-D-es88Nw.js";
import { P as Printer } from "./printer-BQUreT8L.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M12 17h1.5", key: "1gkc67" }],
  ["path", { d: "M12 22h1.5", key: "1my7sn" }],
  ["path", { d: "M12 2h1.5", key: "19tvb7" }],
  ["path", { d: "M17.5 22H19a1 1 0 0 0 1-1", key: "10akbh" }],
  ["path", { d: "M17.5 2H19a1 1 0 0 1 1 1v1.5", key: "1vrfjs" }],
  ["path", { d: "M20 14v3h-2.5", key: "1naeju" }],
  ["path", { d: "M20 8.5V10", key: "1ctpfu" }],
  ["path", { d: "M4 10V8.5", key: "1o3zg5" }],
  ["path", { d: "M4 19.5V14", key: "ob81pf" }],
  ["path", { d: "M4 4.5A2.5 2.5 0 0 1 6.5 2H8", key: "s8vcyb" }],
  ["path", { d: "M8 22H6.5a1 1 0 0 1 0-5H8", key: "1cu73q" }]
];
const BookDashed = createLucideIcon("book-dashed", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
];
const History = createLucideIcon("history", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
      key: "emmmcr"
    }
  ]
];
const ThumbsUp = createLucideIcon("thumbs-up", __iconNode);
function getAge(dob) {
  if (!dob) return null;
  return Math.floor(
    (Date.now() - Number(dob / 1000000n)) / (365.25 * 24 * 3600 * 1e3)
  );
}
function daysSince(ts) {
  if (!ts) return 0;
  const ms = typeof ts === "bigint" ? Number(ts / 1000000n) : new Date(ts).getTime();
  return Math.floor((Date.now() - ms) / (1e3 * 3600 * 24));
}
function getCurrentShift() {
  const h = (/* @__PURE__ */ new Date()).getHours();
  if (h >= 6 && h < 14) return "morning";
  if (h >= 14 && h < 22) return "evening";
  return "night";
}
const NOTE_STATE_KEY = (patientId, date) => `note_state_${patientId}_${date}`;
function loadNoteState(patientId, date) {
  try {
    return localStorage.getItem(NOTE_STATE_KEY(patientId, date)) ?? "none";
  } catch {
    return "none";
  }
}
function saveNoteState(patientId, date, state) {
  try {
    localStorage.setItem(NOTE_STATE_KEY(patientId, date), state);
  } catch {
  }
}
function CompletionBadge({ state }) {
  const config = {
    none: {
      label: "No Note",
      cls: "bg-red-100 text-red-700 border-red-200"
    },
    intern_draft: {
      label: "Intern Draft",
      cls: "bg-yellow-100 text-yellow-700 border-yellow-200"
    },
    mo_reviewed: {
      label: "MO Reviewed",
      cls: "bg-blue-100 text-blue-700 border-blue-200"
    },
    finalized: {
      label: "Finalized",
      cls: "bg-green-100 text-green-700 border-green-200"
    },
    quick_review: {
      label: "Quick Review ✓",
      cls: "bg-green-100 text-green-700 border-green-200"
    }
  }[state];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center text-[11px] font-semibold px-2 py-0.5 rounded-full border ${config.cls}`,
      children: config.label
    }
  );
}
function VitalEntryForm({
  patientId,
  onSaved,
  onCancel
}) {
  const { currentDoctor } = useEmailAuth();
  const createObs = useCreateObservation();
  const [bp, setBp] = reactExports.useState("");
  const [pulse, setPulse] = reactExports.useState("");
  const [temp, setTemp] = reactExports.useState("");
  const [spo2, setSpo2] = reactExports.useState("");
  const [rr, setRr] = reactExports.useState("");
  const [rbs, setRbs] = reactExports.useState("");
  const bpRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a;
    (_a = bpRef.current) == null ? void 0 : _a.focus();
  }, []);
  const handleSave = async () => {
    const now = BigInt(Date.now()) * 1000000n;
    const base = {
      patientId,
      observationType: "Vital",
      observationDate: now,
      recordedBy: { toString: () => "local" },
      recordedByName: (currentDoctor == null ? void 0 : currentDoctor.name) ?? "Unknown",
      recordedByRole: (currentDoctor == null ? void 0 : currentDoctor.role) ?? "doctor"
    };
    const entries = [
      { code: "BP", value: bp, unit: "mmHg" },
      { code: "Pulse", value: pulse, unit: "beats/min" },
      { code: "Temperature", value: temp, unit: "°F" },
      { code: "SpO2", value: spo2, unit: "%" },
      { code: "RR", value: rr, unit: "breaths/min" },
      { code: "RBS", value: rbs, unit: "mmol/L" }
    ].filter((e) => e.value.trim());
    for (const e of entries) {
      await createObs.mutateAsync({
        ...base,
        code: e.code,
        value: e.value,
        unit: e.unit,
        numericValue: Number.parseFloat(e.value) || void 0
      });
    }
    ue.success("Vitals saved");
    onSaved();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: [
      {
        label: "BP (mmHg)",
        val: bp,
        set: setBp,
        ref: bpRef,
        placeholder: "120/80"
      },
      {
        label: "Pulse",
        val: pulse,
        set: setPulse,
        ref: null,
        placeholder: "72"
      },
      {
        label: "Temp (°F)",
        val: temp,
        set: setTemp,
        ref: null,
        placeholder: "37.0"
      },
      {
        label: "SpO₂ (%)",
        val: spo2,
        set: setSpo2,
        ref: null,
        placeholder: "98"
      },
      { label: "RR", val: rr, set: setRr, ref: null, placeholder: "16" },
      {
        label: "RBS (mmol/L)",
        val: rbs,
        set: setRbs,
        ref: null,
        placeholder: "5.5"
      }
    ].map(({ label, val, set, ref, placeholder }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          ref,
          inputMode: "decimal",
          placeholder,
          value: val,
          onChange: (e) => set(e.target.value),
          className: "h-9 text-sm font-mono"
        }
      )
    ] }, label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: handleSave,
          disabled: createObs.isPending,
          className: "flex-1",
          "data-ocid": "ward_round.save_vitals.button",
          children: [
            createObs.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-1 animate-spin" }) : null,
            " ",
            "Save Vitals"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: onCancel, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) })
    ] })
  ] });
}
function AddDrugForm({
  patientId,
  onSaved,
  onCancel
}) {
  const { currentDoctor } = useEmailAuth();
  const createOrder = useCreateOrder();
  const [name, setName] = reactExports.useState("");
  const [dose, setDose] = reactExports.useState("");
  const handleSave = async () => {
    if (!name.trim()) return;
    await createOrder.mutateAsync({
      patientId,
      orderType: "Medication",
      code: "DRUG",
      description: `${name.trim()} ${dose.trim()}`.trim(),
      orderedAt: BigInt(Date.now()) * 1000000n,
      orderedBy: { toString: () => "local" },
      orderedByName: (currentDoctor == null ? void 0 : currentDoctor.name) ?? "Unknown",
      orderedByRole: (currentDoctor == null ? void 0 : currentDoctor.role) ?? "doctor"
    });
    ue.success(`${name} added`);
    onSaved();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        autoFocus: true,
        placeholder: "Drug name",
        value: name,
        onChange: (e) => setName(e.target.value),
        className: "text-sm"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        placeholder: "Dose / Instructions",
        value: dose,
        onChange: (e) => setDose(e.target.value),
        className: "text-sm"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: handleSave,
          disabled: createOrder.isPending || !name.trim(),
          className: "flex-1",
          "data-ocid": "ward_round.add_drug.button",
          children: "Add Drug"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: onCancel, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) })
    ] })
  ] });
}
function OrderTestForm({
  patientId,
  onSaved,
  onCancel
}) {
  const { currentDoctor } = useEmailAuth();
  const createOrder = useCreateOrder();
  const COMMON = [
    "CBC",
    "Blood Glucose (RBS)",
    "Serum Creatinine",
    "Chest X-Ray",
    "ECG",
    "Urine R/E",
    "Blood Culture",
    "LFT"
  ];
  const [selected, setSelected] = reactExports.useState([]);
  const [custom, setCustom] = reactExports.useState("");
  const toggle = (t) => setSelected(
    (prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
  );
  const handleSave = async () => {
    const list = [
      ...selected,
      ...custom.trim() ? custom.split(",").map((s) => s.trim()) : []
    ];
    for (const test of list) {
      await createOrder.mutateAsync({
        patientId,
        orderType: "Investigation",
        code: "LAB",
        description: test,
        orderedAt: BigInt(Date.now()) * 1000000n,
        orderedBy: { toString: () => "local" },
        orderedByName: (currentDoctor == null ? void 0 : currentDoctor.name) ?? "Unknown",
        orderedByRole: (currentDoctor == null ? void 0 : currentDoctor.role) ?? "doctor"
      });
    }
    ue.success(`${list.length} test(s) ordered`);
    onSaved();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: COMMON.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => toggle(t),
        className: `text-xs px-2.5 py-1 rounded-full border transition-colors ${selected.includes(t) ? "bg-purple-600 text-white border-purple-600" : "bg-card border-border hover:bg-muted"}`,
        children: t
      },
      t
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        placeholder: "Other tests (comma separated)",
        value: custom,
        onChange: (e) => setCustom(e.target.value),
        className: "text-sm"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: handleSave,
          disabled: createOrder.isPending || selected.length === 0 && !custom.trim(),
          className: "flex-1",
          "data-ocid": "ward_round.order_test.button",
          children: "Order Tests"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: onCancel, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) })
    ] })
  ] });
}
function QuickReviewModal({
  patient,
  onSaved,
  onClose
}) {
  const { currentDoctor } = useEmailAuth();
  const createNote = useCreateClinicalNote();
  const [note, setNote] = reactExports.useState("Stable, continue current management");
  const [saving, setSaving] = reactExports.useState(false);
  const today = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
  const handleSave = async () => {
    if (!note.trim()) {
      ue.error("Note is required");
      return;
    }
    setSaving(true);
    try {
      await createNote.mutateAsync({
        patientId: patient.id,
        noteType: "SOAP",
        noteSubtype: "quick_review",
        authorId: { toString: () => "local" },
        authorName: (currentDoctor == null ? void 0 : currentDoctor.name) ?? "Unknown",
        authorRole: (currentDoctor == null ? void 0 : currentDoctor.role) ?? "consultant_doctor",
        content: JSON.stringify({
          assessment: note.trim(),
          quickReview: true,
          patient: patient.fullName,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }),
        isDraft: false,
        createdAt: BigInt(Date.now()) * 1000000n
      });
      saveNoteState(String(patient.id), today, "quick_review");
      ue.success("Quick review saved");
      onSaved();
    } finally {
      setSaving(false);
    }
  };
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: backdrop click-away
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4",
        onClick: onClose,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-background border border-border rounded-2xl shadow-2xl w-full max-w-md",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b border-border flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsUp, { className: "w-5 h-5 text-green-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "Stable — No Change" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-muted-foreground" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-sm text-green-800", children: [
                  "Patient: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: patient.fullName }),
                  " — Bed ",
                  patient.bedNumber ?? "—"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-1.5", children: "Brief Note (required)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      value: note,
                      onChange: (e) => setNote(e.target.value),
                      rows: 3,
                      placeholder: "Stable, continue current management",
                      className: "w-full border border-input rounded-lg px-3 py-2 text-sm bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary/30",
                      "data-ocid": "ward_round.quick_review.textarea",
                      autoFocus: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      onClick: handleSave,
                      disabled: saving || !note.trim(),
                      className: "flex-1 bg-green-600 hover:bg-green-700",
                      "data-ocid": "ward_round.quick_review.save_button",
                      children: [
                        saving ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-2 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 mr-2" }),
                        "Log Review"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      onClick: onClose,
                      "data-ocid": "ward_round.quick_review.cancel_button",
                      children: "Cancel"
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      }
    )
  );
}
function loadChecklist(date) {
  try {
    const raw = localStorage.getItem(`wardRoundChecklist_${date}`);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
function saveChecklist(date, data) {
  try {
    localStorage.setItem(`wardRoundChecklist_${date}`, JSON.stringify(data));
  } catch {
  }
}
function PreRoundChecklist({
  patients,
  onClose
}) {
  const today = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
  const [checklist, setChecklist] = reactExports.useState(
    () => loadChecklist(today)
  );
  const [expandedPatient, setExpandedPatient] = reactExports.useState(null);
  const updateItem = (pid, field, value) => {
    setChecklist((prev) => {
      const entry = prev[pid] ?? {
        vitals: false,
        iv: false,
        investigations: false,
        comfortable: false
      };
      const next = { ...prev, [pid]: { ...entry, [field]: value } };
      saveChecklist(today, next);
      return next;
    });
  };
  const shift = getCurrentShift();
  const shiftLabel = shift === "morning" ? "Morning (6AM–2PM)" : shift === "evening" ? "Evening (2PM–10PM)" : "Night (10PM–6AM)";
  const readyCount = patients.filter((p) => {
    const e = checklist[String(p.id)];
    return (e == null ? void 0 : e.vitals) && (e == null ? void 0 : e.iv) && (e == null ? void 0 : e.investigations) && (e == null ? void 0 : e.comfortable);
  }).length;
  const LABELS = [
    { field: "vitals", label: "Vitals done", color: "text-teal-700" },
    { field: "iv", label: "IV verified", color: "text-blue-700" },
    {
      field: "investigations",
      label: "Investigations tracked",
      color: "text-purple-700"
    },
    {
      field: "comfortable",
      label: "Patient comfortable",
      color: "text-green-700"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border rounded-xl overflow-hidden",
      "data-ocid": "ward_round.checklist.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/10 border-b border-border px-4 py-3 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardCheck, { className: "w-4 h-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-sm", children: [
              "Pre-Round Checklist — ",
              shiftLabel,
              " —",
              " ",
              format(/* @__PURE__ */ new Date(), "dd MMM yyyy")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: `text-xs font-bold px-2 py-0.5 rounded-full ${readyCount === patients.length ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`,
                children: [
                  readyCount,
                  "/",
                  patients.length,
                  " ready"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onClose,
                "data-ocid": "ward_round.checklist.close_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 text-muted-foreground" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/40 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 text-xs font-semibold", children: "Patient" }),
            LABELS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "th",
              {
                className: `text-center px-3 py-2.5 text-xs font-semibold ${l.color}`,
                children: l.label
              },
              l.field
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-3 py-2.5 text-xs font-semibold text-muted-foreground", children: "Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: patients.map((p) => {
            const entry = checklist[String(p.id)] ?? {
              vitals: false,
              iv: false,
              investigations: false,
              comfortable: false
            };
            const allDone = entry.vitals && entry.iv && entry.investigations && entry.comfortable;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: `border-b border-border ${allDone ? "bg-green-50/40" : ""}`,
                "data-ocid": "ward_round.checklist.row",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: p.fullName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                      "Bed ",
                      p.bedNumber ?? "—",
                      " · ",
                      p.department ?? "General"
                    ] }),
                    !entry.vitals && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => setExpandedPatient(
                          expandedPatient === String(p.id) ? null : String(p.id)
                        ),
                        className: "text-xs text-red-600 mt-1 flex items-center gap-1 hover:text-red-800",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3" }),
                          " Vitals missing — Enter now",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3" })
                        ]
                      }
                    ),
                    expandedPatient === String(p.id) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 p-2 bg-muted/50 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      VitalEntryForm,
                      {
                        patientId: p.id,
                        onSaved: () => {
                          updateItem(String(p.id), "vitals", true);
                          setExpandedPatient(null);
                        },
                        onCancel: () => setExpandedPatient(null)
                      }
                    ) })
                  ] }) }),
                  LABELS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: entry[l.field],
                      onChange: (e) => updateItem(String(p.id), l.field, e.target.checked),
                      className: "w-4 h-4 accent-teal-600 cursor-pointer",
                      "data-ocid": `ward_round.checklist.${l.field}`,
                      "aria-label": `${l.label} for ${p.fullName}`
                    }
                  ) }, l.field)),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center px-3 py-2.5", children: allDone ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full", children: "✓ Ready" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full", children: "Pending" }) })
                ]
              },
              String(p.id)
            );
          }) })
        ] }) })
      ]
    }
  );
}
function RoundSummaryModal({
  patients,
  noteStates,
  doctorName,
  onClose
}) {
  const today = format(/* @__PURE__ */ new Date(), "dd MMM yyyy, HH:mm");
  const todayKey = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
  const checklist = loadChecklist(todayKey);
  const finalized = patients.filter(
    (p) => ["finalized", "quick_review"].includes(noteStates[String(p.id)] ?? "none")
  );
  const inProgress = patients.filter(
    (p) => ["intern_draft", "mo_reviewed"].includes(
      noteStates[String(p.id)] ?? "none"
    )
  );
  const pending = patients.filter(
    (p) => (noteStates[String(p.id)] ?? "none") === "none"
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4",
      "data-ocid": "ward_round.round_summary.dialog",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-base flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-5 h-5 text-primary" }),
              " Ward Round Summary"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
              today,
              " — Dr. ",
              doctorName
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                onClick: () => window.print(),
                "data-ocid": "ward_round.round_summary.print_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3.5 h-3.5 mr-1" }),
                  " Print"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "ghost",
                onClick: onClose,
                "data-ocid": "ward_round.round_summary.close_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-3 px-5 py-3 border-b border-border", children: [
          {
            label: "Total",
            value: patients.length,
            cls: "bg-primary/5 text-primary"
          },
          {
            label: "Finalized",
            value: finalized.length,
            cls: "bg-green-50 text-green-700"
          },
          {
            label: "In Progress",
            value: inProgress.length,
            cls: "bg-blue-50 text-blue-700"
          },
          {
            label: "Pending",
            value: pending.length,
            cls: "bg-amber-50 text-amber-700"
          }
        ].map(({ label, value, cls }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-center rounded-lg py-2 ${cls}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label })
        ] }, label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm border-collapse", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-muted/40 text-xs", children: ["Patient", "Bed", "Note Status", "Checklist"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              className: "text-left px-3 py-2.5 font-semibold border border-border",
              children: h
            },
            h
          )) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: patients.map((p, i) => {
            const state = noteStates[String(p.id)] ?? "none";
            const cl = checklist[String(p.id)];
            const clScore = cl ? [
              cl.vitals,
              cl.iv,
              cl.investigations,
              cl.comfortable
            ].filter(Boolean).length : 0;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: `border border-border ${i % 2 === 0 ? "bg-background" : "bg-muted/20"}`,
                "data-ocid": `ward_round.round_summary.row.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 border border-border", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: p.fullName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: p.department ?? "General" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center px-3 py-2.5 border border-border font-mono text-sm", children: p.bedNumber ?? "—" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CompletionBadge, { state }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center px-3 py-2.5 border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `text-xs font-semibold px-1.5 py-0.5 rounded-full ${clScore === 4 ? "bg-green-100 text-green-700" : "bg-amber-50 text-amber-700"}`,
                      children: [
                        clScore,
                        "/4"
                      ]
                    }
                  ) })
                ]
              },
              String(p.id)
            );
          }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-3 border-t border-border text-xs text-muted-foreground", children: [
          "Ward Round Summary · Dr. Arman Kabir's Care ·",
          " ",
          format(/* @__PURE__ */ new Date(), "dd MMM yyyy HH:mm")
        ] })
      ] })
    }
  );
}
function NursePatientCard({
  patient,
  onVitalsSaved
}) {
  const [showVitals, setShowVitals] = reactExports.useState(false);
  const [nurseNote, setNurseNote] = reactExports.useState({
    observation: "",
    intervention: "",
    response: ""
  });
  const age = getAge(patient.dateOfBirth);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border rounded-xl overflow-hidden",
      "data-ocid": "ward_round.nurse_card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-rose-50 border-b border-rose-100 px-4 py-3 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground text-sm", children: patient.fullName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "Bed ",
              patient.bedNumber ?? "—",
              " · ",
              age !== null ? `${age}y` : "",
              " ·",
              " ",
              patient.gender
            ] })
          ] }),
          patient.allergies.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-red-100 text-red-700 border border-red-200 px-2 py-0.5 rounded-full font-semibold", children: "⚠ Allergy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-teal-700", children: "📊 Vitals" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setShowVitals(!showVitals),
                  className: "text-xs text-teal-600 hover:text-teal-800 underline",
                  children: showVitals ? "Hide" : "Enter Vitals"
                }
              )
            ] }),
            showVitals && /* @__PURE__ */ jsxRuntimeExports.jsx(
              VitalEntryForm,
              {
                patientId: patient.id,
                onSaved: () => {
                  setShowVitals(false);
                  onVitalsSaved();
                },
                onCancel: () => setShowVitals(false)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-rose-700", children: "📋 Nursing Notes (O/I/R)" }),
            [
              {
                key: "observation",
                label: "Observation",
                placeholder: "What did you observe?"
              },
              {
                key: "intervention",
                label: "Intervention",
                placeholder: "What action was taken?"
              },
              {
                key: "response",
                label: "Response",
                placeholder: "Patient's response?"
              }
            ].map(({ key, label, placeholder }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mb-0.5", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  value: nurseNote[key],
                  onChange: (e) => setNurseNote((prev) => ({ ...prev, [key]: e.target.value })),
                  placeholder,
                  rows: 2,
                  className: "w-full border border-input rounded-lg px-2.5 py-1.5 text-xs bg-background resize-none focus:outline-none focus:ring-1 focus:ring-rose-300",
                  "data-ocid": `ward_round.nurse.${key}_input`
                }
              )
            ] }, key)),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                className: "w-full bg-rose-600 hover:bg-rose-700 text-xs",
                onClick: () => {
                  if (!nurseNote.observation.trim()) {
                    ue.error("Observation is required");
                    return;
                  }
                  const key = `nursing_notes_${String(patient.id)}_${format(/* @__PURE__ */ new Date(), "yyyy-MM-dd")}`;
                  const existing = JSON.parse(
                    localStorage.getItem(key) ?? "[]"
                  );
                  localStorage.setItem(
                    key,
                    JSON.stringify([
                      ...existing,
                      { ...nurseNote, timestamp: (/* @__PURE__ */ new Date()).toISOString() }
                    ])
                  );
                  setNurseNote({ observation: "", intervention: "", response: "" });
                  ue.success("Nursing note saved");
                },
                "data-ocid": "ward_round.nurse.save_note_button",
                children: "Save Nursing Note"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function SoapNoteDrawer({
  patient,
  role,
  doctorEmail,
  authorName,
  onNoteStateChange,
  onClose
}) {
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: backdrop dismiss
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-40 bg-black/60 flex flex-col",
        onClick: onClose,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-background flex-1 overflow-y-auto mt-16 rounded-t-2xl",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 bg-card border-b border-border px-4 py-3 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-sm", children: [
                    "SOAP Note — ",
                    patient.fullName
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                    "Bed ",
                    patient.bedNumber ?? "—"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: onClose,
                    "data-ocid": "ward_round.soap_drawer.close_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-muted-foreground" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                DailyProgressNote,
                {
                  patientId: String(patient.id),
                  doctorEmail,
                  authorName,
                  viewerRole: role,
                  latestVitals: null,
                  prescriptions: [],
                  admissionDate: patient.admittedOn ?? patient.admissionDate,
                  onNoteStateChange
                }
              ) })
            ]
          }
        )
      }
    )
  );
}
function WardPatientCard({
  patient,
  noteState,
  index,
  role,
  vitalAlerts,
  alerts,
  onViewNote,
  onQuickReview
}) {
  const age = getAge(patient.dateOfBirth);
  const dayCount = daysSince(
    patient.admittedOn ?? patient.admissionDate ?? patient.createdAt
  );
  const hasCritical = vitalAlerts.some((a) => a.severity === "critical") || alerts.some((a) => a.severity === "Critical" && !a.isAcknowledged);
  const isConsultant = isConsultantType(role) || role === "admin" || role === "registrar";
  const vitals = reactExports.useMemo(() => {
    const email = getDoctorEmail();
    let bp = "";
    let pulse = "";
    let spo2 = "";
    let temp = "";
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if ((k == null ? void 0 : k.startsWith("visit_form_data_")) && k.endsWith(`_${email}`)) {
        try {
          const raw = localStorage.getItem(k);
          if (!raw) continue;
          const parsed = JSON.parse(raw);
          if (String(parsed.patientId) !== String(patient.id)) continue;
          const vs = parsed.vitalSigns;
          if (vs) {
            bp = vs.bloodPressure ?? bp;
            pulse = vs.pulse ?? pulse;
            spo2 = vs.oxygenSaturation ?? spo2;
            temp = vs.temperature ?? temp;
          }
        } catch {
        }
      }
    }
    return { bp, pulse, spo2, temp };
  }, [patient.id]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `bg-card border rounded-xl overflow-hidden transition-shadow hover:shadow-md ${hasCritical ? "border-red-400" : noteState === "finalized" || noteState === "quick_review" ? "border-green-300" : "border-border"}`,
      "data-ocid": `ward_round.patient_card.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `px-4 py-3 flex items-start justify-between gap-2 ${hasCritical ? "bg-red-50" : "bg-muted/30"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground text-sm truncate", children: patient.fullName }),
                  patient.nameBn && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: patient.nameBn }),
                  hasCritical && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-red-600 text-white px-1.5 py-0.5 rounded-full font-bold animate-pulse", children: "🚨 CRITICAL" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-0.5 text-xs text-muted-foreground flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-3 h-3" }),
                    " Bed ",
                    patient.bedNumber ?? "—"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: patient.department ?? patient.ward ?? "General Ward" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "Day ",
                    dayCount > 0 ? dayCount : 1,
                    " of admission"
                  ] }),
                  age !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    age,
                    "y · ",
                    patient.gender
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CompletionBadge, { state: noteState })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 bg-card border-b border-border/50 flex gap-3 flex-wrap", children: [
          {
            label: "BP",
            value: vitals.bp,
            alert: vitalAlerts.find((a) => a.field === "BP")
          },
          {
            label: "Pulse",
            value: vitals.pulse,
            alert: vitalAlerts.find((a) => a.field === "Pulse")
          },
          {
            label: "SpO₂",
            value: vitals.spo2,
            alert: vitalAlerts.find((a) => a.field === "SpO2")
          },
          { label: "Temp", value: vitals.temp, alert: null }
        ].map(({ label, value, alert }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            label,
            ":"
          ] }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `font-semibold ${alert ? "text-red-600" : "text-foreground"}`,
              children: value || "—"
            }
          )
        ] }, label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 flex gap-2 flex-wrap", children: [
          patient.allergies.slice(0, 3).map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "text-[10px] bg-red-100 text-red-700 border border-red-200 px-1.5 py-0.5 rounded-full font-semibold",
              children: [
                "⚠ ",
                a
              ]
            },
            a
          )),
          vitalAlerts.slice(0, 2).map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `text-[10px] px-1.5 py-0.5 rounded-full font-semibold border ${a.severity === "critical" ? "bg-red-100 text-red-700 border-red-200" : "bg-amber-100 text-amber-700 border-amber-200"}`,
              children: a.message
            },
            a.field
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 bg-muted/20 flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              onClick: onViewNote,
              className: "gap-1.5 flex-1 min-w-0",
              "data-ocid": `ward_round.view_note.button.${index + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5" }),
                " View / Write Note"
              ]
            }
          ),
          isConsultant && (noteState === "none" || noteState === "mo_reviewed") && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: onQuickReview,
              className: "gap-1.5 border-green-300 text-green-700 hover:bg-green-50",
              "data-ocid": `ward_round.stable_button.${index + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsUp, { className: "w-3.5 h-3.5" }),
                " Stable"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function WardRound() {
  const { currentDoctor } = useEmailAuth();
  const permissions = useRolePermissions();
  const isOnline = useOnlineStatus();
  const role = (currentDoctor == null ? void 0 : currentDoctor.role) ?? "staff";
  const doctorEmail = getDoctorEmail();
  const isNurse = role === "nurse";
  const today = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [filter, setFilter] = reactExports.useState("all");
  const [showChecklist, setShowChecklist] = reactExports.useState(false);
  const [showRoundSummary, setShowRoundSummary] = reactExports.useState(false);
  const [noteStates, setNoteStates] = reactExports.useState({});
  const [openNotePatient, setOpenNotePatient] = reactExports.useState(null);
  const [quickReviewPatient, setQuickReviewPatient] = reactExports.useState(
    null
  );
  const allPatients = reactExports.useMemo(() => {
    const email = getDoctorEmail();
    const primary = loadFromStorage(`patients_${email}`);
    const all = primary.length > 0 ? primary : loadFromAllDoctorKeys("patients");
    return all.filter(
      (p) => p.isAdmitted === true || p.patientType === "admitted" || p.patientType === "indoor"
    );
  }, []);
  reactExports.useEffect(() => {
    const states = {};
    for (const p of allPatients) {
      states[String(p.id)] = loadNoteState(String(p.id), today);
    }
    setNoteStates(states);
  }, [allPatients, today]);
  const vitalAlertsMap = reactExports.useMemo(() => {
    const map = {};
    const email = getDoctorEmail();
    for (const p of allPatients) {
      let bp = "";
      let pulse = "";
      let spo2 = "";
      let temp = "";
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if ((k == null ? void 0 : k.startsWith("visit_form_data_")) && k.endsWith(`_${email}`)) {
          try {
            const raw = localStorage.getItem(k);
            if (!raw) continue;
            const parsed = JSON.parse(raw);
            if (String(parsed.patientId) !== String(p.id)) continue;
            const vs = parsed.vitalSigns;
            if (vs) {
              bp = vs.bloodPressure ?? bp;
              pulse = vs.pulse ?? pulse;
              spo2 = vs.oxygenSaturation ?? spo2;
              temp = vs.temperature ?? temp;
            }
          } catch {
          }
        }
      }
      map[String(p.id)] = checkVitalAlerts({
        bloodPressure: bp,
        pulse,
        oxygenSaturation: spo2,
        temperature: temp
      });
    }
    return map;
  }, [allPatients]);
  const filteredPatients = reactExports.useMemo(() => {
    let list = allPatients;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) => p.fullName.toLowerCase().includes(q) || (p.bedNumber ?? "").toLowerCase().includes(q)
      );
    }
    switch (filter) {
      case "pending":
        return list.filter((p) => {
          const s = noteStates[String(p.id)] ?? "none";
          return s === "none" || s === "intern_draft" || s === "mo_reviewed";
        });
      case "finalized":
        return list.filter((p) => {
          const s = noteStates[String(p.id)] ?? "none";
          return s === "finalized" || s === "quick_review";
        });
      case "critical":
        return list.filter(
          (p) => (vitalAlertsMap[String(p.id)] ?? []).some(
            (a) => a.severity === "critical"
          )
        );
      default:
        return list;
    }
  }, [allPatients, searchQuery, filter, noteStates, vitalAlertsMap]);
  const updateNoteState = reactExports.useCallback(
    (patientId, state) => {
      saveNoteState(patientId, today, state);
      setNoteStates((prev) => ({ ...prev, [patientId]: state }));
    },
    [today]
  );
  const pendingCount = allPatients.filter((p) => {
    const s = noteStates[String(p.id)] ?? "none";
    return s === "none" || s === "intern_draft" || s === "mo_reviewed";
  }).length;
  const FILTERS = [
    { key: "all", label: `All (${allPatients.length})`, color: "" },
    {
      key: "pending",
      label: `Pending Review (${pendingCount})`,
      color: "text-amber-700"
    },
    { key: "finalized", label: "Finalized", color: "text-green-700" },
    { key: "critical", label: "Critical Alert", color: "text-red-700" }
  ];
  if (allPatients.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-2xl mx-auto p-6 mt-12 text-center",
        "data-ocid": "ward_round.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-8 h-8 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold mb-2", children: "No Admitted Patients" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Ward Round shows admitted patients only. Mark patients as admitted in their profile." })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col min-h-0 bg-background",
      "data-ocid": "ward_round.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border-b border-border px-4 py-3 flex flex-col gap-2 flex-shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-5 h-5 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold text-foreground text-base leading-tight", children: "Ward Round" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  allPatients.length,
                  " admitted · ",
                  pendingCount,
                  " pending finalization · ",
                  format(/* @__PURE__ */ new Date(), "EEEE, dd MMM yyyy")
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-full ${isOnline ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`,
                  "data-ocid": "ward_round.sync_status",
                  children: [
                    isOnline ? /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(WifiOff, { className: "w-3 h-3" }),
                    isOnline ? "Online" : "Offline"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "gap-1.5 text-xs hidden sm:flex",
                  onClick: () => setShowChecklist(!showChecklist),
                  "data-ocid": "ward_round.checklist.button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardCheck, { className: "w-3.5 h-3.5" }),
                    " Checklist"
                  ]
                }
              ),
              (permissions.canFinalizeClinicalNote || permissions.canApproveInternNotes) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "gap-1.5 text-xs hidden sm:flex",
                  onClick: () => setShowRoundSummary(true),
                  "data-ocid": "ward_round.end_round.button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-3.5 h-3.5" }),
                    " End Round"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-[180px] relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "Search patient or bed...",
                  value: searchQuery,
                  onChange: (e) => setSearchQuery(e.target.value),
                  className: "pl-8 h-8 text-xs",
                  "data-ocid": "ward_round.search_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex gap-1 flex-wrap",
                "data-ocid": "ward_round.filter.tab",
                children: FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setFilter(f.key),
                    className: `text-xs px-3 py-1.5 rounded-lg border transition-colors ${filter === f.key ? "bg-primary text-primary-foreground border-primary" : `bg-card border-border hover:bg-muted ${f.color}`}`,
                    "data-ocid": `ward_round.filter.${f.key}`,
                    children: f.label
                  },
                  f.key
                ))
              }
            )
          ] })
        ] }),
        showChecklist && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pt-3 pb-0 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          PreRoundChecklist,
          {
            patients: allPatients,
            onClose: () => setShowChecklist(false)
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-4", children: isNurse ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-lg px-3 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4" }),
            " Nurse View — Vitals & Nursing Notes"
          ] }),
          filteredPatients.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            NursePatientCard,
            {
              patient: p,
              onVitalsSaved: () => updateNoteState(
                String(p.id),
                noteStates[String(p.id)] ?? "none"
              )
            },
            String(p.id)
          ))
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: filteredPatients.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "text-center py-12 text-muted-foreground",
            "data-ocid": "ward_round.filtered_empty_state",
            children: "No patients match the current filter."
          }
        ) : filteredPatients.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          WardPatientCard,
          {
            patient: p,
            noteState: noteStates[String(p.id)] ?? "none",
            index: i,
            role,
            vitalAlerts: vitalAlertsMap[String(p.id)] ?? [],
            alerts: [],
            onViewNote: () => setOpenNotePatient(p),
            onQuickReview: () => setQuickReviewPatient(p)
          },
          String(p.id)
        )) }) }),
        openNotePatient && /* @__PURE__ */ jsxRuntimeExports.jsx(
          SoapNoteDrawer,
          {
            patient: openNotePatient,
            role,
            doctorEmail,
            authorName: (currentDoctor == null ? void 0 : currentDoctor.name) ?? "Unknown",
            onNoteStateChange: (state) => updateNoteState(String(openNotePatient.id), state),
            onClose: () => setOpenNotePatient(null)
          }
        ),
        quickReviewPatient && /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuickReviewModal,
          {
            patient: quickReviewPatient,
            onSaved: () => {
              updateNoteState(String(quickReviewPatient.id), "quick_review");
              setQuickReviewPatient(null);
            },
            onClose: () => setQuickReviewPatient(null)
          }
        ),
        showRoundSummary && /* @__PURE__ */ jsxRuntimeExports.jsx(
          RoundSummaryModal,
          {
            patients: allPatients,
            noteStates,
            doctorName: (currentDoctor == null ? void 0 : currentDoctor.name) ?? "Unknown",
            onClose: () => setShowRoundSummary(false)
          }
        )
      ]
    }
  );
}
const WardRound$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AddDrugForm,
  OrderTestForm,
  PreRoundChecklist,
  RoundSummaryModal,
  VitalEntryForm,
  default: WardRound,
  saveNoteState
}, Symbol.toStringTag, { value: "Module" }));
const DRAIN_COLOR_STYLES = {
  Serous: "bg-yellow-50 text-yellow-800 border-yellow-300",
  Bloody: "bg-red-50 text-red-800 border-red-300",
  Bilious: "bg-lime-50 text-lime-800 border-lime-300",
  Purulent: "bg-orange-50 text-orange-800 border-orange-300"
};
function storageKey$1(doctorEmail, patientId) {
  return `drain_monitoring_${doctorEmail}_${patientId}`;
}
function loadDrainEntries(doctorEmail, patientId) {
  try {
    const raw = localStorage.getItem(storageKey$1(doctorEmail, patientId));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveDrainEntries(doctorEmail, patientId, entries) {
  localStorage.setItem(
    storageKey$1(doctorEmail, patientId),
    JSON.stringify(entries)
  );
}
function DrainMonitor({
  patientId,
  doctorEmail,
  canEdit
}) {
  const today = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
  const [entries, setEntries] = reactExports.useState(
    () => loadDrainEntries(doctorEmail, patientId)
  );
  const [showForm, setShowForm] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    drainType: "JP",
    amount: 0,
    color: "Serous",
    notes: "",
    time: format(/* @__PURE__ */ new Date(), "HH:mm")
  });
  function setField(key, val) {
    setForm((f) => ({ ...f, [key]: val }));
  }
  function saveEntry() {
    if (form.amount <= 0) {
      ue.error("Enter a valid amount > 0");
      return;
    }
    const entry = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2),
      date: today,
      time: form.time,
      drainType: form.drainType,
      amount: form.amount,
      color: form.color,
      notes: form.notes.trim() || void 0,
      recordedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    saveDrainEntries(doctorEmail, patientId, updated);
    ue.success(`${form.drainType} drain entry saved`);
    setForm({
      drainType: "JP",
      amount: 0,
      color: "Serous",
      notes: "",
      time: format(/* @__PURE__ */ new Date(), "HH:mm")
    });
    setShowForm(false);
  }
  function deleteEntry(id) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    saveDrainEntries(doctorEmail, patientId, updated);
    ue.success("Drain entry removed");
  }
  const drainTypes = reactExports.useMemo(() => {
    const types = new Set(entries.map((e) => e.drainType));
    return Array.from(types);
  }, [entries]);
  const spikeAlerts = reactExports.useMemo(() => {
    const alerts = [];
    for (const dt of drainTypes) {
      const typeEntries = entries.filter((e) => e.drainType === dt);
      const todayTotal = typeEntries.filter((e) => e.date === today).reduce((s, e) => s + e.amount, 0);
      const yesterday = format(new Date(Date.now() - 864e5), "yyyy-MM-dd");
      const yesterdayTotal = typeEntries.filter((e) => e.date === yesterday).reduce((s, e) => s + e.amount, 0);
      if (yesterdayTotal > 0 && todayTotal - yesterdayTotal > 50) {
        alerts.push({ drainType: dt, diff: todayTotal - yesterdayTotal });
      }
    }
    return alerts;
  }, [entries, drainTypes, today]);
  function getDrainTrendData(drainType) {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = format(new Date(Date.now() - i * 864e5), "yyyy-MM-dd");
      const total = entries.filter((e) => e.drainType === drainType && e.date === d).reduce((s, e) => s + e.amount, 0);
      days.push({ date: d.slice(5), amount: total });
    }
    return days;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 rounded-xl border border-orange-200 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-orange-800 flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-5 h-5" }),
          "Drain Monitoring"
        ] }),
        canEdit && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "bg-orange-600 hover:bg-orange-700 text-white gap-1",
            onClick: () => setShowForm(!showForm),
            "data-ocid": "drain_monitor.add_entry_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
              "Add Drain Entry"
            ]
          }
        )
      ] }),
      spikeAlerts.map(({ drainType, diff }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "mb-2 bg-amber-100 border border-amber-300 rounded-xl p-3 flex items-start gap-2",
          "data-ocid": "drain_monitor.spike_alert",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-amber-600 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-amber-800", children: [
              "⚠️ Sudden Drain Increase: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: drainType }),
              " increased by",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                "+",
                diff,
                " ml"
              ] }),
              " compared to yesterday."
            ] })
          ]
        },
        drainType
      )),
      drainTypes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: drainTypes.map((dt) => {
        const todayEntries = entries.filter(
          (e) => e.drainType === dt && e.date === today
        );
        const todayTotal = todayEntries.reduce((s, e) => s + e.amount, 0);
        const latestEntry = todayEntries[0];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-white rounded-xl border border-orange-200 p-3",
            "data-ocid": "drain_monitor.summary_card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-sm text-orange-800", children: [
                  dt,
                  " Drain"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-orange-700", children: [
                  todayTotal,
                  " ml"
                ] })
              ] }),
              latestEntry && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-xs border rounded-full px-2 py-0.5 font-medium ${DRAIN_COLOR_STYLES[latestEntry.color]}`,
                  children: latestEntry.color
                }
              ),
              todayEntries.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: "No entries today" })
            ]
          },
          dt
        );
      }) })
    ] }),
    showForm && canEdit && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-orange-200 p-5 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-orange-800 text-sm", children: "New Drain Entry" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Drain Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "select",
            {
              value: form.drainType,
              onChange: (e) => setField("drainType", e.target.value),
              className: "w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300",
              "data-ocid": "drain_monitor.type_select",
              children: ["JP", "Hemovac", "T-tube", "Other"].map(
                (t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t, children: t }, t)
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Color" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "select",
            {
              value: form.color,
              onChange: (e) => setField("color", e.target.value),
              className: "w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300",
              "data-ocid": "drain_monitor.color_select",
              children: ["Serous", "Bloody", "Bilious", "Purulent"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Amount (ml)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "number",
              min: 0,
              value: form.amount === 0 ? "" : form.amount,
              onChange: (e) => setField(
                "amount",
                e.target.value === "" ? 0 : Number(e.target.value)
              ),
              placeholder: "ml",
              className: "mt-1",
              "data-ocid": "drain_monitor.amount_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "time",
              value: form.time,
              onChange: (e) => setField("time", e.target.value),
              className: "block w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mt-1 font-mono",
              "data-ocid": "drain_monitor.time_input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Notes (optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: form.notes,
            onChange: (e) => setField("notes", e.target.value),
            placeholder: "Any additional observations...",
            className: "mt-1",
            "data-ocid": "drain_monitor.notes_input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: saveEntry,
            className: "bg-orange-600 hover:bg-orange-700 text-white",
            "data-ocid": "drain_monitor.save_button",
            children: "Save Entry"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setShowForm(false), children: "Cancel" })
      ] })
    ] }),
    entries.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-gray-700 text-sm flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-4 h-4 text-orange-600" }),
        "Recent Entries"
      ] }),
      entries.slice(0, 20).map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center justify-between bg-white rounded-xl border border-gray-200 px-4 py-3",
          "data-ocid": "drain_monitor.entry_row",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center min-w-[44px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-orange-700", children: e.drainType }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 font-mono", children: e.time })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold text-gray-800", children: [
                  e.amount,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-gray-500", children: "ml" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: e.date })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-xs border rounded-full px-2 py-0.5 font-medium ${DRAIN_COLOR_STYLES[e.color]}`,
                  children: e.color
                }
              ),
              e.notes && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500 hidden sm:inline", children: e.notes })
            ] }),
            canEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => deleteEntry(e.id),
                className: "text-red-400 hover:text-red-600",
                "data-ocid": "drain_monitor.delete_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
              }
            )
          ]
        },
        e.id
      ))
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-8 bg-white rounded-xl border border-gray-200",
        "data-ocid": "drain_monitor.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-8 h-8 text-gray-300 mx-auto mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "No drain entries yet." })
        ]
      }
    ),
    drainTypes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: drainTypes.map((dt) => {
      const data = getDrainTrendData(dt);
      const hasData = data.some((d) => d.amount > 0);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-white rounded-xl border border-orange-200 shadow-sm p-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-orange-800 mb-3 text-sm", children: [
              dt,
              " Drain — 7-Day Trend",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal ml-1 opacity-60", children: "(ml/day)" })
            ] }),
            hasData ? /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#f0f0f0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "date", tick: { fontSize: 10 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                YAxis,
                {
                  tick: { fontSize: 10 },
                  label: {
                    value: "ml",
                    angle: -90,
                    position: "insideLeft",
                    style: { fontWeight: "bold", fontSize: 10 }
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => [`${v} ml`, dt] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Bar,
                {
                  dataKey: "amount",
                  fill: "#f97316",
                  radius: [4, 4, 0, 0]
                }
              )
            ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-6 text-gray-400 text-xs", children: "No data for the past 7 days" })
          ]
        },
        dt
      );
    }) })
  ] });
}
const EMPTY_ENTRY = () => ({
  oralIntake: 0,
  ivFluidType: "",
  ivFluidAmount: 0,
  ngFeed: 0,
  urineOutput: 0,
  drainOutput: 0,
  tTubeOutput: 0,
  vomitus: 0
});
function storageKey(doctorEmail, patientId, date) {
  return `io_chart_${doctorEmail}_${patientId}_${date}`;
}
function loadEntries(doctorEmail, patientId, date) {
  try {
    const raw = localStorage.getItem(storageKey(doctorEmail, patientId, date));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveEntries(doctorEmail, patientId, date, entries) {
  localStorage.setItem(
    storageKey(doctorEmail, patientId, date),
    JSON.stringify(entries)
  );
}
function IOChart({
  patientId,
  doctorEmail,
  patientWeightKg,
  canEdit
}) {
  const today = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
  const [selectedDate, setSelectedDate] = reactExports.useState(today);
  const [entries, setEntries] = reactExports.useState(
    () => loadEntries(doctorEmail, patientId, today)
  );
  const [showForm, setShowForm] = reactExports.useState(false);
  const [editingId, setEditingId] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    time: format(/* @__PURE__ */ new Date(), "HH:mm"),
    ...EMPTY_ENTRY()
  });
  function loadForDate(date) {
    setSelectedDate(date);
    setEntries(loadEntries(doctorEmail, patientId, date));
  }
  function setField(key, val) {
    setForm((f) => ({ ...f, [key]: val }));
  }
  function resetForm() {
    setForm({ time: format(/* @__PURE__ */ new Date(), "HH:mm"), ...EMPTY_ENTRY() });
    setEditingId(null);
    setShowForm(false);
  }
  function saveEntry() {
    let updated;
    if (editingId) {
      updated = entries.map(
        (e) => e.id === editingId ? { ...form, id: editingId } : e
      );
    } else {
      const newEntry = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2),
        ...form
      };
      updated = [...entries, newEntry].sort(
        (a, b) => a.time.localeCompare(b.time)
      );
    }
    setEntries(updated);
    saveEntries(doctorEmail, patientId, selectedDate, updated);
    ue.success(editingId ? "Entry updated" : "I/O entry saved");
    resetForm();
  }
  function deleteEntry(id) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    saveEntries(doctorEmail, patientId, selectedDate, updated);
    ue.success("Entry removed");
  }
  function openEdit(e) {
    setEditingId(e.id);
    setForm({ ...e });
    setShowForm(true);
  }
  const totals = reactExports.useMemo(() => {
    const totalIntake = entries.reduce(
      (s, e) => s + e.oralIntake + e.ivFluidAmount + e.ngFeed,
      0
    );
    const totalUrine = entries.reduce((s, e) => s + e.urineOutput, 0);
    const totalOutput = entries.reduce(
      (s, e) => s + e.urineOutput + e.drainOutput + e.tTubeOutput + e.vomitus,
      0
    );
    const balance = totalIntake - totalOutput;
    const hoursElapsed = (() => {
      if (entries.length < 2) return 1;
      const first = entries[0].time.split(":").map(Number);
      const last = entries[entries.length - 1].time.split(":").map(Number);
      const diff = (last[0] * 60 + last[1] - (first[0] * 60 + first[1])) / 60;
      return diff < 0.5 ? 1 : diff;
    })();
    const urineRate = patientWeightKg && patientWeightKg > 0 ? totalUrine / (patientWeightKg * hoursElapsed) : null;
    return { totalIntake, totalUrine, totalOutput, balance, urineRate };
  }, [entries, patientWeightKg]);
  const urineAlertActive = totals.urineRate !== null && totals.urineRate < 0.5;
  const chartData = reactExports.useMemo(
    () => entries.map((e) => ({
      time: e.time,
      "Urine (ml)": e.urineOutput,
      "IV Fluid (ml)": e.ivFluidAmount
    })),
    [entries]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cyan-50 rounded-xl border border-cyan-200 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-cyan-800 flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "w-5 h-5" }),
          "Intake–Output Chart"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              value: selectedDate,
              max: today,
              onChange: (e) => loadForDate(e.target.value),
              className: "border border-cyan-300 rounded-lg px-3 py-1.5 text-sm text-cyan-800 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            }
          ),
          canEdit && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "bg-cyan-700 hover:bg-cyan-800 text-white gap-1",
              onClick: () => {
                setShowForm(!showForm);
                setEditingId(null);
                setForm({
                  time: format(/* @__PURE__ */ new Date(), "HH:mm"),
                  ...EMPTY_ENTRY()
                });
              },
              "data-ocid": "io_chart.add_entry_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
                "Add Entry"
              ]
            }
          )
        ] })
      ] }),
      urineAlertActive && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "mb-3 bg-red-100 border border-red-300 rounded-xl p-3 flex items-start gap-2",
          "data-ocid": "io_chart.urine_alert",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-red-600 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-red-700", children: "🚨 Low Urine Output Alert" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-red-600", children: [
                "U/O = ",
                totals.urineRate.toFixed(2),
                " ml/kg/hr (Normal ≥ 0.5 ml/kg/hr)"
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
        {
          label: "Total Intake",
          value: `${totals.totalIntake} ml`,
          color: "bg-blue-50 border-blue-200 text-blue-800"
        },
        {
          label: "Total Output",
          value: `${totals.totalOutput} ml`,
          color: "bg-orange-50 border-orange-200 text-orange-800"
        },
        {
          label: "Urine Output",
          value: `${totals.totalUrine} ml`,
          color: urineAlertActive ? "bg-red-100 border-red-300 text-red-800" : "bg-teal-50 border-teal-200 text-teal-800"
        },
        {
          label: "Net Balance",
          value: `${totals.balance >= 0 ? "+" : ""}${totals.balance} ml`,
          color: totals.balance >= 0 ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"
        }
      ].map(({ label, value, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `rounded-xl border p-3 text-center ${color}`,
          "data-ocid": "io_chart.summary_card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium opacity-70", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold", children: value })
          ]
        },
        label
      )) })
    ] }),
    showForm && canEdit && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-cyan-200 p-5 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-cyan-800 text-sm", children: editingId ? "Edit I/O Entry" : "New I/O Entry" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "time",
            value: form.time,
            onChange: (e) => setField("time", e.target.value),
            className: "block border border-gray-200 rounded-lg px-3 py-2 text-sm mt-1 font-mono",
            "data-ocid": "io_chart.time_input"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-blue-800 uppercase tracking-wide", children: "Intake" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            NumberField,
            {
              label: "Oral Intake (ml)",
              value: form.oralIntake,
              onChange: (v) => setField("oralIntake", v),
              ocid: "io_chart.oral_input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "IV Fluid Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: form.ivFluidType,
                onChange: (e) => setField("ivFluidType", e.target.value),
                placeholder: "e.g. NS, D5W, RL",
                className: "mt-1 text-sm",
                "data-ocid": "io_chart.iv_type_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            NumberField,
            {
              label: "IV Fluid Amount (ml)",
              value: form.ivFluidAmount,
              onChange: (v) => setField("ivFluidAmount", v),
              ocid: "io_chart.iv_amount_input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            NumberField,
            {
              label: "NG Feed (ml)",
              value: form.ngFeed,
              onChange: (v) => setField("ngFeed", v),
              ocid: "io_chart.ng_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 border border-orange-200 rounded-xl p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-orange-800 uppercase tracking-wide", children: "Output" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            NumberField,
            {
              label: "Urine Output (ml)",
              value: form.urineOutput,
              onChange: (v) => setField("urineOutput", v),
              ocid: "io_chart.urine_input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            NumberField,
            {
              label: "Drain Output (ml)",
              value: form.drainOutput,
              onChange: (v) => setField("drainOutput", v),
              ocid: "io_chart.drain_input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            NumberField,
            {
              label: "T-tube Output (ml)",
              value: form.tTubeOutput,
              onChange: (v) => setField("tTubeOutput", v),
              ocid: "io_chart.ttube_input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            NumberField,
            {
              label: "Vomitus (ml)",
              value: form.vomitus,
              onChange: (v) => setField("vomitus", v),
              ocid: "io_chart.vomitus_input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: saveEntry,
            className: "bg-cyan-700 hover:bg-cyan-800 text-white",
            "data-ocid": "io_chart.save_button",
            children: [
              editingId ? "Update" : "Save",
              " Entry"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: resetForm, children: "Cancel" })
      ] })
    ] }),
    entries.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl border border-gray-200 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: [
        "Time",
        "Oral (ml)",
        "IV (ml)",
        "NG (ml)",
        "Urine (ml)",
        "Drain (ml)",
        "T-tube (ml)",
        "Vomitus (ml)",
        ""
      ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "th",
        {
          className: "px-3 py-2.5 text-left font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap",
          children: h
        },
        h
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: entries.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "border-t border-gray-100 hover:bg-gray-50",
          "data-ocid": "io_chart.entry_row",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-mono font-semibold text-gray-700", children: e.time }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-blue-700", children: e.oralIntake || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-blue-700", children: e.ivFluidAmount ? `${e.ivFluidAmount}${e.ivFluidType ? ` (${e.ivFluidType})` : ""}` : "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-blue-700", children: e.ngFeed || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "td",
              {
                className: `px-3 py-2 font-semibold ${e.urineOutput === 0 ? "text-red-500" : "text-teal-700"}`,
                children: e.urineOutput || "0"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-orange-700", children: e.drainOutput || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-orange-700", children: e.tTubeOutput || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-orange-700", children: e.vomitus || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: canEdit && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => openEdit(e),
                  className: "text-blue-400 hover:text-blue-700 text-xs px-1.5 py-0.5 rounded border border-blue-200 hover:border-blue-400",
                  "data-ocid": "io_chart.edit_button",
                  children: "Edit"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => deleteEntry(e.id),
                  className: "text-red-400 hover:text-red-600",
                  "data-ocid": "io_chart.delete_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                }
              )
            ] }) })
          ]
        },
        e.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tfoot", { className: "bg-gray-50 border-t-2 border-gray-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-bold text-gray-700 text-xs", children: "TOTAL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-bold text-blue-800", children: entries.reduce((s, e) => s + e.oralIntake, 0) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-bold text-blue-800", children: entries.reduce((s, e) => s + e.ivFluidAmount, 0) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-bold text-blue-800", children: entries.reduce((s, e) => s + e.ngFeed, 0) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-bold text-teal-800", children: totals.totalUrine }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-bold text-orange-800", children: entries.reduce((s, e) => s + e.drainOutput, 0) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-bold text-orange-800", children: entries.reduce((s, e) => s + e.tTubeOutput, 0) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-bold text-orange-800", children: entries.reduce((s, e) => s + e.vomitus, 0) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", {})
      ] }) })
    ] }) }) }),
    entries.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-8 bg-white rounded-xl border border-gray-200",
        "data-ocid": "io_chart.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "w-8 h-8 text-cyan-300 mx-auto mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-400", children: [
            "No I/O entries for ",
            selectedDate,
            "."
          ] }),
          canEdit && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-1", children: 'Click "+ Add Entry" to start tracking.' })
        ]
      }
    ),
    chartData.length >= 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-teal-200 shadow-sm p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-teal-800 mb-3 text-sm flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "w-4 h-4" }),
        " Urine Output Trend",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal opacity-60 ml-1", children: "(ml)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data: chartData, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#f0f0f0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "time", tick: { fontSize: 10 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          YAxis,
          {
            tick: { fontSize: 10 },
            label: {
              value: "ml",
              angle: -90,
              position: "insideLeft",
              style: { fontWeight: "bold", fontSize: 10 }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Line,
          {
            type: "monotone",
            dataKey: "Urine (ml)",
            stroke: "#0d9488",
            strokeWidth: 2,
            dot: { r: 3 },
            connectNulls: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Line,
          {
            type: "monotone",
            dataKey: "IV Fluid (ml)",
            stroke: "#3b82f6",
            strokeWidth: 2,
            dot: { r: 3 },
            connectNulls: true
          }
        )
      ] }) })
    ] })
  ] });
}
function NumberField({
  label,
  value,
  onChange,
  ocid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "number",
        min: 0,
        value: value === 0 ? "" : value,
        onChange: (e) => onChange(e.target.value === "" ? 0 : Number(e.target.value)),
        placeholder: "0",
        className: "mt-1 text-sm",
        "data-ocid": ocid
      }
    )
  ] });
}
const ROS_SYSTEMS = ["CVS", "Respiratory", "GI", "CNS", "GU"];
const EXAM_SYSTEMS = ["General", "CVS", "Respiratory", "Abdomen", "CNS"];
const COMPLAINT_CHIPS = [
  "Fever",
  "Pain",
  "Vomiting",
  "Cough",
  "SOB",
  "Dizziness",
  "Nausea",
  "Headache",
  "Weakness",
  "Diarrhea"
];
const NURSING_CHIPS = [
  "NPO",
  "IV access check",
  "Position change Q2h",
  "O₂ therapy",
  "Strict I&O",
  "Isolation precautions",
  "Monitor vitals Q4h",
  "Wound care"
];
const QUICK_TEMPLATES = {
  "Pneumonia Day 1": {
    chiefComplaintsToday: "Fever, cough with sputum, SOB on exertion",
    assessmentStatus: "Stable",
    clinicalTrend: "Stable",
    assessment: "Pneumonia Day 1 — patient hemodynamically stable. Starting empirical antibiotics. Monitor SpO₂ closely."
  },
  "Pneumonia Day 3": {
    chiefComplaintsToday: "Reducing fever, cough improving",
    assessmentStatus: "Improving",
    clinicalTrend: "Improving",
    assessment: "Pneumonia Day 3 — clinical improvement noted. Continue current antibiotics. Reassess in 48h."
  },
  "Post-Op Day 1": {
    chiefComplaintsToday: "Pain at wound site, minimal nausea",
    assessmentStatus: "Stable",
    clinicalTrend: "Stable",
    assessment: "Post-operative Day 1. Wound intact, vitals stable. Continue IV antibiotics and analgesia."
  },
  "Sepsis Protocol": {
    chiefComplaintsToday: "High fever, rigors, confusion",
    assessmentStatus: "Worsening",
    clinicalTrend: "Deteriorating",
    assessment: "Sepsis protocol initiated. Broad-spectrum antibiotics started. Aggressive fluid resuscitation. ICU consult requested."
  },
  "Diabetic Ketoacidosis": {
    chiefComplaintsToday: "Vomiting, polyuria, altered consciousness",
    assessmentStatus: "Worsening",
    clinicalTrend: "Deteriorating",
    assessment: "Diabetic Ketoacidosis. Insulin infusion started. IV fluids and electrolyte monitoring ongoing."
  },
  "Stable Continue": {
    chiefComplaintsToday: "No new complaints today",
    assessmentStatus: "Stable",
    clinicalTrend: "Stable",
    assessment: "Patient stable and improving. Continue current management plan."
  }
};
function noteKey(doctorEmail, patientId, date) {
  return `daily_note_${doctorEmail}_${patientId}_${date}`;
}
function loadNote(doctorEmail, patientId, date) {
  try {
    const raw = localStorage.getItem(noteKey(doctorEmail, patientId, date));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function saveNote(doctorEmail, patientId, date, data) {
  localStorage.setItem(
    noteKey(doctorEmail, patientId, date),
    JSON.stringify(data)
  );
}
function freshNote(date) {
  return {
    date,
    state: "none",
    activeComplaints: [],
    activeDiagnoses: [],
    chiefComplaintsToday: "",
    sleep: "",
    appetite: "",
    mobility: "",
    rosData: ROS_SYSTEMS.map((name) => ({
      name,
      reviewedNormal: false,
      findings: ""
    })),
    objectiveNotes: "",
    examSystems: EXAM_SYSTEMS.map((name) => ({ name, findings: "" })),
    assessment: "",
    assessmentStatus: "Stable",
    clinicalTrend: "Stable",
    planItems: [],
    nursingInstructions: [],
    dischargeCriteria: [],
    referral: false,
    carryForwardDismissed: false,
    versions: []
  };
}
function NoteStateBanner({
  state,
  rejectionReason
}) {
  if (state === "none") return null;
  const config = {
    intern_draft: {
      bg: "bg-yellow-50 border-yellow-300",
      text: "text-yellow-800",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
      label: "Draft — Awaiting MO Review"
    },
    mo_reviewed: {
      bg: "bg-blue-50 border-blue-300",
      text: "text-blue-800",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-4 h-4" }),
      label: "MO Reviewed — Awaiting Consultant Finalization"
    },
    finalized: {
      bg: "bg-green-50 border-green-300",
      text: "text-green-800",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
      label: "FINALIZED — Note Locked"
    },
    quick_review: {
      bg: "bg-green-50 border-green-300",
      text: "text-green-800",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
      label: "Quick Review — Finalized"
    },
    none: { bg: "", text: "", icon: null, label: "" }
  }[state];
  if (!config.label) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `rounded-xl border px-4 py-3 flex items-center gap-2.5 ${config.bg} ${config.text}`,
      children: [
        config.icon,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold", children: config.label }),
          rejectionReason && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs mt-0.5", children: [
            "🔙 Returned by Consultant:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: rejectionReason })
          ] })
        ] }),
        state === "finalized" || state === "quick_review" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 opacity-60" }) : null
      ]
    }
  );
}
function ReadOnlyOverlay({ message }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "absolute inset-0 z-10 rounded-lg bg-muted/50 flex items-center justify-center cursor-not-allowed",
      onClick: () => ue.info(message),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-1.5 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3.5 h-3.5 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground", children: message })
      ] })
    }
  ) });
}
function VersionHistoryModal({
  versions,
  onClose
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "w-4 h-4 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", children: "Version History" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-muted-foreground" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-5 space-y-3", children: versions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-center py-4", children: "No version history yet." }) : versions.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border border-border rounded-lg p-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold bg-primary/10 text-primary px-1.5 py-0.5 rounded-full", children: [
              "v",
              v.version
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", children: STAFF_ROLE_LABELS[v.authorRole] ?? v.authorRole }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "— ",
              v.authorName
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: format(new Date(v.timestamp), "dd MMM yyyy, HH:mm") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", children: v.summary })
        ]
      },
      v.version
    )) })
  ] }) });
}
const TAB_CONFIG = [
  {
    key: "S",
    label: "📝 S — Subjective",
    activeColor: "bg-blue-600",
    locked: false,
    lockedFor: []
  },
  {
    key: "O",
    label: "🔬 O — Objective",
    activeColor: "bg-teal-600",
    locked: false,
    lockedFor: []
  },
  {
    key: "A",
    label: "📊 A — Assessment",
    activeColor: "bg-amber-600",
    locked: true,
    lockedFor: ["intern_doctor"]
  },
  {
    key: "P",
    label: "💊 P — Plan",
    activeColor: "bg-indigo-600",
    locked: true,
    lockedFor: ["intern_doctor"]
  },
  {
    key: "all",
    label: "🗂 All Findings",
    activeColor: "bg-slate-700",
    locked: false,
    lockedFor: []
  }
];
function DailyProgressNote({
  patientId,
  doctorEmail,
  authorName,
  viewerRole,
  latestVitals,
  // prescriptions and admissionDate reserved for future use
  onNoteStateChange
}) {
  useRolePermissions();
  const today = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
  const yesterday = format(new Date(Date.now() - 864e5), "yyyy-MM-dd");
  const isIntern = viewerRole === "intern_doctor";
  const isMO = viewerRole === "medical_officer";
  const isConsultant = viewerRole === "consultant_doctor" || viewerRole === "doctor" || viewerRole === "admin";
  const canViewHistory = isConsultant;
  const [note, setNote] = reactExports.useState(() => {
    const existing = loadNote(doctorEmail, patientId, today);
    if (existing) return existing;
    return freshNote(today);
  });
  const isFinalized = note.state === "finalized" || note.state === "quick_review";
  const [carriedFrom, setCarriedFrom] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const existing = loadNote(doctorEmail, patientId, today);
    if (existing == null ? void 0 : existing.carryForwardDismissed) return;
    const prev = loadNote(doctorEmail, patientId, yesterday);
    if (!prev) return;
    if (existing && (existing.activeComplaints.length > 0 || existing.activeDiagnoses.length > 0))
      return;
    const carried = existing ?? freshNote(today);
    carried.activeComplaints = prev.activeComplaints.filter((c) => !c.resolved).map((c) => ({ ...c, id: `${Date.now().toString(36)}${c.id}` }));
    carried.activeDiagnoses = prev.activeDiagnoses.map((d) => ({ ...d }));
    setNote(carried);
    saveNote(doctorEmail, patientId, today, carried);
    setCarriedFrom(yesterday);
  }, [doctorEmail, patientId, today, yesterday]);
  const autoSaveRef = reactExports.useRef(null);
  const noteRef = reactExports.useRef(note);
  noteRef.current = note;
  const lastAutoSave = reactExports.useRef(null);
  reactExports.useEffect(() => {
    autoSaveRef.current = setInterval(() => {
      if (!isFinalized) {
        saveNote(doctorEmail, patientId, today, noteRef.current);
        const t = (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        });
        lastAutoSave.current = t;
      }
    }, 3e4);
    return () => {
      if (autoSaveRef.current) clearInterval(autoSaveRef.current);
    };
  }, [doctorEmail, patientId, today, isFinalized]);
  const [activeTab, setActiveTab] = reactExports.useState("S");
  const [showTemplates, setShowTemplates] = reactExports.useState(false);
  const [showVersionHistory, setShowVersionHistory] = reactExports.useState(false);
  const [rejectionReason, setRejectionReason] = reactExports.useState("");
  const [showRejectModal, setShowRejectModal] = reactExports.useState(false);
  const [lastAutoSaveTime, setLastAutoSaveTime] = reactExports.useState(null);
  const [newComplaintText, setNewComplaintText] = reactExports.useState("");
  const [newDiagText, setNewDiagText] = reactExports.useState("");
  const [newDiagClass, setNewDiagClass] = reactExports.useState("Primary");
  const [showPlanForm, setShowPlanForm] = reactExports.useState(false);
  const [planForm, setPlanForm] = reactExports.useState({
    category: "drug",
    description: "",
    dose: "",
    frequency: "",
    duration: "",
    route: "",
    urgency: "Routine"
  });
  function updateNote(partial) {
    if (isFinalized) {
      ue.info("This note is finalized and cannot be edited.");
      return;
    }
    const updated = { ...note, ...partial };
    setNote(updated);
    saveNote(doctorEmail, patientId, today, updated);
  }
  function addComplaint(text) {
    const t = (text ?? newComplaintText).trim();
    if (!t) return;
    updateNote({
      activeComplaints: [
        ...note.activeComplaints,
        {
          id: `${Date.now().toString(36)}`,
          text: t,
          trend: "= same",
          resolved: false
        }
      ]
    });
    setNewComplaintText("");
  }
  function removeComplaint(id) {
    updateNote({
      activeComplaints: note.activeComplaints.filter((c) => c.id !== id)
    });
  }
  function updateComplaintTrend(id, trend) {
    updateNote({
      activeComplaints: note.activeComplaints.map(
        (c) => c.id === id ? { ...c, trend } : c
      )
    });
  }
  function toggleComplaintResolved(id) {
    updateNote({
      activeComplaints: note.activeComplaints.map(
        (c) => c.id === id ? { ...c, resolved: !c.resolved } : c
      )
    });
  }
  function addDiagnosis() {
    if (!newDiagText.trim()) return;
    updateNote({
      activeDiagnoses: [
        ...note.activeDiagnoses,
        {
          id: `${Date.now().toString(36)}`,
          name: newDiagText.trim(),
          classification: newDiagClass,
          status: "active"
        }
      ]
    });
    setNewDiagText("");
  }
  function toggleDiagStatus(id) {
    updateNote({
      activeDiagnoses: note.activeDiagnoses.map(
        (d) => d.id === id ? { ...d, status: d.status === "active" ? "resolved" : "active" } : d
      )
    });
  }
  function generateAssessment() {
    const primaryDx = note.activeDiagnoses.find(
      (d) => d.classification === "Primary" && d.status === "active"
    );
    const cc = note.activeComplaints.filter((c) => !c.resolved).map((c) => c.text).join(", ");
    const vitalsText = latestVitals ? [
      latestVitals.bloodPressure && `BP ${latestVitals.bloodPressure}`,
      latestVitals.pulse && `Pulse ${latestVitals.pulse}`,
      latestVitals.temperature && `Temp ${latestVitals.temperature}°F`,
      latestVitals.oxygenSaturation && `SpO₂ ${latestVitals.oxygenSaturation}%`
    ].filter(Boolean).join(", ") : "Vitals not available";
    const text = [
      `Patient is ${note.clinicalTrend.toLowerCase()}.`,
      cc ? `Active complaints: ${cc}.` : "No active complaints.",
      `Vitals: ${vitalsText}.`,
      primaryDx ? `Primary diagnosis: ${primaryDx.name}.` : ""
    ].filter(Boolean).join(" ");
    updateNote({ assessment: text });
    ue.success("Assessment generated — review before saving");
  }
  function addPlanItem() {
    if (!planForm.description.trim()) {
      ue.error("Enter a description");
      return;
    }
    const item = {
      id: Date.now().toString(36),
      category: planForm.category,
      description: planForm.description.trim(),
      dose: planForm.dose || void 0,
      frequency: planForm.frequency || void 0,
      duration: planForm.duration || void 0,
      route: planForm.route || void 0,
      urgency: planForm.urgency
    };
    updateNote({ planItems: [...note.planItems, item] });
    setPlanForm({
      category: "drug",
      description: "",
      dose: "",
      frequency: "",
      duration: "",
      route: "",
      urgency: "Routine"
    });
    setShowPlanForm(false);
  }
  function removePlanItem(id) {
    updateNote({ planItems: note.planItems.filter((p) => p.id !== id) });
  }
  function toggleNursingInstruction(chip) {
    const existing = note.nursingInstructions.includes(chip);
    updateNote({
      nursingInstructions: existing ? note.nursingInstructions.filter((n) => n !== chip) : [...note.nursingInstructions, chip]
    });
  }
  function pushVersion(newState, summary) {
    const v = {
      version: note.versions.length + 1,
      authorName,
      authorRole: viewerRole,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      state: newState,
      summary
    };
    return [...note.versions, v];
  }
  function handleInternSubmit() {
    if (!note.chiefComplaintsToday.trim() && note.activeComplaints.length === 0) {
      ue.error("Complete Subjective section before submitting");
      return;
    }
    const versions = pushVersion(
      "intern_draft",
      "Intern submitted draft (S+O sections)"
    );
    const updated = { ...note, state: "intern_draft", versions };
    setNote(updated);
    saveNote(doctorEmail, patientId, today, updated);
    saveNoteState(patientId, today, "intern_draft");
    onNoteStateChange == null ? void 0 : onNoteStateChange("intern_draft");
    ue.success("✓ Draft submitted to MO for review");
  }
  function handleMOSubmit() {
    if (!note.assessment.trim()) {
      ue.error("Assessment is required before submitting to Consultant");
      return;
    }
    const versions = pushVersion(
      "mo_reviewed",
      "MO reviewed and completed full SOAP note"
    );
    const updated = { ...note, state: "mo_reviewed", versions };
    setNote(updated);
    saveNote(doctorEmail, patientId, today, updated);
    saveNoteState(patientId, today, "mo_reviewed");
    onNoteStateChange == null ? void 0 : onNoteStateChange("mo_reviewed");
    ue.success("✓ Submitted to Consultant for finalization");
  }
  function handleConsultantFinalize() {
    const versions = pushVersion(
      "finalized",
      `Finalized by Consultant ${authorName}`
    );
    const updated = { ...note, state: "finalized", versions };
    setNote(updated);
    saveNote(doctorEmail, patientId, today, updated);
    saveNoteState(patientId, today, "finalized");
    onNoteStateChange == null ? void 0 : onNoteStateChange("finalized");
    ue.success("🔒 Note finalized and locked");
  }
  function handleReject() {
    if (!rejectionReason.trim()) {
      ue.error("Provide a reason");
      return;
    }
    const versions = pushVersion(
      "none",
      `Returned by Consultant: ${rejectionReason}`
    );
    const updated = {
      ...note,
      state: "none",
      rejectionReason,
      versions
    };
    setNote(updated);
    saveNote(doctorEmail, patientId, today, updated);
    saveNoteState(patientId, today, "none");
    onNoteStateChange == null ? void 0 : onNoteStateChange("none");
    setShowRejectModal(false);
    setRejectionReason("");
    ue.warning("🔙 Note returned to MO");
  }
  function handleSave() {
    if (isFinalized) {
      ue.info("This note is finalized.");
      return;
    }
    saveNote(doctorEmail, patientId, today, note);
    const t = (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
    setLastAutoSaveTime(t);
    ue.success("Note saved");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      NoteStateBanner,
      {
        state: note.state,
        rejectionReason: note.rejectionReason
      }
    ),
    carriedFrom && !note.carryForwardDismissed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-300 rounded-xl px-4 py-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-4 h-4 text-blue-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-blue-800", children: [
          "📋 Carried forward from",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: carriedFrom }),
          ". Review and update."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => updateNote({ carryForwardDismissed: true }),
          className: "text-blue-400 hover:text-blue-700",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-base font-bold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-5 h-5 text-indigo-600" }),
          " Daily Progress Note"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
          format(/* @__PURE__ */ new Date(), "EEEE, MMMM d, yyyy"),
          " ·",
          " ",
          STAFF_ROLE_LABELS[viewerRole] ?? viewerRole,
          " ",
          "— ",
          authorName,
          (lastAutoSaveTime ?? lastAutoSave.current) && !isFinalized && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-green-600", children: [
            "✓ Draft saved ",
            lastAutoSaveTime ?? lastAutoSave.current
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        !isFinalized && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "gap-1.5 border-indigo-300 text-indigo-700",
              onClick: () => setShowTemplates(!showTemplates),
              "data-ocid": "daily_note.template_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookDashed, { className: "w-3.5 h-3.5" }),
                " Templates"
              ]
            }
          ),
          showTemplates && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-8 z-50 bg-card rounded-xl border border-border shadow-xl w-52", children: Object.keys(QUICK_TEMPLATES).map((name) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "w-full text-left px-4 py-3 text-sm hover:bg-indigo-50 hover:text-indigo-800 first:rounded-t-xl last:rounded-b-xl transition-colors",
              onClick: () => {
                const tpl = QUICK_TEMPLATES[name];
                updateNote(tpl);
                setShowTemplates(false);
                ue.success(`Template “${name}” applied`);
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3.5 h-3.5 inline mr-1.5 opacity-50" }),
                name
              ]
            },
            name
          )) })
        ] }),
        canViewHistory && note.versions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "gap-1.5",
            onClick: () => setShowVersionHistory(true),
            "data-ocid": "daily_note.version_history_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "w-3.5 h-3.5" }),
              " History"
            ]
          }
        ),
        !isFinalized && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            onClick: handleSave,
            className: "gap-1.5",
            "data-ocid": "daily_note.save_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
              " Save"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: TAB_CONFIG.map((tab) => {
      const tabLocked = tab.lockedFor.includes(viewerRole);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setActiveTab(tab.key),
          className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${activeTab === tab.key ? `${tab.activeColor} text-white shadow-sm` : "bg-muted/60 text-muted-foreground hover:bg-muted"}`,
          "data-ocid": `daily_note.tab.${tab.key}`,
          children: [
            tab.label,
            tabLocked && /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3 h-3 opacity-60" })
          ]
        },
        tab.key
      );
    }) }),
    activeTab === "S" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-blue-200 rounded-xl p-5 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-blue-800 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
            " Active Complaints"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => updateNote({ sameAsYesterday_S: true }),
              className: "text-xs text-blue-600 hover:text-blue-800 underline",
              children: "Same as yesterday"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: COMPLAINT_CHIPS.map((chip) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => addComplaint(chip),
            disabled: isFinalized,
            className: "text-xs bg-blue-50 border border-blue-200 text-blue-700 px-2.5 py-1 rounded-full hover:bg-blue-100 transition-colors disabled:opacity-50",
            "data-ocid": "daily_note.complaint_chip",
            children: chip
          },
          chip
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: newComplaintText,
              onChange: (e) => setNewComplaintText(e.target.value),
              placeholder: "Custom complaint",
              onKeyDown: (e) => e.key === "Enter" && addComplaint(),
              className: "flex-1 text-sm",
              disabled: isFinalized,
              "data-ocid": "daily_note.complaint_input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              onClick: () => addComplaint(),
              disabled: isFinalized || !newComplaintText.trim(),
              className: "gap-1",
              "data-ocid": "daily_note.add_complaint_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" })
            }
          )
        ] }),
        note.activeComplaints.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-sm text-muted-foreground text-center py-3",
            "data-ocid": "daily_note.complaints_empty_state",
            children: "No complaints. Add above or use chips."
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: note.activeComplaints.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex items-center gap-2 rounded-lg px-3 py-2 border ${c.resolved ? "bg-muted/40 border-border opacity-60" : "bg-blue-50 border-blue-200"}`,
            "data-ocid": "daily_note.complaint_item",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `flex-1 text-sm ${c.resolved ? "line-through text-muted-foreground" : ""}`,
                  children: c.text
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: c.trend,
                  onChange: (e) => updateComplaintTrend(
                    c.id,
                    e.target.value
                  ),
                  className: "text-xs border border-input rounded px-1 py-0.5",
                  disabled: isFinalized,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "↑ improving", children: "↑ improving" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "↓ worsening", children: "↓ worsening" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "= same", children: "= same" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => toggleComplaintResolved(c.id),
                  disabled: isFinalized,
                  className: `text-xs px-2 py-0.5 rounded-full border font-medium ${c.resolved ? "bg-muted text-muted-foreground" : "bg-green-100 text-green-700 border-green-200"}`,
                  children: c.resolved ? "Resolved" : "Active"
                }
              ),
              !isFinalized && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => removeComplaint(c.id),
                  className: "text-red-400 hover:text-red-600",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                }
              )
            ]
          },
          c.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-blue-200 rounded-xl p-5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-blue-800 text-sm", children: "Patient-reported today" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: note.chiefComplaintsToday,
            onChange: (e) => updateNote({ chiefComplaintsToday: e.target.value }),
            placeholder: "Patient states: fever since morning, cough worse at night...",
            rows: 3,
            className: "border-blue-200 focus-visible:ring-blue-300 text-sm",
            disabled: isFinalized,
            "data-ocid": "daily_note.chief_complaints_textarea"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: ["sleep", "appetite", "mobility"].map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs capitalize text-muted-foreground", children: field }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: note[field],
              onChange: (e) => updateNote({
                [field]: e.target.value
              }),
              className: "w-full mt-1 border border-input rounded-lg px-2 py-1.5 text-xs",
              disabled: isFinalized,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "—" }),
                field === "sleep" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Good" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Fair" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Poor" })
                ] }),
                field === "appetite" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Normal" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Reduced" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Nil" })
                ] }),
                field === "mobility" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Ambulant" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Limited" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Bedrest" })
                ] })
              ]
            }
          )
        ] }, field)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-blue-200 rounded-xl p-5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-blue-800 text-sm", children: "System Review" }),
        note.rosData.map((sys, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "border border-border rounded-lg p-3 space-y-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground w-24", children: sys.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1.5 text-xs cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: sys.reviewedNormal,
                      onChange: (e) => updateNote({
                        rosData: note.rosData.map(
                          (s, idx) => idx === i ? {
                            ...s,
                            reviewedNormal: e.target.checked,
                            findings: e.target.checked ? "" : s.findings
                          } : s
                        )
                      }),
                      className: "accent-teal-600",
                      disabled: isFinalized
                    }
                  ),
                  "Reviewed — Normal"
                ] })
              ] }),
              !sys.reviewedNormal && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: sys.findings,
                  onChange: (e) => updateNote({
                    rosData: note.rosData.map(
                      (s, idx) => idx === i ? { ...s, findings: e.target.value } : s
                    )
                  }),
                  placeholder: "Abnormal findings...",
                  className: "text-xs h-8",
                  disabled: isFinalized
                }
              )
            ]
          },
          sys.name
        ))
      ] })
    ] }),
    activeTab === "O" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-teal-200 rounded-xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-teal-800 text-sm mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4" }),
          " Vitals (entered by nurse)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
          {
            label: "BP",
            value: latestVitals == null ? void 0 : latestVitals.bloodPressure,
            unit: "mmHg"
          },
          { label: "Pulse", value: latestVitals == null ? void 0 : latestVitals.pulse, unit: "bpm" },
          {
            label: "SpO₂",
            value: latestVitals == null ? void 0 : latestVitals.oxygenSaturation,
            unit: "%"
          },
          { label: "Temp", value: latestVitals == null ? void 0 : latestVitals.temperature, unit: "°F" }
        ].map(({ label, value, unit }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-teal-50 rounded-lg px-3 py-2 text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-foreground", children: [
                value ?? "—",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal", children: unit })
              ] })
            ]
          },
          label
        )) }),
        !latestVitals && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-600 mt-2", children: "⚠ No vitals recorded. Nurse should enter vitals." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-teal-200 rounded-xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-teal-800 text-sm mb-3", children: "💧 Intake / Output Chart" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          IOChart,
          {
            patientId,
            doctorEmail,
            canEdit: !isFinalized && !isIntern
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-teal-200 rounded-xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-teal-800 text-sm mb-3", children: "🩺 Drain Monitoring" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DrainMonitor,
          {
            patientId,
            doctorEmail,
            canEdit: !isFinalized && !isIntern
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-teal-200 rounded-xl p-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-teal-800 text-sm", children: "Examination Findings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => updateNote({ sameAsYesterday_O: true }),
              className: "text-xs text-teal-600 hover:text-teal-800 underline",
              children: "Same as yesterday"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SystemicExaminationSection,
          {
            systemicExamFindings: Object.fromEntries(
              (note.examSystems || []).map(
                (s) => [
                  s.name.toLowerCase(),
                  s.findings
                ]
              )
            ),
            onSystemicExamChange: (system, value) => {
              const updatedSystems = [...note.examSystems || []];
              const idx = updatedSystems.findIndex(
                (s) => s.name.toLowerCase() === system
              );
              if (idx >= 0) {
                updatedSystems[idx] = {
                  ...updatedSystems[idx],
                  findings: String(value)
                };
              } else {
                updatedSystems.push({
                  name: system,
                  findings: String(value)
                });
              }
              updateNote({ examSystems: updatedSystems });
            }
          }
        ),
        note.examSystems.map((sys, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-foreground", children: sys.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              value: sys.findings,
              onChange: (e) => updateNote({
                examSystems: note.examSystems.map(
                  (s, idx) => idx === i ? { ...s, findings: e.target.value } : s
                )
              }),
              placeholder: `${sys.name} findings...`,
              rows: 2,
              className: "text-xs border-teal-200 focus-visible:ring-teal-300",
              disabled: isFinalized,
              "data-ocid": `daily_note.exam.${sys.name.toLowerCase()}`
            }
          )
        ] }, sys.name))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-teal-200 rounded-xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-teal-700", children: "Additional Objective Notes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: note.objectiveNotes,
            onChange: (e) => updateNote({ objectiveNotes: e.target.value }),
            placeholder: "Any additional objective findings...",
            rows: 3,
            className: "mt-1 border-teal-200 focus-visible:ring-teal-300",
            disabled: isFinalized,
            "data-ocid": "daily_note.objective_notes"
          }
        )
      ] })
    ] }),
    activeTab === "A" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      isIntern && /* @__PURE__ */ jsxRuntimeExports.jsx(ReadOnlyOverlay, { message: "Intern can view only — MO or Consultant must complete this section" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-amber-200 rounded-xl p-5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-amber-800 flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4" }),
          " Active Diagnoses"
        ] }),
        !isIntern && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: newDiagText,
              onChange: (e) => setNewDiagText(e.target.value),
              placeholder: "Diagnosis name",
              onKeyDown: (e) => e.key === "Enter" && addDiagnosis(),
              className: "flex-1 min-w-[160px] text-sm",
              disabled: isFinalized,
              "data-ocid": "daily_note.diagnosis_input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: newDiagClass,
              onChange: (e) => setNewDiagClass(e.target.value),
              className: "border border-input rounded-lg px-2 py-2 text-sm",
              disabled: isFinalized,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Secondary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Comorbidity" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              onClick: addDiagnosis,
              disabled: isFinalized || !newDiagText.trim(),
              className: "gap-1 bg-amber-600 hover:bg-amber-700",
              "data-ocid": "daily_note.add_diagnosis_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
                " Add"
              ]
            }
          )
        ] }),
        note.activeDiagnoses.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-center py-3", children: "No diagnoses added." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: note.activeDiagnoses.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex items-center gap-2 px-3 py-2 rounded-lg border ${d.status === "active" ? "bg-amber-50 border-amber-200" : "bg-muted/40 border-border opacity-60"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `flex-1 text-sm font-medium ${d.status === "resolved" ? "line-through text-muted-foreground" : ""}`,
                  children: d.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-[10px] font-bold px-1.5 py-0.5 rounded-full ${d.classification === "Primary" ? "bg-red-100 text-red-700" : d.classification === "Secondary" ? "bg-orange-100 text-orange-700" : "bg-muted text-muted-foreground"}`,
                  children: d.classification
                }
              ),
              !isFinalized && !isIntern && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => toggleDiagStatus(d.id),
                  className: `text-xs px-2 py-0.5 rounded-full border ${d.status === "active" ? "bg-green-100 text-green-700 border-green-200" : "bg-muted text-muted-foreground border-border"}`,
                  children: d.status === "active" ? "Active" : "Resolved"
                }
              )
            ]
          },
          d.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-amber-200 rounded-xl p-5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-amber-800 text-sm", children: "Clinical Trend" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: ["Improving", "Stable", "Deteriorating"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => !isFinalized && !isIntern && updateNote({
              clinicalTrend: t,
              assessmentStatus: t === "Improving" ? "Improving" : t === "Deteriorating" ? "Worsening" : "Stable"
            }),
            disabled: isFinalized || isIntern,
            className: `text-sm px-4 py-2 rounded-lg font-semibold border transition-colors ${note.clinicalTrend === t ? t === "Improving" ? "bg-green-600 text-white border-green-600" : t === "Deteriorating" ? "bg-red-600 text-white border-red-600" : "bg-amber-600 text-white border-amber-600" : "bg-card border-border hover:bg-muted"}`,
            children: [
              t === "Improving" ? "✔ " : t === "Deteriorating" ? "⚠ " : "≈ ",
              t
            ]
          },
          t
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-amber-200 rounded-xl p-5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-amber-800 text-sm", children: "Assessment Summary" }),
          !isFinalized && !isIntern && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "gap-1.5 text-xs border-amber-300 text-amber-700",
              onClick: generateAssessment,
              "data-ocid": "daily_note.generate_assessment_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3 h-3" }),
                " Auto-generate"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: note.assessment,
            onChange: (e) => !isFinalized && !isIntern && updateNote({ assessment: e.target.value }),
            placeholder: "Clinical assessment narrative...",
            rows: 4,
            className: `border-amber-200 focus-visible:ring-amber-300 text-sm ${isIntern ? "pointer-events-none opacity-60" : ""}`,
            disabled: isFinalized,
            "data-ocid": "daily_note.assessment_textarea"
          }
        ) })
      ] })
    ] }),
    activeTab === "P" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      isIntern && /* @__PURE__ */ jsxRuntimeExports.jsx(ReadOnlyOverlay, { message: "Intern can view only — MO or Consultant must complete this section" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-indigo-200 rounded-xl p-5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-indigo-800 text-sm flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "w-4 h-4" }),
            " Medication Changes & Orders"
          ] }),
          !isFinalized && !isIntern && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              onClick: () => setShowPlanForm(!showPlanForm),
              className: "gap-1 bg-indigo-600 hover:bg-indigo-700 text-xs",
              "data-ocid": "daily_note.add_plan_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
                " Add"
              ]
            }
          )
        ] }),
        showPlanForm && !isIntern && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-indigo-50 border border-indigo-200 rounded-xl p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: planForm.category,
                  onChange: (e) => setPlanForm((f) => ({
                    ...f,
                    category: e.target.value
                  })),
                  className: "w-full mt-1 border border-input rounded-lg px-2 py-1.5 text-sm",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "drug", children: "Drug" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "investigation", children: "Investigation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "procedure", children: "Procedure" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "nursing", children: "Nursing" })
                  ]
                }
              )
            ] }),
            planForm.category === "investigation" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Urgency" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: planForm.urgency,
                  onChange: (e) => setPlanForm((f) => ({
                    ...f,
                    urgency: e.target.value
                  })),
                  className: "w-full mt-1 border border-input rounded-lg px-2 py-1.5 text-sm",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Routine" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Urgent" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "STAT" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Description (drug name, test, procedure)",
              value: planForm.description,
              onChange: (e) => setPlanForm((f) => ({ ...f, description: e.target.value })),
              className: "text-sm"
            }
          ),
          planForm.category === "drug" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Dose",
                value: planForm.dose,
                onChange: (e) => setPlanForm((f) => ({ ...f, dose: e.target.value })),
                className: "text-sm"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Frequency",
                value: planForm.frequency,
                onChange: (e) => setPlanForm((f) => ({
                  ...f,
                  frequency: e.target.value
                })),
                className: "text-sm"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Duration",
                value: planForm.duration,
                onChange: (e) => setPlanForm((f) => ({ ...f, duration: e.target.value })),
                className: "text-sm"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Route (oral/IV/IM)",
                value: planForm.route,
                onChange: (e) => setPlanForm((f) => ({ ...f, route: e.target.value })),
                className: "text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                onClick: addPlanItem,
                className: "bg-indigo-600 hover:bg-indigo-700",
                children: "Add to Plan"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                onClick: () => setShowPlanForm(false),
                children: "Cancel"
              }
            )
          ] })
        ] }),
        note.planItems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-center py-3", children: "No plan items added." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: note.planItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex items-center gap-2 px-3 py-2 rounded-lg border ${item.category === "drug" ? "bg-indigo-50 border-indigo-200" : item.category === "investigation" ? "bg-purple-50 border-purple-200" : "bg-muted/40 border-border"}`,
            "data-ocid": "daily_note.plan_item",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-[10px] font-bold px-1.5 py-0.5 rounded-full ${item.category === "drug" ? "bg-indigo-100 text-indigo-700" : item.category === "investigation" ? "bg-purple-100 text-purple-700" : "bg-muted text-muted-foreground"}`,
                      children: item.category.toUpperCase()
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium truncate", children: item.description }),
                  item.urgency && item.urgency !== "Routine" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-[10px] px-1.5 py-0.5 rounded-full font-bold ${item.urgency === "STAT" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`,
                      children: item.urgency
                    }
                  )
                ] }),
                item.dose && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  item.dose,
                  " ",
                  item.frequency,
                  " · ",
                  item.duration,
                  " ",
                  item.route ? `· ${item.route}` : ""
                ] })
              ] }),
              !isFinalized && !isIntern && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => removePlanItem(item.id),
                  className: "text-red-400 hover:text-red-600",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                }
              )
            ]
          },
          item.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-indigo-200 rounded-xl p-5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-indigo-800 text-sm", children: "Nursing Instructions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: NURSING_CHIPS.map((chip) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => !isIntern && toggleNursingInstruction(chip),
            disabled: isFinalized || isIntern,
            className: `text-xs px-3 py-1.5 rounded-full border transition-colors ${note.nursingInstructions.includes(chip) ? "bg-teal-600 text-white border-teal-600" : "bg-card border-border hover:bg-muted"} disabled:opacity-50`,
            "data-ocid": "daily_note.nursing_chip",
            children: chip
          },
          chip
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-indigo-200 rounded-xl p-5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-indigo-800 text-sm", children: "Discharge Planning" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Target Discharge Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "date",
              value: note.targetDischargeDate ?? "",
              onChange: (e) => !isIntern && updateNote({ targetDischargeDate: e.target.value }),
              className: "mt-1",
              disabled: isFinalized || isIntern,
              "data-ocid": "daily_note.discharge_date"
            }
          )
        ] }) })
      ] })
    ] }),
    activeTab === "all" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      [
        {
          label: "S — Subjective",
          content: note.chiefComplaintsToday || note.activeComplaints.filter((c) => !c.resolved).map((c) => c.text).join(", ") || "—",
          color: "bg-blue-50 border-blue-200 text-blue-900"
        },
        {
          label: "O — Objective",
          content: note.objectiveNotes || note.examSystems.filter((s) => s.findings).map((s) => `${s.name}: ${s.findings}`).join("\n") || "—",
          color: "bg-teal-50 border-teal-200 text-teal-900"
        },
        {
          label: "A — Assessment",
          content: note.assessment || note.activeDiagnoses.filter((d) => d.status === "active").map((d) => d.name).join(", ") || "—",
          color: "bg-amber-50 border-amber-200 text-amber-900"
        },
        {
          label: "P — Plan",
          content: note.planItems.map((p) => `${p.category.toUpperCase()}: ${p.description}`).join("\n") || "—",
          color: "bg-indigo-50 border-indigo-200 text-indigo-900"
        }
      ].map(({ label, content, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl border p-4 ${color}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold mb-2 opacity-70", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm whitespace-pre-line", children: content })
      ] }, label)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-full bg-card border border-border rounded-xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground mb-2", children: "Clinical Trend" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `text-sm font-bold px-3 py-1 rounded-full ${note.clinicalTrend === "Improving" ? "bg-green-100 text-green-700" : note.clinicalTrend === "Deteriorating" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`,
            children: note.clinicalTrend
          }
        )
      ] })
    ] }),
    !isFinalized && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
      isIntern && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: handleInternSubmit,
          className: "bg-yellow-600 hover:bg-yellow-700 gap-2",
          "data-ocid": "daily_note.intern_submit_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
            " Submit Draft to MO"
          ]
        }
      ),
      isMO && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: handleMOSubmit,
            className: "bg-blue-700 hover:bg-blue-800 gap-2",
            "data-ocid": "daily_note.mo_submit_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-4 h-4" }),
              " Submit to Consultant"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "self-center text-xs text-muted-foreground", children: "MO can write multiple entries per day (morning/evening/emergency)" })
      ] }),
      isConsultant && (note.state === "mo_reviewed" || note.state === "none" || note.state === "intern_draft") && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: handleConsultantFinalize,
            className: "bg-green-700 hover:bg-green-800 gap-2",
            "data-ocid": "daily_note.consultant_finalize_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4" }),
              " Finalize Note"
            ]
          }
        ),
        note.state === "mo_reviewed" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            className: "border-red-300 text-red-600 hover:bg-red-50 gap-2",
            onClick: () => setShowRejectModal(true),
            "data-ocid": "daily_note.reject_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-4 h-4" }),
              " Return to MO"
            ]
          }
        )
      ] })
    ] }) }),
    isFinalized && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 pt-2 border-t border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          size: "sm",
          className: "gap-1.5",
          onClick: () => window.print(),
          "data-ocid": "daily_note.print_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5" }),
            " Print Note"
          ]
        }
      ),
      canViewHistory && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          size: "sm",
          className: "gap-1.5",
          onClick: () => setShowVersionHistory(true),
          "data-ocid": "daily_note.version_history_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "w-3.5 h-3.5" }),
            " View Version History"
          ]
        }
      )
    ] }),
    showRejectModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border rounded-2xl shadow-2xl w-full max-w-md p-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-4 h-4 text-red-500" }),
        " Return Note to MO"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Rejection Reason (required)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: rejectionReason,
            onChange: (e) => setRejectionReason(e.target.value),
            placeholder: "Please revise the assessment and plan...",
            rows: 3,
            className: "mt-1",
            "data-ocid": "daily_note.reject_reason_textarea"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: handleReject,
            className: "flex-1 bg-red-600 hover:bg-red-700",
            "data-ocid": "daily_note.confirm_reject_button",
            children: "Return Note"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: () => setShowRejectModal(false),
            "data-ocid": "daily_note.cancel_reject_button",
            children: "Cancel"
          }
        )
      ] })
    ] }) }),
    showVersionHistory && /* @__PURE__ */ jsxRuntimeExports.jsx(
      VersionHistoryModal,
      {
        versions: note.versions,
        onClose: () => setShowVersionHistory(false)
      }
    )
  ] });
}
export {
  DailyProgressNote as D,
  WardRound$1 as W
};
