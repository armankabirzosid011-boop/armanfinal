import { i as createLucideIcon, r as reactExports, a1 as loadRegistry, a2 as loadPatientRegistry, O as getAuditLog, j as jsxRuntimeExports, h as Badge, a3 as Users, a4 as UserCheck, c as Clock, b as CircleCheck, S as Select, d as SelectTrigger, e as SelectValue, f as SelectContent, a5 as STAFF_ROLE_LABELS, g as SelectItem, B as Button, a6 as CircleX, P as ShieldAlert, a7 as RefreshCw, a8 as saveRegistry, u as ue, a9 as savePatientRegistry, aa as Bell, C as ChevronUp, a as ChevronDown, ab as TriangleAlert, ac as cn, q as useEmailAuth, ad as useNavigate, ae as ClipboardList, af as Pill, k as CalendarDays, ag as FlaskConical, T as Tabs, l as TabsList, n as TabsTrigger, p as TabsContent, o as Stethoscope, z as LoaderCircle, ah as CirclePlus, x as useCreatePatient, ai as DollarSign, D as Dialog, s as DialogContent, t as DialogHeader, v as DialogTitle, K as useAdminAuth } from "./index-DJeWhCy-.js";
import { C as Card, a as CardHeader, b as CardContent } from "./card-COhiAhz1.js";
import { D as Database } from "./database-Ck9e-_FX.js";
import { B as BedDouble } from "./bed-double-DSQN6_I2.js";
import { A as Activity } from "./activity-BRRgo98q.js";
import { C as ChartNoAxesColumn } from "./chart-no-axes-column-aUF3iGvH.js";
import { U as UserPlus } from "./user-plus-BJkC4ige.js";
import { S as Skeleton } from "./skeleton-DqU5IOMD.js";
import { c as checkExtendedClinicalAlerts, a as calculateNEWS2, C as ClipboardCheck } from "./clinicalIntelligence-B4u_Xj_J.js";
import { loadEscalations, acknowledgeEscalation } from "./NurseDueMeds-C04LCd8h.js";
import { F as FileText } from "./file-text-DJrK52te.js";
import { E as Eye } from "./eye-DZPhoU57.js";
import { I as Info } from "./info-DjKKOoM3.js";
import { D as Droplets } from "./droplets-Dr40MrVb.js";
import { S as Search } from "./search-BLymxia-.js";
import { S as Sun, M as Moon } from "./sun-7_ce8Kaj.js";
import { S as Sunset } from "./sunset-B1zSdVi8.js";
import { P as PatientForm } from "./PatientForm-BCKQSbNc.js";
import { M as MessageSquare } from "./message-square-gLkdQm4U.js";
import "./camera-DpsioLhp.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
];
const TrendingDown = createLucideIcon("trending-down", __iconNode);
function getTotalPatients$1() {
  let count = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!(k == null ? void 0 : k.startsWith("patients_"))) continue;
    try {
      const arr = JSON.parse(localStorage.getItem(k) || "[]");
      count += arr.length;
    } catch {
    }
  }
  return count;
}
function getSyncStatus() {
  const lastSync = localStorage.getItem("medicare_last_sync");
  if (!lastSync) return "Never synced";
  const diffMs = Date.now() - Number(lastSync);
  const diffMin = Math.floor(diffMs / 6e4);
  if (diffMin < 1) return "Just now";
  if (diffMin < 60) return `${diffMin} min ago`;
  return `${Math.floor(diffMin / 60)}h ago`;
}
function getAdmittedCount() {
  let count = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!(k == null ? void 0 : k.startsWith("patients_"))) continue;
    try {
      const arr = JSON.parse(localStorage.getItem(k) || "[]");
      count += arr.filter(
        (p) => p.isAdmitted || p.patientType === "admitted" || p.status === "Admitted"
      ).length;
    } catch {
    }
  }
  return count;
}
function getVisitsThisWeek() {
  const weekAgo = Date.now() - 7 * 24 * 3600 * 1e3;
  let count = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!(k == null ? void 0 : k.startsWith("visits_"))) continue;
    try {
      const arr = JSON.parse(localStorage.getItem(k) || "[]");
      count += arr.filter(
        (v) => new Date(v.createdAt ?? 0).getTime() > weekAgo
      ).length;
    } catch {
    }
  }
  return count;
}
function getTopActionsThisWeek() {
  const weekAgo = Date.now() - 7 * 24 * 3600 * 1e3;
  const counts = {};
  try {
    const logs = getAuditLog();
    for (const log of logs) {
      if (new Date(log.timestamp).getTime() < weekAgo) continue;
      counts[log.action] = (counts[log.action] ?? 0) + 1;
    }
  } catch {
  }
  return Object.entries(counts).map(([action, count]) => ({ action, count })).sort((a, b) => b.count - a.count).slice(0, 5);
}
function AdminDashboard() {
  const [pendingStaff, setPendingStaff] = reactExports.useState([]);
  const [pendingPatients, setPendingPatients] = reactExports.useState([]);
  const [approvalRoles, setApprovalRoles] = reactExports.useState(
    {}
  );
  const [, setRefreshTick] = reactExports.useState(0);
  const refresh = reactExports.useCallback(() => {
    setPendingStaff(loadRegistry().filter((d) => d.status === "pending"));
    setPendingPatients(
      loadPatientRegistry().filter((p) => p.status === "pending")
    );
    setRefreshTick((t) => t + 1);
  }, []);
  reactExports.useEffect(() => {
    refresh();
    const iv = setInterval(refresh, 5e3);
    return () => clearInterval(iv);
  }, [refresh]);
  const allStaff = reactExports.useMemo(
    () => loadRegistry().filter((d) => d.status === "approved"),
    []
  );
  const recentLogs = reactExports.useMemo(() => getAuditLog().slice(-10).reverse(), []);
  const totalPatients = reactExports.useMemo(getTotalPatients$1, []);
  const syncStatus = reactExports.useMemo(getSyncStatus, []);
  const admittedCount = reactExports.useMemo(getAdmittedCount, []);
  const visitsThisWeek = reactExports.useMemo(getVisitsThisWeek, []);
  const topActions = reactExports.useMemo(getTopActionsThisWeek, []);
  const approveStaff = (acc) => {
    const role = approvalRoles[acc.id] ?? acc.role ?? "doctor";
    const reg = loadRegistry();
    const idx = reg.findIndex((d) => d.id === acc.id);
    if (idx >= 0) {
      reg[idx] = { ...reg[idx], status: "approved", role };
      saveRegistry(reg);
      refresh();
      ue.success(
        `${acc.name} approved as ${STAFF_ROLE_LABELS[role] ?? role}`
      );
    }
  };
  const rejectStaff = (id) => {
    const reg = loadRegistry();
    const idx = reg.findIndex((d) => d.id === id);
    if (idx >= 0) {
      reg[idx] = { ...reg[idx], status: "rejected" };
      saveRegistry(reg);
      refresh();
      ue.success("Account rejected");
    }
  };
  const approvePatient = (id) => {
    const reg = loadPatientRegistry();
    const idx = reg.findIndex((p) => p.id === id);
    if (idx >= 0) {
      reg[idx] = { ...reg[idx], status: "approved" };
      savePatientRegistry(reg);
      refresh();
      ue.success("Patient account approved");
    }
  };
  const rejectPatient = (id) => {
    const reg = loadPatientRegistry();
    const idx = reg.findIndex((p) => p.id === id);
    if (idx >= 0) {
      reg[idx] = { ...reg[idx], status: "rejected" };
      savePatientRegistry(reg);
      refresh();
      ue.success("Patient account rejected");
    }
  };
  const totalPending = pendingStaff.length + pendingPatients.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6",
      "data-ocid": "admin.dashboard",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-foreground", children: "Admin Dashboard" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-0.5", children: "System management & approvals" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            totalPending > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-amber-600 text-white text-xs px-3 py-1 animate-pulse", children: [
              totalPending,
              " Pending Approval",
              totalPending !== 1 ? "s" : ""
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-purple-100 text-purple-800 border-purple-200 text-xs px-3 py-1", children: "Admin" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl shadow-sm overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-600 to-indigo-700 p-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white leading-none", children: totalPatients }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-white opacity-80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card px-4 py-2.5 border border-t-0 border-border rounded-b-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "Total Patients" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl shadow-sm overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-teal-500 to-green-600 p-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white leading-none", children: allStaff.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-6 h-6 text-white opacity-80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card px-4 py-2.5 border border-t-0 border-border rounded-b-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "Active Staff" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl shadow-sm overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-amber-500 to-orange-600 p-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white leading-none", children: totalPending }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-6 h-6 text-white opacity-80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card px-4 py-2.5 border border-t-0 border-border rounded-b-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "Pending Approvals" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl shadow-sm overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-violet-500 to-purple-600 p-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-white leading-none truncate max-w-[100px]", children: syncStatus }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "w-6 h-6 text-white opacity-80 shrink-0" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card px-4 py-2.5 border border-t-0 border-border rounded-b-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "Last Sync" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: pendingStaff.length > 0 ? "border-amber-200" : "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-4 h-4 text-amber-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Staff / Doctor Approvals" }),
              pendingStaff.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-amber-600 text-white text-xs", children: pendingStaff.length })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: pendingStaff.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-2 text-emerald-600 py-3",
                "data-ocid": "admin.staff_approvals.empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No pending staff approvals" })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: pendingStaff.map((acc) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-amber-50 border border-amber-200 rounded-xl p-3 space-y-2",
                "data-ocid": `admin.staff_item.${acc.id}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: acc.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: acc.email }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: new Date(acc.createdAt).toLocaleDateString() })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: approvalRoles[acc.id] ?? acc.role ?? "doctor",
                        onValueChange: (v) => setApprovalRoles((prev) => ({
                          ...prev,
                          [acc.id]: v
                        })),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            SelectTrigger,
                            {
                              className: "h-7 text-xs flex-1",
                              "data-ocid": "admin.role.select",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: Object.keys(STAFF_ROLE_LABELS).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, className: "text-xs", children: STAFF_ROLE_LABELS[r] }, r)) })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "h-7 text-xs text-emerald-700 border-emerald-300 hover:bg-emerald-50 gap-1 shrink-0",
                        onClick: () => approveStaff(acc),
                        "data-ocid": "admin.approve.button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
                          " Approve"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "h-7 text-xs text-red-700 border-red-300 hover:bg-red-50 gap-1 shrink-0",
                        onClick: () => rejectStaff(acc.id),
                        "data-ocid": "admin.reject.button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3 h-3" }),
                          " Reject"
                        ]
                      }
                    )
                  ] })
                ]
              },
              acc.id
            )) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: pendingPatients.length > 0 ? "border-teal-200" : "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-teal-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Patient Account Approvals" }),
              pendingPatients.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-teal-600 text-white text-xs", children: pendingPatients.length })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: pendingPatients.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-2 text-emerald-600 py-3",
                "data-ocid": "admin.patient_approvals.empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No pending patient accounts" })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: pendingPatients.map((acc) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-teal-50 border border-teal-200 rounded-xl p-3 flex items-center justify-between gap-3",
                "data-ocid": `admin.patient_item.${acc.id}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: acc.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: acc.phone }),
                    acc.registerNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono text-teal-700", children: acc.registerNumber })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "h-7 text-xs text-emerald-700 border-emerald-300 hover:bg-emerald-50 gap-1",
                        onClick: () => approvePatient(acc.id),
                        "data-ocid": "admin.approve.button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
                          " Approve"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "h-7 text-xs text-red-700 border-red-300 hover:bg-red-50 gap-1",
                        onClick: () => rejectPatient(acc.id),
                        "data-ocid": "admin.reject.button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3 h-3" }),
                          " Reject"
                        ]
                      }
                    )
                  ] })
                ]
              },
              acc.id
            )) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-4 h-4 text-purple-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Recent Audit Log" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "ml-auto bg-purple-100 text-purple-700 border-purple-200 text-xs", children: [
              recentLogs.length,
              " entries"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "text-xs gap-1",
                onClick: () => {
                  window.location.href = "/AuditLog";
                },
                "data-ocid": "admin.view_audit.button",
                children: "View All"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: recentLogs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-sm text-muted-foreground py-3 text-center",
              "data-ocid": "admin.audit.empty_state",
              children: "No audit entries yet"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: recentLogs.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "py-2.5 flex items-start gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-lg bg-purple-100 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5 text-purple-600" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: entry.userName }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: entry.action }),
                    entry.target && entry.target !== "System" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                      " ",
                      "· ",
                      entry.target
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "outline",
                        className: "text-[10px] border-purple-200 text-purple-700",
                        children: entry.userRole
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-2.5 h-2.5" }),
                      new Date(entry.timestamp).toLocaleString()
                    ] })
                  ] })
                ] })
              ]
            },
            `${entry.timestamp}-${i}`
          )) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "border-l-4 border-l-purple-500",
              "data-ocid": "admin.system_overview.panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "w-4 h-4 text-purple-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "System Overview" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4 space-y-2", children: [
                  {
                    label: "Total Patients",
                    value: totalPatients,
                    icon: Users,
                    color: "text-purple-600"
                  },
                  {
                    label: "Active Admitted",
                    value: admittedCount,
                    icon: BedDouble,
                    color: "text-blue-600"
                  },
                  {
                    label: "Visits This Week",
                    value: visitsThisWeek,
                    icon: Activity,
                    color: "text-emerald-600"
                  },
                  {
                    label: "Pending Approvals",
                    value: totalPending,
                    icon: Clock,
                    color: "text-amber-600"
                  },
                  {
                    label: "Active Staff",
                    value: allStaff.length,
                    icon: UserCheck,
                    color: "text-teal-600"
                  }
                ].map(({ label, value, icon: Icon, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-between py-1.5 border-b border-border last:border-0",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-3.5 h-3.5 ${color}` }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: label })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground", children: value })
                    ]
                  },
                  label
                )) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "border-l-4 border-l-blue-500",
              "data-ocid": "admin.top_actions.panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "w-4 h-4 text-blue-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Top Actions This Week" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: topActions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex flex-col items-center py-6 text-muted-foreground gap-2",
                    "data-ocid": "admin.top_actions.empty_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "w-7 h-7 opacity-30" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No activity recorded yet" })
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: topActions.map((item, idx) => {
                  var _a;
                  const maxCount = ((_a = topActions[0]) == null ? void 0 : _a.count) ?? 1;
                  const pct = Math.round(item.count / maxCount * 100);
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      "data-ocid": `admin.top_action.item.${idx + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground truncate max-w-[160px]", children: item.action }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-muted-foreground shrink-0 ml-2", children: item.count })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "h-full rounded-full bg-blue-500 transition-all",
                            style: { width: `${pct}%` }
                          }
                        ) })
                      ]
                    },
                    item.action
                  );
                }) }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: `border-l-4 ${pendingStaff.length > 0 ? "border-l-amber-500" : "border-l-emerald-500"}`,
              "data-ocid": "admin.pending_staff.panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-4 h-4 text-amber-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Pending Staff Applications" }),
                  pendingStaff.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-amber-500 text-white text-xs", children: pendingStaff.length })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: pendingStaff.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 text-emerald-600 py-3",
                    "data-ocid": "admin.pending_staff.empty_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No pending staff applications" })
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-52 overflow-y-auto", children: pendingStaff.map((acc, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2.5",
                    "data-ocid": `admin.pending_staff.item.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: acc.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: acc.email }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: new Date(acc.createdAt).toLocaleDateString() })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "sm",
                          variant: "outline",
                          className: "h-6 px-2 text-[10px] text-purple-700 border-purple-300 hover:bg-purple-50 shrink-0",
                          onClick: () => {
                            window.location.href = "/Staff";
                          },
                          "data-ocid": `admin.pending_staff.review.${idx + 1}`,
                          children: "Review"
                        }
                      )
                    ]
                  },
                  acc.id
                )) }) })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const NEWS2_COLORS = {
  low: "bg-emerald-50 border-l-4 border-emerald-500 text-emerald-800",
  medium: "bg-amber-50 border-l-4 border-amber-500 text-amber-800",
  high: "bg-red-50 border-l-4 border-red-600 text-red-800"
};
const SEVERITY_STYLES = {
  critical: {
    banner: "bg-red-600 text-white w-full py-3 px-4 rounded-lg font-semibold",
    card: "bg-red-50/80 border-red-300",
    icon: "text-white",
    badge: "bg-white/20 text-white border border-white/40",
    label: "Critical"
  },
  warning: {
    banner: "bg-orange-500 text-white w-full py-3 px-4 rounded-lg font-semibold",
    card: "bg-amber-50/80 border-amber-300",
    icon: "text-white",
    badge: "bg-white/20 text-white border border-white/40",
    label: "Warning"
  },
  info: {
    banner: "bg-yellow-400 text-yellow-900 w-full py-3 px-4 rounded-lg font-semibold",
    card: "bg-blue-50/80 border-blue-200",
    icon: "text-white",
    badge: "bg-white/20 border border-yellow-600/40",
    label: "Info"
  }
};
function appendAudit(patientId, alertId, message) {
  try {
    const key = `auditLog_${patientId}`;
    const arr = JSON.parse(localStorage.getItem(key) ?? "[]");
    arr.push({
      alertId,
      message,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      action: "acknowledged"
    });
    localStorage.setItem(key, JSON.stringify(arr));
  } catch {
  }
}
function vitalSignsToInput(vitals) {
  var _a;
  const parseNum = (v) => v ? Number.parseFloat(v) : void 0;
  const bp = (_a = vitals.bloodPressure) == null ? void 0 : _a.split("/").map(Number);
  return {
    systolicBP: bp == null ? void 0 : bp[0],
    diastolicBP: bp == null ? void 0 : bp[1],
    heartRate: parseNum(vitals.pulse),
    temperature: parseNum(vitals.temperature),
    respiratoryRate: parseNum(vitals.respiratoryRate),
    spo2: parseNum(vitals.oxygenSaturation)
  };
}
function loadDismissed() {
  try {
    return JSON.parse(
      localStorage.getItem("clinicalAlerts_dismissed") ?? "{}"
    );
  } catch {
    return {};
  }
}
function saveDismissed(d) {
  try {
    localStorage.setItem("clinicalAlerts_dismissed", JSON.stringify(d));
  } catch {
  }
}
function ClinicalAlertsPanel({ patients, vitalsData }) {
  const [dismissed, setDismissed] = reactExports.useState(loadDismissed);
  const [expanded, setExpanded] = reactExports.useState(true);
  const [collapsedAlerts, setCollapsedAlerts] = reactExports.useState({});
  const prevCriticalIds = reactExports.useRef(/* @__PURE__ */ new Set());
  const alertGroups = patients.map((p) => {
    const pidStr = String(p.id);
    const vitalHistory = vitalsData[pidStr] ?? [];
    const latest = vitalHistory[vitalHistory.length - 1];
    const input = latest ? { vitals: vitalSignsToInput(latest) } : {};
    const alerts = checkExtendedClinicalAlerts(input).filter(
      (a) => !dismissed[a.id]
    );
    const news2 = latest ? calculateNEWS2(latest) : null;
    return { patient: p, alerts, news2 };
  }).filter((g) => g.alerts.length > 0 || g.news2 && g.news2.score >= 5);
  const totalCritical = alertGroups.reduce(
    (acc, g) => acc + g.alerts.filter((a) => a.severity === "critical").length,
    0
  );
  reactExports.useEffect(() => {
    for (const g of alertGroups) {
      for (const alert of g.alerts) {
        if (alert.severity !== "critical") continue;
        if (!prevCriticalIds.current.has(alert.id)) {
          prevCriticalIds.current.add(alert.id);
          ue.error(`🚨 ${g.patient.fullName}: ${alert.message}`, {
            duration: 8e3,
            id: alert.id
          });
        }
      }
    }
  }, [alertGroups]);
  function toggleAlertCollapse(alertId) {
    setCollapsedAlerts((prev) => ({ ...prev, [alertId]: !prev[alertId] }));
  }
  function dismiss(alertId, patientId, message) {
    const next = { ...dismissed, [alertId]: true };
    setDismissed(next);
    saveDismissed(next);
    appendAudit(patientId, alertId, message);
    ue.success("Alert acknowledged");
  }
  if (alertGroups.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 flex items-center gap-3",
        "data-ocid": "clinical_alerts.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-emerald-600 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-emerald-800 font-medium", children: "No active clinical alerts for admitted patients" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border border-border rounded-xl overflow-hidden",
      "data-ocid": "clinical_alerts.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "w-full flex items-center justify-between gap-3 px-4 py-3 bg-red-50 border-b border-red-200 hover:bg-red-100 transition-colors",
            onClick: () => setExpanded((v) => !v),
            "data-ocid": "clinical_alerts.toggle",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4 text-red-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-red-800 text-sm", children: "Clinical Alerts" }),
                totalCritical > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold",
                    "data-ocid": "clinical_alerts.badge",
                    children: totalCritical
                  }
                )
              ] }),
              expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-red-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-red-500" })
            ]
          }
        ),
        expanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 space-y-4 bg-background", children: alertGroups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `clinical_alerts.patient_group.${String(group.patient.id)}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold text-xs", children: group.patient.fullName.charAt(0) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm text-foreground", children: group.patient.fullName }),
                group.news2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  NEWS2Badge,
                  {
                    score: group.news2.score,
                    risk: group.news2.risk
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 pl-9", children: group.alerts.map((alert, i) => {
                const s = SEVERITY_STYLES[alert.severity] ?? SEVERITY_STYLES.info;
                const Icon = alert.severity === "critical" ? CircleX : TriangleAlert;
                const isCollapsed = collapsedAlerts[alert.id];
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: cn("rounded-xl overflow-hidden", s.banner),
                    "data-ocid": `clinical_alerts.alert.${String(group.patient.id)}.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: cn("w-4 h-4 shrink-0", s.icon) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm flex-1", children: alert.message }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            className: "opacity-70 hover:opacity-100 transition-opacity p-0.5",
                            onClick: () => toggleAlertCollapse(alert.id),
                            "aria-label": isCollapsed ? "Expand alert" : "Collapse alert",
                            children: isCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4" })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            size: "sm",
                            variant: "ghost",
                            className: "h-7 px-2 text-xs shrink-0 hover:bg-white/20 text-inherit",
                            onClick: () => dismiss(
                              alert.id,
                              String(group.patient.id),
                              alert.message
                            ),
                            "data-ocid": `clinical_alerts.acknowledge.${String(group.patient.id)}.${i + 1}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 mr-1" }),
                              "Ack"
                            ]
                          }
                        )
                      ] }),
                      !isCollapsed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 pt-2 border-t border-white/20 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "opacity-90", children: alert.details }),
                        alert.aiSuggestion && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "italic opacity-80", children: [
                          "💡 ",
                          alert.aiSuggestion
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] opacity-60", children: new Date(alert.triggeredAt).toLocaleString() })
                      ] })
                    ]
                  },
                  alert.id
                );
              }) })
            ]
          },
          String(group.patient.id)
        )) })
      ]
    }
  );
}
function NEWS2Badge({
  score,
  risk
}) {
  const labels = {
    low: "NEWS2 Low",
    medium: "NEWS2 Medium ⚠",
    high: "NEWS2 High 🚨"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[10px] font-semibold",
        NEWS2_COLORS[risk]
      ),
      title: "National Early Warning Score 2",
      "data-ocid": "clinical_alerts.news2_badge",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-3 h-3" }),
        score,
        " — ",
        labels[risk]
      ]
    }
  );
}
function loadAllPatients$3() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!(k == null ? void 0 : k.startsWith("patients_"))) continue;
    try {
      const arr = JSON.parse(localStorage.getItem(k) || "[]");
      result.push(...arr);
    } catch {
    }
  }
  return result;
}
function loadVitalsData$1(patients) {
  const result = {};
  for (const p of patients) {
    const pidStr = String(p.id);
    try {
      const raw = localStorage.getItem(`vitals_${pidStr}`);
      if (raw) result[pidStr] = JSON.parse(raw);
    } catch {
    }
  }
  return result;
}
function getAlertSeverity(patient) {
  try {
    const alerts = JSON.parse(
      localStorage.getItem(`alerts_${String(patient.id)}`) || "[]"
    );
    if (alerts.some((a) => a.severity === "Critical" || a.severity === "critical"))
      return "critical";
    if (alerts.some((a) => a.severity === "Warning" || a.severity === "warning"))
      return "warning";
  } catch {
  }
  return "stable";
}
function loadPendingDrafts$1() {
  const results = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!(k == null ? void 0 : k.startsWith("prescriptions_"))) continue;
    try {
      const arr = JSON.parse(localStorage.getItem(k) || "[]");
      for (const rx of arr) {
        if (rx.status === "draft_awaiting_approval" || rx.isDraft === true && rx.internRole === true) {
          results.push({
            id: String(rx.id ?? ""),
            patientName: String(rx.patientName ?? "Unknown"),
            patientId: String(rx.patientId ?? ""),
            internName: String(rx.createdByName ?? rx.authorName ?? "Intern"),
            diagnosis: String(rx.diagnosis ?? "—"),
            createdAt: String(rx.createdAt ?? "")
          });
        }
      }
    } catch {
    }
  }
  return results.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
