import { r as reactExports, j as jsxRuntimeExports, b as CircleCheck, af as Pill, h as Badge, a7 as RefreshCw, c as Clock, a6 as CircleX, B as Button, ac as cn, u as ue } from "./index-DJeWhCy-.js";
const ESCALATION_KEY = "missed_dose_escalations";
function loadEscalations() {
  try {
    const raw = localStorage.getItem(ESCALATION_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
  }
  return [];
}
function saveEscalation(esc) {
  const all = loadEscalations();
  const idx = all.findIndex(
    (e) => e.patientId === esc.patientId && e.drugName === esc.drugName
  );
  if (idx >= 0) {
    all[idx] = esc;
  } else {
    all.push(esc);
  }
  localStorage.setItem(ESCALATION_KEY, JSON.stringify(all));
}
function acknowledgeEscalation(patientId, drugName) {
  const all = loadEscalations();
  const idx = all.findIndex(
    (e) => e.patientId === patientId && e.drugName === drugName
  );
  if (idx >= 0) {
    all[idx].acknowledged = true;
    localStorage.setItem(ESCALATION_KEY, JSON.stringify(all));
  }
}
function getMedAdminKey(patientId, date) {
  return `medAdminRecord_${patientId}_${date}`;
}
function loadMedAdminRecords(patientId, date) {
  try {
    const raw = localStorage.getItem(getMedAdminKey(patientId, date));
    if (raw) return JSON.parse(raw);
  } catch {
  }
  return [];
}
function saveMedAdminRecord(record) {
  const key = getMedAdminKey(record.patientId, record.date);
  const existing = loadMedAdminRecords(record.patientId, record.date);
  const idx = existing.findIndex(
    (r) => r.drugName === record.drugName && r.scheduledTime === record.scheduledTime
  );
  if (idx >= 0) {
    existing[idx] = record;
  } else {
    existing.push(record);
  }
  localStorage.setItem(key, JSON.stringify(existing));
}
function countConsecutiveNotGiven(patientId, drugName) {
  const allRecords = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!(k == null ? void 0 : k.startsWith(`medAdminRecord_${patientId}_`))) continue;
    try {
      const arr = JSON.parse(
        localStorage.getItem(k) || "[]"
      );
      allRecords.push(...arr.filter((r) => r.drugName === drugName));
    } catch {
    }
  }
  allRecords.sort((a, b) => {
    const da = `${a.date} ${a.scheduledTime}`;
    const db = `${b.date} ${b.scheduledTime}`;
    return da.localeCompare(db);
  });
  let count = 0;
  for (let i = allRecords.length - 1; i >= 0; i--) {
    if (allRecords[i].status === "not_given") {
      count++;
    } else {
      break;
    }
  }
  return count;
}
function playAlarm() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioCtx();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(880, ctx.currentTime);
    oscillator.frequency.setValueAtTime(660, ctx.currentTime + 0.2);
    oscillator.frequency.setValueAtTime(880, ctx.currentTime + 0.4);
    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(1e-3, ctx.currentTime + 0.8);
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.8);
  } catch {
  }
}
function frequencyToTimes(frequency) {
  const SCHEDULES = {
    "1+0+0": ["08:00"],
    "0+1+0": ["14:00"],
    "0+0+1": ["20:00"],
    "1+1+0": ["08:00", "14:00"],
    "1+0+1": ["08:00", "20:00"],
    "0+1+1": ["14:00", "20:00"],
    "1+1+1": ["08:00", "14:00", "20:00"],
    "1+1+1+1": ["06:00", "12:00", "18:00", "22:00"]
  };
  if (SCHEDULES[frequency]) return SCHEDULES[frequency];
  const lower = frequency.toLowerCase();
  if (lower.includes("once") || lower.includes("od")) return ["08:00"];
  if (lower.includes("bd") || lower.includes("twice") || lower.includes("12 hourly"))
    return ["08:00", "20:00"];
  if (lower.includes("tds") || lower.includes("three") || lower.includes("8 hourly"))
    return ["08:00", "14:00", "20:00"];
  if (lower.includes("qds") || lower.includes("four") || lower.includes("6 hourly"))
    return ["06:00", "12:00", "18:00", "22:00"];
  if (lower.includes("night") || lower.includes("hs")) return ["22:00"];
  return ["08:00"];
}
function loadAdmittedPatients() {
  const patients = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!(k == null ? void 0 : k.startsWith("patients_"))) continue;
    try {
      const arr = JSON.parse(
        localStorage.getItem(k) || "[]"
      );
      for (const p of arr) {
        if (p.isAdmitted || p.patientType === "admitted" || p.status === "Admitted") {
          const rawId = p.id;
          const pid = typeof rawId === "string" && rawId.startsWith("__bigint__") ? rawId.slice(10) : String(rawId);
          patients.push({
            id: pid,
            fullName: p.fullName || p.name || `Patient ${pid}`
          });
        }
      }
    } catch {
    }
  }
  return patients;
}
function loadAllReminders() {
  const seen = /* @__PURE__ */ new Set();
  const all = [];
  try {
    const raw = localStorage.getItem("medicare_drug_reminders");
    if (raw) {
      const arr = JSON.parse(raw);
      for (const r of arr) {
        const key = `${r.patientId}::${r.drugName}`;
        if (!seen.has(key)) {
          seen.add(key);
          all.push(r);
        }
      }
    }
  } catch {
  }
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!(k == null ? void 0 : k.startsWith("drugReminders_"))) continue;
    try {
      const arr = JSON.parse(
        localStorage.getItem(k) || "[]"
      );
      for (const r of arr) {
        const key = `${r.patientId}::${r.drugName}`;
        if (!seen.has(key)) {
          seen.add(key);
          all.push(r);
        }
      }
    } catch {
    }
  }
  return all;
}
function getConsultantEmail(patientId) {
  try {
    const key = `patient_consultant_${patientId}`;
    return localStorage.getItem(key) ?? "consultant@clinic";
  } catch {
  }
  return "consultant@clinic";
}
function NurseDueMeds({
  currentUserName,
  currentUserRole
}) {
  const [dueMeds, setDueMeds] = reactExports.useState([]);
  const [lastRefresh, setLastRefresh] = reactExports.useState(/* @__PURE__ */ new Date());
  const [notGivenRow, setNotGivenRow] = reactExports.useState(null);
  const [notGivenReason, setNotGivenReason] = reactExports.useState("");
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const nowHour = (/* @__PURE__ */ new Date()).getHours();
  const loadDueMeds = reactExports.useCallback(() => {
    var _a, _b;
    const admittedPatients = loadAdmittedPatients();
    const allReminders = loadAllReminders();
    const patientMap = {};
    for (const p of admittedPatients) {
      patientMap[p.id] = p.fullName;
    }
    const admittedIds = new Set(admittedPatients.map((p) => p.id));
    const rows = [];
    for (const reminder of allReminders) {
      const isEnabled = reminder.enabled !== false && reminder.status !== "paused" && reminder.status !== "completed";
      if (!isEnabled) continue;
      if (!admittedIds.has(reminder.patientId)) continue;
      let times = [];
      if ((_a = reminder.times) == null ? void 0 : _a.length) {
        times = reminder.times;
      } else if ((_b = reminder.reminderTimes) == null ? void 0 : _b.length) {
        times = reminder.reminderTimes;
      } else if (reminder.frequency) {
        times = frequencyToTimes(reminder.frequency);
      } else {
        times = ["08:00"];
      }
      for (const t of times) {
        const [hh] = t.split(":").map(Number);
        if (Math.abs(hh - nowHour) > 1) continue;
        const existingRecords = loadMedAdminRecords(reminder.patientId, today);
        const existingRecord = existingRecords.find(
          (r) => r.drugName === reminder.drugName && r.scheduledTime === t
        );
        rows.push({
          patientId: reminder.patientId,
          patientName: patientMap[reminder.patientId] || `Patient ${reminder.patientId}`,
          drugName: reminder.drugName,
          dose: reminder.dose,
          frequency: reminder.frequency,
          scheduledTime: t,
          reminderId: `${reminder.id}-${t}`,
          existingRecord
        });
      }
    }
    rows.sort((a, b) => {
      var _a2, _b2;
      const aStatus = ((_a2 = a.existingRecord) == null ? void 0 : _a2.status) ?? "pending";
      const bStatus = ((_b2 = b.existingRecord) == null ? void 0 : _b2.status) ?? "pending";
      if (aStatus === "pending" && bStatus !== "pending") return -1;
      if (aStatus !== "pending" && bStatus === "pending") return 1;
      return a.scheduledTime.localeCompare(b.scheduledTime);
    });
    setDueMeds(rows);
    setLastRefresh(/* @__PURE__ */ new Date());
  }, [nowHour, today]);
  reactExports.useEffect(() => {
    loadDueMeds();
    const interval = setInterval(loadDueMeds, 3e4);
    return () => clearInterval(interval);
  }, [loadDueMeds]);
  function recordStatus(row, status, reason) {
    const record = {
      id: `${row.patientId}-${row.drugName}-${row.scheduledTime}-${today}`,
      drugName: row.drugName,
      dose: row.dose,
      frequency: row.frequency,
      patientId: row.patientId,
      patientName: row.patientName,
      scheduledTime: row.scheduledTime,
      actualTime: status === "given" ? (/* @__PURE__ */ new Date()).toLocaleTimeString() : null,
      status,
      recordedBy: currentUserName,
      recordedByRole: currentUserRole,
      date: today,
      ...reason ? { reason } : {}
    };
    saveMedAdminRecord(record);
    if (status === "not_given") {
      const consecutive = countConsecutiveNotGiven(row.patientId, row.drugName);
      if (consecutive >= 2) {
        const consultantEmail = getConsultantEmail(row.patientId);
        const esc = {
          type: "missed_dose_escalation",
          patientId: row.patientId,
          patientName: row.patientName,
          drugName: row.drugName,
          missedCount: consecutive,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          consultantEmail,
          acknowledged: false
        };
        saveEscalation(esc);
        playAlarm();
        ue.error(
          `⚠️ ESCALATION: ${row.drugName} missed ${consecutive}× for ${row.patientName} — Consultant notified`,
          {
            duration: 8e3,
            id: `esc-${row.patientId}-${row.drugName}`
          }
        );
      }
    }
    loadDueMeds();
  }
  const byPatient = {};
  for (const row of dueMeds) {
    if (!byPatient[row.patientId]) byPatient[row.patientId] = [];
    byPatient[row.patientId].push(row);
  }
  const pendingCount = dueMeds.filter(
    (r) => !r.existingRecord || r.existingRecord.status === "pending"
  ).length;
  if (dueMeds.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-xl p-5 flex items-center gap-4",
        "data-ocid": "nurse_due_meds.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-green-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm", children: "All medications administered" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
              "No medications due within this hour.",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: loadDueMeds,
                  className: "text-primary underline",
                  children: "Refresh"
                }
              )
            ] })
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border rounded-xl overflow-hidden",
      "data-ocid": "nurse_due_meds.container",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 bg-rose-50 border-b border-rose-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "w-4 h-4 text-rose-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-rose-800 text-sm", children: "Due Medications" }),
            pendingCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                className: "bg-rose-600 text-white text-xs ml-1",
                "data-ocid": "nurse_due_meds.badge",
                children: [
                  pendingCount,
                  " pending"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: loadDueMeds,
              className: "text-xs text-muted-foreground flex items-center gap-1 hover:text-foreground",
              "data-ocid": "nurse_due_meds.refresh_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3 h-3" }),
                lastRefresh.toLocaleTimeString()
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: Object.entries(byPatient).map(([, rows]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2", children: rows[0].patientName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: rows.map((row) => {
            var _a;
            const status = ((_a = row.existingRecord) == null ? void 0 : _a.status) ?? "pending";
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 border",
                  status === "given" && "bg-green-50 border-green-200",
                  status === "not_given" && "bg-red-50 border-red-200",
                  status === "delayed" && "bg-orange-50 border-orange-200",
                  status === "pending" && "bg-muted/30 border-border"
                ),
                "data-ocid": `nurse_due_meds.drug_row.${row.reminderId}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-muted-foreground flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: row.drugName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                      row.scheduledTime,
                      row.dose ? ` · ${row.dose}` : "",
                      row.frequency ? ` · ${row.frequency}` : ""
                    ] })
                  ] }),
                  status === "given" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-medium text-green-700 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
                    " Given"
                  ] }) : status === "not_given" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-medium text-red-700 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3.5 h-3.5" }),
                    " Not Given"
                  ] }) : status === "delayed" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-medium text-orange-700 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
                    " Delayed"
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        className: "h-7 px-2 text-xs bg-green-600 hover:bg-green-700 text-white",
                        onClick: () => recordStatus(row, "given"),
                        "data-ocid": `nurse_due_meds.given_button.${row.reminderId}`,
                        children: "✅ Given"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "h-7 px-2 text-xs border-orange-300 text-orange-700 hover:bg-orange-50",
                        onClick: () => recordStatus(row, "delayed"),
                        "data-ocid": `nurse_due_meds.delayed_button.${row.reminderId}`,
                        children: "⏱ Delayed"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "h-7 px-2 text-xs border-red-300 text-red-700 hover:bg-red-50",
                        onClick: () => {
                          setNotGivenRow(row);
                          setNotGivenReason("");
                        },
                        "data-ocid": `nurse_due_meds.not_given_button.${row.reminderId}`,
                        children: "❌ Not Given"
                      }
                    )
                  ] })
                ]
              },
              row.reminderId
            );
          }) })
        ] }, rows[0].patientId)) }),
        notGivenRow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-xl w-full max-w-sm p-5 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-red-800 flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4 text-red-600" }),
            "Reason for Not Giving —",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: notGivenRow.drugName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: notGivenReason,
              onChange: (e) => setNotGivenReason(e.target.value),
              className: "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-300",
              "data-ocid": "nurse_due_meds.not_given_reason_select",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "— Select a reason —" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Patient Refused", children: "Patient Refused" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Out for Imaging", children: "Out for Imaging" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Drug Unavailable", children: "Drug Unavailable" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Other", children: "Other" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "flex-1",
                onClick: () => {
                  setNotGivenRow(null);
                  setNotGivenReason("");
                },
                "data-ocid": "nurse_due_meds.not_given_cancel_button",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                className: "flex-1 bg-red-600 hover:bg-red-700 text-white",
                disabled: !notGivenReason,
                onClick: () => {
                  if (notGivenRow && notGivenReason) {
                    recordStatus(notGivenRow, "not_given", notGivenReason);
                    setNotGivenRow(null);
                    setNotGivenReason("");
                  }
                },
                "data-ocid": "nurse_due_meds.not_given_confirm_button",
                children: "Confirm Not Given"
              }
            )
          ] })
        ] }) })
      ]
    }
  );
}
export {
  ESCALATION_KEY,
  acknowledgeEscalation,
  NurseDueMeds as default,
  frequencyToTimes,
  getMedAdminKey,
  loadEscalations,
  loadMedAdminRecords,
  saveEscalation,
  saveMedAdminRecord
};
