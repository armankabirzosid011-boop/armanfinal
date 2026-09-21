import { r as reactExports, j as jsxRuntimeExports, am as User, B as Button, L as Label, I as Input, S as Select, d as SelectTrigger, e as SelectValue, f as SelectContent, g as SelectItem, ab as TriangleAlert, h as Badge, z as LoaderCircle } from "./index-DJeWhCy-.js";
import { C as Camera } from "./camera-DpsioLhp.js";
import { E as Eye } from "./eye-DZPhoU57.js";
import { U as UserPlus } from "./user-plus-BJkC4ige.js";
function cmToFeetInches(cm) {
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return `${feet}'${inches}"`;
}
function calculateAge(dob) {
  if (!dob) return null;
  const birth = new Date(dob);
  if (Number.isNaN(birth.getTime())) return null;
  const today = /* @__PURE__ */ new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || m === 0 && today.getDate() < birth.getDate()) age--;
  return age >= 0 ? age : null;
}
function feetInchesToCm(str) {
  const match = str.match(/(\d+)['\s]*(?:ft)?['\s]*(\d*)["\s]*(?:in)?/i);
  if (!match) return null;
  const feet = Number.parseInt(match[1]) || 0;
  const inches = Number.parseInt(match[2]) || 0;
  const cm = feet * 30.48 + inches * 2.54;
  return cm > 0 ? Math.round(cm * 10) / 10 : null;
}
function dobToBigInt(dateStr) {
  if (!dateStr) return null;
  try {
    const ms = new Date(dateStr).getTime();
    if (Number.isNaN(ms)) return null;
    return BigInt(ms) * 1000000n;
  } catch {
    return null;
  }
}
function ageToApproxDob(age) {
  const n = Number.parseInt(age);
  if (Number.isNaN(n) || n < 0 || n > 130) return "";
  const year = (/* @__PURE__ */ new Date()).getFullYear() - n;
  return `${year}-01-01`;
}
function loadAllPatients() {
  const results = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!(key == null ? void 0 : key.startsWith("patients_"))) continue;
    try {
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      const items = JSON.parse(raw);
      if (Array.isArray(items)) results.push(...items);
    } catch {
    }
  }
  return results;
}
function PatientForm({
  patient,
  prefill,
  onSubmit,
  onCancel,
  onViewExisting,
  isLoading
}) {
  const dob = (patient == null ? void 0 : patient.dateOfBirth) ? new Date(Number(patient.dateOfBirth / 1000000n)).toISOString().split("T")[0] : "";
  const existingPhoto = (patient == null ? void 0 : patient.photo) ?? null;
  const existingRegNum = (patient == null ? void 0 : patient.registerNumber) ?? null;
  const [form, setForm] = reactExports.useState({
    fullName: (patient == null ? void 0 : patient.fullName) ?? (prefill == null ? void 0 : prefill.fullName) ?? "",
    nameBn: (patient == null ? void 0 : patient.nameBn) ?? "",
    dateOfBirth: dob,
    ageInput: "",
    gender: (patient == null ? void 0 : patient.gender) ?? (prefill == null ? void 0 : prefill.gender) ?? "male",
    phone: (patient == null ? void 0 : patient.phone) ?? (prefill == null ? void 0 : prefill.phone) ?? "",
    email: (patient == null ? void 0 : patient.email) ?? "",
    address: (patient == null ? void 0 : patient.address) ?? "",
    bloodGroup: (patient == null ? void 0 : patient.bloodGroup) ?? "unknown",
    weight: (patient == null ? void 0 : patient.weight) != null ? String(patient.weight) : "",
    height: (patient == null ? void 0 : patient.height) != null ? cmToFeetInches(patient.height) : "",
    patientType: (patient == null ? void 0 : patient.patientType) ?? "outdoor"
  });
  const [photo, setPhoto] = reactExports.useState(existingPhoto);
  const fileInputRef = reactExports.useRef(null);
  const [duplicateMatch, setDuplicateMatch] = reactExports.useState(
    null
  );
  const [proceedAnyway, setProceedAnyway] = reactExports.useState(false);
  const debounceRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (patient) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const phone = form.phone.trim();
      const email = form.email.trim().toLowerCase();
      if (!phone && !email) {
        setDuplicateMatch(null);
        return;
      }
      const allPatients = loadAllPatients();
      let match = null;
      if (phone) {
        const found = allPatients.find((p) => {
          var _a;
          return ((_a = p.phone) == null ? void 0 : _a.trim()) === phone;
        });
        if (found) match = { patient: found, matchField: "phone" };
      }
      if (!match && email) {
        const found = allPatients.find(
          (p) => {
            var _a;
            return ((_a = p.email) == null ? void 0 : _a.trim().toLowerCase()) === email;
          }
        );
        if (found) match = { patient: found, matchField: "email" };
      }
      setDuplicateMatch(match);
      if (match) setProceedAnyway(false);
    }, 500);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [form.phone, form.email, patient]);
  const set = (key, val) => setForm((prev) => ({ ...prev, [key]: val }));
  const handlePhotoChange = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      var _a2;
      setPhoto((_a2 = ev.target) == null ? void 0 : _a2.result);
    };
    reader.readAsDataURL(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fullName.trim()) return;
    let dobBigInt = dobToBigInt(form.dateOfBirth);
    if (!dobBigInt && form.ageInput.trim()) {
      const approx = ageToApproxDob(form.ageInput.trim());
      dobBigInt = dobToBigInt(approx);
    }
    try {
      onSubmit({
        fullName: form.fullName.trim(),
        nameBn: form.nameBn.trim() || null,
        dateOfBirth: dobBigInt,
        gender: form.gender,
        phone: form.phone.trim() || null,
        email: form.email.trim() || null,
        address: form.address.trim() || null,
        bloodGroup: form.bloodGroup === "unknown" ? null : form.bloodGroup || null,
        weight: form.weight ? Number.parseFloat(form.weight) : null,
        height: form.height ? feetInchesToCm(form.height) : null,
        allergies: [],
        chronicConditions: [],
        pastSurgicalHistory: null,
        patientType: form.patientType,
        photo: photo ?? null
      });
    } catch (err) {
      console.error("PatientForm submit error:", err);
    }
  };
  const getDuplicateRegNum = () => {
    const p = duplicateMatch == null ? void 0 : duplicateMatch.patient;
    return p == null ? void 0 : p.registerNumber;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
    existingRegNum && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-lg px-4 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Register No.:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary tracking-wider", children: existingRegNum })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "w-20 h-20 rounded-2xl border-2 border-dashed border-border flex items-center justify-center overflow-hidden bg-muted/30 cursor-pointer hover:border-primary/50 transition-colors",
          onClick: () => {
            var _a;
            return (_a = fileInputRef.current) == null ? void 0 : _a.click();
          },
          title: "Upload patient photo",
          children: photo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: photo,
              alt: "Patient",
              className: "w-full h-full object-cover"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-8 h-8 text-muted-foreground" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: () => {
              var _a;
              return (_a = fileInputRef.current) == null ? void 0 : _a.click();
            },
            className: "gap-2",
            "data-ocid": "patient_form.upload_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-3.5 h-3.5" }),
              photo ? "Change Photo" : "Add Photo"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Optional" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: fileInputRef,
            type: "file",
            accept: "image/*",
            className: "hidden",
            onChange: handlePhotoChange
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "fullName", children: [
          "Full Name (English only) ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "fullName",
            value: form.fullName,
            onChange: (e) => set("fullName", e.target.value),
            placeholder: "Patient full name",
            required: true,
            "data-ocid": "patient_form.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "nameBn", children: "Bangla Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "nameBn",
            value: form.nameBn,
            onChange: (e) => set("nameBn", e.target.value),
            placeholder: "বাংলা নাম (optional)"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "dob", children: "Date of Birth" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "dob",
            type: "date",
            value: form.dateOfBirth,
            onChange: (e) => {
              set("dateOfBirth", e.target.value);
              if (e.target.value) set("ageInput", "");
            }
          }
        ),
        form.dateOfBirth && calculateAge(form.dateOfBirth) !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-teal-700 font-semibold mt-1", children: [
          "Age: ",
          calculateAge(form.dateOfBirth),
          " years"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "ageInput", children: [
          "Age (years)",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal text-xs", children: "or DOB" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "ageInput",
            type: "number",
            min: "0",
            max: "130",
            value: form.ageInput,
            onChange: (e) => {
              set("ageInput", e.target.value);
              if (e.target.value) set("dateOfBirth", "");
            },
            placeholder: "e.g. 35"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Gender" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: form.gender, onValueChange: (v) => set("gender", v), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "patient_form.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "male", children: "Male" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "female", children: "Female" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "other", children: "Other" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Patient Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: form.patientType,
            onValueChange: (v) => set("patientType", v),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "outdoor", children: "Outdoor" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "admitted", children: "Admitted" })
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "phone",
            value: form.phone,
            onChange: (e) => set("phone", e.target.value),
            placeholder: "+880…",
            type: "tel",
            "data-ocid": "patient_form.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "email",
            value: form.email,
            onChange: (e) => set("email", e.target.value),
            placeholder: "patient@example.com",
            type: "email",
            "data-ocid": "patient_form.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "address", children: "Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "address",
            value: form.address,
            onChange: (e) => set("address", e.target.value),
            placeholder: "Street, City"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Blood Group" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: form.bloodGroup,
            onValueChange: (v) => set("bloodGroup", v),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                "A+",
                "A-",
                "B+",
                "B-",
                "O+",
                "O-",
                "AB+",
                "AB-",
                "unknown"
              ].map((bg) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: bg, children: bg === "unknown" ? "Unknown" : bg }, bg)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "weight", children: "Weight (kg)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "weight",
            value: form.weight,
            onChange: (e) => set("weight", e.target.value),
            placeholder: "65",
            type: "number",
            step: "0.1"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "height", children: "Height" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "height",
            value: form.height,
            onChange: (e) => set("height", e.target.value),
            placeholder: `5'8"`,
            type: "text"
          }
        )
      ] })
    ] }),
    !patient && duplicateMatch && !proceedAnyway && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col gap-3 bg-amber-50 border border-amber-300 rounded-xl px-4 py-3",
        "data-ocid": "patient_form.duplicate_warning",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-amber-600 mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-amber-800", children: "Possible duplicate patient" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-700 mt-0.5", children: [
                "A patient with this",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: duplicateMatch.matchField === "phone" ? "phone number" : "email address" }),
                " ",
                "already exists:"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-amber-900 text-sm", children: duplicateMatch.patient.fullName }),
                getDuplicateRegNum() && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "text-xs border-amber-400 text-amber-700 font-mono",
                    children: getDuplicateRegNum()
                  }
                ),
                duplicateMatch.patient.gender && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "text-xs border-amber-300 text-amber-600",
                    children: duplicateMatch.patient.gender
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
            onViewExisting && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                size: "sm",
                className: "gap-1.5 border-amber-400 text-amber-800 hover:bg-amber-100",
                onClick: () => onViewExisting(duplicateMatch.patient.id),
                "data-ocid": "patient_form.view_existing_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5" }),
                  "View Existing Patient"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                size: "sm",
                className: "gap-1.5 border-amber-400 text-amber-800 hover:bg-amber-100",
                onClick: () => setProceedAnyway(true),
                "data-ocid": "patient_form.create_anyway_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-3.5 h-3.5" }),
                  "Create Anyway"
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3 pt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          variant: "outline",
          onClick: onCancel,
          "data-ocid": "patient_form.cancel_button",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "submit",
          disabled: isLoading || !form.fullName.trim() || !patient && !!duplicateMatch && !proceedAnyway,
          className: "bg-primary hover:bg-primary/90 text-primary-foreground",
          "data-ocid": "patient_form.submit_button",
          children: [
            isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-2 animate-spin" }),
            patient ? "Update Patient" : "Register Patient"
          ]
        }
      )
    ] })
  ] });
}
export {
  PatientForm as P
};