function getRecentPrescriptions() {
  const results = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!(k == null ? void 0 : k.startsWith("prescriptions_"))) continue;
    try {
      const arr = JSON.parse(localStorage.getItem(k) || "[]");
      for (const rx of arr) {
        results.push({
          id: String(rx.id ?? ""),
          patientName: String(rx.patientName ?? "Unknown"),
          diagnosis: String(rx.diagnosis ?? "—"),
          createdAt: String(rx.createdAt ?? ""),
          status: String(rx.status ?? "active")
        });
      }
    } catch {
    }
  }
  return results.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 5);
}
function loadTodayOpdQueue() {
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  try {
    const all = JSON.parse(
      localStorage.getItem("medicare_appointments") || "[]"
    );
    return all.filter((a) => {
      const date = String(a.preferredDate ?? a.createdAt ?? "");
      return date.startsWith(today);
    }).map((a, idx) => ({
      id: String(a.id ?? idx),
      patientName: String(a.patientName ?? "Unknown"),
      serialNumber: idx + 1,
      preferredTime: String(a.preferredTime ?? ""),
      status: String(a.status ?? "pending")
    }));
  } catch {
    return [];
  }
}
function loadAdmittedNeedingReview(patients) {
  const now = Date.now();
  return patients.filter(
    (p) => p.isAdmitted || p.patientType === "admitted" || p.status === "Admitted"
  ).map((p) => {
    try {
      const notes = JSON.parse(
        localStorage.getItem(`soapNotes_${String(p.id)}`) || "[]"
      );
      if (notes.length === 0) return { ...p, hoursSinceNote: 999 };
      const sorted = notes.sort((a, b) => {
        const ta = new Date(a.createdAt ?? a.date ?? 0).getTime();
        const tb = new Date(b.createdAt ?? b.date ?? 0).getTime();
        return tb - ta;
      });
      const lastNoteTime = new Date(
        sorted[0].createdAt ?? sorted[0].date ?? 0
      ).getTime();
      const hours = Math.floor((now - lastNoteTime) / 36e5);
      return { ...p, hoursSinceNote: hours };
    } catch {
      return { ...p, hoursSinceNote: 999 };
    }
  }).filter((p) => p.hoursSinceNote >= 24).sort((a, b) => b.hoursSinceNote - a.hoursSinceNote);
}
function loadNewInvestigationResults() {
  const lastLogin = Number(localStorage.getItem("medicare_last_login") || "0");
  const results = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!(k == null ? void 0 : k.startsWith("investigations_"))) continue;
    const patientId = k.replace("investigations_", "");
    try {
      const inv = JSON.parse(localStorage.getItem(k) || "[]");
      let patientName = "Unknown";
      for (let j = 0; j < localStorage.length; j++) {
        const pk = localStorage.key(j);
        if (!(pk == null ? void 0 : pk.startsWith("patients_"))) continue;
        try {
          const arr = JSON.parse(
            localStorage.getItem(pk) || "[]"
          );
          const pt = arr.find((p) => String(p.id) === patientId);
          if (pt) {
            patientName = pt.fullName;
            break;
          }
        } catch {
        }
      }
      for (const item of inv) {
        const status = String(item.status ?? "");
        const receivedAt = String(
          item.receivedAt ?? item.resultDate ?? item.updatedAt ?? ""
        );
        if ((status === "received" || status === "completed") && receivedAt) {
          const recTime = new Date(receivedAt).getTime();
          if (recTime > lastLogin) {
            results.push({
              patientName,
              patientId,
              testName: String(item.testName ?? item.name ?? "Investigation"),
              result: String(item.result ?? item.value ?? "—"),
              unit: String(item.unit ?? ""),
              isAbnormal: Boolean(item.isAbnormal ?? item.flagged ?? false),
              receivedAt
            });
          }
        }
      }
    } catch {
    }
  }
  return results.sort((a, b) => b.receivedAt.localeCompare(a.receivedAt)).slice(0, 8);
}
function StatCard({
  icon: Icon,
  label,
  value,
  gradient
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl shadow-sm overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${gradient} p-4 flex items-center justify-between`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white leading-none", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-white opacity-80" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card px-4 py-2.5 border border-t-0 border-border rounded-b-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: label }) })
  ] });
}
function ActionSkeleton$1() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-full rounded-lg" }, i)) });
}
function ConsultantDashboard() {
  const { currentDoctor } = useEmailAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = reactExports.useState(true);
  const allPatients = reactExports.useMemo(loadAllPatients$3, []);
  const admittedPatients = allPatients.filter(
    (p) => p.isAdmitted || p.patientType === "admitted" || p.status === "Admitted"
  );
  const vitalsData = reactExports.useMemo(
    () => loadVitalsData$1(admittedPatients),
    [admittedPatients]
  );
  const opdPatients = allPatients.filter(
    (p) => !p.isAdmitted && p.patientType !== "admitted" && p.status !== "Admitted"
  );
  const criticalPatients = admittedPatients.filter(
    (p) => getAlertSeverity(p) === "critical"
  );
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const opdToday = opdPatients.filter((p) => {
    const created = String(p.createdAt ?? "");
    return created.startsWith(today);
  }).length;
  const [pendingDrafts, setPendingDrafts] = reactExports.useState(
    () => loadPendingDrafts$1()
  );
  const [draftsExpanded, setDraftsExpanded] = reactExports.useState(false);
  const [escalations, setEscalations] = reactExports.useState(
    () => loadEscalations().filter((e) => !e.acknowledged)
  );
  const [opdQueue] = reactExports.useState(() => loadTodayOpdQueue());
  const [reviewNeeded] = reactExports.useState(
    () => loadAdmittedNeedingReview(admittedPatients)
  );
  const [newResults] = reactExports.useState(
    () => loadNewInvestigationResults()
  );
  const recentRx = reactExports.useMemo(getRecentPrescriptions, []);
  const pendingRx = recentRx.filter(
    (r) => r.status === "draft_awaiting_approval"
  ).length;
  reactExports.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);
  reactExports.useEffect(() => {
    const interval = setInterval(
      () => setPendingDrafts(loadPendingDrafts$1()),
      3e4
    );
    return () => clearInterval(interval);
  }, []);
  function handleAcknowledge(patientId, drugName) {
    acknowledgeEscalation(patientId, drugName);
    setEscalations(
      (prev) => prev.filter(
        (e) => !(e.patientId === patientId && e.drugName === drugName)
      )
    );
  }
  const statusColors = {
    pending: "bg-amber-100 text-amber-700 border-amber-200",
    confirmed: "bg-emerald-100 text-emerald-700 border-emerald-200",
    completed: "bg-blue-100 text-blue-700 border-blue-200",
    cancelled: "bg-red-100 text-red-700 border-red-200"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6",
      "data-ocid": "consultant.dashboard",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-foreground", children: [
              "Welcome, ",
              currentDoctor == null ? void 0 : currentDoctor.designation,
              " ",
              currentDoctor == null ? void 0 : currentDoctor.name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-0.5", children: "Consultant Doctor Dashboard" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-indigo-100 text-indigo-800 border-indigo-200 text-xs px-3 py-1", children: "Consultant" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: BedDouble,
              label: "Total Admitted",
              value: admittedPatients.length,
              gradient: "bg-gradient-to-r from-blue-600 to-indigo-700"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: Users,
              label: "OPD Seen Today",
              value: opdToday,
              gradient: "bg-gradient-to-r from-teal-500 to-green-600"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: FileText,
              label: "Pending Prescriptions",
              value: pendingRx,
              gradient: "bg-gradient-to-r from-amber-500 to-orange-600"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: Bell,
              label: "Active Alerts",
              value: criticalPatients.length + escalations.length,
              gradient: "bg-gradient-to-r from-rose-500 to-red-600"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ClinicalAlertsPanel,
          {
            patients: admittedPatients,
            vitalsData
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: `${pendingDrafts.length > 0 ? "border-red-300 bg-red-50/30" : "border-border"}`,
            "data-ocid": "consultant.pending_approvals.panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "w-full flex items-center justify-between gap-2",
                  onClick: () => {
                    setDraftsExpanded((v) => !v);
                    if (!draftsExpanded) setPendingDrafts(loadPendingDrafts$1());
                  },
                  "data-ocid": "consultant.pending_approvals.toggle",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-4 h-4 text-red-600" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Pending Approvals — Intern Drafts" }),
                      pendingDrafts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold leading-none",
                          "data-ocid": "consultant.pending_approvals.badge",
                          children: pendingDrafts.length
                        }
                      )
                    ] }),
                    draftsExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-muted-foreground" })
                  ]
                }
              ) }),
              draftsExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: pendingDrafts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-2 text-emerald-600 py-2",
                  "data-ocid": "consultant.pending_approvals.empty_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "All prescriptions approved" })
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: pendingDrafts.map((d, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-3 bg-card border border-red-200 rounded-xl px-4 py-3",
                  "data-ocid": `consultant.pending_approval.item.${idx + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-red-600" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground truncate", children: d.patientName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground truncate", children: [
                        "By ",
                        d.internName,
                        " · ",
                        d.diagnosis
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                        d.createdAt ? new Date(d.createdAt).toLocaleDateString() : "—"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          size: "sm",
                          className: "h-7 px-3 text-xs bg-red-600 hover:bg-red-700 text-white gap-1",
                          onClick: () => navigate({
                            to: "/PatientProfile",
                            search: { id: d.patientId }
                          }),
                          "data-ocid": `consultant.pending_approval.review.${idx + 1}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3" }),
                            " Review"
                          ]
                        }
                      )
                    ] })
                  ]
                },
                d.id
              )) }) })
            ]
          }
        ),
        criticalPatients.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-red-200 bg-red-50/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-red-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-red-800 text-sm", children: "Critical Patients — Immediate Attention Required" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4 space-y-2", children: criticalPatients.slice(0, 4).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => navigate({
                to: "/PatientProfile",
                search: { id: String(p.id) }
              }),
              className: "w-full flex items-center gap-3 bg-card border border-red-200 rounded-lg px-4 py-2.5 hover:bg-red-50 transition-colors text-left",
              "data-ocid": `consultant.critical_patient.${String(p.id)}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-red-700 text-sm", children: p.fullName.charAt(0) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground truncate", children: p.fullName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    "Bed ",
                    p.bedNumber || "—",
                    " · ",
                    p.ward || "General"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-red-600 text-white text-[10px] shrink-0", children: "CRITICAL" })
              ]
            },
            String(p.id)
          )) })
        ] }),
        escalations.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: "border-amber-300 bg-amber-50/60",
            "data-ocid": "consultant.medication_alerts.panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "w-4 h-4 text-amber-700" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-amber-800 text-sm", children: "⚠️ Medication Alerts" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-amber-600 text-white text-xs ml-1", children: [
                  escalations.length,
                  " unacknowledged"
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-amber-200", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-3 font-semibold text-amber-800", children: "Patient" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-3 font-semibold text-amber-800", children: "Drug" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 px-3 font-semibold text-amber-800", children: "Times Missed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-3 font-semibold text-amber-800", children: "Last Missed At" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-3" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: escalations.map((esc, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    className: "border-b border-amber-100 last:border-0",
                    "data-ocid": `consultant.medication_alert.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 font-medium", children: esc.patientName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: esc.drugName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-red-700", children: [
                        esc.missedCount,
                        "×"
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 text-muted-foreground", children: new Date(esc.timestamp).toLocaleString() }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          size: "sm",
                          variant: "outline",
                          className: "h-6 px-2 text-[10px] border-amber-400 text-amber-800 hover:bg-amber-100 gap-1",
                          onClick: () => handleAcknowledge(esc.patientId, esc.drugName),
                          "data-ocid": `consultant.medication_alert.acknowledge.${i + 1}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
                            " Acknowledge"
                          ]
                        }
                      ) })
                    ]
                  },
                  `${esc.patientId}-${esc.drugName}`
                )) })
              ] }) }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "border-l-4 border-l-emerald-500",
              "data-ocid": "consultant.opd_queue.panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-4 h-4 text-emerald-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Today's OPD Queue" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-emerald-100 text-emerald-800 border-emerald-200 text-xs", children: opdQueue.length })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(ActionSkeleton$1, {}) : opdQueue.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex flex-col items-center py-6 text-muted-foreground gap-2",
                    "data-ocid": "consultant.opd_queue.empty_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-7 h-7 opacity-30" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No appointments — you're all caught up!" })
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 max-h-52 overflow-y-auto", children: opdQueue.map((q, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/40 border border-border",
                    "data-ocid": `consultant.opd_queue.item.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-bold flex items-center justify-center shrink-0", children: q.serialNumber }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: q.patientName }),
                        q.preferredTime && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                          q.preferredTime
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          variant: "outline",
                          className: `text-[10px] border capitalize shrink-0 ${statusColors[q.status] ?? statusColors.pending}`,
                          children: q.status
                        }
                      )
                    ]
                  },
                  q.id
                )) }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "border-l-4 border-l-amber-500",
              "data-ocid": "consultant.review_needed.panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-4 h-4 text-amber-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Review Needed" }),
                  reviewNeeded.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-amber-500 text-white text-xs", children: reviewNeeded.length })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(ActionSkeleton$1, {}) : reviewNeeded.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex flex-col items-center py-6 text-muted-foreground gap-2",
                    "data-ocid": "consultant.review_needed.empty_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-7 h-7 text-emerald-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "All patients reviewed — you're all caught up!" })
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 max-h-52 overflow-y-auto", children: reviewNeeded.slice(0, 6).map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => navigate({
                      to: "/PatientProfile",
                      search: { id: String(p.id) }
                    }),
                    className: "w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-50 border border-amber-200 hover:bg-amber-100 transition-colors text-left",
                    "data-ocid": `consultant.review_needed.item.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: p.fullName }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                          "Bed ",
                          p.bedNumber || "—"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-[10px] font-bold shrink-0 px-1.5 py-0.5 rounded ${p.hoursSinceNote >= 48 ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`,
                          children: p.hoursSinceNote >= 999 ? "No notes" : `${p.hoursSinceNote}h ago`
                        }
                      )
                    ]
                  },
                  String(p.id)
                )) }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "border-l-4 border-l-blue-500",
              "data-ocid": "consultant.new_results.panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-4 h-4 text-blue-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "New Results" }),
                  newResults.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-blue-500 text-white text-xs", children: newResults.length })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(ActionSkeleton$1, {}) : newResults.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex flex-col items-center py-6 text-muted-foreground gap-2",
                    "data-ocid": "consultant.new_results.empty_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-7 h-7 opacity-30" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No new results since last login" })
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 max-h-52 overflow-y-auto", children: newResults.map((r, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => navigate({
                      to: "/PatientProfile",
                      search: { id: r.patientId }
                    }),
                    className: "w-full flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-muted/40 transition-colors text-left",
                    "data-ocid": `consultant.new_result.item.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: r.patientName }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground truncate", children: [
                          r.testName,
                          ": ",
                          r.result,
                          r.unit ? ` ${r.unit}` : ""
                        ] })
                      ] }),
                      r.isAbnormal && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-0.5 text-[10px] font-bold text-red-600 shrink-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-3 h-3" }),
                        " Abnormal"
                      ] })
                    ]
                  },
                  `${r.patientId}-${r.testName}-${idx}`
                )) }) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "ipd", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "ipd", "data-ocid": "consultant.tab.ipd", children: [
              "Admitted (IPD)",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 bg-blue-100 text-blue-700 text-[10px] px-1.5 py-0.5 rounded-full font-bold", children: admittedPatients.length })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "opd", "data-ocid": "consultant.tab.opd", children: [
              "Outpatient (OPD)",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 bg-emerald-100 text-emerald-700 text-[10px] px-1.5 py-0.5 rounded-full font-bold", children: opdPatients.length })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "ipd", children: admittedPatients.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center py-12 text-muted-foreground",
              "data-ocid": "consultant.ipd.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-10 h-10 mx-auto mb-3 opacity-30" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "No admitted patients" })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: admittedPatients.map((p) => {
            const severity = getAlertSeverity(p);
            const severityColors = {
              critical: "border-red-300 bg-red-50/30",
              warning: "border-amber-300 bg-amber-50/30",
              stable: "border-border bg-card"
            };
            const badgeColors = {
              critical: "bg-red-600 text-white",
              warning: "bg-amber-500 text-white",
              stable: "bg-emerald-500 text-white"
            };
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => navigate({
                  to: "/PatientProfile",
                  search: { id: String(p.id) }
                }),
                className: `border rounded-xl p-4 text-left hover:shadow-md transition-all ${severityColors[severity]}`,
                "data-ocid": `consultant.ipd_card.${String(p.id)}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-indigo-700", children: p.fullName.charAt(0) }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground truncate", children: p.fullName })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        className: `text-[10px] shrink-0 capitalize ${badgeColors[severity]}`,
                        children: severity
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5 pl-11", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-3 h-3" }),
                      " Bed",
                      " ",
                      p.bedNumber || "—",
                      " · ",
                      p.ward || "General Ward"
                    ] }),
                    p.registerNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-mono", children: p.registerNumber })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center text-xs text-primary font-medium gap-1", children: [
                    "View Profile ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
                  ] })
                ]
              },
              String(p.id)
            );
          }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "opd", children: opdPatients.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center py-12 text-muted-foreground",
              "data-ocid": "consultant.opd.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-10 h-10 mx-auto mb-3 opacity-30" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "No outpatients found" })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: opdPatients.slice(0, 12).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => navigate({
                to: "/PatientProfile",
                search: { id: String(p.id) }
              }),
              className: "border rounded-xl p-4 text-left hover:shadow-md transition-all bg-card",
              "data-ocid": `consultant.opd_card.${String(p.id)}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-emerald-700", children: p.fullName.charAt(0) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground truncate", children: p.fullName }),
                  p.registerNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-mono", children: p.registerNumber })
                ] })
              ] })
            },
            String(p.id)
          )) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3 pt-4 px-5 flex flex-row items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-4 h-4 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Recent Prescriptions" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "text-xs gap-1",
                onClick: () => navigate({ to: "/Patients" }),
                children: [
                  "View All ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: recentRx.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-sm text-muted-foreground text-center py-4",
              "data-ocid": "consultant.recent_rx.empty_state",
              children: "No prescriptions yet"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: recentRx.map((rx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "py-2.5 flex items-center justify-between gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-3.5 h-3.5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: rx.patientName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: rx.diagnosis })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                  rx.status === "draft_awaiting_approval" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: "text-[10px] border-amber-300 text-amber-700",
                      children: "Draft"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                    rx.createdAt ? new Date(rx.createdAt).toLocaleDateString() : "—"
                  ] })
                ] })
              ]
            },
            rx.id
          )) }) })
        ] })
      ]
    }
  );
}
function loadAllPatients$2() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!(k == null ? void 0 : k.startsWith("patients_"))) continue;
    try {
      const arr = JSON.parse(localStorage.getItem(k) || "[]");
      result.push(...arr);
    } catch {
    }
  }
  return result;
}
function isAdmitted$1(p) {
  return p.isAdmitted === true || p.patientType === "admitted" || p.patientType === "indoor" || String(p.status ?? "").toLowerCase().includes("admit");
}
function loadMyDrafts(doctorEmail) {
  const results = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!(k == null ? void 0 : k.startsWith("prescriptions_"))) continue;
    try {
      const arr = JSON.parse(localStorage.getItem(k) || "[]");
      for (const rx of arr) {
        if (rx.status === "draft_awaiting_approval" && (rx.createdBy === doctorEmail || rx.createdByEmail === doctorEmail)) {
          results.push({
            id: String(rx.id ?? ""),
            patientName: String(rx.patientName ?? "Unknown"),
            patientId: String(rx.patientId ?? ""),
            diagnosis: String(rx.diagnosis ?? "—"),
            createdAt: String(rx.createdAt ?? ""),
            type: "prescription"
          });
        }
      }
    } catch {
    }
  }
  return results.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
