import { i as createLucideIcon, j as jsxRuntimeExports, m as motion, k as CalendarDays, T as Tabs, l as TabsList, n as TabsTrigger, o as Stethoscope, p as TabsContent, r as reactExports, q as useEmailAuth, B as Button, M as Monitor, A as AnimatePresence, h as Badge, b as CircleCheck, D as Dialog, s as DialogContent, t as DialogHeader, v as DialogTitle, L as Label, I as Input, w as DialogFooter, c as Clock, S as Select, d as SelectTrigger, e as SelectValue, f as SelectContent, g as SelectItem, H as Hospital, x as useCreatePatient, u as ue, y as useGetAllPatients, z as LoaderCircle, E as enqueueSync, F as _canisterActorRef } from "./index-DJeWhCy-.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CnbMZ7S8.js";
import { T as Textarea } from "./textarea-BQiWEu5n.js";
import { b as ReceiptsHistoryList, M as MoneyReceipt } from "./MoneyReceipt-CSWlD73e.js";
import { P as PatientForm } from "./PatientForm-BCKQSbNc.js";
import { b as buildFollowUpMessage } from "./whatsappTemplates-BiipONU2.js";
import { B as BedDouble } from "./bed-double-DSQN6_I2.js";
import { R as Receipt } from "./receipt-DqXr-L3S.js";
import { P as Plus } from "./plus-CHPIrJ6M.js";
import { T as Trash2 } from "./trash-2-B3l-ZhdV.js";
import { C as CircleAlert } from "./circle-alert-3N-VW3xt.js";
import { M as MessageCircle } from "./message-circle-qSON-RM2.js";
import { P as Pen } from "./pen-CfMhwJvZ.js";
import { S as Search } from "./search-BLymxia-.js";
import { U as UserPlus } from "./user-plus-BJkC4ige.js";
import { U as UserSearch } from "./user-search-CBqVxlq_.js";
import "./rotate-ccw-DEYXgLqp.js";
import "./printer-BQUreT8L.js";
import "./download-qc_8yQ5r.js";
import "./camera-DpsioLhp.js";
import "./eye-DZPhoU57.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "m9 16 2 2 4-4", key: "19s6y9" }]
];
const CalendarCheck = createLucideIcon("calendar-check", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ]
];
const Inbox = createLucideIcon("inbox", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M10 12h11", key: "6m4ad9" }],
  ["path", { d: "M10 18h11", key: "11hvi2" }],
  ["path", { d: "M10 6h11", key: "c7qv1k" }],
  ["path", { d: "M4 10h2", key: "16xx2s" }],
  ["path", { d: "M4 6h1v4", key: "cnovpq" }],
  ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }]
];
const ListOrdered = createLucideIcon("list-ordered", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }],
  ["path", { d: "M16 16h5v5", key: "ccwih5" }]
];
const RefreshCcw = createLucideIcon("refresh-ccw", __iconNode);
function todayKey() {
  return `clinic_serials_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}`;
}
function todayStr() {
  return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function loadSerials() {
  try {
    return JSON.parse(localStorage.getItem(todayKey()) || "[]");
  } catch {
    return [];
  }
}
function saveSerials(data) {
  localStorage.setItem(todayKey(), JSON.stringify(data));
}
async function syncAppointmentToCanister(op, entry) {
  const actor = _canisterActorRef();
  if (!actor || !navigator.onLine) {
    enqueueSync({
      timestamp: Date.now(),
      operation: op,
      entityType: "appointment",
      entityId: entry.id,
      data: entry
    });
    return;
  }
  try {
    if (op === "delete") {
      await actor.deleteAppointment(entry.id);
    } else {
      await actor.bulkUpsertAppointments([entry]);
    }
  } catch (e) {
    console.warn("Canister appointment sync failed, queuing:", e);
    enqueueSync({
      timestamp: Date.now(),
      operation: op,
      entityType: "appointment",
      entityId: entry.id,
      data: entry
    });
  }
}
async function syncQueueEntryToCanister(op, entry) {
  const actor = _canisterActorRef();
  const enriched = { ...entry, queueDate: todayStr() };
  if (!actor || !navigator.onLine) {
    enqueueSync({
      timestamp: Date.now(),
      operation: op,
      entityType: "queueEntry",
      entityId: entry.id,
      data: enriched
    });
    return;
  }
  try {
    if (op === "delete") {
      await actor.deleteQueueEntry(entry.id);
    } else {
      await actor.bulkUpsertQueueEntries([enriched]);
    }
  } catch (e) {
    console.warn("Canister queue-entry sync failed, queuing:", e);
    enqueueSync({
      timestamp: Date.now(),
      operation: op,
      entityType: "queueEntry",
      entityId: entry.id,
      data: enriched
    });
  }
}
function loadAppointments() {
  try {
    const a = JSON.parse(
      localStorage.getItem("clinic_appointments") || "[]"
    );
    const b = JSON.parse(
      localStorage.getItem("public_appointment_requests") || "[]"
    );
    const converted = b.filter((x) => x.preferredDate || x.date).map((x) => ({
      id: x.id || x.patientName,
      patientName: x.patientName || x.name || "",
      phone: x.phone || "",
      date: x.preferredDate || x.date || "",
      time: x.preferredTime || x.time || "",
      reason: x.reason || x.notes || "",
      status: x.status === "confirmed" ? "confirmed" : x.status === "cancelled" ? "cancelled" : "scheduled",
      doctor: x.preferredDoctor || x.doctor || "",
      chamber: x.preferredChamber || x.chamber || "",
      registerNumber: x.registerNumber || "",
      appointmentType: x.appointmentType || "chamber",
      hospitalName: x.hospitalName || "",
      bedWardNumber: x.bedWardNumber || "",
      admissionReason: x.admissionReason || "",
      referringDoctor: x.referringDoctor || "",
      serialNumber: x.serialNumber,
      serialDate: x.serialDate || "",
      visitTime: x.visitTime || "",
      _isPublic: true
    }));
    const combined = [...a];
    for (const c of converted) {
      if (!combined.find((x) => x.id === c.id)) combined.push(c);
    }
    return combined;
  } catch {
    return [];
  }
}
function saveAppointments(data) {
  localStorage.setItem(
    "clinic_appointments",
    JSON.stringify(
      data.filter((d) => !d._isPublic)
    )
  );
}
function uid() {
  return Math.random().toString(36).slice(2, 10);
}
function nowTime() {
  const d = /* @__PURE__ */ new Date();
  return d.toTimeString().slice(0, 5);
}
function checkSlotConflict(appointments, date, time, doctor, excludeId) {
  if (!date || !time || !doctor) return null;
  const [hh, mm] = time.split(":").map(Number);
  const requestedMinutes = hh * 60 + mm;
  for (const appt of appointments) {
    if (appt.id === excludeId) continue;
    if (appt.appointmentType !== "chamber") continue;
    if (appt.status === "cancelled") continue;
    if (appt.date !== date) continue;
    if (appt.doctor !== doctor) continue;
    if (!appt.time) continue;
    const [ah, am] = appt.time.split(":").map(Number);
    const apptMinutes = ah * 60 + am;
    if (Math.abs(apptMinutes - requestedMinutes) < 15) {
      return {
        conflictingTime: appt.time,
        conflictingPatient: appt.patientName,
        doctorName: doctor
      };
    }
  }
  return null;
}
function normalizeRegNo(rn) {
  const parts = rn.trim().split("/");
  if (parts.length === 2) {
    const num = Number.parseInt(parts[0].trim(), 10);
    return `${Number.isNaN(num) ? parts[0].trim() : num}/${parts[1].trim()}`;
  }
  return rn.trim().toLowerCase();
}
function lookupPatientByRegOrPhone(query) {
  if (!query.trim()) return null;
  const norm = normalizeRegNo(query);
  const isPhone = /^[0-9+\-() ]{7,}$/.test(query.trim()) && !query.includes("/");
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!(key == null ? void 0 : key.startsWith("patients_"))) continue;
    try {
      const arr = JSON.parse(
        localStorage.getItem(key) || "[]"
      );
      let found;
      if (isPhone) {
        found = arr.find(
          (p) => {
            var _a;
            return (_a = p.phone) == null ? void 0 : _a.replace(/\D/g, "").includes(query.replace(/\D/g, ""));
          }
        );
      } else {
        found = arr.find(
          (p) => p.registerNumber && normalizeRegNo(String(p.registerNumber)) === norm
        );
      }
      if (found) return found;
    } catch {
    }
  }
  return null;
}
function getOrAssignSerial(appointments, patientName, date) {
  const existing = appointments.find(
    (a) => a.patientName.trim().toLowerCase() === patientName.trim().toLowerCase() && a.serialDate === date && a.serialNumber
  );
  if (existing == null ? void 0 : existing.serialNumber) return existing.serialNumber;
  const serialsForDay = appointments.filter((a) => a.serialDate === date && a.serialNumber).map((a) => a.serialNumber);
  return serialsForDay.length > 0 ? Math.max(...serialsForDay) + 1 : 1;
}
function PatientSearch({ value, onSelect, onChange }) {
  const { data: patients = [], isLoading } = useGetAllPatients();
  const [open, setOpen] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  const filtered = value.trim() ? patients.filter(
    (p) => p.fullName.toLowerCase().includes(value.toLowerCase())
  ) : [];
  reactExports.useEffect(() => {
    function handle(e) {
      if (ref.current && !ref.current.contains(e.target))
        setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(UserSearch, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "pl-9",
          placeholder: "Search or type patient name…",
          value,
          onChange: (e) => {
            onChange(e.target.value);
            setOpen(true);
          },
          onFocus: () => setOpen(true),
          "data-ocid": "appointments.search_input"
        }
      ),
      isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-muted-foreground" })
    ] }),
    open && filtered.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute z-50 mt-1 w-full bg-card border border-border rounded-lg shadow-lg max-h-48 overflow-y-auto", children: filtered.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors flex items-center justify-between gap-2",
        onClick: () => {
          onSelect(p.fullName, p.phone || "");
          setOpen(false);
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: p.fullName }),
          p.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: p.phone })
        ]
      },
      p.id.toString()
    )) })
  ] });
}
const serialStatusConfig = {
  waiting: {
    label: "Waiting",
    className: "bg-amber-100 text-amber-800 border-amber-200"
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-blue-100 text-blue-800 border-blue-200"
  },
  done: {
    label: "Done",
    className: "bg-emerald-100 text-emerald-800 border-emerald-200"
  }
};
const apptStatusConfig = {
  scheduled: {
    label: "Scheduled",
    className: "bg-blue-100 text-blue-800 border-blue-200"
  },
  confirmed: {
    label: "Confirmed",
    className: "bg-emerald-100 text-emerald-800 border-emerald-200"
  },
  cancelled: {
    label: "Cancelled",
    className: "bg-red-100 text-red-700 border-red-200"
  }
};
function DoctorSerialTab() {
  const [serials, setSerials] = reactExports.useState(loadSerials);
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [resetOpen, setResetOpen] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({ name: "", phone: "" });
  const { currentDoctor } = useEmailAuth();
  const isDoctor = !currentDoctor || currentDoctor.role === "doctor";
  const persist = (data) => {
    setSerials(data);
    saveSerials(data);
    const nowServing = data.find((s) => s.status === "in-progress") || null;
    const queue = data.filter((s) => s.status === "waiting");
    localStorage.setItem(
      "medicare_serial_queue",
      JSON.stringify({ nowServing, queue })
    );
  };
  function addSerial() {
    if (!form.name.trim()) {
      ue.error("Patient name is required");
      return;
    }
    const next = serials.length > 0 ? Math.max(...serials.map((s) => s.serial)) + 1 : 1;
    const entry = {
      id: uid(),
      serial: next,
      patientName: form.name.trim(),
      phone: form.phone.trim(),
      arrivalTime: nowTime(),
      status: "waiting"
    };
    persist([...serials, entry]);
    setForm({ name: "", phone: "" });
    setAddOpen(false);
    ue.success(`Serial #${next} added for ${entry.patientName}`);
    syncQueueEntryToCanister("create", entry);
  }
  function updateStatus(id, status) {
    const updated = serials.map((s) => s.id === id ? { ...s, status } : s);
    persist(updated);
    const entry = updated.find((s) => s.id === id);
    if (entry) syncQueueEntryToCanister("update", entry);
  }
  function deleteSerial(id) {
    const entry = serials.find((s) => s.id === id);
    persist(serials.filter((s) => s.id !== id));
    ue.success("Serial removed");
    if (entry) syncQueueEntryToCanister("delete", entry);
  }
  function resetQueue() {
    for (const entry of serials) {
      syncQueueEntryToCanister("delete", entry);
    }
    persist([]);
    setResetOpen(false);
    ue.success("Queue reset for today");
  }
  const counts = {
    waiting: serials.filter((s) => s.status === "waiting").length,
    inProgress: serials.filter((s) => s.status === "in-progress").length,
    done: serials.filter((s) => s.status === "done").length
  };
  const todayLabel = (/* @__PURE__ */ new Date()).toLocaleDateString("en-BD", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide font-medium", children: "Today" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-foreground", children: todayLabel })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: () => window.open("/serial-display", "_blank", "noopener,noreferrer"),
            className: "gap-1.5 text-blue-700 border-blue-300 hover:bg-blue-50",
            "data-ocid": "serial.display_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: "w-3.5 h-3.5" }),
              "Display Screen"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: () => setResetOpen(true),
            className: "gap-1.5 text-destructive border-destructive/30 hover:bg-destructive/10",
            "data-ocid": "serial.reset_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCcw, { className: "w-3.5 h-3.5" }),
              "Reset Queue"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "gap-1.5",
            onClick: () => setAddOpen(true),
            "data-ocid": "serial.open_modal_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
              "Add Serial"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 border border-amber-100 rounded-xl p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-amber-700", children: counts.waiting }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-600 mt-0.5", children: "Waiting" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-100 rounded-xl p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-blue-700", children: counts.inProgress }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-blue-600 mt-0.5", children: "In Progress" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-emerald-50 border border-emerald-100 rounded-xl p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-emerald-700", children: counts.done }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-emerald-600 mt-0.5", children: "Done" })
      ] })
    ] }),
    serials.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-16 text-center text-muted-foreground",
        "data-ocid": "serial.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ListOrdered, { className: "w-10 h-10 mb-3 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "No patients in queue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "Add the first serial for today" })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-ocid": "serial.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/50 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-medium text-muted-foreground w-12", children: "#" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-medium text-muted-foreground", children: "Patient" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-medium text-muted-foreground hidden sm:table-cell", children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-medium text-muted-foreground hidden md:table-cell", children: "Arrival" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-medium text-muted-foreground", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-medium text-muted-foreground", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: serials.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.tr,
        {
          initial: { opacity: 0, x: -8 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 8 },
          transition: { duration: 0.2 },
          className: "border-b border-border last:border-0 hover:bg-muted/30 transition-colors",
          "data-ocid": `serial.row.${idx + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-xs", children: s.serial }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium text-foreground", children: s.patientName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground hidden sm:table-cell", children: s.phone || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground hidden md:table-cell", children: s.arrivalTime }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: serialStatusConfig[s.status].className,
                children: serialStatusConfig[s.status].label
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1", children: [
              s.status === "waiting" && isDoctor && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "ghost",
                  className: "h-7 px-2 text-blue-600 hover:bg-blue-50 text-xs",
                  onClick: () => updateStatus(s.id, "in-progress"),
                  "data-ocid": `serial.secondary_button.${idx + 1}`,
                  children: "Start"
                }
              ),
              s.status === "in-progress" && isDoctor && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "ghost",
                  className: "h-7 px-2 text-emerald-600 hover:bg-emerald-50 text-xs",
                  onClick: () => updateStatus(s.id, "done"),
                  "data-ocid": `serial.primary_button.${idx + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 mr-1" }),
                    "Done"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "ghost",
                  className: "h-7 w-7 p-0 text-destructive hover:bg-destructive/10",
                  onClick: () => deleteSerial(s.id),
                  "data-ocid": `serial.delete_button.${idx + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                }
              )
            ] }) })
          ]
        },
        s.id
      )) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: addOpen, onOpenChange: setAddOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", "data-ocid": "serial.dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ListOrdered, { className: "w-5 h-5 text-primary" }),
        "Add Patient to Queue"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Patient Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PatientSearch,
            {
              value: form.name,
              onChange: (v) => setForm((f) => ({ ...f, name: v })),
              onSelect: (name, phone) => setForm({ name, phone })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Phone number",
              value: form.phone,
              onChange: (e) => setForm((f) => ({ ...f, phone: e.target.value })),
              "data-ocid": "serial.input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: () => setAddOpen(false),
            "data-ocid": "serial.cancel_button",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: addSerial, "data-ocid": "serial.submit_button", children: "Add to Queue" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: resetOpen, onOpenChange: setResetOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-sm", "data-ocid": "serial.modal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2 text-destructive", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5" }),
        "Reset Today's Queue?"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        "This will clear all ",
        serials.length,
        " serial entries for today."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: () => setResetOpen(false),
            "data-ocid": "serial.cancel_button",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "destructive",
            onClick: resetQueue,
            "data-ocid": "serial.confirm_button",
            children: "Reset Queue"
          }
        )
      ] })
    ] }) })
  ] });
}
function sendWhatsApp(appt) {
  var _a;
  const DOCTOR_NUMBERS = {
    "Dr. Arman Kabir": "8801751959262",
    "Dr. Samia Shikder": "8801751959262"
  };
  const docName = appt.doctor || "Dr. Arman Kabir";
  const docNum = DOCTOR_NUMBERS[docName] || "8801751959262";
  const dateStr = appt.date ? new Date(appt.date).toLocaleDateString("en-BD", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }) : appt.date;
  const typeLabel = appt.appointmentType === "admitted" ? "hospital admission" : "chamber appointment";
  const msg = appt.appointmentType === "admitted" ? `Dear ${appt.patientName}, your ${typeLabel} with ${docName} is scheduled for ${dateStr}${appt.visitTime ? ` at ${appt.visitTime}` : ""}${appt.hospitalName ? ` at ${appt.hospitalName}` : ""}${appt.serialNumber ? `. Your daily serial: #${appt.serialNumber}` : ""}. - Dr. Arman Kabir's Care` : `Dear ${appt.patientName}, your ${typeLabel} with ${docName} is confirmed on ${dateStr}${appt.time ? ` at ${appt.time}` : ""}${appt.chamber ? ` at ${appt.chamber}` : ""}${appt.serialNumber ? `. Your serial: #${appt.serialNumber}` : ""}. - Dr. Arman Kabir's Care`;
  window.open(
    `https://wa.me/${docNum}?text=${encodeURIComponent(`Appointment confirmed: ${msg}`)}`,
    "_blank"
  );
  const patientPhone = (_a = appt.phone) == null ? void 0 : _a.replace(/[^0-9]/g, "");
  if (patientPhone && patientPhone.length >= 10) {
    setTimeout(
      () => window.open(
        `https://wa.me/${patientPhone}?text=${encodeURIComponent(msg)}`,
        "_blank"
      ),
      800
    );
  }
  ue.success("WhatsApp confirmation sent to patient & doctor");
}
const CHAMBERS_BY_DOCTOR = {
  "Dr. Arman Kabir": [
    "University Dental College & Hospital — Moghbazar, Dhaka"
  ],
  "Dr. Samia Shikder": [
    "Dhaka Medical College Hospital — Dept. of Gynae & Obs"
  ]
};
function ChamberAppointmentsTab() {
  const [appointments, setAppointments] = reactExports.useState(loadAppointments);
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [editTarget, setEditTarget] = reactExports.useState(null);
  const [filter, setFilter] = reactExports.useState("all");
  const [lookupQuery, setLookupQuery] = reactExports.useState("");
  const [lookupMsg, setLookupMsg] = reactExports.useState("");
  const [receiptTarget, setReceiptTarget] = reactExports.useState(
    null
  );
  const [slotAvailability, setSlotAvailability] = reactExports.useState("unknown");
  const [conflictInfo, setConflictInfo] = reactExports.useState(null);
  const [showConflictWarning, setShowConflictWarning] = reactExports.useState(false);
  const [pendingSave, setPendingSave] = reactExports.useState(false);
  const emptyForm = {
    name: "",
    phone: "",
    date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
    time: "",
    reason: "",
    status: "scheduled",
    doctor: "",
    chamber: "",
    registerNumber: ""
  };
  const [form, setForm] = reactExports.useState(emptyForm);
  const persist = (data) => {
    setAppointments(data);
    saveAppointments(data);
  };
  const handleLookup = (val) => {
    setLookupQuery(val);
    setForm((f) => ({ ...f, registerNumber: val }));
    if (!val.trim()) {
      setLookupMsg("");
      return;
    }
    const found = lookupPatientByRegOrPhone(val);
    if (found) {
      setForm((f) => ({
        ...f,
        name: found.fullName || f.name,
        phone: found.phone || f.phone,
        registerNumber: val
      }));
      setLookupMsg(`✓ Found: ${found.fullName}`);
    } else {
      setLookupMsg("Patient not found");
    }
  };
  function openAdd() {
    setForm(emptyForm);
    setLookupQuery("");
    setLookupMsg("");
    setEditTarget(null);
    setSlotAvailability("unknown");
    setConflictInfo(null);
    setAddOpen(true);
  }
  function openEdit(appt) {
    setForm({
      name: appt.patientName,
      phone: appt.phone,
      date: appt.date,
      time: appt.time,
      reason: appt.reason,
      status: appt.status,
      doctor: appt.doctor || "",
      chamber: appt.chamber || "",
      registerNumber: appt.registerNumber || ""
    });
    setLookupQuery(appt.registerNumber || "");
    setLookupMsg("");
    setEditTarget(appt);
    setSlotAvailability("unknown");
    setConflictInfo(null);
    setAddOpen(true);
  }
  function checkAndSetSlotAvailability(date, time, doctor) {
    if (!date || !time || !doctor) {
      setSlotAvailability("unknown");
      setConflictInfo(null);
      return;
    }
    const conflict = checkSlotConflict(
      appointments,
      date,
      time,
      doctor,
      editTarget == null ? void 0 : editTarget.id
    );
    if (conflict) {
      setSlotAvailability("conflict");
      setConflictInfo(conflict);
    } else {
      setSlotAvailability("available");
      setConflictInfo(null);
    }
  }
  function saveAppointment() {
    if (!form.name.trim()) {
      ue.error("Patient name is required");
      return;
    }
    if (!form.date) {
      ue.error("Please select a date");
      return;
    }
    if (slotAvailability === "conflict" && conflictInfo && !pendingSave) {
      setShowConflictWarning(true);
      return;
    }
    _doSave();
    setPendingSave(false);
  }
  function _doSave() {
    const currentAll = loadAppointments();
    const serial = getOrAssignSerial(currentAll, form.name.trim(), form.date);
    if (editTarget) {
      const updatedEntry = {
        ...editTarget,
        patientName: form.name.trim(),
        phone: form.phone.trim(),
        date: form.date,
        time: form.time,
        reason: form.reason.trim(),
        status: form.status,
        doctor: form.doctor || void 0,
        chamber: form.chamber || void 0,
        registerNumber: form.registerNumber || void 0
      };
      persist(
        appointments.map((a) => a.id === editTarget.id ? updatedEntry : a)
      );
      ue.success("Appointment updated");
      syncAppointmentToCanister("update", updatedEntry);
    } else {
      const entry = {
        id: uid(),
        patientName: form.name.trim(),
        phone: form.phone.trim(),
        date: form.date,
        time: form.time,
        reason: form.reason.trim(),
        status: form.status,
        doctor: form.doctor || void 0,
        chamber: form.chamber || void 0,
        registerNumber: form.registerNumber || void 0,
        appointmentType: "chamber",
        serialNumber: serial,
        serialDate: form.date
      };
      persist([...appointments, entry]);
      ue.success(
        `Appointment scheduled for ${entry.patientName} — Serial #${serial}`
      );
      syncAppointmentToCanister("create", entry);
    }
    setAddOpen(false);
  }
  function deleteAppt(id) {
    const entry = appointments.find((a) => a.id === id);
    persist(appointments.filter((a) => a.id !== id));
    ue.success("Appointment deleted");
    if (entry) syncAppointmentToCanister("delete", entry);
  }
  const chamberOnly = appointments.filter(
    (a) => !a.appointmentType || a.appointmentType === "chamber"
  );
  const filtered = chamberOnly.filter((a) => {
    const today = todayStr();
    if (filter === "today") return a.date === today;
    if (filter === "upcoming")
      return a.date >= today && a.status !== "cancelled";
    if (filter === "cancelled") return a.status === "cancelled";
    return true;
  }).sort((a, b) => {
    const dt = (x) => `${x.date}T${x.time || "00:00"}`;
    return dt(a).localeCompare(dt(b));
  });
  const filterLabels = {
    all: "All",
    today: "Today",
    upcoming: "Upcoming",
    cancelled: "Cancelled"
  };
  const chamberOptions = form.doctor ? CHAMBERS_BY_DOCTOR[form.doctor] || [] : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 flex-wrap", children: Object.keys(filterLabels).map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: filter === f ? "default" : "outline",
          size: "sm",
          className: "h-8 text-xs",
          onClick: () => setFilter(f),
          "data-ocid": `chamber_appt.${f}.tab`,
          children: filterLabels[f]
        },
        f
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          className: "gap-1.5",
          onClick: openAdd,
          "data-ocid": "chamber_appt.open_modal_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
            "New Appointment"
          ]
        }
      )
    ] }),
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-16 text-center text-muted-foreground",
        "data-ocid": "chamber_appt.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-10 h-10 mb-3 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "No chamber appointments found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "Schedule a new chamber appointment to get started" })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: filtered.map((appt, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 6 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -6 },
        transition: { duration: 0.2, delay: idx * 0.03 },
        className: "bg-card border border-border rounded-xl p-4 hover:shadow-sm transition-shadow",
        "data-ocid": `chamber_appt.item.${idx + 1}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: appt.patientName }),
              appt.registerNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-muted-foreground border border-border rounded px-1.5 py-0.5", children: appt.registerNumber }),
              appt.serialNumber && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold bg-primary/10 text-primary border border-primary/20 rounded px-1.5 py-0.5", children: [
                "Serial #",
                appt.serialNumber
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: apptStatusConfig[appt.status].className,
                  children: apptStatusConfig[appt.status].label
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-1.5 text-sm text-muted-foreground flex-wrap", children: [
              appt.doctor && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-medium text-xs", children: appt.doctor }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "w-3.5 h-3.5" }),
                new Date(appt.date).toLocaleDateString("en-BD", {
                  year: "numeric",
                  month: "short",
                  day: "numeric"
                })
              ] }),
              appt.time && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
                appt.time
              ] }),
              appt.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: appt.phone })
            ] }),
            appt.chamber && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: [
              "📍 ",
              appt.chamber
            ] }),
            appt.reason && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground line-clamp-2", children: appt.reason })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "icon",
                variant: "ghost",
                className: "h-8 w-8 text-violet-600 hover:bg-violet-50",
                title: "Generate Receipt",
                onClick: () => setReceiptTarget(appt),
                "data-ocid": `chamber_appt.receipt_button.${idx + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "icon",
                variant: "ghost",
                className: "h-8 w-8 text-emerald-600 hover:bg-emerald-50",
                title: "Send WhatsApp confirmation",
                onClick: () => sendWhatsApp(appt),
                "data-ocid": `chamber_appt.whatsapp_button.${idx + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5" })
              }
            ),
            appt.phone && appt.status !== "cancelled" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: buildFollowUpMessage(
                  { fullName: appt.patientName, phone: appt.phone },
                  appt.doctor || "Dr. Arman Kabir",
                  appt.chamber || "The Clinic",
                  appt.date ? new Date(appt.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                  }) : appt.date,
                  appt.time || ""
                ),
                target: "_blank",
                rel: "noreferrer",
                title: "Send Follow-up Reminder on WhatsApp",
                className: "inline-flex items-center justify-center h-8 w-8 rounded-md text-green-700 hover:bg-green-50 transition-colors",
                "data-ocid": `chamber_appt.followup_reminder.${idx + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    viewBox: "0 0 24 24",
                    className: "w-3.5 h-3.5 fill-green-600",
                    role: "img",
                    "aria-label": "WhatsApp follow-up reminder",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "icon",
                variant: "ghost",
                className: "h-8 w-8 text-muted-foreground hover:text-foreground",
                onClick: () => openEdit(appt),
                "data-ocid": `chamber_appt.edit_button.${idx + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "icon",
                variant: "ghost",
                className: "h-8 w-8 text-destructive hover:bg-destructive/10",
                onClick: () => deleteAppt(appt.id),
                "data-ocid": `chamber_appt.delete_button.${idx + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] })
      },
      appt.id
    )) }) }),
    receiptTarget && /* @__PURE__ */ jsxRuntimeExports.jsx(
      MoneyReceipt,
      {
        initialData: {
          type: "appointment",
          patientName: receiptTarget.patientName,
          registerNumber: receiptTarget.registerNumber,
          phone: receiptTarget.phone,
          doctorName: receiptTarget.doctor,
          service: "Consultation / পরামর্শ",
          amount: 0,
          paid: false,
          date: receiptTarget.date || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
          serialNumber: receiptTarget.serialNumber
        },
        onClose: () => setReceiptTarget(null)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: showConflictWarning,
        onOpenChange: (o) => {
          if (!o) setShowConflictWarning(false);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DialogContent,
          {
            className: "sm:max-w-sm",
            "data-ocid": "chamber_appt.conflict_dialog",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2 text-amber-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5" }),
                "Appointment Conflict"
              ] }) }),
              conflictInfo && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: conflictInfo.doctorName }),
                " ",
                "already has an appointment at",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-amber-700", children: conflictInfo.conflictingTime }),
                " ",
                "for",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: conflictInfo.conflictingPatient }),
                ". This is within 15 minutes of your selected time."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "flex-col sm:flex-row gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    onClick: () => setShowConflictWarning(false),
                    "data-ocid": "chamber_appt.conflict_choose_time_button",
                    children: "Choose Different Time"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    className: "bg-amber-600 hover:bg-amber-700 text-white",
                    onClick: () => {
                      setShowConflictWarning(false);
                      setPendingSave(true);
                      _doSave();
                    },
                    "data-ocid": "chamber_appt.conflict_book_anyway_button",
                    children: "Book Anyway"
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: addOpen, onOpenChange: setAddOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-lg", "data-ocid": "chamber_appt.dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-5 h-5 text-primary" }),
        editTarget ? "Edit Chamber Appointment" : "New Chamber Appointment"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Search Patient (Reg No. or Mobile)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "0001/26 or 01XXXXXXXXX — auto-fills details",
                value: lookupQuery,
                onChange: (e) => handleLookup(e.target.value),
                className: "pr-8",
                "data-ocid": "chamber_appt.lookup_input"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute right-2.5 top-2.5 w-4 h-4 text-muted-foreground" })
          ] }),
          lookupMsg && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: `text-xs font-medium ${lookupMsg.startsWith("✓") ? "text-emerald-600" : "text-amber-600"}`,
              children: lookupMsg
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Patient Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PatientSearch,
            {
              value: form.name,
              onChange: (v) => setForm((f) => ({ ...f, name: v })),
              onSelect: (name, phone) => setForm((f) => ({ ...f, name, phone }))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Phone number",
              value: form.phone,
              onChange: (e) => setForm((f) => ({ ...f, phone: e.target.value })),
              "data-ocid": "chamber_appt.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Preferred Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "date",
                value: form.date,
                onChange: (e) => {
                  const newDate = e.target.value;
                  setForm((f) => ({ ...f, date: newDate }));
                  checkAndSetSlotAvailability(
                    newDate,
                    form.time,
                    form.doctor
                  );
                },
                "data-ocid": "chamber_appt.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "flex items-center gap-2", children: [
              "Preferred Time",
              form.time && form.doctor && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-xs font-semibold px-1.5 py-0.5 rounded-full ${slotAvailability === "available" ? "bg-emerald-100 text-emerald-700" : slotAvailability === "conflict" ? "bg-amber-100 text-amber-700" : "bg-muted text-muted-foreground"}`,
                  children: slotAvailability === "available" ? "🟢 Available" : slotAvailability === "conflict" ? "🟡 Conflict" : ""
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "time",
                value: form.time,
                onChange: (e) => {
                  const newTime = e.target.value;
                  setForm((f) => ({ ...f, time: newTime }));
                  checkAndSetSlotAvailability(
                    form.date,
                    newTime,
                    form.doctor
                  );
                },
                onBlur: () => checkAndSetSlotAvailability(
                  form.date,
                  form.time,
                  form.doctor
                ),
                "data-ocid": "chamber_appt.input"
              }
            ),
            slotAvailability === "conflict" && conflictInfo && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-600 font-medium flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3.5 h-3.5 shrink-0" }),
              conflictInfo.doctorName,
              " already has an appointment at",
              " ",
              conflictInfo.conflictingTime,
              " for",
              " ",
              conflictInfo.conflictingPatient
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Doctor" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.doctor,
              onValueChange: (v) => {
                setForm((f) => ({ ...f, doctor: v, chamber: "" }));
                checkAndSetSlotAvailability(form.date, form.time, v);
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "chamber_appt.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select doctor (optional)" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Dr. Arman Kabir", children: "Dr. Arman Kabir" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Dr. Samia Shikder", children: "Dr. Samia Shikder" })
                ] })
              ]
            }
          )
        ] }),
        chamberOptions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Preferred Chamber" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.chamber,
              onValueChange: (v) => setForm((f) => ({ ...f, chamber: v })),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "chamber_appt.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select chamber" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: chamberOptions.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Reason / Notes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              placeholder: "Reason for visit or notes…",
              className: "resize-none",
              rows: 2,
              value: form.reason,
              onChange: (e) => setForm((f) => ({ ...f, reason: e.target.value })),
              "data-ocid": "chamber_appt.textarea"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.status,
              onValueChange: (v) => setForm((f) => ({ ...f, status: v })),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "chamber_appt.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "scheduled", children: "Scheduled" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "confirmed", children: "Confirmed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cancelled", children: "Cancelled" })
                ] })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: () => setAddOpen(false),
            "data-ocid": "chamber_appt.cancel_button",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: saveAppointment,
            "data-ocid": "chamber_appt.submit_button",
            children: editTarget ? "Save Changes" : "Schedule"
          }
        )
      ] })
    ] }) })
  ] });
}
function AdmittedPatientsTab() {
  const [appointments, setAppointments] = reactExports.useState(loadAppointments);
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [editTarget, setEditTarget] = reactExports.useState(null);
  const [timePickerTarget, setTimePickerTarget] = reactExports.useState(null);
  const [timePickerVal, setTimePickerVal] = reactExports.useState("");
  const [lookupQuery, setLookupQuery] = reactExports.useState("");
  const [lookupMsg, setLookupMsg] = reactExports.useState("");
  const [receiptTarget, setReceiptTarget] = reactExports.useState(
    null
  );
  const [admSlotAvailability, setAdmSlotAvailability] = reactExports.useState("unknown");
  const [admConflictInfo, setAdmConflictInfo] = reactExports.useState(
    null
  );
  const [admShowConflictWarning, setAdmShowConflictWarning] = reactExports.useState(false);
  const [admPendingSave, setAdmPendingSave] = reactExports.useState(false);
  const { currentDoctor } = useEmailAuth();
  const isDoctor = !currentDoctor || currentDoctor.role === "doctor" || currentDoctor.role === "consultant_doctor" || currentDoctor.role === "medical_officer";
  const emptyForm = {
    name: "",
    phone: "",
    admissionDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
    hospitalName: "",
    bedWardNumber: "",
    admissionReason: "",
    referringDoctor: "",
    doctor: "",
    registerNumber: "",
    status: "scheduled"
  };
  const [form, setForm] = reactExports.useState(emptyForm);
  const persist = (data) => {
    setAppointments(data);
    saveAppointments(data);
  };
  const handleLookup = (val) => {
    setLookupQuery(val);
    setForm((f) => ({ ...f, registerNumber: val }));
    if (!val.trim()) {
      setLookupMsg("");
      return;
    }
    const found = lookupPatientByRegOrPhone(val);
    if (found) {
      setForm((f) => ({
        ...f,
        name: found.fullName || f.name,
        phone: found.phone || f.phone,
        registerNumber: val
      }));
      setLookupMsg(`✓ Found: ${found.fullName}`);
    } else {
      setLookupMsg("Patient not found");
    }
  };
  function openAdd() {
    setForm(emptyForm);
    setLookupQuery("");
    setLookupMsg("");
    setEditTarget(null);
    setAdmSlotAvailability("unknown");
    setAdmConflictInfo(null);
    setAddOpen(true);
  }
  function openEdit(appt) {
    setForm({
      name: appt.patientName,
      phone: appt.phone,
      admissionDate: appt.date,
      hospitalName: appt.hospitalName || "",
      bedWardNumber: appt.bedWardNumber || "",
      admissionReason: appt.admissionReason || "",
      referringDoctor: appt.referringDoctor || "",
      doctor: appt.doctor || "",
      registerNumber: appt.registerNumber || "",
      status: appt.status
    });
    setLookupQuery(appt.registerNumber || "");
    setLookupMsg("");
    setEditTarget(appt);
    setAdmSlotAvailability("unknown");
    setAdmConflictInfo(null);
    setAddOpen(true);
  }
  function checkAdmittedSlotConflict(date, doctor) {
    if (!date || !doctor) {
      setAdmSlotAvailability("unknown");
      setAdmConflictInfo(null);
      return;
    }
    const conflict = checkSlotConflict(
      appointments.filter((a) => a.appointmentType === "admitted"),
      date,
      "12:00",
      // default noon for date-only check
      doctor,
      editTarget == null ? void 0 : editTarget.id
    );
    if (conflict) {
      setAdmSlotAvailability("conflict");
      setAdmConflictInfo(conflict);
    } else {
      setAdmSlotAvailability("available");
      setAdmConflictInfo(null);
    }
  }
  function saveAppointment() {
    if (!form.name.trim()) {
      ue.error("Patient name is required");
      return;
    }
    if (!form.admissionDate) {
      ue.error("Please select an admission date");
      return;
    }
    if (admSlotAvailability === "conflict" && admConflictInfo && !admPendingSave) {
      setAdmShowConflictWarning(true);
      return;
    }
    _doAdmSave();
    setAdmPendingSave(false);
  }
  function _doAdmSave() {
    const currentAll = loadAppointments();
    const serial = getOrAssignSerial(
      currentAll,
      form.name.trim(),
      form.admissionDate
    );
    if (editTarget) {
      const updatedEntry = {
        ...editTarget,
        patientName: form.name.trim(),
        phone: form.phone.trim(),
        date: form.admissionDate,
        hospitalName: form.hospitalName,
        bedWardNumber: form.bedWardNumber,
        admissionReason: form.admissionReason,
        referringDoctor: form.referringDoctor,
        doctor: form.doctor || void 0,
        registerNumber: form.registerNumber || void 0,
        status: form.status
      };
      persist(
        appointments.map((a) => a.id === editTarget.id ? updatedEntry : a)
      );
      ue.success("Admission appointment updated");
      syncAppointmentToCanister("update", updatedEntry);
    } else {
      const entry = {
        id: uid(),
        patientName: form.name.trim(),
        phone: form.phone.trim(),
        date: form.admissionDate,
        time: "",
        reason: form.admissionReason,
        status: form.status,
        doctor: form.doctor || void 0,
        registerNumber: form.registerNumber || void 0,
        appointmentType: "admitted",
        hospitalName: form.hospitalName,
        bedWardNumber: form.bedWardNumber,
        admissionReason: form.admissionReason,
        referringDoctor: form.referringDoctor,
        serialNumber: serial,
        serialDate: form.admissionDate
      };
      persist([...appointments, entry]);
      ue.success(
        `Admission scheduled for ${entry.patientName} — Daily Serial #${serial}`
      );
      syncAppointmentToCanister("create", entry);
    }
    setAddOpen(false);
  }
  function saveVisitTime() {
    if (!timePickerTarget) return;
    const updated = appointments.map(
      (a) => a.id === timePickerTarget.id ? { ...a, visitTime: timePickerVal } : a
    );
    persist(updated);
    const entry = updated.find((a) => a.id === timePickerTarget.id);
    setTimePickerTarget(null);
    ue.success(`Visit time set to ${timePickerVal}`);
    if (entry) syncAppointmentToCanister("update", entry);
  }
  reactExports.useEffect(() => {
    const today = todayStr();
    const admittedVisitKeys = Object.keys(localStorage).filter(
      (k) => k.startsWith("visits_")
    );
    const currentAll = loadAppointments();
    let needsPersist = false;
    const updated = [...currentAll];
    for (const key of admittedVisitKeys) {
      try {
        const visits = JSON.parse(localStorage.getItem(key) || "[]");
        for (const visit of visits) {
          if (visit.visitType !== "admitted" && visit.isAdmitted !== true)
            continue;
          const patKey = key.replace("visits_", "patients_");
          const patients = JSON.parse(localStorage.getItem(patKey) || "[]");
          const patient = patients.find(
            (p) => String(p.id) === String(visit.patientId)
          );
          if (!patient) continue;
          const exists = updated.some(
            (a) => a.appointmentType === "admitted" && a.date === today && a.patientName.trim().toLowerCase() === (patient.fullName || "").trim().toLowerCase()
          );
          if (!exists) {
            const serial = getOrAssignSerial(updated, patient.fullName, today);
            updated.push({
              id: uid(),
              patientName: patient.fullName,
              phone: patient.phone || "",
              date: today,
              time: "",
              reason: "Daily admitted patient round",
              status: "scheduled",
              doctor: "",
              registerNumber: patient.registerNumber,
              appointmentType: "admitted",
              hospitalName: "",
              serialNumber: serial,
              serialDate: today
            });
            needsPersist = true;
          }
        }
      } catch {
      }
    }
    if (needsPersist) {
      setAppointments(updated);
      saveAppointments(updated);
    }
  }, []);
  const admittedOnly = appointments.filter(
    (a) => a.appointmentType === "admitted"
  );
  const todayAdmitted = admittedOnly.filter((a) => a.date === todayStr());
  const otherAdmitted = admittedOnly.filter((a) => a.date !== todayStr()).sort((a, b) => a.date.localeCompare(b.date));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Today's admitted patients receive daily appointment slots. Doctor sets the visit time." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          className: "gap-1.5 bg-rose-600 hover:bg-rose-700 text-white",
          onClick: openAdd,
          "data-ocid": "admitted_appt.open_modal_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
            "Add Admission"
          ]
        }
      )
    ] }),
    todayAdmitted.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold text-foreground mb-2 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "w-4 h-4 text-primary" }),
        "Today —",
        " ",
        (/* @__PURE__ */ new Date()).toLocaleDateString("en-BD", {
          weekday: "long",
          month: "long",
          day: "numeric"
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-rose-50/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-semibold", children: "#" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-semibold", children: "Patient" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-semibold hidden sm:table-cell", children: "Register No." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-semibold", children: "Visit Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-semibold hidden md:table-cell", children: "Hospital / Ward" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-semibold", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right font-semibold", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: todayAdmitted.map((appt, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            "data-ocid": `admitted_appt.today.row.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-100 text-rose-700 font-bold text-xs", children: appt.serialNumber || idx + 1 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: appt.patientName }),
                appt.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: appt.phone })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "hidden sm:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-muted-foreground", children: appt.registerNumber || "—" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: appt.visitTime ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-sm font-medium text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-primary" }),
                appt.visitTime,
                isDoctor && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "ml-1 p-0.5 hover:text-primary",
                    onClick: () => {
                      setTimePickerTarget(appt);
                      setTimePickerVal(appt.visitTime || "");
                    },
                    "aria-label": "Change visit time",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3 h-3" })
                  }
                )
              ] }) : isDoctor ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-7 text-xs gap-1 border-primary/40 text-primary hover:bg-primary/10",
                  onClick: () => {
                    setTimePickerTarget(appt);
                    setTimePickerVal("");
                  },
                  "data-ocid": `admitted_appt.set_time_button.${idx + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                    " Set Time"
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground italic", children: "Pending" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "hidden md:table-cell", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: appt.hospitalName || "—" }),
                appt.bedWardNumber && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  "Ward: ",
                  appt.bedWardNumber
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: apptStatusConfig[appt.status].className,
                  children: apptStatusConfig[appt.status].label
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "icon",
                    variant: "ghost",
                    className: "h-7 w-7 text-violet-600 hover:bg-violet-50",
                    title: "Generate Receipt",
                    onClick: () => setReceiptTarget(appt),
                    "data-ocid": `admitted_appt.receipt_button.${idx + 1}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "w-3.5 h-3.5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "icon",
                    variant: "ghost",
                    className: "h-7 w-7 text-emerald-600 hover:bg-emerald-50",
                    title: "Send WhatsApp",
                    onClick: () => sendWhatsApp(appt),
                    "data-ocid": `admitted_appt.whatsapp_button.${idx + 1}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "icon",
                    variant: "ghost",
                    className: "h-7 w-7 text-muted-foreground",
                    onClick: () => openEdit(appt),
                    "data-ocid": `admitted_appt.edit_button.${idx + 1}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3.5 h-3.5" })
                  }
                )
              ] }) })
            ]
          },
          appt.id
        )) })
      ] }) })
    ] }),
    otherAdmitted.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-muted-foreground mb-2", children: "Other Admissions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: otherAdmitted.map((appt, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 4 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.2, delay: idx * 0.03 },
          className: "bg-card border border-border rounded-xl p-4 hover:shadow-sm transition-shadow",
          "data-ocid": `admitted_appt.other.item.${idx + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: appt.patientName }),
                appt.registerNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-muted-foreground border border-border rounded px-1.5 py-0.5", children: appt.registerNumber }),
                appt.serialNumber && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold bg-rose-100 text-rose-700 border border-rose-200 rounded px-1.5 py-0.5", children: [
                  "Serial #",
                  appt.serialNumber
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: apptStatusConfig[appt.status].className,
                    children: apptStatusConfig[appt.status].label
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-1.5 text-sm text-muted-foreground flex-wrap", children: [
                appt.doctor && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-medium text-xs", children: appt.doctor }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "w-3.5 h-3.5" }),
                  new Date(appt.date).toLocaleDateString("en-BD", {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                  })
                ] }),
                appt.hospitalName && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Hospital, { className: "w-3.5 h-3.5" }),
                  appt.hospitalName
                ] }),
                appt.bedWardNumber && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-3.5 h-3.5" }),
                  "Ward: ",
                  appt.bedWardNumber
                ] })
              ] }),
              appt.admissionReason && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground line-clamp-2", children: appt.admissionReason })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "icon",
                  variant: "ghost",
                  className: "h-8 w-8 text-emerald-600 hover:bg-emerald-50",
                  title: "Send WhatsApp confirmation",
                  onClick: () => sendWhatsApp(appt),
                  "data-ocid": `admitted_appt.whatsapp_button.other.${idx + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5" })
                }
              ),
              appt.phone && appt.status !== "cancelled" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: buildFollowUpMessage(
                    { fullName: appt.patientName, phone: appt.phone },
                    appt.doctor || "Dr. Arman Kabir",
                    appt.hospitalName || "Hospital",
                    new Date(appt.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric"
                    }),
                    appt.visitTime || appt.time || ""
                  ),
                  target: "_blank",
                  rel: "noreferrer",
                  title: "Send Follow-up Reminder on WhatsApp",
                  className: "inline-flex items-center justify-center h-8 w-8 rounded-md text-green-700 hover:bg-green-50 transition-colors",
                  "data-ocid": `admitted_appt.followup_reminder.other.${idx + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "svg",
                    {
                      viewBox: "0 0 24 24",
                      className: "w-3.5 h-3.5 fill-green-600",
                      role: "img",
                      "aria-label": "WhatsApp follow-up reminder",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "icon",
                  variant: "ghost",
                  className: "h-8 w-8 text-muted-foreground hover:text-foreground",
                  onClick: () => openEdit(appt),
                  "data-ocid": `admitted_appt.edit_button.other.${idx + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3.5 h-3.5" })
                }
              )
            ] })
          ] })
        },
        appt.id
      )) })
    ] }),
    admittedOnly.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-16 text-center text-muted-foreground",
        "data-ocid": "admitted_appt.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-10 h-10 mb-3 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "No admitted patients found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "Admitted patient slots appear here automatically from visit forms" })
        ]
      }
    ),
    receiptTarget && /* @__PURE__ */ jsxRuntimeExports.jsx(
      MoneyReceipt,
      {
        initialData: {
          type: "appointment",
          patientName: receiptTarget.patientName,
          registerNumber: receiptTarget.registerNumber,
          phone: receiptTarget.phone,
          doctorName: receiptTarget.doctor,
          service: "Hospital Consultation / হাসপাতাল পরামর্শ",
          amount: 0,
          paid: false,
          date: receiptTarget.date || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
          serialNumber: receiptTarget.serialNumber,
          notes: receiptTarget.hospitalName ? `Hospital: ${receiptTarget.hospitalName}` : void 0
        },
        onClose: () => setReceiptTarget(null)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!timePickerTarget,
        onOpenChange: (o) => !o && setTimePickerTarget(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DialogContent,
          {
            className: "sm:max-w-xs",
            "data-ocid": "admitted_appt.time_dialog",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-primary" }),
                "Set Visit Time"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                "Set the visit time for",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: timePickerTarget == null ? void 0 : timePickerTarget.patientName })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "time",
                  value: timePickerVal,
                  onChange: (e) => setTimePickerVal(e.target.value),
                  className: "text-lg h-12",
                  "data-ocid": "admitted_appt.time_input"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setTimePickerTarget(null), children: "Cancel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    onClick: saveVisitTime,
                    disabled: !timePickerVal,
                    "data-ocid": "admitted_appt.time_save_button",
                    children: "Set Time"
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: addOpen, onOpenChange: setAddOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-lg", "data-ocid": "admitted_appt.dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-5 h-5 text-rose-600" }),
        editTarget ? "Edit Admission" : "New Hospital Admission"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Search Patient (Reg No. or Mobile)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "0001/26 or 01XXXXXXXXX — auto-fills details",
                value: lookupQuery,
                onChange: (e) => handleLookup(e.target.value),
                className: "pr-8",
                "data-ocid": "admitted_appt.lookup_input"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute right-2.5 top-2.5 w-4 h-4 text-muted-foreground" })
          ] }),
          lookupMsg && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: `text-xs font-medium ${lookupMsg.startsWith("✓") ? "text-emerald-600" : "text-amber-600"}`,
              children: lookupMsg
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Patient Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PatientSearch,
            {
              value: form.name,
              onChange: (v) => setForm((f) => ({ ...f, name: v })),
              onSelect: (name, phone) => setForm((f) => ({ ...f, name, phone }))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Phone number",
              value: form.phone,
              onChange: (e) => setForm((f) => ({ ...f, phone: e.target.value })),
              "data-ocid": "admitted_appt.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Admission Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "date",
              value: form.admissionDate,
              onChange: (e) => {
                const newDate = e.target.value;
                setForm((f) => ({ ...f, admissionDate: newDate }));
                checkAdmittedSlotConflict(newDate, form.doctor);
              },
              "data-ocid": "admitted_appt.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Hospital Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "e.g. DMCH",
                value: form.hospitalName,
                onChange: (e) => setForm((f) => ({ ...f, hospitalName: e.target.value })),
                "data-ocid": "admitted_appt.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Bed / Ward (optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "e.g. Ward 7, Bed 12",
                value: form.bedWardNumber,
                onChange: (e) => setForm((f) => ({ ...f, bedWardNumber: e.target.value })),
                "data-ocid": "admitted_appt.input"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Referring Doctor (optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Referring doctor name",
              value: form.referringDoctor,
              onChange: (e) => setForm((f) => ({ ...f, referringDoctor: e.target.value })),
              "data-ocid": "admitted_appt.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Doctor" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.doctor,
              onValueChange: (v) => {
                setForm((f) => ({ ...f, doctor: v }));
                checkAdmittedSlotConflict(form.admissionDate, v);
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "admitted_appt.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select doctor (optional)" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Dr. Arman Kabir", children: "Dr. Arman Kabir" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Dr. Samia Shikder", children: "Dr. Samia Shikder" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Admission Reason" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              placeholder: "Reason for admission…",
              className: "resize-none",
              rows: 2,
              value: form.admissionReason,
              onChange: (e) => setForm((f) => ({ ...f, admissionReason: e.target.value })),
              "data-ocid": "admitted_appt.textarea"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.status,
              onValueChange: (v) => setForm((f) => ({ ...f, status: v })),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "admitted_appt.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "scheduled", children: "Scheduled" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "confirmed", children: "Confirmed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cancelled", children: "Cancelled" })
                ] })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: () => setAddOpen(false),
            "data-ocid": "admitted_appt.cancel_button",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: saveAppointment,
            className: "bg-rose-600 hover:bg-rose-700",
            "data-ocid": "admitted_appt.submit_button",
            children: editTarget ? "Save Changes" : "Add Admission"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: admShowConflictWarning,
        onOpenChange: (o) => {
          if (!o) setAdmShowConflictWarning(false);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DialogContent,
          {
            className: "sm:max-w-sm",
            "data-ocid": "admitted_appt.conflict_dialog",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2 text-amber-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5" }),
                "Admission Scheduling Conflict"
              ] }) }),
              admConflictInfo && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: admConflictInfo.doctorName }),
                " ",
                "already has an admitted patient scheduled around",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-amber-700", children: admConflictInfo.conflictingTime }),
                " ",
                "for",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: admConflictInfo.conflictingPatient }),
                ". Please choose a different date or proceed anyway."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "flex-col sm:flex-row gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    onClick: () => setAdmShowConflictWarning(false),
                    "data-ocid": "admitted_appt.conflict_choose_time_button",
                    children: "Choose Different Date"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    className: "bg-amber-600 hover:bg-amber-700 text-white",
                    onClick: () => {
                      setAdmShowConflictWarning(false);
                      setAdmPendingSave(true);
                      _doAdmSave();
                    },
                    "data-ocid": "admitted_appt.conflict_book_anyway_button",
                    children: "Proceed Anyway"
                  }
                )
              ] })
            ]
          }
        )
      }
    )
  ] });
}
function loadPublicBookings() {
  try {
    return JSON.parse(
      localStorage.getItem("public_appointment_requests") || "[]"
    );
  } catch {
    return [];
  }
}
function savePublicBookings(data) {
  localStorage.setItem("public_appointment_requests", JSON.stringify(data));
}
function PublicBookingRequestsTab() {
  const [bookings, setBookings] = reactExports.useState(loadPublicBookings);
  const [confirmingBooking, setConfirmingBooking] = reactExports.useState(null);
  const createPatient = useCreatePatient();
  const persistBookings = (updated) => {
    setBookings(updated);
    savePublicBookings(updated);
  };
  const markConfirmed = (id) => {
    persistBookings(
      bookings.map((b) => b.id === id ? { ...b, status: "confirmed" } : b)
    );
  };
  const cancelBooking = (id) => {
    persistBookings(
      bookings.map((b) => b.id === id ? { ...b, status: "cancelled" } : b)
    );
    ue.success("Booking cancelled.");
  };
  const handlePatientRegister = (data) => {
    if (!confirmingBooking) return;
    createPatient.mutate(data, {
      onSuccess: () => {
        markConfirmed(confirmingBooking.id);
        ue.success(
          `Appointment confirmed and ${data.fullName} registered as a patient.`
        );
        setConfirmingBooking(null);
      },
      onError: () => {
        ue.error("Failed to register patient. Please try again.");
      }
    });
  };
  const statusBadge = (status) => {
    const map = {
      pending: "bg-yellow-100 text-yellow-800",
      confirmed: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800"
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: `text-xs font-semibold px-2 py-0.5 rounded-full ${map[status]}`,
        children: status.charAt(0).toUpperCase() + status.slice(1)
      }
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    bookings.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-16 text-muted-foreground gap-3",
        "data-ocid": "public_bookings.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "w-10 h-10 opacity-40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No public booking requests yet." })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "public_bookings.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        bookings.length,
        " request",
        bookings.length !== 1 ? "s" : "",
        " from the public booking form."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Patient" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Doctor" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: bookings.map((b, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            "data-ocid": `public_bookings.item.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                b.patientName,
                b.registerNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono text-muted-foreground", children: b.registerNumber })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground text-sm", children: b.phone }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: b.appointmentType === "admitted" ? "bg-rose-100 text-rose-700 border-rose-200" : "bg-blue-100 text-blue-700 border-blue-200",
                  children: b.appointmentType === "admitted" ? "Admitted" : "Chamber"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm", children: b.doctor }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-sm", children: [
                b.preferredDate || b.date || "—",
                (b.preferredTime || b.time) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-1", children: b.preferredTime || b.time })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground max-w-[140px] truncate", children: b.preferredChamber || b.chamber || "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: statusBadge(b.status) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                b.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 text-xs text-green-700 border-green-300 hover:bg-green-50 gap-1",
                    onClick: () => setConfirmingBooking(b),
                    "data-ocid": `public_bookings.confirm_button.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-3 h-3" }),
                      " Confirm"
                    ]
                  }
                ),
                b.status === "confirmed" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-green-700 font-medium", children: "Registered" }),
                b.status !== "cancelled" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 text-xs text-red-700 border-red-300 hover:bg-red-50",
                    onClick: () => cancelBooking(b.id),
                    "data-ocid": `public_bookings.delete_button.${idx + 1}`,
                    children: "Cancel"
                  }
                )
              ] }) })
            ]
          },
          b.id
        )) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!confirmingBooking,
        onOpenChange: (open) => {
          if (!open) setConfirmingBooking(null);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DialogContent,
          {
            className: "max-w-2xl max-h-[90vh] overflow-y-auto",
            "data-ocid": "public_bookings.register_dialog",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-5 h-5 text-primary" }),
                  "Register Patient & Confirm Appointment"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Pre-filled from the booking request. Complete the details and save to confirm." })
              ] }),
              confirmingBooking && /* @__PURE__ */ jsxRuntimeExports.jsx(
                PatientForm,
                {
                  prefill: {
                    fullName: confirmingBooking.patientName,
                    phone: confirmingBooking.phone
                  },
                  onSubmit: handlePatientRegister,
                  onCancel: () => setConfirmingBooking(null),
                  isLoading: createPatient.isPending
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
function Appointments() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-foreground", children: "Appointments" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Doctor serial, chamber appointments, hospital admissions & public requests" })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "serial", className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "w-full sm:w-auto flex-wrap h-auto gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "serial",
            className: "gap-2",
            "data-ocid": "appointments.serial.tab",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ListOrdered, { className: "w-4 h-4" }),
              "Doctor Serial"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "chamber",
            className: "gap-2",
            "data-ocid": "appointments.chamber.tab",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-4 h-4" }),
              "Chamber Patients"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "admitted",
            className: "gap-2",
            "data-ocid": "appointments.admitted.tab",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-4 h-4" }),
              "Admitted Patients"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "public",
            className: "gap-2",
            "data-ocid": "appointments.public.tab",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "w-4 h-4" }),
              "Public Requests"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "receipts",
            className: "gap-2",
            "data-ocid": "appointments.receipts.tab",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "w-4 h-4" }),
              "Receipts"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "serial", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DoctorSerialTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "chamber", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChamberAppointmentsTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "admitted", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdmittedPatientsTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "public", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PublicBookingRequestsTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "receipts", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReceiptsHistoryList, {}) })
    ] })
  ] });
}
export {
  Appointments as default
};
