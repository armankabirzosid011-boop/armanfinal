import { i as createLucideIcon, r as reactExports, j as jsxRuntimeExports, ba as Primitive, ac as cn, b3 as getPrescriptionHeaderImage, H as Hospital, a as ChevronDown, C as ChevronUp, B as Button, ap as getDoctorEmail, u as ue, D as Dialog, s as DialogContent, t as DialogHeader, v as DialogTitle, X, L as Label, I as Input, bb as setPrescriptionHeaderImage, bc as useControllableState, bd as Root2$1, be as useId, aK as useComposedRefs, bf as Primitive$1, aM as composeEventHandlers, bg as Anchor, bh as Presence, bi as Portal$1, bj as createPopperScope, bk as hideOthers, bl as ReactRemoveScroll, aQ as createContextScope, bm as createSlot, bn as useFocusGuards, bo as FocusScope, bp as DismissableLayer, bq as Content, br as Arrow, ag as FlaskConical, h as Badge, ab as TriangleAlert, b as CircleCheck, c as Clock, S as Select, d as SelectTrigger, e as SelectValue, f as SelectContent, g as SelectItem, af as Pill, bs as Check, q as useEmailAuth, a7 as RefreshCw, T as Tabs, l as TabsList, n as TabsTrigger, p as TabsContent, bt as loadAllergyOverrides, bu as saveAllergyOverrides, k as CalendarDays, P as ShieldAlert, bv as loadPrescriptionRecords, bw as savePrescriptionRecords, bx as autoPopulateDrugReminders } from "./index-DJeWhCy-.js";
import { S as ScrollArea } from "./scroll-area-DUDQuZCi.js";
import { T as Textarea } from "./textarea-BQiWEu5n.js";
import { n as normalisePhone, c as buildWhatsAppUrl } from "./whatsappTemplates-BiipONU2.js";
import { T as TestTube, E as EyeOff } from "./test-tube-AQ_p65EL.js";
import { P as Plus } from "./plus-CHPIrJ6M.js";
import { M as MessageSquare } from "./message-square-gLkdQm4U.js";
import { S as Skeleton } from "./skeleton-DqU5IOMD.js";
import { f as format } from "./format-C8K1a6Fc.js";
import { E as Eye } from "./eye-DZPhoU57.js";
import { B as Building2 } from "./building-2-CMX9_teL.js";
import { P as Pencil } from "./pencil-BZAaPpo6.js";
import { T as Trash2 } from "./trash-2-B3l-ZhdV.js";
import { U as Upload } from "./upload-10Urw3kY.js";
import { S as Sun, M as Moon } from "./sun-7_ce8Kaj.js";
import { S as Save } from "./save-DzMd4SiT.js";
import { S as Sparkles } from "./sparkles-BXWJULex.js";
import { E as ExternalLink } from "./external-link-YRWS9f1T.js";
import { S as Search } from "./search-BLymxia-.js";
import { P as Printer } from "./printer-BQUreT8L.js";
import { D as Download } from "./download-qc_8yQ5r.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
];
const Calculator = createLucideIcon("calculator", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2", key: "4jdomd" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v4", key: "3hqy98" }],
  ["path", { d: "M21 14H11", key: "1bme5i" }],
  ["path", { d: "m15 10-4 4 4 4", key: "5dvupr" }]
];
const ClipboardCopy = createLucideIcon("clipboard-copy", __iconNode);
var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-orientation": orientation,
      ...semanticProps,
      ...domProps,
      ref: forwardedRef
    }
  );
});
Separator$1.displayName = NAME;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root = Separator$1;
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
const HEADER_TEXT_KEY_PREFIX = "prescriptionHeaderText_";
function getPrescriptionHeaderText(type) {
  const email = getDoctorEmail();
  const key = `${HEADER_TEXT_KEY_PREFIX}${type}_${email}`;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function setPrescriptionHeaderText(type, data) {
  const email = getDoctorEmail();
  const key = `${HEADER_TEXT_KEY_PREFIX}${type}_${email}`;
  localStorage.setItem(key, JSON.stringify(data));
}
function PrescriptionHeaderPanel({
  headerType,
  isAdmitted,
  canEdit = false
}) {
  var _a, _b, _c, _d, _e, _f;
  const [collapsed, setCollapsed] = reactExports.useState(true);
  const [dialogOpen, setDialogOpen] = reactExports.useState(false);
  const [previewImg, setPreviewImg] = reactExports.useState(
    () => getPrescriptionHeaderImage(headerType)
  );
  const [textData, setTextData] = reactExports.useState(
    () => getPrescriptionHeaderText(headerType) ?? {
      imageDataUrl: null,
      hospitalName: "",
      tagline: "",
      doctorName: "",
      degrees: "",
      chamberAddress: "",
      phone: ""
    }
  );
  const [mode, setMode] = reactExports.useState(
    previewImg ? "image" : "text"
  );
  const fileRef = reactExports.useRef(null);
  const typeLabel = headerType === "hospital" ? "Hospital Header" : "Chamber Header";
  const TypeIcon = headerType === "hospital" ? Hospital : Building2;
  function handleImageUpload(e) {
    var _a2;
    const file = (_a2 = e.target.files) == null ? void 0 : _a2[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      ue.error("Please upload a JPG or PNG image.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      ue.error("Image must be under 2MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      setPreviewImg(dataUrl);
      setMode("image");
      if (e.target) e.target.value = "";
    };
    reader.readAsDataURL(file);
  }
  function handleSave() {
    if (mode === "image" && previewImg) {
      setPrescriptionHeaderImage(headerType, previewImg);
      ue.success("Header image saved.");
    } else {
      const email = getDoctorEmail();
      const imgKey = `prescriptionHeaders_${headerType}_${email}`;
      localStorage.removeItem(imgKey);
      setPreviewImg(null);
      setPrescriptionHeaderText(headerType, textData);
      ue.success("Header text saved.");
    }
    setDialogOpen(false);
  }
  function handleClearImage() {
    const email = getDoctorEmail();
    const imgKey = `prescriptionHeaders_${headerType}_${email}`;
    localStorage.removeItem(imgKey);
    setPreviewImg(null);
    setMode("text");
    ue.success("Header image removed.");
  }
  const hasSavedHeader = previewImg !== null || getPrescriptionHeaderText(headerType) !== null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg overflow-hidden mb-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setCollapsed((c) => !c),
        className: "w-full flex items-center justify-between px-3 py-2 bg-slate-50 hover:bg-slate-100 transition-colors text-sm font-medium text-slate-700",
        "data-ocid": "rx.header_settings.toggle",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TypeIcon, { className: "w-4 h-4 text-teal-600" }),
            "Header Settings",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${headerType === "hospital" ? "bg-blue-100 text-blue-700 border-blue-200" : "bg-emerald-100 text-emerald-700 border-emerald-200"}`,
                children: typeLabel
              }
            ),
            isAdmitted !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "(",
              isAdmitted ? "Admitted patient" : "Chamber patient",
              ")"
            ] })
          ] }),
          collapsed ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-slate-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-slate-400" })
        ]
      }
    ),
    !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-3 bg-white", children: [
      previewImg ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: previewImg,
            alt: "Header preview",
            className: "h-16 object-contain border rounded"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Custom header image uploaded." })
      ] }) : getPrescriptionHeaderText(headerType) ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground border-l-2 border-teal-300 pl-2", children: headerType === "hospital" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: (_a = getPrescriptionHeaderText(headerType)) == null ? void 0 : _a.hospitalName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: (_b = getPrescriptionHeaderText(headerType)) == null ? void 0 : _b.tagline })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: (_c = getPrescriptionHeaderText(headerType)) == null ? void 0 : _c.doctorName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: (_d = getPrescriptionHeaderText(headerType)) == null ? void 0 : _d.degrees }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: (_e = getPrescriptionHeaderText(headerType)) == null ? void 0 : _e.chamberAddress }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: (_f = getPrescriptionHeaderText(headerType)) == null ? void 0 : _f.phone })
      ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic", children: "No custom header set. Default header will be used." }),
      canEdit && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            onClick: () => setDialogOpen(true),
            className: "gap-1.5 text-sm border-teal-300 text-teal-700 hover:bg-teal-50",
            "data-ocid": "rx.header_edit.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-3.5 h-3.5" }),
              " Edit Header"
            ]
          }
        ),
        hasSavedHeader && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            onClick: () => {
              handleClearImage();
              const email = getDoctorEmail();
              localStorage.removeItem(
                `${HEADER_TEXT_KEY_PREFIX}${headerType}_${email}`
              );
              ue.success("Header cleared.");
            },
            className: "gap-1.5 text-sm border-red-300 text-red-600 hover:bg-red-50",
            "data-ocid": "rx.header_clear.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }),
              " Clear"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: dialogOpen, onOpenChange: setDialogOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2 text-teal-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TypeIcon, { className: "w-5 h-5" }),
        "Edit ",
        typeLabel
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setMode("image"),
              className: `flex-1 py-2 rounded-lg text-sm font-medium border transition-colors ${mode === "image" ? "bg-teal-600 text-white border-teal-600" : "border-border text-muted-foreground hover:bg-muted"}`,
              children: "Upload Image"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setMode("text"),
              className: `flex-1 py-2 rounded-lg text-sm font-medium border transition-colors ${mode === "text" ? "bg-teal-600 text-white border-teal-600" : "border-border text-muted-foreground hover:bg-muted"}`,
              children: "Text Header"
            }
          )
        ] }),
        mode === "image" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Upload JPG/PNG (max 2MB). The image will span the full width of the prescription header." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref: fileRef,
              type: "file",
              accept: "image/jpeg,image/png,image/jpg",
              className: "hidden",
              onChange: handleImageUpload
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => {
                var _a2;
                return (_a2 = fileRef.current) == null ? void 0 : _a2.click();
              },
              className: "gap-1.5 border-teal-300 text-teal-700 hover:bg-teal-50",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-4 h-4" }),
                " Choose Image"
              ]
            }
          ),
          previewImg && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded p-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: "Preview:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: previewImg,
                alt: "Header preview",
                className: "w-full h-24 object-contain"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setPreviewImg(null),
                className: "mt-2 flex items-center gap-1 text-xs text-red-500 hover:text-red-700",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }),
                  " Remove"
                ]
              }
            )
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          headerType === "hospital" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Hospital Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: textData.hospitalName,
                  onChange: (e) => setTextData((d) => ({
                    ...d,
                    hospitalName: e.target.value
                  })),
                  placeholder: "e.g. Dhaka Medical College Hospital",
                  className: "mt-1 text-sm"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Tagline (optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: textData.tagline,
                  onChange: (e) => setTextData((d) => ({
                    ...d,
                    tagline: e.target.value
                  })),
                  placeholder: "e.g. Dept. of General Surgery",
                  className: "mt-1 text-sm"
                }
              )
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Doctor Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: textData.doctorName,
                  onChange: (e) => setTextData((d) => ({
                    ...d,
                    doctorName: e.target.value
                  })),
                  placeholder: "Dr. Arman Kabir",
                  className: "mt-1 text-sm"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Degrees / Designation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: textData.degrees,
                  onChange: (e) => setTextData((d) => ({
                    ...d,
                    degrees: e.target.value
                  })),
                  placeholder: "MBBS (DU), FCPS | Consultant Surgeon",
                  className: "mt-1 text-sm"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Chamber Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: textData.chamberAddress,
                  onChange: (e) => setTextData((d) => ({
                    ...d,
                    chamberAddress: e.target.value
                  })),
                  placeholder: "সেন্চুরি আর্কেড মার্কেট, মগবাজার, ঢাকা",
                  className: "mt-1 text-sm"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: textData.phone,
                  onChange: (e) => setTextData((d) => ({ ...d, phone: e.target.value })),
                  placeholder: "01751959262",
                  className: "mt-1 text-sm"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded p-3 bg-gray-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: "Preview:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b pb-2", children: headerType === "hospital" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-base", children: textData.hospitalName || "Hospital Name" }),
              textData.tagline && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: textData.tagline })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm", children: textData.doctorName || "Doctor Name" }),
                textData.degrees && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600", children: textData.degrees }),
                textData.chamberAddress && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600", children: textData.chamberAddress })
              ] }),
              textData.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-600", children: [
                "Mob: ",
                textData.phone
              ] })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end pt-2 border-t", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => setDialogOpen(false),
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              onClick: handleSave,
              className: "bg-teal-600 hover:bg-teal-700 text-white",
              "data-ocid": "rx.header_save.button",
              children: "Save Header"
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
function numberAdviceLines(raw) {
  if (!raw.trim()) return raw;
  const lines = raw.split("\n").filter((l) => l.trim().length > 0);
  return lines.map((line, i) => {
    const stripped = line.replace(/^[\d।]+\.\s*/, "").trim();
    return `${i + 1}. ${stripped}`;
  }).join("\n");
}
const SIG_KEY_PREFIX = "doctorSignature_";
function getDoctorSignature(doctorEmail) {
  const email = getDoctorEmail();
  return localStorage.getItem(`${SIG_KEY_PREFIX}${email}`);
}
function setDoctorSignature(dataUrl, doctorEmail) {
  const email = getDoctorEmail();
  localStorage.setItem(`${SIG_KEY_PREFIX}${email}`, dataUrl);
}
function clearDoctorSignature(doctorEmail) {
  const email = getDoctorEmail();
  localStorage.removeItem(`${SIG_KEY_PREFIX}${email}`);
}
function getPrescriptionHeaderHtml(type, fallbackDoctorInfo) {
  const img = getPrescriptionHeaderImage(type);
  if (img) {
    return `<div style="border-bottom:1px solid #d1d5db;padding-bottom:8px;margin-bottom:12px;text-align:center;">
      <img src="${img}" style="max-width:100%;max-height:100px;object-fit:contain;" alt="Header" />
    </div>`;
  }
  const textData = getPrescriptionHeaderText(type);
  if (textData) {
    if (type === "hospital") {
      return `<div style="border-bottom:1px solid #d1d5db;padding-bottom:8px;margin-bottom:12px;text-align:center;">
        <h2 style="font-weight:700;font-size:1.1rem;margin:0;">${textData.hospitalName}</h2>
        ${textData.tagline ? `<p style="font-size:0.875rem;color:#4b5563;margin:2px 0;">${textData.tagline}</p>` : ""}
      </div>`;
    }
    return `<div style="border-bottom:1px solid #d1d5db;padding-bottom:8px;margin-bottom:12px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;">
        <div>
          <h2 style="font-weight:700;font-size:1rem;margin:0;">${textData.doctorName}</h2>
          ${textData.degrees ? `<p style="font-size:0.875rem;color:#4b5563;margin:2px 0;">${textData.degrees}</p>` : ""}
          ${textData.chamberAddress ? `<p style="font-size:0.875rem;color:#4b5563;margin:2px 0;">${textData.chamberAddress}</p>` : ""}
        </div>
        ${textData.phone ? `<div style="text-align:right;font-size:0.875rem;color:#4b5563;">Mob: ${textData.phone}</div>` : ""}
      </div>
    </div>`;
  }
  if (fallbackDoctorInfo) {
    if (type === "hospital") {
      return `<div style="border-bottom:1px solid #d1d5db;padding-bottom:8px;margin-bottom:12px;text-align:center;">
        <h2 style="font-weight:700;font-size:1.1rem;margin:0;">${fallbackDoctorInfo.hospitalName ?? "Dr. Sirajul Islam Medical College Hospital"}</h2>
        <p style="font-size:0.875rem;color:#4b5563;margin:2px 0;">Dept. of General Surgery</p>
      </div>`;
    }
    return `<div style="border-bottom:1px solid #d1d5db;padding-bottom:8px;margin-bottom:12px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;">
        <div>
          <h2 style="font-weight:700;font-size:1rem;margin:0;">${fallbackDoctorInfo.name ?? "Dr. Arman Kabir (ZOSID)"}</h2>
          <p style="font-size:0.875rem;color:#4b5563;margin:2px 0;">${fallbackDoctorInfo.degrees ?? "MBBS (D.U.) | Emergency Medical Officer"}</p>
          <p style="font-size:0.875rem;color:#4b5563;margin:2px 0;">${fallbackDoctorInfo.chamber ?? "সেন্চুরি আর্কেড মার্কেট, মগবাজার, ঢাকা"}</p>
        </div>
        <div style="text-align:right;font-size:0.875rem;color:#4b5563;">
          <p>Reg. no. A-105224</p>
          <p>Mob: 01751959262</p>
        </div>
      </div>
    </div>`;
  }
  return `<div style="border-bottom:1px solid #d1d5db;padding-bottom:8px;margin-bottom:12px;">
    <h2 style="font-weight:700;font-size:1rem;margin:0;">Dr. Arman Kabir (ZOSID)</h2>
    <p style="font-size:0.875rem;color:#4b5563;">MBBS (D.U.) | Emergency Medical Officer</p>
  </div>`;
}
function getSignatureHtml(doctorName, signatureDataUrl) {
  const imgPart = signatureDataUrl ? `<img src="${signatureDataUrl}" style="height:48px;object-fit:contain;display:block;margin:0 auto 4px;" alt="Signature" />` : "";
  return `<div style="margin-top:2rem;text-align:right;">
    <div style="display:inline-block;text-align:center;min-width:140px;">
      ${imgPart}
      <div style="border-top:1px solid #555;padding-top:4px;">
        <p style="font-size:0.75rem;font-weight:600;color:#374151;margin:0;">Doctor's Signature</p>
        <p style="font-size:0.75rem;color:#6b7280;margin:0;">${doctorName}</p>
      </div>
    </div>
  </div>`;
}
var POPOVER_NAME = "Popover";
var [createPopoverContext] = createContextScope(POPOVER_NAME, [
  createPopperScope
]);
var usePopperScope = createPopperScope();
var [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME);
var Popover$1 = (props) => {
  const {
    __scopePopover,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = false
  } = props;
  const popperScope = usePopperScope(__scopePopover);
  const triggerRef = reactExports.useRef(null);
  const [hasCustomAnchor, setHasCustomAnchor] = reactExports.useState(false);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: POPOVER_NAME
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2$1, { ...popperScope, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    PopoverProvider,
    {
      scope: __scopePopover,
      contentId: useId(),
      triggerRef,
      open,
      onOpenChange: setOpen,
      onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      hasCustomAnchor,
      onCustomAnchorAdd: reactExports.useCallback(() => setHasCustomAnchor(true), []),
      onCustomAnchorRemove: reactExports.useCallback(() => setHasCustomAnchor(false), []),
      modal,
      children
    }
  ) });
};
Popover$1.displayName = POPOVER_NAME;
var ANCHOR_NAME = "PopoverAnchor";
var PopoverAnchor = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...anchorProps } = props;
    const context = usePopoverContext(ANCHOR_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
    reactExports.useEffect(() => {
      onCustomAnchorAdd();
      return () => onCustomAnchorRemove();
    }, [onCustomAnchorAdd, onCustomAnchorRemove]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Anchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
  }
);
PopoverAnchor.displayName = ANCHOR_NAME;
var TRIGGER_NAME = "PopoverTrigger";
var PopoverTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...triggerProps } = props;
    const context = usePopoverContext(TRIGGER_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    const trigger = /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive$1.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
    return context.hasCustomAnchor ? trigger : /* @__PURE__ */ jsxRuntimeExports.jsx(Anchor, { asChild: true, ...popperScope, children: trigger });
  }
);
PopoverTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "PopoverPortal";
var [PortalProvider, usePortalContext] = createPopoverContext(PORTAL_NAME, {
  forceMount: void 0
});
var PopoverPortal = (props) => {
  const { __scopePopover, forceMount, children, container } = props;
  const context = usePopoverContext(PORTAL_NAME, __scopePopover);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortalProvider, { scope: __scopePopover, forceMount, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$1, { asChild: true, container, children }) }) });
};
PopoverPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "PopoverContent";
var PopoverContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopePopover);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }
);
PopoverContent$1.displayName = CONTENT_NAME;
var Slot = createSlot("PopoverContent.RemoveScroll");
var PopoverContentModal = reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const isRightClickOutsideRef = reactExports.useRef(false);
    reactExports.useEffect(() => {
      const content = contentRef.current;
      if (content) return hideOthers(content);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ReactRemoveScroll, { as: Slot, allowPinchZoom: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      PopoverContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          var _a;
          event.preventDefault();
          if (!isRightClickOutsideRef.current) (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
        }),
        onPointerDownOutside: composeEventHandlers(
          props.onPointerDownOutside,
          (event) => {
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            isRightClickOutsideRef.current = isRightClick;
          },
          { checkForDefaultPrevented: false }
        ),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault(),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }
);
var PopoverContentNonModal = reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    const hasInteractedOutsideRef = reactExports.useRef(false);
    const hasPointerDownOutsideRef = reactExports.useRef(false);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      PopoverContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          var _a, _b;
          (_a = props.onCloseAutoFocus) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) (_b = context.triggerRef.current) == null ? void 0 : _b.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          var _a, _b;
          (_a = props.onInteractOutside) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = (_b = context.triggerRef.current) == null ? void 0 : _b.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }
);
var PopoverContentImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopePopover,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      ...contentProps
    } = props;
    const context = usePopoverContext(CONTENT_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    useFocusGuards();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      FocusScope,
      {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DismissableLayer,
          {
            asChild: true,
            disableOutsidePointerEvents,
            onInteractOutside,
            onEscapeKeyDown,
            onPointerDownOutside,
            onFocusOutside,
            onDismiss: () => context.onOpenChange(false),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Content,
              {
                "data-state": getState(context.open),
                role: "dialog",
                id: context.contentId,
                ...popperScope,
                ...contentProps,
                ref: forwardedRef,
                style: {
                  ...contentProps.style,
                  // re-namespace exposed content custom properties
                  ...{
                    "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                  }
                }
              }
            )
          }
        )
      }
    );
  }
);
var CLOSE_NAME = "PopoverClose";
var PopoverClose = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...closeProps } = props;
    const context = usePopoverContext(CLOSE_NAME, __scopePopover);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive$1.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }
);
PopoverClose.displayName = CLOSE_NAME;
var ARROW_NAME = "PopoverArrow";
var PopoverArrow = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopePopover);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
PopoverArrow.displayName = ARROW_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var Root2 = Popover$1;
var Trigger = PopoverTrigger$1;
var Portal = PopoverPortal;
var Content2 = PopoverContent$1;
function Popover({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content2,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      ),
      ...props
    }
  ) });
}
const STARTER_ADVICE_TEMPLATES = [
  // Rest & Recovery
  { id: "a1", text: "পর্যাপ্ত বিশ্রাম নিন", category: "বিশ্রাম" },
  { id: "a2", text: "বিছানায় সম্পূর্ণ বিশ্রাম নিন", category: "বিশ্রাম" },
  { id: "a3", text: "পরিশ্রমের কাজ এড়িয়ে চলুন", category: "বিশ্রাম" },
  // Medication
  { id: "b1", text: "নিয়মিত ওষুধ সেবন করুন", category: "ওষুধ" },
  { id: "b2", text: "ডাক্তারের পরামর্শ ছাড়া ওষুধ বন্ধ করবেন না", category: "ওষুধ" },
  { id: "b3", text: "নির্ধারিত সময়ে ওষুধ খান", category: "ওষুধ" },
  // Hydration & Diet
  {
    id: "c1",
    text: "পর্যাপ্ত পানি পান করুন (দিনে কমপক্ষে ৮ গ্লাস)",
    category: "খাদ্য ও পানীয়"
  },
  { id: "c2", text: "তৈলাক্ত ও মশলাদার খাবার পরিহার করুন", category: "খাদ্য ও পানীয়" },
  { id: "c3", text: "হালকা ও সহজপাচ্য খাবার খান", category: "খাদ্য ও পানীয়" },
  { id: "c4", text: "ফলমূল ও শাকসবজি বেশি খান", category: "খাদ্য ও পানীয়" },
  { id: "c5", text: "লবণ ও চিনি কম খান", category: "খাদ্য ও পানীয়" },
  { id: "c6", text: "বাইরের খাবার এড়িয়ে চলুন", category: "খাদ্য ও পানীয়" },
  // Lifestyle
  { id: "d1", text: "ধূমপান ও মাদক পরিহার করুন", category: "জীবনযাত্রা" },
  { id: "d2", text: "মদ্যপান থেকে বিরত থাকুন", category: "জীবনযাত্রা" },
  { id: "d3", text: "নিয়মিত হাঁটুন ও হালকা ব্যায়াম করুন", category: "জীবনযাত্রা" },
  { id: "d4", text: "রাতে পর্যাপ্ত ঘুমান (৭-৮ ঘণ্টা)", category: "জীবনযাত্রা" },
  { id: "d5", text: "মানসিক চাপ কমানোর চেষ্টা করুন", category: "জীবনযাত্রা" },
  // Follow-up
  { id: "e1", text: "৭ দিন পর পুনরায় দেখান", category: "ফলো-আপ" },
  { id: "e2", text: "১৪ দিন পর পুনরায় দেখান", category: "ফলো-আপ" },
  { id: "e3", text: "১ মাস পর পুনরায় দেখান", category: "ফলো-আপ" },
  { id: "e4", text: "৩ মাস পর পুনরায় দেখান", category: "ফলো-আপ" },
  { id: "e5", text: "প্রয়োজনে যেকোনো সময় দেখাতে পারেন", category: "ফলো-আপ" },
  // Emergency warnings
  { id: "f1", text: "জ্বর বাড়লে দ্রুত যোগাযোগ করুন", category: "সতর্কতা" },
  { id: "f2", text: "শ্বাসকষ্ট বাড়লে দ্রুত হাসপাতালে যান", category: "সতর্কতা" },
  { id: "f3", text: "বুকে ব্যথা হলে অবিলম্বে চিকিৎসক দেখান", category: "সতর্কতা" },
  { id: "f4", text: "অবস্থার অবনতি হলে জরুরি বিভাগে যান", category: "সতর্কতা" },
  {
    id: "f5",
    text: "ওষুধে পার্শ্বপ্রতিক্রিয়া দেখা দিলে ডাক্তারকে জানান",
    category: "সতর্কতা"
  },
  // Diabetes specific
  { id: "g1", text: "নিয়মিত রক্তের সুগার পরীক্ষা করুন", category: "ডায়াবেটিস" },
  {
    id: "g2",
    text: "মিষ্টি ও কার্বোহাইড্রেট জাতীয় খাবার কমিয়ে খান",
    category: "ডায়াবেটিস"
  },
  { id: "g3", text: "প্রতিদিন ৩০ মিনিট হাঁটুন", category: "ডায়াবেটিস" },
  // Hypertension
  { id: "h1", text: "নিয়মিত রক্তচাপ পরিমাপ করুন", category: "উচ্চ রক্তচাপ" },
  { id: "h2", text: "লবণ খাওয়া কমিয়ে দিন", category: "উচ্চ রক্তচাপ" },
  { id: "h3", text: "মানসিক উত্তেজনা পরিহার করুন", category: "উচ্চ রক্তচাপ" }
];
const CUSTOM_KEY$1 = "medicare_custom_advice_templates";
function getCustomTemplates() {
  try {
    const raw = localStorage.getItem(CUSTOM_KEY$1);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function getAllTemplates() {
  return [...STARTER_ADVICE_TEMPLATES, ...getCustomTemplates()];
}
function saveCustomTemplate(template) {
  const existing = getCustomTemplates();
  const updated = [...existing.filter((t) => t.id !== template.id), template];
  localStorage.setItem(CUSTOM_KEY$1, JSON.stringify(updated));
}
function deleteCustomTemplate(id) {
  const existing = getCustomTemplates();
  localStorage.setItem(
    CUSTOM_KEY$1,
    JSON.stringify(existing.filter((t) => t.id !== id))
  );
}
const DIMS_DATABASE = [
  // RESPIRATORY
  {
    diagnosis: "Acute Pharyngitis",
    category: "Respiratory",
    medications: [
      {
        name: "Amoxicillin",
        dose: "500 mg",
        frequency: "3 times daily",
        duration: "7 days",
        instructions: "Take after meals"
      },
      {
        name: "Paracetamol",
        dose: "500 mg",
        frequency: "3 times daily as needed",
        duration: "5 days",
        instructions: "Take for fever or pain"
      },
      {
        name: "Cetirizine",
        dose: "10 mg",
        frequency: "Once daily at night",
        duration: "5 days",
        instructions: "For throat irritation and allergy"
      }
    ],
    notes: "Swab for Group A Strep if suspected. Avoid antibiotics for viral pharyngitis."
  },
  {
    diagnosis: "Acute Bronchitis",
    category: "Respiratory",
    medications: [
      {
        name: "Amoxicillin-Clavulanate",
        dose: "625 mg",
        frequency: "Twice daily",
        duration: "7 days",
        instructions: "Take after meals"
      },
      {
        name: "Salbutamol inhaler",
        dose: "2 puffs",
        frequency: "Every 4-6 hours as needed",
        duration: "5-7 days",
        instructions: "Shake well before use"
      },
      {
        name: "Paracetamol",
        dose: "500 mg",
        frequency: "3 times daily as needed",
        duration: "5 days",
        instructions: "For fever"
      }
    ],
    notes: "Most cases are viral. Antibiotics only if bacterial features present."
  },
  {
    diagnosis: "Community-Acquired Pneumonia",
    category: "Respiratory",
    medications: [
      {
        name: "Amoxicillin-Clavulanate",
        dose: "1 g",
        frequency: "Twice daily",
        duration: "7-10 days",
        instructions: "Take after meals"
      },
      {
        name: "Azithromycin",
        dose: "500 mg",
        frequency: "Once daily",
        duration: "5 days",
        instructions: "For atypical coverage"
      },
      {
        name: "Paracetamol",
        dose: "500 mg",
        frequency: "3 times daily as needed",
        duration: "5 days",
        instructions: "For fever"
      }
    ],
    notes: "Chest X-ray recommended. Consider hospitalization for severe cases."
  },
  {
    diagnosis: "Bronchial Asthma (Acute)",
    category: "Respiratory",
    medications: [
      {
        name: "Salbutamol inhaler",
        dose: "2-4 puffs",
        frequency: "Every 4-6 hours",
        duration: "7-10 days",
        instructions: "Use spacer if available"
      },
      {
        name: "Prednisolone",
        dose: "40 mg",
        frequency: "Once daily in the morning",
        duration: "5 days",
        instructions: "Take with food"
      },
      {
        name: "Budesonide/Formoterol inhaler",
        dose: "1 puff",
        frequency: "Twice daily",
        duration: "Ongoing",
        instructions: "Long-term controller - do not stop abruptly"
      }
    ],
    notes: "Reassess after 1 week. Step up therapy if control is poor."
  },
  {
    diagnosis: "COPD Exacerbation",
    category: "Respiratory",
    medications: [
      {
        name: "Salbutamol + Ipratropium nebulisation",
        dose: "2.5 mg + 0.5 mg",
        frequency: "Every 6 hours",
        duration: "5 days",
        instructions: "Nebulise with oxygen or air"
      },
      {
        name: "Prednisolone",
        dose: "40 mg",
        frequency: "Once daily",
        duration: "5 days",
        instructions: "Take with food"
      },
      {
        name: "Azithromycin",
        dose: "500 mg",
        frequency: "Once daily",
        duration: "5 days",
        instructions: "For bacterial exacerbation"
      }
    ],
    notes: "Ensure SpO2 88-92%. Spirometry recommended when stable."
  },
  {
    diagnosis: "Upper Respiratory Tract Infection",
    category: "Respiratory",
    medications: [
      {
        name: "Paracetamol",
        dose: "500 mg",
        frequency: "3 times daily as needed",
        duration: "5 days",
        instructions: "For fever and discomfort"
      },
      {
        name: "Cetirizine",
        dose: "10 mg",
        frequency: "Once daily at night",
        duration: "5 days",
        instructions: "For nasal symptoms"
      },
      {
        name: "Normal saline nasal drops",
        dose: "2 drops each nostril",
        frequency: "3 times daily",
        duration: "5 days",
        instructions: "Tilt head back slightly"
      }
    ],
    notes: "Viral URTI is self-limiting. Antibiotics are not indicated routinely."
  },
  {
    diagnosis: "Sinusitis",
    category: "Respiratory",
    medications: [
      {
        name: "Amoxicillin-Clavulanate",
        dose: "625 mg",
        frequency: "Twice daily",
        duration: "10 days",
        instructions: "Take after meals"
      },
      {
        name: "Xylometazoline nasal spray",
        dose: "2 sprays each nostril",
        frequency: "Twice daily",
        duration: "5 days",
        instructions: "Do not use more than 5 days"
      },
      {
        name: "Paracetamol",
        dose: "500 mg",
        frequency: "3 times daily",
        duration: "5 days",
        instructions: "For pain and fever"
      }
    ],
    notes: "Consider nasal endoscopy if recurrent. Avoid prolonged decongestant use."
  },
  {
    diagnosis: "Allergic Rhinitis",
    category: "Respiratory",
    medications: [
      {
        name: "Cetirizine",
        dose: "10 mg",
        frequency: "Once daily at night",
        duration: "30 days",
        instructions: "Long-term control"
      },
      {
        name: "Fluticasone nasal spray",
        dose: "2 sprays each nostril",
        frequency: "Once daily in the morning",
        duration: "4-8 weeks",
        instructions: "Tilt head slightly forward"
      },
      {
        name: "Montelukast",
        dose: "10 mg",
        frequency: "Once daily at night",
        duration: "30 days",
        instructions: "Take before sleep"
      }
    ],
    notes: "Identify and avoid triggers. Allergen immunotherapy for refractory cases."
  },
  {
    diagnosis: "Pulmonary Tuberculosis",
    category: "Respiratory",
    medications: [
      {
        name: "HRZE (Intensive phase)",
        dose: "As per weight-based dosing",
        frequency: "Once daily",
        duration: "2 months",
        instructions: "Take on empty stomach in the morning"
      },
      {
        name: "HR (Continuation phase)",
        dose: "As per weight-based dosing",
        frequency: "Once daily",
        duration: "4 months",
        instructions: "Take on empty stomach in the morning"
      },
      {
        name: "Pyridoxine (Vitamin B6)",
        dose: "25 mg",
        frequency: "Once daily",
        duration: "6 months",
        instructions: "To prevent INH-induced neuropathy"
      }
    ],
    notes: "DOTS recommended. Screen household contacts. Monitor LFT monthly."
  },
  // CARDIOVASCULAR
  {
    diagnosis: "Hypertension (Mild)",
    category: "Cardiovascular",
    medications: [
      {
        name: "Amlodipine",
        dose: "5 mg",
        frequency: "Once daily",
        duration: "Ongoing",
        instructions: "Take at the same time each day"
      }
    ],
    notes: "Lifestyle modification: low-salt diet, exercise, weight control. Monitor BP weekly."
  },
  {
    diagnosis: "Hypertension (Moderate)",
    category: "Cardiovascular",
    medications: [
      {
        name: "Amlodipine",
        dose: "5-10 mg",
        frequency: "Once daily",
        duration: "Ongoing",
        instructions: "Take at the same time each day"
      },
      {
        name: "Losartan",
        dose: "50 mg",
        frequency: "Once daily",
        duration: "Ongoing",
        instructions: "Monitor kidney function and potassium"
      }
    ],
    notes: "Target BP < 130/80 mmHg. Review in 4 weeks."
  },
  {
    diagnosis: "Heart Failure (Systolic)",
    category: "Cardiovascular",
    medications: [
      {
        name: "Furosemide",
        dose: "40 mg",
        frequency: "Once daily in the morning",
        duration: "Ongoing",
        instructions: "Take in the morning to avoid nocturia"
      },
      {
        name: "Enalapril",
        dose: "5 mg",
        frequency: "Twice daily",
        duration: "Ongoing",
        instructions: "Monitor potassium and creatinine"
      },
      {
        name: "Carvedilol",
        dose: "3.125 mg",
        frequency: "Twice daily",
        duration: "Ongoing",
        instructions: "Titrate slowly; take with food"
      },
      {
        name: "Spironolactone",
        dose: "25 mg",
        frequency: "Once daily",
        duration: "Ongoing",
        instructions: "Monitor potassium levels"
      }
    ],
    notes: "Low-sodium diet. Daily weight monitoring. Refer cardiology."
  },
  {
    diagnosis: "Atrial Fibrillation",
    category: "Cardiovascular",
    medications: [
      {
        name: "Metoprolol succinate",
        dose: "25-50 mg",
        frequency: "Once daily",
        duration: "Ongoing",
        instructions: "Do not stop abruptly"
      },
      {
        name: "Warfarin",
        dose: "As per INR target (2-3)",
        frequency: "Once daily at the same time",
        duration: "Ongoing",
        instructions: "Regular INR monitoring required"
      }
    ],
    notes: "CHA2DS2-VASc score for anticoagulation decision. ECG and echocardiography."
  },
  {
    diagnosis: "Angina Pectoris",
    category: "Cardiovascular",
    medications: [
      {
        name: "Isosorbide mononitrate",
        dose: "20 mg",
        frequency: "Twice daily",
        duration: "Ongoing",
        instructions: "Avoid in hypotension"
      },
      {
        name: "Atenolol",
        dose: "50 mg",
        frequency: "Once daily",
        duration: "Ongoing",
        instructions: "Monitor pulse; do not stop abruptly"
      },
      {
        name: "Aspirin",
        dose: "75 mg",
        frequency: "Once daily",
        duration: "Ongoing",
        instructions: "Take after meals"
      },
      {
        name: "Atorvastatin",
        dose: "40 mg",
        frequency: "Once daily at night",
        duration: "Ongoing",
        instructions: "Monitor LFT at 3 months"
      }
    ],
    notes: "Sublingual GTN for acute attacks. Cardiac workup required."
  },
  {
    diagnosis: "Post-Acute MI",
    category: "Cardiovascular",
    medications: [
      {
        name: "Aspirin",
        dose: "75-100 mg",
        frequency: "Once daily",
        duration: "Ongoing",
        instructions: "Take after meals"
      },
      {
        name: "Clopidogrel",
        dose: "75 mg",
        frequency: "Once daily",
        duration: "12 months",
        instructions: "Dual antiplatelet therapy post-PCI"
      },
      {
        name: "Atorvastatin",
        dose: "80 mg",
        frequency: "Once daily at night",
        duration: "Ongoing",
        instructions: "High intensity statin"
      },
      {
        name: "Metoprolol succinate",
        dose: "25-50 mg",
        frequency: "Once daily",
        duration: "Ongoing",
        instructions: "Do not stop abruptly"
      },
      {
        name: "Ramipril",
        dose: "2.5-5 mg",
        frequency: "Once daily",
        duration: "Ongoing",
        instructions: "Monitor creatinine and BP"
      }
    ],
    notes: "Cardiac rehabilitation recommended. Regular follow-up every 3 months."
  },
  {
    diagnosis: "Hyperlipidemia",
    category: "Cardiovascular",
    medications: [
      {
        name: "Atorvastatin",
        dose: "20-40 mg",
        frequency: "Once daily at night",
        duration: "Ongoing",
        instructions: "Monitor LFT at 3 months"
      }
    ],
    notes: "Low-fat diet, regular exercise. Target LDL < 100 mg/dl (or < 70 mg/dl for high risk)."
  },
  // GASTROINTESTINAL
  {
    diagnosis: "Peptic Ulcer Disease",
    category: "Gastrointestinal",
    medications: [
      {
        name: "Omeprazole",
        dose: "20 mg",
        frequency: "Twice daily before meals",
        duration: "4-8 weeks",
        instructions: "Take 30 minutes before meals"
      },
      {
        name: "Sucralfate",
        dose: "1 g",
        frequency: "4 times daily",
        duration: "4-8 weeks",
        instructions: "Take on an empty stomach"
      }
    ],
    notes: "Test for H. pylori. Avoid NSAIDs, alcohol, and smoking."
  },
  {
    diagnosis: "GERD / Acid Reflux",
    category: "Gastrointestinal",
    medications: [
      {
        name: "Esomeprazole",
        dose: "40 mg",
        frequency: "Once daily before breakfast",
        duration: "4-8 weeks",
        instructions: "Take 30 minutes before eating"
      },
      {
        name: "Domperidone",
        dose: "10 mg",
        frequency: "3 times daily before meals",
        duration: "2-4 weeks",
        instructions: "Take 30 minutes before meals"
      }
    ],
    notes: "Elevate head of bed. Avoid late meals, spicy food, and alcohol."
  },
  {
    diagnosis: "Acute Gastroenteritis",
    category: "Gastrointestinal",
    medications: [
      {
        name: "Oral Rehydration Salt (ORS)",
        dose: "200-400 ml",
        frequency: "After each loose stool",
        duration: "Until recovered",
        instructions: "Prepare as per packet instructions"
      },
      {
        name: "Zinc",
        dose: "20 mg",
        frequency: "Once daily",
        duration: "10-14 days",
        instructions: "Reduces duration of diarrhoea"
      },
      {
        name: "Metronidazole",
        dose: "400 mg",
        frequency: "3 times daily",
        duration: "5 days",
        instructions: "If Giardia or Entamoeba suspected"
      }
    ],
    notes: "Emphasise hydration. Avoid antidiarrhoeals in children."
  },
  {
    diagnosis: "Irritable Bowel Syndrome",
    category: "Gastrointestinal",
    medications: [
      {
        name: "Mebeverine",
        dose: "135 mg",
        frequency: "3 times daily before meals",
        duration: "4 weeks",
        instructions: "Take 20 minutes before meals"
      },
      {
        name: "Ispaghula husk",
        dose: "1 sachet",
        frequency: "Twice daily",
        duration: "4 weeks",
        instructions: "Dissolve in water and drink immediately"
      }
    ],
    notes: "Dietary modification: low FODMAP diet. Stress management helpful."
  },
  {
    diagnosis: "Constipation",
    category: "Gastrointestinal",
    medications: [
      {
        name: "Ispaghula husk",
        dose: "1 sachet",
        frequency: "Twice daily",
        duration: "2-4 weeks",
        instructions: "Take with plenty of water"
      },
      {
        name: "Lactulose",
        dose: "15 ml",
        frequency: "Twice daily",
        duration: "As needed",
        instructions: "Adjust dose according to response"
      }
    ],
    notes: "High fibre diet and adequate water intake. Rule out secondary causes."
  },
  {
    diagnosis: "Acute Hepatitis",
    category: "Gastrointestinal",
    medications: [
      {
        name: "Silymarin (Milk Thistle)",
        dose: "140 mg",
        frequency: "3 times daily",
        duration: "4-8 weeks",
        instructions: "Take with meals"
      },
      {
        name: "Ursodeoxycholic acid",
        dose: "250 mg",
        frequency: "Twice daily",
        duration: "4 weeks",
        instructions: "For cholestasis features"
      },
      {
        name: "Vitamin B complex",
        dose: "1 tablet",
        frequency: "Once daily",
        duration: "4 weeks",
        instructions: "Nutritional support"
      }
    ],
    notes: "Rest, avoid alcohol and hepatotoxic drugs. Monitor LFT weekly."
  },
  {
    diagnosis: "Liver Cirrhosis",
    category: "Gastrointestinal",
    medications: [
      {
        name: "Spironolactone",
        dose: "100 mg",
        frequency: "Once daily",
        duration: "Ongoing",
        instructions: "Monitor potassium"
      },
      {
        name: "Furosemide",
        dose: "40 mg",
        frequency: "Once daily in the morning",
        duration: "Ongoing",
        instructions: "For ascites management"
      },
      {
        name: "Propranolol",
        dose: "20-40 mg",
        frequency: "Twice daily",
        duration: "Ongoing",
        instructions: "Prophylaxis for variceal bleeding"
      },
      {
        name: "Lactulose",
        dose: "30 ml",
        frequency: "3 times daily",
        duration: "Ongoing",
        instructions: "Target 2-3 soft stools daily"
      }
    ],
    notes: "Avoid NSAIDs and alcohol. Regular monitoring of LFT, AFP, abdominal ultrasound."
  },
  {
    diagnosis: "H. pylori Infection",
    category: "Gastrointestinal",
    medications: [
      {
        name: "Omeprazole",
        dose: "20 mg",
        frequency: "Twice daily",
        duration: "14 days",
        instructions: "Take 30 minutes before meals"
      },
      {
        name: "Clarithromycin",
        dose: "500 mg",
        frequency: "Twice daily",
        duration: "14 days",
        instructions: "Take with meals"
      },
      {
        name: "Amoxicillin",
        dose: "1 g",
        frequency: "Twice daily",
        duration: "14 days",
        instructions: "Take with meals"
      }
    ],
    notes: "Triple therapy. Test of cure (UBT) 4 weeks after completing treatment."
  },
  // DIABETES / ENDOCRINE
  {
    diagnosis: "Type 2 Diabetes Mellitus",
    category: "Diabetes/Endocrine",
    medications: [
      {
        name: "Metformin",
        dose: "500 mg",
        frequency: "Twice daily with meals",
        duration: "Ongoing",
        instructions: "Start low and titrate. Take with meals to reduce GI side effects"
      },
      {
        name: "Glibenclamide",
        dose: "5 mg",
        frequency: "Once daily before breakfast",
        duration: "Ongoing",
        instructions: "Monitor for hypoglycaemia"
      }
    ],
    notes: "HbA1c target < 7%. Diet, exercise, and weight loss are cornerstone therapy."
  },
  {
    diagnosis: "Diabetes Mellitus (Uncontrolled)",
    category: "Diabetes/Endocrine",
    medications: [
      {
        name: "Metformin",
        dose: "1000 mg",
        frequency: "Twice daily with meals",
        duration: "Ongoing",
        instructions: "Take with meals"
      },
      {
        name: "Sitagliptin",
        dose: "100 mg",
        frequency: "Once daily",
        duration: "Ongoing",
        instructions: "Can be taken with or without food"
      },
      {
        name: "Glargine insulin",
        dose: "10 units",
        frequency: "Once daily at bedtime",
        duration: "Ongoing",
        instructions: "Rotate injection sites"
      }
    ],
    notes: "Consider endocrinology referral. HbA1c monitoring every 3 months."
  },
  {
    diagnosis: "Hypothyroidism",
    category: "Diabetes/Endocrine",
    medications: [
      {
        name: "Levothyroxine",
        dose: "25-50 mcg",
        frequency: "Once daily on empty stomach",
        duration: "Ongoing",
        instructions: "Take 30-60 minutes before breakfast. Do not take with calcium or iron"
      }
    ],
    notes: "Recheck TSH after 6-8 weeks. Start low in elderly or cardiac patients."
  },
  {
    diagnosis: "Hyperthyroidism",
    category: "Diabetes/Endocrine",
    medications: [
      {
        name: "Carbimazole",
        dose: "10-20 mg",
        frequency: "3 times daily",
        duration: "6-18 months",
        instructions: "Monitor WBC count - stop if fever or sore throat"
      },
      {
        name: "Propranolol",
        dose: "40 mg",
        frequency: "3 times daily",
        duration: "Until euthyroid",
        instructions: "For symptom control"
      }
    ],
    notes: "Monitor TFT every 4 weeks. Refer for RAI or surgery if relapse."
  },
  {
    diagnosis: "Vitamin D Deficiency",
    category: "Diabetes/Endocrine",
    medications: [
      {
        name: "Cholecalciferol (Vitamin D3)",
        dose: "60,000 IU",
        frequency: "Once weekly",
        duration: "8-12 weeks",
        instructions: "Take with fatty meal for absorption"
      },
      {
        name: "Calcium carbonate",
        dose: "500 mg",
        frequency: "Twice daily",
        duration: "3 months",
        instructions: "Take with meals"
      }
    ],
    notes: "Recheck 25-OH Vitamin D after 3 months. Maintenance dosing thereafter."
  },
  {
    diagnosis: "Iron Deficiency Anemia",
    category: "Diabetes/Endocrine",
    medications: [
      {
        name: "Ferrous sulfate",
        dose: "200 mg",
        frequency: "Twice daily",
        duration: "3 months",
        instructions: "Take on an empty stomach; avoid with tea, antacids"
      },
      {
        name: "Folic acid",
        dose: "5 mg",
        frequency: "Once daily",
        duration: "3 months",
        instructions: "Take with or without food"
      }
    ],
    notes: "Identify and treat underlying cause. Recheck CBC and ferritin at 3 months."
  },
  // NEUROLOGICAL
  {
    diagnosis: "Migraine",
    category: "Neurological",
    medications: [
      {
        name: "Sumatriptan",
        dose: "50 mg",
        frequency: "At onset; repeat after 2 hours if needed",
        duration: "Per attack",
        instructions: "Do not exceed 300 mg/day"
      },
      {
        name: "Naproxen",
        dose: "500 mg",
        frequency: "Twice daily as needed",
        duration: "Per attack",
        instructions: "Take with food"
      },
      {
        name: "Propranolol",
        dose: "40 mg",
        frequency: "Twice daily",
        duration: "Ongoing (prophylaxis)",
        instructions: "Monitor pulse"
      }
    ],
    notes: "Migraine diary recommended. Avoid triggers. Consider neurology referral for frequent episodes."
  },
  {
    diagnosis: "Tension Headache",
    category: "Neurological",
    medications: [
      {
        name: "Paracetamol",
        dose: "500-1000 mg",
        frequency: "Every 6 hours as needed",
        duration: "Per episode",
        instructions: "Do not exceed 4 g/day"
      },
      {
        name: "Ibuprofen",
        dose: "400 mg",
        frequency: "3 times daily with food",
        duration: "Per episode",
        instructions: "Take with meals to reduce GI upset"
      }
    ],
    notes: "Stress management, posture correction, and sleep hygiene are important."
  },
  {
    diagnosis: "Seizure Disorder (Epilepsy)",
    category: "Neurological",
    medications: [
      {
        name: "Sodium valproate",
        dose: "200-400 mg",
        frequency: "Twice daily",
        duration: "Ongoing",
        instructions: "Do not stop abruptly; monitor LFT and CBC"
      },
      {
        name: "Clonazepam",
        dose: "0.5 mg",
        frequency: "Once daily at night",
        duration: "Ongoing",
        instructions: "May cause drowsiness"
      }
    ],
    notes: "Avoid driving. Monitor drug levels. Do not discontinue without neurology advice."
  },
  {
    diagnosis: "Peripheral Neuropathy",
    category: "Neurological",
    medications: [
      {
        name: "Gabapentin",
        dose: "300 mg",
        frequency: "3 times daily",
        duration: "Ongoing",
        instructions: "Start low; may cause dizziness"
      },
      {
        name: "Vitamin B1 + B6 + B12 (Neurobion)",
        dose: "1 tablet",
        frequency: "Once daily",
        duration: "3 months",
        instructions: "Take with food"
      },
      {
        name: "Alpha lipoic acid",
        dose: "600 mg",
        frequency: "Once daily",
        duration: "3 months",
        instructions: "Take before meals"
      }
    ],
    notes: "Control underlying DM or nutritional cause. Physiotherapy may help."
  },
  {
    diagnosis: "Vertigo / BPPV",
    category: "Neurological",
    medications: [
      {
        name: "Betahistine",
        dose: "16 mg",
        frequency: "3 times daily",
        duration: "4 weeks",
        instructions: "Take with food"
      },
      {
        name: "Cinnarizine",
        dose: "25 mg",
        frequency: "3 times daily",
        duration: "2 weeks",
        instructions: "May cause drowsiness"
      }
    ],
    notes: "Epley manoeuvre for BPPV. Refer ENT if persists beyond 4 weeks."
  },
  // MUSCULOSKELETAL
  {
    diagnosis: "Osteoarthritis",
    category: "Musculoskeletal",
    medications: [
      {
        name: "Paracetamol",
        dose: "1 g",
        frequency: "3 times daily",
        duration: "As needed",
        instructions: "Do not exceed 4 g/day"
      },
      {
        name: "Celecoxib",
        dose: "200 mg",
        frequency: "Once daily",
        duration: "2-4 weeks",
        instructions: "Take with food; avoid in peptic ulcer"
      },
      {
        name: "Glucosamine sulfate",
        dose: "1500 mg",
        frequency: "Once daily",
        duration: "3 months",
        instructions: "Take with food"
      }
    ],
    notes: "Physiotherapy and weight reduction are cornerstone management."
  },
  {
    diagnosis: "Rheumatoid Arthritis",
    category: "Musculoskeletal",
    medications: [
      {
        name: "Methotrexate",
        dose: "7.5-15 mg",
        frequency: "Once weekly",
        duration: "Ongoing",
        instructions: "Take folic acid on other days; monitor LFT and CBC"
      },
      {
        name: "Folic acid",
        dose: "5 mg",
        frequency: "Once daily (not on MTX day)",
        duration: "Ongoing",
        instructions: "Reduces MTX side effects"
      },
      {
        name: "Hydroxychloroquine",
        dose: "200 mg",
        frequency: "Twice daily",
        duration: "Ongoing",
        instructions: "Annual eye check for retinopathy"
      },
      {
        name: "Prednisolone",
        dose: "5-10 mg",
        frequency: "Once daily in the morning",
        duration: "Short-term bridging",
        instructions: "Taper gradually; take with calcium supplement"
      }
    ],
    notes: "Refer rheumatology. Baseline and periodic CBC, LFT, and CXR required."
  },
  {
    diagnosis: "Gout (Acute)",
    category: "Musculoskeletal",
    medications: [
      {
        name: "Colchicine",
        dose: "0.5 mg",
        frequency: "Every 6-8 hours",
        duration: "3-5 days",
        instructions: "Stop at first sign of diarrhoea"
      },
      {
        name: "Indomethacin",
        dose: "50 mg",
        frequency: "3 times daily",
        duration: "5-7 days",
        instructions: "Take with food"
      }
    ],
    notes: "Avoid allopurinol during acute attack. Start urate-lowering therapy only after 4 weeks."
  },
  {
    diagnosis: "Back Pain (Acute)",
    category: "Musculoskeletal",
    medications: [
      {
        name: "Ibuprofen",
        dose: "400 mg",
        frequency: "3 times daily with food",
        duration: "5-7 days",
        instructions: "Take with food"
      },
      {
        name: "Cyclobenzaprine (Muscle relaxant)",
        dose: "5 mg",
        frequency: "3 times daily",
        duration: "5 days",
        instructions: "May cause drowsiness; avoid driving"
      },
      {
        name: "Omeprazole",
        dose: "20 mg",
        frequency: "Once daily",
        duration: "5 days",
        instructions: "Gastric protection with NSAIDs"
      }
    ],
    notes: "Maintain activity. Bed rest not recommended beyond 2 days."
  },
  {
    diagnosis: "Osteoporosis",
    category: "Musculoskeletal",
    medications: [
      {
        name: "Alendronate",
        dose: "70 mg",
        frequency: "Once weekly on empty stomach",
        duration: "Ongoing",
        instructions: "Remain upright for 30 minutes after dose"
      },
      {
        name: "Calcium carbonate",
        dose: "500 mg",
        frequency: "Twice daily with meals",
        duration: "Ongoing",
        instructions: "Take with meals for absorption"
      },
      {
        name: "Cholecalciferol (Vitamin D3)",
        dose: "1000 IU",
        frequency: "Once daily",
        duration: "Ongoing",
        instructions: "Take with fatty meal"
      }
    ],
    notes: "DEXA scan recommended. Fall prevention strategies."
  },
  {
    diagnosis: "Fibromyalgia",
    category: "Musculoskeletal",
    medications: [
      {
        name: "Amitriptyline",
        dose: "10-25 mg",
        frequency: "Once daily at night",
        duration: "Ongoing",
        instructions: "Low dose; titrate up as needed"
      },
      {
        name: "Duloxetine",
        dose: "30-60 mg",
        frequency: "Once daily",
        duration: "Ongoing",
        instructions: "Monitor mood changes"
      },
      {
        name: "Pregabalin",
        dose: "75 mg",
        frequency: "Twice daily",
        duration: "Ongoing",
        instructions: "May cause drowsiness and weight gain"
      }
    ],
    notes: "Aerobic exercise and CBT are first-line. Avoid opioids."
  },
  // INFECTIONS
  {
    diagnosis: "Urinary Tract Infection",
    category: "Infections",
    medications: [
      {
        name: "Nitrofurantoin",
        dose: "100 mg",
        frequency: "Twice daily",
        duration: "5-7 days",
        instructions: "Take with food"
      },
      {
        name: "Trimethoprim",
        dose: "200 mg",
        frequency: "Twice daily",
        duration: "7 days",
        instructions: "Increase fluid intake"
      }
    ],
    notes: "Urine C/S recommended. Increase oral fluid intake to 2-3 litres/day."
  },
  {
    diagnosis: "Typhoid Fever",
    category: "Infections",
    medications: [
      {
        name: "Cefixime",
        dose: "200 mg",
        frequency: "Twice daily",
        duration: "14 days",
        instructions: "Take with or without food"
      },
      {
        name: "Paracetamol",
        dose: "500 mg",
        frequency: "3-4 times daily as needed",
        duration: "As needed",
        instructions: "For fever"
      }
    ],
    notes: "Consider ciprofloxacin based on local resistance pattern. Widal test for confirmation."
  },
  {
    diagnosis: "Malaria (Uncomplicated)",
    category: "Infections",
    medications: [
      {
        name: "Artemether-Lumefantrine",
        dose: "4 tablets (80/480 mg)",
        frequency: "Twice daily (6 doses total over 3 days)",
        duration: "3 days",
        instructions: "Take with fatty meal for absorption"
      },
      {
        name: "Paracetamol",
        dose: "500 mg",
        frequency: "3-4 times daily",
        duration: "3 days",
        instructions: "For fever"
      }
    ],
    notes: "Confirm with RDT or blood film. Primaquine for P. vivax radical cure after G6PD check."
  },
  {
    diagnosis: "Dengue Fever",
    category: "Infections",
    medications: [
      {
        name: "Paracetamol",
        dose: "500 mg",
        frequency: "3-4 times daily",
        duration: "As needed",
        instructions: "AVOID aspirin and ibuprofen (bleeding risk)"
      },
      {
        name: "ORS",
        dose: "200-400 ml",
        frequency: "Frequently",
        duration: "Until fever subsides",
        instructions: "Maintain oral hydration"
      }
    ],
    notes: "AVOID NSAIDs and aspirin. Monitor platelet count and haematocrit daily."
  },
  {
    diagnosis: "Skin and Soft Tissue Infection",
    category: "Infections",
    medications: [
      {
        name: "Cloxacillin",
        dose: "500 mg",
        frequency: "4 times daily",
        duration: "7-10 days",
        instructions: "Take on empty stomach"
      },
      {
        name: "Ibuprofen",
        dose: "400 mg",
        frequency: "3 times daily",
        duration: "5 days",
        instructions: "Take with food for anti-inflammatory effect"
      }
    ],
    notes: "Mark erythema borders at presentation. Elevate affected limb."
  },
  {
    diagnosis: "Wound Infection",
    category: "Infections",
    medications: [
      {
        name: "Co-amoxiclav",
        dose: "625 mg",
        frequency: "3 times daily",
        duration: "7 days",
        instructions: "Take after meals"
      },
      {
        name: "Metronidazole",
        dose: "400 mg",
        frequency: "3 times daily",
        duration: "7 days",
        instructions: "For anaerobic cover; avoid alcohol"
      },
      {
        name: "Tetanus toxoid",
        dose: "0.5 ml IM",
        frequency: "Single dose (if not immunised)",
        duration: "One-time",
        instructions: "Administer into deltoid"
      }
    ],
    notes: "Wound debridement and dressing essential. Culture from wound discharge."
  },
  // MENTAL HEALTH
  {
    diagnosis: "Anxiety Disorder",
    category: "Mental Health",
    medications: [
      {
        name: "Sertraline",
        dose: "50 mg",
        frequency: "Once daily in the morning",
        duration: "6-12 months",
        instructions: "Takes 2-4 weeks for full effect"
      },
      {
        name: "Clonazepam",
        dose: "0.25-0.5 mg",
        frequency: "Twice daily as needed (short-term)",
        duration: "2-4 weeks",
        instructions: "Avoid long-term use; risk of dependence"
      }
    ],
    notes: "CBT is first-line. Avoid benzodiazepines long-term. Review in 4 weeks."
  },
  {
    diagnosis: "Depression",
    category: "Mental Health",
    medications: [
      {
        name: "Escitalopram",
        dose: "10 mg",
        frequency: "Once daily",
        duration: "6-12 months",
        instructions: "Take at the same time each day; full effect in 4-6 weeks"
      },
      {
        name: "Mirtazapine",
        dose: "15 mg",
        frequency: "Once daily at night",
        duration: "6 months",
        instructions: "Useful if insomnia is a feature"
      }
    ],
    notes: "Assess suicide risk. Psychotherapy combined with medication is most effective."
  },
  {
    diagnosis: "Insomnia",
    category: "Mental Health",
    medications: [
      {
        name: "Melatonin",
        dose: "2-5 mg",
        frequency: "Once at bedtime",
        duration: "4 weeks",
        instructions: "Take 30 minutes before sleep; dim lights"
      },
      {
        name: "Hydroxyzine",
        dose: "25 mg",
        frequency: "Once at bedtime as needed",
        duration: "2-4 weeks",
        instructions: "May cause drowsiness"
      }
    ],
    notes: "Sleep hygiene first: fixed bedtime, no screens before sleep. CBT-I most effective."
  },
  // OTHERS
  {
    diagnosis: "Allergic Reaction (Mild)",
    category: "Others",
    medications: [
      {
        name: "Cetirizine",
        dose: "10 mg",
        frequency: "Once daily",
        duration: "7 days",
        instructions: "Take at night for best effect"
      },
      {
        name: "Hydrocortisone cream 1%",
        dose: "Apply thin layer",
        frequency: "Twice daily",
        duration: "7 days",
        instructions: "For skin involvement only"
      }
    ],
    notes: "Identify and avoid allergen. For angioedema or severe reaction, seek emergency care."
  },
  {
    diagnosis: "Scabies",
    category: "Others",
    medications: [
      {
        name: "Permethrin cream 5%",
        dose: "Apply neck-to-toe",
        frequency: "Leave for 8-14 hours; repeat after 1 week",
        duration: "2 applications",
        instructions: "Apply to cool, dry skin; wash off after 8-14 hours"
      },
      {
        name: "Cetirizine",
        dose: "10 mg",
        frequency: "Once daily at night",
        duration: "2 weeks",
        instructions: "For itch relief"
      }
    ],
    notes: "Treat all household contacts simultaneously. Wash all clothes and bedding."
  },
  {
    diagnosis: "Fungal Infection (Dermatophytosis)",
    category: "Others",
    medications: [
      {
        name: "Terbinafine",
        dose: "250 mg",
        frequency: "Once daily",
        duration: "2-4 weeks",
        instructions: "Take with food"
      },
      {
        name: "Clotrimazole cream 1%",
        dose: "Apply to affected area",
        frequency: "Twice daily",
        duration: "4 weeks",
        instructions: "Dry area before applying"
      }
    ],
    notes: "Keep area dry and clean. Avoid sharing towels or footwear."
  }
];
[
  ...new Set(DIMS_DATABASE.map((e) => e.category))
];
function searchDims(query) {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return DIMS_DATABASE.filter(
    (e) => e.diagnosis.toLowerCase().includes(q) || e.category.toLowerCase().includes(q)
  );
}
function getDimsByDiagnosis(diagnosis) {
  return DIMS_DATABASE.find(
    (e) => e.diagnosis.toLowerCase() === diagnosis.toLowerCase()
  );
}
const getTrackerKey = (patientId) => `inv_tracker_${patientId}`;
function loadTrackedInvestigations(patientId) {
  try {
    const raw = localStorage.getItem(getTrackerKey(patientId));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveTrackedInvestigations(patientId, items) {
  try {
    localStorage.setItem(getTrackerKey(patientId), JSON.stringify(items));
  } catch {
  }
}
function generateAIInterpretation(name, result, allReadings) {
  const val = Number.parseFloat(result.value);
  const n = name.toLowerCase();
  const isNum = !Number.isNaN(val);
  let trendText = "";
  if (allReadings.length >= 2 && isNum) {
    const sorted = [...allReadings].filter((r) => !Number.isNaN(Number.parseFloat(r.value))).sort(
      (a, b) => new Date(a.recordedAt).getTime() - new Date(b.recordedAt).getTime()
    );
    if (sorted.length >= 2) {
      const prev = Number.parseFloat(sorted[sorted.length - 2].value);
      const curr = Number.parseFloat(sorted[sorted.length - 1].value);
      if (curr > prev * 1.1) trendText = " Trend: ↑ rising over last readings.";
      else if (curr < prev * 0.9)
        trendText = " Trend: ↓ falling over last readings.";
      else trendText = " Trend: → stable.";
    }
  }
  let suggestion = "";
  if (n.includes("hemoglobin") || n === "hb" || n.includes("hb%")) {
    if (!isNum) return "See report";
    if (val < 7)
      suggestion = `Severe anaemia (Hb ${val} g/dL). Urgent transfusion may be needed.`;
    else if (val < 10)
      suggestion = `Moderate anaemia (Hb ${val} g/dL). Check iron, B12, folate.`;
    else if (val < 12)
      suggestion = `Mild anaemia (Hb ${val} g/dL, normal 12–16 g/dL).${trendText}`;
    else
      suggestion = `Hemoglobin ${val} g/dL — within normal range.${trendText}`;
  } else if (n.includes("creatinine")) {
    if (!isNum) return "See report";
    if (val > 3)
      suggestion = `Creatinine ${val} mg/dL — severely elevated. AKI or CKD likely. Nephrology consult advised.${trendText}`;
    else if (val > 1.5)
      suggestion = `Creatinine ${val} mg/dL — elevated (normal <1.2 mg/dL). Possible renal impairment.${trendText} Consider nephrology review.`;
    else suggestion = `Creatinine ${val} mg/dL — normal range.${trendText}`;
  } else if (n.includes("potassium") || n.includes("k+")) {
    if (!isNum) return "See report";
    if (val >= 6)
      suggestion = `⚠️ CRITICAL: K⁺ ${val} mmol/L — severe hyperkalemia. Cardiac risk. Immediate management required.`;
    else if (val > 5)
      suggestion = `K⁺ ${val} mmol/L — hyperkalemia (normal 3.5–5.0 mmol/L). Review medications.${trendText}`;
    else if (val < 2.5)
      suggestion = `⚠️ K⁺ ${val} mmol/L — severe hypokalemia. Arrhythmia risk. Supplement urgently.`;
    else if (val < 3.5)
      suggestion = `K⁺ ${val} mmol/L — hypokalemia (normal 3.5–5.0). Oral/IV potassium supplement.${trendText}`;
    else suggestion = `K⁺ ${val} mmol/L — normal.${trendText}`;
  } else if (n.includes("sodium") || n.includes("na+")) {
    if (!isNum) return "See report";
    if (val < 120)
      suggestion = `⚠️ Na⁺ ${val} mmol/L — severe hyponatremia. Seizure risk. Urgent treatment needed.`;
    else if (val < 135)
      suggestion = `Na⁺ ${val} mmol/L — hyponatremia (normal 135–145). Review fluids.${trendText}`;
    else if (val > 155)
      suggestion = `⚠️ Na⁺ ${val} mmol/L — severe hypernatremia. Check hydration status urgently.`;
    else if (val > 145)
      suggestion = `Na⁺ ${val} mmol/L — hypernatremia. Increase free water.${trendText}`;
    else suggestion = `Na⁺ ${val} mmol/L — normal.${trendText}`;
  } else if (n.includes("glucose") || n.includes("blood sugar") || n.includes("rbs") || n.includes("fbs")) {
    if (!isNum) return "See report";
    if (val < 3.9)
      suggestion = `⚠️ Glucose ${val} mmol/L — hypoglycemia! Immediate glucose administration.`;
    else if (val < 5.5)
      suggestion = `Glucose ${val} mmol/L — normal fasting range.${trendText}`;
    else if (val < 7)
      suggestion = `Glucose ${val} mmol/L — borderline/pre-diabetic range. Lifestyle review.${trendText}`;
    else if (val < 11.1)
      suggestion = `Glucose ${val} mmol/L — elevated. Possible diabetes. Confirm with HbA1c.${trendText}`;
    else
      suggestion = `⚠️ Glucose ${val} mmol/L — significantly elevated. Hyperglycemic. Review insulin/OHA.${trendText}`;
  } else if (n.includes("hba1c")) {
    if (!isNum) return "See report";
    if (val < 5.7)
      suggestion = `HbA1c ${val}% — normal (well-controlled).${trendText}`;
    else if (val < 6.5)
      suggestion = `HbA1c ${val}% — pre-diabetic range (5.7–6.4%). Lifestyle modification advised.${trendText}`;
    else if (val < 8)
      suggestion = `HbA1c ${val}% — diabetic range, sub-optimal control. Review treatment.${trendText}`;
    else
      suggestion = `⚠️ HbA1c ${val}% — poor diabetic control. Intensify management.${trendText}`;
  } else if (n.includes("wbc") || n.includes("total wbc") || n.includes("leukocyte")) {
    if (!isNum) return "See report";
    if (val > 12)
      suggestion = `WBC ${val} /cmm — leukocytosis. Suggests infection or inflammation.${trendText}`;
    else if (val < 4)
      suggestion = `WBC ${val} /cmm — leukopenia. Check for infection risk.${trendText} Consider hematology review.`;
    else suggestion = `WBC ${val} /cmm — normal range.${trendText}`;
  } else if (n.includes("sgpt") || n.includes("alt")) {
    if (!isNum) return "See report";
    if (val > 3 * 40)
      suggestion = `ALT/SGPT ${val} U/L — markedly elevated (3× ULN). Significant hepatic injury.${trendText}`;
    else if (val > 40)
      suggestion = `ALT/SGPT ${val} U/L — elevated (normal <40 U/L). Hepatic involvement.${trendText}`;
    else suggestion = `ALT/SGPT ${val} U/L — normal.${trendText}`;
  } else if (n.includes("tsh")) {
    if (!isNum) return "See report";
    if (val < 0.1)
      suggestion = `TSH ${val} mIU/L — suppressed (normal 0.4–4.5). Consider hyperthyroidism.${trendText}`;
    else if (val < 0.4)
      suggestion = `TSH ${val} mIU/L — low-normal. Monitor.${trendText}`;
    else if (val > 10)
      suggestion = `TSH ${val} mIU/L — significantly elevated. Hypothyroidism. Thyroid hormone replacement.${trendText}`;
    else if (val > 4.5)
      suggestion = `TSH ${val} mIU/L — elevated (normal 0.4–4.5). Subclinical/overt hypothyroidism.${trendText}`;
    else suggestion = `TSH ${val} mIU/L — normal.${trendText}`;
  } else {
    const label = result.interpretation;
    if (label === "Normal")
      suggestion = `${name}: ${result.value} ${result.unit} — within normal range (${result.referenceRange}).`;
    else if (label === "Abnormal High")
      suggestion = `${name}: ${result.value} ${result.unit} — above normal range (${result.referenceRange}).${trendText} Clinical review recommended.`;
    else if (label === "Abnormal Low")
      suggestion = `${name}: ${result.value} ${result.unit} — below normal range (${result.referenceRange}).${trendText} Clinical review recommended.`;
    else
      suggestion = `⚠️ ${name}: ${result.value} ${result.unit} — critical value. Immediate clinical action required.`;
  }
  return suggestion;
}
function StatusBadge({ status }) {
  if (status === "ordered")
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-amber-100 text-amber-800 border border-amber-300 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 mr-1" }),
      "Ordered"
    ] });
  if (status === "sample_collected")
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-blue-100 text-blue-800 border border-blue-300 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TestTube, { className: "w-3 h-3 mr-1" }),
      "Sample Collected"
    ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-green-100 text-green-800 border border-green-300 text-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 mr-1" }),
    "Report Collected"
  ] });
}
function isOverdue(inv) {
  if (inv.status === "report_collected") return false;
  const orderedAt = new Date(inv.orderedAt).getTime();
  return Date.now() - orderedAt > 48 * 60 * 60 * 1e3;
}
function ResultEntryForm({
  invName,
  onSave,
  onCancel,
  currentUser
}) {
  const [value, setValue] = reactExports.useState("");
  const [unit, setUnit] = reactExports.useState("");
  const [refRange, setRefRange] = reactExports.useState("");
  const [interp, setInterp] = reactExports.useState("Normal");
  const [notes, setNotes] = reactExports.useState("");
  function handleSave() {
    if (!value.trim()) {
      ue.error("Enter a result value");
      return;
    }
    onSave({
      value: value.trim(),
      unit: unit.trim(),
      referenceRange: refRange.trim(),
      interpretation: interp,
      notes: notes.trim() || void 0,
      recordedAt: (/* @__PURE__ */ new Date()).toISOString(),
      recordedBy: currentUser
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 bg-teal-50 border border-teal-200 rounded-xl p-4 space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "text-sm font-semibold text-teal-800", children: [
      "Add Result — ",
      invName
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Result Value *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value,
            onChange: (e) => setValue(e.target.value),
            placeholder: "e.g. 9.5",
            type: "text",
            className: "mt-1 h-8 text-sm",
            "data-ocid": "inv_tracker.result_value.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Unit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: unit,
            onChange: (e) => setUnit(e.target.value),
            placeholder: "e.g. g/dL",
            className: "mt-1 h-8 text-sm",
            "data-ocid": "inv_tracker.result_unit.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Reference Range" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: refRange,
            onChange: (e) => setRefRange(e.target.value),
            placeholder: "e.g. 12-16 g/dL",
            className: "mt-1 h-8 text-sm",
            "data-ocid": "inv_tracker.ref_range.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Interpretation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: interp,
            onValueChange: (v) => setInterp(v),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "mt-1 h-8 text-sm",
                  "data-ocid": "inv_tracker.interpretation.select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                "Normal",
                "Abnormal High",
                "Abnormal Low",
                "Critical"
              ].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: opt, className: "text-sm", children: opt }, opt)) })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Notes (optional)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          value: notes,
          onChange: (e) => setNotes(e.target.value),
          placeholder: "Any clinical notes...",
          rows: 2,
          className: "mt-1 text-sm",
          "data-ocid": "inv_tracker.result_notes.textarea"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          onClick: handleSave,
          className: "bg-teal-600 hover:bg-teal-700 text-white",
          "data-ocid": "inv_tracker.save_result.button",
          children: "Save Result"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: onCancel, children: "Cancel" })
    ] })
  ] });
}
function AIInterpretationCard({
  inv,
  allReadings
}) {
  if (!inv.result) return null;
  const interp = generateAIInterpretation(inv.name, inv.result, allReadings);
  const isWarning = interp.startsWith("⚠️") || inv.result.interpretation === "Critical" || inv.result.interpretation === "Abnormal High" || inv.result.interpretation === "Abnormal Low";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `mt-2 rounded-lg p-3 border text-xs ${isWarning ? "bg-amber-50 border-amber-200 text-amber-800" : "bg-green-50 border-green-200 text-green-800"}`,
      "data-ocid": "inv_tracker.ai_interpretation",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-3.5 h-3.5 mt-0.5 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-0.5", children: "AI Interpretation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: interp }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 opacity-60 italic", children: "AI Suggested — Review with Doctor" })
        ] })
      ] })
    }
  );
}
function AddInvestigationForm({
  onAdd,
  currentUser
}) {
  const [name, setName] = reactExports.useState("");
  const [showForm, setShowForm] = reactExports.useState(false);
  function handleAdd() {
    if (!name.trim()) {
      ue.error("Enter an investigation name");
      return;
    }
    const newInv = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      name: name.trim(),
      orderedAt: (/* @__PURE__ */ new Date()).toISOString(),
      orderedBy: currentUser,
      status: "ordered"
    };
    onAdd(newInv);
    setName("");
    setShowForm(false);
    ue.success(`${newInv.name} added to tracking`);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        size: "sm",
        variant: "outline",
        className: "border-teal-300 text-teal-700 hover:bg-teal-50 gap-1.5",
        onClick: () => setShowForm(!showForm),
        "data-ocid": "inv_tracker.add_investigation.button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
          "Track New Investigation"
        ]
      }
    ),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 bg-teal-50 border border-teal-200 rounded-xl p-4 flex gap-2 items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Investigation Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: name,
            onChange: (e) => setName(e.target.value),
            onKeyDown: (e) => e.key === "Enter" && handleAdd(),
            placeholder: "e.g. CBC, S. Creatinine...",
            className: "mt-1 h-8 text-sm",
            "data-ocid": "inv_tracker.new_investigation.input",
            autoFocus: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          onClick: handleAdd,
          className: "bg-teal-600 hover:bg-teal-700 text-white",
          "data-ocid": "inv_tracker.confirm_add.button",
          children: "Add"
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
  ] });
}
function InvestigationTracker({
  patientId,
  patientPhone,
  viewerRole,
  currentRole
}) {
  const [investigations, setInvestigations] = reactExports.useState(
    () => loadTrackedInvestigations(patientId)
  );
  const [expandedResultId, setExpandedResultId] = reactExports.useState(null);
  const canChangeStatus = viewerRole === "consultant_doctor" || viewerRole === "medical_officer" || currentRole === "doctor" || currentRole === "admin";
  const currentUser = viewerRole ? viewerRole.replace(/_/g, " ") : currentRole ?? "Staff";
  function persist(updated) {
    setInvestigations(updated);
    saveTrackedInvestigations(patientId, updated);
  }
  function updateStatus(id, status) {
    const updated = investigations.map(
      (inv) => inv.id === id ? {
        ...inv,
        status,
        statusUpdatedAt: (/* @__PURE__ */ new Date()).toISOString(),
        statusUpdatedBy: currentUser
      } : inv
    );
    persist(updated);
    if (status === "report_collected") {
      ue.success(
        "Report linked to prescription. Result will appear in Clinical Summary.",
        {
          duration: 4e3
        }
      );
      const linked = updated.map(
        (inv) => inv.id === id ? { ...inv, linkedToPrescription: true } : inv
      );
      persist(linked);
      setExpandedResultId(id);
    }
  }
  function saveResult(id, result) {
    const updated = investigations.map(
      (inv) => inv.id === id ? { ...inv, result } : inv
    );
    persist(updated);
    setExpandedResultId(null);
    ue.success("Result saved");
  }
  function addInvestigation(inv) {
    persist([...investigations, inv]);
  }
  function buildReportReadyLink(inv) {
    const phone = patientPhone ?? "";
    const msg = `Dear Patient, your ${inv.name} report is ready. Please collect or contact the clinic for further instructions.`;
    return buildWhatsAppUrl(phone, msg);
  }
  function getReportReadyMessage(inv) {
    return `Dear Patient, your ${inv.name} report is ready. Please collect or contact the clinic for further instructions.`;
  }
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      ue.success("Message copied to clipboard");
    }).catch(() => {
      ue.error("Could not copy to clipboard");
    });
  }
  const overdueCount = investigations.filter(isOverdue).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-gray-800 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-4 h-4 text-teal-600" }),
          "Investigation Tracking"
        ] }),
        overdueCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-orange-100 text-orange-800 border border-orange-300 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3 mr-1" }),
          overdueCount,
          " Overdue"
        ] })
      ] }),
      canChangeStatus && /* @__PURE__ */ jsxRuntimeExports.jsx(
        AddInvestigationForm,
        {
          onAdd: addInvestigation,
          currentUser
        }
      )
    ] }),
    investigations.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-10 border border-dashed border-teal-200 rounded-xl",
        "data-ocid": "inv_tracker.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-8 h-8 text-teal-200 mx-auto mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "No investigations tracked yet" }),
          canChangeStatus && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-1", children: 'Click "Track New Investigation" to start' })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: investigations.map((inv, idx) => {
      const overdue = isOverdue(inv);
      const allReadings = investigations.filter((i) => i.name === inv.name && i.result).map((i) => ({
        value: i.result.value,
        recordedAt: i.result.recordedAt
      }));
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `bg-white rounded-xl border shadow-sm p-4 ${overdue ? "border-orange-300" : "border-gray-200"}`,
          "data-ocid": `inv_tracker.item.${idx + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-gray-800", children: inv.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: inv.status }),
                  overdue && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-orange-100 text-orange-800 border border-orange-300 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3 mr-1" }),
                    "Overdue"
                  ] }),
                  inv.linkedToPrescription && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-teal-100 text-teal-800 border border-teal-300 text-xs", children: "Linked to Rx" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-400 mt-0.5", children: [
                  "Ordered:",
                  " ",
                  new Date(inv.orderedAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit"
                  }),
                  " ",
                  "by ",
                  inv.orderedBy
                ] }),
                inv.statusUpdatedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-400", children: [
                  "Status updated:",
                  " ",
                  new Date(inv.statusUpdatedAt).toLocaleDateString(
                    "en-GB",
                    {
                      day: "2-digit",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit"
                    }
                  ),
                  " ",
                  "by ",
                  inv.statusUpdatedBy
                ] }),
                inv.result && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs mt-1 text-teal-700 font-medium", children: [
                  "Result: ",
                  inv.result.value,
                  " ",
                  inv.result.unit,
                  inv.result.referenceRange && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-500 font-normal ml-1", children: [
                    "(Ref: ",
                    inv.result.referenceRange,
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `ml-2 px-1.5 py-0.5 rounded text-xs font-semibold ${inv.result.interpretation === "Normal" ? "bg-green-100 text-green-700" : inv.result.interpretation === "Critical" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`,
                      children: inv.result.interpretation
                    }
                  )
                ] })
              ] }),
              canChangeStatus && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 shrink-0", children: [
                inv.status === "ordered" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 px-2.5 text-xs gap-1 border-blue-400 text-blue-700 hover:bg-blue-50",
                    onClick: () => updateStatus(inv.id, "sample_collected"),
                    "data-ocid": `inv_tracker.sample_collected.button.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TestTube, { className: "w-3 h-3" }),
                      "Sample Collected"
                    ]
                  }
                ),
                inv.status === "sample_collected" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    className: "h-7 px-2.5 text-xs gap-1 bg-green-600 hover:bg-green-700 text-white",
                    onClick: () => updateStatus(inv.id, "report_collected"),
                    "data-ocid": `inv_tracker.report_collected.button.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
                      "Report Collected"
                    ]
                  }
                ),
                inv.status === "report_collected" && !inv.result && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 px-2.5 text-xs gap-1 border-teal-400 text-teal-700 hover:bg-teal-50",
                    onClick: () => setExpandedResultId(
                      expandedResultId === inv.id ? null : inv.id
                    ),
                    "data-ocid": `inv_tracker.add_result.button.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
                      "Add Result"
                    ]
                  }
                ),
                inv.status === "report_collected" && inv.result && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 px-2.5 text-xs gap-1 border-gray-300 text-gray-600 hover:bg-gray-50",
                    onClick: () => setExpandedResultId(
                      expandedResultId === inv.id ? null : inv.id
                    ),
                    "data-ocid": `inv_tracker.edit_result.button.${idx + 1}`,
                    children: "Edit Result"
                  }
                ),
                inv.status === "report_collected" && patientPhone && normalisePhone(patientPhone) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: buildReportReadyLink(inv),
                      target: "_blank",
                      rel: "noreferrer",
                      className: "inline-flex items-center gap-1 h-7 px-2.5 text-xs border border-green-400 text-green-700 bg-green-50 rounded-md hover:bg-green-100 font-medium",
                      "data-ocid": `inv_tracker.whatsapp.button.${idx + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "svg",
                          {
                            viewBox: "0 0 24 24",
                            className: "w-3 h-3 fill-green-600",
                            role: "img",
                            "aria-label": "WhatsApp icon",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
                          }
                        ),
                        "Report Ready"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "h-7 px-2 text-xs gap-1 border-gray-300 text-gray-600 hover:bg-gray-50",
                      title: "Copy message for manual sending",
                      onClick: () => copyToClipboard(getReportReadyMessage(inv)),
                      "data-ocid": `inv_tracker.copy_message.button.${idx + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardCopy, { className: "w-3 h-3" }),
                        "Copy"
                      ]
                    }
                  )
                ] })
              ] })
            ] }),
            expandedResultId === inv.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
              ResultEntryForm,
              {
                invName: inv.name,
                onSave: (result) => saveResult(inv.id, result),
                onCancel: () => setExpandedResultId(null),
                currentUser
              }
            ),
            inv.result && expandedResultId !== inv.id && /* @__PURE__ */ jsxRuntimeExports.jsx(AIInterpretationCard, { inv, allReadings })
          ]
        },
        inv.id
      );
    }) })
  ] });
}
function computeComplaintTrends(visits) {
  const sorted = [...visits].sort(
    (a, b) => Number(a.visitDate) - Number(b.visitDate)
  );
  const trendsMap = /* @__PURE__ */ new Map();
  for (const visit of sorted) {
    const visitId = String(visit.id);
    const visitMs = Number(visit.visitDate) / 1e3;
    const rawComplaints = (visit.chiefComplaint ?? "").split(/[,;،\n]+/).map((c) => c.trim().toLowerCase()).filter(Boolean);
    for (const complaintName of rawComplaints) {
      const existing = trendsMap.get(complaintName);
      const severity = inferSeverity(visit);
      if (!existing) {
        trendsMap.set(complaintName, {
          complaintName,
          firstAppeared: visitMs,
          firstVisitId: visitId,
          severityHistory: [{ date: visitMs, severity, visitId }],
          currentStatus: "active"
        });
      } else {
        existing.severityHistory.push({ date: visitMs, severity, visitId });
        existing.currentStatus = "active";
      }
    }
    const diagnosisLower = (visit.diagnosis ?? "").toLowerCase();
    for (const [name, entry] of trendsMap) {
      if (entry.currentStatus === "active" && !rawComplaints.includes(name) && diagnosisLower.includes("resolved") && diagnosisLower.includes(name)) {
        entry.currentStatus = "resolved";
        entry.severityHistory.push({
          date: visitMs,
          severity: "resolved",
          visitId
        });
      }
    }
  }
  return Array.from(trendsMap.values());
}
function inferSeverity(visit, _complaint) {
  const text = [visit.notes ?? "", visit.diagnosis ?? ""].join(" ").toLowerCase();
  if (text.includes("severe") || text.includes("critical")) return "severe";
  if (text.includes("moderate")) return "moderate";
  if (text.includes("resolved") || text.includes("improved")) return "resolved";
  return "mild";
}
function computePrescriptionDiff(prev, curr) {
  const prevMeds = prev.medications ?? [];
  const currMeds = curr.medications ?? [];
  const prevNames = new Map(prevMeds.map((m) => [normalizeName(m.name), m]));
  const currNames = new Map(currMeds.map((m) => [normalizeName(m.name), m]));
  const addedDrugs = [];
  const removedDrugs = [];
  const doseChanges = [];
  for (const [name, med] of currNames) {
    if (!prevNames.has(name)) {
      addedDrugs.push(med.name);
    }
  }
  for (const [name, prevMed] of prevNames) {
    const currMed = currNames.get(name);
    if (!currMed) {
      const withMeta = prevMed;
      removedDrugs.push({
        name: prevMed.name,
        reason: withMeta.discontinuationReason
      });
    } else if (normalizeDose(prevMed.dose) !== normalizeDose(currMed.dose)) {
      doseChanges.push({
        name: prevMed.name,
        oldDose: prevMed.dose,
        newDose: currMed.dose
      });
    }
  }
  return { addedDrugs, removedDrugs, doseChanges };
}
function normalizeName(name) {
  return name.trim().toLowerCase().replace(/\s+/g, " ");
}
function normalizeDose(dose) {
  return dose.trim().toLowerCase().replace(/\s+/g, "");
}
function isVaccineOverdue(vaccine) {
  if (!vaccine.dueDate) return false;
  if (vaccine.dateGiven) return false;
  const due = new Date(vaccine.dueDate).getTime();
  return due < Date.now();
}
function getCurrentMedications(prescriptions) {
  const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1e3;
  const now = Date.now();
  const active = [];
  const sorted = [...prescriptions].sort(
    (a, b) => Number(b.prescriptionDate) - Number(a.prescriptionDate)
  );
  const seenDrugNames = /* @__PURE__ */ new Set();
  for (const rx of sorted) {
    const rxAgeMs = now - Number(rx.prescriptionDate) / 1e3;
    if (rxAgeMs > NINETY_DAYS_MS) continue;
    for (const med of rx.medications ?? []) {
      const key = normalizeName(med.name);
      if (seenDrugNames.has(key)) continue;
      const withMeta = med;
      if (withMeta.discontinuedAt) continue;
      seenDrugNames.add(key);
      active.push(withMeta);
    }
  }
  return active;
}
function CurrentMedicationList({
  prescriptions,
  loading
}) {
  const [expanded, setExpanded] = reactExports.useState(true);
  const activeMeds = getCurrentMedications(prescriptions);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-violet-200 bg-violet-50 p-4 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-40 mb-3" }),
      [1, 2].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 mb-2 rounded-lg" }, k))
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-xl border border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 mb-4 overflow-hidden",
      "data-ocid": "rx.current_medications.card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "w-full flex items-center justify-between px-4 py-3 hover:bg-violet-100/50 transition-colors",
            onClick: () => setExpanded((p) => !p),
            "data-ocid": "rx.current_medications.toggle",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-lg bg-violet-200 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "w-3.5 h-3.5 text-violet-700" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-violet-800", children: "Current Medications" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full bg-violet-200 text-violet-800 text-xs font-bold", children: activeMeds.length })
              ] }),
              expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-violet-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-violet-500" })
            ]
          }
        ),
        expanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-4", children: activeMeds.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-sm text-violet-500 italic py-2 text-center",
            "data-ocid": "rx.current_medications.empty_state",
            children: "No active medications recorded"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "table",
          {
            className: "w-full text-xs",
            "data-ocid": "rx.current_medications.table",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-violet-200", children: [
                "Drug Name",
                "Dose",
                "Frequency",
                "Prescribed On",
                "Prescribed By"
              ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "th",
                {
                  className: "text-left py-1.5 px-2 font-semibold text-violet-600 whitespace-nowrap",
                  children: h
                },
                h
              )) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: activeMeds.map((med, i) => {
                const rx = prescriptions.find(
                  (p) => {
                    var _a;
                    return (_a = p.medications) == null ? void 0 : _a.some((m) => m.name === med.name);
                  }
                );
                const rxDate = (rx == null ? void 0 : rx.prescriptionDate) ? format(
                  new Date(Number(rx.prescriptionDate) / 1e6),
                  "d MMM yyyy"
                ) : "—";
                const prescriber = (rx == null ? void 0 : rx.createdBy) || "—";
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    className: "border-b border-violet-100 hover:bg-violet-50/50",
                    "data-ocid": `rx.current_medications.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 px-2 font-medium text-gray-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                        med.drugForm && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-indigo-600 font-semibold", children: med.drugForm }),
                        med.drugName || med.name,
                        med.dispensedAs === "substituted" && med.substitutedBrand && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-600 text-xs ml-1", children: [
                          "(sub: ",
                          med.substitutedBrand,
                          ")"
                        ] })
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 px-2 text-gray-700", children: med.dose }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 px-2 text-gray-600", children: med.frequencyBn || med.frequency }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 px-2 text-gray-500", children: rxDate }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 px-2 text-gray-500 truncate max-w-[120px]", children: prescriber })
                    ]
                  },
                  `${med.name}-${i}`
                );
              }) })
            ]
          }
        ) }) })
      ]
    }
  );
}
function PrescriptionDiffRow({
  curr,
  prev,
  index
}) {
  const [open, setOpen] = reactExports.useState(false);
  const diff = computePrescriptionDiff(prev, curr);
  const hasChanges = diff.addedDrugs.length > 0 || diff.removedDrugs.length > 0 || diff.doseChanges.length > 0;
  if (!hasChanges) return null;
  const totalChanges = diff.addedDrugs.length + diff.removedDrugs.length + diff.doseChanges.length;
  const DISCONTINUATION_LABELS = {
    course_complete: "Course complete",
    side_effect: "Side effect",
    patient_refused: "Patient refused",
    alternative_started: "Alternative started",
    other: "Other"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-1 mx-1", "data-ocid": `rx.diff_row.item.${index + 1}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen((p) => !p),
        className: "w-full flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 hover:bg-amber-100 transition-colors text-xs",
        "data-ocid": `rx.diff_row.toggle.${index + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-700 font-semibold", children: [
            "↕ What changed? (",
            totalChanges,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 flex-wrap ml-1", children: [
            diff.addedDrugs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 font-medium", children: [
              "+",
              diff.addedDrugs.length,
              " added"
            ] }),
            diff.removedDrugs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-1.5 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-300 font-medium", children: [
              "-",
              diff.removedDrugs.length,
              " removed"
            ] }),
            diff.doseChanges.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-300 font-medium", children: [
              diff.doseChanges.length,
              " dose changed"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-amber-500", children: open ? "▲" : "▼" })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-2 bg-amber-50/60 border-x border-b border-amber-200 rounded-b-lg space-y-2 text-xs", children: [
      diff.addedDrugs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-emerald-700 mb-1 block", children: "Added:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: diff.addedDrugs.map((name) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 font-medium",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3" }),
              name
            ]
          },
          name
        )) })
      ] }),
      diff.removedDrugs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-red-700 mb-1 block", children: "Removed:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: diff.removedDrugs.map(({ name, reason }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 text-red-800 border border-red-300 font-medium line-through",
            children: [
              name,
              reason && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "no-underline not-italic ml-1 text-red-500", children: [
                "(",
                DISCONTINUATION_LABELS[reason] ?? reason,
                ")"
              ] })
            ]
          },
          name
        )) })
      ] }),
      diff.doseChanges.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-amber-700 mb-1 block", children: "Dose changed:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: diff.doseChanges.map(({ name, oldDose, newDose }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300 font-medium",
            children: [
              name,
              ":",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-through text-red-500", children: oldDose }),
              " → ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600", children: newDose })
            ]
          },
          name
        )) })
      ] })
    ] })
  ] });
}
function ViewedByPatientBadge({ viewedAt }) {
  if (viewedAt) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-emerald-600 mt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Viewed by patient:",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: format(new Date(viewedAt), "d MMM yyyy, HH:mm") })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-gray-400 mt-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-3.5 h-3.5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Not yet viewed by patient" })
  ] });
}
function FirstPrescriptionLabel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-1 my-1 px-3 py-1 rounded-lg bg-teal-50 border border-teal-200 text-xs text-teal-700 font-medium flex items-center gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
    "First prescription"
  ] });
}
const DISC_OPTIONS = [
  { value: "course_complete", label: "Course complete" },
  { value: "side_effect", label: "Side effect" },
  { value: "patient_refused", label: "Patient refused" },
  { value: "alternative_started", label: "Alternative started" },
  { value: "other", label: "Other" }
];
function DiscontinuationDialog({
  drugName,
  open,
  onConfirm,
  onCancel
}) {
  const [selected, setSelected] = reactExports.useState("");
  const [note, setNote] = reactExports.useState("");
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-[200] flex items-center justify-center bg-black/40",
      "data-ocid": "rx.discontinuation.dialog",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-2xl border border-red-200 w-full max-w-sm mx-4 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-red-700 mb-1", children: "Why is this drug being stopped?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: drugName }),
          " — please select a reason for discontinuation"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 mb-3", children: DISC_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "label",
          {
            className: `flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition-colors ${selected === opt.value ? "bg-red-50 border-red-400 text-red-800" : "border-gray-200 hover:bg-gray-50"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "radio",
                  name: "disc_reason",
                  value: opt.value,
                  checked: selected === opt.value,
                  onChange: () => setSelected(opt.value),
                  className: "accent-red-500",
                  "data-ocid": `rx.discontinuation.radio.${opt.value}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: opt.label })
            ]
          },
          opt.value
        )) }),
        selected === "other" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: "w-full border rounded px-2 py-1.5 text-sm mb-3 border-red-200 focus:outline-none focus:ring-1 focus:ring-red-300",
            placeholder: "Describe reason...",
            value: note,
            onChange: (e) => setNote(e.target.value),
            "data-ocid": "rx.discontinuation.note_input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => {
                setSelected("");
                setNote("");
                onCancel();
              },
              "data-ocid": "rx.discontinuation.cancel_button",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => {
                onConfirm("other", "");
                setSelected("");
                setNote("");
              },
              "data-ocid": "rx.discontinuation.skip_button",
              children: "Skip"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              className: "bg-red-600 hover:bg-red-700 text-white",
              onClick: () => {
                const reason = selected || "other";
                onConfirm(reason, note);
                setSelected("");
                setNote("");
              },
              "data-ocid": "rx.discontinuation.confirm_button",
              children: "Confirm"
            }
          )
        ] })
      ] })
    }
  );
}
const TREATMENT_TEMPLATES = [
  // RESPIRATORY
  {
    id: "tt1",
    name: "Upper Respiratory Tract Infection",
    diagnosis: "URTI / সর্দি-কাশি",
    category: "Respiratory",
    drugs: [
      {
        route: "PO",
        name: "Amoxicillin 500mg",
        nameType: "generic",
        dose: "500mg",
        duration: "5 days",
        instructions: "After meal"
      },
      {
        route: "PO",
        name: "Paracetamol 500mg",
        nameType: "generic",
        dose: "500mg",
        duration: "5 days",
        instructions: "After meal (when needed)"
      },
      {
        route: "PO",
        name: "Cetirizine 10mg",
        nameType: "generic",
        dose: "10mg",
        duration: "5 days",
        instructions: "At night"
      }
    ],
    advice: ["পর্যাপ্ত বিশ্রাম নিন", "পর্যাপ্ত পানি পান করুন", "৭ দিন পর পুনরায় দেখান"]
  },
  {
    id: "tt2",
    name: "Acute Bronchitis",
    diagnosis: "Acute Bronchitis",
    category: "Respiratory",
    drugs: [
      {
        route: "PO",
        name: "Azithromycin 500mg",
        nameType: "generic",
        dose: "500mg",
        duration: "3 days",
        instructions: "Once daily, empty stomach"
      },
      {
        route: "PO",
        name: "Salbutamol 4mg",
        nameType: "generic",
        dose: "4mg",
        duration: "5 days",
        instructions: "Twice daily after meal"
      },
      {
        route: "PO",
        name: "Ambroxol 30mg",
        nameType: "generic",
        dose: "30mg",
        duration: "7 days",
        instructions: "Three times daily after meal"
      }
    ],
    advice: ["ঠান্ডা ও ধুলা এড়িয়ে চলুন", "ধূমপান পরিহার করুন", "১৪ দিন পর পুনরায় দেখান"]
  },
  {
    id: "tt3",
    name: "Community-Acquired Pneumonia",
    diagnosis: "Pneumonia",
    category: "Respiratory",
    drugs: [
      {
        route: "PO",
        name: "Co-Amoxiclav 625mg",
        nameType: "generic",
        dose: "625mg",
        duration: "7 days",
        instructions: "Twice daily after meal"
      },
      {
        route: "PO",
        name: "Azithromycin 500mg",
        nameType: "generic",
        dose: "500mg",
        duration: "5 days",
        instructions: "Once daily"
      },
      {
        route: "PO",
        name: "Paracetamol 500mg",
        nameType: "generic",
        dose: "500mg",
        duration: "5 days",
        instructions: "Three times daily when needed"
      }
    ],
    advice: [
      "পর্যাপ্ত বিশ্রাম নিন",
      "শ্বাসকষ্ট বাড়লে দ্রুত হাসপাতালে যান",
      "৭ দিন পর পুনরায় দেখান"
    ]
  },
  // GASTROINTESTINAL
  {
    id: "tt4",
    name: "Acute Gastroenteritis",
    diagnosis: "Gastroenteritis / পেটের পীড়া",
    category: "Gastrointestinal",
    drugs: [
      {
        route: "PO",
        name: "Metronidazole 400mg",
        nameType: "generic",
        dose: "400mg",
        duration: "5 days",
        instructions: "Three times daily after meal"
      },
      {
        route: "PO",
        name: "Domperidone 10mg",
        nameType: "generic",
        dose: "10mg",
        duration: "5 days",
        instructions: "Three times daily before meal"
      },
      {
        route: "PO",
        name: "ORS",
        nameType: "generic",
        dose: "1 sachet",
        duration: "3 days",
        instructions: "After each loose stool"
      }
    ],
    advice: ["প্রচুর পানি ও স্যালাইন পান করুন", "বাইরের খাবার এড়িয়ে চলুন", "হালকা খাবার খান"]
  },
  {
    id: "tt5",
    name: "Peptic Ulcer Disease",
    diagnosis: "Peptic Ulcer / গ্যাস্ট্রিক আলসার",
    category: "Gastrointestinal",
    drugs: [
      {
        route: "PO",
        name: "Omeprazole 20mg",
        nameType: "generic",
        dose: "20mg",
        duration: "4 weeks",
        instructions: "Once daily before breakfast"
      },
      {
        route: "PO",
        name: "Amoxicillin 1g",
        nameType: "generic",
        dose: "1g",
        duration: "7 days",
        instructions: "Twice daily after meal"
      },
      {
        route: "PO",
        name: "Clarithromycin 500mg",
        nameType: "generic",
        dose: "500mg",
        duration: "7 days",
        instructions: "Twice daily after meal"
      }
    ],
    advice: [
      "তৈলাক্ত ও মশলাদার খাবার পরিহার করুন",
      "চা-কফি কম পান করুন",
      "১ মাস পর পুনরায় দেখান"
    ]
  },
  // FEVER & INFECTION
  {
    id: "tt6",
    name: "Typhoid Fever",
    diagnosis: "Typhoid / টাইফয়েড জ্বর",
    category: "Infection",
    drugs: [
      {
        route: "PO",
        name: "Ciprofloxacin 500mg",
        nameType: "generic",
        dose: "500mg",
        duration: "10 days",
        instructions: "Twice daily after meal"
      },
      {
        route: "PO",
        name: "Paracetamol 500mg",
        nameType: "generic",
        dose: "500mg",
        duration: "7 days",
        instructions: "Three times daily when fever"
      }
    ],
    advice: [
      "বিছানায় সম্পূর্ণ বিশ্রাম নিন",
      "হালকা ও সহজপাচ্য খাবার খান",
      "জ্বর বাড়লে দ্রুত যোগাযোগ করুন"
    ]
  },
  {
    id: "tt7",
    name: "Dengue Fever",
    diagnosis: "Dengue / ডেঙ্গু জ্বর",
    category: "Infection",
    drugs: [
      {
        route: "PO",
        name: "Paracetamol 500mg",
        nameType: "generic",
        dose: "500mg",
        duration: "5 days",
        instructions: "Three times daily when fever"
      }
    ],
    advice: [
      "প্রচুর পানি পান করুন",
      "NSAIDs (Ibuprofen/Aspirin) সেবন করবেন না",
      "রক্তের CBC পরীক্ষা করুন",
      "জ্বর বাড়লে দ্রুত হাসপাতালে যান"
    ]
  },
  // DIABETES
  {
    id: "tt8",
    name: "Type 2 Diabetes (Initial)",
    diagnosis: "Type 2 Diabetes Mellitus / ডায়াবেটিস",
    category: "Diabetes",
    drugs: [
      {
        route: "PO",
        name: "Metformin 500mg",
        nameType: "generic",
        dose: "500mg",
        duration: "Continue",
        instructions: "Twice daily after meal"
      },
      {
        route: "PO",
        name: "Glibenclamide 5mg",
        nameType: "generic",
        dose: "5mg",
        duration: "Continue",
        instructions: "Once daily before breakfast"
      }
    ],
    advice: [
      "নিয়মিত রক্তের সুগার পরীক্ষা করুন",
      "মিষ্টি খাবার ও কার্বোহাইড্রেট কমিয়ে খান",
      "প্রতিদিন ৩০ মিনিট হাঁটুন",
      "১ মাস পর পুনরায় দেখান"
    ]
  },
  // HYPERTENSION
  {
    id: "tt9",
    name: "Essential Hypertension",
    diagnosis: "Hypertension / উচ্চ রক্তচাপ",
    category: "Cardiovascular",
    drugs: [
      {
        route: "PO",
        name: "Amlodipine 5mg",
        nameType: "generic",
        dose: "5mg",
        duration: "Continue",
        instructions: "Once daily after meal"
      },
      {
        route: "PO",
        name: "Enalapril 5mg",
        nameType: "generic",
        dose: "5mg",
        duration: "Continue",
        instructions: "Once daily"
      }
    ],
    advice: [
      "নিয়মিত রক্তচাপ পরিমাপ করুন",
      "লবণ খাওয়া কমিয়ে দিন",
      "মানসিক চাপ এড়িয়ে চলুন",
      "১ মাস পর পুনরায় দেখান"
    ]
  },
  // PAIN
  {
    id: "tt10",
    name: "Musculoskeletal Pain",
    diagnosis: "Musculoskeletal Pain / ব্যথা",
    category: "Pain",
    drugs: [
      {
        route: "PO",
        name: "Diclofenac 50mg",
        nameType: "generic",
        dose: "50mg",
        duration: "5 days",
        instructions: "Twice daily after meal"
      },
      {
        route: "PO",
        name: "Omeprazole 20mg",
        nameType: "generic",
        dose: "20mg",
        duration: "5 days",
        instructions: "Once daily before meal (gastroprotection)"
      },
      {
        route: "Topical",
        name: "Diclofenac Gel",
        nameType: "generic",
        dose: "Apply locally",
        duration: "5 days",
        instructions: "Three times daily on affected area"
      }
    ],
    advice: [
      "আক্রান্ত স্থানে বিশ্রাম দিন",
      "গরম সেঁক দিতে পারেন",
      "পরিশ্রমের কাজ এড়িয়ে চলুন"
    ]
  },
  // SKIN
  {
    id: "tt11",
    name: "Allergic Dermatitis",
    diagnosis: "Allergic Dermatitis / এলার্জি",
    category: "Skin",
    drugs: [
      {
        route: "PO",
        name: "Cetirizine 10mg",
        nameType: "generic",
        dose: "10mg",
        duration: "7 days",
        instructions: "Once daily at night"
      },
      {
        route: "PO",
        name: "Prednisolone 10mg",
        nameType: "generic",
        dose: "10mg",
        duration: "5 days",
        instructions: "Once daily after breakfast"
      },
      {
        route: "Topical",
        name: "Hydrocortisone cream 1%",
        nameType: "generic",
        dose: "Apply thinly",
        duration: "7 days",
        instructions: "Twice daily on affected area"
      }
    ],
    advice: [
      "অ্যালার্জেন থেকে দূরে থাকুন",
      "ধূলো ও ধোঁয়া এড়িয়ে চলুন",
      "৭ দিন পর পুনরায় দেখান"
    ]
  },
  // UTI
  {
    id: "tt12",
    name: "Urinary Tract Infection",
    diagnosis: "UTI / মূত্রনালীর সংক্রমণ",
    category: "Urology",
    drugs: [
      {
        route: "PO",
        name: "Ciprofloxacin 500mg",
        nameType: "generic",
        dose: "500mg",
        duration: "5 days",
        instructions: "Twice daily after meal"
      },
      {
        route: "PO",
        name: "Phenazopyridine 200mg",
        nameType: "generic",
        dose: "200mg",
        duration: "2 days",
        instructions: "Three times daily after meal"
      }
    ],
    advice: [
      "প্রচুর পানি পান করুন",
      "পরিষ্কার-পরিচ্ছন্নতা বজায় রাখুন",
      "প্রস্রাব পরীক্ষা করুন (C/S)"
    ]
  }
];
const CUSTOM_KEY = "medicare_custom_treatment_templates";
function getCustomTreatmentTemplates() {
  try {
    const raw = localStorage.getItem(CUSTOM_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
const SMART_TEMPLATES = [
  {
    id: "smart_dka",
    name: "Diabetic Ketoacidosis (DKA)",
    diagnosis: "DKA / Diabetic Ketoacidosis",
    category: "Diabetes",
    drugs: [
      {
        route: "IV",
        name: "Normal Saline 0.9%",
        nameType: "generic",
        dose: "1 L",
        duration: "first hour",
        instructions: "IV infusion — fluid resuscitation"
      },
      {
        route: "IV",
        name: "Regular Insulin (Actrapid)",
        nameType: "brand",
        dose: "0.1 unit/kg/hr",
        duration: "until DKA resolved",
        instructions: "IV infusion — monitor glucose hourly"
      },
      {
        route: "IV",
        name: "Potassium Chloride (KCl)",
        nameType: "generic",
        dose: "20-40 mEq/L",
        duration: "as needed",
        instructions: "Add to IV fluid when K+ < 5.5 mEq/L"
      }
    ],
    advice: [
      "Monitor blood glucose hourly",
      "Check electrolytes every 2-4 hours",
      "Transition to S/C insulin when DKA resolved",
      "Identify and treat precipitating cause"
    ]
  },
  {
    id: "smart_sepsis",
    name: "Sepsis / Septicaemia",
    diagnosis: "Sepsis / সেপসিস",
    category: "Infectious",
    drugs: [
      {
        route: "IV",
        name: "Ceftriaxone 2g",
        nameType: "generic",
        dose: "2g",
        duration: "7-10 days",
        instructions: "Once daily IV — start within 1 hour of diagnosis"
      },
      {
        route: "IV",
        name: "Metronidazole 500mg",
        nameType: "generic",
        dose: "500mg",
        duration: "7 days",
        instructions: "8-hourly if abdominal source suspected"
      },
      {
        route: "IV",
        name: "Normal Saline 0.9%",
        nameType: "generic",
        dose: "30 mL/kg",
        duration: "first 3 hours",
        instructions: "IV fluid resuscitation bolus"
      },
      {
        route: "IV",
        name: "Paracetamol 1g",
        nameType: "generic",
        dose: "1g",
        duration: "as needed",
        instructions: "6-hourly for fever"
      }
    ],
    advice: [
      "Sepsis bundle: blood cultures before antibiotics",
      "Monitor urine output hourly",
      "Check lactate and repeat in 2h if >2 mmol/L",
      "Reassess antibiotic at 48-72h based on culture"
    ]
  },
  {
    id: "smart_postop",
    name: "Post-operative Day 1 (General Surgery)",
    diagnosis: "Post-op / Post-operative Care",
    category: "Surgical",
    drugs: [
      {
        route: "IV",
        name: "Ceftriaxone 1g",
        nameType: "generic",
        dose: "1g",
        duration: "3 days",
        instructions: "Once daily IV — prophylaxis"
      },
      {
        route: "IV",
        name: "Metronidazole 500mg",
        nameType: "generic",
        dose: "500mg",
        duration: "3 days",
        instructions: "8-hourly IV"
      },
      {
        route: "IV",
        name: "Ketorolac 30mg",
        nameType: "generic",
        dose: "30mg",
        duration: "2 days",
        instructions: "8-hourly IV — post-op analgesia"
      },
      {
        route: "IV",
        name: "Pantoprazole 40mg",
        nameType: "generic",
        dose: "40mg",
        duration: "5 days",
        instructions: "Once daily IV — GI protection"
      },
      {
        route: "IV",
        name: "Normal Saline 0.9%",
        nameType: "generic",
        dose: "125 mL/hr",
        duration: "as ordered",
        instructions: "IV maintenance fluid"
      }
    ],
    advice: [
      "Strict I/O chart monitoring",
      "Wound inspection daily",
      "Incentive spirometry every 2 hours (prevent atelectasis)",
      "Ambulate day 1 if stable",
      "Oral feeds when bowel sounds return"
    ]
  }
];
function getAllTreatmentTemplates() {
  return [
    ...TREATMENT_TEMPLATES,
    ...SMART_TEMPLATES,
    ...getCustomTreatmentTemplates()
  ];
}
function searchTreatmentTemplates(query) {
  if (query.length < 2) return [];
  const q = query.toLowerCase();
  return getAllTreatmentTemplates().filter(
    (t) => t.name.toLowerCase().includes(q) || t.diagnosis.toLowerCase().includes(q) || t.category.toLowerCase().includes(q)
  );
}
class PrescriptionErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      message: error instanceof Error ? error.message : String(error)
    };
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-50 p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md w-full bg-white rounded-xl border border-red-200 p-6 shadow-lg text-center space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-600 font-semibold text-lg", children: "Prescription & EMR failed to load" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 bg-red-50 rounded p-3 text-left font-mono break-all", children: this.state.message }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: this.props.onCancel,
            className: "px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 text-sm font-medium",
            children: "Close"
          }
        )
      ] }) });
    }
    return this.props.children;
  }
}
const DRUG_INTERACTION_PAIRS = [
  {
    drugs: ["warfarin", "aspirin"],
    message: "Warfarin + Aspirin: Increased bleeding risk. Monitor INR closely."
  },
  {
    drugs: ["metformin", "contrast", "iodine"],
    message: "Metformin + Contrast/Iodine: Risk of contrast-induced nephropathy and lactic acidosis. Hold Metformin."
  },
  {
    drugs: [
      "ace",
      "ramipril",
      "lisinopril",
      "enalapril",
      "spironolactone",
      "eplerenone"
    ],
    message: "ACE Inhibitor + K+ sparing diuretic: Risk of hyperkalemia. Monitor potassium levels."
  },
  {
    drugs: ["ciprofloxacin", "antacid", "aluminium", "magnesium"],
    message: "Ciprofloxacin + Antacids: Antacids reduce ciprofloxacin absorption. Give 2 hours apart."
  },
  {
    drugs: ["ssri", "fluoxetine", "sertraline", "tramadol"],
    message: "SSRI + Tramadol: Risk of serotonin syndrome. Monitor for agitation, tremor, tachycardia."
  },
  {
    drugs: [
      "nsaid",
      "ibuprofen",
      "naproxen",
      "diclofenac",
      "warfarin",
      "heparin",
      "anticoagulant"
    ],
    message: "NSAID + Anticoagulant: Significantly increased bleeding risk."
  }
];
const DRUG_FORMS = ["Tab.", "Cap.", "Syp.", "Inj.", "Inf.", "Supp.", ""];
const ROUTES_BN = [
  { en: "PO", bn: "মুখে" },
  { en: "IV", bn: "শিরায়" },
  { en: "IM", bn: "মাংসপেশিতে" },
  { en: "SC", bn: "চামড়ার নিচে" },
  { en: "Topical", bn: "স্থানীয়" },
  { en: "Rectal", bn: "মলদ্বারে" },
  { en: "SL", bn: "জিহ্বার নিচে" },
  { en: "Inhalation", bn: "শ্বাসের মাধ্যমে" }
];
const FREQUENCY_PRESETS = [
  { en: "Once daily", bn: "দিনে ১ বার" },
  { en: "BD 1+0+1", bn: "সকাল-রাত ১+০+১" },
  { en: "TDS 1+1+1", bn: "সকাল-দুপুর-রাত ১+১+১" },
  { en: "QDS 1+1+1+1", bn: "৬ ঘণ্টা পর পর" },
  { en: "8 hourly", bn: "৮ ঘণ্টা পর পর" },
  { en: "12 hourly", bn: "১২ ঘণ্টা পর পর" },
  { en: "At night", bn: "রাতে ঘুমানোর আগে" },
  { en: "SOS", bn: "প্রয়োজনে" }
];
const DURATION_PRESETS = [
  { en: "3 days", bn: "৩ দিন" },
  { en: "5 days", bn: "৫ দিন" },
  { en: "7 days", bn: "৭ দিন" },
  { en: "10 days", bn: "১০ দিন" },
  { en: "14 days", bn: "১৪ দিন" },
  { en: "1 month", bn: "১ মাস" },
  { en: "Continue", bn: "চলমান" }
];
const INSTRUCTION_PRESETS = [
  { en: "After meal", bn: "খাবার পরে" },
  { en: "Before meal", bn: "খাবার আগে" },
  { en: "Empty stomach", bn: "খালি পেটে" },
  { en: "With water", bn: "পানির সাথে" },
  { en: "With milk", bn: "দুধের সাথে" }
];
const ADVICE_CATEGORIES = [
  "সব",
  "বিশ্রাম",
  "ওষুধ",
  "খাদ্য ও পানীয়",
  "জীবনযাত্রা",
  "ফলো-আপ",
  "সতর্কতা",
  "Custom"
];
function drugFromTreatmentDrug(td) {
  var _a;
  return {
    id: Math.random().toString(36).slice(2),
    drugForm: "Tab.",
    route: td.route,
    routeBn: ((_a = ROUTES_BN.find((r) => r.en === td.route)) == null ? void 0 : _a.bn) || "মুখে",
    drugName: td.name,
    brandName: "",
    nameType: td.nameType,
    dose: td.dose,
    duration: td.duration,
    durationBn: "",
    instructions: td.instructions,
    instructionBn: "",
    frequency: "",
    frequencyBn: "",
    specialInstruction: "",
    specialInstructionBn: ""
  };
}
function getAllergiesForPatient(patientAllergies, visitExtendedData) {
  const set = /* @__PURE__ */ new Set();
  for (const a of patientAllergies) {
    if (a.trim()) set.add(a.trim().toLowerCase());
  }
  if (visitExtendedData) {
    const hist = visitExtendedData.historyAllergy;
    const histArr = visitExtendedData.allergyHistory;
    if (hist) {
      for (const s of hist.split(/[,;/\n]/).map((x) => x.trim()).filter(Boolean)) {
        set.add(s.toLowerCase());
      }
    }
    if (Array.isArray(histArr)) {
      for (const s of histArr.filter(Boolean)) {
        set.add(s.trim().toLowerCase());
      }
    }
  }
  return Array.from(set);
}
function checkDrugAllergyMatch(drugName, allergies) {
  if (!drugName || allergies.length === 0) return null;
  const normalized = drugName.trim().toLowerCase();
  for (const allergy of allergies) {
    if (!allergy) continue;
    if (normalized.includes(allergy) || allergy.includes(normalized)) {
      return allergy;
    }
  }
  return null;
}
function populateFromVisitData(vd, patientWeight) {
  var _a, _b, _c;
  const ccLines = [];
  const chiefComplaints = vd.chiefComplaints;
  const complaintAnswers = vd.complaintAnswers;
  if (chiefComplaints) {
    chiefComplaints.forEach((complaint, i) => {
      const rawAnswers = complaintAnswers == null ? void 0 : complaintAnswers[complaint];
      let answers = [];
      if (rawAnswers && typeof rawAnswers === "object" && !Array.isArray(rawAnswers)) {
        answers = Object.values(rawAnswers).filter(
          (v) => v && v !== "-" && v !== "No" && v !== "None"
        );
      } else if (Array.isArray(rawAnswers)) {
        answers = rawAnswers.filter(Boolean);
      } else if (typeof rawAnswers === "string" && rawAnswers) {
        answers = [rawAnswers];
      }
      if (answers.length > 0) {
        ccLines.push(`${i + 1}. ${complaint} — ${answers.join(", ")}.`);
      } else {
        ccLines.push(`${i + 1}. ${complaint}.`);
      }
    });
  }
  const sra = vd.systemReviewAnswers;
  if (sra) {
    const NEGATIVE = /* @__PURE__ */ new Set(["Normal", "None", "No", "Absent", "-", ""]);
    const positive = Object.entries(sra).filter(
      ([, v]) => v && !NEGATIVE.has(v)
    );
    for (const [k, v] of positive) {
      ccLines.push(`• He/she also complains of ${k}: ${v}`);
    }
  }
  const pmhLines = [];
  const pmhAll = vd.pastMedicalHistoryAll;
  const pmh = vd.pastMedicalHistory;
  const surgical = vd.surgicalHistory;
  const pastSurgical = vd.pastSurgicalHistory;
  if (pmhAll) {
    const pos = Object.entries(pmhAll).map(([k, v]) => `${k}${v === "+" ? "+" : v === "-" ? "-" : ""}`).join(", ");
    if (pos) pmhLines.push(pos);
  } else if (Array.isArray(pmh) && pmh.length > 0) {
    pmhLines.push(pmh.join(", "));
  } else if (typeof pmh === "string" && pmh) {
    pmhLines.push(pmh);
  }
  if (surgical && surgical.length > 0) {
    pmhLines.push(`Surgical: ${surgical.join(", ")}`);
  } else if (pastSurgical) {
    pmhLines.push(`Surgical: ${pastSurgical}`);
  }
  const histPersonal = vd.historyPersonal || (((_a = vd.personalHistory) == null ? void 0 : _a.filter(Boolean).join(", ")) ?? "");
  const histFamily = vd.historyFamily || (((_b = vd.familyHistory) == null ? void 0 : _b.filter(Boolean).join(", ")) ?? "");
  let histImmunization = vd.historyImmunization || "";
  if (!histImmunization) {
    const immunParts = [];
    if (vd.epiSchedule === "yes") {
      immunParts.push("Immunised as per EPI schedule.");
    }
    const immunArr = vd.immunizationHistory;
    if (immunArr) {
      immunParts.push(...immunArr.filter(Boolean));
    }
    histImmunization = immunParts.join(" ");
  }
  const histAllergy = vd.historyAllergy || (((_c = vd.allergyHistory) == null ? void 0 : _c.filter(Boolean).join(", ")) ?? "");
  const histObstetricArr = vd.obstetricHistory;
  const histGynaeArr = vd.gynaecologicalHistory;
  const histObstetric = vd.historyObstetric || ((histObstetricArr == null ? void 0 : histObstetricArr.filter(Boolean).join(", ")) ?? "");
  const histGynae = vd.historyGynaecological || ((histGynaeArr == null ? void 0 : histGynaeArr.filter(Boolean).join(", ")) ?? "");
  let histOthers = "";
  if (histObstetric) histOthers += `Obstetric: ${histObstetric}
`;
  if (histGynae) histOthers += `Gynaecological: ${histGynae}
`;
  const dhDrugs = vd.drugHistory;
  const dhParts = [];
  if (dhDrugs && dhDrugs.length > 0) {
    for (const d of dhDrugs) {
      if (d.name) {
        const parts = [d.type || "", d.name, d.dose, d.duration || d.frequency].filter(Boolean).join(" ");
        dhParts.push(parts.trim());
      }
    }
  }
  const oeLines = [];
  const vs = vd.vitalSigns;
  let hasAnyFindings = false;
  if (vs) {
    const vsParts = [];
    if (vs.bloodPressure) {
      const bpMatch = vs.bloodPressure.match(/(\d+)\/(\d+)/);
      if (bpMatch) {
        const sbp = Number(bpMatch[1]);
        const dbp = Number(bpMatch[2]);
        const map = Math.round(dbp + (sbp - dbp) / 3);
        vsParts.push(`BP: ${vs.bloodPressure} mmHg (MAP: ${map} mmHg)`);
      } else {
        vsParts.push(`BP: ${vs.bloodPressure} mmHg`);
      }
    }
    if (vs.pulse) vsParts.push(`Pulse: ${vs.pulse} /min`);
    if (vs.temperature) vsParts.push(`Temp: ${vs.temperature}°F`);
    if (vs.oxygenSaturation) vsParts.push(`SpO₂: ${vs.oxygenSaturation}%`);
    if (vs.respiratoryRate) vsParts.push(`RR: ${vs.respiratoryRate} /min`);
    if (patientWeight) vsParts.push(`Wt: ${patientWeight} kg`);
    if (vsParts.length > 0) {
      oeLines.push(vsParts.join(", "));
      hasAnyFindings = true;
    }
  } else if (patientWeight) {
    oeLines.push(`Wt: ${patientWeight} kg`);
    hasAnyFindings = true;
  }
  let heartLungAdded = false;
  const genExam = vd.generalExamFindings;
  if (genExam) {
    const pos = Object.entries(genExam).filter(
      ([, v]) => v && v !== "Normal" && v !== "None" && v !== "No" && v !== "Absent" && v !== "-"
    ).map(([k, v]) => `${k}: ${v}`);
    if (pos.length > 0) {
      if (!heartLungAdded) {
        oeLines.push("Heart: S1+S2+0, Lung: Clear");
        heartLungAdded = true;
      }
      oeLines.push(`General: ${pos.join("; ")}`);
      hasAnyFindings = true;
    }
  }
  const sysExam = vd.systemicExamFindings;
  if (sysExam) {
    const pos = Object.entries(sysExam).filter(([, v]) => v && v !== "Normal" && v !== "None" && v !== "-").map(([k, v]) => `${k}: ${v}`);
    if (pos.length > 0) {
      if (!heartLungAdded) {
        oeLines.push("Heart: S1+S2+0, Lung: Clear");
        heartLungAdded = true;
      }
      oeLines.push(`Systemic: ${pos.join("; ")}`);
      hasAnyFindings = true;
    }
  }
  const specialtyExams = [
    { key: "respiratoryExam", label: "Respiratory" },
    { key: "cardiovascularExam", label: "CVS" },
    { key: "neurologicalExam", label: "Neurological" },
    { key: "gastrointestinalExam", label: "GI" },
    { key: "musculoskeletalExam", label: "MSK" }
  ];
  for (const { key, label } of specialtyExams) {
    const examData = vd[key];
    if (examData) {
      const findings = Object.entries(examData).filter(([, v]) => v && v !== "Normal" && v !== "None" && v !== "-").map(([k, v]) => `${k}: ${v}`);
      if (findings.length > 0) {
        if (!heartLungAdded) {
          oeLines.push("Heart: S1+S2+0, Lung: Clear");
          heartLungAdded = true;
        }
        oeLines.push(`${label}: ${findings.join("; ")}`);
        hasAnyFindings = true;
      }
    }
  }
  if (oeLines.length > 0 && !heartLungAdded) {
    oeLines.push("Heart: S1+S2+0, Lung: Clear");
    heartLungAdded = true;
  }
  if (!hasAnyFindings && oeLines.length === 0) {
    oeLines.push("Heart: S1+S2+0, Lung: Clear, P/A: NAD");
  }
  const invRows = vd.previousInvestigationRows || vd.previous_investigation_rows;
  let invText = "";
  if (invRows && invRows.length > 0) {
    const grouped = {};
    for (const r of invRows) {
      if (!r.name || !r.result) continue;
      const d = r.date || "Unknown";
      if (!grouped[d]) grouped[d] = [];
      grouped[d].push(`${r.name} - ${r.result}${r.unit ? r.unit : ""}`);
    }
    const sorted = Object.entries(grouped).sort(
      ([a], [b]) => b.localeCompare(a)
    );
    invText = sorted.map(([date, items]) => `${date}: ${items.join(", ")}`).join("\n");
  }
  return {
    cc: ccLines.join("\n"),
    pmh: pmhLines.join("\n"),
    histPersonal,
    histFamily,
    histImmunization,
    histAllergy,
    histOthers: histOthers.trim(),
    dh: dhParts.join(", "),
    oe: oeLines.join("\n"),
    investigation: invText,
    adviceNewInv: vd.investigationAdvice || ""
  };
}
function UpgradedPrescriptionEMR(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PrescriptionErrorBoundary, { onCancel: props.onCancel, children: /* @__PURE__ */ jsxRuntimeExports.jsx(UpgradedPrescriptionEMRInner, { ...props }) });
}
function UpgradedPrescriptionEMRInner(props) {
  const {
    patientId,
    visitId,
    patientName,
    patientAge,
    patientGender,
    patientWeight,
    patientHeight,
    patientAddress,
    patientBloodGroup,
    registerNumber,
    initialDiagnosis,
    visitExtendedData,
    patientRegisterNumber,
    forceVisitData,
    patientAllergies,
    isAdmitted: _isAdmitted,
    hospitalName: _hospitalName,
    onSubmit,
    onCancel,
    isLoading
  } = props;
  const { currentDoctor } = useEmailAuth();
  const userRole = (currentDoctor == null ? void 0 : currentDoctor.role) ?? "doctor";
  const isIntern = userRole === "intern_doctor";
  const canEditHeader = userRole === "admin" || userRole === "consultant_doctor" || userRole === "doctor";
  const DRAFT_KEY = `medicare_rx_draft_${patientId}`;
  const [allergyAlert, setAllergyAlert] = reactExports.useState(null);
  const [showOverrideForm, setShowOverrideForm] = reactExports.useState(false);
  const [overrideJustification, setOverrideJustification] = reactExports.useState("");
  const unifiedAllergies = getAllergiesForPatient(
    patientAllergies ?? [],
    visitExtendedData
  );
  const [dark, setDark] = reactExports.useState(false);
  const [headerType, setHeaderType] = reactExports.useState(
    _isAdmitted ? "hospital" : "chamber"
  );
  const [withHeader, setWithHeader] = reactExports.useState(true);
  const [showPreview, setShowPreview] = reactExports.useState(false);
  const [showHeaderUpload, setShowHeaderUpload] = reactExports.useState(false);
  const [hospitalHeaderImg, setHospitalHeaderImg] = reactExports.useState(
    () => getPrescriptionHeaderImage("hospital")
  );
  const [chamberHeaderImg, setChamberHeaderImg] = reactExports.useState(
    () => getPrescriptionHeaderImage("chamber")
  );
  const [signatureUrl, setSignatureUrl] = reactExports.useState(
    () => getDoctorSignature()
  );
  const sigFileRef = reactExports.useRef(null);
  const [showDraftModal, setShowDraftModal] = reactExports.useState(false);
  const [_showApprovalDialog, _setShowApprovalDialog] = reactExports.useState(false);
  const [_approvalComment, _setApprovalComment] = reactExports.useState("");
  const [name, setName] = reactExports.useState(patientName ?? "");
  const [age, setAge] = reactExports.useState(patientAge != null ? String(patientAge) : "");
  const [sex, setSex] = reactExports.useState(patientGender ?? "");
  const [weight, setWeight] = reactExports.useState(patientWeight ?? "");
  const [rxDate, setRxDate] = reactExports.useState(
    () => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
  );
  const [regNo, setRegNo] = reactExports.useState(
    patientRegisterNumber ?? registerNumber ?? ""
  );
  const [address, setAddress] = reactExports.useState(patientAddress ?? "");
  const [bloodGroup, setBloodGroup] = reactExports.useState(patientBloodGroup ?? "");
  const [cc, setCc] = reactExports.useState("");
  const [pmh, setPmh] = reactExports.useState("");
  const [historyPersonal, setHistoryPersonal] = reactExports.useState("");
  const [historyFamily, setHistoryFamily] = reactExports.useState("");
  const [historyImmunization, setHistoryImmunization] = reactExports.useState("");
  const [historyAllergy, setHistoryAllergy] = reactExports.useState("");
  const [historyOthers, setHistoryOthers] = reactExports.useState("");
  const [dh, setDh] = reactExports.useState("");
  const [oe, setOe] = reactExports.useState("");
  const [investigation, setInvestigation] = reactExports.useState("");
  const [adviceNewInv, setAdviceNewInv] = reactExports.useState("");
  const [diagnoses, setDiagnoses] = reactExports.useState(
    initialDiagnosis ? [initialDiagnosis] : []
  );
  const [diagnosis, setDiagnosis] = reactExports.useState(initialDiagnosis ?? "");
  const [diagnosisQuery, setDiagnosisQuery] = reactExports.useState("");
  const [diagnosisSuggestions, setDiagnosisSuggestions] = reactExports.useState([]);
  const [showDiagnosisDrop, setShowDiagnosisDrop] = reactExports.useState(false);
  const [dimsActive, setDimsActive] = reactExports.useState(false);
  const [rxDrugs, setRxDrugs] = reactExports.useState([]);
  const [editingDrugId, setEditingDrugId] = reactExports.useState(null);
  const [drugForm, setDrugForm] = reactExports.useState("Tab.");
  const [drugRoute, setDrugRoute] = reactExports.useState("PO");
  const [drugName, setDrugName] = reactExports.useState("");
  const [drugBrandName, setDrugBrandName] = reactExports.useState("");
  const [drugNameType] = reactExports.useState("generic");
  const [drugDose, setDrugDose] = reactExports.useState("");
  const [drugDuration, setDrugDuration] = reactExports.useState("");
  const [drugDurationBn, setDrugDurationBn] = reactExports.useState("");
  const [drugInstructions, setDrugInstructions] = reactExports.useState("");
  const [drugInstructionBn, setDrugInstructionBn] = reactExports.useState("");
  const [drugFrequency, setDrugFrequency] = reactExports.useState("");
  const [drugFrequencyBn, setDrugFrequencyBn] = reactExports.useState("");
  const [drugSpecialInstruction, setDrugSpecialInstruction] = reactExports.useState("");
  const [drugSpecialInstructionBn, setDrugSpecialInstructionBn] = reactExports.useState("");
  const [drugIsPrn, setDrugIsPrn] = reactExports.useState(false);
  const [drugPrnCondition, setDrugPrnCondition] = reactExports.useState("");
  const [drugDispensedAs, setDrugDispensedAs] = reactExports.useState("");
  const [drugSubstitutedBrand, setDrugSubstitutedBrand] = reactExports.useState("");
  const [discDialogDrugId, setDiscDialogDrugId] = reactExports.useState(null);
  const [discDialogDrugName, setDiscDialogDrugName] = reactExports.useState("");
  const [treatmentQuery, setTreatmentQuery] = reactExports.useState("");
  const [treatmentResults, setTreatmentResults] = reactExports.useState(
    []
  );
  const [showTreatmentSection, setShowTreatmentSection] = reactExports.useState(false);
  const [adviceText, setAdviceText] = reactExports.useState("");
  const [followUpDate, setFollowUpDate] = reactExports.useState("");
  const [adviceQuery, setAdviceQuery] = reactExports.useState("");
  const [adviceCategory, setAdviceCategory] = reactExports.useState("সব");
  const [allTemplates, setAllTemplates] = reactExports.useState([]);
  const [showCustomForm, setShowCustomForm] = reactExports.useState(false);
  const [customText, setCustomText] = reactExports.useState("");
  const [customCategory, setCustomCategory] = reactExports.useState("Custom");
  const [showCalculator, setShowCalculator] = reactExports.useState(false);
  const [calcTab, setCalcTab] = reactExports.useState("dose-weight");
  const [calcDosePerKg, setCalcDosePerKg] = reactExports.useState("");
  const [calcWeightKg, setCalcWeightKg] = reactExports.useState(patientWeight ?? "");
  const [calcAdultDose, setCalcAdultDose] = reactExports.useState("");
  const [calcAgeYears, setCalcAgeYears] = reactExports.useState(
    patientAge != null ? String(patientAge) : ""
  );
  const [calcCrClAge, setCalcCrClAge] = reactExports.useState(
    patientAge != null ? String(patientAge) : ""
  );
  const [calcCrClWeight, setCalcCrClWeight] = reactExports.useState(patientWeight ?? "");
  const [calcCrClSex, setCalcCrClSex] = reactExports.useState("M");
  const [calcCrClCreat, setCalcCrClCreat] = reactExports.useState("");
  const [calcBmiWeight, setCalcBmiWeight] = reactExports.useState(patientWeight ?? "");
  const [calcBmiHeight, setCalcBmiHeight] = reactExports.useState(
    patientHeight ? String(patientHeight) : ""
  );
  const [calcBsaWeight, setCalcBsaWeight] = reactExports.useState(patientWeight ?? "");
  const [calcBsaHeight, setCalcBsaHeight] = reactExports.useState("");
  const [calcFluidWeight, setCalcFluidWeight] = reactExports.useState(patientWeight ?? "");
  const [calcMapSbp, setCalcMapSbp] = reactExports.useState("");
  const [calcMapDbp, setCalcMapDbp] = reactExports.useState("");
  const [lastCalculatorResult, setLastCalculatorResult] = reactExports.useState("");
  const debounceRef = reactExports.useRef(null);
  function getLinkedInvestigationText() {
    const tracked = loadTrackedInvestigations(String(patientId));
    const linked = tracked.filter((t) => t.linkedToPrescription && t.result);
    if (linked.length === 0) return "";
    const lines = linked.map((t) => {
      const r = t.result;
      const dateStr = new Date(r.recordedAt).toISOString().split("T")[0];
      return `${dateStr}: ${t.name} - ${r.value}${r.unit ? ` ${r.unit}` : ""}${r.interpretation !== "Normal" ? ` (${r.interpretation})` : ""}`;
    });
    return lines.join("\n");
  }
  function applyVisitData(vd) {
    const pop = populateFromVisitData(vd, patientWeight);
    if (pop.cc) setCc(pop.cc);
    if (pop.pmh) setPmh(pop.pmh);
    if (pop.histPersonal) setHistoryPersonal(pop.histPersonal);
    if (pop.histFamily) setHistoryFamily(pop.histFamily);
    if (pop.histImmunization) setHistoryImmunization(pop.histImmunization);
    if (pop.histAllergy) setHistoryAllergy(pop.histAllergy);
    if (pop.histOthers) setHistoryOthers(pop.histOthers);
    if (pop.dh) setDh(pop.dh);
    if (pop.oe) setOe(pop.oe);
    const linkedText = getLinkedInvestigationText();
    const combined = [pop.investigation, linkedText].filter(Boolean).join("\n");
    if (combined) setInvestigation(combined);
    if (pop.adviceNewInv) setAdviceNewInv(pop.adviceNewInv);
  }
  reactExports.useEffect(() => {
    try {
      if (forceVisitData && visitExtendedData && typeof visitExtendedData === "object") {
        applyVisitData(visitExtendedData);
      } else {
        const raw = localStorage.getItem(DRAFT_KEY);
        if (raw) {
          try {
            const d = JSON.parse(raw);
            if (d && typeof d === "object") {
              if (d.cc) setCc(d.cc);
              if (d.pmh) setPmh(d.pmh);
              if (d.dh) setDh(d.dh);
              if (d.oe) setOe(d.oe);
              const linkedText = getLinkedInvestigationText();
              const mergedInv = [d.investigation, linkedText].filter(Boolean).join("\n");
              if (mergedInv) setInvestigation(mergedInv);
              if (d.adviceNewInv) setAdviceNewInv(d.adviceNewInv);
              if (d.adviceText) setAdviceText(d.adviceText);
              if (d.followUpDate) setFollowUpDate(d.followUpDate);
              if (d.diagnoses) setDiagnoses(d.diagnoses);
              else if (d.diagnosis) setDiagnoses([d.diagnosis]);
              if (d.diagnosis) setDiagnosis(d.diagnosis);
              if (d.rxDrugs) setRxDrugs(d.rxDrugs);
            }
          } catch {
          }
        } else if (visitExtendedData && typeof visitExtendedData === "object") {
          applyVisitData(visitExtendedData);
        }
      }
    } catch {
    }
    try {
      setAllTemplates(getAllTemplates());
    } catch {
    }
  }, [DRAFT_KEY]);
  const saveDraft = reactExports.useCallback(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      localStorage.setItem(
        DRAFT_KEY,
        JSON.stringify({
          cc,
          pmh,
          dh,
          oe,
          investigation,
          adviceNewInv,
          adviceText,
          followUpDate,
          diagnoses,
          diagnosis,
          rxDrugs
        })
      );
    }, 800);
  }, [
    DRAFT_KEY,
    cc,
    pmh,
    dh,
    oe,
    investigation,
    adviceNewInv,
    adviceText,
    followUpDate,
    diagnoses,
    diagnosis,
    rxDrugs
  ]);
  reactExports.useEffect(() => {
    saveDraft();
  }, [saveDraft]);
  reactExports.useEffect(() => {
    if (diagnosisQuery.length < 2) {
      setDiagnosisSuggestions([]);
      setShowDiagnosisDrop(false);
      return;
    }
    const dimsResults = searchDims(diagnosisQuery).map((e) => ({
      label: e.diagnosis,
      type: "DIMS",
      item: e
    }));
    const tplResults = searchTreatmentTemplates(diagnosisQuery).map((t) => ({
      label: t.diagnosis,
      type: "Template",
      item: t
    }));
    setDiagnosisSuggestions([...dimsResults, ...tplResults].slice(0, 10));
    setShowDiagnosisDrop(true);
  }, [diagnosisQuery]);
  reactExports.useEffect(() => {
    if (treatmentQuery.length < 2) {
      setTreatmentResults([]);
      return;
    }
    setTreatmentResults(searchTreatmentTemplates(treatmentQuery));
  }, [treatmentQuery]);
  function addDiagnosis(label) {
    if (!label.trim()) return;
    setDiagnoses((prev) => prev.includes(label) ? prev : [...prev, label]);
    setDiagnosis(label);
    setDiagnosisQuery("");
    setShowDiagnosisDrop(false);
  }
  function removeDiagnosis(label) {
    setDiagnoses((prev) => prev.filter((d) => d !== label));
  }
  function applyDiagnosisSuggestion(s) {
    addDiagnosis(s.label);
    if (s.type === "DIMS") {
      const entry = getDimsByDiagnosis(s.label);
      if (entry) {
        const drugs = entry.medications.map((m) => ({
          id: Math.random().toString(36).slice(2),
          drugForm: "Tab.",
          route: "PO",
          routeBn: "মুখে",
          drugName: m.name,
          brandName: "",
          nameType: "generic",
          dose: m.dose,
          duration: m.duration,
          durationBn: "",
          instructions: m.instructions,
          instructionBn: "",
          frequency: m.frequency,
          frequencyBn: "",
          specialInstruction: "",
          specialInstructionBn: ""
        }));
        setRxDrugs((prev) => [...prev, ...drugs]);
        setDimsActive(true);
      }
    } else {
      const tpl = s.item;
      addDiagnosis(tpl.diagnosis);
      setRxDrugs((prev) => [...prev, ...tpl.drugs.map(drugFromTreatmentDrug)]);
      if (tpl.advice)
        setAdviceText(
          (prev) => prev ? `${prev}
${tpl.advice.join("\n")}` : tpl.advice.join("\n")
        );
      setDimsActive(false);
    }
  }
  function applyTreatmentTemplate(tpl) {
    addDiagnosis(tpl.diagnosis);
    setRxDrugs((prev) => [...prev, ...tpl.drugs.map(drugFromTreatmentDrug)]);
    if (tpl.advice)
      setAdviceText(
        (prev) => prev ? `${prev}
${tpl.advice.join("\n")}` : tpl.advice.join("\n")
      );
    setTreatmentQuery("");
    setTreatmentResults([]);
    setDimsActive(false);
  }
  function loadDrugForEditing(drug) {
    setDrugForm(drug.drugForm || "Tab.");
    setDrugRoute(drug.route || "PO");
    setDrugName(drug.drugName);
    setDrugBrandName(drug.brandName || "");
    setDrugDose(drug.dose || "");
    setDrugDuration(drug.duration || "");
    setDrugDurationBn(drug.durationBn || "");
    setDrugInstructions(drug.instructions || "");
    setDrugInstructionBn(drug.instructionBn || "");
    setDrugFrequency(drug.frequency || "");
    setDrugFrequencyBn(drug.frequencyBn || "");
    setDrugSpecialInstruction(drug.specialInstruction || "");
    setDrugSpecialInstructionBn(drug.specialInstructionBn || "");
    setDrugIsPrn(drug.isPrn ?? false);
    setDrugPrnCondition(drug.prnCondition || "");
    setEditingDrugId(drug.id);
    setTimeout(() => {
      const el = document.getElementById("rx-med-form");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }
  function addDrug() {
    var _a, _b;
    if (!drugName.trim()) return;
    const matchedAllergen = checkDrugAllergyMatch(
      drugName.trim(),
      unifiedAllergies
    );
    if (editingDrugId) {
      const updatedDrug = {
        drugForm,
        route: drugRoute,
        routeBn: ((_a = ROUTES_BN.find((r) => r.en === drugRoute)) == null ? void 0 : _a.bn) || "মুখে",
        drugName: drugName.trim(),
        brandName: drugBrandName.trim(),
        dose: drugDose,
        duration: drugDuration,
        durationBn: drugDurationBn,
        instructions: drugInstructions,
        instructionBn: drugInstructionBn,
        frequency: drugFrequency,
        frequencyBn: drugFrequencyBn,
        specialInstruction: drugSpecialInstruction,
        specialInstructionBn: drugSpecialInstructionBn,
        isPrn: drugIsPrn,
        prnCondition: drugIsPrn ? drugPrnCondition : ""
      };
      if (matchedAllergen) {
        setAllergyAlert({
          drugId: editingDrugId,
          drugName: drugName.trim(),
          allergen: matchedAllergen
        });
        setShowOverrideForm(false);
        setOverrideJustification("");
      }
      setRxDrugs(
        (prev) => prev.map(
          (d) => d.id === editingDrugId ? { ...d, ...updatedDrug } : d
        )
      );
      setEditingDrugId(null);
      setDrugName("");
      setDrugBrandName("");
      setDrugDose("");
      setDrugDuration("");
      setDrugDurationBn("");
      setDrugInstructions("");
      setDrugInstructionBn("");
      setDrugFrequency("");
      setDrugFrequencyBn("");
      setDrugSpecialInstruction("");
      setDrugSpecialInstructionBn("");
      setDrugIsPrn(false);
      setDrugPrnCondition("");
      return;
    }
    const newDrug = {
      id: Math.random().toString(36).slice(2),
      drugForm,
      route: drugRoute,
      routeBn: ((_b = ROUTES_BN.find((r) => r.en === drugRoute)) == null ? void 0 : _b.bn) || "মুখে",
      drugName: drugName.trim(),
      brandName: drugBrandName.trim(),
      nameType: drugNameType,
      dose: drugDose,
      duration: drugDuration,
      durationBn: drugDurationBn,
      instructions: drugInstructions,
      instructionBn: drugInstructionBn,
      frequency: drugFrequency,
      frequencyBn: drugFrequencyBn,
      specialInstruction: drugSpecialInstruction,
      specialInstructionBn: drugSpecialInstructionBn,
      isPrn: drugIsPrn,
      prnCondition: drugIsPrn ? drugPrnCondition : "",
      dispensedAs: drugDispensedAs || void 0,
      substitutedBrand: drugDispensedAs === "substituted" ? drugSubstitutedBrand : void 0
    };
    setRxDrugs((prev) => [...prev, newDrug]);
    if (matchedAllergen) {
      setAllergyAlert({
        drugId: newDrug.id,
        drugName: newDrug.drugName,
        allergen: matchedAllergen
      });
      setShowOverrideForm(false);
      setOverrideJustification("");
    }
    setDrugName("");
    setDrugBrandName("");
    setDrugDose("");
    setDrugDuration("");
    setDrugDurationBn("");
    setDrugInstructions("");
    setDrugInstructionBn("");
    setDrugFrequency("");
    setDrugFrequencyBn("");
    setDrugSpecialInstruction("");
    setDrugSpecialInstructionBn("");
    setDrugIsPrn(false);
    setDrugPrnCondition("");
  }
  function deleteDrug(id) {
    const drug = rxDrugs.find((d) => d.id === id);
    if (drug) {
      setDiscDialogDrugId(id);
      setDiscDialogDrugName(drug.brandName || drug.drugName || "this drug");
    } else {
      setRxDrugs((prev) => prev.filter((d) => d.id !== id));
    }
  }
  function confirmDeleteDrug(reason, _note) {
    if (!discDialogDrugId) return;
    setRxDrugs(
      (prev) => prev.map(
        (d) => d.id === discDialogDrugId ? {
          ...d,
          discontinuationReason: reason,
          discontinuedAt: Date.now()
        } : d
      ).filter((d) => d.id !== discDialogDrugId)
    );
    setDiscDialogDrugId(null);
    setDiscDialogDrugName("");
  }
  function updateDrug(id, field, value) {
    const coerced = typeof value === "string" && (value === "true" || value === "false") ? value === "true" : value;
    setRxDrugs(
      (prev) => prev.map((d) => d.id === id ? { ...d, [field]: coerced } : d)
    );
  }
  function appendAdvice(text) {
    setAdviceText((prev) => prev ? `${prev}
${text}` : text);
  }
  function addCustomTemplate() {
    if (!customText.trim()) return;
    const tpl = {
      id: `custom_${Date.now()}`,
      text: customText.trim(),
      category: customCategory,
      isCustom: true
    };
    saveCustomTemplate(tpl);
    setAllTemplates(getAllTemplates());
    setCustomText("");
    setShowCustomForm(false);
  }
  function removeCustomTemplate(id) {
    deleteCustomTemplate(id);
    setAllTemplates(getAllTemplates());
  }
  const filteredTemplates = allTemplates.filter((t) => {
    const matchCat = adviceCategory === "সব" ? true : adviceCategory === "Custom" ? t.isCustom : t.category === adviceCategory;
    const matchQ = adviceQuery.length < 1 ? true : t.text.toLowerCase().includes(adviceQuery.toLowerCase());
    return matchCat && matchQ;
  });
  function parseDurationDays(durationStr) {
    if (!durationStr) return 0;
    const s = durationStr.toLowerCase().trim();
    if (s.includes("month")) {
      const n2 = Number.parseFloat(s) || 1;
      return n2 * 30;
    }
    if (s.includes("week")) {
      const n2 = Number.parseFloat(s) || 1;
      return n2 * 7;
    }
    const n = Number.parseFloat(s);
    return Number.isNaN(n) ? 0 : n;
  }
  const maxDrugDays = rxDrugs.filter((d) => !d.isPrn).reduce(
    (max, d) => Math.max(max, parseDurationDays(d.duration || d.durationBn || "")),
    0
  );
  const followUpGapDays = followUpDate ? Math.round(
    (new Date(followUpDate).getTime() - Date.now()) / (1e3 * 60 * 60 * 24)
  ) : null;
  const durationMismatchWarning = followUpDate && maxDrugDays > 0 && followUpGapDays !== null && followUpGapDays > maxDrugDays ? `Patient may run out of medication ${followUpGapDays - maxDrugDays} day(s) before follow-up. Consider extending the prescription duration.` : null;
  const hasWeightWarning = !patientWeight || Number.isNaN(Number.parseFloat(patientWeight)) || Number.parseFloat(patientWeight) <= 0;
  function handleSave() {
    const medications = rxDrugs.map((d) => ({
      name: `${d.drugForm ? `${d.drugForm} ` : ""}${d.drugName}${d.brandName ? ` (${d.brandName})` : ""}`,
      dose: d.dose,
      frequency: d.isPrn ? `PRN${d.prnCondition ? ` — ${d.prnCondition}` : ""}` : d.frequencyBn || d.frequency || d.durationBn || d.duration,
      duration: d.isPrn ? "" : d.durationBn || d.duration,
      instructions: d.instructionBn || d.instructions || d.specialInstructionBn || d.specialInstruction,
      drugName: d.drugName,
      drugForm: d.drugForm,
      brandName: d.brandName,
      route: d.route,
      routeBn: d.routeBn,
      frequencyBn: d.frequencyBn,
      durationBn: d.durationBn,
      instructionsBn: d.instructionBn,
      specialInstruction: d.specialInstruction,
      specialInstructionBn: d.specialInstructionBn,
      isPrn: d.isPrn ? "true" : "false",
      prnCondition: d.prnCondition || ""
    }));
    if (isIntern) {
      setShowDraftModal(true);
      _persistPrescription(medications, "draft_awaiting_approval");
      return;
    }
    _persistPrescription(medications, "active");
  }
  function _persistPrescription(medications, status) {
    onSubmit({
      patientId,
      visitId: visitId ?? null,
      prescriptionDate: BigInt(Date.now()) * BigInt(1e6),
      diagnosis: diagnoses.length > 0 ? diagnoses.join(" + ") : diagnosis || null,
      medications,
      notes: adviceText || null
    });
    const existingRecords = loadPrescriptionRecords(patientId);
    const patientRecords = existingRecords.filter(
      (r) => r.patientId === patientId.toString()
    );
    let label = null;
    let labelTimestamp;
    if (headerType === "hospital") {
      if (patientRecords.length === 0) {
        label = "Order on Admission";
      } else {
        label = "Fresh Order";
        labelTimestamp = (/* @__PURE__ */ new Date()).toLocaleString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        });
      }
    }
    const snapId = `${patientId}-${Date.now()}`;
    const newRecord = {
      id: snapId,
      patientId: patientId.toString(),
      version: patientRecords.length + 1,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      createdBy: (currentDoctor == null ? void 0 : currentDoctor.name) ?? getDoctorEmail(),
      createdByRole: userRole,
      label,
      labelTimestamp,
      headerType,
      status,
      finalizedAt: status === "active" ? (/* @__PURE__ */ new Date()).toISOString() : void 0,
      diagnosis: diagnoses.length > 0 ? diagnoses.join(" + ") : diagnosis || void 0,
      drugs: rxDrugs,
      adviceText: adviceText || void 0,
      clinicalSummary: {
        cc,
        pmh,
        dh,
        oe,
        historyPersonal,
        historyFamily,
        historyImmunization,
        historyAllergy,
        historyOthers,
        investigation,
        adviceNewInv
      },
      // ── Clinical summary snapshot — locked at finalization time ──────────────
      ...status === "active" ? {
        finalizedSnapshot: {
          lockedAt: Date.now(),
          lockedBy: (currentDoctor == null ? void 0 : currentDoctor.email) ?? getDoctorEmail(),
          chiefComplaint: cc,
          pastHistory: pmh,
          onExamination: oe,
          diagnosis: diagnoses.length > 0 ? diagnoses.join(" + ") : diagnosis || "",
          investigations: investigation ? investigation.split("\n").filter(Boolean) : []
        }
      } : {}
    };
    savePrescriptionRecords(patientId, [...existingRecords, newRecord]);
    if (status === "active") {
      try {
        const doctorEmail = getDoctorEmail();
        const visitKeys = Object.keys(localStorage).filter(
          (k) => k.startsWith("visit_form_data_") && k.endsWith(`_${doctorEmail}`)
        );
        const patientIdStr = patientId.toString();
        let latestVisitKey = null;
        let latestTs = 0;
        for (const key of visitKeys) {
          try {
            const raw = localStorage.getItem(key);
            if (!raw) continue;
            const parsed = JSON.parse(raw);
            if (String(parsed.patientId ?? "") === patientIdStr || key.includes(patientIdStr)) {
              const parts = key.split("_");
              const idPart = Number(parts[3] ?? "0");
              if (!Number.isNaN(idPart) && idPart > latestTs) {
                latestTs = idPart;
                latestVisitKey = key;
              }
            }
          } catch {
          }
        }
        if (visitId) {
          const directKey = `visit_form_data_${visitId}_${doctorEmail}`;
          if (localStorage.getItem(directKey)) latestVisitKey = directKey;
        }
        if (latestVisitKey) {
          const raw = localStorage.getItem(latestVisitKey);
          if (raw) {
            const visitData = JSON.parse(raw);
            const currentDrugNames = new Set(
              rxDrugs.map((d) => d.drugName.trim().toLowerCase())
            );
            const existingDrugHistory = visitData.drugHistory || [];
            const updated = existingDrugHistory.map((entry) => {
              if (!currentDrugNames.has((entry.name ?? "").toLowerCase())) {
                return {
                  ...entry,
                  status: "Previous",
                  markedPreviousAt: Date.now()
                };
              }
              return entry;
            });
            for (const drug of rxDrugs) {
              const existing2 = updated.find(
                (e) => e.name.toLowerCase() === drug.drugName.toLowerCase()
              );
              if (existing2) {
                existing2.status = "Current";
                existing2.updatedAt = Date.now();
              } else {
                updated.push({
                  name: drug.drugName,
                  dose: drug.dose,
                  duration: drug.duration,
                  status: "Current",
                  updatedAt: Date.now()
                });
              }
            }
            visitData.drugHistory = updated;
            localStorage.setItem(latestVisitKey, JSON.stringify(visitData));
          }
        }
      } catch {
      }
    }
    const snapshotKey = "medicare_rx_snapshots";
    const existing = (() => {
      try {
        return JSON.parse(localStorage.getItem(snapshotKey) || "{}");
      } catch {
        return {};
      }
    })();
    existing[snapId] = {
      id: snapId,
      patientId: patientId.toString(),
      savedAt: (/* @__PURE__ */ new Date()).toISOString(),
      headerType,
      withHeader,
      name,
      age,
      sex,
      weight,
      rxDate,
      regNo,
      address,
      bloodGroup,
      diagnoses: [...diagnoses],
      drugs: rxDrugs,
      adviceText,
      cc,
      pmh,
      oe,
      dh,
      historyPersonal,
      historyFamily,
      historyImmunization,
      historyAllergy,
      historyOthers,
      investigation,
      adviceNewInv,
      label,
      labelTimestamp,
      status
    };
    localStorage.setItem(snapshotKey, JSON.stringify(existing));
    localStorage.removeItem(DRAFT_KEY);
    if (status === "active") {
      const nonPrnMeds = medications.filter((m) => m.isPrn !== "true");
      autoPopulateDrugReminders(patientId, nonPrnMeds, snapId);
    }
    if (status === "active" && followUpDate) {
      try {
        const apptKey = "medicare_appointments";
        const existingAppts = (() => {
          try {
            return JSON.parse(localStorage.getItem(apptKey) ?? "[]");
          } catch {
            return [];
          }
        })();
        const appt = {
          id: `fu_${Date.now().toString(36)}`,
          patientId: patientId.toString(),
          patientName: name || "Patient",
          phone: "",
          registerNumber: regNo || void 0,
          preferredDoctor: (currentDoctor == null ? void 0 : currentDoctor.name) ?? getDoctorEmail(),
          preferredChamber: void 0,
          preferredDate: followUpDate,
          preferredTime: "10:00",
          reason: "Prescription follow-up",
          status: "confirmed",
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          createdBy: (currentDoctor == null ? void 0 : currentDoctor.name) ?? getDoctorEmail(),
          notes: "Auto-created from prescription follow-up date",
          appointmentType: "chamber"
        };
        localStorage.setItem(apptKey, JSON.stringify([appt, ...existingAppts]));
        const formattedDate = new Date(followUpDate).toLocaleDateString(
          "en-GB",
          {
            day: "2-digit",
            month: "short",
            year: "numeric"
          }
        );
        ue.success(`Follow-up appointment created for ${formattedDate}`, {
          description: "Added to appointments list",
          style: { backgroundColor: "#f0fdf4", color: "#166534" }
        });
      } catch {
      }
    }
  }
  function getDoctorInfo() {
    try {
      const sessionId = localStorage.getItem("medicare_current_doctor");
      if (sessionId) {
        const registry = JSON.parse(
          localStorage.getItem("medicare_doctors_registry") || "[]"
        );
        const doctor = registry.find((d) => d.id === sessionId);
        if (doctor == null ? void 0 : doctor.email) {
          const profileRaw = localStorage.getItem(
            `doctor_profile_${doctor.email}`
          );
          if (profileRaw) {
            const profile = JSON.parse(profileRaw);
            if (profile) return profile;
          }
        }
      }
    } catch {
    }
    try {
      const data = localStorage.getItem("medicare_doctors_data");
      if (data) {
        const parsed = JSON.parse(data);
        const doc = parsed.drArman || (Array.isArray(parsed) ? parsed[0] : null) || null;
        if (doc) return doc;
      }
    } catch {
    }
    return null;
  }
  const doctorInfo = getDoctorInfo();
  const inp = `w-full border rounded px-2 py-1 text-xs ${dark ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300"}`;
  const rootClass = `fixed inset-0 z-50 flex flex-col overflow-hidden ${dark ? "dark bg-gray-950 text-gray-100" : "bg-gray-50 text-gray-900"}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: rootClass, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showDraftModal, onOpenChange: setShowDraftModal, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "flex items-center gap-2 text-amber-700", children: "📋 Prescription Saved as Draft" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800", children: [
          "Your prescription has been saved as a",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Draft – Awaiting Approval" }),
          ". A Consultant Doctor or Medical Officer will review and approve it before it becomes active."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "The prescription will not appear in the active medication chart or drug reminders until approved." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "w-full bg-amber-600 hover:bg-amber-700 text-white",
            onClick: () => {
              setShowDraftModal(false);
              onCancel();
            },
            children: "OK – Close Prescription"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showHeaderUpload, onOpenChange: setShowHeaderUpload, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Edit Prescription Header" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: ["hospital", "chamber"].map(
          (type) => {
            const img = type === "hospital" ? hospitalHeaderImg : chamberHeaderImg;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-3 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3 py-2 px-3 rounded-lg border border-dashed border-purple-300 bg-purple-50/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer select-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: drugIsPrn,
                      onChange: (e) => setDrugIsPrn(e.target.checked),
                      className: "w-4 h-4 accent-purple-600",
                      "data-ocid": "rx.drug_prn.toggle"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-purple-700", children: "PRN (as-needed)" })
                ] }),
                drugIsPrn && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    className: `flex-1 border rounded px-2 py-1 text-sm border-purple-300 ${dark ? "bg-gray-800 text-white" : "bg-white"}`,
                    value: drugPrnCondition,
                    onChange: (e) => setDrugPrnCondition(e.target.value),
                    placeholder: "Condition: e.g. if fever > 38°F",
                    "data-ocid": "rx.drug_prn_condition.input"
                  }
                ),
                drugIsPrn && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-purple-500 italic shrink-0", children: "No reminder bell" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                type === "hospital" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hospital, { className: "w-4 h-4 text-blue-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4 text-teal-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold capitalize", children: [
                  type,
                  " Header"
                ] })
              ] }),
              img && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: img,
                  alt: `${type} header`,
                  className: "max-h-16 object-contain border rounded"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer px-3 py-1.5 bg-muted rounded border text-sm hover:bg-muted/80 transition-colors w-fit", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-3.5 h-3.5" }),
                img ? "Replace Image" : "Upload Image",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "file",
                    accept: "image/*",
                    className: "hidden",
                    onChange: (e) => {
                      var _a;
                      const file = (_a = e.target.files) == null ? void 0 : _a[0];
                      if (!file) return;
                      const reader = new FileReader();
                      reader.onload = (ev) => {
                        var _a2;
                        const dataUrl = (_a2 = ev.target) == null ? void 0 : _a2.result;
                        setPrescriptionHeaderImage(type, dataUrl);
                        if (type === "hospital")
                          setHospitalHeaderImg(dataUrl);
                        else setChamberHeaderImg(dataUrl);
                      };
                      reader.readAsDataURL(file);
                    }
                  }
                )
              ] }),
              img && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const email = getDoctorEmail();
                    localStorage.removeItem(
                      `prescriptionHeaders_${type}_${email}`
                    );
                    if (type === "hospital") setHospitalHeaderImg(null);
                    else setChamberHeaderImg(null);
                  },
                  className: "text-sm text-red-500 hover:underline",
                  children: "Remove"
                }
              )
            ] }, type);
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "w-full",
            onClick: () => setShowHeaderUpload(false),
            children: "Done"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-3 py-2 bg-teal-700 text-white shadow z-10 flex-shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm", children: "Prescription & EMR" }),
        isIntern && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 bg-amber-400 text-amber-900 rounded text-xs font-semibold", children: "Intern — Draft Mode" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { orientation: "vertical", className: "h-5 bg-teal-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 bg-teal-800 rounded p-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setHeaderType("hospital"),
              className: `flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium transition-colors ${headerType === "hospital" ? "bg-white text-teal-800" : "text-teal-200 hover:text-white"}`,
              "data-ocid": "rx.header_hospital.toggle",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Hospital, { className: "w-3 h-3" }),
                " Hospital"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setHeaderType("chamber"),
              className: `flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium transition-colors ${headerType === "chamber" ? "bg-white text-teal-800" : "text-teal-200 hover:text-white"}`,
              "data-ocid": "rx.header_chamber.toggle",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-3 h-3" }),
                " Chamber"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { orientation: "vertical", className: "h-5 bg-teal-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setWithHeader(true),
            className: `px-2 py-0.5 rounded text-sm font-medium border transition-colors ${withHeader ? "bg-white text-teal-800 border-white" : "border-teal-400 text-teal-100 hover:bg-teal-600"}`,
            "data-ocid": "rx.with_header.toggle",
            children: "With Header"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setWithHeader(false),
            className: `px-2 py-0.5 rounded text-sm font-medium border transition-colors ${!withHeader ? "bg-white text-teal-800 border-white" : "border-teal-400 text-teal-100 hover:bg-teal-600"}`,
            "data-ocid": "rx.without_header.toggle",
            children: "Without Header"
          }
        ),
        canEditHeader && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setShowHeaderUpload(true),
            className: "flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium border border-teal-400 text-teal-100 hover:bg-teal-600 transition-colors",
            "data-ocid": "rx.edit_header.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-3 h-3" }),
              " Edit Header"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setDark((d) => !d),
            className: "p-1 rounded hover:bg-teal-600 transition-colors",
            "data-ocid": "rx.dark_mode.toggle",
            children: dark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-4 h-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "secondary",
            onClick: onCancel,
            className: "h-7 text-sm",
            "data-ocid": "rx.cancel.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5 mr-1" }),
              " Cancel"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            onClick: handleSave,
            disabled: isLoading,
            className: `h-7 text-sm ${isIntern ? "bg-amber-400 text-amber-900 hover:bg-amber-300" : "bg-white text-teal-800 hover:bg-teal-50"}`,
            "data-ocid": "rx.save.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3.5 h-3.5 mr-1" }),
              isLoading ? "Saving..." : isIntern ? "Save as Draft" : "Save Prescription"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `flex-shrink-0 border-b px-3 py-2 ${dark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 md:grid-cols-8 gap-2", children: [
          [
            {
              label: "Name",
              value: name,
              set: setName,
              id: "rx.name.input"
            }
          ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm block mb-0.5", children: f.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                className: inp,
                value: f.value,
                onChange: (e) => f.set(e.target.value),
                "data-ocid": f.id
              }
            )
          ] }, f.label)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-sm block mb-0.5", children: [
              "Age ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-xs", children: "(yrs)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                className: inp,
                value: age,
                onChange: (e) => setAge(e.target.value),
                "data-ocid": "rx.age.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm block mb-0.5", children: "Sex" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                className: `${inp}`,
                value: sex,
                onChange: (e) => setSex(e.target.value),
                "data-ocid": "rx.sex.select",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "--" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "male", children: "Male" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "female", children: "Female" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "other", children: "Other" })
                ]
              }
            )
          ] }),
          [
            {
              label: "Weight (kg)",
              value: weight,
              set: setWeight,
              id: "rx.weight.input"
            },
            {
              label: "Date",
              value: rxDate,
              set: setRxDate,
              id: "rx.date.input"
            },
            {
              label: "Reg No",
              value: regNo,
              set: setRegNo,
              id: "rx.reg_no.input"
            },
            {
              label: "Address",
              value: address,
              set: setAddress,
              id: "rx.address.input"
            }
          ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm block mb-0.5", children: f.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                className: inp,
                value: f.value,
                onChange: (e) => f.set(e.target.value),
                "data-ocid": f.id
              }
            )
          ] }, f.label)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm block mb-0.5", children: "Blood Group" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                className: inp,
                value: bloodGroup,
                onChange: (e) => setBloodGroup(e.target.value),
                "data-ocid": "rx.blood_group.select",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "--" }),
                  ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: bg, children: bg }, bg))
                ]
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `flex-shrink-0 px-3 py-2 ${dark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-100"} border-b`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PrescriptionHeaderPanel,
            {
              headerType,
              isAdmitted: _isAdmitted,
              canEdit: userRole === "admin" || userRole === "consultant_doctor" || userRole === "doctor"
            }
          ),
          hasWeightWarning && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mt-2 flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-50 border border-amber-300 text-xs text-amber-800",
              "data-ocid": "rx.weight_warning.panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5 text-amber-600 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⚠ No recent weight recorded — verify dose, especially for weight-based dosing" })
              ]
            }
          ),
          !hasWeightWarning && patientWeight && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 text-xs text-gray-500 px-1", children: [
            "Last recorded: Weight",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-gray-700", children: [
              patientWeight,
              " kg"
            ] }),
            patientHeight && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              " ",
              "/ Height",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-gray-700", children: [
                patientHeight,
                " cm"
              ] })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DiscontinuationDialog,
      {
        drugName: discDialogDrugName,
        open: discDialogDrugId !== null,
        onConfirm: confirmDeleteDrug,
        onCancel: () => {
          setDiscDialogDrugId(null);
          setDiscDialogDrugName("");
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScrollArea,
        {
          className: `w-[30%] border-r flex-shrink-0 ${dark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-teal-700 uppercase tracking-wide", children: "Clinical Summary" }),
              visitExtendedData && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => applyVisitData(visitExtendedData),
                  className: "flex items-center gap-1 text-sm px-2 py-0.5 bg-teal-100 text-teal-700 border border-teal-300 rounded hover:bg-teal-200 transition-colors",
                  "data-ocid": "rx.load_from_visit.button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3 h-3" }),
                    "Load from Visit"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border-l-4 border-l-blue-400 border border-blue-200 bg-blue-50 p-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-blue-700 uppercase tracking-wide block mb-1", children: "C/C — Chief Complaints" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  value: cc,
                  onChange: (e) => setCc(e.target.value),
                  rows: 4,
                  className: "text-sm resize-y bg-white border-blue-200 focus:ring-blue-300",
                  placeholder: "1. Cough — dry, 5 days\n2. Fever — high grade",
                  "data-ocid": "rx.cc.textarea"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border-l-4 border-l-green-500 border border-green-200 bg-green-50 p-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-green-700 uppercase tracking-wide block mb-1", children: "P/M/H — Past Medical & Surgical History" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  value: pmh,
                  onChange: (e) => setPmh(e.target.value),
                  rows: 3,
                  className: "text-sm resize-y bg-white border-green-200",
                  placeholder: "DM+, HTN-\nSurgical: Appendectomy 2020",
                  "data-ocid": "rx.pmh.textarea"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border-l-4 border-l-purple-500 border border-purple-200 bg-purple-50 p-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-purple-700 uppercase tracking-wide block mb-1", children: "History" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "personal", className: "w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { className: "w-full h-7 text-sm bg-purple-100", children: [
                  ["personal", "Personal"],
                  ["family", "Family"],
                  ["immun", "Immun."],
                  ["allergy", "Allergy"],
                  ["others", "Others"]
                ].map(([val, lbl]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TabsTrigger,
                  {
                    value: val,
                    className: "text-sm px-1 flex-1",
                    children: lbl
                  },
                  val
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "personal", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: historyPersonal,
                    onChange: (e) => setHistoryPersonal(e.target.value),
                    rows: 3,
                    className: "text-sm bg-white border-purple-200",
                    "data-ocid": "rx.history_personal.textarea"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "family", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: historyFamily,
                    onChange: (e) => setHistoryFamily(e.target.value),
                    rows: 3,
                    className: "text-sm bg-white border-purple-200",
                    "data-ocid": "rx.history_family.textarea"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "immun", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: historyImmunization,
                    onChange: (e) => setHistoryImmunization(e.target.value),
                    rows: 3,
                    className: "text-sm bg-white border-purple-200",
                    "data-ocid": "rx.history_immunization.textarea"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "allergy", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: historyAllergy,
                    onChange: (e) => setHistoryAllergy(e.target.value),
                    rows: 3,
                    className: "text-sm bg-white border-purple-200",
                    "data-ocid": "rx.history_allergy.textarea"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "others", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: historyOthers,
                    onChange: (e) => setHistoryOthers(e.target.value),
                    rows: 3,
                    className: "text-sm bg-white border-purple-200",
                    "data-ocid": "rx.history_others.textarea"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border-l-4 border-l-amber-500 border border-amber-200 bg-amber-50 p-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-amber-700 uppercase tracking-wide block mb-1", children: "D/H — Drug History" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  value: dh,
                  onChange: (e) => setDh(e.target.value),
                  rows: 3,
                  className: "text-sm resize-y bg-white border-amber-200",
                  placeholder: "Tab. Napa 500mg 1+1+1, Tab. Fexo 120mg once daily",
                  "data-ocid": "rx.dh.textarea"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border-l-4 border-l-rose-500 border border-rose-200 bg-rose-50 p-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-rose-700 uppercase tracking-wide block mb-1", children: "O/E — On Examination" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  value: oe,
                  onChange: (e) => setOe(e.target.value),
                  rows: 4,
                  className: "text-sm resize-y bg-white border-rose-200",
                  placeholder: "BP: 120/80, Pulse: 82/min\nHeart: S1+S2+0, Lung: Clear",
                  "data-ocid": "rx.oe.textarea"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border-l-4 border-l-teal-500 border border-teal-200 bg-teal-50 p-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-teal-700 uppercase tracking-wide block mb-1", children: "Investigation Report" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  value: investigation,
                  onChange: (e) => setInvestigation(e.target.value),
                  rows: 4,
                  className: "text-sm resize-y bg-white border-teal-200",
                  placeholder: "13/03/2026: Hb% - 12.3g/dl, S.Creatinine - 1.12\n12/03/2026: Blood Glucose - 6.5mmol/L",
                  "data-ocid": "rx.investigation.textarea"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border-l-4 border-l-orange-500 border border-orange-200 bg-orange-50 p-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-orange-700 uppercase tracking-wide block mb-1", children: "Advice / New Investigation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  value: adviceNewInv,
                  onChange: (e) => setAdviceNewInv(e.target.value),
                  rows: 3,
                  className: "text-sm resize-y bg-white border-orange-200",
                  placeholder: "CBC, RBS, ECG...",
                  "data-ocid": "rx.advice_new_inv.textarea"
                }
              )
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: `flex-1 ${dark ? "bg-gray-950" : "bg-gray-50"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `rounded-lg p-3 ${dark ? "bg-gray-900" : "bg-white"} shadow-sm`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-teal-700 uppercase tracking-wide block mb-2", children: "Diagnosis" }),
              diagnoses.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mb-2", children: diagnoses.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-1 bg-teal-100 text-teal-800 text-xs font-medium px-2 py-0.5 rounded-full border border-teal-300",
                  children: [
                    d,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => removeDiagnosis(d),
                        className: "ml-0.5 hover:text-red-600 text-teal-500 font-bold",
                        "aria-label": `Remove ${d}`,
                        children: "×"
                      }
                    )
                  ]
                },
                d
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    className: `flex-1 border rounded px-2 py-1.5 text-sm ${dark ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300"}`,
                    value: diagnosis,
                    onChange: (e) => setDiagnosis(e.target.value),
                    onKeyDown: (e) => {
                      if (e.key === "Enter" && diagnosis.trim()) {
                        addDiagnosis(diagnosis.trim());
                      }
                    },
                    placeholder: "Type diagnosis (Enter to add)...",
                    "data-ocid": "rx.diagnosis.input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      if (diagnosis.trim()) addDiagnosis(diagnosis.trim());
                    },
                    className: "px-2 py-1.5 bg-teal-500 text-white rounded text-sm font-bold hover:bg-teal-600",
                    title: "Add diagnosis",
                    "data-ocid": "rx.diagnosis.primary_button",
                    children: "+"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  className: `mt-1.5 w-full border rounded px-2 py-1 text-sm ${dark ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300"}`,
                  value: diagnosisQuery,
                  onChange: (e) => setDiagnosisQuery(e.target.value),
                  onFocus: () => diagnosisQuery.length >= 2 && setShowDiagnosisDrop(true),
                  placeholder: "🔍 Search DIMS/templates...",
                  "data-ocid": "rx.diagnosis_search.input"
                }
              ),
              showDiagnosisDrop && diagnosisSuggestions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `mt-1 border rounded shadow-lg max-h-40 overflow-y-auto z-20 ${dark ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"}`,
                  children: diagnosisSuggestions.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => applyDiagnosisSuggestion(s),
                      className: `w-full text-left px-3 py-1.5 text-sm hover:bg-teal-50 flex items-center gap-2 ${dark ? "hover:bg-teal-900" : ""}`,
                      "data-ocid": `rx.diagnosis_suggestion.item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Badge,
                          {
                            variant: "outline",
                            className: `text-sm ${s.type === "DIMS" ? "border-blue-400 text-blue-600" : "border-teal-400 text-teal-600"}`,
                            children: s.type
                          }
                        ),
                        s.label
                      ]
                    },
                    `suggestion-${s.label}-${i}`
                  ))
                }
              ),
              dimsActive && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-blue-100 text-blue-700 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 mr-1" }),
                  "DIMS Active"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setRxDrugs([]);
                      setDimsActive(false);
                    },
                    className: "text-sm text-red-500 underline",
                    "data-ocid": "rx.dims_reset.button",
                    children: "Reset"
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `rounded-lg p-3 ${dark ? "bg-gray-900" : "bg-white"} shadow-sm`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-teal-700 uppercase tracking-wide", children: "ℝ Prescription" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                  rxDrugs.length,
                  " drug(s)"
                ] })
              ] }),
              durationMismatchWarning && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start gap-2 mb-2 px-3 py-2 rounded-lg bg-yellow-50 border border-yellow-300 text-xs text-yellow-800",
                  "data-ocid": "rx.duration_mismatch.panel",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5 text-yellow-600 flex-shrink-0 mt-0.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: durationMismatchWarning })
                  ]
                }
              ),
              allergyAlert && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "mb-3 rounded-lg border-2 border-red-400 bg-red-50 p-3",
                  "data-ocid": "rx.allergy_alert",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold text-red-800", children: [
                        "⚠ Allergy Alert: ",
                        patientName || "Patient",
                        " is allergic to",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "capitalize", children: allergyAlert.allergen }),
                        ". Adding ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: allergyAlert.drugName }),
                        " may cause a reaction."
                      ] }),
                      showOverrideForm ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 space-y-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-red-700", children: "Clinical Justification (required)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Textarea,
                          {
                            value: overrideJustification,
                            onChange: (e) => setOverrideJustification(e.target.value),
                            rows: 2,
                            placeholder: "e.g. Previous cross-reactivity ruled out, benefit outweighs risk...",
                            className: "text-sm border-red-300 focus:ring-red-400",
                            "data-ocid": "rx.allergy_override.textarea"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Button,
                            {
                              size: "sm",
                              variant: "outline",
                              onClick: () => {
                                const aid = allergyAlert.drugId;
                                setAllergyAlert(null);
                                setShowOverrideForm(false);
                                setOverrideJustification("");
                                setRxDrugs(
                                  (prev) => prev.filter((d) => d.id !== aid)
                                );
                              },
                              className: "text-xs border-red-300 text-red-700",
                              "data-ocid": "rx.allergy_remove.button",
                              children: "Remove Drug"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Button,
                            {
                              size: "sm",
                              disabled: !overrideJustification.trim(),
                              onClick: () => {
                                if (!overrideJustification.trim()) return;
                                const doctorEmail = getDoctorEmail();
                                const snapId = `rx_override_${patientId}_${Date.now()}`;
                                const override = {
                                  drugName: allergyAlert.drugName,
                                  overriddenBy: doctorEmail,
                                  overriddenAt: Date.now(),
                                  justification: overrideJustification.trim(),
                                  prescriptionId: snapId
                                };
                                const existing = loadAllergyOverrides(
                                  doctorEmail,
                                  patientId.toString()
                                );
                                saveAllergyOverrides(
                                  doctorEmail,
                                  patientId.toString(),
                                  [...existing, override]
                                );
                                try {
                                  const auditKey = "medicare_audit_overrides";
                                  const audits = JSON.parse(
                                    localStorage.getItem(auditKey) || "[]"
                                  );
                                  audits.push({
                                    type: "AllergyOverride",
                                    doctorName: (currentDoctor == null ? void 0 : currentDoctor.name) ?? doctorEmail,
                                    drugName: allergyAlert.drugName,
                                    patientName: patientName ?? patientId.toString(),
                                    allergen: allergyAlert.allergen,
                                    justification: overrideJustification.trim(),
                                    timestamp: (/* @__PURE__ */ new Date()).toISOString()
                                  });
                                  localStorage.setItem(
                                    auditKey,
                                    JSON.stringify(audits)
                                  );
                                } catch {
                                }
                                ue.warning(
                                  `Allergy override recorded for ${allergyAlert.drugName}`,
                                  {
                                    description: "Justification saved to audit log."
                                  }
                                );
                                setAllergyAlert(null);
                                setShowOverrideForm(false);
                                setOverrideJustification("");
                              },
                              className: "text-xs bg-red-600 hover:bg-red-700 text-white",
                              "data-ocid": "rx.allergy_override_confirm.button",
                              children: "Override — I acknowledge this allergy"
                            }
                          )
                        ] })
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            size: "sm",
                            variant: "outline",
                            onClick: () => {
                              const aid = allergyAlert.drugId;
                              setAllergyAlert(null);
                              setRxDrugs(
                                (prev) => prev.filter((d) => d.id !== aid)
                              );
                            },
                            className: "text-xs border-red-300 text-red-700",
                            "data-ocid": "rx.allergy_remove.button",
                            children: "Remove Drug"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            size: "sm",
                            variant: "outline",
                            onClick: () => setShowOverrideForm(true),
                            className: "text-xs border-amber-400 text-amber-700",
                            "data-ocid": "rx.allergy_override.button",
                            children: "Override — I acknowledge this allergy"
                          }
                        )
                      ] })
                    ] })
                  ] })
                }
              ),
              rxDrugs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-sm text-muted-foreground italic py-3 text-center",
                  "data-ocid": "rx.drugs.empty_state",
                  children: "No drugs added yet. Use the form below."
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-ocid": "rx.drugs.table", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "tr",
                  {
                    className: `border-b ${dark ? "border-gray-700" : "border-gray-200"}`,
                    children: [
                      "#",
                      "Form",
                      "Drug Name",
                      "Dose",
                      "Route",
                      "Freq.",
                      "Duration",
                      "Instructions",
                      "Special Instr.",
                      "Dispensed As",
                      ""
                    ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "th",
                      {
                        className: "text-left py-1 px-1 font-semibold text-muted-foreground whitespace-nowrap",
                        children: h
                      },
                      h
                    ))
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rxDrugs.map((drug, idx) => {
                  const allergyMatch = checkDrugAllergyMatch(
                    drug.drugName,
                    unifiedAllergies
                  );
                  const hasInteraction = DRUG_INTERACTION_PAIRS.some(
                    (pair) => {
                      const allText = rxDrugs.map(
                        (d) => `${d.drugName} ${d.brandName}`.toLowerCase()
                      ).join(" ");
                      const matched = pair.drugs.filter(
                        (d) => allText.includes(d)
                      );
                      if (matched.length < 2) return false;
                      const thisDrugText = `${drug.drugName} ${drug.brandName}`.toLowerCase();
                      return pair.drugs.some(
                        (d) => thisDrugText.includes(d)
                      );
                    }
                  );
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    DrugRow,
                    {
                      drug,
                      index: idx,
                      dark,
                      isEditing: editingDrugId === drug.id,
                      allergyMatch,
                      hasInteraction,
                      onEdit: () => {
                        if (editingDrugId === drug.id) {
                          setEditingDrugId(null);
                        } else {
                          loadDrugForEditing(drug);
                        }
                      },
                      onDelete: () => deleteDrug(drug.id),
                      onUpdate: (field, val) => updateDrug(drug.id, field, val)
                    },
                    drug.id
                  );
                }) })
              ] }) }),
              rxDrugs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "mt-2 flex flex-wrap gap-2 text-xs print:hidden",
                  "data-ocid": "rx.drug_legend.panel",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-3 h-3 rounded-sm bg-red-100 border-l-2 border-red-600" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Allergy alert" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-3 h-3 rounded-sm bg-red-50 border-l-2 border-red-500" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Controlled drug" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-3 h-3 rounded-sm bg-amber-50 border-l-2 border-amber-500" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Interaction warning" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-3 h-3 rounded-sm bg-blue-50 border-l-2 border-blue-300" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "PRN / as needed" })
                    ] })
                  ]
                }
              )
            ]
          }
        ),
        rxDrugs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ClinicalIntelligencePanel,
          {
            rxDrugs,
            allergies: [],
            pmh,
            diagnosis,
            dark
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            id: "rx-med-form",
            className: `rounded-lg p-3 ${dark ? "bg-gray-900" : "bg-white"} shadow-sm`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-teal-700 uppercase tracking-wide", children: editingDrugId ? "✏️ Edit Medication" : "Add Medication" }),
                editingDrugId && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full border border-amber-300", children: "Editing row — save to update" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mb-3", children: DRUG_FORMS.filter(Boolean).map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setDrugForm(f),
                  className: `px-2 py-0.5 rounded-full text-sm font-medium border transition-colors ${drugForm === f ? "bg-teal-600 text-white border-teal-600" : dark ? "border-gray-600 text-gray-300 hover:bg-gray-700" : "border-gray-300 text-gray-600 hover:bg-gray-50"}`,
                  "data-ocid": "rx.drug_form.toggle",
                  children: f
                },
                f
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Generic Name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        className: `flex-1 border rounded px-2 py-1 text-sm ${dark ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300"}`,
                        value: drugName,
                        onChange: (e) => setDrugName(e.target.value),
                        placeholder: "Generic drug name...",
                        "data-ocid": "rx.drug_name.input"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => window.open("https://medex.com.bd/", "_blank"),
                        className: "px-1.5 py-1 rounded border border-teal-300 bg-teal-50 text-teal-700 hover:bg-teal-100 text-sm flex items-center gap-0.5",
                        title: "Search on Medex",
                        "data-ocid": "rx.medex_search.button",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground font-semibold", children: "Brand Name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      className: `w-full border rounded px-2 py-1 text-sm font-semibold ${dark ? "bg-gray-800 border-amber-600 text-white" : "bg-amber-50 border-amber-300"}`,
                      value: drugBrandName,
                      onChange: (e) => setDrugBrandName(e.target.value),
                      placeholder: "Brand (bold in table)",
                      "data-ocid": "rx.drug_brand_name.input"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Dose" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      className: `w-full border rounded px-2 py-1 text-sm ${dark ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300"}`,
                      value: drugDose,
                      onChange: (e) => setDrugDose(e.target.value),
                      placeholder: "500mg",
                      "data-ocid": "rx.drug_dose.input"
                    }
                  ),
                  (Number(age) < 12 || weight) && drugName && drugDose && (() => {
                    var _a;
                    const CHILD_DOSE_TABLE = {
                      paracetamol: 15,
                      acetaminophen: 15,
                      ibuprofen: 10,
                      naproxen: 10,
                      amoxicillin: 25,
                      amoxycillin: 25,
                      metronidazole: 7.5,
                      flagyl: 7.5
                    };
                    const wt = Number.parseFloat(weight || "0");
                    if (!wt) return null;
                    const dNameLower = drugName.toLowerCase();
                    const mgPerKg = ((_a = Object.entries(CHILD_DOSE_TABLE).find(
                      ([key]) => dNameLower.includes(key)
                    )) == null ? void 0 : _a[1]) ?? 10;
                    const maxSafe = wt * mgPerKg;
                    const enteredNum = Number.parseFloat(
                      drugDose.replace(/[^0-9.]/g, "")
                    );
                    const isOver = !Number.isNaN(enteredNum) && enteredNum > maxSafe;
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `mt-1 px-2 py-1 rounded text-xs border ${isOver ? "bg-red-50 border-red-300 text-red-700" : "bg-emerald-50 border-emerald-200 text-emerald-700"}`,
                        children: isOver ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          "⚠️ ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Dose may exceed safe limit" }),
                          " — Max safe: ",
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                            maxSafe,
                            "mg"
                          ] }),
                          " (",
                          mgPerKg,
                          "mg/kg × ",
                          wt,
                          "kg)"
                        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          "✓ Max safe dose: ",
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                            maxSafe,
                            "mg"
                          ] }),
                          " (",
                          mgPerKg,
                          "mg/kg × ",
                          wt,
                          "kg)"
                        ] })
                      }
                    );
                  })()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Route (Bangla)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: drugRoute, onValueChange: setDrugRoute, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        className: "h-7 text-sm",
                        "data-ocid": "rx.drug_route.select",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ROUTES_BN.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: r.en, className: "text-sm", children: [
                      r.bn,
                      " (",
                      r.en,
                      ")"
                    ] }, r.en)) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Frequency (Bangla primary)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      className: `w-full border rounded px-2 py-1 text-sm ${dark ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300"}`,
                      value: drugFrequencyBn || drugFrequency,
                      onChange: (e) => {
                        setDrugFrequencyBn(e.target.value);
                        setDrugFrequency(e.target.value);
                      },
                      placeholder: "e.g. সকাল-রাত ১+০+১",
                      "data-ocid": "rx.drug_frequency.input"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-0.5 mt-1", children: FREQUENCY_PRESETS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setDrugFrequencyBn(p.bn);
                        setDrugFrequency(p.en);
                      },
                      className: "text-sm px-1 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100",
                      children: p.bn
                    },
                    p.en
                  )) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Duration (Bangla)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      className: `w-full border rounded px-2 py-1 text-sm ${dark ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300"}`,
                      value: drugDurationBn || drugDuration,
                      onChange: (e) => {
                        setDrugDurationBn(e.target.value);
                        setDrugDuration(e.target.value);
                      },
                      placeholder: "৭ দিন",
                      "data-ocid": "rx.drug_duration.input"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-0.5 mt-1", children: DURATION_PRESETS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setDrugDurationBn(p.bn);
                        setDrugDuration(p.en);
                      },
                      className: "text-sm px-1 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-200 hover:bg-teal-100",
                      children: p.bn
                    },
                    p.en
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Instructions (Bangla)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      className: `w-full border rounded px-2 py-1 text-sm ${dark ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300"}`,
                      value: drugInstructionBn || drugInstructions,
                      onChange: (e) => {
                        setDrugInstructionBn(e.target.value);
                        setDrugInstructions(e.target.value);
                      },
                      placeholder: "খাবার পরে",
                      "data-ocid": "rx.drug_instructions.input"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-0.5 mt-1", children: INSTRUCTION_PRESETS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setDrugInstructionBn(p.bn);
                        setDrugInstructions(p.en);
                      },
                      className: "text-sm px-1 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100",
                      children: p.bn
                    },
                    p.en
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Special Instruction (Bangla)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      className: `w-full border rounded px-2 py-1 text-sm ${dark ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300"}`,
                      value: drugSpecialInstructionBn || drugSpecialInstruction,
                      onChange: (e) => {
                        setDrugSpecialInstructionBn(e.target.value);
                        setDrugSpecialInstruction(e.target.value);
                      },
                      placeholder: "যেমন: পানি বেশি পান করুন",
                      "data-ocid": "rx.drug_special_instruction.input"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Dispensed As" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      className: `ml-2 border rounded px-2 py-1 text-sm ${dark ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300"}`,
                      value: drugDispensedAs,
                      onChange: (e) => setDrugDispensedAs(
                        e.target.value
                      ),
                      "data-ocid": "rx.drug_dispensed_as.select",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Optional --" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "brand", children: "Brand" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "generic", children: "Generic" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "substituted", children: "Substituted" })
                      ]
                    }
                  )
                ] }),
                drugDispensedAs === "substituted" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Substituted Brand" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      className: `ml-2 border rounded px-2 py-1 text-sm ${dark ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300"}`,
                      value: drugSubstitutedBrand,
                      onChange: (e) => setDrugSubstitutedBrand(e.target.value),
                      placeholder: "Brand name...",
                      "data-ocid": "rx.drug_substituted_brand.input"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    onClick: addDrug,
                    className: "bg-teal-700 hover:bg-teal-800 text-white",
                    "data-ocid": "rx.add_drug.button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5 mr-1" }),
                      editingDrugId ? "Update Drug" : "Add to Prescription"
                    ]
                  }
                ),
                editingDrugId && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    onClick: () => {
                      setEditingDrugId(null);
                      setDrugName("");
                      setDrugBrandName("");
                      setDrugDose("");
                      setDrugDuration("");
                      setDrugDurationBn("");
                      setDrugInstructions("");
                      setDrugInstructionBn("");
                      setDrugFrequency("");
                      setDrugFrequencyBn("");
                      setDrugSpecialInstruction("");
                      setDrugSpecialInstructionBn("");
                    },
                    className: "text-gray-600",
                    "data-ocid": "rx.cancel_edit.button",
                    children: "Cancel Edit"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: `gap-1 ${dark ? "border-gray-600 text-gray-300" : "border-teal-300 text-teal-700"}`,
                      "data-ocid": "rx.drug_template.open_modal_button",
                      children: "⚡ Templates"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    PopoverContent,
                    {
                      className: "w-72 p-2",
                      align: "start",
                      "data-ocid": "rx.drug_template.popover",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-gray-500 px-2 py-1 mb-1", children: "Quick Drug Templates" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-52 overflow-y-auto space-y-1", children: TREATMENT_TEMPLATES.flatMap(
                          (tpl) => tpl.drugs.map((drug, di) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "button",
                            {
                              type: "button",
                              onClick: () => {
                                const d = drugFromTreatmentDrug(drug);
                                setRxDrugs((prev) => [...prev, d]);
                              },
                              className: "w-full text-left px-2 py-1.5 rounded hover:bg-teal-50 text-sm transition-colors flex items-center justify-between gap-2",
                              "data-ocid": `rx.drug_template.item.${di + 1}`,
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium truncate", children: drug.name }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400 shrink-0", children: drug.dose })
                              ]
                            },
                            `${tpl.id}-${di}`
                          ))
                        ).slice(0, 30) })
                      ]
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `rounded-lg ${dark ? "bg-gray-900" : "bg-white"} shadow-sm overflow-hidden`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setShowTreatmentSection((s) => !s),
                  className: `w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-50 ${dark ? "hover:bg-teal-900" : ""} transition-colors`,
                  "data-ocid": "rx.treatment_template.toggle",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⚡ Load Treatment Template" }),
                    showTreatmentSection ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5" })
                  ]
                }
              ),
              showTreatmentSection && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pb-3 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    className: `w-full border rounded px-2 py-1.5 text-sm ${dark ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300"}`,
                    placeholder: "Search condition / diagnosis...",
                    value: treatmentQuery,
                    onChange: (e) => setTreatmentQuery(e.target.value),
                    "data-ocid": "rx.treatment_search.input"
                  }
                ),
                treatmentResults.map((tpl, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `flex items-center justify-between p-2 rounded border ${dark ? "border-gray-700 bg-gray-800" : "border-gray-100 bg-gray-50"}`,
                    "data-ocid": `rx.treatment_template.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: tpl.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                          tpl.diagnosis,
                          " · ",
                          tpl.drugs.length,
                          " drugs"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => applyTreatmentTemplate(tpl),
                          className: "text-sm px-2 py-1 bg-teal-600 text-white rounded hover:bg-teal-700",
                          "data-ocid": `rx.load_template.button.${i + 1}`,
                          children: "Load"
                        }
                      )
                    ]
                  },
                  tpl.id
                )),
                treatmentQuery.length >= 2 && treatmentResults.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No templates found." })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `rounded-lg p-3 ${dark ? "bg-gray-900" : "bg-white"} shadow-sm`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-4 h-4 text-emerald-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-emerald-700 uppercase tracking-wide", children: "Follow-up Date" }),
                followUpDate && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 font-medium", children: "Appointment will be auto-created" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "date",
                    value: followUpDate,
                    min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
                    onChange: (e) => setFollowUpDate(e.target.value),
                    className: `border rounded px-3 py-1.5 text-sm ${dark ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-emerald-300 text-gray-800"}`,
                    "data-ocid": "rx.followup_date.input"
                  }
                ),
                followUpDate && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setFollowUpDate(""),
                    className: "text-xs text-red-400 hover:text-red-600 underline",
                    children: "Clear"
                  }
                )
              ] }),
              followUpDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-emerald-600 mt-1.5", children: [
                "📅 Follow-up on",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: new Date(followUpDate).toLocaleDateString("en-GB", {
                  weekday: "long",
                  day: "2-digit",
                  month: "long",
                  year: "numeric"
                }) }),
                " ",
                "— appointment will be auto-created when prescription is saved."
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `rounded-lg p-3 ${dark ? "bg-gray-900" : "bg-white"} shadow-sm`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-teal-700 uppercase tracking-wide block mb-2", children: "পরামর্শ / Advice (Bengali)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mb-2", children: ADVICE_CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setAdviceCategory(cat),
                  className: `text-sm px-2 py-0.5 rounded-full border transition-colors ${adviceCategory === cat ? "bg-teal-600 text-white border-teal-600" : dark ? "border-gray-600 text-gray-300 hover:bg-gray-700" : "border-gray-300 text-gray-600 hover:bg-gray-50"}`,
                  "data-ocid": "rx.advice_category.tab",
                  children: cat
                },
                cat
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    className: `w-full border rounded px-2 py-1.5 text-sm pr-7 ${dark ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300"}`,
                    placeholder: "Search advice templates...",
                    value: adviceQuery,
                    onChange: (e) => setAdviceQuery(e.target.value),
                    "data-ocid": "rx.advice_search.input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute right-2 top-2 w-3.5 h-3.5 text-gray-400" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mb-3 max-h-28 overflow-y-auto", children: filteredTemplates.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => appendAdvice(t.text),
                    className: `text-sm px-2 py-0.5 rounded border transition-colors text-left ${dark ? "bg-gray-800 border-gray-600 text-gray-200 hover:bg-teal-900" : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-teal-50"}`,
                    "data-ocid": `rx.advice_template.item.${i + 1}`,
                    children: t.text
                  }
                ),
                t.isCustom && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => removeCustomTemplate(t.id),
                    className: "text-red-400 hover:text-red-600",
                    "data-ocid": `rx.advice_delete.button.${i + 1}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
                  }
                )
              ] }, t.id)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  value: adviceText,
                  onChange: (e) => setAdviceText(e.target.value),
                  rows: 5,
                  placeholder: "পরামর্শ এখানে লিখুন বা টেমপ্লেট থেকে যোগ করুন...",
                  className: `text-sm mb-2 ${dark ? "bg-gray-800 border-gray-600 text-white" : ""}`,
                  "data-ocid": "rx.advice.textarea"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setShowCustomForm((s) => !s),
                  className: "text-sm text-teal-600 hover:underline flex items-center gap-1",
                  "data-ocid": "rx.add_custom_template.button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
                    " Add Custom Template"
                  ]
                }
              ),
              showCustomForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `mt-2 p-2 rounded border ${dark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        value: customText,
                        onChange: (e) => setCustomText(e.target.value),
                        rows: 2,
                        placeholder: "Custom advice text...",
                        className: `text-sm mb-1 ${dark ? "bg-gray-700 border-gray-600" : ""}`,
                        "data-ocid": "rx.custom_template.textarea"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          className: `flex-1 border rounded px-2 py-1 text-sm ${dark ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"}`,
                          value: customCategory,
                          onChange: (e) => setCustomCategory(e.target.value),
                          placeholder: "Category",
                          "data-ocid": "rx.custom_category.input"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: addCustomTemplate,
                          className: "px-3 py-1 bg-teal-600 text-white text-sm rounded hover:bg-teal-700",
                          "data-ocid": "rx.save_custom_template.button",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setShowCustomForm(false),
                          className: "px-2 py-1 text-sm rounded border",
                          "data-ocid": "rx.cancel_custom.button",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
                        }
                      )
                    ] })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `rounded-lg p-3 ${dark ? "bg-gray-900" : "bg-white"} shadow-sm`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-teal-700 uppercase tracking-wide block mb-2", children: "Doctor's Signature" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  ref: sigFileRef,
                  type: "file",
                  accept: "image/png,image/jpeg",
                  className: "hidden",
                  onChange: (e) => {
                    var _a;
                    const file = (_a = e.target.files) == null ? void 0 : _a[0];
                    if (!file) return;
                    if (file.size > 1024 * 1024) return;
                    const reader = new FileReader();
                    reader.onload = () => {
                      const dataUrl = reader.result;
                      setDoctorSignature(dataUrl);
                      setSignatureUrl(dataUrl);
                    };
                    reader.readAsDataURL(file);
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    onClick: () => {
                      var _a;
                      return (_a = sigFileRef.current) == null ? void 0 : _a.click();
                    },
                    className: "gap-1.5 border-purple-300 text-purple-700 hover:bg-purple-50",
                    "data-ocid": "rx.upload_signature.button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-3.5 h-3.5" }),
                      signatureUrl ? "Change Signature" : "Upload Signature"
                    ]
                  }
                ),
                signatureUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: signatureUrl,
                      alt: "Signature",
                      className: "h-10 object-contain border rounded px-2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        clearDoctorSignature();
                        setSignatureUrl(null);
                      },
                      className: "text-red-400 hover:text-red-600 text-xs flex items-center gap-1",
                      "aria-label": "Remove signature",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }),
                        " Clear"
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "PNG/JPG, max 1MB. Transparent background recommended." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setShowPreview((s) => !s),
              className: `w-full flex items-center justify-between px-3 py-2 rounded-t border text-sm font-semibold text-teal-700 ${dark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`,
              "data-ocid": "rx.preview.toggle",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "inline w-3.5 h-3.5 mr-1" }),
                  showPreview ? "Hide Preview" : "Show Preview"
                ] }),
                showPreview ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5" })
              ]
            }
          ),
          showPreview && /* @__PURE__ */ jsxRuntimeExports.jsx(
            PrescriptionPreview,
            {
              withHeader,
              headerType,
              doctorInfo,
              hospitalHeaderImg,
              chamberHeaderImg,
              signatureUrl,
              name,
              age,
              sex,
              weight,
              rxDate,
              regNo,
              diagnosis: diagnoses.length > 0 ? diagnoses.join(" + ") : diagnosis,
              drugs: rxDrugs,
              adviceText,
              cc,
              pmh,
              oe,
              dh,
              historyPersonal,
              historyFamily,
              historyImmunization,
              historyAllergy,
              historyOthers,
              investigation,
              adviceNewInv,
              followUpDate,
              isInternDraft: isIntern
            }
          )
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "fixed bottom-6 right-6 z-50 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-3 shadow-xl flex items-center gap-2",
        onClick: () => setShowCalculator(true),
        "data-ocid": "rx.calculator.open_modal_button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium pr-1", children: "Calculator" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showCalculator, onOpenChange: setShowCalculator, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2 text-indigo-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-5 h-5" }),
        " Medical Calculator"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mb-4", children: [
        { id: "dose-weight", label: "Dose/Weight" },
        { id: "dose-age", label: "Dose/Age" },
        { id: "crcl", label: "CrCl/GFR" },
        { id: "bmi", label: "BMI" },
        { id: "bsa", label: "BSA" },
        { id: "fluid", label: "Pediatric Fluid" },
        { id: "map", label: "MAP" }
      ].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setCalcTab(tab.id),
          className: `px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${calcTab === tab.id ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
          children: tab.label
        },
        tab.id
      )) }),
      calcTab === "dose-weight" && (() => {
        const total = calcDosePerKg && calcWeightKg ? (Number.parseFloat(calcDosePerKg) * Number.parseFloat(calcWeightKg)).toFixed(2) : null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Formula: (mg/kg) × weight = total dose" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Dose per kg (mg/kg)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: calcDosePerKg,
                  onChange: (e) => setCalcDosePerKg(e.target.value),
                  placeholder: "e.g. 10"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Patient Weight (kg)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: calcWeightKg,
                  onChange: (e) => setCalcWeightKg(e.target.value),
                  placeholder: "kg"
                }
              )
            ] })
          ] }),
          total && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 border border-green-200 rounded-xl p-4 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-green-700", children: [
              total,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "mg" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-600 mt-1", children: "Total Dose" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "mt-2 text-xs px-3 py-1 bg-indigo-600 text-white rounded-full",
                onClick: () => {
                  setDrugDose(total);
                  setLastCalculatorResult(total);
                  setShowCalculator(false);
                },
                children: "Copy to Dose Field"
              }
            )
          ] })
        ] });
      })(),
      calcTab === "dose-age" && (() => {
        const age2 = Number.parseFloat(calcAgeYears);
        const adult = Number.parseFloat(calcAdultDose);
        const result = !Number.isNaN(age2) && !Number.isNaN(adult) ? (adult * age2 / (age2 + 12)).toFixed(2) : null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Young's Rule: adult dose × age / (age + 12)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Adult Dose (mg)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: calcAdultDose,
                  onChange: (e) => setCalcAdultDose(e.target.value),
                  placeholder: "mg"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Patient Age (years)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: calcAgeYears,
                  onChange: (e) => setCalcAgeYears(e.target.value),
                  placeholder: "years"
                }
              )
            ] })
          ] }),
          result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 border border-green-200 rounded-xl p-4 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-green-700", children: [
              result,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "mg" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-600 mt-1", children: "Pediatric Dose" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "mt-2 text-xs px-3 py-1 bg-indigo-600 text-white rounded-full",
                onClick: () => {
                  setDrugDose(result);
                  setLastCalculatorResult(result);
                  setShowCalculator(false);
                },
                children: "Copy to Dose Field"
              }
            )
          ] })
        ] });
      })(),
      calcTab === "crcl" && (() => {
        const age2 = Number.parseFloat(calcCrClAge);
        const wt = Number.parseFloat(calcCrClWeight);
        const cr = Number.parseFloat(calcCrClCreat);
        let result = null;
        if (!Number.isNaN(age2) && !Number.isNaN(wt) && !Number.isNaN(cr) && cr > 0) {
          result = Math.round(
            (140 - age2) * wt * (calcCrClSex === "F" ? 0.85 : 1) / (72 * cr)
          );
        }
        const interp = result === null ? "" : result >= 90 ? "Normal (≥90)" : result >= 60 ? "Mild CKD (60-89)" : result >= 30 ? "Moderate CKD (30-59)" : result >= 15 ? "Severe CKD (15-29)" : "Kidney Failure (<15)";
        const color = result === null ? "" : result >= 90 ? "bg-green-50 border-green-200 text-green-700" : result >= 60 ? "bg-yellow-50 border-yellow-200 text-yellow-700" : "bg-red-50 border-red-200 text-red-700";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Cockcroft-Gault: ((140-age) × weight × [0.85 if F]) / (72 × SCr)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Age (years)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: calcCrClAge,
                  onChange: (e) => setCalcCrClAge(e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Weight (kg)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: calcCrClWeight,
                  onChange: (e) => setCalcCrClWeight(e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Sex" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: calcCrClSex,
                  onChange: (e) => setCalcCrClSex(e.target.value),
                  className: "w-full border rounded-md px-2 py-1.5 text-sm",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "M", children: "Male" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "F", children: "Female" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Serum Creatinine (mg/dL)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: calcCrClCreat,
                  onChange: (e) => setCalcCrClCreat(e.target.value),
                  placeholder: "mg/dL"
                }
              )
            ] })
          ] }),
          result !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `border rounded-xl p-4 text-center ${color}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold", children: [
                  result,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "mL/min" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1 font-semibold", children: interp })
              ]
            }
          )
        ] });
      })(),
      calcTab === "bmi" && (() => {
        const wt = Number.parseFloat(calcBmiWeight);
        const ht = Number.parseFloat(calcBmiHeight) / 100;
        const bmi = !Number.isNaN(wt) && !Number.isNaN(ht) && ht > 0 ? (wt / (ht * ht)).toFixed(1) : null;
        const bmiNum = bmi ? Number.parseFloat(bmi) : null;
        const getBmiCat = (b) => b < 18.5 ? {
          label: "Underweight",
          color: "bg-blue-50 border-blue-200 text-blue-700",
          row: "bg-blue-50"
        } : b < 25 ? {
          label: "Normal weight ✓",
          color: "bg-green-50 border-green-200 text-green-700",
          row: "bg-green-50"
        } : b < 30 ? {
          label: "Overweight",
          color: "bg-amber-50 border-amber-200 text-amber-700",
          row: "bg-amber-50"
        } : b < 35 ? {
          label: "Obese Class I",
          color: "bg-orange-50 border-orange-200 text-orange-700",
          row: "bg-orange-50"
        } : b < 40 ? {
          label: "Obese Class II",
          color: "bg-red-50 border-red-200 text-red-700",
          row: "bg-red-50"
        } : {
          label: "Obese Class III",
          color: "bg-red-100 border-red-300 text-red-900",
          row: "bg-red-100"
        };
        const catInfo = bmiNum !== null ? getBmiCat(bmiNum) : null;
        const bmiTable = [
          {
            range: "< 18.5",
            label: "Underweight",
            check: (b) => b < 18.5
          },
          {
            range: "18.5 – 24.9",
            label: "Normal weight ✓",
            check: (b) => b >= 18.5 && b < 25
          },
          {
            range: "25 – 29.9",
            label: "Overweight",
            check: (b) => b >= 25 && b < 30
          },
          {
            range: "30 – 34.9",
            label: "Obese Class I",
            check: (b) => b >= 30 && b < 35
          },
          {
            range: "35 – 39.9",
            label: "Obese Class II",
            check: (b) => b >= 35 && b < 40
          },
          {
            range: "≥ 40",
            label: "Obese Class III",
            check: (b) => b >= 40
          }
        ];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "BMI = weight (kg) / height (m)²" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Weight (kg)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: calcBmiWeight,
                  onChange: (e) => setCalcBmiWeight(e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Height (cm)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: calcBmiHeight,
                  onChange: (e) => setCalcBmiHeight(e.target.value),
                  placeholder: "cm"
                }
              )
            ] })
          ] }),
          bmi && catInfo && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `border rounded-xl p-4 text-center ${catInfo.color}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold", children: [
                  bmi,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "kg/m²" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1 font-bold", children: catInfo.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "mt-2 text-xs px-3 py-1 bg-indigo-600 text-white rounded-full",
                    onClick: () => {
                      setLastCalculatorResult(bmi);
                      setShowCalculator(false);
                    },
                    children: "Copy Result"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-xl overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-50 px-3 py-2 border-b", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-gray-600 uppercase tracking-wide", children: "BMI Classification" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b bg-gray-50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 font-semibold text-gray-500", children: "BMI Range" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 font-semibold text-gray-500", children: "Category" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: bmiTable.map((row) => {
                const isActive = bmiNum !== null && row.check(bmiNum);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    className: `border-b ${isActive ? catInfo ? `${catInfo.row} font-bold` : "" : ""}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: row.range }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2 flex items-center gap-1", children: [
                        row.label,
                        isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-indigo-600", children: "← Current" })
                      ] })
                    ]
                  },
                  row.range
                );
              }) })
            ] })
          ] })
        ] });
      })(),
      calcTab === "bsa" && (() => {
        const wt = Number.parseFloat(calcBsaWeight);
        const ht = Number.parseFloat(calcBsaHeight);
        const bsa = !Number.isNaN(wt) && !Number.isNaN(ht) ? Math.sqrt(ht * wt / 3600).toFixed(3) : null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Mosteller: √(height cm × weight kg / 3600)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Weight (kg)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: calcBsaWeight,
                  onChange: (e) => setCalcBsaWeight(e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Height (cm)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: calcBsaHeight,
                  onChange: (e) => setCalcBsaHeight(e.target.value),
                  placeholder: "cm"
                }
              )
            ] })
          ] }),
          bsa && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 border border-green-200 rounded-xl p-4 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-green-700", children: [
              bsa,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "m²" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-600 mt-1", children: "Body Surface Area" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "mt-2 text-xs px-3 py-1 bg-indigo-600 text-white rounded-full",
                onClick: () => {
                  setLastCalculatorResult(bsa);
                  setShowCalculator(false);
                },
                children: "Copy Result"
              }
            )
          ] })
        ] });
      })(),
      calcTab === "fluid" && (() => {
        const wt = Number.parseFloat(calcFluidWeight);
        let daily = 0;
        if (!Number.isNaN(wt) && wt > 0) {
          if (wt <= 10) daily = wt * 100;
          else if (wt <= 20) daily = 1e3 + (wt - 10) * 50;
          else daily = 1500 + (wt - 20) * 20;
        }
        const hourly = daily > 0 ? (daily / 24).toFixed(1) : null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Holliday-Segar: 100 mL/kg (≤10kg) + 50 mL/kg (10-20kg) + 20 mL/kg (>20kg)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Weight (kg)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: calcFluidWeight,
                onChange: (e) => setCalcFluidWeight(e.target.value)
              }
            )
          ] }),
          hourly && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-xl p-4 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-blue-700", children: [
              daily,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "mL/day" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-semibold text-blue-600 mt-1", children: [
              hourly,
              " mL/hour"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-blue-500 mt-1", children: "Daily Fluid Requirement" })
          ] })
        ] });
      })(),
      calcTab === "map" && (() => {
        const sbp = Number.parseFloat(calcMapSbp);
        const dbp = Number.parseFloat(calcMapDbp);
        const mapVal = !Number.isNaN(sbp) && !Number.isNaN(dbp) ? Math.round(dbp + (sbp - dbp) / 3) : null;
        const interp = mapVal === null ? "" : mapVal < 70 ? "Low MAP (<70) — Hypoperfusion Risk" : mapVal <= 100 ? "Normal MAP (70-100)" : "High MAP (>100) — Hypertension";
        const color = mapVal === null ? "" : mapVal < 70 ? "bg-red-50 border-red-200 text-red-700" : mapVal <= 100 ? "bg-green-50 border-green-200 text-green-700" : "bg-amber-50 border-amber-200 text-amber-700";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "MAP = DBP + ⅓(SBP − DBP)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Systolic BP (mmHg)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: calcMapSbp,
                  onChange: (e) => setCalcMapSbp(e.target.value),
                  placeholder: "mmHg"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Diastolic BP (mmHg)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: calcMapDbp,
                  onChange: (e) => setCalcMapDbp(e.target.value),
                  placeholder: "mmHg"
                }
              )
            ] })
          ] }),
          mapVal !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `border rounded-xl p-4 text-center ${color}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold", children: [
                  mapVal,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "mmHg" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1 font-semibold", children: interp })
              ]
            }
          )
        ] });
      })(),
      lastCalculatorResult && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 mt-3", children: [
        "Last result copied: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: lastCalculatorResult })
      ] })
    ] }) })
  ] });
}
const CKD_DOSE_DRUGS = [
  "metformin",
  "nsaid",
  "ibuprofen",
  "naproxen",
  "aminoglycoside",
  "gentamicin",
  "amikacin",
  "contrast"
];
const LIVER_DOSE_DRUGS = [
  "paracetamol",
  "methotrexate",
  "statins",
  "azathioprine",
  "nsaid",
  "ibuprofen"
];
function ClinicalIntelligencePanel({
  rxDrugs,
  allergies,
  pmh,
  diagnosis,
  dark
}) {
  const [open, setOpen] = reactExports.useState(true);
  const drugNames = rxDrugs.map(
    (d) => `${d.drugName} ${d.brandName}`.toLowerCase()
  );
  const allDrugText = drugNames.join(" ");
  const pmhLower = `${pmh} ${diagnosis}`.toLowerCase();
  const alerts = [];
  for (const pair of DRUG_INTERACTION_PAIRS) {
    const matched = pair.drugs.filter((d) => allDrugText.includes(d));
    if (matched.length >= 2) {
      alerts.push({
        type: "interaction",
        message: pair.message,
        drugs: matched
      });
    }
  }
  for (const drug of rxDrugs) {
    for (const allergen of allergies) {
      if (!allergen) continue;
      const a = allergen.toLowerCase();
      const dname = `${drug.drugName} ${drug.brandName}`.toLowerCase();
      if (dname.includes(a) || a.includes(dname.split(" ")[0])) {
        alerts.push({
          type: "allergy",
          message: `⚠️ Patient has documented allergy to "${allergen}". Drug "${drug.drugForm} ${drug.drugName}" may be contraindicated.`,
          drugs: [drug.drugName]
        });
      }
    }
  }
  const hasCKD = /ckd|chronic kidney|renal failure|renal insufficiency/i.test(
    pmhLower
  );
  const hasLiver = /liver disease|hepatic|hepatitis|cirrhosis/i.test(pmhLower);
  if (hasCKD) {
    for (const drug of rxDrugs) {
      const dname = `${drug.drugName}`.toLowerCase();
      if (CKD_DOSE_DRUGS.some((d) => dname.includes(d))) {
        alerts.push({
          type: "dose",
          message: `📉 CKD detected: Dose adjustment required for "${drug.drugForm} ${drug.drugName}". Consider renal dose or alternative.`,
          drugs: [drug.drugName]
        });
      }
    }
  }
  if (hasLiver) {
    for (const drug of rxDrugs) {
      const dname = `${drug.drugName}`.toLowerCase();
      if (LIVER_DOSE_DRUGS.some((d) => dname.includes(d))) {
        alerts.push({
          type: "dose",
          message: `📉 Liver disease detected: Caution with "${drug.drugForm} ${drug.drugName}". Dose adjustment or monitoring may be needed.`,
          drugs: [drug.drugName]
        });
      }
    }
  }
  if (alerts.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `rounded-lg shadow-sm overflow-hidden ${dark ? "bg-gray-900" : "bg-white"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setOpen((o) => !o),
            className: "w-full flex items-center justify-between px-3 py-2 bg-red-50 border-b border-red-200 hover:bg-red-100 transition-colors",
            "data-ocid": "rx.clinical_intelligence.toggle",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 text-sm font-semibold text-red-700", children: [
                "🧠 Clinical Intelligence",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full", children: alerts.length })
              ] }),
              open ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-red-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-red-600" })
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 space-y-2", children: alerts.map((alert, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex items-start gap-2 p-2.5 rounded-lg border text-sm ${alert.type === "interaction" ? "bg-red-50 border-red-200 text-red-800" : alert.type === "allergy" ? "bg-amber-50 border-amber-200 text-amber-800" : "bg-blue-50 border-blue-200 text-blue-800"}`,
            "data-ocid": `rx.clinical_alert.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base flex-shrink-0", children: alert.type === "interaction" ? "🔴" : alert.type === "allergy" ? "⚠️" : "📉" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: alert.message })
            ]
          },
          `ci-${alert.type}-${alert.message.slice(0, 20)}`
        )) })
      ]
    }
  );
}
function DrugRow({
  drug,
  index,
  dark,
  isEditing,
  allergyMatch,
  hasInteraction,
  onEdit,
  onDelete,
  onUpdate
}) {
  const rowClass = allergyMatch ? "bg-red-100 border-l-4 border-red-600 drug-row-allergy" : drug.isControlled ? "bg-red-50 border-l-4 border-red-500 drug-row-controlled" : hasInteraction ? "bg-amber-50 border-l-4 border-amber-500 drug-row-interaction" : drug.isPrn ? "bg-blue-50 border-l-[3px] border-blue-300 drug-row-prn" : "";
  const cellCls = `px-1 py-1 align-top ${dark ? "border-gray-700" : "border-gray-100"} border-b`;
  const inp = `border rounded px-1 text-xs ${dark ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"}`;
  if (isEditing) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: rowClass, "data-ocid": `rx.drug.row.${index + 1}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cellCls, children: index + 1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cellCls, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          className: `${inp} w-14`,
          value: drug.drugForm,
          onChange: (e) => onUpdate("drugForm", e.target.value),
          children: DRUG_FORMS.filter(Boolean).map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: f, children: f }, f))
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cellCls, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: `${inp} w-28`,
            value: drug.drugName,
            onChange: (e) => onUpdate("drugName", e.target.value),
            placeholder: "Generic"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: `${inp} w-28 font-semibold`,
            value: drug.brandName,
            onChange: (e) => onUpdate("brandName", e.target.value),
            placeholder: "Brand"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1 text-xs text-red-700 cursor-pointer mt-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              checked: drug.isControlled ?? false,
              onChange: (e) => onUpdate("isControlled", e.target.checked),
              className: "accent-red-600"
            }
          ),
          "Controlled drug"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cellCls, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: `${inp} w-16`,
          value: drug.dose,
          onChange: (e) => onUpdate("dose", e.target.value)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cellCls, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: `${inp} w-20`,
          value: drug.routeBn || drug.route,
          onChange: (e) => onUpdate("routeBn", e.target.value)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cellCls, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: `${inp} w-20`,
          value: drug.frequencyBn || drug.frequency,
          onChange: (e) => onUpdate("frequencyBn", e.target.value)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cellCls, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: `${inp} w-16`,
          value: drug.durationBn || drug.duration,
          onChange: (e) => onUpdate("durationBn", e.target.value)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cellCls, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: `${inp} w-24`,
          value: drug.instructionBn || drug.instructions,
          onChange: (e) => onUpdate("instructionBn", e.target.value)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cellCls, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: `${inp} w-24`,
          value: drug.specialInstructionBn || drug.specialInstruction,
          onChange: (e) => onUpdate("specialInstructionBn", e.target.value)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cellCls, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          className: `${inp} w-20`,
          value: drug.dispensedAs ?? "",
          onChange: (e) => onUpdate("dispensedAs", e.target.value),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "brand", children: "Brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "generic", children: "Generic" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "substituted", children: "Substituted" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cellCls, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onEdit, className: "text-teal-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5" }) }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: rowClass, "data-ocid": `rx.drug.row.${index + 1}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cellCls, children: index + 1 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cellCls, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-indigo-700 bg-indigo-50 rounded px-1", children: drug.drugForm }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cellCls, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-1 flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 flex-wrap", children: [
        drug.brandName ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-700", children: drug.brandName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 text-sm", children: drug.drugName })
        ] }) : drug.nameType === "brand" ? /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: drug.drugName }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: drug.drugName }),
        drug.isPrn && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-1.5 py-0.5 rounded-full bg-purple-100 text-purple-700 border border-purple-300 font-semibold whitespace-nowrap", children: "PRN" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 flex-wrap", children: [
        drug.isControlled && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-0.5 text-xs px-1.5 py-0.5 rounded bg-red-600 text-white font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-2.5 h-2.5" }),
          " CONTROLLED"
        ] }),
        allergyMatch && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-0.5 text-xs px-1.5 py-0.5 rounded bg-red-100 text-red-700 border border-red-400 font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-2.5 h-2.5" }),
          " ALLERGY:",
          " ",
          allergyMatch
        ] }),
        hasInteraction && !allergyMatch && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-0.5 text-xs px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 border border-amber-400 font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-2.5 h-2.5" }),
          " INTERACTION"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cellCls, children: drug.dose }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cellCls, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-teal-700", children: drug.routeBn || drug.route }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cellCls, children: drug.isPrn ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "italic text-purple-600 text-xs", children: [
      "PRN",
      drug.prnCondition ? ` — ${drug.prnCondition}` : ""
    ] }) : drug.frequencyBn || drug.frequency }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cellCls, children: drug.isPrn ? "—" : drug.durationBn || drug.duration }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cellCls, children: drug.instructionBn || drug.instructions }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cellCls, children: drug.specialInstructionBn || drug.specialInstruction }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cellCls, children: drug.dispensedAs ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: `text-xs px-1.5 py-0.5 rounded font-medium ${drug.dispensedAs === "substituted" ? "bg-amber-100 text-amber-700" : "bg-teal-50 text-teal-700"}`,
        children: drug.dispensedAs === "substituted" && drug.substitutedBrand ? `Sub: ${drug.substitutedBrand}` : drug.dispensedAs
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-xs", children: "—" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: `${cellCls} flex gap-1`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onEdit,
          className: "text-blue-500 hover:text-blue-700",
          "data-ocid": `rx.drug_edit.button.${index + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-3.5 h-3.5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onDelete,
          className: "text-red-500 hover:text-red-700",
          "data-ocid": `rx.drug_delete.button.${index + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
        }
      )
    ] })
  ] });
}
function PrescriptionPreview({
  withHeader,
  headerType,
  doctorInfo,
  hospitalHeaderImg,
  chamberHeaderImg,
  signatureUrl,
  name,
  age,
  sex,
  weight,
  rxDate,
  regNo,
  diagnosis,
  drugs,
  adviceText,
  cc,
  pmh,
  oe,
  dh,
  historyPersonal,
  historyFamily,
  historyImmunization,
  historyAllergy,
  historyOthers,
  investigation,
  adviceNewInv,
  followUpDate,
  finalizedAt,
  isInternDraft
}) {
  const printId = "rx-preview-print";
  const hasHistory = historyPersonal || historyFamily || historyImmunization || historyAllergy || historyOthers;
  const activeHeaderImg = headerType === "hospital" ? hospitalHeaderImg : chamberHeaderImg;
  const numberedAdvice = numberAdviceLines(adviceText);
  const sigHtml = getSignatureHtml(
    (doctorInfo == null ? void 0 : doctorInfo.name) ?? "Dr. Arman Kabir (ZOSID)",
    signatureUrl
  );
  function handlePrint(saveAsPdf = false) {
    const el = document.getElementById(printId);
    if (!el) return;
    const win = window.open("", "_blank");
    if (!win) return;
    win.document.write(`
      <html><head><title>Prescription</title>
      <style>
        * { box-sizing: border-box; }
        body { font-family: Georgia, serif; font-size: 11pt; margin: 15mm; color: #111; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        /* Grid layout */
        .grid { display: grid !important; }
        .grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)) !important; }
        .col-span-2 { grid-column: span 2 / span 2 !important; }
        .col-span-3 { grid-column: span 3 / span 3 !important; }
        .gap-3 { gap: 0.75rem !important; }
        /* Flex */
        .flex { display: flex !important; }
        .flex-wrap { flex-wrap: wrap !important; }
        .flex-col { flex-direction: column !important; }
        .items-start { align-items: flex-start !important; }
        .justify-between { justify-content: space-between !important; }
        .gap-x-4 { column-gap: 1rem !important; }
        .gap-y-0 { row-gap: 0 !important; }
        /* Spacing */
        .space-y-2 > * + * { margin-top: 0.5rem !important; }
        .space-y-1 > * + * { margin-top: 0.25rem !important; }
        .mb-1 { margin-bottom: 0.25rem !important; }
        .mb-2 { margin-bottom: 0.5rem !important; }
        .mb-3 { margin-bottom: 0.75rem !important; }
        .mt-3 { margin-top: 0.75rem !important; }
        .pb-2 { padding-bottom: 0.5rem !important; }
        .pt-2 { padding-top: 0.5rem !important; }
        .pl-4 { padding-left: 1rem !important; }
        .pr-2 { padding-right: 0.5rem !important; }
        .p-4 { padding: 1rem !important; }
        /* Borders */
        .border-b { border-bottom: 1px solid #d1d5db !important; }
        .border-t { border-top: 1px solid #d1d5db !important; }
        .border-r { border-right: 1px solid #d1d5db !important; }
        .border { border: 1px solid #d1d5db !important; }
        .border-gray-200 { border-color: #e5e7eb !important; }
        /* Typography */
        .font-serif { font-family: Georgia, serif !important; }
        .font-bold { font-weight: 700 !important; }
        .font-medium { font-weight: 500 !important; }
        .font-semibold { font-weight: 600 !important; }
        .text-base { font-size: 1rem !important; }
        .text-sm { font-size: 0.875rem !important; }
        .text-xs { font-size: 0.75rem !important; }
        .text-2xl { font-size: 1.5rem !important; }
        .uppercase { text-transform: uppercase !important; }
        .whitespace-pre-wrap { white-space: pre-wrap !important; }
        .leading-snug { line-height: 1.375 !important; }
        /* Colors - force print */
        .text-gray-900 { color: #111827 !important; }
        .text-gray-800 { color: #1f2937 !important; }
        .text-gray-600 { color: #4b5563 !important; }
        .text-gray-500 { color: #6b7280 !important; }
        .text-gray-400 { color: #9ca3af !important; }
        .text-indigo-600 { color: #4f46e5 !important; }
        .text-orange-600 { color: #ea580c !important; }
        .text-teal-600 { color: #0d9488 !important; }
        .text-right { text-align: right !important; }
        /* Misc */
        .rounded { border-radius: 0.25rem !important; }
        .max-w-2xl { max-width: 42rem !important; }
        .mx-auto { margin-left: auto !important; margin-right: auto !important; }
        .ml-1 { margin-left: 0.25rem !important; }
        strong { font-weight: 700 !important; }
        @media print {
          body { margin: 10mm; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
        }
      </style></head><body>
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border border-t-0 border-gray-200 bg-white p-4 text-sm",
      "data-ocid": "rx.preview.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 mb-3", children: [
          finalizedAt && !isInternDraft && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-400 text-emerald-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-emerald-600 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm", children: "✅ Saved & Finalized" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-xs text-emerald-600", children: new Date(finalizedAt).toLocaleString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit"
              }) })
            ] })
          ] }),
          isInternDraft && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-400 text-amber-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm", children: "📋 Draft – Awaiting Approval" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 ml-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => handlePrint(),
                className: "flex items-center gap-1 text-sm px-3 py-1 bg-teal-600 text-white rounded hover:bg-teal-700",
                "data-ocid": "rx.print.button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3.5 h-3.5" }),
                  " Print"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => handlePrint(true),
                className: "flex items-center gap-1 text-sm px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700",
                "data-ocid": "rx.download.button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
                  " Save PDF"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            id: printId,
            className: "font-serif text-gray-900 max-w-2xl mx-auto border border-gray-200 p-4 rounded",
            children: [
              withHeader && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b pb-2 mb-3", children: activeHeaderImg ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: activeHeaderImg,
                  alt: "Prescription Header",
                  className: "max-h-24 w-full object-contain"
                }
              ) : headerType === "hospital" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-base", children: (doctorInfo == null ? void 0 : doctorInfo.hospitalName) ?? "Dr. Sirajul Islam Medical College Hospital" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Department of General Surgery" })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-lg", children: (doctorInfo == null ? void 0 : doctorInfo.name) ?? "Dr. Arman Kabir (ZOSID)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 font-medium", children: (doctorInfo == null ? void 0 : doctorInfo.degrees) ?? "MBBS (D.U.) | Emergency Medical Officer" }),
                  (doctorInfo == null ? void 0 : doctorInfo.posts) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: doctorInfo.posts }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: (doctorInfo == null ? void 0 : doctorInfo.chamber) ?? "সেন্চুরি আর্কেড মার্কেট, মগবাজার, ঢাকা" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right text-sm text-gray-600", children: [
                  (doctorInfo == null ? void 0 : doctorInfo.regNo) && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    "Reg. no. ",
                    doctorInfo.regNo
                  ] }),
                  !(doctorInfo == null ? void 0 : doctorInfo.regNo) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Reg. no. A-105224" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    "Mob: ",
                    (doctorInfo == null ? void 0 : doctorInfo.phone) ?? "01751959262"
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-x-4 gap-y-0.5 text-sm border-b pb-2 mb-3", children: [
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
                sex && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sex:" }),
                  " ",
                  sex
                ] }),
                weight && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Weight:" }),
                  " ",
                  weight,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "kg" })
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
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-5 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-2 text-sm border-r pr-2", children: [
                  cc && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xs uppercase text-gray-500 mb-0.5", children: "C/C" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-pre-wrap text-xs", children: cc })
                  ] }),
                  pmh && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xs uppercase text-gray-500 mb-0.5", children: "P/M/H" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-pre-wrap text-xs", children: pmh })
                  ] }),
                  hasHistory && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xs uppercase text-gray-500 mb-0.5", children: "History" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs space-y-0.5", children: [
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
                  dh && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xs uppercase text-gray-500 mb-0.5", children: "D/H" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-pre-wrap text-xs", children: dh })
                  ] }),
                  oe && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xs uppercase text-gray-500 mb-0.5", children: "O/E" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-pre-wrap text-xs", children: oe })
                  ] }),
                  investigation && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xs uppercase text-gray-500 mb-0.5", children: "Investigation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-pre-wrap text-xs", children: investigation })
                  ] }),
                  adviceNewInv && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xs uppercase text-gray-500 mb-0.5", children: "Advice / New Inv." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-pre-wrap text-xs", children: adviceNewInv })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3", children: [
                  diagnosis && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm", children: "Dx: " }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: diagnosis })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold mb-2", children: "ℝ" }),
                  drugs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400 italic", children: "No medications added." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: drugs.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-snug", children: [
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
                        d.routeBn || d.route,
                        d.frequencyBn || d.frequency,
                        d.durationBn || d.duration ? `–${d.durationBn || d.duration}` : "",
                        d.instructionBn || d.instructions
                      ].filter(Boolean).join("  "),
                      (d.specialInstructionBn || d.specialInstruction) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-orange-600 ml-1", children: [
                        "· ",
                        d.specialInstructionBn || d.specialInstruction
                      ] })
                    ] })
                  ] }, d.id)) }),
                  adviceText && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-2 border-t", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xs uppercase text-gray-500 mb-1", children: "পরামর্শ" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs whitespace-pre-wrap", children: numberedAdvice })
                  ] }),
                  followUpDate && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 pt-2 border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs font-bold text-emerald-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-3.5 h-3.5" }),
                    "Follow-up Date:",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: new Date(followUpDate).toLocaleDateString("en-GB", {
                      weekday: "long",
                      day: "2-digit",
                      month: "long",
                      year: "numeric"
                    }) })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-4 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-block text-center", children: [
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
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: (doctorInfo == null ? void 0 : doctorInfo.name) ?? "Dr. Arman Kabir (ZOSID)" })
                    ] })
                  ] }) })
                ] })
              ] })
            ]
          }
        )
      ]
    }
  );
}
export {
  CurrentMedicationList as C,
  FirstPrescriptionLabel as F,
  InvestigationTracker as I,
  PrescriptionDiffRow as P,
  Separator as S,
  UpgradedPrescriptionEMR as U,
  ViewedByPatientBadge as V,
  getPrescriptionHeaderHtml as a,
  computeComplaintTrends as b,
  checkDrugAllergyMatch as c,
  generateAIInterpretation as d,
  getDoctorSignature as e,
  clearDoctorSignature as f,
  getAllergiesForPatient as g,
  getSignatureHtml as h,
  isVaccineOverdue as i,
  getPrescriptionHeaderText as j,
  loadTrackedInvestigations as l,
  numberAdviceLines as n,
  setDoctorSignature as s
};