function InternDashboard() {
  const { currentDoctor } = useEmailAuth();
  const navigate = useNavigate();
  const [patientFilter, setPatientFilter] = reactExports.useState("all");
  const allPatients = reactExports.useMemo(loadAllPatients$2, []);
  const myDrafts = reactExports.useMemo(
    () => loadMyDrafts((currentDoctor == null ? void 0 : currentDoctor.email) ?? ""),
    [currentDoctor == null ? void 0 : currentDoctor.email]
  );
  const admittedPatients = allPatients.filter(isAdmitted$1);
  const opdPatients = allPatients.filter((p) => !isAdmitted$1(p));
  const displayedPatients = patientFilter === "admitted" ? admittedPatients : allPatients;
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const patientsNeedingHistory = admittedPatients.filter((p) => {
    try {
      const notes = JSON.parse(
        localStorage.getItem(`clinicalNotes_${String(p.id)}`) || "[]"
      );
      return !notes.some((n) => {
        var _a;
        return (_a = n.createdAt) == null ? void 0 : _a.startsWith(today);
      });
    } catch {
      return true;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6",
      "data-ocid": "intern.dashboard",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-foreground", children: [
              "Welcome, ",
              currentDoctor == null ? void 0 : currentDoctor.designation,
              " ",
              currentDoctor == null ? void 0 : currentDoctor.name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-0.5", children: "Intern Doctor Dashboard" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-sky-100 text-sky-800 border-sky-200 text-xs px-3 py-1", children: "Intern Doctor" }) })
        ] }),
        myDrafts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-3 bg-blue-50 border border-blue-300 rounded-xl px-4 py-3",
            "data-ocid": "intern.drafts_awaiting.banner",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-5 h-5 text-blue-600 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-blue-800", children: [
                  myDrafts.length,
                  " prescription",
                  myDrafts.length > 1 ? "s" : "",
                  " awaiting MO / Consultant review"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-blue-600 mt-0.5", children: "Your draft prescriptions are saved and visible to the supervising doctor. They will be activated after approval." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold shrink-0",
                  "data-ocid": "intern.drafts_awaiting.badge",
                  children: myDrafts.length
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl shadow-sm overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-sky-500 to-blue-600 p-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white leading-none", children: allPatients.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-white opacity-80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card px-4 py-2.5 border border-t-0 border-border rounded-b-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "All Patients" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl shadow-sm overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-violet-500 to-purple-600 p-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white leading-none", children: admittedPatients.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-6 h-6 text-white opacity-80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card px-4 py-2.5 border border-t-0 border-border rounded-b-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "Admitted" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl shadow-sm overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-amber-500 to-yellow-500 p-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white leading-none", children: myDrafts.length }),
                myDrafts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full bg-white/30 text-white text-[10px] font-bold flex items-center justify-center", children: "!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 text-white opacity-80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card px-4 py-2.5 border border-t-0 border-border rounded-b-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "My Drafts" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl shadow-sm overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-rose-500 to-red-600 p-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white leading-none", children: patientsNeedingHistory.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardCheck, { className: "w-6 h-6 text-white opacity-80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card px-4 py-2.5 border border-t-0 border-border rounded-b-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "Pending Tasks" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3 pt-4 px-5 flex flex-row items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Patients" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex border border-border rounded-lg overflow-hidden text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setPatientFilter("all"),
                      className: `px-2.5 py-1 font-medium transition-colors ${patientFilter === "all" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:bg-muted"}`,
                      "data-ocid": "intern.filter.all_tab",
                      children: [
                        "All (",
                        allPatients.length,
                        ")"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setPatientFilter("admitted"),
                      className: `px-2.5 py-1 font-medium transition-colors border-l border-border ${patientFilter === "admitted" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:bg-muted"}`,
                      "data-ocid": "intern.filter.admitted_tab",
                      children: [
                        "Admitted (",
                        admittedPatients.length,
                        ")"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    className: "text-xs gap-1 ml-1",
                    onClick: () => navigate({ to: "/Patients" }),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "px-5 pb-4 space-y-2", children: [
              displayedPatients.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "text-center py-8 text-muted-foreground",
                  "data-ocid": "intern.patients.empty_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-8 h-8 mx-auto mb-2 opacity-30" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: patientFilter === "admitted" ? "No admitted patients" : "No patients yet" })
                  ]
                }
              ) : displayedPatients.slice(0, 8).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => navigate({
                    to: "/PatientProfile",
                    search: { id: String(p.id) }
                  }),
                  className: "w-full border border-border rounded-xl p-3 flex items-center gap-3 hover:bg-muted/30 transition-colors text-left",
                  "data-ocid": `intern.patient_card.${String(p.id)}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${isAdmitted$1(p) ? "bg-sky-100" : "bg-blue-100"}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `font-bold text-sm ${isAdmitted$1(p) ? "text-sky-700" : "text-blue-700"}`,
                            children: p.fullName.charAt(0)
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground truncate", children: p.fullName }),
                        isAdmitted$1(p) && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[10px] bg-green-100 text-green-800 border border-green-300 shrink-0", children: "🏥 Admitted" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: isAdmitted$1(p) ? `Bed ${p.bedNumber || "—"} · ${p.currentDiagnosis || p.ward || "No diagnosis yet"}` : "OPD Patient" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 text-muted-foreground shrink-0" })
                  ]
                },
                String(p.id)
              )),
              patientFilter === "all" && opdPatients.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground text-center pt-1", children: [
                opdPatients.length,
                " OPD · ",
                admittedPatients.length,
                " Admitted"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-amber-200 bg-amber-50/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-amber-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "My Drafts — Awaiting Review" }),
                myDrafts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "ml-auto inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold",
                    "data-ocid": "intern.my_drafts.badge",
                    children: myDrafts.length
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: myDrafts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-sm text-muted-foreground py-2",
                  "data-ocid": "intern.drafts.empty_state",
                  children: "No drafts waiting"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: myDrafts.map((d, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => navigate({
                    to: "/PatientProfile",
                    search: { id: d.patientId }
                  }),
                  className: "w-full bg-card border border-amber-200 rounded-lg px-3 py-2.5 text-left hover:bg-amber-50 transition-colors",
                  "data-ocid": `intern.draft_item.${idx + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm text-foreground truncate", children: d.patientName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          variant: "outline",
                          className: "text-[10px] border-amber-300 text-amber-700 shrink-0",
                          children: "Draft"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: d.diagnosis }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: d.createdAt ? new Date(d.createdAt).toLocaleDateString() : "—" })
                  ]
                },
                d.id
              )) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-4 h-4 text-rose-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Pending Tasks Today" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: patientsNeedingHistory.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-sm text-muted-foreground py-2",
                  "data-ocid": "intern.tasks.empty_state",
                  children: "All notes complete for today ✓"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: patientsNeedingHistory.slice(0, 5).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => navigate({
                    to: "/PatientProfile",
                    search: { id: String(p.id) }
                  }),
                  className: "w-full flex items-center gap-2 text-left bg-rose-50 border border-rose-200 rounded-lg px-3 py-2 hover:bg-rose-100 transition-colors",
                  "data-ocid": `intern.task_item.${String(p.id)}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-3.5 h-3.5 text-rose-600 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground flex-1 truncate", children: p.fullName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-rose-600 shrink-0", children: "Add note →" })
                  ]
                },
                String(p.id)
              )) }) })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function loadAllPatients$1() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!(k == null ? void 0 : k.startsWith("patients_"))) continue;
    try {
      const arr = JSON.parse(localStorage.getItem(k) || "[]");
      result.push(...arr);
    } catch {
    }
  }
  return result;
}
function isAdmitted(p) {
  return p.isAdmitted === true || p.patientType === "admitted" || p.patientType === "indoor" || String(p.status ?? "").toLowerCase().includes("admit");
}
function loadPendingDrafts() {
  const results = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!(k == null ? void 0 : k.startsWith("prescriptions_"))) continue;
    try {
      const arr = JSON.parse(localStorage.getItem(k) || "[]");
      for (const rx of arr) {
        if (rx.status === "draft_awaiting_approval" || rx.isDraft === true && rx.internRole === true) {
          results.push({
            id: String(rx.id ?? ""),
            patientName: String(rx.patientName ?? "Unknown"),
            patientId: String(rx.patientId ?? ""),
            internName: String(rx.createdByName ?? rx.authorName ?? "Intern"),
            diagnosis: String(rx.diagnosis ?? "—"),
            createdAt: String(rx.createdAt ?? "")
          });
        }
      }
    } catch {
    }
  }
  return results.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
function getRecentActivity() {
  const logs = [];
  try {
    const raw = localStorage.getItem("medicare_audit_log");
    if (raw) {
      const all = JSON.parse(raw);
      return all.slice(-8).reverse();
    }
  } catch {
  }
  return logs;
}
function loadOverdueNotes(patients) {
  const now = Date.now();
  return patients.filter(isAdmitted).map((p) => {
    try {
      const notes = JSON.parse(
        localStorage.getItem(`soapNotes_${String(p.id)}`) || "[]"
      );
      if (notes.length === 0) return { ...p, hoursSinceNote: 999 };
      const sorted = notes.sort((a, b) => {
        const ta = new Date(a.createdAt ?? a.date ?? 0).getTime();
        const tb = new Date(b.createdAt ?? b.date ?? 0).getTime();
        return tb - ta;
      });
      const lastNote = new Date(
        sorted[0].createdAt ?? sorted[0].date ?? 0
      ).getTime();
      const hours = Math.floor((now - lastNote) / 36e5);
      return { ...p, hoursSinceNote: hours };
    } catch {
      return { ...p, hoursSinceNote: 999 };
    }
  }).filter((p) => p.hoursSinceNote >= 24).sort((a, b) => b.hoursSinceNote - a.hoursSinceNote);
}
function loadPendingDischarges(patients) {
  return patients.filter(isAdmitted).filter((p) => {
    try {
      const ds = localStorage.getItem(`dischargeStatus_${String(p.id)}`);
      if (!ds) return false;
      const data = JSON.parse(ds);
      return data.initiated === true && !data.finalized;
    } catch {
      return false;
    }
  }).map((p) => {
    let dischargeInitiatedAt = "";
    try {
      const ds = JSON.parse(
        localStorage.getItem(`dischargeStatus_${String(p.id)}`) || "{}"
      );
      dischargeInitiatedAt = ds.initiatedAt ?? "";
    } catch {
    }
    return {
      patientId: String(p.id),
      patientName: p.fullName,
      bedNumber: p.bedNumber ?? "—",
      ward: p.ward ?? "General",
      dischargeInitiatedAt
    };
  });
}
function loadDeterioratingVitals(patients) {
  const admitted = patients.filter(isAdmitted);
  const results = [];
  for (const p of admitted) {
    try {
      const vitals = JSON.parse(
        localStorage.getItem(`vitals_${String(p.id)}`) || "[]"
      );
      if (vitals.length === 0) continue;
      const sorted = vitals.sort((a, b) => {
        const ta = new Date(a.createdAt ?? a.date ?? 0).getTime();
        const tb = new Date(b.createdAt ?? b.date ?? 0).getTime();
        return tb - ta;
      });
      const latest = sorted[0];
      const alerts = [];
      if (latest.spo2 !== void 0 && latest.spo2 < 94)
        alerts.push(`SpO₂ ${latest.spo2}%`);
      if (latest.systolic !== void 0 && latest.diastolic !== void 0) {
        if (latest.systolic > 180 || latest.diastolic > 120)
          alerts.push(`BP ${latest.systolic}/${latest.diastolic}`);
        if (latest.systolic < 90)
          alerts.push(`Low BP ${latest.systolic}/${latest.diastolic}`);
      }
      if (latest.pulse !== void 0) {
        if (latest.pulse > 100) alerts.push(`Tachycardia ${latest.pulse}`);
        if (latest.pulse < 50) alerts.push(`Bradycardia ${latest.pulse}`);
      }
      if (sorted.length >= 3) {
        const pulseValues = sorted.slice(0, 3).map((v) => v.pulse ?? 0).filter((v) => v > 0);
        if (pulseValues.length === 3 && pulseValues[0] > pulseValues[1] && pulseValues[1] > pulseValues[2] && pulseValues[0] > 100) {
          alerts.push("Rising pulse trend");
        }
      }
      if (alerts.length > 0) {
        results.push({
          patientId: String(p.id),
          patientName: p.fullName,
          bedNumber: p.bedNumber ?? "—",
          alerts
        });
      }
    } catch {
    }
  }
  return results;
}
function ActionSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-full rounded-lg" }, i)) });
}
function MedicalOfficerDashboard() {
  const { currentDoctor } = useEmailAuth();
  const navigate = useNavigate();
  const [patientFilter, setPatientFilter] = reactExports.useState("all");
  const [draftsExpanded, setDraftsExpanded] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(true);
  const allPatients = reactExports.useMemo(loadAllPatients$1, []);
  const recentActivity = reactExports.useMemo(getRecentActivity, []);
  const [pendingDrafts, setPendingDrafts] = reactExports.useState(
    () => loadPendingDrafts()
  );
  const overdueNotes = reactExports.useMemo(
    () => loadOverdueNotes(allPatients),
    [allPatients]
  );
  const pendingDischarges = reactExports.useMemo(
    () => loadPendingDischarges(allPatients),
    [allPatients]
  );
  const deterioratingVitals = reactExports.useMemo(
    () => loadDeterioratingVitals(allPatients),
    [allPatients]
  );
  reactExports.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);
  reactExports.useEffect(() => {
    const interval = setInterval(
      () => setPendingDrafts(loadPendingDrafts()),
      3e4
    );
    return () => clearInterval(interval);
  }, []);
  const admittedPatients = allPatients.filter(isAdmitted);
  const opdPatients = allPatients.filter((p) => !isAdmitted(p));
  const displayedPatients = patientFilter === "admitted" ? admittedPatients : allPatients;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6",
      "data-ocid": "mo.dashboard",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-foreground", children: [
              "Welcome, ",
              currentDoctor == null ? void 0 : currentDoctor.designation,
              " ",
              currentDoctor == null ? void 0 : currentDoctor.name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-0.5", children: "Medical Officer Dashboard" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-100 text-green-800 border-green-200 text-xs px-3 py-1", children: "Medical Officer" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl shadow-sm overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-teal-500 to-cyan-600 p-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white leading-none", children: allPatients.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-white opacity-80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card px-4 py-2.5 border border-t-0 border-border rounded-b-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "All Patients" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl shadow-sm overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-500 to-emerald-600 p-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white leading-none", children: admittedPatients.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-6 h-6 text-white opacity-80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card px-4 py-2.5 border border-t-0 border-border rounded-b-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "Admitted" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl shadow-sm overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-500 to-sky-600 p-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white leading-none", children: opdPatients.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-white opacity-80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card px-4 py-2.5 border border-t-0 border-border rounded-b-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "OPD" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl shadow-sm overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-amber-500 to-orange-600 p-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white leading-none", children: pendingDrafts.length }),
                pendingDrafts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full bg-white/30 text-white text-[10px] font-bold flex items-center justify-center leading-none", children: "!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-6 h-6 text-white opacity-80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card px-4 py-2.5 border border-t-0 border-border rounded-b-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "Pending Approvals" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "border-l-4 border-l-red-500",
              "data-ocid": "mo.overdue_notes.panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-4 h-4 text-red-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Overdue SOAP Notes" }),
                  overdueNotes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-red-500 text-white text-xs", children: overdueNotes.length })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(ActionSkeleton, {}) : overdueNotes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex flex-col items-center py-6 text-muted-foreground gap-2",
                    "data-ocid": "mo.overdue_notes.empty_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-7 h-7 text-emerald-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "All notes up to date — you're all caught up!" })
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 max-h-52 overflow-y-auto", children: overdueNotes.slice(0, 6).map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 px-3 py-2 rounded-lg border border-border",
                    "data-ocid": `mo.overdue_note.item.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: p.fullName }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                          "Bed ",
                          p.bedNumber || "—"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0 ${p.hoursSinceNote >= 48 ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`,
                          children: p.hoursSinceNote >= 999 ? "No notes" : `${p.hoursSinceNote}h`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "sm",
                          className: "h-6 px-2 text-[10px] bg-primary text-primary-foreground gap-1 shrink-0",
                          onClick: () => navigate({
                            to: "/PatientProfile",
                            search: { id: String(p.id) }
                          }),
                          "data-ocid": `mo.write_note.button.${idx + 1}`,
                          children: "Write"
                        }
                      )
                    ]
                  },
                  String(p.id)
                )) }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "border-l-4 border-l-amber-500",
              "data-ocid": "mo.pending_discharge.panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-amber-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Pending Discharges" }),
                  pendingDischarges.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-amber-500 text-white text-xs", children: pendingDischarges.length })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(ActionSkeleton, {}) : pendingDischarges.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex flex-col items-center py-6 text-muted-foreground gap-2",
                    "data-ocid": "mo.pending_discharge.empty_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-7 h-7 text-emerald-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No pending discharge summaries" })
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 max-h-52 overflow-y-auto", children: pendingDischarges.map((d, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => navigate({
                      to: "/PatientProfile",
                      search: { id: d.patientId }
                    }),
                    className: "w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-50 border border-amber-200 hover:bg-amber-100 transition-colors text-left",
                    "data-ocid": `mo.pending_discharge.item.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: d.patientName }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                          "Bed ",
                          d.bedNumber,
                          " · ",
                          d.ward
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          variant: "outline",
                          className: "text-[10px] border-amber-300 text-amber-700 shrink-0",
                          children: "Draft"
                        }
                      )
                    ]
                  },
                  d.patientId
                )) }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "border-l-4 border-l-red-600",
              "data-ocid": "mo.deteriorating_vitals.panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-4 h-4 text-red-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Deteriorating Vitals" }),
                  deterioratingVitals.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-red-600 text-white text-xs", children: deterioratingVitals.length })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(ActionSkeleton, {}) : deterioratingVitals.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex flex-col items-center py-6 text-muted-foreground gap-2",
                    "data-ocid": "mo.deteriorating_vitals.empty_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-7 h-7 text-emerald-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No deteriorating vitals — all stable" })
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 max-h-52 overflow-y-auto", children: deterioratingVitals.map((d, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => navigate({
                      to: "/PatientProfile",
                      search: { id: d.patientId }
                    }),
                    className: "w-full flex items-start gap-2 px-3 py-2 rounded-lg bg-red-50 border border-red-200 hover:bg-red-100 transition-colors text-left",
                    "data-ocid": `mo.deteriorating_vital.item.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: d.patientName }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-600 truncate", children: d.alerts.join(" · ") })
                      ] })
                    ]
                  },
                  d.patientId
                )) }) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3 pt-4 px-5 flex flex-row items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Patients" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex border border-border rounded-lg overflow-hidden text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setPatientFilter("all"),
                      className: `px-2.5 py-1 font-medium transition-colors ${patientFilter === "all" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:bg-muted"}`,
                      "data-ocid": "mo.filter.all_tab",
                      children: [
                        "All (",
                        allPatients.length,
                        ")"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setPatientFilter("admitted"),
                      className: `px-2.5 py-1 font-medium transition-colors border-l border-border ${patientFilter === "admitted" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:bg-muted"}`,
                      "data-ocid": "mo.filter.admitted_tab",
                      children: [
                        "Admitted (",
                        admittedPatients.length,
                        ")"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    className: "text-xs gap-1 ml-1",
                    onClick: () => navigate({ to: "/Patients" }),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4 space-y-2", children: displayedPatients.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-center py-8 text-muted-foreground",
                "data-ocid": "mo.patients.empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-8 h-8 mx-auto mb-2 opacity-30" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: patientFilter === "admitted" ? "No admitted patients" : "No patients yet" })
                ]
              }
            ) : displayedPatients.slice(0, 6).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "border border-border rounded-xl p-3 flex items-center gap-3",
                "data-ocid": `mo.patient_card.${String(p.id)}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${isAdmitted(p) ? "bg-green-100" : "bg-sky-100"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `font-bold text-sm ${isAdmitted(p) ? "text-green-700" : "text-sky-700"}`,
                          children: p.fullName.charAt(0)
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground truncate", children: p.fullName }),
                      isAdmitted(p) && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[10px] bg-green-100 text-green-800 border border-green-300 shrink-0", children: "🏥 Admitted" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: isAdmitted(p) ? `Bed ${p.bedNumber || "—"} · ${p.ward || "General"}` : "OPD Patient" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "text-xs h-7 px-2 gap-1 text-green-700 border-green-200 hover:bg-green-50",
                        onClick: () => navigate({
                          to: "/PatientProfile",
                          search: { id: String(p.id) }
                        }),
                        "data-ocid": "mo.add_note.button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { className: "w-3 h-3" }),
                          " Note"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "text-xs h-7 px-2 gap-1",
                        onClick: () => navigate({
                          to: "/PatientProfile",
                          search: { id: String(p.id) }
                        }),
                        "data-ocid": "mo.view_patient.button",
                        children: "View"
                      }
                    )
                  ] })
                ]
              },
              String(p.id)
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Card,
              {
                className: pendingDrafts.length > 0 ? "border-red-300" : "border-amber-200",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "w-full flex items-center justify-between gap-2",
                      onClick: () => {
                        setDraftsExpanded((v) => !v);
                        if (!draftsExpanded) setPendingDrafts(loadPendingDrafts());
                      },
                      "data-ocid": "mo.pending_approvals.toggle",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-4 h-4 text-amber-600" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Prescriptions Awaiting Approval" }),
                          pendingDrafts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold leading-none",
                              "data-ocid": "mo.pending_approvals.badge",
                              children: pendingDrafts.length
                            }
                          )
                        ] }),
                        draftsExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-muted-foreground" })
                      ]
                    }
                  ) }),
                  draftsExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: pendingDrafts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2 text-emerald-600 py-2",
                      "data-ocid": "mo.drafts.empty_state",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "All prescriptions approved" })
                      ]
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: pendingDrafts.slice(0, 5).map((d, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2 bg-red-50 rounded-lg px-3 py-2 border border-red-200",
                      "data-ocid": `mo.pending_approval.item.${idx + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5 text-amber-600 shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: d.patientName }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground truncate", children: [
                            "By ",
                            d.internName,
                            " ·",
                            " ",
                            d.createdAt ? new Date(d.createdAt).toLocaleDateString() : "—"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            size: "sm",
                            className: "h-7 px-2 text-xs bg-red-600 hover:bg-red-700 text-white gap-1 shrink-0",
                            onClick: () => navigate({
                              to: "/PatientProfile",
                              search: { id: d.patientId }
                            }),
                            "data-ocid": `mo.pending_approval.review.${idx + 1}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3" }),
                              " Review"
                            ]
                          }
                        )
                      ]
                    },
                    d.id
                  )) }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Recent Activity" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: recentActivity.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-sm text-muted-foreground py-2",
                  "data-ocid": "mo.activity.empty_state",
                  children: "No recent activity"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: recentActivity.slice(0, 5).map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "text-xs text-muted-foreground flex items-start gap-2 py-1 border-b border-border last:border-0",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground min-w-0 truncate", children: entry.userName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0", children: entry.action }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto shrink-0 flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                      new Date(entry.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                      })
                    ] })
                  ]
                },
                `${entry.timestamp}-${i}`
              )) }) })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function loadPendingHandovers(currentShift) {
  const results = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!(k == null ? void 0 : k.startsWith("handover_record_"))) continue;
    try {
      const rec = JSON.parse(localStorage.getItem(k) || "{}");
      if (rec.status === "pending_acknowledgment" && rec.toShift === currentShift) {
        results.push(rec);
      }
    } catch {
    }
  }
  return results.sort((a, b) => b.submittedAt.localeCompare(a.submittedAt));
}
function loadAdmittedPatients() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!(k == null ? void 0 : k.startsWith("patients_"))) continue;
    try {
      const arr = JSON.parse(localStorage.getItem(k) || "[]");
      result.push(
        ...arr.filter(
          (p) => p.isAdmitted || p.patientType === "admitted" || p.status === "Admitted"
        )
      );
    } catch {
    }
  }
  return result;
}
function loadAllPatients() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!(k == null ? void 0 : k.startsWith("patients_"))) continue;
    try {
      const arr = JSON.parse(localStorage.getItem(k) || "[]");
      result.push(...arr);
    } catch {
    }
  }
  return result;
}
function loadVitalsData(patients) {
  const result = {};
  for (const p of patients) {
    const pidStr = String(p.id);
    try {
      const raw = localStorage.getItem(`vitals_${pidStr}`);
      if (raw) result[pidStr] = JSON.parse(raw);
    } catch {
    }
  }
  return result;
}
function getCurrentShift() {
  const hour = (/* @__PURE__ */ new Date()).getHours();
  if (hour >= 6 && hour < 14)
    return {
      label: "Morning Shift",
      color: "bg-amber-100 text-amber-800 border-amber-200",
      icon: Sun
    };
  if (hour >= 14 && hour < 22)
    return {
      label: "Evening Shift",
      color: "bg-orange-100 text-orange-800 border-orange-200",
      icon: Sunset
    };
  return {
    label: "Night Shift",
    color: "bg-indigo-100 text-indigo-800 border-indigo-200",
    icon: Moon
  };
}
function getMedsDue(patients) {
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const now = /* @__PURE__ */ new Date();
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const results = [];
  const patientMap = {};
  for (const p of patients) {
    patientMap[String(p.id)] = p.fullName;
  }
  try {
    const reminders = JSON.parse(
      localStorage.getItem("medicare_drug_reminders") || "[]"
    );
    for (const r of reminders) {
      if (!r.enabled || !patientMap[r.patientId]) continue;
      for (const t of r.times) {
        const [hh, mm] = t.split(":").map(Number);
        const tMin = hh * 60 + mm;
        if (Math.abs(tMin - nowMin) > 120) continue;
        const records = (() => {
          try {
            return JSON.parse(
              localStorage.getItem(
                `medAdminRecord_${r.patientId}_${today}`
              ) || "[]"
            );
          } catch {
            return [];
          }
        })();
        const rec = records.find((x) => x.scheduledTime === t);
        results.push({
          patientId: r.patientId,
          patientName: patientMap[r.patientId] || r.patientId,
          drugName: r.drugName,
          scheduledTime: t,
          status: rec ? rec.status : "pending"
        });
      }
    }
  } catch {
  }
  return results.sort((a, b) => a.scheduledTime.localeCompare(b.scheduledTime));
}
function getPatientsWithoutVitalsToday(patients) {
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  return patients.filter((p) => {
    try {
      const vitals = JSON.parse(
        localStorage.getItem(`vitals_${String(p.id)}`) || "[]"
      );
      return !vitals.some(
        (v) => (v.date || v.createdAt || "").startsWith(today)
      );
    } catch {
      return true;
    }
  });
}
function getIOSummary(patients) {
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  return patients.map((p) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    let totalIn = 0;
    let totalOut = 0;
    let uoAlert = false;
    try {
      const io = JSON.parse(
        localStorage.getItem(`intakeOutput_${String(p.id)}_${today}`) || "{}"
      );
      totalIn = (((_a = io.intake) == null ? void 0 : _a.oral) || 0) + (((_b = io.intake) == null ? void 0 : _b.iv) || 0) + (((_c = io.intake) == null ? void 0 : _c.ng) || 0);
      totalOut = (((_d = io.output) == null ? void 0 : _d.urine) || 0) + (((_e = io.output) == null ? void 0 : _e.drain) || 0) + (((_f = io.output) == null ? void 0 : _f.ttube) || 0) + (((_g = io.output) == null ? void 0 : _g.vomitus) || 0);
      const urinePerKgHr = p.weight ? (((_h = io.output) == null ? void 0 : _h.urine) || 0) / (p.weight * 24) : 0;
      uoAlert = p.weight ? urinePerKgHr < 0.5 : false;
    } catch {
    }
    return { patient: p, totalIn, totalOut, uoAlert };
  }).filter((e) => e.totalIn > 0 || e.totalOut > 0 || e.uoAlert);
}
function NurseDashboard() {
  const { currentDoctor } = useEmailAuth();
  const navigate = useNavigate();
  const shift = getCurrentShift();
  const ShiftIcon = shift.icon;
  const [allPatientsSearch, setAllPatientsSearch] = reactExports.useState("");
  const [showAllPatients, setShowAllPatients] = reactExports.useState(false);
  const admittedPatients = reactExports.useMemo(loadAdmittedPatients, []);
  const allPatients = reactExports.useMemo(loadAllPatients, []);
  const vitalsData = reactExports.useMemo(
    () => loadVitalsData(admittedPatients),
    [admittedPatients]
  );
  const medsDue = reactExports.useMemo(
    () => getMedsDue(admittedPatients),
    [admittedPatients]
  );
  const vitalsNeeded = reactExports.useMemo(
    () => getPatientsWithoutVitalsToday(admittedPatients),
    [admittedPatients]
  );
  const ioSummary = reactExports.useMemo(
    () => getIOSummary(admittedPatients),
    [admittedPatients]
  );
  const pendingHandovers = reactExports.useMemo(
    () => loadPendingHandovers(shift.label),
    [shift.label]
  );
  const [acknowledgedIds, setAcknowledgedIds] = reactExports.useState(
    /* @__PURE__ */ new Set()
  );
  const [handoverText, setHandoverText] = reactExports.useState(() => {
    try {
      return localStorage.getItem(
        `handover_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}_${currentDoctor == null ? void 0 : currentDoctor.email}`
      ) || "";
    } catch {
      return "";
    }
  });
  const [handoverSubmitted, setHandoverSubmitted] = reactExports.useState(() => {
    try {
      return localStorage.getItem(
        `handover_submitted_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}_${currentDoctor == null ? void 0 : currentDoctor.email}`
      ) === "true";
    } catch {
      return false;
    }
  });
  function acknowledgeHandover(id) {
    try {
      const key = `handover_record_${id}`;
      const raw = localStorage.getItem(key);
      if (raw) {
        const rec = JSON.parse(raw);
        rec.status = "acknowledged";
        localStorage.setItem(key, JSON.stringify(rec));
      }
    } catch {
    }
    setAcknowledgedIds((prev) => /* @__PURE__ */ new Set([...prev, id]));
    ue.success("Handover acknowledged");
  }
  const visibleHandovers = pendingHandovers.filter(
    (h) => !acknowledgedIds.has(h.id)
  );
  const statusColors = {
    given: "bg-emerald-100 text-emerald-700 border-emerald-200",
    not_given: "bg-red-100 text-red-700 border-red-200",
    delayed: "bg-amber-100 text-amber-700 border-amber-200",
    pending: "bg-blue-100 text-blue-700 border-blue-200"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6",
      "data-ocid": "nurse.dashboard",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-foreground", children: [
              "Welcome, ",
              currentDoctor == null ? void 0 : currentDoctor.name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-0.5", children: "Nurse Dashboard" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                className: `text-xs px-3 py-1.5 flex items-center gap-1.5 border ${shift.color}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShiftIcon, { className: "w-3.5 h-3.5" }),
                  shift.label
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-pink-100 text-pink-800 border-pink-200 text-xs px-3 py-1", children: "Nurse" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: visibleHandovers.length > 0 ? "border-l-4 border-l-indigo-500" : "",
            "data-ocid": "nurse.handover_ack.panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-4 h-4 text-indigo-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Pending Handover Acknowledgments" }),
                visibleHandovers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-indigo-600 text-white text-xs", children: visibleHandovers.length })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: visibleHandovers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-2 text-emerald-600 py-2",
                  "data-ocid": "nurse.handover_ack.empty_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "All handovers acknowledged — you're all caught up!" })
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: visibleHandovers.map((h, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-3 bg-indigo-50 border border-indigo-200 rounded-lg px-3 py-2.5",
                  "data-ocid": `nurse.handover_ack.item.${idx + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-foreground", children: [
                        h.fromShift,
                        " → ",
                        h.toShift
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                        h.patientCount,
                        " patient",
                        h.patientCount !== 1 ? "s" : "",
                        " ",
                        "·",
                        " ",
                        h.submittedAt ? new Date(h.submittedAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit"
                        }) : "—"
                      ] }),
                      h.notes && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate mt-0.5", children: h.notes })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        className: "h-7 px-3 text-xs bg-indigo-600 hover:bg-indigo-700 text-white gap-1 shrink-0",
                        onClick: () => acknowledgeHandover(h.id),
                        "data-ocid": `nurse.handover_ack.confirm_button.${idx + 1}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
                          " Acknowledge"
                        ]
                      }
                    )
                  ]
                },
                h.id
              )) }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ClinicalAlertsPanel,
          {
            patients: admittedPatients,
            vitalsData
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl shadow-sm overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-rose-500 to-pink-600 p-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white leading-none", children: admittedPatients.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-6 h-6 text-white opacity-80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card px-4 py-2.5 border border-t-0 border-border rounded-b-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "Patients" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl shadow-sm overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-500 to-indigo-600 p-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white leading-none", children: medsDue.filter((m) => m.status === "pending").length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-6 h-6 text-white opacity-80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card px-4 py-2.5 border border-t-0 border-border rounded-b-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "Meds Due" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl shadow-sm overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-amber-500 to-orange-500 p-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white leading-none", children: vitalsNeeded.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-6 h-6 text-white opacity-80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card px-4 py-2.5 border border-t-0 border-border rounded-b-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "Vitals Pending" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5 flex flex-row items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-blue-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Medications Due Now" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: medsDue.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-center py-8 text-muted-foreground",
                "data-ocid": "nurse.meds.empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-8 h-8 mx-auto mb-2 text-emerald-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No medications due in this window" })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: medsDue.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-3 border border-border rounded-lg px-3 py-2.5",
                "data-ocid": `nurse.med_row.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: m.patientName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: m.drugName })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-muted-foreground shrink-0", children: m.scheduledTime }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: `text-[10px] shrink-0 capitalize border ${statusColors[m.status]}`,
                      children: m.status
                    }
                  )
                ]
              },
              `${m.patientId}-${m.drugName}-${i}`
            )) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-amber-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-amber-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Vitals Not Recorded Today" }),
                vitalsNeeded.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-amber-100 text-amber-800 border-amber-200 text-xs", children: vitalsNeeded.length })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: vitalsNeeded.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-2 text-emerald-600 py-2",
                  "data-ocid": "nurse.vitals.empty_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "All vitals recorded today" })
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                vitalsNeeded.slice(0, 5).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => navigate({
                      to: "/PatientProfile",
                      search: { id: String(p.id) }
                    }),
                    className: "w-full flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 hover:bg-amber-100 transition-colors text-left",
                    "data-ocid": `nurse.vitals_pending.${String(p.id)}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5 text-amber-600 shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground flex-1 truncate", children: p.fullName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-amber-700 shrink-0", children: [
                        "Bed ",
                        p.bedNumber || "—"
                      ] })
                    ]
                  },
                  String(p.id)
                )),
                vitalsNeeded.length > 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    className: "w-full text-xs gap-1",
                    onClick: () => navigate({ to: "/Patients" }),
                    children: [
                      "+",
                      vitalsNeeded.length - 5,
                      " more",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
                    ]
                  }
                )
              ] }) })
            ] }),
            ioSummary.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "w-4 h-4 text-teal-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Intake–Output Summary" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4 space-y-2", children: ioSummary.map(({ patient: p, totalIn, totalOut, uoAlert }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `rounded-lg px-3 py-2 flex items-center gap-3 ${uoAlert ? "bg-red-50 border border-red-200" : "bg-muted/30 border border-border"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: p.fullName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                        "In: ",
                        totalIn,
                        "ml · Out: ",
                        totalOut,
                        "ml"
                      ] })
                    ] }),
                    uoAlert && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-red-600 text-white text-[10px] shrink-0", children: "Low UO ⚠" })
                  ]
                },
                String(p.id)
              )) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-indigo-200", children: [
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-4 h-4 text-indigo-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-semibold text-foreground text-sm", children: [
              shift.label,
              " Handover"
            ] }),
            handoverSubmitted && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-emerald-100 text-emerald-800 border-emerald-200 text-xs", children: "Submitted" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "px-5 pb-4 space-y-3", children: [
            handoverSubmitted ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3 text-sm text-emerald-700", children: "Handover submitted. The next nurse can add their notes below." }) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                rows: 4,
                className: "w-full border border-border rounded-lg px-3 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background text-foreground placeholder:text-muted-foreground",
                placeholder: "Document patient status, critical issues, pending tasks, medications administered, I/O summary...",
                value: handoverText,
                onChange: (e) => {
                  setHandoverText(e.target.value);
                  try {
                    localStorage.setItem(
                      `handover_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}_${currentDoctor == null ? void 0 : currentDoctor.email}`,
                      e.target.value
                    );
                  } catch {
                  }
                },
                disabled: handoverSubmitted,
                "data-ocid": "nurse.handover.textarea"
              }
            ),
            !handoverSubmitted && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "bg-indigo-600 hover:bg-indigo-700 text-white gap-2",
                onClick: () => {
                  if (!handoverText.trim()) {
                    ue.error(
                      "Please write the handover notes before submitting"
                    );
                    return;
                  }
                  try {
                    localStorage.setItem(
                      `handover_submitted_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}_${currentDoctor == null ? void 0 : currentDoctor.email}`,
                      "true"
                    );
                  } catch {
                  }
                  setHandoverSubmitted(true);
                  ue.success("Handover submitted successfully");
                },
                "data-ocid": "nurse.handover.submit_button",
                children: "Submit Handover"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "flex items-center justify-between w-full text-left",
              onClick: () => setShowAllPatients((v) => !v),
              "data-ocid": "nurse.all_patients.toggle",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "All Patients" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-xs bg-muted text-muted-foreground border-border", children: allPatients.length })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: showAllPatients ? "Hide ▲" : "Show ▼" })
              ]
            }
          ) }),
          showAllPatients && /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "px-5 pb-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  className: "w-full border border-border rounded-lg pl-8 pr-3 py-2 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20",
                  placeholder: "Search patients…",
                  value: allPatientsSearch,
                  onChange: (e) => setAllPatientsSearch(e.target.value),
                  "data-ocid": "nurse.all_patients.search_input"
                }
              )
            ] }),
            allPatients.filter(
              (p) => !allPatientsSearch || p.fullName.toLowerCase().includes(allPatientsSearch.toLowerCase()) || (p.phone ?? "").includes(allPatientsSearch) || (p.registerNumber ?? "").toString().includes(allPatientsSearch)
            ).slice(0, 10).map((p) => {
              const admitted = p.isAdmitted || p.patientType === "admitted" || p.status === "Admitted";
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => navigate({
                    to: "/PatientProfile",
                    search: { id: String(p.id) }
                  }),
                  className: "w-full border border-border rounded-xl p-3 flex items-center gap-3 hover:bg-muted/30 transition-colors text-left",
                  "data-ocid": `nurse.all_patients_item.${String(p.id)}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${admitted ? "bg-green-100" : "bg-sky-100"}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `font-bold text-xs ${admitted ? "text-green-700" : "text-sky-700"}`,
                            children: p.fullName.charAt(0)
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: p.fullName }),
                        admitted && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[10px] bg-green-100 text-green-800 border border-green-300 shrink-0", children: "Admitted" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: admitted ? `Bed ${p.bedNumber || "—"}` : "OPD" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 text-muted-foreground shrink-0" })
                  ]
                },
                String(p.id)
              );
            }),
            allPatients.length > 10 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "w-full text-xs gap-1",
                onClick: () => navigate({ to: "/Patients" }),
                "data-ocid": "nurse.all_patients.view_all_button",
                children: [
                  "View all ",
                  allPatients.length,
                  " patients",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function loadBedSummary() {
  const beds = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!(k == null ? void 0 : k.startsWith("patients_"))) continue;
    try {
      const arr = JSON.parse(localStorage.getItem(k) || "[]");
      for (const p of arr) {
        if (p.isAdmitted || p.patientType === "admitted" || p.status === "Admitted") {
          beds.push({
            number: String(p.bedNumber || "—"),
            ward: String(p.ward || "General"),
            patientName: p.fullName,
            status: "occupied"
          });
        }
      }
    } catch {
    }
  }
  return beds;
}
function loadTodayAppointments() {
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  try {
    const all = JSON.parse(
      localStorage.getItem("medicare_appointments") || "[]"
    );
    return all.filter(
      (a) => {
        var _a;
        return a.preferredDate === today || ((_a = a.createdAt) == null ? void 0 : _a.startsWith(today));
      }
    );
  } catch {
    return [];
  }
}
function getTotalPatients() {
  let count = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!(k == null ? void 0 : k.startsWith("patients_"))) continue;
    try {
      const arr = JSON.parse(localStorage.getItem(k) || "[]");
      count += arr.length;
    } catch {
    }
  }
  return count;
}
function loadUnpaidInvoices() {
  try {
    const all = JSON.parse(
      localStorage.getItem("moneyReceipts") || "[]"
    );
    return all.filter((r) => r.paymentStatus !== "paid").slice(0, 10);
  } catch {
    return [];
  }
}
function loadPendingPatients() {
  const results = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!(k == null ? void 0 : k.startsWith("patients_"))) continue;
    try {
      const arr = JSON.parse(localStorage.getItem(k) || "[]");
      for (const p of arr) {
        const st = String(p.status ?? "");
        if (st === "pending_approval" || st === "pending") {
          results.push(p);
        }
      }
    } catch {
    }
  }
  return results;
}
function updatePatientStatus(patientId, newStatus) {
  const idStr = String(patientId);
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!(k == null ? void 0 : k.startsWith("patients_"))) continue;
    try {
      const arr = JSON.parse(localStorage.getItem(k) || "[]");
      const idx = arr.findIndex((p) => String(p.id) === idStr);
      if (idx >= 0) {
        arr[idx].status = newStatus;
        localStorage.setItem(k, JSON.stringify(arr));
        return true;
      }
    } catch {
    }
  }
  return false;
}
function StaffDashboard() {
  const { currentDoctor } = useEmailAuth();
  const navigate = useNavigate();
  const [showRegForm, setShowRegForm] = reactExports.useState(false);
  const createPatient = useCreatePatient();
  const occupiedBeds = reactExports.useMemo(loadBedSummary, []);
  const todayAppointments = reactExports.useMemo(loadTodayAppointments, []);
  const totalPatients = reactExports.useMemo(getTotalPatients, []);
  const unpaidInvoices = reactExports.useMemo(loadUnpaidInvoices, []);
  const [pendingPatients, setPendingPatients] = reactExports.useState(
    () => loadPendingPatients()
  );
  const handleCreate = (data) => {
    createPatient.mutate(data, {
      onSuccess: (patient) => {
        const regNum = patient == null ? void 0 : patient.registerNumber;
        ue.success(
          regNum ? `Patient registered — ${regNum}` : "Patient registered"
        );
        setShowRegForm(false);
      },
      onError: () => ue.error("Failed to register patient")
    });
  };
  function handleApprove(patientId) {
    if (updatePatientStatus(patientId, "active")) {
      setPendingPatients(
        (prev) => prev.filter((p) => String(p.id) !== String(patientId))
      );
      ue.success("Patient registration approved");
    }
  }
  function handleReject(patientId) {
    if (updatePatientStatus(patientId, "rejected")) {
      setPendingPatients(
        (prev) => prev.filter((p) => String(p.id) !== String(patientId))
      );
      ue.success("Patient registration rejected");
    }
  }
  const statusColors = {
    pending: "bg-amber-100 text-amber-700 border-amber-200",
    confirmed: "bg-emerald-100 text-emerald-700 border-emerald-200",
    cancelled: "bg-red-100 text-red-700 border-red-200"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6",
      "data-ocid": "staff.dashboard",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-foreground", children: [
              "Welcome, ",
              currentDoctor == null ? void 0 : currentDoctor.name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-0.5", children: "Reception / Staff Dashboard" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: () => setShowRegForm(true),
                className: "gap-2 bg-orange-600 hover:bg-orange-700 text-white",
                "data-ocid": "staff.register_patient.button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-4 h-4" }),
                  "Register Patient"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-amber-100 text-amber-800 border-amber-200 text-xs px-3 py-1", children: "Staff / Reception" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl shadow-sm overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-orange-500 to-amber-600 p-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white leading-none", children: totalPatients }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-white opacity-80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card px-4 py-2.5 border border-t-0 border-border rounded-b-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "Total Patients" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl shadow-sm overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-500 to-indigo-600 p-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white leading-none", children: occupiedBeds.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-6 h-6 text-white opacity-80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card px-4 py-2.5 border border-t-0 border-border rounded-b-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "Beds Occupied" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl shadow-sm overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-teal-500 to-emerald-600 p-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white leading-none", children: todayAppointments.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-6 h-6 text-white opacity-80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card px-4 py-2.5 border border-t-0 border-border rounded-b-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "Today's Appointments" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl shadow-sm overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-rose-500 to-red-600 p-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white leading-none", children: todayAppointments.filter((a) => a.status === "pending").length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-6 h-6 text-white opacity-80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card px-4 py-2.5 border border-t-0 border-border rounded-b-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "Pending Confirm" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3 pt-4 px-5 flex flex-row items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-4 h-4 text-emerald-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Today's Appointments" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  className: "text-xs gap-1",
                  onClick: () => navigate({ to: "/Appointments" }),
                  children: "All"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: todayAppointments.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-center py-8 text-muted-foreground",
                "data-ocid": "staff.appointments.empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-8 h-8 mx-auto mb-2 opacity-30" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No appointments today" })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: todayAppointments.slice(0, 6).map((appt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-3 border border-border rounded-lg px-3 py-2.5",
                "data-ocid": `staff.appt_row.${appt.id}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: appt.patientName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                      appt.preferredTime,
                      " ·",
                      " ",
                      appt.preferredChamber || appt.hospitalName || "—"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                    appt.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: `https://wa.me/${appt.phone.replace(/[^0-9]/g, "")}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-emerald-600 hover:text-emerald-700",
                        title: "WhatsApp",
                        "data-ocid": "staff.whatsapp.button",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-4 h-4" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "outline",
                        className: `text-[10px] border capitalize ${statusColors[appt.status] || statusColors.pending}`,
                        children: appt.status
                      }
                    )
                  ] })
                ]
              },
              appt.id
            )) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3 pt-4 px-5 flex flex-row items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-4 h-4 text-blue-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Bed Assignment Board" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  className: "text-xs gap-1",
                  onClick: () => navigate({ to: "/BedManagement" }),
                  children: "Manage"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: occupiedBeds.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-center py-8 text-muted-foreground",
                "data-ocid": "staff.beds.empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-8 h-8 mx-auto mb-2 opacity-30" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No beds occupied" })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              occupiedBeds.slice(0, 10).map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "border border-blue-200 bg-blue-50/50 rounded-lg px-3 py-2",
                  "data-ocid": `staff.bed.${b.number}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1 mb-0.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-blue-700", children: [
                        "Bed ",
                        b.number
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-blue-600 text-white text-[9px] px-1", children: "Occupied" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground truncate", children: b.patientName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: b.ward })
                  ]
                },
                `${b.number}-${i}`
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-dashed border-border rounded-lg px-3 py-2 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-emerald-400 mx-auto mb-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Available" })
              ] }) })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "border-l-4 border-l-red-500",
              "data-ocid": "staff.unpaid_invoices.panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-4 h-4 text-red-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Unpaid Invoices" }),
                  unpaidInvoices.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-red-500 text-white text-xs", children: unpaidInvoices.length })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: unpaidInvoices.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 text-emerald-600 py-3",
                    "data-ocid": "staff.unpaid_invoices.empty_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No unpaid invoices — all cleared!" })
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 max-h-52 overflow-y-auto", children: unpaidInvoices.map((inv, idx) => {
                  var _a;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => navigate({ to: "/AppointmentPayment" }),
                      className: "w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 border border-red-200 hover:bg-red-100 transition-colors text-left",
                      "data-ocid": `staff.unpaid_invoice.item.${idx + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: inv.patientName }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground capitalize", children: inv.invoiceType || "Invoice" })
                        ] }),
                        inv.finalAmount ?? inv.totalAmount ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-red-700 shrink-0", children: [
                          "৳",
                          (_a = inv.finalAmount ?? inv.totalAmount) == null ? void 0 : _a.toLocaleString()
                        ] }) : null
                      ]
                    },
                    inv.id
                  );
                }) }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "border-l-4 border-l-amber-500",
              "data-ocid": "staff.pending_reg.panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 pt-4 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-4 h-4 text-amber-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm", children: "Pending Patient Registrations" }),
                  pendingPatients.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-amber-500 text-white text-xs", children: pendingPatients.length })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 pb-4", children: pendingPatients.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 text-emerald-600 py-3",
                    "data-ocid": "staff.pending_reg.empty_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No pending registrations" })
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-52 overflow-y-auto", children: pendingPatients.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2.5",
                    "data-ocid": `staff.pending_reg.item.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: p.fullName }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                          p.registerNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono mr-2", children: p.registerNumber }),
                          p.createdAt ? new Date(
                            String(p.createdAt)
                          ).toLocaleDateString() : "—"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 shrink-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            size: "sm",
                            variant: "outline",
                            className: "h-6 px-2 text-[10px] text-emerald-700 border-emerald-300 hover:bg-emerald-50",
                            onClick: () => handleApprove(p.id),
                            "data-ocid": `staff.pending_reg.approve.${idx + 1}`,
                            children: "Approve"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            size: "sm",
                            variant: "outline",
                            className: "h-6 px-2 text-[10px] text-red-700 border-red-300 hover:bg-red-50",
                            onClick: () => handleReject(p.id),
                            "data-ocid": `staff.pending_reg.reject.${idx + 1}`,
                            children: "Reject"
                          }
                        )
                      ] })
                    ]
                  },
                  String(p.id)
                )) }) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showRegForm, onOpenChange: setShowRegForm, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl max-h-[90vh] overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-5 h-5 text-orange-600" }),
            "Register New Patient"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PatientForm,
            {
              onSubmit: handleCreate,
              onCancel: () => setShowRegForm(false),
              isLoading: createPatient.isPending
            }
          )
        ] }) })
      ]
    }
  );
}
function Dashboard() {
  const { currentDoctor } = useEmailAuth();
  const { isAdmin } = useAdminAuth();
  if (isAdmin) return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminDashboard, {});
  const role = (currentDoctor == null ? void 0 : currentDoctor.role) ?? "doctor";
  switch (role) {
    case "consultant_doctor":
    case "doctor":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ConsultantDashboard, {});
    case "medical_officer":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(MedicalOfficerDashboard, {});
    case "intern_doctor":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(InternDashboard, {});
    case "nurse":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(NurseDashboard, {});
    case "staff":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(StaffDashboard, {});
    case "admin":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminDashboard, {});
    default:
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ConsultantDashboard, {});
  }
}
export {
  Dashboard as default
};
