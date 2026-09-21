import { i as createLucideIcon, U as useGetAllBeds, V as useAssignBed, W as useCreateBedRecord, r as reactExports, Y as loadFromAllDoctorKeys, j as jsxRuntimeExports, Z as Bed, B as Button, I as Input, D as Dialog, s as DialogContent, t as DialogHeader, v as DialogTitle, b as CircleCheck, u as ue, L as Label, $ as saveClinicalEntitiesWithSync, C as ChevronUp, a as ChevronDown, c as Clock, a0 as getCanisterActor } from "./index-DJeWhCy-.js";
import { S as ScrollArea } from "./scroll-area-DUDQuZCi.js";
import { P as Plus } from "./plus-CHPIrJ6M.js";
import { B as Building2 } from "./building-2-CMX9_teL.js";
import { L as Layers } from "./layers-DwYKTjmE.js";
import { S as Sparkles } from "./sparkles-BXWJULex.js";
import { S as Search } from "./search-BLymxia-.js";
import { f as formatDistanceToNow, d as differenceInDays } from "./formatDistanceToNow-C2IQJfe9.js";
import { f as format } from "./format-C8K1a6Fc.js";
import { C as CircleAlert } from "./circle-alert-3N-VW3xt.js";
import { L as LogOut } from "./log-out-BVpvzsgE.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M8 3 4 7l4 4", key: "9rb6wj" }],
  ["path", { d: "M4 7h16", key: "6tx8e3" }],
  ["path", { d: "m16 21 4-4-4-4", key: "siv7j2" }],
  ["path", { d: "M20 17H4", key: "h6l3hr" }]
];
const ArrowLeftRight = createLucideIcon("arrow-left-right", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5", key: "1osxxc" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M3 10h5", key: "r794hk" }],
  ["path", { d: "M17.5 17.5 16 16.3V14", key: "akvzfd" }],
  ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }]
];
const CalendarClock = createLucideIcon("calendar-clock", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
];
const Timer = createLucideIcon("timer", __iconNode);
const CLINICAL_STORAGE_KEY = "medicare_clinical_data";
function getClinicalStore() {
  try {
    const raw = localStorage.getItem(CLINICAL_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}
function saveClinicalStore(store) {
  try {
    localStorage.setItem(CLINICAL_STORAGE_KEY, JSON.stringify(store));
  } catch {
  }
}
const normBigInt = (val) => {
  try {
    return BigInt(String(val ?? 0));
  } catch {
    return BigInt(0);
  }
};
const BED_TYPES = [
  "General",
  "ICU",
  "HDU",
  "Isolation",
  "Private",
  "Cabin"
];
const BED_TYPE_CONFIG = {
  General: {
    label: "General",
    badge: "bg-slate-100 text-slate-600 border-slate-300",
    dot: "bg-slate-400"
  },
  ICU: {
    label: "ICU",
    badge: "bg-red-100 text-red-700 border-red-300",
    dot: "bg-red-500"
  },
  HDU: {
    label: "HDU",
    badge: "bg-orange-100 text-orange-700 border-orange-300",
    dot: "bg-orange-500"
  },
  Isolation: {
    label: "Isolation",
    badge: "bg-yellow-100 text-yellow-700 border-yellow-300",
    dot: "bg-yellow-500"
  },
  Private: {
    label: "Private",
    badge: "bg-teal-100 text-teal-700 border-teal-300",
    dot: "bg-teal-500"
  },
  Cabin: {
    label: "Cabin",
    badge: "bg-purple-100 text-purple-700 border-purple-300",
    dot: "bg-purple-500"
  }
};
function seedBedsIfEmpty() {
  var _a;
  const store = getClinicalStore();
  if ((_a = store.beds) == null ? void 0 : _a.length) return;
  const seeds = [
    {
      id: 1n,
      bedNumber: "G-01",
      ward: "General",
      floor: "Ground Floor",
      hospitalName: "Dhaka Medical College Hospital",
      bedType: "General",
      status: "Empty",
      transferHistory: []
    },
    {
      id: 2n,
      bedNumber: "G-02",
      ward: "General",
      floor: "Ground Floor",
      hospitalName: "Dhaka Medical College Hospital",
      bedType: "General",
      status: "Occupied",
      patientName: "Rahim Uddin",
      admissionDate: BigInt(Date.now() - 864e5 * 2) * 1000000n,
      transferHistory: []
    },
    {
      id: 3n,
      bedNumber: "M-01",
      ward: "Medical",
      floor: "Floor 1",
      hospitalName: "Dhaka Medical College Hospital",
      bedType: "General",
      status: "Empty",
      transferHistory: []
    },
    {
      id: 4n,
      bedNumber: "M-02",
      ward: "Medical",
      floor: "Floor 1",
      hospitalName: "Dhaka Medical College Hospital",
      bedType: "General",
      status: "Maintenance",
      transferHistory: []
    },
    {
      id: 5n,
      bedNumber: "ICU-01",
      ward: "ICU",
      floor: "Floor 2",
      hospitalName: "Dhaka Medical College Hospital",
      bedType: "ICU",
      status: "Occupied",
      patientName: "Karim Hossain",
      admissionDate: BigInt(Date.now() - 864e5) * 1000000n,
      transferHistory: []
    },
    {
      id: 6n,
      bedNumber: "ICU-02",
      ward: "ICU",
      floor: "Floor 2",
      hospitalName: "Dhaka Medical College Hospital",
      bedType: "ICU",
      status: "Cleaning",
      transferHistory: []
    },
    {
      id: 7n,
      bedNumber: "ICU-03",
      ward: "ICU",
      floor: "Floor 2",
      hospitalName: "Dhaka Medical College Hospital",
      bedType: "HDU",
      status: "Reserved",
      reservedForPatient: "Nadia Islam",
      reservationExpiry: new Date(Date.now() + 75 * 60 * 1e3).toISOString(),
      transferHistory: []
    },
    {
      id: 8n,
      bedNumber: "C-01",
      ward: "Chamber",
      floor: "Ground Floor",
      hospitalName: "Dr. Arman Kabir Chamber",
      bedType: "Private",
      status: "Empty",
      transferHistory: []
    },
    {
      id: 9n,
      bedNumber: "C-02",
      ward: "Chamber",
      floor: "Ground Floor",
      hospitalName: "Dr. Arman Kabir Chamber",
      bedType: "Cabin",
      status: "Occupied",
      patientName: "Sumaiya Begum",
      admissionDate: BigInt(Date.now() - 36e5) * 1000000n,
      transferHistory: []
    },
    {
      id: 10n,
      bedNumber: "OBS-01",
      ward: "Observation",
      floor: "Floor 1",
      hospitalName: "Dr. Arman Kabir Chamber",
      bedType: "Isolation",
      status: "Empty",
      transferHistory: []
    }
  ];
  store.beds = seeds;
  saveClinicalStore(store);
}
const STATUS_CONFIG = {
  Empty: {
    cell: "bg-green-500 border-green-600",
    label: "Available",
    dot: "bg-green-500",
    badge: "bg-green-100 text-green-700",
    card: "bg-green-50 border-green-300 text-green-900"
  },
  Occupied: {
    cell: "bg-red-600 border-red-700",
    label: "Occupied",
    dot: "bg-red-600",
    badge: "bg-red-100 text-red-700",
    card: "bg-red-50 border-red-300 text-red-900"
  },
  Maintenance: {
    cell: "bg-gray-400 border-gray-500",
    label: "Maintenance",
    dot: "bg-gray-400",
    badge: "bg-gray-100 text-gray-700",
    card: "bg-gray-50 border-gray-300 text-gray-900"
  },
  Reserved: {
    cell: "bg-amber-500 border-amber-600",
    label: "Reserved",
    dot: "bg-amber-500",
    badge: "bg-amber-100 text-amber-700",
    card: "bg-amber-50 border-amber-300 text-amber-900"
  },
  Cleaning: {
    cell: "bg-slate-500 border-slate-600",
    label: "Cleaning",
    dot: "bg-slate-500",
    badge: "bg-slate-200 text-slate-600",
    card: "bg-slate-100 border-slate-300 text-slate-700"
  }
};
function statusCfg(status) {
  return STATUS_CONFIG[status] ?? STATUS_CONFIG.Empty;
}
function formatTs(ts) {
  if (!ts) return "—";
  return format(new Date(Number(ts / 1000000n)), "d MMM yyyy");
}
function daysAdmitted(admissionDate) {
  if (!admissionDate) return 0;
  return differenceInDays(
    /* @__PURE__ */ new Date(),
    new Date(Number(admissionDate / 1000000n))
  );
}
function isCurrentMonth(ts) {
  if (!ts) return false;
  const d = new Date(Number(ts / 1000000n));
  const now = /* @__PURE__ */ new Date();
  return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
}
const WARDS = [
  "General",
  "Medical",
  "Surgical",
  "ICU",
  "Pediatric",
  "Gynae",
  "Ortho",
  "Chamber",
  "Observation",
  "Other"
];
function useReservationCountdown(expiry) {
  const [remaining, setRemaining] = reactExports.useState("");
  const [isExpired, setIsExpired] = reactExports.useState(false);
  const [isLow, setIsLow] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!expiry) return;
    function tick() {
      const ms = new Date(expiry).getTime() - Date.now();
      if (ms <= 0) {
        setIsExpired(true);
        setRemaining("Expired");
        return;
      }
      setIsExpired(false);
      const totalMin = Math.floor(ms / 6e4);
      const h = Math.floor(totalMin / 60);
      const m = totalMin % 60;
      setRemaining(h > 0 ? `${h}h ${m}m remaining` : `${m}m remaining`);
      setIsLow(ms < 30 * 60 * 1e3);
    }
    tick();
    const id = setInterval(tick, 3e4);
    return () => clearInterval(id);
  }, [expiry]);
  return { remaining, isExpired, isLow };
}
function StatsPanel({ beds }) {
  const total = beds.length;
  const occupied = beds.filter((b) => b.status === "Occupied").length;
  const available = beds.filter((b) => b.status === "Empty").length;
  const cleaning = beds.filter((b) => b.status === "Cleaning").length;
  const reserved = beds.filter((b) => b.status === "Reserved").length;
  const occupancyPct = total > 0 ? Math.round(occupied / total * 100) : 0;
  const occupiedBeds = beds.filter((b) => b.status === "Occupied");
  occupiedBeds.length > 0 ? Math.round(
    occupiedBeds.reduce(
      (sum, b) => sum + daysAdmitted(b.admissionDate),
      0
    ) / occupiedBeds.length
  ) : 0;
  const thisMonthAdmissions = beds.filter(
    (b) => isCurrentMonth(b.admissionDate)
  ).length;
  const occupancyColor = occupancyPct > 80 ? "text-red-600" : occupancyPct >= 50 ? "text-amber-600" : "text-green-600";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3",
      "data-ocid": "bed_management.stats.panel",
      children: [
        {
          value: `${occupancyPct}%`,
          label: "Occupancy",
          sub: `${occupied}/${total} beds`,
          color: occupancyColor
        },
        {
          value: available,
          label: "Available",
          sub: "ready to assign",
          color: "text-green-600"
        },
        {
          value: occupied,
          label: "Occupied",
          sub: "active patients",
          color: "text-red-600"
        },
        {
          value: reserved,
          label: "Reserved",
          sub: "pre-assigned",
          color: "text-amber-600"
        },
        {
          value: cleaning,
          label: "Cleaning",
          sub: "needs ready mark",
          color: "text-slate-600"
        },
        {
          value: thisMonthAdmissions,
          label: "This Month",
          sub: "new admissions",
          color: "text-purple-600"
        }
      ].map(({ value, label, sub, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl border px-3 py-3 bg-card border-border",
          "data-ocid": "bed_management.card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xl font-bold leading-tight ${color}`, children: value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold mt-0.5 text-foreground", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] opacity-60 mt-0.5 text-muted-foreground", children: sub })
          ]
        },
        label
      ))
    }
  );
}
function StatusLegend() {
  const statusItems = [
    { status: "Empty", bg: "bg-green-500" },
    { status: "Occupied", bg: "bg-red-600" },
    { status: "Reserved", bg: "bg-amber-500" },
    { status: "Cleaning", bg: "bg-slate-500" },
    { status: "Maintenance", bg: "bg-gray-400" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: statusItems.map(({ status, bg }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white ${bg}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-white/40" }),
        STATUS_CONFIG[status].label
      ]
    },
    status
  )) });
}
function BedTypeBadge({ bedType }) {
  const t = bedType ?? "General";
  const cfg = BED_TYPE_CONFIG[t];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: `inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold border ${cfg.badge}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-1.5 h-1.5 rounded-full ${cfg.dot}` }),
        cfg.label
      ]
    }
  );
}
function ExpectedAdmissionsPanel({
  onPreAssign
}) {
  const [expanded, setExpanded] = reactExports.useState(true);
  const todayAdmissions = reactExports.useMemo(() => {
    try {
      const raw = localStorage.getItem("appointments");
      if (!raw) return [];
      const all = JSON.parse(raw);
      const today = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
      return all.filter(
        (a) => a.date === today && (a.type === "admission" || a.type === "Admission") && a.status !== "Cancelled"
      );
    } catch {
      return [];
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-xl border border-blue-200 bg-blue-50",
      "data-ocid": "bed_management.expected_admissions.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "w-full flex items-center justify-between px-4 py-3 text-left hover:bg-blue-100/60 transition-colors rounded-xl",
            onClick: () => setExpanded((e) => !e),
            "data-ocid": "bed_management.expected_admissions.toggle",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "w-4 h-4 text-blue-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-blue-800 text-sm", children: "Expected Admissions Today" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold ${todayAdmissions.length > 0 ? "bg-blue-600 text-white" : "bg-blue-200 text-blue-600"}`,
                    children: todayAdmissions.length
                  }
                )
              ] }),
              expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-blue-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-blue-600" })
            ]
          }
        ),
        expanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-4", children: todayAdmissions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center py-5",
            "data-ocid": "bed_management.expected_admissions.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "w-7 h-7 text-blue-300 mx-auto mb-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-blue-500", children: "No admissions scheduled for today" })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: todayAdmissions.map((apt, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center justify-between gap-3 bg-white rounded-lg border border-blue-100 px-3 py-2.5",
            "data-ocid": `bed_management.expected_admissions.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bed, { className: "w-4 h-4 text-blue-600" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground truncate", children: apt.patientName ?? "Unknown Patient" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                    apt.time && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                      apt.time
                    ] }),
                    apt.reason && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground truncate max-w-[160px]", children: apt.reason })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  className: "gap-1.5 bg-blue-600 hover:bg-blue-700 flex-shrink-0",
                  onClick: () => onPreAssign(apt),
                  "data-ocid": `bed_management.expected_admissions.pre_assign_button.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
                    " Pre-Assign Bed"
                  ]
                }
              )
            ]
          },
          apt.id ?? i
        )) }) })
      ]
    }
  );
}
function ReservationTimer({
  bed,
  onExpire
}) {
  const { remaining, isExpired, isLow } = useReservationCountdown(
    bed.reservationExpiry
  );
  const expiredRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (isExpired && !expiredRef.current) {
      expiredRef.current = true;
      onExpire(bed);
    }
  }, [isExpired, bed, onExpire]);
  if (!bed.reservationExpiry) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: `text-[9px] font-semibold flex items-center gap-0.5 mt-0.5 ${isExpired ? "text-red-200" : isLow ? "text-orange-200" : "text-white/70"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "w-2.5 h-2.5" }),
        remaining
      ]
    }
  );
}
const DISCHARGE_CHECKLIST = [
  { id: "iv", label: "IV line removed" },
  { id: "meds", label: "Medications stopped" },
  { id: "summary", label: "Discharge summary signed" },
  { id: "belongs", label: "Patient belongings collected" }
];
function DischargeChecklistDialog({
  bed,
  open,
  onClose,
  onConfirm
}) {
  const [checked, setChecked] = reactExports.useState(/* @__PURE__ */ new Set());
  const allChecked = checked.size === DISCHARGE_CHECKLIST.length;
  function toggle(id) {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }
  function handleClose() {
    setChecked(/* @__PURE__ */ new Set());
    onClose();
  }
  function handleConfirm() {
    if (!bed || !allChecked) return;
    setChecked(/* @__PURE__ */ new Set());
    onConfirm(bed);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (o) => !o && handleClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      className: "max-w-sm",
      "data-ocid": "bed_management.discharge_checklist.dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5 text-red-500" }),
          "Discharge Checklist"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-xs text-red-700", children: [
            "All items must be confirmed before discharging",
            bed ? ` ${bed.patientName ? `${bed.patientName} from ` : ""}bed ${bed.bedNumber}` : "",
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: DISCHARGE_CHECKLIST.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "label",
            {
              className: `flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2.5 border transition-colors ${checked.has(item.id) ? "bg-green-50 border-green-300 text-green-800" : "bg-card border-border hover:bg-muted/40"}`,
              "data-ocid": `bed_management.discharge_checklist.${item.id}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "w-4 h-4 rounded accent-green-600",
                    checked: checked.has(item.id),
                    onChange: () => toggle(item.id)
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: item.label }),
                checked.has(item.id) && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-green-500 ml-auto" })
              ]
            },
            item.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                onClick: handleClose,
                "data-ocid": "bed_management.discharge_checklist.cancel_button",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                disabled: !allChecked,
                className: allChecked ? "bg-red-600 hover:bg-red-700" : "",
                onClick: handleConfirm,
                "data-ocid": "bed_management.discharge_checklist.confirm_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4 mr-1.5" }),
                  " Confirm Discharge"
                ]
              }
            )
          ] })
        ] })
      ]
    }
  ) });
}
function ReserveBedDialog({
  bed,
  open,
  onClose,
  onConfirm
}) {
  const [name, setName] = reactExports.useState("");
  const [hours, setHours] = reactExports.useState(2);
  function handleClose() {
    setName("");
    setHours(2);
    onClose();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (o) => !o && handleClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      className: "max-w-sm",
      "data-ocid": "bed_management.reserve.dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
          "Reserve Bed ",
          bed == null ? void 0 : bed.bedNumber
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Reserve for Patient (optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Patient name...",
                value: name,
                onChange: (e) => setName(e.target.value),
                "data-ocid": "bed_management.reserve.patient_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Expiry Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                className: "w-full border border-input rounded-md px-3 py-2 text-sm bg-background",
                value: hours,
                onChange: (e) => setHours(Number(e.target.value)),
                "data-ocid": "bed_management.reserve.expiry_select",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 1, children: "1 hour" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 2, children: "2 hours (default)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 4, children: "4 hours" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 8, children: "8 hours" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 24, children: "24 hours" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Bed auto-releases to Available when the timer expires." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                onClick: handleClose,
                "data-ocid": "bed_management.reserve.cancel_button",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: () => {
                  onConfirm(name.trim(), hours);
                  handleClose();
                },
                "data-ocid": "bed_management.reserve.confirm_button",
                children: "Reserve"
              }
            )
          ] })
        ] })
      ]
    }
  ) });
}
function BedManagement() {
  seedBedsIfEmpty();
  const { data: beds = [], refetch } = useGetAllBeds();
  const assignBed = useAssignBed();
  const createBed = useCreateBedRecord();
  const [searchQ, setSearchQ] = reactExports.useState("");
  const [selectedHospital, setSelectedHospital] = reactExports.useState("All");
  const [selectedWard, setSelectedWard] = reactExports.useState("All");
  const [selectedFloor, setSelectedFloor] = reactExports.useState("All");
  const [selectedBedType, setSelectedBedType] = reactExports.useState(
    "All"
  );
  const [selectedBed, setSelectedBed] = reactExports.useState(null);
  const [showAssignDialog, setShowAssignDialog] = reactExports.useState(false);
  const [showTransferDialog, setShowTransferDialog] = reactExports.useState(false);
  const [showAddBedDialog, setShowAddBedDialog] = reactExports.useState(false);
  const [showDischargeChecklist, setShowDischargeChecklist] = reactExports.useState(false);
  const [showReserveDialog, setShowReserveDialog] = reactExports.useState(false);
  const [pendingDischarge, setPendingDischarge] = reactExports.useState(
    null
  );
  const [assignSearch, setAssignSearch] = reactExports.useState("");
  const [preAssignPatient, setPreAssignPatient] = reactExports.useState(null);
  const [transferBedId, setTransferBedId] = reactExports.useState("");
  const [transferReason, setTransferReason] = reactExports.useState("");
  const [newBedNumber, setNewBedNumber] = reactExports.useState("");
  const [newWard, setNewWard] = reactExports.useState("General");
  const [newFloor, setNewFloor] = reactExports.useState("");
  const [newHospitalName, setNewHospitalName] = reactExports.useState("");
  const [newBedType, setNewBedType] = reactExports.useState("General");
  const allPatients = reactExports.useMemo(
    () => loadFromAllDoctorKeys("patients"),
    []
  );
  function handleReservationExpired(bed) {
    const store = getClinicalStore();
    const all = store.beds ?? [];
    const bedId = BigInt(String(bed.id ?? 0));
    const target = all.find((b) => BigInt(String(b.id ?? 0)) === bedId);
    if (!target || target.status !== "Reserved") return;
    store.beds = all.map(
      (b) => BigInt(String(b.id ?? 0)) === bedId ? {
        ...b,
        id: bedId,
        status: "Empty",
        reservationExpiry: null,
        reservedForPatient: null
      } : b
    );
    saveClinicalStore(store);
    const updatedBeds = store.beds ?? [];
    saveClinicalEntitiesWithSync("beds", updatedBeds, getCanisterActor());
    refetch();
    ue.warning(
      `Bed ${bed.bedNumber} reservation expired and released — ${bed.reservedForPatient ?? "patient"} did not arrive`,
      { duration: 8e3 }
    );
  }
  const hospitalNames = reactExports.useMemo(() => {
    const names = /* @__PURE__ */ new Set();
    for (const b of beds) if (b.hospitalName) names.add(b.hospitalName);
    return Array.from(names).sort();
  }, [beds]);
  const wardOptions = reactExports.useMemo(() => {
    const src = selectedHospital === "All" ? beds : beds.filter((b) => b.hospitalName === selectedHospital);
    const wards = /* @__PURE__ */ new Set();
    for (const b of src) if (b.ward) wards.add(b.ward);
    return Array.from(wards).sort();
  }, [beds, selectedHospital]);
  const floorOptions = reactExports.useMemo(() => {
    let src = selectedHospital === "All" ? beds : beds.filter((b) => b.hospitalName === selectedHospital);
    if (selectedWard !== "All")
      src = src.filter((b) => b.ward === selectedWard);
    const floors = /* @__PURE__ */ new Set();
    for (const b of src) if (b.floor) floors.add(b.floor);
    return Array.from(floors).sort();
  }, [beds, selectedHospital, selectedWard]);
  const filteredBeds = reactExports.useMemo(() => {
    let result = beds;
    if (selectedHospital !== "All")
      result = result.filter((b) => b.hospitalName === selectedHospital);
    if (selectedWard !== "All")
      result = result.filter((b) => b.ward === selectedWard);
    if (selectedFloor !== "All")
      result = result.filter((b) => b.floor === selectedFloor);
    if (selectedBedType !== "All")
      result = result.filter(
        (b) => (b.bedType ?? "General") === selectedBedType
      );
    if (searchQ.trim()) {
      const q = searchQ.toLowerCase();
      result = result.filter(
        (b) => b.bedNumber.toLowerCase().includes(q) || b.ward.toLowerCase().includes(q) || (b.hospitalName ?? "").toLowerCase().includes(q) || (b.patientName ?? "").toLowerCase().includes(q) || (b.floor ?? "").toLowerCase().includes(q)
      );
    }
    return result;
  }, [
    beds,
    selectedHospital,
    selectedWard,
    selectedFloor,
    selectedBedType,
    searchQ
  ]);
  const grouped = reactExports.useMemo(() => {
    const byHospital = {};
    for (const b of filteredBeds) {
      const hn = b.hospitalName || "Unknown Hospital";
      const w = b.ward || "Other";
      if (!byHospital[hn]) byHospital[hn] = {};
      if (!byHospital[hn][w]) byHospital[hn][w] = [];
      byHospital[hn][w].push(b);
    }
    return byHospital;
  }, [filteredBeds]);
  const transferableEmpty = reactExports.useMemo(
    () => beds.filter(
      (b) => b.status === "Empty" && normBigInt(b.id) !== normBigInt(selectedBed == null ? void 0 : selectedBed.id)
    ),
    [beds, selectedBed]
  );
  const matchedPatients = reactExports.useMemo(() => {
    const base = (preAssignPatient == null ? void 0 : preAssignPatient.name) ? allPatients.filter(
      (p) => p.fullName.toLowerCase().includes(preAssignPatient.name.toLowerCase())
    ) : allPatients;
    if (!assignSearch.trim()) return base.slice(0, 8);
    const q = assignSearch.toLowerCase();
    return base.filter(
      (p) => p.fullName.toLowerCase().includes(q) || (p.registerNumber ?? "").toLowerCase().includes(q)
    ).slice(0, 8);
  }, [assignSearch, allPatients, preAssignPatient]);
  function updateBedInStore(updater) {
    const store = getClinicalStore();
    const all = store.beds ?? [];
    const normalised = all.map((b) => ({
      ...b,
      id: BigInt(String(b.id ?? 0))
    }));
    store.beds = normalised.map(updater);
    saveClinicalStore(store);
    const updatedBeds = store.beds ?? [];
    saveClinicalEntitiesWithSync("beds", updatedBeds, getCanisterActor());
    refetch();
  }
  function initiateDischarge(bed) {
    setPendingDischarge(bed);
    setSelectedBed(null);
    setShowDischargeChecklist(true);
  }
  function confirmDischarge(bed) {
    updateBedInStore(
      (b) => normBigInt(b.id) === normBigInt(bed.id) ? {
        ...b,
        status: "Cleaning",
        patientId: void 0,
        patientName: void 0,
        dischargeDate: BigInt(Date.now()) * 1000000n,
        dischargeChecklistCompleted: true,
        dischargeCheckedAt: (/* @__PURE__ */ new Date()).toISOString(),
        transferHistory: [
          ...b.transferHistory ?? [],
          {
            fromBed: b.bedNumber,
            toBed: b.bedNumber,
            date: BigInt(Date.now()) * 1000000n,
            reason: "Discharge checklist completed — all items verified"
          }
        ]
      } : b
    );
    setPendingDischarge(null);
    setShowDischargeChecklist(false);
    ue.success(`Patient discharged — Bed ${bed.bedNumber} set to Cleaning`);
  }
  function markBedReady(bed) {
    updateBedInStore(
      (b) => normBigInt(b.id) === normBigInt(bed.id) ? { ...b, status: "Empty" } : b
    );
    setSelectedBed(null);
    ue.success(`Bed ${bed.bedNumber} is now Available`);
  }
  function markBedMaintenance(bed) {
    updateBedInStore(
      (b) => normBigInt(b.id) === normBigInt(bed.id) ? { ...b, status: "Maintenance" } : b
    );
    setSelectedBed(null);
    ue.success("Bed marked for maintenance");
  }
  function confirmReservation(bed, patientName, expiryHours) {
    const expiry = new Date(
      Date.now() + expiryHours * 60 * 60 * 1e3
    ).toISOString();
    updateBedInStore(
      (b) => normBigInt(b.id) === normBigInt(bed.id) ? {
        ...b,
        status: "Reserved",
        reservedForPatient: patientName || null,
        reservationExpiry: expiry
      } : b
    );
    setSelectedBed(null);
    ue.success(
      `Bed ${bed.bedNumber} reserved${patientName ? ` for ${patientName}` : ""} — expires in ${expiryHours}h`
    );
  }
  function extendReservation(bed) {
    const current = bed.reservationExpiry ? new Date(bed.reservationExpiry).getTime() : Date.now();
    const extended = new Date(
      Math.max(current, Date.now()) + 60 * 60 * 1e3
    ).toISOString();
    updateBedInStore(
      (b) => normBigInt(b.id) === normBigInt(bed.id) ? { ...b, reservationExpiry: extended } : b
    );
    setSelectedBed(null);
    ue.success("Reservation extended by 1 hour");
  }
  function transferPatient(fromBed, toBedId, reason) {
    const store = getClinicalStore();
    const all = store.beds ?? [];
    const normalised = all.map((b) => ({
      ...b,
      id: BigInt(String(b.id ?? 0))
    }));
    const toBed = normalised.find((b) => b.id === toBedId);
    if (!toBed || toBed.status !== "Empty") {
      ue.error("Target bed is not available");
      return;
    }
    const fromBedId = BigInt(String(fromBed.id ?? 0));
    const now = BigInt(Date.now()) * 1000000n;
    store.beds = normalised.map((b) => {
      if (b.id === fromBedId)
        return {
          ...b,
          status: "Cleaning",
          patientId: void 0,
          patientName: void 0,
          dischargeDate: now
        };
      if (b.id === toBedId)
        return {
          ...b,
          status: "Occupied",
          patientId: fromBed.patientId,
          patientName: fromBed.patientName,
          admissionDate: fromBed.admissionDate,
          transferHistory: [
            ...b.transferHistory ?? [],
            {
              fromBed: fromBed.bedNumber,
              toBed: b.bedNumber,
              date: now,
              reason: reason || "Transfer"
            }
          ]
        };
      return b;
    });
    saveClinicalStore(store);
    const updatedBeds = store.beds ?? [];
    saveClinicalEntitiesWithSync("beds", updatedBeds, getCanisterActor());
    refetch();
    setShowTransferDialog(false);
    setTransferBedId("");
    setTransferReason("");
    setSelectedBed(null);
    ue.success(
      `Patient transferred to bed ${toBed.bedNumber}. Old bed set to Cleaning.`
    );
  }
  function handleHospitalChange(hn) {
    setSelectedHospital(hn);
    setSelectedWard("All");
    setSelectedFloor("All");
  }
  function handleWardChange(w) {
    setSelectedWard(w);
    setSelectedFloor("All");
  }
  function handlePreAssign(apt) {
    setPreAssignPatient({ name: apt.patientName ?? "", id: apt.patientId });
    setAssignSearch(apt.patientName ?? "");
    ue.info(
      `Select a bed to pre-assign for ${apt.patientName ?? "patient"}`
    );
  }
  function isReservationLow(expiry) {
    if (!expiry) return false;
    return new Date(expiry).getTime() - Date.now() < 30 * 60 * 1e3;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "p-4 sm:p-6 max-w-7xl mx-auto space-y-5",
      "data-ocid": "bed_management.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-3 justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-2xl font-bold text-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bed, { className: "w-6 h-6 text-teal-600" }),
              " Bed Management"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Real-time occupancy, patient assignment, and transfer by hospital/ward/floor" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => setShowAddBedDialog(true),
              className: "gap-2 bg-teal-600 hover:bg-teal-700",
              "data-ocid": "bed_management.open_modal_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                " Add Bed"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatsPanel,
          {
            beds: selectedHospital === "All" ? beds : beds.filter((b) => b.hospitalName === selectedHospital)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExpectedAdmissionsPanel, { onPreAssign: handlePreAssign }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusLegend, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex flex-wrap gap-1.5",
              "data-ocid": "bed_management.hospital.tab",
              children: ["All", ...hospitalNames].map((hn) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => handleHospitalChange(hn),
                  className: `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${selectedHospital === hn ? "bg-indigo-600 text-white border-indigo-600" : "bg-card border-border text-muted-foreground hover:border-indigo-300 hover:text-indigo-700"}`,
                  "data-ocid": `bed_management.hospital_filter.${hn.toLowerCase().replace(/\s+/g, "_")}`,
                  children: [
                    hn !== "All" && /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-3 h-3" }),
                    hn === "All" ? "All Hospitals" : hn
                  ]
                },
                hn
              ))
            }
          ),
          wardOptions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-wrap gap-1.5",
              "data-ocid": "bed_management.ward.tab",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground px-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-3 h-3" }),
                  " Ward:"
                ] }),
                ["All", ...wardOptions].map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleWardChange(w),
                    className: `px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${selectedWard === w ? "bg-teal-600 text-white border-teal-600" : "bg-card border-border text-muted-foreground hover:border-teal-300 hover:text-teal-700"}`,
                    "data-ocid": `bed_management.ward_filter.${w.toLowerCase().replace(/\s+/g, "_")}`,
                    children: w === "All" ? "All Wards" : w
                  },
                  w
                ))
              ]
            }
          ),
          floorOptions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-wrap gap-1.5",
              "data-ocid": "bed_management.floor.tab",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground px-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3" }),
                  " Floor:"
                ] }),
                ["All", ...floorOptions].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setSelectedFloor(f),
                    className: `px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${selectedFloor === f ? "bg-purple-600 text-white border-purple-600" : "bg-card border-border text-muted-foreground hover:border-purple-300 hover:text-purple-700"}`,
                    "data-ocid": `bed_management.floor_filter.${f.toLowerCase().replace(/\s+/g, "_")}`,
                    children: f === "All" ? "All Floors" : f
                  },
                  f
                ))
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-wrap gap-1.5",
              "data-ocid": "bed_management.bedtype.tab",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground px-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Bed, { className: "w-3 h-3" }),
                  " Type:"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setSelectedBedType("All"),
                    className: `px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${selectedBedType === "All" ? "bg-slate-600 text-white border-slate-600" : "bg-card border-border text-muted-foreground hover:border-slate-400 hover:text-slate-700"}`,
                    "data-ocid": "bed_management.bedtype_filter.all",
                    children: "All Types"
                  }
                ),
                BED_TYPES.map((bt) => {
                  const cfg = BED_TYPE_CONFIG[bt];
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setSelectedBedType(bt),
                      className: `flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${selectedBedType === bt ? `${cfg.dot.replace("bg-", "bg-")} text-white border-transparent` : `bg-card border-border text-muted-foreground ${cfg.badge}`}`,
                      style: selectedBedType === bt ? {} : {},
                      "data-ocid": `bed_management.bedtype_filter.${bt.toLowerCase()}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-2 h-2 rounded-full ${cfg.dot}` }),
                        cfg.label
                      ]
                    },
                    bt
                  );
                })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Search bed, ward, floor, patient...",
              value: searchQ,
              onChange: (e) => setSearchQ(e.target.value),
              className: "pl-9",
              "data-ocid": "bed_management.search_input"
            }
          )
        ] }),
        filteredBeds.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center py-20",
            "data-ocid": "bed_management.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bed, { className: "w-12 h-12 text-muted-foreground mx-auto mb-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No beds found" })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: Object.entries(grouped).map(([hospitalName, wardMap]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            "data-ocid": `bed_management.hospital.${hospitalName.toLowerCase().replace(/\s+/g, "_")}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4 text-indigo-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-base text-indigo-700", children: hospitalName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                  "(",
                  Object.values(wardMap).flat().length,
                  " bed",
                  Object.values(wardMap).flat().length !== 1 ? "s" : "",
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-indigo-100 ml-1" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: Object.entries(wardMap).map(([wardName, wardBeds]) => {
                var _a;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "pl-1",
                    "data-ocid": `bed_management.ward.${wardName.toLowerCase().replace(/\s+/g, "_")}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-5 bg-teal-400 rounded-full" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-teal-700", children: wardName }),
                        ((_a = wardBeds[0]) == null ? void 0 : _a.floor) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-3 h-3" }),
                          " ",
                          wardBeds[0].floor
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                          "(",
                          wardBeds.length,
                          " bed",
                          wardBeds.length !== 1 ? "s" : "",
                          ")"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3", children: wardBeds.map((bed) => {
                        const cfg = statusCfg(bed.status);
                        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            onClick: () => setSelectedBed(bed),
                            className: `min-h-[88px] w-full flex flex-col items-center justify-center rounded-lg border-2 cursor-pointer hover:opacity-90 transition-opacity p-2 relative ${cfg.cell}`,
                            "data-ocid": `bed_management.item.${bed.bedNumber}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-white leading-tight", children: bed.bedNumber }),
                              bed.status === "Occupied" && bed.patientName ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-white truncate max-w-full mt-1 px-1 text-center", children: bed.patientName }) : bed.status === "Reserved" && bed.reservedForPatient ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-white truncate max-w-full mt-1 px-1 text-center", children: bed.reservedForPatient }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/80 mt-1", children: cfg.label }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: `absolute top-1 right-1 px-1 py-0.5 rounded text-[8px] font-bold border ${BED_TYPE_CONFIG[bed.bedType ?? "General"].badge} opacity-90`,
                                  children: bed.bedType ?? "General"
                                }
                              ),
                              bed.status === "Reserved" && bed.reservationExpiry && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                ReservationTimer,
                                {
                                  bed,
                                  onExpire: handleReservationExpired
                                }
                              ),
                              bed.status === "Occupied" && bed.admissionDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-white/60 mt-0.5", children: [
                                daysAdmitted(bed.admissionDate),
                                "d"
                              ] })
                            ]
                          },
                          bed.id.toString()
                        );
                      }) })
                    ]
                  },
                  wardName
                );
              }) })
            ]
          },
          hospitalName
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Dialog,
          {
            open: !!selectedBed,
            onOpenChange: (open) => !open && setSelectedBed(null),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md", "data-ocid": "bed_management.dialog", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bed, { className: "w-5 h-5 text-teal-600" }),
                "Bed ",
                selectedBed == null ? void 0 : selectedBed.bedNumber,
                " — ",
                selectedBed == null ? void 0 : selectedBed.ward,
                selectedBed && /* @__PURE__ */ jsxRuntimeExports.jsx(BedTypeBadge, { bedType: selectedBed.bedType })
              ] }) }),
              selectedBed && (() => {
                var _a;
                const cfg = statusCfg(selectedBed.status);
                const resLow = isReservationLow(selectedBed.reservationExpiry);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
                    selectedBed.hospitalName && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-xs text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-lg px-3 py-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-3.5 h-3.5" }),
                      selectedBed.hospitalName
                    ] }),
                    selectedBed.floor && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-xs text-purple-700 bg-purple-50 border border-purple-100 rounded-lg px-3 py-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-3.5 h-3.5" }),
                      selectedBed.floor
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-lg border px-4 py-3 ${cfg.card}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-2.5 h-2.5 rounded-full ${cfg.dot}` }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: cfg.label })
                    ] }),
                    selectedBed.patientName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm", children: selectedBed.patientName }),
                    selectedBed.reservedForPatient && selectedBed.status === "Reserved" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm", children: selectedBed.reservedForPatient }),
                    selectedBed.admissionDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-70 mt-0.5", children: [
                      "Admitted: ",
                      formatTs(selectedBed.admissionDate),
                      selectedBed.status === "Occupied" && ` (${daysAdmitted(selectedBed.admissionDate)} day${daysAdmitted(selectedBed.admissionDate) !== 1 ? "s" : ""})`
                    ] }),
                    selectedBed.status === "Reserved" && selectedBed.reservationExpiry && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `flex items-center gap-1.5 mt-2 text-xs font-medium ${resLow ? "text-red-600" : "text-amber-700"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "w-3.5 h-3.5" }),
                          formatDistanceToNow(
                            new Date(selectedBed.reservationExpiry),
                            { addSuffix: true }
                          ),
                          " — expires",
                          " ",
                          format(
                            new Date(selectedBed.reservationExpiry),
                            "h:mm a"
                          )
                        ]
                      }
                    )
                  ] }),
                  selectedBed.status === "Reserved" && resLow && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 border border-orange-200 rounded-lg px-3 py-2 text-xs text-orange-700 flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3.5 h-3.5 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Less than 30 minutes remaining. Extend the reservation or it will auto-release." })
                  ] }),
                  selectedBed.status === "Cleaning" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-600 flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5", children: "🧹" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cleaning in progress. Mark Ready when complete to make it Available again." }),
                    selectedBed.dischargeCheckedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-[10px] text-muted-foreground", children: [
                      "Checklist:",
                      " ",
                      format(
                        new Date(selectedBed.dischargeCheckedAt),
                        "h:mm a"
                      )
                    ] })
                  ] }),
                  ((_a = selectedBed.transferHistory) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2", children: "Transfer / Discharge History" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: selectedBed.transferHistory.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "bg-muted/40 rounded px-2.5 py-1.5 text-xs",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                            t.fromBed,
                            " → ",
                            t.toBed
                          ] }),
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                            "on ",
                            formatTs(t.date)
                          ] }),
                          t.reason && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground italic", children: t.reason })
                        ]
                      },
                      `${t.fromBed}-${t.toBed}-${i}`
                    )) }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
                    selectedBed.status === "Empty" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          size: "sm",
                          className: "gap-1.5 bg-teal-600 hover:bg-teal-700",
                          onClick: () => setShowAssignDialog(true),
                          "data-ocid": "bed_management.assign_button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
                            " Assign Patient"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "sm",
                          variant: "outline",
                          className: "gap-1.5 border-yellow-300 text-yellow-700 hover:bg-yellow-50",
                          onClick: () => setShowReserveDialog(true),
                          "data-ocid": "bed_management.reserve_button",
                          children: "Reserve"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "sm",
                          variant: "outline",
                          className: "gap-1.5 border-amber-300 text-amber-700 hover:bg-amber-50",
                          onClick: () => markBedMaintenance(selectedBed),
                          "data-ocid": "bed_management.maintenance_button",
                          children: "Maintenance"
                        }
                      )
                    ] }),
                    selectedBed.status === "Occupied" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          size: "sm",
                          variant: "outline",
                          className: "gap-1.5 border-blue-300 text-blue-700 hover:bg-blue-50",
                          onClick: () => setShowTransferDialog(true),
                          "data-ocid": "bed_management.transfer_button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeftRight, { className: "w-3.5 h-3.5" }),
                            " Transfer"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          size: "sm",
                          variant: "outline",
                          className: "gap-1.5 border-red-300 text-red-700 hover:bg-red-50",
                          onClick: () => initiateDischarge(selectedBed),
                          "data-ocid": "bed_management.discharge_button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-3.5 h-3.5" }),
                            " Discharge"
                          ]
                        }
                      )
                    ] }),
                    selectedBed.status === "Cleaning" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        className: "gap-1.5 bg-emerald-600 hover:bg-emerald-700",
                        onClick: () => markBedReady(selectedBed),
                        "data-ocid": "bed_management.mark_ready_button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
                          " Mark Ready (Available)"
                        ]
                      }
                    ),
                    selectedBed.status === "Maintenance" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "gap-1.5 border-emerald-300 text-emerald-700 hover:bg-emerald-50",
                        onClick: () => markBedReady(selectedBed),
                        "data-ocid": "bed_management.mark_available_button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
                          " Mark Available"
                        ]
                      }
                    ),
                    selectedBed.status === "Reserved" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          size: "sm",
                          className: "gap-1.5 bg-teal-600 hover:bg-teal-700",
                          onClick: () => setShowAssignDialog(true),
                          "data-ocid": "bed_management.assign_button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
                            " Assign Patient"
                          ]
                        }
                      ),
                      resLow && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          size: "sm",
                          variant: "outline",
                          className: "gap-1.5 border-orange-300 text-orange-700 hover:bg-orange-50",
                          onClick: () => extendReservation(selectedBed),
                          "data-ocid": "bed_management.extend_reservation_button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "w-3.5 h-3.5" }),
                            " Extend +1h"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          size: "sm",
                          variant: "outline",
                          className: "gap-1.5 border-emerald-300 text-emerald-700 hover:bg-emerald-50",
                          onClick: () => markBedReady(selectedBed),
                          "data-ocid": "bed_management.unreserve_button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
                            " Unreserve"
                          ]
                        }
                      )
                    ] })
                  ] })
                ] });
              })()
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DischargeChecklistDialog,
          {
            bed: pendingDischarge,
            open: showDischargeChecklist,
            onClose: () => {
              setShowDischargeChecklist(false);
              setPendingDischarge(null);
            },
            onConfirm: confirmDischarge
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReserveBedDialog,
          {
            bed: selectedBed,
            open: showReserveDialog,
            onClose: () => setShowReserveDialog(false),
            onConfirm: (name, hours) => selectedBed && confirmReservation(selectedBed, name, hours)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showAssignDialog, onOpenChange: setShowAssignDialog, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DialogContent,
          {
            className: "max-w-sm",
            "data-ocid": "bed_management.assign.dialog",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
                "Assign Patient to Bed ",
                selectedBed == null ? void 0 : selectedBed.bedNumber
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                (preAssignPatient == null ? void 0 : preAssignPatient.name) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-xs text-blue-700", children: [
                  "Pre-filling from scheduled admission:",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: preAssignPatient.name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "Search patient by name or reg no...",
                    value: assignSearch,
                    onChange: (e) => setAssignSearch(e.target.value),
                    "data-ocid": "bed_management.assign.search_input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-48 border rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 space-y-1", children: [
                  matchedPatients.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground p-3 text-center", children: "No patients found" }),
                  matchedPatients.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "w-full text-left px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors",
                      onClick: () => {
                        if (!selectedBed) return;
                        assignBed.mutate(
                          {
                            bedId: selectedBed.id,
                            patientId: p.id,
                            patientName: p.fullName
                          },
                          {
                            onSuccess: () => {
                              ue.success(
                                `Assigned ${p.fullName} to ${selectedBed.bedNumber}`
                              );
                              setShowAssignDialog(false);
                              setAssignSearch("");
                              setSelectedBed(null);
                              setPreAssignPatient(null);
                            }
                          }
                        );
                      },
                      "data-ocid": `bed_management.assign.item.${p.registerNumber}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: p.fullName }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-mono", children: p.registerNumber || String(p.id) })
                      ]
                    },
                    p.id.toString()
                  ))
                ] }) })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showTransferDialog, onOpenChange: setShowTransferDialog, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DialogContent,
          {
            className: "max-w-sm",
            "data-ocid": "bed_management.transfer.dialog",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
                "Transfer Patient from ",
                selectedBed == null ? void 0 : selectedBed.bedNumber
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-700", children: [
                  "After transfer, bed ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: selectedBed == null ? void 0 : selectedBed.bedNumber }),
                  " will be set to ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cleaning" }),
                  "."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Transfer to Bed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      className: "w-full border border-input rounded-md px-3 py-2 text-sm bg-background",
                      value: transferBedId,
                      onChange: (e) => setTransferBedId(e.target.value),
                      "data-ocid": "bed_management.transfer.select",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select available bed..." }),
                        transferableEmpty.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: b.id.toString(), children: [
                          b.bedNumber,
                          " (",
                          b.ward,
                          b.floor ? `, ${b.floor}` : "",
                          ") [",
                          b.bedType ?? "General",
                          "] — ",
                          b.hospitalName
                        ] }, b.id.toString()))
                      ]
                    }
                  ),
                  transferableEmpty.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: "No available beds." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Reason for Transfer" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: "e.g. Transfer to ICU, bed maintenance",
                      value: transferReason,
                      onChange: (e) => setTransferReason(e.target.value),
                      "data-ocid": "bed_management.transfer.input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      onClick: () => setShowTransferDialog(false),
                      "data-ocid": "bed_management.transfer.cancel_button",
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      disabled: !transferBedId,
                      onClick: () => {
                        if (!selectedBed || !transferBedId) return;
                        transferPatient(
                          selectedBed,
                          normBigInt(transferBedId),
                          transferReason
                        );
                      },
                      "data-ocid": "bed_management.transfer.submit_button",
                      children: "Transfer"
                    }
                  )
                ] })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showAddBedDialog, onOpenChange: setShowAddBedDialog, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DialogContent,
          {
            className: "max-w-sm",
            "data-ocid": "bed_management.add.dialog",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Add New Bed" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Hospital Name *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: "e.g. Dhaka Medical College Hospital",
                      value: newHospitalName,
                      onChange: (e) => setNewHospitalName(e.target.value),
                      list: "hospital-suggestions",
                      "data-ocid": "bed_management.add.hospital_input"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("datalist", { id: "hospital-suggestions", children: hospitalNames.map((hn) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: hn }, hn)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Bed Number *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: "e.g. A-01, ICU-03",
                      value: newBedNumber,
                      onChange: (e) => setNewBedNumber(e.target.value),
                      "data-ocid": "bed_management.add.input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Bed Type *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "select",
                    {
                      className: "w-full border border-input rounded-md px-3 py-2 text-sm bg-background",
                      value: newBedType,
                      onChange: (e) => setNewBedType(e.target.value),
                      "data-ocid": "bed_management.add.bedtype_select",
                      children: BED_TYPES.map((bt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: bt, children: BED_TYPE_CONFIG[bt].label }, bt))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Ward *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "select",
                    {
                      className: "w-full border border-input rounded-md px-3 py-2 text-sm bg-background",
                      value: newWard,
                      onChange: (e) => setNewWard(e.target.value),
                      "data-ocid": "bed_management.add.select",
                      children: WARDS.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: w, children: w }, w))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Floor / Level" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: "e.g. Ground Floor, Floor 1",
                      value: newFloor,
                      onChange: (e) => setNewFloor(e.target.value),
                      "data-ocid": "bed_management.add.floor_input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      onClick: () => {
                        setShowAddBedDialog(false);
                        setNewBedNumber("");
                        setNewWard("General");
                        setNewHospitalName("");
                        setNewFloor("");
                        setNewBedType("General");
                      },
                      "data-ocid": "bed_management.add.cancel_button",
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      disabled: !newBedNumber.trim() || !newHospitalName.trim(),
                      onClick: () => {
                        createBed.mutate(
                          {
                            bedNumber: newBedNumber.trim(),
                            ward: newWard,
                            hospitalName: newHospitalName.trim(),
                            floor: newFloor.trim() || void 0,
                            bedType: newBedType
                          },
                          {
                            onSuccess: () => {
                              ue.success("Bed added");
                              setShowAddBedDialog(false);
                              setNewBedNumber("");
                              setNewWard("General");
                              setNewHospitalName("");
                              setNewFloor("");
                              setNewBedType("General");
                            }
                          }
                        );
                      },
                      "data-ocid": "bed_management.add.submit_button",
                      children: "Add Bed"
                    }
                  )
                ] })
              ] })
            ]
          }
        ) })
      ]
    }
  );
}
export {
  BedManagement as default
};
