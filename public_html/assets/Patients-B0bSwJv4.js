import { i as createLucideIcon, r as reactExports, y as useGetAllPatients, x as useCreatePatient, N as useRolePermissions, q as useEmailAuth, ap as getDoctorEmail, j as jsxRuntimeExports, B as Button, I as Input, a3 as Users, A as AnimatePresence, D as Dialog, s as DialogContent, t as DialogHeader, v as DialogTitle, u as ue, ad as useNavigate, m as motion, h as Badge, a4 as UserCheck } from "./index-DJeWhCy-.js";
import { S as Skeleton } from "./skeleton-DqU5IOMD.js";
import NurseDueMeds from "./NurseDueMeds-C04LCd8h.js";
import { P as PatientForm } from "./PatientForm-BCKQSbNc.js";
import { U as UserPlus } from "./user-plus-BJkC4ige.js";
import { S as Search } from "./search-BLymxia-.js";
import { D as Droplets } from "./droplets-Dr40MrVb.js";
import { C as Calendar } from "./calendar-BL7xJRSg.js";
import { P as Phone } from "./phone-Co67JhRS.js";
import { M as Mail } from "./mail-yvZvzeI4.js";
import "./camera-DpsioLhp.js";
import "./eye-DZPhoU57.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
];
const Hash = createLucideIcon("hash", __iconNode);
const SKELETON_KEYS = ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"];
function getAge(dateOfBirth) {
  if (!dateOfBirth) return "—";
  const dob = new Date(Number(dateOfBirth / 1000000n));
  const age = Math.floor(
    (Date.now() - dob.getTime()) / (365.25 * 24 * 3600 * 1e3)
  );
  return `${age}y`;
}
function isIncompleteRegistration(patientId) {
  try {
    return localStorage.getItem(`patient_reg_incomplete_${String(patientId)}`) === "true";
  } catch {
    return false;
  }
}
function PatientCard({
  patient,
  index,
  assignedToCurrentUser
}) {
  const navigate = useNavigate();
  const initial = patient.fullName.charAt(0).toUpperCase();
  const registerNumber = patient.registerNumber;
  const photo = patient.photo;
  const incomplete = isIncompleteRegistration(patient.id);
  const handleClick = () => {
    navigate({
      to: "/PatientProfile",
      search: { id: String(patient.id) }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, scale: 0.97 },
      transition: { duration: 0.25, delay: index * 0.04 },
      "data-ocid": `patients.item.${index + 1}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: handleClick,
          className: "w-full text-left bg-card border border-border rounded-xl p-4 hover:shadow-elevated hover:border-primary/30 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-lg font-bold text-white shadow-sm overflow-hidden",
                style: {
                  background: "linear-gradient(135deg, oklch(0.62 0.14 195), oklch(0.52 0.14 215))"
                },
                children: photo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: photo,
                    alt: patient.fullName,
                    className: "w-full h-full object-cover"
                  }
                ) : initial
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground truncate", children: patient.fullName }),
                  patient.nameBn && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: patient.nameBn }),
                  registerNumber && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-mono text-primary/80 flex items-center gap-1 mt-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "w-3 h-3" }),
                    registerNumber
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-shrink-0 flex-wrap justify-end", children: [
                  incomplete && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-xs bg-orange-100 text-orange-800 border border-orange-300 gap-1", children: "⚠ Incomplete" }),
                  assignedToCurrentUser && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-xs bg-purple-100 text-purple-800 border border-purple-300 gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-2.5 h-2.5" }),
                    "Assigned to you"
                  ] }),
                  patient.bloodGroup && patient.bloodGroup !== "unknown" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Badge,
                    {
                      variant: "outline",
                      className: "text-xs border-red-200 text-red-600",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "w-2.5 h-2.5 mr-1" }),
                        patient.bloodGroup
                      ]
                    }
                  ),
                  patient.status === "Admitted" || patient.isAdmitted || patient.patientType === "admitted" || patient.patientType === "indoor" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-xs bg-green-100 text-green-800 border border-green-300", children: "🏥 Admitted" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs capitalize", children: patient.patientType })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-muted-foreground", children: [
                patient.dateOfBirth && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
                  getAge(patient.dateOfBirth)
                ] }),
                patient.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3 h-3" }),
                  patient.phone
                ] }),
                patient.email && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 truncate", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3 h-3" }),
                  patient.email
                ] })
              ] })
            ] })
          ] })
        }
      )
    }
  );
}
function Patients() {
  const [search, setSearch] = reactExports.useState("");
  const [showForm, setShowForm] = reactExports.useState(false);
  const [showIncompleteOnly, setShowIncompleteOnly] = reactExports.useState(false);
  const { data: patients = [], isLoading } = useGetAllPatients();
  const createMutation = useCreatePatient();
  const permissions = useRolePermissions();
  const { currentDoctor } = useEmailAuth();
  const currentUserEmail = (currentDoctor == null ? void 0 : currentDoctor.email) ?? getDoctorEmail();
  const isConsultant = (currentDoctor == null ? void 0 : currentDoctor.role) === "consultant_doctor" || (currentDoctor == null ? void 0 : currentDoctor.role) === "doctor";
  const showDueMeds = (currentDoctor == null ? void 0 : currentDoctor.role) === "nurse" || (currentDoctor == null ? void 0 : currentDoctor.role) === "intern_doctor";
  const baseFiltered = patients.filter((p) => {
    const matchesSearch = p.fullName.toLowerCase().includes(search.toLowerCase()) || (p.nameBn ?? "").includes(search) || (p.phone ?? "").includes(search) || (p.email ?? "").toLowerCase().includes(search.toLowerCase()) || (p.registerNumber ?? "").toString().toLowerCase().includes(search.toLowerCase());
    if (!matchesSearch) return false;
    if (showIncompleteOnly && !isIncompleteRegistration(p.id)) return false;
    return true;
  });
  const handleCreate = (data) => {
    createMutation.mutate(data, {
      onSuccess: (patient) => {
        const regNum = patient == null ? void 0 : patient.registerNumber;
        ue.success(
          regNum ? `Patient registered — ${regNum}` : "Patient registered"
        );
        setShowForm(false);
      },
      onError: () => ue.error("Failed to register patient")
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto p-4 sm:p-6 lg:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Patients" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-0.5", children: [
          patients.length,
          " registered"
        ] })
      ] }),
      permissions.canRegisterPatients && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: () => setShowForm(true),
          className: "bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full sm:w-auto",
          "data-ocid": "patients.open_modal_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-4 h-4" }),
            "New Patient"
          ]
        }
      )
    ] }),
    showDueMeds && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      NurseDueMeds,
      {
        currentUserName: (currentDoctor == null ? void 0 : currentDoctor.name) ?? "",
        currentUserRole: (currentDoctor == null ? void 0 : currentDoctor.role) ?? "nurse"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-2 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Search by name, register no., phone, or email…",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            className: "pl-9",
            "data-ocid": "patients.search_input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "label",
        {
          className: "flex items-center gap-1.5 cursor-pointer select-none whitespace-nowrap self-center",
          "data-ocid": "patients.incomplete_only.toggle",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: showIncompleteOnly,
                onChange: (e) => setShowIncompleteOnly(e.target.checked),
                className: "rounded border-orange-400 text-orange-600 focus:ring-orange-500"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-orange-700", children: "⚠ Show Incomplete Only" })
          ]
        }
      )
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "patients.loading_state", children: SKELETON_KEYS.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 rounded-xl" }, k)) }) : baseFiltered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-16 space-y-3",
        "data-ocid": "patients.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-8 h-8 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: search ? "No patients found" : "No patients yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: search ? "Try a different search term or register number" : "Register your first patient to get started" }),
          !search && permissions.canRegisterPatients && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              onClick: () => setShowForm(true),
              className: "mt-2",
              "data-ocid": "patients.secondary_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-4 h-4 mr-2" }),
                "Register Patient"
              ]
            }
          )
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: baseFiltered.map((patient, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      PatientCard,
      {
        patient,
        index: idx,
        assignedToCurrentUser: isConsultant && !!patient.consultantAssignment && patient.consultantAssignment.email === currentUserEmail
      },
      patient.id.toString()
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showForm, onOpenChange: setShowForm, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "max-w-xl max-h-[90vh] overflow-y-auto",
        "data-ocid": "patients.dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Register New Patient" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PatientForm,
            {
              onSubmit: handleCreate,
              onCancel: () => setShowForm(false),
              isLoading: createMutation.isPending
            }
          )
        ]
      }
    ) })
  ] });
}
export {
  Patients as default
};
