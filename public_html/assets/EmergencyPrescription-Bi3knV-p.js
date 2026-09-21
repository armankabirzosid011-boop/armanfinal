import { i as createLucideIcon, q as useEmailAuth, r as reactExports, y as useGetAllPatients, aj as useCreateVisit, ak as useCreatePrescription, x as useCreatePatient, j as jsxRuntimeExports, B as Button, al as Siren, X, z as LoaderCircle, ab as TriangleAlert, I as Input, am as User, h as Badge, c as Clock, b as CircleCheck, P as ShieldAlert, u as ue, an as appendAuditLog, L as Label, ao as ChevronRight, D as Dialog, s as DialogContent, t as DialogHeader, v as DialogTitle, ap as getDoctorEmail, aq as addEmergencyNotification } from "./index-DJeWhCy-.js";
import { S as ScrollArea } from "./scroll-area-DUDQuZCi.js";
import { g as getAllergiesForPatient, S as Separator, c as checkDrugAllergyMatch, a as getPrescriptionHeaderHtml, n as numberAdviceLines } from "./UpgradedPrescriptionEMR-CvNofdGu.js";
import { T as Textarea } from "./textarea-BQiWEu5n.js";
import { A as ArrowLeft } from "./arrow-left-D0QK_o3f.js";
import { P as Printer } from "./printer-BQUreT8L.js";
import { S as Search } from "./search-BLymxia-.js";
import { U as UserPlus } from "./user-plus-BJkC4ige.js";
import { F as FileText } from "./file-text-DJrK52te.js";
import { C as Calendar } from "./calendar-BL7xJRSg.js";
import { f as format } from "./format-C8K1a6Fc.js";
import { A as Activity } from "./activity-BRRgo98q.js";
import { C as CircleAlert } from "./circle-alert-3N-VW3xt.js";
import { P as Plus } from "./plus-CHPIrJ6M.js";
import { I as Info } from "./info-DjKKOoM3.js";
import { P as Pencil } from "./pencil-BZAaPpo6.js";
import { T as Trash2 } from "./trash-2-B3l-ZhdV.js";
import "./whatsappTemplates-BiipONU2.js";
import "./test-tube-AQ_p65EL.js";
import "./message-square-gLkdQm4U.js";
import "./skeleton-DqU5IOMD.js";
import "./eye-DZPhoU57.js";
import "./building-2-CMX9_teL.js";
import "./upload-10Urw3kY.js";
import "./sun-7_ce8Kaj.js";
import "./save-DzMd4SiT.js";
import "./sparkles-BXWJULex.js";
import "./external-link-YRWS9f1T.js";
import "./download-qc_8yQ5r.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const DRUG_FORMS = [
  "Tab.",
  "Cap.",
  "Syp.",
  "Inj.",
  "Inf.",
  "Supp.",
  "Oint.",
  "Drop",
  "Cream",
  "Gel",
  ""
];
const ROUTES_BN = [
  { en: "PO", bn: "মুখে" },
  { en: "IV", bn: "শিরায়" },
  { en: "IM", bn: "মাংসপেশিতে" },
  { en: "SC", bn: "চামড়ার নিচে" },
  { en: "Topical", bn: "স্থানীয়" },
  { en: "Rectal", bn: "মলদ্বারে" },
  { en: "SL", bn: "জিহ্বার নিচে" },
  { en: "Inhalation", bn: "শ্বাসের মাধ্যমে" },
  { en: "Nasal", bn: "নাকে" }
];
const FREQUENCY_PRESETS = [
  { en: "Once daily", bn: "দিনে ১ বার" },
  { en: "BD 1+0+1", bn: "সকাল-রাত ১+০+১" },
  { en: "TDS 1+1+1", bn: "সকাল-দুপুর-রাত ১+১+১" },
  { en: "QDS 1+1+1+1", bn: "৬ ঘণ্টা পর পর" },
  { en: "8 hourly", bn: "৮ ঘণ্টা পর পর" },
  { en: "12 hourly", bn: "১২ ঘণ্টা পর পর" },
  { en: "STAT", bn: "এখনই" },
  { en: "At night", bn: "রাতে ঘুমানোর আগে" },
  { en: "SOS", bn: "প্রয়োজনে" }
];
const DURATION_PRESETS = [
  { en: "1 day", bn: "১ দিন" },
  { en: "3 days", bn: "৩ দিন" },
  { en: "5 days", bn: "৫ দিন" },
  { en: "7 days", bn: "৭ দিন" },
  { en: "14 days", bn: "১৪ দিন" },
  { en: "1 month", bn: "১ মাস" },
  { en: "Continue", bn: "চলমান" }
];
const INSTRUCTION_PRESETS = [
  { en: "After meal", bn: "খাবার পরে" },
  { en: "Before meal", bn: "খাবার আগে" },
  { en: "Empty stomach", bn: "খালি পেটে" },
  { en: "With water", bn: "পানির সাথে" }
];
const ADVICE_TEMPLATES = [
  "Rest and plenty of fluids.",
  "Avoid self-medication.",
  "Follow-up if not improved within 48 hours.",
  "Avoid spicy/oily food.",
  "Monitor blood pressure daily.",
  "Do not drive or operate heavy machinery.",
  "Take medicines after food.",
  "Return immediately if symptoms worsen.",
  "Complete the full course of antibiotics.",
  "Keep wounds clean and dry."
];
const EMERGENCY_TEMPLATES = {
  anaphylaxis: {
    label: "Anaphylaxis",
    drugs: [
      {
        drugForm: "Inj.",
        drugName: "Adrenaline (Epinephrine)",
        dose: "0.5mg",
        route: "IM",
        frequency: "STAT"
      },
      {
        drugForm: "Inj.",
        drugName: "Hydrocortisone",
        dose: "200mg",
        route: "IV",
        frequency: "STAT",
        ivImDoseFormat: "single"
      },
      {
        drugForm: "Inj.",
        drugName: "Chlorphenamine",
        dose: "10mg",
        route: "IV",
        frequency: "STAT"
      },
      {
        drugForm: "Inf.",
        drugName: "Normal Saline 0.9%",
        dose: "1000mL",
        route: "IV",
        frequency: "STAT (rapid infusion)"
      }
    ]
  },
  chest_pain: {
    label: "Acute Chest Pain",
    drugs: [
      {
        drugForm: "Tab.",
        drugName: "Aspirin",
        dose: "300mg",
        route: "PO",
        frequency: "STAT"
      },
      {
        drugForm: "Tab.",
        drugName: "GTN (Glyceryl Trinitrate)",
        dose: "0.5mg",
        route: "SL",
        frequency: "SOS",
        isPrn: true,
        prnCondition: "If chest pain persists"
      },
      {
        drugForm: "Inj.",
        drugName: "Morphine",
        dose: "2-5mg",
        route: "IV",
        frequency: "STAT",
        ivImDoseFormat: "single"
      },
      {
        drugForm: "Inj.",
        drugName: "Metoclopramide",
        dose: "10mg",
        route: "IV",
        frequency: "STAT"
      }
    ]
  },
  acute_asthma: {
    label: "Acute Asthma",
    drugs: [
      {
        drugForm: "Inj.",
        drugName: "Salbutamol nebuliser",
        dose: "2.5mg",
        route: "Inhalation",
        frequency: "Q20min x 3"
      },
      {
        drugForm: "Inj.",
        drugName: "Ipratropium nebuliser",
        dose: "0.5mg",
        route: "Inhalation",
        frequency: "STAT"
      },
      {
        drugForm: "Inj.",
        drugName: "Hydrocortisone",
        dose: "200mg",
        route: "IV",
        frequency: "STAT",
        ivImDoseFormat: "single"
      }
    ]
  },
  seizure: {
    label: "Seizure",
    drugs: [
      {
        drugForm: "Inj.",
        drugName: "Diazepam",
        dose: "10mg",
        route: "IV",
        frequency: "STAT",
        ivImDoseFormat: "single"
      },
      {
        drugForm: "Inj.",
        drugName: "Lorazepam",
        dose: "4mg",
        route: "IV",
        frequency: "STAT"
      },
      {
        drugForm: "Inj.",
        drugName: "Phenytoin",
        dose: "1000mg",
        route: "IV",
        frequency: "STAT",
        ivImDoseFormat: "loading-maintenance",
        loadingDose: "1000mg IV over 20 min",
        maintenanceDose: "100mg 8 hourly"
      }
    ]
  },
  hypertensive_crisis: {
    label: "Hypertensive Crisis",
    drugs: [
      {
        drugForm: "Inj.",
        drugName: "Labetalol",
        dose: "20mg",
        route: "IV",
        frequency: "STAT",
        ivImDoseFormat: "single"
      },
      {
        drugForm: "Cap.",
        drugName: "Nifedipine",
        dose: "10mg",
        route: "SL",
        frequency: "SOS",
        isPrn: true,
        prnCondition: "If BP > 180/120 mmHg"
      },
      {
        drugForm: "Inj.",
        drugName: "Frusemide",
        dose: "40mg",
        route: "IV",
        frequency: "STAT"
      }
    ]
  },
  hypoglycemia: {
    label: "Hypoglycemia",
    drugs: [
      {
        drugForm: "Inj.",
        drugName: "Dextrose 50%",
        dose: "50mL",
        route: "IV",
        frequency: "STAT",
        ivImDoseFormat: "single"
      },
      {
        drugForm: "Inj.",
        drugName: "Glucagon",
        dose: "1mg",
        route: "IM",
        frequency: "STAT"
      }
    ]
  }
};
function mkId() {
  return `rx-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}
function emptyDrug() {
  return {
    id: mkId(),
    drugForm: "Tab.",
    route: "PO",
    routeBn: "মুখে",
    drugName: "",
    brandName: "",
    dose: "",
    duration: "",
    durationBn: "",
    instructions: "",
    instructionBn: "",
    frequency: "",
    frequencyBn: "",
    specialInstruction: "",
    specialInstructionBn: ""
  };
}
function getAge(dateOfBirth) {
  if (!dateOfBirth) return null;
  const dob = new Date(Number(dateOfBirth / 1000000n));
  return Math.floor((Date.now() - dob.getTime()) / (365.25 * 24 * 3600 * 1e3));
}
function parseAgeToApproxDob(ageStr) {
  const age = Number.parseInt(ageStr, 10);
  if (Number.isNaN(age) || age < 0 || age > 130) return null;
  const year = (/* @__PURE__ */ new Date()).getFullYear() - age;
  return BigInt((/* @__PURE__ */ new Date(`${year}-01-01`)).getTime()) * 1000000n;
}
function defaultValidUntil() {
  const d = /* @__PURE__ */ new Date();
  d.setDate(d.getDate() + 30);
  return d.toISOString().slice(0, 10);
}
const KNOWN_INTERACTIONS = [
  ["warfarin", "aspirin", "Increased bleeding risk — use caution."],
  ["warfarin", "ibuprofen", "Increased bleeding risk — use caution."],
  [
    "metformin",
    "contrast",
    "Hold metformin 48h before/after iodinated contrast."
  ],
  ["ssri", "tramadol", "Risk of serotonin syndrome — monitor closely."],
  ["digoxin", "amiodarone", "Digoxin toxicity risk — reduce digoxin dose."],
  [
    "clopidogrel",
    "omeprazole",
    "Reduced antiplatelet effect — prefer pantoprazole."
  ],
  [
    "methotrexate",
    "nsaid",
    "Methotrexate toxicity risk — avoid concurrent use."
  ],
  ["quinolone", "antacid", "Impaired quinolone absorption — separate by 2h."]
];
function checkDrugInteractions(drugs) {
  const names = drugs.map((d) => `${d.drugName} ${d.brandName}`.toLowerCase());
  const warnings = [];
  for (const [a, b, msg] of KNOWN_INTERACTIONS) {
    const hasA = names.some((n) => n.includes(a));
    const hasB = names.some((n) => n.includes(b));
    if (hasA && hasB) warnings.push(msg);
  }
  return [...new Set(warnings)];
}
function printEmergencyPrescription(opts) {
  var _a;
  const {
    patient,
    age,
    doctor,
    emergencyDateTime,
    cc,
    hpi,
    pmh,
    dh,
    oe,
    diagnosis,
    drugs,
    adviceText,
    counselling,
    followUpDate,
    validUntil,
    isNewPatient
  } = opts;
  const headerHtml = getPrescriptionHeaderHtml("chamber", {
    doctorName: (doctor == null ? void 0 : doctor.name) ?? "Doctor",
    specialization: (doctor == null ? void 0 : doctor.specialization) ?? "",
    phone: (doctor == null ? void 0 : doctor.phone) ?? ""
  });
  const drugsHtml = drugs.filter((d) => d.drugName.trim()).map(
    (d, i) => `
    <tr style="border-bottom:1px solid #e5e7eb;">
      <td style="padding:4px 6px;font-weight:600;color:#dc2626;">${i + 1}.</td>
      <td style="padding:4px 6px;">${d.drugForm} <strong>${d.drugName}</strong>${d.brandName ? ` (${d.brandName})` : ""}${d.isControlled ? ' <span style="color:#dc2626;font-weight:bold;">[CONTROLLED]</span>' : ""}${d.isPrn ? ' <em style="color:#6b7280;">[PRN]</em>' : ""}</td>
      <td style="padding:4px 6px;">${d.dose}</td>
      <td style="padding:4px 6px;">${d.route}${d.routeBn ? ` / ${d.routeBn}` : ""}</td>
      <td style="padding:4px 6px;">${d.isPrn ? `PRN${d.prnCondition ? ` — ${d.prnCondition}` : ""}` : `${d.frequency}${d.frequencyBn ? ` / ${d.frequencyBn}` : ""}`}</td>
      <td style="padding:4px 6px;">${d.isPrn ? "–" : `${d.duration}${d.durationBn ? ` / ${d.durationBn}` : ""}`}</td>
      <td style="padding:4px 6px;color:#6b7280;">${d.instructions}${d.instructionBn ? ` / ${d.instructionBn}` : ""}${d.specialInstruction ? `<br/><em>${d.specialInstruction}</em>` : ""}${d.titrationEnabled ? `<br/><strong>Titration:</strong> ${d.titrationStage1Dose || ""} × ${d.titrationStage1Duration || ""} → ${d.titrationStage2Dose || ""} × ${d.titrationStage2Duration || ""}` : ""}</td>
    </tr>`
  ).join("");
  const adviceHtml = numberAdviceLines(adviceText).split("\n").filter(Boolean).map((l) => `<li>${l}</li>`).join("");
  const win = window.open("", "_blank");
  if (!win) return;
  win.document.write(`<!DOCTYPE html><html><head>
    <meta charset="utf-8"/>
    <title>Emergency Prescription — ${patient.fullName}</title>
    <style>
      @media print { @page { margin: 12mm 15mm; } }
      body { font-family: 'Segoe UI', sans-serif; font-size: 12px; color: #111827; margin:0; }
      .emergency-stamp { background: linear-gradient(90deg,#dc2626,#ea580c); color:white; padding:6px 16px; border-radius:6px; font-weight:700; letter-spacing:1px; display:inline-block; margin-bottom:8px; }
      .section-title { font-weight:700; font-size:10px; text-transform:uppercase; color:#6b7280; border-bottom:1px solid #e5e7eb; padding-bottom:2px; margin-bottom:4px; margin-top:10px; }
      table.rx-table { width:100%; border-collapse:collapse; margin-top:6px; }
      table.rx-table th { background:#fef2f2; color:#991b1b; font-size:10px; padding:4px 6px; text-align:left; border-bottom:2px solid #fca5a5; }
      .valid-banner { border:1px solid #d97706; background:#fffbeb; padding:4px 10px; border-radius:4px; font-size:11px; }
    </style>
  </head><body>
    ${headerHtml}
    <div style="display:flex;justify-content:space-between;align-items:flex-start;">
      <div>
        <span class="emergency-stamp">🚨 EMERGENCY PRESCRIPTION</span>${isNewPatient ? ' <span style="background:#dbeafe;color:#1e40af;padding:2px 8px;border-radius:4px;font-size:10px;font-weight:600;">NEW PATIENT — Emergency Registration</span>' : ""}
        <div style="font-size:11px;color:#6b7280;margin-top:4px;">Date: ${format(emergencyDateTime, "dd MMM yyyy, HH:mm")} &nbsp;|&nbsp; Prescribing doctor: ${(doctor == null ? void 0 : doctor.name) ?? "Doctor"}</div>
      </div>
    </div>

    <div style="background:#fef2f2;border:1px solid #fca5a5;border-radius:6px;padding:8px 12px;margin:10px 0;display:flex;gap:24px;flex-wrap:wrap;">
      <div><strong>${patient.fullName}</strong>${age !== null ? ` — ${age} yrs` : ""} ${patient.gender ? `/ ${patient.gender}` : ""}</div>
      ${patient.registerNumber ? `<div>Reg: <strong>${patient.registerNumber}</strong></div>` : ""}
      ${patient.phone ? `<div>Ph: ${patient.phone}</div>` : ""}
      ${patient.bloodGroup ? `<div style="color:#b91c1c;font-weight:600;">Blood: ${patient.bloodGroup}</div>` : ""}
      ${((_a = patient.allergies) == null ? void 0 : _a.length) > 0 ? `<div style="color:#b91c1c;"><strong>⚠️ Allergies:</strong> ${patient.allergies.join(", ")}</div>` : ""}
    </div>

    <div style="display:grid;grid-template-columns:1fr 2fr;gap:16px;">
      <div>
        ${cc ? `<div class="section-title">Chief Complaint / C/C</div><p style="margin:0;">${cc.replace(/\n/g, "<br/>")}</p>` : ""}
        ${hpi ? `<div class="section-title">History of Present Illness</div><p style="margin:0;">${hpi.replace(/\n/g, "<br/>")}</p>` : ""}
        ${pmh ? `<div class="section-title">Past Medical History / P/M/H</div><p style="margin:0;">${pmh.replace(/\n/g, "<br/>")}</p>` : ""}
        ${dh ? `<div class="section-title">Drug History / D/H</div><p style="margin:0;">${dh.replace(/\n/g, "<br/>")}</p>` : ""}
        ${oe ? `<div class="section-title">On Examination / O/E</div><p style="margin:0;">${oe.replace(/\n/g, "<br/>")}</p>` : ""}
      </div>
      <div>
        <div class="section-title" style="color:#b91c1c;">Diagnosis</div>
        <p style="font-weight:700;margin:0 0 8px;">${diagnosis || "—"}</p>
        <div class="section-title" style="color:#b91c1c;font-size:14px;">℞ Medications</div>
        <table class="rx-table">
          <thead><tr>
            <th>#</th><th>Drug</th><th>Dose</th><th>Route</th><th>Frequency</th><th>Duration</th><th>Instructions</th>
          </tr></thead>
          <tbody>${drugsHtml}</tbody>
        </table>
        ${adviceHtml ? `<div class="section-title">Advice</div><ol style="margin:0;padding-left:18px;">${adviceHtml}</ol>` : ""}
        ${counselling ? `<div class="section-title">Patient Counselling</div><p style="margin:0;">${counselling.replace(/\n/g, "<br/>")}</p>` : ""}
      </div>
    </div>

    <div style="display:flex;gap:24px;flex-wrap:wrap;margin-top:12px;">
      ${followUpDate ? `<div style="background:#f0fdf4;border:1px solid #86efac;padding:4px 12px;border-radius:4px;">Follow-up: <strong>${format(new Date(followUpDate), "dd MMM yyyy")}</strong></div>` : ""}
      ${validUntil ? `<div class="valid-banner">Valid until: <strong>${format(new Date(validUntil), "dd MMM yyyy")}</strong></div>` : ""}
    </div>

    <div style="margin-top:20px;padding-top:12px;border-top:1px solid #e5e7eb;display:flex;justify-content:space-between;">
      <div>
        <div style="font-size:10px;color:#6b7280;">Doctor's Signature</div>
        <div style="width:140px;border-bottom:1px solid #374151;margin-top:24px;"></div>
        <div style="font-size:10px;margin-top:2px;">${(doctor == null ? void 0 : doctor.name) ?? ""}</div>
      </div>
      <div style="text-align:center;">
        <div style="background:#fee2e2;border:2px solid #fca5a5;border-radius:6px;padding:4px 16px;">
          <div style="font-weight:700;color:#dc2626;font-size:11px;">🚨 EMERGENCY</div>
          <div style="font-size:9px;color:#b91c1c;">Auto-created visit record</div>
        </div>
      </div>
    </div>

    <script>setTimeout(()=>window.print(),400);<\/script>
  </body></html>`);
  win.document.close();
}
function EmergencyPrescription() {
  var _a, _b;
  const { currentDoctor } = useEmailAuth();
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [selectedPatient, setSelectedPatient] = reactExports.useState(null);
  const [showResults, setShowResults] = reactExports.useState(false);
  const [isNewPatient, setIsNewPatient] = reactExports.useState(false);
  const searchRef = reactExports.useRef(null);
  const { data: allPatients = [], isLoading: loadingPatients } = useGetAllPatients();
  const filteredPatients = reactExports.useMemo(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) return [];
    const q = searchQuery.toLowerCase();
    return allPatients.filter(
      (p) => {
        var _a2, _b2, _c;
        return ((_a2 = p.fullName) == null ? void 0 : _a2.toLowerCase().includes(q)) || ((_b2 = p.registerNumber) == null ? void 0 : _b2.toLowerCase().includes(q)) || ((_c = p.phone) == null ? void 0 : _c.includes(q));
      }
    ).slice(0, 10);
  }, [allPatients, searchQuery]);
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const [visitId, setVisitId] = reactExports.useState(null);
  const [emergencyDateTime, setEmergencyDateTime] = reactExports.useState(/* @__PURE__ */ new Date());
  reactExports.useEffect(() => {
    if (selectedPatient) setEmergencyDateTime(/* @__PURE__ */ new Date());
  }, [selectedPatient]);
  const age = selectedPatient ? getAge(selectedPatient.dateOfBirth) : null;
  const [cc, setCc] = reactExports.useState("");
  const [hpi, setHpi] = reactExports.useState("");
  const [pmh, setPmh] = reactExports.useState("");
  const [dh, setDh] = reactExports.useState("");
  const [oe, setOe] = reactExports.useState("");
  const [diagnosis, setDiagnosis] = reactExports.useState("");
  const [drugs, setDrugs] = reactExports.useState([emptyDrug()]);
  const [editingId, setEditingId] = reactExports.useState(null);
  const [df, setDf] = reactExports.useState("Tab.");
  const [dRoute, setDRoute] = reactExports.useState("PO");
  const [dName, setDName] = reactExports.useState("");
  const [dBrand, setDBrand] = reactExports.useState("");
  const [dDose, setDDose] = reactExports.useState("");
  const [dFreq, setDFreq] = reactExports.useState("");
  const [dFreqBn, setDFreqBn] = reactExports.useState("");
  const [dDur, setDDur] = reactExports.useState("");
  const [dDurBn, setDDurBn] = reactExports.useState("");
  const [dInstr, setDInstr] = reactExports.useState("");
  const [dInstrBn, setDInstrBn] = reactExports.useState("");
  const [dSpecial, setDSpecial] = reactExports.useState("");
  const [dSpecialBn, setDSpecialBn] = reactExports.useState("");
  const [dPrn, setDPrn] = reactExports.useState(false);
  const [dPrnCond, setDPrnCond] = reactExports.useState("");
  const [dControlled, setDControlled] = reactExports.useState(false);
  const [dControlledJust, setDControlledJust] = reactExports.useState("");
  const [dDispensedAs, setDDispensedAs] = reactExports.useState("");
  const [dSubBrand, setDSubBrand] = reactExports.useState("");
  const [dTitration, setDTitration] = reactExports.useState(false);
  const [dTit1Dose, setDTit1Dose] = reactExports.useState("");
  const [dTit1Dur, setDTit1Dur] = reactExports.useState("");
  const [dTit2Dose, setDTit2Dose] = reactExports.useState("");
  const [dTit2Dur, setDTit2Dur] = reactExports.useState("");
  const [dIvImDoseFormat, setDIvImDoseFormat] = reactExports.useState("");
  const [dLoadingDose, setDLoadingDose] = reactExports.useState("");
  const [dMaintenanceDose, setDMaintenanceDose] = reactExports.useState("");
  const [dInfusionRate, setDInfusionRate] = reactExports.useState("");
  const [dInfusionUnit, setDInfusionUnit] = reactExports.useState(
    "mg/hr"
  );
  const [showTemplateDropdown, setShowTemplateDropdown] = reactExports.useState(false);
  const [templateWarningShown, setTemplateWarningShown] = reactExports.useState(false);
  const [showVitalsStrip, setShowVitalsStrip] = reactExports.useState(true);
  const [vBpSys, setVBpSys] = reactExports.useState("");
  const [vBpDia, setVBpDia] = reactExports.useState("");
  const [vPulse, setVPulse] = reactExports.useState("");
  const [vSpo2, setVSpo2] = reactExports.useState("");
  const [vRbs, setVRbs] = reactExports.useState("");
  const [vTemp, setVTemp] = reactExports.useState("");
  const [vGcs, setVGcs] = reactExports.useState("");
  const [vWeight, setVWeight] = reactExports.useState("");
  const [nextAction, setNextAction] = reactExports.useState("");
  const [nextActionCompleted, setNextActionCompleted] = reactExports.useState(false);
  const [referSpecialist, setReferSpecialist] = reactExports.useState("");
  const [referHospital, setReferHospital] = reactExports.useState("");
  const [referReason, setReferReason] = reactExports.useState("");
  const [dischargeInstructions, setDischargeInstructions] = reactExports.useState("");
  const [emergencyTimeOverride, setEmergencyTimeOverride] = reactExports.useState("");
  const unifiedAllergies = reactExports.useMemo(
    () => getAllergiesForPatient((selectedPatient == null ? void 0 : selectedPatient.allergies) ?? []),
    [selectedPatient]
  );
  const [allergyAlert, setAllergyAlert] = reactExports.useState(null);
  const [showOverride, setShowOverride] = reactExports.useState(false);
  const [overrideJust, setOverrideJust] = reactExports.useState("");
  const interactionWarnings = reactExports.useMemo(
    () => checkDrugInteractions(drugs),
    [drugs]
  );
  const [adviceText, setAdviceText] = reactExports.useState("");
  const [counselling, setCounselling] = reactExports.useState("");
  const [followUpDate, setFollowUpDate] = reactExports.useState("");
  const [validUntil, setValidUntil] = reactExports.useState(defaultValidUntil);
  const [saving, setSaving] = reactExports.useState(false);
  const [finalized, setFinalized] = reactExports.useState(false);
  const [_savedPrescriptionId, setSavedPrescriptionId] = reactExports.useState(null);
  const createVisitMutation = useCreateVisit();
  const createRxMutation = useCreatePrescription();
  const [showNewPatientModal, setShowNewPatientModal] = reactExports.useState(false);
  const [npForm, setNpForm] = reactExports.useState({
    fullName: "",
    ageStr: "",
    dobStr: "",
    gender: "male",
    phone: "",
    bloodGroup: "",
    allergies: "",
    chronicConditions: ""
  });
  const [npDupWarning, setNpDupWarning] = reactExports.useState(null);
  const [npSaving, setNpSaving] = reactExports.useState(false);
  const createPatientMutation = useCreatePatient();
  const draftKey = selectedPatient ? `emrx_draft_${selectedPatient.id}` : null;
  const saveDraft = reactExports.useCallback(() => {
    if (!draftKey) return;
    try {
      localStorage.setItem(
        draftKey,
        JSON.stringify({
          cc,
          hpi,
          pmh,
          dh,
          oe,
          diagnosis,
          drugs,
          adviceText,
          counselling,
          followUpDate,
          validUntil
        })
      );
    } catch {
    }
  }, [
    draftKey,
    cc,
    hpi,
    pmh,
    dh,
    oe,
    diagnosis,
    drugs,
    adviceText,
    counselling,
    followUpDate,
    validUntil
  ]);
  const debRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (debRef.current) clearTimeout(debRef.current);
    debRef.current = setTimeout(saveDraft, 1200);
  }, [saveDraft]);
  const patientIdStr = selectedPatient ? String(selectedPatient.id) : null;
  reactExports.useEffect(() => {
    if (!selectedPatient || !draftKey) return;
    try {
      const raw = localStorage.getItem(draftKey);
      if (!raw) return;
      const d = JSON.parse(raw);
      if (d.cc) setCc(d.cc);
      if (d.hpi) setHpi(d.hpi);
      if (d.pmh) setPmh(d.pmh);
      if (d.dh) setDh(d.dh);
      if (d.oe) setOe(d.oe);
      if (d.diagnosis) setDiagnosis(d.diagnosis);
      if (d.drugs && Array.isArray(d.drugs) && d.drugs.length > 0)
        setDrugs(d.drugs);
      if (d.adviceText) setAdviceText(d.adviceText);
      if (d.counselling) setCounselling(d.counselling);
      if (d.followUpDate) setFollowUpDate(d.followUpDate);
      if (d.validUntil) setValidUntil(d.validUntil);
    } catch {
    }
  }, [patientIdStr, draftKey]);
  function parseDays(s) {
    if (!s) return 0;
    const low = s.toLowerCase();
    if (low.includes("month")) return (Number.parseFloat(low) || 1) * 30;
    if (low.includes("week")) return (Number.parseFloat(low) || 1) * 7;
    const n = Number.parseFloat(low);
    return Number.isNaN(n) ? 0 : n;
  }
  const maxDrugDays = drugs.filter((d) => !d.isPrn).reduce((m, d) => Math.max(m, parseDays(d.duration)), 0);
  const followUpGap = followUpDate ? Math.round((new Date(followUpDate).getTime() - Date.now()) / 864e5) : null;
  const mismatchWarning = followUpDate && maxDrugDays > 0 && followUpGap !== null && followUpGap > maxDrugDays ? `Patient may run out of medication ${followUpGap - maxDrugDays} day(s) before follow-up.` : null;
  function resetDrugForm() {
    setDf("Tab.");
    setDRoute("PO");
    setDName("");
    setDBrand("");
    setDDose("");
    setDFreq("");
    setDFreqBn("");
    setDDur("");
    setDDurBn("");
    setDInstr("");
    setDInstrBn("");
    setDSpecial("");
    setDSpecialBn("");
    setDPrn(false);
    setDPrnCond("");
    setDControlled(false);
    setDControlledJust("");
    setDDispensedAs("");
    setDSubBrand("");
    setDTitration(false);
    setDTit1Dose("");
    setDTit1Dur("");
    setDTit2Dose("");
    setDTit2Dur("");
    setDIvImDoseFormat("");
    setDLoadingDose("");
    setDMaintenanceDose("");
    setDInfusionRate("");
    setDInfusionUnit("mg/hr");
    setEditingId(null);
  }
  function loadDrugForEdit(drug) {
    setDf(drug.drugForm || "Tab.");
    setDRoute(drug.route || "PO");
    setDName(drug.drugName);
    setDBrand(drug.brandName || "");
    setDDose(drug.dose || "");
    setDFreq(drug.frequency || "");
    setDFreqBn(drug.frequencyBn || "");
    setDDur(drug.duration || "");
    setDDurBn(drug.durationBn || "");
    setDInstr(drug.instructions || "");
    setDInstrBn(drug.instructionBn || "");
    setDSpecial(drug.specialInstruction || "");
    setDSpecialBn(drug.specialInstructionBn || "");
    setDPrn(drug.isPrn ?? false);
    setDPrnCond(drug.prnCondition || "");
    setDControlled(drug.isControlled ?? false);
    setDControlledJust(drug.controlledJustification || "");
    setDDispensedAs(drug.dispensedAs ?? "");
    setDSubBrand(drug.substitutedBrand || "");
    setDTitration(drug.titrationEnabled ?? false);
    setDTit1Dose(drug.titrationStage1Dose || "");
    setDTit1Dur(drug.titrationStage1Duration || "");
    setDTit2Dose(drug.titrationStage2Dose || "");
    setDTit2Dur(drug.titrationStage2Duration || "");
    setDIvImDoseFormat(drug.ivImDoseFormat ?? "");
    setDLoadingDose(drug.loadingDose || "");
    setDMaintenanceDose(drug.maintenanceDose || "");
    setDInfusionRate(drug.infusionRate || "");
    setDInfusionUnit(drug.infusionUnit ?? "mg/hr");
    setEditingId(drug.id);
    setTimeout(() => {
      var _a2;
      (_a2 = document.getElementById("emrx-drug-form")) == null ? void 0 : _a2.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }
  function commitDrug() {
    var _a2;
    if (!dName.trim()) {
      ue.error("Drug name is required.");
      return;
    }
    const matched = checkDrugAllergyMatch(dName.trim(), unifiedAllergies);
    const built = {
      id: editingId ?? mkId(),
      drugForm: df,
      route: dRoute,
      routeBn: ((_a2 = ROUTES_BN.find((r) => r.en === dRoute)) == null ? void 0 : _a2.bn) || "",
      drugName: dName.trim(),
      brandName: dBrand.trim(),
      dose: dDose,
      duration: dDur,
      durationBn: dDurBn,
      instructions: dInstr,
      instructionBn: dInstrBn,
      frequency: dFreq,
      frequencyBn: dFreqBn,
      specialInstruction: dSpecial,
      specialInstructionBn: dSpecialBn,
      isPrn: dPrn,
      prnCondition: dPrn ? dPrnCond : "",
      isControlled: dControlled,
      controlledJustification: dControlled ? dControlledJust : "",
      dispensedAs: dDispensedAs || void 0,
      substitutedBrand: dDispensedAs === "substituted" ? dSubBrand : void 0,
      titrationEnabled: dTitration,
      titrationStage1Dose: dTitration ? dTit1Dose : void 0,
      titrationStage1Duration: dTitration ? dTit1Dur : void 0,
      titrationStage2Dose: dTitration ? dTit2Dose : void 0,
      titrationStage2Duration: dTitration ? dTit2Dur : void 0,
      ivImDoseFormat: (dRoute === "IV" || dRoute === "IM") && dIvImDoseFormat ? dIvImDoseFormat : void 0,
      loadingDose: dIvImDoseFormat === "loading-maintenance" ? dLoadingDose : void 0,
      maintenanceDose: dIvImDoseFormat === "loading-maintenance" ? dMaintenanceDose : void 0,
      infusionRate: dIvImDoseFormat === "infusion" ? dInfusionRate : void 0,
      infusionUnit: dIvImDoseFormat === "infusion" ? dInfusionUnit : void 0
    };
    if (editingId) {
      setDrugs((prev) => prev.map((d) => d.id === editingId ? built : d));
    } else {
      setDrugs((prev) => [...prev, built]);
    }
    if (matched) {
      setAllergyAlert({ drugName: dName.trim(), allergen: matched });
      setShowOverride(false);
    }
    resetDrugForm();
  }
  function removeDrug(id) {
    setDrugs((prev) => prev.filter((d) => d.id !== id));
    if (editingId === id) resetDrugForm();
  }
  function checkDuplicate() {
    if (!npForm.phone.trim()) return;
    const dup = allPatients.find(
      (p) => p.phone === npForm.phone.trim()
    );
    if (dup) {
      setNpDupWarning(
        `A patient with this phone (${dup.fullName}, ${dup.registerNumber ?? ""}) already exists. You may still proceed to create a new record, or select the existing patient.`
      );
    } else {
      setNpDupWarning(null);
    }
  }
  async function handleNewPatientSave() {
    if (!npForm.fullName.trim()) {
      ue.error("Full name is required.");
      return;
    }
    if (!npForm.phone.trim()) {
      ue.error("Phone number is required.");
      return;
    }
    if (!npForm.gender) {
      ue.error("Gender is required.");
      return;
    }
    if (!npForm.ageStr && !npForm.dobStr) {
      ue.error("Age or date of birth is required.");
      return;
    }
    setNpSaving(true);
    try {
      let dob = null;
      if (npForm.dobStr) {
        dob = BigInt(new Date(npForm.dobStr).getTime()) * 1000000n;
      } else if (npForm.ageStr) {
        dob = parseAgeToApproxDob(npForm.ageStr);
      }
      const newPat = await createPatientMutation.mutateAsync({
        fullName: npForm.fullName.trim(),
        nameBn: null,
        dateOfBirth: dob,
        gender: npForm.gender,
        phone: npForm.phone.trim(),
        email: null,
        address: null,
        bloodGroup: npForm.bloodGroup.trim() || null,
        weight: null,
        height: null,
        allergies: npForm.allergies.split(",").map((s) => s.trim()).filter(Boolean),
        chronicConditions: npForm.chronicConditions.split(",").map((s) => s.trim()).filter(Boolean),
        pastSurgicalHistory: null,
        patientType: "emergency"
      });
      try {
        localStorage.setItem(`patient_reg_incomplete_${newPat.id}`, "true");
      } catch {
      }
      setSelectedPatient(newPat);
      setIsNewPatient(true);
      setShowNewPatientModal(false);
      setNpForm({
        fullName: "",
        ageStr: "",
        dobStr: "",
        gender: "male",
        phone: "",
        bloodGroup: "",
        allergies: "",
        chronicConditions: ""
      });
      ue.success(
        `New patient registered: ${newPat.fullName} (${newPat.registerNumber})`
      );
    } catch (err) {
      console.error(err);
      ue.error("Failed to register patient. Please try again.");
    } finally {
      setNpSaving(false);
    }
  }
  async function handleSave() {
    if (!selectedPatient) {
      ue.error("Please select a patient first.");
      return;
    }
    if (!cc.trim() && !diagnosis.trim()) {
      ue.error("Chief complaint or diagnosis is required.");
      return;
    }
    const validDrugs = drugs.filter((d) => d.drugName.trim());
    if (validDrugs.length === 0) {
      ue.error("Add at least one medication.");
      return;
    }
    if (dControlled && !dControlledJust.trim()) {
      ue.error("Legal justification required for controlled drug.");
      return;
    }
    setSaving(true);
    try {
      const now = BigInt(Date.now()) * 1000000n;
      const visitNano = now;
      const newVisit = await createVisitMutation.mutateAsync({
        patientId: selectedPatient.id,
        visitDate: visitNano,
        chiefComplaint: cc.trim() || diagnosis.trim(),
        historyOfPresentIllness: hpi.trim() || null,
        vitalSigns: vBpSys || vPulse || vSpo2 ? {
          bloodPressure: vBpSys && vBpDia ? `${vBpSys}/${vBpDia}` : vBpSys || void 0,
          pulse: vPulse || void 0,
          oxygenSaturation: vSpo2 || void 0,
          temperature: vTemp || void 0,
          weight: vWeight || void 0,
          gcs: vGcs || void 0,
          rbs: vRbs || void 0
        } : {},
        physicalExamination: oe.trim() || null,
        diagnosis: diagnosis.trim() || null,
        notes: adviceText.trim() || null,
        visitType: "emergency"
      });
      setVisitId(newVisit.id.toString());
      const medications = validDrugs.map((d) => ({
        name: `${d.drugForm ? `${d.drugForm} ` : ""}${d.drugName}${d.brandName ? ` (${d.brandName})` : ""}`,
        dose: d.dose,
        frequency: d.isPrn ? `PRN${d.prnCondition ? ` — ${d.prnCondition}` : ""}` : d.frequencyBn ? `${d.frequency} / ${d.frequencyBn}` : d.frequency,
        duration: d.isPrn ? "" : d.durationBn ? `${d.duration} / ${d.durationBn}` : d.duration,
        instructions: d.instructionBn ? `${d.instructions} / ${d.instructionBn}` : d.instructions,
        drugForm: d.drugForm,
        drugName: d.drugName,
        route: d.route,
        routeBn: d.routeBn,
        frequencyBn: d.frequencyBn,
        durationBn: d.durationBn,
        specialInstruction: d.specialInstruction,
        specialInstructionBn: d.specialInstructionBn,
        isPrn: d.isPrn ? "true" : "false",
        prnCondition: d.prnCondition || "",
        // Extended fields stored as strings for index compat
        isControlled: d.isControlled ? "true" : "false",
        controlledJustification: d.controlledJustification || "",
        dispensedAs: d.dispensedAs || "",
        substitutedBrand: d.substitutedBrand || "",
        prescriptionType: "emergency"
      }));
      const noteParts = [];
      if (adviceText.trim()) noteParts.push(`ADVICE:
${adviceText.trim()}`);
      if (counselling.trim())
        noteParts.push(`COUNSELLING:
${counselling.trim()}`);
      const newRx = await createRxMutation.mutateAsync({
        patientId: selectedPatient.id,
        visitId: newVisit.id,
        prescriptionDate: now,
        diagnosis: diagnosis.trim() || null,
        medications,
        notes: noteParts.join("\n\n") || null
      });
      const extKey = `prescription_ext_${newRx.id}`;
      localStorage.setItem(
        extKey,
        JSON.stringify({
          prescriptionType: "emergency",
          isNewPatient,
          validUntil,
          followUpDate,
          counselling,
          finalizedAt: Date.now(),
          finalizedBy: getDoctorEmail(),
          chiefComplaintSnapshot: cc.trim(),
          diagnosisSnapshot: diagnosis.trim()
        })
      );
      if (draftKey) localStorage.removeItem(draftKey);
      addEmergencyNotification({
        type: "EMERGENCY_RX",
        patientId: selectedPatient.id.toString(),
        patientName: selectedPatient.fullName,
        prescriptionId: newRx.id.toString(),
        time: (/* @__PURE__ */ new Date()).toISOString(),
        acknowledged: false
      });
      setSavedPrescriptionId(newRx.id.toString());
      setFinalized(true);
      ue.success("Emergency prescription saved & finalized!", {
        description: `Patient: ${selectedPatient.fullName} | ${format(/* @__PURE__ */ new Date(), "dd MMM yyyy, HH:mm")}`,
        duration: 6e3
      });
    } catch (err) {
      console.error(err);
      ue.error("Failed to save prescription. Please try again.");
    } finally {
      setSaving(false);
    }
  }
  function handleClear() {
    setSelectedPatient(null);
    setSearchQuery("");
    setVisitId(null);
    setIsNewPatient(false);
    setCc("");
    setHpi("");
    setPmh("");
    setDh("");
    setOe("");
    setDiagnosis("");
    setDrugs([emptyDrug()]);
    setAdviceText("");
    setCounselling("");
    setFollowUpDate("");
    setValidUntil(defaultValidUntil());
    setFinalized(false);
    setSavedPrescriptionId(null);
    setAllergyAlert(null);
    resetDrugForm();
    setVBpSys("");
    setVBpDia("");
    setVPulse("");
    setVSpo2("");
    setVRbs("");
    setVTemp("");
    setVGcs("");
    setVWeight("");
    setNextAction("");
    setNextActionCompleted(false);
    setReferSpecialist("");
    setReferHospital("");
    setReferReason("");
    setDischargeInstructions("");
    setEmergencyTimeOverride("");
    setTemplateWarningShown(false);
  }
  function applyEmergencyTemplate(templateKey) {
    const tpl = EMERGENCY_TEMPLATES[templateKey];
    if (!tpl) return;
    const newDrugs = tpl.drugs.map((d) => {
      var _a2;
      return {
        id: mkId(),
        drugForm: d.drugForm,
        route: d.route,
        routeBn: ((_a2 = ROUTES_BN.find((r) => r.en === d.route)) == null ? void 0 : _a2.bn) || "",
        drugName: d.drugName,
        brandName: "",
        dose: d.dose,
        duration: "STAT",
        durationBn: "",
        instructions: "",
        instructionBn: "",
        frequency: d.frequency,
        frequencyBn: "",
        specialInstruction: "",
        specialInstructionBn: "",
        isPrn: d.isPrn ?? false,
        prnCondition: d.prnCondition || "",
        ivImDoseFormat: d.ivImDoseFormat,
        loadingDose: d.loadingDose || "",
        maintenanceDose: d.maintenanceDose || ""
      };
    });
    setDrugs(newDrugs);
    setShowTemplateDropdown(false);
    setTemplateWarningShown(true);
    ue.warning("Emergency template loaded — review doses before saving!", {
      description: "These are suggested protocols, not individual prescriptions.",
      duration: 7e3
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border sticky top-16 z-40 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1600px] mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "gap-1.5 text-muted-foreground hover:text-foreground shrink-0",
            onClick: () => {
              window.location.href = "/Dashboard";
            },
            "data-ocid": "emergency_rx.back.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Dashboard" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-px bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Siren, { className: "w-4 h-4 text-red-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold text-foreground text-sm leading-none truncate", children: "Emergency Prescription" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 hidden sm:block", children: "Fast-track emergency clinical order entry" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 shrink-0", children: selectedPatient && !finalized && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            className: "gap-1.5 text-muted-foreground h-8",
            onClick: () => printEmergencyPrescription({
              patient: selectedPatient,
              age,
              doctor: currentDoctor,
              emergencyDateTime,
              cc,
              hpi,
              pmh,
              dh,
              oe,
              diagnosis,
              drugs,
              adviceText,
              counselling,
              followUpDate,
              validUntil,
              isNewPatient
            }),
            "data-ocid": "emergency_rx.print.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Print" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            className: "gap-1.5 text-muted-foreground h-8",
            onClick: handleClear,
            "data-ocid": "emergency_rx.clear.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" }),
              "Clear"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "gap-1.5 bg-red-600 hover:bg-red-700 text-white font-semibold shadow-sm h-8",
            onClick: handleSave,
            disabled: saving,
            "data-ocid": "emergency_rx.save.primary_button",
            children: [
              saving ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3.5 h-3.5" }),
              saving ? "Saving..." : "Save & Finalize"
            ]
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1600px] mx-auto px-4 sm:px-6 py-4 space-y-4", children: [
      !selectedPatient && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "bg-card border border-border rounded-2xl p-6 shadow-sm",
          "data-ocid": "emergency_rx.patient_search.panel",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-7 h-7 text-red-600" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-foreground", children: "Emergency Prescription" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Search for an existing patient, or register a new emergency patient" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: searchRef, className: "relative flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: "Search by name, register no., or phone...",
                      value: searchQuery,
                      onChange: (e) => {
                        setSearchQuery(e.target.value);
                        setShowResults(true);
                      },
                      onFocus: () => setShowResults(true),
                      className: "pl-9 h-11 text-base border-red-200 focus:border-red-400",
                      autoFocus: true,
                      "data-ocid": "emergency_rx.patient_search.input"
                    }
                  ),
                  loadingPatients && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-muted-foreground" })
                ] }),
                showResults && filteredPatients.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-xl shadow-xl z-50 overflow-hidden", children: filteredPatients.map((p) => {
                  const pAge = getAge(p.dateOfBirth);
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "w-full flex items-center gap-3 px-4 py-3 hover:bg-muted/50 transition-colors text-left border-b border-border last:border-0",
                      onClick: () => {
                        setSelectedPatient(p);
                        setSearchQuery("");
                        setShowResults(false);
                        setIsNewPatient(false);
                      },
                      "data-ocid": "emergency_rx.patient_result.button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-red-100 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-red-600" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm truncate", children: p.fullName }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                            p.registerNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono mr-2", children: p.registerNumber }),
                            pAge != null && `${pAge}y`,
                            p.gender && ` · ${p.gender}`,
                            p.phone && ` · ${p.phone}`
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Badge,
                          {
                            variant: "outline",
                            className: "text-xs shrink-0",
                            children: p.patientType
                          }
                        )
                      ]
                    },
                    p.id.toString()
                  );
                }) }),
                showResults && searchQuery.length >= 2 && filteredPatients.length === 0 && !loadingPatients && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-xl shadow-xl z-50 p-4 text-sm text-muted-foreground text-center", children: [
                  'No patients found for "',
                  searchQuery,
                  '"'
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "h-11 px-4 gap-1.5 border-blue-300 text-blue-700 hover:bg-blue-50 shrink-0",
                  onClick: () => setShowNewPatientModal(true),
                  "data-ocid": "emergency_rx.new_patient.button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-4 h-4" }),
                    "New Patient"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "Visible to Consultant Doctors and Medical Officers only. All prescriptions are tagged EMERGENCY." })
          ] })
        }
      ),
      selectedPatient && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-xl p-3 flex flex-wrap items-center gap-3 shadow-md sticky top-[9.5rem] z-30",
          "data-ocid": "emergency_rx.emergency_bar",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Siren, { className: "w-4 h-4 text-white animate-pulse" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-white/25 text-white border-white/40 font-bold text-xs px-2 py-0.5 rounded-full", children: "🚨 EMERGENCY" }),
              isNewPatient && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-blue-500/80 text-white border-blue-300/40 text-xs px-2 py-0.5 rounded-full", children: "NEW PATIENT" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 flex flex-wrap items-center gap-x-4 gap-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5 opacity-80" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm", children: selectedPatient.fullName }),
                age != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs opacity-80", children: [
                  "(",
                  age,
                  "y)"
                ] }),
                selectedPatient.gender && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs opacity-70", children: [
                  "/ ",
                  selectedPatient.gender
                ] })
              ] }),
              selectedPatient.registerNumber && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs opacity-90", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3 h-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: selectedPatient.registerNumber })
              ] }),
              ((_a = selectedPatient.allergies) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs bg-white/20 rounded-full px-2 py-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3 text-yellow-200" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Allergies:",
                  " ",
                  selectedPatient.allergies.slice(0, 2).join(", "),
                  selectedPatient.allergies.length > 2 ? "..." : ""
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs opacity-80", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: format(emergencyDateTime, "dd MMM yyyy") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 ml-1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: format(emergencyDateTime, "HH:mm") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "time",
                    value: emergencyTimeOverride || format(emergencyDateTime, "HH:mm"),
                    onChange: (e) => setEmergencyTimeOverride(e.target.value),
                    className: "ml-1 bg-white/20 border border-white/40 rounded px-1 text-xs text-white w-20",
                    title: "Time of Emergency (editable)",
                    "data-ocid": "emergency_rx.emergency_time.input"
                  }
                )
              ] }),
              finalized && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-green-500 text-white border-green-400 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 mr-1" }),
                " Finalized"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
              visitId && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-7 px-3 text-xs bg-white/20 border-white/40 text-white hover:bg-white/30 gap-1",
                  onClick: () => {
                    window.location.href = `/Visit?id=${selectedPatient.id}`;
                  },
                  "data-ocid": "emergency_rx.view_visit.button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-3 h-3" }),
                    "View Visit"
                  ]
                }
              ),
              !finalized && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-7 px-3 text-xs bg-white/20 border-white/40 text-white hover:bg-white/30 gap-1",
                  onClick: handleClear,
                  "data-ocid": "emergency_rx.change_patient.button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }),
                    "Change"
                  ]
                }
              )
            ] })
          ]
        }
      ),
      allergyAlert && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-red-50 border-2 border-red-500 rounded-xl px-5 py-3 flex items-start gap-3",
          "data-ocid": "emergency_rx.allergy_alert.error_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-5 h-5 text-red-600 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-red-800", children: [
                "⚠️ Allergy Alert: ",
                allergyAlert.drugName
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-red-700 mt-0.5", children: [
                "This drug matches the patient's known allergy:",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: allergyAlert.allergen }),
                ". Clinical override required."
              ] }),
              showOverride ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "Clinical justification for override...",
                    value: overrideJust,
                    onChange: (e) => setOverrideJust(e.target.value),
                    className: "h-8 text-xs border-red-300 flex-1",
                    "data-ocid": "emergency_rx.allergy_override.input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    className: "h-8 text-xs bg-red-600 text-white",
                    onClick: () => {
                      if (!overrideJust.trim()) {
                        ue.error("Justification required.");
                        return;
                      }
                      appendAuditLog({
                        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                        userRole: (currentDoctor == null ? void 0 : currentDoctor.role) ?? "staff",
                        userName: (currentDoctor == null ? void 0 : currentDoctor.name) ?? "Unknown",
                        action: "EMERGENCY_ALLERGY_OVERRIDE",
                        target: `patient:${String((selectedPatient == null ? void 0 : selectedPatient.id) ?? "emergency")} drug:${(allergyAlert == null ? void 0 : allergyAlert.drugName) ?? ""} allergen:${(allergyAlert == null ? void 0 : allergyAlert.allergen) ?? ""} justification:${overrideJust.trim()}`
                      });
                      setAllergyAlert(null);
                      setShowOverride(false);
                      setOverrideJust("");
                      ue.warning(
                        "Allergy override recorded in audit trail."
                      );
                    },
                    "data-ocid": "emergency_rx.allergy_override.confirm_button",
                    children: "Override & Keep"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-8 text-xs",
                    onClick: () => setShowOverride(false),
                    "data-ocid": "emergency_rx.allergy_override.cancel_button",
                    children: "Cancel"
                  }
                )
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    className: "h-7 text-xs bg-red-600 text-white",
                    onClick: () => setShowOverride(true),
                    "data-ocid": "emergency_rx.allergy_override.open_modal_button",
                    children: "Override with Justification"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 text-xs border-red-300 text-red-700",
                    onClick: () => {
                      setAllergyAlert(null);
                      setDrugs(
                        (prev) => prev.filter(
                          (d) => d.drugName.toLowerCase() !== allergyAlert.drugName.toLowerCase()
                        )
                      );
                    },
                    "data-ocid": "emergency_rx.allergy_remove.button",
                    children: "Remove Drug"
                  }
                )
              ] })
            ] })
          ]
        }
      ),
      interactionWarnings.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-amber-50 border border-amber-400 rounded-xl px-5 py-3 space-y-1",
          "data-ocid": "emergency_rx.interaction_warning.error_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 text-amber-600 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-amber-800 text-sm", children: "Drug Interaction Warnings" })
            ] }),
            interactionWarnings.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-700 pl-6", children: [
              "• ",
              w
            ] }, w))
          ]
        }
      ),
      finalized && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-green-50 border border-green-300 rounded-xl px-5 py-4 flex items-center gap-4",
          "data-ocid": "emergency_rx.success_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-8 h-8 text-green-600 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-green-800", children: "Emergency Prescription Finalized" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-green-700 mt-0.5", children: [
                "Saved for ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: selectedPatient == null ? void 0 : selectedPatient.fullName }),
                " on",
                " ",
                format(/* @__PURE__ */ new Date(), "dd MMM yyyy, HH:mm"),
                ". Visible in patient's prescription history with 🚨 EMERGENCY badge."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "gap-1.5 border-green-300 text-green-700",
                  onClick: () => printEmergencyPrescription({
                    patient: selectedPatient,
                    age,
                    doctor: currentDoctor,
                    emergencyDateTime,
                    cc,
                    hpi,
                    pmh,
                    dh,
                    oe,
                    diagnosis,
                    drugs,
                    adviceText,
                    counselling,
                    followUpDate,
                    validUntil,
                    isNewPatient
                  }),
                  "data-ocid": "emergency_rx.print_final.button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3.5 h-3.5" }),
                    " Print"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "gap-1.5 border-green-300 text-green-700",
                  onClick: handleClear,
                  "data-ocid": "emergency_rx.new_prescription.button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
                    " New Emergency Rx"
                  ]
                }
              )
            ] })
          ]
        }
      ),
      mismatchWarning && !finalized && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 border border-amber-300 rounded-lg px-4 py-2.5 flex items-center gap-2 text-sm text-amber-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-4 h-4 text-amber-600 shrink-0" }),
        mismatchWarning
      ] }),
      selectedPatient && !finalized && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-xl overflow-hidden shadow-sm",
            "data-ocid": "emergency_rx.vitals_strip.panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setShowVitalsStrip((v) => !v),
                  className: "w-full flex items-center justify-between px-4 py-2.5 bg-teal-50 hover:bg-teal-100 transition-colors border-b border-teal-100",
                  "data-ocid": "emergency_rx.vitals_strip.toggle",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-teal-600" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-teal-800 text-sm", children: "Quick Vitals — Emergency Entry" }),
                      (vBpSys || vPulse || vSpo2) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full", children: "Recorded" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-teal-600", children: showVitalsStrip ? "Collapse ▲" : "Expand ▼" })
                  ]
                }
              ),
              showVitalsStrip && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2", children: [
                  {
                    label: "BP Sys (mmHg)",
                    val: vBpSys,
                    set: setVBpSys,
                    placeholder: "120",
                    ocid: "bp_sys"
                  },
                  {
                    label: "BP Dia (mmHg)",
                    val: vBpDia,
                    set: setVBpDia,
                    placeholder: "80",
                    ocid: "bp_dia"
                  },
                  {
                    label: "Pulse (bpm)",
                    val: vPulse,
                    set: setVPulse,
                    placeholder: "72",
                    ocid: "pulse"
                  },
                  {
                    label: "SpO₂ (%)",
                    val: vSpo2,
                    set: setVSpo2,
                    placeholder: "98",
                    ocid: "spo2"
                  },
                  {
                    label: "RBS (mg/dL)",
                    val: vRbs,
                    set: setVRbs,
                    placeholder: "5.5",
                    ocid: "rbs"
                  },
                  {
                    label: "Temp (°F)",
                    val: vTemp,
                    set: setVTemp,
                    placeholder: "37.0",
                    ocid: "temp"
                  },
                  {
                    label: "GCS (3-15)",
                    val: vGcs,
                    set: setVGcs,
                    placeholder: "15",
                    ocid: "gcs"
                  },
                  {
                    label: "Weight (kg)",
                    val: vWeight,
                    set: setVWeight,
                    placeholder: "70",
                    ocid: "weight"
                  }
                ].map(({ label, val, set, placeholder, ocid }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: `vital-${ocid}`,
                      className: "text-[10px] font-medium text-muted-foreground block mb-0.5",
                      children: label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: `vital-${ocid}`,
                      type: "number",
                      value: val,
                      onChange: (e) => set(e.target.value),
                      placeholder,
                      className: "w-full text-xs border border-input rounded-md px-2 py-1.5 bg-background h-8",
                      "data-ocid": `emergency_rx.vitals.${ocid}.input`
                    }
                  )
                ] }, ocid)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "These vitals attach to the emergency visit record when you save the prescription." })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-12 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "xl:col-span-3 space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-red-200 rounded-xl overflow-hidden shadow-sm",
              "data-ocid": "emergency_rx.clinical_summary.panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 border-b border-red-100 px-4 py-2.5 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-red-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-red-800 text-sm", children: "Clinical Summary" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[calc(100vh-340px)] min-h-[400px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 rounded-lg px-3 py-2 text-xs space-y-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: selectedPatient.fullName }),
                    age != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
                      "Age: ",
                      age,
                      "y · ",
                      selectedPatient.gender
                    ] }),
                    selectedPatient.registerNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-mono", children: selectedPatient.registerNumber }),
                    selectedPatient.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: selectedPatient.phone }),
                    selectedPatient.bloodGroup && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-red-700 font-semibold", children: [
                      "Blood: ",
                      selectedPatient.bloodGroup
                    ] }),
                    ((_b = selectedPatient.allergies) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-50 border border-red-100 rounded px-2 py-1 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-red-700 font-medium", children: [
                      "⚠️ Allergies:",
                      " ",
                      selectedPatient.allergies.join(", ")
                    ] }) }),
                    isNewPatient && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-blue-100 text-blue-700 border-blue-200 text-xs mt-1", children: "NEW PATIENT — Emergency Registration" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-red-700", children: "C/C — Chief Complaint *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        placeholder: "e.g. Severe chest pain, 2h duration...",
                        value: cc,
                        onChange: (e) => setCc(e.target.value),
                        className: "text-xs min-h-[60px] border-red-200 focus:border-red-400 resize-none",
                        "data-ocid": "emergency_rx.chief_complaint.textarea"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-foreground", children: "H/O — History of Present Illness" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        placeholder: "Onset, character, radiation, alleviating/aggravating factors...",
                        value: hpi,
                        onChange: (e) => setHpi(e.target.value),
                        className: "text-xs min-h-[60px] resize-none",
                        "data-ocid": "emergency_rx.hpi.textarea"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-foreground", children: "P/M/H — Past Medical History" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        placeholder: "HTN, DM, IHD, CKD, previous surgeries...",
                        value: pmh,
                        onChange: (e) => setPmh(e.target.value),
                        className: "text-xs min-h-[50px] resize-none",
                        "data-ocid": "emergency_rx.pmh.textarea"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-foreground", children: "D/H — Drug History" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        placeholder: "Current medications, regular drugs...",
                        value: dh,
                        onChange: (e) => setDh(e.target.value),
                        className: "text-xs min-h-[50px] resize-none",
                        "data-ocid": "emergency_rx.drug_history.textarea"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-foreground", children: "O/E — On Examination" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        placeholder: "BP, Pulse, Temp, SpO₂, Heart/Lung, Abdomen...",
                        value: oe,
                        onChange: (e) => setOe(e.target.value),
                        className: "text-xs min-h-[60px] resize-none",
                        "data-ocid": "emergency_rx.oe.textarea"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-orange-700", children: "Diagnosis *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        placeholder: "e.g. Acute STEMI, Anaphylactic shock, Sepsis...",
                        value: diagnosis,
                        onChange: (e) => setDiagnosis(e.target.value),
                        className: "text-xs min-h-[60px] border-orange-200 focus:border-orange-400 resize-none",
                        "data-ocid": "emergency_rx.diagnosis.textarea"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 border border-amber-200 rounded-lg px-3 py-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-amber-800 mb-0.5", children: "Emergency Protocol" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-700", children: "Tagged EMERGENCY · Auto-creates visit · Logged in audit trail · Appears in patient history with 🚨 badge." })
                  ] })
                ] }) })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "xl:col-span-6 space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl overflow-hidden shadow-sm",
              "data-ocid": "emergency_rx.rx_table.panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-100 px-4 py-2.5 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 font-black text-xl leading-none", children: "℞" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-red-800 text-sm", children: "Emergency Medications" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-red-100 text-red-700 border-red-200 text-xs", children: [
                      drugs.filter((d) => d.drugName.trim()).length,
                      " drug",
                      drugs.filter((d) => d.drugName.trim()).length !== 1 ? "s" : ""
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "h-7 px-2 text-xs gap-1 border-orange-300 text-orange-700 hover:bg-orange-50",
                        onClick: () => setShowTemplateDropdown((v) => !v),
                        "data-ocid": "emergency_rx.template.button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3" }),
                          "Load Template"
                        ]
                      }
                    ),
                    showTemplateDropdown && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 top-8 z-50 bg-card border border-border rounded-xl shadow-xl w-52 py-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold text-muted-foreground px-3 py-1 uppercase tracking-wide", children: "Emergency Protocols" }),
                      Object.entries(EMERGENCY_TEMPLATES).map(
                        ([key, tpl]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            className: "w-full text-left px-3 py-2 text-xs font-medium hover:bg-red-50 hover:text-red-800 transition-colors flex items-center gap-2",
                            onClick: () => applyEmergencyTemplate(key),
                            "data-ocid": `emergency_rx.template.${key}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Siren, { className: "w-3 h-3 text-red-400 shrink-0" }),
                              tpl.label
                            ]
                          },
                          key
                        )
                      )
                    ] })
                  ] })
                ] }),
                templateWarningShown && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 border-b border-amber-200 px-4 py-2 flex items-center gap-2 text-xs text-amber-800", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5 text-amber-600 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Review doses before saving" }),
                    " — these are suggested protocols, not individual prescriptions. Adjust for patient weight, age, and clinical context."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setTemplateWarningShown(false),
                      className: "ml-auto text-amber-400 hover:text-amber-700",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "max-h-[420px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 space-y-2", children: drugs.map((row, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `border rounded-xl p-3 space-y-2 transition-colors ${editingId === row.id ? "border-red-400 bg-red-50/40" : "border-border bg-muted/20 hover:bg-muted/40"}`,
                    "data-ocid": `emergency_rx.drug_row.item.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-red-600 w-5 shrink-0", children: [
                          idx + 1,
                          "."
                        ] }),
                        row.isControlled && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-red-100 text-red-700 border-red-300 text-xs", children: "CONTROLLED" }),
                        row.isPrn && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Badge,
                          {
                            variant: "outline",
                            className: "text-xs text-blue-700 border-blue-300",
                            children: "PRN"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0 text-sm font-semibold text-foreground truncate", children: row.drugName ? `${row.drugForm ? `${row.drugForm} ` : ""}${row.drugName}${row.brandName ? ` (${row.brandName})` : ""}` : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal italic", children: "New drug entry…" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => loadDrugForEdit(row),
                            className: "p-1 rounded-lg text-muted-foreground hover:text-blue-600 hover:bg-blue-50 transition-colors shrink-0",
                            "aria-label": "Edit drug",
                            "data-ocid": `emergency_rx.edit_drug.edit_button.${idx + 1}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-3.5 h-3.5" })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => removeDrug(row.id),
                            className: "p-1 rounded-lg text-muted-foreground hover:text-red-600 hover:bg-red-50 transition-colors shrink-0",
                            "aria-label": "Remove drug",
                            "data-ocid": `emergency_rx.remove_drug.delete_button.${idx + 1}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                          }
                        )
                      ] }),
                      row.drugName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pl-7 flex flex-wrap gap-2 text-xs text-muted-foreground", children: [
                        row.dose && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-background border border-border rounded px-1.5 py-0.5", children: row.dose }),
                        row.route && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-background border border-border rounded px-1.5 py-0.5", children: [
                          row.route,
                          row.routeBn ? ` / ${row.routeBn}` : ""
                        ] }),
                        row.isPrn ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-blue-50 border border-blue-200 text-blue-700 rounded px-1.5 py-0.5", children: [
                          "PRN",
                          row.prnCondition ? `: ${row.prnCondition}` : ""
                        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          row.frequency && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-background border border-border rounded px-1.5 py-0.5", children: [
                            row.frequency,
                            row.frequencyBn ? ` / ${row.frequencyBn}` : ""
                          ] }),
                          row.duration && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-background border border-border rounded px-1.5 py-0.5", children: [
                            row.duration,
                            row.durationBn ? ` / ${row.durationBn}` : ""
                          ] })
                        ] }),
                        row.instructions && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "italic", children: [
                          row.instructions,
                          row.instructionBn ? ` / ${row.instructionBn}` : ""
                        ] }),
                        row.specialInstruction && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-700", children: row.specialInstruction }),
                        row.dispensedAs && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-xs", children: [
                          "Dispensed: ",
                          row.dispensedAs,
                          row.substitutedBrand ? ` (${row.substitutedBrand})` : ""
                        ] }),
                        row.titrationEnabled && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-purple-700", children: [
                          "Titration: ",
                          row.titrationStage1Dose,
                          " ×",
                          " ",
                          row.titrationStage1Duration,
                          " →",
                          " ",
                          row.titrationStage2Dose,
                          " ×",
                          " ",
                          row.titrationStage2Duration
                        ] })
                      ] })
                    ]
                  },
                  row.id
                )) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    id: "emrx-drug-form",
                    className: "border-t border-border bg-muted/20 p-4 space-y-3",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: editingId ? "Edit Drug" : "Add Drug" }),
                        editingId && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            size: "sm",
                            variant: "ghost",
                            className: "h-6 px-2 text-xs text-muted-foreground",
                            onClick: resetDrugForm,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3 mr-1" }),
                              "Cancel"
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Form" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "select",
                            {
                              className: "w-full text-xs border border-input rounded-md px-2 py-1.5 bg-background",
                              value: df,
                              onChange: (e) => setDf(e.target.value),
                              "data-ocid": "emergency_rx.drug_form.select",
                              children: DRUG_FORMS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: f, children: f || "Other" }, f || "none"))
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Drug Name / Generic *" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              placeholder: "e.g. Aspirin, Adrenaline...",
                              value: dName,
                              onChange: (e) => setDName(e.target.value),
                              className: "h-8 text-xs",
                              "data-ocid": "emergency_rx.drug_name.input"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Brand (opt.)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              placeholder: "Brand",
                              value: dBrand,
                              onChange: (e) => setDBrand(e.target.value),
                              className: "h-8 text-xs",
                              "data-ocid": "emergency_rx.brand_name.input"
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Dose" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              placeholder: "e.g. 500mg",
                              value: dDose,
                              onChange: (e) => setDDose(e.target.value),
                              className: "h-8 text-xs",
                              "data-ocid": "emergency_rx.dose.input"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Route" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "select",
                            {
                              className: "w-full text-xs border border-input rounded-md px-2 py-1.5 bg-background",
                              value: dRoute,
                              onChange: (e) => {
                                setDRoute(e.target.value);
                                if (e.target.value !== "IV" && e.target.value !== "IM")
                                  setDIvImDoseFormat("");
                              },
                              "data-ocid": "emergency_rx.route.select",
                              children: ROUTES_BN.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: r.en, children: [
                                r.en,
                                " / ",
                                r.bn
                              ] }, r.en))
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Frequency (EN)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "select",
                            {
                              className: "w-full text-xs border border-input rounded-md px-2 py-1.5 bg-background",
                              value: dFreq,
                              onChange: (e) => {
                                setDFreq(e.target.value);
                                const found = FREQUENCY_PRESETS.find(
                                  (f) => f.en === e.target.value
                                );
                                if (found) setDFreqBn(found.bn);
                              },
                              "data-ocid": "emergency_rx.frequency.select",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select…" }),
                                FREQUENCY_PRESETS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: f.en, children: f.en }, f.en))
                              ]
                            }
                          )
                        ] })
                      ] }),
                      (dRoute === "IV" || dRoute === "IM") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-2.5 space-y-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-blue-800", children: "IV/IM Dose Format" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "select",
                            {
                              className: "text-xs border border-blue-300 rounded-md px-2 py-1 bg-white",
                              value: dIvImDoseFormat,
                              onChange: (e) => setDIvImDoseFormat(
                                e.target.value
                              ),
                              "data-ocid": "emergency_rx.ivim_dose_format.select",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Standard dose" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "single", children: "Single Dose" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "loading-maintenance", children: "Loading + Maintenance" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "infusion", children: "Infusion Rate" })
                              ]
                            }
                          )
                        ] }),
                        dIvImDoseFormat === "loading-maintenance" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-blue-700 font-medium", children: "Loading Dose" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Input,
                              {
                                placeholder: "e.g. 1000mg IV over 20min",
                                value: dLoadingDose,
                                onChange: (e) => setDLoadingDose(e.target.value),
                                className: "h-7 text-xs mt-0.5",
                                "data-ocid": "emergency_rx.loading_dose.input"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-blue-700 font-medium", children: "Maintenance Dose" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Input,
                              {
                                placeholder: "e.g. 250mg/6hrs",
                                value: dMaintenanceDose,
                                onChange: (e) => setDMaintenanceDose(e.target.value),
                                className: "h-7 text-xs mt-0.5",
                                "data-ocid": "emergency_rx.maintenance_dose.input"
                              }
                            )
                          ] })
                        ] }),
                        dIvImDoseFormat === "infusion" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-end", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-blue-700 font-medium", children: "Infusion Rate" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Input,
                              {
                                placeholder: "e.g. 5",
                                value: dInfusionRate,
                                onChange: (e) => setDInfusionRate(e.target.value),
                                className: "h-7 text-xs mt-0.5",
                                "data-ocid": "emergency_rx.infusion_rate.input"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "select",
                            {
                              className: "text-xs border border-blue-300 rounded-md px-2 py-1.5 bg-white",
                              value: dInfusionUnit,
                              onChange: (e) => setDInfusionUnit(
                                e.target.value
                              ),
                              "data-ocid": "emergency_rx.infusion_unit.select",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "mg/hr", children: "mg/hr" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "mcg/kg/min", children: "mcg/kg/min" })
                              ]
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Frequency (BN)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              placeholder: "বাংলা...",
                              value: dFreqBn,
                              onChange: (e) => setDFreqBn(e.target.value),
                              className: "h-8 text-xs",
                              "data-ocid": "emergency_rx.frequency_bn.input"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Duration (EN)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "select",
                            {
                              className: "w-full text-xs border border-input rounded-md px-2 py-1.5 bg-background",
                              value: dDur,
                              onChange: (e) => {
                                setDDur(e.target.value);
                                const found = DURATION_PRESETS.find(
                                  (d) => d.en === e.target.value
                                );
                                if (found) setDDurBn(found.bn);
                              },
                              "data-ocid": "emergency_rx.duration.select",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select…" }),
                                DURATION_PRESETS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: d.en, children: d.en }, d.en))
                              ]
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Duration (BN)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              placeholder: "বাংলা...",
                              value: dDurBn,
                              onChange: (e) => setDDurBn(e.target.value),
                              className: "h-8 text-xs",
                              "data-ocid": "emergency_rx.duration_bn.input"
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Instructions (EN)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              placeholder: "After meal...",
                              value: dInstr,
                              onChange: (e) => setDInstr(e.target.value),
                              className: "h-8 text-xs flex-1",
                              "data-ocid": "emergency_rx.instructions.input"
                            }
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: INSTRUCTION_PRESETS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              className: "text-[9px] px-1.5 py-0.5 rounded border border-border hover:bg-muted transition-colors",
                              onClick: () => {
                                setDInstr(p.en);
                                setDInstrBn(p.bn);
                              },
                              children: p.en
                            },
                            p.en
                          )) })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Instructions (BN)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              placeholder: "খাবার পরে...",
                              value: dInstrBn,
                              onChange: (e) => setDInstrBn(e.target.value),
                              className: "h-8 text-xs",
                              "data-ocid": "emergency_rx.instructions_bn.input"
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Special Instruction (EN)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              placeholder: "e.g. Monitor BP after dose...",
                              value: dSpecial,
                              onChange: (e) => setDSpecial(e.target.value),
                              className: "h-8 text-xs",
                              "data-ocid": "emergency_rx.special_instruction.input"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Special Instruction (BN)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              placeholder: "বিশেষ নির্দেশ...",
                              value: dSpecialBn,
                              onChange: (e) => setDSpecialBn(e.target.value),
                              className: "h-8 text-xs"
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 pt-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1.5 cursor-pointer select-none", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              type: "checkbox",
                              checked: dPrn,
                              onChange: (e) => setDPrn(e.target.checked),
                              className: "rounded",
                              "data-ocid": "emergency_rx.prn.toggle"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-blue-700", children: "PRN (as-needed)" })
                        ] }),
                        dPrn && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            placeholder: "Condition (e.g. if fever > 38°F)",
                            value: dPrnCond,
                            onChange: (e) => setDPrnCond(e.target.value),
                            className: "h-7 text-xs w-52",
                            "data-ocid": "emergency_rx.prn_condition.input"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1.5 cursor-pointer select-none", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              type: "checkbox",
                              checked: dControlled,
                              onChange: (e) => setDControlled(e.target.checked),
                              className: "rounded",
                              "data-ocid": "emergency_rx.controlled.toggle"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-red-700", children: "Controlled Drug" })
                        ] }),
                        dControlled && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            placeholder: "Legal justification (required)...",
                            value: dControlledJust,
                            onChange: (e) => setDControlledJust(e.target.value),
                            className: "h-7 text-xs border-red-300 w-52",
                            "data-ocid": "emergency_rx.controlled_justification.input"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1.5 cursor-pointer select-none", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              type: "checkbox",
                              checked: dTitration,
                              onChange: (e) => setDTitration(e.target.checked),
                              className: "rounded"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-purple-700", children: "Titration" })
                        ] })
                      ] }),
                      dTitration && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-2 bg-purple-50 border border-purple-200 rounded-lg p-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-purple-700", children: "Stage 1 Dose" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              placeholder: "500mg",
                              value: dTit1Dose,
                              onChange: (e) => setDTit1Dose(e.target.value),
                              className: "h-7 text-xs"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-purple-700", children: "Stage 1 Duration" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              placeholder: "2 weeks",
                              value: dTit1Dur,
                              onChange: (e) => setDTit1Dur(e.target.value),
                              className: "h-7 text-xs"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-purple-700", children: "Stage 2 Dose" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              placeholder: "1000mg",
                              value: dTit2Dose,
                              onChange: (e) => setDTit2Dose(e.target.value),
                              className: "h-7 text-xs"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-purple-700", children: "Stage 2 Duration" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              placeholder: "Ongoing",
                              value: dTit2Dur,
                              onChange: (e) => setDTit2Dur(e.target.value),
                              className: "h-7 text-xs"
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Dispensed As (opt.)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "select",
                            {
                              className: "w-full text-xs border border-input rounded-md px-2 py-1.5 bg-background",
                              value: dDispensedAs,
                              onChange: (e) => setDDispensedAs(
                                e.target.value
                              ),
                              "data-ocid": "emergency_rx.dispensed_as.select",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Not recorded" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "brand", children: "Brand" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "generic", children: "Generic" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "substituted", children: "Substituted" })
                              ]
                            }
                          )
                        ] }),
                        dDispensedAs === "substituted" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Substituted Brand Name" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              placeholder: "Brand name used...",
                              value: dSubBrand,
                              onChange: (e) => setDSubBrand(e.target.value),
                              className: "h-8 text-xs",
                              "data-ocid": "emergency_rx.substituted_brand.input"
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          className: "w-full h-9 gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold",
                          onClick: commitDrug,
                          "data-ocid": "emergency_rx.add_drug.button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                            editingId ? "Update Drug" : "Add Drug to Prescription"
                          ]
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "xl:col-span-3 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-card border border-border rounded-xl overflow-hidden shadow-sm",
                "data-ocid": "emergency_rx.advice.panel",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-orange-50 border-b border-orange-100 px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-orange-800 text-sm", children: "Advice & Instructions" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        placeholder: "Enter advice (one per line)...",
                        value: adviceText,
                        onChange: (e) => setAdviceText(e.target.value),
                        className: "text-xs min-h-[100px] resize-none",
                        "data-ocid": "emergency_rx.advice.textarea"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 pt-1", children: ADVICE_TEMPLATES.map((tmpl) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        className: "text-[9px] px-2 py-1 rounded-full border border-orange-200 text-orange-700 hover:bg-orange-50 transition-colors leading-none",
                        onClick: () => {
                          if (!adviceText.includes(tmpl)) {
                            setAdviceText(
                              (prev) => prev ? `${prev}
${tmpl}` : tmpl
                            );
                          }
                        },
                        "data-ocid": "emergency_rx.advice_template.button",
                        children: tmpl.length > 28 ? `${tmpl.slice(0, 28)}…` : tmpl
                      },
                      tmpl
                    )) })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-card border border-border rounded-xl overflow-hidden shadow-sm",
                "data-ocid": "emergency_rx.counselling.panel",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border-b border-blue-100 px-4 py-2.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-blue-800 text-sm", children: "Patient Counselling" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-blue-600 mt-0.5", children: "Printed on prescription · Visible in patient portal" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Textarea,
                    {
                      placeholder: "e.g. Advised low-salt diet, warned about dizziness with first dose...",
                      value: counselling,
                      onChange: (e) => setCounselling(e.target.value),
                      className: "text-xs min-h-[70px] resize-none",
                      "data-ocid": "emergency_rx.counselling.textarea"
                    }
                  ) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-3 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium text-foreground", children: "Follow-up Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "date",
                    value: followUpDate,
                    onChange: (e) => setFollowUpDate(e.target.value),
                    className: "h-8 text-xs mt-1",
                    "data-ocid": "emergency_rx.followup_date.input"
                  }
                ),
                followUpDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                  format(new Date(followUpDate), "dd MMM yyyy"),
                  " —",
                  " ",
                  Math.round(
                    (new Date(followUpDate).getTime() - Date.now()) / 864e5
                  ),
                  " ",
                  "days"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium text-foreground", children: "Valid Until" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "date",
                    value: validUntil,
                    onChange: (e) => setValidUntil(e.target.value),
                    className: "h-8 text-xs mt-1",
                    "data-ocid": "emergency_rx.valid_until.input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Shown prominently on printed prescription." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "w-full h-11 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold shadow-md gap-2",
                onClick: handleSave,
                disabled: saving,
                "data-ocid": "emergency_rx.finalize.submit_button",
                children: [
                  saving ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5" }),
                  saving ? "Saving..." : "Save & Finalize Emergency Rx"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "Tagged EMERGENCY · Auto-creates visit record · Logged in audit trail" })
          ] })
        ] })
      ] }),
      finalized && selectedPatient && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-green-200 rounded-xl p-5 shadow-sm space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-green-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-green-800", children: "Emergency Prescription Summary" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-red-100 text-red-700 border-red-200 text-xs", children: "🚨 EMERGENCY" }),
            isNewPatient && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-blue-100 text-blue-700 border-blue-200 text-xs", children: "NEW PATIENT" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium mb-1", children: "Patient" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: selectedPatient.fullName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-xs", children: [
              selectedPatient.registerNumber,
              " ·",
              " ",
              age != null ? `${age}y` : "",
              " · ",
              selectedPatient.gender
            ] })
          ] }),
          diagnosis && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium mb-1", children: "Diagnosis" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: diagnosis })
          ] }),
          cc && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium mb-1", children: "Chief Complaint" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: cc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium mb-1", children: "Finalized" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              format(/* @__PURE__ */ new Date(), "dd MMM yyyy, HH:mm"),
              " by",
              " ",
              (currentDoctor == null ? void 0 : currentDoctor.name) ?? "Doctor"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-medium mb-2", children: [
            "Medications (",
            drugs.filter((d) => d.drugName.trim()).length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: drugs.filter((d) => d.drugName.trim()).map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-2 bg-muted/40 rounded-lg px-3 py-2 text-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-red-600 w-5", children: [
                  i + 1,
                  "."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                  r.drugForm,
                  " ",
                  r.drugName,
                  r.brandName ? ` (${r.brandName})` : ""
                ] }),
                r.isControlled && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-red-100 text-red-700 text-xs", children: "CONTROLLED" }),
                r.isPrn && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: "PRN" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-xs ml-auto", children: [
                  r.dose,
                  " ·",
                  " ",
                  r.isPrn ? `PRN${r.prnCondition ? `: ${r.prnCondition}` : ""}` : `${r.frequency} × ${r.duration}`
                ] })
              ]
            },
            r.id
          )) })
        ] }),
        validUntil && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Valid until:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: format(new Date(validUntil), "dd MMM yyyy") })
          ] }),
          followUpDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-4", children: [
            "Follow-up:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: format(new Date(followUpDate), "dd MMM yyyy") })
          ] })
        ] })
      ] }),
      finalized && selectedPatient && !nextActionCompleted && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-blue-200 rounded-xl p-4 shadow-sm space-y-3",
          "data-ocid": "emergency_rx.next_action.panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-blue-600" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-blue-900 text-sm", children: "Next Action" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-blue-600", children: "What happens to this patient after the emergency prescription?" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
              {
                key: "admit",
                label: "🏥 Admit",
                color: "border-purple-400 text-purple-700 hover:bg-purple-50"
              },
              {
                key: "refer",
                label: "↗️ Refer",
                color: "border-orange-400 text-orange-700 hover:bg-orange-50"
              },
              {
                key: "discharge",
                label: "🏠 Discharge",
                color: "border-green-400 text-green-700 hover:bg-green-50"
              },
              {
                key: "observe",
                label: "👁 Observe",
                color: "border-blue-400 text-blue-700 hover:bg-blue-50"
              }
            ].map(({ key, label, color }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setNextAction(key),
                className: `px-4 py-2 rounded-lg text-sm font-medium border-2 transition-colors ${nextAction === key ? "border-primary bg-primary/10 text-primary" : color}`,
                "data-ocid": `emergency_rx.next_action.${key}`,
                children: label
              },
              key
            )) }),
            nextAction === "admit" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 border border-purple-200 rounded-lg px-3 py-2 text-sm text-purple-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-1", children: "Admit Patient" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", children: "Assign a bed via the Bed Management section. Emergency prescription drugs will auto-populate the inpatient medication chart." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  className: "mt-2 bg-purple-600 hover:bg-purple-700 text-white gap-1.5 text-xs h-7",
                  onClick: () => {
                    window.location.href = "/BedManagement";
                  },
                  "data-ocid": "emergency_rx.next_action.admit_button",
                  children: "Open Bed Management →"
                }
              )
            ] }),
            nextAction === "refer" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 border border-orange-200 rounded-lg px-3 py-3 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-orange-800", children: "Referral Details" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-orange-700 font-medium", children: "Specialist Name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: "Dr. / Specialist",
                      value: referSpecialist,
                      onChange: (e) => setReferSpecialist(e.target.value),
                      className: "h-8 text-xs mt-0.5",
                      "data-ocid": "emergency_rx.refer.specialist.input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-orange-700 font-medium", children: "Hospital / Clinic" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: "Hospital name",
                      value: referHospital,
                      onChange: (e) => setReferHospital(e.target.value),
                      className: "h-8 text-xs mt-0.5",
                      "data-ocid": "emergency_rx.refer.hospital.input"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-orange-700 font-medium", children: "Reason for Referral" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    placeholder: "Clinical reason...",
                    value: referReason,
                    onChange: (e) => setReferReason(e.target.value),
                    className: "text-xs min-h-[60px] resize-none mt-0.5",
                    "data-ocid": "emergency_rx.refer.reason.textarea"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  className: "bg-orange-500 hover:bg-orange-600 text-white gap-1.5 text-xs h-7",
                  onClick: () => {
                    setNextActionCompleted(true);
                    ue.success("Referral recorded");
                  },
                  "data-ocid": "emergency_rx.refer.save_button",
                  children: "Save Referral"
                }
              )
            ] }),
            nextAction === "discharge" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 border border-green-200 rounded-lg px-3 py-3 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-800", children: "Discharge Instructions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  placeholder: "Discharge instructions, follow-up advice, safety netting...",
                  value: dischargeInstructions,
                  onChange: (e) => setDischargeInstructions(e.target.value),
                  className: "text-xs min-h-[80px] resize-none",
                  "data-ocid": "emergency_rx.discharge.instructions.textarea"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  className: "bg-green-600 hover:bg-green-700 text-white gap-1.5 text-xs h-7",
                  onClick: () => {
                    setNextActionCompleted(true);
                    ue.success("Patient discharged — visit marked closed");
                  },
                  "data-ocid": "emergency_rx.discharge.save_button",
                  children: "Mark Discharged"
                }
              )
            ] }),
            nextAction === "observe" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg px-3 py-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-blue-600 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-blue-800", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Patient under observation" }),
                  " — review due in 24 hours."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  className: "mt-2 bg-blue-600 hover:bg-blue-700 text-white gap-1.5 text-xs h-7",
                  onClick: () => {
                    setNextActionCompleted(true);
                    ue.success(
                      "Observation noted — 24h review reminder set"
                    );
                  },
                  "data-ocid": "emergency_rx.observe.save_button",
                  children: "Confirm Observation"
                }
              )
            ] })
          ]
        }
      ),
      nextActionCompleted && finalized && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-green-50 border border-green-300 rounded-xl px-4 py-3 flex items-center gap-2 text-sm text-green-800",
          "data-ocid": "emergency_rx.next_action.success_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-green-600 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Next action recorded — emergency encounter is complete." })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showNewPatientModal, onOpenChange: setShowNewPatientModal, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "max-w-lg",
        "data-ocid": "emergency_rx.new_patient.dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-5 h-5 text-red-600" }),
            "Quick Patient Registration",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-red-100 text-red-700 border-red-200 text-xs ml-2", children: "Emergency" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground bg-amber-50 border border-amber-200 rounded-lg px-3 py-2", children: "Minimal fields required. A register number is auto-generated. Full patient profile can be completed later." }),
            npDupWarning && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-amber-50 border border-amber-400 rounded-lg px-3 py-2 text-xs text-amber-800",
                "data-ocid": "emergency_rx.new_patient.error_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Duplicate Detected:" }),
                  " ",
                  npDupWarning
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Full Name *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "Patient full name",
                    value: npForm.fullName,
                    onChange: (e) => setNpForm((p) => ({ ...p, fullName: e.target.value })),
                    className: "h-9 text-sm mt-1",
                    autoFocus: true,
                    "data-ocid": "emergency_rx.new_patient.fullname.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Age (years) *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "e.g. 45",
                    value: npForm.ageStr,
                    onChange: (e) => setNpForm((p) => ({
                      ...p,
                      ageStr: e.target.value,
                      dobStr: ""
                    })),
                    className: "h-9 text-sm mt-1",
                    "data-ocid": "emergency_rx.new_patient.age.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "OR Date of Birth" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "date",
                    value: npForm.dobStr,
                    onChange: (e) => setNpForm((p) => ({
                      ...p,
                      dobStr: e.target.value,
                      ageStr: ""
                    })),
                    className: "h-9 text-sm mt-1",
                    "data-ocid": "emergency_rx.new_patient.dob.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Sex / Gender *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    className: "w-full text-sm border border-input rounded-md px-2 py-2 mt-1 bg-background",
                    value: npForm.gender,
                    onChange: (e) => setNpForm((p) => ({ ...p, gender: e.target.value })),
                    "data-ocid": "emergency_rx.new_patient.gender.select",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "male", children: "Male" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "female", children: "Female" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "other", children: "Other" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Phone Number *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "+880...",
                    value: npForm.phone,
                    onChange: (e) => setNpForm((p) => ({ ...p, phone: e.target.value })),
                    onBlur: checkDuplicate,
                    className: "h-9 text-sm mt-1",
                    "data-ocid": "emergency_rx.new_patient.phone.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Blood Group (opt.)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    className: "w-full text-sm border border-input rounded-md px-2 py-2 mt-1 bg-background",
                    value: npForm.bloodGroup,
                    onChange: (e) => setNpForm((p) => ({ ...p, bloodGroup: e.target.value })),
                    "data-ocid": "emergency_rx.new_patient.blood_group.select",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Unknown" }),
                      ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                        (bg) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: bg, children: bg }, bg)
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Known Allergies (comma-separated, opt.)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "e.g. Penicillin, Aspirin",
                    value: npForm.allergies,
                    onChange: (e) => setNpForm((p) => ({ ...p, allergies: e.target.value })),
                    className: "h-9 text-sm mt-1",
                    "data-ocid": "emergency_rx.new_patient.allergies.input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Important for clinical intelligence — allergy alerts will fire immediately when prescribing." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Chronic Conditions (comma-separated, opt.)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "e.g. Hypertension, Diabetes",
                    value: npForm.chronicConditions,
                    onChange: (e) => setNpForm((p) => ({
                      ...p,
                      chronicConditions: e.target.value
                    })),
                    className: "h-9 text-sm mt-1",
                    "data-ocid": "emergency_rx.new_patient.chronic.input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold gap-2",
                  onClick: handleNewPatientSave,
                  disabled: npSaving,
                  "data-ocid": "emergency_rx.new_patient.submit_button",
                  children: [
                    npSaving ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-4 h-4" }),
                    npSaving ? "Registering..." : "Register & Open Prescription"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  onClick: () => {
                    setShowNewPatientModal(false);
                    setNpDupWarning(null);
                  },
                  "data-ocid": "emergency_rx.new_patient.cancel_button",
                  children: "Cancel"
                }
              )
            ] })
          ] })
        ]
      }
    ) })
  ] });
}
export {
  EmergencyPrescription as default
};
