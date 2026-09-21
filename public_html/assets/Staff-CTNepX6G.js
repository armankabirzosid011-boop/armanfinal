import { i as createLucideIcon, q as useEmailAuth, K as useAdminAuth, r as reactExports, a1 as loadRegistry, j as jsxRuntimeExports, a3 as Users, h as Badge, c as Clock, a4 as UserCheck, Q as ChartColumn, B as Button, L as Label, I as Input, S as Select, d as SelectTrigger, e as SelectValue, f as SelectContent, g as SelectItem, a5 as STAFF_ROLE_LABELS, aG as STAFF_ROLE_COLORS, b as CircleCheck, a6 as CircleX, a8 as saveRegistry, u as ue, an as appendAuditLog } from "./index-DJeWhCy-.js";
import { C as Calendar } from "./calendar-BL7xJRSg.js";
import { B as BookOpen } from "./book-open-Bi6sJ5u3.js";
import { P as Plus } from "./plus-CHPIrJ6M.js";
import { S as Search } from "./search-BLymxia-.js";
import { P as Pen } from "./pen-CfMhwJvZ.js";
import { T as Trash2 } from "./trash-2-B3l-ZhdV.js";
import { D as Download } from "./download-qc_8yQ5r.js";
import { T as TrendingUp } from "./trending-up-B6DQx806.js";
import { P as Phone } from "./phone-Co67JhRS.js";
import { M as Mail } from "./mail-yvZvzeI4.js";
import { S as Sun, M as Moon } from "./sun-7_ce8Kaj.js";
import { S as Sunset } from "./sunset-B1zSdVi8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "17", x2: "22", y1: "8", y2: "13", key: "3nzzx3" }],
  ["line", { x1: "22", x2: "17", y1: "8", y2: "13", key: "1swrse" }]
];
const UserX = createLucideIcon("user-x", __iconNode);
const SHIFTS_KEY = "staff_shifts";
const ATTENDANCE_KEY = "staff_attendance";
const LEAVE_REQUESTS_KEY = "leave_requests";
function loadShifts() {
  try {
    const raw = localStorage.getItem(SHIFTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveShifts(shifts) {
  localStorage.setItem(SHIFTS_KEY, JSON.stringify(shifts));
}
function loadAttendance() {
  try {
    const raw = localStorage.getItem(ATTENDANCE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveAttendance(records) {
  localStorage.setItem(ATTENDANCE_KEY, JSON.stringify(records));
}
function loadLeaveRequests() {
  try {
    const raw = localStorage.getItem(LEAVE_REQUESTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveLeaveRequests(requests) {
  localStorage.setItem(LEAVE_REQUESTS_KEY, JSON.stringify(requests));
}
function logStaffLogin(staffId, staffName, role) {
  if (role === "patient" || role === "admin") return;
  const records = loadAttendance();
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const loginTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
  const existing = records.find(
    (r) => r.staffId === staffId && r.date === today
  );
  if (existing) return;
  const shifts = loadShifts();
  const todayShift = shifts.find(
    (s) => s.staffId === staffId && today >= s.startDate && today <= s.endDate
  );
  let shiftStatus = "present";
  if (todayShift) {
    const shiftStart = todayShift.shiftType === "morning" ? "06:00" : todayShift.shiftType === "evening" ? "14:00" : "22:00";
    const [sh, sm] = shiftStart.split(":").map(Number);
    const [lh, lm] = loginTime.split(":").map(Number);
    const shiftStartMin = sh * 60 + sm;
    const loginMin = lh * 60 + lm;
    if (loginMin > shiftStartMin + 15) shiftStatus = "late";
  }
  const newRecord = {
    id: Date.now().toString(36),
    staffId,
    staffName,
    date: today,
    loginTime,
    shiftStatus
  };
  records.push(newRecord);
  saveAttendance(records);
}
const SHIFT_LABELS = {
  morning: "Morning (6AM–2PM)",
  evening: "Evening (2PM–10PM)",
  night: "Night (10PM–6AM)"
};
const SHIFT_COLORS = {
  morning: "bg-amber-100 text-amber-800 border-amber-200",
  evening: "bg-orange-100 text-orange-800 border-orange-200",
  night: "bg-indigo-100 text-indigo-800 border-indigo-200"
};
function ShiftIcon({ type }) {
  if (type === "morning") return /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-3.5 h-3.5" });
  if (type === "evening") return /* @__PURE__ */ jsxRuntimeExports.jsx(Sunset, { className: "w-3.5 h-3.5" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-3.5 h-3.5" });
}
const AVATAR_BG = {
  consultant_doctor: "bg-purple-100 text-purple-700",
  medical_officer: "bg-blue-100 text-blue-700",
  intern_doctor: "bg-sky-100 text-sky-700",
  nurse: "bg-pink-100 text-pink-700",
  staff: "bg-amber-100 text-amber-700",
  doctor: "bg-emerald-100 text-emerald-700"
};
function StaffAvatar({
  acc,
  size = "md"
}) {
  const dim = size === "sm" ? "w-8 h-8 text-xs" : size === "lg" ? "w-14 h-14 text-lg" : "w-10 h-10 text-sm";
  const initials = acc.name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
  const bgColor = AVATAR_BG[acc.role] ?? "bg-muted text-muted-foreground";
  if (acc.photo) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: acc.photo,
        alt: acc.name,
        className: `${dim} rounded-full object-cover shrink-0 border border-border`
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `${dim} rounded-full flex items-center justify-center shrink-0 font-bold ${bgColor}`,
      children: initials
    }
  );
}
function Staff() {
  const { currentDoctor } = useEmailAuth();
  const { isAdmin } = useAdminAuth();
  const [staff, setStaff] = reactExports.useState(
    []
  );
  const [mainTab, setMainTab] = reactExports.useState("registration");
  const [search, setSearch] = reactExports.useState("");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [roleFilter, setRoleFilter] = reactExports.useState("all");
  const [approvalRoles, setApprovalRoles] = reactExports.useState(
    {}
  );
  const [reassignRoles, setReassignRoles] = reactExports.useState(
    {}
  );
  const [_editingPhoto, setEditingPhoto] = reactExports.useState(null);
  const [shifts, setShifts] = reactExports.useState([]);
  const [showAddShift, setShowAddShift] = reactExports.useState(false);
  const [shiftForm, setShiftForm] = reactExports.useState({
    staffId: "",
    shiftType: "morning",
    startDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    endDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    ward: ""
  });
  const [editingShiftId, setEditingShiftId] = reactExports.useState(null);
  const [weekOffset, setWeekOffset] = reactExports.useState(0);
  const [attendance, setAttendance] = reactExports.useState([]);
  const [attendanceStaff, setAttendanceStaff] = reactExports.useState("all");
  const [attendanceOverride, setAttendanceOverride] = reactExports.useState({});
  const [attendanceNote, setAttendanceNote] = reactExports.useState(
    {}
  );
  const [dirSearch, setDirSearch] = reactExports.useState("");
  const [dirRole, setDirRole] = reactExports.useState("all");
  const [dirShift, setDirShift] = reactExports.useState("all");
  const canManage = isAdmin || (currentDoctor == null ? void 0 : currentDoctor.role) === "admin" || (currentDoctor == null ? void 0 : currentDoctor.role) === "consultant_doctor";
  const [leaveRequests, setLeaveRequests] = reactExports.useState([]);
  const [showLeaveForm, setShowLeaveForm] = reactExports.useState(false);
  const [leaveForm, setLeaveForm] = reactExports.useState({
    startDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    endDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    leaveType: "Annual Leave",
    reason: ""
  });
  const [perfMonth, setPerfMonth] = reactExports.useState(
    (/* @__PURE__ */ new Date()).toISOString().slice(0, 7)
  );
  const refresh = reactExports.useCallback(() => {
    const reg = loadRegistry();
    setStaff(reg);
    setShifts(loadShifts());
    setAttendance(loadAttendance());
    setLeaveRequests(loadLeaveRequests());
  }, []);
  reactExports.useEffect(() => {
    refresh();
    const iv = setInterval(refresh, 5e3);
    return () => clearInterval(iv);
  }, [refresh]);
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
  const reassignRole = (id) => {
    const role = reassignRoles[id];
    if (!role) return;
    const reg = loadRegistry();
    const idx = reg.findIndex((d) => d.id === id);
    if (idx >= 0) {
      const oldRole = reg[idx].role;
      reg[idx] = { ...reg[idx], role };
      saveRegistry(reg);
      refresh();
      appendAuditLog({
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        userRole: (currentDoctor == null ? void 0 : currentDoctor.role) ?? "admin",
        userName: (currentDoctor == null ? void 0 : currentDoctor.name) ?? "Admin",
        action: `STAFF_ROLE_CHANGED: ${reg[idx].name} — ${oldRole} → ${role}`,
        target: `staff:${id}`
      });
      ue.success(
        `Role updated to ${STAFF_ROLE_LABELS[role] ?? role}`
      );
    }
  };
  const handlePhotoUpload = (id, file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      var _a;
      const base64 = (_a = e.target) == null ? void 0 : _a.result;
      const reg = loadRegistry();
      const idx = reg.findIndex((d) => d.id === id);
      if (idx >= 0) {
        reg[idx].photo = base64;
        saveRegistry(reg);
        refresh();
        ue.success("Profile photo updated");
        setEditingPhoto(null);
      }
    };
    reader.readAsDataURL(file);
  };
  const saveShift = () => {
    if (!shiftForm.staffId || !shiftForm.ward || !shiftForm.startDate || !shiftForm.endDate) {
      ue.error("Please fill in all shift fields.");
      return;
    }
    const staffMember = staff.find((s) => s.id === shiftForm.staffId);
    const list = loadShifts();
    if (editingShiftId) {
      const idx = list.findIndex((s) => s.id === editingShiftId);
      if (idx >= 0) {
        list[idx] = {
          ...list[idx],
          ...shiftForm,
          staffName: (staffMember == null ? void 0 : staffMember.name) ?? shiftForm.staffId
        };
      }
    } else {
      list.push({
        id: Date.now().toString(36),
        ...shiftForm,
        staffName: (staffMember == null ? void 0 : staffMember.name) ?? shiftForm.staffId,
        createdBy: (currentDoctor == null ? void 0 : currentDoctor.name) ?? "Admin"
      });
    }
    saveShifts(list);
    refresh();
    setShowAddShift(false);
    setEditingShiftId(null);
    setShiftForm({
      staffId: "",
      shiftType: "morning",
      startDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      endDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      ward: ""
    });
    ue.success(editingShiftId ? "Shift updated" : "Shift assigned");
  };
  const deleteShift = (id) => {
    const list = loadShifts().filter((s) => s.id !== id);
    saveShifts(list);
    refresh();
    ue.success("Shift removed");
  };
  const startEditShift = (shift) => {
    setShiftForm({
      staffId: shift.staffId,
      shiftType: shift.shiftType,
      startDate: shift.startDate,
      endDate: shift.endDate,
      ward: shift.ward
    });
    setEditingShiftId(shift.id);
    setShowAddShift(true);
  };
  const weekDays = reactExports.useMemo(() => {
    const days = [];
    const todayDate = /* @__PURE__ */ new Date();
    const monday = new Date(todayDate);
    monday.setDate(
      todayDate.getDate() - todayDate.getDay() + 1 + weekOffset * 7
    );
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      days.push(d.toISOString().split("T")[0]);
    }
    return days;
  }, [weekOffset]);
  const getShiftForDay = (staffId, date) => shifts.find(
    (s) => s.staffId === staffId && date >= s.startDate && date <= s.endDate
  );
  const overrideAttendance = (id) => {
    const status = attendanceOverride[id];
    if (!status) return;
    const list = loadAttendance();
    const idx = list.findIndex((r) => r.id === id);
    if (idx >= 0) {
      list[idx] = {
        ...list[idx],
        shiftStatus: status,
        manualOverride: true,
        overrideNote: attendanceNote[id] ?? ""
      };
      saveAttendance(list);
      refresh();
      ue.success("Attendance updated");
    }
  };
  const filteredAttendance = reactExports.useMemo(() => {
    if (attendanceStaff === "all") return attendance;
    return attendance.filter((r) => r.staffId === attendanceStaff);
  }, [attendance, attendanceStaff]);
  const attendanceSummary = reactExports.useMemo(() => {
    const thisMonth = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7);
    const monthRecords = attendance.filter((r) => r.date.startsWith(thisMonth));
    const byStaff = {};
    for (const r of monthRecords) {
      if (!byStaff[r.staffId])
        byStaff[r.staffId] = { present: 0, late: 0, absent: 0 };
      if (r.shiftStatus === "present") byStaff[r.staffId].present++;
      else if (r.shiftStatus === "late") byStaff[r.staffId].late++;
      else byStaff[r.staffId].absent++;
    }
    return byStaff;
  }, [attendance]);
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const getCurrentShift = (staffId) => {
    const shift = shifts.find(
      (s) => s.staffId === staffId && today >= s.startDate && today <= s.endDate
    );
    return (shift == null ? void 0 : shift.shiftType) ?? null;
  };
  const approvedStaff = staff.filter((s) => s.status === "approved");
  const directoryStaff = approvedStaff.filter((s) => {
    const matchSearch = !dirSearch || s.name.toLowerCase().includes(dirSearch.toLowerCase()) || s.email.toLowerCase().includes(dirSearch.toLowerCase()) || (s.specialization || "").toLowerCase().includes(dirSearch.toLowerCase()) || (s.phone || "").includes(dirSearch);
    const matchRole = dirRole === "all" || s.role === dirRole;
    const curShift = getCurrentShift(s.id);
    const matchShift = dirShift === "all" ? true : dirShift === curShift;
    return matchSearch && matchRole && matchShift;
  });
  const submitLeaveRequest = () => {
    if (!currentDoctor) return;
    if (!leaveForm.startDate || !leaveForm.endDate) {
      ue.error("Please fill in all required fields.");
      return;
    }
    const requests = loadLeaveRequests();
    requests.push({
      id: Date.now().toString(36),
      staffId: currentDoctor.id,
      staffName: currentDoctor.name,
      staffRole: currentDoctor.role,
      startDate: leaveForm.startDate,
      endDate: leaveForm.endDate,
      leaveType: leaveForm.leaveType,
      reason: leaveForm.reason,
      status: "pending",
      adminNote: "",
      requestedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    saveLeaveRequests(requests);
    refresh();
    setShowLeaveForm(false);
    setLeaveForm({
      startDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      endDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      leaveType: "Annual Leave",
      reason: ""
    });
    ue.success("Leave request submitted");
  };
  const reviewLeave = (id, status, note) => {
    const requests = loadLeaveRequests();
    const idx = requests.findIndex((r) => r.id === id);
    if (idx >= 0) {
      requests[idx] = {
        ...requests[idx],
        status,
        adminNote: note,
        reviewedAt: (/* @__PURE__ */ new Date()).toISOString(),
        reviewedBy: (currentDoctor == null ? void 0 : currentDoctor.name) ?? "Admin"
      };
      saveLeaveRequests(requests);
      refresh();
      ue.success(`Leave request ${status}`);
    }
  };
  const perfData = reactExports.useMemo(() => {
    const prescriptions = (() => {
      try {
        const raw = localStorage.getItem("clinic_prescriptions");
        return raw ? JSON.parse(raw) : [];
      } catch {
        return [];
      }
    })();
    const procedures = (() => {
      try {
        const raw = localStorage.getItem("procedurePayments");
        return raw ? JSON.parse(raw) : [];
      } catch {
        return [];
      }
    })();
    const appts = (() => {
      try {
        const raw = localStorage.getItem("appointments");
        return raw ? JSON.parse(raw) : [];
      } catch {
        return [];
      }
    })();
    return approvedStaff.map((s) => {
      const monthAttendance = attendance.filter(
        (r) => r.staffId === s.id && r.date.startsWith(perfMonth) && r.shiftStatus === "present"
      );
      const totalShiftsMonth = attendance.filter(
        (r) => r.staffId === s.id && r.date.startsWith(perfMonth)
      );
      const rxCount = prescriptions.filter(
        (p) => p.createdBy === s.email && (p.createdAt ?? "").startsWith(perfMonth)
      ).length;
      const procCount = procedures.filter(
        (p) => p.doctorName === s.name && (p.createdAt ?? p.date ?? "").startsWith(perfMonth)
      ).length;
      const patientsCount = appts.filter(
        (a) => (a.assignedTo === s.email || a.doctorName === s.name) && (a.createdAt ?? a.date ?? "").startsWith(perfMonth)
      ).length;
      const adherencePct = totalShiftsMonth.length > 0 ? Math.round(monthAttendance.length / totalShiftsMonth.length * 100) : 0;
      return {
        staff: s,
        shiftsCompleted: monthAttendance.length,
        totalShifts: totalShiftsMonth.length,
        adherencePct,
        rxCount,
        procCount,
        patientsCount
      };
    });
  }, [approvedStaff, attendance, perfMonth]);
  const exportPerformance = () => {
    const lines = [
      "Name,Role,Patients Attended,Prescriptions Written,Procedures Logged,Shifts Completed,Shift Adherence %",
      ...perfData.map(
        (p) => `"${p.staff.name}","${STAFF_ROLE_LABELS[p.staff.role] ?? p.staff.role}",${p.patientsCount},${p.rxCount},${p.procCount},${p.shiftsCompleted},${p.adherencePct}%`
      )
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `staff-performance-${perfMonth}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    ue.success("Performance report exported");
  };
  const exportDirectory = () => {
    const lines = [
      "Name,Role,Phone,Email,Current Shift,Ward",
      ...directoryStaff.map((s) => {
        var _a;
        const shift = getCurrentShift(s.id);
        const ward = shift ? ((_a = shifts.find(
          (sh) => sh.staffId === s.id && today >= sh.startDate && today <= sh.endDate
        )) == null ? void 0 : _a.ward) ?? "" : "";
        return `"${s.name}","${STAFF_ROLE_LABELS[s.role] ?? s.role}","${s.phone ?? ""}","${s.email}","${shift ? SHIFT_LABELS[shift] : "Off Duty"}","${ward}"`;
      })
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `staff-directory-${today}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    ue.success("Directory exported as CSV");
  };
  const filtered = staff.filter((s) => {
    const matchSearch = !search || s.name.toLowerCase().includes(search.toLowerCase()) || s.email.toLowerCase().includes(search.toLowerCase()) || (s.specialization || "").toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || s.status === statusFilter;
    const matchRole = roleFilter === "all" || s.role === roleFilter;
    return matchSearch && matchStatus && matchRole;
  });
  const counts = {
    all: staff.length,
    approved: staff.filter((s) => s.status === "approved").length,
    pending: staff.filter((s) => s.status === "pending").length,
    rejected: staff.filter((s) => s.status === "rejected").length
  };
  const statusBadgeClass = {
    approved: "bg-emerald-100 text-emerald-700 border-emerald-200",
    pending: "bg-amber-100 text-amber-700 border-amber-200",
    rejected: "bg-red-100 text-red-700 border-red-200"
  };
  const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-6xl mx-auto px-4 py-6 space-y-6",
      "data-ocid": "staff.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold font-display text-foreground", children: "Staff Management" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                counts.all,
                " total · ",
                counts.approved,
                " active · ",
                counts.pending,
                " ",
                "pending"
              ] })
            ] })
          ] }),
          counts.pending > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: "outline",
              className: "gap-1.5 bg-amber-50 border-amber-300 text-amber-700 px-3 py-1.5 text-sm animate-pulse",
              "data-ocid": "staff.pending_badge",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
                counts.pending,
                " awaiting approval"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex gap-1 flex-wrap border-b border-border pb-0",
            "data-ocid": "staff.main.tab",
            children: [
              {
                key: "registration",
                label: "Registration & Approval",
                icon: UserCheck
              },
              { key: "schedule", label: "Shift Schedule", icon: Calendar },
              { key: "attendance", label: "Attendance", icon: BookOpen },
              { key: "directory", label: "Directory", icon: Users },
              ...canManage ? [
                {
                  key: "performance",
                  label: "Performance",
                  icon: ChartColumn
                }
              ] : [],
              ...isAdmin || (currentDoctor == null ? void 0 : currentDoctor.role) === "admin" ? [
                {
                  key: "leave",
                  label: "Leave Requests",
                  icon: Calendar
                }
              ] : []
            ].map(({ key, label, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setMainTab(key),
                className: `flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-t-lg border-b-2 transition-colors ${mainTab === key ? "border-primary text-primary bg-primary/5" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,
                "data-ocid": `staff.tab.${key}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }),
                  label,
                  key === "registration" && counts.pending > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center", children: counts.pending }),
                  key === "leave" && leaveRequests.filter((r) => r.status === "pending").length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center", children: leaveRequests.filter((r) => r.status === "pending").length })
                ]
              },
              key
            ))
          }
        ),
        !canManage && currentDoctor && currentDoctor.role !== "patient" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Your leave requests" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              onClick: () => setShowLeaveForm(true),
              className: "gap-1.5",
              "data-ocid": "staff.leave.open_modal_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                "Request Leave"
              ]
            }
          )
        ] }),
        showLeaveForm && !canManage && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-xl p-4 space-y-4",
            "data-ocid": "staff.leave.dialog",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: "Submit Leave Request" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Leave Type *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "select",
                    {
                      value: leaveForm.leaveType,
                      onChange: (e) => setLeaveForm((f) => ({
                        ...f,
                        leaveType: e.target.value
                      })),
                      className: "w-full border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                      "data-ocid": "staff.leave.select",
                      children: [
                        "Annual Leave",
                        "Sick Leave",
                        "Emergency Leave",
                        "Training"
                      ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t, children: t }, t))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Reason (optional)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: "Brief reason...",
                      value: leaveForm.reason,
                      onChange: (e) => setLeaveForm((f) => ({ ...f, reason: e.target.value })),
                      "data-ocid": "staff.leave.input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Start Date *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "date",
                      value: leaveForm.startDate,
                      onChange: (e) => setLeaveForm((f) => ({ ...f, startDate: e.target.value })),
                      "data-ocid": "staff.leave.input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "End Date *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "date",
                      value: leaveForm.endDate,
                      min: leaveForm.startDate,
                      onChange: (e) => setLeaveForm((f) => ({ ...f, endDate: e.target.value })),
                      "data-ocid": "staff.leave.input"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    onClick: () => setShowLeaveForm(false),
                    "data-ocid": "staff.leave.cancel_button",
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    onClick: submitLeaveRequest,
                    "data-ocid": "staff.leave.submit_button",
                    children: "Submit Request"
                  }
                )
              ] })
            ]
          }
        ),
        mainTab === "registration" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", "data-ocid": "staff.status.tab", children: ["all", "approved", "pending", "rejected"].map(
            (s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setStatusFilter(s),
                className: `px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border ${statusFilter === s ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"}`,
                "data-ocid": `staff.filter.${s}`,
                children: [
                  s.charAt(0).toUpperCase() + s.slice(1),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1.5 text-xs opacity-70", children: [
                    "(",
                    counts[s],
                    ")"
                  ] })
                ]
              },
              s
            )
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-48", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "Search by name, email, specialization...",
                  value: search,
                  onChange: (e) => setSearch(e.target.value),
                  className: "pl-9",
                  "data-ocid": "staff.search_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: roleFilter,
                onValueChange: (v) => setRoleFilter(v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-48", "data-ocid": "staff.role.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Filter by role" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Roles" }),
                    Object.keys(STAFF_ROLE_LABELS).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, children: STAFF_ROLE_LABELS[r] }, r))
                  ] })
                ]
              }
            )
          ] }),
          filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-2xl p-12 text-center",
              "data-ocid": "staff.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-10 h-10 text-muted-foreground mx-auto mb-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-1", children: "No staff found" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: search || statusFilter !== "all" || roleFilter !== "all" ? "Try adjusting your filters." : "No staff accounts registered yet." })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "staff.list", children: filtered.map((acc, idx) => {
            const roleLabel = STAFF_ROLE_LABELS[acc.role] ?? acc.role;
            const roleColor = STAFF_ROLE_COLORS[acc.role] ?? "bg-muted text-muted-foreground border-border";
            const isPending = acc.status === "pending";
            const isApproved = acc.status === "approved";
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `bg-card border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-4 ${isPending ? "border-amber-200" : acc.status === "rejected" ? "border-red-200 opacity-60" : "border-border"}`,
                "data-ocid": `staff.item.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(StaffAvatar, { acc }),
                      canManage && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "label",
                        {
                          className: "absolute inset-0 rounded-full bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity",
                          title: "Upload photo",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3 h-3 text-white" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                type: "file",
                                accept: "image/*",
                                className: "hidden",
                                onChange: (e) => {
                                  var _a;
                                  const file = (_a = e.target.files) == null ? void 0 : _a[0];
                                  if (file) handlePhotoUpload(acc.id, file);
                                },
                                "data-ocid": "staff.upload_button"
                              }
                            )
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-foreground truncate", children: [
                          acc.designation ? `${acc.designation} ` : "",
                          acc.name
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `text-[11px] font-semibold px-2 py-0.5 rounded-full border ${roleColor}`,
                            children: roleLabel
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `text-[11px] font-medium px-2 py-0.5 rounded-full border ${statusBadgeClass[acc.status] ?? "bg-muted text-muted-foreground"}`,
                            children: acc.status
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground truncate", children: acc.email }),
                      (acc.degree || acc.specialization || acc.hospital) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate mt-0.5", children: [acc.degree, acc.specialization, acc.hospital].filter(Boolean).join(" · ") }),
                      acc.createdAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                        "Registered:",
                        " ",
                        new Date(acc.createdAt).toLocaleDateString(
                          "en-BD",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric"
                          }
                        )
                      ] })
                    ] })
                  ] }),
                  canManage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap shrink-0", children: [
                    isPending && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
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
                                className: "h-8 text-xs w-36",
                                "data-ocid": "staff.approve.select",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: Object.keys(STAFF_ROLE_LABELS).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                              SelectItem,
                              {
                                value: r,
                                className: "text-xs",
                                children: STAFF_ROLE_LABELS[r]
                              },
                              r
                            )) })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          size: "sm",
                          variant: "outline",
                          className: "h-8 text-xs text-emerald-700 border-emerald-300 hover:bg-emerald-50 gap-1",
                          onClick: () => approveStaff(acc),
                          "data-ocid": "staff.approve.button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-3.5 h-3.5" }),
                            "Approve"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          size: "sm",
                          variant: "outline",
                          className: "h-8 text-xs text-red-700 border-red-300 hover:bg-red-50 gap-1",
                          onClick: () => rejectStaff(acc.id),
                          "data-ocid": "staff.reject.button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(UserX, { className: "w-3.5 h-3.5" }),
                            "Reject"
                          ]
                        }
                      )
                    ] }),
                    isApproved && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Select,
                        {
                          value: reassignRoles[acc.id] ?? acc.role,
                          onValueChange: (v) => setReassignRoles((prev) => ({
                            ...prev,
                            [acc.id]: v
                          })),
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              SelectTrigger,
                              {
                                className: "h-8 text-xs w-36",
                                "data-ocid": "staff.reassign.select",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: Object.keys(STAFF_ROLE_LABELS).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                              SelectItem,
                              {
                                value: r,
                                className: "text-xs",
                                children: STAFF_ROLE_LABELS[r]
                              },
                              r
                            )) })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          size: "sm",
                          variant: "outline",
                          className: "h-8 text-xs gap-1",
                          onClick: () => reassignRole(acc.id),
                          disabled: !reassignRoles[acc.id] || reassignRoles[acc.id] === acc.role,
                          "data-ocid": "staff.save_button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
                            "Update Role"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          size: "sm",
                          variant: "outline",
                          className: "h-8 text-xs text-red-600 border-red-200 hover:bg-red-50 gap-1",
                          onClick: () => rejectStaff(acc.id),
                          "data-ocid": "staff.delete_button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3.5 h-3.5" }),
                            "Revoke"
                          ]
                        }
                      )
                    ] }),
                    acc.status === "rejected" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "h-8 text-xs text-emerald-700 border-emerald-300 hover:bg-emerald-50 gap-1",
                        onClick: () => approveStaff(acc),
                        "data-ocid": "staff.approve.button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-3.5 h-3.5" }),
                          "Re-approve"
                        ]
                      }
                    )
                  ] })
                ]
              },
              acc.id
            );
          }) })
        ] }),
        mainTab === "schedule" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setWeekOffset((w) => w - 1),
                  className: "px-2 py-1 text-xs border border-border rounded-lg hover:bg-muted transition-colors",
                  "data-ocid": "staff.schedule.pagination_prev",
                  children: "← Prev"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground font-medium", children: [
                weekDays[0],
                " → ",
                weekDays[6]
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setWeekOffset((w) => w + 1),
                  className: "px-2 py-1 text-xs border border-border rounded-lg hover:bg-muted transition-colors",
                  "data-ocid": "staff.schedule.pagination_next",
                  children: "Next →"
                }
              ),
              weekOffset !== 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setWeekOffset(0),
                  className: "px-2 py-1 text-xs text-primary border border-primary/30 rounded-lg hover:bg-primary/5 transition-colors",
                  children: "This Week"
                }
              )
            ] }),
            canManage && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                onClick: () => {
                  setEditingShiftId(null);
                  setShiftForm({
                    staffId: "",
                    shiftType: "morning",
                    startDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
                    endDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
                    ward: ""
                  });
                  setShowAddShift(true);
                },
                className: "gap-1.5",
                "data-ocid": "staff.schedule.open_modal_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                  "Assign Shift"
                ]
              }
            )
          ] }),
          showAddShift && canManage && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-4 space-y-4",
              "data-ocid": "staff.shift.dialog",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: editingShiftId ? "Edit Shift Assignment" : "Assign New Shift" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Staff Member *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: shiftForm.staffId,
                        onValueChange: (v) => setShiftForm((f) => ({ ...f, staffId: v })),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "staff.shift.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select staff" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: approvedStaff.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: s.id, children: [
                            s.name,
                            " —",
                            " ",
                            STAFF_ROLE_LABELS[s.role] ?? s.role
                          ] }, s.id)) })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Shift Type *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: shiftForm.shiftType,
                        onValueChange: (v) => setShiftForm((f) => ({ ...f, shiftType: v })),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "staff.shift.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: Object.keys(SHIFT_LABELS).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: SHIFT_LABELS[t] }, t)) })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Ward / Unit *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        placeholder: "e.g. Medical Ward, ICU",
                        value: shiftForm.ward,
                        onChange: (e) => setShiftForm((f) => ({ ...f, ward: e.target.value })),
                        "data-ocid": "staff.shift.input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Start Date *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        type: "date",
                        value: shiftForm.startDate,
                        onChange: (e) => setShiftForm((f) => ({ ...f, startDate: e.target.value })),
                        "data-ocid": "staff.shift.input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "End Date *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        type: "date",
                        value: shiftForm.endDate,
                        min: shiftForm.startDate,
                        onChange: (e) => setShiftForm((f) => ({ ...f, endDate: e.target.value })),
                        "data-ocid": "staff.shift.input"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      onClick: () => {
                        setShowAddShift(false);
                        setEditingShiftId(null);
                      },
                      "data-ocid": "staff.shift.cancel_button",
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      onClick: saveShift,
                      "data-ocid": "staff.shift.save_button",
                      children: editingShiftId ? "Update Shift" : "Assign Shift"
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-[700px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-8 gap-1 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-medium px-2 py-1", children: "Staff" }),
              weekDays.map((date, i) => {
                const isToday = date === today;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `text-xs font-medium text-center px-1 py-1.5 rounded-lg ${isToday ? "bg-primary/10 text-primary font-bold" : "text-muted-foreground"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: DAY_LABELS[i] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px]", children: date.slice(5) })
                    ]
                  },
                  date
                );
              })
            ] }),
            approvedStaff.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "text-center py-8 text-muted-foreground text-sm",
                "data-ocid": "staff.schedule.empty_state",
                children: "No approved staff to show in schedule."
              }
            ) : approvedStaff.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-8 gap-1 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-2 py-2 bg-card border border-border rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(StaffAvatar, { acc: s, size: "sm" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground truncate", children: s.name })
              ] }),
              weekDays.map((date) => {
                const shift = getShiftForDay(s.id, date);
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `text-[10px] text-center px-1 py-1.5 rounded-lg border flex flex-col items-center justify-center gap-0.5 min-h-[48px] ${shift ? SHIFT_COLORS[shift.shiftType] : "bg-background border-border text-muted-foreground/40"}`,
                    children: shift ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ShiftIcon, { type: shift.shiftType }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium capitalize", children: shift.shiftType }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] truncate max-w-full px-1", children: shift.ward })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "—" })
                  },
                  date
                );
              })
            ] }, s.id))
          ] }) }),
          shifts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground mb-3", children: "All Shift Assignments" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: shifts.map((shift, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-card border border-border rounded-lg px-4 py-3 flex items-center gap-3 flex-wrap",
                "data-ocid": `staff.shift.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: `flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded-full border ${SHIFT_COLORS[shift.shiftType]}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ShiftIcon, { type: shift.shiftType }),
                        SHIFT_LABELS[shift.shiftType]
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: shift.staffName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                      shift.ward,
                      " · ",
                      shift.startDate,
                      " → ",
                      shift.endDate
                    ] })
                  ] }),
                  canManage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "h-7 w-7 p-0",
                        onClick: () => startEditShift(shift),
                        "data-ocid": "staff.shift.edit_button",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3 h-3" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "h-7 w-7 p-0 text-red-600 border-red-200 hover:bg-red-50",
                        onClick: () => deleteShift(shift.id),
                        "data-ocid": "staff.shift.delete_button",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" })
                      }
                    )
                  ] })
                ]
              },
              shift.id
            )) })
          ] })
        ] }),
        mainTab === "attendance" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 flex-wrap items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: attendanceStaff, onValueChange: setAttendanceStaff, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "w-56",
                  "data-ocid": "staff.attendance.select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All staff" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Staff" }),
                approvedStaff.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s.id, children: s.name }, s.id))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
              filteredAttendance.length,
              " record(s)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", children: approvedStaff.filter(
            (s) => attendanceStaff === "all" || s.id === attendanceStaff
          ).map((s) => {
            const summary = attendanceSummary[s.id] ?? {
              present: 0,
              late: 0,
              absent: 0
            };
            const total = summary.present + summary.late + summary.absent;
            const pct = total > 0 ? Math.round(
              (summary.present + summary.late) / total * 100
            ) : 0;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-card border border-border rounded-xl p-4 flex items-center gap-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(StaffAvatar, { acc: s }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm text-foreground truncate", children: s.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                      "This month: ",
                      summary.present + summary.late,
                      "/",
                      total,
                      " ",
                      "shifts"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-medium", children: [
                        "Present: ",
                        summary.present
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 font-medium", children: [
                        "Late: ",
                        summary.late
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-red-100 text-red-700 font-medium", children: [
                        "Absent: ",
                        summary.absent
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: `text-lg font-bold ${pct >= 90 ? "text-emerald-600" : pct >= 75 ? "text-amber-600" : "text-red-600"}`,
                        children: [
                          pct,
                          "%"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "attendance" })
                  ] })
                ]
              },
              s.id
            );
          }) }),
          filteredAttendance.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-10 text-center",
              "data-ocid": "staff.attendance.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-8 h-8 text-muted-foreground mx-auto mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No attendance records yet. Records are auto-logged when staff log in." })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "bg-card border border-border rounded-xl overflow-hidden",
              "data-ocid": "staff.attendance.table",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/50 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Staff" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Date" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Login" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Logout" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Status" }),
                  canManage && /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Override" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: [...filteredAttendance].reverse().map((rec, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    className: "hover:bg-muted/20 transition-colors",
                    "data-ocid": `staff.attendance.row.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: rec.staffName }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-muted-foreground", children: rec.date }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-mono text-foreground", children: rec.loginTime }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-mono text-muted-foreground", children: rec.logoutTime ?? "—" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `text-[11px] font-semibold px-2 py-0.5 rounded-full border ${rec.shiftStatus === "present" ? "bg-emerald-100 text-emerald-700 border-emerald-200" : rec.shiftStatus === "late" ? "bg-amber-100 text-amber-700 border-amber-200" : "bg-red-100 text-red-700 border-red-200"}`,
                            children: rec.shiftStatus.charAt(0).toUpperCase() + rec.shiftStatus.slice(1)
                          }
                        ),
                        rec.manualOverride && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "(manual)" })
                      ] }) }),
                      canManage && /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Select,
                          {
                            value: attendanceOverride[rec.id] ?? rec.shiftStatus,
                            onValueChange: (v) => setAttendanceOverride((prev) => ({
                              ...prev,
                              [rec.id]: v
                            })),
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                SelectTrigger,
                                {
                                  className: "h-7 text-xs w-28",
                                  "data-ocid": "staff.attendance.select",
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "present", children: "Present" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "late", children: "Late" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "absent", children: "Absent" })
                              ] })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            placeholder: "Note",
                            value: attendanceNote[rec.id] ?? "",
                            onChange: (e) => setAttendanceNote((prev) => ({
                              ...prev,
                              [rec.id]: e.target.value
                            })),
                            className: "h-7 text-xs w-24",
                            "data-ocid": "staff.attendance.input"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            size: "sm",
                            variant: "outline",
                            className: "h-7 text-xs px-2",
                            onClick: () => overrideAttendance(rec.id),
                            "data-ocid": "staff.attendance.save_button",
                            children: "Save"
                          }
                        )
                      ] }) })
                    ]
                  },
                  rec.id
                )) })
              ] })
            }
          )
        ] }),
        mainTab === "performance" && canManage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "staff.performance.section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm", children: "Month:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "month",
                  value: perfMonth,
                  onChange: (e) => setPerfMonth(e.target.value),
                  className: "w-44",
                  "data-ocid": "staff.performance.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                onClick: exportPerformance,
                className: "gap-1.5",
                "data-ocid": "staff.performance.button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                  "Export CSV"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
            {
              label: "Total Patients",
              value: perfData.reduce((s, p) => s + p.patientsCount, 0),
              color: "bg-blue-50 border-blue-200 text-blue-700"
            },
            {
              label: "Total Prescriptions",
              value: perfData.reduce((s, p) => s + p.rxCount, 0),
              color: "bg-teal-50 border-teal-200 text-teal-700"
            },
            {
              label: "Total Procedures",
              value: perfData.reduce((s, p) => s + p.procCount, 0),
              color: "bg-purple-50 border-purple-200 text-purple-700"
            },
            {
              label: "Avg Shift Adherence",
              value: perfData.length > 0 ? `${Math.round(perfData.reduce((s, p) => s + p.adherencePct, 0) / perfData.length)}%` : "0%",
              color: "bg-emerald-50 border-emerald-200 text-emerald-700"
            }
          ].map(({ label, value, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-xl p-4 ${color}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium opacity-70 mb-1", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: value })
          ] }, label)) }),
          perfData.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-12 text-center",
              "data-ocid": "staff.performance.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-10 h-10 text-muted-foreground mx-auto mb-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "No approved staff yet" })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/50 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase", children: "Staff" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase", children: "Patients" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase", children: "Rx Written" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase", children: "Procedures" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase", children: "Shifts Done" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase", children: "Adherence" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: perfData.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "hover:bg-muted/20 transition-colors",
                "data-ocid": `staff.performance.row.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(StaffAvatar, { acc: p.staff, size: "sm" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground truncate", children: p.staff.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-[10px] px-1.5 py-0.5 rounded-full border ${STAFF_ROLE_COLORS[p.staff.role] ?? "bg-muted text-muted-foreground"}`,
                          children: STAFF_ROLE_LABELS[p.staff.role] ?? p.staff.role
                        }
                      )
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right font-semibold text-foreground", children: p.patientsCount }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right font-semibold text-teal-700", children: p.rxCount }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right font-semibold text-purple-700", children: p.procCount }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right text-muted-foreground", children: [
                    p.shiftsCompleted,
                    "/",
                    p.totalShifts
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `font-bold ${p.adherencePct >= 90 ? "text-emerald-600" : p.adherencePct >= 75 ? "text-amber-600" : "text-red-600"}`,
                      children: [
                        p.adherencePct,
                        "%"
                      ]
                    }
                  ) })
                ]
              },
              p.staff.id
            )) })
          ] }) })
        ] }),
        mainTab === "leave" && (isAdmin || (currentDoctor == null ? void 0 : currentDoctor.role) === "admin") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "staff.leave.section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between gap-3 flex-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-primary" }),
            "Leave Requests",
            leaveRequests.filter((r) => r.status === "pending").length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs bg-rose-100 text-rose-700 border border-rose-200 rounded-full px-2 py-0.5", children: [
              leaveRequests.filter((r) => r.status === "pending").length,
              " ",
              "pending"
            ] })
          ] }) }),
          leaveRequests.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-12 text-center",
              "data-ocid": "staff.leave.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-10 h-10 text-muted-foreground mx-auto mb-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-1", children: "No leave requests" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Staff leave requests will appear here." })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "staff.leave.list", children: [...leaveRequests].reverse().map((req, i) => {
            const statusColors = {
              pending: "bg-amber-100 text-amber-700 border-amber-200",
              approved: "bg-emerald-100 text-emerald-700 border-emerald-200",
              rejected: "bg-red-100 text-red-700 border-red-200"
            };
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "bg-card border border-border rounded-xl p-4",
                "data-ocid": `staff.leave.item.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: req.staffName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-[11px] font-semibold px-2 py-0.5 rounded-full border ${STAFF_ROLE_COLORS[req.staffRole] ?? "bg-muted text-muted-foreground border-border"}`,
                          children: STAFF_ROLE_LABELS[req.staffRole] ?? req.staffRole
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-[11px] font-semibold px-2 py-0.5 rounded-full border ${statusColors[req.status]}`,
                          children: req.status.charAt(0).toUpperCase() + req.status.slice(1)
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: req.leaveType }),
                      " ·",
                      " ",
                      req.startDate,
                      " → ",
                      req.endDate
                    ] }),
                    req.reason && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: req.reason }),
                    req.adminNote && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1 italic", children: [
                      "Admin note: ",
                      req.adminNote
                    ] }),
                    req.reviewedBy && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: [
                      "Reviewed by ",
                      req.reviewedBy,
                      " ·",
                      " ",
                      req.reviewedAt ? new Date(req.reviewedAt).toLocaleDateString() : ""
                    ] })
                  ] }),
                  req.status === "pending" && canManage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "h-8 text-xs text-emerald-700 border-emerald-300 hover:bg-emerald-50 gap-1",
                        onClick: () => reviewLeave(req.id, "approved", ""),
                        "data-ocid": "staff.leave.confirm_button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
                          " Approve"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "h-8 text-xs text-red-700 border-red-300 hover:bg-red-50 gap-1",
                        onClick: () => reviewLeave(req.id, "rejected", ""),
                        "data-ocid": "staff.leave.delete_button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3.5 h-3.5" }),
                          " Reject"
                        ]
                      }
                    )
                  ] })
                ] })
              },
              req.id
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-0 h-0" }) })
        ] }),
        mainTab === "directory" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 flex-wrap items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-48", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "Search by name, role, phone, ward...",
                  value: dirSearch,
                  onChange: (e) => setDirSearch(e.target.value),
                  className: "pl-9",
                  "data-ocid": "staff.directory.search_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: dirRole,
                onValueChange: (v) => setDirRole(v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "w-44",
                      "data-ocid": "staff.directory.select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All roles" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Roles" }),
                    Object.keys(STAFF_ROLE_LABELS).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, children: STAFF_ROLE_LABELS[r] }, r))
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: dirShift,
                onValueChange: (v) => setDirShift(v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "w-40",
                      "data-ocid": "staff.directory.select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Any shift" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "Any Shift" }),
                    Object.keys(SHIFT_LABELS).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: SHIFT_LABELS[t] }, t))
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                onClick: exportDirectory,
                className: "gap-1.5",
                "data-ocid": "staff.directory.button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                  "Export CSV"
                ]
              }
            )
          ] }),
          directoryStaff.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-12 text-center",
              "data-ocid": "staff.directory.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-10 h-10 text-muted-foreground mx-auto mb-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-1", children: "No staff found" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Try adjusting your filters." })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
              "data-ocid": "staff.directory.list",
              children: directoryStaff.map((s, i) => {
                const curShift = getCurrentShift(s.id);
                const curShiftRecord = curShift ? shifts.find(
                  (sh) => sh.staffId === s.id && today >= sh.startDate && today <= sh.endDate
                ) : null;
                const roleLabel = STAFF_ROLE_LABELS[s.role] ?? s.role;
                const roleColor = STAFF_ROLE_COLORS[s.role] ?? "bg-muted text-muted-foreground border-border";
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "bg-card border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-sm transition-all",
                    "data-ocid": `staff.directory.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(StaffAvatar, { acc: s, size: "lg" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-foreground truncate", children: [
                            s.designation ? `${s.designation} ` : "",
                            s.name
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: `text-[11px] font-semibold px-2 py-0.5 rounded-full border ${roleColor}`,
                              children: roleLabel
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        s.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5 text-muted-foreground shrink-0" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-mono", children: s.phone })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3.5 h-3.5 text-muted-foreground shrink-0" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground truncate text-xs", children: s.email })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mt-2", children: curShift ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: `flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full border ${SHIFT_COLORS[curShift]}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ShiftIcon, { type: curShift }),
                              SHIFT_LABELS[curShift].split(" ")[0],
                              (curShiftRecord == null ? void 0 : curShiftRecord.ward) ? ` · ${curShiftRecord.ward}` : ""
                            ]
                          }
                        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] px-2 py-0.5 rounded-full border bg-muted text-muted-foreground border-border", children: "Off Duty" }) })
                      ] })
                    ]
                  },
                  s.id
                );
              })
            }
          )
        ] })
      ]
    }
  );
}
export {
  Staff as default,
  logStaffLogin
};
