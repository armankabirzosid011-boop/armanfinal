import { i as createLucideIcon } from "./index-DJeWhCy-.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "m9 14 2 2 4-4", key: "df797q" }]
];
const ClipboardCheck = createLucideIcon("clipboard-check", __iconNode);
const DRUG_CLASS_MAP = {
  ssri: [
    "fluoxetine",
    "sertraline",
    "escitalopram",
    "citalopram",
    "paroxetine"
  ],
  maoi: ["phenelzine", "tranylcypromine", "isocarboxazid", "selegiline"],
  nsaid: [
    "ibuprofen",
    "naproxen",
    "diclofenac",
    "indomethacin",
    "ketorolac",
    "aspirin",
    "celecoxib"
  ],
  anticoagulant: [
    "warfarin",
    "heparin",
    "enoxaparin",
    "rivaroxaban",
    "apixaban"
  ],
  ppi: [
    "omeprazole",
    "pantoprazole",
    "esomeprazole",
    "lansoprazole",
    "rabeprazole"
  ],
  "ace inhibitor": [
    "enalapril",
    "lisinopril",
    "ramipril",
    "captopril",
    "perindopril"
  ]
};
function normalizeDrug(name) {
  return name.toLowerCase().replace(/[^a-z0-9 ]/g, " ").trim();
}
function drugMatchesClass(drugName, className) {
  const normalized = normalizeDrug(drugName);
  if (normalized.includes(className)) return true;
  const keywords = DRUG_CLASS_MAP[className] ?? [];
  return keywords.some((kw) => normalized.includes(kw));
}
function checkVitalAlerts(vitals) {
  const alerts = [];
  if (vitals.bloodPressure) {
    const [sys] = vitals.bloodPressure.split("/").map(Number);
    if (!Number.isNaN(sys)) {
      if (sys < 90)
        alerts.push({
          field: "BP",
          value: vitals.bloodPressure,
          severity: "critical",
          message: `Hypotension: BP ${vitals.bloodPressure} mmHg`
        });
      else if (sys > 180)
        alerts.push({
          field: "BP",
          value: vitals.bloodPressure,
          severity: "warning",
          message: `Hypertensive urgency: BP ${vitals.bloodPressure} mmHg`
        });
    }
  }
  if (vitals.oxygenSaturation) {
    const spo2 = Number.parseFloat(vitals.oxygenSaturation);
    if (!Number.isNaN(spo2) && spo2 < 90)
      alerts.push({
        field: "SpO2",
        value: vitals.oxygenSaturation,
        severity: "critical",
        message: `Hypoxia: SpO₂ ${spo2}%`
      });
  }
  if (vitals.temperature) {
    const temp = Number.parseFloat(vitals.temperature);
    if (!Number.isNaN(temp)) {
      if (temp > 38.5)
        alerts.push({
          field: "Temp",
          value: vitals.temperature,
          severity: "warning",
          message: `Fever: Temp ${temp}°F`
        });
      else if (temp < 36)
        alerts.push({
          field: "Temp",
          value: vitals.temperature,
          severity: "warning",
          message: `Hypothermia: Temp ${temp}°F`
        });
    }
  }
  if (vitals.pulse) {
    const pulse = Number.parseFloat(vitals.pulse);
    if (!Number.isNaN(pulse)) {
      if (pulse > 100)
        alerts.push({
          field: "Pulse",
          value: vitals.pulse,
          severity: "warning",
          message: `Tachycardia: Pulse ${pulse} bpm`
        });
      else if (pulse < 60)
        alerts.push({
          field: "Pulse",
          value: vitals.pulse,
          severity: "warning",
          message: `Bradycardia: Pulse ${pulse} bpm`
        });
    }
  }
  if (vitals.respiratoryRate) {
    const rr = Number.parseFloat(vitals.respiratoryRate);
    if (!Number.isNaN(rr) && rr > 30)
      alerts.push({
        field: "RR",
        value: vitals.respiratoryRate,
        severity: "warning",
        message: `Tachypnoea: RR ${rr}/min`
      });
  }
  return alerts;
}
let _alertSeq = 0;
function makeAlertId(prefix) {
  return `${prefix}_${Date.now()}_${++_alertSeq}`;
}
function makeExtendedAlert(category, alertType, severity, message, details, aiSuggestion) {
  return {
    id: makeAlertId(alertType),
    category,
    alertType,
    severity,
    message,
    details,
    aiSuggestion,
    triggeredAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}
const QT_PROLONGING_DRUGS = [
  "amiodarone",
  "sotalol",
  "dofetilide",
  "azithromycin",
  "clarithromycin",
  "erythromycin",
  "ciprofloxacin",
  "levofloxacin",
  "moxifloxacin",
  "haloperidol",
  "quetiapine",
  "olanzapine",
  "chlorpromazine",
  "methadone",
  "ondansetron",
  "domperidone"
];
const CONTRAINDICATION_PAIRS = [
  {
    condition: "renal failure",
    drug: "nsaid",
    message: "NSAIDs contraindicated in renal failure — worsen AKI."
  },
  {
    condition: "ckd",
    drug: "nsaid",
    message: "NSAIDs contraindicated in CKD — accelerate renal decline."
  },
  {
    condition: "asthma",
    drug: "beta blocker",
    message: "Beta-blockers contraindicated in asthma — may precipitate bronchospasm."
  },
  {
    condition: "asthma",
    drug: "propranolol",
    message: "Propranolol contraindicated in asthma — non-selective beta blocker."
  },
  {
    condition: "heart block",
    drug: "verapamil",
    message: "Verapamil contraindicated in complete heart block."
  },
  {
    condition: "heart block",
    drug: "diltiazem",
    message: "Diltiazem contraindicated in high-degree heart block."
  },
  {
    condition: "peptic ulcer",
    drug: "nsaid",
    message: "NSAIDs worsen peptic ulcer disease — avoid or add PPI."
  },
  {
    condition: "pregnancy",
    drug: "warfarin",
    message: "Warfarin contraindicated in pregnancy — teratogenic."
  },
  {
    condition: "gout",
    drug: "thiazide",
    message: "Thiazides raise uric acid — may worsen gout."
  }
];
const ANTIBIOTIC_COVERAGE = {
  penicillin: ["streptococcus", "staphylococcus", "gram-positive"],
  amoxicillin: ["streptococcus", "e.coli", "h.pylori", "gram-positive"],
  "co-amoxiclav": ["mrsa_sensitive", "gram-positive", "anaerobes"],
  ciprofloxacin: [
    "gram-negative",
    "e.coli",
    "pseudomonas",
    "enterobacteriaceae"
  ],
  metronidazole: ["anaerobes", "c.difficile", "bacteroides"],
  vancomycin: ["mrsa", "gram-positive", "enterococcus"],
  meropenem: [
    "gram-negative",
    "pseudomonas",
    "enterobacteriaceae",
    "anaerobes"
  ]
};
function checkCriticalEmergency(input) {
  const alerts = [];
  const v = input.vitals ?? {};
  const hasSepsisCriteria = v.temperature !== void 0 && (v.temperature > 38.3 || v.temperature < 36) || v.heartRate !== void 0 && v.heartRate > 90 || v.respiratoryRate !== void 0 && v.respiratoryRate > 20;
  const hasShock = v.systolicBP !== void 0 && v.systolicBP < 90 || v.lactate !== void 0 && v.lactate > 2;
  if (hasSepsisCriteria && hasShock) {
    alerts.push(
      makeExtendedAlert(
        "critical_emergency",
        "SepticShock",
        "critical",
        "⚠️ Septic Shock",
        `Sepsis criteria met + ${v.systolicBP !== void 0 && v.systolicBP < 90 ? `SBP ${v.systolicBP} mmHg` : `Lactate ${v.lactate} mmol/L`}`,
        "Start sepsis bundle? (IV fluids, blood cultures, broad-spectrum antibiotics)"
      )
    );
  }
  if (v.heartRate !== void 0 && v.systolicBP !== void 0 && v.systolicBP > 0) {
    const si = v.heartRate / v.systolicBP;
    if (si > 0.9) {
      alerts.push(
        makeExtendedAlert(
          "critical_emergency",
          "ShockIndex",
          "critical",
          "⚠️ Shock Index Elevated",
          `HR ${v.heartRate} / SBP ${v.systolicBP} = ${si.toFixed(2)} (>0.9 indicates shock risk)`
        )
      );
    }
  }
  const rrHigh = v.respiratoryRate !== void 0 && v.respiratoryRate > 30;
  const paco2High = v.paco2 !== void 0 && v.paco2 > 45;
  if (rrHigh || paco2High) {
    alerts.push(
      makeExtendedAlert(
        "critical_emergency",
        "RespiratoryFailure",
        "critical",
        "⚠️ Respiratory Failure Risk",
        `${rrHigh ? `RR ${v.respiratoryRate}/min > 30` : ""}${rrHigh && paco2High ? "; " : ""}${paco2High ? `PaCO₂ ${v.paco2} mmHg elevated` : ""}`,
        "Evaluate for O₂ therapy / ventilatory support"
      )
    );
  }
  if (v.heartRate !== void 0 && v.systolicBP !== void 0 && (v.heartRate < 40 || v.heartRate > 180) && v.systolicBP < 80) {
    alerts.push(
      makeExtendedAlert(
        "critical_emergency",
        "CardiacArrestRisk",
        "critical",
        "🚨 Cardiac Arrest Risk",
        `HR ${v.heartRate} bpm + SBP ${v.systolicBP} mmHg — critical haemodynamic compromise`,
        "Immediate resuscitation assessment required"
      )
    );
  }
  return alerts;
}
function checkRenalElectrolyte(input) {
  const alerts = [];
  const l = input.labs ?? {};
  const v = input.vitals ?? {};
  if (l.creatinine !== void 0 && l.creatininePrev !== void 0) {
    const rise = l.creatinine - l.creatininePrev;
    if (rise >= 0.3) {
      const hasHyperK = l.potassium !== void 0 && l.potassium >= 5.5;
      alerts.push(
        makeExtendedAlert(
          "renal_electrolyte",
          "AKI",
          rise >= 0.5 ? "critical" : "warning",
          "Acute Kidney Injury (AKI)",
          `Creatinine ↑ ${l.creatininePrev.toFixed(2)} → ${l.creatinine.toFixed(2)} mg/dL (rise ${rise.toFixed(2)} in 48h)`,
          hasHyperK ? "Consider AKI protocol (fluids, stop nephrotoxins, check electrolytes)" : void 0
        )
      );
    }
  }
  if (v.urineOutputMlKgHr !== void 0 && v.urineOutputMlKgHr < 0.5) {
    alerts.push(
      makeExtendedAlert(
        "renal_electrolyte",
        "AKI",
        "warning",
        "Low Urine Output — AKI Risk",
        `Urine output ${v.urineOutputMlKgHr.toFixed(2)} ml/kg/hr < 0.5 threshold`,
        "Consider AKI protocol (fluids, stop nephrotoxins, check electrolytes)"
      )
    );
  }
  if (l.potassium !== void 0 && l.potassium >= 6) {
    alerts.push(
      makeExtendedAlert(
        "renal_electrolyte",
        "Hyperkalemia",
        l.potassium >= 6.5 ? "critical" : "warning",
        `Severe Hyperkalemia: K⁺ ${l.potassium} mmol/L`,
        "Risk of fatal arrhythmia. ECG immediately.",
        "Consider AKI protocol (fluids, stop nephrotoxins, check electrolytes)"
      )
    );
  }
  if (l.potassium !== void 0 && l.potassium <= 2.5) {
    alerts.push(
      makeExtendedAlert(
        "renal_electrolyte",
        "Hypokalemia",
        "critical",
        `Severe Hypokalemia: K⁺ ${l.potassium} mmol/L`,
        "Risk of arrhythmia and paralysis. IV potassium replacement required."
      )
    );
  }
  if (l.sodium !== void 0 && l.sodium < 125) {
    alerts.push(
      makeExtendedAlert(
        "renal_electrolyte",
        "Hyponatremia",
        l.sodium < 120 ? "critical" : "warning",
        `Severe Hyponatremia: Na⁺ ${l.sodium} mmol/L`,
        "Risk of cerebral oedema and seizures. Correct cautiously (<10 mmol/day)."
      )
    );
  }
  if (l.sodium !== void 0 && l.sodium > 155) {
    alerts.push(
      makeExtendedAlert(
        "renal_electrolyte",
        "Hypernatremia",
        "warning",
        `Hypernatremia: Na⁺ ${l.sodium} mmol/L`,
        "Dehydration or diabetes insipidus. Gradual fluid replacement."
      )
    );
  }
  if (l.ph !== void 0 && l.bicarbonate !== void 0 && l.ph < 7.35 && l.bicarbonate < 18) {
    alerts.push(
      makeExtendedAlert(
        "renal_electrolyte",
        "MetabolicAcidosis",
        l.ph < 7.25 ? "critical" : "warning",
        `Metabolic Acidosis: pH ${l.ph}, HCO₃ ${l.bicarbonate} mmol/L`,
        "Evaluate for sepsis, renal failure, DKA, lactic acidosis."
      )
    );
  }
  if (l.sodium !== void 0 && l.chloride !== void 0 && l.bicarbonate !== void 0) {
    const ag = l.sodium - l.chloride - l.bicarbonate;
    if (ag > 12) {
      alerts.push(
        makeExtendedAlert(
          "renal_electrolyte",
          "HighAnionGap",
          ag > 20 ? "critical" : "warning",
          `High Anion Gap: AG = ${ag} (Na ${l.sodium} - Cl ${l.chloride} - HCO₃ ${l.bicarbonate})`,
          "Consider MUDPILES: Methanol, Uraemia, DKA, Propylene glycol, Isoniazid, Lactic acidosis, Ethylene glycol, Salicylates."
        )
      );
    }
  }
  return alerts;
}
function checkMedicationSafety(input) {
  const alerts = [];
  const meds = input.medications ?? [];
  const l = input.labs ?? {};
  const diagnoses = (input.diagnoses ?? []).map((d) => d.toLowerCase());
  const hasQTDrug = meds.some(
    (m) => QT_PROLONGING_DRUGS.some((q) => normalizeDrug(m.name).includes(q))
  );
  const lowK = l.potassium !== void 0 && l.potassium < 3;
  if (hasQTDrug && lowK) {
    const qtDrug = meds.find(
      (m) => QT_PROLONGING_DRUGS.some((q) => normalizeDrug(m.name).includes(q))
    );
    alerts.push(
      makeExtendedAlert(
        "medication_safety",
        "QTProlongation",
        "warning",
        `QT Prolongation Risk: ${qtDrug == null ? void 0 : qtDrug.name} + Low K⁺ (${l.potassium} mmol/L)`,
        "QT-prolonging drug combined with hypokalaemia increases torsades de pointes risk.",
        "Correct potassium before using QT-prolonging agents."
      )
    );
  }
  for (const pair of CONTRAINDICATION_PAIRS) {
    const hasDiagnosis = diagnoses.some(
      (d) => d.includes(pair.condition) || pair.condition.includes(d)
    );
    if (!hasDiagnosis) continue;
    const hasDrug = meds.some((m) => {
      const norm = normalizeDrug(m.name);
      return norm.includes(pair.drug) || drugMatchesClass(norm, pair.drug);
    });
    if (hasDrug) {
      alerts.push(
        makeExtendedAlert(
          "medication_safety",
          "DrugContraindication",
          "critical",
          `Contraindication: ${pair.condition} + ${pair.drug}`,
          pair.message
        )
      );
    }
  }
  return alerts;
}
function checkCardiovascular(input) {
  const alerts = [];
  const v = input.vitals ?? {};
  const l = input.labs ?? {};
  if (v.systolicBP !== void 0 && v.diastolicBP !== void 0 && v.systolicBP >= 180 && v.diastolicBP >= 120) {
    alerts.push(
      makeExtendedAlert(
        "cardiovascular",
        "HypertensiveCrisis",
        "critical",
        `Hypertensive Crisis: BP ${v.systolicBP}/${v.diastolicBP} mmHg`,
        "SBP ≥180 AND DBP ≥120 — risk of end-organ damage (stroke, MI, renal failure).",
        "Consider IV antihypertensive; avoid rapid correction (max 25% reduction in 1h)."
      )
    );
  }
  if (v.heartRate !== void 0 && v.heartRate < 50) {
    alerts.push(
      makeExtendedAlert(
        "cardiovascular",
        "Bradycardia",
        v.heartRate < 40 ? "critical" : "warning",
        `Bradycardia: HR ${v.heartRate} bpm`,
        "HR < 50 bpm — check for complete heart block, drug toxicity (digoxin, beta-blocker)."
      )
    );
  }
  if (v.heartRate !== void 0 && v.heartRate > 120) {
    alerts.push(
      makeExtendedAlert(
        "cardiovascular",
        "Tachycardia",
        v.heartRate > 150 ? "critical" : "warning",
        `Tachycardia: HR ${v.heartRate} bpm`,
        "HR > 120 bpm — evaluate for sepsis, haemorrhage, PE, thyroid storm, AF."
      )
    );
  }
  const hasEdema = v.hasEdema === true;
  const bnpHigh = l.bnp !== void 0 && l.bnp > 100;
  if (hasEdema && (bnpHigh || v.spo2 !== void 0 && v.spo2 < 94)) {
    alerts.push(
      makeExtendedAlert(
        "cardiovascular",
        "HeartFailure",
        "warning",
        `Heart Failure Alert: Oedema + ${bnpHigh ? `BNP ${l.bnp} pg/mL` : `SpO₂ ${v.spo2}%`}`,
        "Features consistent with decompensated heart failure.",
        "Assess fluid status, consider diuresis and cardiology review."
      )
    );
  }
  return alerts;
}
function checkRespiratory(input) {
  const alerts = [];
  const v = input.vitals ?? {};
  const diagnoses = (input.diagnoses ?? []).map((d) => d.toLowerCase());
  const hasAsthma = diagnoses.some((d) => d.includes("asthma"));
  const hasCOPD = diagnoses.some(
    (d) => d.includes("copd") || d.includes("chronic obstructive")
  );
  const spo2 = v.spo2;
  const rr = v.respiratoryRate;
  if (hasAsthma && spo2 !== void 0 && spo2 < 94) {
    alerts.push(
      makeExtendedAlert(
        "respiratory",
        "AsthmaExacerbation",
        spo2 < 90 ? "critical" : "warning",
        `Asthma Exacerbation: SpO₂ ${spo2}%`,
        "Asthma + hypoxaemia. Assess severity with PEFR.",
        "Evaluate for O₂ therapy / ventilatory support"
      )
    );
  }
  if (hasCOPD && rr !== void 0 && rr > 24) {
    alerts.push(
      makeExtendedAlert(
        "respiratory",
        "COPDExacerbation",
        rr > 30 ? "critical" : "warning",
        `COPD Exacerbation: RR ${rr}/min`,
        "COPD + tachypnoea. Review O₂ target (88–92%), consider NIV."
      )
    );
  }
  const hrHigh = v.heartRate !== void 0 && v.heartRate > 100;
  const spo2Low = spo2 !== void 0 && spo2 < 94;
  const hasPERisk = input.peRiskFactors === true;
  if (hrHigh && spo2Low && hasPERisk) {
    alerts.push(
      makeExtendedAlert(
        "respiratory",
        "PERisk",
        "warning",
        `Pulmonary Embolism Risk: HR ${v.heartRate}, SpO₂ ${spo2}%`,
        "Tachycardia + hypoxaemia + PE risk factors (immobility/surgery/DVT).",
        "Consider CTPA or V/Q scan. Wells score calculation recommended."
      )
    );
  }
  return alerts;
}
function checkEndocrine(input) {
  const alerts = [];
  const v = input.vitals ?? {};
  const l = input.labs ?? {};
  const diagnoses = (input.diagnoses ?? []).map((d) => d.toLowerCase());
  const glucose = l.glucose;
  const hasHyperthyroid = diagnoses.some(
    (d) => d.includes("hyperthyroid") || d.includes("graves")
  );
  const hasHypothyroid = diagnoses.some(
    (d) => d.includes("hypothyroid") || d.includes("myxedema")
  );
  if (glucose !== void 0 && glucose < 54) {
    alerts.push(
      makeExtendedAlert(
        "endocrine",
        "SevereHypoglycemia",
        "critical",
        `Severe Hypoglycemia: Glucose ${glucose} mg/dL`,
        "Glucose < 54 mg/dL — risk of seizure, coma.",
        "Administer dextrose 50% 50ml IV or oral glucose immediately"
      )
    );
  } else if (glucose !== void 0 && glucose < 70) {
    alerts.push(
      makeExtendedAlert(
        "endocrine",
        "Hypoglycemia",
        "warning",
        `Hypoglycemia: Glucose ${glucose} mg/dL`,
        "Glucose < 70 mg/dL. Treat with oral glucose if conscious.",
        "Administer dextrose 50% 50ml IV or oral glucose immediately"
      )
    );
  }
  if (glucose !== void 0 && glucose > 250) {
    const l_val = input.labs ?? {};
    const hasDKACriteria = l_val.ph !== void 0 && l_val.ph < 7.35 && l_val.bicarbonate !== void 0 && l_val.bicarbonate < 18;
    if (hasDKACriteria) {
      alerts.push(
        makeExtendedAlert(
          "endocrine",
          "DKARisk",
          "critical",
          `DKA Risk: Glucose ${glucose} + Metabolic Acidosis (pH ${l_val.ph})`,
          "Hyperglycaemia + metabolic acidosis — DKA protocol required.",
          "IV insulin infusion, IV fluids, electrolyte correction; endocrinology review."
        )
      );
    } else {
      alerts.push(
        makeExtendedAlert(
          "endocrine",
          "Hyperglycemia",
          "warning",
          `Hyperglycemia: Glucose ${glucose} mg/dL`,
          "Glucose > 250 mg/dL. Check ketones, review insulin regimen."
        )
      );
    }
  }
  if (hasHyperthyroid && v.heartRate !== void 0 && v.heartRate > 140 && v.temperature !== void 0 && v.temperature > 38.5) {
    alerts.push(
      makeExtendedAlert(
        "endocrine",
        "ThyroidStorm",
        "critical",
        `Thyroid Storm: HR ${v.heartRate} bpm, Temp ${v.temperature}°F`,
        "Hyperthyroid + tachycardia + fever — thyroid storm (Burch–Wartofsky criteria).",
        "PTU/carbimazole, beta-blockers, hydrocortisone, iodine solution — ICU admission."
      )
    );
  }
  if (hasHypothyroid && v.temperature !== void 0 && v.temperature < 35 && v.heartRate !== void 0 && v.heartRate < 50) {
    alerts.push(
      makeExtendedAlert(
        "endocrine",
        "MyxedemaComa",
        "critical",
        `Myxedema Coma Risk: Temp ${v.temperature}°F, HR ${v.heartRate} bpm`,
        "Hypothyroid + hypothermia + bradycardia — myxedema coma.",
        "IV levothyroxine + hydrocortisone, warming, respiratory support."
      )
    );
  }
  return alerts;
}
function checkNeurology(input) {
  const alerts = [];
  const v = input.vitals ?? {};
  const l = input.labs ?? {};
  const gcs = v.gcs;
  const glucose = l.glucose;
  const sodium = l.sodium;
  if (gcs !== void 0 && gcs <= 8) {
    alerts.push(
      makeExtendedAlert(
        "neurology",
        "LowGCS",
        gcs <= 5 ? "critical" : "warning",
        `Low GCS: ${gcs}/15`,
        "GCS ≤ 8 indicates impaired consciousness. Airway at risk.",
        "Assess airway, consider CT head, check glucose"
      )
    );
  }
  const severeHypoNa = sodium !== void 0 && sodium < 120;
  const severeHypoGlucose = glucose !== void 0 && glucose < 54;
  const lowGCS = gcs !== void 0 && gcs <= 8;
  if (severeHypoNa || severeHypoGlucose || lowGCS) {
    const reasons = [];
    if (severeHypoNa) reasons.push(`Na⁺ ${sodium} mmol/L`);
    if (severeHypoGlucose) reasons.push(`Glucose ${glucose} mg/dL`);
    if (lowGCS) reasons.push(`GCS ${gcs}`);
    alerts.push(
      makeExtendedAlert(
        "neurology",
        "SeizureRisk",
        "warning",
        "Seizure Risk",
        `Contributing factors: ${reasons.join(", ")}`,
        "Assess airway, consider CT head, check glucose"
      )
    );
  }
  return alerts;
}
function checkInfectionControl(input) {
  const alerts = [];
  const v = input.vitals ?? {};
  const l = input.labs ?? {};
  const meds = input.medications ?? [];
  const hasFever = v.temperature !== void 0 && v.temperature > 38;
  const ancLow = l.anc !== void 0 && l.anc < 500;
  if (hasFever && ancLow) {
    alerts.push(
      makeExtendedAlert(
        "infection_control",
        "NeutropenicSepsis",
        "critical",
        `Neutropenic Sepsis: Temp ${v.temperature}°F, ANC ${l.anc}`,
        "Fever + severe neutropenia. Medical emergency — mortality >50% if untreated.",
        "Blood cultures × 2, broad-spectrum antibiotics within 1 hour, isolate patient."
      )
    );
  }
  for (const med of meds) {
    const norm = normalizeDrug(med.name);
    for (const [abxClass, coverage] of Object.entries(ANTIBIOTIC_COVERAGE)) {
      if (!norm.includes(abxClass)) continue;
      const diagnoses = (input.diagnoses ?? []).map((d) => d.toLowerCase());
      const uncoveredPathogen = diagnoses.find(
        (d) => !coverage.some((c) => d.includes(c))
      );
      if (uncoveredPathogen) {
        alerts.push(
          makeExtendedAlert(
            "infection_control",
            "AntibioticMismatch",
            "warning",
            `Antibiotic Mismatch: ${med.name} vs ${uncoveredPathogen}`,
            `${med.name} (${abxClass} class) may not cover ${uncoveredPathogen}.`,
            "Review culture results and local antibiogram."
          )
        );
        break;
      }
    }
  }
  return alerts;
}
function checkHospitalWorkflow(input) {
  const alerts = [];
  const wf = input.workflowData ?? {};
  const now = Date.now();
  for (const admin of wf.medicationAdministrations ?? []) {
    if (admin.status === "not_given") {
      const notGivenCount = admin.scheduledTimes.length - admin.administeredTimes.length;
      if (notGivenCount >= 2) {
        alerts.push(
          makeExtendedAlert(
            "hospital_workflow",
            "MissedDose",
            "warning",
            `Missed Dose: ${admin.drugName} — ${notGivenCount} consecutive doses not given`,
            `Scheduled: ${admin.scheduledTimes.join(", ")}. Administered: ${admin.administeredTimes.length ? admin.administeredTimes.join(", ") : "None"}`
          )
        );
      }
    }
  }
  for (const inv of wf.investigations ?? []) {
    if (inv.status === "sample_collected") {
      const orderedAt = new Date(inv.orderedAt).getTime();
      const hoursElapsed = (now - orderedAt) / 36e5;
      if (hoursElapsed > 48) {
        alerts.push(
          makeExtendedAlert(
            "hospital_workflow",
            "OverdueInvestigation",
            "info",
            `Overdue Investigation: ${inv.name} (${Math.round(hoursElapsed)}h since ordered)`,
            `Status: Sample Collected — result not yet received after ${Math.round(hoursElapsed)}h.`
          )
        );
      }
    }
  }
  if (wf.isScheduledForDischarge && wf.hasActiveCriticalAlert) {
    alerts.push(
      makeExtendedAlert(
        "hospital_workflow",
        "DischargeRisk",
        "critical",
        "Discharge Risk: Active Critical Alert Present",
        "Patient is flagged for discharge but has an unresolved critical clinical alert.",
        "Resolve all critical alerts before proceeding with discharge."
      )
    );
  }
  return alerts;
}
function checkExtendedClinicalAlerts(input) {
  return [
    ...checkCriticalEmergency(input),
    ...checkRenalElectrolyte(input),
    ...checkMedicationSafety(input),
    ...checkCardiovascular(input),
    ...checkRespiratory(input),
    ...checkEndocrine(input),
    ...checkNeurology(input),
    ...checkInfectionControl(input),
    ...checkHospitalWorkflow(input)
  ];
}
function calculateNEWS2(vitals) {
  const parseNum = (v) => v ? Number.parseFloat(v) : void 0;
  const rr = parseNum(vitals.respiratoryRate);
  const spo2 = parseNum(vitals.oxygenSaturation);
  const temp = parseNum(vitals.temperature);
  const bpStr = vitals.bloodPressure ?? "";
  const sysBP = bpStr.includes("/") ? Number.parseFloat(bpStr.split("/")[0]) : void 0;
  const pulse = parseNum(vitals.pulse);
  let rrScore = 0;
  if (rr !== void 0) {
    if (rr <= 8) rrScore = 3;
    else if (rr <= 11) rrScore = 1;
    else if (rr <= 20) rrScore = 0;
    else if (rr <= 24) rrScore = 2;
    else rrScore = 3;
  }
  let spo2Score = 0;
  if (spo2 !== void 0) {
    if (spo2 <= 91) spo2Score = 3;
    else if (spo2 <= 93) spo2Score = 2;
    else if (spo2 <= 95) spo2Score = 1;
    else spo2Score = 0;
  }
  let tempScore = 0;
  if (temp !== void 0) {
    if (temp <= 35) tempScore = 3;
    else if (temp <= 36) tempScore = 1;
    else if (temp <= 38) tempScore = 0;
    else if (temp <= 39) tempScore = 1;
    else tempScore = 2;
  }
  let sysBPScore = 0;
  if (sysBP !== void 0) {
    if (sysBP <= 90) sysBPScore = 3;
    else if (sysBP <= 100) sysBPScore = 2;
    else if (sysBP <= 110) sysBPScore = 1;
    else if (sysBP <= 219) sysBPScore = 0;
    else sysBPScore = 3;
  }
  let pulseScore = 0;
  if (pulse !== void 0) {
    if (pulse <= 40) pulseScore = 3;
    else if (pulse <= 50) pulseScore = 1;
    else if (pulse <= 90) pulseScore = 0;
    else if (pulse <= 110) pulseScore = 1;
    else if (pulse <= 130) pulseScore = 2;
    else pulseScore = 3;
  }
  const consciousnessScore = 0;
  const score = rrScore + spo2Score + tempScore + sysBPScore + pulseScore + consciousnessScore;
  let risk = "low";
  if (score >= 7) risk = "high";
  else if (score >= 5) risk = "medium";
  return {
    score,
    risk,
    breakdown: {
      rr: rrScore,
      spo2: spo2Score,
      temp: tempScore,
      sysBP: sysBPScore,
      pulse: pulseScore,
      consciousness: consciousnessScore
    }
  };
}
function checkTrendAlerts(vitalHistory, labHistory) {
  const alerts = [];
  function isRising(values) {
    if (values.length < 2) return false;
    return values[values.length - 1] > values[0];
  }
  function isFalling(values) {
    if (values.length < 2) return false;
    return values[values.length - 1] < values[0];
  }
  function percentChange(values) {
    if (values.length < 2 || values[0] === 0) return 0;
    return (values[values.length - 1] - values[0]) / values[0] * 100;
  }
  const creatReadings = labHistory.filter((l) => l.creatinine !== void 0).slice(-3).map((l) => l.creatinine);
  if (creatReadings.length >= 2 && isRising(creatReadings) && percentChange(creatReadings) >= 10) {
    alerts.push({
      id: makeAlertId("trend_creatinine"),
      metric: "Creatinine",
      severity: "warning",
      trend: "rising",
      message: "Creatinine rising — monitor for AKI",
      details: `Values: ${creatReadings.map((v) => v.toFixed(2)).join(" → ")} mg/dL (+${percentChange(creatReadings).toFixed(0)}%)`
    });
  }
  const uoReadings = vitalHistory.filter((v) => v.urineOutputMlKgHr !== void 0).slice(-3).map((v) => v.urineOutputMlKgHr);
  if (uoReadings.length >= 2 && isFalling(uoReadings)) {
    alerts.push({
      id: makeAlertId("trend_urine_output"),
      metric: "Urine Output",
      severity: "warning",
      trend: "falling",
      message: "Urine output declining",
      details: `Values: ${uoReadings.map((v) => v.toFixed(2)).join(" → ")} ml/kg/hr`
    });
  }
  const hbReadings = labHistory.filter((l) => l.hemoglobin !== void 0).slice(-3).map((l) => l.hemoglobin);
  if (hbReadings.length >= 2 && isFalling(hbReadings) && percentChange(hbReadings) <= -5) {
    alerts.push({
      id: makeAlertId("trend_hemoglobin"),
      metric: "Hemoglobin",
      severity: "warning",
      trend: "falling",
      message: "Hemoglobin falling — check for bleeding",
      details: `Values: ${hbReadings.map((v) => v.toFixed(1)).join(" → ")} g/dL (${percentChange(hbReadings).toFixed(0)}%)`
    });
  }
  return alerts;
}
export {
  ClipboardCheck as C,
  calculateNEWS2 as a,
  checkTrendAlerts as b,
  checkExtendedClinicalAlerts as c,
  checkVitalAlerts as d
};
