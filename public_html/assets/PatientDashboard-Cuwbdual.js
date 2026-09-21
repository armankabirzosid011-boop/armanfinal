import { i as createLucideIcon, r as reactExports, aA as useAdmitPatient, a1 as loadRegistry, aB as getVisitFormData, j as jsxRuntimeExports, D as Dialog, s as DialogContent, t as DialogHeader, v as DialogTitle, L as Label, I as Input, a4 as UserCheck, o as Stethoscope, B as Button, u as ue, ap as getDoctorEmail$1, h as Badge, a5 as STAFF_ROLE_LABELS, c as Clock, a as ChevronDown, ao as ChevronRight, am as User, aC as loadDailyProgress, ae as ClipboardList, X, ab as TriangleAlert, aD as saveDailyProgress, an as appendAuditLog, aE as loadProblemList, aF as saveProblemList, b as CircleCheck, aG as STAFF_ROLE_COLORS, a7 as RefreshCw, aa as Bell, C as ChevronUp, aH as loadVaccinationRecords, aI as saveVaccinationRecords, a6 as CircleX, T as Tabs, l as TabsList, n as TabsTrigger, p as TabsContent, af as Pill, ac as cn, ar as Root, aJ as Trigger, aK as useComposedRefs, aL as WarningProvider, as as Content, aM as composeEventHandlers, au as Title, aN as Description, at as Close, aO as createDialogScope, av as Portal, aw as Overlay, aP as createSlottable, aQ as createContextScope, aR as buttonVariants, q as useEmailAuth, S as Select, d as SelectTrigger, e as SelectValue, f as SelectContent, g as SelectItem, a2 as loadPatientRegistry, aS as loadComplaints, aT as loadAdviceEntries, aU as loadSubmissions, aV as useGetEncountersByPatient, aW as useGetClinicalNotesByPatient, ag as FlaskConical, aX as loadFamilyHistoryRisk, aY as saveComplaints, aZ as saveAdviceEntries, a_ as getPermissionsForRole, a$ as saveSubmissions, b0 as isSignUpEnabled, b1 as Switch, b2 as setSignUpEnabled, b3 as getPrescriptionHeaderImage, N as useRolePermissions, b4 as useGetPatient, b5 as useGetVisitsByPatient, b6 as useGetPrescriptionsByPatient, b7 as useUpdatePatient, aj as useCreateVisit, ak as useCreatePrescription, b8 as useDeletePatient, b9 as useDischargePatient } from "./index-DJeWhCy-.js";
import { S as ScrollArea } from "./scroll-area-DUDQuZCi.js";
import { S as Skeleton } from "./skeleton-DqU5IOMD.js";
import { C as Checkbox } from "./checkbox-ByWwQWzS.js";
import { m as millisecondsInHour, a as millisecondsInMinute, f as format } from "./format-C8K1a6Fc.js";
import { B as BedDouble } from "./bed-double-DSQN6_I2.js";
import { B as Building2 } from "./building-2-CMX9_teL.js";
import { T as Textarea } from "./textarea-BQiWEu5n.js";
import { C as ClipboardCheck, c as checkExtendedClinicalAlerts, b as checkTrendAlerts } from "./clinicalIntelligence-B4u_Xj_J.js";
import { a as buildReportReadyMessage, b as buildFollowUpMessage } from "./whatsappTemplates-BiipONU2.js";
import { B as BookOpen } from "./book-open-Bi6sJ5u3.js";
import { F as FileText } from "./file-text-DJrK52te.js";
import { A as Activity } from "./activity-BRRgo98q.js";
import { P as Plus } from "./plus-CHPIrJ6M.js";
import { P as Pen } from "./pen-CfMhwJvZ.js";
import { T as Trash2 } from "./trash-2-B3l-ZhdV.js";
import { D as DailyProgressNote } from "./DailyProgressNote-dVntCN7J.js";
import { L as Lock } from "./lock-BfuJZcFd.js";
import { P as Printer } from "./printer-BQUreT8L.js";
import { D as Download } from "./download-qc_8yQ5r.js";
import { l as loadTrackedInvestigations, b as computeComplaintTrends, i as isVaccineOverdue, I as InvestigationTracker, d as generateAIInterpretation, C as CurrentMedicationList, F as FirstPrescriptionLabel, P as PrescriptionDiffRow, V as ViewedByPatientBadge, e as getDoctorSignature, n as numberAdviceLines, f as clearDoctorSignature, s as setDoctorSignature, a as getPrescriptionHeaderHtml, h as getSignatureHtml, j as getPrescriptionHeaderText, U as UpgradedPrescriptionEMR } from "./UpgradedPrescriptionEMR-CvNofdGu.js";
import { A as ArrowRightLeft } from "./arrow-right-left-DxaL83fz.js";
import { d as differenceInDays, f as formatDistanceToNow } from "./formatDistanceToNow-C2IQJfe9.js";
import { M as MessageSquare } from "./message-square-gLkdQm4U.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CnbMZ7S8.js";
import { T as TrendingUp } from "./trending-up-B6DQx806.js";
import { I as InvestigationPayment } from "./InvestigationPayment-BfpQZUDn.js";
import { loadMedAdminRecords } from "./NurseDueMeds-C04LCd8h.js";
import { C as CircleAlert } from "./circle-alert-3N-VW3xt.js";
import { M as MessageCircle } from "./message-circle-qSON-RM2.js";
import { P as Phone } from "./phone-Co67JhRS.js";
import { E as Eye } from "./eye-DZPhoU57.js";
import { S as Send } from "./send-cdrsuHAc.js";
import { F as Funnel } from "./funnel-BTA0vRsb.js";
import { C as Calendar } from "./calendar-BL7xJRSg.js";
import { V as Video } from "./video-h2z_1vJH.js";
import { P as Pencil } from "./pencil-BZAaPpo6.js";
import { E as ExternalLink } from "./external-link-YRWS9f1T.js";
import { H as Heart } from "./heart-CnN_F_j3.js";
import { W as Wind, L as LineChart, C as CartesianGrid, a as Line } from "./SystemicExaminationSection-CCL-4QQD.js";
import { T as Thermometer } from "./thermometer-CrPE917O.js";
import { S as Search } from "./search-BLymxia-.js";
import { R as ResponsiveContainer, X as XAxis, Y as YAxis, z as Tooltip, E as Legend } from "./generateCategoricalChart-Dou_1HkF.js";
import { E as EyeOff } from "./test-tube-AQ_p65EL.js";
import { P as PatientForm } from "./PatientForm-BCKQSbNc.js";
import { U as Upload } from "./upload-10Urw3kY.js";
import { A as ArrowLeft } from "./arrow-left-D0QK_o3f.js";
import { M as MapPin } from "./map-pin-BVGvB4pd.js";
import { D as Droplets } from "./droplets-Dr40MrVb.js";
import { L as LogOut } from "./log-out-BVpvzsgE.js";
import "./BarChart-Ch6XFCj8.js";
import "./layers-DwYKTjmE.js";
import "./rotate-ccw-DEYXgLqp.js";
import "./shield-D-es88Nw.js";
import "./sun-7_ce8Kaj.js";
import "./save-DzMd4SiT.js";
import "./sparkles-BXWJULex.js";
import "./MoneyReceipt-CSWlD73e.js";
import "./receipt-DqXr-L3S.js";
import "./card-COhiAhz1.js";
import "./camera-DpsioLhp.js";
import "./user-plus-BJkC4ige.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$a = [
  ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5", key: "1u7htd" }],
  ["path", { d: "M15 12h.01", key: "1k8ypt" }],
  [
    "path",
    {
      d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
      key: "11xh7x"
    }
  ],
  ["path", { d: "M9 12h.01", key: "157uk2" }]
];
const Baby = createLucideIcon("baby", __iconNode$a);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$9 = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  ["path", { d: "M22 8c0-2.3-.8-4.3-2-6", key: "5bb3ad" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ],
  ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8", key: "tap9e0" }]
];
const BellRing = createLucideIcon("bell-ring", __iconNode$9);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$8 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
const CheckCheck = createLucideIcon("check-check", __iconNode$8);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$7 = [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }],
  ["path", { d: "M11 18H8a2 2 0 0 1-2-2V9", key: "19pyzm" }]
];
const GitCompare = createLucideIcon("git-compare", __iconNode$7);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$6 = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ],
  ["path", { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "1uw2ng" }]
];
const HeartPulse = createLucideIcon("heart-pulse", __iconNode$6);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
];
const Lightbulb = createLucideIcon("lightbulb", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }],
  ["path", { d: "M13 6h8", key: "15sg57" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 18h8", key: "oe0vm4" }]
];
const ListChecks = createLucideIcon("list-checks", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
];
const LockOpen = createLucideIcon("lock-open", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5", key: "1uzm8b" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const SquareCheckBig = createLucideIcon("square-check-big", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
];
const Square = createLucideIcon("square", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m18 2 4 4", key: "22kx64" }],
  ["path", { d: "m17 7 3-3", key: "1w1zoj" }],
  ["path", { d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5", key: "1exhtz" }],
  ["path", { d: "m9 11 4 4", key: "rovt3i" }],
  ["path", { d: "m5 19-3 3", key: "59f2uf" }],
  ["path", { d: "m14 4 6 6", key: "yqp9t2" }]
];
const Syringe = createLucideIcon("syringe", __iconNode);
function parseISO(argument, options) {
  const additionalDigits = 2;
  const dateStrings = splitDateString(argument);
  let date;
  if (dateStrings.date) {
    const parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  const timestamp = date.getTime();
  let time = 0;
  let offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return /* @__PURE__ */ new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return /* @__PURE__ */ new Date(NaN);
    }
  } else {
    const dirtyDate = new Date(timestamp + time);
    const result = /* @__PURE__ */ new Date(0);
    result.setFullYear(
      dirtyDate.getUTCFullYear(),
      dirtyDate.getUTCMonth(),
      dirtyDate.getUTCDate()
    );
    result.setHours(
      dirtyDate.getUTCHours(),
      dirtyDate.getUTCMinutes(),
      dirtyDate.getUTCSeconds(),
      dirtyDate.getUTCMilliseconds()
    );
    return result;
  }
  return new Date(timestamp + time + offset);
}
const patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
const dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
const timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
const timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  const dateStrings = {};
  const array = dateString.split(patterns.dateTimeDelimiter);
  let timeString;
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(
        dateStrings.date.length,
        dateString.length
      );
    }
  }
  if (timeString) {
    const token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  const regex = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)"
  );
  const captures = dateString.match(regex);
  if (!captures) return { year: NaN, restDateString: "" };
  const year = captures[1] ? parseInt(captures[1]) : null;
  const century = captures[2] ? parseInt(captures[2]) : null;
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  if (year === null) return /* @__PURE__ */ new Date(NaN);
  const captures = dateString.match(dateRegex);
  if (!captures) return /* @__PURE__ */ new Date(NaN);
  const isWeekDate = !!captures[4];
  const dayOfYear = parseDateUnit(captures[1]);
  const month = parseDateUnit(captures[2]) - 1;
  const day = parseDateUnit(captures[3]);
  const week = parseDateUnit(captures[4]);
  const dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    const date = /* @__PURE__ */ new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  const captures = timeString.match(timeRegex);
  if (!captures) return NaN;
  const hours = parseTimeUnit(captures[1]);
  const minutes = parseTimeUnit(captures[2]);
  const seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1e3;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === "Z") return 0;
  const captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  const sign = captures[1] === "+" ? -1 : 1;
  const hours = parseInt(captures[2]);
  const minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  const date = /* @__PURE__ */ new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  const fourthOfJanuaryDay = date.getUTCDay() || 7;
  const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
const daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}
function getDoctorSettings() {
  try {
    const email = getDoctorEmail$1();
    const raw = localStorage.getItem(`doctor_profile_${email}`);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
function AdmitPatientDialog({
  open,
  onClose,
  patient,
  patientId,
  viewerRole,
  doctorName,
  latestVisit,
  latestPrescription
}) {
  const settings = getDoctorSettings();
  const [hospitalName, setHospitalName] = reactExports.useState(
    (settings == null ? void 0 : settings.hospitalName) || ""
  );
  const [ward, setWard] = reactExports.useState("");
  const [bed, setBed] = reactExports.useState(
    patient.bedNumber || ""
  );
  const [admittedOn, setAdmittedOn] = reactExports.useState(
    format(/* @__PURE__ */ new Date(), "yyyy-MM-dd")
  );
  const [reason, setReason] = reactExports.useState("");
  const [selectedConsultantEmail, setSelectedConsultantEmail] = reactExports.useState("");
  const [carryComplaints, setCarryComplaints] = reactExports.useState(true);
  const [carryPMH, setCarryPMH] = reactExports.useState(true);
  const [carryDrugHistory, setCarryDrugHistory] = reactExports.useState(true);
  const [carryPrescriptions, setCarryPrescriptions] = reactExports.useState(true);
  const [carryDiagnosis, setCarryDiagnosis] = reactExports.useState(true);
  const admitMutation = useAdmitPatient();
  const consultants = loadRegistry().filter(
    (d) => d.status === "approved" && (d.role === "consultant_doctor" || d.role === "doctor")
  );
  const visitData = latestVisit ? getVisitFormData(latestVisit.id) : null;
  const extractedComplaints = (() => {
    if (!visitData) return [];
    const cc = visitData.chiefComplaint;
    if (typeof cc === "string" && cc) return [cc];
    if (latestVisit == null ? void 0 : latestVisit.chiefComplaint) return [latestVisit.chiefComplaint];
    return [];
  })();
  const extractedDiagnosis = (() => {
    const d = (visitData == null ? void 0 : visitData.diagnosis) || (latestVisit == null ? void 0 : latestVisit.diagnosis) || (latestPrescription == null ? void 0 : latestPrescription.diagnosis) || "";
    return d ? [d] : [];
  })();
  const extractedDrugHistory = (() => {
    if (!visitData) return [];
    const dh = visitData.drugHistory;
    if (Array.isArray(dh)) {
      return dh.map((d) => [d.name, d.dose, d.duration].filter(Boolean).join(" ")).filter(Boolean);
    }
    return [];
  })();
  const extractedPrescriptionIds = latestPrescription ? [latestPrescription.id.toString()] : [];
  const suggestedReason = extractedDiagnosis[0] || ((latestVisit == null ? void 0 : latestVisit.chiefComplaint) ? `For ${latestVisit.chiefComplaint}` : "");
  const handleAdmit = () => {
    if (!hospitalName.trim()) {
      ue.error("Please enter the hospital name");
      return;
    }
    if (!ward.trim()) {
      ue.error("Please enter the ward / unit");
      return;
    }
    if (!bed.trim()) {
      ue.error("Please enter the bed number");
      return;
    }
    const isIntern = viewerRole === "intern_doctor";
    const selectedConsultant = selectedConsultantEmail ? consultants.find((c) => c.email === selectedConsultantEmail) : null;
    admitMutation.mutate(
      {
        patientId,
        hospitalName: hospitalName.trim(),
        ward: ward.trim(),
        bed: bed.trim(),
        admittedOn: new Date(admittedOn).toISOString(),
        admittedBy: doctorName,
        admittedByRole: viewerRole ?? "consultant_doctor",
        reasonForAdmission: reason.trim() || suggestedReason,
        carriedOverComplaints: carryComplaints ? extractedComplaints : [],
        carriedOverDiagnosis: carryDiagnosis ? extractedDiagnosis : [],
        carriedOverDrugHistory: carryDrugHistory ? extractedDrugHistory : [],
        carriedOverPrescriptions: carryPrescriptions ? extractedPrescriptionIds : [],
        isIntern,
        ...selectedConsultant ? {
          consultantAssignment: {
            email: selectedConsultant.email,
            name: selectedConsultant.name,
            assignedAt: (/* @__PURE__ */ new Date()).toISOString(),
            assignedBy: getDoctorEmail$1()
          }
        } : {}
      },
      {
        onSuccess: () => {
          ue.success(
            isIntern ? "Admission created as draft — awaiting approval by Consultant or MO." : "Patient admitted successfully. Admission history created."
          );
          onClose();
        },
        onError: () => ue.error("Failed to admit patient. Please try again.")
      }
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      className: "max-w-lg max-h-[90vh] overflow-y-auto",
      "data-ocid": "admit_patient.dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2 text-blue-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-5 h-5 text-blue-600" }),
          "Admit Patient — ",
          patient.fullName
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-blue-800 text-sm flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4" }),
              " Hospital Details"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium text-blue-700", children: "Hospital Name *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: hospitalName,
                    onChange: (e) => setHospitalName(e.target.value),
                    placeholder: "e.g. Dhaka Medical College Hospital",
                    className: "mt-1",
                    "data-ocid": "admit_patient.hospital_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium text-blue-700", children: "Ward / Unit *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: ward,
                      onChange: (e) => setWard(e.target.value),
                      placeholder: "e.g. General Ward, ICU",
                      className: "mt-1",
                      "data-ocid": "admit_patient.ward_input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium text-blue-700", children: "Bed Number *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: bed,
                      onChange: (e) => setBed(e.target.value),
                      placeholder: "e.g. B-12",
                      className: "mt-1",
                      "data-ocid": "admit_patient.bed_input"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium text-blue-700", children: "Admission Date" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "date",
                      value: admittedOn,
                      onChange: (e) => setAdmittedOn(e.target.value),
                      className: "mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm",
                      "data-ocid": "admit_patient.date_input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium text-blue-700", children: "Admitting Doctor" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: doctorName,
                      readOnly: true,
                      className: "mt-1 bg-gray-50 text-gray-500"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium text-blue-700", children: "Reason for Admission" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: reason,
                    onChange: (e) => setReason(e.target.value),
                    placeholder: suggestedReason || "Enter reason for admission",
                    className: "mt-1",
                    "data-ocid": "admit_patient.reason_input"
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 border border-purple-200 rounded-xl p-4 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-purple-800 text-sm flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-4 h-4" }),
              " Assigned Consultant",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal text-purple-500 ml-1", children: "(optional)" })
            ] }),
            consultants.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-purple-500 italic", children: "No approved Consultant Doctors found in the system." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: selectedConsultantEmail,
                onChange: (e) => setSelectedConsultantEmail(e.target.value),
                className: "w-full border border-purple-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300",
                "data-ocid": "admit_patient.consultant_select",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "— Select Consultant (optional) —" }),
                  consultants.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: c.email, children: [
                    c.name,
                    c.designation ? ` — ${c.designation}` : ""
                  ] }, c.email))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 border border-green-200 rounded-xl p-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-green-800 text-sm flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-4 h-4" }),
              " Auto-carry from Outpatient Record"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600", children: "Checked items will be imported into the admission history." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: [
              {
                id: "carry-complaints",
                label: "Chief Complaints",
                checked: carryComplaints,
                onChange: setCarryComplaints,
                detail: extractedComplaints[0] || "—",
                enabled: extractedComplaints.length > 0
              },
              {
                id: "carry-pmh",
                label: "Past Medical History",
                checked: carryPMH,
                onChange: setCarryPMH,
                detail: "From latest visit",
                enabled: !!latestVisit
              },
              {
                id: "carry-drug-history",
                label: "Drug History",
                checked: carryDrugHistory,
                onChange: setCarryDrugHistory,
                detail: extractedDrugHistory.length > 0 ? `${extractedDrugHistory.length} drug(s) found` : "—",
                enabled: extractedDrugHistory.length > 0
              },
              {
                id: "carry-prescriptions",
                label: "Previous Prescriptions (latest)",
                checked: carryPrescriptions,
                onChange: setCarryPrescriptions,
                detail: latestPrescription ? latestPrescription.diagnosis || "Latest prescription" : "—",
                enabled: !!latestPrescription
              },
              {
                id: "carry-diagnosis",
                label: "Diagnosis",
                checked: carryDiagnosis,
                onChange: setCarryDiagnosis,
                detail: extractedDiagnosis[0] || "—",
                enabled: extractedDiagnosis.length > 0
              }
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `flex items-start gap-2.5 p-2 rounded-lg ${item.enabled ? "bg-white border border-green-100" : "bg-gray-50 border border-gray-100 opacity-60"}`,
                "data-ocid": `admit_patient.carry_over.${item.id}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      id: item.id,
                      checked: item.checked && item.enabled,
                      onCheckedChange: (v) => item.enabled && item.onChange(v === true),
                      disabled: !item.enabled,
                      className: "mt-0.5"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "label",
                    {
                      htmlFor: item.id,
                      className: "flex-1 cursor-pointer select-none",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-gray-700", children: item.label }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-0.5 truncate", children: item.detail })
                      ]
                    }
                  )
                ]
              },
              item.id
            )) })
          ] }),
          viewerRole === "intern_doctor" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm text-amber-800", children: [
            "⚠️ As an Intern, this admission will be saved as",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Draft – Awaiting Approval" }),
            " until a Consultant Doctor or Medical Officer reviews it."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: handleAdmit,
                disabled: admitMutation.isPending,
                className: "flex-1 bg-blue-600 hover:bg-blue-700 text-white gap-2 font-semibold",
                "data-ocid": "admit_patient.confirm_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-4 h-4" }),
                  admitMutation.isPending ? "Admitting..." : "Admit Patient"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                onClick: onClose,
                disabled: admitMutation.isPending,
                "data-ocid": "admit_patient.cancel_button",
                children: "Cancel"
              }
            )
          ] })
        ] })
      ]
    }
  ) });
}
const ADMISSION_HISTORY_PREFIX = "admissionHistory_";
function loadAdmissionHistory(patientId) {
  try {
    const raw = localStorage.getItem(`${ADMISSION_HISTORY_PREFIX}${patientId}`);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}
function loadDailyNoteEntries(doctorEmail, patientId) {
  const entries = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) continue;
      const prefix = `daily_note_${doctorEmail}_${patientId}_`;
      if (!key.startsWith(prefix)) continue;
      const date = key.slice(prefix.length);
      try {
        const raw = localStorage.getItem(key);
        if (!raw) continue;
        const data = JSON.parse(raw);
        entries.push({
          date,
          entryType: "Morning Round",
          authorName: "Clinical Staff",
          authorRole: "doctor",
          assessment: data.assessment || "",
          assessmentStatus: data.assessmentStatus || "Stable",
          chiefComplaintsToday: data.chiefComplaintsToday || "",
          activeDiagnoses: (data.activeDiagnoses || []).filter((d) => d.status === "active").map((d) => d.name),
          planItems: (data.planItems || []).map((p) => p.description)
        });
      } catch {
      }
    }
    entries.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch {
  }
  return entries;
}
function DailyProgressSubItem({
  entry
}) {
  const [expanded, setExpanded] = reactExports.useState(false);
  const statusColor = {
    Improving: "bg-green-100 text-green-700",
    Worsening: "bg-red-100 text-red-700",
    Stable: "bg-amber-100 text-amber-700"
  }[entry.assessmentStatus] ?? "bg-gray-100 text-gray-600";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border border-indigo-100 rounded-lg overflow-hidden",
      "data-ocid": "admission_timeline.progress_note_item",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setExpanded(!expanded),
            className: "w-full flex items-center justify-between px-4 py-2.5 bg-indigo-50/60 hover:bg-indigo-50 transition-colors text-left",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-3.5 h-3.5 text-indigo-500 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-gray-800", children: format(new Date(entry.date), "d MMM yyyy") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[10px] bg-indigo-100 text-indigo-700 border-0 px-1.5 py-0", children: entry.entryType }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        className: `text-[10px] border-0 px-1.5 py-0 ${statusColor}`,
                        children: entry.assessmentStatus
                      }
                    )
                  ] }),
                  entry.activeDiagnoses.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-0.5", children: entry.activeDiagnoses.slice(0, 2).join(" · ") })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-400 hidden sm:inline", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3 inline mr-1" }),
                  entry.authorName,
                  " ·",
                  " ",
                  STAFF_ROLE_LABELS[entry.authorRole] ?? entry.authorRole
                ] }),
                expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 text-gray-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-gray-400" })
              ] })
            ]
          }
        ),
        expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 space-y-3 bg-white", children: [
          entry.chiefComplaintsToday && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-blue-700 mb-1", children: "S — Subjective" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700", children: entry.chiefComplaintsToday })
          ] }),
          entry.assessment && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-amber-700 mb-1", children: "A — Assessment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 whitespace-pre-line", children: entry.assessment })
          ] }),
          entry.planItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-indigo-700 mb-1", children: "P — Plan" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5", children: entry.planItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "text-xs text-gray-600 flex items-start gap-1.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-indigo-400 mt-0.5", children: "•" }),
                  item
                ]
              },
              item
            )) })
          ] })
        ] })
      ]
    }
  );
}
function AdmissionGroupCard({
  record,
  progressNotes
}) {
  const [expanded, setExpanded] = reactExports.useState(true);
  const isLocked = record.status === "complete";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border rounded-xl overflow-hidden shadow-sm",
      style: { borderColor: isLocked ? "#d1d5db" : "#fcd34d" },
      "data-ocid": "admission_timeline.admission_group",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setExpanded(!expanded),
            className: `w-full flex items-center justify-between px-5 py-3.5 text-left transition-colors ${isLocked ? "bg-gray-50 hover:bg-gray-100" : "bg-amber-50 hover:bg-amber-100"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4 text-blue-600" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-sm text-gray-800", children: [
                      "Admission — ",
                      format(new Date(record.admittedOn), "d MMM yyyy")
                    ] }),
                    isLocked ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-xs bg-gray-100 text-gray-600 border border-gray-300", children: "Locked" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-xs bg-amber-100 text-amber-700 border border-amber-300", children: "Draft" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-0.5 flex-wrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-400", children: [
                      "By ",
                      record.admittedBy,
                      " ·",
                      " ",
                      STAFF_ROLE_LABELS[record.admittedByRole] ?? record.admittedByRole
                    ] }),
                    record.hospitalName && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-400", children: [
                      "📍 ",
                      record.hospitalName,
                      record.ward ? ` · Ward ${record.ward}` : "",
                      record.bed ? ` · Bed ${record.bed}` : ""
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 inline mr-1" }),
                  progressNotes.length,
                  " progress note",
                  progressNotes.length !== 1 ? "s" : ""
                ] }),
                expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-gray-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-gray-400" })
              ] })
            ]
          }
        ),
        expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-4 bg-white", children: [
          record.provisionalDiagnosis && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 border border-purple-200 rounded-lg px-3 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-purple-800 uppercase mb-1", children: "Provisional Diagnosis" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700", children: record.provisionalDiagnosis })
          ] }),
          record.chiefComplaints.some((c) => c.complaint) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg px-3 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-blue-800 uppercase mb-1", children: "Chief Complaints" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: record.chiefComplaints.filter((c) => c.complaint).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "text-xs bg-blue-100 text-blue-800 rounded-full px-2 py-0.5",
                children: [
                  c.complaint,
                  c.duration ? ` (${c.duration})` : ""
                ]
              },
              `${c.complaint}-${c.duration}`
            )) })
          ] }),
          record.initialPlan && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-indigo-50 border border-indigo-200 rounded-lg px-3 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-indigo-800 uppercase mb-1", children: "Initial Plan" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 whitespace-pre-line", children: record.initialPlan })
          ] }),
          progressNotes.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-gray-500 uppercase tracking-wide flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-3.5 h-3.5" }),
              "Daily Progress Notes (",
              progressNotes.length,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 pl-4 border-l-2 border-indigo-100", children: progressNotes.map((note) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              DailyProgressSubItem,
              {
                entry: note
              },
              `${note.date}-${note.entryType}`
            )) })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-4 bg-gray-50 rounded-lg border border-dashed border-gray-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-6 h-6 text-gray-300 mx-auto mb-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: "No daily progress notes recorded yet" })
          ] })
        ] })
      ]
    }
  );
}
function AdmissionTimeline({
  patientId,
  doctorEmail
}) {
  const admissions = loadAdmissionHistory(patientId);
  const progressNotes = loadDailyNoteEntries(doctorEmail, patientId);
  if (admissions.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-8 bg-white rounded-xl border border-blue-100",
        "data-ocid": "admission_timeline.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-8 h-8 text-gray-300 mx-auto mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400 font-medium", children: "No admissions on record" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-1", children: "Admission history is created when a patient is admitted." })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "admission_timeline.container", children: admissions.map((record) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    AdmissionGroupCard,
    {
      record,
      progressNotes
    },
    record.id
  )) });
}
const SOAP_ENTRY_TYPES = [
  "Morning Round",
  "Evening Round",
  "Emergency Note",
  "Night Round",
  "Consultant Review",
  "Nursing Note"
];
function ProblemListSection({
  patientId,
  doctorEmail,
  prescriptions,
  canEdit
}) {
  const [problems, setProblems] = reactExports.useState(
    () => loadProblemList(doctorEmail, String(patientId))
  );
  const [newProblem, setNewProblem] = reactExports.useState("");
  const [newStatus, setNewStatus] = reactExports.useState("active");
  const [editingId, setEditingId] = reactExports.useState(null);
  const [editText, setEditText] = reactExports.useState("");
  reactExports.useEffect(() => {
    const diagnosisSet = /* @__PURE__ */ new Set();
    for (const rx of prescriptions) {
      if (rx.diagnosis) {
        for (const d of rx.diagnosis.split(/[,|;]/)) {
          const trimmed = d.trim();
          if (trimmed) diagnosisSet.add(trimmed);
        }
      }
    }
    setProblems((prev) => {
      const existing = new Set(prev.map((p) => p.name.toLowerCase()));
      const newItems = [];
      for (const diag of diagnosisSet) {
        if (!existing.has(diag.toLowerCase())) {
          newItems.push({
            id: `auto_${Date.now().toString(36)}_${diag}`,
            name: diag,
            status: "active",
            source: "prescription"
          });
        }
      }
      if (newItems.length === 0) return prev;
      const merged = [...prev, ...newItems];
      saveProblemList(doctorEmail, String(patientId), merged);
      return merged;
    });
  }, [patientId, doctorEmail, prescriptions]);
  const linkedMedCount = reactExports.useMemo(() => {
    var _a, _b;
    const counts = {};
    for (const p of problems) {
      let count = 0;
      for (const rx of prescriptions) {
        if ((_a = rx.diagnosis) == null ? void 0 : _a.toLowerCase().includes(p.name.toLowerCase())) {
          count += ((_b = rx.medications) == null ? void 0 : _b.length) ?? 0;
        }
      }
      counts[p.id] = count;
    }
    return counts;
  }, [problems, prescriptions]);
  function addProblem() {
    if (!newProblem.trim()) return;
    const item = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2),
      name: newProblem.trim(),
      status: newStatus,
      source: "manual"
    };
    const updated = [...problems, item];
    setProblems(updated);
    saveProblemList(doctorEmail, String(patientId), updated);
    setNewProblem("");
    ue.success("Problem added");
  }
  function toggleStatus(id) {
    const updated = problems.map(
      (p) => p.id === id ? {
        ...p,
        status: p.status === "active" ? "resolved" : "active"
      } : p
    );
    setProblems(updated);
    saveProblemList(doctorEmail, String(patientId), updated);
  }
  function removeProblem(id) {
    const updated = problems.filter((p) => p.id !== id);
    setProblems(updated);
    saveProblemList(doctorEmail, String(patientId), updated);
  }
  function saveEdit(id) {
    if (!editText.trim()) return;
    const updated = problems.map(
      (p) => p.id === id ? { ...p, name: editText.trim() } : p
    );
    setProblems(updated);
    saveProblemList(doctorEmail, String(patientId), updated);
    setEditingId(null);
    setEditText("");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-violet-200 shadow-sm p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-violet-800 mb-4 flex items-center gap-2 text-base", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ListChecks, { className: "w-4 h-4" }),
      " Active Problem List",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-xs font-normal text-gray-400", children: [
        problems.filter((p) => p.status === "active").length,
        " active"
      ] })
    ] }),
    canEdit && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: newProblem,
          onChange: (e) => setNewProblem(e.target.value),
          placeholder: "Add problem (e.g. Typhoid Fever)",
          onKeyDown: (e) => e.key === "Enter" && addProblem(),
          className: "flex-1",
          "data-ocid": "patient_dashboard.daily_progress.problem_input"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          value: newStatus,
          onChange: (e) => setNewStatus(e.target.value),
          className: "border border-gray-200 rounded-lg px-2 py-1.5 text-sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "active", children: "Active" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "resolved", children: "Resolved" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          onClick: addProblem,
          className: "bg-violet-600 hover:bg-violet-700 text-white gap-1",
          "data-ocid": "patient_dashboard.daily_progress.add_problem_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
            " Add"
          ]
        }
      )
    ] }),
    problems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "text-sm text-gray-400 text-center py-4",
        "data-ocid": "patient_dashboard.daily_progress.problems_empty_state",
        children: "No problems recorded. They auto-fill from prescription diagnoses."
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: problems.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `flex items-center gap-3 rounded-lg px-3 py-2.5 border ${p.status === "active" ? "bg-red-50 border-red-200" : "bg-gray-50 border-gray-200"}`,
        "data-ocid": "patient_dashboard.daily_progress.problem_item",
        children: [
          editingId === p.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: editText,
              onChange: (e) => setEditText(e.target.value),
              className: "flex-1 h-7 text-sm",
              onKeyDown: (e) => {
                if (e.key === "Enter") saveEdit(p.id);
                if (e.key === "Escape") setEditingId(null);
              },
              autoFocus: true
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `flex-1 text-sm font-medium ${p.status === "resolved" ? "line-through text-gray-400" : "text-gray-800"}`,
              children: p.name
            }
          ),
          linkedMedCount[p.id] > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-indigo-600 bg-indigo-50 border border-indigo-200 px-1.5 py-0.5 rounded-full", children: [
            linkedMedCount[p.id],
            " med",
            linkedMedCount[p.id] !== 1 ? "s" : ""
          ] }),
          canEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => toggleStatus(p.id),
              className: `text-xs px-2 py-0.5 rounded-full border font-medium cursor-pointer transition-colors ${p.status === "active" ? "bg-green-100 text-green-700 border-green-200 hover:bg-green-200" : "bg-gray-100 text-gray-500 border-gray-200 hover:bg-gray-200"}`,
              "data-ocid": "patient_dashboard.daily_progress.problem_toggle",
              children: p.status === "active" ? "Active" : "Resolved"
            }
          ),
          canEdit && editingId !== p.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setEditingId(p.id);
                setEditText(p.name);
              },
              className: "text-gray-400 hover:text-gray-600",
              "data-ocid": "patient_dashboard.daily_progress.problem_edit_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3.5 h-3.5" })
            }
          ),
          editingId === p.id && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => saveEdit(p.id),
                className: "text-green-600 hover:text-green-800",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setEditingId(null),
                className: "text-gray-400 hover:text-gray-600",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
              }
            )
          ] }),
          canEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => removeProblem(p.id),
              className: "text-red-400 hover:text-red-600",
              "data-ocid": "patient_dashboard.daily_progress.problem_delete_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
            }
          )
        ]
      },
      p.id
    )) })
  ] });
}
function SoapCard({
  entry,
  canEdit,
  onEdit,
  onDelete
}) {
  const roleLabel = STAFF_ROLE_LABELS[entry.authorRole] ?? entry.authorRole;
  const roleColor = STAFF_ROLE_COLORS[entry.authorRole] ?? "bg-gray-100 text-gray-700 border-gray-200";
  const assessmentColor = entry.assessment === "Improving" ? "bg-green-100 text-green-700" : entry.assessment === "Worsening" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border border-slate-200 rounded-xl overflow-hidden",
      "data-ocid": "patient_dashboard.daily_progress.soap_card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 px-4 py-3 flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-slate-700 bg-slate-200 px-2 py-0.5 rounded-full", children: entry.entryType }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `text-xs border ${roleColor}`, children: roleLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-xs px-2 py-0.5 rounded-full font-semibold ${assessmentColor}`,
                children: entry.assessment
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: format(new Date(entry.timestamp), "MMM d, yyyy 'at' h:mm a") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500 font-medium", children: entry.authorName }),
            canEdit && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => onEdit(entry),
                  className: "text-blue-400 hover:text-blue-700 transition-colors",
                  "aria-label": "Edit entry",
                  "data-ocid": "patient_dashboard.daily_progress.soap_edit_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3.5 h-3.5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => onDelete(entry.id),
                  className: "text-red-400 hover:text-red-700 transition-colors",
                  "aria-label": "Delete entry",
                  "data-ocid": "patient_dashboard.daily_progress.soap_delete_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 grid grid-cols-1 md:grid-cols-2 gap-3", children: [
          {
            label: "S — Subjective",
            value: entry.subjective,
            color: "bg-blue-50 border-blue-200 text-blue-800"
          },
          {
            label: "O — Objective",
            value: entry.objective,
            color: "bg-teal-50 border-teal-200 text-teal-800"
          },
          {
            label: "A — Assessment",
            value: entry.assessment,
            color: `border ${assessmentColor}`
          },
          {
            label: "P — Plan",
            value: entry.plan,
            color: "bg-indigo-50 border-indigo-200 text-indigo-800"
          }
        ].map(({ label, value, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-lg p-3 border ${color}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold mb-1 opacity-70", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm whitespace-pre-line", children: value || "—" })
        ] }, label)) })
      ]
    }
  );
}
function DailyProgress({
  patientId,
  doctorEmail,
  currentRole,
  viewerRole,
  authorName,
  prescriptions,
  admissionDate: _admissionDate
}) {
  const canEdit = currentRole === "admin" || currentRole === "doctor" || viewerRole === "consultant_doctor" || viewerRole === "medical_officer" || viewerRole === "intern_doctor" || viewerRole === "nurse";
  const canWriteSOAP = viewerRole === "consultant_doctor" || viewerRole === "medical_officer" || viewerRole === "intern_doctor" || viewerRole === "doctor" || currentRole === "admin";
  const canDeleteOthers = currentRole === "admin" || viewerRole === "consultant_doctor";
  const [entries, setEntries] = reactExports.useState(
    () => loadDailyProgress(doctorEmail, String(patientId))
  );
  const [showForm, setShowForm] = reactExports.useState(false);
  const [editingEntry, setEditingEntry] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    entryType: "Morning Round",
    subjective: "",
    objective: "",
    assessment: "Stable",
    plan: ""
  });
  function resetForm() {
    setForm({
      entryType: "Morning Round",
      subjective: "",
      objective: "",
      assessment: "Stable",
      plan: ""
    });
    setEditingEntry(null);
    setShowForm(false);
  }
  function openEditForm(entry) {
    setEditingEntry(entry);
    setForm({
      entryType: entry.entryType,
      subjective: entry.subjective,
      objective: entry.objective,
      assessment: entry.assessment,
      plan: entry.plan
    });
    setShowForm(true);
  }
  function saveEntry() {
    if (!form.subjective.trim() && !form.objective.trim() && !form.plan.trim()) {
      ue.error("Please fill in at least one SOAP field");
      return;
    }
    if (editingEntry) {
      const updated = entries.map(
        (e) => e.id === editingEntry.id ? { ...e, ...form, editedAt: (/* @__PURE__ */ new Date()).toISOString() } : e
      );
      setEntries(updated);
      saveDailyProgress(doctorEmail, String(patientId), updated);
      appendAuditLog({
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        userRole: viewerRole,
        userName: authorName,
        action: "SOAP_ENTRY_EDITED",
        target: String(patientId)
      });
      ue.success("Entry updated");
    } else {
      const newEntry = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2),
        patientId: String(patientId),
        ...form,
        authorName,
        authorRole: viewerRole,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      };
      const updated = [newEntry, ...entries];
      setEntries(updated);
      saveDailyProgress(doctorEmail, String(patientId), updated);
      appendAuditLog({
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        userRole: viewerRole,
        userName: authorName,
        action: "SOAP_ENTRY_ADDED",
        target: String(patientId)
      });
      ue.success("SOAP entry added");
    }
    resetForm();
  }
  function deleteEntry(id) {
    const entry = entries.find((e) => e.id === id);
    const isOwn = (entry == null ? void 0 : entry.authorName) === authorName;
    if (!isOwn && !canDeleteOthers) {
      ue.error("You can only delete your own entries");
      return;
    }
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    saveDailyProgress(doctorEmail, String(patientId), updated);
    appendAuditLog({
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      userRole: viewerRole,
      userName: authorName,
      action: "SOAP_ENTRY_DELETED",
      target: String(patientId)
    });
    ue.success("Entry deleted");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProblemListSection,
      {
        patientId,
        doctorEmail,
        prescriptions,
        canEdit
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-slate-700 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-4 h-4" }),
        " Daily Progress Notes",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-normal text-gray-400", children: [
          entries.length,
          " entries"
        ] })
      ] }),
      canWriteSOAP && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          className: "bg-slate-700 hover:bg-slate-800 text-white gap-1.5",
          onClick: () => {
            setEditingEntry(null);
            setForm({
              entryType: "Morning Round",
              subjective: "",
              objective: "",
              assessment: "Stable",
              plan: ""
            });
            setShowForm(true);
          },
          "data-ocid": "patient_dashboard.daily_progress.add_entry_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
            " Add Entry"
          ]
        }
      )
    ] }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-slate-700 flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4" }),
          editingEntry ? "Edit SOAP Entry" : "New SOAP Entry"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: resetForm,
            className: "text-gray-400 hover:text-gray-600",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-slate-600", children: "Entry Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "select",
            {
              value: form.entryType,
              onChange: (e) => setForm((f) => ({
                ...f,
                entryType: e.target.value
              })),
              className: "w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300",
              "data-ocid": "patient_dashboard.daily_progress.entry_type_select",
              children: SOAP_ENTRY_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t, children: t }, t))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-slate-600", children: "Assessment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: form.assessment,
              onChange: (e) => setForm((f) => ({
                ...f,
                assessment: e.target.value
              })),
              className: "w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300",
              "data-ocid": "patient_dashboard.daily_progress.assessment_select",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Improving", children: "Improving ✅" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Stable", children: "Stable ⚠️" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Worsening", children: "Worsening 🔴" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-blue-600", children: "S — Subjective (patient complaints, pain, fever, breathing)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: form.subjective,
            onChange: (e) => setForm((f) => ({ ...f, subjective: e.target.value })),
            placeholder: "Patient reports: headache, fever for 2 days, breathing difficulty on exertion...",
            rows: 3,
            className: "mt-1 border-blue-200 focus-visible:ring-blue-300",
            "data-ocid": "patient_dashboard.daily_progress.soap_subjective"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-teal-600", children: "O — Objective (vitals, urine output, labs)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: form.objective,
            onChange: (e) => setForm((f) => ({ ...f, objective: e.target.value })),
            placeholder: "BP: 120/80 mmHg, Pulse: 88 bpm, Temp: 37.2°F, SpO₂: 97%, Urine output: 50ml/hr...",
            rows: 3,
            className: "mt-1 border-teal-200 focus-visible:ring-teal-300",
            "data-ocid": "patient_dashboard.daily_progress.soap_objective"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-indigo-600", children: "P — Plan (treatment changes, next steps)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: form.plan,
            onChange: (e) => setForm((f) => ({ ...f, plan: e.target.value })),
            placeholder: "Continue antibiotics, add IV fluids, repeat CBC tomorrow, consult nephrology if Cr rises...",
            rows: 3,
            className: "mt-1 border-indigo-200 focus-visible:ring-indigo-300",
            "data-ocid": "patient_dashboard.daily_progress.soap_plan"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-100 rounded-lg px-3 py-2 text-xs text-slate-600 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5 text-slate-500" }),
        "Entry by ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: authorName }),
        " (",
        STAFF_ROLE_LABELS[viewerRole] ?? viewerRole,
        ") —",
        " ",
        format(/* @__PURE__ */ new Date(), "MMM d, yyyy 'at' h:mm a")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: saveEntry,
            className: "bg-slate-700 hover:bg-slate-800 text-white",
            "data-ocid": "patient_dashboard.daily_progress.save_entry_button",
            children: editingEntry ? "Update Entry" : "Save Entry"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: resetForm, children: "Cancel" })
      ] })
    ] }),
    entries.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-10 bg-white rounded-xl border border-slate-200",
        "data-ocid": "patient_dashboard.daily_progress.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-10 h-10 text-slate-300 mx-auto mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400", children: "No daily progress entries yet." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-300 mt-1", children: "Click + Add Entry to get started." })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: entries.map((entry) => {
      const isOwn = entry.authorName === authorName;
      const canEditThis = canEdit && (isOwn || canDeleteOthers);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        SoapCard,
        {
          entry,
          canEdit: canEditThis,
          onEdit: openEditForm,
          onDelete: deleteEntry
        },
        entry.id
      );
    }) })
  ] });
}
const CHECKLIST_ITEMS = [
  { label: "Medications written", key: "meds" },
  { label: "Advice given", key: "advice" },
  { label: "Follow-up appointment booked", key: "followup" },
  { label: "Patient educated", key: "educated" }
];
function formatDate(ts) {
  return format(new Date(Number(ts / 1000000n)), "d MMM yyyy");
}
function getDoctorEmail() {
  try {
    const raw = localStorage.getItem("staff_auth");
    if (raw) return JSON.parse(raw).email ?? "default";
  } catch {
  }
  return "default";
}
function loadAdmissionDate(patientId) {
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!(k == null ? void 0 : k.startsWith("admissionHistory_"))) continue;
      const arr = JSON.parse(localStorage.getItem(k) ?? "[]");
      const active = arr.find(
        (a) => String(a.patientId) === patientId && a.status === "active"
      );
      if (active == null ? void 0 : active.admittedOn) return active.admittedOn;
    }
  } catch {
  }
  return null;
}
function loadProcedureLogs$1(patientId) {
  try {
    const raw = localStorage.getItem(`procedureLogs_${patientId}`);
    if (!raw) return "No major procedures documented.";
    const logs = JSON.parse(raw);
    if (!logs.length) return "No major procedures documented.";
    return logs.map(
      (l) => `${l.name ?? "Procedure"}${l.date ? ` (${l.date})` : ""}${l.outcome ? ` — ${l.outcome}` : ""}`
    ).join("; ");
  } catch {
    return "No major procedures documented.";
  }
}
function loadSOAPSummary(patientId, notes) {
  const soap = notes.filter((n) => n.noteType === "SOAP" || n.noteType === "DailyProgress").sort((a, b) => Number(b.createdAt - a.createdAt)).slice(0, 3);
  if (soap.length > 0) {
    return soap.map((n) => {
      try {
        const parsed = JSON.parse(n.content);
        const dateStr = format(
          new Date(Number(n.createdAt / 1000000n)),
          "d MMM"
        );
        return `${dateStr}: ${parsed.plan ?? parsed.assessment ?? n.content.slice(0, 100)}`;
      } catch {
        return n.content.slice(0, 100);
      }
    }).join(". ");
  }
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!(k == null ? void 0 : k.includes("soapNote")) && !(k == null ? void 0 : k.includes("daily_progress"))) continue;
      const arr = JSON.parse(localStorage.getItem(k) ?? "[]");
      const relevant = arr.filter((n) => String(n.patientId) === patientId).slice(-3);
      if (relevant.length > 0)
        return relevant.map((n) => `${n.date ?? ""}: ${n.plan ?? ""}`).join(". ");
    }
  } catch {
  }
  return "Clinical course under review.";
}
function DischargeSummaryTab({
  patient,
  visits,
  prescriptions,
  encounters,
  clinicalNotes,
  canApproveDischarge,
  onApproveDischarge
}) {
  var _a;
  const sortedVisits = [...visits].sort(
    (a, b) => Number(b.visitDate - a.visitDate)
  );
  const latestVisit = sortedVisits[0] ?? null;
  const latestRx = prescriptions.length ? [...prescriptions].sort(
    (a, b) => Number(b.prescriptionDate - a.prescriptionDate)
  )[0] : null;
  const activeEncounter = encounters.find((e) => e.status === "InProgress") ?? encounters[0];
  const age = patient.dateOfBirth ? Math.floor(
    (Date.now() - Number(patient.dateOfBirth / 1000000n)) / (365.25 * 24 * 3600 * 1e3)
  ) : null;
  const patientId = String(patient.id);
  const doctorEmail = getDoctorEmail();
  const savedKey = `dischargeSummaries_${doctorEmail}_${patientId}`;
  const existingSaved = (() => {
    try {
      const raw = localStorage.getItem(savedKey);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  })();
  const [generated, setGenerated] = reactExports.useState(!!existingSaved);
  const [finalized, setFinalized] = reactExports.useState(!!(existingSaved == null ? void 0 : existingSaved.finalizedAt));
  const [admissionDate, setAdmissionDate] = reactExports.useState(
    (existingSaved == null ? void 0 : existingSaved.admissionDate) ?? loadAdmissionDate(patientId) ?? (activeEncounter ? formatDate(activeEncounter.startDate) : "")
  );
  const [dischargeDate, setDischargeDate] = reactExports.useState(
    (existingSaved == null ? void 0 : existingSaved.dischargeDate) ?? (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  );
  const [admittingDiagnosis, setAdmittingDiagnosis] = reactExports.useState(
    (existingSaved == null ? void 0 : existingSaved.admittingDiagnosis) ?? (sortedVisits.length > 1 ? ((_a = sortedVisits[sortedVisits.length - 1]) == null ? void 0 : _a.diagnosis) ?? "—" : (latestVisit == null ? void 0 : latestVisit.diagnosis) ?? "—")
  );
  const [finalDiagnosis, setFinalDiagnosis] = reactExports.useState(
    (existingSaved == null ? void 0 : existingSaved.finalDiagnosis) ?? (latestVisit == null ? void 0 : latestVisit.diagnosis) ?? "—"
  );
  const [proceduresText, setProceduresText] = reactExports.useState(
    (existingSaved == null ? void 0 : existingSaved.proceduresText) ?? loadProcedureLogs$1(patientId)
  );
  const [hospitalCourse, setHospitalCourse] = reactExports.useState(
    (existingSaved == null ? void 0 : existingSaved.hospitalCourse) ?? loadSOAPSummary(patientId, clinicalNotes)
  );
  const [followUpDate, setFollowUpDate] = reactExports.useState(
    (existingSaved == null ? void 0 : existingSaved.followUpDate) ?? ""
  );
  const [adviceText, setAdviceText] = reactExports.useState(
    (existingSaved == null ? void 0 : existingSaved.adviceText) ?? (latestRx == null ? void 0 : latestRx.notes) ?? "Continue prescribed medications. Maintain follow-up schedule."
  );
  const [checklist, setChecklist] = reactExports.useState({
    meds: !!(latestRx == null ? void 0 : latestRx.medications.length),
    advice: true,
    followup: false,
    educated: true
  });
  const losText = (() => {
    try {
      if (admissionDate && dischargeDate) {
        const start = new Date(admissionDate).getTime();
        const end = new Date(dischargeDate).getTime();
        const days = Math.round((end - start) / 864e5);
        return `${days} day${days !== 1 ? "s" : ""}`;
      }
    } catch {
    }
    return "—";
  })();
  function getInvRows() {
    const rows = [];
    for (const v of sortedVisits) {
      try {
        const raw = localStorage.getItem(
          `visit_form_data_${v.id}_${doctorEmail}`
        );
        if (!raw) continue;
        const data = JSON.parse(raw);
        if (Array.isArray(data.previous_investigation_rows)) {
          rows.push(...data.previous_investigation_rows.slice(0, 3));
        }
      } catch {
      }
    }
    return rows.slice(0, 6);
  }
  const invRows = getInvRows();
  const toggleCheck = (key) => setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  function handleGenerate() {
    const admDate = loadAdmissionDate(patientId);
    if (admDate) setAdmissionDate(admDate);
    const soapSummary = loadSOAPSummary(patientId, clinicalNotes);
    setHospitalCourse(soapSummary);
    setProceduresText(loadProcedureLogs$1(patientId));
    setGenerated(true);
    ue.success("Discharge summary generated from patient data");
  }
  function handleFinalize() {
    const summary = {
      diagnosisSummary: finalDiagnosis,
      admittingDiagnosis,
      finalDiagnosis,
      proceduresText,
      hospitalCourse,
      adviceText,
      followUpDate,
      dischargeDate,
      admissionDate,
      losText,
      finalizedAt: (/* @__PURE__ */ new Date()).toISOString(),
      finalizedBy: doctorEmail
    };
    try {
      localStorage.setItem(savedKey, JSON.stringify(summary));
    } catch {
    }
    setFinalized(true);
    ue.success("Discharge summary finalized and saved");
  }
  function printSummary() {
    const meds = (latestRx == null ? void 0 : latestRx.medications.length) ? latestRx.medications.map((m, i) => {
      const form = m.drugForm ?? "";
      const name = m.drugName || m.name;
      const line1 = `${i + 1}. ${form} ${name} ${m.dose}`.trim();
      const line2 = `&nbsp;&nbsp;${m.frequency} – ${m.duration}${m.instructions ? ` – ${m.instructions}` : ""}`;
      return `<p style="margin:2px 0 6px 12px">${line1}<br/><small style="color:#555">${line2}</small></p>`;
    }).join("") : "<p>No medications</p>";
    const invTable = invRows.length ? `<table border="1" cellpadding="5" cellspacing="0" style="width:100%;border-collapse:collapse;font-size:10pt">
          <thead><tr style="background:#f0f9ff"><th>Date</th><th>Investigation</th><th>Result</th><th>Unit</th></tr></thead>
          <tbody>${invRows.map((r) => `<tr><td>${r.date}</td><td>${r.name}</td><td>${r.result}</td><td>${r.unit ?? "—"}</td></tr>`).join("")}</tbody>
        </table>` : "<p>No investigations recorded</p>";
    const win = window.open("", "_blank");
    if (!win) {
      ue.error("Popup blocked");
      return;
    }
    win.document.write(`<!DOCTYPE html><html><head><title>Discharge Summary - ${patient.fullName}</title>
      <style>
        body{font-family:Georgia,serif;font-size:11pt;padding:24px;max-width:800px;margin:0 auto}
        h1{font-size:16pt;color:#0f766e;margin-bottom:4px}
        h2{font-size:12pt;color:#374151;margin:16px 0 6px;border-bottom:1px solid #e5e7eb;padding-bottom:4px}
        p{margin:4px 0;line-height:1.5}
        table{width:100%;border-collapse:collapse}
        th,td{border:1px solid #ccc;padding:6px 8px;text-align:left}
        th{background:#f9f9f9}
        .locked{color:#065f46;font-size:9pt}
        @media print{@page{margin:1.5cm}}
      </style></head>
      <body>
        <h1>Discharge Summary${finalized ? ' <span class="locked">✓ FINALIZED</span>' : ""}</h1>
        <p><strong>Patient:</strong> ${patient.fullName} | <strong>Reg No:</strong> ${patient.registerNumber ?? "—"} | <strong>Age/Sex:</strong> ${age ?? "—"} yrs / ${patient.gender}</p>
        <p><strong>Admission Date:</strong> ${admissionDate || "—"} | <strong>Discharge Date:</strong> ${dischargeDate} | <strong>Length of Stay:</strong> ${losText}</p>
        <h2>1. Diagnosis</h2>
        <p><strong>Admitting Diagnosis:</strong> ${admittingDiagnosis}</p>
        <p><strong>Final Diagnosis:</strong> ${finalDiagnosis}</p>
        <h2>2. Procedures Performed</h2><p>${proceduresText}</p>
        <h2>3. Hospital Course</h2><p>${hospitalCourse}</p>
        <h2>4. Discharge Medications</h2>${meds}
        <h2>5. Key Investigations</h2>${invTable}
        <h2>6. Follow-up Plan</h2><p>${followUpDate ? `Follow-up date: ${format(new Date(followUpDate), "d MMMM yyyy")}` : "Follow-up date to be arranged."}</p>
        <h2>7. Advice</h2><p>${adviceText}</p>
        <div style="margin-top:40px;display:flex;justify-content:space-between">
          <div><p>_____________________</p><p>Doctor's Signature &amp; Stamp</p></div>
          <div><p>_____________________</p><p>Date</p></div>
        </div>
        ${finalized ? `<p style="margin-top:16px;font-size:9pt;color:#6b7280">Finalized on ${new Date((existingSaved == null ? void 0 : existingSaved.finalizedAt) ?? "").toLocaleDateString()} by ${(existingSaved == null ? void 0 : existingSaved.finalizedBy) ?? doctorEmail}</p>` : ""}
      </body></html>`);
    win.document.close();
    win.focus();
    win.print();
    ue.success("Discharge summary sent to print");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-4", "data-ocid": "discharge_summary.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardCheck, { className: "w-5 h-5 text-teal-600" }),
          "Discharge Summary",
          finalized && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-emerald-100 text-emerald-700 border-emerald-200 text-[10px] ml-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3 h-3 mr-0.5" }),
            " Finalized"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: finalized ? "Locked — print or download below" : "Auto-generated — edit before finalizing" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        !generated && canApproveDischarge && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "gap-1.5 bg-teal-600 hover:bg-teal-700 text-white",
            onClick: handleGenerate,
            "data-ocid": "discharge_summary.generate_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5" }),
              "Generate Summary"
            ]
          }
        ),
        generated && !finalized && canApproveDischarge && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "gap-1.5",
              onClick: handleGenerate,
              "data-ocid": "discharge_summary.regenerate_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5" }),
                " Re-generate"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white",
              onClick: handleFinalize,
              "data-ocid": "discharge_summary.finalize_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3.5 h-3.5" }),
                " Finalize"
              ]
            }
          )
        ] }),
        finalized && canApproveDischarge && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "gap-1.5",
            onClick: () => {
              setFinalized(false);
              ue.info("Summary unlocked for editing");
            },
            "data-ocid": "discharge_summary.unlock_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LockOpen, { className: "w-3.5 h-3.5" }),
              " Unlock"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "gap-1.5",
            onClick: printSummary,
            "data-ocid": "discharge_summary.print_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3.5 h-3.5" }),
              " Print"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "gap-1.5",
            onClick: printSummary,
            "data-ocid": "discharge_summary.download_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
              " PDF"
            ]
          }
        ),
        canApproveDischarge && onApproveDischarge && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "gap-1.5 bg-teal-600 hover:bg-teal-700 text-white",
            onClick: onApproveDischarge,
            "data-ocid": "discharge_summary.approve_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardCheck, { className: "w-3.5 h-3.5" }),
              " Approve Discharge"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-teal-50 border border-teal-200 rounded-xl px-4 py-3 grid grid-cols-2 sm:grid-cols-4 gap-y-1 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Patient:" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: patient.fullName })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Age/Sex:" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
          age ?? "—",
          " yrs / ",
          patient.gender
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Reg No:" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-semibold", children: patient.registerNumber ?? "—" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "LOS:" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: losText })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-l-blue-400 pl-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1", children: "Admission Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            disabled: finalized,
            className: "w-full text-sm border border-input rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-background disabled:opacity-70",
            value: admissionDate,
            onChange: (e) => setAdmissionDate(e.target.value),
            "data-ocid": "discharge_summary.admission_date.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-l-teal-400 pl-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1", children: "Discharge Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "date",
            disabled: finalized,
            className: "w-full text-sm border border-input rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-background disabled:opacity-70",
            value: dischargeDate,
            onChange: (e) => setDischargeDate(e.target.value),
            "data-ocid": "discharge_summary.discharge_date.input"
          }
        )
      ] })
    ] }),
    [
      {
        label: "1. Admitting Diagnosis",
        value: admittingDiagnosis,
        setter: setAdmittingDiagnosis,
        color: "border-l-indigo-400",
        key: "admitting_diagnosis"
      },
      {
        label: "2. Final Diagnosis",
        value: finalDiagnosis,
        setter: setFinalDiagnosis,
        color: "border-l-blue-400",
        key: "final_diagnosis"
      },
      {
        label: "3. Procedures Performed",
        value: proceduresText,
        setter: setProceduresText,
        color: "border-l-purple-400",
        key: "procedures"
      }
    ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border-l-4 pl-3 ${s.color}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1", children: s.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          disabled: finalized,
          className: "w-full text-sm border border-input rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-background disabled:opacity-70",
          value: s.value,
          onChange: (e) => s.setter(e.target.value),
          "data-ocid": `discharge_summary.${s.key}.input`
        }
      )
    ] }, s.key)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-l-amber-400 pl-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1", children: "4. Hospital Course (from SOAP notes)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          disabled: finalized,
          className: "w-full text-sm border border-input rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 bg-background disabled:opacity-70",
          rows: 3,
          value: hospitalCourse,
          onChange: (e) => setHospitalCourse(e.target.value),
          "data-ocid": "discharge_summary.course.input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-l-teal-400 pl-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2", children: "5. Discharge Medications" }),
      (latestRx == null ? void 0 : latestRx.medications.length) ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: latestRx.medications.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-teal-50 border border-teal-100 rounded-lg px-3 py-2 text-sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
              i + 1,
              ".",
              " ",
              m.drugForm ?? "",
              " ",
              m.drugName || m.name,
              " ",
              m.dose
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground ml-2", children: [
              "— ",
              m.frequency,
              " × ",
              m.duration
            ] })
          ]
        },
        `${m.name}-${i}`
      )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic", children: "No active medications." })
    ] }),
    invRows.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-l-amber-400 pl-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2", children: "6. Key Investigations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs border-collapse", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-amber-50", children: ["Date", "Investigation", "Result", "Unit"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "th",
          {
            className: "text-left py-1.5 px-2 text-amber-700 font-semibold border border-amber-100",
            children: h
          },
          h
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: invRows.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: i % 2 === 0 ? "bg-background" : "bg-amber-50/30",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 px-2 border border-amber-100", children: r.date || "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 px-2 border border-amber-100 font-medium", children: r.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 px-2 border border-amber-100", children: r.result }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 px-2 border border-amber-100", children: r.unit ?? "—" })
            ]
          },
          `${r.name}-${i}`
        )) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-l-indigo-400 pl-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1", children: "7. Follow-up Plan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "date",
          disabled: finalized,
          className: "border border-input rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-background disabled:opacity-70",
          value: followUpDate,
          onChange: (e) => setFollowUpDate(e.target.value),
          "data-ocid": "discharge_summary.followup.input"
        }
      ),
      followUpDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-teal-700 mt-1 font-medium", children: [
        "Follow-up on ",
        format(new Date(followUpDate), "d MMMM yyyy")
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-l-emerald-400 pl-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1", children: "8. Discharge Advice" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          disabled: finalized,
          className: "w-full text-sm border border-input rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 bg-background disabled:opacity-70",
          rows: 2,
          value: adviceText,
          onChange: (e) => setAdviceText(e.target.value),
          "data-ocid": "discharge_summary.advice.input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 border border-border rounded-xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3", children: "Discharge Checklist" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: CHECKLIST_ITEMS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "flex items-center gap-2.5 w-full text-left",
          onClick: () => !finalized && toggleCheck(item.key),
          "data-ocid": `discharge_summary.checklist.${item.key}`,
          children: [
            checklist[item.key] ? /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-4 h-4 text-teal-600 shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "w-4 h-4 text-muted-foreground shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-sm ${checklist[item.key] ? "text-teal-700 line-through opacity-70" : "text-foreground"}`,
                children: item.label
              }
            )
          ]
        },
        item.key
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Badge,
        {
          className: `${Object.values(checklist).every(Boolean) ? "bg-teal-100 text-teal-700" : "bg-amber-100 text-amber-700"} border-0 text-xs`,
          children: [
            Object.values(checklist).filter(Boolean).length,
            "/",
            CHECKLIST_ITEMS.length,
            " complete"
          ]
        }
      ) })
    ] })
  ] });
}
function playAlarmTone() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(1e-3, ctx.currentTime + 1.2);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 1.2);
  } catch {
  }
}
const UNREAD_KEY = (email) => `handover_unread_comments_${email}`;
function getUnreadCommentIds(email) {
  try {
    const raw = localStorage.getItem(UNREAD_KEY(email));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function addUnreadCommentId(email, commentId) {
  const existing = getUnreadCommentIds(email);
  if (!existing.includes(commentId)) {
    existing.push(commentId);
    localStorage.setItem(UNREAD_KEY(email), JSON.stringify(existing));
  }
}
function markCommentRead(email, commentId) {
  const existing = getUnreadCommentIds(email).filter((id) => id !== commentId);
  localStorage.setItem(UNREAD_KEY(email), JSON.stringify(existing));
}
const DOCS_KEY = (patientId) => `handover_docs_${patientId}`;
function loadDocs(patientId) {
  try {
    const raw = localStorage.getItem(DOCS_KEY(patientId));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveDocs(patientId, docs) {
  try {
    localStorage.setItem(DOCS_KEY(patientId), JSON.stringify(docs));
  } catch {
  }
}
function detectShift() {
  const h = (/* @__PURE__ */ new Date()).getHours();
  if (h >= 6 && h < 14) return "Morning";
  if (h >= 14 && h < 22) return "Evening";
  return "Night";
}
function shiftDefaults(shift) {
  if (shift === "Morning") return { start: "06:00", end: "14:00" };
  if (shift === "Evening") return { start: "14:00", end: "22:00" };
  return { start: "22:00", end: "06:00" };
}
function shiftEmoji(shift) {
  return shift === "Morning" ? "🌅" : shift === "Evening" ? "🌆" : "🌙";
}
function shiftBadgeCls(shift) {
  if (shift === "Morning")
    return "bg-amber-100 text-amber-800 border-amber-300";
  if (shift === "Evening")
    return "bg-indigo-100 text-indigo-800 border-indigo-300";
  return "bg-slate-100 text-slate-700 border-slate-300";
}
function calcMAP$1(bp) {
  const m = bp.match(/(\d+)\s*\/\s*(\d+)/);
  if (!m) return "";
  const sys = Number.parseInt(m[1], 10);
  const dia = Number.parseInt(m[2], 10);
  return String(Math.round(dia + (sys - dia) / 3));
}
function isVitalAbnormal(key, value) {
  if (!value) return false;
  const n = Number.parseFloat(value);
  if (Number.isNaN(n)) return false;
  switch (key) {
    case "spo2":
      return n < 90;
    case "pulse":
      return n > 100 || n < 60;
    case "rr":
      return n > 30;
    case "temp":
      return n > 38.5 || n < 36;
    case "map":
      return n < 65;
    default:
      if (key === "bp") {
        const m = value.match(/(\d+)/);
        if (m) return Number.parseInt(m[1], 10) < 90;
      }
      return false;
  }
}
function SectionHeader({
  color,
  title,
  icon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `px-4 py-2 font-bold text-sm flex items-center gap-2 ${color}`,
      children: [
        icon,
        title
      ]
    }
  );
}
function ShiftEditor({
  shift,
  shiftStart,
  shiftEnd,
  onChangeShift,
  onChangeStart,
  onChangeEnd
}) {
  const [editing, setEditing] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold ${shiftBadgeCls(shift)}`,
        children: [
          shiftEmoji(shift),
          " ",
          shift,
          " Shift · ",
          shiftStart,
          "–",
          shiftEnd,
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setEditing(!editing),
              className: "ml-1 hover:opacity-70 transition-opacity",
              title: "Edit shift times",
              "data-ocid": "handover.shift_edit_button",
              children: "✏️"
            }
          )
        ]
      }
    ),
    editing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-white border border-amber-200 rounded-lg px-3 py-2 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 items-center", children: ["Morning", "Evening", "Night"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            onChangeShift(s);
            const d = shiftDefaults(s);
            onChangeStart(d.start);
            onChangeEnd(d.end);
          },
          className: `px-2 py-1 rounded text-xs font-medium border transition-all ${shift === s ? "bg-amber-500 text-white border-amber-500" : "bg-white text-gray-600 border-gray-200 hover:border-amber-300"}`,
          children: [
            shiftEmoji(s),
            " ",
            s
          ]
        },
        s
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "time",
          value: shiftStart,
          onChange: (e) => onChangeStart(e.target.value),
          className: "border border-gray-200 rounded px-2 py-1 text-xs"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: "to" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "time",
          value: shiftEnd,
          onChange: (e) => onChangeEnd(e.target.value),
          className: "border border-gray-200 rounded px-2 py-1 text-xs"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setEditing(false),
          className: "text-xs text-green-600 font-semibold hover:underline",
          children: "Done"
        }
      )
    ] })
  ] });
}
function ActionItemsEditor({
  items,
  onChange
}) {
  function add() {
    onChange([
      ...items,
      {
        id: `ai_${Date.now()}`,
        description: "",
        priority: "Routine",
        dueTime: "",
        assignedRole: "nurse",
        done: false
      }
    ]);
  }
  function update(idx, patch) {
    const next = [...items];
    next[idx] = { ...next[idx], ...patch };
    onChange(next);
  }
  function remove(idx) {
    onChange(items.filter((_, i) => i !== idx));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "grid grid-cols-1 sm:grid-cols-[1fr_auto_auto_auto_auto] gap-2 items-center bg-white border border-amber-100 rounded-lg px-3 py-2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: item.description,
              onChange: (e) => update(i, { description: e.target.value }),
              placeholder: "Task description...",
              className: "text-sm border-0 shadow-none p-0 h-auto focus-visible:ring-0",
              "data-ocid": `handover.action_item.${i + 1}`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: item.priority,
              onChange: (e) => update(i, { priority: e.target.value }),
              className: `text-xs border rounded px-2 py-1 font-semibold ${item.priority === "Urgent" ? "border-red-300 text-red-700 bg-red-50" : "border-gray-200 text-gray-600 bg-white"}`,
              "data-ocid": `handover.action_priority.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Urgent", children: "🔴 Urgent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Routine", children: "🟢 Routine" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "time",
              value: item.dueTime,
              onChange: (e) => update(i, { dueTime: e.target.value }),
              className: "text-xs border border-gray-200 rounded px-2 py-1"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: item.assignedRole,
              onChange: (e) => update(i, { assignedRole: e.target.value }),
              placeholder: "Role",
              className: "text-xs w-24"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => remove(i),
              className: "text-red-400 hover:text-red-600",
              "data-ocid": `handover.action_item.delete.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
            }
          )
        ]
      },
      item.id
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        size: "sm",
        variant: "outline",
        className: "gap-1 border-amber-300 text-amber-700 bg-white",
        onClick: add,
        "data-ocid": "handover.add_action_button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
          " Add Action Item"
        ]
      }
    )
  ] });
}
function PendingTasksEditor({
  tasks,
  onChange
}) {
  function add() {
    onChange([
      ...tasks,
      {
        id: `pt_${Date.now()}`,
        taskName: "",
        taskType: "investigation",
        orderedBy: "",
        dateOrdered: format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"),
        status: "Pending"
      }
    ]);
  }
  function update(idx, patch) {
    const next = [...tasks];
    next[idx] = { ...next[idx], ...patch };
    onChange(next);
  }
  function remove(idx) {
    onChange(tasks.filter((_, i) => i !== idx));
  }
  const typeColors = {
    investigation: "bg-amber-50 text-amber-700 border-amber-200",
    procedure: "bg-blue-50 text-blue-700 border-blue-200",
    medication: "bg-teal-50 text-teal-700 border-teal-200",
    missed_dose: "bg-red-50 text-red-700 border-red-200"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    tasks.map((task, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `grid grid-cols-1 sm:grid-cols-[1fr_auto_auto_auto_auto] gap-2 items-center rounded-lg border px-3 py-2 ${typeColors[task.taskType]} ${task.carriedOver ? "border-l-4 border-l-orange-500" : ""}`,
        children: [
          task.carriedOver && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-full flex items-center gap-1 text-[10px] font-bold text-orange-700 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🔄 CARRIED OVER" }),
            task.originalShift && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-normal text-orange-600", children: [
              "from ",
              task.originalShift,
              " shift"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: task.taskName,
              onChange: (e) => update(i, { taskName: e.target.value }),
              placeholder: "Task name",
              className: "text-sm border-0 shadow-none p-0 h-auto focus-visible:ring-0 bg-transparent",
              "data-ocid": `handover.pending_task.${i + 1}`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: task.taskType,
              onChange: (e) => update(i, { taskType: e.target.value }),
              className: "text-xs border rounded px-2 py-1 bg-white",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "investigation", children: "Investigation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "procedure", children: "Procedure" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "medication", children: "Medication" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "missed_dose", children: "Missed Dose" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: task.orderedBy,
              onChange: (e) => update(i, { orderedBy: e.target.value }),
              placeholder: "Ordered by",
              className: "text-xs w-28 bg-white"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              value: task.dateOrdered,
              onChange: (e) => update(i, { dateOrdered: e.target.value }),
              className: "text-xs border border-gray-200 rounded px-2 py-1 bg-white"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => remove(i),
              className: "text-red-400 hover:text-red-600",
              "data-ocid": `handover.pending_task.delete.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
            }
          )
        ]
      },
      task.id
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        size: "sm",
        variant: "outline",
        className: "gap-1 border-teal-300 text-teal-700 bg-white",
        onClick: add,
        "data-ocid": "handover.add_pending_task_button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
          " Add Pending Task"
        ]
      }
    )
  ] });
}
function VitalField({
  label,
  unit,
  vkey,
  value,
  onChange
}) {
  const abnormal = isVitalAbnormal(vkey, value);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs text-gray-500", children: [
      label,
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-gray-700", children: [
        "(",
        unit,
        ")"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value,
          onChange: (e) => onChange(e.target.value),
          placeholder: label,
          className: `bg-white text-sm ${abnormal ? "border-red-400 bg-red-50 text-red-700 font-bold" : ""}`,
          "data-ocid": `handover.vitals.${String(vkey)}`
        }
      ),
      abnormal && /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "absolute right-2 top-2 w-4 h-4 text-red-500" })
    ] })
  ] });
}
function HandoverForm({
  patientId,
  patientName,
  registerNumber,
  admissionDate,
  bedNumber,
  ward,
  department,
  primaryDiagnosis,
  secondaryDiagnoses,
  comorbidities,
  assignedConsultant,
  hospitalName,
  type,
  currentUser,
  latestVitals,
  activeMedications,
  trackedInvestigations,
  activeDiagnoses,
  latestPlan,
  existingDoc,
  onSaved,
  onCancel
}) {
  var _a, _b, _c;
  const isNurse = type === "nurse";
  const detectedShift = detectShift();
  const defaults = shiftDefaults(detectedShift);
  const admDate = admissionDate ? new Date(admissionDate) : null;
  const dayOfStay = admDate ? differenceInDays(/* @__PURE__ */ new Date(), admDate) + 1 : 0;
  const pendingInvNames = trackedInvestigations.filter((i) => i.status === "ordered" || i.status === "sample_collected").map(
    (i) => ({
      id: `pi_${i.name}`,
      taskName: i.name,
      taskType: "investigation",
      orderedBy: "",
      dateOrdered: format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"),
      status: i.status === "sample_collected" ? "Sample Collected" : "Pending"
    })
  );
  const medPendingTasks = activeMedications.map(
    (m, idx) => ({
      id: `med_${idx}`,
      taskName: `${m.drugName} ${m.dose} ${m.frequency}`,
      taskType: "medication",
      orderedBy: "",
      dateOrdered: format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"),
      status: "Due"
    })
  );
  const [shiftLabel, setShiftLabel] = reactExports.useState(
    (existingDoc == null ? void 0 : existingDoc.shiftLabel) ?? detectedShift
  );
  const [shiftStart, setShiftStart] = reactExports.useState(
    (existingDoc == null ? void 0 : existingDoc.shiftStart) ?? defaults.start
  );
  const [shiftEnd, setShiftEnd] = reactExports.useState(
    (existingDoc == null ? void 0 : existingDoc.shiftEnd) ?? defaults.end
  );
  const [givenByName, setGivenByName] = reactExports.useState(
    (existingDoc == null ? void 0 : existingDoc.givenBy.name) ?? currentUser.name
  );
  const [givenByRole, setGivenByRole] = reactExports.useState(
    (existingDoc == null ? void 0 : existingDoc.givenBy.role) ?? currentUser.role
  );
  const [bp, setBp] = reactExports.useState(
    (existingDoc == null ? void 0 : existingDoc.vitals.bp) ?? (latestVitals == null ? void 0 : latestVitals.bloodPressure) ?? ""
  );
  const [pulse, setPulse] = reactExports.useState(
    (existingDoc == null ? void 0 : existingDoc.vitals.pulse) ?? (latestVitals == null ? void 0 : latestVitals.pulse) ?? ""
  );
  const [temp, setTemp] = reactExports.useState(
    (existingDoc == null ? void 0 : existingDoc.vitals.temp) ?? (latestVitals == null ? void 0 : latestVitals.temperature) ?? ""
  );
  const [spo2, setSpo2] = reactExports.useState(
    (existingDoc == null ? void 0 : existingDoc.vitals.spo2) ?? (latestVitals == null ? void 0 : latestVitals.oxygenSaturation) ?? ""
  );
  const [rr, setRr] = reactExports.useState(
    (existingDoc == null ? void 0 : existingDoc.vitals.rr) ?? (latestVitals == null ? void 0 : latestVitals.respiratoryRate) ?? ""
  );
  const [weight, setWeight] = reactExports.useState(
    (existingDoc == null ? void 0 : existingDoc.vitals.weight) ?? (latestVitals == null ? void 0 : latestVitals.weight) ?? ""
  );
  const [gcs, setGcs] = reactExports.useState((existingDoc == null ? void 0 : existingDoc.vitals.gcs) ?? "");
  const [ioBalance, setIoBalance] = reactExports.useState(
    (existingDoc == null ? void 0 : existingDoc.vitals.ioBalance) ?? ""
  );
  const [hb, setHb] = reactExports.useState((existingDoc == null ? void 0 : existingDoc.vitals.hb) ?? "");
  const [wbc, setWbc] = reactExports.useState((existingDoc == null ? void 0 : existingDoc.vitals.wbc) ?? "");
  const [creatinine, setCreatinine] = reactExports.useState(
    (existingDoc == null ? void 0 : existingDoc.vitals.creatinine) ?? ""
  );
  const [sodium, setSodium] = reactExports.useState((existingDoc == null ? void 0 : existingDoc.vitals.sodium) ?? "");
  const [potassium, setPotassium] = reactExports.useState(
    (existingDoc == null ? void 0 : existingDoc.vitals.potassium) ?? ""
  );
  const [glucose, setGlucose] = reactExports.useState((existingDoc == null ? void 0 : existingDoc.vitals.glucose) ?? "");
  const mapValue = calcMAP$1(bp);
  const [moName, setMoName] = reactExports.useState((existingDoc == null ? void 0 : existingDoc.medicalOfficer) ?? "");
  const [intern, setIntern] = reactExports.useState((existingDoc == null ? void 0 : existingDoc.internAssigned) ?? "");
  const [teamNotes, setTeamNotes] = reactExports.useState(
    (existingDoc == null ? void 0 : existingDoc.treatingTeamNotes) ?? ""
  );
  const [diagPrimary, setDiagPrimary] = reactExports.useState(
    (existingDoc == null ? void 0 : existingDoc.primaryDiagnosis) ?? primaryDiagnosis ?? activeDiagnoses[0] ?? ""
  );
  const [diagSecondary, setDiagSecondary] = reactExports.useState(
    (existingDoc == null ? void 0 : existingDoc.secondaryDiagnoses) ?? secondaryDiagnoses.join(", ")
  );
  const [diagComorb, setDiagComorb] = reactExports.useState(
    (existingDoc == null ? void 0 : existingDoc.comorbidities) ?? comorbidities.join(", ")
  );
  const [actionItems, setActionItems] = reactExports.useState(
    (existingDoc == null ? void 0 : existingDoc.actionItems) ?? []
  );
  const carriedOverTasks = reactExports.useMemo(() => {
    if (existingDoc) return [];
    const allDocs = loadDocs(patientId);
    const lastSubmitted = allDocs.filter((d) => d.status === "submitted").sort(
      (a, b) => new Date(b.submittedAt ?? b.createdAt).getTime() - new Date(a.submittedAt ?? a.createdAt).getTime()
    )[0];
    if (!lastSubmitted) return [];
    const now = /* @__PURE__ */ new Date();
    return lastSubmitted.pendingTasks.filter((t) => t.status !== "Completed" && t.status !== "Done").map((t) => {
      const originalDate = t.dateOrdered ?? t.originalDate ?? lastSubmitted.createdAt.split("T")[0];
      const ageMs = now.getTime() - new Date(originalDate).getTime();
      const ageDays = Math.round(ageMs / (1e3 * 60 * 60 * 24));
      const ageLabel = ageDays === 0 ? "today" : ageDays === 1 ? "1 day ago" : `${ageDays} days ago`;
      return {
        ...t,
        id: `carried_${t.id}`,
        status: `Carried Over (from ${lastSubmitted.shiftLabel} shift, ${ageLabel})`,
        carriedOver: true,
        originalShift: lastSubmitted.shiftLabel,
        originalDate
      };
    });
  }, [patientId, existingDoc]);
  const [pendingTasks, setPendingTasks] = reactExports.useState(
    (existingDoc == null ? void 0 : existingDoc.pendingTasks) ?? [
      ...carriedOverTasks,
      ...pendingInvNames,
      ...medPendingTasks
    ]
  );
  const [handoverToName, setHandoverToName] = reactExports.useState(
    ((_a = existingDoc == null ? void 0 : existingDoc.takenBy) == null ? void 0 : _a.name) ?? ""
  );
  const [handoverToEmail, setHandoverToEmail] = reactExports.useState(
    ((_b = existingDoc == null ? void 0 : existingDoc.takenBy) == null ? void 0 : _b.email) ?? ""
  );
  const [handoverToRole, setHandoverToRole] = reactExports.useState(
    ((_c = existingDoc == null ? void 0 : existingDoc.takenBy) == null ? void 0 : _c.role) ?? ""
  );
  const [moNotes, setMoNotes] = reactExports.useState(
    (existingDoc == null ? void 0 : existingDoc.treatingTeamNotes) ?? (!isNurse ? [
      activeDiagnoses.length > 0 ? `Diagnoses: ${activeDiagnoses.join(", ")}.` : "",
      latestPlan ? `Current plan: ${latestPlan}` : ""
    ].filter(Boolean).join("\n\n") : "")
  );
  function buildDoc(status) {
    return {
      id: (existingDoc == null ? void 0 : existingDoc.id) ?? `hov_${Date.now().toString(36)}`,
      patientId,
      type,
      status,
      hospitalName: hospitalName ?? "General Hospital",
      shiftLabel,
      shiftStart,
      shiftEnd,
      createdAt: (existingDoc == null ? void 0 : existingDoc.createdAt) ?? (/* @__PURE__ */ new Date()).toISOString(),
      submittedAt: status === "submitted" ? (/* @__PURE__ */ new Date()).toISOString() : void 0,
      givenBy: {
        name: givenByName,
        role: givenByRole,
        time: format(/* @__PURE__ */ new Date(), "HH:mm")
      },
      takenBy: handoverToName ? {
        name: handoverToName,
        role: handoverToRole,
        email: handoverToEmail,
        time: ""
      } : existingDoc == null ? void 0 : existingDoc.takenBy,
      patientName,
      registerNumber: registerNumber || "—",
      ageSex: "",
      bedNumber: bedNumber || "",
      wardName: ward || "",
      department: department || "",
      admissionDate: admissionDate || "",
      primaryDiagnosis: diagPrimary,
      secondaryDiagnoses: diagSecondary,
      comorbidities: diagComorb,
      dayOfStay,
      assignedConsultant: assignedConsultant || "",
      medicalOfficer: moName,
      internAssigned: intern,
      treatingTeamNotes: isNurse ? teamNotes : moNotes,
      vitals: {
        bp,
        pulse,
        temp,
        spo2,
        rr,
        weight,
        gcs,
        map: mapValue,
        ioBalance,
        hb,
        wbc,
        creatinine,
        sodium,
        potassium,
        glucose
      },
      actionItems,
      pendingTasks,
      consultantComments: (existingDoc == null ? void 0 : existingDoc.consultantComments) ?? [],
      appendedEntries: (existingDoc == null ? void 0 : existingDoc.appendedEntries) ?? []
    };
  }
  function save(submit) {
    const doc = buildDoc(submit ? "submitted" : "draft");
    const all = loadDocs(patientId);
    const idx = all.findIndex((d) => d.id === doc.id);
    if (idx >= 0) all[idx] = doc;
    else all.unshift(doc);
    saveDocs(patientId, all);
    ue.success(submit ? "Handover submitted and locked ✓" : "Draft saved");
    onSaved();
  }
  const accentBg = isNurse ? "bg-purple-50 border-purple-200" : "bg-blue-50 border-blue-200";
  const accentText = isNurse ? "text-purple-800" : "text-blue-800";
  const accentLabel = isNurse ? "text-purple-700" : "text-blue-700";
  const accentBtn = isNurse ? "bg-purple-600 hover:bg-purple-700" : "bg-blue-600 hover:bg-blue-700";
  const accentOutline = isNurse ? "border-purple-300 text-purple-700" : "border-blue-300 text-blue-700";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `border rounded-none sm:rounded-xl overflow-hidden shadow-sm ${accentBg}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `px-5 py-4 border-b ${isNurse ? "border-purple-200 bg-purple-100" : "border-blue-200 bg-blue-100"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h3",
                {
                  className: `font-bold text-base flex items-center gap-2 ${accentText}`,
                  children: [
                    isNurse ? /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-4 h-4" }),
                    isNurse ? "Nurse Handover" : "Medical Officer Handover",
                    " —",
                    " ",
                    patientName
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ShiftEditor,
                {
                  shift: shiftLabel,
                  shiftStart,
                  shiftEnd,
                  onChangeShift: setShiftLabel,
                  onChangeStart: setShiftStart,
                  onChangeEnd: setShiftEnd
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "divide-y divide-gray-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 px-5 py-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                color: "bg-gray-100 text-gray-700 -mx-5 -mt-4 mb-3",
                title: "Handover Header",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" })
              }
            ),
            (() => {
              const CLINICAL_ROLES2 = [
                "consultant_doctor",
                "medical_officer",
                "intern_doctor",
                "nurse",
                "doctor"
              ];
              const allStaff = loadRegistry().filter(
                (s) => CLINICAL_ROLES2.includes(s.role) && s.status === "approved"
              );
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: `text-xs font-semibold ${accentLabel}`, children: "HANDOVER GIVEN BY — Name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: givenByName,
                      onChange: (e) => setGivenByName(e.target.value),
                      className: "mt-1 bg-white",
                      "data-ocid": "handover.given_by_name"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: `text-xs font-semibold ${accentLabel}`, children: "Role" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: givenByRole,
                      onChange: (e) => setGivenByRole(e.target.value),
                      className: "mt-1 bg-white",
                      "data-ocid": "handover.given_by_role"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: `text-xs font-semibold ${accentLabel}`, children: "HANDOVER TAKEN BY — Select Staff" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: handoverToEmail,
                      onChange: (e) => {
                        const email = e.target.value;
                        setHandoverToEmail(email);
                        if (!email) {
                          setHandoverToName("");
                          setHandoverToRole("");
                          return;
                        }
                        const staff = allStaff.find((s) => s.email === email);
                        if (staff) {
                          setHandoverToName(staff.name);
                          setHandoverToRole(
                            STAFF_ROLE_LABELS[staff.role] ?? staff.role
                          );
                        }
                      },
                      className: "mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white",
                      "data-ocid": "handover.taken_by_select",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "— Select incoming staff —" }),
                        allStaff.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: s.email, children: [
                          s.name,
                          " — ",
                          STAFF_ROLE_LABELS[s.role] ?? s.role
                        ] }, s.id))
                      ]
                    }
                  ),
                  handoverToName && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-teal-600 mt-1 font-medium", children: [
                    "✓ ",
                    handoverToName,
                    " (",
                    handoverToRole,
                    ")"
                  ] })
                ] })
              ] });
            })()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 space-y-3 bg-blue-50/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                color: "bg-blue-600 text-white -mx-5 -mt-4 mb-3",
                title: "Patient Identification",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm", children: [
              { label: "Patient Name", value: patientName },
              { label: "Register No.", value: registerNumber || "—" },
              {
                label: "Bed / Ward",
                value: `${bedNumber || "—"}${ward ? ` / ${ward}` : ""}`
              },
              { label: "Department", value: department || "—" },
              {
                label: "Admission Date",
                value: admissionDate ? format(new Date(admissionDate), "dd MMM yyyy") : "—"
              },
              {
                label: "Day of Stay",
                value: dayOfStay > 0 ? `Day ${dayOfStay}` : "—"
              }
            ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-white rounded-lg border border-blue-100 px-3 py-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-blue-500 font-medium", children: label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-800 text-sm mt-0.5", children: value })
                ]
              },
              label
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 space-y-3 bg-green-50/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                color: "bg-green-600 text-white -mx-5 -mt-4 mb-3",
                title: "Diagnosis & Day of Stay",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-green-700", children: "Primary Diagnosis" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: diagPrimary,
                    onChange: (e) => setDiagPrimary(e.target.value),
                    className: "mt-1 bg-white",
                    "data-ocid": "handover.primary_diagnosis"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-green-700", children: "Secondary Diagnoses" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: diagSecondary,
                    onChange: (e) => setDiagSecondary(e.target.value),
                    placeholder: "Comma separated",
                    className: "mt-1 bg-white",
                    "data-ocid": "handover.secondary_diagnoses"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-green-700", children: "Comorbidities" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: diagComorb,
                    onChange: (e) => setDiagComorb(e.target.value),
                    placeholder: "HTN, DM2, CKD...",
                    className: "mt-1 bg-white",
                    "data-ocid": "handover.comorbidities"
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 space-y-3 bg-purple-50/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                color: "bg-purple-600 text-white -mx-5 -mt-4 mb-3",
                title: "Current Consultant / Team",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-purple-700", children: "Assigned Consultant" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: assignedConsultant || "",
                    readOnly: true,
                    className: "mt-1 bg-white"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-purple-700", children: "Medical Officer on Duty" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: moName,
                    onChange: (e) => setMoName(e.target.value),
                    className: "mt-1 bg-white",
                    "data-ocid": "handover.mo_name"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-purple-700", children: "Intern Assigned" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: intern,
                    onChange: (e) => setIntern(e.target.value),
                    className: "mt-1 bg-white",
                    "data-ocid": "handover.intern_name"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-purple-700", children: "Treating Team Notes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: isNurse ? teamNotes : moNotes,
                    onChange: (e) => isNurse ? setTeamNotes(e.target.value) : setMoNotes(e.target.value),
                    rows: 2,
                    className: "mt-1 bg-white border-purple-200",
                    "data-ocid": "handover.team_notes"
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 space-y-4 bg-rose-50/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                color: "bg-rose-600 text-white -mx-5 -mt-4 mb-3",
                title: "Clinical Summary & Vital Signs",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                VitalField,
                {
                  label: "BP",
                  unit: "mmHg",
                  vkey: "bp",
                  value: bp,
                  onChange: setBp
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                VitalField,
                {
                  label: "Pulse",
                  unit: "beats/min",
                  vkey: "pulse",
                  value: pulse,
                  onChange: setPulse
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                VitalField,
                {
                  label: "Temp",
                  unit: "°F",
                  vkey: "temp",
                  value: temp,
                  onChange: setTemp
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                VitalField,
                {
                  label: "SpO₂",
                  unit: "%",
                  vkey: "spo2",
                  value: spo2,
                  onChange: setSpo2
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                VitalField,
                {
                  label: "RR",
                  unit: "breaths/min",
                  vkey: "rr",
                  value: rr,
                  onChange: setRr
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                VitalField,
                {
                  label: "Weight",
                  unit: "kg",
                  vkey: "weight",
                  value: weight,
                  onChange: setWeight
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                VitalField,
                {
                  label: "GCS",
                  unit: "/15",
                  vkey: "gcs",
                  value: gcs,
                  onChange: setGcs
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs text-gray-500", children: [
                  "MAP ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-gray-700", children: "(mmHg)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `mt-1 border rounded-md px-3 py-2 text-sm font-bold ${mapValue && Number.parseInt(mapValue) < 65 ? "bg-red-50 border-red-400 text-red-700" : "bg-gray-50 border-gray-200 text-gray-700"}`,
                    children: [
                      mapValue || "—",
                      " ",
                      mapValue && Number.parseInt(mapValue) < 65 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500 text-xs", children: "⚠ Low" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-rose-700", children: "24h I/O Balance Summary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: ioBalance,
                  onChange: (e) => setIoBalance(e.target.value),
                  placeholder: "e.g. Intake 2400ml / Output 1800ml / Balance +600ml",
                  className: "mt-1 bg-white",
                  "data-ocid": "handover.io_balance"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-rose-700 mb-2 block", children: "Key Lab Values" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: [
                { label: "Hb", unit: "g/dL", value: hb, set: setHb },
                { label: "WBC", unit: "×10³/µL", value: wbc, set: setWbc },
                {
                  label: "Creatinine",
                  unit: "mg/dL",
                  value: creatinine,
                  set: setCreatinine
                },
                { label: "Na⁺", unit: "mEq/L", value: sodium, set: setSodium },
                {
                  label: "K⁺",
                  unit: "mEq/L",
                  value: potassium,
                  set: setPotassium
                },
                {
                  label: "Glucose",
                  unit: "mmol/L",
                  value: glucose,
                  set: setGlucose
                }
              ].map(({ label, unit, value, set }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs text-gray-500", children: [
                  label,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-gray-600", children: [
                    "(",
                    unit,
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value,
                    onChange: (e) => set(e.target.value),
                    placeholder: label,
                    className: "mt-1 bg-white text-sm"
                  }
                )
              ] }, label)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 space-y-3 bg-amber-50/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                color: "bg-amber-500 text-white -mx-5 -mt-4 mb-3",
                title: "Actionable Items",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ActionItemsEditor, { items: actionItems, onChange: setActionItems })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 space-y-3 bg-teal-50/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                color: "bg-teal-600 text-white -mx-5 -mt-4 mb-3",
                title: "Tasks Pending",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PendingTasksEditor, { tasks: pendingTasks, onChange: setPendingTasks })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `px-5 py-4 flex gap-2 border-t ${isNurse ? "border-purple-200 bg-purple-50" : "border-blue-200 bg-blue-50"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: accentOutline,
                  onClick: () => save(false),
                  "data-ocid": "handover.save_draft_button",
                  children: "Save Draft"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  className: `${accentBtn} text-white gap-1.5`,
                  onClick: () => save(true),
                  "data-ocid": "handover.submit_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
                    "Submit Handover"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "ghost",
                  onClick: onCancel,
                  className: "ml-auto text-gray-500",
                  "data-ocid": "handover.cancel_button",
                  children: "Cancel"
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function TakeOverForm({
  doc,
  currentUser,
  onSaved,
  onCancel
}) {
  const CLINICAL_ROLES2 = [
    "consultant_doctor",
    "medical_officer",
    "intern_doctor",
    "nurse",
    "doctor"
  ];
  const allStaff = loadRegistry().filter(
    (s) => CLINICAL_ROLES2.includes(s.role) && s.status === "approved"
  );
  const [takenByEmail, setTakenByEmail] = reactExports.useState(currentUser.email);
  const [takenByName, setTakenByName] = reactExports.useState(currentUser.name);
  const [takenByRole, setTakenByRole] = reactExports.useState(currentUser.role);
  const [additionalWork, setAdditionalWork] = reactExports.useState("");
  const [actionItems, setActionItems] = reactExports.useState([]);
  function save() {
    if (!takenByName.trim()) {
      ue.error("Please select the staff taking over");
      return;
    }
    const appended = {
      id: `app_${Date.now().toString(36)}`,
      takenBy: {
        name: takenByName,
        role: takenByRole,
        email: takenByEmail,
        time: format(/* @__PURE__ */ new Date(), "HH:mm")
      },
      additionalWork,
      actionItems,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    const all = loadDocs(doc.patientId);
    const idx = all.findIndex((d) => d.id === doc.id);
    if (idx >= 0) {
      all[idx].takenBy = {
        name: takenByName,
        role: takenByRole,
        email: takenByEmail,
        time: format(/* @__PURE__ */ new Date(), "HH:mm")
      };
      all[idx].appendedEntries = [
        ...all[idx].appendedEntries ?? [],
        appended
      ];
    }
    saveDocs(doc.patientId, all);
    ue.success("Handover accepted — your additions appended ✓");
    onSaved();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-xl bg-teal-50 border-teal-200 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-3 bg-teal-100 border-b border-teal-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-teal-800 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-4 h-4" }),
      " Accept & Take Over Handover"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-teal-700", children: "Select Staff Taking Over" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: takenByEmail,
            onChange: (e) => {
              const email = e.target.value;
              setTakenByEmail(email);
              const staff = allStaff.find((s) => s.email === email);
              if (staff) {
                setTakenByName(staff.name);
                setTakenByRole(STAFF_ROLE_LABELS[staff.role] ?? staff.role);
              }
            },
            className: "mt-1 w-full border border-teal-200 rounded-lg px-3 py-2 text-sm bg-white",
            "data-ocid": "handover.takeover_select",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "— Select staff —" }),
              allStaff.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: s.email, children: [
                s.name,
                " — ",
                STAFF_ROLE_LABELS[s.role] ?? s.role
              ] }, s.id))
            ]
          }
        ),
        takenByName && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-teal-600 mt-1 font-medium", children: [
          "✓ ",
          takenByName,
          " (",
          takenByRole,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-teal-700 mb-1 block", children: "New Work / Additional Notes for This Shift" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: additionalWork,
            onChange: (e) => setAdditionalWork(e.target.value),
            rows: 3,
            className: "bg-white border-teal-200",
            placeholder: "Any additional care instructions or new work for this shift...",
            "data-ocid": "handover.takeover_notes"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-teal-700 mb-2 block", children: "New Action Items for This Shift" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ActionItemsEditor, { items: actionItems, onChange: setActionItems })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "bg-teal-600 hover:bg-teal-700 text-white gap-1.5",
            onClick: save,
            "data-ocid": "handover.takeover_submit_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
              " Accept & Add My Entries"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "ghost",
            onClick: onCancel,
            className: "text-gray-500",
            "data-ocid": "handover.takeover_cancel_button",
            children: "Cancel"
          }
        )
      ] })
    ] })
  ] });
}
function DocView({
  doc,
  currentUser,
  viewerRole,
  unreadCommentIds,
  onMarkCommentRead,
  onSaved
}) {
  var _a, _b, _c, _d, _e;
  const [expanded, setExpanded] = reactExports.useState(false);
  const [showTakeOver, setShowTakeOver] = reactExports.useState(false);
  const [commentText, setCommentText] = reactExports.useState("");
  const printRef = reactExports.useRef(null);
  const isConsultant = viewerRole === "consultant_doctor" || viewerRole === "doctor";
  const isNurse = viewerRole === "nurse";
  const unreadInThisDoc = doc.consultantComments.filter(
    (c) => unreadCommentIds.includes(c.id)
  );
  const hasUnread = unreadInThisDoc.length > 0;
  function submitComment() {
    if (!commentText.trim()) return;
    const newComment = {
      id: `cc_${Date.now().toString(36)}`,
      comment: commentText.trim(),
      commentBy: currentUser.name,
      commentByRole: viewerRole,
      commentAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    const all = loadDocs(doc.patientId);
    const idx = all.findIndex((d) => d.id === doc.id);
    if (idx >= 0) {
      all[idx].consultantComments = [
        ...all[idx].consultantComments ?? [],
        newComment
      ];
      saveDocs(doc.patientId, all);
      const globalKey = "handover_new_comments_global";
      try {
        const existing = JSON.parse(
          localStorage.getItem(globalKey) ?? "[]"
        );
        existing.push(newComment.id);
        localStorage.setItem(globalKey, JSON.stringify(existing));
      } catch {
      }
    }
    ue.success("Comment saved — nurse/MO will be notified");
    setCommentText("");
    onSaved();
  }
  function handlePrint() {
    window.print();
  }
  function vitalDisplay(label, value, unit, vkey) {
    const abnormal = isVitalAbnormal(vkey, value);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `rounded-lg border p-2.5 text-center ${abnormal ? "bg-red-50 border-red-300" : "bg-white border-gray-200"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: `font-bold text-sm ${abnormal ? "text-red-700" : "text-gray-800"}`,
              children: [
                value || "—",
                " ",
                abnormal && /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "inline w-3 h-3 text-red-500" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-gray-500", children: unit })
        ]
      },
      label
    );
  }
  const typeColor = doc.type === "nurse" ? "border-purple-200 bg-white" : "border-blue-200 bg-white";
  const headerColor = doc.type === "nurse" ? "bg-purple-50" : "bg-blue-50";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `rounded-xl border shadow-sm overflow-hidden ${typeColor} print-handover`,
      "data-ocid": "handover.record_item",
      ref: printRef,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              setExpanded(!expanded);
              if (!expanded && hasUnread) {
                for (const c of unreadInThisDoc) {
                  onMarkCommentRead(c.id);
                }
              }
            },
            className: `w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${headerColor} hover:opacity-90`,
            "data-ocid": "handover.record_toggle",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 flex-wrap min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-xs font-bold px-2 py-0.5 rounded-full border ${doc.type === "nurse" ? "bg-purple-100 text-purple-800 border-purple-300" : "bg-blue-100 text-blue-800 border-blue-300"}`,
                    children: doc.type === "nurse" ? "🩺 Nurse" : "👨‍⚕️ MO"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-semibold ${shiftBadgeCls(doc.shiftLabel)}`,
                    children: [
                      shiftEmoji(doc.shiftLabel),
                      " ",
                      doc.shiftLabel,
                      " · ",
                      doc.shiftStart,
                      "–",
                      doc.shiftEnd
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-gray-700", children: format(new Date(doc.createdAt), "dd MMM yyyy — HH:mm") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-500", children: [
                  "by ",
                  doc.givenBy.name
                ] }),
                ((_a = doc.takenBy) == null ? void 0 : _a.name) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-teal-600 font-medium", children: [
                  "→ Taken by ",
                  doc.takenBy.name
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                hasUnread && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-300 animate-pulse", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BellRing, { className: "w-3 h-3" }),
                  " ",
                  unreadInThisDoc.length,
                  " New Comment",
                  unreadInThisDoc.length > 1 ? "s" : ""
                ] }),
                doc.status === "submitted" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700 border border-green-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3 h-3" }),
                  " Submitted"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                  " Draft"
                ] }),
                doc.consultantComments.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    variant: "outline",
                    className: "text-xs bg-indigo-50 text-indigo-700 border-indigo-200",
                    children: [
                      doc.consultantComments.length,
                      " comment",
                      doc.consultantComments.length > 1 ? "s" : ""
                    ]
                  }
                ),
                expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-gray-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-gray-400" })
              ] })
            ]
          }
        ),
        expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "divide-y divide-gray-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 bg-gray-50 flex gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "gap-1 text-xs border-gray-200",
                onClick: handlePrint,
                "data-ocid": "handover.print_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3 h-3" }),
                  " Print Handover"
                ]
              }
            ),
            doc.status === "submitted" && (isNurse || viewerRole === "medical_officer") && !((_b = doc.takenBy) == null ? void 0 : _b.name) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "gap-1 text-xs border-teal-300 text-teal-700",
                onClick: () => setShowTakeOver(!showTakeOver),
                "data-ocid": "handover.takeover_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-3 h-3" }),
                  " Accept & Take Over"
                ]
              }
            )
          ] }),
          showTakeOver && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            TakeOverForm,
            {
              doc,
              currentUser,
              onSaved: () => {
                setShowTakeOver(false);
                onSaved();
              },
              onCancel: () => setShowTakeOver(false)
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                color: "bg-blue-600 text-white",
                title: "Patient Identification",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 grid grid-cols-2 sm:grid-cols-3 gap-2", children: [
              { label: "Patient Name", value: doc.patientName },
              { label: "Register No.", value: doc.registerNumber },
              {
                label: "Bed / Ward",
                value: `${doc.bedNumber}${doc.wardName ? ` / ${doc.wardName}` : ""}`
              },
              { label: "Department", value: doc.department || "—" },
              {
                label: "Admission Date",
                value: doc.admissionDate ? format(new Date(doc.admissionDate), "dd MMM yyyy") : "—"
              },
              {
                label: "Day of Stay",
                value: doc.dayOfStay > 0 ? `Day ${doc.dayOfStay}` : "—"
              }
            ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-white rounded-lg border border-blue-100 px-3 py-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-blue-500 font-medium", children: label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-gray-800", children: value || "—" })
                ]
              },
              label
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                color: "bg-green-600 text-white",
                title: "Diagnosis & Day of Stay",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg border border-green-100 px-3 py-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600 font-medium", children: "Primary Diagnosis" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-800 mt-0.5", children: doc.primaryDiagnosis || "—" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg border border-green-100 px-3 py-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600 font-medium", children: "Secondary Diagnoses" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mt-0.5 text-sm", children: doc.secondaryDiagnoses || "—" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg border border-green-100 px-3 py-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600 font-medium", children: "Comorbidities" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mt-0.5 text-sm", children: doc.comorbidities || "—" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                color: "bg-purple-600 text-white",
                title: "Current Consultant / Team",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm", children: [
              { label: "Assigned Consultant", value: doc.assignedConsultant },
              { label: "Medical Officer", value: doc.medicalOfficer },
              { label: "Intern Assigned", value: doc.internAssigned },
              { label: "Team Notes", value: doc.treatingTeamNotes }
            ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-white rounded-lg border border-purple-100 px-3 py-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-purple-500 font-medium", children: label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800 text-sm mt-0.5 whitespace-pre-line", children: value || "—" })
                ]
              },
              label
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-rose-50/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                color: "bg-rose-600 text-white",
                title: "Clinical Summary & Vital Signs",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 sm:grid-cols-5 gap-2", children: [
                vitalDisplay("BP", doc.vitals.bp, "mmHg", "bp"),
                vitalDisplay("Pulse", doc.vitals.pulse, "bpm", "pulse"),
                vitalDisplay("Temp", doc.vitals.temp, "°F", "temp"),
                vitalDisplay("SpO₂", doc.vitals.spo2, "%", "spo2"),
                vitalDisplay("RR", doc.vitals.rr, "b/min", "rr"),
                doc.vitals.weight && vitalDisplay("Weight", doc.vitals.weight, "kg", "weight"),
                doc.vitals.gcs && vitalDisplay("GCS", doc.vitals.gcs, "/15", "gcs"),
                doc.vitals.map && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `rounded-lg border p-2.5 text-center ${Number.parseInt(doc.vitals.map) < 65 ? "bg-red-50 border-red-300" : "bg-white border-gray-200"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: "MAP" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: `font-bold text-sm ${Number.parseInt(doc.vitals.map) < 65 ? "text-red-700" : "text-gray-800"}`,
                          children: [
                            doc.vitals.map,
                            " ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-normal text-xs text-gray-500", children: "mmHg" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-gray-500", children: "auto" })
                    ]
                  }
                )
              ] }),
              doc.vitals.ioBalance && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg border border-rose-100 px-3 py-2 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-rose-500 font-medium", children: [
                  "24h I/O Balance:",
                  " "
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: doc.vitals.ioBalance })
              ] }),
              (doc.vitals.hb || doc.vitals.wbc || doc.vitals.creatinine || doc.vitals.sodium || doc.vitals.potassium || doc.vitals.glucose) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-6 gap-2", children: [
                { label: "Hb", value: doc.vitals.hb, unit: "g/dL" },
                { label: "WBC", value: doc.vitals.wbc, unit: "×10³" },
                {
                  label: "Cr",
                  value: doc.vitals.creatinine,
                  unit: "mg/dL"
                },
                { label: "Na⁺", value: doc.vitals.sodium, unit: "mEq/L" },
                { label: "K⁺", value: doc.vitals.potassium, unit: "mEq/L" },
                { label: "Glu", value: doc.vitals.glucose, unit: "mmol/L" }
              ].filter((x) => x.value).map(({ label, value, unit }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-white rounded-lg border border-rose-100 p-2 text-center",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm text-gray-800", children: value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: unit })
                  ]
                },
                label
              )) })
            ] })
          ] }),
          doc.actionItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                color: "bg-amber-500 text-white",
                title: "Actionable Items",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 space-y-2", children: doc.actionItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `flex items-start gap-3 rounded-lg border px-3 py-2 ${item.priority === "Urgent" ? "bg-red-50 border-red-200" : "bg-white border-amber-100"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `text-xs font-bold px-1.5 py-0.5 rounded border mt-0.5 ${item.priority === "Urgent" ? "bg-red-100 text-red-700 border-red-300" : "bg-green-100 text-green-700 border-green-300"}`,
                      children: [
                        item.priority === "Urgent" ? "🔴" : "🟢",
                        " ",
                        item.priority
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-gray-800", children: item.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-400 mt-0.5", children: [
                      "Due: ",
                      item.dueTime || "—",
                      " · Assigned to:",
                      " ",
                      item.assignedRole || "—"
                    ] })
                  ] }),
                  item.done && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-green-500 shrink-0" })
                ]
              },
              item.id
            )) })
          ] }),
          doc.pendingTasks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-teal-50/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                color: "bg-teal-600 text-white",
                title: "Tasks Pending",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm min-w-[480px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-xs text-gray-500 border-b border-teal-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1.5 pr-3 font-semibold", children: "Task" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1.5 pr-3 font-semibold", children: "Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1.5 pr-3 font-semibold", children: "Ordered By" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1.5 pr-3 font-semibold", children: "Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1.5 font-semibold", children: "Status" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-teal-50", children: doc.pendingTasks.map((task, i) => {
                const typeBadge = {
                  investigation: "bg-amber-50 text-amber-700 border-amber-200",
                  procedure: "bg-blue-50 text-blue-700 border-blue-200",
                  medication: "bg-teal-50 text-teal-700 border-teal-200",
                  missed_dose: "bg-red-50 text-red-700 border-red-200"
                };
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    className: "hover:bg-teal-50/30",
                    "data-ocid": `handover.pending_task_row.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 pr-3 font-medium text-gray-800", children: [
                        task.taskName,
                        task.carriedOver && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 text-[10px] font-bold text-orange-600 bg-orange-50 border border-orange-200 rounded px-1", children: "🔄 Carried Over" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-xs px-1.5 py-0.5 rounded border ${typeBadge[task.taskType]}`,
                          children: task.taskType.replace("_", " ")
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-3 text-gray-500", children: task.orderedBy || "—" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-3 text-gray-500", children: task.dateOrdered ? format(new Date(task.dateOrdered), "dd MMM") : "—" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-gray-600", children: task.status })
                    ]
                  },
                  task.id
                );
              }) })
            ] }) })
          ] }),
          (_c = doc.appendedEntries) == null ? void 0 : _c.map((app) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-teal-50/40 border-l-4 border-teal-400",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 flex items-center gap-2 bg-teal-100", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-3.5 h-3.5 text-teal-700" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-teal-800", children: [
                    "Taken over by ",
                    app.takenBy.name,
                    " (",
                    app.takenBy.role,
                    ") at",
                    " ",
                    app.takenBy.time,
                    " —",
                    " ",
                    format(new Date(app.createdAt), "dd MMM yyyy")
                  ] })
                ] }),
                app.additionalWork && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-gray-500 uppercase mb-1", children: "New Work / Notes" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 whitespace-pre-line", children: app.additionalWork })
                ] }),
                app.actionItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-3 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-gray-500 uppercase", children: "Additional Action Items" }),
                  app.actionItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: `flex items-start gap-3 rounded-lg border px-3 py-2 ${item.priority === "Urgent" ? "bg-red-50 border-red-200" : "bg-white border-teal-100"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold", children: [
                          item.priority === "Urgent" ? "🔴" : "🟢",
                          " ",
                          item.priority
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm flex-1", children: item.description })
                      ]
                    },
                    item.id
                  ))
                ] })
              ]
            },
            app.id
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `${doc.consultantComments.length > 0 || isConsultant ? "bg-indigo-50/50" : ""}`,
              children: [
                (doc.consultantComments.length > 0 || isConsultant) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SectionHeader,
                  {
                    color: "bg-indigo-600 text-white",
                    title: "Consultant Comments",
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-3.5 h-3.5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 space-y-3", children: [
                  doc.consultantComments.map((c) => {
                    const isUnread = unreadCommentIds.includes(c.id);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `rounded-xl border p-4 transition-all ${isUnread ? "bg-red-50 border-red-300 shadow-sm" : "bg-indigo-50 border-indigo-200"}`,
                        "data-ocid": "handover.consultant_comment",
                        children: [
                          isUnread && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(BellRing, { className: "w-4 h-4 text-red-500" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-red-600 uppercase", children: "New Comment" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => onMarkCommentRead(c.id),
                                className: "ml-auto text-xs text-red-500 hover:underline",
                                children: "Mark as read"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5 text-indigo-600" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-indigo-800", children: c.commentBy }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-400", children: [
                              "(",
                              STAFF_ROLE_LABELS[c.commentByRole] ?? c.commentByRole,
                              ")"
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400 ml-auto", children: format(new Date(c.commentAt), "dd MMM yyyy, HH:mm") })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-800 leading-relaxed", children: c.comment })
                        ]
                      },
                      c.id
                    );
                  }),
                  isConsultant && doc.status === "submitted" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        value: commentText,
                        onChange: (e) => setCommentText(e.target.value),
                        placeholder: "Add a consultant comment — nurse/MO will be notified with an alarm...",
                        rows: 2,
                        className: "flex-1 bg-white border-indigo-200 text-sm",
                        "data-ocid": "handover.add_comment_input"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        className: "bg-indigo-600 hover:bg-indigo-700 text-white gap-1 self-end",
                        onClick: submitComment,
                        "data-ocid": "handover.add_comment_button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-3.5 h-3.5" }),
                          "Comment"
                        ]
                      }
                    )
                  ] })
                ] })
              ]
            }
          ),
          doc.status === "submitted" && doc.submittedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 bg-gray-50 border-t border-gray-100 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-400", children: [
              "✅ Submitted at",
              " ",
              format(new Date(doc.submittedAt), "dd MMM yyyy, HH:mm"),
              " by",
              " ",
              doc.givenBy.name,
              ((_d = doc.takenBy) == null ? void 0 : _d.name) && ` · Assigned to: ${doc.takenBy.name} (${doc.takenBy.role})`
            ] }),
            ((_e = doc.takenBy) == null ? void 0 : _e.name) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: doc.takenBy.acknowledgedAt ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-green-600 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-green-700", children: [
                "Acknowledged by",
                " ",
                doc.takenBy.acknowledgedByName ?? doc.takenBy.name,
                " at",
                " ",
                format(
                  new Date(doc.takenBy.acknowledgedAt),
                  "dd MMM yyyy, HH:mm"
                )
              ] })
            ] }) : currentUser.email === doc.takenBy.email ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                className: "bg-green-600 hover:bg-green-700 text-white gap-1.5",
                onClick: () => {
                  const all = loadDocs(doc.patientId);
                  const idx = all.findIndex((d) => d.id === doc.id);
                  if (idx >= 0 && all[idx].takenBy) {
                    const acknowledgedAt = (/* @__PURE__ */ new Date()).toISOString();
                    all[idx].takenBy = {
                      ...all[idx].takenBy,
                      acknowledgedAt,
                      acknowledgedBy: currentUser.email,
                      acknowledgedByName: currentUser.name,
                      acknowledgedRole: currentUser.role
                    };
                    saveDocs(doc.patientId, all);
                    try {
                      const auditKey = "medicare_audit_log";
                      const auditLog = JSON.parse(
                        localStorage.getItem(auditKey) ?? "[]"
                      );
                      auditLog.unshift({
                        id: `audit_${Date.now().toString(36)}`,
                        action: "handover_acknowledged",
                        entityType: "handover",
                        entityId: doc.id,
                        performedBy: currentUser.name,
                        performedByRole: currentUser.role,
                        timestamp: acknowledgedAt,
                        details: `Handover received by ${currentUser.name} (${currentUser.role}) for patient ${doc.patientName} — Shift: ${doc.shiftLabel} ${doc.shiftStart}–${doc.shiftEnd}`
                      });
                      localStorage.setItem(
                        auditKey,
                        JSON.stringify(auditLog.slice(0, 500))
                      );
                    } catch {
                    }
                    ue.success("Handover acknowledged ✓");
                    onSaved();
                  }
                },
                "data-ocid": "handover.acknowledge_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
                  "I Have Received This Handover"
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-amber-500 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-amber-700", children: [
                "Awaiting acknowledgment from",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: doc.takenBy.name })
              ] })
            ] }) })
          ] })
        ] })
      ]
    }
  );
}
function HandoverSystem({
  patientId,
  patientName,
  admissionDate,
  bedNumber,
  ward,
  department,
  primaryDiagnosis,
  secondaryDiagnoses = [],
  comorbidities = [],
  assignedConsultant,
  currentUser,
  vitals,
  // Legacy compat
  bed,
  viewerRole: viewerRoleProp,
  authorName,
  latestVitals,
  activeMedications = [],
  activeDiagnoses = [],
  latestPlan = ""
}) {
  const effectiveBed = bedNumber ?? bed ?? "";
  const effectiveVitals = vitals ?? latestVitals ?? null;
  const effectiveViewerRole = viewerRoleProp ?? currentUser.role ?? "nurse";
  const effectiveAuthorName = authorName ?? currentUser.name;
  const [docs, setDocs] = reactExports.useState(
    () => loadDocs(patientId)
  );
  const [showForm, setShowForm] = reactExports.useState(null);
  const [unreadCommentIds, setUnreadCommentIds] = reactExports.useState(
    () => getUnreadCommentIds(currentUser.email)
  );
  const trackedInvestigations = reactExports.useMemo(
    () => loadTrackedInvestigations(patientId),
    [patientId]
  );
  const isNurse = effectiveViewerRole === "nurse";
  const isMO = effectiveViewerRole === "medical_officer";
  const isConsultant = effectiveViewerRole === "consultant_doctor" || effectiveViewerRole === "doctor";
  const isIntern = effectiveViewerRole === "intern_doctor";
  const canSeeHandovers = isNurse || isMO || isConsultant || isIntern;
  const existingNurseDraft = reactExports.useMemo(() => {
    const today = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
    return docs.find(
      (d) => d.type === "nurse" && d.status === "draft" && d.givenBy.name === effectiveAuthorName && format(new Date(d.createdAt), "yyyy-MM-dd") === today
    ) ?? null;
  }, [docs, effectiveAuthorName]);
  const existingMODraft = reactExports.useMemo(() => {
    const today = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
    return docs.find(
      (d) => d.type === "mo" && d.status === "draft" && d.givenBy.name === effectiveAuthorName && format(new Date(d.createdAt), "yyyy-MM-dd") === today
    ) ?? null;
  }, [docs, effectiveAuthorName]);
  const checkForNewComments = reactExports.useCallback(() => {
    if (isConsultant) return;
    const globalKey = "handover_new_comments_global";
    try {
      const newCommentIds = JSON.parse(
        localStorage.getItem(globalKey) ?? "[]"
      );
      if (newCommentIds.length === 0) return;
      const allDocs = loadDocs(patientId);
      let foundNew = false;
      for (const doc of allDocs) {
        for (const c of doc.consultantComments ?? []) {
          if (newCommentIds.includes(c.id) && !unreadCommentIds.includes(c.id)) {
            addUnreadCommentId(currentUser.email, c.id);
            foundNew = true;
          }
        }
      }
      if (foundNew) {
        const updated = getUnreadCommentIds(currentUser.email);
        setUnreadCommentIds(updated);
        playAlarmTone();
        ue.error("⚠️ New consultant comment — please review handover!", {
          duration: 8e3
        });
        localStorage.removeItem(globalKey);
      }
    } catch {
    }
  }, [patientId, currentUser.email, isConsultant, unreadCommentIds]);
  const pollRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    checkForNewComments();
    pollRef.current = setInterval(checkForNewComments, 15e3);
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, [checkForNewComments]);
  reactExports.useEffect(() => {
    const handler = () => {
      if (document.visibilityState === "visible") checkForNewComments();
    };
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, [checkForNewComments]);
  function refresh() {
    setDocs(loadDocs(patientId));
    setShowForm(null);
  }
  function handleMarkCommentRead(cid) {
    markCommentRead(currentUser.email, cid);
    setUnreadCommentIds(getUnreadCommentIds(currentUser.email));
  }
  const unreadCount = unreadCommentIds.length;
  if (!canSeeHandovers) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 bg-white rounded-xl border border-violet-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRightLeft, { className: "w-10 h-10 text-gray-300 mx-auto mb-2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Handover records are visible to clinical staff only." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @media print {
          body > *:not(.print-handover) { display: none !important; }
          .print-handover { display: block !important; }
          button, [data-ocid*="button"], [data-ocid*="input"] { display: none !important; }
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-bold text-gray-800 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRightLeft, { className: "w-5 h-5 text-violet-600" }),
            "Handover System",
            unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full bg-red-600 text-white animate-pulse ml-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BellRing, { className: "w-3 h-3" }),
              " ",
              unreadCount,
              " Unread"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-0.5", children: "Submitted handovers are locked and immutable. Consultant comments trigger an alarm notification." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
          isNurse && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "bg-purple-600 hover:bg-purple-700 text-white gap-1.5",
              onClick: () => setShowForm(showForm === "nurse" ? null : "nurse"),
              "data-ocid": "handover.new_nurse_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
                existingNurseDraft ? "Edit Draft" : "New Handover"
              ]
            }
          ),
          isMO && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "bg-blue-600 hover:bg-blue-700 text-white gap-1.5",
              onClick: () => setShowForm(showForm === "mo" ? null : "mo"),
              "data-ocid": "handover.make_handover_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-3.5 h-3.5" }),
                existingMODraft ? "Edit Draft" : "Make Handover"
              ]
            }
          )
        ] })
      ] }),
      showForm && /* @__PURE__ */ jsxRuntimeExports.jsx(
        HandoverForm,
        {
          patientId,
          patientName,
          registerNumber: "",
          admissionDate: admissionDate ?? "",
          bedNumber: effectiveBed,
          ward: ward ?? "",
          department: department ?? "",
          primaryDiagnosis: primaryDiagnosis ?? "",
          secondaryDiagnoses,
          comorbidities,
          assignedConsultant: assignedConsultant ?? "",
          type: showForm,
          currentUser,
          viewerRole: effectiveViewerRole,
          latestVitals: effectiveVitals,
          activeMedications,
          trackedInvestigations,
          activeDiagnoses,
          latestPlan,
          existingDoc: showForm === "nurse" ? existingNurseDraft : existingMODraft,
          onSaved: refresh,
          onCancel: () => setShowForm(null)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: docs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "text-center py-10 bg-white rounded-xl border border-violet-100",
          "data-ocid": "handover.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRightLeft, { className: "w-10 h-10 text-gray-300 mx-auto mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-gray-500 mb-1", children: "No handovers yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: isNurse ? 'Click "New Handover" to create the first handover for this shift.' : isMO ? 'Click "Make Handover" to auto-generate an MO handover.' : "Handovers will appear here once submitted by nursing or medical staff." })
          ]
        }
      ) : docs.map((doc) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        DocView,
        {
          doc,
          currentUser,
          viewerRole: effectiveViewerRole,
          unreadCommentIds,
          onMarkCommentRead: handleMarkCommentRead,
          onSaved: refresh
        },
        doc.id
      )) })
    ] })
  ] });
}
const STANDARD_VACCINES = [
  { vaccineName: "BCG", isCustom: false },
  { vaccineName: "Hepatitis B (Birth)", isCustom: false },
  { vaccineName: "DPT-1 / Pentavalent-1", isCustom: false },
  { vaccineName: "DPT-2 / Pentavalent-2", isCustom: false },
  { vaccineName: "DPT-3 / Pentavalent-3", isCustom: false },
  { vaccineName: "OPV / Polio-1", isCustom: false },
  { vaccineName: "OPV / Polio-2", isCustom: false },
  { vaccineName: "OPV / Polio-3", isCustom: false },
  { vaccineName: "Measles-1 (MR)", isCustom: false },
  { vaccineName: "Measles-2 (MMR)", isCustom: false },
  { vaccineName: "Hepatitis B-2", isCustom: false },
  { vaccineName: "Hepatitis B-3", isCustom: false }
];
function buildDefaultVaccines(dobMs) {
  const schedule = [0, 0, 42, 70, 98, 42, 70, 98, 270, 450, 42, 98];
  return STANDARD_VACCINES.map((v, i) => {
    const dueDate = dobMs !== null ? new Date(dobMs + schedule[i] * 24 * 60 * 60 * 1e3).toISOString().slice(0, 10) : void 0;
    return {
      id: `std_${i}`,
      vaccineName: v.vaccineName,
      isCustom: false,
      dueDate
    };
  });
}
function fmtDate(isoOrMs) {
  if (!isoOrMs) return "—";
  try {
    if (typeof isoOrMs === "number")
      return format(new Date(isoOrMs), "d MMM yyyy");
    return format(parseISO(isoOrMs), "d MMM yyyy");
  } catch {
    return String(isoOrMs);
  }
}
function severityColor(s) {
  if (s === "mild") return "bg-yellow-100 text-yellow-800 border-yellow-200";
  if (s === "moderate")
    return "bg-orange-100 text-orange-800 border-orange-200";
  if (s === "severe") return "bg-red-100 text-red-800 border-red-200";
  return "bg-gray-100 text-gray-600 border-gray-200";
}
function CollapsibleSection({
  title,
  icon: Icon,
  color,
  count,
  children,
  defaultOpen = true
}) {
  const [open, setOpen] = reactExports.useState(defaultOpen);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl border ${color} overflow-hidden`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen((v) => !v),
        className: "w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50 transition-colors text-left",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 flex-shrink-0 opacity-70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm text-gray-800", children: title }),
            count !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs h-5 px-1.5 font-mono", children: count })
          ] }),
          open ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-gray-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-gray-400" })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-t border-current/10", children })
  ] });
}
function ProblemList({ visits, patientId, isDoctor }) {
  const doctorEmail = getDoctorEmail$1() ?? "default";
  const patientIdStr = patientId.toString();
  const visitDiagnoses = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    const sorted = [...visits].sort(
      (a, b) => Number(a.visitDate) - Number(b.visitDate)
    );
    for (const v of sorted) {
      let diag = v.diagnosis || "";
      try {
        const fd = getVisitFormData(v.id);
        if (fd == null ? void 0 : fd.diagnosis) diag = String(fd.diagnosis);
      } catch {
      }
      const dateMs = Number(v.visitDate) / 1e3;
      for (const d of diag.split(/[,;،\n]+/).map((s) => s.trim()).filter(Boolean)) {
        const key = d.toLowerCase();
        const existing = map.get(key);
        if (!existing) {
          map.set(key, {
            firstDate: dateMs,
            lastDate: dateMs,
            firstVisitId: v.id.toString(),
            chiefComplaint: v.chiefComplaint || ""
          });
        } else {
          existing.lastDate = dateMs;
        }
      }
    }
    return map;
  }, [visits]);
  const [items, setItems] = reactExports.useState(
    () => loadProblemList(doctorEmail, patientIdStr)
  );
  const [expandedId, setExpandedId] = reactExports.useState(null);
  const mergedItems = reactExports.useMemo(() => {
    const existing = new Map(items.map((it) => [it.name.toLowerCase(), it]));
    const result = [...items];
    for (const key of visitDiagnoses.keys()) {
      if (!existing.has(key)) {
        result.push({
          id: `auto_${key}`,
          name: key,
          status: "active",
          source: "prescription"
        });
      }
    }
    return result;
  }, [items, visitDiagnoses]);
  const active = mergedItems.filter((i) => i.status === "active");
  const resolved = mergedItems.filter((i) => i.status === "resolved");
  function toggleStatus(id) {
    if (!isDoctor) return;
    const next = mergedItems.map(
      (it) => it.id === id ? {
        ...it,
        status: it.status === "active" ? "resolved" : "active"
      } : it
    );
    setItems(next);
    saveProblemList(doctorEmail, patientIdStr, next);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CollapsibleSection,
    {
      title: "Problem List",
      icon: ListChecks,
      color: "border-indigo-200",
      count: mergedItems.length,
      children: mergedItems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-sm text-gray-400 text-center py-4",
          "data-ocid": "history_features.problem_list.empty_state",
          children: "No diagnoses recorded yet."
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        active.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-indigo-700 uppercase tracking-wide mb-1.5", children: "Active" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: active.map((item, idx) => {
            const info = visitDiagnoses.get(item.name.toLowerCase());
            const isExpanded = expandedId === item.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "border border-indigo-100 rounded-lg overflow-hidden",
                "data-ocid": `history_features.problem_list.item.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setExpandedId(isExpanded ? null : item.id),
                      className: "w-full flex items-center gap-2.5 px-3 py-2 bg-indigo-50 hover:bg-indigo-100 text-left transition-colors",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-indigo-600 text-white text-xs shrink-0", children: "Active" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm text-gray-800 flex-1 capitalize", children: item.name }),
                        info && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-400 shrink-0", children: [
                          fmtDate(info.firstDate),
                          info.firstDate !== info.lastDate ? ` → ${fmtDate(info.lastDate)}` : ""
                        ] }),
                        isDoctor && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            size: "sm",
                            variant: "ghost",
                            className: "h-6 px-1.5 text-xs text-gray-400 hover:text-gray-700 shrink-0",
                            onClick: (e) => {
                              e.stopPropagation();
                              toggleStatus(item.id);
                              ue.success(`Marked as resolved: ${item.name}`);
                            },
                            "data-ocid": `history_features.problem_list.toggle.${idx + 1}`,
                            children: "Resolve"
                          }
                        ),
                        isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5 text-gray-400 shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 text-gray-400 shrink-0" })
                      ]
                    }
                  ),
                  isExpanded && info && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 bg-white text-sm space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-600", children: "First appeared:" }),
                      " ",
                      fmtDate(info.firstDate)
                    ] }),
                    info.firstDate !== info.lastDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-600", children: "Most recent:" }),
                      " ",
                      fmtDate(info.lastDate)
                    ] }),
                    info.chiefComplaint && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-600", children: "Chief Complaint:" }),
                      " ",
                      info.chiefComplaint
                    ] })
                  ] })
                ]
              },
              item.id
            );
          }) })
        ] }),
        resolved.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5", children: "Resolved" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: resolved.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-2.5 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200",
              "data-ocid": `history_features.problem_list.resolved.${idx + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-gray-400 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-500 flex-1 capitalize line-through", children: item.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs text-gray-400", children: "Resolved" }),
                isDoctor && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "ghost",
                    className: "h-6 px-1.5 text-xs text-gray-400 hover:text-indigo-600 shrink-0",
                    onClick: () => {
                      toggleStatus(item.id);
                      ue.success(`Reactivated: ${item.name}`);
                    },
                    children: "Reactivate"
                  }
                )
              ]
            },
            item.id
          )) })
        ] })
      ] })
    }
  );
}
function ComplaintTrendTimeline({ visits }) {
  const trends = reactExports.useMemo(() => computeComplaintTrends(visits), [visits]);
  const [selectedTrend, setSelectedTrend] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CollapsibleSection,
    {
      title: "Complaint Trend",
      icon: TrendingUp,
      color: "border-amber-200",
      count: trends.length,
      children: [
        trends.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-sm text-gray-400 text-center py-4",
            "data-ocid": "history_features.complaint_trend.empty_state",
            children: "No complaints recorded."
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: trends.map((t, idx) => {
          const lastEntry = t.severityHistory[t.severityHistory.length - 1];
          const lastSeverity = (lastEntry == null ? void 0 : lastEntry.severity) ?? "mild";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setSelectedTrend(t),
              className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors text-left",
              "data-ocid": `history_features.complaint_trend.item.${idx + 1}`,
              children: [
                t.currentStatus === "active" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-red-500 shrink-0 animate-pulse" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-green-500 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm text-gray-800 flex-1 capitalize", children: t.complaintName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400 shrink-0", children: fmtDate(t.firstAppeared) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: `text-xs shrink-0 capitalize ${severityColor(lastSeverity)}`,
                    children: lastSeverity
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: `text-xs shrink-0 ${t.currentStatus === "active" ? "bg-red-50 text-red-700 border-red-200" : "bg-green-50 text-green-700 border-green-200"}`,
                    children: t.currentStatus === "active" ? "Active" : "Resolved"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-gray-300 shrink-0" })
              ]
            },
            t.complaintName
          );
        }) }),
        selectedTrend && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Dialog,
          {
            open: !!selectedTrend,
            onOpenChange: () => setSelectedTrend(null),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DialogContent,
              {
                className: "max-w-sm",
                "data-ocid": "history_features.complaint_trend.dialog",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "capitalize flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-amber-500" }),
                    selectedTrend.complaintName
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600", children: [
                      "First appeared:",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: fmtDate(selectedTrend.firstAppeared) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-700 mb-2", children: "Severity History" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: selectedTrend.severityHistory.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "flex items-center gap-2",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400 w-20 shrink-0", children: fmtDate(h.date) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Badge,
                              {
                                variant: "outline",
                                className: `text-xs capitalize ${severityColor(h.severity)}`,
                                children: h.severity
                              }
                            )
                          ]
                        },
                        `${h.visitId}-${i}`
                      )) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      onClick: () => setSelectedTrend(null),
                      "data-ocid": "history_features.complaint_trend.close_button",
                      children: "Close"
                    }
                  ) })
                ]
              }
            )
          }
        )
      ]
    }
  );
}
function CompareVisits({ visits, isDoctor }) {
  const [open, setOpen] = reactExports.useState(false);
  const [leftId, setLeftId] = reactExports.useState("");
  const [rightId, setRightId] = reactExports.useState("");
  const sorted = reactExports.useMemo(
    () => [...visits].sort((a, b) => Number(b.visitDate) - Number(a.visitDate)),
    [visits]
  );
  const leftVisit = sorted.find((v) => v.id.toString() === leftId) ?? null;
  const rightVisit = sorted.find((v) => v.id.toString() === rightId) ?? null;
  function getExtData(v) {
    try {
      const fd = getVisitFormData(v.id);
      if (fd) return fd;
    } catch {
    }
    return {};
  }
  function diffLines(a, b) {
    const aLines = a.split(/[,;\n]+/).map((s) => s.trim()).filter(Boolean);
    const bLines = b.split(/[,;\n]+/).map((s) => s.trim()).filter(Boolean);
    const all = /* @__PURE__ */ new Set([...aLines, ...bLines]);
    return Array.from(all).map((text) => {
      const inA = aLines.some((l) => l.toLowerCase() === text.toLowerCase());
      const inB = bLines.some((l) => l.toLowerCase() === text.toLowerCase());
      if (inA && inB) return { text, state: "same" };
      if (inA) return { text, state: "left" };
      return { text, state: "right" };
    });
  }
  if (!isDoctor) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "outline",
        size: "sm",
        className: "gap-1.5 text-xs border-blue-300 text-blue-700 hover:bg-blue-50",
        onClick: () => setOpen(true),
        "data-ocid": "history_features.compare_visits.open_modal_button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GitCompare, { className: "w-3.5 h-3.5" }),
          "Compare Visits"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "max-w-4xl max-h-[85vh] overflow-y-auto",
        "data-ocid": "history_features.compare_visits.dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GitCompare, { className: "w-4 h-4 text-blue-600" }),
            "Compare Two Visits"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium mb-1 block", children: "Left Visit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: leftId,
                  onChange: (e) => setLeftId(e.target.value),
                  className: "w-full border border-input rounded-lg px-3 py-2 text-sm bg-background",
                  "data-ocid": "history_features.compare_visits.select",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "— Select Visit —" }),
                    sorted.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: v.id.toString(), children: [
                      format(
                        new Date(Number(v.visitDate / 1000000n)),
                        "d MMM yyyy"
                      ),
                      " ",
                      "— ",
                      v.visitType
                    ] }, v.id.toString()))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium mb-1 block", children: "Right Visit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: rightId,
                  onChange: (e) => setRightId(e.target.value),
                  className: "w-full border border-input rounded-lg px-3 py-2 text-sm bg-background",
                  "data-ocid": "history_features.compare_visits.select",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "— Select Visit —" }),
                    sorted.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: v.id.toString(), children: [
                      format(
                        new Date(Number(v.visitDate / 1000000n)),
                        "d MMM yyyy"
                      ),
                      " ",
                      "— ",
                      v.visitType
                    ] }, v.id.toString()))
                  ]
                }
              )
            ] })
          ] }),
          leftVisit && rightVisit ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
            {
              label: "Chief Complaints",
              left: leftVisit.chiefComplaint ?? "",
              right: rightVisit.chiefComplaint ?? ""
            },
            {
              label: "Examination Findings",
              left: getExtData(leftVisit).examinationFindings ?? leftVisit.physicalExamination ?? "",
              right: getExtData(rightVisit).examinationFindings ?? rightVisit.physicalExamination ?? ""
            },
            {
              label: "Diagnosis",
              left: getExtData(leftVisit).diagnosis ?? leftVisit.diagnosis ?? "",
              right: getExtData(rightVisit).diagnosis ?? rightVisit.diagnosis ?? ""
            }
          ].map(({ label, left, right }) => {
            const diff = diffLines(left, right);
            const hasChange = diff.some((d) => d.state !== "same");
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-gray-700", children: label }),
                !hasChange && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "text-xs text-gray-400 border-gray-200",
                    children: "No change"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 rounded-lg p-3 space-y-1 min-h-[60px]", children: [
                  diff.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: `text-xs rounded px-1 ${d.state === "left" ? "bg-red-100 text-red-700 line-through" : d.state === "same" ? "text-gray-600" : "text-gray-300"}`,
                      children: d.state !== "right" ? d.text : ""
                    },
                    `${d.text}-${i}`
                  )),
                  !diff.some((d) => d.state !== "right") && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-300 italic", children: "—" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 rounded-lg p-3 space-y-1 min-h-[60px]", children: [
                  diff.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: `text-xs rounded px-1 ${d.state === "right" ? "bg-green-100 text-green-700" : d.state === "same" ? "text-gray-600" : "text-gray-300"}`,
                      children: d.state !== "left" ? d.text : ""
                    },
                    `${d.text}-${i}`
                  )),
                  !diff.some((d) => d.state !== "left") && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-300 italic", children: "—" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 text-center", children: format(
                  new Date(Number(leftVisit.visitDate / 1000000n)),
                  "d MMM yyyy"
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 text-center", children: format(
                  new Date(Number(rightVisit.visitDate / 1000000n)),
                  "d MMM yyyy"
                ) })
              ] })
            ] }, label);
          }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400 text-center py-8", children: "Select two visits above to compare them side by side." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => setOpen(false),
              "data-ocid": "history_features.compare_visits.close_button",
              children: "Close"
            }
          ) })
        ]
      }
    ) })
  ] });
}
function VaccinationTable({ patient, isDoctor }) {
  const doctorEmail = getDoctorEmail$1() ?? "default";
  const patientIdStr = patient.id.toString();
  const dobMs = patient.dateOfBirth ? Number(patient.dateOfBirth) / 1e6 : null;
  const [records, setRecords] = reactExports.useState(() => {
    const saved = loadVaccinationRecords(doctorEmail, patientIdStr);
    if (saved.length > 0) return saved;
    return buildDefaultVaccines(dobMs);
  });
  const [editId, setEditId] = reactExports.useState(null);
  const [showAddForm, setShowAddForm] = reactExports.useState(false);
  const [newVaccine, setNewVaccine] = reactExports.useState({
    vaccineName: "",
    isCustom: true
  });
  reactExports.useEffect(() => {
    saveVaccinationRecords(doctorEmail, patientIdStr, records);
  }, [records, doctorEmail, patientIdStr]);
  function updateRecord(id, patch) {
    setRecords(
      (prev) => prev.map((r) => r.id === id ? { ...r, ...patch } : r)
    );
    setEditId(null);
    ue.success("Vaccination record updated");
  }
  function deleteRecord(id) {
    setRecords((prev) => prev.filter((r) => r.id !== id));
    ue.success("Record deleted");
  }
  function addCustomVaccine() {
    var _a;
    if (!((_a = newVaccine.vaccineName) == null ? void 0 : _a.trim())) {
      ue.error("Vaccine name required");
      return;
    }
    const record = {
      id: `custom_${Date.now()}`,
      vaccineName: newVaccine.vaccineName,
      dateGiven: newVaccine.dateGiven,
      dueDate: newVaccine.dueDate,
      givenBy: newVaccine.givenBy,
      batchNo: newVaccine.batchNo,
      isCustom: true
    };
    setRecords((prev) => [...prev, record]);
    setNewVaccine({ vaccineName: "", isCustom: true });
    setShowAddForm(false);
    ue.success("Vaccine added");
  }
  const overdueCount = records.filter((r) => isVaccineOverdue(r)).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CollapsibleSection,
    {
      title: "Vaccination / Immunization",
      icon: Syringe,
      color: "border-green-200",
      count: records.length,
      children: [
        overdueCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-red-500 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-red-700 font-medium", children: [
            overdueCount,
            " vaccine",
            overdueCount !== 1 ? "s" : "",
            " overdue"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto -mx-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-gray-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold", children: "Vaccine" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold", children: "Date Given" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold", children: "Due Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold", children: "Given By" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold", children: "Batch No" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold", children: "Status" }),
            isDoctor && /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold w-20", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: records.map((r, idx) => {
            const overdue = isVaccineOverdue(r);
            const given = !!r.dateGiven;
            const isEditing = editId === r.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TableRow,
              {
                className: overdue ? "bg-red-50/40" : "",
                "data-ocid": `history_features.vaccination.item.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm font-medium py-2", children: isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      className: "h-7 text-xs",
                      defaultValue: r.vaccineName,
                      onBlur: (e) => updateRecord(r.id, { vaccineName: e.target.value })
                    }
                  ) : r.vaccineName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs py-2", children: isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "date",
                      className: "h-7 text-xs",
                      defaultValue: r.dateGiven ?? "",
                      onBlur: (e) => updateRecord(r.id, {
                        dateGiven: e.target.value || void 0
                      })
                    }
                  ) : fmtDate(r.dateGiven) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs py-2", children: isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "date",
                      className: "h-7 text-xs",
                      defaultValue: r.dueDate ?? "",
                      onBlur: (e) => updateRecord(r.id, {
                        dueDate: e.target.value || void 0
                      })
                    }
                  ) : fmtDate(r.dueDate) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs py-2", children: isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      className: "h-7 text-xs",
                      defaultValue: r.givenBy ?? "",
                      onBlur: (e) => updateRecord(r.id, {
                        givenBy: e.target.value || void 0
                      })
                    }
                  ) : r.givenBy ?? "—" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs py-2 font-mono", children: isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      className: "h-7 text-xs",
                      defaultValue: r.batchNo ?? "",
                      onBlur: (e) => updateRecord(r.id, {
                        batchNo: e.target.value || void 0
                      })
                    }
                  ) : r.batchNo ?? "—" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2", children: given ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-100 text-green-700 border-green-200 border text-xs", children: "Given" }) : overdue ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-red-100 text-red-700 border-red-200 border text-xs", children: "Overdue" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: "text-xs text-gray-400",
                      children: "Pending"
                    }
                  ) }),
                  isDoctor && /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        variant: "ghost",
                        className: "h-6 w-6 p-0 text-gray-400 hover:text-blue-600",
                        onClick: () => setEditId(isEditing ? null : r.id),
                        "data-ocid": `history_features.vaccination.edit_button.${idx + 1}`,
                        children: isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3 h-3" })
                      }
                    ),
                    r.isCustom && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        variant: "ghost",
                        className: "h-6 w-6 p-0 text-gray-400 hover:text-red-600",
                        onClick: () => deleteRecord(r.id),
                        "data-ocid": `history_features.vaccination.delete_button.${idx + 1}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" })
                      }
                    )
                  ] }) })
                ]
              },
              r.id
            );
          }) })
        ] }) }),
        isDoctor && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: showAddForm ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-green-200 rounded-lg p-3 bg-green-50 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-green-800", children: "Add Custom Vaccine" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Vaccine Name *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  className: "h-7 text-xs mt-0.5",
                  placeholder: "e.g. Typhoid",
                  value: newVaccine.vaccineName ?? "",
                  onChange: (e) => setNewVaccine((v) => ({
                    ...v,
                    vaccineName: e.target.value
                  })),
                  "data-ocid": "history_features.vaccination.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Date Given" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "date",
                  className: "h-7 text-xs mt-0.5",
                  value: newVaccine.dateGiven ?? "",
                  onChange: (e) => setNewVaccine((v) => ({
                    ...v,
                    dateGiven: e.target.value || void 0
                  }))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Due Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "date",
                  className: "h-7 text-xs mt-0.5",
                  value: newVaccine.dueDate ?? "",
                  onChange: (e) => setNewVaccine((v) => ({
                    ...v,
                    dueDate: e.target.value || void 0
                  }))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Given By" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  className: "h-7 text-xs mt-0.5",
                  placeholder: "Doctor / Nurse name",
                  value: newVaccine.givenBy ?? "",
                  onChange: (e) => setNewVaccine((v) => ({
                    ...v,
                    givenBy: e.target.value || void 0
                  }))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Batch No" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  className: "h-7 text-xs mt-0.5",
                  placeholder: "e.g. BTH202601",
                  value: newVaccine.batchNo ?? "",
                  onChange: (e) => setNewVaccine((v) => ({
                    ...v,
                    batchNo: e.target.value || void 0
                  }))
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
                className: "h-7 text-xs",
                onClick: () => setShowAddForm(false),
                "data-ocid": "history_features.vaccination.cancel_button",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                className: "h-7 text-xs bg-green-600 hover:bg-green-700 text-white",
                onClick: addCustomVaccine,
                "data-ocid": "history_features.vaccination.submit_button",
                children: "Add Vaccine"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "gap-1.5 text-xs border-green-300 text-green-700 hover:bg-green-50 mt-1",
            onClick: () => setShowAddForm(true),
            "data-ocid": "history_features.vaccination.upload_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
              "Add Vaccine"
            ]
          }
        ) })
      ]
    }
  );
}
function HistoryFeaturesPanel({
  visits,
  patient,
  isDoctor
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mt-4", "data-ocid": "history_features.panel", children: [
    isDoctor && visits.length >= 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(CompareVisits, { visits, isDoctor }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProblemList, { visits, patientId: patient.id, isDoctor }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ComplaintTrendTimeline, { visits }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VaccinationTable, { patient, isDoctor })
  ] });
}
function getDatesInRange(start, end) {
  const dates = [];
  const cur = new Date(start);
  const endDate = new Date(end);
  while (cur <= endDate) {
    dates.push(cur.toISOString().split("T")[0]);
    cur.setDate(cur.getDate() + 1);
  }
  return dates;
}
function buildConsecutiveMap(records) {
  const byDrug = {};
  for (const r of records) {
    if (!byDrug[r.drugName]) byDrug[r.drugName] = [];
    byDrug[r.drugName].push(r);
  }
  const result = {};
  for (const [drug, drugRecords] of Object.entries(byDrug)) {
    const sorted = [...drugRecords].sort((a, b) => {
      const da = `${a.date} ${a.scheduledTime}`;
      const db = `${b.date} ${b.scheduledTime}`;
      return da.localeCompare(db);
    });
    let count = 0;
    for (let i = sorted.length - 1; i >= 0; i--) {
      if (sorted[i].status === "not_given") count++;
      else break;
    }
    result[drug] = count;
  }
  return result;
}
function MissedDoseReport({
  patientId,
  patientName,
  admissionDate
}) {
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const defaultStart = (admissionDate == null ? void 0 : admissionDate.split("T")[0]) ?? today;
  const [startDate, setStartDate] = reactExports.useState(defaultStart);
  const [endDate, setEndDate] = reactExports.useState(today);
  const [filterTab, setFilterTab] = reactExports.useState("all");
  const allRecords = reactExports.useMemo(() => {
    const dates = getDatesInRange(startDate, endDate);
    const records = [];
    for (const d of dates) {
      records.push(...loadMedAdminRecords(patientId, d));
    }
    return records.sort((a, b) => {
      if (a.date !== b.date) return a.date.localeCompare(b.date);
      return a.scheduledTime.localeCompare(b.scheduledTime);
    });
  }, [patientId, startDate, endDate]);
  const consecutiveMap = reactExports.useMemo(
    () => buildConsecutiveMap(allRecords),
    [allRecords]
  );
  const filtered = reactExports.useMemo(() => {
    if (filterTab === "all") return allRecords;
    return allRecords.filter((r) => r.status === filterTab);
  }, [allRecords, filterTab]);
  const missedCount = allRecords.filter((r) => r.status === "not_given").length;
  const delayedCount = allRecords.filter((r) => r.status === "delayed").length;
  const givenCount = allRecords.filter((r) => r.status === "given").length;
  const escalatedDrugs = reactExports.useMemo(
    () => Object.entries(consecutiveMap).filter(([, count]) => count >= 2).map(([drug, count]) => `${drug} (${count}×)`),
    [consecutiveMap]
  );
  function exportReport() {
    const header = [
      "Drug Name,Dose,Date,Scheduled Time,Status,Consecutive Missed,Recorded By,Role"
    ];
    const rows = allRecords.map((r) => {
      const consec = consecutiveMap[r.drugName] ?? 0;
      return `"${r.drugName}","${r.dose || ""}","${r.date}","${r.scheduledTime}","${r.status}","${consec}","${r.recordedBy}","${r.recordedByRole}"`;
    });
    const summary = [
      "",
      `"Summary: Given: ${givenCount} | Not Given: ${missedCount} | Delayed: ${delayedCount}"`
    ];
    const csv = [...header, ...rows, ...summary].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `MedAdmin_${patientName.replace(/\s/g, "_")}_${startDate}_to_${endDate}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "missed_dose_report.container", children: [
    escalatedDrugs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4",
        "data-ocid": "missed_dose_report.alert",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-red-800", children: "⚠️ Escalated — Consecutive Missed Dose Alert" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-red-700 mt-1", children: [
              "The following drugs have been missed 2+ consecutive times and Consultant has been notified:",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: escalatedDrugs.join(", ") })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 border border-green-200 rounded-xl p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-green-600 mx-auto mb-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-green-700", children: givenCount }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600", children: "Given" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 border border-red-200 rounded-xl p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4 text-red-600 mx-auto mb-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-red-700", children: missedCount }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-600", children: "Not Given" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 border border-orange-200 rounded-xl p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-orange-600 mx-auto mb-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-orange-700", children: delayedCount }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-orange-600", children: "Delayed" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "label",
          {
            htmlFor: "mdr-start",
            className: "text-xs font-medium text-muted-foreground",
            children: "From"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "mdr-start",
            type: "date",
            value: startDate,
            onChange: (e) => setStartDate(e.target.value),
            className: "h-8 text-xs w-36",
            "data-ocid": "missed_dose_report.start_date"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "label",
          {
            htmlFor: "mdr-end",
            className: "text-xs font-medium text-muted-foreground",
            children: "To"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "mdr-end",
            type: "date",
            value: endDate,
            onChange: (e) => setEndDate(e.target.value),
            className: "h-8 text-xs w-36",
            "data-ocid": "missed_dose_report.end_date"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          variant: "outline",
          onClick: exportReport,
          className: "h-8 gap-1.5 text-xs",
          "data-ocid": "missed_dose_report.export_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
            "Export CSV"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Tabs,
      {
        value: filterTab,
        onValueChange: (v) => setFilterTab(v),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "h-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "all",
                className: "text-xs h-7",
                "data-ocid": "missed_dose_report.tab.all",
                children: [
                  "All (",
                  allRecords.length,
                  ")"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "given",
                className: "text-xs h-7",
                "data-ocid": "missed_dose_report.tab.given",
                children: [
                  "Given (",
                  givenCount,
                  ")"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "not_given",
                className: "text-xs h-7",
                "data-ocid": "missed_dose_report.tab.not_given",
                children: [
                  "Not Given (",
                  missedCount,
                  ")"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "delayed",
                className: "text-xs h-7",
                "data-ocid": "missed_dose_report.tab.delayed",
                children: [
                  "Delayed (",
                  delayedCount,
                  ")"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: filterTab, className: "mt-3", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center py-10 text-muted-foreground text-sm",
              "data-ocid": "missed_dose_report.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "w-8 h-8 mx-auto mb-2 opacity-30" }),
                "No records found for this filter."
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-3 font-semibold text-muted-foreground", children: "Drug" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-3 font-semibold text-muted-foreground", children: "Dose" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-3 font-semibold text-muted-foreground", children: "Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-3 font-semibold text-muted-foreground", children: "Scheduled" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-3 font-semibold text-muted-foreground", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 px-3 font-semibold text-muted-foreground", children: "Consecutive Missed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-3 font-semibold text-muted-foreground", children: "Recorded By" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.map((r, i) => {
              const consec = consecutiveMap[r.drugName] ?? 0;
              const isEscalated = r.status === "not_given" && consec >= 2;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: cn(
                    "border-b border-border/50",
                    isEscalated && "bg-red-100/60",
                    !isEscalated && r.status === "given" && "bg-green-50/50",
                    !isEscalated && r.status === "not_given" && "bg-red-50/50",
                    r.status === "delayed" && "bg-orange-50/50"
                  ),
                  "data-ocid": `missed_dose_report.row.${i}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-3 font-medium", children: [
                      isEscalated && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-1", children: "⚠️" }),
                      r.drugName
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 text-muted-foreground", children: r.dose || "—" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 text-muted-foreground", children: r.date }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 font-mono", children: r.scheduledTime }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        className: cn(
                          "text-[10px] font-semibold",
                          r.status === "given" && "bg-green-100 text-green-700 border border-green-200",
                          r.status === "not_given" && "bg-red-100 text-red-700 border border-red-200",
                          r.status === "delayed" && "bg-orange-100 text-orange-700 border border-orange-200",
                          r.status === "pending" && "bg-muted text-muted-foreground border border-border"
                        ),
                        children: r.status === "given" ? "✅ Given" : r.status === "not_given" ? "❌ Not Given" : r.status === "delayed" ? "⏱ Delayed" : "Pending"
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 text-center", children: consec >= 2 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-red-700", children: [
                      consec,
                      "×"
                    ] }) : consec > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-orange-600", children: [
                      consec,
                      "×"
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "—" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-3 text-muted-foreground", children: [
                      r.recordedBy,
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground/60", children: [
                        "(",
                        r.recordedByRole,
                        ")"
                      ] })
                    ] })
                  ]
                },
                `${r.drugName}-${r.date}-${r.scheduledTime}-${i}`
              );
            }) })
          ] }) }) })
        ]
      }
    )
  ] });
}
function getChatKey(patientId) {
  return `patientChat_${patientId}`;
}
function loadMessages(patientId) {
  try {
    const raw = localStorage.getItem(getChatKey(patientId));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveMessages(patientId, msgs) {
  localStorage.setItem(getChatKey(patientId), JSON.stringify(msgs));
}
function loadTeleconsults(patientId) {
  try {
    const raw = localStorage.getItem(`teleconsults_${patientId}`);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveTeleconsults(patientId, records) {
  localStorage.setItem(`teleconsults_${patientId}`, JSON.stringify(records));
}
function markPatientMessagesSeen(patientId, seenBy) {
  const msgs = loadMessages(patientId);
  const now = (/* @__PURE__ */ new Date()).toISOString();
  let changed = false;
  const updated = msgs.map((m) => {
    if (m.senderRole === "patient" && !m.seenAt) {
      changed = true;
      return { ...m, seenAt: now, seenBy };
    }
    return m;
  });
  if (changed) saveMessages(patientId, updated);
  return updated;
}
function seenAgo(seenAt) {
  try {
    return formatDistanceToNow(new Date(seenAt), { addSuffix: true });
  } catch {
    return "Seen";
  }
}
const CLINICAL_ROLES = [
  "consultant_doctor",
  "medical_officer",
  "intern_doctor",
  "doctor",
  "admin"
];
function TeleconsultHistory({ patientId }) {
  const [records, setRecords] = reactExports.useState(
    () => [...loadTeleconsults(patientId)].reverse()
  );
  if (records.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-8 text-muted-foreground",
        "data-ocid": "teleconsult_history.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-8 h-8 mx-auto mb-2 opacity-40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No teleconsult sessions yet" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "teleconsult_history.list", children: [
    records.map((rec, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-xl p-4 space-y-2",
        "data-ocid": `teleconsult_history.item.${idx + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-teal-100 text-teal-800 border-teal-200 border text-xs", children: "Teleconsult" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: format(new Date(rec.timestamp), "dd MMM yyyy, h:mm a") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-medium text-foreground", children: [
              rec.doctorName,
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground font-normal ml-1", children: [
                "(",
                rec.doctorRole,
                ")"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Chief Complaint" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-foreground", children: rec.chiefComplaint })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Assessment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-foreground whitespace-pre-wrap", children: rec.assessment })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Advice" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-foreground whitespace-pre-wrap", children: rec.advice })
            ] }),
            rec.hasPrescription && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-medium", children: "Prescription indicated — see Patient Profile → Prescriptions" })
          ] })
        ]
      },
      rec.id
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        className: "hidden",
        onClick: () => setRecords([...loadTeleconsults(patientId)].reverse())
      }
    )
  ] });
}
function TeleconsultPanel({
  patientId,
  patientName,
  doctorName,
  doctorRole,
  onSaved,
  onClose
}) {
  const [chiefComplaint, setChiefComplaint] = reactExports.useState("");
  const [assessment, setAssessment] = reactExports.useState("");
  const [advice, setAdvice] = reactExports.useState("");
  const [hasPrescription, setHasPrescription] = reactExports.useState(false);
  function handleSave() {
    if (!chiefComplaint.trim()) {
      ue.error("Chief complaint is required.");
      return;
    }
    const record = {
      id: `tc_${Date.now()}_${Math.random().toString(36).slice(2)}`,
      patientId: String(patientId),
      doctorName,
      doctorRole,
      chiefComplaint: chiefComplaint.trim(),
      assessment: assessment.trim(),
      advice: advice.trim(),
      hasPrescription,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    const existing = loadTeleconsults(patientId);
    saveTeleconsults(patientId, [...existing, record]);
    ue.success("Teleconsult note saved");
    onSaved(record);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border-b border-border bg-teal-50/60 px-4 py-4 space-y-3",
      "data-ocid": "teleconsult_panel.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-4 h-4 text-teal-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-teal-800", children: [
              "Teleconsult — ",
              patientName,
              " —",
              " ",
              format(/* @__PURE__ */ new Date(), "dd MMM yyyy, h:mm a")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onClose,
              className: "text-muted-foreground hover:text-foreground transition-colors",
              "data-ocid": "teleconsult_panel.close_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs font-semibold text-teal-800", children: [
              "Chief Complaint ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: chiefComplaint,
                onChange: (e) => setChiefComplaint(e.target.value),
                placeholder: "e.g. Fever for 3 days, headache",
                className: "w-full border border-border rounded-lg px-3 py-1.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-teal-300",
                "data-ocid": "teleconsult_panel.chief_complaint.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-teal-800", children: "Brief Assessment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                value: assessment,
                onChange: (e) => setAssessment(e.target.value),
                placeholder: "Clinical assessment, probable diagnosis, severity...",
                className: "resize-none text-sm min-h-[72px]",
                "data-ocid": "teleconsult_panel.assessment.textarea"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-teal-800", children: "Advice" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                value: advice,
                onChange: (e) => setAdvice(e.target.value),
                placeholder: "Medication advice, dietary instructions, when to visit...",
                className: "resize-none text-sm min-h-[60px]",
                "data-ocid": "teleconsult_panel.advice.textarea"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-2 cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: hasPrescription,
                onChange: (e) => setHasPrescription(e.target.checked),
                className: "mt-0.5 accent-teal-600",
                "data-ocid": "teleconsult_panel.prescription.checkbox"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-foreground", children: [
              "Write Prescription",
              hasPrescription && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs text-muted-foreground mt-0.5", children: "Prescription can be written via Patient Profile → Prescriptions" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            onClick: handleSave,
            className: "bg-teal-600 hover:bg-teal-700 text-white gap-2",
            "data-ocid": "teleconsult_panel.submit_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-3.5 h-3.5" }),
              "Save Teleconsult Note"
            ]
          }
        ) })
      ]
    }
  );
}
function PatientChat({
  patientId,
  currentRole,
  currentUserName,
  patientName = "Patient",
  floating = false,
  onClose
}) {
  const isDoctor = currentRole === "doctor" || currentRole === "admin" || currentRole === "consultant_doctor" || currentRole === "medical_officer" || currentRole === "intern_doctor";
  const canTeleconsult = CLINICAL_ROLES.includes(currentRole);
  const [messages, setMessages] = reactExports.useState(
    () => isDoctor ? markPatientMessagesSeen(patientId, currentUserName) : loadMessages(patientId)
  );
  const [text, setText] = reactExports.useState("");
  const [showTeleconsult, setShowTeleconsult] = reactExports.useState(false);
  const [showTeleconsultHistory, setShowTeleconsultHistory] = reactExports.useState(false);
  const bottomRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (isDoctor) {
      const updated = markPatientMessagesSeen(patientId, currentUserName);
      setMessages(updated);
    }
  }, [patientId, isDoctor]);
  reactExports.useEffect(() => {
    if (isDoctor) return;
    const iv = setInterval(() => {
      setMessages(loadMessages(patientId));
    }, 5e3);
    return () => clearInterval(iv);
  }, [patientId, isDoctor]);
  reactExports.useEffect(() => {
    var _a;
    (_a = bottomRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  function sendMessage() {
    const trimmed = text.trim();
    if (!trimmed) return;
    const msg = {
      id: `${Date.now()}_${Math.random().toString(36).slice(2)}`,
      senderId: currentUserName,
      senderRole: currentRole,
      senderName: currentUserName,
      text: trimmed,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    const updated = [...messages, msg];
    setMessages(updated);
    saveMessages(patientId, updated);
    setText("");
  }
  function handleTeleconsultSaved(record) {
    const notifMsg = {
      id: `tc_notif_${Date.now()}`,
      senderId: currentUserName,
      senderRole: "doctor",
      senderName: currentUserName,
      text: `${currentUserName} completed a teleconsult at ${format(new Date(record.timestamp), "h:mm a")}`,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    const updated = [...messages, notifMsg];
    setMessages(updated);
    saveMessages(patientId, updated);
    setShowTeleconsult(false);
  }
  const teleconsultCount = loadTeleconsults(patientId).length;
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-border bg-gradient-to-r from-teal-600 to-teal-700 rounded-t-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 text-white" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-white", children: "Patient Chat" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        canTeleconsult && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setShowTeleconsult((p) => !p),
            className: "flex items-center gap-1.5 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg px-2.5 py-1 text-xs font-medium transition-colors",
            "data-ocid": "teleconsult.open_modal_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-3.5 h-3.5" }),
              "Teleconsult"
            ]
          }
        ),
        onClose && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onClose,
            className: "text-white/80 hover:text-white transition-colors",
            "data-ocid": "patient_chat.close_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
          }
        )
      ] })
    ] }),
    showTeleconsult && /* @__PURE__ */ jsxRuntimeExports.jsx(
      TeleconsultPanel,
      {
        patientId,
        patientName,
        doctorName: currentUserName,
        doctorRole: currentRole,
        onSaved: handleTeleconsultSaved,
        onClose: () => setShowTeleconsult(false)
      }
    ),
    canTeleconsult && teleconsultCount > 0 && !showTeleconsult && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setShowTeleconsultHistory((p) => !p),
        className: "flex items-center justify-between px-4 py-2 bg-teal-50 border-b border-border text-xs text-teal-700 hover:bg-teal-100 transition-colors",
        "data-ocid": "teleconsult_history.toggle",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3 h-3" }),
            teleconsultCount,
            " teleconsult",
            teleconsultCount !== 1 ? "s" : "",
            " on record"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              className: `w-3.5 h-3.5 transition-transform ${showTeleconsultHistory ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    showTeleconsultHistory && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border bg-muted/30 px-4 py-3 max-h-72 overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide", children: "Teleconsult History" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TeleconsultHistory, { patientId })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "flex-1 px-4 py-3", children: messages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-8",
        "data-ocid": "patient_chat.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-8 h-8 text-muted-foreground mx-auto mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No messages yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/60 mt-1", children: "Start a conversation" })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      messages.map((msg) => {
        const isOwn = isDoctor ? msg.senderRole === "doctor" || msg.senderRole === "admin" || msg.senderName === currentUserName : msg.senderRole === "patient";
        const showSeen = !isDoctor && msg.senderRole === "patient" && msg.seenAt;
        const isTeleconsultNotif = msg.id.startsWith("tc_notif_");
        if (isTeleconsultNotif) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex justify-center",
              "data-ocid": "patient_chat.row",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-teal-50 border border-teal-200 rounded-full px-3 py-1 text-xs text-teal-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-3 h-3" }),
                msg.text
              ] })
            },
            msg.id
          );
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex flex-col ${isOwn ? "items-end" : "items-start"}`,
            "data-ocid": "patient_chat.row",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `max-w-[75%] rounded-2xl px-3 py-2 ${isOwn ? "bg-teal-600 text-white rounded-br-sm" : "bg-muted text-foreground rounded-bl-sm"}`,
                  children: [
                    !isOwn && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold mb-0.5 opacity-70", children: msg.senderName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: msg.text }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: `text-[10px] mt-0.5 ${isOwn ? "text-teal-200" : "text-muted-foreground"}`,
                        children: format(new Date(msg.timestamp), "h:mm a")
                      }
                    )
                  ]
                }
              ),
              showSeen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-1 mt-0.5 px-1",
                  "data-ocid": "patient_chat.seen_indicator",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCheck, { className: "w-3 h-3 text-teal-500" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3 text-teal-500" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-teal-600 font-medium", children: [
                      "Seen ",
                      seenAgo(msg.seenAt)
                    ] })
                  ]
                }
              )
            ]
          },
          msg.id
        );
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: bottomRef })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-3 border-t border-border flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: "flex-1 border border-input rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 bg-background",
          placeholder: "Type a message...",
          value: text,
          onChange: (e) => setText(e.target.value),
          onKeyDown: (e) => e.key === "Enter" && !e.shiftKey && sendMessage(),
          "data-ocid": "patient_chat.input"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          onClick: sendMessage,
          disabled: !text.trim(),
          className: "bg-teal-600 hover:bg-teal-700 text-white rounded-full w-9 h-9 p-0",
          "data-ocid": "patient_chat.submit_button",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-3.5 h-3.5" })
        }
      )
    ] })
  ] });
  if (floating) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed bottom-6 right-6 w-80 h-[420px] bg-card rounded-xl shadow-2xl border border-border flex flex-col z-50 overflow-hidden",
        "data-ocid": "patient_chat.modal",
        children: inner
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "bg-card rounded-xl border border-border shadow-sm overflow-hidden flex flex-col",
      style: { minHeight: 380 },
      "data-ocid": "patient_chat.panel",
      children: inner
    }
  );
}
function getAge$1(dob) {
  if (!dob) return "—";
  const years = Math.floor(
    (Date.now() - Number(dob / 1000000n)) / (365.25 * 24 * 3600 * 1e3)
  );
  return `${years} yrs`;
}
function getActiveDiagnoses(visits) {
  const diagnoses = [];
  for (const v of visits) {
    const dx = v.diagnosis;
    if (dx && !diagnoses.includes(dx)) diagnoses.push(dx);
  }
  return diagnoses.slice(0, 8);
}
function getActiveMedications(prescriptions) {
  const now = Date.now();
  const meds = [];
  const seen = /* @__PURE__ */ new Set();
  for (const rx of prescriptions) {
    const rxDate = new Date(Number(rx.prescriptionDate / 1000000n));
    const validUntil = rx.validUntil;
    if (validUntil && new Date(validUntil).getTime() < now) continue;
    for (const med of rx.medications ?? []) {
      const medName = [med.drugForm ?? med.form, med.drugName ?? med.name].filter(Boolean).join(" ").trim();
      if (!medName || seen.has(medName)) continue;
      seen.add(medName);
      meds.push({
        name: medName,
        dose: med.dose ?? "",
        frequency: med.frequency ?? "",
        prescribedOn: format(rxDate, "dd MMM yyyy")
      });
    }
  }
  return meds.slice(0, 10);
}
function getRecentInvestigations(visits) {
  var _a;
  const threeMonthsAgo = Date.now() - 90 * 24 * 60 * 60 * 1e3;
  const rows = [];
  for (const v of visits) {
    const extData = (() => {
      try {
        const key = `visit_form_data_${v.id}`;
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k == null ? void 0 : k.startsWith(key)) {
            const raw = localStorage.getItem(k);
            if (raw) return JSON.parse(raw);
          }
        }
      } catch {
      }
      return null;
    })();
    if (!extData) continue;
    const invRows = extData.previous_investigation_rows;
    if (!invRows) continue;
    for (const row of invRows) {
      if (!row.date) continue;
      const rowDate = new Date(row.date).getTime();
      if (rowDate < threeMonthsAgo) continue;
      rows.push({
        name: row.name,
        result: row.result,
        unit: row.unit,
        date: row.date,
        flagged: ((_a = extData.flaggedInvestigations) == null ? void 0 : _a.includes(row.name)) ?? false
      });
    }
  }
  return rows.slice(0, 12);
}
function QRFallback({ url }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-2 border-dashed border-gray-300 rounded-lg p-3 text-center w-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-gray-500 mb-1 font-semibold", children: "PROFILE URL" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] text-gray-400 break-all font-mono", children: url }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] text-gray-400 mt-1", children: "Scan QR or visit URL" })
  ] });
}
function PatientSummaryCard({
  patientId,
  patient,
  visits,
  prescriptions
}) {
  const cardRef = reactExports.useRef(null);
  const [showCard, setShowCard] = reactExports.useState(false);
  const activeDiagnoses = getActiveDiagnoses(visits);
  const activeMeds = getActiveMedications(prescriptions);
  const recentInv = getRecentInvestigations(visits);
  const profileUrl = `${window.location.origin}/patient/${patientId}/dashboard`;
  const today = format(/* @__PURE__ */ new Date(), "dd MMMM yyyy");
  const handlePrint = () => {
    setShowCard(true);
    setTimeout(() => window.print(), 300);
  };
  const emergencyContact = patient.emergencyContactName;
  const emergencyPhone = patient.emergencyContactPhone;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-print", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        size: "sm",
        variant: "outline",
        className: "gap-1.5 border-teal-300 text-teal-700 hover:bg-teal-50",
        onClick: handlePrint,
        "data-ocid": "patient_summary_card.print_button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3.5 h-3.5" }),
          "Print Summary Card"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: cardRef,
        className: `patient-summary-card-print ${showCard ? "block" : "hidden"} print:!block`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "summary-card bg-white p-6 border border-gray-300 rounded-xl max-w-[800px] mx-auto text-sm font-sans", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between border-b-2 border-teal-600 pb-4 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-xl bg-teal-100 border-2 border-teal-300 flex items-center justify-center shrink-0", children: patient.photo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: patient.photo,
                    alt: "Patient",
                    className: "w-full h-full object-cover rounded-xl"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-7 h-7 text-teal-600" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold text-gray-900 leading-tight", children: patient.fullName }),
                  patient.nameBn && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-gray-600", children: patient.nameBn }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 mt-1.5", children: [
                    patient.registerNumber && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-teal-100 text-teal-800 text-xs font-bold px-2 py-0.5 rounded-full border border-teal-200", children: [
                      "Reg: ",
                      patient.registerNumber
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full border border-gray-200", children: getAge$1(patient.dateOfBirth) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full border border-gray-200 capitalize", children: patient.gender }),
                    patient.bloodGroup && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full border border-red-200", children: patient.bloodGroup })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right text-xs text-gray-500 shrink-0 ml-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-700 text-sm", children: "Dr. Arman Kabir's Care" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Patient Summary Card" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: today })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                (emergencyContact || emergencyPhone) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 border border-orange-200 rounded-lg p-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-orange-700 mb-1.5 uppercase tracking-wide", children: "🆘 Emergency Contact" }),
                  emergencyContact && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-orange-800", children: emergencyContact }),
                  emergencyPhone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-mono text-orange-700", children: emergencyPhone })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-2 border-red-300 rounded-lg p-3 bg-red-50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-red-700 mb-1.5 uppercase tracking-wide flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3" }),
                    "Active Allergies"
                  ] }),
                  patient.allergies.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5", children: patient.allergies.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm text-red-800 font-medium", children: [
                    "• ",
                    a
                  ] }, a)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-700 font-medium", children: "✓ No known allergies" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-amber-200 rounded-lg p-3 bg-amber-50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-amber-700 mb-1.5 uppercase tracking-wide", children: "📋 Active Diagnoses" }),
                  activeDiagnoses.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5", children: activeDiagnoses.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "text-sm text-amber-800",
                      children: [
                        "• ",
                        d
                      ]
                    },
                    `dx-${String(i)}`
                  )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "No diagnoses recorded" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-blue-200 rounded-lg p-3 bg-blue-50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-blue-700 mb-1.5 uppercase tracking-wide", children: "💊 Current Medications" }),
                  activeMeds.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-blue-600 border-b border-blue-200", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left pb-1 font-semibold", children: "Drug" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left pb-1 font-semibold", children: "Dose" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left pb-1 font-semibold", children: "Freq." })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: activeMeds.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "tr",
                      {
                        className: "border-b border-blue-100",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-0.5 text-blue-900 font-medium", children: m.name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-0.5 text-blue-700", children: m.dose }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-0.5 text-blue-700", children: m.frequency })
                        ]
                      },
                      `med-${String(i)}`
                    )) })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "No active medications" })
                ] }),
                recentInv.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-teal-200 rounded-lg p-3 bg-teal-50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-teal-700 mb-1.5 uppercase tracking-wide", children: "🧪 Key Results (Last 3 Months)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-teal-600 border-b border-teal-200", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left pb-1 font-semibold", children: "Test" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left pb-1 font-semibold", children: "Result" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left pb-1 font-semibold", children: "Date" })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: recentInv.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "tr",
                      {
                        className: "border-b border-teal-100",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-0.5 text-teal-800", children: r.name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "td",
                            {
                              className: `py-0.5 font-mono font-medium ${r.flagged ? "text-red-600" : "text-teal-700"}`,
                              children: [
                                r.result,
                                " ",
                                r.unit || "",
                                r.flagged && " ⚠️"
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-0.5 text-teal-500", children: r.date })
                        ]
                      },
                      `inv-${String(i)}`
                    )) })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-gray-200 flex items-end justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  "Generated by Dr. Arman Kabir's Care • ",
                  today
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5", children: "For medical emergencies, contact clinic: +8801751959262" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QRFallback, { url: profileUrl }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-print mt-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => setShowCard(false),
              "data-ocid": "patient_summary_card.close_button",
              children: "Close Preview"
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @media print {
          body > *:not(.patient-summary-card-print) {
            display: none !important;
          }
          .patient-summary-card-print {
            display: block !important;
          }
          .no-print {
            display: none !important;
          }
          .summary-card {
            border: none !important;
            box-shadow: none !important;
            max-width: 100% !important;
            padding: 0 !important;
          }
          @page {
            margin: 1cm;
            size: A4 portrait;
          }
        }
      ` })
  ] });
}
const EVENT_CONFIG = {
  registration: {
    color: "text-blue-700",
    bgColor: "bg-blue-50 border-blue-200",
    icon: UserCheck,
    label: "Registration",
    dotColor: "bg-blue-500"
  },
  visit: {
    color: "text-green-700",
    bgColor: "bg-green-50 border-green-200",
    icon: Stethoscope,
    label: "Visit",
    dotColor: "bg-green-500"
  },
  prescription: {
    color: "text-purple-700",
    bgColor: "bg-purple-50 border-purple-200",
    icon: Pill,
    label: "Prescription",
    dotColor: "bg-purple-500"
  },
  vitals: {
    color: "text-yellow-700",
    bgColor: "bg-yellow-50 border-yellow-200",
    icon: Activity,
    label: "Vitals",
    dotColor: "bg-yellow-500"
  },
  soap: {
    color: "text-indigo-700",
    bgColor: "bg-indigo-50 border-indigo-200",
    icon: FileText,
    label: "SOAP Note",
    dotColor: "bg-indigo-500"
  },
  discharge: {
    color: "text-gray-700",
    bgColor: "bg-gray-50 border-gray-200",
    icon: CircleAlert,
    label: "Discharge",
    dotColor: "bg-gray-400"
  },
  teleconsult: {
    color: "text-cyan-700",
    bgColor: "bg-cyan-50 border-cyan-200",
    icon: Video,
    label: "Teleconsult",
    dotColor: "bg-cyan-500"
  },
  referral: {
    color: "text-orange-700",
    bgColor: "bg-orange-50 border-orange-200",
    icon: Calendar,
    label: "Referral",
    dotColor: "bg-orange-500"
  },
  procedure: {
    color: "text-pink-700",
    bgColor: "bg-pink-50 border-pink-200",
    icon: Clock,
    label: "Procedure",
    dotColor: "bg-pink-500"
  }
};
function loadAllEvents(patientId, patient) {
  const events = [];
  const patStr = String(patientId);
  const email = getDoctorEmail$1() || "default";
  events.push({
    id: `reg-${patStr}`,
    type: "registration",
    date: new Date(Number(patient.createdAt / 1000000n)),
    title: "Patient Registered",
    description: `${patient.fullName} registered — Reg. No. ${patient.registerNumber ?? "N/A"}`,
    details: {
      name: patient.fullName,
      gender: patient.gender,
      blood_group: patient.bloodGroup
    }
  });
  try {
    const raw = localStorage.getItem(`visits_${email}`);
    const allVisits = raw ? JSON.parse(raw) : [];
    const patVisits = allVisits.filter((v) => String(v.patientId) === patStr);
    for (const v of patVisits) {
      const dateVal = typeof v.visitDate === "bigint" ? Number(v.visitDate / 1000000n) : Number(v.visitDate ?? v.createdAt ?? Date.now());
      const isAdmitted = v.visitType === "admitted" || v.visitType === "inpatient";
      events.push({
        id: `visit-${String(v.id)}`,
        type: "visit",
        date: new Date(dateVal),
        title: isAdmitted ? "Inpatient Admission" : "OPD Visit",
        description: v.diagnosis || v.chiefComplaint || "Visit",
        subtype: isAdmitted ? "admitted" : "opd",
        details: v,
        badge: v.visitType
      });
    }
  } catch {
  }
  try {
    const raw = localStorage.getItem(`prescriptions_${email}`);
    const allRx = raw ? JSON.parse(raw) : [];
    const patRx = allRx.filter((r) => String(r.patientId) === patStr);
    for (const rx of patRx) {
      const dateVal = typeof rx.prescriptionDate === "bigint" ? Number(rx.prescriptionDate / 1000000n) : Number(rx.prescriptionDate ?? rx.createdAt ?? Date.now());
      const meds = rx.medications ?? [];
      events.push({
        id: `rx-${String(rx.id)}`,
        type: "prescription",
        date: new Date(dateVal),
        title: "Prescription",
        description: [
          String(meds.length),
          "drug",
          meds.length !== 1 ? "s" : "",
          " prescribed",
          rx.diagnosis ? ` — ${String(rx.diagnosis)}` : ""
        ].join(""),
        details: rx,
        badge: rx.isEmergency ? "EMERGENCY" : void 0
      });
    }
  } catch {
  }
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!(key == null ? void 0 : key.includes(`vitals_${patStr}`)) && !(key == null ? void 0 : key.includes(`vital_record_${patStr}`)))
        continue;
      try {
        const raw = localStorage.getItem(key);
        if (!raw) continue;
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) continue;
        for (const entry of parsed) {
          const dateStr = entry.date ?? entry.recordedAt ?? entry.timestamp;
          if (!dateStr) continue;
          events.push({
            id: `vitals-${String(entry.id ?? dateStr)}`,
            type: "vitals",
            date: new Date(dateStr),
            title: "Vitals Recorded",
            description: [
              entry.bloodPressure ? `BP: ${String(entry.bloodPressure)}` : null,
              entry.pulse ? `Pulse: ${String(entry.pulse)}` : null,
              entry.oxygenSaturation ? `SpO₂: ${String(entry.oxygenSaturation)}%` : null
            ].filter(Boolean).join(" • ") || "Vitals recorded",
            details: entry
          });
        }
      } catch {
      }
    }
  } catch {
  }
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!(key == null ? void 0 : key.includes("dailyNotes")) && !(key == null ? void 0 : key.includes(`soap_notes_${patStr}`)))
        continue;
      if (!(key == null ? void 0 : key.includes(patStr))) continue;
      try {
        const raw = localStorage.getItem(key);
        if (!raw) continue;
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) continue;
        for (const note of parsed) {
          const dateStr = note.date ?? note.createdAt ?? note.timestamp;
          if (!dateStr) continue;
          let content = {};
          if (note.content && typeof note.content === "string") {
            try {
              content = JSON.parse(note.content);
            } catch {
            }
          } else if (note.content && typeof note.content === "object") {
            content = note.content;
          }
          events.push({
            id: `soap-${String(note.id ?? dateStr)}`,
            type: "soap",
            date: new Date(dateStr),
            title: note.noteSubtype === "quick_review" ? "Quick Review" : "SOAP Note",
            description: content.assessment || content.subjective || "Progress note",
            details: content
          });
        }
      } catch {
      }
    }
  } catch {
  }
  try {
    const raw = localStorage.getItem(`admissionHistory_${patStr}`);
    const records = raw ? JSON.parse(raw) : [];
    for (const rec of records) {
      if (rec.dischargedOn) {
        events.push({
          id: `discharge-${String(rec.id)}`,
          type: "discharge",
          date: new Date(String(rec.dischargedOn)),
          title: "Discharged",
          description: `Discharged from ${String(rec.hospitalName ?? "hospital")}${rec.ward ? ` — Ward ${String(rec.ward)}` : ""}`,
          details: rec
        });
      }
    }
  } catch {
  }
  try {
    const raw = localStorage.getItem(`teleconsults_${patStr}`);
    const tcList = raw ? JSON.parse(raw) : [];
    for (const tc of tcList) {
      events.push({
        id: `tc-${String(tc.id ?? tc.date)}`,
        type: "teleconsult",
        date: new Date(String(tc.date ?? tc.createdAt ?? Date.now())),
        title: "Teleconsult",
        description: tc.chiefComplaint || tc.notes || "Teleconsultation",
        details: tc
      });
    }
  } catch {
  }
  try {
    const raw = localStorage.getItem(`referrals_${email}_${patStr}`);
    const refList = raw ? JSON.parse(raw) : [];
    for (const ref of refList) {
      events.push({
        id: `ref-${String(ref.id ?? ref.date)}`,
        type: "referral",
        date: new Date(String(ref.date ?? ref.createdAt ?? Date.now())),
        title: "Referral",
        description: `Referred to ${String(ref.specialist ?? ref.specialistName ?? "specialist")}${ref.hospital ? ` — ${String(ref.hospital)}` : ""}`,
        details: ref,
        badge: ref.urgency
      });
    }
  } catch {
  }
  try {
    const raw = localStorage.getItem(`procedureLogs_${patStr}`);
    const procList = raw ? JSON.parse(raw) : [];
    for (const proc of procList) {
      events.push({
        id: `proc-${String(proc.id ?? proc.date)}`,
        type: "procedure",
        date: new Date(String(proc.date ?? proc.createdAt ?? Date.now())),
        title: "Procedure",
        description: `${String(proc.procedureName ?? proc.name ?? "Procedure")} — ${String(proc.outcome ?? proc.status ?? "")}`,
        details: proc
      });
    }
  } catch {
  }
  return events;
}
function TimelineItem({
  event,
  isLast
}) {
  const [expanded, setExpanded] = reactExports.useState(false);
  const cfg = EVENT_CONFIG[event.type];
  const Icon = cfg.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex gap-3",
      "data-ocid": `patient_timeline.event.${event.type}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `w-8 h-8 rounded-full ${cfg.dotColor} flex items-center justify-center shadow-sm`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-white" })
            }
          ),
          !isLast && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-0.5 flex-1 bg-border mt-1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex-1 border rounded-xl px-4 py-3 mb-3 ${cfg.bgColor}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-semibold text-sm ${cfg.color}`, children: event.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: `text-[10px] border-0 px-1.5 py-0 ${cfg.bgColor} ${cfg.color}`,
                    children: cfg.label
                  }
                ),
                event.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[10px] border-0 px-1.5 py-0 bg-red-100 text-red-700", children: event.badge }),
                event.type === "visit" && event.subtype === "admitted" && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[10px] border-0 px-1.5 py-0 bg-teal-100 text-teal-700", children: "Admitted" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 truncate", children: event.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground whitespace-nowrap", children: format(event.date, "dd MMM yyyy, HH:mm") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setExpanded(!expanded),
                  className: `${cfg.color} hover:opacity-70`,
                  "aria-label": expanded ? "Collapse" : "Expand",
                  "data-ocid": "patient_timeline.event.toggle",
                  children: expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4" })
                }
              )
            ] })
          ] }),
          expanded && event.details && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 pt-3 border-t border-current/10 space-y-1", children: Object.entries(event.details).filter(
            ([k, v]) => v !== null && v !== void 0 && String(v).trim() !== "" && !["id", "patientId", "visitId", "rxId"].includes(k)
          ).slice(0, 12).map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: `font-semibold capitalize ${cfg.color} shrink-0`,
                children: [
                  k.replace(/([A-Z])/g, " $1").trim(),
                  ":"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground break-words", children: typeof v === "object" ? JSON.stringify(v) : String(v) })
          ] }, k)) })
        ] })
      ]
    }
  );
}
const ALL_EVENT_TYPES = Object.keys(EVENT_CONFIG);
function PatientTimeline({
  patientId,
  patient
}) {
  const [dateFrom, setDateFrom] = reactExports.useState("");
  const [dateTo, setDateTo] = reactExports.useState("");
  const [selectedTypes, setSelectedTypes] = reactExports.useState(
    new Set(ALL_EVENT_TYPES)
  );
  const [sortOrder, setSortOrder] = reactExports.useState("newest");
  const [showFilters, setShowFilters] = reactExports.useState(false);
  const allEvents = reactExports.useMemo(
    () => loadAllEvents(patientId, patient),
    [patientId, patient]
  );
  const filteredEvents = reactExports.useMemo(() => {
    let events = allEvents.filter((e) => selectedTypes.has(e.type));
    if (dateFrom) {
      const from = new Date(dateFrom);
      events = events.filter((e) => e.date >= from);
    }
    if (dateTo) {
      const to = new Date(dateTo);
      to.setHours(23, 59, 59);
      events = events.filter((e) => e.date <= to);
    }
    return [...events].sort(
      (a, b) => sortOrder === "newest" ? b.date.getTime() - a.date.getTime() : a.date.getTime() - b.date.getTime()
    );
  }, [allEvents, selectedTypes, dateFrom, dateTo, sortOrder]);
  const toggleType = (type) => {
    setSelectedTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) {
        next.delete(type);
      } else {
        next.add(type);
      }
      return next;
    });
  };
  const resetFilters = () => {
    setDateFrom("");
    setDateTo("");
    setSelectedTypes(new Set(ALL_EVENT_TYPES));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap bg-card border border-border rounded-xl px-4 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm text-foreground", children: "Patient Timeline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-xs border-0 bg-muted text-muted-foreground", children: [
          filteredEvents.length,
          " events"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setSortOrder((p) => p === "newest" ? "oldest" : "newest"),
            className: "text-xs bg-muted/60 hover:bg-muted text-foreground px-2.5 py-1 rounded-full border border-border transition-colors",
            "data-ocid": "patient_timeline.sort_toggle",
            children: sortOrder === "newest" ? "⬇️ Newest First" : "⬆️ Oldest First"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "gap-1.5 text-xs",
            onClick: () => setShowFilters(!showFilters),
            "data-ocid": "patient_timeline.filter.toggle",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-3 h-3" }),
              "Filters",
              (dateFrom || dateTo || selectedTypes.size < ALL_EVENT_TYPES.length) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary inline-block" })
            ]
          }
        )
      ] })
    ] }),
    showFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "From Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              value: dateFrom,
              onChange: (e) => setDateFrom(e.target.value),
              className: "w-full mt-1 border border-input rounded-lg px-3 py-1.5 text-sm bg-background",
              "data-ocid": "patient_timeline.filter.date_from.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "To Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              value: dateTo,
              onChange: (e) => setDateTo(e.target.value),
              className: "w-full mt-1 border border-input rounded-lg px-3 py-1.5 text-sm bg-background",
              "data-ocid": "patient_timeline.filter.date_to.input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-2", children: "Event Types" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ALL_EVENT_TYPES.map((type) => {
          const cfg = EVENT_CONFIG[type];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-1.5 cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Checkbox,
                  {
                    id: `timeline-filter-${type}`,
                    checked: selectedTypes.has(type),
                    onCheckedChange: () => toggleType(type),
                    "data-ocid": `patient_timeline.filter.type.${type}`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    htmlFor: `timeline-filter-${type}`,
                    className: `text-xs font-medium cursor-pointer ${cfg.color}`,
                    children: cfg.label
                  }
                )
              ]
            },
            type
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          variant: "ghost",
          onClick: resetFilters,
          className: "text-xs gap-1.5",
          "data-ocid": "patient_timeline.filter.reset_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }),
            "Reset Filters"
          ]
        }
      ) })
    ] }),
    filteredEvents.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-12 bg-card border border-border rounded-xl",
        "data-ocid": "patient_timeline.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-10 h-10 text-muted-foreground/30 mx-auto mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-medium", children: "No events found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/60 mt-1", children: "Try adjusting the date range or event type filters" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: resetFilters,
              className: "mt-3 text-xs",
              children: "Clear Filters"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pl-0", children: filteredEvents.map((event, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      TimelineItem,
      {
        event,
        isLast: index === filteredEvents.length - 1
      },
      event.id
    )) })
  ] });
}
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext] = createContextScope(ROOT_NAME, [
  createDialogScope
]);
var useDialogScope = createDialogScope();
var AlertDialog$1 = (props) => {
  const { __scopeAlertDialog, ...alertDialogProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ...dialogScope, ...alertDialogProps, modal: true });
};
AlertDialog$1.displayName = ROOT_NAME;
var TRIGGER_NAME = "AlertDialogTrigger";
var AlertDialogTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...triggerProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, { ...dialogScope, ...triggerProps, ref: forwardedRef });
  }
);
AlertDialogTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "AlertDialogPortal";
var AlertDialogPortal$1 = (props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { ...dialogScope, ...portalProps });
};
AlertDialogPortal$1.displayName = PORTAL_NAME;
var OVERLAY_NAME = "AlertDialogOverlay";
var AlertDialogOverlay$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...overlayProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Overlay, { ...dialogScope, ...overlayProps, ref: forwardedRef });
  }
);
AlertDialogOverlay$1.displayName = OVERLAY_NAME;
var CONTENT_NAME = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME);
var Slottable = createSlottable("AlertDialogContent");
var AlertDialogContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, children, ...contentProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const cancelRef = reactExports.useRef(null);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      WarningProvider,
      {
        contentName: CONTENT_NAME,
        titleName: TITLE_NAME,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogContentProvider, { scope: __scopeAlertDialog, cancelRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Content,
          {
            role: "alertdialog",
            ...dialogScope,
            ...contentProps,
            ref: composedRefs,
            onOpenAutoFocus: composeEventHandlers(contentProps.onOpenAutoFocus, (event) => {
              var _a;
              event.preventDefault();
              (_a = cancelRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
            }),
            onPointerDownOutside: (event) => event.preventDefault(),
            onInteractOutside: (event) => event.preventDefault(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Slottable, { children }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DescriptionWarning, { contentRef })
            ]
          }
        ) })
      }
    );
  }
);
AlertDialogContent$1.displayName = CONTENT_NAME;
var TITLE_NAME = "AlertDialogTitle";
var AlertDialogTitle$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...titleProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { ...dialogScope, ...titleProps, ref: forwardedRef });
  }
);
AlertDialogTitle$1.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "AlertDialogDescription";
var AlertDialogDescription$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Description, { ...dialogScope, ...descriptionProps, ref: forwardedRef });
});
AlertDialogDescription$1.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...actionProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { ...dialogScope, ...actionProps, ref: forwardedRef });
  }
);
AlertDialogAction$1.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...cancelProps } = props;
    const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const ref = useComposedRefs(forwardedRef, cancelRef);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { ...dialogScope, ...cancelProps, ref });
  }
);
AlertDialogCancel$1.displayName = CANCEL_NAME;
var DescriptionWarning = ({ contentRef }) => {
  const MESSAGE = `\`${CONTENT_NAME}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${CONTENT_NAME}\` by passing a \`${DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  reactExports.useEffect(() => {
    var _a;
    const hasDescription = document.getElementById(
      (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby")
    );
    if (!hasDescription) console.warn(MESSAGE);
  }, [MESSAGE, contentRef]);
  return null;
};
var Root2 = AlertDialog$1;
var Trigger2 = AlertDialogTrigger$1;
var Portal2 = AlertDialogPortal$1;
var Overlay2 = AlertDialogOverlay$1;
var Content2 = AlertDialogContent$1;
var Action = AlertDialogAction$1;
var Cancel = AlertDialogCancel$1;
var Title2 = AlertDialogTitle$1;
var Description2 = AlertDialogDescription$1;
function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger2, { "data-slot": "alert-dialog-trigger", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay2,
    {
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function AlertDialogContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Content2,
      {
        "data-slot": "alert-dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props
      }
    )
  ] });
}
function AlertDialogHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function AlertDialogFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function AlertDialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Title2,
    {
      "data-slot": "alert-dialog-title",
      className: cn("text-lg font-semibold", className),
      ...props
    }
  );
}
function AlertDialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Description2,
    {
      "data-slot": "alert-dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function AlertDialogAction({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Action,
    {
      className: cn(buttonVariants(), className),
      ...props
    }
  );
}
function AlertDialogCancel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Cancel,
    {
      className: cn(buttonVariants({ variant: "outline" }), className),
      ...props
    }
  );
}
const PROCEDURE_SUGGESTIONS = [
  "Catheter insertion",
  "IV access",
  "Blood transfusion",
  "ECG",
  "Lumbar puncture",
  "Chest drain",
  "Intubation",
  "Central line",
  "FNAC",
  "Biopsy",
  "Minor surgery",
  "Suturing",
  "Wound debridement",
  "Nasogastric tube insertion",
  "Thoracocentesis",
  "Other"
];
const OUTCOME_OPTIONS = [
  "Successful",
  "Partially successful",
  "Unsuccessful",
  "Complication occurred"
];
const STORAGE_PREFIX = "procedureLogs_";
function loadProcedureLogs(patientId) {
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}${patientId}`);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveProcedureLogs(patientId, logs) {
  localStorage.setItem(`${STORAGE_PREFIX}${patientId}`, JSON.stringify(logs));
}
function getProcedureReceipts(patientId) {
  try {
    const all = JSON.parse(
      localStorage.getItem("money_receipts") || "[]"
    );
    return all.filter(
      (r) => r.type === "procedure" && r.patientId === patientId
    );
  } catch {
    return [];
  }
}
function emptyForm() {
  return {
    procedureName: "",
    dateTime: (/* @__PURE__ */ new Date()).toISOString().slice(0, 16),
    performedBy: "",
    indication: "",
    technique: "",
    outcome: "Successful",
    complications: false,
    complicationDetails: "",
    consentObtained: false,
    linkedReceiptId: null
  };
}
function ProcedureLog({
  patientId,
  patient
}) {
  const { currentDoctor } = useEmailAuth();
  const doctorName = (currentDoctor == null ? void 0 : currentDoctor.name) ?? "";
  const [logs, setLogs] = reactExports.useState(
    () => loadProcedureLogs(patientId)
  );
  const [showForm, setShowForm] = reactExports.useState(false);
  const [editId, setEditId] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState(() => ({ ...emptyForm(), performedBy: doctorName }));
  const [showSuggestions, setShowSuggestions] = reactExports.useState(false);
  const [expandedId, setExpandedId] = reactExports.useState(null);
  const sortedLogs = reactExports.useMemo(
    () => [...logs].sort((a, b) => b.dateTime.localeCompare(a.dateTime)),
    [logs]
  );
  const procedureReceipts = reactExports.useMemo(
    () => getProcedureReceipts(patientId),
    [patientId]
  );
  function set(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }
  function openAdd() {
    setEditId(null);
    setForm({ ...emptyForm(), performedBy: doctorName });
    setShowForm(true);
  }
  function openEdit(log) {
    setEditId(log.id);
    setForm({
      procedureName: log.procedureName,
      dateTime: log.dateTime.slice(0, 16),
      performedBy: log.performedBy,
      indication: log.indication,
      technique: log.technique ?? "",
      outcome: log.outcome,
      complications: log.complications,
      complicationDetails: log.complicationDetails ?? "",
      consentObtained: log.consentObtained,
      linkedReceiptId: log.linkedReceiptId
    });
    setShowForm(true);
  }
  function handleSave() {
    if (!form.procedureName.trim()) {
      ue.error("Procedure name is required");
      return;
    }
    if (!form.consentObtained) {
      ue.error("Consent must be obtained before saving a procedure");
      return;
    }
    if (!form.indication.trim()) {
      ue.error("Please enter the clinical indication");
      return;
    }
    const now = (/* @__PURE__ */ new Date()).toISOString();
    let updated;
    if (editId) {
      updated = logs.map(
        (l) => l.id === editId ? { ...l, ...form, updatedAt: now } : l
      );
      ue.success("Procedure record updated");
    } else {
      const newRec = {
        ...form,
        id: Date.now().toString(36) + Math.random().toString(36).slice(2),
        createdAt: now,
        updatedAt: now
      };
      updated = [newRec, ...logs];
      ue.success("Procedure recorded");
    }
    setLogs(updated);
    saveProcedureLogs(patientId, updated);
    setShowForm(false);
    setEditId(null);
  }
  function handleDelete(id) {
    const updated = logs.filter((l) => l.id !== id);
    setLogs(updated);
    saveProcedureLogs(patientId, updated);
    ue.success("Procedure record deleted");
  }
  function cancelForm() {
    setShowForm(false);
    setEditId(null);
    setForm({ ...emptyForm(), performedBy: doctorName });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "procedure_log.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-semibold text-foreground flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-4 h-4 text-teal-600" }),
        "Procedure Log",
        logs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-normal text-muted-foreground", children: [
          "(",
          logs.length,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          onClick: openAdd,
          className: "gap-1.5 bg-teal-600 hover:bg-teal-700 text-white",
          "data-ocid": "procedure_log.add_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
            "Add Procedure"
          ]
        }
      )
    ] }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-teal-50 border border-teal-200 rounded-xl p-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-teal-800 text-sm", children: editId ? "Edit Procedure Record" : "New Procedure Record" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Procedure Name *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: form.procedureName,
            onChange: (e) => set("procedureName", e.target.value),
            onFocus: () => setShowSuggestions(true),
            onBlur: () => setTimeout(() => setShowSuggestions(false), 150),
            placeholder: "e.g. IV access",
            className: "flex-1 text-sm",
            "data-ocid": "procedure_log.procedure_name.input"
          }
        ) }),
        showSuggestions && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[60px] left-0 right-0 z-20 bg-white border border-teal-200 rounded-xl shadow-lg py-1 max-h-44 overflow-y-auto", children: PROCEDURE_SUGGESTIONS.filter(
          (s) => s.toLowerCase().includes(form.procedureName.toLowerCase())
        ).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "w-full text-left px-3 py-2 text-sm hover:bg-teal-50 text-gray-700",
            onMouseDown: () => set("procedureName", s),
            children: s
          },
          s
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mt-1.5", children: PROCEDURE_SUGGESTIONS.slice(0, 7).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => set("procedureName", s),
            className: "text-[10px] bg-white border border-teal-200 text-teal-700 px-2 py-0.5 rounded-full hover:bg-teal-100 transition-colors",
            children: s
          },
          s
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Date & Time *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "datetime-local",
              value: form.dateTime,
              onChange: (e) => set("dateTime", e.target.value),
              className: "w-full mt-1 border border-input rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-teal-300",
              "data-ocid": "procedure_log.datetime.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Performed By *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: form.performedBy,
              onChange: (e) => set("performedBy", e.target.value),
              placeholder: "Doctor / Nurse name",
              className: "mt-1 text-sm",
              "data-ocid": "procedure_log.performed_by.input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Indication *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: form.indication,
            onChange: (e) => set("indication", e.target.value),
            placeholder: "Clinical reason for this procedure",
            rows: 2,
            className: "mt-1 text-sm",
            "data-ocid": "procedure_log.indication.textarea"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Technique (optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: form.technique,
            onChange: (e) => set("technique", e.target.value),
            placeholder: "Brief technique notes...",
            rows: 2,
            className: "mt-1 text-sm",
            "data-ocid": "procedure_log.technique.textarea"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Outcome *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: form.outcome,
            onValueChange: (v) => set("outcome", v),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "mt-1 text-sm",
                  "data-ocid": "procedure_log.outcome.select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: OUTCOME_OPTIONS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: o, className: "text-sm", children: o }, o)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Complications?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: [true, false].map((val) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => set("complications", val),
              className: `px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${form.complications === val ? val ? "bg-red-100 text-red-800 border-red-400 ring-2 ring-red-300" : "bg-green-100 text-green-800 border-green-400 ring-2 ring-green-300" : "bg-white border-gray-200 text-gray-500 hover:bg-gray-50"}`,
              "data-ocid": `procedure_log.complications_${val ? "yes" : "no"}.toggle`,
              children: val ? "Yes" : "No"
            },
            String(val)
          )) })
        ] }),
        form.complications && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-red-700", children: "Complication Details *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              value: form.complicationDetails,
              onChange: (e) => set("complicationDetails", e.target.value),
              placeholder: "Describe what happened...",
              rows: 2,
              className: "mt-1 text-sm border-red-200 focus:ring-red-300",
              "data-ocid": "procedure_log.complication_details.textarea"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Consent Obtained" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => set("consentObtained", !form.consentObtained),
              className: `w-10 h-5 rounded-full relative transition-colors ${form.consentObtained ? "bg-teal-500" : "bg-gray-300"}`,
              "data-ocid": "procedure_log.consent.toggle",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${form.consentObtained ? "translate-x-5" : "translate-x-0.5"}`
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-teal-700", children: form.consentObtained ? "Yes" : "No" })
        ] }),
        !form.consentObtained && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-700 font-medium", children: "Procedure cannot be saved without confirming consent obtained" })
        ] })
      ] }),
      procedureReceipts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Link to Procedure Receipt (optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: form.linkedReceiptId ?? "none",
            onValueChange: (v) => set("linkedReceiptId", v === "none" ? null : v),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "mt-1 text-sm",
                  "data-ocid": "procedure_log.receipt.select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select receipt..." })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectItem,
                  {
                    value: "none",
                    className: "text-sm text-muted-foreground",
                    children: "None"
                  }
                ),
                procedureReceipts.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: r.id, className: "text-sm", children: [
                  r.receiptNumber,
                  " — ৳",
                  r.finalAmount ?? r.amount
                ] }, r.id))
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            onClick: handleSave,
            className: "bg-teal-600 hover:bg-teal-700 text-white gap-1.5",
            "data-ocid": "procedure_log.save_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
              editId ? "Update Record" : "Save Procedure"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            onClick: cancelForm,
            "data-ocid": "procedure_log.cancel_button",
            children: "Cancel"
          }
        )
      ] })
    ] }),
    sortedLogs.length === 0 && !showForm ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-12 bg-muted/30 rounded-xl border border-dashed border-border",
        "data-ocid": "procedure_log.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-8 h-8 text-muted-foreground/40 mx-auto mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No procedures recorded yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground/70 mt-1", children: [
            'Click "Add Procedure" to record a clinical procedure for',
            " ",
            patient.fullName
          ] })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:grid grid-cols-[1.5fr_1fr_1fr_1fr_auto_auto_auto] gap-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide px-3 pb-1 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Procedure" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Date / Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Performed By" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Outcome" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Complic." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Consent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Actions" })
      ] }),
      sortedLogs.map((log, idx) => {
        var _a;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProcedureRow,
          {
            log,
            index: idx,
            expanded: expandedId === log.id,
            onToggle: () => setExpandedId(expandedId === log.id ? null : log.id),
            onEdit: () => openEdit(log),
            onDelete: () => handleDelete(log.id),
            receiptLabel: log.linkedReceiptId ? (_a = procedureReceipts.find((r) => r.id === log.linkedReceiptId)) == null ? void 0 : _a.receiptNumber : void 0
          },
          log.id
        );
      })
    ] })
  ] });
}
function ProcedureRow({
  log,
  index,
  expanded,
  onToggle,
  onEdit,
  onDelete,
  receiptLabel
}) {
  const isConsentMissing = !log.consentObtained && log.complications;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `border rounded-xl overflow-hidden ${isConsentMissing ? "border-red-300" : "border-border"}`,
      "data-ocid": `procedure_log.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: onToggle,
            className: "w-full flex items-center gap-3 px-3 py-2.5 bg-muted/20 hover:bg-muted/40 transition-colors text-left",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-1 md:gap-3 items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-foreground truncate", children: [
                  log.procedureName,
                  isConsentMissing && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 text-[10px] bg-red-100 text-red-700 border border-red-300 rounded-full px-1.5 py-0.5 font-semibold", children: "⚠️ No Consent + Complication" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: log.dateTime ? format(new Date(log.dateTime), "dd MMM yyyy, HH:mm") : "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: log.performedBy }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground", children: log.outcome })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                log.complications ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[10px] border bg-red-100 text-red-700 border-red-200 px-1.5 py-0", children: "Complic." }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[10px] border bg-green-100 text-green-700 border-green-200 px-1.5 py-0", children: "None" }),
                log.consentObtained ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-green-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3.5 h-3.5 text-red-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ChevronDown,
                  {
                    className: `w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${expanded ? "rotate-180" : ""}`
                  }
                )
              ] })
            ]
          }
        ),
        expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 bg-white border-t border-border space-y-2", children: [
          log.indication && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Indication:" }),
            " ",
            log.indication
          ] }),
          log.technique && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Technique:" }),
            " ",
            log.technique
          ] }),
          log.complications && log.complicationDetails && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-red-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Complication:" }),
              " ",
              log.complicationDetails
            ] })
          ] }),
          receiptLabel && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Linked Receipt:" }),
            " ",
            receiptLabel
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Recorded:" }),
            " ",
            format(new Date(log.createdAt), "dd MMM yyyy, HH:mm"),
            log.updatedAt !== log.createdAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-amber-600", children: [
              "(Updated: ",
              format(new Date(log.updatedAt), "HH:mm"),
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                onClick: onEdit,
                className: "h-7 px-2 text-xs gap-1 border-amber-300 text-amber-700",
                "data-ocid": `procedure_log.edit_button.${index + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-3 h-3" }),
                  "Edit"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-7 px-2 text-xs gap-1 border-red-300 text-red-700",
                  "data-ocid": `procedure_log.delete_button.${index + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" }),
                    "Delete"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { "data-ocid": "procedure_log.dialog", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "Delete Procedure Record?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
                    "This will permanently remove the record for",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: log.procedureName }),
                    ". This action cannot be undone."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { "data-ocid": "procedure_log.cancel_button", children: "Cancel" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    AlertDialogAction,
                    {
                      onClick: onDelete,
                      className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                      "data-ocid": "procedure_log.confirm_button",
                      children: "Delete"
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}
const SPECIALIST_SUGGESTIONS = [
  "Cardiology",
  "Nephrology",
  "Neurology",
  "Orthopedics",
  "Gastroenterology",
  "Oncology",
  "ENT",
  "Ophthalmology",
  "Psychiatry",
  "Surgery",
  "Dermatology",
  "Endocrinology",
  "Pulmonology",
  "Rheumatology",
  "Urology",
  "Other"
];
const STATUS_COLORS = {
  Draft: "bg-gray-100 text-gray-600 border-gray-200",
  Sent: "bg-blue-100 text-blue-700 border-blue-200",
  Accepted: "bg-amber-100 text-amber-700 border-amber-200",
  Completed: "bg-green-100 text-green-700 border-green-200"
};
const URGENCY_COLORS = {
  Routine: "bg-gray-100 text-gray-700 border-gray-300",
  Urgent: "bg-amber-100 text-amber-800 border-amber-400",
  Emergency: "bg-red-100 text-red-800 border-red-400"
};
function storageKey(email, patientId) {
  return `referrals_${email}_${patientId}`;
}
function loadReferrals(email, patientId) {
  try {
    const raw = localStorage.getItem(storageKey(email, patientId));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveReferrals(email, patientId, records) {
  localStorage.setItem(storageKey(email, patientId), JSON.stringify(records));
}
function getActiveMeds(patientId) {
  const meds = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!(k == null ? void 0 : k.startsWith("prescriptions_"))) continue;
      const arr = JSON.parse(localStorage.getItem(k) || "[]");
      for (const rx of arr) {
        if (String(rx.patientId) !== patientId) continue;
        for (const m of rx.medications ?? []) {
          const label = [
            m.drugForm || "",
            m.drugName || m.name || "",
            m.dose || "",
            m.frequency || ""
          ].filter(Boolean).join(" ").trim();
          if (label && !meds.includes(label)) meds.push(label);
        }
      }
    }
  } catch {
  }
  return meds.slice(0, 15).join(", ");
}
const PRINT_STYLES = `
  @media print {
    body * { visibility: hidden; }
    #referral-print-area, #referral-print-area * { visibility: visible; }
    #referral-print-area { position: fixed; top: 0; left: 0; width: 100%; padding: 32px; }
    .no-print { display: none !important; }
  }
`;
function ReferralLetter({
  patientId,
  patient,
  lastVisit,
  onClose
}) {
  const { currentDoctor } = useEmailAuth();
  const email = getDoctorEmail$1() ?? (currentDoctor == null ? void 0 : currentDoctor.email) ?? "default";
  const doctorName = (currentDoctor == null ? void 0 : currentDoctor.name) ?? "Dr.";
  const doctorDegree = (currentDoctor == null ? void 0 : currentDoctor.degree) ?? "";
  const doctorHospital = (currentDoctor == null ? void 0 : currentDoctor.hospital) ?? "";
  const defaultClinicalSummary = reactExports.useMemo(() => {
    const parts = [];
    if (lastVisit == null ? void 0 : lastVisit.chiefComplaint)
      parts.push(`Chief Complaint: ${lastVisit.chiefComplaint}`);
    if (lastVisit == null ? void 0 : lastVisit.diagnosis) parts.push(`Diagnosis: ${lastVisit.diagnosis}`);
    if (lastVisit == null ? void 0 : lastVisit.physicalExamination)
      parts.push(`Examination: ${lastVisit.physicalExamination}`);
    return parts.join("\n");
  }, [lastVisit]);
  const defaultMeds = reactExports.useMemo(() => getActiveMeds(patientId), [patientId]);
  const defaultVitals = reactExports.useMemo(() => {
    const v = lastVisit == null ? void 0 : lastVisit.vitalSigns;
    if (!v) return "";
    const parts = [];
    if (v.bloodPressure) parts.push(`BP: ${v.bloodPressure} mmHg`);
    if (v.pulse) parts.push(`Pulse: ${v.pulse} bpm`);
    if (v.oxygenSaturation) parts.push(`SpO₂: ${v.oxygenSaturation}%`);
    if (v.temperature) parts.push(`Temp: ${v.temperature}°F`);
    if (v.respiratoryRate) parts.push(`RR: ${v.respiratoryRate}/min`);
    return parts.join(", ");
  }, [lastVisit]);
  const [specialist, setSpecialist] = reactExports.useState("");
  const [department, setDepartment] = reactExports.useState("");
  const [hospital, setHospital] = reactExports.useState("");
  const [urgency, setUrgency] = reactExports.useState("Routine");
  const [reason, setReason] = reactExports.useState("");
  const [clinicalSummary, setClinicalSummary] = reactExports.useState(
    defaultClinicalSummary
  );
  const [meds, setMeds] = reactExports.useState(defaultMeds);
  const [vitals, setVitals] = reactExports.useState(defaultVitals);
  const [showLetter, setShowLetter] = reactExports.useState(false);
  const [showSuggestions, setShowSuggestions] = reactExports.useState(false);
  const [referrals, setReferrals] = reactExports.useState(
    () => loadReferrals(email, patientId)
  );
  reactExports.useEffect(() => {
    setReferrals(loadReferrals(email, patientId));
  }, [email, patientId]);
  const age = reactExports.useMemo(() => {
    if (!patient.dateOfBirth) return "—";
    const ms = Number(patient.dateOfBirth / 1000000n);
    const years = Math.floor((Date.now() - ms) / (365.25 * 24 * 3600 * 1e3));
    return `${years} years`;
  }, [patient.dateOfBirth]);
  function handleGenerate() {
    if (!specialist.trim() || !reason.trim()) {
      ue.error("Please fill Specialist and Reason for Referral");
      return;
    }
    setShowLetter(true);
  }
  function handleSaveAndPrint() {
    if (!specialist.trim() || !reason.trim()) {
      ue.error("Please fill Specialist and Reason for Referral");
      return;
    }
    const rec = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2),
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      specialist: specialist.trim(),
      department: department.trim(),
      hospital: hospital.trim(),
      urgency,
      reason: reason.trim(),
      clinicalSummary: clinicalSummary.trim(),
      currentMedications: meds.trim(),
      currentVitals: vitals.trim(),
      status: "Sent",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      createdBy: doctorName
    };
    const updated = [rec, ...referrals];
    setReferrals(updated);
    saveReferrals(email, patientId, updated);
    setShowLetter(true);
    setTimeout(() => window.print(), 300);
    ue.success("Referral letter saved and sent to print");
  }
  function updateStatus(id, status) {
    const updated = referrals.map((r) => r.id === id ? { ...r, status } : r);
    setReferrals(updated);
    saveReferrals(email, patientId, updated);
    ue.success(`Status updated to ${status}`);
  }
  const todayStr = format(/* @__PURE__ */ new Date(), "dd MMMM yyyy");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: PRINT_STYLES }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "referral.panel", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-base font-bold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-blue-600" }),
          "Referral Letter"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onClose,
            className: "text-muted-foreground hover:text-foreground",
            "data-ocid": "referral.close_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 bg-blue-50 border border-blue-200 rounded-xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Referring Doctor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: `${doctorName}${doctorDegree ? `, ${doctorDegree}` : ""}`,
                readOnly: true,
                className: "mt-1 bg-white/70 text-sm",
                "data-ocid": "referral.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Referring from Hospital" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: hospital || doctorHospital,
                onChange: (e) => setHospital(e.target.value),
                placeholder: "Hospital / Clinic name",
                className: "mt-1 text-sm",
                "data-ocid": "referral.hospital.input"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Specialist / Department *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: specialist,
                onChange: (e) => setSpecialist(e.target.value),
                onFocus: () => setShowSuggestions(true),
                onBlur: () => setTimeout(() => setShowSuggestions(false), 150),
                placeholder: "e.g. Cardiology",
                className: "flex-1 text-sm",
                "data-ocid": "referral.specialist.input"
              }
            ),
            showSuggestions && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[60px] left-0 right-0 z-20 bg-white border border-blue-200 rounded-xl shadow-lg py-1 max-h-44 overflow-y-auto", children: SPECIALIST_SUGGESTIONS.filter(
              (s) => s.toLowerCase().includes(specialist.toLowerCase())
            ).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "w-full text-left px-3 py-2 text-sm hover:bg-blue-50 text-gray-700",
                onMouseDown: () => {
                  setSpecialist(s);
                  setDepartment(s);
                },
                children: s
              },
              s
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mt-1.5", children: SPECIALIST_SUGGESTIONS.slice(0, 8).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setSpecialist(s);
                setDepartment(s);
              },
              className: "text-[10px] bg-white border border-blue-200 text-blue-700 px-2 py-0.5 rounded-full hover:bg-blue-100 transition-colors",
              children: s
            },
            s
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Refer To — Hospital / Facility" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: hospital === doctorHospital ? "" : hospital,
              onChange: (e) => setHospital(e.target.value),
              placeholder: "Name of referral hospital",
              className: "mt-1 text-sm",
              "data-ocid": "referral.to_hospital.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Urgency" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex gap-2 mt-1.5",
              "data-ocid": "referral.urgency.toggle",
              children: ["Routine", "Urgent", "Emergency"].map(
                (u) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setUrgency(u),
                    className: `px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${urgency === u ? `${URGENCY_COLORS[u]} ring-2 ring-offset-1 ring-current` : "bg-white border-gray-200 text-gray-500 hover:bg-gray-50"}`,
                    children: u
                  },
                  u
                )
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Reason for Referral *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              value: reason,
              onChange: (e) => setReason(e.target.value),
              placeholder: "Describe the clinical indication for referral...",
              rows: 2,
              className: "mt-1 text-sm",
              "data-ocid": "referral.reason.textarea"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Clinical Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              value: clinicalSummary,
              onChange: (e) => setClinicalSummary(e.target.value),
              placeholder: "Chief complaints, diagnosis, examination findings...",
              rows: 3,
              className: "mt-1 text-sm",
              "data-ocid": "referral.summary.textarea"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Current Medications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              value: meds,
              onChange: (e) => setMeds(e.target.value),
              placeholder: "Active medications...",
              rows: 2,
              className: "mt-1 text-sm",
              "data-ocid": "referral.meds.textarea"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Current Vital Signs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: vitals,
              onChange: (e) => setVitals(e.target.value),
              placeholder: "BP, Pulse, SpO₂, Temp...",
              className: "mt-1 text-sm",
              "data-ocid": "referral.vitals.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: handleGenerate,
              size: "sm",
              className: "gap-1.5 bg-blue-600 hover:bg-blue-700 text-white",
              "data-ocid": "referral.generate_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5" }),
                "Preview Letter"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: handleSaveAndPrint,
              size: "sm",
              className: "gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white",
              "data-ocid": "referral.save_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3.5 h-3.5" }),
                "Save & Print"
              ]
            }
          )
        ] })
      ] }),
      showLetter && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          id: "referral-print-area",
          className: "bg-white border-2 border-gray-300 rounded-xl p-6 shadow-sm space-y-4 text-sm leading-relaxed",
          children: [
            urgency !== "Routine" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `flex items-center gap-2 rounded-lg px-4 py-2.5 border font-bold text-sm ${urgency === "Emergency" ? "bg-red-100 border-red-400 text-red-800" : "bg-amber-100 border-amber-400 text-amber-800"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 shrink-0" }),
                  urgency === "Emergency" ? "⚠️ EMERGENCY REFERRAL" : "⚠️ URGENT REFERRAL"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center border-b pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-lg", children: [
                doctorName,
                doctorDegree ? `, ${doctorDegree}` : ""
              ] }),
              doctorHospital && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: doctorHospital }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-400 mt-1", children: [
                "Date: ",
                todayStr
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-800", children: "To," }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "The Specialist, ",
                specialist,
                department && department !== specialist ? ` / ${department}` : ""
              ] }),
              hospital && hospital !== doctorHospital && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: hospital })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold", children: [
              "Subject: Referral of Patient —",
              " ",
              urgency !== "Routine" && `[${urgency.toUpperCase()}] `,
              patient.fullName
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 rounded-lg p-3 space-y-1 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Patient Name:" }),
                " ",
                patient.fullName
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Age / Sex:" }),
                " ",
                age,
                " /",
                " ",
                patient.gender === "male" ? "Male" : patient.gender === "female" ? "Female" : "Other"
              ] }),
              patient.registerNumber && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Register No.:" }),
                " ",
                patient.registerNumber
              ] }),
              patient.bloodGroup && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Blood Group:" }),
                " ",
                patient.bloodGroup
              ] })
            ] }),
            clinicalSummary && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-1", children: "Clinical Summary:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-line text-gray-700", children: clinicalSummary })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-1", children: "Reason for Referral:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-line text-gray-700", children: reason })
            ] }),
            meds && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-1", children: "Current Medications:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: meds })
            ] }),
            vitals && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-1", children: "Current Vital Signs:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: vitals })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Kindly see and manage this patient as appropriate. Please do not hesitate to contact me should you require further information." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Thank you for your kind assistance." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-8 border-t mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: doctorName }),
              doctorDegree && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-xs", children: doctorDegree }),
              doctorHospital && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-xs", children: doctorHospital }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-xs mt-1", children: todayStr })
            ] })
          ]
        }
      ),
      showLetter && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 no-print", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            onClick: () => window.print(),
            className: "gap-1.5 bg-blue-600 hover:bg-blue-700 text-white",
            "data-ocid": "referral.print_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3.5 h-3.5" }),
              "Print"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            onClick: () => setShowLetter(false),
            "data-ocid": "referral.close_button",
            children: "Close Preview"
          }
        )
      ] }),
      referrals.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-3.5 h-3.5 text-blue-500" }),
          "Referral History (",
          referrals.length,
          ")"
        ] }),
        referrals.map((r, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReferralHistoryRow,
          {
            record: r,
            index: idx,
            onUpdateStatus: updateStatus
          },
          r.id
        ))
      ] }),
      referrals.length === 0 && !showLetter && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "text-center py-8 bg-muted/30 rounded-xl border border-dashed border-border",
          "data-ocid": "referral.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-7 h-7 text-muted-foreground/40 mx-auto mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No referrals recorded yet" })
          ]
        }
      )
    ] })
  ] });
}
function ReferralHistoryRow({
  record,
  index,
  onUpdateStatus
}) {
  const [expanded, setExpanded] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border border-border rounded-xl overflow-hidden",
      "data-ocid": `referral.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setExpanded((v) => !v),
            className: "w-full flex items-center justify-between px-3 py-2.5 bg-muted/30 hover:bg-muted/50 transition-colors text-left",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: `text-[10px] border px-1.5 py-0 ${STATUS_COLORS[record.status]}`,
                    children: record.status
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium text-foreground", children: [
                  record.specialist,
                  record.department && record.department !== record.specialist ? ` / ${record.department}` : ""
                ] }),
                record.urgency !== "Routine" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: `text-[10px] border px-1.5 py-0 ${URGENCY_COLORS[record.urgency]}`,
                    children: record.urgency
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: record.date ? format(new Date(record.date), "dd MMM yyyy") : "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ChevronDown,
                  {
                    className: `w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${expanded ? "rotate-180" : ""}`
                  }
                )
              ] })
            ]
          }
        ),
        expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 space-y-2 bg-white border-t border-border", children: [
          record.hospital && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Hospital:" }),
            " ",
            record.hospital
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Reason:" }),
            " ",
            record.reason
          ] }),
          record.clinicalSummary && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground whitespace-pre-line", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Summary:" }),
            " ",
            record.clinicalSummary
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "By:" }),
            " ",
            record.createdBy
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pt-1 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground", children: "Update Status:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: record.status,
                onValueChange: (v) => onUpdateStatus(record.id, v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "h-7 text-xs w-32",
                      "data-ocid": `referral.status.select.${index + 1}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Draft", "Sent", "Accepted", "Completed"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, className: "text-xs", children: s }, s)) })
                ]
              }
            ),
            record.status === "Completed" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-green-500" })
          ] })
        ] })
      ]
    }
  );
}
function formatTime$1(time) {
  return format(new Date(Number(time / 1000000n)), "MMM d, yyyy");
}
function calcMAP(bp) {
  const parts = bp.split("/");
  if (parts.length !== 2) return null;
  const sbp = Number.parseInt(parts[0]);
  const dbp = Number.parseInt(parts[1]);
  if (Number.isNaN(sbp) || Number.isNaN(dbp)) return null;
  return Math.round(dbp + (sbp - dbp) / 3);
}
function vitalAlert(key, value) {
  if (!value || value === "—") return { status: "normal", message: "" };
  const num = Number.parseFloat(value.replace(/[^0-9./-]/g, ""));
  if (key === "bloodPressure") {
    const systolic = Number.parseInt(value.split("/")[0] ?? "0", 10);
    if (Number.isNaN(systolic)) return { status: "normal", message: "" };
    if (systolic < 90)
      return {
        status: "critical",
        message: `BP systolic ${systolic} < 90 mmHg (hypotension)`
      };
    return { status: "normal", message: "" };
  }
  if (Number.isNaN(num)) return { status: "normal", message: "" };
  if (key === "pulse") {
    if (num > 100)
      return {
        status: "critical",
        message: `Pulse ${num} > 100 bpm (tachycardia)`
      };
    if (num < 60)
      return {
        status: "critical",
        message: `Pulse ${num} < 60 bpm (bradycardia)`
      };
  }
  if (key === "temperature") {
    if (num > 38.5)
      return {
        status: "critical",
        message: `Temp ${num}°F > 38.5°F (fever)`
      };
    if (num < 36)
      return {
        status: "critical",
        message: `Temp ${num}°F < 36°F (hypothermia)`
      };
  }
  if (key === "oxygenSaturation") {
    if (num < 90)
      return {
        status: "critical",
        message: `SpO₂ ${num}% < 90% (hypoxia)`
      };
  }
  if (key === "respiratoryRate") {
    if (num > 30)
      return {
        status: "critical",
        message: `RR ${num} > 30 breaths/min (tachypnoea)`
      };
  }
  return { status: "normal", message: "" };
}
function vitalStatus(key, value) {
  if (!value || value === "—") return "normal";
  const num = Number.parseFloat(value.replace(/[^0-9.]/g, ""));
  if (Number.isNaN(num)) return "normal";
  if (key === "bloodPressure") {
    const systolic = Number.parseInt(value.split("/")[0] || "0");
    if (systolic > 140) return "high";
    if (systolic < 90) return "low";
  }
  if (key === "pulse") {
    if (num > 100) return "high";
    if (num < 60) return "low";
  }
  if (key === "temperature") {
    if (num > 37.5) return "high";
    if (num < 36) return "low";
  }
  if (key === "oxygenSaturation") {
    if (num < 95) return "low";
  }
  return "normal";
}
function getBMICategory(bmi) {
  if (bmi < 18.5)
    return { label: "Underweight", color: "text-blue-600 bg-blue-100" };
  if (bmi < 25)
    return { label: "Normal", color: "text-green-700 bg-green-100" };
  if (bmi < 30)
    return { label: "Overweight", color: "text-amber-700 bg-amber-100" };
  if (bmi < 35)
    return { label: "Obese I", color: "text-orange-700 bg-orange-100" };
  return { label: "Obese II+", color: "text-red-700 bg-red-100" };
}
const AI_SUGGESTION_BANNERS = {
  SepticShock: {
    color: "bg-amber-50 border-amber-300",
    icon: "💊",
    text: "Start sepsis bundle? → IV fluids 30ml/kg, blood cultures ×2, broad-spectrum antibiotics within 1hr"
  },
  AKI: {
    color: "bg-amber-50 border-amber-300",
    icon: "🧪",
    text: "AKI protocol? → Hold nephrotoxins, IV fluids, urgent electrolytes, nephrology consult"
  },
  Hyperkalemia: {
    color: "bg-amber-50 border-amber-300",
    icon: "🧪",
    text: "AKI/Hyperkalemia → Hold nephrotoxins, IV fluids, urgent electrolytes, nephrology consult"
  },
  SevereHypoglycemia: {
    color: "bg-red-50 border-red-300",
    icon: "⚡",
    text: "Immediate: Dextrose 50% 50ml IV bolus or oral glucose if conscious"
  },
  Hypoglycemia: {
    color: "bg-red-50 border-red-300",
    icon: "⚡",
    text: "Immediate: Oral glucose 15–20g if conscious; Dextrose 50% 50ml IV if unconscious"
  },
  RespiratoryFailure: {
    color: "bg-amber-50 border-amber-300",
    icon: "💨",
    text: "Oxygen supplementation? → Target SpO₂ ≥94%, consider non-rebreather mask or NIV"
  },
  AsthmaExacerbation: {
    color: "bg-amber-50 border-amber-300",
    icon: "💨",
    text: "Oxygen supplementation? → Target SpO₂ ≥94%, consider non-rebreather mask"
  }
};
function RedFlagMonitor({
  patientId,
  latestVitals,
  allInvestigations,
  prescriptions,
  diagnoses
}) {
  const [rfAlerts, setRfAlerts] = reactExports.useState([]);
  const [rfTrendAlerts, setRfTrendAlerts] = reactExports.useState([]);
  const [dismissedIds, setDismissedIds] = reactExports.useState(() => {
    try {
      const raw = sessionStorage.getItem(`dismissed_flags_${patientId}`);
      return raw ? new Set(JSON.parse(raw)) : /* @__PURE__ */ new Set();
    } catch {
      return /* @__PURE__ */ new Set();
    }
  });
  const rfIntervalRef = reactExports.useRef(null);
  const buildAlertInput = reactExports.useCallback(() => {
    const v = latestVitals ?? {};
    const bpParts = (v.bloodPressure ?? "").split("/");
    const sBP = bpParts[0] ? Number.parseInt(bpParts[0]) : void 0;
    const dBP = bpParts[1] ? Number.parseInt(bpParts[1]) : void 0;
    const hr = v.pulse ? Number.parseFloat(v.pulse) : void 0;
    const temp = v.temperature ? Number.parseFloat(v.temperature) : void 0;
    const rr = v.respiratoryRate ? Number.parseFloat(v.respiratoryRate) : void 0;
    const spo2 = v.oxygenSaturation ? Number.parseFloat(v.oxygenSaturation) : void 0;
    const getLabVal = (keys) => {
      for (const key of keys) {
        const row = allInvestigations.find(
          (r) => (r.name ?? "").toLowerCase().includes(key.toLowerCase()) && r.result
        );
        if (row) {
          const n = Number.parseFloat(row.result);
          if (!Number.isNaN(n)) return n;
        }
      }
      return void 0;
    };
    const creatRows = allInvestigations.filter(
      (r) => (r.name ?? "").toLowerCase().includes("creatinine") && r.result
    ).sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
    const creat = creatRows[0] ? Number.parseFloat(creatRows[0].result) : void 0;
    const creatPrev = creatRows[1] ? Number.parseFloat(creatRows[1].result) : void 0;
    const medications = prescriptions.flatMap((rx) => rx.medications ?? []);
    return {
      vitals: {
        systolicBP: !Number.isNaN(sBP ?? Number.NaN) ? sBP : void 0,
        diastolicBP: !Number.isNaN(dBP ?? Number.NaN) ? dBP : void 0,
        heartRate: !Number.isNaN(hr ?? Number.NaN) ? hr : void 0,
        temperature: !Number.isNaN(temp ?? Number.NaN) ? temp : void 0,
        respiratoryRate: !Number.isNaN(rr ?? Number.NaN) ? rr : void 0,
        spo2: !Number.isNaN(spo2 ?? Number.NaN) ? spo2 : void 0
      },
      labs: {
        creatinine: !Number.isNaN(creat ?? Number.NaN) ? creat : void 0,
        creatininePrev: !Number.isNaN(creatPrev ?? Number.NaN) ? creatPrev : void 0,
        potassium: getLabVal(["potassium", "k+"]),
        sodium: getLabVal(["sodium", "na+"]),
        glucose: getLabVal(["glucose", "blood sugar", "rbs"]),
        wbc: getLabVal(["wbc", "tlc"]),
        ph: getLabVal(["ph"]),
        bicarbonate: getLabVal(["bicarbonate", "hco3"])
      },
      medications,
      diagnoses
    };
  }, [latestVitals, allInvestigations, prescriptions, diagnoses]);
  const runChecks = reactExports.useCallback(() => {
    const input = buildAlertInput();
    setRfAlerts(checkExtendedClinicalAlerts(input));
    const labHistory = allInvestigations.reduce(
      (acc, row) => {
        const val = Number.parseFloat(row.result ?? "");
        if (Number.isNaN(val)) return acc;
        const name = (row.name ?? "").toLowerCase();
        const entry = {
          timestamp: row.date ? new Date(row.date).toISOString() : (/* @__PURE__ */ new Date()).toISOString()
        };
        if (name.includes("creatinine")) entry.creatinine = val;
        else if (name.includes("hemoglobin") || name === "hb")
          entry.hemoglobin = val;
        if (Object.keys(entry).length > 1) acc.push(entry);
        return acc;
      },
      []
    );
    setRfTrendAlerts(checkTrendAlerts([], labHistory));
  }, [buildAlertInput, allInvestigations]);
  reactExports.useEffect(() => {
    runChecks();
    rfIntervalRef.current = setInterval(runChecks, 5 * 60 * 1e3);
    return () => {
      if (rfIntervalRef.current) clearInterval(rfIntervalRef.current);
    };
  }, [runChecks]);
  const dismissRfAlert = (id) => {
    const next = new Set(dismissedIds);
    next.add(id);
    setDismissedIds(next);
    try {
      sessionStorage.setItem(
        `dismissed_flags_${patientId}`,
        JSON.stringify([...next])
      );
    } catch {
    }
  };
  const visCrit = rfAlerts.filter(
    (a) => a.severity === "critical" && !dismissedIds.has(a.id)
  );
  const visWarn = rfAlerts.filter(
    (a) => a.severity === "warning" && !dismissedIds.has(a.id)
  );
  const visTrends = rfTrendAlerts.filter((t) => !dismissedIds.has(t.id));
  if (visCrit.length + visWarn.length + visTrends.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-4 py-2.5",
        "data-ocid": "red_flag_monitor.clear",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-green-500 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-700 font-medium flex-1", children: "No active red flags detected" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: runChecks,
              className: "text-xs text-green-600 hover:text-green-800 underline",
              "data-ocid": "red_flag_monitor.refresh_button",
              children: "Refresh"
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "red_flag_monitor.panel", children: [
    visCrit.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 border-2 border-red-400 rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-500 px-4 py-2 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-sm", children: [
            "🚨 RED FLAGS DETECTED (",
            visCrit.length,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: runChecks,
            className: "text-xs text-white/80 hover:text-white underline",
            "data-ocid": "red_flag_monitor.refresh_button",
            children: "↻ Refresh"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-red-200" }),
        visCrit.map((alert2) => {
          const banner = AI_SUGGESTION_BANNERS[alert2.alertType];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "space-y-1.5",
              "data-ocid": `red_flag_monitor.critical.${alert2.alertType}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-red-800", children: [
                      "• ",
                      alert2.message
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-600 mt-0.5", children: alert2.details })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => dismissRfAlert(alert2.id),
                      className: "text-red-400 hover:text-red-600 shrink-0",
                      title: "Dismiss for this session",
                      "data-ocid": "red_flag_monitor.dismiss_button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4" })
                    }
                  )
                ] }),
                banner && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `rounded-lg px-3 py-2 border text-xs flex items-start gap-1.5 ${banner.color}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0", children: banner.icon }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-amber-800 flex-1", children: banner.text }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => dismissRfAlert(`${alert2.id}_banner`),
                          className: "ml-auto shrink-0 text-amber-500 hover:text-amber-700",
                          title: "Dismiss for this session",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ]
                  }
                )
              ]
            },
            alert2.id
          );
        })
      ] })
    ] }),
    visWarn.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 border border-amber-300 rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-400 px-4 py-2 flex items-center gap-2 text-amber-900", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-sm", children: [
          "⚠️ WARNINGS (",
          visWarn.length,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 space-y-2", children: visWarn.map((alert2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-start justify-between gap-2",
          "data-ocid": `red_flag_monitor.warning.${alert2.alertType}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-amber-800", children: [
                "• ",
                alert2.message
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-600 mt-0.5", children: alert2.details }),
              alert2.aiSuggestion && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-700 mt-1 italic", children: [
                "💡 ",
                alert2.aiSuggestion
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => dismissRfAlert(alert2.id),
                className: "text-amber-400 hover:text-amber-600 shrink-0",
                title: "Dismiss for this session",
                "data-ocid": "red_flag_monitor.dismiss_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4" })
              }
            )
          ]
        },
        alert2.id
      )) })
    ] }),
    visTrends.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-blue-700 uppercase tracking-wide mb-1 flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-3.5 h-3.5" }),
        " Trend Alerts"
      ] }),
      visTrends.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-start justify-between gap-2",
          "data-ocid": `red_flag_monitor.trend.${t.metric}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-blue-800", children: [
                "• ",
                t.message
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-blue-600", children: t.details })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => dismissRfAlert(t.id),
                className: "text-blue-400 hover:text-blue-600 shrink-0",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3.5 h-3.5" })
              }
            )
          ]
        },
        t.id
      ))
    ] })
  ] });
}
function VitalsBar({
  vitals,
  weight,
  height,
  showAlertBanner
}) {
  const bp = (vitals == null ? void 0 : vitals.bloodPressure) || "";
  const map = bp ? calcMAP(bp) : null;
  const wt = (vitals == null ? void 0 : vitals.weight) ? Number.parseFloat(vitals.weight) : weight;
  const ht = (vitals == null ? void 0 : vitals.height) ? Number.parseFloat(vitals.height) : height;
  const bmi = wt && ht ? Math.round(wt / (ht / 100 * (ht / 100)) * 10) / 10 : null;
  const bmiCat = bmi ? getBMICategory(bmi) : null;
  const items = [
    {
      key: "bloodPressure",
      label: "BP",
      value: bp || "—",
      unit: "mmHg",
      extra: map ? ` | MAP: ${map}` : ""
    },
    {
      key: "pulse",
      label: "Pulse",
      value: (vitals == null ? void 0 : vitals.pulse) || "—",
      unit: "beats/min"
    },
    {
      key: "oxygenSaturation",
      label: "SpO₂",
      value: (vitals == null ? void 0 : vitals.oxygenSaturation) || "—",
      unit: "%"
    },
    {
      key: "temperature",
      label: "Temp",
      value: (vitals == null ? void 0 : vitals.temperature) || "—",
      unit: "°F"
    },
    {
      key: "weight",
      label: "Weight",
      value: wt ? String(wt) : "—",
      unit: "kg"
    },
    {
      key: "respiratoryRate",
      label: "RR",
      value: (vitals == null ? void 0 : vitals.respiratoryRate) || "—",
      unit: "breaths/min"
    }
  ];
  const alerts = items.map(
    (item) => item.value !== "—" ? vitalAlert(item.key, item.value) : { status: "normal", message: "" }
  );
  const criticalAlerts = alerts.filter((a) => a.status === "critical");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    showAlertBanner && criticalAlerts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 border border-red-300 rounded-xl p-3 flex items-start gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-red-600 shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold text-red-700 mb-1", children: [
          "⚠️ Vital Alert — ",
          criticalAlerts.length,
          " abnormal value",
          criticalAlerts.length > 1 ? "s" : ""
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5", children: criticalAlerts.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-red-600", children: [
          "• ",
          a.message
        ] }, a.message)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: items.map((item, i) => {
      const status = item.value !== "—" ? vitalStatus(item.key, item.value) : "normal";
      const alert2 = alerts[i];
      const isCritical = alert2.status === "critical";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          title: isCritical ? alert2.message : void 0,
          className: `rounded-xl p-3 border relative ${isCritical ? "bg-red-100 border-red-300" : status === "high" ? "bg-red-50 border-red-200" : status === "low" ? "bg-blue-50 border-blue-200" : "bg-gray-50 border-gray-200"}`,
          children: [
            isCritical && /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "absolute top-2 right-2 w-3.5 h-3.5 text-red-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mb-0.5", children: item.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `font-bold text-lg ${isCritical ? "text-red-700" : status === "high" ? "text-red-700" : status === "low" ? "text-blue-700" : "text-gray-800"}`,
                children: item.value
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-gray-500", children: [
              item.unit,
              item.extra && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-normal", children: item.extra })
            ] })
          ]
        },
        item.key
      );
    }) }),
    bmi && bmiCat && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-gray-50 rounded-xl p-3 border border-gray-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "BMI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-lg text-gray-800", children: bmi }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-gray-500", children: "kg/m²" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `px-3 py-1 rounded-full text-sm font-semibold ${bmiCat.color}`,
          children: bmiCat.label
        }
      )
    ] })
  ] });
}
function VitalGraph({
  title,
  data,
  dataKey,
  unit,
  color,
  bgClass,
  borderClass,
  icon: Icon,
  outOfRangeCheck
}) {
  const keys = Array.isArray(dataKey) ? dataKey : [dataKey];
  const colors = Array.isArray(color) ? color : [color];
  const hasData = data.filter((r) => keys.some((k) => r[k])).length >= 2;
  const makeCustomDot = (strokeColor, dKey) => (props) => {
    const { cx, cy, value } = props;
    if (cx == null || cy == null || value == null) return /* @__PURE__ */ jsxRuntimeExports.jsx("g", {});
    const isOutOfRange = outOfRangeCheck ? outOfRangeCheck(dKey, value) : false;
    if (isOutOfRange) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx,
            cy,
            r: 7,
            fill: "#DC2626",
            fillOpacity: 0.2,
            stroke: "#DC2626",
            strokeWidth: 0
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx,
            cy,
            r: 6,
            fill: "#DC2626",
            stroke: "white",
            strokeWidth: 1.5,
            style: { filter: "drop-shadow(0 0 4px #DC2626)" }
          }
        )
      ] });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "circle",
      {
        cx,
        cy,
        r: 3,
        fill: strokeColor,
        stroke: "white",
        strokeWidth: 1
      }
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `${bgClass} rounded-xl border ${borderClass} shadow-sm overflow-hidden`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "px-4 py-3 flex items-center gap-2",
            style: {
              background: Array.isArray(color) ? `linear-gradient(to right, ${colors[0]}22, ${colors[0]}11)` : `${color}18`
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4", style: { color: colors[0] } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-sm", style: { color: colors[0] }, children: title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-normal ml-1 opacity-60", children: [
                "(",
                unit,
                ")"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: hasData ? /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#f0f0f0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "date", tick: { fontSize: 10 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            YAxis,
            {
              tick: { fontSize: 10 },
              label: {
                value: unit,
                angle: -90,
                position: "insideLeft",
                style: { fontWeight: "bold", fontSize: 10 }
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tooltip,
            {
              contentStyle: {
                borderRadius: "8px",
                fontSize: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: { fontSize: 11, paddingTop: 8 } }),
          keys.map((k, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Line,
            {
              type: "monotone",
              dataKey: k,
              stroke: colors[i] || colors[0],
              strokeWidth: 2.5,
              dot: makeCustomDot(colors[i] || colors[0], k),
              activeDot: { r: 5, strokeWidth: 2, stroke: "white" },
              name: k,
              connectNulls: true
            },
            k
          ))
        ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 text-gray-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-6 h-6 mx-auto mb-1 opacity-40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", children: "Need 2+ visits for trend" })
        ] }) })
      ]
    }
  );
}
const APPOINTMENTS_KEY = "medicare_appointments";
function AppointmentsTab({
  patientId,
  currentRole,
  patientName
}) {
  const allAppts = reactExports.useMemo(() => {
    try {
      const raw = localStorage.getItem(APPOINTMENTS_KEY);
      if (!raw) return [];
      const all = JSON.parse(raw);
      if (!patientId) return all;
      return all.filter(
        (a) => {
          var _a;
          return a.patientId === String(patientId) || ((_a = a.patientName) == null ? void 0 : _a.toLowerCase()) === patientName.toLowerCase();
        }
      );
    } catch {
      return [];
    }
  }, [patientId, patientName]);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    preferredDate: "",
    preferredTime: "",
    preferredDoctor: "",
    reason: ""
  });
  const upcoming = allAppts.filter(
    (a) => a.status !== "cancelled" && new Date(a.preferredDate) >= /* @__PURE__ */ new Date()
  );
  const past = allAppts.filter(
    (a) => a.status === "cancelled" || new Date(a.preferredDate) < /* @__PURE__ */ new Date()
  );
  function createAppointment() {
    if (!form.preferredDate || !form.preferredTime) {
      ue.error("Please set date and time");
      return;
    }
    try {
      const raw = localStorage.getItem(APPOINTMENTS_KEY);
      const all = raw ? JSON.parse(raw) : [];
      all.push({
        id: Date.now().toString(36),
        patientId: String(patientId),
        patientName,
        phone: "",
        preferredDoctor: form.preferredDoctor || "Dr. Arman Kabir",
        preferredDate: form.preferredDate,
        preferredTime: form.preferredTime,
        reason: form.reason,
        status: "pending",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        createdBy: currentRole
      });
      localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(all));
      ue.success("Appointment created");
      setShowForm(false);
      setForm({
        preferredDate: "",
        preferredTime: "",
        preferredDoctor: "",
        reason: ""
      });
    } catch {
      ue.error("Failed to create appointment");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    (currentRole === "doctor" || currentRole === "admin" || currentRole === "staff" || currentRole === "patient") && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        size: "sm",
        className: "bg-green-600 hover:bg-green-700 text-white gap-1.5",
        onClick: () => setShowForm(!showForm),
        "data-ocid": "patient_dashboard.appointments.open_modal_button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
          "New Appointment"
        ]
      }
    ) }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 border border-green-200 rounded-xl p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-green-800 text-sm", children: "Book Appointment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Preferred Date *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              value: form.preferredDate,
              onChange: (e) => setForm((f) => ({ ...f, preferredDate: e.target.value })),
              className: "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mt-1",
              "data-ocid": "patient_dashboard.appointments.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Preferred Time *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "time",
              value: form.preferredTime,
              onChange: (e) => setForm((f) => ({ ...f, preferredTime: e.target.value })),
              className: "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mt-1",
              "data-ocid": "patient_dashboard.appointments.input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Doctor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: form.preferredDoctor,
            onChange: (e) => setForm((f) => ({ ...f, preferredDoctor: e.target.value })),
            placeholder: "Dr. Arman Kabir",
            className: "mt-1"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Reason (optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: form.reason,
            onChange: (e) => setForm((f) => ({ ...f, reason: e.target.value })),
            placeholder: "Follow-up, new complaint...",
            className: "mt-1"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            onClick: createAppointment,
            className: "bg-green-600 hover:bg-green-700 text-white",
            children: "Save Appointment"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            onClick: () => setShowForm(false),
            children: "Cancel"
          }
        )
      ] })
    ] }),
    upcoming.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-green-200 shadow-sm p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-green-800 mb-3 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
        " Upcoming Appointments"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: upcoming.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center justify-between bg-green-50 rounded-lg px-3 py-2.5 border border-green-100",
          "data-ocid": `patient_dashboard.appointments.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium text-sm text-green-800", children: [
                a.preferredDate,
                " — ",
                a.preferredTime
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600", children: a.preferredDoctor }),
              a.reason && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: a.reason })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: `text-xs border-0 ${a.status === "confirmed" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`,
                children: a.status
              }
            )
          ]
        },
        a.id
      )) })
    ] }),
    past.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-gray-200 shadow-sm p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-gray-700 mb-3 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
        " Past Appointments"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: past.slice(0, 5).map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2.5 border border-gray-100",
          "data-ocid": `patient_dashboard.appointments.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium text-sm text-gray-700", children: [
                a.preferredDate,
                " — ",
                a.preferredTime
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: a.preferredDoctor })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-xs border-0 bg-gray-100 text-gray-600", children: a.status })
          ]
        },
        a.id
      )) })
    ] }),
    allAppts.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-10 bg-white rounded-xl border border-gray-200",
        "data-ocid": "patient_dashboard.appointments.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-10 h-10 text-gray-300 mx-auto mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "No appointments yet" })
        ]
      }
    )
  ] });
}
function AdmissionHistoryInlineSection({
  records,
  viewerRole: _viewerRole,
  patient
}) {
  const [expandedId, setExpandedId] = reactExports.useState(
    records.length > 0 ? records[records.length - 1].id : null
  );
  const FIELD_ROWS = [
    {
      label: "Chief Complaints",
      key: "chiefComplaints",
      color: "text-blue-700"
    },
    {
      label: "History of Present Illness",
      key: "historyOfPresentIllness",
      color: "text-indigo-700"
    },
    {
      label: "Past Medical History",
      key: "pastMedicalHistory",
      color: "text-green-700"
    },
    {
      label: "Past Surgical History",
      key: "pastSurgicalHistory",
      color: "text-teal-700"
    },
    { label: "Drug History", key: "drugHistory", color: "text-amber-700" },
    { label: "Allergies", key: "allergies", color: "text-rose-700" },
    {
      label: "Physical / On Examination",
      key: "physicalExamination",
      color: "text-purple-700"
    },
    {
      label: "Provisional Diagnosis",
      key: "provisionalDiagnosis",
      color: "text-orange-700"
    },
    { label: "Initial Plan", key: "initialPlan", color: "text-cyan-700" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-white rounded-xl border-2 border-indigo-300 shadow-sm overflow-hidden",
      "data-ocid": "patient_dashboard.history.admission_hx_section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-indigo-600 to-blue-600 px-5 py-3 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-white" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-white text-sm", children: "Admission History" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-indigo-200 text-xs", children: [
              "(",
              records.length,
              " record",
              records.length > 1 ? "s" : "",
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-indigo-200 bg-indigo-700/40 px-2 py-0.5 rounded-full", children: patient.fullName })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-indigo-100", children: records.map((rec) => {
          const isExpanded = expandedId === rec.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setExpandedId(isExpanded ? null : rec.id),
                className: "w-full flex items-center justify-between px-5 py-3 bg-indigo-50 hover:bg-indigo-100 transition-colors text-left",
                "data-ocid": "patient_dashboard.history.admission_hx_row",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-indigo-100 border border-indigo-300 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3 h-3 text-indigo-600" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-indigo-800", children: [
                        "Admitted:",
                        " ",
                        rec.admittedOn ? format(new Date(rec.admittedOn), "dd MMM yyyy") : "—",
                        rec.hospitalName ? ` · ${rec.hospitalName}` : "",
                        rec.ward ? `, Ward ${rec.ward}` : "",
                        rec.bed ? `, Bed ${rec.bed}` : ""
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-indigo-500", children: [
                        "By ",
                        rec.admittedBy,
                        " (",
                        rec.admittedByRole,
                        ") ·",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `font-semibold ${rec.status === "complete" ? "text-green-600" : "text-amber-600"}`,
                            children: rec.status === "complete" ? "✓ Complete" : "⏳ Awaiting Approval"
                          }
                        )
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ChevronDown,
                    {
                      className: `w-4 h-4 text-indigo-400 transition-transform duration-200 shrink-0 ${isExpanded ? "rotate-180" : ""}`
                    }
                  )
                ]
              }
            ),
            isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 space-y-3 bg-white", children: [
              FIELD_ROWS.map(({ label, key, color }) => {
                const value = rec[key];
                if (!value) return null;
                if (key === "chiefComplaints" && Array.isArray(value)) {
                  const comps = value;
                  if (comps.length === 0) return null;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "bg-blue-50 border border-blue-200 rounded-lg p-3",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-blue-700 mb-1.5", children: "Chief Complaints" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: comps.map((c, ci) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "li",
                          {
                            className: "text-sm text-blue-800 flex items-start gap-1.5",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-0.5 shrink-0 text-blue-400", children: [
                                ci + 1,
                                "."
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                                c.complaint,
                                c.duration ? ` — ${c.duration}` : "",
                                c.notes ? ` (${c.notes})` : ""
                              ] })
                            ]
                          },
                          `cc-${String(ci)}`
                        )) })
                      ]
                    },
                    key
                  );
                }
                const strVal = String(value).trim();
                if (!strVal) return null;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "bg-indigo-50/60 border border-indigo-100 rounded-lg p-3",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs font-bold mb-1 ${color}`, children: label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 whitespace-pre-line", children: strVal })
                    ]
                  },
                  key
                );
              }),
              rec.changeRequests.filter((cr) => !cr.resolved).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 border border-amber-200 rounded-lg p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-amber-700 mb-1.5", children: "⚠️ Pending Change Requests" }),
                rec.changeRequests.filter((cr) => !cr.resolved).map((cr) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "text-xs text-amber-700 bg-amber-100 rounded px-2 py-1 mb-1",
                    children: [
                      '"',
                      cr.comment,
                      '" — ',
                      cr.requestedBy,
                      " at",
                      " ",
                      format(new Date(cr.requestedAt), "dd MMM HH:mm")
                    ]
                  },
                  cr.id
                ))
              ] })
            ] })
          ] }, rec.id);
        }) })
      ]
    }
  );
}
function HistoryTabContent({
  sortedVisits,
  currentRole,
  setSelectedVisit,
  downloadSingleVisitPDF,
  openRxForm
}) {
  const [expandedId, setExpandedId] = reactExports.useState(null);
  if (sortedVisits.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "text-sm text-gray-400 text-center py-8",
        "data-ocid": "patient_dashboard.visits.empty_state",
        children: "No visit history yet."
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: sortedVisits.map((v, idx) => {
    const isExpanded = expandedId === v.id.toString();
    let extData = {};
    try {
      const fd = getVisitFormData(v.id);
      if (fd) extData = fd;
    } catch {
    }
    const showToPatient = extData.showToPatient !== false;
    const diagnosis = extData.diagnosis || v.diagnosis || "—";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border border-gray-200 rounded-xl overflow-hidden",
        "data-ocid": `patient_dashboard.visits.item.${idx + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setExpandedId(isExpanded ? null : v.id.toString()),
              className: "w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5 text-teal-600" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm text-gray-800", children: diagnosis }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-400", children: [
                      formatTime$1(v.visitDate),
                      " · ",
                      v.visitType || "outpatient"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
                  (currentRole === "doctor" || currentRole === "admin") && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "h-7 px-2 text-xs gap-1 border-blue-300 text-blue-700",
                        onClick: (e) => {
                          e.stopPropagation();
                          setSelectedVisit(v);
                        },
                        "data-ocid": `patient_dashboard.visits.secondary_button.${idx + 1}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3" }),
                          "View"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "h-7 px-2 text-xs gap-1 border-teal-300 text-teal-700",
                        onClick: (e) => {
                          e.stopPropagation();
                          openRxForm(diagnosis, v.id);
                        },
                        "data-ocid": `patient_dashboard.visits.open_modal_button.${idx + 1}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-3 h-3" }),
                          "Rx"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "h-7 px-2 text-xs gap-1 border-purple-300 text-purple-700",
                        onClick: (e) => {
                          e.stopPropagation();
                          downloadSingleVisitPDF(v);
                        },
                        "data-ocid": `patient_dashboard.visits.button.${idx + 1}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3 h-3" }),
                          "PDF"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        variant: showToPatient ? "default" : "outline",
                        className: `h-7 px-2 text-xs ${showToPatient ? "bg-green-600 text-white" : "border-gray-300 text-gray-600"}`,
                        onClick: (e) => {
                          e.stopPropagation();
                          const stored = getVisitFormData(v.id) || {};
                          stored.showToPatient = !showToPatient;
                          localStorage.setItem(
                            `visit_form_data_${v.id}_${(localStorage.getItem("staff_auth") ? JSON.parse(localStorage.getItem("staff_auth") || "{}").email : null) || "default"}`,
                            JSON.stringify(stored)
                          );
                          ue.success(
                            showToPatient ? "Hidden from patient" : "Shown to patient"
                          );
                        },
                        children: showToPatient ? "Visible" : "Hidden"
                      }
                    )
                  ] }),
                  currentRole === "patient" && showToPatient && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "h-7 px-2 text-xs gap-1 border-purple-300 text-purple-700",
                      onClick: (e) => {
                        e.stopPropagation();
                        downloadSingleVisitPDF(v);
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3 h-3" }),
                        "PDF"
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3 bg-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-blue-800 mb-2", children: "1. Particulars of the Patient" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs text-blue-700", children: [
                v.chiefComplaint && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Chief Complaint: ",
                  v.chiefComplaint
                ] }),
                v.visitType && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Visit Type: ",
                  v.visitType
                ] }),
                formatTime$1(v.visitDate) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Date: ",
                  formatTime$1(v.visitDate)
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 border border-green-200 rounded-lg p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-green-800 mb-1", children: "2. Clinical Diagnosis" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-700", children: diagnosis }),
              extData.differentialDiagnosis ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-green-600 mt-1", children: [
                "DDx: ",
                String(extData.differentialDiagnosis)
              ] }) : null
            ] }),
            extData.salientFeatures ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 border border-purple-200 rounded-lg p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-purple-800 mb-1", children: "3. Salient Features" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-purple-700 whitespace-pre-line", children: String(extData.salientFeatures) })
            ] }) : null,
            Array.isArray(extData.previous_investigation_rows) && extData.previous_investigation_rows.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 border border-amber-200 rounded-lg p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-amber-800 mb-2", children: "4. Investigation Profile" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: extData.previous_investigation_rows.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "text-xs text-amber-700",
                  children: [
                    row.date && `${row.date}: `,
                    row.name,
                    " — ",
                    row.result,
                    " ",
                    row.unit || ""
                  ]
                },
                `${row.name}-${row.date}`
              )) })
            ] }),
            extData.ongoingTreatment ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-teal-50 border border-teal-200 rounded-lg p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-teal-800 mb-1", children: "5. Ongoing Treatment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-teal-700 whitespace-pre-line", children: String(extData.ongoingTreatment) })
            ] }) : null
          ] })
        ]
      },
      v.id.toString()
    );
  }) });
}
function AccountSettingsTab({
  patientId,
  registerNo,
  currentRole,
  patientAccount,
  linkedAccount,
  reminders,
  prescriptionDrugChips,
  onSaveReminders
}) {
  const { updatePatientCredentials } = useEmailAuth();
  const [acctNewPhone, setAcctNewPhone] = reactExports.useState("");
  const [acctNewPassword, setAcctNewPassword] = reactExports.useState("");
  const [showPasswordPlain, setShowPasswordPlain] = reactExports.useState(false);
  const [signUpEnabledState, setSignUpEnabledState] = reactExports.useState(
    null
  );
  const signUpEnabled = signUpEnabledState !== null ? signUpEnabledState : registerNo ? isSignUpEnabled(registerNo) : false;
  const handleToggleSignUp = (checked) => {
    if (!registerNo) return;
    setSignUpEnabled(registerNo, checked);
    setSignUpEnabledState(checked);
    ue.success(
      checked ? "Sign-up enabled for this patient" : "Sign-up disabled for this patient"
    );
  };
  const handleSave = () => {
    if (!registerNo) return;
    if (!acctNewPhone && !acctNewPassword) {
      ue.error("Enter a new phone or password to save");
      return;
    }
    updatePatientCredentials(
      registerNo,
      acctNewPhone || void 0,
      acctNewPassword || void 0
    );
    setAcctNewPhone("");
    setAcctNewPassword("");
    ue.success("Credentials updated");
  };
  const [newReminderDrug, setNewReminderDrug] = reactExports.useState("");
  const [newReminderTime, setNewReminderTime] = reactExports.useState("08:00");
  const [newReminderTimes, setNewReminderTimes] = reactExports.useState([]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    (currentRole === "admin" || currentRole === "doctor") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-blue-200 shadow-sm p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-blue-800 mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4" }),
        " Patient Login Credentials"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        linkedAccount && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 rounded-lg p-3 text-sm space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Current mobile:" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: linkedAccount.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-blue-800", children: "Password:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-blue-700", children: showPasswordPlain ? (() => {
              try {
                return atob(linkedAccount.passwordHash).split("::")[1] ?? "••••";
              } catch {
                return "••••";
              }
            })() : "••••••••" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setShowPasswordPlain(!showPasswordPlain),
                className: "text-blue-500 hover:text-blue-700",
                children: showPasswordPlain ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "New Mobile Number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: acctNewPhone,
              onChange: (e) => setAcctNewPhone(e.target.value),
              placeholder: "01XXXXXXXXX",
              type: "tel",
              className: "mt-1",
              "data-ocid": "patient_dashboard.account.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "New Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: acctNewPassword,
              onChange: (e) => setAcctNewPassword(e.target.value),
              placeholder: "Min. 6 chars",
              type: "password",
              className: "mt-1",
              "data-ocid": "patient_dashboard.account.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            onClick: handleSave,
            className: "bg-blue-600 hover:bg-blue-700 text-white",
            children: "Update Credentials"
          }
        )
      ] }),
      registerNo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-blue-100 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm text-gray-700", children: "Allow Patient Sign-Up" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Let this patient create a portal account" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Switch,
          {
            checked: signUpEnabled,
            onCheckedChange: handleToggleSignUp,
            "data-ocid": "patient_dashboard.account.toggle"
          }
        )
      ] })
    ] }),
    currentRole === "patient" && patientAccount && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-teal-200 shadow-sm p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-teal-800 mb-4 flex items-center gap-2", children: "🔑 My Login Details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-teal-50 rounded-lg p-3 text-sm space-y-1 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-teal-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Mobile:" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: patientAccount.phone })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-teal-800", children: "Password:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-teal-700", children: showPasswordPlain ? (() => {
            try {
              return atob(patientAccount.passwordHash).split("::")[1] ?? "••••";
            } catch {
              return "••••";
            }
          })() : "••••••••" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setShowPasswordPlain(!showPasswordPlain),
              className: "text-teal-500 hover:text-teal-700",
              children: showPasswordPlain ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Contact the clinic to update your credentials." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-amber-200 shadow-sm p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-amber-800 mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4" }),
        " Drug Reminders"
      ] }),
      prescriptionDrugChips.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mb-1.5", children: "Quick add from prescriptions:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: prescriptionDrugChips.map((drug) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setNewReminderDrug(drug),
            className: "text-xs bg-amber-50 border border-amber-200 text-amber-700 px-2.5 py-1 rounded-full hover:bg-amber-100 transition-colors",
            children: drug
          },
          drug
        )) })
      ] }),
      reminders.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mb-4", children: reminders.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2",
          "data-ocid": "patient_dashboard.account.reminder.item",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                checked: r.enabled,
                onCheckedChange: () => onSaveReminders(
                  reminders.map(
                    (x) => x.id === r.id ? { ...x, enabled: !x.enabled } : x
                  )
                ),
                "data-ocid": "patient_dashboard.account.toggle"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-sm flex-1 ${r.enabled ? "text-gray-800" : "text-gray-400 line-through"}`,
                children: r.drugName
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 flex-wrap", children: r.times.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full font-mono",
                children: t
              },
              t
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => onSaveReminders(reminders.filter((x) => x.id !== r.id)),
                className: "text-red-400 hover:text-red-600",
                "data-ocid": "patient_dashboard.account.delete_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4" })
              }
            )
          ]
        },
        r.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 border-t pt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Add New Reminder" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Drug name (e.g. Tab. Napa 500mg)",
            value: newReminderDrug,
            onChange: (e) => setNewReminderDrug(e.target.value),
            "data-ocid": "patient_dashboard.account.input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "time",
              value: newReminderTime,
              onChange: (e) => setNewReminderTime(e.target.value),
              className: "flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm font-mono"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => {
                if (newReminderTime && !newReminderTimes.includes(newReminderTime)) {
                  setNewReminderTimes([...newReminderTimes, newReminderTime]);
                }
              },
              children: "+ Add Time"
            }
          )
        ] }),
        newReminderTimes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 flex-wrap", children: newReminderTimes.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "flex items-center gap-1 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-mono",
            children: [
              t,
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setNewReminderTimes(
                    newReminderTimes.filter((x) => x !== t)
                  ),
                  children: "×"
                }
              )
            ]
          },
          t
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "w-full bg-amber-600 hover:bg-amber-700 text-white",
            onClick: () => {
              if (!newReminderDrug.trim() || newReminderTimes.length === 0) {
                ue.error("Enter a drug name and at least one time");
                return;
              }
              if (Notification.permission === "default")
                Notification.requestPermission();
              const r = {
                id: `${Date.now()}`,
                patientId: String(patientId),
                drugName: newReminderDrug.trim(),
                times: newReminderTimes,
                enabled: true,
                createdAt: (/* @__PURE__ */ new Date()).toISOString()
              };
              onSaveReminders([...reminders, r]);
              setNewReminderDrug("");
              setNewReminderTimes([]);
              setNewReminderTime("08:00");
              ue.success(`Reminder set for ${r.drugName}`);
            },
            "data-ocid": "patient_dashboard.account.save_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4 mr-2" }),
              "Save Reminder"
            ]
          }
        )
      ] })
    ] })
  ] });
}
function PatientDashboardInner({
  patientId,
  patient,
  currentRole,
  viewerRole,
  patientAccount,
  sortedVisits,
  latestVisit,
  latestVitals,
  vitalsHistory,
  allInvestigations,
  invByName,
  prescriptions,
  loadingVisits,
  loadingRx,
  setShowVisitForm,
  setSelectedVisit,
  setSelectedRx,
  setEditRx,
  setPadPrescription,
  setShowPadPreview,
  loadSavedPads,
  savedPads,
  openRxForm,
  downloadVisitHistoryPDF,
  downloadSingleVisitPDF,
  downloadPrescriptionsPDF,
  downloadSinglePrescriptionPDF,
  age
}) {
  var _a;
  const permissions = getPermissionsForRole(viewerRole ?? "doctor");
  const registerNo = patient.registerNumber;
  const linkedAccount = registerNo ? loadPatientRegistry().find(
    (p) => {
      var _a2;
      return ((_a2 = p.registerNumber) == null ? void 0 : _a2.toLowerCase()) === registerNo.toLowerCase();
    }
  ) : void 0;
  const [complaints, setComplaints] = reactExports.useState(
    () => loadComplaints(String(patientId))
  );
  const [newComplaintText, setNewComplaintText] = reactExports.useState("");
  const [showReferralModal, setShowReferralModal] = reactExports.useState(false);
  const [adviceEntries, setAdviceEntries] = reactExports.useState(
    () => loadAdviceEntries(String(patientId))
  );
  const [newAdviceText, setNewAdviceText] = reactExports.useState("");
  const [newAdviceDate, setNewAdviceDate] = reactExports.useState(
    format(/* @__PURE__ */ new Date(), "yyyy-MM-dd")
  );
  const [submissions, setSubmissions] = reactExports.useState(
    () => loadSubmissions()
  );
  const patientSubmissions = reactExports.useMemo(
    () => submissions.filter((s) => s.patientId === String(patientId)),
    [submissions, patientId]
  );
  const pendingCount = patientSubmissions.filter(
    (s) => s.status === "pending"
  ).length;
  function approveSubmission(id) {
    const all = loadSubmissions();
    const idx = all.findIndex((s) => s.id === id);
    if (idx >= 0) {
      all[idx] = { ...all[idx], status: "approved" };
      saveSubmissions(all);
      setSubmissions(loadSubmissions());
      ue.success("Submission approved");
    }
  }
  function rejectSubmission(id) {
    const all = loadSubmissions();
    const idx = all.findIndex((s) => s.id === id);
    if (idx >= 0) {
      all[idx] = { ...all[idx], status: "rejected" };
      saveSubmissions(all);
      setSubmissions(loadSubmissions());
      ue.success("Submission rejected");
    }
  }
  const REMINDERS_KEY = "medicare_drug_reminders";
  const [reminders, setReminders] = reactExports.useState(() => {
    try {
      const all = JSON.parse(
        localStorage.getItem(REMINDERS_KEY) || "[]"
      );
      return all.filter((r) => r.patientId === patientId.toString());
    } catch {
      return [];
    }
  });
  const saveReminders = (updated) => {
    setReminders(updated);
    const all = (() => {
      try {
        return JSON.parse(localStorage.getItem(REMINDERS_KEY) || "[]");
      } catch {
        return [];
      }
    })();
    const others = all.filter((r) => r.patientId !== patientId.toString());
    localStorage.setItem(
      REMINDERS_KEY,
      JSON.stringify([...others, ...updated])
    );
  };
  const prescriptionDrugChips = reactExports.useMemo(() => {
    const drugs = [];
    for (const rx of prescriptions) {
      for (const m of rx.medications || []) {
        const name = [m.drugForm || m.form, m.drugName || m.name, m.dose].filter(Boolean).join(" ").trim();
        if (name && !drugs.includes(name)) drugs.push(name);
      }
    }
    return drugs.slice(0, 20);
  }, [prescriptions]);
  const [invSearch, setInvSearch] = reactExports.useState("");
  const filteredInvRows = reactExports.useMemo(() => {
    if (!invSearch) return allInvestigations.slice(0, 50);
    return allInvestigations.filter(
      (r) => r.name.toLowerCase().includes(invSearch.toLowerCase())
    );
  }, [allInvestigations, invSearch]);
  const [pregnancyData, setPregnancyData] = reactExports.useState(() => {
    try {
      const raw = localStorage.getItem(`pregnancy_${patientId}`);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });
  const [showPregnancyForm, setShowPregnancyForm] = reactExports.useState(false);
  const [lmpInput, setLmpInput] = reactExports.useState("");
  const [gravidaInput, setGravidaInput] = reactExports.useState("");
  const [paraInput, setParaInput] = reactExports.useState("");
  const savePregnancyData = () => {
    if (!lmpInput) return;
    const data = {
      lmp: lmpInput,
      gravida: gravidaInput,
      para: paraInput,
      active: true
    };
    localStorage.setItem(`pregnancy_${patientId}`, JSON.stringify(data));
    setPregnancyData(data);
    setShowPregnancyForm(false);
  };
  const clearPregnancyData = () => {
    localStorage.removeItem(`pregnancy_${patientId}`);
    setPregnancyData(null);
  };
  const calcPregnancy = (lmp) => {
    const lmpDate = new Date(lmp);
    const diffDays = Math.floor(
      (Date.now() - lmpDate.getTime()) / (1e3 * 60 * 60 * 24)
    );
    const weeks = Math.floor(diffDays / 7);
    const months = (weeks / 4.33).toFixed(1);
    const edd = new Date(lmpDate.getTime() + 280 * 24 * 60 * 60 * 1e3);
    return {
      weeks,
      months,
      edd: edd.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      })
    };
  };
  const [submitTab, setSubmitTab] = reactExports.useState("complaint");
  const [complaint, setComplaint] = reactExports.useState("");
  const [vitalFields, setVitalFields] = reactExports.useState({
    systolic: "",
    diastolic: "",
    pulse: "",
    temp: "",
    spo2: "",
    weight: "",
    height: ""
  });
  const [invFields, setInvFields] = reactExports.useState({
    name: "",
    date: "",
    result: "",
    unit: ""
  });
  const [showSubmitPanel, setShowSubmitPanel] = reactExports.useState(false);
  function handleSubmitData() {
    let type = "complaint";
    let data = {};
    if (submitTab === "complaint") {
      if (!complaint.trim()) {
        ue.error("Please describe your symptoms");
        return;
      }
      type = "complaint";
      data = { complaint };
    } else if (submitTab === "vitals") {
      type = "vitals";
      data = { ...vitalFields };
    } else {
      if (!invFields.name || !invFields.result) {
        ue.error("Enter investigation name and result");
        return;
      }
      type = "investigation";
      data = { ...invFields };
    }
    const sub = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2),
      patientId: String(patientId),
      type,
      data,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      status: "pending"
    };
    const all = loadSubmissions();
    all.push(sub);
    saveSubmissions(all);
    setSubmissions(loadSubmissions());
    if (type === "vitals") {
      ue.success(
        "✓ Vitals submitted — your doctor will review this shortly",
        {
          duration: 5e3
        }
      );
    } else if (type === "complaint") {
      ue.success("✓ Submitted — your doctor will review this", {
        duration: 5e3
      });
    } else if (type === "investigation") {
      ue.success(
        "📋 Submitted for approval — your doctor will review before it appears in your record",
        { duration: 6e3 }
      );
    } else {
      ue.success("Submitted! Awaiting doctor approval.");
    }
    setShowSubmitPanel(false);
    setComplaint("");
    setVitalFields({
      systolic: "",
      diastolic: "",
      pulse: "",
      temp: "",
      spo2: "",
      weight: "",
      height: ""
    });
    setInvFields({ name: "", date: "", result: "", unit: "" });
  }
  const bmi = (() => {
    const wt = (latestVitals == null ? void 0 : latestVitals.weight) ? Number.parseFloat(latestVitals.weight) : patient.weight;
    const ht = (latestVitals == null ? void 0 : latestVitals.height) ? Number.parseFloat(latestVitals.height) : patient.height;
    if (!wt || !ht) return null;
    return Math.round(wt / (ht / 100 * (ht / 100)) * 10) / 10;
  })();
  const bmiCat = bmi ? getBMICategory(bmi) : null;
  const isAdmittedPatient = (latestVisit == null ? void 0 : latestVisit.visitType) === "admitted" || (latestVisit == null ? void 0 : latestVisit.visitType) === "inpatient";
  const canViewDailyProgress = isAdmittedPatient && (viewerRole === "consultant_doctor" || viewerRole === "medical_officer" || viewerRole === "intern_doctor" || viewerRole === "nurse" || currentRole === "doctor" || currentRole === "admin");
  const [lang, setLang] = reactExports.useState(() => {
    try {
      return localStorage.getItem("patient_language") ?? "en";
    } catch {
      return "en";
    }
  });
  const toggleLang = () => {
    const next = lang === "en" ? "bn" : "en";
    setLang(next);
    try {
      localStorage.setItem("patient_language", next);
    } catch {
    }
  };
  const t = (en, bn) => lang === "bn" ? bn : en;
  const [waDropdownOpen, setWaDropdownOpen] = reactExports.useState(false);
  const [waModalType, setWaModalType] = reactExports.useState(null);
  const [waReportName, setWaReportName] = reactExports.useState("");
  const [waFollowUpDate, setWaFollowUpDate] = reactExports.useState("");
  const [waFollowUpTime, setWaFollowUpTime] = reactExports.useState("");
  const patientPhone = patient.phone || patient.mobile;
  const doctorName = "Dr. Arman Kabir";
  const clinicName = "Dr. Arman Kabir's Care";
  function openWaReportModal() {
    setWaReportName("");
    setWaDropdownOpen(false);
    setWaModalType("report_ready");
  }
  function openWaFollowUpModal() {
    setWaFollowUpDate("");
    setWaFollowUpTime("");
    setWaDropdownOpen(false);
    setWaModalType("follow_up");
  }
  function sendWaMessage() {
    if (!patientPhone) {
      ue.error("No phone number on record for this patient");
      setWaModalType(null);
      return;
    }
    let url = "";
    if (waModalType === "report_ready") {
      if (!waReportName.trim()) {
        ue.error("Enter a report name");
        return;
      }
      url = buildReportReadyMessage(
        patient,
        doctorName,
        clinicName,
        waReportName.trim()
      );
    } else if (waModalType === "follow_up") {
      if (!waFollowUpDate || !waFollowUpTime) {
        ue.error("Enter date and time");
        return;
      }
      const dateStr = new Date(waFollowUpDate).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      });
      url = buildFollowUpMessage(
        patient,
        doctorName,
        clinicName,
        dateStr,
        waFollowUpTime
      );
    }
    if (url) window.open(url, "_blank", "noopener,noreferrer");
    setWaModalType(null);
  }
  const { data: encounters = [] } = useGetEncountersByPatient(patientId);
  const { data: clinicalNotes = [] } = useGetClinicalNotesByPatient(patientId);
  const canApproveDischarge = viewerRole === "consultant_doctor" || currentRole === "admin";
  const TAB_CONFIG = [
    {
      value: "overview",
      label: t("🏠 Overview", "🏠 ওভারভিউ"),
      activeClass: "data-[state=active]:bg-blue-500"
    },
    {
      value: "vitals",
      label: t("❤️ Vitals", "❤️ ভাইটালস"),
      activeClass: "data-[state=active]:bg-red-500"
    },
    {
      value: "investigations",
      label: t("🧪 Investigations", "🧪 পরীক্ষা-নিরীক্ষা"),
      activeClass: "data-[state=active]:bg-teal-600"
    },
    {
      value: "history",
      label: t("📋 History", "📋 ইতিহাস"),
      activeClass: "data-[state=active]:bg-purple-500"
    },
    {
      value: "timeline",
      label: t("🕐 Timeline", "🕐 টাইমলাইন"),
      activeClass: "data-[state=active]:bg-slate-500"
    },
    {
      value: "prescriptions",
      label: t("💊 Prescriptions", "💊 প্রেসক্রিপশন"),
      activeClass: "data-[state=active]:bg-indigo-500"
    },
    {
      value: "appointments",
      label: t("📅 Appointments", "📅 অ্যাপয়েন্টমেন্ট"),
      activeClass: "data-[state=active]:bg-green-600"
    },
    {
      value: "pending",
      label: t("⏳ Pending", "⏳ অনুমোদন বাকি"),
      activeClass: "data-[state=active]:bg-amber-500",
      badge: pendingCount
    },
    {
      value: "complaints",
      label: t("📝 Complaints", "📝 অভিযোগ"),
      activeClass: "data-[state=active]:bg-pink-500",
      badge: currentRole === "doctor" || currentRole === "admin" ? complaints.filter((c) => c.status === "pending").length : 0
    },
    {
      value: "advice",
      label: t("💡 Advice", "💡 পরামর্শ"),
      activeClass: "data-[state=active]:bg-emerald-600"
    },
    {
      value: "chat",
      label: t("💬 Chat", "💬 চ্যাট"),
      activeClass: "data-[state=active]:bg-cyan-600"
    },
    {
      value: "account",
      label: t("⚙️ Account", "⚙️ অ্যাকাউন্ট"),
      activeClass: "data-[state=active]:bg-slate-600"
    },
    {
      value: "daily_progress",
      label: t("📋 Daily Progress", "📋 দৈনিক অগ্রগতি"),
      activeClass: "data-[state=active]:bg-indigo-700",
      hidden: !canViewDailyProgress
    },
    {
      value: "discharge",
      label: t("🏥 Discharge", "🏥 ছাড়পত্র"),
      activeClass: "data-[state=active]:bg-rose-700",
      hidden: !isAdmittedPatient
    },
    {
      value: "soap_notes",
      label: t("🗒 SOAP Notes", "🗒 সোপ নোটস"),
      activeClass: "data-[state=active]:bg-slate-700"
    },
    {
      value: "handover",
      label: t("🤝 Handover", "🤝 হ্যান্ডওভার"),
      activeClass: "data-[state=active]:bg-violet-600",
      hidden: currentRole === "patient" || viewerRole !== "nurse" && viewerRole !== "medical_officer" && viewerRole !== "consultant_doctor" && viewerRole !== "doctor" && currentRole !== "doctor" && currentRole !== "admin"
    },
    {
      value: "inv_payment",
      label: t("🧾 Inv. Payment", "🧾 তদন্ত বিল"),
      activeClass: "data-[state=active]:bg-purple-600",
      hidden: currentRole === "patient"
    },
    {
      value: "procedures",
      label: t("🔬 Procedures", "🔬 পদ্ধতি"),
      activeClass: "data-[state=active]:bg-teal-700",
      hidden: currentRole === "patient" && !patient.isAdmitted && patient.patientType !== "admitted"
    },
    {
      value: "referrals",
      label: t("📤 Referrals", "📤 রেফারেল"),
      activeClass: "data-[state=active]:bg-blue-700",
      hidden: currentRole !== "doctor" && currentRole !== "admin" && viewerRole !== "consultant_doctor" && viewerRole !== "medical_officer"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { defaultValue: "overview", className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:w-52 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end mb-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: toggleLang,
            className: "text-xs px-2.5 py-1 rounded-full border border-teal-300 text-teal-700 bg-teal-50 hover:bg-teal-100 font-semibold transition-colors",
            "data-ocid": "patient_dashboard.lang_toggle",
            title: lang === "en" ? "Switch to Bangla" : "Switch to English",
            children: lang === "en" ? "EN | বাং" : "বাং | EN"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { className: "flex flex-row lg:flex-col w-full h-auto p-1.5 gap-1 bg-gray-100 rounded-xl overflow-x-auto lg:overflow-x-visible", children: TAB_CONFIG.filter(
          (tab) => !tab.hidden
        ).map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: tab.value,
            className: `w-full justify-start text-left shrink-0 rounded-lg px-3 py-2.5 text-sm font-medium relative data-[state=active]:text-white data-[state=active]:shadow-md ${tab.activeClass}`,
            "data-ocid": "patient_dashboard.tab",
            children: [
              tab.label,
              tab.badge != null && tab.badge > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold", children: tab.badge })
            ]
          },
          tab.value
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "overview", className: "space-y-4", children: [
          (currentRole === "doctor" || currentRole === "admin" || viewerRole === "consultant_doctor" || viewerRole === "medical_officer" || viewerRole === "intern_doctor" || viewerRole === "nurse") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border shadow-sm p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-sm flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-red-500" }),
                "Red Flag Monitor"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full", children: "Auto-refresh every 5 min" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RedFlagMonitor,
              {
                patientId,
                latestVitals,
                allInvestigations,
                prescriptions,
                diagnoses: [
                  (latestVisit == null ? void 0 : latestVisit.diagnosis) ?? "",
                  ...patient.chronicConditions ?? []
                ].filter(Boolean)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-gray-200 shadow-sm p-5", children: [
            currentRole === "patient" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "gap-1.5 border-teal-300 text-teal-700 hover:bg-teal-50",
                onClick: () => setShowSubmitPanel(!showSubmitPanel),
                "data-ocid": "patient_dashboard.overview.open_modal_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
                  "Update My Health"
                ]
              }
            ) }),
            (currentRole === "doctor" || currentRole === "admin") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 mb-3 relative flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                PatientSummaryCard,
                {
                  patientId,
                  patient,
                  visits: sortedVisits,
                  prescriptions
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "gap-1.5 border-blue-300 text-blue-700 hover:bg-blue-50",
                  onClick: () => setShowReferralModal(true),
                  "data-ocid": "patient_dashboard.overview.refer_patient_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5" }),
                    "Refer Patient"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    className: "gap-1.5 bg-green-600 hover:bg-green-700 text-white pr-2",
                    onClick: () => setWaDropdownOpen((o) => !o),
                    "data-ocid": "patient_dashboard.whatsapp_dropdown.button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "svg",
                        {
                          viewBox: "0 0 24 24",
                          className: "w-3.5 h-3.5 fill-white",
                          role: "img",
                          "aria-label": "WhatsApp",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
                        }
                      ),
                      "Send WhatsApp",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 ml-0.5" })
                    ]
                  }
                ),
                waDropdownOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 top-full mt-1 z-50 bg-white border border-green-200 rounded-xl shadow-lg py-1 min-w-[200px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "w-full text-left px-4 py-2.5 text-sm hover:bg-green-50 text-green-800 font-medium flex items-center gap-2",
                      onClick: openWaReportModal,
                      "data-ocid": "patient_dashboard.whatsapp.report_ready",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-4 h-4 text-green-600" }),
                        "Report Ready Notification"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "w-full text-left px-4 py-2.5 text-sm hover:bg-green-50 text-green-800 font-medium flex items-center gap-2",
                      onClick: openWaFollowUpModal,
                      "data-ocid": "patient_dashboard.whatsapp.follow_up",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-green-600" }),
                        "Follow-up Reminder"
                      ]
                    }
                  )
                ] })
              ] })
            ] }),
            waModalType === "report_ready" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 bg-green-50 border border-green-200 rounded-xl p-4 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-green-800 flex items-center gap-2 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-4 h-4" }),
                " Send Report Ready Notification"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-green-600", children: [
                "Patient:",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: patient.fullName }),
                " ",
                "· ",
                patientPhone || "No phone"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "wa-report-name",
                    className: "text-xs font-medium text-gray-600",
                    children: "Report Name *"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "wa-report-name",
                    type: "text",
                    value: waReportName,
                    onChange: (e) => setWaReportName(e.target.value),
                    placeholder: "e.g. CBC, S. Creatinine, Chest X-Ray",
                    className: "w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 text-sm",
                    "data-ocid": "patient_dashboard.whatsapp.report_name.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    onClick: sendWaMessage,
                    className: "bg-green-600 hover:bg-green-700 text-white gap-1.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5" }),
                      " Open WhatsApp"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    onClick: () => setWaModalType(null),
                    children: "Cancel"
                  }
                )
              ] })
            ] }),
            waModalType === "follow_up" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 bg-green-50 border border-green-200 rounded-xl p-4 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-green-800 flex items-center gap-2 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
                " Send Follow-up Reminder"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-green-600", children: [
                "Patient:",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: patient.fullName }),
                " ",
                "· ",
                patientPhone || "No phone"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "wa-followup-date",
                      className: "text-xs font-medium text-gray-600",
                      children: "Appointment Date *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "wa-followup-date",
                      type: "date",
                      value: waFollowUpDate,
                      onChange: (e) => setWaFollowUpDate(e.target.value),
                      className: "w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 text-sm",
                      "data-ocid": "patient_dashboard.whatsapp.followup_date.input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "wa-followup-time",
                      className: "text-xs font-medium text-gray-600",
                      children: "Appointment Time *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "wa-followup-time",
                      type: "time",
                      value: waFollowUpTime,
                      onChange: (e) => setWaFollowUpTime(e.target.value),
                      className: "w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 text-sm",
                      "data-ocid": "patient_dashboard.whatsapp.followup_time.input"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    onClick: sendWaMessage,
                    className: "bg-green-600 hover:bg-green-700 text-white gap-1.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5" }),
                      " Open WhatsApp"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    onClick: () => setWaModalType(null),
                    children: "Cancel"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-[220px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-gray-800 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-teal-600" }),
                  " Patient Summary"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2.5 text-sm", children: [
                  [
                    "Sex",
                    patient.gender ? patient.gender === "male" ? "Male" : patient.gender === "female" ? "Female" : "Other" : "N/A"
                  ],
                  ["Age", age ? `${age} years` : "N/A"],
                  ["Blood Group", patient.bloodGroup || "N/A"],
                  [
                    "Status",
                    patient.status === "Admitted" || patient.isAdmitted || patient.patientType === "admitted" || patient.patientType === "indoor" ? "🏥 Admitted" : latestVisit ? "Under Treatment" : "Active"
                  ],
                  [
                    "Last Visit",
                    latestVisit ? formatTime$1(latestVisit.visitDate) : "No visits"
                  ],
                  ["Register No.", registerNo || "N/A"],
                  ...(patient.status === "Admitted" || patient.isAdmitted || patient.patientType === "admitted" || patient.patientType === "indoor") && patient.ward ? [
                    [
                      "Ward / Bed",
                      `${patient.ward}${patient.bedNumber ? `, Bed ${patient.bedNumber}` : ""}`
                    ]
                  ] : []
                ].map(([label, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "bg-gray-50 rounded-lg p-2.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mb-0.5", children: label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-800 text-sm", children: value })
                    ]
                  },
                  label
                )) })
              ] }),
              latestVisit && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-[200px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-gray-800 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-blue-600" }),
                  " Latest Visit"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 rounded-xl p-3 text-sm space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-blue-500", children: formatTime$1(latestVisit.visitDate) }),
                  latestVisit.diagnosis && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-blue-800", children: latestVisit.diagnosis }),
                  latestVisit.chiefComplaint && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-700 text-xs", children: latestVisit.chiefComplaint }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-xs border-0 bg-amber-100 text-amber-700", children: "Under Treatment" })
                ] })
              ] })
            ] }),
            bmi && bmiCat && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-gray-100 flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "BMI" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-gray-800", children: [
                  bmi,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-gray-500", children: "kg/m²" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `px-3 py-1.5 rounded-full text-sm font-semibold ${bmiCat.color}`,
                  children: bmiCat.label
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-blue-200 shadow-sm overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-500 to-blue-700 px-5 py-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-white" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-white text-sm", children: "Latest Vitals" }),
              latestVisit && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-blue-200 ml-auto", children: formatTime$1(latestVisit.visitDate) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              VitalsBar,
              {
                vitals: latestVitals,
                weight: patient.weight,
                height: patient.height
              }
            ) })
          ] }),
          (() => {
            const email = getDoctorEmail$1();
            const risk = loadFamilyHistoryRisk(email, patientId.toString());
            if (!risk) return null;
            const active = [];
            if (risk.diabetes) active.push("Diabetes");
            if (risk.hypertension) active.push("Hypertension");
            if (risk.ihd) active.push("IHD");
            if (risk.cancer) active.push("Cancer");
            if (risk.stroke) active.push("Stroke");
            if (active.length === 0) return null;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl overflow-hidden shadow-sm",
                "data-ocid": "patient_dashboard.family_risk_section",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-orange-500 to-red-500 px-5 py-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-sm", children: "🧬" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-white text-sm", children: "Family History Risk" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 border border-orange-200 border-t-0 px-5 py-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: active.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "inline-flex items-center gap-1 bg-orange-100 text-orange-900 border border-orange-300 rounded-full px-2.5 py-1 text-xs font-semibold",
                        children: [
                          "🔴 ",
                          r
                        ]
                      },
                      r
                    )) }),
                    risk.additionalNotes && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-orange-700 mt-2 italic", children: risk.additionalNotes })
                  ] })
                ]
              }
            );
          })(),
          patient.gender === "female" && (currentRole === "doctor" || currentRole === "admin") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-pink-200 shadow-sm p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-gray-800 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { className: "w-4 h-4 text-pink-500" }),
                " Pregnancy Status"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                (pregnancyData == null ? void 0 : pregnancyData.active) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 text-xs border-red-300 text-red-600",
                    onClick: clearPregnancyData,
                    children: "Clear"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 text-xs border-pink-300 text-pink-600",
                    onClick: () => setShowPregnancyForm(!showPregnancyForm),
                    children: (pregnancyData == null ? void 0 : pregnancyData.active) ? "Update" : "Set Pregnancy"
                  }
                )
              ] })
            ] }),
            showPregnancyForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-pink-50 rounded-lg p-3 mb-3 space-y-2 border border-pink-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [
                {
                  id: "preg-lmp",
                  label: "LMP Date",
                  type: "date",
                  value: lmpInput,
                  onChange: setLmpInput
                },
                {
                  id: "preg-gravida",
                  label: "Gravida",
                  type: "number",
                  value: gravidaInput,
                  onChange: setGravidaInput
                },
                {
                  id: "preg-para",
                  label: "Para",
                  type: "number",
                  value: paraInput,
                  onChange: setParaInput
                }
              ].map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: field.id,
                    className: "text-xs text-gray-500 mb-1 block",
                    children: field.label
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: field.id,
                    type: field.type,
                    min: "0",
                    value: field.value,
                    onChange: (e) => field.onChange(e.target.value),
                    className: "w-full border border-gray-200 rounded px-2 py-1.5 text-sm",
                    "data-ocid": "patient_dashboard.pregnancy.input"
                  }
                )
              ] }, field.id)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  onClick: savePregnancyData,
                  className: "bg-pink-600 hover:bg-pink-700 text-white",
                  "data-ocid": "patient_dashboard.pregnancy.save_button",
                  children: "Save"
                }
              )
            ] }),
            (pregnancyData == null ? void 0 : pregnancyData.active) && pregnancyData.lmp ? (() => {
              const info = calcPregnancy(pregnancyData.lmp);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-pink-50 rounded-lg p-3 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-pink-600", children: info.weeks }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Weeks" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-rose-50 rounded-lg p-3 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-rose-600", children: info.months }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Months" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 rounded-lg p-3 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-purple-600", children: info.edd }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "EDD" })
                  ] })
                ] }),
                pregnancyData.gravida && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500", children: [
                  "G",
                  pregnancyData.gravida,
                  "P",
                  pregnancyData.para || 0
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-gray-600 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(HeartPulse, { className: "w-3.5 h-3.5 text-pink-500" }),
                    " ",
                    "Pregnancy Advice"
                  ] }),
                  [
                    "Take folic acid 400–800 mcg daily",
                    "Prenatal vitamins as prescribed",
                    "Avoid alcohol, tobacco, raw fish",
                    `Next scan at ${info.weeks < 20 ? "20" : "32"} weeks`,
                    "Monitor BP and blood sugar regularly",
                    "Emergency: severe headache, blurred vision, or bleeding → visit immediately"
                  ].map((adv) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-xs text-gray-600 flex items-start gap-1.5 bg-pink-50/60 rounded px-2 py-1",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pink-400 mt-0.5", children: "•" }),
                        adv
                      ]
                    },
                    adv
                  ))
                ] })
              ] });
            })() : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm text-gray-400 text-center py-2",
                "data-ocid": "patient_dashboard.pregnancy.empty_state",
                children: "No active pregnancy recorded"
              }
            )
          ] }),
          currentRole === "patient" && showSubmitPanel && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-teal-200 shadow-sm p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-teal-800 mb-3", children: "Submit Health Data" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-4", children: ["complaint", "vitals", "investigation"].map((t2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setSubmitTab(t2),
                className: `px-3 py-1.5 rounded-lg text-sm font-medium capitalize transition-colors ${submitTab === t2 ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                children: t2
              },
              t2
            )) }),
            submitTab === "complaint" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                value: complaint,
                onChange: (e) => setComplaint(e.target.value),
                placeholder: "Describe your symptoms...",
                rows: 3,
                "data-ocid": "patient_dashboard.submit.textarea"
              }
            ),
            submitTab === "vitals" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: [
              { key: "systolic", label: "Systolic BP (mmHg)" },
              { key: "diastolic", label: "Diastolic BP (mmHg)" },
              { key: "pulse", label: "Pulse (beats/min)" },
              { key: "temp", label: "Temperature (°F)" },
              { key: "spo2", label: "SpO₂ (%)" },
              { key: "weight", label: "Weight (kg)" }
            ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: f.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: vitalFields[f.key],
                  onChange: (e) => setVitalFields((prev) => ({
                    ...prev,
                    [f.key]: e.target.value
                  })),
                  placeholder: "Value",
                  type: "number",
                  className: "mt-1",
                  "data-ocid": "patient_dashboard.submit.input"
                }
              )
            ] }, f.key)) }),
            submitTab === "investigation" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: [
              { key: "name", label: "Test Name" },
              { key: "result", label: "Result" },
              { key: "unit", label: "Unit" },
              { key: "date", label: "Date" }
            ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: f.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: invFields[f.key],
                  onChange: (e) => setInvFields((prev) => ({
                    ...prev,
                    [f.key]: e.target.value
                  })),
                  type: f.key === "date" ? "date" : "text",
                  className: "mt-1",
                  "data-ocid": "patient_dashboard.submit.input"
                }
              )
            ] }, f.key)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "mt-3 bg-teal-600 hover:bg-teal-700 text-white",
                onClick: handleSubmitData,
                "data-ocid": "patient_dashboard.submit.submit_button",
                children: "Submit for Doctor Review"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "vitals", className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-blue-200 shadow-sm overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-500 to-blue-700 px-5 py-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4 h-4 text-white" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-white text-sm", children: "Vital Signs Summary" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              VitalsBar,
              {
                vitals: latestVitals,
                weight: patient.weight,
                height: patient.height,
                showAlertBanner: true
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              VitalGraph,
              {
                title: "Blood Pressure",
                data: vitalsHistory,
                dataKey: ["BP", "Diastolic"],
                unit: "mmHg",
                color: ["#DC2626", "#EF4444"],
                bgClass: "bg-rose-50",
                borderClass: "border-rose-200",
                icon: Heart,
                outOfRangeCheck: (key, val) => {
                  if (key === "BP") return val < 90 || val > 140;
                  if (key === "Diastolic") return val < 60 || val > 90;
                  return false;
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              VitalGraph,
              {
                title: "Pulse Rate",
                data: vitalsHistory,
                dataKey: "Pulse",
                unit: "beats/min",
                color: "#EA580C",
                bgClass: "bg-orange-50",
                borderClass: "border-orange-200",
                icon: Activity,
                outOfRangeCheck: (_key, val) => val < 60 || val > 100
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              VitalGraph,
              {
                title: "SpO₂",
                data: vitalsHistory,
                dataKey: "SpO2",
                unit: "%",
                color: "#2563EB",
                bgClass: "bg-blue-50",
                borderClass: "border-blue-200",
                icon: Wind,
                outOfRangeCheck: (_key, val) => val < 94
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              VitalGraph,
              {
                title: "Temperature",
                data: vitalsHistory,
                dataKey: "Temp",
                unit: "°F",
                color: "#CA8A04",
                bgClass: "bg-yellow-50",
                borderClass: "border-yellow-200",
                icon: Thermometer,
                outOfRangeCheck: (_key, val) => val < 36 || val > 37.5
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              VitalGraph,
              {
                title: "Blood Glucose (RBS)",
                data: vitalsHistory,
                dataKey: "RBS",
                unit: "mmol/L",
                color: "#9333EA",
                bgClass: "bg-purple-50",
                borderClass: "border-purple-200",
                icon: Activity,
                outOfRangeCheck: (_key, val) => val < 4 || val > 11
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              VitalGraph,
              {
                title: "Weight",
                data: vitalsHistory,
                dataKey: "Weight",
                unit: "kg",
                color: "#16A34A",
                bgClass: "bg-green-50",
                borderClass: "border-green-200",
                icon: User
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              VitalGraph,
              {
                title: "Height",
                data: vitalsHistory,
                dataKey: "Height",
                unit: "cm",
                color: "#0891B2",
                bgClass: "bg-cyan-50",
                borderClass: "border-cyan-200",
                icon: User
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              VitalGraph,
              {
                title: "Respiratory Rate",
                data: vitalsHistory,
                dataKey: "RespRate",
                unit: "breaths/min",
                color: "#0891b2",
                bgClass: "bg-cyan-50",
                borderClass: "border-cyan-200",
                icon: Wind
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              VitalGraph,
              {
                title: "BMI Trend",
                data: vitalsHistory,
                dataKey: "BMI",
                unit: "kg/m²",
                color: "#6366f1",
                bgClass: "bg-indigo-50",
                borderClass: "border-indigo-200",
                icon: Activity
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "investigations", className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl border border-teal-200 shadow-sm p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            InvestigationTracker,
            {
              patientId: String(patientId),
              patientPhone: patient.phone,
              viewerRole,
              currentRole
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-gray-200 shadow-sm p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-gray-800 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-4 h-4 text-teal-600" }),
                " ",
                "Investigation Reports"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-52", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-2 w-4 h-4 text-gray-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "Search test...",
                    value: invSearch,
                    onChange: (e) => setInvSearch(e.target.value),
                    className: "pl-8 h-8 text-sm",
                    "data-ocid": "patient_dashboard.search_input"
                  }
                )
              ] })
            ] }),
            filteredInvRows.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-center py-8",
                "data-ocid": "patient_dashboard.investigations.empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-8 h-8 text-gray-300 mx-auto mb-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "No investigation reports found" })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-gray-100", children: [
                "Investigation",
                "Result",
                "Unit",
                "Date",
                "Interpretation"
              ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "th",
                {
                  className: "text-left py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",
                  children: h
                },
                h
              )) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filteredInvRows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: "border-b border-gray-50 hover:bg-gray-50",
                  "data-ocid": `patient_dashboard.investigations.row.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 font-medium text-gray-800", children: row.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-gray-700", children: row.result }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-gray-500", children: row.unit || "—" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-gray-500", children: row.date || "—" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-gray-500 max-w-[200px] truncate", children: row.interpretation || "—" })
                  ]
                },
                `inv-${row.name}-${row.date}-${i}`
              )) })
            ] }) })
          ] }),
          Object.keys(invByName).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: Object.entries(invByName).slice(0, 12).map(([name, { data, unit }]) => {
            const trackedInvs = loadTrackedInvestigations(
              String(patientId)
            );
            const latestTracked = trackedInvs.filter((t2) => t2.name === name && t2.result).sort(
              (a, b) => new Date(b.result.recordedAt).getTime() - new Date(a.result.recordedAt).getTime()
            )[0];
            const allReadings = trackedInvs.filter((t2) => t2.name === name && t2.result).map((t2) => ({
              value: t2.result.value,
              recordedAt: t2.result.recordedAt
            }));
            const latestRow = allInvestigations.filter(
              (r) => r.name === name && r.result && !Number.isNaN(Number.parseFloat(r.result))
            ).sort((a, b) => b.date.localeCompare(a.date))[0];
            let aiText = "";
            if (latestTracked == null ? void 0 : latestTracked.result) {
              aiText = generateAIInterpretation(
                name,
                latestTracked.result,
                allReadings
              );
            } else if (latestRow) {
              aiText = generateAIInterpretation(
                name,
                {
                  value: latestRow.result,
                  unit: latestRow.unit ?? unit,
                  referenceRange: "",
                  interpretation: latestRow.interpretation ?? "Normal",
                  recordedAt: new Date(latestRow.date).toISOString()
                },
                []
              );
            }
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-white rounded-xl border border-teal-200 shadow-sm p-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-teal-800 mb-1 text-sm", children: [
                    name,
                    " Trend"
                  ] }),
                  unit && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs mb-2", children: [
                    "Unit:",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-gray-700", children: unit })
                  ] }),
                  data.length >= 2 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 180, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CartesianGrid,
                      {
                        strokeDasharray: "3 3",
                        stroke: "#f0f0f0"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "date", tick: { fontSize: 10 } }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      YAxis,
                      {
                        tick: { fontSize: 10 },
                        label: unit ? {
                          value: unit,
                          angle: -90,
                          position: "insideLeft",
                          style: {
                            fontWeight: "bold",
                            fontSize: 10
                          }
                        } : void 0
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Tooltip,
                      {
                        formatter: (v) => [
                          `${v} ${unit}`,
                          name
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Line,
                      {
                        type: "monotone",
                        dataKey: "value",
                        stroke: "#0d9488",
                        strokeWidth: 2,
                        dot: { r: 4 },
                        name
                      }
                    )
                  ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-6 text-gray-400 text-xs", children: "Need 2+ data points for chart" }),
                  aiText && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: `mt-3 rounded-lg p-3 border text-xs ${aiText.startsWith("⚠️") ? "bg-amber-50 border-amber-200 text-amber-800" : "bg-teal-50 border-teal-200 text-teal-800"}`,
                      "data-ocid": "patient_dashboard.inv.ai_interpretation",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-0.5", children: "🤖 AI Interpretation" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: aiText }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 opacity-60 italic", children: "AI Suggested — Review with Doctor" })
                      ]
                    }
                  )
                ]
              },
              name
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "history", className: "space-y-4", children: [
          isAdmittedPatient && currentRole !== "patient" && (() => {
            const admHxRecords = loadAdmissionHistory(String(patientId));
            if (admHxRecords.length === 0) return null;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              AdmissionHistoryInlineSection,
              {
                records: admHxRecords,
                viewerRole: viewerRole ?? "doctor",
                patient
              }
            );
          })(),
          isAdmittedPatient && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-blue-200 shadow-sm p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-gray-800 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4 text-blue-600" }),
              " Admissions"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AdmissionTimeline,
              {
                patientId: String(patientId),
                doctorEmail: (() => {
                  var _a2;
                  try {
                    const session = localStorage.getItem(
                      "medicare_current_doctor"
                    );
                    if (!session) return "default";
                    const registry = JSON.parse(
                      localStorage.getItem("medicare_doctors_registry") || "[]"
                    );
                    return ((_a2 = registry.find((d) => d.id === session)) == null ? void 0 : _a2.email) ?? "default";
                  } catch {
                    return "default";
                  }
                })()
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-gray-200 shadow-sm p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-gray-800 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-purple-600" }),
                " Visit History",
                isAdmittedPatient && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal text-gray-400 ml-1", children: "(Outpatient)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "text-purple-700 border-purple-300 gap-1.5",
                    onClick: downloadVisitHistoryPDF,
                    "data-ocid": "patient_dashboard.visits.secondary_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
                      " Download PDF"
                    ]
                  }
                ),
                (currentRole === "doctor" || currentRole === "admin") && permissions.canEditClinical && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    className: "bg-purple-600 hover:bg-purple-700 text-white gap-1.5",
                    onClick: () => setShowVisitForm(true),
                    "data-ocid": "patient_dashboard.visits.open_modal_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
                      " New Visit"
                    ]
                  }
                )
              ] })
            ] }),
            loadingVisits ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "space-y-2",
                "data-ocid": "patient_dashboard.visits.loading_state",
                children: [1, 2, 3].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 rounded-lg" }, k))
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              HistoryTabContent,
              {
                sortedVisits,
                currentRole,
                setSelectedVisit,
                downloadSingleVisitPDF,
                openRxForm
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            HistoryFeaturesPanel,
            {
              visits: sortedVisits,
              patient,
              isDoctor: currentRole === "doctor" || currentRole === "admin"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "timeline", className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PatientTimeline, { patientId, patient }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "prescriptions", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-gray-200 shadow-sm p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-gray-800 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-indigo-600" }),
                " ",
                "Prescriptions (",
                prescriptions.length,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "text-indigo-700 border-indigo-300 gap-1.5",
                    onClick: downloadPrescriptionsPDF,
                    "data-ocid": "patient_dashboard.prescriptions.secondary_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
                      " Download PDF"
                    ]
                  }
                ),
                (currentRole === "doctor" || currentRole === "admin") && permissions.canPrescribe && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    className: "bg-indigo-600 hover:bg-indigo-700 text-white gap-1.5",
                    onClick: () => openRxForm(),
                    "data-ocid": "patient_dashboard.prescriptions.open_modal_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
                      " New Rx"
                    ]
                  }
                )
              ] })
            ] }),
            loadingRx ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "space-y-3",
                "data-ocid": "patient_dashboard.prescriptions.loading_state",
                children: [1, 2, 3].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 rounded-xl" }, k))
              }
            ) : prescriptions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-center py-8",
                "data-ocid": "patient_dashboard.prescriptions.empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-8 h-8 text-gray-300 mx-auto mb-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "No prescriptions yet" })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CurrentMedicationList, { prescriptions }),
              [...prescriptions].sort(
                (a, b) => Number(b.prescriptionDate - a.prescriptionDate)
              ).map((rx, idx, arr) => {
                const prev = arr[idx + 1];
                const rxExt = rx;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  idx === arr.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(FirstPrescriptionLabel, {}) : prev && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    PrescriptionDiffRow,
                    {
                      curr: rx,
                      prev,
                      index: idx
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: `bg-card border rounded-xl p-3 hover:shadow-sm transition-all ${rx.prescriptionType === "emergency" ? "border-l-4 border-l-red-500 border-red-200" : "border-border"}`,
                      "data-ocid": `patient_dashboard.prescriptions.item.${idx + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5 text-indigo-600" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                              rx.prescriptionType === "emergency" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-0.5 bg-red-100 text-red-700 border border-red-200 rounded-full px-2 py-0.5 text-[10px] font-bold leading-none", children: "🚨 EMERGENCY" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium truncate", children: rx.diagnosis ?? "Prescription" })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5 flex items-center gap-1", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                              formatTime$1(rx.prescriptionDate),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2", children: [
                                rx.medications.length,
                                " med",
                                rx.medications.length !== 1 ? "s" : ""
                              ] })
                            ] })
                          ] }),
                          (currentRole === "doctor" || currentRole === "admin") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0 flex-wrap justify-end", children: [
                            permissions.canEditClinical && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              Button,
                              {
                                size: "sm",
                                variant: "outline",
                                className: "h-7 px-2 text-xs gap-1 border-amber-300 text-amber-700",
                                onClick: () => setEditRx(rx),
                                "data-ocid": `patient_dashboard.prescriptions.edit_button.${idx + 1}`,
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-3 h-3" }),
                                  "Edit"
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              Button,
                              {
                                size: "sm",
                                variant: "outline",
                                className: "h-7 px-2 text-xs gap-1 border-blue-300 text-blue-700",
                                onClick: () => setSelectedRx(rx),
                                "data-ocid": `patient_dashboard.prescriptions.secondary_button.${idx + 1}`,
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3 h-3" }),
                                  "View"
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              Button,
                              {
                                size: "sm",
                                variant: "outline",
                                className: "h-7 px-2 text-xs gap-1 border-green-300 text-green-700",
                                onClick: () => {
                                  setPadPrescription(rx);
                                  setShowPadPreview(true);
                                  loadSavedPads();
                                },
                                "data-ocid": `patient_dashboard.prescriptions.open_modal_button.${idx + 1}`,
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3 h-3" }),
                                  "Pad"
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              Button,
                              {
                                size: "sm",
                                variant: "outline",
                                className: "h-7 px-2 text-xs gap-1 border-purple-300 text-purple-700",
                                onClick: () => downloadSinglePrescriptionPDF(rx),
                                "data-ocid": `patient_dashboard.prescriptions.button.${idx + 1}`,
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3 h-3" }),
                                  "PDF"
                                ]
                              }
                            )
                          ] }),
                          (currentRole === "patient" || currentRole === "staff") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              Button,
                              {
                                size: "sm",
                                variant: "outline",
                                className: "h-7 px-2 text-xs gap-1 border-blue-300 text-blue-700",
                                onClick: () => setSelectedRx(rx),
                                "data-ocid": `patient_dashboard.prescriptions.secondary_button.${idx + 1}`,
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3 h-3" }),
                                  "View"
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              Button,
                              {
                                size: "sm",
                                variant: "outline",
                                className: "h-7 px-2 text-xs gap-1 border-purple-300 text-purple-700",
                                onClick: () => downloadSinglePrescriptionPDF(rx),
                                "data-ocid": `patient_dashboard.prescriptions.button.${idx + 1}`,
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3 h-3" }),
                                  "PDF"
                                ]
                              }
                            )
                          ] })
                        ] }),
                        (currentRole === "doctor" || currentRole === "admin") && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          ViewedByPatientBadge,
                          {
                            viewedAt: rxExt.viewedByPatientAt
                          }
                        )
                      ]
                    }
                  )
                ] }, rx.id.toString());
              })
            ] })
          ] }),
          savedPads.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-green-200 shadow-sm p-5 mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-gray-800 mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-4 h-4 text-green-600" }),
              " Saved Prescription Pads"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: savedPads.map((pad, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center justify-between bg-green-50 rounded-lg px-3 py-2 border border-green-100",
                "data-ocid": `patient_dashboard.prescriptions.item.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-green-800", children: String(pad.diagnosis || "Prescription Pad") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600", children: String(pad.date || "") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "gap-1 border-green-300 text-green-700 hover:bg-green-50 h-7 text-xs",
                      onClick: () => {
                        const win = window.open(
                          "",
                          "_blank",
                          "width=900,height=1100"
                        );
                        if (win) {
                          const meds = Array.isArray(pad.medications) ? pad.medications : [];
                          win.document.write(
                            `<!DOCTYPE html><html><head><title>Prescription Pad</title><style>body{font-family:Arial,sans-serif;padding:20px}</style></head><body><h2>Prescription — ${String(pad.patientName || "")}</h2><p>Date: ${String(pad.date || "")}</p><p>Diagnosis: ${String(pad.diagnosis || "N/A")}</p><h3>Medications:</h3><ul>${meds.map((m) => `<li><strong>${String(m.name || "")}</strong> — ${String(m.dose || "")} ${String(m.frequency || "")} ${String(m.duration || "")}</li>`).join("")}</ul></body></html>`
                          );
                          win.document.close();
                          win.print();
                        }
                      },
                      "data-ocid": `patient_dashboard.prescriptions.secondary_button.${idx + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3 h-3" }),
                        "Print"
                      ]
                    }
                  )
                ]
              },
              String(pad.id ?? `pad-${idx}`)
            )) })
          ] }),
          (currentRole === "doctor" || currentRole === "admin" || viewerRole === "medical_officer" || viewerRole === "consultant_doctor") && patient.isAdmitted && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            MissedDoseReport,
            {
              patientId: patientId.toString(),
              patientName: patient.fullName,
              admissionDate: patient.admittedOn || patient.admissionDate
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "appointments", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          AppointmentsTab,
          {
            patientId,
            currentRole,
            patientName: patient.fullName
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "pending", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-gray-200 shadow-sm p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-gray-800 mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 text-amber-600" }),
            " Pending Approvals",
            pendingCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-red-100 text-red-700 border-0 text-xs", children: [
              pendingCount,
              " pending"
            ] })
          ] }),
          patientSubmissions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center py-8",
              "data-ocid": "patient_dashboard.pending.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-8 h-8 text-gray-300 mx-auto mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "No patient submissions yet" })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-gray-100", children: [
              "Date / Time",
              "Type",
              "Submitted Data",
              "Status",
              "Actions"
            ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "th",
              {
                className: "text-left py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide",
                children: h
              },
              h
            )) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: patientSubmissions.map((sub, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-b border-gray-50",
                "data-ocid": `patient_dashboard.pending.item.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-xs text-gray-500 whitespace-nowrap", children: format(new Date(sub.timestamp), "MMM d, HH:mm") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: `text-xs border-0 ${sub.type === "vitals" ? "bg-rose-100 text-rose-700" : sub.type === "investigation" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"}`,
                      children: sub.type
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 max-w-[250px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: Object.entries(sub.data).filter(([, v]) => v).slice(0, 3).map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "text-xs bg-gray-100 rounded px-1.5 py-0.5",
                      children: [
                        k,
                        ": ",
                        v
                      ]
                    },
                    k
                  )) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: `text-xs border-0 ${sub.status === "pending" ? "bg-amber-100 text-amber-700" : sub.status === "approved" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`,
                      children: sub.status === "pending" ? "✓ Submitted — Pending Review" : sub.status === "approved" ? "Approved" : "Rejected"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3", children: sub.status === "pending" && (currentRole === "doctor" || currentRole === "admin") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "text-emerald-700 border-emerald-300 gap-1 h-7 px-2 text-xs",
                        onClick: () => approveSubmission(sub.id),
                        "data-ocid": "patient_dashboard.confirm_button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
                          "Approve"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "text-red-700 border-red-300 gap-1 h-7 px-2 text-xs",
                        onClick: () => rejectSubmission(sub.id),
                        "data-ocid": "patient_dashboard.cancel_button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3 h-3" }),
                          "Reject"
                        ]
                      }
                    )
                  ] }) })
                ]
              },
              sub.id
            )) })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "complaints", className: "space-y-4", children: [
          currentRole === "patient" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl border-2 border-pink-300 shadow-sm p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-pink-800 mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
              " Submit a Complaint"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-3", children: [
              "Fever",
              "Headache",
              "Chest Pain",
              "Cough",
              "Nausea",
              "Vomiting",
              "Dizziness",
              "Pain"
            ].map((chip) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setNewComplaintText(
                  (prev) => prev ? `${prev}, ${chip}` : chip
                ),
                className: "text-xs bg-pink-100 hover:bg-pink-200 border border-pink-300 text-pink-700 px-2.5 py-1 rounded-full font-medium transition-colors",
                children: chip
              },
              chip
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                placeholder: "Describe your symptoms or concerns...",
                value: newComplaintText,
                onChange: (e) => setNewComplaintText(e.target.value),
                rows: 3,
                className: "mb-3 border-pink-200",
                "data-ocid": "patient_dashboard.complaints.textarea"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: () => {
                  if (!newComplaintText.trim()) return;
                  const entry = {
                    id: Date.now().toString(36) + Math.random().toString(36).slice(2),
                    patientId: String(patientId),
                    text: newComplaintText.trim(),
                    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                    status: "pending"
                  };
                  const updated = [entry, ...complaints];
                  setComplaints(updated);
                  saveComplaints(String(patientId), updated);
                  setNewComplaintText("");
                  ue.success("Complaint submitted");
                },
                className: "bg-pink-600 hover:bg-pink-700 w-full",
                "data-ocid": "patient_dashboard.complaints.submit_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 mr-1" }),
                  " Submit Complaint"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-pink-100 shadow-sm p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-gray-800 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-pink-600" }),
              " Complaints Log",
              complaints.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-xs font-normal text-gray-400", children: [
                complaints.length,
                " entries"
              ] })
            ] }),
            complaints.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm text-gray-400 text-center py-4",
                "data-ocid": "patient_dashboard.complaints.empty_state",
                children: "No complaints submitted yet."
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: complaints.map((c, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "border border-gray-200 rounded-xl p-4 space-y-2",
                "data-ocid": `patient_dashboard.complaints.item.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-gray-800", children: c.text }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-1", children: format(
                        new Date(c.timestamp),
                        "MMM d, yyyy 'at' h:mm a"
                      ) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        className: c.status === "seen" ? "bg-green-100 text-green-700 border-0 shrink-0" : "bg-amber-100 text-amber-700 border-0 shrink-0",
                        children: c.status === "seen" ? "Seen" : "Pending"
                      }
                    )
                  ] }),
                  c.doctorNote && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 rounded-lg px-3 py-2 text-sm text-blue-800", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Doctor's note:" }),
                    " ",
                    c.doctorNote
                  ] }),
                  (currentRole === "doctor" || currentRole === "admin") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-gray-100 space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        placeholder: "Add a note for the patient (optional)...",
                        defaultValue: c.doctorNote || "",
                        onBlur: (e) => {
                          const note = e.target.value.trim();
                          if (note !== (c.doctorNote || "")) {
                            const updated = complaints.map(
                              (x) => x.id === c.id ? { ...x, doctorNote: note } : x
                            );
                            setComplaints(updated);
                            saveComplaints(String(patientId), updated);
                          }
                        },
                        className: "text-sm",
                        "data-ocid": "patient_dashboard.complaints.input"
                      }
                    ),
                    c.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "text-green-700 border-green-300 hover:bg-green-50",
                        onClick: () => {
                          const updated = complaints.map(
                            (x) => x.id === c.id ? { ...x, status: "seen" } : x
                          );
                          setComplaints(updated);
                          saveComplaints(String(patientId), updated);
                          ue.success("Marked as seen");
                        },
                        "data-ocid": "patient_dashboard.complaints.confirm_button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 mr-1" }),
                          " ",
                          "Mark as Seen"
                        ]
                      }
                    )
                  ] })
                ]
              },
              c.id
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "advice", className: "space-y-4", children: [
          (currentRole === "doctor" || currentRole === "admin") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-emerald-200 shadow-sm p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-emerald-800 mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "w-4 h-4" }),
              " Add Advice"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "date",
                    value: newAdviceDate,
                    onChange: (e) => setNewAdviceDate(e.target.value),
                    className: "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-300",
                    "data-ocid": "patient_dashboard.advice.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  placeholder: "Enter advice or instructions...",
                  value: newAdviceText,
                  onChange: (e) => setNewAdviceText(e.target.value),
                  rows: 3,
                  "data-ocid": "patient_dashboard.advice.textarea"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: () => {
                    if (!newAdviceText.trim()) return;
                    const entry = {
                      id: Date.now().toString(36) + Math.random().toString(36).slice(2),
                      patientId: String(patientId),
                      text: newAdviceText.trim(),
                      date: newAdviceDate || (/* @__PURE__ */ new Date()).toISOString(),
                      addedBy: currentRole,
                      source: "Doctor's Note"
                    };
                    const updated = [entry, ...adviceEntries];
                    setAdviceEntries(updated);
                    saveAdviceEntries(String(patientId), updated);
                    setNewAdviceText("");
                    ue.success("Advice added");
                  },
                  className: "bg-emerald-600 hover:bg-emerald-700 text-white",
                  "data-ocid": "patient_dashboard.advice.submit_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-1" }),
                    " Add Advice"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-emerald-100 shadow-sm p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-gray-800 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "w-4 h-4 text-emerald-600" }),
              " Advice & Instructions"
            ] }),
            adviceEntries.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm text-gray-400 text-center py-6",
                "data-ocid": "patient_dashboard.advice.empty_state",
                children: "No advice or instructions recorded yet."
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: adviceEntries.map((entry, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "border border-emerald-100 rounded-xl p-4 bg-emerald-50",
                "data-ocid": `patient_dashboard.advice.item.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-emerald-700 bg-emerald-200 px-2 py-0.5 rounded-full", children: entry.source }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: entry.date ? format(new Date(entry.date), "MMM d, yyyy") : "—" })
                    ] }),
                    (currentRole === "doctor" || currentRole === "admin") && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const updated = adviceEntries.filter(
                            (e) => e.id !== entry.id
                          );
                          setAdviceEntries(updated);
                          saveAdviceEntries(String(patientId), updated);
                        },
                        className: "text-red-400 hover:text-red-600",
                        "data-ocid": "patient_dashboard.advice.delete_button",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 whitespace-pre-line", children: entry.text })
                ]
              },
              entry.id
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "chat", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          PatientChat,
          {
            patientId,
            currentRole,
            currentUserName: currentRole === "patient" ? patient.fullName : "Doctor"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "account", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          AccountSettingsTab,
          {
            patientId,
            registerNo,
            currentRole,
            patientAccount,
            linkedAccount,
            reminders,
            prescriptionDrugChips,
            onSaveReminders: saveReminders
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "daily_progress", children: canViewDailyProgress ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          DailyProgressNote,
          {
            patientId: String(patientId),
            doctorEmail: (() => {
              var _a2;
              try {
                const session = localStorage.getItem(
                  "medicare_current_doctor"
                );
                if (!session) return "default";
                const registry = JSON.parse(
                  localStorage.getItem("medicare_doctors_registry") || "[]"
                );
                return ((_a2 = registry.find((d) => d.id === session)) == null ? void 0 : _a2.email) ?? "default";
              } catch {
                return "default";
              }
            })(),
            authorName: (() => {
              var _a2;
              try {
                const session = localStorage.getItem(
                  "medicare_current_doctor"
                );
                if (!session)
                  return currentRole === "patient" ? patient.fullName : "Unknown";
                const registry = JSON.parse(
                  localStorage.getItem("medicare_doctors_registry") || "[]"
                );
                return ((_a2 = registry.find((d) => d.id === session)) == null ? void 0 : _a2.name) ?? "Unknown";
              } catch {
                return "Unknown";
              }
            })(),
            viewerRole: viewerRole ?? "doctor",
            latestVitals,
            patientWeightKg: patient.weight,
            prescriptions,
            latestVisit
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 bg-white rounded-xl border border-indigo-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Daily Progress Note is only available for admitted patients." }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "soap_notes", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DailyProgress,
          {
            patientId,
            doctorEmail: (() => {
              try {
                const session = localStorage.getItem(
                  "medicare_current_doctor"
                );
                if (!session) return "default";
                const registry = JSON.parse(
                  localStorage.getItem("medicare_doctors_registry") || "[]"
                );
                const doc = registry.find((d) => d.id === session);
                return (doc == null ? void 0 : doc.email) ?? "default";
              } catch {
                return "default";
              }
            })(),
            currentRole,
            viewerRole: viewerRole ?? "doctor",
            authorName: (() => {
              try {
                const session = localStorage.getItem(
                  "medicare_current_doctor"
                );
                if (!session)
                  return currentRole === "patient" ? patient.fullName : "Unknown";
                const registry = JSON.parse(
                  localStorage.getItem("medicare_doctors_registry") || "[]"
                );
                const doc = registry.find((d) => d.id === session);
                return (doc == null ? void 0 : doc.name) ?? "Unknown";
              } catch {
                return "Unknown";
              }
            })(),
            prescriptions
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "discharge", children: isAdmittedPatient ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          DischargeSummaryTab,
          {
            patient,
            visits: sortedVisits,
            prescriptions,
            encounters,
            clinicalNotes,
            canApproveDischarge
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 bg-white rounded-xl border border-rose-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Discharge Summary is only available for admitted patients." }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "handover", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          HandoverSystem,
          {
            patientId: String(patientId),
            patientName: patient.fullName,
            bed: patient.bedNumber ?? "",
            ward: patient.ward ?? "",
            viewerRole: viewerRole ?? "doctor",
            authorName: (() => {
              var _a2;
              try {
                const session = localStorage.getItem(
                  "medicare_current_doctor"
                );
                if (!session)
                  return currentRole === "patient" ? patient.fullName : "Unknown";
                const registry = JSON.parse(
                  localStorage.getItem("medicare_doctors_registry") || "[]"
                );
                return ((_a2 = registry.find((d) => d.id === session)) == null ? void 0 : _a2.name) ?? "Unknown";
              } catch {
                return "Unknown";
              }
            })(),
            currentUser: {
              name: (() => {
                var _a2;
                try {
                  const session = localStorage.getItem(
                    "medicare_current_doctor"
                  );
                  if (!session)
                    return currentRole === "patient" ? patient.fullName : "Unknown";
                  const registry = JSON.parse(
                    localStorage.getItem("medicare_doctors_registry") || "[]"
                  );
                  return ((_a2 = registry.find((d) => d.id === session)) == null ? void 0 : _a2.name) ?? "Unknown";
                } catch {
                  return "Unknown";
                }
              })(),
              role: viewerRole ?? "doctor",
              email: (() => {
                var _a2;
                try {
                  const session = localStorage.getItem(
                    "medicare_current_doctor"
                  );
                  if (!session) return "";
                  const registry = JSON.parse(
                    localStorage.getItem("medicare_doctors_registry") || "[]"
                  );
                  return ((_a2 = registry.find((d) => d.id === session)) == null ? void 0 : _a2.email) ?? session;
                } catch {
                  return "";
                }
              })()
            },
            admissionDate: patient.admissionDate ?? "",
            bedNumber: patient.bedNumber ?? "",
            department: patient.department ?? "",
            primaryDiagnosis: ((_a = prescriptions.find((rx) => rx.diagnosis)) == null ? void 0 : _a.diagnosis) ?? "",
            secondaryDiagnoses: [],
            comorbidities: [],
            assignedConsultant: patient.assignedConsultantName ?? "",
            latestVitals,
            activeMedications: prescriptions.flatMap(
              (rx) => (rx.medications ?? []).map((m) => ({
                drugName: [m.drugForm || "", m.drugName || m.name || ""].filter(Boolean).join(" ").trim(),
                dose: m.dose ?? "",
                frequency: m.frequency ?? ""
              }))
            ).slice(0, 20),
            activeDiagnoses: prescriptions.map((rx) => rx.diagnosis).filter((d) => !!d).slice(0, 5),
            latestPlan: ""
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "inv_payment", className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border shadow-sm p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-700 text-base", children: "🧾" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: "Investigation Payment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Bill investigations, apply discount, generate receipt" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            InvestigationPayment,
            {
              patientId: String(patientId),
              patientName: patient.fullName,
              registerNumber: patient.registerNumber ?? "",
              phone: patient.phone ?? "",
              doctorName
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "procedures", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-xl border border-border shadow-sm p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProcedureLog, { patientId: String(patientId), patient }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "referrals", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-xl border border-border shadow-sm p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReferralLetter,
          {
            patientId: String(patientId),
            patient,
            lastVisit: latestVisit,
            onClose: () => {
            }
          }
        ) }) })
      ] })
    ] }) }),
    showReferralModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/50 flex items-start justify-center p-4 overflow-y-auto",
        "data-ocid": "referral.dialog",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-2xl shadow-2xl w-full max-w-2xl my-8 p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReferralLetter,
          {
            patientId: String(patientId),
            patient,
            lastVisit: latestVisit,
            onClose: () => setShowReferralModal(false)
          }
        ) })
      }
    )
  ] });
}
function extractClinicalSummary(notes) {
  if (!notes) return {};
  try {
    const parsed = JSON.parse(notes);
    return parsed;
  } catch {
    return { adviceText: notes };
  }
}
function normalizeDrug(m) {
  return {
    id: m.id || String(Math.random()),
    drugForm: m.drugForm || m.form || "",
    route: m.route || "",
    routeBn: m.routeBn || "",
    drugName: m.drugName || m.name || "",
    brandName: m.brandName || "",
    nameType: m.nameType || "generic",
    dose: m.dose || "",
    duration: m.duration || "",
    durationBn: m.durationBn || "",
    instructions: m.instructions || "",
    instructionBn: m.instructionBn || "",
    frequency: m.frequency || "",
    frequencyBn: m.frequencyBn || "",
    specialInstruction: m.specialInstruction || "",
    specialInstructionBn: m.specialInstructionBn || ""
  };
}
function HeaderBlock({
  headerType,
  fallbackDoctorInfo
}) {
  const img = getPrescriptionHeaderImage(headerType);
  if (img) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b pb-2 mb-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: img,
        alt: "Header",
        className: "max-h-24 object-contain mx-auto"
      }
    ) });
  }
  const textData = getPrescriptionHeaderText(headerType);
  if (textData) {
    if (headerType === "hospital") {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b pb-2 mb-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-base", children: textData.hospitalName }),
        textData.tagline && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: textData.tagline })
      ] });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b pb-3 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-base", children: textData.doctorName }),
        textData.degrees && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 font-medium", children: textData.degrees }),
        textData.chamberAddress && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: textData.chamberAddress })
      ] }),
      textData.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right text-sm text-gray-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Mob: ",
        textData.phone
      ] }) })
    ] }) });
  }
  const getDoctorProfile = () => {
    try {
      const sessionId = localStorage.getItem("medicare_current_doctor");
      if (sessionId) {
        const registry = JSON.parse(
          localStorage.getItem("medicare_doctors_registry") || "[]"
        );
        const doc = registry.find((d) => d.id === sessionId);
        if (doc == null ? void 0 : doc.email) {
          const profile2 = JSON.parse(
            localStorage.getItem(`doctor_profile_${doc.email}`) || "null"
          );
          if (profile2) return profile2;
        }
      }
    } catch {
    }
    return fallbackDoctorInfo;
  };
  const profile = getDoctorProfile();
  if (headerType === "hospital") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b pb-2 mb-3 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-base", children: (profile == null ? void 0 : profile.hospitalName) ?? (fallbackDoctorInfo == null ? void 0 : fallbackDoctorInfo.hospitalName) ?? "Dr. Sirajul Islam Medical College Hospital" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Dept. of General Surgery" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b pb-3 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-base", children: (profile == null ? void 0 : profile.name) ?? (fallbackDoctorInfo == null ? void 0 : fallbackDoctorInfo.name) ?? "Dr. Arman Kabir (ZOSID)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 font-medium", children: (profile == null ? void 0 : profile.degrees) ?? (profile == null ? void 0 : profile.designation) ?? (fallbackDoctorInfo == null ? void 0 : fallbackDoctorInfo.degrees) ?? "MBBS (D.U.) | Emergency Medical Officer" }),
      (profile == null ? void 0 : profile.posts) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: profile.posts }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: (profile == null ? void 0 : profile.chamber) ?? (profile == null ? void 0 : profile.chamberAddress) ?? (fallbackDoctorInfo == null ? void 0 : fallbackDoctorInfo.chamber) ?? "Dr. Sirajul Islam Medical College Hospital" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right text-sm text-gray-600", children: [
      (profile == null ? void 0 : profile.regNo) && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Reg. no. ",
        profile.regNo
      ] }),
      !(profile == null ? void 0 : profile.regNo) && !(fallbackDoctorInfo == null ? void 0 : fallbackDoctorInfo.regNo) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Reg. no. A-105224" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Mob:",
        " ",
        (profile == null ? void 0 : profile.phone) ?? (fallbackDoctorInfo == null ? void 0 : fallbackDoctorInfo.phone) ?? "01751959262 / 01984587802"
      ] })
    ] })
  ] }) });
}
function SignatureBlock({
  doctorName,
  signatureUrl
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-4 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-block text-center", children: [
    signatureUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: signatureUrl,
        alt: "Doctor signature",
        className: "h-12 object-contain mx-auto mb-1"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-gray-500 pt-1 min-w-[140px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 font-semibold", children: "Doctor's Signature" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: doctorName })
    ] })
  ] }) });
}
function PrescriptionPadPreview({
  prescription,
  patientName,
  patientAge,
  patientWeight,
  registerNumber,
  bloodGroup,
  address,
  sex,
  onClose: _onClose,
  headerType: headerTypeProp,
  isAdmitted
}) {
  const [editMode, setEditMode] = reactExports.useState(false);
  const [withHeader, setWithHeader] = reactExports.useState(true);
  const effectiveHeaderType = headerTypeProp ?? (isAdmitted ? "hospital" : "chamber");
  const raw = extractClinicalSummary(prescription == null ? void 0 : prescription.notes);
  const [name, setName] = reactExports.useState(patientName || "");
  const [age, setAge] = reactExports.useState(patientAge ? String(patientAge) : "");
  const [weight, setWeight] = reactExports.useState(patientWeight || "");
  const [regNo, setRegNo] = reactExports.useState(registerNumber || "");
  const [bg, setBg] = reactExports.useState(bloodGroup || raw.bloodGroup || "");
  const [addr, setAddr] = reactExports.useState(address || raw.address || "");
  const [sexVal, setSexVal] = reactExports.useState(sex || raw.sex || "");
  const [rxDate, setRxDate] = reactExports.useState(
    (prescription == null ? void 0 : prescription.prescriptionDate) ? format(
      new Date(Number(prescription.prescriptionDate / 1000000n)),
      "MMM d, yyyy"
    ) : format(/* @__PURE__ */ new Date(), "MMM d, yyyy")
  );
  const [diagnosis, setDiagnosis] = reactExports.useState(
    raw.diagnosis || (prescription == null ? void 0 : prescription.diagnosis) || ""
  );
  const [cc, setCc] = reactExports.useState(raw.cc || "");
  const [pmh, setPmh] = reactExports.useState(raw.pmh || "");
  const [dh, setDh] = reactExports.useState(raw.dh || "");
  const [oe, setOe] = reactExports.useState(raw.oe || "");
  const [historyPersonal, setHistoryPersonal] = reactExports.useState(
    raw.historyPersonal || ""
  );
  const [historyFamily, setHistoryFamily] = reactExports.useState(raw.historyFamily || "");
  const [historyImmunization, setHistoryImmunization] = reactExports.useState(
    raw.historyImmunization || ""
  );
  const [historyAllergy, setHistoryAllergy] = reactExports.useState(
    raw.historyAllergy || ""
  );
  const [historyOthers, setHistoryOthers] = reactExports.useState(raw.historyOthers || "");
  const [investigation, setInvestigation] = reactExports.useState(raw.investigation || "");
  const [adviceNewInv, setAdviceNewInv] = reactExports.useState(raw.adviceNewInv || "");
  const [adviceText, setAdviceText] = reactExports.useState(raw.adviceText || "");
  const [signatureUrl, setSignatureUrl] = reactExports.useState(
    () => getDoctorSignature()
  );
  const sigFileRef = reactExports.useRef(null);
  const [drugs, setDrugs] = reactExports.useState(
    ((prescription == null ? void 0 : prescription.medications) || []).map(normalizeDrug)
  );
  const hasHistory = historyPersonal || historyFamily || historyImmunization || historyAllergy || historyOthers;
  function getDoctorDisplayName() {
    try {
      const sessionId = localStorage.getItem("medicare_current_doctor");
      if (sessionId) {
        const registry = JSON.parse(
          localStorage.getItem("medicare_doctors_registry") || "[]"
        );
        const doc = registry.find((d) => d.id === sessionId);
        if (doc == null ? void 0 : doc.email) {
          const profile = JSON.parse(
            localStorage.getItem(`doctor_profile_${doc.email}`) || "null"
          );
          if (profile == null ? void 0 : profile.name) return profile.name;
        }
      }
    } catch {
    }
    return "Dr. Arman Kabir (ZOSID)";
  }
  const doctorDisplayName = getDoctorDisplayName();
  function handleSignatureUpload(e) {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return;
    if (file.size > 1024 * 1024) {
      alert("Signature image must be under 1MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      setDoctorSignature(dataUrl);
      setSignatureUrl(dataUrl);
    };
    reader.readAsDataURL(file);
  }
  function handlePrint(saveAsPdf = false) {
    const printId = "rx-pad-preview-print";
    const el = document.getElementById(printId);
    if (!el) return;
    const win = window.open("", "_blank");
    if (!win) return;
    const headerHtml = withHeader ? getPrescriptionHeaderHtml(effectiveHeaderType, null) : "";
    const sigHtml = getSignatureHtml(doctorDisplayName, signatureUrl);
    win.document.write(`
      <html><head><title>Prescription</title>
      <style>
        * { box-sizing: border-box; }
        body { font-family: Georgia, serif; font-size: 11pt; margin: 15mm; color: #111; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        .grid { display: grid !important; }
        .grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)) !important; }
        .col-span-2 { grid-column: span 2 / span 2 !important; }
        .col-span-3 { grid-column: span 3 / span 3 !important; }
        .gap-3 { gap: 0.75rem !important; }
        .flex { display: flex !important; }
        .flex-wrap { flex-wrap: wrap !important; }
        .items-start { align-items: flex-start !important; }
        .justify-between { justify-content: space-between !important; }
        .gap-x-4 { column-gap: 1rem !important; }
        .space-y-2 > * + * { margin-top: 0.5rem !important; }
        .space-y-1 > * + * { margin-top: 0.25rem !important; }
        .mb-1 { margin-bottom: 0.25rem !important; }
        .mb-2 { margin-bottom: 0.5rem !important; }
        .mb-3 { margin-bottom: 0.75rem !important; }
        .mt-3 { margin-top: 0.75rem !important; }
        .mt-8 { margin-top: 2rem !important; }
        .pb-2 { padding-bottom: 0.5rem !important; }
        .pt-2 { padding-top: 0.5rem !important; }
        .pl-4 { padding-left: 1rem !important; }
        .pr-2 { padding-right: 0.5rem !important; }
        .p-4 { padding: 1rem !important; }
        .border-b { border-bottom: 1px solid #d1d5db !important; }
        .border-t { border-top: 1px solid #d1d5db !important; }
        .border-r { border-right: 1px solid #d1d5db !important; }
        .border { border: 1px solid #d1d5db !important; }
        .font-serif { font-family: Georgia, serif !important; }
        .font-bold { font-weight: 700 !important; }
        .font-medium { font-weight: 500 !important; }
        .font-semibold { font-weight: 600 !important; }
        .text-base { font-size: 1rem !important; }
        .text-sm { font-size: 0.875rem !important; }
        .text-xs { font-size: 0.75rem !important; }
        .text-2xl { font-size: 1.5rem !important; }
        .text-right { text-align: right !important; }
        .text-center { text-align: center !important; }
        .uppercase { text-transform: uppercase !important; }
        .whitespace-pre-wrap { white-space: pre-wrap !important; }
        .leading-snug { line-height: 1.375 !important; }
        .text-gray-900 { color: #111827 !important; }
        .text-gray-800 { color: #1f2937 !important; }
        .text-gray-600 { color: #4b5563 !important; }
        .text-gray-500 { color: #6b7280 !important; }
        .text-indigo-600 { color: #4f46e5 !important; }
        .text-orange-600 { color: #ea580c !important; }
        .text-teal-600 { color: #0d9488 !important; }
        .rounded { border-radius: 0.25rem !important; }
        .max-w-2xl { max-width: 42rem !important; }
        .mx-auto { margin-left: auto !important; margin-right: auto !important; }
        .ml-1 { margin-left: 0.25rem !important; }
        strong { font-weight: 700 !important; }
        .signature-line { border-top: 1px solid #555; min-width: 120px; display: inline-block; }
        /* Colored accent border for every printed page */
        .rx-print-container { border-left: 6px solid #1d4ed8 !important; padding-left: 12px !important; }
        .rx-print-top-accent { border-top: 4px solid #1d4ed8 !important; margin-bottom: 8px !important; }
        /* Drug row colors */
        .drug-row-controlled { background-color: #fee2e2 !important; border-left: 4px solid #dc2626 !important; }
        .drug-row-allergy { background-color: #fecaca !important; border-left: 4px solid #b91c1c !important; }
        .drug-row-interaction { background-color: #fef9c3 !important; border-left: 4px solid #d97706 !important; }
        @media print {
          body { margin: 10mm; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print, .print:hidden { display: none !important; }
          .rx-print-container { border-left: 6px solid #1d4ed8 !important; padding-left: 12px !important; page-break-inside: auto; }
          .rx-print-top-accent { border-top: 4px solid #1d4ed8 !important; }
          .drug-row-controlled { background-color: #fee2e2 !important; border-left: 4px solid #dc2626 !important; }
          .drug-row-allergy { background-color: #fecaca !important; border-left: 4px solid #b91c1c !important; }
          .drug-row-interaction { background-color: #fef9c3 !important; border-left: 4px solid #d97706 !important; }
          tr { page-break-inside: avoid !important; }
        }
      </style></head><body>
      ${headerHtml}
      ${el.innerHTML}
      ${sigHtml}
      </body></html>
    `);
    win.document.close();
    if (saveAsPdf) {
      win.onafterprint = () => win.close();
    }
    win.focus();
    win.print();
  }
  function updateDrug(index, field, value) {
    setDrugs((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  }
  const numberedAdvice = numberAdviceLines(adviceText);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 bg-muted/40 border rounded-xl p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          variant: "outline",
          className: `gap-1.5 ${editMode ? "bg-amber-50 border-amber-300 text-amber-700" : "border-border"}`,
          onClick: () => setEditMode((v) => !v),
          "data-ocid": "rx_pad.toggle",
          children: editMode ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5" }),
            " View Mode"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3.5 h-3.5" }),
            " Edit Mode"
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          variant: "outline",
          className: `gap-1.5 ${withHeader ? "bg-teal-50 border-teal-300 text-teal-700" : "border-border text-muted-foreground"}`,
          onClick: () => setWithHeader((v) => !v),
          "data-ocid": "rx_pad.toggle",
          children: withHeader ? "With Header" : "Without Header"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: sigFileRef,
            type: "file",
            accept: "image/png,image/jpeg",
            className: "hidden",
            onChange: handleSignatureUpload
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            onClick: () => {
              var _a;
              return (_a = sigFileRef.current) == null ? void 0 : _a.click();
            },
            className: "gap-1.5 border-purple-300 text-purple-700 hover:bg-purple-50 text-xs",
            "data-ocid": "rx_pad.upload_signature_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-3 h-3" }),
              signatureUrl ? "Change Signature" : "Upload Signature"
            ]
          }
        ),
        signatureUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              clearDoctorSignature();
              setSignatureUrl(null);
            },
            className: "text-red-400 hover:text-red-600",
            title: "Remove signature",
            "aria-label": "Remove signature",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" })
          }
        )
      ] }),
      signatureUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: signatureUrl,
          alt: "Signature preview",
          className: "h-8 object-contain border rounded px-1"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          variant: "outline",
          className: "gap-1.5 border-teal-300 text-teal-700 hover:bg-teal-50",
          onClick: () => handlePrint(),
          "data-ocid": "rx_pad.button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3.5 h-3.5" }),
            " Print"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          variant: "outline",
          className: "gap-1.5 border-indigo-300 text-indigo-700 hover:bg-indigo-50",
          onClick: () => handlePrint(true),
          "data-ocid": "rx_pad.button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
            " Save PDF"
          ]
        }
      )
    ] }),
    editMode && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-xl p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2", children: [
        { label: "Name", val: name, set: setName },
        { label: "Age (yrs)", val: age, set: setAge },
        { label: "Sex", val: sexVal, set: setSexVal },
        { label: "Weight (kg)", val: weight, set: setWeight },
        { label: "Blood Group", val: bg, set: setBg },
        { label: "Reg No", val: regNo, set: setRegNo },
        { label: "Date", val: rxDate, set: setRxDate }
      ].map(({ label, val, set }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-blue-700 font-semibold", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: val,
            onChange: (e) => set(e.target.value),
            className: "h-7 text-sm mt-0.5"
          }
        )
      ] }, label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-blue-700 font-semibold", children: "Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: addr,
            onChange: (e) => setAddr(e.target.value),
            className: "h-7 text-sm mt-0.5"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        id: "rx-pad-preview-print",
        className: "font-serif text-gray-900 border border-gray-200 p-4 rounded bg-white rx-print-container",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rx-print-top-accent" }),
          withHeader && /* @__PURE__ */ jsxRuntimeExports.jsx(
            HeaderBlock,
            {
              headerType: effectiveHeaderType,
              fallbackDoctorInfo: null
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-x-3 gap-y-0.5 text-sm border-b pb-2 mb-3", children: [
            name && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Name:" }),
              " ",
              name
            ] }),
            age && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Age:" }),
              " ",
              age,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "yrs" })
            ] }),
            sexVal && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sex:" }),
              " ",
              sexVal
            ] }),
            weight && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Weight:" }),
              " ",
              weight,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "kg" })
            ] }),
            bg && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Blood Group:" }),
              " ",
              bg
            ] }),
            regNo && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Reg:" }),
              " ",
              regNo
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Date:" }),
              " ",
              rxDate
            ] }),
            addr && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Address:" }),
              " ",
              addr
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-5 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-2 text-sm border-r pr-2", children: [
              (cc || editMode) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xs uppercase text-blue-600 mb-0.5", children: "C/C" }),
                editMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: cc,
                    onChange: (e) => setCc(e.target.value),
                    className: "text-xs min-h-[60px] resize-none",
                    placeholder: "Chief Complaints..."
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-pre-wrap text-xs", children: cc })
              ] }),
              (pmh || editMode) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xs uppercase text-green-600 mb-0.5", children: "P/M/H" }),
                editMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: pmh,
                    onChange: (e) => setPmh(e.target.value),
                    className: "text-xs min-h-[50px] resize-none",
                    placeholder: "Past Medical/Surgical History..."
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-pre-wrap text-xs", children: pmh })
              ] }),
              (hasHistory || editMode) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xs uppercase text-purple-600 mb-0.5", children: "History" }),
                editMode ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: [
                  "Personal",
                  "Family",
                  "Immunization",
                  "Allergy",
                  "Others"
                ].map((tab) => {
                  const vals = {
                    Personal: historyPersonal,
                    Family: historyFamily,
                    Immunization: historyImmunization,
                    Allergy: historyAllergy,
                    Others: historyOthers
                  };
                  const setters = {
                    Personal: setHistoryPersonal,
                    Family: setHistoryFamily,
                    Immunization: setHistoryImmunization,
                    Allergy: setHistoryAllergy,
                    Others: setHistoryOthers
                  };
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: tab }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        value: vals[tab],
                        onChange: (e) => setters[tab](e.target.value),
                        className: "text-xs min-h-[35px] resize-none"
                      }
                    )
                  ] }, tab);
                }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs space-y-0.5", children: [
                  historyPersonal && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Personal: " }),
                    historyPersonal
                  ] }),
                  historyFamily && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Family: " }),
                    historyFamily
                  ] }),
                  historyImmunization && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Immunization: " }),
                    historyImmunization
                  ] }),
                  historyAllergy && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Allergy: " }),
                    historyAllergy
                  ] }),
                  historyOthers && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Others: " }),
                    historyOthers
                  ] })
                ] })
              ] }),
              (dh || editMode) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xs uppercase text-amber-600 mb-0.5", children: "D/H" }),
                editMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: dh,
                    onChange: (e) => setDh(e.target.value),
                    className: "text-xs min-h-[50px] resize-none",
                    placeholder: "Drug History..."
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-pre-wrap text-xs", children: dh })
              ] }),
              (oe || editMode) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xs uppercase text-rose-600 mb-0.5", children: "O/E" }),
                editMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: oe,
                    onChange: (e) => setOe(e.target.value),
                    className: "text-xs min-h-[60px] resize-none",
                    placeholder: "On Examination..."
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-pre-wrap text-xs", children: oe })
              ] }),
              (investigation || editMode) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xs uppercase text-teal-600 mb-0.5", children: "Investigation" }),
                editMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: investigation,
                    onChange: (e) => setInvestigation(e.target.value),
                    className: "text-xs min-h-[60px] resize-none",
                    placeholder: "Investigation Reports..."
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-pre-wrap text-xs", children: investigation })
              ] }),
              (adviceNewInv || editMode) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xs uppercase text-orange-600 mb-0.5", children: "Advice / New Inv." }),
                editMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: adviceNewInv,
                    onChange: (e) => setAdviceNewInv(e.target.value),
                    className: "text-xs min-h-[50px] resize-none",
                    placeholder: "Advice / New Investigation..."
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-pre-wrap text-xs", children: adviceNewInv })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3", children: [
              (diagnosis || editMode) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm", children: "Dx: " }),
                editMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    value: diagnosis,
                    onChange: (e) => setDiagnosis(e.target.value),
                    className: "border-b border-gray-300 text-sm ml-1 outline-none flex-1 w-full mt-1",
                    placeholder: "Diagnosis..."
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: diagnosis })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold mb-2", children: "ℝ" }),
              editMode && drugs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs border-collapse", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-gray-50", children: [
                  "#",
                  "Form",
                  "Drug Name",
                  "Dose",
                  "Freq.",
                  "Duration",
                  "Instructions"
                ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "th",
                  {
                    className: "border border-gray-200 px-1 py-1 text-left",
                    children: h
                  },
                  h
                )) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: drugs.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-200 px-1 py-1", children: i + 1 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-200 px-1 py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      value: d.drugForm || "",
                      onChange: (e) => updateDrug(i, "drugForm", e.target.value),
                      className: "w-12 outline-none border-b border-gray-300"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-200 px-1 py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      value: d.drugName || "",
                      onChange: (e) => updateDrug(i, "drugName", e.target.value),
                      className: "w-28 outline-none border-b border-gray-300"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-200 px-1 py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      value: d.dose || "",
                      onChange: (e) => updateDrug(i, "dose", e.target.value),
                      className: "w-16 outline-none border-b border-gray-300"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-200 px-1 py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      value: d.frequencyBn || d.frequency || "",
                      onChange: (e) => updateDrug(i, "frequencyBn", e.target.value),
                      className: "w-20 outline-none border-b border-gray-300"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-200 px-1 py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      value: d.durationBn || d.duration || "",
                      onChange: (e) => updateDrug(i, "durationBn", e.target.value),
                      className: "w-16 outline-none border-b border-gray-300"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-200 px-1 py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      value: d.instructionBn || d.instructions || "",
                      onChange: (e) => updateDrug(i, "instructionBn", e.target.value),
                      className: "w-24 outline-none border-b border-gray-300"
                    }
                  ) })
                ] }, d.id || i)) })
              ] }) }),
              !editMode && (drugs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400 italic", children: "No medications added." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: drugs.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-snug", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium flex items-center gap-1 flex-wrap", children: [
                  i + 1,
                  ".",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-indigo-600", children: d.drugForm }),
                  " ",
                  d.brandName ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: d.brandName }),
                    d.drugName && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-400 text-xs ml-1", children: [
                      "(",
                      d.drugName,
                      ")"
                    ] })
                  ] }) : d.nameType === "brand" ? /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: d.drugName }) : d.drugName,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: d.dose }),
                  d.isPrn && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-1.5 py-0.5 rounded-full bg-purple-100 text-purple-700 border border-purple-300 font-semibold ml-1", children: "PRN" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-500 pl-4", children: [
                  d.isPrn ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "italic text-purple-600", children: [
                    "PRN",
                    d.prnCondition ? ` — ${d.prnCondition}` : " (as needed)"
                  ] }) : [
                    d.frequencyBn || d.frequency,
                    d.durationBn || d.duration ? `– ${d.durationBn || d.duration}` : "",
                    d.instructionBn || d.instructions
                  ].filter(Boolean).join("  "),
                  (d.specialInstructionBn || d.specialInstruction) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-orange-600 ml-1", children: [
                    "· ",
                    d.specialInstructionBn || d.specialInstruction
                  ] })
                ] })
              ] }, d.id || i)) })),
              (adviceText || editMode) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-2 border-t", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xs uppercase text-gray-500 mb-1", children: "পরামর্শ" }),
                editMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: adviceText,
                    onChange: (e) => setAdviceText(e.target.value),
                    className: "text-xs min-h-[60px] resize-none",
                    placeholder: "Advice in Bengali... (one item per line, auto-numbered)"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs whitespace-pre-wrap", children: numberedAdvice })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SignatureBlock,
                {
                  doctorName: doctorDisplayName,
                  signatureUrl
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}
function getAge(dateOfBirth) {
  if (!dateOfBirth) return null;
  const dob = new Date(Number(dateOfBirth / 1000000n));
  return Math.floor((Date.now() - dob.getTime()) / (365.25 * 24 * 3600 * 1e3));
}
function formatTime(time) {
  return format(new Date(Number(time / 1000000n)), "MMM d, yyyy");
}
function formatDateTime(time) {
  return format(new Date(Number(time / 1000000n)), "MMM d, yyyy 'at' h:mm a");
}
function PatientDashboard({
  patientId: propPatientId,
  currentRole,
  viewerRole,
  currentPatient: patientAccount,
  onBack
}) {
  const search = {
    id: new URLSearchParams(window.location.search).get("id") ?? void 0
  };
  const patientId = propPatientId ?? (search.id ? (() => {
    try {
      const s = String(search.id);
      const raw = s.startsWith("__bigint__") ? s.slice(10) : s;
      const cleaned = raw.replace(/[^0-9]/g, "");
      return cleaned ? BigInt(cleaned) : null;
    } catch {
      return null;
    }
  })() : null);
  const rolePermissions = useRolePermissions();
  const [showEditForm, setShowEditForm] = reactExports.useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = reactExports.useState(false);
  const openVisitPage = (pid) => {
    window.location.href = `/Visit?id=${pid}`;
  };
  const [showRxForm, setShowRxForm] = reactExports.useState(false);
  const [rxInitialDiagnosis, setRxInitialDiagnosis] = reactExports.useState();
  const [rxVisitExtendedData, setRxVisitExtendedData] = reactExports.useState();
  const [rxForceVisitData, setRxForceVisitData] = reactExports.useState(false);
  const [rxPatientRegisterNumber, setRxPatientRegisterNumber] = reactExports.useState();
  const [selectedVisit, setSelectedVisit] = reactExports.useState(null);
  const [selectedRx, setSelectedRx] = reactExports.useState(null);
  const [savedPads, setSavedPads] = reactExports.useState(
    []
  );
  const [editRx, setEditRx] = reactExports.useState(null);
  const [showPadPreview, setShowPadPreview] = reactExports.useState(false);
  const [padPrescription, setPadPrescription] = reactExports.useState(
    null
  );
  const loadSavedPads = () => {
    if (!patientId) return;
    try {
      const raw = localStorage.getItem(`savedPrescriptionPads_${patientId}`);
      if (raw) setSavedPads(JSON.parse(raw));
    } catch {
    }
  };
  reactExports.useEffect(() => {
    loadSavedPads();
  }, [patientId]);
  const { data: patient, isLoading: loadingPatient } = useGetPatient(
    patientId ?? 0n
  );
  const { data: visits = [], isLoading: loadingVisits } = useGetVisitsByPatient(
    patientId ?? 0n
  );
  const { data: prescriptions = [], isLoading: loadingRx } = useGetPrescriptionsByPatient(patientId ?? 0n);
  const updateMutation = useUpdatePatient();
  useCreateVisit();
  const createRxMutation = useCreatePrescription();
  const deleteMutation = useDeletePatient();
  const dischargeMutation = useDischargePatient();
  const [showAdmitDialog, setShowAdmitDialog] = reactExports.useState(false);
  const [showDischargeConfirm, setShowDischargeConfirm] = reactExports.useState(false);
  const sortedVisits = reactExports.useMemo(
    () => [...visits].sort((a, b) => Number(b.visitDate - a.visitDate)),
    [visits]
  );
  const latestVisit = sortedVisits[0] ?? null;
  const latestVitals = reactExports.useMemo(() => {
    if (!latestVisit) return null;
    try {
      const formData = getVisitFormData(latestVisit.id);
      if (formData) return formData.vitalSigns;
    } catch {
    }
    return null;
  }, [latestVisit]);
  const vitalsHistory = reactExports.useMemo(() => {
    return sortedVisits.slice().reverse().map((v) => {
      var _a, _b, _c, _d, _e;
      let extra = {};
      try {
        const formData = getVisitFormData(v.id);
        if (formData) extra = (formData == null ? void 0 : formData.vitalSigns) || {};
      } catch {
      }
      const bp = extra.bloodPressure || ((_a = v.vitalSigns) == null ? void 0 : _a.bloodPressure) || "";
      const systolic = bp ? Number.parseInt(bp.split("/")[0] || "0") : null;
      const diastolic = bp ? Number.parseInt(bp.split("/")[1] || "0") : null;
      const map = systolic && diastolic ? Math.round(diastolic + (systolic - diastolic) / 3) : null;
      const wt = Number.parseFloat(extra.weight || String((patient == null ? void 0 : patient.weight) || "")) || null;
      const ht = Number.parseFloat(extra.height || String((patient == null ? void 0 : patient.height) || "")) || null;
      const bmi = wt && ht ? Math.round(wt / (ht / 100 * (ht / 100)) * 10) / 10 : null;
      return {
        date: format(new Date(Number(v.visitDate / 1000000n)), "MMM d"),
        BP: systolic || null,
        Diastolic: diastolic || null,
        MAP: map,
        Pulse: Number.parseFloat(extra.pulse || ((_b = v.vitalSigns) == null ? void 0 : _b.pulse) || "") || null,
        Temp: Number.parseFloat(
          extra.temperature || ((_c = v.vitalSigns) == null ? void 0 : _c.temperature) || ""
        ) || null,
        SpO2: Number.parseFloat(
          extra.oxygenSaturation || ((_d = v.vitalSigns) == null ? void 0 : _d.oxygenSaturation) || ""
        ) || null,
        Weight: wt,
        RespRate: Number.parseFloat(
          extra.respiratoryRate || ((_e = v.vitalSigns) == null ? void 0 : _e.respiratoryRate) || ""
        ) || null,
        BMI: bmi
      };
    }).filter((r) => r.BP || r.Pulse || r.Temp || r.SpO2);
  }, [sortedVisits, patient]);
  const allInvestigations = reactExports.useMemo(() => {
    const rows = [];
    for (const v of sortedVisits) {
      try {
        const formData = getVisitFormData(v.id);
        if (formData) {
          const invRows = formData.previous_investigation_rows;
          if (Array.isArray(invRows)) rows.push(...invRows);
        }
      } catch {
      }
    }
    return rows;
  }, [sortedVisits]);
  const invByName = reactExports.useMemo(() => {
    const map = {};
    for (const row of allInvestigations) {
      if (!row.name || !row.result) continue;
      const num = Number.parseFloat(row.result);
      if (Number.isNaN(num)) continue;
      if (!map[row.name]) map[row.name] = { data: [], unit: row.unit || "" };
      map[row.name].data.push({ date: row.date || "?", value: num });
    }
    return map;
  }, [allInvestigations]);
  function downloadVisitHistoryPDF() {
    if (!patient) return;
    const shown = sortedVisits.filter((v) => {
      try {
        const d = getVisitFormData(v.id);
        if (d) return d.showToPatient !== false;
      } catch {
      }
      return true;
    });
    const rows = shown.map((v, i) => {
      let diag = "";
      try {
        const d = getVisitFormData(v.id);
        if (d) diag = d.diagnosis || "";
      } catch {
      }
      return `<tr><td>${i + 1}</td><td>${formatTime(v.visitDate)}</td><td>${v.visitType || "—"}</td><td>${diag || "—"}</td></tr>`;
    }).join("");
    const win = window.open("", "_blank");
    if (!win) return;
    win.document.write(
      `<html><head><title>Visit History - ${patient.fullName}</title><style>body{font-family:sans-serif;padding:20px}table{width:100%;border-collapse:collapse}th,td{border:1px solid #ccc;padding:8px;text-align:left}th{background:#f0f0f0;font-weight:bold}h2{color:#0f766e}</style></head><body><h2>Visit History — ${patient.fullName}</h2><p>Register No: ${patient.registerNumber || "—"} | Generated: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}</p><table><thead><tr><th>#</th><th>Date</th><th>Type</th><th>Diagnosis</th></tr></thead><tbody>${rows}</tbody></table></body></html>`
    );
    win.document.close();
    win.print();
  }
  function downloadSingleVisitPDF(visit) {
    if (!patient) return;
    let extData = {};
    try {
      const fd = getVisitFormData(visit.id);
      if (fd) extData = fd;
    } catch {
    }
    const win = window.open("", "_blank");
    if (!win) return;
    win.document.write(`<html><head><title>Visit - ${patient.fullName}</title>
      <style>body{font-family:Georgia,serif;padding:20px;font-size:11pt}h2{color:#0f766e}h3{color:#374151;margin-top:12px}hr{border:1px solid #ccc;margin:10px 0}p{margin:4px 0}</style></head>
      <body>
        <h2>Visit Record</h2>
        <p><strong>Patient:</strong> ${patient.fullName}</p>
        <p><strong>Date:</strong> ${formatTime(visit.visitDate)}</p>
        <p><strong>Visit Type:</strong> ${visit.visitType || "—"}</p>
        <p><strong>Diagnosis:</strong> ${extData.diagnosis || visit.diagnosis || "—"}</p>
        <p><strong>Chief Complaint:</strong> ${visit.chiefComplaint || "—"}</p>
        ${extData.pastMedicalHistory ? `<p><strong>Past Medical History:</strong> ${extData.pastMedicalHistory}</p>` : ""}
        ${extData.vitalSigns ? `<h3>Vital Signs</h3><p>BP: ${extData.vitalSigns.bloodPressure || "—"} <strong>mmHg</strong> | Pulse: ${extData.vitalSigns.pulse || "—"} <strong>beats/min</strong> | Temp: ${extData.vitalSigns.temperature || "—"} <strong>°F</strong> | SpO₂: ${extData.vitalSigns.oxygenSaturation || "—"} <strong>%</strong></p>` : ""}
        ${extData.salientFeatures ? `<h3>Clinical Summary</h3><p>${extData.salientFeatures}</p>` : ""}
      </body></html>`);
    win.document.close();
    win.focus();
    win.print();
  }
  function downloadPrescriptionsPDF() {
    if (!patient) return;
    const rxs = [...prescriptions].sort(
      (a, b) => Number(b.prescriptionDate - a.prescriptionDate)
    );
    const rows = rxs.map((rx, i) => {
      const meds = rx.medications.map(
        (m) => `${m.drugForm || ""} ${m.drugName || m.name || ""} ${m.dose || ""} — ${m.frequency || ""} × ${m.duration || ""}`
      ).join("<br/>");
      return `<tr><td>${i + 1}</td><td>${formatTime(rx.prescriptionDate)}</td><td>${rx.diagnosis || "—"}</td><td>${meds || "—"}</td></tr>`;
    }).join("");
    const win = window.open("", "_blank");
    if (!win) return;
    win.document.write(
      `<html><head><title>Prescriptions - ${patient.fullName}</title><style>body{font-family:sans-serif;padding:20px}table{width:100%;border-collapse:collapse}th,td{border:1px solid #ccc;padding:8px;text-align:left;vertical-align:top}th{background:#f0f0f0;font-weight:bold}h2{color:#0f766e}</style></head><body><h2>Prescriptions — ${patient.fullName}</h2><table><thead><tr><th>#</th><th>Date</th><th>Diagnosis</th><th>Medications</th></tr></thead><tbody>${rows}</tbody></table></body></html>`
    );
    win.document.close();
    win.print();
  }
  function markPrescriptionViewed(rxId) {
    try {
      const key = `rx_viewed_by_patient_${String(rxId)}`;
      if (!localStorage.getItem(key)) {
        localStorage.setItem(key, String(Date.now()));
      }
    } catch {
    }
  }
  function downloadSinglePrescriptionPDF(rx) {
    if (!patient) return;
    if (currentRole === "patient") {
      markPrescriptionViewed(rx.id);
    }
    const meds = rx.medications.map((m, i) => {
      const line1 = `${i + 1}. ${m.drugForm || ""} ${m.drugName || m.name || ""} ${m.dose || ""}`.trim();
      const line2 = `   ${m.frequency || ""} – ${m.duration || ""} ${m.instructions ? `– ${m.instructions}` : ""}`.trim();
      return `<p style="margin:2px 0 6px 16px">${line1}<br/><span style="color:#555">${line2}</span></p>`;
    }).join("");
    const win = window.open("", "_blank");
    if (!win) return;
    win.document.write(`<html><head><title>Prescription - ${patient.fullName}</title>
      <style>body{font-family:Georgia,serif;padding:20px;font-size:11pt}h2{color:#0f766e}hr{border:1px solid #ccc;margin:10px 0}</style></head>
      <body>
        <h2>Prescription</h2>
        <p><strong>Patient:</strong> ${patient.fullName}</p>
        <p><strong>Register No:</strong> ${patient.registerNumber || "—"}</p>
        <p><strong>Date:</strong> ${formatTime(rx.prescriptionDate)}</p>
        <p><strong>Diagnosis:</strong> ${rx.diagnosis || "—"}</p>
        <hr/>
        <p><strong>℞ Medications:</strong></p>
        ${meds || "<p>No medications</p>"}
        ${rx.notes ? `<hr/><p><strong>Notes/Advice:</strong> ${rx.notes}</p>` : ""}
      </body></html>`);
    win.document.close();
    win.focus();
    win.print();
  }
  function openRxForm(diagnosis, forVisitId, extendedData, regNum) {
    setRxInitialDiagnosis(diagnosis);
    setRxForceVisitData(!!forVisitId);
    try {
      if (forVisitId !== void 0) {
        const loaded = getVisitFormData(forVisitId);
        if (loaded) setRxVisitExtendedData(loaded);
        else if (extendedData) setRxVisitExtendedData(extendedData);
      } else if (extendedData) {
        setRxVisitExtendedData(extendedData);
      }
      if (patientId && !regNum) {
        const regRaw = localStorage.getItem(`patient_register_${patientId}`);
        if (regRaw) setRxPatientRegisterNumber(regRaw);
      } else if (regNum) {
        setRxPatientRegisterNumber(regNum);
      }
    } catch {
    }
    setShowRxForm(true);
  }
  function closeRxForm() {
    setShowRxForm(false);
    setRxInitialDiagnosis(void 0);
    setRxForceVisitData(false);
    setRxVisitExtendedData(void 0);
    setRxPatientRegisterNumber(void 0);
  }
  if (loadingPatient) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-6xl mx-auto p-4 sm:p-6 space-y-4",
        "data-ocid": "patient_dashboard.loading_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-48" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-60 h-80 rounded-2xl flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 rounded-xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64 rounded-2xl" })
            ] })
          ] })
        ]
      }
    );
  }
  if (!patient) {
    if (currentRole === "patient") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50 p-4 sm:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-amber-800 mb-1", children: "Health records not yet linked" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-amber-700", children: "Your portal account is active, but your health records are not yet linked. Please contact the clinic with your register number." })
        ] })
      ] }) }) });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto p-4 sm:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-20",
        "data-ocid": "patient_dashboard.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-8 h-8 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground mb-2", children: "Patient not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              onClick: () => {
                if (onBack) onBack();
                else window.location.href = "/Patients";
              },
              className: "mt-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
                " Back to Patients"
              ]
            }
          )
        ]
      }
    ) });
  }
  const age = getAge(patient.dateOfBirth);
  const initials = patient.fullName.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
  const isPatientAdmitted = patient.isAdmitted === true || patient.status === "Admitted" || patient.patientType === "admitted" || patient.patientType === "indoor";
  const doctorName = (() => {
    try {
      const email = getDoctorEmail$1();
      const raw = localStorage.getItem(`doctor_profile_${email}`);
      if (raw) {
        const profile = JSON.parse(raw);
        return profile.name || profile.fullName || email;
      }
    } catch {
    }
    return "Dr. Unknown";
  })();
  const sortedPrescriptions = [...prescriptions].sort(
    (a, b) => Number(b.prescriptionDate - a.prescriptionDate)
  );
  const latestPrescription = sortedPrescriptions[0] ?? null;
  const prescriptionsWithMeta = prescriptions.map((rx) => {
    try {
      const viewedAt = localStorage.getItem(
        `rx_viewed_by_patient_${String(rx.id)}`
      );
      if (viewedAt) {
        return { ...rx, viewedByPatientAt: Number(viewedAt) };
      }
    } catch {
    }
    return rx;
  });
  const clinicalRestricted = !rolePermissions.canAccessOutpatient && !isPatientAdmitted;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex min-h-screen bg-gray-50",
      "data-ocid": "patient_dashboard.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 sticky top-0 h-screen shadow-sm flex-shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-b border-gray-100 flex flex-col items-center text-center gap-3", children: [
            patient.photo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: patient.photo,
                alt: patient.fullName,
                className: "w-20 h-20 rounded-2xl object-cover border-2 border-teal-200"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-2xl", children: initials }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 text-base", children: patient.fullName }),
              patient.registerNumber ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-teal-700 font-mono bg-teal-50 px-2 py-0.5 rounded mt-1", children: patient.registerNumber }) : null,
              isPatientAdmitted && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 mt-1 text-xs font-semibold bg-green-100 text-green-800 border border-green-300 px-2 py-0.5 rounded-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-3 h-3" }),
                "Admitted"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-2.5 text-sm", children: [
            patient.gender && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-gray-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5 text-gray-400 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "capitalize", children: [
                patient.gender,
                " · ",
                age ? `${age} yrs` : "Age N/A"
              ] })
            ] }),
            patient.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-gray-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5 text-gray-400 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: patient.phone })
            ] }),
            patient.address && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-gray-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-snug", children: patient.address })
            ] }),
            patient.bloodGroup && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "w-3.5 h-3.5 text-red-400 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-red-600", children: patient.bloodGroup })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border-t border-gray-100 space-y-2", children: [
            (currentRole === "doctor" || currentRole === "admin") && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "w-full gap-2 text-sm",
                onClick: () => setShowEditForm(true),
                "data-ocid": "patient_dashboard.edit_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5" }),
                  " Edit Profile"
                ]
              }
            ),
            currentRole === "admin" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "w-full gap-2 text-sm text-red-600 border-red-200 hover:bg-red-50",
                onClick: () => setShowDeleteConfirm(true),
                "data-ocid": "patient_dashboard.delete_button",
                children: "Delete Patient"
              }
            ),
            currentRole !== "patient" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "ghost",
                className: "w-full gap-2 text-sm text-gray-500",
                onClick: () => {
                  if (onBack) onBack();
                  else window.location.href = "/Patients";
                },
                "data-ocid": "patient_dashboard.link",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3.5 h-3.5" }),
                  " Back to Patients"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-h-screen overflow-x-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 sm:px-6 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-1.5 text-sm", children: [
              currentRole !== "patient" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      if (onBack) onBack();
                      else window.location.href = "/Patients";
                    },
                    className: "text-gray-500 hover:text-teal-600 font-medium",
                    "data-ocid": "patient_dashboard.link",
                    children: "Patients"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-gray-400" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-800 font-semibold", children: patient.fullName })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              !isPatientAdmitted && (currentRole === "doctor" || currentRole === "admin" || viewerRole === "consultant_doctor") && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  className: "gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs",
                  onClick: () => setShowAdmitDialog(true),
                  "data-ocid": "patient_dashboard.admit_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-3.5 h-3.5" }),
                    "Admit to Hospital"
                  ]
                }
              ),
              currentRole !== "patient" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  className: "lg:hidden gap-1 text-xs",
                  onClick: () => {
                    if (onBack) onBack();
                    else window.location.href = "/Patients";
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3.5 h-3.5" })
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 p-4 sm:p-6", children: [
            clinicalRestricted && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-4 text-sm text-amber-800",
                "data-ocid": "patient_dashboard.clinical_restriction_banner",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 shrink-0 mt-0.5 text-amber-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "This patient has not been admitted. Clinical actions are restricted." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-700 mt-0.5", children: "You can view patient info, vitals, and investigations in read-only mode. To perform clinical actions, the patient must be admitted first." })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              PatientDashboardInner,
              {
                patientId,
                patient,
                currentRole,
                viewerRole,
                patientAccount,
                sortedVisits,
                latestVisit,
                latestVitals,
                vitalsHistory,
                allInvestigations,
                invByName,
                prescriptions: prescriptionsWithMeta,
                loadingVisits,
                loadingRx,
                setShowVisitForm: (v) => {
                  if (!v) return;
                  if (clinicalRestricted) {
                    ue.warning(
                      "This patient must be admitted before clinical actions can be performed."
                    );
                    return;
                  }
                  if (patientId) openVisitPage(patientId);
                },
                setSelectedVisit,
                setSelectedRx,
                setEditRx: (rx) => {
                  if (clinicalRestricted) {
                    ue.warning(
                      "Clinical editing is restricted to admitted patients."
                    );
                    return;
                  }
                  setEditRx(rx);
                },
                setPadPrescription,
                setShowPadPreview,
                loadSavedPads,
                savedPads,
                openRxForm: (...args) => {
                  if (clinicalRestricted) {
                    ue.warning(
                      "This patient must be admitted before writing a prescription."
                    );
                    return;
                  }
                  openRxForm(...args);
                },
                downloadVisitHistoryPDF,
                downloadSingleVisitPDF,
                downloadPrescriptionsPDF,
                downloadSinglePrescriptionPDF,
                age,
                initials,
                formatDateTime
              }
            )
          ] })
        ] }),
        showEditForm && /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showEditForm, onOpenChange: setShowEditForm, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DialogContent,
          {
            className: "max-w-xl max-h-[90vh] overflow-y-auto",
            "data-ocid": "patient_dashboard.edit.dialog",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Edit Patient" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                PatientForm,
                {
                  patient,
                  onSubmit: (data) => {
                    if (!patientId) return;
                    updateMutation.mutate(
                      { id: patientId, ...data },
                      {
                        onSuccess: () => {
                          ue.success("Patient updated");
                          setShowEditForm(false);
                        },
                        onError: () => ue.error("Failed to update patient")
                      }
                    );
                  },
                  onCancel: () => setShowEditForm(false),
                  isLoading: updateMutation.isPending
                }
              )
            ]
          }
        ) }),
        showDeleteConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showDeleteConfirm, onOpenChange: setShowDeleteConfirm, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DialogContent,
          {
            className: "max-w-sm",
            "data-ocid": "patient_dashboard.delete.dialog",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Delete Patient" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                "Are you sure you want to delete",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: patient.fullName }),
                "? This action cannot be undone."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-end mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    onClick: () => setShowDeleteConfirm(false),
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "destructive",
                    onClick: () => {
                      if (!patientId) return;
                      deleteMutation.mutate(patientId, {
                        onSuccess: () => {
                          ue.success("Patient deleted");
                          setShowDeleteConfirm(false);
                          if (onBack) onBack();
                          else window.location.href = "/Patients";
                        },
                        onError: () => ue.error("Failed to delete patient")
                      });
                    },
                    "data-ocid": "patient_dashboard.delete.submit_button",
                    children: "Delete"
                  }
                )
              ] })
            ]
          }
        ) }),
        showRxForm && patientId && /* @__PURE__ */ jsxRuntimeExports.jsx(
          UpgradedPrescriptionEMR,
          {
            patientId,
            patientName: (patient == null ? void 0 : patient.fullName) ?? "",
            patientAge: age ?? void 0,
            patientGender: (patient == null ? void 0 : patient.gender) ?? "",
            patientWeight: (patient == null ? void 0 : patient.weight) != null ? String(patient.weight) : void 0,
            patientHeight: (patient == null ? void 0 : patient.height) != null ? Number(patient.height) : void 0,
            patientAddress: (patient == null ? void 0 : patient.address) ?? "",
            patientBloodGroup: (patient == null ? void 0 : patient.bloodGroup) ?? "",
            initialDiagnosis: rxInitialDiagnosis,
            forceVisitData: rxForceVisitData,
            visitExtendedData: rxVisitExtendedData,
            patientRegisterNumber: rxPatientRegisterNumber || patient.registerNumber || "",
            onSubmit: (data) => {
              createRxMutation.mutate(data, {
                onSuccess: () => {
                  ue.success("Prescription saved");
                  closeRxForm();
                },
                onError: () => ue.error("Failed to save prescription")
              });
            },
            onCancel: closeRxForm
          }
        ),
        editRx && patientId && /* @__PURE__ */ jsxRuntimeExports.jsx(
          UpgradedPrescriptionEMR,
          {
            patientId,
            patientName: (patient == null ? void 0 : patient.fullName) ?? "",
            patientAge: age ?? void 0,
            patientGender: (patient == null ? void 0 : patient.gender) ?? "",
            patientWeight: (patient == null ? void 0 : patient.weight) != null ? String(patient.weight) : void 0,
            patientHeight: (patient == null ? void 0 : patient.height) != null ? Number(patient.height) : void 0,
            patientAddress: (patient == null ? void 0 : patient.address) ?? "",
            patientBloodGroup: (patient == null ? void 0 : patient.bloodGroup) ?? "",
            initialDiagnosis: editRx.diagnosis ?? void 0,
            patientRegisterNumber: patient.registerNumber || "",
            onSubmit: (data) => {
              createRxMutation.mutate(data, {
                onSuccess: () => {
                  ue.success("Prescription updated");
                  setEditRx(null);
                },
                onError: () => ue.error("Failed to update prescription")
              });
            },
            onCancel: () => setEditRx(null)
          }
        ),
        selectedRx && /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!selectedRx, onOpenChange: () => setSelectedRx(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-3xl max-h-[90vh] overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
            "Prescription — ",
            formatTime(selectedRx.prescriptionDate)
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Diagnosis:" }),
              " ",
              selectedRx.diagnosis || "—"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm mb-2", children: "Medications" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: selectedRx.medications.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-gray-50 rounded-lg p-3 text-sm",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold", children: [
                      i + 1,
                      ".",
                      " ",
                      m.drugForm || "",
                      " ",
                      m.drugName || m.name,
                      " ",
                      m.dose
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600", children: [
                      m.frequency,
                      " – ",
                      m.duration,
                      " ",
                      m.instructions ? `– ${m.instructions}` : ""
                    ] })
                  ]
                },
                `${m.name}-${i}`
              )) })
            ] }),
            selectedRx.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Notes:" }),
              " ",
              selectedRx.notes
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                onClick: () => downloadSinglePrescriptionPDF(selectedRx),
                children: "Download PDF"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setSelectedRx(null), children: "Close" })
          ] })
        ] }) }),
        selectedVisit && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Dialog,
          {
            open: !!selectedVisit,
            onOpenChange: () => setSelectedVisit(null),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-3xl max-h-[90vh] overflow-y-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
                "Visit — ",
                formatTime(selectedVisit.visitDate)
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-2 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Type:" }),
                  " ",
                  selectedVisit.visitType
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Chief Complaint:" }),
                  " ",
                  selectedVisit.chiefComplaint
                ] }),
                selectedVisit.diagnosis && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Diagnosis:" }),
                  " ",
                  selectedVisit.diagnosis
                ] }),
                selectedVisit.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Notes:" }),
                  " ",
                  selectedVisit.notes
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    onClick: () => {
                      openRxForm(selectedVisit.diagnosis, selectedVisit.id);
                      setSelectedVisit(null);
                    },
                    children: "Write Prescription"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    onClick: () => downloadSingleVisitPDF(selectedVisit),
                    children: "Download PDF"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setSelectedVisit(null), children: "Close" })
              ] })
            ] })
          }
        ),
        showPadPreview && padPrescription && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Dialog,
          {
            open: showPadPreview,
            onOpenChange: (open) => {
              if (!open) {
                setShowPadPreview(false);
                setPadPrescription(null);
              }
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "max-w-[98vw] max-h-[95vh] overflow-y-auto p-0 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              PrescriptionPadPreview,
              {
                prescription: padPrescription,
                patientName: patient == null ? void 0 : patient.fullName,
                patientId: patientId ?? void 0,
                sex: patient == null ? void 0 : patient.gender,
                onClose: () => {
                  setShowPadPreview(false);
                  setPadPrescription(null);
                  loadSavedPads();
                }
              }
            ) })
          }
        ),
        showAdmitDialog && patientId && /* @__PURE__ */ jsxRuntimeExports.jsx(
          AdmitPatientDialog,
          {
            open: showAdmitDialog,
            onClose: () => setShowAdmitDialog(false),
            patient,
            patientId,
            viewerRole,
            doctorName,
            latestVisit,
            latestPrescription
          }
        ),
        showDischargeConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Dialog,
          {
            open: showDischargeConfirm,
            onOpenChange: setShowDischargeConfirm,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DialogContent,
              {
                className: "max-w-sm",
                "data-ocid": "patient_dashboard.discharge.dialog",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2 text-rose-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-5 h-5" }),
                    " Discharge Patient"
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                    "Are you sure you want to discharge",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: patient.fullName }),
                    " from hospital? The admission record will be marked as discharged."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-end mt-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        variant: "outline",
                        onClick: () => setShowDischargeConfirm(false),
                        children: "Cancel"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        className: "bg-rose-600 hover:bg-rose-700 text-white",
                        onClick: () => {
                          if (!patientId) return;
                          dischargeMutation.mutate(
                            {
                              patientId,
                              dischargedBy: doctorName,
                              dischargedByRole: viewerRole ?? "consultant_doctor"
                            },
                            {
                              onSuccess: () => {
                                ue.success(
                                  `${patient.fullName} has been discharged.`
                                );
                                setShowDischargeConfirm(false);
                              },
                              onError: () => ue.error("Failed to discharge patient.")
                            }
                          );
                        },
                        disabled: dischargeMutation.isPending,
                        "data-ocid": "patient_dashboard.discharge.confirm_button",
                        children: dischargeMutation.isPending ? "Discharging..." : "Confirm Discharge"
                      }
                    )
                  ] })
                ]
              }
            )
          }
        )
      ]
    }
  );
}
export {
  PatientDashboard as default
};
