import { i as createLucideIcon, j as jsxRuntimeExports, T as Tabs, l as TabsList, n as TabsTrigger, aa as Bell, h as Badge, p as TabsContent, r as reactExports, B as Button, L as Label, I as Input, S as Select, d as SelectTrigger, e as SelectValue, f as SelectContent, g as SelectItem, C as ChevronUp, a as ChevronDown, u as ue, K as useAdminAuth, q as useEmailAuth, ab as TriangleAlert, a3 as Users, am as User, ae as ClipboardList, o as Stethoscope, a1 as loadRegistry, a2 as loadPatientRegistry, a4 as UserCheck, a5 as STAFF_ROLE_LABELS, b as CircleCheck, a6 as CircleX, H as Hospital, O as getAuditLog, ag as FlaskConical, b1 as Switch, a8 as saveRegistry, a9 as savePatientRegistry } from "./index-DJeWhCy-.js";
import { C as Card, a as CardHeader, c as CardTitle, d as CardDescription, b as CardContent } from "./card-COhiAhz1.js";
import { C as Checkbox } from "./checkbox-ByWwQWzS.js";
import { T as Textarea } from "./textarea-BQiWEu5n.js";
import { u as useDoctorContent, I as Image, S as Star } from "./useDoctorContent-Cx8T-OwA.js";
import { B as BookOpen } from "./book-open-Bi6sJ5u3.js";
import { F as FileText } from "./file-text-DJrK52te.js";
import { M as MonitorPlay } from "./monitor-play-DHOzn285.js";
import { C as Calendar } from "./calendar-BL7xJRSg.js";
import { P as Pen } from "./pen-CfMhwJvZ.js";
import { T as Trash2 } from "./trash-2-B3l-ZhdV.js";
import { P as Plus } from "./plus-CHPIrJ6M.js";
import { S as Save } from "./save-DzMd4SiT.js";
import { E as ExternalLink } from "./external-link-YRWS9f1T.js";
import { V as Video } from "./video-h2z_1vJH.js";
import { l as loadInvestigationRates } from "./InvestigationPayment-BfpQZUDn.js";
import { S as Shield } from "./shield-D-es88Nw.js";
import { U as Upload } from "./upload-10Urw3kY.js";
import { D as Database } from "./database-Ck9e-_FX.js";
import { S as Settings2 } from "./settings-2-Bp-4AVPw.js";
import { C as Camera } from "./camera-DpsioLhp.js";
import { M as MapPin } from "./map-pin-BVGvB4pd.js";
import { D as Download } from "./download-qc_8yQ5r.js";
import { T as TestTube, E as EyeOff } from "./test-tube-AQ_p65EL.js";
import { L as LogOut } from "./log-out-BVpvzsgE.js";
import { P as Pencil } from "./pencil-BZAaPpo6.js";
import { E as Eye } from "./eye-DZPhoU57.js";
import { B as Building2 } from "./building-2-CMX9_teL.js";
import "./MoneyReceipt-CSWlD73e.js";
import "./message-circle-qSON-RM2.js";
import "./rotate-ccw-DEYXgLqp.js";
import "./printer-BQUreT8L.js";
import "./receipt-DqXr-L3S.js";
import "./search-BLymxia-.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
const Link = createLucideIcon("link", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 17v5", key: "bb1du9" }],
  [
    "path",
    {
      d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",
      key: "1nkz8b"
    }
  ]
];
const Pin = createLucideIcon("pin", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M14 8H8", key: "1l3xfs" }],
  ["path", { d: "M16 12H8", key: "1fr5h0" }],
  ["path", { d: "M13 16H8", key: "wsln4y" }]
];
const ReceiptText = createLucideIcon("receipt-text", __iconNode);
function uid() {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
}
function getYoutubeThumbnail(url) {
  const match = url.match(
    /(?:youtube\.com\/watch\?(?:.*&)?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (match) return `https://img.youtube.com/vi/${match[1]}/mqdefault.jpg`;
  return null;
}
const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
function ClassroomGallerySection({
  items,
  onSave
}) {
  const fileInputRef = reactExports.useRef(null);
  const [uploading, setUploading] = reactExports.useState(false);
  const [editCaptionId, setEditCaptionId] = reactExports.useState(null);
  const [captionDraft, setCaptionDraft] = reactExports.useState("");
  const [categoryDraft, setCategoryDraft] = reactExports.useState("");
  const handleFiles = (files) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    const readers = [];
    for (const file of Array.from(files)) {
      if (!file.type.startsWith("image/")) continue;
      readers.push(
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            var _a;
            resolve({
              id: uid(),
              dataUrl: (_a = e.target) == null ? void 0 : _a.result,
              caption: file.name.replace(/\.[^.]+$/, ""),
              category: ""
            });
          };
          reader.readAsDataURL(file);
        })
      );
    }
    Promise.all(readers).then((newImgs) => {
      onSave([...items, ...newImgs]);
      setUploading(false);
      ue.success(`${newImgs.length} image(s) added to gallery.`);
    });
  };
  const startEdit = (img) => {
    setEditCaptionId(img.id);
    setCaptionDraft(img.caption);
    setCategoryDraft(img.category);
  };
  const saveCaption = (id) => {
    onSave(
      items.map(
        (img) => img.id === id ? { ...img, caption: captionDraft, category: categoryDraft } : img
      )
    );
    setEditCaptionId(null);
    ue.success("Image updated.");
  };
  const deleteImage = (id) => {
    onSave(items.filter((img) => img.id !== id));
    ue.success("Image removed.");
  };
  const moveUp = (idx) => {
    if (idx === 0) return;
    const arr = [...items];
    [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
    onSave(arr);
  };
  const moveDown = (idx) => {
    if (idx === items.length - 1) return;
    const arr = [...items];
    [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
    onSave(arr);
  };
  const CATEGORIES = [
    "",
    "Medical",
    "Educational",
    "Event",
    "Facility"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
        items.length,
        " image",
        items.length !== 1 ? "s" : "",
        " in classroom gallery"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          variant: "outline",
          className: "gap-1.5",
          onClick: () => {
            var _a;
            return (_a = fileInputRef.current) == null ? void 0 : _a.click();
          },
          disabled: uploading,
          "data-ocid": "classroom.gallery.upload_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-3.5 h-3.5" }),
            "Upload Images"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: fileInputRef,
        type: "file",
        accept: "image/*",
        multiple: true,
        className: "hidden",
        onChange: (e) => handleFiles(e.target.files)
      }
    ),
    items.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "w-full border-2 border-dashed border-primary/30 rounded-xl p-10 text-center cursor-pointer hover:border-primary/60 transition-colors",
        onClick: () => {
          var _a;
          return (_a = fileInputRef.current) == null ? void 0 : _a.click();
        },
        "data-ocid": "classroom.gallery.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-10 h-10 mx-auto mb-2 text-muted-foreground/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Drop images here or click to upload" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/60 mt-1", children: "JPEG, PNG, WebP supported" })
        ]
      }
    ),
    items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: items.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-xl p-3 flex gap-3 items-start",
        "data-ocid": `classroom.gallery.item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: img.dataUrl,
              alt: img.caption || `Gallery image ${i + 1}`,
              className: "w-20 h-16 object-cover rounded-lg shrink-0 border border-border"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: editCaptionId === img.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: captionDraft,
                onChange: (e) => setCaptionDraft(e.target.value),
                placeholder: "Caption (optional)",
                className: "h-7 text-xs",
                "data-ocid": `classroom.gallery.caption.input.${i + 1}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: categoryDraft,
                onValueChange: (v) => setCategoryDraft(v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-7 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Category (optional)" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c || "none", children: c || "No category" }, c || "none")) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  className: "h-6 text-xs gap-1",
                  onClick: () => saveCaption(img.id),
                  "data-ocid": `classroom.gallery.save_button.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3 h-3" }),
                    " Save"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-6 text-xs",
                  onClick: () => setEditCaptionId(null),
                  children: "Cancel"
                }
              )
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: img.caption || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground italic", children: "No caption" }) }),
            img.category && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mt-0.5 text-xs px-1.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20", children: img.category })
          ] }) }),
          editCaptionId !== img.id && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "ghost",
                className: "h-7 w-7 p-0",
                onClick: () => startEdit(img),
                "data-ocid": `classroom.gallery.edit_button.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "ghost",
                className: "h-7 w-7 p-0",
                onClick: () => moveUp(i),
                disabled: i === 0,
                "aria-label": "Move up",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "ghost",
                className: "h-7 w-7 p-0",
                onClick: () => moveDown(i),
                disabled: i === items.length - 1,
                "aria-label": "Move down",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "ghost",
                className: "h-7 w-7 p-0 text-destructive hover:text-destructive",
                onClick: () => deleteImage(img.id),
                "data-ocid": `classroom.gallery.delete_button.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ]
      },
      img.id
    )) })
  ] });
}
function AnnouncementsSection({
  items,
  onSave
}) {
  const blank = {
    title: "",
    body: "",
    date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
    isPinned: false
  };
  const [form, setForm] = reactExports.useState(blank);
  const [editId, setEditId] = reactExports.useState(null);
  const startEdit = (item) => {
    setEditId(item.id);
    setForm({
      title: item.title,
      body: item.body,
      date: item.date,
      isPinned: item.isPinned
    });
  };
  const cancelEdit = () => {
    setEditId(null);
    setForm(blank);
  };
  const saveItem = () => {
    if (!form.title.trim()) {
      ue.error("Title is required");
      return;
    }
    if (editId) {
      onSave(items.map((a) => a.id === editId ? { ...form, id: editId } : a));
      ue.success("Announcement updated");
    } else {
      onSave([...items, { ...form, id: uid() }]);
      ue.success("Announcement added");
    }
    setEditId(null);
    setForm(blank);
  };
  const deleteItem = (id) => {
    onSave(items.filter((a) => a.id !== id));
    ue.success("Announcement deleted");
  };
  const sorted = [...items].sort((a, b) => {
    if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1;
    return b.date.localeCompare(a.date);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      sorted.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-sm text-muted-foreground text-center py-4 bg-muted/30 rounded-lg",
          "data-ocid": "classroom.announcements.empty_state",
          children: "No announcements yet. Add one below."
        }
      ),
      sorted.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-xl p-3 space-y-1",
          "data-ocid": `classroom.announcements.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-1 min-w-0", children: [
                item.isPinned && /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { className: "w-3.5 h-3.5 text-amber-500 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground truncate", children: item.title }),
                item.isPinned && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-amber-100 text-amber-800 border-amber-200 text-xs shrink-0", children: "Pinned" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "ghost",
                    className: "h-7 w-7 p-0",
                    onClick: () => startEdit(item),
                    "data-ocid": `classroom.announcements.edit_button.${i + 1}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3.5 h-3.5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "ghost",
                    className: "h-7 w-7 p-0 text-destructive hover:text-destructive",
                    onClick: () => deleteItem(item.id),
                    "data-ocid": `classroom.announcements.delete_button.${i + 1}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: item.date }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 line-clamp-2", children: item.body })
          ]
        },
        item.id
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 rounded-xl border border-border p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 text-primary" }),
        editId ? "Edit Announcement" : "Add Announcement"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ann-title", className: "text-xs", children: "Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "ann-title",
            placeholder: "e.g. Ward Round Schedule Change",
            value: form.title,
            onChange: (e) => setForm((f) => ({ ...f, title: e.target.value })),
            "data-ocid": "classroom.announcements.title.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ann-body", className: "text-xs", children: "Body" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            id: "ann-body",
            placeholder: "Write the announcement details here...",
            value: form.body,
            onChange: (e) => setForm((f) => ({ ...f, body: e.target.value })),
            className: "min-h-[80px]",
            "data-ocid": "classroom.announcements.body.textarea"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ann-date", className: "text-xs", children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "ann-date",
              type: "date",
              value: form.date,
              onChange: (e) => setForm((f) => ({ ...f, date: e.target.value })),
              "data-ocid": "classroom.announcements.date.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Checkbox,
            {
              id: "ann-pinned",
              checked: form.isPinned,
              onCheckedChange: (v) => setForm((f) => ({ ...f, isPinned: !!v })),
              "data-ocid": "classroom.announcements.pinned.checkbox"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ann-pinned", className: "text-sm cursor-pointer", children: "Pin this announcement" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "gap-1.5",
            onClick: saveItem,
            "data-ocid": "classroom.announcements.save_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3.5 h-3.5" }),
              editId ? "Update" : "Add"
            ]
          }
        ),
        editId && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            onClick: cancelEdit,
            "data-ocid": "classroom.announcements.cancel_button",
            children: "Cancel"
          }
        )
      ] })
    ] })
  ] });
}
function LectureNotesSection({
  items,
  onSave
}) {
  const blank = {
    title: "",
    description: "",
    link: "",
    pdfLink: "",
    datePublished: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
  };
  const [form, setForm] = reactExports.useState(blank);
  const [editId, setEditId] = reactExports.useState(null);
  const startEdit = (item) => {
    setEditId(item.id);
    setForm({
      title: item.title,
      description: item.description,
      link: item.link,
      pdfLink: item.pdfLink,
      datePublished: item.datePublished
    });
  };
  const cancelEdit = () => {
    setEditId(null);
    setForm(blank);
  };
  const saveItem = () => {
    if (!form.title.trim()) {
      ue.error("Title is required");
      return;
    }
    if (editId) {
      onSave(items.map((n) => n.id === editId ? { ...form, id: editId } : n));
      ue.success("Note updated");
    } else {
      onSave([...items, { ...form, id: uid() }]);
      ue.success("Note added");
    }
    setEditId(null);
    setForm(blank);
  };
  const deleteItem = (id) => {
    onSave(items.filter((n) => n.id !== id));
    ue.success("Note deleted");
  };
  const sorted = [...items].sort(
    (a, b) => b.datePublished.localeCompare(a.datePublished)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      sorted.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-sm text-muted-foreground text-center py-4 bg-muted/30 rounded-lg",
          "data-ocid": "classroom.notes.empty_state",
          children: "No lecture notes yet. Add one below."
        }
      ),
      sorted.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-xl p-3 space-y-1",
          "data-ocid": `classroom.notes.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground flex-1 min-w-0 truncate", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "ghost",
                    className: "h-7 w-7 p-0",
                    onClick: () => startEdit(item),
                    "data-ocid": `classroom.notes.edit_button.${i + 1}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3.5 h-3.5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "ghost",
                    className: "h-7 w-7 p-0 text-destructive hover:text-destructive",
                    onClick: () => deleteItem(item.id),
                    "data-ocid": `classroom.notes.delete_button.${i + 1}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: item.datePublished }),
            item.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 line-clamp-2", children: item.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
              item.link && item.link !== "#" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: item.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-xs text-primary hover:underline flex items-center gap-1",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" }),
                    "Open Link"
                  ]
                }
              ),
              item.pdfLink && item.pdfLink !== "#" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: item.pdfLink,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-xs text-primary hover:underline flex items-center gap-1",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3 h-3" }),
                    "PDF"
                  ]
                }
              )
            ] })
          ]
        },
        item.id
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 rounded-xl border border-border p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 text-primary" }),
        editId ? "Edit Note" : "Add Lecture Note"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "note-title", className: "text-xs", children: "Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "note-title",
            placeholder: "e.g. Acute Abdomen — Differential Diagnosis",
            value: form.title,
            onChange: (e) => setForm((f) => ({ ...f, title: e.target.value })),
            "data-ocid": "classroom.notes.title.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "note-desc", className: "text-xs", children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            id: "note-desc",
            placeholder: "Brief description of the lecture note...",
            value: form.description,
            onChange: (e) => setForm((f) => ({ ...f, description: e.target.value })),
            className: "min-h-[60px]",
            "data-ocid": "classroom.notes.description.textarea"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "note-link", className: "text-xs", children: "Link (URL)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "note-link",
              type: "url",
              placeholder: "https://...",
              value: form.link,
              onChange: (e) => setForm((f) => ({ ...f, link: e.target.value })),
              "data-ocid": "classroom.notes.link.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "note-pdf", className: "text-xs", children: "PDF / Document Link" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "note-pdf",
              type: "url",
              placeholder: "https://... (PDF URL)",
              value: form.pdfLink,
              onChange: (e) => setForm((f) => ({ ...f, pdfLink: e.target.value })),
              "data-ocid": "classroom.notes.pdf_link.input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "note-date", className: "text-xs", children: "Date Published" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "note-date",
            type: "date",
            value: form.datePublished,
            onChange: (e) => setForm((f) => ({ ...f, datePublished: e.target.value })),
            className: "w-auto",
            "data-ocid": "classroom.notes.date.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "gap-1.5",
            onClick: saveItem,
            "data-ocid": "classroom.notes.save_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3.5 h-3.5" }),
              editId ? "Update" : "Add"
            ]
          }
        ),
        editId && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            onClick: cancelEdit,
            "data-ocid": "classroom.notes.cancel_button",
            children: "Cancel"
          }
        )
      ] })
    ] })
  ] });
}
function VideoLecturesSection({
  items,
  onSave
}) {
  const blank = {
    title: "",
    url: "",
    description: "",
    isFeatured: false
  };
  const [form, setForm] = reactExports.useState(blank);
  const [editId, setEditId] = reactExports.useState(null);
  const startEdit = (item) => {
    setEditId(item.id);
    setForm({
      title: item.title,
      url: item.url,
      description: item.description,
      isFeatured: item.isFeatured
    });
  };
  const cancelEdit = () => {
    setEditId(null);
    setForm(blank);
  };
  const saveItem = () => {
    if (!form.title.trim()) {
      ue.error("Title is required");
      return;
    }
    if (!form.url.trim()) {
      ue.error("Video URL is required");
      return;
    }
    if (editId) {
      onSave(items.map((v) => v.id === editId ? { ...form, id: editId } : v));
      ue.success("Video updated");
    } else {
      onSave([...items, { ...form, id: uid() }]);
      ue.success("Video added");
    }
    setEditId(null);
    setForm(blank);
  };
  const deleteItem = (id) => {
    onSave(items.filter((v) => v.id !== id));
    ue.success("Video deleted");
  };
  const sorted = [...items].sort((a, b) => {
    if (a.isFeatured !== b.isFeatured) return a.isFeatured ? -1 : 1;
    return 0;
  });
  const previewThumb = getYoutubeThumbnail(form.url);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      sorted.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-sm text-muted-foreground text-center py-4 bg-muted/30 rounded-lg",
          "data-ocid": "classroom.videos.empty_state",
          children: "No videos yet. Add one below."
        }
      ),
      sorted.map((item, i) => {
        const thumb = getYoutubeThumbnail(item.url);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-xl p-3 flex gap-3",
            "data-ocid": `classroom.videos.item.${i + 1}`,
            children: [
              thumb ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: thumb,
                  alt: item.title,
                  className: "w-20 h-14 object-cover rounded-lg shrink-0 border border-border"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-14 rounded-lg bg-muted/60 flex items-center justify-center shrink-0 border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "w-5 h-5 text-muted-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 space-y-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  item.isFeatured && /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 text-amber-500 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground truncate", children: item.title }),
                  item.isFeatured && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-amber-100 text-amber-800 border-amber-200 text-xs shrink-0", children: "Featured" })
                ] }),
                item.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-1", children: item.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: item.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-xs text-primary hover:underline flex items-center gap-1 mt-0.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" }),
                      "Open Video"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "ghost",
                    className: "h-7 w-7 p-0",
                    onClick: () => startEdit(item),
                    "data-ocid": `classroom.videos.edit_button.${i + 1}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3.5 h-3.5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "ghost",
                    className: "h-7 w-7 p-0 text-destructive hover:text-destructive",
                    onClick: () => deleteItem(item.id),
                    "data-ocid": `classroom.videos.delete_button.${i + 1}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                  }
                )
              ] })
            ]
          },
          item.id
        );
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 rounded-xl border border-border p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 text-primary" }),
        editId ? "Edit Video" : "Add Video Lecture"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "vid-title", className: "text-xs", children: "Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "vid-title",
            placeholder: "e.g. Surgical Emergencies — Lecture",
            value: form.title,
            onChange: (e) => setForm((f) => ({ ...f, title: e.target.value })),
            "data-ocid": "classroom.videos.title.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "vid-url", className: "text-xs", children: "Video URL (YouTube / Vimeo)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "vid-url",
            type: "url",
            placeholder: "https://www.youtube.com/watch?v=...",
            value: form.url,
            onChange: (e) => setForm((f) => ({ ...f, url: e.target.value })),
            "data-ocid": "classroom.videos.url.input"
          }
        )
      ] }),
      form.url && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg overflow-hidden border border-border w-40", children: previewThumb ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: previewThumb,
          alt: "Thumbnail preview",
          className: "w-full object-cover"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-24 bg-muted/40 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center px-2", children: "Preview unavailable for this URL" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "vid-desc", className: "text-xs", children: "Description (optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            id: "vid-desc",
            placeholder: "Brief description of the video...",
            value: form.description,
            onChange: (e) => setForm((f) => ({ ...f, description: e.target.value })),
            className: "min-h-[60px]",
            "data-ocid": "classroom.videos.description.textarea"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            id: "vid-featured",
            checked: form.isFeatured,
            onCheckedChange: (v) => setForm((f) => ({ ...f, isFeatured: !!v })),
            "data-ocid": "classroom.videos.featured.checkbox"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "vid-featured", className: "text-sm cursor-pointer", children: "Feature this video (shown at top)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "gap-1.5",
            onClick: saveItem,
            "data-ocid": "classroom.videos.save_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3.5 h-3.5" }),
              editId ? "Update" : "Add"
            ]
          }
        ),
        editId && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            onClick: cancelEdit,
            "data-ocid": "classroom.videos.cancel_button",
            children: "Cancel"
          }
        )
      ] })
    ] })
  ] });
}
function ClassScheduleSection({
  items,
  onSave
}) {
  const blank = {
    day: "Monday",
    time: "08:00",
    subject: "",
    venue: ""
  };
  const [form, setForm] = reactExports.useState(blank);
  const [editId, setEditId] = reactExports.useState(null);
  const startEdit = (item) => {
    setEditId(item.id);
    setForm({
      day: item.day,
      time: item.time,
      subject: item.subject,
      venue: item.venue
    });
  };
  const cancelEdit = () => {
    setEditId(null);
    setForm(blank);
  };
  const saveItem = () => {
    if (!form.subject.trim()) {
      ue.error("Subject / topic is required");
      return;
    }
    if (editId) {
      onSave(items.map((s) => s.id === editId ? { ...form, id: editId } : s));
      ue.success("Schedule entry updated");
    } else {
      onSave([...items, { ...form, id: uid() }]);
      ue.success("Schedule entry added");
    }
    setEditId(null);
    setForm(blank);
  };
  const deleteItem = (id) => {
    onSave(items.filter((s) => s.id !== id));
    ue.success("Schedule entry deleted");
  };
  const dayOrder = (d) => DAYS.indexOf(d);
  const sorted = [...items].sort(
    (a, b) => dayOrder(a.day) - dayOrder(b.day) || a.time.localeCompare(b.time)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      sorted.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-sm text-muted-foreground text-center py-4 bg-muted/30 rounded-lg",
          "data-ocid": "classroom.schedule.empty_state",
          children: "No classes scheduled yet. Add one below."
        }
      ),
      sorted.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-xl p-3 flex items-center gap-3",
          "data-ocid": `classroom.schedule.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 text-center bg-primary/10 rounded-lg px-2.5 py-1.5 min-w-[64px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-primary", children: item.day.slice(0, 3).toUpperCase() }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-mono mt-0.5", children: item.time })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground truncate", children: item.subject }),
              item.venue && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: item.venue })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "ghost",
                  className: "h-7 w-7 p-0",
                  onClick: () => startEdit(item),
                  "data-ocid": `classroom.schedule.edit_button.${i + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3.5 h-3.5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "ghost",
                  className: "h-7 w-7 p-0 text-destructive hover:text-destructive",
                  onClick: () => deleteItem(item.id),
                  "data-ocid": `classroom.schedule.delete_button.${i + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                }
              )
            ] })
          ]
        },
        item.id
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 rounded-xl border border-border p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 text-primary" }),
        editId ? "Edit Class" : "Add Class"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Day" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.day,
              onValueChange: (v) => setForm((f) => ({ ...f, day: v })),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "classroom.schedule.day.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: DAYS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: d, children: d }, d)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "class-time", className: "text-xs", children: "Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "class-time",
              type: "time",
              value: form.time,
              onChange: (e) => setForm((f) => ({ ...f, time: e.target.value })),
              "data-ocid": "classroom.schedule.time.input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "class-subject", className: "text-xs", children: "Subject / Topic" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "class-subject",
            placeholder: "e.g. Clinical Surgery — Ward Round",
            value: form.subject,
            onChange: (e) => setForm((f) => ({ ...f, subject: e.target.value })),
            "data-ocid": "classroom.schedule.subject.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "class-venue", className: "text-xs", children: "Venue / Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "class-venue",
            placeholder: "e.g. Lecture Hall A",
            value: form.venue,
            onChange: (e) => setForm((f) => ({ ...f, venue: e.target.value })),
            "data-ocid": "classroom.schedule.venue.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "gap-1.5",
            onClick: saveItem,
            "data-ocid": "classroom.schedule.save_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3.5 h-3.5" }),
              editId ? "Update" : "Add"
            ]
          }
        ),
        editId && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            onClick: cancelEdit,
            "data-ocid": "classroom.schedule.cancel_button",
            children: "Cancel"
          }
        )
      ] })
    ] })
  ] });
}
function ClassroomSettings({ doctorEmail }) {
  const { getContent, updateField } = useDoctorContent();
  const doctorKey = doctorEmail === "samiashikder33@gmail.com" ? "samia" : "arman";
  const content = getContent(doctorKey);
  const classroom = content.classroom ?? {};
  const announcements = (classroom.announcements ?? []).map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (a, i) => ({
      id: a.id ?? `legacy_ann_${i}`,
      title: a.title ?? "",
      body: a.body ?? "",
      date: a.date ?? "",
      isPinned: a.isPinned ?? false
    })
  );
  const notes = (classroom.notes ?? []).map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (n, i) => ({
      id: n.id ?? `legacy_note_${i}`,
      title: n.title ?? "",
      description: n.description ?? "",
      link: n.link ?? "",
      pdfLink: n.pdfLink ?? "",
      datePublished: n.datePublished ?? ""
    })
  );
  const videos = (classroom.videos ?? []).map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (v, i) => ({
      id: v.id ?? `legacy_vid_${i}`,
      title: v.title ?? "",
      url: v.url ?? "",
      description: v.description ?? "",
      isFeatured: v.isFeatured ?? false
    })
  );
  const schedule = (classroom.schedule ?? []).map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (s, i) => ({
      id: s.id ?? `legacy_sched_${i}`,
      day: s.day ?? "Monday",
      time: s.time ?? "",
      subject: s.subject ?? "",
      venue: s.venue ?? ""
    })
  );
  const gallery = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (classroom.gallery ?? []).map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (g, i) => ({
        id: g.id ?? `legacy_gal_${i}`,
        dataUrl: g.dataUrl ?? "",
        caption: g.caption ?? "",
        category: g.category ?? ""
      })
    )
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4 text-indigo-600" }),
        "My Classroom"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Manage announcements, lecture notes, video lectures, class schedule, and picture gallery for your public classroom page." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "announcements", "data-ocid": "classroom.tab", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "w-full flex-wrap h-auto gap-1 p-1 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "announcements",
            className: "flex-1 gap-1.5 text-xs sm:text-sm",
            "data-ocid": "classroom.announcements.tab",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-3.5 h-3.5" }),
              "Announcements",
              announcements.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-1 bg-primary/10 text-primary border-primary/20 text-xs py-0 px-1.5", children: announcements.length })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "notes",
            className: "flex-1 gap-1.5 text-xs sm:text-sm",
            "data-ocid": "classroom.notes.tab",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5" }),
              "Lecture Notes",
              notes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-1 bg-primary/10 text-primary border-primary/20 text-xs py-0 px-1.5", children: notes.length })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "videos",
            className: "flex-1 gap-1.5 text-xs sm:text-sm",
            "data-ocid": "classroom.videos.tab",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MonitorPlay, { className: "w-3.5 h-3.5" }),
              "Videos",
              videos.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-1 bg-primary/10 text-primary border-primary/20 text-xs py-0 px-1.5", children: videos.length })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "schedule",
            className: "flex-1 gap-1.5 text-xs sm:text-sm",
            "data-ocid": "classroom.schedule.tab",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5" }),
              "Schedule",
              schedule.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-1 bg-primary/10 text-primary border-primary/20 text-xs py-0 px-1.5", children: schedule.length })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "gallery",
            className: "flex-1 gap-1.5 text-xs sm:text-sm",
            "data-ocid": "classroom.gallery.tab",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-3.5 h-3.5" }),
              "Gallery",
              gallery.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-1 bg-primary/10 text-primary border-primary/20 text-xs py-0 px-1.5", children: gallery.length })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "announcements", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        AnnouncementsSection,
        {
          items: announcements,
          onSave: (updated) => updateField(doctorKey, "classroom.announcements", updated)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "notes", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        LectureNotesSection,
        {
          items: notes,
          onSave: (updated) => updateField(doctorKey, "classroom.notes", updated)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "videos", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        VideoLecturesSection,
        {
          items: videos,
          onSave: (updated) => updateField(doctorKey, "classroom.videos", updated)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "schedule", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ClassScheduleSection,
        {
          items: schedule,
          onSave: (updated) => updateField(doctorKey, "classroom.schedule", updated)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "gallery", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ClassroomGallerySection,
        {
          items: gallery,
          onSave: (updated) => updateField(doctorKey, "classroom.gallery", updated)
        }
      ) })
    ] }) })
  ] });
}
const DESIGNATIONS = ["Dr.", "Prof.", "Assoc. Prof.", "Mr.", "Ms.", "Mrs."];
function getStoredPassword(id) {
  try {
    const registry = loadRegistry();
    const doc = registry.find((d) => d.id === id);
    if (doc == null ? void 0 : doc.passwordHash) {
      const decoded = atob(doc.passwordHash);
      return decoded.split("::")[1] || "••••••";
    }
  } catch {
  }
  return "••••••";
}
function PhotoUploader({
  storageKey,
  label,
  ocidPrefix
}) {
  const [photo, setPhoto] = reactExports.useState(
    () => localStorage.getItem(storageKey)
  );
  const fileRef = reactExports.useRef(null);
  const initials = label.split(" ").slice(0, 2).map((w) => w[0] || "").join("").toUpperCase();
  const handleFile = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    if (file.size > 3 * 1024 * 1024) {
      ue.error("Photo must be under 3 MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      var _a2;
      const dataUrl = (_a2 = ev.target) == null ? void 0 : _a2.result;
      localStorage.setItem(storageKey, dataUrl);
      setPhoto(dataUrl);
      ue.success("Photo updated");
    };
    reader.readAsDataURL(file);
    if (fileRef.current) fileRef.current.value = "";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "relative group cursor-pointer",
        onClick: () => {
          var _a;
          return (_a = fileRef.current) == null ? void 0 : _a.click();
        },
        "aria-label": `Upload photo for ${label}`,
        children: [
          photo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: photo,
              alt: label,
              className: "w-16 h-16 rounded-2xl object-cover border-2 border-border"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border-2 border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-primary", children: initials }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-5 h-5 text-white" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "text-xs text-primary hover:underline mt-0.5",
          onClick: () => {
            var _a;
            return (_a = fileRef.current) == null ? void 0 : _a.click();
          },
          "data-ocid": `${ocidPrefix}.upload_button`,
          children: photo ? "Change photo" : "Upload photo"
        }
      ),
      photo && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "text-xs text-destructive hover:underline ml-3",
          onClick: () => {
            localStorage.removeItem(storageKey);
            setPhoto(null);
            ue.success("Photo removed");
          },
          "data-ocid": `${ocidPrefix}.delete_button`,
          children: "Remove"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: fileRef,
        type: "file",
        accept: "image/*",
        className: "hidden",
        onChange: handleFile
      }
    )
  ] });
}
function PdfUploader({
  storageKey,
  label,
  ocidPrefix
}) {
  const [fileName, setFileName] = reactExports.useState(() => {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return null;
    try {
      return JSON.parse(raw).name || "Uploaded";
    } catch {
      return "Uploaded";
    }
  });
  const fileRef = reactExports.useRef(null);
  const handleFile = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      ue.error("PDF must be under 10 MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      var _a2;
      const dataUrl = (_a2 = ev.target) == null ? void 0 : _a2.result;
      localStorage.setItem(
        storageKey,
        JSON.stringify({ name: file.name, data: dataUrl })
      );
      setFileName(file.name);
      ue.success(`${label} updated`);
    };
    reader.readAsDataURL(file);
    if (fileRef.current) fileRef.current.value = "";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 bg-muted/40 rounded-lg border border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-8 h-8 text-primary/60 shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: label }),
      fileName ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: fileName }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "No file uploaded" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          variant: "outline",
          className: "gap-1.5 h-7 text-xs",
          onClick: () => {
            var _a;
            return (_a = fileRef.current) == null ? void 0 : _a.click();
          },
          "data-ocid": `${ocidPrefix}.upload_button`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-3 h-3" }),
            "Upload"
          ]
        }
      ),
      fileName && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          variant: "ghost",
          className: "h-7 text-xs text-destructive hover:text-destructive",
          onClick: () => {
            localStorage.removeItem(storageKey);
            setFileName(null);
            ue.success("Removed");
          },
          "data-ocid": `${ocidPrefix}.delete_button`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3 h-3" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: fileRef,
        type: "file",
        accept: ".pdf",
        className: "hidden",
        onChange: handleFile
      }
    )
  ] });
}
function AdminUserManagement() {
  const [staffList, setStaffList] = reactExports.useState([]);
  const [patientList, setPatientList] = reactExports.useState([]);
  const [approvalRoles, setApprovalRoles] = reactExports.useState(
    {}
  );
  const [reassignMap, setReassignMap] = reactExports.useState({});
  const refresh = reactExports.useCallback(() => {
    setStaffList(loadRegistry().filter((d) => d.status === "pending"));
    setPatientList(loadPatientRegistry().filter((p) => p.status === "pending"));
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
        `Approved as ${STAFF_ROLE_LABELS[role]}`
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
  const doReassign = (id) => {
    const role = reassignMap[id];
    if (!role) return;
    const reg = loadRegistry();
    const idx = reg.findIndex((d) => d.id === id);
    if (idx >= 0) {
      reg[idx] = { ...reg[idx], role };
      saveRegistry(reg);
      refresh();
      ue.success(
        `Role updated to ${STAFF_ROLE_LABELS[role]}`
      );
    }
  };
  const approvedStaff = loadRegistry().filter((d) => d.status === "approved");
  const staffRoleOptions = Object.keys(STAFF_ROLE_LABELS);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-4 h-4 text-amber-600" }),
        "Pending Staff Approvals",
        staffList.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-amber-100 text-amber-800 border-amber-200 text-xs", children: staffList.length })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: staffList.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-sm text-muted-foreground text-center py-4",
          "data-ocid": "admin.staff_pending.empty_state",
          children: "No pending staff registrations."
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: staffList.map((acc, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-3",
          "data-ocid": `admin.staff_pending.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: acc.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: acc.email }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "text-xs border-blue-200 text-blue-700",
                    children: STAFF_ROLE_LABELS[acc.role] ?? acc.role
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: new Date(acc.createdAt).toLocaleDateString() })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs shrink-0", children: "Approve as:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: approvalRoles[acc.id] ?? acc.role ?? "doctor",
                  onValueChange: (v) => setApprovalRoles((p) => ({
                    ...p,
                    [acc.id]: v
                  })),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        className: "h-8 text-xs flex-1",
                        "data-ocid": "admin.staff_role.select",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: staffRoleOptions.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, className: "text-xs", children: STAFF_ROLE_LABELS[r] }, r)) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "flex-1 text-emerald-700 border-emerald-300 hover:bg-emerald-50 gap-1.5",
                  onClick: () => approveStaff(acc),
                  "data-ocid": "admin.staff.approve_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
                    "Approve"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "flex-1 text-red-700 border-red-300 hover:bg-red-50 gap-1.5",
                  onClick: () => rejectStaff(acc.id),
                  "data-ocid": "admin.staff.reject_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3.5 h-3.5" }),
                    "Reject"
                  ]
                }
              )
            ] })
          ]
        },
        acc.id
      )) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-teal-600" }),
        "Pending Patient Approvals",
        patientList.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-teal-100 text-teal-800 border-teal-200 text-xs", children: patientList.length })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: patientList.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-sm text-muted-foreground text-center py-4",
          "data-ocid": "admin.patient_pending.empty_state",
          children: "No pending patient accounts."
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: patientList.map((acc, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-teal-50 border border-teal-200 rounded-xl p-4 flex items-center justify-between gap-3",
          "data-ocid": `admin.patient_pending.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: acc.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: acc.phone }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "text-xs border-teal-200 text-teal-700",
                    children: "patient"
                  }
                ),
                acc.registerNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-muted-foreground", children: acc.registerNumber })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "text-emerald-700 border-emerald-300 hover:bg-emerald-50 gap-1.5",
                  onClick: () => approvePatient(acc.id),
                  "data-ocid": "admin.patient.approve_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
                    "Approve"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "text-red-700 border-red-300 hover:bg-red-50 gap-1.5",
                  onClick: () => rejectPatient(acc.id),
                  "data-ocid": "admin.patient.reject_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3.5 h-3.5" }),
                    "Reject"
                  ]
                }
              )
            ] })
          ]
        },
        acc.id
      )) }) })
    ] }),
    approvedStaff.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "w-4 h-4 text-purple-600" }),
        "Reassign Staff Roles (",
        approvedStaff.length,
        ")"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: approvedStaff.map((acc, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-lg px-3 py-2 flex items-center gap-2",
          "data-ocid": `admin.staff_roles.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm text-foreground truncate", children: acc.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: acc.email })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: reassignMap[acc.id] ?? acc.role,
                onValueChange: (v) => setReassignMap((p) => ({
                  ...p,
                  [acc.id]: v
                })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "h-7 text-xs w-40",
                      "data-ocid": "admin.reassign.select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: staffRoleOptions.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, className: "text-xs", children: STAFF_ROLE_LABELS[r] }, r)) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-7 text-xs px-2",
                onClick: () => doReassign(acc.id),
                disabled: !reassignMap[acc.id] || reassignMap[acc.id] === acc.role,
                "data-ocid": "admin.reassign.save_button",
                children: "Save"
              }
            )
          ]
        },
        acc.id
      )) }) })
    ] })
  ] });
}
function AdminContentManagement() {
  const doctors = loadRegistry().filter(
    (d) => d.status === "approved" && (d.role === "consultant_doctor" || d.role === "doctor")
  );
  const armanKey = "medicare_doctor_photo_arman";
  const samiaKey = "medicare_doctor_photo_samia";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-4 h-4 text-blue-600" }),
          "Doctor Profile Photos"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Photos displayed on the public portal" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PhotoUploader,
          {
            storageKey: armanKey,
            label: "Dr. Arman Kabir",
            ocidPrefix: "admin.photo.arman"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PhotoUploader,
          {
            storageKey: samiaKey,
            label: "Dr. Samia Shikder",
            ocidPrefix: "admin.photo.samia"
          }
        ),
        doctors.filter(
          (d) => d.email !== "dr.armankabir011@gmail.com" && d.email !== "samiashikder33@gmail.com"
        ).map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          PhotoUploader,
          {
            storageKey: `medicare_doctor_photo_${d.id}`,
            label: `${d.designation ?? ""} ${d.name}`.trim(),
            ocidPrefix: `admin.photo.${d.id}`
          },
          d.id
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-purple-600" }),
          "Doctor CV PDFs"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Downloadable CVs shown on the public portal" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PdfUploader,
          {
            storageKey: "doctorCVs_arman",
            label: "Dr. Arman Kabir — CV PDF",
            ocidPrefix: "admin.cv.arman"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PdfUploader,
          {
            storageKey: "doctorCVs_samia",
            label: "Dr. Samia Shikder — CV PDF",
            ocidPrefix: "admin.cv.samia"
          }
        ),
        doctors.filter(
          (d) => d.email !== "dr.armankabir011@gmail.com" && d.email !== "samiashikder33@gmail.com"
        ).map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          PdfUploader,
          {
            storageKey: `doctorCVs_${d.id}`,
            label: `${`${d.designation ?? ""} ${d.name}`.trim()} — CV PDF`,
            ocidPrefix: `admin.cv.${d.id}`
          },
          d.id
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-4 h-4 text-orange-600" }),
          "Advice Templates (Bengali)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Numbered Bengali advice templates used in prescriptions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        PdfUploader,
        {
          storageKey: "adviceTemplates_main",
          label: "Advice Templates PDF",
          ocidPrefix: "admin.advice_template"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Hospital, { className: "w-4 h-4 text-teal-600" }),
          "Prescription Headers"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Headers used on printed prescriptions — OPD (chamber) and hospital" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PdfUploader,
          {
            storageKey: "prescriptionHeaders_chamber",
            label: "Chamber / OPD Header (image or PDF)",
            ocidPrefix: "admin.rx_header.chamber"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PdfUploader,
          {
            storageKey: "prescriptionHeaders_hospital",
            label: "Hospital Header (image or PDF)",
            ocidPrefix: "admin.rx_header.hospital"
          }
        )
      ] })
    ] })
  ] });
}
function AdminPublicContent() {
  const [classroomArman, setClassroomArman] = reactExports.useState(
    () => localStorage.getItem("classroom_arman") ?? ""
  );
  const [classroomSamia, setClassroomSamia] = reactExports.useState(
    () => localStorage.getItem("classroom_samia") ?? ""
  );
  const [chamberArman, setChamberArman] = reactExports.useState(
    () => localStorage.getItem("chamber_arman") ?? ""
  );
  const [chamberSamia, setChamberSamia] = reactExports.useState(
    () => localStorage.getItem("chamber_samia") ?? ""
  );
  const [profileArman, setProfileArman] = reactExports.useState(
    () => localStorage.getItem("profile_arman") ?? ""
  );
  const [profileSamia, setProfileSamia] = reactExports.useState(
    () => localStorage.getItem("profile_samia") ?? ""
  );
  const saveSection = (key, value, label) => {
    localStorage.setItem(key, value);
    ue.success(`${label} saved`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4 text-indigo-600" }),
          "Classroom Content"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Lecture notes, video links, schedules, announcements per doctor" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold", children: "Dr. Arman Kabir — Classroom (JSON or text)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              className: "w-full min-h-[100px] rounded-md border border-input bg-background p-3 text-sm text-foreground resize-y focus:outline-none focus:ring-2 focus:ring-ring",
              value: classroomArman,
              onChange: (e) => setClassroomArman(e.target.value),
              placeholder: '{"lectures": [], "videos": [], "announcements": []}',
              "data-ocid": "admin.classroom.arman.textarea"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "gap-1.5",
              onClick: () => saveSection(
                "classroom_arman",
                classroomArman,
                "Classroom (Arman)"
              ),
              "data-ocid": "admin.classroom.arman.save_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3 h-3" }),
                "Save"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold", children: "Dr. Samia Shikder — Classroom (JSON or text)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              className: "w-full min-h-[100px] rounded-md border border-input bg-background p-3 text-sm text-foreground resize-y focus:outline-none focus:ring-2 focus:ring-ring",
              value: classroomSamia,
              onChange: (e) => setClassroomSamia(e.target.value),
              placeholder: '{"lectures": [], "videos": [], "announcements": []}',
              "data-ocid": "admin.classroom.samia.textarea"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "gap-1.5",
              onClick: () => saveSection(
                "classroom_samia",
                classroomSamia,
                "Classroom (Samia)"
              ),
              "data-ocid": "admin.classroom.samia.save_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3 h-3" }),
                "Save"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-rose-600" }),
          "Chamber Addresses"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Multiple chambers per doctor — location, visiting hours, phone, email" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold", children: "Dr. Arman Kabir — Chambers (JSON)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              className: "w-full min-h-[100px] rounded-md border border-input bg-background p-3 text-sm text-foreground resize-y focus:outline-none focus:ring-2 focus:ring-ring",
              value: chamberArman,
              onChange: (e) => setChamberArman(e.target.value),
              placeholder: '[{"name": "Chamber 1", "location": "", "hours": "", "phone": "", "email": ""}]',
              "data-ocid": "admin.chamber.arman.textarea"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "gap-1.5",
              onClick: () => saveSection("chamber_arman", chamberArman, "Chambers (Arman)"),
              "data-ocid": "admin.chamber.arman.save_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3 h-3" }),
                "Save"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold", children: "Dr. Samia Shikder — Chambers (JSON)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              className: "w-full min-h-[100px] rounded-md border border-input bg-background p-3 text-sm text-foreground resize-y focus:outline-none focus:ring-2 focus:ring-ring",
              value: chamberSamia,
              onChange: (e) => setChamberSamia(e.target.value),
              placeholder: '[{"name": "Chamber 1", "location": "", "hours": "", "phone": "", "email": ""}]',
              "data-ocid": "admin.chamber.samia.textarea"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "gap-1.5",
              onClick: () => saveSection("chamber_samia", chamberSamia, "Chambers (Samia)"),
              "data-ocid": "admin.chamber.samia.save_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3 h-3" }),
                "Save"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-4 h-4 text-cyan-600" }),
          "Doctor Profile Text"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Specialty, designation, posts shown on the public portal" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold", children: "Dr. Arman Kabir — Profile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              className: "w-full min-h-[80px] rounded-md border border-input bg-background p-3 text-sm text-foreground resize-y focus:outline-none focus:ring-2 focus:ring-ring",
              value: profileArman,
              onChange: (e) => setProfileArman(e.target.value),
              placeholder: "Specialty, designation, posts (one per line or JSON)",
              "data-ocid": "admin.profile.arman.textarea"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "gap-1.5",
              onClick: () => saveSection("profile_arman", profileArman, "Profile (Arman)"),
              "data-ocid": "admin.profile.arman.save_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3 h-3" }),
                "Save"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold", children: "Dr. Samia Shikder — Profile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              className: "w-full min-h-[80px] rounded-md border border-input bg-background p-3 text-sm text-foreground resize-y focus:outline-none focus:ring-2 focus:ring-ring",
              value: profileSamia,
              onChange: (e) => setProfileSamia(e.target.value),
              placeholder: "Specialty, designation, posts (one per line or JSON)",
              "data-ocid": "admin.profile.samia.textarea"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "gap-1.5",
              onClick: () => saveSection("profile_samia", profileSamia, "Profile (Samia)"),
              "data-ocid": "admin.profile.samia.save_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3 h-3" }),
                "Save"
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const RATES_KEY = "investigation_rates";
function saveRates(rates) {
  localStorage.setItem(RATES_KEY, JSON.stringify(rates));
}
function AdminInvestigationRates() {
  const [rates, setRates] = reactExports.useState(
    () => loadInvestigationRates()
  );
  const [editingId, setEditingId] = reactExports.useState(null);
  const [editName, setEditName] = reactExports.useState("");
  const [editRate, setEditRate] = reactExports.useState("");
  const [editDiscount, setEditDiscount] = reactExports.useState("");
  const [newName, setNewName] = reactExports.useState("");
  const [newRate, setNewRate] = reactExports.useState("");
  const [newDiscount, setNewDiscount] = reactExports.useState("");
  const fileRef = reactExports.useRef(null);
  const [uploading, setUploading] = reactExports.useState(false);
  function persistRates(updated) {
    setRates(updated);
    saveRates(updated);
  }
  function handleDelete(id) {
    persistRates(rates.filter((r) => r.id !== id));
    ue.success("Deleted");
  }
  function startEdit(r) {
    setEditingId(r.id);
    setEditName(r.name);
    setEditRate(String(r.rate));
    setEditDiscount(String(r.discountRate ?? 0));
  }
  function saveEdit(id) {
    const rateNum = Number(editRate);
    if (!editName.trim() || Number.isNaN(rateNum) || rateNum < 0) {
      ue.error("Name and valid rate required");
      return;
    }
    persistRates(
      rates.map(
        (r) => r.id === id ? {
          ...r,
          name: editName.trim(),
          rate: rateNum,
          discountRate: Number(editDiscount) || 0
        } : r
      )
    );
    setEditingId(null);
    ue.success("Saved");
  }
  function handleAddManual() {
    const rateNum = Number(newRate);
    if (!newName.trim() || Number.isNaN(rateNum) || rateNum < 0) {
      ue.error("Enter investigation name and rate");
      return;
    }
    const entry = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2),
      name: newName.trim(),
      rate: rateNum,
      discountRate: Number(newDiscount) || 0
    };
    persistRates([...rates, entry]);
    setNewName("");
    setNewRate("");
    setNewDiscount("");
    ue.success("Investigation added");
  }
  function handleExcelUpload(e) {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    setUploading(true);
    const reader = new FileReader();
    reader.onload = async (ev) => {
      var _a2;
      try {
        const data = (_a2 = ev.target) == null ? void 0 : _a2.result;
        let parsed = [];
        if (file.name.endsWith(".xlsx") || file.name.endsWith(".xls")) {
          ue.error(
            "Excel (.xlsx/.xls) cannot be parsed directly. Please save the file as CSV first (File → Save As → CSV), then upload again."
          );
          setUploading(false);
          if (fileRef.current) fileRef.current.value = "";
          return;
        }
        const text = typeof data === "string" ? data : new TextDecoder().decode(data);
        const lines = text.split(/\r?\n/);
        for (const line of lines) {
          const parts = line.split(/[,\t]/);
          const name = (parts[0] ?? "").trim();
          const rate = Number((parts[1] ?? "").trim());
          if (!name || Number.isNaN(rate) || rate < 0) continue;
          parsed.push({ name, rate });
        }
        if (parsed.length === 0) {
          ue.error(
            "No valid rows found. Ensure Column A = Name, Column B = Rate."
          );
          setUploading(false);
          return;
        }
        const newRates = parsed.map((p) => ({
          id: Date.now().toString(36) + Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2),
          name: p.name,
          rate: p.rate,
          discountRate: 0
        }));
        const existingNames = new Set(rates.map((r) => r.name.toLowerCase()));
        const toAdd = newRates.filter(
          (r) => !existingNames.has(r.name.toLowerCase())
        );
        const merged = [...rates, ...toAdd];
        persistRates(merged);
        ue.success(
          `${toAdd.length} new investigation${toAdd.length !== 1 ? "s" : ""} loaded (${parsed.length - toAdd.length} skipped as duplicates)`
        );
      } catch {
        ue.error("Failed to parse file");
      } finally {
        setUploading(false);
        if (fileRef.current) fileRef.current.value = "";
      }
    };
    reader.readAsText(file);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ReceiptText, { className: "w-4 h-4 text-purple-600" }),
          "Investigation Rate List"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Upload a CSV file (Column A = Investigation Name, Column B = Rate). Existing entries are preserved." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              className: "gap-1.5",
              onClick: () => {
                var _a;
                return (_a = fileRef.current) == null ? void 0 : _a.click();
              },
              disabled: uploading,
              "data-ocid": "admin.inv_rates.upload_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-4 h-4" }),
                uploading ? "Parsing…" : "Upload CSV File"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: ".csv or .tsv — Column A: Name, Column B: Rate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref: fileRef,
              type: "file",
              accept: ".csv,.tsv,.txt",
              className: "hidden",
              onChange: handleExcelUpload
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-end flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 flex-1 min-w-[140px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Investigation Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "e.g. CBC",
                value: newName,
                onChange: (e) => setNewName(e.target.value),
                className: "h-8 text-sm",
                "data-ocid": "admin.inv_rates.name.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 w-28", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Rate (৳)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "number",
                min: 0,
                placeholder: "0",
                value: newRate,
                onChange: (e) => setNewRate(e.target.value),
                className: "h-8 text-sm",
                "data-ocid": "admin.inv_rates.rate.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 w-24", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Discount (%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "number",
                min: 0,
                max: 100,
                placeholder: "0",
                value: newDiscount,
                onChange: (e) => setNewDiscount(e.target.value),
                className: "h-8 text-sm",
                "data-ocid": "admin.inv_rates.discount.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "gap-1.5 h-8 shrink-0",
              onClick: handleAddManual,
              "data-ocid": "admin.inv_rates.add_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
                "Add"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-4 h-4 text-teal-600" }),
        "Rate List",
        rates.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-purple-100 text-purple-800 border-purple-200 text-xs ml-1", children: [
          rates.length,
          " total"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: rates.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-sm text-muted-foreground text-center py-8",
          "data-ocid": "admin.inv_rates.empty_state",
          children: "No rates configured yet. Upload an Excel file or add manually."
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/50 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-semibold text-muted-foreground text-xs", children: "#" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-semibold text-muted-foreground text-xs", children: "Investigation Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-semibold text-muted-foreground text-xs", children: "Rate (৳)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-semibold text-muted-foreground text-xs hidden sm:table-cell", children: "Discount (%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-semibold text-muted-foreground text-xs", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rates.map((r, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "border-b border-border last:border-0 hover:bg-muted/20 transition-colors",
            "data-ocid": `admin.inv_rates.item.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs text-muted-foreground", children: idx + 1 }),
              editingId === r.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: editName,
                    onChange: (e) => setEditName(e.target.value),
                    className: "h-7 text-sm",
                    "data-ocid": `admin.inv_rates.edit_name.${idx + 1}`
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    min: 0,
                    value: editRate,
                    onChange: (e) => setEditRate(e.target.value),
                    className: "h-7 text-sm text-right w-24 ml-auto",
                    "data-ocid": `admin.inv_rates.edit_rate.${idx + 1}`
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 hidden sm:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    min: 0,
                    max: 100,
                    value: editDiscount,
                    onChange: (e) => setEditDiscount(e.target.value),
                    className: "h-7 text-sm text-right w-20 ml-auto",
                    "data-ocid": `admin.inv_rates.edit_discount.${idx + 1}`
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      className: "h-7 px-2 text-xs gap-1 bg-emerald-600 hover:bg-emerald-700 text-white",
                      onClick: () => saveEdit(r.id),
                      "data-ocid": `admin.inv_rates.save_button.${idx + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3 h-3" }),
                        "Save"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "ghost",
                      className: "h-7 px-2 text-xs",
                      onClick: () => setEditingId(null),
                      "data-ocid": `admin.inv_rates.cancel_button.${idx + 1}`,
                      children: "Cancel"
                    }
                  )
                ] }) })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-medium text-foreground", children: r.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5 text-right font-semibold text-foreground", children: [
                  "৳ ",
                  r.rate.toLocaleString("en-BD")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-right text-muted-foreground hidden sm:table-cell", children: r.discountRate ? `${r.discountRate}%` : "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "h-7 px-2 text-xs gap-1",
                      onClick: () => startEdit(r),
                      "data-ocid": `admin.inv_rates.edit_button.${idx + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-3 h-3" }),
                        "Edit"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "ghost",
                      className: "h-7 w-7 p-0 text-destructive hover:bg-destructive/10",
                      onClick: () => handleDelete(r.id),
                      "data-ocid": `admin.inv_rates.delete_button.${idx + 1}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                    }
                  )
                ] }) })
              ] })
            ]
          },
          r.id
        )) })
      ] }) }) })
    ] })
  ] });
}
function AdminSystemSettings({ onLogout }) {
  const auditLog = getAuditLog().slice().reverse().slice(0, 50);
  const exportAllData = () => {
    const snapshot = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k) continue;
      try {
        snapshot[k] = JSON.parse(localStorage.getItem(k) ?? "null");
      } catch {
        snapshot[k] = localStorage.getItem(k);
      }
    }
    const blob = new Blob([JSON.stringify(snapshot, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `arman_care_backup_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    ue.success("Full data backup exported");
  };
  const exportPatients = () => {
    const allPatients = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!(k == null ? void 0 : k.startsWith("patients_"))) continue;
      try {
        const arr = JSON.parse(localStorage.getItem(k) ?? "[]");
        allPatients.push(...arr);
      } catch {
      }
    }
    const header = "Name,Reg No,Gender,Blood Group,Phone,Address,Patient Type\n";
    const rows = allPatients.map(
      (p) => [
        `"${p.fullName ?? ""}"`,
        p.registerNumber ?? "",
        p.gender ?? "",
        p.bloodGroup ?? "",
        p.phone ?? "",
        `"${p.address ?? ""}"`,
        p.patientType ?? ""
      ].join(",")
    ).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `patients_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    ue.success("Patient records exported");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4 text-slate-600" }),
          "Audit Log (Last 50 entries)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "All login and edit events — visible to Admin only" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: auditLog.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-sm text-muted-foreground text-center py-4",
          "data-ocid": "admin.audit_log.empty_state",
          children: "No audit entries yet."
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 max-h-80 overflow-y-auto", children: auditLog.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-start gap-2 text-xs py-1.5 border-b border-border last:border-0",
          "data-ocid": `admin.audit_log.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground shrink-0 font-mono", children: new Date(entry.timestamp).toLocaleString() }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 font-medium text-primary", children: entry.userName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              "(",
              entry.userRole,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: entry.action }),
            entry.target !== "System" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              "→ ",
              entry.target
            ] })
          ]
        },
        entry.id
      )) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4 text-purple-600" }),
        "Data Export"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            className: "gap-2",
            onClick: exportPatients,
            "data-ocid": "admin.export_patients.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
              "Export Patients (CSV)"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            className: "gap-2",
            onClick: exportAllData,
            "data-ocid": "admin.export_all.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "w-4 h-4" }),
              "Full Backup (JSON)"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-4 h-4 text-blue-600" }),
          "Lab Integration"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Connect an external lab system to auto-import results" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Lab System Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "e.g. Hospital Lab System",
              defaultValue: localStorage.getItem("lab_system_name") ?? "",
              onBlur: (e) => localStorage.setItem("lab_system_name", e.target.value),
              "data-ocid": "admin.lab_system_name.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "API Endpoint URL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "https://lab.hospital.com/api/results",
              defaultValue: localStorage.getItem("lab_api_endpoint") ?? "",
              onBlur: (e) => localStorage.setItem("lab_api_endpoint", e.target.value),
              "data-ocid": "admin.lab_api.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "gap-2",
              onClick: () => ue.success("Test result received: Hb 12.0 g/dL (simulated)"),
              "data-ocid": "admin.lab_test.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TestTube, { className: "w-4 h-4" }),
                "Test Connection"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "gap-2",
              onClick: () => {
                navigator.clipboard.writeText(`${window.location.origin}/api/lab-import`).then(() => ue.success("Integration URL copied"));
              },
              "data-ocid": "admin.lab_copy_url.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "w-4 h-4" }),
                "Copy URL"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-destructive/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base text-destructive", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4" }),
        "Admin Sign Out"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "destructive",
          onClick: onLogout,
          className: "gap-2",
          "data-ocid": "admin.signout.button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" }),
            "Sign Out"
          ]
        }
      ) })
    ] })
  ] });
}
function NotificationPrefs({ storageKey }) {
  const [prefs, setPrefs] = reactExports.useState(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey) ?? "{}");
    } catch {
      return {};
    }
  });
  const toggle = (key, defaultVal) => {
    const updated = { ...prefs, [key]: !(prefs[key] ?? defaultVal) };
    setPrefs(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
    ue.success("Preference saved");
  };
  const items = [
    {
      key: "drugReminders",
      label: "Drug reminder alerts",
      default: true,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4 text-amber-500" })
    },
    {
      key: "appointmentAlerts",
      label: "Appointment alerts",
      default: true,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4 text-blue-500" })
    },
    {
      key: "clinicalAlerts",
      label: "Critical clinical alerts (Sepsis / AKI)",
      default: true,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-red-500" })
    },
    {
      key: "newPatientApprovals",
      label: "New patient approval notifications",
      default: true,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-4 h-4 text-teal-500" })
    },
    {
      key: "handoverReminders",
      label: "Handover reminders",
      default: true,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-4 h-4 text-purple-500" })
    },
    {
      key: "medDueAlerts",
      label: "Medication due alerts",
      default: true,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4 text-pink-500" })
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4 text-amber-500" }),
        "Notification Preferences"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Choose which alerts you receive" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center justify-between gap-3 py-1",
        "data-ocid": `settings.notif.${item.key}.toggle`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            item.icon,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: item.label })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              checked: prefs[item.key] ?? item.default,
              onCheckedChange: () => toggle(item.key, item.default)
            }
          )
        ]
      },
      item.key
    )) })
  ] });
}
function PrescriptionHeaderSelector({ doctorEmail }) {
  const prefKey = `prescriptionHeaderPref_${doctorEmail}`;
  const [headerType, setHeaderType] = reactExports.useState(() => {
    const raw = localStorage.getItem(prefKey);
    return raw ?? "chamber";
  });
  const save = () => {
    localStorage.setItem(prefKey, headerType);
    ue.success("Prescription header preference saved");
  };
  const chamberHeader = (() => {
    try {
      return JSON.parse(
        localStorage.getItem("prescriptionHeaders_chamber") ?? "null"
      );
    } catch {
      return null;
    }
  })();
  const hospitalHeader = (() => {
    try {
      return JSON.parse(
        localStorage.getItem("prescriptionHeaders_hospital") ?? "null"
      );
    } catch {
      return null;
    }
  })();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4 text-teal-600" }),
        "Prescription Header"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Select which header to use on your prescriptions" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setHeaderType("chamber"),
            className: `p-4 rounded-xl border-2 text-left transition-colors ${headerType === "chamber" ? "border-primary bg-primary/5" : "border-border bg-background hover:bg-muted/40"}`,
            "data-ocid": "settings.rx_header.chamber.toggle",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: "Chamber / OPD" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Doctor name + chamber address" }),
              chamberHeader && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary mt-1 truncate", children: chamberHeader.name })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setHeaderType("hospital"),
            className: `p-4 rounded-xl border-2 text-left transition-colors ${headerType === "hospital" ? "border-primary bg-primary/5" : "border-border bg-background hover:bg-muted/40"}`,
            "data-ocid": "settings.rx_header.hospital.toggle",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: "Hospital" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Hospital name only" }),
              hospitalHeader && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary mt-1 truncate", children: hospitalHeader.name })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          className: "gap-2",
          onClick: save,
          "data-ocid": "settings.rx_header.save_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3.5 h-3.5" }),
            "Save Preference"
          ]
        }
      )
    ] })
  ] });
}
function toEmbedUrl(raw) {
  const url = raw.trim();
  const ytWatch = url.match(
    /(?:youtube\.com\/watch\?(?:.*&)?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (ytWatch) {
    return `https://www.youtube.com/embed/${ytWatch[1]}?autoplay=1&mute=1&loop=1&controls=1&rel=0&modestbranding=1`;
  }
  if (url.includes("youtube.com/embed")) return url;
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo) {
    return `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1&muted=1&loop=1`;
  }
  if (url.includes("player.vimeo.com")) return url;
  return url;
}
function SerialDisplayVideoSettings({ doctorEmail }) {
  const storageKey = `serialDisplayVideoUrl_${doctorEmail}`;
  const [inputUrl, setInputUrl] = reactExports.useState("");
  const [savedUrl, setSavedUrl] = reactExports.useState(
    () => localStorage.getItem(storageKey)
  );
  const [previewUrl, setPreviewUrl] = reactExports.useState(() => {
    const v = localStorage.getItem(storageKey);
    return v ? toEmbedUrl(v) : null;
  });
  const [showPreview, setShowPreview] = reactExports.useState(false);
  const handleSave = () => {
    if (!inputUrl.trim()) {
      ue.error("Please enter a video URL");
      return;
    }
    const embed = toEmbedUrl(inputUrl.trim());
    localStorage.setItem(storageKey, inputUrl.trim());
    try {
      const bc = new BroadcastChannel("serial_display_video_sync");
      bc.postMessage({ videoUrl: inputUrl.trim() });
      bc.close();
    } catch {
    }
    setSavedUrl(inputUrl.trim());
    setPreviewUrl(embed);
    setShowPreview(true);
    setInputUrl("");
    ue.success("Serial display video URL saved");
  };
  const handleClear = () => {
    localStorage.removeItem(storageKey);
    try {
      const bc = new BroadcastChannel("serial_display_video_sync");
      bc.postMessage({ videoUrl: null });
      bc.close();
    } catch {
    }
    setSavedUrl(null);
    setPreviewUrl(null);
    setShowPreview(false);
    ue.success("Serial display video cleared — default playlist restored");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MonitorPlay, { className: "w-4 h-4 text-blue-600" }),
        "Serial Display Video"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardDescription, { children: [
        "Set a custom health education video for the waiting room display screen (",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-xs bg-muted px-1 rounded", children: "/serial-display" }),
        "). Supports YouTube, Vimeo, or any direct embed URL. Leave blank to use the default playlist."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "https://www.youtube.com/watch?v=... or Vimeo URL",
            value: inputUrl,
            onChange: (e) => setInputUrl(e.target.value),
            onKeyDown: (e) => {
              if (e.key === "Enter") handleSave();
            },
            className: "flex-1",
            "data-ocid": "settings.serial_video.input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "gap-1.5 shrink-0",
            onClick: handleSave,
            "data-ocid": "settings.serial_video.save_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3.5 h-3.5" }),
              "Save"
            ]
          }
        )
      ] }),
      savedUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-blue-200 bg-blue-50/50 p-3 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-blue-800 mb-0.5", children: "Current video URL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-blue-700 break-all font-mono leading-snug", children: savedUrl })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-7 text-xs gap-1 border-blue-300 text-blue-700 hover:bg-blue-100",
                onClick: () => setShowPreview((v) => !v),
                "data-ocid": "settings.serial_video.preview_toggle",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3" }),
                  showPreview ? "Hide" : "Preview"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "ghost",
                className: "h-7 text-xs text-destructive hover:text-destructive hover:bg-destructive/10 gap-1",
                onClick: handleClear,
                "data-ocid": "settings.serial_video.delete_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3 h-3" }),
                  "Clear"
                ]
              }
            )
          ] })
        ] }),
        showPreview && previewUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg overflow-hidden border border-blue-200 aspect-video bg-black", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "iframe",
          {
            src: previewUrl,
            title: "Video preview",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true,
            className: "w-full h-full border-0",
            loading: "lazy"
          }
        ) })
      ] }),
      !savedUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-xs text-muted-foreground bg-muted/40 rounded-lg px-3 py-2 border border-border",
          "data-ocid": "settings.serial_video.empty_state",
          children: "No custom video set. The serial display will use the default health education playlist."
        }
      )
    ] })
  ] });
}
function PatientProfileView() {
  const { currentPatient } = useEmailAuth();
  if (!currentPatient) return null;
  const clinicalRecord = (() => {
    if (!currentPatient.registerNumber) return null;
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!(k == null ? void 0 : k.startsWith("patients_"))) continue;
      try {
        const arr = JSON.parse(localStorage.getItem(k) ?? "[]");
        for (const p of arr) {
          if (p.registerNumber === currentPatient.registerNumber) return p;
        }
      } catch {
      }
    }
    return null;
  })();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-teal-600" }),
      "My Profile"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Full Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: currentPatient.name || "—" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Register Number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-mono font-medium text-primary", children: currentPatient.registerNumber || "—" })
        ] }),
        currentPatient.age && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Age" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-foreground", children: [
            currentPatient.age,
            " years"
          ] })
        ] }),
        currentPatient.gender && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Gender" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground capitalize", children: currentPatient.gender })
        ] }),
        typeof (clinicalRecord == null ? void 0 : clinicalRecord.bloodGroup) === "string" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Blood Group" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: clinicalRecord.bloodGroup })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "To update your profile information, submit a request below. A doctor will review and apply changes." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProfileUpdateRequest,
          {
            registerNumber: currentPatient.registerNumber ?? ""
          }
        )
      ] })
    ] })
  ] });
}
function ProfileUpdateRequest({ registerNumber }) {
  const [phone, setPhone] = reactExports.useState("");
  const [address, setAddress] = reactExports.useState("");
  const [submitting, setSubmitting] = reactExports.useState(false);
  const submit = () => {
    if (!phone && !address) {
      ue.error("Please fill in at least one field to update.");
      return;
    }
    setSubmitting(true);
    const key = `pendingProfileUpdates_${registerNumber}`;
    const existing = (() => {
      try {
        return JSON.parse(localStorage.getItem(key) ?? "[]");
      } catch {
        return [];
      }
    })();
    existing.push({
      phone: phone || void 0,
      address: address || void 0,
      submittedAt: (/* @__PURE__ */ new Date()).toISOString(),
      status: "pending"
    });
    localStorage.setItem(key, JSON.stringify(existing));
    setPhone("");
    setAddress("");
    setSubmitting(false);
    ue.success("Update request submitted. Doctor will review shortly.");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: "Submit Profile Update Request" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        placeholder: "New phone number (optional)",
        value: phone,
        onChange: (e) => setPhone(e.target.value),
        "data-ocid": "patient.profile_update.phone.input"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        placeholder: "New address (optional)",
        value: address,
        onChange: (e) => setAddress(e.target.value),
        "data-ocid": "patient.profile_update.address.input"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        size: "sm",
        variant: "outline",
        className: "gap-1.5",
        onClick: submit,
        disabled: submitting,
        "data-ocid": "patient.profile_update.submit_button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3 h-3" }),
          "Submit Request"
        ]
      }
    )
  ] });
}
function PatientNotifPrefs({ phone }) {
  const storageKey = `notifPrefs_patient_${phone}`;
  const [prefs, setPrefs] = reactExports.useState(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey) ?? "{}");
    } catch {
      return {};
    }
  });
  const toggle = (key, defaultVal) => {
    const updated = { ...prefs, [key]: !(prefs[key] ?? defaultVal) };
    setPrefs(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
    ue.success("Preference saved");
  };
  const items = [
    {
      key: "drugReminders",
      label: "Drug reminder alerts (ওষুধের রিমাইন্ডার)",
      default: true
    },
    {
      key: "appointmentAlerts",
      label: "Appointment reminders (অ্যাপয়েন্টমেন্ট রিমাইন্ডার)",
      default: true
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4 text-amber-500" }),
      "Notification Preferences"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center justify-between gap-3",
        "data-ocid": `patient.notif.${item.key}.toggle`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              checked: prefs[item.key] ?? item.default,
              onCheckedChange: () => toggle(item.key, item.default)
            }
          )
        ]
      },
      item.key
    )) })
  ] });
}
function PatientAccountSettings() {
  const { currentPatient, updatePatientCredentials, patientSignOut } = useEmailAuth();
  const [newPhone, setNewPhone] = reactExports.useState("");
  const [newPassword, setNewPassword] = reactExports.useState("");
  const [confirmPassword, setConfirmPassword] = reactExports.useState("");
  const [showPass, setShowPass] = reactExports.useState(false);
  if (!currentPatient) return null;
  const maskedPhone = currentPatient.phone.replace(
    /(\d{2})\d{5}(\d{4})/,
    "$1•••••$2"
  );
  const saveCredentials = () => {
    if (newPassword && newPassword !== confirmPassword) {
      ue.error("Passwords do not match");
      return;
    }
    if (newPassword && newPassword.length < 6) {
      ue.error("Password must be at least 6 characters");
      return;
    }
    updatePatientCredentials(
      currentPatient.registerNumber ?? "",
      newPhone || void 0,
      newPassword || void 0
    );
    setNewPhone("");
    setNewPassword("");
    setConfirmPassword("");
    ue.success("Credentials updated");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4 text-blue-600" }),
      "Account Settings"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Current Mobile Number" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-mono font-medium text-foreground", children: maskedPhone })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "patient-new-phone", children: "New Mobile Number (leave blank to keep)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "patient-new-phone",
            type: "tel",
            placeholder: "01XXXXXXXXX",
            value: newPhone,
            onChange: (e) => setNewPhone(e.target.value),
            "data-ocid": "patient.account.phone.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "patient-new-password", children: "New Password (leave blank to keep)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "patient-new-password",
              type: showPass ? "text" : "password",
              placeholder: "Min. 6 characters",
              value: newPassword,
              onChange: (e) => setNewPassword(e.target.value),
              className: "pr-10",
              "data-ocid": "patient.account.password.input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
              onClick: () => setShowPass((v) => !v),
              "aria-label": showPass ? "Hide password" : "Show password",
              "data-ocid": "patient.account.password.toggle",
              children: showPass ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "patient-confirm-password", children: "Confirm New Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "patient-confirm-password",
            type: "password",
            placeholder: "Repeat password",
            value: confirmPassword,
            onChange: (e) => setConfirmPassword(e.target.value),
            "data-ocid": "patient.account.confirm_password.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          className: "gap-2",
          onClick: saveCredentials,
          "data-ocid": "patient.account.save_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3.5 h-3.5" }),
            "Save Changes"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-3 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "destructive",
          size: "sm",
          className: "gap-2",
          onClick: patientSignOut,
          "data-ocid": "patient.signout.button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" }),
            "Sign Out"
          ]
        }
      ) })
    ] })
  ] });
}
function Settings() {
  const { isAdmin, adminLogout } = useAdminAuth();
  const { currentDoctor, currentPatient, signOut, updateProfile } = useEmailAuth();
  const role = (currentDoctor == null ? void 0 : currentDoctor.role) ?? null;
  const isConsultant = role === "consultant_doctor" || role === "doctor";
  const isPatientView = !isAdmin && !currentDoctor && !!currentPatient;
  const [name, setName] = reactExports.useState((currentDoctor == null ? void 0 : currentDoctor.name) ?? "");
  const [designation, setDesignation] = reactExports.useState(
    (currentDoctor == null ? void 0 : currentDoctor.designation) ?? "Dr."
  );
  const [degree, setDegree] = reactExports.useState((currentDoctor == null ? void 0 : currentDoctor.degree) ?? "");
  const [specialization, setSpecialization] = reactExports.useState(
    (currentDoctor == null ? void 0 : currentDoctor.specialization) ?? ""
  );
  const [hospital, setHospital] = reactExports.useState((currentDoctor == null ? void 0 : currentDoctor.hospital) ?? "");
  const [phone, setPhone] = reactExports.useState((currentDoctor == null ? void 0 : currentDoctor.phone) ?? "");
  const [saving, setSaving] = reactExports.useState(false);
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const storedPassword = currentDoctor ? getStoredPassword(currentDoctor.id) : "••••••";
  const doctorPhotoKey = (currentDoctor == null ? void 0 : currentDoctor.email) === "samiashikder33@gmail.com" ? "medicare_doctor_photo_samia" : "medicare_doctor_photo_arman";
  const notifKey = currentDoctor ? `notifPrefs_${currentDoctor.email}` : "";
  const handleSaveProfile = () => {
    if (!currentDoctor) return;
    setSaving(true);
    try {
      updateProfile({
        name,
        designation,
        degree,
        specialization,
        hospital,
        phone
      });
      ue.success("Profile updated successfully");
    } catch {
      ue.error("Failed to save profile");
    } finally {
      setSaving(false);
    }
  };
  if (!isAdmin && !currentDoctor && !currentPatient) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-lg mx-auto p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-amber-200 bg-amber-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6 text-center space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-8 h-8 text-amber-500 mx-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Not signed in" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Please sign in to access settings." })
    ] }) }) });
  }
  if (isAdmin) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-3xl mx-auto p-4 sm:p-6 space-y-4",
        "data-ocid": "settings.page",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Admin Settings" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Full system management panel" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "users", "data-ocid": "settings.admin.tab", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "w-full flex-wrap h-auto gap-1 p-1 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TabsTrigger,
                {
                  value: "users",
                  className: "gap-1.5 text-xs sm:text-sm",
                  "data-ocid": "settings.admin.users.tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5" }),
                    "User Management"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TabsTrigger,
                {
                  value: "content",
                  className: "gap-1.5 text-xs sm:text-sm",
                  "data-ocid": "settings.admin.content.tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-3.5 h-3.5" }),
                    "Content & Files"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TabsTrigger,
                {
                  value: "portal",
                  className: "gap-1.5 text-xs sm:text-sm",
                  "data-ocid": "settings.admin.portal.tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3.5 h-3.5" }),
                    "Public Portal"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TabsTrigger,
                {
                  value: "system",
                  className: "gap-1.5 text-xs sm:text-sm",
                  "data-ocid": "settings.admin.system.tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "w-3.5 h-3.5" }),
                    "System & Audit"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TabsTrigger,
                {
                  value: "inv_rates",
                  className: "gap-1.5 text-xs sm:text-sm",
                  "data-ocid": "settings.admin.inv_rates.tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ReceiptText, { className: "w-3.5 h-3.5" }),
                    "Investigation Rates"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "users", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminUserManagement, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "content", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminContentManagement, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "portal", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminPublicContent, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "system", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminSystemSettings, { onLogout: adminLogout }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "inv_rates", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminInvestigationRates, {}) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
        ]
      }
    );
  }
  if (isPatientView) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-2xl mx-auto p-4 sm:p-6 space-y-4",
        "data-ocid": "settings.patient.page",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "My Settings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Profile, notifications & account" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "profile", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "w-full mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TabsTrigger,
                {
                  value: "profile",
                  className: "flex-1 gap-1.5 text-xs sm:text-sm",
                  "data-ocid": "settings.patient.profile.tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5" }),
                    "My Profile"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TabsTrigger,
                {
                  value: "notifications",
                  className: "flex-1 gap-1.5 text-xs sm:text-sm",
                  "data-ocid": "settings.patient.notifications.tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-3.5 h-3.5" }),
                    "Notifications"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TabsTrigger,
                {
                  value: "account",
                  className: "flex-1 gap-1.5 text-xs sm:text-sm",
                  "data-ocid": "settings.patient.account.tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "w-3.5 h-3.5" }),
                    "Account"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "profile", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PatientProfileView, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "notifications", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PatientNotifPrefs, { phone: (currentPatient == null ? void 0 : currentPatient.phone) ?? "" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "account", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PatientAccountSettings, {}) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
        ]
      }
    );
  }
  if (isConsultant) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-2xl mx-auto p-4 sm:p-6 space-y-4",
        "data-ocid": "settings.doctor.page",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Settings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Profile, prescriptions & account" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "profile", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "w-full mb-4 flex-wrap h-auto gap-1 p-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TabsTrigger,
                {
                  value: "profile",
                  className: "flex-1 gap-1.5 text-xs sm:text-sm",
                  "data-ocid": "settings.doctor.profile.tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5" }),
                    "Profile"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TabsTrigger,
                {
                  value: "rx",
                  className: "flex-1 gap-1.5 text-xs sm:text-sm",
                  "data-ocid": "settings.doctor.rx.tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-3.5 h-3.5" }),
                    "Prescription"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TabsTrigger,
                {
                  value: "display",
                  className: "flex-1 gap-1.5 text-xs sm:text-sm",
                  "data-ocid": "settings.doctor.display.tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MonitorPlay, { className: "w-3.5 h-3.5" }),
                    "Display"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TabsTrigger,
                {
                  value: "notifications",
                  className: "flex-1 gap-1.5 text-xs sm:text-sm",
                  "data-ocid": "settings.doctor.notifications.tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-3.5 h-3.5" }),
                    "Notifications"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TabsTrigger,
                {
                  value: "classroom",
                  className: "flex-1 gap-1.5 text-xs sm:text-sm",
                  "data-ocid": "settings.doctor.classroom.tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3.5 h-3.5" }),
                    "Classroom"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TabsTrigger,
                {
                  value: "account",
                  className: "flex-1 gap-1.5 text-xs sm:text-sm",
                  "data-ocid": "settings.doctor.account.tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "w-3.5 h-3.5" }),
                    "Account"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "profile", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-4 h-4" }),
                  "Profile Photo"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PhotoUploader,
                  {
                    storageKey: doctorPhotoKey,
                    label: `${designation} ${name}`.trim() || "Doctor",
                    ocidPrefix: "settings.photo"
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-4 h-4" }),
                  "Doctor Profile"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Designation" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Select,
                        {
                          value: designation,
                          onValueChange: setDesignation,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "settings.designation.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: DESIGNATIONS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: d, children: d }, d)) })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "settings-name", children: "Full Name" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "settings-name",
                          value: name,
                          onChange: (e) => setName(e.target.value),
                          "data-ocid": "settings.doctor_name.input"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email (read-only)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        value: (currentDoctor == null ? void 0 : currentDoctor.email) ?? "",
                        readOnly: true,
                        className: "bg-muted text-muted-foreground cursor-not-allowed"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "settings-degree", children: "Degree / Qualifications" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "settings-degree",
                        placeholder: "MBBS, MD, FCPS",
                        value: degree,
                        onChange: (e) => setDegree(e.target.value),
                        "data-ocid": "settings.doctor_degree.input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "settings-spec", children: "Specialization" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "settings-spec",
                        placeholder: "e.g. Pulmonology",
                        value: specialization,
                        onChange: (e) => setSpecialization(e.target.value),
                        "data-ocid": "settings.specialization.input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "settings-hospital", children: "Hospital / Clinic" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "settings-hospital",
                        value: hospital,
                        onChange: (e) => setHospital(e.target.value),
                        "data-ocid": "settings.hospital.input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "settings-phone", children: "Phone" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "settings-phone",
                        type: "tel",
                        value: phone,
                        onChange: (e) => setPhone(e.target.value),
                        "data-ocid": "settings.phone.input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      onClick: handleSaveProfile,
                      disabled: saving,
                      className: "gap-2",
                      "data-ocid": "settings.doctor_profile.save_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
                        "Save Profile"
                      ]
                    }
                  )
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "rx", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              PrescriptionHeaderSelector,
              {
                doctorEmail: (currentDoctor == null ? void 0 : currentDoctor.email) ?? ""
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "display", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              SerialDisplayVideoSettings,
              {
                doctorEmail: (currentDoctor == null ? void 0 : currentDoctor.email) ?? ""
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "notifications", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationPrefs, { storageKey: notifKey }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "classroom", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClassroomSettings, { doctorEmail: (currentDoctor == null ? void 0 : currentDoctor.email) ?? "" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "account", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              AccountPanel,
              {
                storedPassword,
                showPassword,
                onTogglePassword: () => setShowPassword((v) => !v),
                email: (currentDoctor == null ? void 0 : currentDoctor.email) ?? "",
                onSignOut: signOut
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-2xl mx-auto p-4 sm:p-6 space-y-4",
      "data-ocid": "settings.staff.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Settings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Profile & notifications" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "profile", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "w-full mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "profile",
                className: "flex-1 gap-1.5 text-xs sm:text-sm",
                "data-ocid": "settings.staff.profile.tab",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5" }),
                  "Profile"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "notifications",
                className: "flex-1 gap-1.5 text-xs sm:text-sm",
                "data-ocid": "settings.staff.notifications.tab",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-3.5 h-3.5" }),
                  "Notifications"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "account",
                className: "flex-1 gap-1.5 text-xs sm:text-sm",
                "data-ocid": "settings.staff.account.tab",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "w-3.5 h-3.5" }),
                  "Account"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "profile", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4" }),
              "Your Profile"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email (read-only)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: (currentDoctor == null ? void 0 : currentDoctor.email) ?? "",
                    readOnly: true,
                    className: "bg-muted text-muted-foreground cursor-not-allowed"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "staff-name", children: "Full Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "staff-name",
                    value: name,
                    onChange: (e) => setName(e.target.value),
                    "data-ocid": "settings.staff_name.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "staff-phone", children: "Phone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "staff-phone",
                    type: "tel",
                    value: phone,
                    onChange: (e) => setPhone(e.target.value),
                    "data-ocid": "settings.staff_phone.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: handleSaveProfile,
                  disabled: saving,
                  className: "gap-2",
                  "data-ocid": "settings.staff_profile.save_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
                    "Save"
                  ]
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "notifications", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationPrefs, { storageKey: notifKey }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "account", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            AccountPanel,
            {
              storedPassword,
              showPassword,
              onTogglePassword: () => setShowPassword((v) => !v),
              email: (currentDoctor == null ? void 0 : currentDoctor.email) ?? "",
              onSignOut: signOut
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
      ]
    }
  );
}
function AccountPanel({
  storedPassword,
  showPassword,
  onTogglePassword,
  email,
  onSignOut
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" }),
        "Sign-in Credentials"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: email,
              readOnly: true,
              className: "bg-muted text-muted-foreground cursor-not-allowed font-mono text-sm"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Current Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: showPassword ? "text" : "password",
                value: storedPassword,
                readOnly: true,
                className: "bg-muted text-muted-foreground cursor-not-allowed font-mono text-sm pr-10",
                "data-ocid": "settings.password.input"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
                onClick: onTogglePassword,
                "aria-label": showPassword ? "Hide password" : "Show password",
                "data-ocid": "settings.password.toggle",
                children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "To change your password, contact the admin." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-destructive/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base text-destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4" }),
          "Sign Out"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "You will need to sign in again to access the app." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "destructive",
          onClick: onSignOut,
          className: "gap-2",
          "data-ocid": "settings.signout.button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" }),
            "Sign Out"
          ]
        }
      ) })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground text-center mt-8", children: [
    "© ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    ". Built with ❤ using",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "hover:text-primary transition-colors",
        children: "caffeine.ai"
      }
    )
  ] });
}
export {
  Settings as default
};
