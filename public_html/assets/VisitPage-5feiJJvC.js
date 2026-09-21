import { i as createLucideIcon, r as reactExports, j as jsxRuntimeExports, I as Input, B as Button, bs as Check, h as Badge, X, L as Label, D as Dialog, s as DialogContent, t as DialogHeader, v as DialogTitle, u as ue, ap as getDoctorEmail, aX as loadFamilyHistoryRisk, q as useEmailAuth, T as Tabs, l as TabsList, n as TabsTrigger, p as TabsContent, z as LoaderCircle, bI as saveFamilyHistoryRisk, bC as loadFromStorage, b4 as useGetPatient, aj as useCreateVisit } from "./index-DJeWhCy-.js";
import { S as Skeleton } from "./skeleton-DqU5IOMD.js";
import { C as Card, a as CardHeader, c as CardTitle, b as CardContent } from "./card-COhiAhz1.js";
import { T as Textarea } from "./textarea-BQiWEu5n.js";
import { P as Pencil } from "./pencil-BZAaPpo6.js";
import { P as Plus } from "./plus-CHPIrJ6M.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CnbMZ7S8.js";
import { S as Search } from "./search-BLymxia-.js";
import { U as Upload } from "./upload-10Urw3kY.js";
import { S as Sparkles } from "./sparkles-BXWJULex.js";
import { T as TrendingUp } from "./trending-up-B6DQx806.js";
import { R as ResponsiveContainer, X as XAxis, Y as YAxis, z as Tooltip, E as Legend } from "./generateCategoricalChart-Dou_1HkF.js";
import { L as LineChart, C as CartesianGrid, a as Line, Q as QuestionStepper, W as Wind, S as SystemicExaminationSection } from "./SystemicExaminationSection-CCL-4QQD.js";
import { A as Activity } from "./activity-BRRgo98q.js";
import { H as Heart } from "./heart-CnN_F_j3.js";
import { T as Thermometer } from "./thermometer-CrPE917O.js";
import { S as Save } from "./save-DzMd4SiT.js";
import { A as ArrowLeft } from "./arrow-left-D0QK_o3f.js";
import "./layers-DwYKTjmE.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "M10 12h4", key: "a56b0p" }]
];
const Archive = createLucideIcon("archive", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const CircleHelp = createLucideIcon("circle-help", __iconNode);
const BADGE_PALETTE$1 = [
  {
    base: "bg-blue-100 text-blue-800 border-blue-300",
    active: "bg-blue-500 text-white border-blue-500"
  },
  {
    base: "bg-green-100 text-green-800 border-green-300",
    active: "bg-green-500 text-white border-green-500"
  },
  {
    base: "bg-amber-100 text-amber-800 border-amber-300",
    active: "bg-amber-500 text-white border-amber-500"
  },
  {
    base: "bg-purple-100 text-purple-800 border-purple-300",
    active: "bg-purple-500 text-white border-purple-500"
  },
  {
    base: "bg-rose-100 text-rose-800 border-rose-300",
    active: "bg-rose-500 text-white border-rose-500"
  },
  {
    base: "bg-cyan-100 text-cyan-800 border-cyan-300",
    active: "bg-cyan-500 text-white border-cyan-500"
  },
  {
    base: "bg-orange-100 text-orange-800 border-orange-300",
    active: "bg-orange-500 text-white border-orange-500"
  },
  {
    base: "bg-teal-100 text-teal-800 border-teal-300",
    active: "bg-teal-500 text-white border-teal-500"
  },
  {
    base: "bg-indigo-100 text-indigo-800 border-indigo-300",
    active: "bg-indigo-500 text-white border-indigo-500"
  },
  {
    base: "bg-lime-100 text-lime-800 border-lime-300",
    active: "bg-lime-600 text-white border-lime-600"
  }
];
function CustomBadgeAdder({
  field,
  customField,
  examData,
  isMulti = true,
  onUpdate,
  placeholder = "Add custom finding..."
}) {
  const [inputVal, setInputVal] = reactExports.useState("");
  const [editingValue, setEditingValue] = reactExports.useState(null);
  const [editText, setEditText] = reactExports.useState("");
  const editRef = reactExports.useRef(null);
  const rawCustom = examData[customField];
  const customOptions = Array.isArray(rawCustom) ? rawCustom : [];
  const rawSelected = examData[field];
  const selected = Array.isArray(rawSelected) ? rawSelected : typeof rawSelected === "string" ? rawSelected : isMulti ? [] : "";
  const isSelected = (val) => isMulti ? selected.includes(val) : selected === val;
  const toggleValue = (val) => {
    if (isMulti) {
      const cur = Array.isArray(selected) ? selected : [];
      onUpdate({
        [field]: cur.includes(val) ? cur.filter((v) => v !== val) : [...cur, val]
      });
    } else {
      onUpdate({ [field]: selected === val ? "" : val });
    }
  };
  const addCustom = () => {
    const trimmed = inputVal.trim();
    if (!trimmed || customOptions.includes(trimmed)) return;
    const newOptions = [...customOptions, trimmed];
    const patch = { [customField]: newOptions };
    if (isMulti) {
      const cur = Array.isArray(selected) ? selected : [];
      patch[field] = [...cur, trimmed];
    } else {
      patch[field] = trimmed;
    }
    onUpdate(patch);
    setInputVal("");
  };
  const startEdit = (val) => {
    setEditingValue(val);
    setEditText(val);
    setTimeout(() => {
      var _a;
      return (_a = editRef.current) == null ? void 0 : _a.focus();
    }, 0);
  };
  const commitEdit = () => {
    if (!editingValue) return;
    const newText = editText.trim();
    if (!newText || newText === editingValue) {
      setEditingValue(null);
      return;
    }
    const newOptions = customOptions.map(
      (o) => o === editingValue ? newText : o
    );
    const patch = { [customField]: newOptions };
    if (isMulti) {
      const cur = Array.isArray(selected) ? selected : [];
      patch[field] = cur.map((v) => v === editingValue ? newText : v);
    } else {
      if (selected === editingValue) patch[field] = newText;
    }
    onUpdate(patch);
    setEditingValue(null);
  };
  const deleteCustom = (val) => {
    const newOptions = customOptions.filter((o) => o !== val);
    const patch = { [customField]: newOptions };
    if (isMulti) {
      const cur = Array.isArray(selected) ? selected : [];
      patch[field] = cur.filter((v) => v !== val);
    } else {
      if (selected === val) patch[field] = "";
    }
    onUpdate(patch);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    customOptions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: customOptions.map((opt, optIdx) => {
      const colors = BADGE_PALETTE$1[optIdx % BADGE_PALETTE$1.length];
      const active = isSelected(opt);
      if (editingValue === opt) {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              ref: editRef,
              value: editText,
              onChange: (e) => setEditText(e.target.value),
              onBlur: commitEdit,
              onKeyDown: (e) => {
                if (e.key === "Enter") commitEdit();
                if (e.key === "Escape") setEditingValue(null);
              },
              className: "h-7 text-xs w-36 px-2"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              size: "icon",
              variant: "ghost",
              className: "h-6 w-6 text-green-600",
              onClick: commitEdit,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" })
            }
          )
        ] }, opt);
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Badge,
        {
          variant: "outline",
          className: `cursor-pointer text-sm py-2 px-2 flex items-center gap-1 group border transition-all min-h-[36px] ${active ? colors.active : colors.base}`,
          onClick: () => toggleValue(opt),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: opt }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "ml-1 opacity-60 hover:opacity-100 transition-opacity",
                onClick: (e) => {
                  e.stopPropagation();
                  startEdit(opt);
                },
                title: "Edit",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3 w-3" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "opacity-60 hover:opacity-100 transition-opacity",
                onClick: (e) => {
                  e.stopPropagation();
                  deleteCustom(opt);
                },
                title: "Delete",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" })
              }
            )
          ]
        },
        opt
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: inputVal,
          onChange: (e) => setInputVal(e.target.value),
          onKeyDown: (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addCustom();
            }
          },
          placeholder,
          className: "h-8 text-xs flex-1 max-w-xs"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          size: "icon",
          variant: "outline",
          className: "h-8 w-8 flex-shrink-0 min-h-[44px] min-w-[44px]",
          onClick: addCustom,
          disabled: !inputVal.trim(),
          title: "Add custom finding",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" })
        }
      )
    ] })
  ] });
}
const cvsData = {
  inspection: {
    precordium: [
      { en: "Normal", bn: "স্বাভাবিক" },
      { en: "Precordial bulge", bn: "প্রিকর্ডিয়াল ফোলা" },
      { en: "Visible pulsations", bn: "দৃশ্যমান স্পন্দন" },
      { en: "Surgical scar", bn: "অপারেশনের দাগ" },
      { en: "Pacemaker scar", bn: "পেসমেকারের দাগ" }
    ],
    apexBeatVisible: [
      { en: "Visible", bn: "দৃশ্যমান" },
      { en: "Not visible", bn: "দৃশ্যমান নয়" }
    ],
    peripheralSigns: [
      { en: "No peripheral oedema", bn: "পেরিফেরাল শোথ নেই" },
      { en: "Ankle oedema present", bn: "গোড়ালি ফোলা আছে" },
      { en: "Facial puffiness", bn: "মুখ ফোলা" },
      { en: "Raised JVP visible", bn: "জেভিপি বৃদ্ধি দৃশ্যমান" },
      { en: "Cyanosis", bn: "নীলাভ বর্ণ" },
      { en: "Pallor", bn: "রক্তহীনতা" },
      { en: "Clubbing", bn: "আঙুল ফুলে যাওয়া" }
    ]
  },
  palpation: {
    apexBeat: [
      { en: "Normal position (5th ICS MCL)", bn: "স্বাভাবিক অবস্থান" },
      { en: "Displaced laterally", bn: "পার্শ্বে বিচ্যুত" },
      { en: "Displaced downward", bn: "নীচে বিচ্যুত" },
      { en: "Not palpable", bn: "অনুভব করা যাচ্ছে না" },
      { en: "Heaving", bn: "হেভিং" },
      { en: "Tapping", bn: "ট্যাপিং" }
    ],
    thrills: [
      { en: "No thrill", bn: "কোনো কম্পন নেই" },
      { en: "Systolic thrill", bn: "সিস্টোলিক কম্পন" },
      { en: "Diastolic thrill", bn: "ডায়াস্টোলিক কম্পন" },
      { en: "Thrill at apex", bn: "অ্যাপেক্সে কম্পন" },
      { en: "Thrill at base", bn: "বেসে কম্পন" }
    ],
    parasternal: [
      { en: "No parasternal heave", bn: "প্যারাস্টার্নাল হেভ নেই" },
      { en: "Left parasternal heave", bn: "বাম প্যারাস্টার্নাল হেভ" },
      { en: "Right parasternal heave", bn: "ডান প্যারাস্টার্নাল হেভ" }
    ]
  },
  percussion: {
    cardiacDullness: [
      { en: "Normal cardiac dullness", bn: "স্বাভাবিক কার্ডিয়াক ডালনেস" },
      { en: "Enlarged cardiac dullness", bn: "বর্ধিত কার্ডিয়াক ডালনেস" },
      { en: "Shifted to left", bn: "বামে স্থানান্তরিত" },
      { en: "Shifted to right", bn: "ডানে স্থানান্তরিত" }
    ],
    pericardialEffusion: [
      { en: "No signs of effusion", bn: "ইফিউশনের কোনো চিহ্ন নেই" },
      { en: "Stony dullness suggesting effusion", bn: "ইফিউশন সূচিত ডালনেস" }
    ]
  },
  auscultation: {
    heartSounds: [
      { en: "S1 S2 normal", bn: "এস১ এস২ স্বাভাবিক" },
      { en: "S1 loud", bn: "এস১ উচ্চ" },
      { en: "S1 soft", bn: "এস১ মৃদু" },
      { en: "S2 loud", bn: "এস২ উচ্চ" },
      { en: "S2 soft", bn: "এস২ মৃদু" },
      { en: "S2 split", bn: "এস২ বিভক্ত" },
      { en: "Muffled heart sounds", bn: "বিমূর্ত হার্টের শব্দ" }
    ],
    addedSounds: [
      { en: "S3 (ventricular gallop)", bn: "এস৩ (ভেন্ট্রিকুলার গ্যালপ)" },
      { en: "S4 (atrial gallop)", bn: "এস৪ (এট্রিয়াল গ্যালপ)" },
      { en: "Opening snap", bn: "ওপেনিং স্ন্যাপ" },
      { en: "Ejection click", bn: "ইজেকশন ক্লিক" },
      { en: "Pericardial rub", bn: "পেরিকার্ডিয়াল রাব" }
    ],
    murmurs: [
      { en: "No murmur", bn: "কোনো মার্মার নেই" },
      { en: "Systolic murmur", bn: "সিস্টোলিক মার্মার" },
      { en: "Diastolic murmur", bn: "ডায়াস্টোলিক মার্মার" },
      { en: "Continuous murmur", bn: "ধারাবাহিক মার্মার" },
      { en: "Murmur at apex", bn: "অ্যাপেক্সে মার্মার" },
      { en: "Murmur at aortic area", bn: "মহাধমনী অঞ্চলে মার্মার" },
      { en: "Murmur at pulmonary area", bn: "পালমোনারি অঞ্চলে মার্মার" },
      { en: "Murmur at tricuspid area", bn: "ট্রাইকাসপিড অঞ্চলে মার্মার" }
    ],
    lungBases: [
      { en: "Clear", bn: "পরিষ্কার" },
      { en: "Basal crackles", bn: "বেসাল ক্র্যাকল" },
      { en: "Bilateral crackles", bn: "দ্বিপাক্ষিক ক্র্যাকল" }
    ]
  },
  specialTests: [
    { en: "JVP normal", bn: "জেভিপি স্বাভাবিক" },
    { en: "JVP raised", bn: "জেভিপি বৃদ্ধি" },
    { en: "JVP with hepatojugular reflux", bn: "হেপাটোজুগুলার রিফ্লাক্স" },
    { en: "All peripheral pulses present", bn: "সব পেরিফেরাল নাড়ি আছে" },
    { en: "Radial pulse weak", bn: "রেডিয়াল নাড়ি দুর্বল" },
    { en: "Pedal pulses absent", bn: "পেডাল নাড়ি অনুপস্থিত" },
    { en: "Radio-femoral delay", bn: "রেডিও-ফেমোরাল বিলম্ব" },
    { en: "Ankle-brachial index reduced", bn: "অ্যাঙ্কল-ব্র্যাকিয়াল ইনডেক্স কম" },
    { en: "Capillary refill < 2 sec", bn: "ক্যাপিলারি রিফিল < ২ সেকেন্ড" },
    { en: "Capillary refill > 2 sec", bn: "ক্যাপিলারি রিফিল > ২ সেকেন্ড" },
    { en: "Pitting oedema (grade 1)", bn: "পিটিং শোথ (গ্রেড ১)" },
    { en: "Pitting oedema (grade 2)", bn: "পিটিং শোথ (গ্রেড ২)" },
    { en: "Pitting oedema (grade 3)", bn: "পিটিং শোথ (গ্রেড ৩)" }
  ]
};
function CardiovascularExam({
  data,
  onChange
}) {
  const [examData, setExamData] = reactExports.useState(
    data || {
      precordium: [],
      apex_beat_visible: "",
      peripheral_signs: [],
      apex_beat: "",
      thrills: [],
      parasternal: "",
      cardiac_dullness: "",
      pericardial_effusion: "",
      heart_sounds: [],
      added_sounds: [],
      murmurs: [],
      lung_bases: "",
      special_tests: []
    }
  );
  const update = (patch) => {
    const newData = { ...examData, ...patch };
    setExamData(newData);
    onChange(newData);
  };
  const toggleMulti = (field, value) => {
    const current = examData[field] || [];
    update({
      [field]: current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
    });
  };
  const setSingle = (field, value) => update({ [field]: examData[field] === value ? "" : value });
  const BadgeGroup = ({
    label,
    field,
    options,
    single,
    customField,
    accentColor
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: options.map((opt) => {
      const active = single ? examData[field] === opt.en : (examData[field] || []).includes(opt.en);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Badge,
        {
          variant: active ? "default" : "outline",
          className: `cursor-pointer text-sm py-2 px-3 transition-all ${active ? `bg-${accentColor || "rose-600"} border-transparent` : ""}`,
          onClick: () => single ? setSingle(field, opt.en) : toggleMulti(field, opt.en),
          children: [
            opt.en,
            " / ",
            opt.bn
          ]
        },
        opt.en
      );
    }) }),
    customField && /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBadgeAdder,
      {
        field,
        customField,
        examData,
        isMulti: !single,
        accentColor: accentColor || "rose-600",
        onUpdate: update
      }
    )
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-rose-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-rose-500 to-rose-600 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-slate-700 text-sm", children: "1" }),
        "Inspection / পরিদর্শন"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BadgeGroup,
          {
            label: "Precordium / প্রিকর্ডিয়াম",
            field: "precordium",
            options: cvsData.inspection.precordium,
            customField: "custom_precordium",
            accentColor: "rose-600"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BadgeGroup,
          {
            label: "Apex Beat (Visible) / অ্যাপেক্স বিট দৃশ্যমানতা",
            field: "apex_beat_visible",
            options: cvsData.inspection.apexBeatVisible,
            single: true,
            accentColor: "rose-600"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BadgeGroup,
          {
            label: "Peripheral Signs / পেরিফেরাল চিহ্ন",
            field: "peripheral_signs",
            options: cvsData.inspection.peripheralSigns,
            customField: "custom_peripheral_signs",
            accentColor: "rose-600"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-orange-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-orange-500 to-orange-600 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-slate-700 text-sm", children: "2" }),
        "Palpation / স্পর্শ পরীক্ষা"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BadgeGroup,
          {
            label: "Apex Beat Position / অ্যাপেক্স বিটের অবস্থান",
            field: "apex_beat",
            options: cvsData.palpation.apexBeat,
            single: true,
            customField: "custom_apex_beat",
            accentColor: "orange-600"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BadgeGroup,
          {
            label: "Thrills / কম্পন",
            field: "thrills",
            options: cvsData.palpation.thrills,
            customField: "custom_thrills",
            accentColor: "orange-600"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BadgeGroup,
          {
            label: "Parasternal Heave / প্যারাস্টার্নাল হেভ",
            field: "parasternal",
            options: cvsData.palpation.parasternal,
            single: true,
            accentColor: "orange-600"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-amber-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-slate-700 text-sm", children: "3" }),
        "Percussion / পারকাশন"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BadgeGroup,
          {
            label: "Cardiac Dullness / কার্ডিয়াক ডালনেস",
            field: "cardiac_dullness",
            options: cvsData.percussion.cardiacDullness,
            single: true,
            customField: "custom_cardiac_dullness",
            accentColor: "amber-600"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BadgeGroup,
          {
            label: "Pericardial Signs / পেরিকার্ডিয়াল চিহ্ন",
            field: "pericardial_effusion",
            options: cvsData.percussion.pericardialEffusion,
            single: true,
            accentColor: "amber-600"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-purple-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-purple-500 to-purple-600 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-slate-700 text-sm", children: "4" }),
        "Auscultation / শ্রবণ পরীক্ষা"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BadgeGroup,
          {
            label: "Heart Sounds / হার্টের শব্দ",
            field: "heart_sounds",
            options: cvsData.auscultation.heartSounds,
            customField: "custom_heart_sounds",
            accentColor: "purple-600"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BadgeGroup,
          {
            label: "Added Sounds / অতিরিক্ত শব্দ",
            field: "added_sounds",
            options: cvsData.auscultation.addedSounds,
            customField: "custom_added_sounds",
            accentColor: "purple-600"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BadgeGroup,
          {
            label: "Murmurs / মার্মার",
            field: "murmurs",
            options: cvsData.auscultation.murmurs,
            customField: "custom_murmurs",
            accentColor: "purple-600"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BadgeGroup,
          {
            label: "Lung Bases / ফুসফুসের ভিত্তি",
            field: "lung_bases",
            options: cvsData.auscultation.lungBases,
            single: true,
            accentColor: "purple-600"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-teal-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-teal-500 to-teal-600 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white text-teal-600 rounded-full h-8 w-8 flex items-center justify-center font-bold text-sm", children: "5" }),
        "Special Tests / বিশেষ পরীক্ষা"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: cvsData.specialTests.map((test) => {
          const active = (examData.special_tests || []).includes(test.en);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: active ? "default" : "outline",
              className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-teal-600 border-transparent" : ""}`,
              onClick: () => toggleMulti("special_tests", test.en),
              children: [
                test.en,
                " / ",
                test.bn
              ]
            },
            test.en
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CustomBadgeAdder,
          {
            field: "special_tests",
            customField: "custom_special_tests",
            examData,
            isMulti: true,
            accentColor: "teal-600",
            onUpdate: update
          }
        )
      ] })
    ] })
  ] });
}
const gastrointestinalExamData = {
  inspection: {
    general: {
      en: "General Inspection",
      bn: "সাধারণ পরীক্ষা",
      findings: [
        { en: "Normal build", bn: "স্বাভাবিক গঠন" },
        { en: "Cachexia", bn: "কৃশতা" },
        { en: "Jaundice", bn: "জন্ডিস" },
        { en: "Pallor", bn: "ফ্যাকাশে" },
        { en: "Cyanosis", bn: "নীলাভ বর্ণ" },
        { en: "Clubbing", bn: "আঙুল ফুলে যাওয়া" },
        { en: "Koilonychia (spoon nails)", bn: "চামচ আকৃতির নখ" },
        { en: "Palmar erythema", bn: "হাতের তালু লাল" },
        { en: "Spider naevi", bn: "মাকড়সার মতো শিরা" }
      ]
    },
    abdomen: {
      en: "Abdominal Inspection",
      bn: "পেটের পরীক্ষা",
      findings: [
        { en: "Flat abdomen", bn: "সমতল পেট" },
        { en: "Distended abdomen", bn: "ফোলা পেট" },
        { en: "Scaphoid abdomen", bn: "দৈর্ঘ্য পেট" },
        { en: "Asymmetrical", bn: "অসম" },
        { en: "Visible peristalsis", bn: "দৃশ্যমান পেরিস্টালসিস" },
        { en: "Visible veins", bn: "দৃশ্যমান শিরা" },
        { en: "Umbilical hernia", bn: "নাভিতে হার্নিয়া" },
        { en: "Surgical scars", bn: "অপারেশনের দাগ" },
        { en: "Striae", bn: "প্রসারিত দাগ" },
        { en: "Caput medusae", bn: "মেডুসার মাথা" }
      ]
    }
  },
  palpation: {
    en: "Palpation",
    bn: "স্পর্শ পরীক্ষা",
    general: {
      en: "General palpation",
      bn: "সাধারণ স্পর্শ",
      findings: [
        { en: "Soft abdomen", bn: "নরম পেট" },
        { en: "Tender", bn: "ব্যথাযুক্ত" },
        { en: "Guarding", bn: "গার্ডিং" },
        { en: "Rigidity", bn: "শক্ত" },
        { en: "Rebound tenderness", bn: "রিবাউন্ড ব্যথা" },
        { en: "Mass present", bn: "গোটা আছে" }
      ]
    },
    organs: {
      en: "Organ palpation",
      bn: "অঙ্গ স্পর্শ",
      liver: {
        en: "Liver",
        bn: "যকৃত",
        options: [
          "Not palpable / স্পর্শ করা যায় না",
          "Palpable (normal) / স্পর্শযোগ্য (স্বাভাবিক)",
          "Enlarged / বড়",
          "Tender / ব্যথাযুক্ত",
          "Nodular / গোটাযুক্ত"
        ]
      },
      spleen: {
        en: "Spleen",
        bn: "প্লীহা",
        options: [
          "Not palpable / স্পর্শ করা যায় না",
          "Palpable (normal) / স্পর্শযোগ্য (স্বাভাবিক)",
          "Enlarged / বড়",
          "Tender / ব্যথাযুক্ত"
        ]
      },
      kidneys: {
        en: "Kidneys",
        bn: "কিডনি",
        options: [
          "Not palpable / স্পর্শ করা যায় না",
          "Right kidney palpable / ডান কিডনি স্পর্শযোগ্য",
          "Left kidney palpable / বাম কিডনি স্পর্শযোগ্য",
          "Both palpable / উভয়ই স্পর্শযোগ্য",
          "Ballotable / বেলটেবল"
        ]
      }
    }
  },
  percussion: {
    en: "Percussion",
    bn: "পারকাশন",
    findings: [
      { en: "Tympanic (normal)", bn: "টিম্পানিক (স্বাভাবিক)" },
      { en: "Dull - liver area", bn: "নিস্তব্ধ - যকৃত এলাকা" },
      { en: "Dull - spleen area", bn: "নিস্তব্ধ - প্লীহা এলাকা" },
      { en: "Shifting dullness (ascites)", bn: "সরানো নিস্তব্ধতা (জলোদর)" },
      { en: "Fluid thrill", bn: "তরল কম্পন" }
    ]
  },
  auscultation: {
    en: "Auscultation",
    bn: "শ্রবণ পরীক্ষা",
    bowelSounds: {
      en: "Bowel sounds",
      bn: "অন্ত্রের শব্দ",
      options: [
        { en: "Normal / স্বাভাবিক", value: "Normal" },
        { en: "Hyperactive / অতিসক্রিয়", value: "Hyperactive" },
        { en: "Hypoactive / কম সক্রিয়", value: "Hypoactive" },
        { en: "Absent / অনুপস্থিত", value: "Absent" },
        { en: "Tinkling sounds / ঝনঝন শব্দ", value: "Tinkling" }
      ]
    },
    vascularBruits: {
      en: "Vascular bruits",
      bn: "রক্তনালীর শব্দ",
      findings: [
        { en: "None / কোনটি নেই", bn: "কোনটি নেই" },
        { en: "Aortic bruit / মহাধমনীর শব্দ", bn: "মহাধমনীর শব্দ" },
        { en: "Renal artery bruit / কিডনির ধমনীর শব্দ", bn: "কিডনির ধমনীর শব্দ" },
        { en: "Hepatic bruit / যকৃতের শব্দ", bn: "যকৃতের শব্দ" }
      ]
    }
  },
  special: {
    en: "Special Tests",
    bn: "বিশেষ পরীক্ষা",
    tests: [
      { en: "Murphy's sign - Negative", bn: "মার্ফির চিহ্ন - নেতিবাচক" },
      { en: "Murphy's sign - Positive", bn: "মার্ফির চিহ্ন - ইতিবাচক" },
      { en: "Rovsing's sign - Negative", bn: "রভসিংয়ের চিহ্ন - নেতিবাচক" },
      { en: "Rovsing's sign - Positive", bn: "রভসিংয়ের চিহ্ন - ইতিবাচক" },
      { en: "McBurney's point tenderness", bn: "ম্যাকবার্নির পয়েন্ট ব্যথা" },
      { en: "Psoas sign - Negative", bn: "সোয়াস চিহ্ন - নেতিবাচক" },
      { en: "Psoas sign - Positive", bn: "সোয়াস চিহ্ন - ইতিবাচক" }
    ]
  }
};
function GastrointestinalExam({
  data,
  onChange
}) {
  const [examData, setExamData] = reactExports.useState(
    data || {
      inspection_general: [],
      inspection_abdomen: [],
      palpation_general: [],
      palpation_liver: "",
      palpation_spleen: "",
      palpation_kidneys: "",
      percussion: [],
      bowel_sounds: "",
      vascular_bruits: [],
      special_tests: []
    }
  );
  const update = (patch) => {
    const newData = { ...examData, ...patch };
    setExamData(newData);
    onChange(newData);
  };
  const handleMultiSelect = (category, value) => {
    const current = examData[category] || [];
    const updated = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
    update({ [category]: updated });
  };
  const handleSingleSelect = (field, value) => {
    update({ [field]: value });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-cyan-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white text-cyan-600 rounded-full h-8 w-8 flex items-center justify-center font-bold", children: "1" }),
        "Inspection / পরিদর্শন"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-5 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-base font-semibold text-slate-800", children: [
            gastrointestinalExamData.inspection.general.en,
            " /",
            " ",
            gastrointestinalExamData.inspection.general.bn
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: gastrointestinalExamData.inspection.general.findings.map(
            (finding) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: (examData.inspection_general || []).includes(finding.en) ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${(examData.inspection_general || []).includes(finding.en) ? "bg-cyan-600" : ""}`,
                onClick: () => handleMultiSelect("inspection_general", finding.en),
                children: [
                  finding.en,
                  " / ",
                  finding.bn
                ]
              },
              finding.en
            )
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomBadgeAdder,
            {
              field: "inspection_general",
              customField: "custom_inspection_general",
              examData,
              isMulti: true,
              accentColor: "cyan-600",
              onUpdate: update
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-base font-semibold text-slate-800", children: [
            gastrointestinalExamData.inspection.abdomen.en,
            " /",
            " ",
            gastrointestinalExamData.inspection.abdomen.bn
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: gastrointestinalExamData.inspection.abdomen.findings.map(
            (finding) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: (examData.inspection_abdomen || []).includes(finding.en) ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${(examData.inspection_abdomen || []).includes(finding.en) ? "bg-cyan-600" : ""}`,
                onClick: () => handleMultiSelect("inspection_abdomen", finding.en),
                children: [
                  finding.en,
                  " / ",
                  finding.bn
                ]
              },
              finding.en
            )
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomBadgeAdder,
            {
              field: "inspection_abdomen",
              customField: "custom_inspection_abdomen",
              examData,
              isMulti: true,
              accentColor: "cyan-600",
              onUpdate: update
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-lime-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-lime-500 to-lime-600 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white text-lime-600 rounded-full h-8 w-8 flex items-center justify-center font-bold", children: "2" }),
        gastrointestinalExamData.palpation.en,
        " /",
        " ",
        gastrointestinalExamData.palpation.bn
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-5 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-base font-semibold text-slate-800", children: [
            gastrointestinalExamData.palpation.general.en,
            " /",
            " ",
            gastrointestinalExamData.palpation.general.bn
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: gastrointestinalExamData.palpation.general.findings.map(
            (finding) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: (examData.palpation_general || []).includes(
                  finding.en
                ) ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${(examData.palpation_general || []).includes(finding.en) ? "bg-lime-600" : ""}`,
                onClick: () => handleMultiSelect("palpation_general", finding.en),
                children: [
                  finding.en,
                  " / ",
                  finding.bn
                ]
              },
              finding.en
            )
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomBadgeAdder,
            {
              field: "palpation_general",
              customField: "custom_palpation_general",
              examData,
              isMulti: true,
              accentColor: "lime-600",
              onUpdate: update
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-base font-semibold text-slate-800", children: [
            gastrointestinalExamData.palpation.organs.en,
            " /",
            " ",
            gastrointestinalExamData.palpation.organs.bn
          ] }),
          ["liver", "spleen", "kidneys"].map((organ) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm text-slate-600", children: [
              gastrointestinalExamData.palpation.organs[organ].en,
              " /",
              " ",
              gastrointestinalExamData.palpation.organs[organ].bn
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: gastrointestinalExamData.palpation.organs[organ].options.map(
              (opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: examData[`palpation_${organ}`] === opt ? "default" : "outline",
                  className: `cursor-pointer text-xs py-1.5 px-2 ${examData[`palpation_${organ}`] === opt ? "bg-lime-600" : ""}`,
                  onClick: () => handleSingleSelect(`palpation_${organ}`, opt),
                  children: opt
                },
                opt
              )
            ) })
          ] }, organ))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-fuchsia-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white text-fuchsia-600 rounded-full h-8 w-8 flex items-center justify-center font-bold", children: "3" }),
        gastrointestinalExamData.percussion.en,
        " /",
        " ",
        gastrointestinalExamData.percussion.bn
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3 pt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: gastrointestinalExamData.percussion.findings.map((finding) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Badge,
        {
          variant: (examData.percussion || []).includes(finding.en) ? "default" : "outline",
          className: `cursor-pointer text-sm py-2 px-3 ${(examData.percussion || []).includes(finding.en) ? "bg-fuchsia-600" : ""}`,
          onClick: () => handleMultiSelect("percussion", finding.en),
          children: [
            finding.en,
            " / ",
            finding.bn
          ]
        },
        finding.en
      )) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-sky-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-sky-500 to-sky-600 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white text-sky-600 rounded-full h-8 w-8 flex items-center justify-center font-bold", children: "4" }),
        gastrointestinalExamData.auscultation.en,
        " /",
        " ",
        gastrointestinalExamData.auscultation.bn
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-5 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-base font-semibold text-slate-800", children: [
            gastrointestinalExamData.auscultation.bowelSounds.en,
            " /",
            " ",
            gastrointestinalExamData.auscultation.bowelSounds.bn
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: gastrointestinalExamData.auscultation.bowelSounds.options.map(
            (option) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: examData.bowel_sounds === option.value ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${examData.bowel_sounds === option.value ? "bg-sky-600" : ""}`,
                onClick: () => handleSingleSelect("bowel_sounds", option.value),
                children: option.en
              },
              option.value
            )
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-base font-semibold text-slate-800", children: [
            gastrointestinalExamData.auscultation.vascularBruits.en,
            " /",
            " ",
            gastrointestinalExamData.auscultation.vascularBruits.bn
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: gastrointestinalExamData.auscultation.vascularBruits.findings.map(
            (finding) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: (examData.vascular_bruits || []).includes(
                  finding.en
                ) ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${(examData.vascular_bruits || []).includes(finding.en) ? "bg-sky-600" : ""}`,
                onClick: () => handleMultiSelect("vascular_bruits", finding.en),
                children: [
                  finding.en,
                  " / ",
                  finding.bn
                ]
              },
              finding.en
            )
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-violet-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-violet-500 to-violet-600 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white text-violet-600 rounded-full h-8 w-8 flex items-center justify-center font-bold", children: "5" }),
        gastrointestinalExamData.special.en,
        " /",
        " ",
        gastrointestinalExamData.special.bn
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: gastrointestinalExamData.special.tests.map((test) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Badge,
          {
            variant: (examData.special_tests || []).includes(test.en) ? "default" : "outline",
            className: `cursor-pointer text-sm py-2 px-3 ${(examData.special_tests || []).includes(test.en) ? "bg-violet-600" : ""}`,
            onClick: () => handleMultiSelect("special_tests", test.en),
            children: [
              test.en,
              " / ",
              test.bn
            ]
          },
          test.en
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CustomBadgeAdder,
          {
            field: "special_tests",
            customField: "custom_special_tests",
            examData,
            isMulti: true,
            accentColor: "violet-600",
            onUpdate: update
          }
        )
      ] })
    ] })
  ] });
}
const JOINTS = [
  { key: "shoulder_r", en: "Right Shoulder", bn: "ডান কাঁধ" },
  { key: "shoulder_l", en: "Left Shoulder", bn: "বাম কাঁধ" },
  { key: "elbow_r", en: "Right Elbow", bn: "ডান কনুই" },
  { key: "elbow_l", en: "Left Elbow", bn: "বাম কনুই" },
  { key: "wrist_r", en: "Right Wrist", bn: "ডান কব্জি" },
  { key: "wrist_l", en: "Left Wrist", bn: "বাম কব্জি" },
  { key: "knee_r", en: "Right Knee", bn: "ডান হাঁটু" },
  { key: "knee_l", en: "Left Knee", bn: "বাম হাঁটু" },
  { key: "ankle_r", en: "Right Ankle", bn: "ডান গোড়ালি" },
  { key: "ankle_l", en: "Left Ankle", bn: "বাম গোড়ালি" },
  { key: "hip_r", en: "Right Hip", bn: "ডান নিতম্ব" },
  { key: "hip_l", en: "Left Hip", bn: "বাম নিতম্ব" }
];
const mskData = {
  inspection: {
    general: [
      { en: "Normal posture", bn: "স্বাভাবিক ভঙ্গি" },
      { en: "Abnormal posture", bn: "অস্বাভাবিক ভঙ্গি" },
      { en: "Muscle wasting", bn: "পেশী ক্ষয়" },
      { en: "Joint swelling", bn: "জয়েন্ট ফোলা" },
      { en: "Joint deformity", bn: "জয়েন্ট বিকৃতি" },
      { en: "Skin changes", bn: "ত্বকের পরিবর্তন" },
      { en: "Erythema (redness)", bn: "লালভাব" },
      { en: "Warmth", bn: "উষ্ণতা" },
      { en: "Scars", bn: "দাগ" },
      { en: "Limb length discrepancy", bn: "অঙ্গের দৈর্ঘ্যের পার্থক্য" }
    ],
    spine: [
      { en: "Normal curvature", bn: "স্বাভাবিক বক্রতা" },
      { en: "Kyphosis", bn: "কাইফোসিস" },
      { en: "Lordosis", bn: "লর্ডোসিস" },
      { en: "Scoliosis", bn: "স্কোলিওসিস" },
      { en: "Flat back", bn: "সমতল পিঠ" }
    ]
  },
  palpation: {
    jointOptions: [
      "Normal / স্বাভাবিক",
      "Tender / ব্যথাযুক্ত",
      "Swollen / ফোলা",
      "Warmth / উষ্ণ",
      "Crepitus / ক্রেপিটাস",
      "Deformed / বিকৃত"
    ],
    muscleTenderness: [
      { en: "None", bn: "কোনটি নেই" },
      { en: "Localized", bn: "স্থানীয়" },
      { en: "Generalized", bn: "সাধারণীকৃত" }
    ],
    boneTenderness: [
      { en: "None", bn: "কোনটি নেই" },
      { en: "Present", bn: "আছে" }
    ]
  },
  percussion: {
    spine: [
      { en: "No pain", bn: "কোনো ব্যথা নেই" },
      { en: "Tenderness on percussion", bn: "পারকাশনে ব্যথা" }
    ],
    bone: [
      { en: "No tenderness", bn: "কোনো ব্যথা নেই" },
      { en: "Tenderness present", bn: "ব্যথা আছে" }
    ],
    special: [
      { en: "Heel strike test - Negative", bn: "হিল স্ট্রাইক পরীক্ষা - নেতিবাচক" },
      { en: "Heel strike test - Positive", bn: "হিল স্ট্রাইক পরীক্ষা - ইতিবাচক" },
      {
        en: "Fist percussion spine - Negative",
        bn: "মুষ্টি পারকাশন মেরুদণ্ড - নেতিবাচক"
      },
      {
        en: "Fist percussion spine - Positive",
        bn: "মুষ্টি পারকাশন মেরুদণ্ড - ইতিবাচক"
      }
    ]
  },
  auscultation: {
    jointSounds: [
      { en: "No abnormal sounds", bn: "কোনো অস্বাভাবিক শব্দ নেই" },
      { en: "Fine crepitus", bn: "সূক্ষ্ম ক্রেপিটাস" },
      { en: "Coarse crepitus", bn: "মোটা ক্রেপিটাস" },
      { en: "Click", bn: "ক্লিক" },
      { en: "Clunk", bn: "ক্লাঙ্ক" },
      { en: "Snap", bn: "স্ন্যাপ" }
    ],
    vascular: [
      { en: "None", bn: "কোনটি নেই" },
      { en: "Bruit over joint", bn: "জয়েন্টে ব্রুই" }
    ],
    gait: [
      { en: "Normal gait", bn: "স্বাভাবিক হাঁটা" },
      { en: "Antalgic gait", bn: "ব্যথায় হাঁটা" },
      { en: "Trendelenburg gait", bn: "ট্রেন্ডেলেনবার্গ হাঁটা" },
      { en: "Waddling gait", bn: "ওয়াডলিং হাঁটা" },
      { en: "High stepping gait", bn: "উঁচু পদক্ষেপ" },
      { en: "Scissoring gait", bn: "কাঁচির মতো হাঁটা" },
      { en: "Ataxic gait", bn: "অ্যাটাক্সিক হাঁটা" }
    ]
  }
};
function MusculoskeletalExam({
  data,
  onChange
}) {
  const [examData, setExamData] = reactExports.useState(
    data || {
      inspection_general: [],
      inspection_spine: [],
      joint_findings: {},
      muscle_tenderness: "",
      bone_tenderness: "",
      bone_tenderness_area: "",
      spine_percussion: "",
      bone_percussion: "",
      special_percussion: [],
      joint_sounds: [],
      vascular_sounds: "",
      gait: [],
      special_tests_shoulder: [],
      special_tests_knee: [],
      special_tests_spine: []
    }
  );
  const update = (patch) => {
    const newData = { ...examData, ...patch };
    setExamData(newData);
    onChange(newData);
  };
  const toggleMulti = (field, value) => {
    const current = examData[field] || [];
    update({
      [field]: current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
    });
  };
  const setSingle = (field, value) => update({ [field]: value });
  const setNested = (parent, key, value) => {
    const existing = examData[parent] || {};
    update({ [parent]: { ...existing, [key]: value } });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-slate-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-slate-500 to-slate-600 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white text-slate-600 rounded-full h-8 w-8 flex items-center justify-center font-bold", children: "1" }),
        "Inspection / পরিদর্শন"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "General Findings / সাধারণ ফলাফল" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: mskData.inspection.general.map((opt) => {
            const active = (examData.inspection_general || []).includes(opt.en);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-slate-600" : ""}`,
                onClick: () => toggleMulti("inspection_general", opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomBadgeAdder,
            {
              field: "inspection_general",
              customField: "custom_inspection_general",
              examData,
              isMulti: true,
              accentColor: "slate-600",
              onUpdate: update
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Spine Shape / মেরুদণ্ডের আকৃতি" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: mskData.inspection.spine.map((opt) => {
            const active = (examData.inspection_spine || []).includes(opt.en);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-slate-600" : ""}`,
                onClick: () => toggleMulti("inspection_spine", opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomBadgeAdder,
            {
              field: "inspection_spine",
              customField: "custom_inspection_spine",
              examData,
              isMulti: true,
              accentColor: "slate-600",
              onUpdate: update
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-orange-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-orange-500 to-orange-600 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white text-orange-600 rounded-full h-8 w-8 flex items-center justify-center font-bold", children: "2" }),
        "Palpation / স্পর্শ পরীক্ষা"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-5 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-base font-semibold text-slate-800", children: "Joint Findings / জয়েন্টের ফলাফল" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: JOINTS.map((joint) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs text-slate-500", children: [
              joint.en,
              " / ",
              joint.bn
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: mskData.palpation.jointOptions.map((opt) => {
              var _a;
              const active = ((_a = examData.joint_findings) == null ? void 0 : _a[joint.key]) === opt;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: active ? "default" : "outline",
                  className: `cursor-pointer text-xs py-1 px-2 ${active ? "bg-orange-600" : ""}`,
                  onClick: () => setNested("joint_findings", joint.key, opt),
                  children: opt
                },
                opt
              );
            }) })
          ] }, joint.key)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Muscle Tenderness / পেশীর ব্যথা" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: mskData.palpation.muscleTenderness.map((opt) => {
            const active = examData.muscle_tenderness === opt.en;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-orange-600" : ""}`,
                onClick: () => setSingle("muscle_tenderness", opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Bone Tenderness / হাড়ের ব্যথা" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: mskData.palpation.boneTenderness.map((opt) => {
            const active = examData.bone_tenderness === opt.en;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-orange-600" : ""}`,
                onClick: () => setSingle("bone_tenderness", opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) }),
          examData.bone_tenderness === "Present" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: examData.bone_tenderness_area || "",
              onChange: (e) => update({ bone_tenderness_area: e.target.value }),
              placeholder: "Specify area / এলাকা উল্লেখ করুন",
              className: "mt-2"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-yellow-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white text-yellow-600 rounded-full h-8 w-8 flex items-center justify-center font-bold", children: "3" }),
        "Percussion / পারকাশন"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Spine Percussion / মেরুদণ্ড পারকাশন" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: mskData.percussion.spine.map((opt) => {
            const active = examData.spine_percussion === opt.en;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-yellow-600" : ""}`,
                onClick: () => setSingle("spine_percussion", opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Bone Percussion / হাড়ের পারকাশন" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: mskData.percussion.bone.map((opt) => {
            const active = examData.bone_percussion === opt.en;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-yellow-600" : ""}`,
                onClick: () => setSingle("bone_percussion", opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Special Percussion Tests / বিশেষ পারকাশন পরীক্ষা" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: mskData.percussion.special.map((opt) => {
            const active = (examData.special_percussion || []).includes(opt.en);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-yellow-600" : ""}`,
                onClick: () => toggleMulti("special_percussion", opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-green-500 to-green-600 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white text-green-600 rounded-full h-8 w-8 flex items-center justify-center font-bold", children: "4" }),
        "Auscultation & Gait / শ্রবণ ও গতি পরীক্ষা"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Joint Sounds / জয়েন্টের শব্দ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: mskData.auscultation.jointSounds.map((opt) => {
            const active = (examData.joint_sounds || []).includes(opt.en);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-green-600" : ""}`,
                onClick: () => toggleMulti("joint_sounds", opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Vascular Sounds / রক্তনালীর শব্দ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: mskData.auscultation.vascular.map((opt) => {
            const active = examData.vascular_sounds === opt.en;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-green-600" : ""}`,
                onClick: () => setSingle("vascular_sounds", opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Gait Observation / হাঁটার পর্যবেক্ষণ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: mskData.auscultation.gait.map((opt) => {
            const active = (examData.gait || []).includes(
              opt.en
            );
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-green-600" : ""}`,
                onClick: () => toggleMulti("gait", opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-indigo-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-indigo-500 to-indigo-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white text-indigo-600 rounded-full h-8 w-8 flex items-center justify-center font-bold", children: "5" }),
        "Special Tests / বিশেষ পরীক্ষা"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-5 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-base font-semibold text-slate-800", children: "Shoulder Tests / কাঁধের পরীক্ষা" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
            { en: "Neer's test - Negative", bn: "নিয়ার পরীক্ষা - নেতিবাচক" },
            { en: "Neer's test - Positive", bn: "নিয়ার পরীক্ষা - ইতিবাচক" },
            { en: "Hawkins test - Negative", bn: "হকিন্স পরীক্ষা - নেতিবাচক" },
            { en: "Hawkins test - Positive", bn: "হকিন্স পরীক্ষা - ইতিবাচক" },
            {
              en: "Drop arm test - Negative",
              bn: "ড্রপ আর্ম পরীক্ষা - নেতিবাচক"
            },
            {
              en: "Drop arm test - Positive",
              bn: "ড্রপ আর্ম পরীক্ষা - ইতিবাচক"
            }
          ].map((test) => {
            const active = (examData.special_tests_shoulder || []).includes(test.en);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-indigo-600" : ""}`,
                onClick: () => toggleMulti("special_tests_shoulder", test.en),
                children: [
                  test.en,
                  " / ",
                  test.bn
                ]
              },
              test.en
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomBadgeAdder,
            {
              field: "special_tests_shoulder",
              customField: "custom_special_tests_shoulder",
              examData,
              isMulti: true,
              accentColor: "indigo-600",
              onUpdate: update
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-base font-semibold text-slate-800", children: "Knee Tests / হাঁটুর পরীক্ষা" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
            {
              en: "McMurray test - Negative",
              bn: "ম্যাকমারে পরীক্ষা - নেতিবাচক"
            },
            { en: "McMurray test - Positive", bn: "ম্যাকমারে পরীক্ষা - ইতিবাচক" },
            {
              en: "Anterior drawer - Negative",
              bn: "অ্যান্টিরিয়র ড্রয়ার - নেতিবাচক"
            },
            {
              en: "Anterior drawer - Positive",
              bn: "অ্যান্টিরিয়র ড্রয়ার - ইতিবাচক"
            },
            { en: "Lachman test - Negative", bn: "ল্যাকম্যান পরীক্ষা - নেতিবাচক" },
            { en: "Lachman test - Positive", bn: "ল্যাকম্যান পরীক্ষা - ইতিবাচক" }
          ].map((test) => {
            const active = (examData.special_tests_knee || []).includes(test.en);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-indigo-600" : ""}`,
                onClick: () => toggleMulti("special_tests_knee", test.en),
                children: [
                  test.en,
                  " / ",
                  test.bn
                ]
              },
              test.en
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomBadgeAdder,
            {
              field: "special_tests_knee",
              customField: "custom_special_tests_knee",
              examData,
              isMulti: true,
              accentColor: "indigo-600",
              onUpdate: update
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-base font-semibold text-slate-800", children: "Spine Tests / মেরুদণ্ড পরীক্ষা" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
            {
              en: "Straight leg raise - Negative",
              bn: "সোজা পা তোলা - নেতিবাচক"
            },
            {
              en: "Straight leg raise - Positive",
              bn: "সোজা পা তোলা - ইতিবাচক"
            },
            { en: "FABER test - Negative", bn: "FABER পরীক্ষা - নেতিবাচক" },
            { en: "FABER test - Positive", bn: "FABER পরীক্ষা - ইতিবাচক" }
          ].map((test) => {
            const active = (examData.special_tests_spine || []).includes(test.en);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-indigo-600" : ""}`,
                onClick: () => toggleMulti("special_tests_spine", test.en),
                children: [
                  test.en,
                  " / ",
                  test.bn
                ]
              },
              test.en
            );
          }) })
        ] })
      ] })
    ] })
  ] });
}
const LIMBS = [
  { key: "right_upper", en: "Right Upper", bn: "ডান উপরের" },
  { key: "left_upper", en: "Left Upper", bn: "বাম উপরের" },
  { key: "right_lower", en: "Right Lower", bn: "ডান নিচের" },
  { key: "left_lower", en: "Left Lower", bn: "বাম নিচের" }
];
const DTR_LIST = [
  { key: "biceps_r", en: "Biceps R", bn: "বাইসেপস ডান" },
  { key: "biceps_l", en: "Biceps L", bn: "বাইসেপস বাম" },
  { key: "triceps_r", en: "Triceps R", bn: "ট্রাইসেপস ডান" },
  { key: "triceps_l", en: "Triceps L", bn: "ট্রাইসেপস বাম" },
  { key: "knee_r", en: "Knee R", bn: "হাঁটু ডান" },
  { key: "knee_l", en: "Knee L", bn: "হাঁটু বাম" },
  { key: "ankle_r", en: "Ankle R", bn: "গোড়ালি ডান" },
  { key: "ankle_l", en: "Ankle L", bn: "গোড়ালি বাম" }
];
const neuroData = {
  inspection: {
    general: [
      { en: "Normal", bn: "স্বাভাবিক" },
      { en: "Facial asymmetry", bn: "মুখের অসমতা" },
      { en: "Ptosis", bn: "চোখের পাতা ঝুলে পড়া" },
      { en: "Nystagmus", bn: "নাইস্টাগমাস" },
      { en: "Tremor at rest", bn: "বিশ্রামে কাঁপুনি" },
      { en: "Intention tremor", bn: "ইনটেনশন ট্রেমর" },
      { en: "Fasciculations", bn: "ফ্যাসিকুলেশন" },
      { en: "Muscle wasting", bn: "পেশী ক্ষয়" },
      { en: "Abnormal posture", bn: "অস্বাভাবিক ভঙ্গি" },
      { en: "Abnormal gait", bn: "অস্বাভাবিক হাঁটা" }
    ],
    consciousness: [
      { en: "Alert & oriented", bn: "সজাগ ও অভিমুখ" },
      { en: "Confused", bn: "বিভ্রান্ত" },
      { en: "Drowsy", bn: "তন্দ্রাচ্ছন্ন" },
      { en: "Stuporous", bn: "স্তুপোরাস" },
      { en: "Comatose", bn: "কোমায়" }
    ]
  },
  palpation: {
    skull: [
      { en: "No tenderness", bn: "কোনো ব্যথা নেই" },
      { en: "Tenderness present", bn: "ব্যথা আছে" },
      { en: "Bony defect", bn: "হাড়ের ত্রুটি" }
    ],
    spine: [
      { en: "No tenderness", bn: "কোনো ব্যথা নেই" },
      { en: "Cervical tenderness", bn: "সার্ভিকাল ব্যথা" },
      { en: "Thoracic tenderness", bn: "থোরাসিক ব্যথা" },
      { en: "Lumbar tenderness", bn: "লাম্বার ব্যথা" }
    ],
    toneOptions: [
      "Normal / স্বাভাবিক",
      "Hypotonia / হাইপোটোনিয়া",
      "Hypertonia (spastic) / হাইপারটোনিয়া (স্প্যাস্টিক)",
      "Hypertonia (rigid) / হাইপারটোনিয়া (রিজিড)",
      "Cogwheel rigidity / কগহুইল রিজিডিটি"
    ],
    meningeal: [
      {
        key: "neck_rigidity",
        en: "Neck rigidity",
        bn: "ঘাড়ের শক্ততা",
        options: ["Absent / নেই", "Present / আছে"]
      },
      {
        key: "kernig",
        en: "Kernig's sign",
        bn: "কার্নিগের চিহ্ন",
        options: ["Negative / নেতিবাচক", "Positive / ইতিবাচক"]
      },
      {
        key: "brudzinski",
        en: "Brudzinski's sign",
        bn: "ব্রুজিন্সকির চিহ্ন",
        options: ["Negative / নেতিবাচক", "Positive / ইতিবাচক"]
      }
    ]
  },
  percussion: {
    dtrOptions: [
      "Normal / স্বাভাবিক",
      "Brisk / তীক্ষ্ণ",
      "Hyperreflexia / হাইপাররিফ্লেক্সিয়া",
      "Hyporeflexia / হাইপোরিফ্লেক্সিয়া",
      "Absent / অনুপস্থিত"
    ],
    plantarOptions: [
      { en: "Flexor (normal)", bn: "ফ্লেক্সর (স্বাভাবিক)" },
      { en: "Extensor (Babinski +ve)", bn: "এক্সটেনসর (বাবিনস্কি ধনাত্মক)" },
      { en: "No response", bn: "কোনো সাড়া নেই" }
    ]
  },
  auscultation: {
    carotid: [
      { en: "None", bn: "কোনটি নেই" },
      { en: "Right carotid bruit", bn: "ডান ক্যারোটিড ব্রুই" },
      { en: "Left carotid bruit", bn: "বাম ক্যারোটিড ব্রুই" },
      { en: "Bilateral", bn: "উভয় পাশে" }
    ],
    cranial: [
      { en: "None", bn: "কোনটি নেই" },
      { en: "Present over orbit", bn: "চোখের কোটরে আছে" },
      { en: "Present over skull", bn: "মাথার খুলিতে আছে" }
    ]
  }
};
function NeurologicalExam({
  data,
  onChange
}) {
  const [examData, setExamData] = reactExports.useState(
    data || {
      general_inspection: [],
      consciousness: "",
      skull_palpation: "",
      spine_palpation: "",
      muscle_tone: {},
      meningeal: {},
      dtr: {},
      plantar_right: "",
      plantar_left: "",
      carotid_bruits: "",
      cranial_bruits: "",
      auscultation_notes: "",
      coordination_tests: [],
      romberg: "",
      cognitive_tests: []
    }
  );
  const update = (patch) => {
    const newData = { ...examData, ...patch };
    setExamData(newData);
    onChange(newData);
  };
  const toggleMulti = (field, value) => {
    const current = examData[field] || [];
    update({
      [field]: current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
    });
  };
  const setSingle = (field, value) => update({ [field]: value });
  const setNested = (parent, key, value) => {
    const existing = examData[parent] || {};
    update({ [parent]: { ...existing, [key]: value } });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-slate-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-slate-500 to-purple-600 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white rounded-full h-8 w-8 flex items-center justify-center font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-700", children: "1" }) }),
        "Inspection / পরিদর্শন"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "General Findings / সাধারণ ফলাফল" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: neuroData.inspection.general.map((opt) => {
            const active = (examData.general_inspection || []).includes(opt.en);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-purple-600" : ""}`,
                onClick: () => toggleMulti("general_inspection", opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomBadgeAdder,
            {
              field: "general_inspection",
              customField: "custom_general_inspection",
              examData,
              isMulti: true,
              accentColor: "purple-600",
              onUpdate: update
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Consciousness Level / চেতনার মাত্রা" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: neuroData.inspection.consciousness.map((opt) => {
            const active = examData.consciousness === opt.en;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-purple-600" : ""}`,
                onClick: () => setSingle("consciousness", opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-blue-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white rounded-full h-8 w-8 flex items-center justify-center font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-700", children: "2" }) }),
        "Palpation / স্পর্শ পরীক্ষা"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-5 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Skull / মাথার খুলি" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: neuroData.palpation.skull.map((opt) => {
            const active = examData.skull_palpation === opt.en;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-blue-600" : ""}`,
                onClick: () => setSingle("skull_palpation", opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Spine / মেরুদণ্ড" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: neuroData.palpation.spine.map((opt) => {
            const active = examData.spine_palpation === opt.en;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-blue-600" : ""}`,
                onClick: () => setSingle("spine_palpation", opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Muscle Tone / পেশীর টোন" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: LIMBS.map((limb) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs text-slate-500", children: [
              limb.en,
              " / ",
              limb.bn
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: neuroData.palpation.toneOptions.map((opt) => {
              var _a;
              const active = ((_a = examData.muscle_tone) == null ? void 0 : _a[limb.key]) === opt;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: active ? "default" : "outline",
                  className: `cursor-pointer text-xs py-1 px-2 ${active ? "bg-blue-600" : ""}`,
                  onClick: () => setNested("muscle_tone", limb.key, opt),
                  children: opt
                },
                opt
              );
            }) })
          ] }, limb.key)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Meningeal Signs / মেনিনজিয়াল চিহ্ন" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: neuroData.palpation.meningeal.map((sign) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs text-slate-500", children: [
              sign.en,
              " / ",
              sign.bn
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: sign.options.map((opt) => {
              var _a;
              const active = ((_a = examData.meningeal) == null ? void 0 : _a[sign.key]) === opt;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: active ? "default" : "outline",
                  className: `cursor-pointer text-xs py-1 px-2 ${active ? "bg-blue-600" : ""}`,
                  onClick: () => setNested("meningeal", sign.key, opt),
                  children: opt
                },
                opt
              );
            }) })
          ] }, sign.key)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-violet-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-violet-500 to-violet-600 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white rounded-full h-8 w-8 flex items-center justify-center font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-700", children: "3" }) }),
        "Percussion (Reflexes) / পারকাশন (রিফ্লেক্স)"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-5 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-base font-semibold text-slate-800", children: "Deep Tendon Reflexes / ডিপ টেন্ডন রিফ্লেক্স" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: DTR_LIST.map((ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs text-slate-500", children: [
              ref.en,
              " / ",
              ref.bn
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: neuroData.percussion.dtrOptions.map((opt) => {
              var _a;
              const active = ((_a = examData.dtr) == null ? void 0 : _a[ref.key]) === opt;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: active ? "default" : "outline",
                  className: `cursor-pointer text-xs py-1 px-2 ${active ? "bg-violet-600" : ""}`,
                  onClick: () => setNested("dtr", ref.key, opt),
                  children: opt
                },
                opt
              );
            }) })
          ] }, ref.key)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          { field: "plantar_right", label: "Plantar Right / ডান প্ল্যান্টার" },
          { field: "plantar_left", label: "Plantar Left / বাম প্ল্যান্টার" }
        ].map(({ field, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: neuroData.percussion.plantarOptions.map((opt) => {
            const active = examData[field] === opt.en;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-violet-600" : ""}`,
                onClick: () => setSingle(field, opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) })
        ] }, field)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-indigo-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white rounded-full h-8 w-8 flex items-center justify-center font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-700", children: "4" }) }),
        "Auscultation / শ্রবণ পরীক্ষা"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Carotid Bruits / ক্যারোটিড ব্রুই" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: neuroData.auscultation.carotid.map((opt) => {
            const active = examData.carotid_bruits === opt.en;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-indigo-600" : ""}`,
                onClick: () => setSingle("carotid_bruits", opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Cranial Bruits / ক্র্যানিয়াল ব্রুই" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: neuroData.auscultation.cranial.map((opt) => {
            const active = examData.cranial_bruits === opt.en;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-indigo-600" : ""}`,
                onClick: () => setSingle("cranial_bruits", opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Notes / নোট" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              value: examData.auscultation_notes || "",
              onChange: (e) => update({ auscultation_notes: e.target.value }),
              placeholder: "Additional auscultation findings...",
              rows: 3
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-amber-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-amber-500 to-amber-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white text-amber-600 rounded-full h-8 w-8 flex items-center justify-center font-bold", children: "5" }),
        "Special Tests / বিশেষ পরীক্ষা"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-5 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-base font-semibold text-slate-800", children: "Coordination Tests / সমন্বয় পরীক্ষা" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
            {
              en: "Finger-nose test - Normal",
              bn: "আঙুল-নাক পরীক্ষা - স্বাভাবিক"
            },
            {
              en: "Finger-nose test - Abnormal",
              bn: "আঙুল-নাক পরীক্ষা - অস্বাভাবিক"
            },
            {
              en: "Heel-shin test - Normal",
              bn: "গোড়ালি-পায়ের হাঁটু পরীক্ষা - স্বাভাবিক"
            },
            {
              en: "Heel-shin test - Abnormal",
              bn: "গোড়ালি-পায়ের হাঁটু পরীক্ষা - অস্বাভাবিক"
            },
            {
              en: "Rapid alternating movements - Normal",
              bn: "দ্রুত পর্যায়ক্রমিক গতি - স্বাভাবিক"
            },
            {
              en: "Rapid alternating movements - Abnormal",
              bn: "দ্রুত পর্যায়ক্রমিক গতি - অস্বাভাবিক"
            }
          ].map((test) => {
            const active = (examData.coordination_tests || []).includes(test.en);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-amber-600" : ""}`,
                onClick: () => toggleMulti("coordination_tests", test.en),
                children: [
                  test.en,
                  " / ",
                  test.bn
                ]
              },
              test.en
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomBadgeAdder,
            {
              field: "coordination_tests",
              customField: "custom_coordination_tests",
              examData,
              isMulti: true,
              accentColor: "amber-600",
              onUpdate: update
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-base font-semibold text-slate-800", children: "Romberg Test / রোমবার্গ পরীক্ষা" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
            { en: "Negative", bn: "নেতিবাচক" },
            { en: "Positive", bn: "ইতিবাচক" }
          ].map((opt) => {
            const active = examData.romberg === opt.en;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-amber-600" : ""}`,
                onClick: () => setSingle("romberg", opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-base font-semibold text-slate-800", children: "Cognitive Screening / জ্ঞানীয় পরীক্ষা" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
            { en: "MMSE score normal (≥24)", bn: "MMSE স্কোর স্বাভাবিক" },
            { en: "MMSE score impaired (<24)", bn: "MMSE স্কোর দুর্বল" },
            { en: "Orientation intact", bn: "দিক নির্ণয় স্বাভাবিক" },
            { en: "Orientation impaired", bn: "দিক নির্ণয় দুর্বল" }
          ].map((test) => {
            const active = (examData.cognitive_tests || []).includes(test.en);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-amber-600" : ""}`,
                onClick: () => toggleMulti("cognitive_tests", test.en),
                children: [
                  test.en,
                  " / ",
                  test.bn
                ]
              },
              test.en
            );
          }) })
        ] })
      ] })
    ] })
  ] });
}
function aiInterpret(result, _unit, name) {
  const val = Number.parseFloat(result);
  if (Number.isNaN(val)) return "See report";
  const n = name.toLowerCase();
  if (n.includes("hb") || n.includes("hemoglobin")) {
    if (val < 12) return "Low (Anaemia)";
    if (val > 17) return "High";
    return "Normal";
  }
  if (n.includes("fasting") && (n.includes("sugar") || n.includes("glucose"))) {
    if (val < 3.9) return "Low (Hypoglycaemia)";
    if (val > 6.1) return "High (Pre-diabetic/Diabetic)";
    return "Normal";
  }
  if (n.includes("random") && (n.includes("sugar") || n.includes("glucose"))) {
    if (val > 11.1) return "High (Diabetes)";
    if (val > 7.8) return "Elevated";
    return "Normal";
  }
  if (n.includes("hba1c")) {
    if (val < 5.7) return "Normal";
    if (val < 6.5) return "Pre-diabetic";
    return "Diabetic range";
  }
  if (n.includes("creatinine")) {
    if (val > 1.2) return "Elevated";
    return "Normal";
  }
  if (n.includes("urea")) {
    if (val > 45) return "Elevated";
    return "Normal";
  }
  if (n.includes("cholesterol") && !n.includes("hdl")) {
    if (val > 200) return "Elevated";
    return "Normal";
  }
  if (n.includes("hdl")) {
    if (val < 40) return "Low (Risk)";
    return "Normal";
  }
  if (n.includes("ldl")) {
    if (val > 130) return "Elevated";
    return "Normal";
  }
  if (n.includes("tsh")) {
    if (val < 0.4) return "Low (Hyperthyroid)";
    if (val > 4.5) return "High (Hypothyroid)";
    return "Normal";
  }
  if (n.includes("sgpt") || n.includes("alt")) {
    if (val > 40) return "Elevated";
    return "Normal";
  }
  if (n.includes("sgot") || n.includes("ast")) {
    if (val > 40) return "Elevated";
    return "Normal";
  }
  if (n.includes("sodium") || n.includes("na")) {
    if (val < 135) return "Low (Hyponatraemia)";
    if (val > 145) return "High (Hypernatraemia)";
    return "Normal";
  }
  if (n.includes("potassium") || n.includes(" k+")) {
    if (val < 3.5) return "Low (Hypokalaemia)";
    if (val > 5) return "High (Hyperkalaemia)";
    return "Normal";
  }
  return "See report";
}
const CHART_COLORS = [
  "#0ea5e9",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#ec4899"
];
function getInterpColor(text) {
  const t = text.toLowerCase();
  if (t.includes("normal"))
    return "bg-green-50 text-green-700 border-green-200";
  if (t.includes("low") || t.includes("anaemia") || t.includes("hypogly"))
    return "bg-blue-50 text-blue-700 border-blue-200";
  if (t.includes("high") || t.includes("elevated") || t.includes("diabetic"))
    return "bg-rose-50 text-rose-700 border-rose-200";
  if (t.includes("pre-") || t.includes("risk"))
    return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-slate-50 text-slate-600 border-slate-200";
}
const ROW_COLORS = ["bg-white", "bg-slate-50"];
function PreviousInvestigationTable({
  rows,
  onChange,
  onArchive
}) {
  const [uploadOpen, setUploadOpen] = reactExports.useState(false);
  const [confirmName, setConfirmName] = reactExports.useState("");
  const [confirmAge, setConfirmAge] = reactExports.useState("");
  const [confirmDate, setConfirmDate] = reactExports.useState(
    (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  );
  const [extractedRows, setExtractedRows] = reactExports.useState([]);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [quickAddName, setQuickAddName] = reactExports.useState("");
  const fileRef = reactExports.useRef(null);
  const filteredRows = searchQuery.trim() ? rows.filter(
    (r) => r.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) : rows;
  const addRow = (name = "") => {
    onChange([
      ...rows,
      {
        date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        name,
        result: "",
        unit: "",
        interpretation: ""
      }
    ]);
    if (name) setQuickAddName("");
  };
  const handleQuickAdd = () => {
    if (!quickAddName.trim()) {
      addRow();
    } else {
      addRow(quickAddName.trim());
    }
  };
  const updateRow = (idx, field, value) => {
    onChange(rows.map((r, i) => i === idx ? { ...r, [field]: value } : r));
  };
  const removeRow = (idx) => {
    onChange(rows.filter((_, i) => i !== idx));
  };
  const handleAiInterpret = (idx) => {
    const row = rows[idx];
    const interp = aiInterpret(row.result, row.unit, row.name);
    updateRow(idx, "interpretation", interp);
    ue.success("AI interpretation applied");
  };
  const handleFileChange = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    const mockExtracted = [
      {
        date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        name: "Hemoglobin (Hb)",
        result: "12.5",
        unit: "g/dL",
        interpretation: ""
      },
      {
        date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        name: "Fasting blood sugar",
        result: "5.2",
        unit: "mmol/L",
        interpretation: ""
      }
    ];
    setExtractedRows(mockExtracted);
    setUploadOpen(true);
    if (fileRef.current) fileRef.current.value = "";
  };
  const confirmExtract = () => {
    if (!confirmDate) {
      ue.error("Please enter the report date");
      return;
    }
    const withInterpret = extractedRows.map((r) => ({
      ...r,
      date: confirmDate,
      interpretation: aiInterpret(r.result, r.unit, r.name)
    }));
    onChange([...rows, ...withInterpret]);
    setUploadOpen(false);
    setConfirmName("");
    setConfirmAge("");
    setConfirmDate((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    ue.success("Report imported. Please review and edit values as needed.");
  };
  const numericRows = rows.filter(
    (r) => r.date && r.name && !Number.isNaN(Number.parseFloat(r.result))
  );
  const investigationNames = [...new Set(numericRows.map((r) => r.name))];
  const chartDates = [...new Set(numericRows.map((r) => r.date))].sort();
  const chartData = chartDates.map((date) => {
    const obj = { date };
    for (const name of investigationNames) {
      const found = numericRows.find((r) => r.date === date && r.name === name);
      if (found) obj[name] = Number.parseFloat(found.result);
    }
    return obj;
  });
  const showChart = chartDates.length >= 2 && investigationNames.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            placeholder: "Search investigations by name...",
            className: "h-9 pl-9 text-xs",
            "data-ocid": "prev_inv.search_input"
          }
        ),
        searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setSearchQuery(""),
            className: "absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: quickAddName,
            onChange: (e) => setQuickAddName(e.target.value),
            onKeyDown: (e) => e.key === "Enter" && handleQuickAdd(),
            placeholder: "Investigation name (optional)",
            className: "h-9 text-xs w-44",
            "data-ocid": "prev_inv.input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            size: "sm",
            onClick: handleQuickAdd,
            className: "h-9 bg-cyan-600 hover:bg-cyan-700 text-white shrink-0",
            "data-ocid": "prev_inv.add_row.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5 mr-1" }),
              "Add"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-slate-500", children: [
        "Five-field structured report (Date · Name · Result · Unit · Interpretation)",
        searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-cyan-600 font-medium", children: [
          "— showing ",
          filteredRows.length,
          " of ",
          rows.length,
          " results"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: () => {
              var _a;
              return (_a = fileRef.current) == null ? void 0 : _a.click();
            },
            className: "min-h-[44px]",
            "data-ocid": "prev_inv.upload_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-3.5 w-3.5 mr-1" }),
              "Upload Report"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: fileRef,
            type: "file",
            accept: "image/*,.pdf",
            className: "hidden",
            onChange: handleFileChange
          }
        ),
        onArchive && rows.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            variant: "outline",
            size: "sm",
            className: "text-amber-700 border-amber-300 hover:bg-amber-50 min-h-[44px]",
            onClick: onArchive,
            "data-ocid": "prev_inv.archive_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Archive, { className: "h-3.5 w-3.5 mr-1" }),
              "Archive & Clear"
            ]
          }
        )
      ] })
    ] }),
    rows.length > 0 ? filteredRows.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-lg border border-cyan-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-cyan-600", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs w-32 text-white font-semibold", children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-white font-semibold", children: "Investigation Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs w-24 text-white font-semibold", children: "Result" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs w-20 text-white font-semibold", children: "Unit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-white font-semibold", children: "Interpretation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs w-10 text-center text-white font-semibold", children: "AI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-8" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filteredRows.map((row, idx) => {
        const realIdx = rows.indexOf(row);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: ROW_COLORS[idx % 2], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "date",
              value: row.date,
              onChange: (e) => updateRow(realIdx, "date", e.target.value),
              className: "h-8 text-xs px-2"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: row.name,
              onChange: (e) => updateRow(realIdx, "name", e.target.value),
              placeholder: "e.g. Hemoglobin (Hb)",
              className: "h-8 text-xs w-full focus:ring-1 focus:ring-blue-300"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: row.result,
              onChange: (e) => updateRow(realIdx, "result", e.target.value),
              placeholder: "12.5",
              className: "h-8 text-xs"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: row.unit,
              onChange: (e) => updateRow(realIdx, "unit", e.target.value),
              placeholder: "g/dL",
              className: "h-8 text-xs"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: row.interpretation,
              onChange: (e) => updateRow(realIdx, "interpretation", e.target.value),
              placeholder: "Normal / Elevated...",
              className: `h-8 text-xs border ${getInterpColor(row.interpretation)}`
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "p-1 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              className: "h-8 w-8 text-teal-600 hover:bg-teal-50",
              onClick: () => handleAiInterpret(realIdx),
              title: "AI Interpret",
              "data-ocid": `prev_inv.ai_interpret.button.${idx + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              className: "h-8 w-8 text-red-500 hover:bg-red-50",
              onClick: () => removeRow(realIdx),
              "data-ocid": `prev_inv.delete_button.${idx + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" })
            }
          ) })
        ] }, realIdx);
      }) })
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-6 text-sm text-slate-400 border border-dashed border-cyan-200 rounded-lg", children: [
      "No investigations match “",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: searchQuery }),
      "”."
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-8 text-sm text-slate-400 border border-dashed border-slate-200 rounded-lg",
        "data-ocid": "prev_inv.empty_state",
        children: [
          "No investigation reports yet. Type a name above and click",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Add" }),
          ", or click",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Upload Report" }),
          "."
        ]
      }
    ),
    showChart && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 p-4 bg-slate-50 rounded-lg border border-slate-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 text-teal-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-slate-700", children: "Investigation Trend" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-400", children: "(Date vs. Result)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        LineChart,
        {
          data: chartData,
          margin: { top: 5, right: 20, left: 0, bottom: 5 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e2e8f0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              XAxis,
              {
                dataKey: "date",
                tick: { fontSize: 10 },
                tickFormatter: (v) => {
                  const d = new Date(v);
                  return `${d.getDate()}/${d.getMonth() + 1}`;
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: { fontSize: 10 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Legend,
              {
                wrapperStyle: { fontSize: 10 },
                formatter: (v) => String(v).length > 20 ? `${String(v).slice(0, 20)}…` : v
              }
            ),
            investigationNames.slice(0, 6).map((name, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Line,
              {
                type: "monotone",
                dataKey: name,
                stroke: CHART_COLORS[i % CHART_COLORS.length],
                dot: { r: 4 },
                strokeWidth: 2,
                activeDot: { r: 6 }
              },
              name
            ))
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: uploadOpen, onOpenChange: setUploadOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "max-h-[90vh] overflow-y-auto w-full max-w-lg",
        "data-ocid": "prev_inv.dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Verify Report Details Before Import" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-600", children: "Please verify the patient details from the uploaded report. The doctor must confirm before data is accepted." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Patient Name on Report" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: confirmName,
                    onChange: (e) => setConfirmName(e.target.value),
                    placeholder: "Full name",
                    className: "h-8 mt-1 text-xs",
                    "data-ocid": "prev_inv.confirm_name.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Age on Report" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: confirmAge,
                    onChange: (e) => setConfirmAge(e.target.value),
                    placeholder: "Age",
                    className: "h-8 mt-1 text-xs",
                    "data-ocid": "prev_inv.confirm_age.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs", children: [
                  "Report Date ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "date",
                    value: confirmDate,
                    onChange: (e) => setConfirmDate(e.target.value),
                    className: "h-8 mt-1 text-xs",
                    "data-ocid": "prev_inv.confirm_date.input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs bg-amber-50 border border-amber-200 rounded p-3 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-amber-800", children: "Extracted values (review before confirming):" }),
              extractedRows.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-amber-700", children: [
                r.name,
                ": ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: r.result }),
                " ",
                r.unit
              ] }, `${r.name}-${i}`))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "All values can be edited after import. Please recheck against the original report." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: confirmExtract,
                  className: "flex-1",
                  "data-ocid": "prev_inv.confirm_button",
                  children: "Confirm & Import"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  onClick: () => setUploadOpen(false),
                  className: "flex-1",
                  "data-ocid": "prev_inv.cancel_button",
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
const ZONES = [
  { key: "upper_r", en: "Upper Right", bn: "উপরে ডান" },
  { key: "upper_l", en: "Upper Left", bn: "উপরে বাম" },
  { key: "middle_r", en: "Middle Right", bn: "মাঝে ডান" },
  { key: "middle_l", en: "Middle Left", bn: "মাঝে বাম" },
  { key: "lower_r", en: "Lower Right", bn: "নীচে ডান" },
  { key: "lower_l", en: "Lower Left", bn: "নীচে বাম" }
];
const respiratoryData = {
  inspection: {
    chestShape: [
      { en: "Normal chest", bn: "স্বাভাবিক বুক" },
      { en: "Barrel chest", bn: "ব্যারেল বুক" },
      { en: "Pectus excavatum", bn: "পেকটাস এক্সকেভেটাম" },
      { en: "Pectus carinatum", bn: "পেকটাস ক্যারিনেটাম" },
      { en: "Kyphoscoliosis", bn: "কাইফোস্কোলিওসিস" }
    ],
    symmetry: [
      { en: "Symmetrical", bn: "প্রতিসম" },
      { en: "Asymmetrical", bn: "অপ্রতিসম" },
      { en: "Unilateral expansion reduced", bn: "এক দিকে প্রসারণ কম" }
    ],
    breathingPattern: [
      { en: "Normal", bn: "স্বাভাবিক" },
      { en: "Tachypnoeic", bn: "দ্রুত শ্বাস" },
      { en: "Bradypnoeic", bn: "ধীর শ্বাস" },
      { en: "Cheyne-Stokes", bn: "চেইন-স্টোকস" },
      { en: "Kussmaul", bn: "কুসমল" },
      { en: "Biot's", bn: "বায়টের শ্বাস" }
    ],
    other: [
      { en: "Accessory muscle use", bn: "সহায়ক পেশী ব্যবহার" },
      { en: "Pursed lip breathing", bn: "ঠোঁট সংকুচিত শ্বাস" },
      { en: "Intercostal recession", bn: "পাঁজরের মধ্যবর্তী প্রত্যাহার" },
      { en: "Nasal flaring", bn: "নাকের পাখা প্রসারণ" },
      { en: "Cyanosis", bn: "নীলাভ বর্ণ" },
      { en: "Clubbing", bn: "আঙুল ফুলে যাওয়া" },
      { en: "Tracheal tug", bn: "শ্বাসনালী টান" }
    ]
  },
  palpation: {
    trachea: [
      { en: "Central", bn: "কেন্দ্রীয়" },
      { en: "Deviated to right", bn: "ডানে বিচ্যুত" },
      { en: "Deviated to left", bn: "বামে বিচ্যুত" }
    ],
    expansion: [
      { en: "Equal bilaterally", bn: "উভয় পাশে সমান" },
      { en: "Reduced right", bn: "ডানে কম" },
      { en: "Reduced left", bn: "বামে কম" },
      { en: "Reduced bilaterally", bn: "উভয় পাশে কম" }
    ],
    vocalFremitusSides: [
      { key: "vf_upper_r", en: "Upper Right", bn: "উপরে ডান" },
      { key: "vf_upper_l", en: "Upper Left", bn: "উপরে বাম" },
      { key: "vf_middle_r", en: "Middle Right", bn: "মাঝে ডান" },
      { key: "vf_middle_l", en: "Middle Left", bn: "মাঝে বাম" },
      { key: "vf_lower_r", en: "Lower Right", bn: "নীচে ডান" },
      { key: "vf_lower_l", en: "Lower Left", bn: "নীচে বাম" }
    ],
    vocalFremitusOptions: [
      "Normal / স্বাভাবিক",
      "Increased / বৃদ্ধি",
      "Decreased / হ্রাস",
      "Absent / অনুপস্থিত"
    ],
    tenderness: [
      { en: "No tenderness", bn: "কোনো ব্যথা নেই" },
      { en: "Tenderness present", bn: "ব্যথা আছে" }
    ]
  },
  percussion: {
    options: [
      "Resonant / রেজোন্যান্ট",
      "Dull / নিস্তব্ধ",
      "Stony dull / পাথরের মতো নিস্তব্ধ",
      "Hyperresonant / হাইপাররেজোন্যান্ট"
    ]
  },
  auscultation: {
    breathSoundOptions: [
      "Vesicular / ভেসিকুলার",
      "Bronchial / ব্রঙ্কিয়াল",
      "Bronchovesicular / ব্রঙ্কোভেসিকুলার",
      "Diminished / কম",
      "Absent / অনুপস্থিত"
    ],
    addedSounds: [
      { en: "Fine crackles", bn: "সূক্ষ্ম ক্র্যাকল" },
      { en: "Coarse crackles", bn: "মোটা ক্র্যাকল" },
      { en: "Wheeze", bn: "হুইজ" },
      { en: "Rhonchi", bn: "রঙ্কি" },
      { en: "Pleural rub", bn: "প্লুরাল রাব" },
      { en: "Stridor", bn: "স্ট্রিডোর" }
    ],
    vocalResonance: [
      { en: "Normal", bn: "স্বাভাবিক" },
      { en: "Increased", bn: "বৃদ্ধি" },
      { en: "Decreased", bn: "হ্রাস" },
      { en: "Aegophony present", bn: "অ্যাগোফোনি আছে" },
      { en: "Whispering pectoriloquy", bn: "ফিসফিসানো পেক্টোরিলোকুই" }
    ]
  }
};
function RespiratoryExam({
  data,
  onChange
}) {
  const [examData, setExamData] = reactExports.useState(
    data || {
      chest_shape: "",
      symmetry: "",
      breathing_pattern: "",
      other_inspection: [],
      trachea: "",
      expansion: "",
      vocal_fremitus: {},
      tenderness: "",
      percussion_zones: {},
      breath_sounds: {},
      added_sounds: [],
      vocal_resonance: "",
      special_tests: []
    }
  );
  const update = (patch) => {
    const newData = { ...examData, ...patch };
    setExamData(newData);
    onChange(newData);
  };
  const toggleMulti = (field, value) => {
    const current = examData[field] || [];
    update({
      [field]: current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
    });
  };
  const setSingle = (field, value) => update({ [field]: value });
  const setNested = (parent, key, value) => {
    const existing = examData[parent] || {};
    update({ [parent]: { ...existing, [key]: value } });
  };
  const SectionCard = ({
    num,
    title,
    colorClass,
    headerClass,
    children
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `border-2 ${colorClass}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: `${headerClass} rounded-t-lg`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "bg-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-sm",
          style: { color: "inherit" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-700", children: num })
        }
      ),
      title
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-4 pt-5", children })
  ] });
  const BadgeGroup = ({
    label,
    field,
    options,
    single,
    customField,
    accentColor
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: options.map((opt) => {
      const active = single ? examData[field] === opt.en : (examData[field] || []).includes(opt.en);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Badge,
        {
          variant: active ? "default" : "outline",
          className: `cursor-pointer text-sm py-2 px-3 ${active ? `bg-${accentColor || "teal-600"}` : ""}`,
          onClick: () => single ? setSingle(field, opt.en) : toggleMulti(field, opt.en),
          children: [
            opt.en,
            " / ",
            opt.bn
          ]
        },
        opt.en
      );
    }) }),
    customField && /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomBadgeAdder,
      {
        field,
        customField,
        examData,
        isMulti: !single,
        accentColor: accentColor || "teal-600",
        onUpdate: update
      }
    )
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      SectionCard,
      {
        num: 1,
        title: "Inspection / পরিদর্শন",
        colorClass: "border-teal-200",
        headerClass: "bg-gradient-to-r from-teal-500 to-teal-600",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            BadgeGroup,
            {
              label: "Chest Shape / বুকের আকৃতি",
              field: "chest_shape",
              options: respiratoryData.inspection.chestShape,
              single: true,
              customField: "custom_chest_shape",
              accentColor: "teal-600"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            BadgeGroup,
            {
              label: "Symmetry / প্রতিসম্মতা",
              field: "symmetry",
              options: respiratoryData.inspection.symmetry,
              single: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            BadgeGroup,
            {
              label: "Breathing Pattern / শ্বাসের ধরন",
              field: "breathing_pattern",
              options: respiratoryData.inspection.breathingPattern,
              single: true,
              customField: "custom_breathing_pattern",
              accentColor: "teal-600"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            BadgeGroup,
            {
              label: "Other Findings / অন্যান্য",
              field: "other_inspection",
              options: respiratoryData.inspection.other,
              customField: "custom_other_inspection",
              accentColor: "teal-600"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-blue-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white rounded-full h-8 w-8 flex items-center justify-center font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-700", children: "2" }) }),
        "Palpation / স্পর্শ পরীক্ষা"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Trachea / শ্বাসনালী" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: respiratoryData.palpation.trachea.map((opt) => {
            const active = examData.trachea === opt.en;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-blue-600" : ""}`,
                onClick: () => setSingle("trachea", opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Chest Expansion / বুকের প্রসারণ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: respiratoryData.palpation.expansion.map((opt) => {
            const active = examData.expansion === opt.en;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-blue-600" : ""}`,
                onClick: () => setSingle("expansion", opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Vocal Fremitus / ভোকাল ফ্রেমিটাস" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: respiratoryData.palpation.vocalFremitusSides.map((side) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs text-slate-500", children: [
              side.en,
              " / ",
              side.bn
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: respiratoryData.palpation.vocalFremitusOptions.map(
              (opt) => {
                var _a;
                const active = ((_a = examData.vocal_fremitus) == null ? void 0 : _a[side.key]) === opt;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: active ? "default" : "outline",
                    className: `cursor-pointer text-xs py-1 px-2 ${active ? "bg-blue-600" : ""}`,
                    onClick: () => setNested("vocal_fremitus", side.key, opt),
                    children: opt
                  },
                  opt
                );
              }
            ) })
          ] }, side.key)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Tenderness / ব্যথা" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: respiratoryData.palpation.tenderness.map((opt) => {
            const active = examData.tenderness === opt.en;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-blue-600" : ""}`,
                onClick: () => setSingle("tenderness", opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-purple-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-purple-500 to-purple-600 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white rounded-full h-8 w-8 flex items-center justify-center font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-700", children: "3" }) }),
        "Percussion / পারকাশন"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-4 pt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: ZONES.map((zone) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs text-slate-500", children: [
          zone.en,
          " / ",
          zone.bn
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: respiratoryData.percussion.options.map((opt) => {
          var _a;
          const active = ((_a = examData.percussion_zones) == null ? void 0 : _a[zone.key]) === opt;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: active ? "default" : "outline",
              className: `cursor-pointer text-xs py-1 px-2 ${active ? "bg-purple-600" : ""}`,
              onClick: () => setNested("percussion_zones", zone.key, opt),
              children: opt
            },
            opt
          );
        }) })
      ] }, zone.key)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-indigo-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white rounded-full h-8 w-8 flex items-center justify-center font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-700", children: "4" }) }),
        "Auscultation / শ্রবণ পরীক্ষা"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-5 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-base font-semibold text-slate-800", children: "Breath Sounds / শ্বাসের শব্দ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: ZONES.map((zone) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs text-slate-500", children: [
              zone.en,
              " / ",
              zone.bn
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: respiratoryData.auscultation.breathSoundOptions.map(
              (opt) => {
                var _a;
                const active = ((_a = examData.breath_sounds) == null ? void 0 : _a[zone.key]) === opt;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: active ? "default" : "outline",
                    className: `cursor-pointer text-xs py-1 px-2 ${active ? "bg-indigo-600" : ""}`,
                    onClick: () => setNested("breath_sounds", zone.key, opt),
                    children: opt
                  },
                  opt
                );
              }
            ) })
          ] }, zone.key)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Added Sounds / অতিরিক্ত শব্দ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: respiratoryData.auscultation.addedSounds.map((opt) => {
            const active = (examData.added_sounds || []).includes(opt.en);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-indigo-600" : ""}`,
                onClick: () => toggleMulti("added_sounds", opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CustomBadgeAdder,
            {
              field: "added_sounds",
              customField: "custom_added_sounds",
              examData,
              isMulti: true,
              accentColor: "indigo-600",
              onUpdate: update
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Vocal Resonance / ভোকাল রেজোন্যান্স" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: respiratoryData.auscultation.vocalResonance.map((opt) => {
            const active = examData.vocal_resonance === opt.en;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: active ? "default" : "outline",
                className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-indigo-600" : ""}`,
                onClick: () => setSingle("vocal_resonance", opt.en),
                children: [
                  opt.en,
                  " / ",
                  opt.bn
                ]
              },
              opt.en
            );
          }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-rose-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-rose-500 to-rose-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white text-rose-600 rounded-full h-8 w-8 flex items-center justify-center font-bold", children: "5" }),
        "Special Tests / বিশেষ পরীক্ষা"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
          { en: "Peak Flow - Normal", bn: "পিক ফ্লো - স্বাভাবিক" },
          { en: "Peak Flow - Reduced", bn: "পিক ফ্লো - কম" },
          { en: "Spirometry - Normal", bn: "স্পাইরোমেট্রি - স্বাভাবিক" },
          { en: "Spirometry - Obstructive", bn: "স্পাইরোমেট্রি - অব্স্ট্রাক্টিভ" },
          { en: "Spirometry - Restrictive", bn: "স্পাইরোমেট্রি - রেস্ট্রিক্টিভ" },
          { en: "6-min walk test - Normal", bn: "৬ মিনিট হাঁটা - স্বাভাবিক" },
          { en: "6-min walk test - Reduced", bn: "৬ মিনিট হাঁটা - কম" },
          {
            en: "Bronchodilator response - Positive",
            bn: "ব্রঙ্কোডাইলেটর সাড়া - ইতিবাচক"
          },
          {
            en: "Bronchodilator response - Negative",
            bn: "ব্রঙ্কোডাইলেটর সাড়া - নেতিবাচক"
          }
        ].map((test) => {
          const active = (examData.special_tests || []).includes(test.en);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: active ? "default" : "outline",
              className: `cursor-pointer text-sm py-2 px-3 ${active ? "bg-rose-600" : ""}`,
              onClick: () => toggleMulti("special_tests", test.en),
              children: [
                test.en,
                " / ",
                test.bn
              ]
            },
            test.en
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CustomBadgeAdder,
          {
            field: "special_tests",
            customField: "custom_special_tests",
            examData,
            isMulti: true,
            accentColor: "rose-600",
            onUpdate: update
          }
        )
      ] })
    ] })
  ] });
}
const EXAM_TEMPLATES = {
  Cardiology: [
    { finding: "Heart Rate", value: "Normal" },
    { finding: "JVP", value: "Normal" },
    { finding: "Heart Sounds", value: "S1+S2+0" },
    { finding: "Precordial", value: "No thrill, no heave, apex normal" },
    { finding: "Peripheral Pulses", value: "Equal bilaterally" }
  ],
  Respiratory: [
    { finding: "Breath Sounds", value: "Vesicular" },
    { finding: "Crackles", value: "None" },
    { finding: "Wheeze", value: "None" },
    { finding: "Respiratory Rate", value: "Normal" },
    { finding: "Chest Expansion", value: "Equal" }
  ],
  GI: [
    { finding: "Bowel Sounds", value: "Present" },
    { finding: "Palpation", value: "Soft" },
    { finding: "Liver Edge", value: "Not palpable" },
    { finding: "Spleen", value: "Not palpable" },
    { finding: "Tenderness", value: "None" }
  ]
};
const BADGE_PALETTE = [
  {
    base: "bg-blue-100 text-blue-800 border-blue-300",
    active: "bg-blue-500 text-white"
  },
  {
    base: "bg-green-100 text-green-800 border-green-300",
    active: "bg-green-500 text-white"
  },
  {
    base: "bg-amber-100 text-amber-800 border-amber-300",
    active: "bg-amber-500 text-white"
  },
  {
    base: "bg-purple-100 text-purple-800 border-purple-300",
    active: "bg-purple-500 text-white"
  },
  {
    base: "bg-rose-100 text-rose-800 border-rose-300",
    active: "bg-rose-500 text-white"
  },
  {
    base: "bg-cyan-100 text-cyan-800 border-cyan-300",
    active: "bg-cyan-500 text-white"
  },
  {
    base: "bg-orange-100 text-orange-800 border-orange-300",
    active: "bg-orange-500 text-white"
  },
  {
    base: "bg-teal-100 text-teal-800 border-teal-300",
    active: "bg-teal-500 text-white"
  },
  {
    base: "bg-indigo-100 text-indigo-800 border-indigo-300",
    active: "bg-indigo-500 text-white"
  },
  {
    base: "bg-lime-100 text-lime-800 border-lime-300",
    active: "bg-lime-600 text-white"
  }
];
const systemReviewData = {
  Cardiovascular: [
    "Chest pain",
    "Palpitations",
    "Shortness of breath",
    "Leg swelling",
    "Syncope"
  ],
  Respiratory: [
    "Cough",
    "Shortness of breath",
    "Wheezing",
    "Hemoptysis",
    "Chest pain"
  ],
  Gastrointestinal: [
    "Abdominal pain",
    "Nausea",
    "Vomiting",
    "Diarrhea",
    "Constipation",
    "Blood in stool"
  ],
  Genitourinary: [
    "Dysuria",
    "Frequency",
    "Hematuria",
    "Incontinence",
    "Urgency"
  ],
  Neurological: [
    "Headache",
    "Dizziness",
    "Seizures",
    "Weakness",
    "Numbness",
    "Vision changes"
  ],
  Musculoskeletal: [
    "Joint pain",
    "Muscle pain",
    "Back pain",
    "Stiffness",
    "Swelling"
  ],
  Endocrine: [
    "Heat/cold intolerance",
    "Weight changes",
    "Excessive thirst",
    "Frequent urination"
  ],
  Psychiatric: ["Depression", "Anxiety", "Sleep disturbances", "Mood changes"]
};
const medicalHistoryOptions = [
  "DM",
  "HTN",
  "Asthma",
  "IHD",
  "CKD",
  "COPD",
  "TB",
  "Cancer"
];
const surgicalHistoryQuestions = [
  { q: "Any previous surgeries?", options: ["Yes", "No"] },
  { q: "Type of surgery / সার্জারির ধরন", options: [] },
  { q: "When was it done? / কখন হয়েছিল?", options: [] },
  { q: "Any complications? / কোনো জটিলতা?", options: ["No", "Yes - specify"] }
];
const personalHistoryQuestions = [
  {
    q: "Smoking status / ধূমপানের অবস্থা",
    options: ["Non-smoker", "Current smoker", "Ex-smoker"]
  },
  {
    q: "Alcohol consumption / অ্যালকোহল সেবন",
    options: ["None", "Occasional", "Regular"]
  },
  { q: "Diet / খাদ্যাভ্যাস", options: ["Regular", "Vegetarian", "Irregular"] },
  { q: "Occupation / পেশা", options: [] },
  { q: "Exercise / ব্যায়াম", options: ["None", "Light", "Moderate", "Regular"] }
];
const familyHistoryQuestions = [
  {
    q: "Any family history of diabetes? / পরিবারে ডায়াবেটিস?",
    options: [
      "No",
      "Yes - Father",
      "Yes - Mother",
      "Yes - Sibling",
      "Yes - Other"
    ]
  },
  {
    q: "Any family history of hypertension? / পরিবারে উচ্চ রক্তচাপ?",
    options: [
      "No",
      "Yes - Father",
      "Yes - Mother",
      "Yes - Sibling",
      "Yes - Other"
    ]
  },
  {
    q: "Any family history of heart disease? / পরিবারে হৃদরোগ?",
    options: ["No", "Yes - specify"]
  },
  {
    q: "Any family history of cancer? / পরিবারে ক্যান্সার?",
    options: ["No", "Yes - specify"]
  }
];
const immunizationQuestions = [
  { q: "BCG vaccination / বিসিজি টিকা", options: ["Yes", "No", "Unknown"] },
  {
    q: "COVID-19 vaccination / কোভিড-১৯ টিকা",
    options: [
      "Not vaccinated",
      "Partially vaccinated",
      "Fully vaccinated",
      "Booster received"
    ]
  },
  {
    q: "Tetanus toxoid / টিটেনাস টক্সয়েড",
    options: ["Up to date", "Not sure", "Not received"]
  },
  { q: "Other vaccinations / অন্যান্য টিকা", options: [] }
];
const allergyQuestions = [
  { q: "Any drug allergies? / ওষুধে এলার্জি?", options: ["No", "Yes - specify"] },
  { q: "Any food allergies? / খাবারে এলার্জি?", options: ["No", "Yes - specify"] },
  {
    q: "Environmental allergies? / পরিবেশগত এলার্জি?",
    options: ["No", "Dust", "Pollen", "Animal dander", "Other"]
  },
  {
    q: "Type of reaction / প্রতিক্রিয়ার ধরন",
    options: ["Rash", "Swelling", "Breathing difficulty", "Other"]
  }
];
const obstetricQuestions = [
  { q: "Gravida (Total pregnancies) / মোট গর্ভধারণ", options: [] },
  { q: "Para (Live births) / জীবিত সন্তান", options: [] },
  { q: "Abortion (Miscarriages) / গর্ভপাত", options: [] },
  { q: "Last menstrual period (LMP) / শেষ মাসিকের তারিখ", options: [] },
  {
    q: "Any pregnancy complications? / গর্ভাবস্থায় জটিলতা?",
    options: ["No", "Yes - specify"]
  }
];
const gynaecologicalQuestions = [
  {
    q: "Menstrual cycle regularity / মাসিকের নিয়মিততা",
    options: ["Regular", "Irregular"]
  },
  {
    q: "Duration of period / মাসিকের সময়কাল",
    options: ["3-5 days", "5-7 days", "> 7 days"]
  },
  {
    q: "Menstrual pain / মাসিকের ব্যথা",
    options: ["None", "Mild", "Moderate", "Severe"]
  },
  { q: "Age at menarche / প্রথম মাসিকের বয়স", options: [] },
  {
    q: "Menopause status / মেনোপজের অবস্থা",
    options: [
      "Premenopausal",
      "Perimenopausal",
      "Postmenopausal",
      "Not applicable"
    ]
  }
];
const generalExaminationCategories = {
  Appearance: ["Well", "Ill-looking", "Distressed", "Toxic"],
  "Body Build": ["Normal", "Obese", "Thin", "Cachexic"],
  Nutrition: ["Well-nourished", "Malnourished", "Overweight"],
  Cooperation: ["Cooperative", "Uncooperative", "Agitated", "Confused"],
  Dehydration: ["Not dehydrated", "Mild", "Moderate", "Severe"],
  Edema: [
    "Absent",
    "Pedal edema",
    "Facial edema",
    "Generalized",
    "Pitting",
    "Non-pitting"
  ],
  Anemia: ["No pallor", "Mild pallor", "Moderate pallor", "Severe pallor"],
  Jaundice: ["Absent", "Mild icterus", "Moderate icterus", "Severe icterus"],
  Cyanosis: ["Absent", "Central", "Peripheral", "Both"],
  Clubbing: ["Absent", "Grade 1", "Grade 2", "Grade 3", "Grade 4"],
  Koilonychia: ["Absent", "Present"],
  "Lymph nodes": [
    "Not palpable",
    "Cervical enlarged",
    "Axillary enlarged",
    "Inguinal enlarged",
    "Generalized lymphadenopathy"
  ],
  "Thyroid gland": [
    "Not palpable",
    "Palpable - normal",
    "Enlarged - diffuse",
    "Enlarged - nodular"
  ]
};
const commonComplaints = {
  Cough: [
    {
      q: "Duration / কতদিন ধরে?",
      options: ["< 1 week", "1-2 weeks", "2-4 weeks", "> 1 month"]
    },
    {
      q: "Character (dry or productive)? / শুষ্ক নাকি কফসহ?",
      options: ["Dry", "Productive", "Both"]
    },
    {
      q: "Sputum color / কফের রং?",
      options: ["Clear", "Yellow", "Green", "Blood-stained"]
    },
    { q: "Aggravating factors / কিসে বাড়ে?", options: [] }
  ],
  Fever: [
    {
      q: "Duration / কতদিন ধরে?",
      options: ["< 24 hours", "1-3 days", "3-7 days", "> 1 week"]
    },
    {
      q: "Highest temperature recorded / সর্বোচ্চ জ্বরের মাত্রা?",
      options: ["< 100°F", "100-102°F", "102-104°F", "> 104°F"]
    },
    {
      q: "Pattern / জ্বরের ধরন?",
      options: ["Continuous", "Intermittent", "Only at night", "Remittent"]
    },
    {
      q: "Associated symptoms / সাথে কি আর কিছু আছে?",
      options: ["Chills", "Sweating", "Body aches", "Rash"]
    }
  ],
  Headache: [
    {
      q: "Duration / কতদিন ধরে?",
      options: ["< 24 hours", "1-3 days", "3-7 days", "> 1 week"]
    },
    {
      q: "Location / কোথায় ব্যথা?",
      options: ["Frontal", "Temporal", "Occipital", "Whole head"]
    },
    {
      q: "Severity (1-10 scale) / তীব্রতা?",
      options: ["1-3 Mild", "4-6 Moderate", "7-10 Severe"]
    },
    {
      q: "Associated symptoms / সাথে কি আর কিছু?",
      options: ["Nausea", "Vomiting", "Vision changes", "Photophobia"]
    }
  ],
  "Abdominal Pain": [
    {
      q: "Duration / কতদিন ধরে?",
      options: ["< 6 hours", "6-24 hours", "1-3 days", "> 3 days"]
    },
    {
      q: "Location / কোথায় ব্যথা?",
      options: [
        "Upper abdomen",
        "Lower abdomen",
        "Right side",
        "Left side",
        "All over"
      ]
    },
    {
      q: "Character / ব্যথার ধরন?",
      options: ["Sharp", "Dull", "Cramping", "Burning"]
    },
    {
      q: "Associated symptoms / সাথে কি আর কিছু?",
      options: ["Nausea", "Vomiting", "Diarrhea", "Constipation"]
    }
  ],
  "Chest Pain": [
    {
      q: "Duration / কতদিন ধরে?",
      options: ["< 1 hour", "1-6 hours", "6-24 hours", "> 24 hours"]
    },
    {
      q: "Location and radiation / কোথায়, কোথায় ছড়ায়?",
      options: [
        "Central chest",
        "Left side",
        "Right side",
        "Radiates to arm",
        "Radiates to jaw"
      ]
    },
    {
      q: "Character / ব্যথার ধরন?",
      options: ["Sharp", "Pressure", "Burning", "Squeezing"]
    },
    {
      q: "Associated symptoms / সাথে কি আর কিছু?",
      options: ["Shortness of breath", "Sweating", "Nausea", "Palpitations"]
    }
  ],
  "Back Pain": [
    {
      q: "Duration / কতদিন ধরে?",
      options: ["< 24 hours", "1-7 days", "1-4 weeks", "> 1 month"]
    },
    {
      q: "Location / কোথায় ব্যথা?",
      options: ["Upper back", "Middle back", "Lower back"]
    },
    { q: "Any trauma or injury? / কোনো আঘাত পেয়েছেন?", options: ["Yes", "No"] },
    {
      q: "Radiation to legs? / পায়ে ছড়ায়?",
      options: ["No", "Yes - right leg", "Yes - left leg", "Both legs"]
    }
  ],
  "Shortness of Breath": [
    {
      q: "Duration / কতদিন ধরে?",
      options: ["< 1 hour", "1-6 hours", "6-24 hours", "> 24 hours"]
    },
    {
      q: "At rest or exertion? / বিশ্রামে নাকি পরিশ্রমে?",
      options: ["At rest", "With exertion", "Both"]
    },
    {
      q: "Severity / তীব্রতা?",
      options: ["Mild", "Moderate", "Severe", "Cannot speak in sentences"]
    },
    {
      q: "Leg swelling? / পা ফোলা আছে?",
      options: ["No", "Yes - mild", "Yes - moderate", "Yes - severe"]
    }
  ],
  Dizziness: [
    {
      q: "Duration / কতদিন ধরে?",
      options: ["< 1 hour", "1-24 hours", "1-7 days", "> 1 week"]
    },
    {
      q: "Type / কি ধরনের মাথা ঘোরা?",
      options: ["Spinning (vertigo)", "Light-headed", "Both"]
    },
    {
      q: "With position changes? / নড়াচড়ায় বাড়ে?",
      options: ["Yes", "No", "Sometimes"]
    },
    {
      q: "Associated symptoms / সাথে কি আর কিছু?",
      options: ["Nausea", "Hearing loss", "Tinnitus", "Vomiting"]
    }
  ],
  "Nausea/Vomiting": [
    {
      q: "Duration / কতদিন ধরে?",
      options: ["< 6 hours", "6-24 hours", "1-3 days", "> 3 days"]
    },
    {
      q: "Frequency of vomiting / কতবার বমি হয়?",
      options: ["Not vomiting", "1-2 times", "3-5 times", "> 5 times"]
    },
    { q: "Blood in vomit? / বমিতে রক্ত আছে?", options: ["No", "Yes"] },
    {
      q: "Associated symptoms / সাথে কি আর কিছু?",
      options: ["Abdominal pain", "Diarrhea", "Fever", "Headache"]
    }
  ],
  Diarrhea: [
    {
      q: "Duration / কতদিন ধরে?",
      options: ["< 24 hours", "1-3 days", "3-7 days", "> 1 week"]
    },
    {
      q: "Frequency per day / দিনে কতবার?",
      options: ["3-5 times", "6-10 times", "> 10 times"]
    },
    {
      q: "Blood or mucus in stool? / মলে রক্ত বা আম?",
      options: ["No", "Blood", "Mucus", "Both"]
    },
    {
      q: "Associated symptoms / সাথে কি আর কিছু?",
      options: ["Fever", "Abdominal pain", "Vomiting", "Weakness"]
    }
  ],
  Fatigue: [
    {
      q: "Duration / কতদিন ধরে?",
      options: ["< 1 week", "1-4 weeks", "1-3 months", "> 3 months"]
    },
    {
      q: "Does rest help? / বিশ্রামে ভালো হয়?",
      options: ["Yes", "No", "Partially"]
    },
    {
      q: "Weight changes? / ওজন পরিবর্তন?",
      options: ["No change", "Weight loss", "Weight gain"]
    },
    {
      q: "Associated symptoms / সাথে কি আর কিছু?",
      options: ["Fever", "Sweating", "Pallor", "Shortness of breath"]
    }
  ],
  Rash: [
    {
      q: "Duration / কতদিন ধরে?",
      options: ["< 24 hours", "1-3 days", "3-7 days", "> 1 week"]
    },
    {
      q: "Location / কোথায়?",
      options: ["Localized", "Spreading", "All over body"]
    },
    {
      q: "Itchy or painful? / চুলকায় নাকি ব্যথা করে?",
      options: ["Not itchy/painful", "Itchy", "Painful", "Both"]
    },
    { q: "New medications or exposure? / নতুন ওষুধ বা সংস্পর্শ?", options: [] }
  ],
  "Joint Pain": [
    {
      q: "Which joints? / কোন জয়েন্টে?",
      options: ["Knee", "Hip", "Shoulder", "Elbow", "Wrist", "Multiple joints"]
    },
    {
      q: "Duration / কতদিন ধরে?",
      options: ["< 1 week", "1-4 weeks", "1-3 months", "> 3 months"]
    },
    {
      q: "Swelling or redness? / ফোলা বা লালভাব আছে?",
      options: ["No", "Swelling only", "Redness only", "Both"]
    },
    {
      q: "Morning stiffness? / সকালে শক্ত হয়?",
      options: ["No", "Yes - < 30 min", "Yes - > 30 min"]
    }
  ],
  "Urinary Problem": [
    {
      q: "Main issue / প্রধান সমস্যা?",
      options: ["Pain/burning", "Frequency", "Blood in urine", "Multiple"]
    },
    {
      q: "Duration / কতদিন ধরে?",
      options: ["< 24 hours", "1-3 days", "3-7 days", "> 1 week"]
    },
    {
      q: "Associated fever or back pain? / জ্বর বা কোমর ব্যথা?",
      options: ["No", "Fever only", "Back pain only", "Both"]
    },
    {
      q: "Difficulty urinating? / প্রস্রাবে কষ্ট?",
      options: [
        "No",
        "Difficulty starting",
        "Weak stream",
        "Incomplete emptying"
      ]
    }
  ]
};
function nowDateTimeLocal() {
  const now = /* @__PURE__ */ new Date();
  now.setSeconds(0, 0);
  return now.toISOString().slice(0, 16);
}
function UnitBadge({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-teal-700 text-sm bg-teal-50 border border-teal-200 px-1.5 py-0.5 rounded text-xs ml-1", children });
}
function VisitForm({
  patientId,
  patient,
  patientType,
  visit,
  formRef,
  onSubmit,
  onCancel,
  isLoading
}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const [visitType, setVisitType] = reactExports.useState(
    (visit == null ? void 0 : visit.visit_type) || (patientType === "outdoor" ? "outdoor" : "outdoor")
  );
  const [formData, setFormData] = reactExports.useState(
    visit || {
      patient_id: patientId,
      visit_type: visitType,
      visit_date: nowDateTimeLocal(),
      chief_complaint: "",
      complaint_details: {},
      system_review: {},
      past_medical_history: {},
      past_surgical_history: "",
      personal_history: "",
      family_history: "",
      immunization_history: "",
      allergy_history: "",
      drug_history: [{ drug_name: "", dose: "", daily_dose: "" }],
      salient_features: "",
      obstetric_history: "",
      gynaecological_history: "",
      other_history: "",
      history_of_present_illness: "",
      vital_signs: {
        blood_pressure: "",
        pulse: "",
        temperature: "",
        respiratory_rate: "",
        oxygen_saturation: "",
        weight: "",
        height: ""
      },
      general_examination: {},
      systemic_examination: {},
      physical_examination: "",
      investigation_profile: [],
      previous_investigation_report: "",
      previous_investigation_rows: [],
      differential_diagnosis: "",
      investigation_advice: "",
      diagnosis: "",
      notes: ""
    }
  );
  const [ddImageConfirmOpen, setDdImageConfirmOpen] = reactExports.useState(false);
  const [ddReportDate, setDdReportDate] = reactExports.useState("");
  const [ddImageHasData, setDdImageHasData] = reactExports.useState(false);
  const ddImageInputRef = reactExports.useRef(null);
  const [selectedComplaints, setSelectedComplaints] = reactExports.useState([]);
  const [complaintAnswers, setComplaintAnswers] = reactExports.useState({});
  const [customComplaints, setCustomComplaints] = reactExports.useState({});
  const [complaintQuestions, setComplaintQuestions] = reactExports.useState({});
  const [showAddDialog, setShowAddDialog] = reactExports.useState(false);
  const [newComplaint, setNewComplaint] = reactExports.useState("");
  const [newQuestions, setNewQuestions] = reactExports.useState([
    { q: "", options: [] },
    { q: "", options: [] },
    { q: "", options: [] },
    { q: "", options: [] }
  ]);
  const [systemReviewAnswers, setSystemReviewAnswers] = reactExports.useState({});
  const [customSystems, setCustomSystems] = reactExports.useState(
    {}
  );
  const [medicalHistory, setMedicalHistory] = reactExports.useState(
    {}
  );
  const [generalExamFindings, setGeneralExamFindings] = reactExports.useState({});
  const [respiratoryExam, setRespiratoryExam] = reactExports.useState({});
  const [neurologicalExam, setNeurologicalExam] = reactExports.useState({});
  const [gastrointestinalExam, setGastrointestinalExam] = reactExports.useState({});
  const [musculoskeletalExam, setMusculoskeletalExam] = reactExports.useState({});
  const [cardiovascularExam, setCardiovascularExam] = reactExports.useState({});
  const [systemicExamFindings, setSystemicExamFindings] = reactExports.useState({
    cardiovascular: cardiovascularExam,
    respiratory: respiratoryExam,
    gastrointestinal: gastrointestinalExam,
    neurological: neurologicalExam,
    musculoskeletal: musculoskeletalExam
  });
  const handleSystemicExamChange = (system, value) => {
    setSystemicExamFindings((prev) => ({ ...prev, [system]: value }));
  };
  const [diagnosisStatus, setDiagnosisStatus] = reactExports.useState("provisional");
  const [familyRisk, setFamilyRisk] = reactExports.useState(() => {
    try {
      const email = getDoctorEmail();
      const patientIdStr = (patientId == null ? void 0 : patientId.toString()) ?? "new";
      return loadFamilyHistoryRisk(email, patientIdStr) ?? {
        diabetes: false,
        hypertension: false,
        ihd: false,
        cancer: false,
        stroke: false,
        additionalNotes: ""
      };
    } catch {
      return {
        diabetes: false,
        hypertension: false,
        ihd: false,
        cancer: false,
        stroke: false,
        additionalNotes: ""
      };
    }
  });
  const saveFamilyRisk = (updated) => {
    try {
      const email = getDoctorEmail();
      const patientIdStr = (patientId == null ? void 0 : patientId.toString()) ?? "new";
      saveFamilyHistoryRisk(email, patientIdStr, updated);
    } catch {
    }
  };
  const [autosavedAt, setAutosavedAt] = reactExports.useState(null);
  const autosaveKeyRef = reactExports.useRef("");
  const [showSurgicalQuestions, setShowSurgicalQuestions] = reactExports.useState(false);
  const [showPersonalQuestions, setShowPersonalQuestions] = reactExports.useState(false);
  const [showFamilyQuestions, setShowFamilyQuestions] = reactExports.useState(false);
  const [showImmunizationQuestions, setShowImmunizationQuestions] = reactExports.useState(false);
  const [showAllergyQuestions, setShowAllergyQuestions] = reactExports.useState(false);
  const [showObstetricQuestions, setShowObstetricQuestions] = reactExports.useState(false);
  const [showGynaecologicalQuestions, setShowGynaecologicalQuestions] = reactExports.useState(false);
  const [surgicalHistoryAnswers, setSurgicalHistoryAnswers] = reactExports.useState(
    Array(surgicalHistoryQuestions.length).fill("")
  );
  const [personalHistoryAnswers, setPersonalHistoryAnswers] = reactExports.useState(
    Array(personalHistoryQuestions.length).fill("")
  );
  const [familyHistoryAnswers, setFamilyHistoryAnswers] = reactExports.useState(
    Array(familyHistoryQuestions.length).fill("")
  );
  const [immunizationAnswers, setImmunizationAnswers] = reactExports.useState(
    Array(immunizationQuestions.length).fill("")
  );
  const [epiSchedule, setEpiSchedule] = reactExports.useState("");
  const [allergyAnswers, setAllergyAnswers] = reactExports.useState(
    Array(allergyQuestions.length).fill("")
  );
  const [obstetricAnswers, setObstetricAnswers] = reactExports.useState(
    Array(obstetricQuestions.length).fill("")
  );
  const [gynaecologicalAnswers, setGynaecologicalAnswers] = reactExports.useState(
    Array(gynaecologicalQuestions.length).fill("")
  );
  const [extraHistoryQuestions, setExtraHistoryQuestions] = reactExports.useState({});
  const [extraHistoryAnswers, setExtraHistoryAnswers] = reactExports.useState({});
  const [newHistoryQuestionText, setNewHistoryQuestionText] = reactExports.useState({});
  const [addingQuestionFor, setAddingQuestionFor] = reactExports.useState(
    null
  );
  const [newQuestionForComplaint, setNewQuestionForComplaint] = reactExports.useState({ q: "", options: [] });
  const [newOptionDraftForQuestion, setNewOptionDraftForQuestion] = reactExports.useState("");
  const [editedComplaintQuestions, setEditedComplaintQuestions] = reactExports.useState({});
  reactExports.useEffect(() => {
    const email = getDoctorEmail();
    const id = (patientId == null ? void 0 : patientId.toString()) || "new";
    autosaveKeyRef.current = `visitFormAutosave_${id}_${email}`;
    try {
      const raw = localStorage.getItem(autosaveKeyRef.current);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (saved.formData) setFormData(saved.formData);
      if (saved.visitType) setVisitType(saved.visitType);
      if (saved.selectedComplaints)
        setSelectedComplaints(saved.selectedComplaints);
      if (saved.complaintAnswers)
        setComplaintAnswers(saved.complaintAnswers);
      if (saved.systemReviewAnswers)
        setSystemReviewAnswers(
          saved.systemReviewAnswers
        );
      if (saved.medicalHistory)
        setMedicalHistory(saved.medicalHistory);
      if (saved.generalExamFindings)
        setGeneralExamFindings(
          saved.generalExamFindings
        );
      if (saved.diagnosisStatus)
        setDiagnosisStatus(saved.diagnosisStatus);
      if (saved.surgicalHistoryAnswers)
        setSurgicalHistoryAnswers(saved.surgicalHistoryAnswers);
      if (saved.personalHistoryAnswers)
        setPersonalHistoryAnswers(saved.personalHistoryAnswers);
      if (saved.familyHistoryAnswers)
        setFamilyHistoryAnswers(saved.familyHistoryAnswers);
      if (saved.allergyAnswers)
        setAllergyAnswers(saved.allergyAnswers);
      if (saved.epiSchedule)
        setEpiSchedule(saved.epiSchedule);
      if (saved.autosavedAt)
        setAutosavedAt(new Date(saved.autosavedAt));
    } catch {
    }
  }, []);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      if (!autosaveKeyRef.current) return;
      try {
        const snapshot = {
          formData,
          visitType,
          selectedComplaints,
          complaintAnswers,
          systemReviewAnswers,
          medicalHistory,
          generalExamFindings,
          diagnosisStatus,
          surgicalHistoryAnswers,
          personalHistoryAnswers,
          familyHistoryAnswers,
          allergyAnswers,
          epiSchedule,
          autosavedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        localStorage.setItem(autosaveKeyRef.current, JSON.stringify(snapshot));
        setAutosavedAt(/* @__PURE__ */ new Date());
      } catch {
      }
    }, 6e4);
    return () => clearInterval(interval);
  }, [
    formData,
    visitType,
    selectedComplaints,
    complaintAnswers,
    systemReviewAnswers,
    medicalHistory,
    generalExamFindings,
    diagnosisStatus
  ]);
  const { currentDoctor } = useEmailAuth();
  const EDIT_ROLES = [
    "admin",
    "consultant_doctor",
    "doctor"
  ];
  const canEditQuestions = !currentDoctor || EDIT_ROLES.includes(currentDoctor.role);
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleVitalChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      vital_signs: { ...prev.vital_signs, [field]: value }
    }));
  };
  const handleDrugHistoryChange = (index, field, value) => {
    setFormData((prev) => {
      var _a2;
      const current = ((_a2 = prev.drug_history) == null ? void 0 : _a2.length) ? prev.drug_history : [{ drug_name: "", dose: "", daily_dose: "" }];
      return {
        ...prev,
        drug_history: current.map(
          (d, i) => i === index ? { ...d, [field]: value } : d
        )
      };
    });
  };
  const addDrugHistory = () => {
    setFormData((prev) => ({
      ...prev,
      drug_history: [
        ...prev.drug_history || [],
        { drug_name: "", dose: "", daily_dose: "" }
      ]
    }));
  };
  const removeDrugHistory = (index) => {
    if ((formData.drug_history || []).length > 1) {
      setFormData((prev) => ({
        ...prev,
        drug_history: (prev.drug_history || []).filter((_, i) => i !== index)
      }));
    }
  };
  const toggleSystemReview = (system, symptom) => {
    setSystemReviewAnswers((prev) => {
      const current = prev[system] || [];
      return {
        ...prev,
        [system]: current.includes(symptom) ? current.filter((s) => s !== symptom) : [...current, symptom]
      };
    });
  };
  const toggleMedicalHistory = (condition) => {
    setMedicalHistory((prev) => ({
      ...prev,
      [condition]: prev[condition] === "+" ? "-" : prev[condition] === "-" ? "" : "+"
    }));
  };
  const toggleGeneralExam = (finding, status) => {
    setGeneralExamFindings((prev) => ({
      ...prev,
      [finding]: prev[finding] === status ? "" : status
    }));
  };
  const [templateExamRows, setTemplateExamRows] = reactExports.useState(
    []
  );
  const applyExamTemplate = (templateName) => {
    const rows = EXAM_TEMPLATES[templateName] || [];
    setTemplateExamRows((prev) => {
      const existingFindings = new Set(prev.map((r) => r.finding));
      const newRows = rows.filter((r) => !existingFindings.has(r.finding));
      return [...prev, ...newRows];
    });
  };
  const updateTemplateRow = (idx, field, value) => {
    setTemplateExamRows(
      (prev) => prev.map((r, i) => i === idx ? { ...r, [field]: value } : r)
    );
  };
  const removeTemplateRow = (idx) => {
    setTemplateExamRows((prev) => prev.filter((_, i) => i !== idx));
  };
  const addHistoryQuestion = (sectionKey) => {
    const text = (newHistoryQuestionText[sectionKey] || "").trim();
    if (!text) return;
    setExtraHistoryQuestions((prev) => ({
      ...prev,
      [sectionKey]: [...prev[sectionKey] || [], { q: text, options: [] }]
    }));
    setExtraHistoryAnswers((prev) => ({
      ...prev,
      [sectionKey]: [...prev[sectionKey] || [], ""]
    }));
    setNewHistoryQuestionText((prev) => ({ ...prev, [sectionKey]: "" }));
  };
  const allComplaints = { ...commonComplaints, ...customComplaints };
  const getComplaintQuestions = (complaint) => {
    const base = allComplaints[complaint] || [];
    const edits = editedComplaintQuestions[complaint] || {};
    const mergedBase = base.map((q, i) => {
      var _a2, _b2;
      return {
        q: ((_a2 = edits[i]) == null ? void 0 : _a2.q) ?? q.q,
        options: ((_b2 = edits[i]) == null ? void 0 : _b2.options) ?? q.options
      };
    });
    const extra = complaintQuestions[complaint] || [];
    return [...mergedBase, ...extra];
  };
  const handleTemplateSelect = (template) => {
    const isSelected = selectedComplaints.includes(template);
    const updated = isSelected ? selectedComplaints.filter((c) => c !== template) : [...selectedComplaints, template];
    setSelectedComplaints(updated);
    if (!isSelected) {
      setComplaintAnswers((prev) => ({
        ...prev,
        [template]: (allComplaints[template] || []).map(() => "")
      }));
    } else {
      const newAnswers = { ...complaintAnswers };
      delete newAnswers[template];
      setComplaintAnswers(newAnswers);
    }
    setFormData((prev) => ({ ...prev, chief_complaint: updated.join(", ") }));
  };
  const handleAddComplaint = () => {
    if (newComplaint.trim()) {
      const questions = newQuestions.filter((item) => item.q.trim() !== "");
      if (questions.length > 0) {
        setCustomComplaints((prev) => ({ ...prev, [newComplaint]: questions }));
        setNewComplaint("");
        setNewQuestions([
          { q: "", options: [] },
          { q: "", options: [] },
          { q: "", options: [] },
          { q: "", options: [] }
        ]);
        setShowAddDialog(false);
      }
    }
  };
  const handleQuestionChange = (index, field, value) => {
    const updated = [...newQuestions];
    if (field === "question") {
      updated[index] = { ...updated[index], q: value };
    } else if (field === "options") {
      updated[index] = {
        ...updated[index],
        options: value.split(",").map((o) => o.trim()).filter((o) => o !== "")
      };
    }
    setNewQuestions(updated);
  };
  const handleAnswerChange = (complaint, questionIndex, value) => {
    setComplaintAnswers((prev) => ({
      ...prev,
      [complaint]: (prev[complaint] || []).map(
        (ans, idx) => idx === questionIndex ? value : ans
      )
    }));
  };
  const handleEditComplaintQuestion = (complaint, idx, newText) => {
    const base = allComplaints[complaint] || [];
    if (idx < base.length) {
      setEditedComplaintQuestions((prev) => {
        var _a2;
        return {
          ...prev,
          [complaint]: {
            ...prev[complaint] || {},
            [idx]: { ...((_a2 = prev[complaint]) == null ? void 0 : _a2[idx]) || {}, q: newText }
          }
        };
      });
    } else {
      const extraIdx = idx - base.length;
      setComplaintQuestions((prev) => {
        const arr = [...prev[complaint] || []];
        if (arr[extraIdx]) arr[extraIdx] = { ...arr[extraIdx], q: newText };
        return { ...prev, [complaint]: arr };
      });
    }
  };
  const handleAddComplaintOption = (complaint, idx, option) => {
    var _a2, _b2, _c2;
    const base = allComplaints[complaint] || [];
    if (idx < base.length) {
      const currentOpts = ((_b2 = (_a2 = editedComplaintQuestions[complaint]) == null ? void 0 : _a2[idx]) == null ? void 0 : _b2.options) ?? ((_c2 = base[idx]) == null ? void 0 : _c2.options) ?? [];
      setEditedComplaintQuestions((prev) => {
        var _a3;
        return {
          ...prev,
          [complaint]: {
            ...prev[complaint] || {},
            [idx]: {
              ...((_a3 = prev[complaint]) == null ? void 0 : _a3[idx]) || {},
              options: [...currentOpts, option]
            }
          }
        };
      });
    } else {
      const extraIdx = idx - base.length;
      setComplaintQuestions((prev) => {
        const arr = [...prev[complaint] || []];
        if (arr[extraIdx]) {
          arr[extraIdx] = {
            ...arr[extraIdx],
            options: [...arr[extraIdx].options, option]
          };
        }
        return { ...prev, [complaint]: arr };
      });
    }
  };
  const handleDeleteComplaintOption = (complaint, idx, option) => {
    var _a2, _b2, _c2;
    const base = allComplaints[complaint] || [];
    if (idx < base.length) {
      const currentOpts = ((_b2 = (_a2 = editedComplaintQuestions[complaint]) == null ? void 0 : _a2[idx]) == null ? void 0 : _b2.options) ?? ((_c2 = base[idx]) == null ? void 0 : _c2.options) ?? [];
      setEditedComplaintQuestions((prev) => {
        var _a3;
        return {
          ...prev,
          [complaint]: {
            ...prev[complaint] || {},
            [idx]: {
              ...((_a3 = prev[complaint]) == null ? void 0 : _a3[idx]) || {},
              options: currentOpts.filter((o) => o !== option)
            }
          }
        };
      });
    } else {
      const extraIdx = idx - base.length;
      setComplaintQuestions((prev) => {
        const arr = [...prev[complaint] || []];
        if (arr[extraIdx]) {
          arr[extraIdx] = {
            ...arr[extraIdx],
            options: arr[extraIdx].options.filter((o) => o !== option)
          };
        }
        return { ...prev, [complaint]: arr };
      });
    }
  };
  const commitNewQuestionForComplaint = (complaint) => {
    if (!newQuestionForComplaint.q.trim()) {
      setAddingQuestionFor(null);
      return;
    }
    setComplaintQuestions((prev) => ({
      ...prev,
      [complaint]: [
        ...prev[complaint] || [],
        {
          q: newQuestionForComplaint.q.trim(),
          options: newQuestionForComplaint.options
        }
      ]
    }));
    setComplaintAnswers((prev) => ({
      ...prev,
      [complaint]: [...prev[complaint] || [], ""]
    }));
    setAddingQuestionFor(null);
    setNewQuestionForComplaint({ q: "", options: [] });
    setNewOptionDraftForQuestion("");
  };
  const handleAddQuestionToComplaint = (complaint) => {
    setAddingQuestionFor(complaint);
    setNewQuestionForComplaint({ q: "", options: [] });
  };
  const handleSubmit = (e) => {
    var _a2, _b2, _c2, _d2, _e2;
    e.preventDefault();
    const buildSummary = (baseQs, baseAnswers, sectionKey) => [
      ...baseQs.map(
        (q, i) => baseAnswers[i] ? `${q.q}: ${baseAnswers[i]}` : ""
      ),
      ...(extraHistoryQuestions[sectionKey] || []).map(
        (q, i) => {
          var _a3;
          return ((_a3 = extraHistoryAnswers[sectionKey]) == null ? void 0 : _a3[i]) ? `${q.q}: ${extraHistoryAnswers[sectionKey][i]}` : "";
        }
      )
    ].filter(Boolean).join("\n");
    const surgicalHistorySummary = buildSummary(
      surgicalHistoryQuestions,
      surgicalHistoryAnswers,
      "surgical"
    );
    const personalHistorySummary = buildSummary(
      personalHistoryQuestions,
      personalHistoryAnswers,
      "personal"
    );
    const familyHistorySummary = buildSummary(
      familyHistoryQuestions,
      familyHistoryAnswers,
      "family"
    );
    const immunizationSummary = buildSummary(
      immunizationQuestions,
      immunizationAnswers,
      "immunization"
    );
    const allergySummary = buildSummary(
      allergyQuestions,
      allergyAnswers,
      "allergy"
    );
    const obstetricSummary = buildSummary(
      obstetricQuestions,
      obstetricAnswers,
      "obstetric"
    );
    const gynaecologicalSummary = buildSummary(
      gynaecologicalQuestions,
      gynaecologicalAnswers,
      "gynaecological"
    );
    let historyOfPresentIllness = null;
    if (visitType === "outdoor") {
      const sections = [
        surgicalHistorySummary && `Past Surgical History:
${surgicalHistorySummary}`,
        personalHistorySummary && `Personal History:
${personalHistorySummary}`,
        familyHistorySummary && `Family History:
${familyHistorySummary}`,
        immunizationSummary && `Immunization History:
${immunizationSummary}`,
        allergySummary && `Allergy History:
${allergySummary}`,
        obstetricSummary && `Obstetric History:
${obstetricSummary}`,
        gynaecologicalSummary && `Gynaecological History:
${gynaecologicalSummary}`,
        formData.other_history && `Other History:
${formData.other_history}`
      ].filter(Boolean);
      historyOfPresentIllness = sections.length > 0 ? sections.join("\n\n") : null;
    } else {
      historyOfPresentIllness = ((_a2 = formData.history_of_present_illness) == null ? void 0 : _a2.trim()) || null;
    }
    let physicalExamination = null;
    {
      const genExamLines = Object.entries(generalExamFindings).filter(([, v]) => v && !String(v).endsWith("_note")).map(([k, v]) => `${k}: ${v}`);
      const flattenExam = (exam, label) => {
        const parts2 = [];
        for (const [, v] of Object.entries(exam)) {
          if (!v) continue;
          if (Array.isArray(v) && v.length > 0) parts2.push(...v.map(String));
          else if (typeof v === "object" && v !== null) {
            const sub = Object.values(v).filter(Boolean).map(String);
            parts2.push(...sub);
          } else if (typeof v === "string" && v.trim()) parts2.push(v);
        }
        return parts2.length > 0 ? `${label}: ${parts2.slice(0, 4).join(", ")}.` : "";
      };
      const parts = [
        genExamLines.length > 0 && `General Examination:
${genExamLines.join("\n")}`,
        flattenExam(respiratoryExam, "Respiratory system"),
        flattenExam(neurologicalExam, "Neurological system"),
        flattenExam(gastrointestinalExam, "Gastrointestinal system"),
        flattenExam(musculoskeletalExam, "Musculoskeletal system"),
        flattenExam(cardiovascularExam, "Cardiovascular system")
      ].filter(Boolean);
      physicalExamination = parts.length > 0 ? parts.join("\n\n") : null;
    }
    const vs = formData.vital_signs;
    const toStr = (v) => v !== void 0 && v !== "" ? String(v) : void 0;
    const vitalSigns = {
      bloodPressure: ((_b2 = vs == null ? void 0 : vs.blood_pressure) == null ? void 0 : _b2.trim()) || void 0,
      pulse: toStr(vs == null ? void 0 : vs.pulse),
      temperature: toStr(vs == null ? void 0 : vs.temperature),
      respiratoryRate: toStr(vs == null ? void 0 : vs.respiratory_rate),
      oxygenSaturation: toStr(vs == null ? void 0 : vs.oxygen_saturation)
    };
    const notesParts = [
      formData.previous_investigation_report,
      formData.differential_diagnosis,
      formData.investigation_advice,
      Array.isArray(formData.investigation_profile) && formData.investigation_profile.length > 0 ? formData.investigation_profile.map((inv) => `${inv.name}: ${inv.result} ${inv.unit}`.trim()).join("\n") : void 0,
      formData.notes
    ].filter(Boolean);
    const notes = notesParts.length > 0 ? notesParts.join("\n\n") : null;
    const chiefComplaint = selectedComplaints.length > 0 ? selectedComplaints.join(", ") : ((_c2 = formData.chief_complaint) == null ? void 0 : _c2.trim()) || "";
    const visitDate = BigInt(new Date(formData.visit_date || nowDateTimeLocal()).getTime()) * 1000000n;
    try {
      const doctorEmail = getDoctorEmail();
      const existingVisits = loadFromStorage(
        `visits_${doctorEmail}`
      );
      const nextVisitId = existingVisits.length === 0 ? 1n : existingVisits.reduce(
        (max, v) => v.id > max ? v.id : max,
        0n
      ) + 1n;
      const extendedKey = `visit_form_data_${nextVisitId}_${doctorEmail}`;
      const extendedData = {
        visitType,
        chiefComplaints: selectedComplaints,
        complaintAnswers: (() => {
          const result = {};
          for (const complaint of selectedComplaints) {
            const qs = getComplaintQuestions(complaint);
            const ans = complaintAnswers[complaint] || [];
            result[complaint] = {};
            qs.forEach((q, i) => {
              if (ans[i]) result[complaint][q.q] = ans[i];
            });
          }
          return result;
        })(),
        systemReviewAnswers,
        pastMedicalHistory: Object.entries(medicalHistory).filter(([, v]) => v === "+").map(([k]) => k),
        pastMedicalHistoryAll: medicalHistory,
        drugHistory: (formData.drug_history || []).filter((d) => {
          var _a3;
          return (_a3 = d.drug_name) == null ? void 0 : _a3.trim();
        }).map((d) => ({
          name: d.drug_name,
          dose: d.dose,
          duration: d.daily_dose
        })),
        surgicalHistory: surgicalHistoryAnswers.filter(Boolean),
        familyHistory: familyHistoryAnswers.filter(Boolean),
        personalHistory: personalHistoryAnswers.filter(Boolean),
        immunizationHistory: immunizationAnswers.filter(Boolean),
        epiSchedule,
        allergyHistory: allergyAnswers.filter(Boolean),
        obstetricHistory: obstetricAnswers.filter(Boolean),
        gynaecologicalHistory: gynaecologicalAnswers.filter(Boolean),
        historyOfPresentIllness: formData.history_of_present_illness || "",
        vitalSigns: {
          bloodPressure: ((_d2 = vs == null ? void 0 : vs.blood_pressure) == null ? void 0 : _d2.trim()) || void 0,
          pulse: (vs == null ? void 0 : vs.pulse) ? String(vs.pulse) : void 0,
          temperature: (vs == null ? void 0 : vs.temperature) ? String(vs.temperature) : void 0,
          respiratoryRate: (vs == null ? void 0 : vs.respiratory_rate) ? String(vs.respiratory_rate) : void 0,
          oxygenSaturation: (vs == null ? void 0 : vs.oxygen_saturation) ? String(vs.oxygen_saturation) : void 0,
          weight: (vs == null ? void 0 : vs.weight) ? String(vs.weight) : void 0,
          height: (vs == null ? void 0 : vs.height) ? String(vs.height) : void 0
        },
        generalExamFindings,
        respiratoryExam,
        neurologicalExam,
        gastrointestinalExam,
        musculoskeletalExam,
        cardiovascularExam,
        previousInvestigationRows: Array.isArray(
          formData.previous_investigation_rows
        ) ? formData.previous_investigation_rows : [],
        differentialDiagnosis: formData.differential_diagnosis || "",
        investigationAdvice: formData.investigation_advice || "",
        diagnosis: formData.diagnosis || "",
        salientFeatures: formData.salient_features || "",
        otherMedicalHistory: formData.other_medical_history || "",
        diagnosisStatus,
        templateExamRows
      };
      localStorage.setItem(extendedKey, JSON.stringify(extendedData));
      if (autosaveKeyRef.current) {
        localStorage.removeItem(autosaveKeyRef.current);
        setAutosavedAt(null);
      }
    } catch {
    }
    onSubmit({
      patientId,
      visitDate,
      chiefComplaint,
      historyOfPresentIllness,
      vitalSigns,
      physicalExamination,
      diagnosis: ((_e2 = formData.diagnosis) == null ? void 0 : _e2.trim()) || null,
      notes,
      visitType
    });
  };
  const generateSalientFeatures = () => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k;
    const title = ((_a2 = patient == null ? void 0 : patient.gender) == null ? void 0 : _a2.toLowerCase()) === "female" ? "Mrs/Ms" : "Mr";
    const name = (patient == null ? void 0 : patient.fullName) || "...";
    let age = "...";
    if (patient == null ? void 0 : patient.dateOfBirth) {
      const ms = Number(patient.dateOfBirth) / 1e6;
      age = String(Math.floor((Date.now() - ms) / (365.25 * 24 * 3600 * 1e3)));
    }
    const occupation = ((_b2 = personalHistoryAnswers[3]) == null ? void 0 : _b2.trim()) || "...";
    const address = ((_c2 = patient == null ? void 0 : patient.address) == null ? void 0 : _c2.trim()) || "...";
    const htn = medicalHistory.HTN === "+" ? "hypertensive" : "normotensive";
    const dm = medicalHistory.DM === "+" ? "diabetic" : "nondiabetic";
    const complaintLines = [];
    if (selectedComplaints.length > 0) {
      selectedComplaints.forEach((complaint, i) => {
        const qs = getComplaintQuestions(complaint);
        const answers = complaintAnswers[complaint] || [];
        const parts2 = qs.map((_q, idx) => answers[idx] ? answers[idx] : "").filter(Boolean).slice(0, 4);
        complaintLines.push(
          parts2.length > 0 ? `${i + 1}. ${complaint} — ${parts2.join(", ")}` : `${i + 1}. ${complaint}`
        );
      });
    } else if ((_d2 = formData.chief_complaint) == null ? void 0 : _d2.trim()) {
      complaintLines.push(`1. ${formData.chief_complaint.trim()}`);
    }
    const presentedWith = complaintLines.length > 0 ? `presented with:
${complaintLines.join("\n")}` : "presented with various complaints";
    const positiveSysReview = [];
    for (const [k, v] of Object.entries(systemReviewAnswers)) {
      const vals = Array.isArray(v) ? v.filter(Boolean) : [];
      if (vals.length > 0 && !vals.every((x) => x === "Normal" || x === "None" || x === "No")) {
        positiveSysReview.push(`${k}: ${vals.join(", ")}`);
      }
    }
    const sysReviewLine = positiveSysReview.length > 0 ? `He/She also complains of ${positiveSysReview.join("; ")}.` : "";
    const vitalParts = [];
    if ((_e2 = formData.vital_signs) == null ? void 0 : _e2.blood_pressure)
      vitalParts.push(`BP ${formData.vital_signs.blood_pressure} mmHg`);
    if ((_f2 = formData.vital_signs) == null ? void 0 : _f2.pulse)
      vitalParts.push(`Pulse ${formData.vital_signs.pulse} beats/min`);
    if ((_g2 = formData.vital_signs) == null ? void 0 : _g2.temperature)
      vitalParts.push(`Temp ${formData.vital_signs.temperature} °F`);
    if ((_h2 = formData.vital_signs) == null ? void 0 : _h2.respiratory_rate)
      vitalParts.push(
        `RR ${formData.vital_signs.respiratory_rate} breaths/min`
      );
    if ((_i2 = formData.vital_signs) == null ? void 0 : _i2.oxygen_saturation)
      vitalParts.push(`SpO₂ ${formData.vital_signs.oxygen_saturation}%`);
    if ((_j2 = formData.vital_signs) == null ? void 0 : _j2.weight)
      vitalParts.push(`Weight ${formData.vital_signs.weight} kg`);
    const vitalsLine = vitalParts.length > 0 ? `On examination, ${vitalParts.join(", ")}.` : "";
    const genExamParts = Object.entries(generalExamFindings).filter(([k, v]) => v && !k.endsWith("_note")).map(([k, v]) => `${k}: ${v}`);
    const genExamLine = genExamParts.length > 0 ? `On general examination: ${genExamParts.join(", ")}.` : "On general examination: within normal limits.";
    const flattenExam = (exam, label) => {
      const parts2 = [];
      for (const [, v] of Object.entries(exam)) {
        if (!v) continue;
        if (Array.isArray(v) && v.length > 0) parts2.push(...v.map(String));
        else if (typeof v === "object" && v !== null) {
          const sub = Object.values(v).filter(Boolean).map(String);
          parts2.push(...sub);
        } else if (typeof v === "string" && v.trim()) parts2.push(v);
      }
      return parts2.length > 0 ? `${label}: ${parts2.slice(0, 4).join(", ")}.` : "";
    };
    const systemicParts = [
      flattenExam(cardiovascularExam, "Cardiovascular system"),
      flattenExam(respiratoryExam, "Respiratory system"),
      flattenExam(gastrointestinalExam, "Gastrointestinal system"),
      flattenExam(neurologicalExam, "Neurological system"),
      flattenExam(musculoskeletalExam, "Musculoskeletal system")
    ].filter(Boolean);
    const systemicLine = systemicParts.length > 0 ? `On systemic examination:
${systemicParts.join("\n")}` : "On systemic examination: Heart: S1+S2+0, Lung: Clear, P/A: NAD";
    const smokingStatus = (_k = personalHistoryAnswers[0]) == null ? void 0 : _k.trim();
    const smokingLine = smokingStatus && smokingStatus !== "Non-smoker" ? `He/She is a ${smokingStatus.toLowerCase()}.` : "";
    const familyLines = familyHistoryAnswers.map(
      (ans, i) => ans && ans !== "No" ? `${familyHistoryQuestions[i].q.split("/")[0].trim()}: ${ans}` : ""
    ).filter(Boolean);
    const riskFactors = [];
    if (familyRisk.diabetes) riskFactors.push("Diabetes");
    if (familyRisk.hypertension) riskFactors.push("Hypertension");
    if (familyRisk.ihd) riskFactors.push("IHD");
    if (familyRisk.cancer) riskFactors.push("Cancer");
    if (familyRisk.stroke) riskFactors.push("Stroke");
    const familyLine = familyLines.length > 0 || riskFactors.length > 0 ? `On query, family history reveals ${[...familyLines, ...riskFactors.length > 0 ? [`hereditary risk: ${riskFactors.join(", ")}`] : []].join("; ")}.` : "";
    const drugs = (formData.drug_history || []).filter(
      (d) => {
        var _a3;
        return (_a3 = d.drug_name) == null ? void 0 : _a3.trim();
      }
    );
    const drugLine = drugs.length > 0 ? `He/She uses ${drugs.map((d) => d.drug_name.trim()).join(", ")}.` : "";
    let invLine = "";
    const prevInvRows = formData.previous_investigation_rows || [];
    if (prevInvRows.length > 0) {
      const invItems = prevInvRows.filter((r) => r.name).map(
        (r) => `${r.date ? `${r.date} - ` : ""}${r.name}${r.result ? ` ${r.result}` : ""}${r.unit ? ` ${r.unit}` : ""}${r.interpretation ? ` (${r.interpretation})` : ""}`
      ).join("; ");
      if (invItems) invLine = `Previous investigations: ${invItems}.`;
    }
    const parts = [
      `${title} ${name}, ${age} years old, ${occupation}, ${htn}, ${dm}, hailing from ${address}, ${presentedWith}.`,
      sysReviewLine,
      smokingLine,
      familyLine,
      drugLine,
      vitalsLine,
      genExamLine,
      systemicLine,
      invLine
    ].filter(Boolean);
    return `Salient Features

${parts.join("\n\n")}`;
  };
  const drugHistory = formData.drug_history || [
    { drug_name: "", dose: "", daily_dose: "" }
  ];
  const historySections = [
    {
      key: "surgical",
      label: "Past Surgical History / অতীতের অস্ত্রোপচারের ইতিহাস",
      show: showSurgicalQuestions,
      setShow: setShowSurgicalQuestions,
      questions: surgicalHistoryQuestions,
      answers: surgicalHistoryAnswers,
      setAnswers: setSurgicalHistoryAnswers
    },
    {
      key: "personal",
      label: "Personal History / ব্যক্তিগত ইতিহাস",
      show: showPersonalQuestions,
      setShow: setShowPersonalQuestions,
      questions: personalHistoryQuestions,
      answers: personalHistoryAnswers,
      setAnswers: setPersonalHistoryAnswers
    },
    {
      key: "family",
      label: "Family History / পারিবারিক ইতিহাস",
      show: showFamilyQuestions,
      setShow: setShowFamilyQuestions,
      questions: familyHistoryQuestions,
      answers: familyHistoryAnswers,
      setAnswers: setFamilyHistoryAnswers
    },
    {
      key: "immunization",
      label: "Immunization History / টিকার ইতিহাস",
      show: showImmunizationQuestions,
      setShow: setShowImmunizationQuestions,
      questions: immunizationQuestions,
      answers: immunizationAnswers,
      setAnswers: setImmunizationAnswers
    },
    {
      key: "allergy",
      label: "Allergy History / এলার্জির ইতিহাস",
      show: showAllergyQuestions,
      setShow: setShowAllergyQuestions,
      questions: allergyQuestions,
      answers: allergyAnswers,
      setAnswers: setAllergyAnswers
    },
    {
      key: "obstetric",
      label: "Obstetric History / প্রসূতি ইতিহাস",
      show: showObstetricQuestions,
      setShow: setShowObstetricQuestions,
      questions: obstetricQuestions,
      answers: obstetricAnswers,
      setAnswers: setObstetricAnswers
    },
    {
      key: "gynaecological",
      label: "Gynaecological History / স্ত্রীরোগ বিষয়ক ইতিহাস",
      show: showGynaecologicalQuestions,
      setShow: setShowGynaecologicalQuestions,
      questions: gynaecologicalQuestions,
      answers: gynaecologicalAnswers,
      setAnswers: setGynaecologicalAnswers
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      ref: formRef,
      onSubmit: handleSubmit,
      className: "space-y-6 pb-28 lg:pb-8",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-base font-semibold", children: "Visit Type / রোগীর ধরন *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: [
            {
              value: "outdoor",
              emoji: "🚶",
              en: "Outdoor Patient",
              bn: "বহির্বিভাগ রোগী"
            },
            {
              value: "admitted",
              emoji: "🏥",
              en: "Admitted Patient",
              bn: "ভর্তি রোগী"
            }
          ].map(({ value, emoji, en, bn }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              className: `cursor-pointer transition-all ${visitType === value ? "border-teal-500 bg-teal-50 shadow-md ring-2 ring-teal-300" : "border-slate-200 hover:border-slate-300"}`,
              onClick: () => setVisitType(value),
              "data-ocid": "visit_form.toggle",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-slate-800", children: en }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 mt-1", children: bn })
              ] })
            },
            value
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "visit_date", className: "text-base font-semibold", children: "Visit Date & Time *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "visit_date",
              type: "datetime-local",
              value: formData.visit_date || "",
              onChange: (e) => handleChange("visit_date", e.target.value),
              required: true,
              className: "h-11",
              "data-ocid": "visit_form.input"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-base font-semibold", children: "Chief Complaints / প্রধান অভিযোগ *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-500", children: "Select one or more" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            Object.keys(allComplaints).map((complaint, ccIdx) => {
              const colors = BADGE_PALETTE[ccIdx % BADGE_PALETTE.length];
              const isActive = selectedComplaints.includes(complaint);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  variant: "outline",
                  className: `cursor-pointer border min-h-[38px] flex items-center transition-all text-sm font-medium px-3 ${isActive ? colors.active : colors.base}`,
                  onClick: () => handleTemplateSelect(complaint),
                  children: [
                    complaint,
                    isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3 ml-1" })
                  ]
                },
                complaint
              );
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "outline",
                className: "cursor-pointer hover:bg-slate-100 border-dashed min-h-[38px]",
                onClick: () => setShowAddDialog(true),
                "data-ocid": "visit_form.open_modal_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3 mr-1" }),
                  "Add Custom"
                ]
              }
            )
          ] }),
          selectedComplaints.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: selectedComplaints.map((c, idx) => `${idx + 1}. ${c}`).join(", "),
              readOnly: true,
              className: "bg-slate-50 h-11 text-sm",
              placeholder: "Selected complaints"
            }
          )
        ] }),
        selectedComplaints.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-500 p-4 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-teal-900", children: "📋 Please answer the following questions for each selected complaint" }) }),
          selectedComplaints.map((complaint) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "border-2 border-teal-200 shadow-md",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-semibold flex items-center gap-2 text-white", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { className: "h-5 w-5" }),
                    complaint
                  ] }),
                  canEditQuestions && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      type: "button",
                      variant: "ghost",
                      size: "sm",
                      onClick: () => handleAddQuestionToComplaint(complaint),
                      className: "h-8 text-white hover:bg-white/20",
                      "data-ocid": "visit_form.add_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-1" }),
                        "Add Question"
                      ]
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4 space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    QuestionStepper,
                    {
                      questions: getComplaintQuestions(complaint),
                      answers: complaintAnswers[complaint] || [],
                      onChange: (idx, value) => handleAnswerChange(complaint, idx, value),
                      canEdit: canEditQuestions,
                      onEditQuestion: (idx, newText) => handleEditComplaintQuestion(complaint, idx, newText),
                      onAddOption: (idx, option) => handleAddComplaintOption(complaint, idx, option),
                      onDeleteOption: (idx, option) => handleDeleteComplaintOption(complaint, idx, option)
                    }
                  ),
                  canEditQuestions && addingQuestionFor === complaint && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-dashed border-teal-400 rounded-xl bg-teal-50/50 p-4 space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-teal-800", children: "New Question" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        value: newQuestionForComplaint.q,
                        onChange: (e) => setNewQuestionForComplaint((prev) => ({
                          ...prev,
                          q: e.target.value
                        })),
                        placeholder: "Question text / প্রশ্নের টেক্সট...",
                        className: "h-10 bg-white border-teal-300 focus:border-teal-500",
                        "data-ocid": "visit_form.input"
                      }
                    ),
                    newQuestionForComplaint.options.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: newQuestionForComplaint.options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Badge,
                      {
                        variant: "outline",
                        className: "text-xs bg-white border-teal-300 text-teal-700 flex items-center gap-1",
                        children: [
                          opt,
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => setNewQuestionForComplaint((prev) => ({
                                ...prev,
                                options: prev.options.filter(
                                  (o) => o !== opt
                                )
                              })),
                              className: "ml-0.5 hover:bg-teal-100 rounded-full p-0.5",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-2.5 w-2.5" })
                            }
                          )
                        ]
                      },
                      opt
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          value: newOptionDraftForQuestion,
                          onChange: (e) => setNewOptionDraftForQuestion(e.target.value),
                          placeholder: "Add option (Enter to add)...",
                          className: "h-9 bg-white border-teal-300 text-sm flex-1",
                          onKeyDown: (e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              const trimmed = newOptionDraftForQuestion.trim();
                              if (trimmed) {
                                setNewQuestionForComplaint((prev) => ({
                                  ...prev,
                                  options: [...prev.options, trimmed]
                                }));
                                setNewOptionDraftForQuestion("");
                              }
                            }
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          type: "button",
                          variant: "outline",
                          size: "sm",
                          className: "h-9 px-3 shrink-0",
                          onClick: () => {
                            const trimmed = newOptionDraftForQuestion.trim();
                            if (trimmed) {
                              setNewQuestionForComplaint((prev) => ({
                                ...prev,
                                options: [...prev.options, trimmed]
                              }));
                              setNewOptionDraftForQuestion("");
                            }
                          },
                          children: "+ Option"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          type: "button",
                          size: "sm",
                          className: "bg-teal-600 hover:bg-teal-700 h-9",
                          onClick: () => commitNewQuestionForComplaint(complaint),
                          "data-ocid": "visit_form.confirm_button",
                          children: "Save Question"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          type: "button",
                          variant: "outline",
                          size: "sm",
                          className: "h-9",
                          onClick: () => setAddingQuestionFor(null),
                          "data-ocid": "visit_form.cancel_button",
                          children: "Cancel"
                        }
                      )
                    ] })
                  ] })
                ] })
              ]
            },
            complaint
          ))
        ] }),
        visitType === "admitted" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-blue-200 bg-blue-50/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 bg-blue-600 rounded-t-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-medium text-white", children: "History of Present Illness / বর্তমান রোগের ইতিহাস" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "history_of_present_illness",
              value: formData.history_of_present_illness || "",
              onChange: (e) => handleChange("history_of_present_illness", e.target.value),
              placeholder: "Detailed history of the current illness...",
              rows: 5,
              className: "text-sm"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-slate-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4 bg-slate-700 rounded-t-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-medium text-white", children: "System Review / সিস্টেম রিভিউ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                size: "sm",
                onClick: () => {
                  const systemName = window.prompt("Enter new system name:");
                  if (systemName == null ? void 0 : systemName.trim()) {
                    setCustomSystems((prev) => ({
                      ...prev,
                      [systemName.trim()]: []
                    }));
                  }
                },
                className: "h-8 bg-white/10 text-white border-white/30 hover:bg-white/20",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3 mr-1" }),
                  "Add System"
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-4 pt-4", children: Object.entries({ ...systemReviewData, ...customSystems }).map(
            ([system, symptoms]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: system }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
                symptoms.map((symptom, sIdx) => {
                  var _a2;
                  const colors = BADGE_PALETTE[sIdx % BADGE_PALETTE.length];
                  const isActive = (_a2 = systemReviewAnswers[system]) == null ? void 0 : _a2.includes(symptom);
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: `cursor-pointer border min-h-[36px] flex items-center transition-all text-sm ${isActive ? colors.active : colors.base}`,
                      onClick: () => toggleSystemReview(system, symptom),
                      children: symptom
                    },
                    symptom
                  );
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    variant: "outline",
                    className: "cursor-pointer hover:bg-slate-100 border-dashed",
                    onClick: () => {
                      const symptom = window.prompt(
                        `Add symptom to ${system}:`
                      );
                      if (symptom == null ? void 0 : symptom.trim()) {
                        setCustomSystems((prev) => ({
                          ...prev,
                          [system]: [
                            ...prev[system] || systemReviewData[system] || [],
                            symptom.trim()
                          ]
                        }));
                      }
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3 mr-1" }),
                      "Add"
                    ]
                  }
                )
              ] })
            ] }, system)
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-amber-200 bg-amber-50/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4 bg-amber-600 rounded-t-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-medium text-white", children: "History / ইতিহাস" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: "Past Medical History / অতীত চিকিৎসা ইতিহাস" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: medicalHistoryOptions.map((condition) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  variant: "outline",
                  className: `cursor-pointer min-h-[36px] text-sm font-medium px-3 ${medicalHistory[condition] === "+" ? "bg-green-50 border-green-500 text-green-700" : medicalHistory[condition] === "-" ? "bg-red-50 border-red-500 text-red-700" : ""}`,
                  onClick: () => toggleMedicalHistory(condition),
                  children: [
                    condition,
                    medicalHistory[condition] || ""
                  ]
                },
                condition
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: formData.other_medical_history || "",
                  onChange: (e) => handleChange(
                    "other_medical_history",
                    e.target.value
                  ),
                  placeholder: "Other chronic disease / অন্যান্য দীর্ঘমেয়াদী রোগ...",
                  className: "h-10 text-sm"
                }
              )
            ] }),
            historySections.map(
              ({ key, label, show, setShow, questions, answers, setAnswers }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      onClick: () => setShow(!show),
                      className: "h-8",
                      children: [
                        show ? "Hide" : "Answer",
                        " Questions"
                      ]
                    }
                  )
                ] }),
                show && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    QuestionStepper,
                    {
                      questions,
                      answers,
                      onChange: (idx, value) => {
                        const a = [...answers];
                        a[idx] = value;
                        setAnswers(a);
                      }
                    }
                  ),
                  key === "immunization" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-2 bg-lime-50 border border-lime-200 rounded-lg p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-lime-800 font-semibold text-sm", children: "Immunized as per EPI Schedule / ইপিআই সূচি অনুযায়ী টিকা" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 flex-wrap", children: ["yes", "no"].map((val) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setEpiSchedule(epiSchedule === val ? "" : val),
                        className: `px-5 py-2 rounded-full border-2 text-sm font-semibold transition-all ${epiSchedule === val ? val === "yes" ? "bg-lime-500 border-lime-500 text-white" : "bg-rose-500 border-rose-500 text-white" : "bg-white border-slate-300 text-slate-600 hover:border-lime-400"}`,
                        "data-ocid": `epi_schedule.${val === "yes" ? "primary_button" : "secondary_button"}`,
                        children: val === "yes" ? "✓ Yes / হ্যাঁ" : "✗ No / না"
                      },
                      val
                    )) })
                  ] }),
                  key === "family" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 bg-rose-50 border border-rose-200 rounded-lg p-3 space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-rose-800 font-semibold text-sm", children: "🧬 Hereditary Risk Factors / বংশগত ঝুঁকি" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: [
                      {
                        key: "diabetes",
                        label: "Diabetes Mellitus / ডায়াবেটিস"
                      },
                      {
                        key: "hypertension",
                        label: "Hypertension / উচ্চ রক্তচাপ"
                      },
                      { key: "ihd", label: "IHD / হৃদরোগ" },
                      { key: "cancer", label: "Cancer / ক্যান্সার" },
                      { key: "stroke", label: "Stroke / স্ট্রোক" }
                    ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "label",
                      {
                        className: `flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${familyRisk[item.key] ? "bg-rose-100 border-rose-400" : "bg-white border-slate-200 hover:border-rose-300"}`,
                        "data-ocid": `family_risk.${item.key}.checkbox`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              type: "checkbox",
                              checked: !!familyRisk[item.key],
                              onChange: (e) => {
                                const updated = {
                                  ...familyRisk,
                                  [item.key]: e.target.checked
                                };
                                setFamilyRisk(updated);
                                saveFamilyRisk(updated);
                              },
                              className: "w-4 h-4 accent-rose-600"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-slate-700", children: item.label })
                        ]
                      },
                      item.key
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        value: familyRisk.additionalNotes ?? "",
                        onChange: (e) => {
                          const updated = {
                            ...familyRisk,
                            additionalNotes: e.target.value
                          };
                          setFamilyRisk(updated);
                          saveFamilyRisk(updated);
                        },
                        placeholder: "Additional notes / অতিরিক্ত মন্তব্য",
                        className: "h-9 text-sm bg-white border-rose-200",
                        "data-ocid": "family_risk.notes.input"
                      }
                    )
                  ] }),
                  (extraHistoryQuestions[key] || []).map((item, eIdx) => {
                    var _a2;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "space-y-2",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium text-blue-700", children: item.q }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              value: ((_a2 = extraHistoryAnswers[key]) == null ? void 0 : _a2[eIdx]) || "",
                              onChange: (e) => {
                                const arr = [...extraHistoryAnswers[key] || []];
                                arr[eIdx] = e.target.value;
                                setExtraHistoryAnswers((prev) => ({
                                  ...prev,
                                  [key]: arr
                                }));
                              },
                              placeholder: "Type answer...",
                              className: "h-10 bg-blue-50"
                            }
                          )
                        ]
                      },
                      `ex-${key}-${item.q}-${eIdx}`
                    );
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-2 border-t border-dashed border-slate-200 mt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        value: newHistoryQuestionText[key] || "",
                        onChange: (e) => setNewHistoryQuestionText((prev) => ({
                          ...prev,
                          [key]: e.target.value
                        })),
                        placeholder: "Add a question...",
                        className: "h-9 text-sm",
                        onKeyDown: (e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            addHistoryQuestion(key);
                          }
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        type: "button",
                        variant: "outline",
                        size: "sm",
                        onClick: () => addHistoryQuestion(key),
                        className: "h-9 px-3 shrink-0",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3 mr-1" }),
                          "Add"
                        ]
                      }
                    )
                  ] })
                ] })
              ] }, key)
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 bg-fuchsia-50 border border-fuchsia-200 rounded-lg p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-fuchsia-700 font-semibold", children: "Drug History / ওষুধের ইতিহাস" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    size: "sm",
                    onClick: addDrugHistory,
                    className: "h-8",
                    "data-ocid": "drug_history.add_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3 mr-1" }),
                      "Add Drug"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center bg-slate-100 rounded-lg p-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "drugSearchInput",
                    placeholder: "Search drug in Medex...",
                    className: "h-8 text-sm bg-white flex-1",
                    "data-ocid": "drug_history.search_input",
                    onKeyDown: (e) => {
                      if (e.key === "Enter") e.preventDefault();
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    className: "h-8 text-xs whitespace-nowrap",
                    onClick: () => {
                      var _a2;
                      const val = (_a2 = document.getElementById(
                        "drugSearchInput"
                      )) == null ? void 0 : _a2.value;
                      if (!val.trim()) {
                        ue.error("Enter a drug name first");
                        return;
                      }
                      window.open(
                        `https://medex.com.bd/?search=${encodeURIComponent(val.trim())}`,
                        "_blank"
                      );
                    },
                    "data-ocid": "drug_history.medex_button",
                    children: "Search Medex"
                  }
                )
              ] }),
              drugHistory.map((drug, index) => {
                const status = drug.status;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Card,
                  {
                    className: `p-3 ${status === "Previous" ? "bg-slate-100 border-slate-300 opacity-80" : "bg-slate-50 border-slate-200"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 grid grid-cols-3 gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-1 space-y-1", children: [
                          status && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Badge,
                            {
                              className: `text-xs h-5 ${status === "Current" ? "bg-green-100 text-green-700 border-green-300" : "bg-slate-200 text-slate-500 border-slate-300"}`,
                              variant: "outline",
                              children: status === "Current" ? "✓ Active" : "Previous"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              value: drug.drug_name,
                              onChange: (e) => handleDrugHistoryChange(
                                index,
                                "drug_name",
                                e.target.value
                              ),
                              placeholder: "Drug name",
                              className: `h-9 bg-white ${status === "Previous" ? "line-through text-slate-400" : ""}`,
                              "data-ocid": `drug_history.input.${index + 1}`
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            value: drug.dose,
                            onChange: (e) => handleDrugHistoryChange(index, "dose", e.target.value),
                            placeholder: "Dose (e.g. 500mg)",
                            className: "h-9 bg-white"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            value: drug.daily_dose,
                            onChange: (e) => handleDrugHistoryChange(
                              index,
                              "daily_dose",
                              e.target.value
                            ),
                            placeholder: "Frequency (e.g. 1+1+1)",
                            className: "h-9 bg-white"
                          }
                        )
                      ] }),
                      drugHistory.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          type: "button",
                          variant: "ghost",
                          size: "icon",
                          onClick: () => removeDrugHistory(index),
                          className: "h-9 w-9 text-red-500",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                        }
                      )
                    ] })
                  },
                  String(index)
                );
              })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "other_history",
                  className: "text-sm font-semibold text-slate-700",
                  children: "Other History / অন্যান্য ইতিহাস"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "other_history",
                  value: formData.other_history || "",
                  onChange: (e) => handleChange("other_history", e.target.value),
                  placeholder: "Other relevant history...",
                  rows: 2
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-green-200 bg-green-50/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4 bg-green-600 rounded-t-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-medium flex items-center gap-2 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-5 w-5 text-white/80" }),
            "Vital Signs / জীবনের চিহ্ন"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "grid grid-cols-2 md:grid-cols-3 gap-4 pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-semibold flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-3.5 w-3.5 text-red-500" }),
                "Blood Pressure ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(UnitBadge, { children: "mmHg" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "text",
                  value: ((_a = formData.vital_signs) == null ? void 0 : _a.blood_pressure) || "",
                  onChange: (e) => handleChange("vital_signs", {
                    ...formData.vital_signs,
                    blood_pressure: e.target.value
                  }),
                  placeholder: "120/80",
                  className: "h-11 text-base"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-semibold flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-3.5 w-3.5 text-pink-500" }),
                "Pulse Rate ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(UnitBadge, { children: "beats/min" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  value: ((_b = formData.vital_signs) == null ? void 0 : _b.pulse) || "",
                  onChange: (e) => handleVitalChange("pulse", e.target.value),
                  placeholder: "72",
                  className: "h-11 text-base"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-semibold flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-3.5 w-3.5 text-rose-500" }),
                "Heart Rate ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(UnitBadge, { children: "beats/min" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  value: ((_c = formData.vital_signs) == null ? void 0 : _c.heart_rate) || "",
                  onChange: (e) => handleVitalChange("heart_rate", e.target.value),
                  placeholder: "72",
                  className: "h-11 text-base"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-semibold flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Thermometer, { className: "h-3.5 w-3.5 text-orange-500" }),
                "Temperature ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(UnitBadge, { children: "°F" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  step: "0.1",
                  value: ((_d = formData.vital_signs) == null ? void 0 : _d.temperature) || "",
                  onChange: (e) => handleVitalChange("temperature", e.target.value),
                  placeholder: "37.0",
                  className: "h-11 text-base"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-semibold flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Wind, { className: "h-3.5 w-3.5 text-blue-500" }),
                "Resp. Rate ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(UnitBadge, { children: "breaths/min" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  value: ((_e = formData.vital_signs) == null ? void 0 : _e.respiratory_rate) || "",
                  onChange: (e) => handleVitalChange("respiratory_rate", e.target.value),
                  placeholder: "16",
                  className: "h-11 text-base"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-semibold", children: [
                "SpO₂ ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(UnitBadge, { children: "%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  value: ((_f = formData.vital_signs) == null ? void 0 : _f.oxygen_saturation) || "",
                  onChange: (e) => handleVitalChange("oxygen_saturation", e.target.value),
                  placeholder: "98",
                  className: "h-11 text-base"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-semibold", children: [
                "Weight ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(UnitBadge, { children: "kg" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  step: "0.1",
                  value: ((_g = formData.vital_signs) == null ? void 0 : _g.weight) || "",
                  onChange: (e) => handleVitalChange("weight", e.target.value),
                  placeholder: "65",
                  className: "h-11 text-base"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-semibold", children: [
                "Height ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(UnitBadge, { children: "cm" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  step: "0.1",
                  value: ((_h = formData.vital_signs) == null ? void 0 : _h.height) || "",
                  onChange: (e) => handleVitalChange("height", e.target.value),
                  placeholder: "170",
                  className: "h-11 text-base"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-purple-200 bg-purple-50/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4 bg-purple-600 rounded-t-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-medium text-white", children: "General Examination / সাধারণ পরীক্ষা" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-4 pt-4", children: Object.entries(generalExaminationCategories).map(
            ([category, options]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold text-slate-700", children: category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: options.map((option, optIdx) => {
                const colors = BADGE_PALETTE[optIdx % BADGE_PALETTE.length];
                const isActive = generalExamFindings[category] === option;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: `cursor-pointer border min-h-[36px] flex items-center transition-all text-sm ${isActive ? colors.active : colors.base}`,
                    onClick: () => toggleGeneralExam(category, option),
                    children: option
                  },
                  option
                );
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: generalExamFindings[`${category}_note`] || "",
                  onChange: (e) => setGeneralExamFindings((prev) => ({
                    ...prev,
                    [`${category}_note`]: e.target.value
                  })),
                  placeholder: `Add note for ${category}...`,
                  className: "h-9 text-sm bg-slate-50"
                }
              )
            ] }, category)
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-teal-200 bg-teal-50/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4 bg-teal-600 rounded-t-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-medium text-white", children: "Systemic Examination / পদ্ধতিগত পরীক্ষা" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-teal-700 uppercase tracking-wide", children: "Quick-fill Templates" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: Object.keys(EXAM_TEMPLATES).map((tName) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  className: "h-8 text-xs border-teal-400 text-teal-700 hover:bg-teal-50",
                  onClick: () => applyExamTemplate(tName),
                  "data-ocid": `exam_template.${tName.toLowerCase()}_button`,
                  children: [
                    "+ ",
                    tName
                  ]
                },
                tName
              )) }),
              templateExamRows.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 border border-teal-200 rounded-lg overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-teal-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 font-semibold text-teal-800 w-2/5", children: "Finding" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 font-semibold text-teal-800", children: "Value / Description" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-10" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: templateExamRows.map((row, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "tr",
                    {
                      className: "border-t border-teal-100 hover:bg-teal-50/50",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            className: "w-full bg-transparent border-0 focus:outline-none focus:ring-1 focus:ring-teal-400 rounded px-1 py-0.5 text-sm font-medium text-slate-800",
                            value: row.finding,
                            onChange: (e) => updateTemplateRow(idx, "finding", e.target.value)
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            className: "w-full bg-transparent border-0 focus:outline-none focus:ring-1 focus:ring-teal-400 rounded px-1 py-0.5 text-sm text-slate-700",
                            value: row.value,
                            onChange: (e) => updateTemplateRow(idx, "value", e.target.value)
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-1 py-1 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => removeTemplateRow(idx),
                            className: "text-rose-400 hover:text-rose-600 p-1 rounded",
                            "aria-label": "Remove row",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" })
                          }
                        ) })
                      ]
                    },
                    `${row.finding}-${idx}`
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2 bg-teal-50 border-t border-teal-100 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    variant: "ghost",
                    size: "sm",
                    className: "h-7 text-xs text-teal-600",
                    onClick: () => setTemplateExamRows((prev) => [
                      ...prev,
                      { finding: "", value: "" }
                    ]),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3 mr-1" }),
                      "Add Row"
                    ]
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SystemicExaminationSection,
              {
                systemicExamFindings,
                onSystemicExamChange: handleSystemicExamChange
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "cardiovascular", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "flex flex-wrap w-full gap-1 h-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TabsTrigger,
                  {
                    value: "cardiovascular",
                    className: "flex-1 min-w-[70px]",
                    "data-ocid": "systemic.cardiovascular.tab",
                    children: "CVS"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TabsTrigger,
                  {
                    value: "respiratory",
                    className: "flex-1 min-w-[70px]",
                    "data-ocid": "systemic.respiratory.tab",
                    children: "Respiratory"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TabsTrigger,
                  {
                    value: "neurological",
                    className: "flex-1 min-w-[70px]",
                    "data-ocid": "systemic.neurological.tab",
                    children: "Neuro"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TabsTrigger,
                  {
                    value: "gastrointestinal",
                    className: "flex-1 min-w-[70px]",
                    "data-ocid": "systemic.gastrointestinal.tab",
                    children: "GI"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TabsTrigger,
                  {
                    value: "musculoskeletal",
                    className: "flex-1 min-w-[70px]",
                    "data-ocid": "systemic.musculoskeletal.tab",
                    children: "MSK"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "cardiovascular", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                CardiovascularExam,
                {
                  data: cardiovascularExam,
                  onChange: setCardiovascularExam
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "respiratory", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                RespiratoryExam,
                {
                  data: respiratoryExam,
                  onChange: setRespiratoryExam
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "neurological", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                NeurologicalExam,
                {
                  data: neurologicalExam,
                  onChange: setNeurologicalExam
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "gastrointestinal", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                GastrointestinalExam,
                {
                  data: gastrointestinalExam,
                  onChange: setGastrointestinalExam
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "musculoskeletal", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                MusculoskeletalExam,
                {
                  data: musculoskeletalExam,
                  onChange: setMusculoskeletalExam
                }
              ) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-cyan-200 bg-cyan-50/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 bg-cyan-600 rounded-t-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-medium text-white", children: "Previous Investigation Report / পূর্ববর্তী তদন্ত প্রতিবেদন" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              PreviousInvestigationTable,
              {
                rows: Array.isArray(formData.previous_investigation_rows) ? formData.previous_investigation_rows : [],
                onChange: (rows) => handleChange("previous_investigation_rows", rows),
                onArchive: () => {
                  const rows = formData.previous_investigation_rows || [];
                  if (rows.length === 0) return;
                  const key = `archived_investigations_${patientId}`;
                  const existing = JSON.parse(localStorage.getItem(key) || "[]");
                  localStorage.setItem(key, JSON.stringify([...existing, ...rows]));
                  handleChange("previous_investigation_rows", []);
                  ue.success("Investigation profile archived successfully.");
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 mt-2", children: "Five-field structured report. Values included in Auto-Generated Salient Features." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-rose-200 bg-rose-50/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 bg-rose-600 rounded-t-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-medium flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "Salient Features / বিশেষ বৈশিষ্ট্য" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                size: "sm",
                onClick: () => handleChange("salient_features", generateSalientFeatures()),
                className: "flex items-center gap-2 text-teal-700 border-teal-300 hover:bg-teal-50",
                "data-ocid": "salient_features.button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
                  "Auto-Generate"
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              value: formData.salient_features || "",
              onChange: (e) => handleChange("salient_features", e.target.value),
              placeholder: "Click 'Auto-Generate' to build salient features from form data, or type manually...",
              rows: 12,
              className: "bg-slate-50 font-mono text-sm leading-relaxed",
              "data-ocid": "salient_features.textarea"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-teal-200 bg-teal-50/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 bg-teal-600 rounded-t-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-medium flex items-center justify-between text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              "Diagnosis / রোগ নির্ণয়",
              diagnosisStatus === "provisional" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-yellow-400 text-yellow-900 border-0 text-xs font-semibold", children: "Provisional" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-400 text-green-900 border-0 text-xs font-semibold", children: "✓ Final" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                size: "sm",
                onClick: () => {
                  var _a2;
                  const complaints = selectedComplaints.length > 0 ? selectedComplaints.join(", ") : ((_a2 = formData.chief_complaint) == null ? void 0 : _a2.trim()) || "";
                  const pmh = Object.entries(medicalHistory).map(([k, v]) => `${k}${v}`).join(", ");
                  handleChange(
                    "diagnosis",
                    `Based on clinical presentation and examination findings:

Possible Diagnosis: [Review and enter diagnosis based on: ${complaints ? `complaints of ${complaints}, ` : ""}${pmh ? `history of ${pmh}, ` : ""}salient features reviewed]`
                  );
                },
                className: "flex items-center gap-2 text-teal-700 border-teal-200 hover:bg-teal-50",
                "data-ocid": "diagnosis.button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
                  "AI Generate"
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-3 space-y-3", children: [
            diagnosisStatus === "provisional" && ((_i = formData.diagnosis) == null ? void 0 : _i.trim()) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-yellow-50 border border-yellow-300 rounded-lg px-4 py-3",
                "data-ocid": "diagnosis.provisional_warning",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-yellow-800 text-sm flex-1", children: [
                    "⚠ Diagnosis is still marked as ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Provisional" }),
                    " — please confirm as Final before writing prescription."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      size: "sm",
                      className: "shrink-0 bg-green-600 hover:bg-green-700 text-white h-8 text-xs",
                      onClick: () => setDiagnosisStatus("final"),
                      "data-ocid": "diagnosis.mark_final_button",
                      children: "✓ Mark as Final"
                    }
                  )
                ]
              }
            ),
            diagnosisStatus === "final" && ((_j = formData.diagnosis) == null ? void 0 : _j.trim()) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-4 py-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-700 text-sm font-semibold", children: "✓ Final Diagnosis Confirmed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "ml-auto text-xs text-green-600 underline",
                  onClick: () => setDiagnosisStatus("provisional"),
                  children: "Revert to Provisional"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "diagnosis",
                value: formData.diagnosis || "",
                onChange: (e) => {
                  handleChange("diagnosis", e.target.value);
                  if (diagnosisStatus === "final")
                    setDiagnosisStatus("provisional");
                },
                placeholder: "Enter diagnosis here, or click AI Generate...",
                rows: 3,
                className: "bg-slate-50 text-sm",
                "data-ocid": "diagnosis.textarea"
              }
            ),
            diagnosisStatus === "provisional" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                size: "sm",
                variant: "outline",
                className: "h-8 text-xs border-green-400 text-green-700 hover:bg-green-50",
                onClick: () => setDiagnosisStatus("final"),
                "data-ocid": "diagnosis.confirm_button",
                children: "✓ Confirm Final Diagnosis"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-orange-200 bg-orange-50/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 bg-orange-600 rounded-t-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-medium flex items-center justify-between text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Differential Diagnosis / ডিফারেনশিয়াল ডায়াগনসিস" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  onClick: () => {
                    var _a2, _b2;
                    const complaints = selectedComplaints.length > 0 ? selectedComplaints.join(", ") : ((_a2 = formData.chief_complaint) == null ? void 0 : _a2.trim()) || "";
                    const pmh = Object.entries(medicalHistory).filter(([, v]) => v === "+").map(([k]) => k).join(", ");
                    const diagnosis = ((_b2 = formData.diagnosis) == null ? void 0 : _b2.trim()) || "";
                    handleChange(
                      "differential_diagnosis",
                      `Differential Diagnosis:

Based on: ${complaints ? `complaints of ${complaints}` : "presenting symptoms"}${pmh ? `, history of ${pmh}` : ""}${diagnosis ? `, diagnosis of ${diagnosis}` : ""}

1. [DDx 1]
2. [DDx 2]
3. [DDx 3]

Please review and edit based on clinical findings.`
                    );
                  },
                  className: "flex items-center gap-2 text-violet-700 border-violet-300 hover:bg-violet-50",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
                    "AI Generate"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  onClick: () => {
                    var _a2;
                    return (_a2 = ddImageInputRef.current) == null ? void 0 : _a2.click();
                  },
                  className: "flex items-center gap-2 text-blue-700 border-blue-300 hover:bg-blue-50",
                  children: "Upload Image"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  ref: ddImageInputRef,
                  type: "file",
                  accept: "image/*",
                  className: "hidden",
                  onChange: () => setDdImageConfirmOpen(true)
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
            ddImageHasData && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 p-3 bg-yellow-50 border border-yellow-200 rounded-md text-sm text-yellow-800", children: "⚠️ Image data extracted. Please review all values before finalizing." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                value: formData.differential_diagnosis || "",
                onChange: (e) => handleChange("differential_diagnosis", e.target.value),
                placeholder: "Click 'AI Generate' to suggest differential diagnoses, or enter manually...",
                rows: 8,
                className: "bg-slate-50 text-sm",
                "data-ocid": "differential_diagnosis.textarea"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-lime-200 bg-lime-50/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 bg-lime-600 rounded-t-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-medium flex items-center justify-between text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "New Investigation Advice / নতুন তদন্তের পরামর্শ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                size: "sm",
                onClick: () => {
                  handleChange(
                    "investigation_advice",
                    "Suggested investigations:\n1. Complete Blood Count (CBC)\n2. Blood Glucose (Fasting & PP)\n3. Liver Function Tests (LFT)\n4. Renal Function Tests (RFT)\n5. Chest X-Ray\n6. ECG\n\n[Doctor to review and customize]"
                  );
                },
                className: "flex items-center gap-2 text-teal-700 border-teal-300 hover:bg-teal-50",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
                  "AI Suggest"
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              value: formData.investigation_advice || "",
              onChange: (e) => handleChange("investigation_advice", e.target.value),
              placeholder: "New investigation advice...",
              rows: 4,
              className: "bg-slate-50 text-sm",
              "data-ocid": "investigation_advice.textarea"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-slate-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 bg-slate-600 rounded-t-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-medium text-white", children: "Additional Notes / অতিরিক্ত নোট" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "notes",
              value: formData.notes || "",
              onChange: (e) => handleChange("notes", e.target.value),
              placeholder: "Any additional notes...",
              rows: 3,
              className: "text-sm"
            }
          ) })
        ] }),
        autosavedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground text-right pr-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-3 w-3 inline mr-1 text-green-500" }),
          "Autosaved at",
          " ",
          autosavedAt.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-card border-t shadow-2xl px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: onCancel,
              className: "flex-1 h-14 text-base font-semibold",
              "data-ocid": "visit_form.cancel_button",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "submit",
              disabled: isLoading,
              className: "flex-1 h-14 text-base font-semibold bg-teal-600 hover:bg-teal-700",
              "data-ocid": "visit_form.save_button",
              children: [
                isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin mr-2" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-5 w-5 mr-2" }),
                "Save Visit"
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex gap-3 pt-4 border-t", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: onCancel,
              className: "px-8 h-12 text-base",
              "data-ocid": "visit_form.cancel_button",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "submit",
              disabled: isLoading,
              className: "px-10 h-12 text-base font-semibold bg-teal-600 hover:bg-teal-700",
              "data-ocid": "visit_form.save_button",
              children: [
                isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin mr-2" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-5 w-5 mr-2" }),
                "Save Visit"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showAddDialog, onOpenChange: setShowAddDialog, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", "data-ocid": "visit_form.dialog", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Add Custom Chief Complaint" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "new_complaint", children: "Complaint Name *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "new_complaint",
                  value: newComplaint,
                  onChange: (e) => setNewComplaint(e.target.value),
                  placeholder: "e.g., Joint Pain",
                  className: "h-11",
                  "data-ocid": "visit_form.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Questions to Ask (at least 1 required)" }),
              newQuestions.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "space-y-2 p-3 border rounded-lg bg-slate-50",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        value: item.q,
                        onChange: (e) => handleQuestionChange(idx, "question", e.target.value),
                        placeholder: `Question ${idx + 1}`,
                        className: "h-10 bg-white"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        value: item.options.join(", "),
                        onChange: (e) => handleQuestionChange(idx, "options", e.target.value),
                        placeholder: "Options (comma separated, optional)",
                        className: "h-10 bg-white text-sm"
                      }
                    )
                  ]
                },
                String(idx)
              ))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3 pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  onClick: () => {
                    setShowAddDialog(false);
                    setNewComplaint("");
                    setNewQuestions([
                      { q: "", options: [] },
                      { q: "", options: [] },
                      { q: "", options: [] },
                      { q: "", options: [] }
                    ]);
                  },
                  "data-ocid": "visit_form.cancel_button",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "button",
                  onClick: handleAddComplaint,
                  className: "bg-teal-600 hover:bg-teal-700",
                  "data-ocid": "visit_form.confirm_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-2" }),
                    "Add Complaint"
                  ]
                }
              )
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: ddImageConfirmOpen, onOpenChange: setDdImageConfirmOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-ocid": "dd_image.dialog", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Confirm Image Upload for Differential Diagnosis" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Report Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "date",
                  value: ddReportDate,
                  onChange: (e) => setDdReportDate(e.target.value),
                  className: "h-10"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-600", children: "The AI will attempt to extract differential diagnosis suggestions from the uploaded image. Please review all extracted content before saving." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: () => {
                    setDdImageHasData(true);
                    setDdImageConfirmOpen(false);
                    ue.success(
                      "Image processed. Please review the extracted data."
                    );
                  },
                  className: "flex-1",
                  "data-ocid": "dd_image.confirm_button",
                  children: "Confirm & Process"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  onClick: () => setDdImageConfirmOpen(false),
                  className: "flex-1",
                  "data-ocid": "dd_image.cancel_button",
                  children: "Cancel"
                }
              )
            ] })
          ] })
        ] }) })
      ]
    }
  );
}
function getPatientIdFromUrl() {
  const pathParts = window.location.pathname.split("/");
  const visitIdx = pathParts.findIndex((p) => p.toLowerCase() === "visit");
  if (visitIdx >= 0 && pathParts[visitIdx + 1]) {
    try {
      const raw = pathParts[visitIdx + 1];
      const cleaned = raw.replace(/[^0-9]/g, "");
      if (cleaned) return BigInt(cleaned);
    } catch {
    }
  }
  const search = new URLSearchParams(window.location.search);
  const id = search.get("id");
  if (id) {
    try {
      const s = String(id);
      const raw = s.startsWith("__bigint__") ? s.slice(10) : s;
      const cleaned = raw.replace(/[^0-9]/g, "");
      if (cleaned) return BigInt(cleaned);
    } catch {
    }
  }
  return null;
}
function VisitPage() {
  const patientId = getPatientIdFromUrl();
  const formRef = reactExports.useRef(null);
  const { data: patient, isLoading } = useGetPatient(patientId ?? 0n);
  const createVisitMutation = useCreateVisit();
  const handleBack = () => {
    if (patientId) {
      window.location.href = `/PatientProfile?id=${patientId}`;
    } else {
      window.history.back();
    }
  };
  const handleSave = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };
  if (!patientId) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-medium", children: "No patient specified." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          onClick: () => {
            window.location.href = "/Patients";
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
            " Back to Patients"
          ]
        }
      )
    ] }) });
  }
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "min-h-screen bg-background p-6 space-y-4",
        "data-ocid": "visit_page.loading_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64 w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 w-full" })
        ]
      }
    );
  }
  const isPatientAdmitted = (patient == null ? void 0 : patient.isAdmitted) === true || (patient == null ? void 0 : patient.status) === "Admitted" || (patient == null ? void 0 : patient.patientType) === "admitted" || (patient == null ? void 0 : patient.patientType) === "indoor";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen flex flex-col bg-background",
      "data-ocid": "visit_page.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-20 bg-card border-b border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 sm:px-6 py-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: handleBack,
              className: "gap-2 text-muted-foreground hover:text-foreground",
              "data-ocid": "visit_page.link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Back to Patient Profile" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Back" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 text-center min-w-0", children: patient && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-foreground truncate text-sm sm:text-base", children: [
            "New Visit — ",
            patient.fullName
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "gap-2 bg-teal-600 hover:bg-teal-700 text-white",
              onClick: handleSave,
              disabled: createVisitMutation.isPending,
              "data-ocid": "visit_page.save_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: createVisitMutation.isPending ? "Saving..." : "Save Visit" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: createVisitMutation.isPending ? "..." : "Save" })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 px-4 sm:px-6 lg:px-10 py-6 max-w-5xl mx-auto w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          VisitForm,
          {
            patientId,
            patient: patient ? {
              fullName: patient.fullName,
              dateOfBirth: patient.dateOfBirth,
              gender: patient.gender,
              address: patient.address
            } : void 0,
            patientType: isPatientAdmitted ? "admitted" : "outdoor",
            formRef,
            onSubmit: (data) => {
              createVisitMutation.mutate(data, {
                onSuccess: () => {
                  ue.success("Visit saved successfully");
                  handleBack();
                },
                onError: () => ue.error("Failed to save visit")
              });
            },
            onCancel: handleBack,
            isLoading: createVisitMutation.isPending
          }
        ) })
      ]
    }
  );
}
export {
  VisitPage as default
};
