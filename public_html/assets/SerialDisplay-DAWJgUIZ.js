import { i as createLucideIcon, j as jsxRuntimeExports, r as reactExports, ab as TriangleAlert, bE as Wifi, bF as WifiOff, A as AnimatePresence, m as motion, a3 as Users, X } from "./index-DJeWhCy-.js";
import { U as UserPlus } from "./user-plus-BJkC4ige.js";
import { M as MonitorPlay } from "./monitor-play-DHOzn285.js";
import { S as Search } from "./search-BLymxia-.js";
import { P as Plus } from "./plus-CHPIrJ6M.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "m21 3-7 7", key: "1l2asr" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
];
const Maximize2 = createLucideIcon("maximize-2", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
];
const Volume2 = createLucideIcon("volume-2", __iconNode$1);
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
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
];
const VolumeX = createLucideIcon("volume-x", __iconNode);
function todayKey() {
  return `clinic_serials_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}`;
}
const DEFAULT_VIDEO_URL = "https://www.youtube.com/embed/videoseries?list=PLbpi6ZahtOH6Ar_3GPy3workfN8S9-fvo&autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1";
function uid() {
  return Math.random().toString(36).slice(2, 10);
}
function nowTime() {
  const d = /* @__PURE__ */ new Date();
  return d.toTimeString().slice(0, 5);
}
function todayKeyLocal() {
  return `clinic_serials_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}`;
}
function canAddWalkIn() {
  try {
    const raw = localStorage.getItem("medicare_current_doctor");
    if (!raw) return false;
    const user = JSON.parse(raw);
    const allowedRoles = ["doctor", "consultant_doctor", "staff", "admin"];
    return allowedRoles.includes(user.role ?? "");
  } catch {
    return false;
  }
}
function getAllPatientNames() {
  const results = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!(key == null ? void 0 : key.startsWith("patients_"))) continue;
      const arr = JSON.parse(localStorage.getItem(key) || "[]");
      for (const p of arr) {
        if (p.fullName)
          results.push({ name: p.fullName, phone: p.phone ?? "" });
      }
    }
  } catch {
  }
  return results;
}
function resolveVideoUrl() {
  try {
    const email = localStorage.getItem("app_current_user_email");
    if (email) {
      const custom = localStorage.getItem(`serialDisplayVideoUrl_${email}`);
      if (custom == null ? void 0 : custom.trim()) return toDisplayEmbedUrl(custom.trim());
    }
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k == null ? void 0 : k.startsWith("serialDisplayVideoUrl_")) {
        const v = localStorage.getItem(k);
        if (v == null ? void 0 : v.trim()) return toDisplayEmbedUrl(v.trim());
      }
    }
  } catch {
  }
  return DEFAULT_VIDEO_URL;
}
function toDisplayEmbedUrl(raw) {
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
function safeParseQueue(raw) {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item) => item !== null && typeof item === "object" && typeof item.id === "string" && typeof item.serial === "number" && typeof item.patientName === "string" && ["waiting", "in-progress", "done"].includes(
        item.status
      )
    );
  } catch {
    return [];
  }
}
function mergeQueues(local, remote) {
  const map = /* @__PURE__ */ new Map();
  for (const item of local) map.set(item.id, item);
  for (const item of remote) map.set(item.id, item);
  return Array.from(map.values()).sort((a, b) => a.serial - b.serial);
}
function isSpeechAvailable() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}
class QueueErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "" };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error: error.message };
  }
  componentDidCatch(error, info) {
    console.error("SerialDisplay error:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-950 flex items-center justify-center text-center px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-red-900/40 border border-red-700/40 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-10 h-10 text-red-400" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-white", children: "Queue display unavailable" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 max-w-sm mx-auto", children: "Unable to load the patient queue. Please refresh the page to try again." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => window.location.reload(),
            className: "mt-4 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-colors",
            children: "Refresh Page"
          }
        )
      ] }) });
    }
    return this.props.children;
  }
}
const QUEUE_NOTE_SUBTYPE = "queue_display";
async function tryPullQueueFromCanister() {
  try {
    const actor = window.__canisterActorForQueue;
    if (!actor || !navigator.onLine) return [];
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const notes = await actor.getClinicalNotesByType(0n, "General");
    const queueNotes = notes.filter((n) => n.noteSubtype === QUEUE_NOTE_SUBTYPE).sort((a, b) => Number(b.createdAt - a.createdAt));
    if (queueNotes.length === 0) return [];
    const parsed = JSON.parse(queueNotes[0].content);
    if (parsed !== null && typeof parsed === "object" && "date" in parsed && parsed.date === today && "entries" in parsed) {
      return safeParseQueue(
        JSON.stringify(parsed.entries)
      );
    }
    return [];
  } catch {
    return [];
  }
}
function WalkInModal({ open, onClose, onAdd }) {
  const [mode, setMode] = reactExports.useState("search");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [newName, setNewName] = reactExports.useState("");
  const [selectedPatient, setSelectedPatient] = reactExports.useState(null);
  const searchRef = reactExports.useRef(null);
  const allPatients = getAllPatientNames();
  const filtered = searchQuery.trim() ? allPatients.filter(
    (p) => p.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];
  function handleAdd() {
    if (mode === "search") {
      if (!selectedPatient) return;
      onAdd({
        patientName: selectedPatient.name,
        phone: selectedPatient.phone,
        arrivalTime: nowTime(),
        status: "waiting",
        walkIn: true
      });
    } else {
      const name = newName.trim() || `Walk-in #${Math.floor(Math.random() * 90) + 10}`;
      onAdd({
        patientName: name,
        phone: "",
        arrivalTime: nowTime(),
        status: "waiting",
        walkIn: true
      });
    }
    setSearchQuery("");
    setNewName("");
    setSelectedPatient(null);
    setMode("search");
    onClose();
  }
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4",
      "data-ocid": "serial_display.walkin_modal",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.95 },
          transition: { duration: 0.2 },
          className: "bg-gray-900 border border-gray-700 rounded-2xl p-5 w-full max-w-sm space-y-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-4 h-4 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-white text-lg", children: "Add Walk-In Patient" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  className: "p-1.5 rounded-lg hover:bg-gray-800 text-gray-400 transition-colors",
                  "aria-label": "Close",
                  "data-ocid": "serial_display.walkin_close_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setMode("search");
                    setSelectedPatient(null);
                  },
                  className: `flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${mode === "search" ? "bg-emerald-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`,
                  "data-ocid": "serial_display.walkin_search_tab",
                  children: "Registered Patient"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setMode("new");
                    setSelectedPatient(null);
                  },
                  className: `flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${mode === "new" ? "bg-emerald-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`,
                  "data-ocid": "serial_display.walkin_new_tab",
                  children: "New Walk-In"
                }
              )
            ] }),
            mode === "search" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", ref: searchRef, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Search patient name…",
                    value: searchQuery,
                    onChange: (e) => {
                      setSearchQuery(e.target.value);
                      setSelectedPatient(null);
                    },
                    className: "w-full bg-gray-800 border border-gray-600 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 transition-colors",
                    "data-ocid": "serial_display.walkin_search_input"
                  }
                )
              ] }),
              selectedPatient ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-emerald-900/30 border border-emerald-700/40 rounded-xl px-3 py-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center text-xs font-bold text-white shrink-0", children: selectedPatient.name[0] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-sm font-semibold truncate", children: selectedPatient.name }),
                  selectedPatient.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-xs", children: selectedPatient.phone })
                ] })
              ] }) : filtered.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-36 overflow-y-auto rounded-xl border border-gray-700 bg-gray-800 divide-y divide-gray-700", children: filtered.slice(0, 8).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700 transition-colors flex items-center justify-between gap-2",
                  onClick: () => {
                    setSelectedPatient(p);
                    setSearchQuery(p.name);
                  },
                  "data-ocid": "serial_display.walkin_patient_option",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium truncate", children: p.name }),
                    p.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-xs shrink-0", children: p.phone })
                  ]
                },
                p.name
              )) })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "walkin-name",
                  className: "text-sm text-gray-400 font-medium",
                  children: "Walk-in name (optional)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "walkin-name",
                  type: "text",
                  placeholder: "e.g. Walk-in #3 or leave blank for auto",
                  value: newName,
                  onChange: (e) => setNewName(e.target.value),
                  className: "w-full bg-gray-800 border border-gray-600 rounded-xl px-3 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 transition-colors",
                  "data-ocid": "serial_display.walkin_name_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  className: "flex-1 py-2.5 rounded-xl text-sm font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors",
                  "data-ocid": "serial_display.walkin_cancel_button",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleAdd,
                  disabled: mode === "search" && !selectedPatient,
                  className: "flex-1 py-2.5 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors flex items-center justify-center gap-1.5",
                  "data-ocid": "serial_display.walkin_add_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                    "Add to Queue"
                  ]
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
const SLIDESHOW_TIPS = [
  {
    text: "Wash your hands for at least 20 seconds to prevent infections",
    bg: "from-blue-900 to-blue-800",
    icon: "🧼"
  },
  {
    text: "Drink 8 glasses of water daily to stay hydrated",
    bg: "from-cyan-900 to-cyan-800",
    icon: "💧"
  },
  {
    text: "Regular exercise for 30 minutes daily improves heart health",
    bg: "from-teal-900 to-teal-800",
    icon: "🏃"
  },
  {
    text: "Blood pressure check recommended every 6 months",
    bg: "from-purple-900 to-purple-800",
    icon: "❤️"
  },
  {
    text: "Diabetes screening is advised for adults over 40",
    bg: "from-green-900 to-green-800",
    icon: "🔬"
  },
  {
    text: "Adequate sleep (7-8 hours) strengthens your immune system",
    bg: "from-indigo-900 to-indigo-800",
    icon: "😴"
  },
  {
    text: "Avoid self-medication — consult your doctor before taking new drugs",
    bg: "from-rose-900 to-rose-800",
    icon: "💊"
  },
  {
    text: "Regular eye checkups recommended every 2 years",
    bg: "from-amber-900 to-amber-800",
    icon: "👁️"
  },
  {
    text: "Take all prescribed antibiotics as directed — do not stop early",
    bg: "from-orange-900 to-orange-800",
    icon: "⚕️"
  },
  {
    text: "Vaccinations protect you and your community — stay up to date",
    bg: "from-emerald-900 to-emerald-800",
    icon: "💉"
  }
];
function HealthTipSlideshow() {
  const [idx, setIdx] = reactExports.useState(0);
  const [visible, setVisible] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const iv = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % SLIDESHOW_TIPS.length);
        setVisible(true);
      }, 500);
    }, 5e3);
    return () => clearInterval(iv);
  }, []);
  const tip = SLIDESHOW_TIPS[idx];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `flex-1 flex flex-col items-center justify-center p-8 bg-gradient-to-br ${tip.bg} transition-all duration-500`,
      "data-ocid": "serial_display.health_slideshow",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `text-center transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-6", children: tip.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-xl sm:text-2xl font-semibold leading-relaxed max-w-xs mx-auto", children: tip.text }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 text-gray-400 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-300", children: "Dr. Arman Kabir's Care" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", children: "Health Education Series" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-1.5 mt-6", children: SLIDESHOW_TIPS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-1.5 h-1.5 rounded-full transition-all ${i === idx ? "bg-white w-3" : "bg-white/30"}`
              },
              t.text.slice(0, 10)
            )) })
          ]
        }
      )
    }
  );
}
function SerialDisplayInner() {
  const [serials, setSerials] = reactExports.useState([]);
  const [speechEnabled, setSpeechEnabled] = reactExports.useState(true);
  const [time, setTime] = reactExports.useState(/* @__PURE__ */ new Date());
  const [isOnline, setIsOnline] = reactExports.useState(navigator.onLine);
  const [showVideoPanel, setShowVideoPanel] = reactExports.useState(true);
  const [hasError, setHasError] = reactExports.useState(false);
  const [videoUrl, setVideoUrl] = reactExports.useState(() => resolveVideoUrl());
  const [videoLoadError, setVideoLoadError] = reactExports.useState(false);
  const [showWalkIn, setShowWalkIn] = reactExports.useState(false);
  const allowWalkIn = canAddWalkIn();
  const prevNowServingIdRef = reactExports.useRef(null);
  const lastCanisterPollRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const iv = setInterval(() => setTime(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(iv);
  }, []);
  reactExports.useEffect(() => {
    const onOnline = () => setIsOnline(true);
    const onOffline = () => setIsOnline(false);
    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);
    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
    };
  }, []);
  const bcRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    try {
      const bc = new BroadcastChannel("clinic_queue_sync");
      bcRef.current = bc;
      bc.onmessage = (e) => {
        const incoming = safeParseQueue(JSON.stringify(e.data));
        if (incoming.length > 0) {
          setSerials((prev) => mergeQueues(prev, incoming));
        }
      };
      return () => bc.close();
    } catch {
      return void 0;
    }
  }, []);
  reactExports.useEffect(() => {
    try {
      const bc = new BroadcastChannel("serial_display_video_sync");
      bc.onmessage = (e) => {
        var _a;
        const newUrl = (_a = e.data) == null ? void 0 : _a.videoUrl;
        setVideoUrl(newUrl ? toDisplayEmbedUrl(newUrl) : DEFAULT_VIDEO_URL);
        setVideoLoadError(false);
      };
      return () => bc.close();
    } catch {
      return void 0;
    }
  }, []);
  reactExports.useEffect(() => {
    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        setVideoUrl(resolveVideoUrl());
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);
  reactExports.useEffect(() => {
    const load = async () => {
      try {
        const raw = localStorage.getItem(todayKeyLocal());
        const localEntries = safeParseQueue(raw);
        const now = Date.now();
        let merged = localEntries;
        if (now - lastCanisterPollRef.current >= 5e3) {
          lastCanisterPollRef.current = now;
          const remoteEntries = await tryPullQueueFromCanister();
          if (remoteEntries.length > 0) {
            merged = mergeQueues(localEntries, remoteEntries);
            try {
              localStorage.setItem(todayKey(), JSON.stringify(merged));
            } catch {
            }
          }
        }
        setSerials(merged);
        setHasError(false);
      } catch (err) {
        console.error("SerialDisplay poll error:", err);
        setHasError(true);
        setSerials([]);
      }
    };
    load();
    const interval = setInterval(load, 2e3);
    return () => clearInterval(interval);
  }, []);
  const nowServing = serials.find((s) => s.status === "in-progress") ?? null;
  const waiting = serials.filter((s) => s.status === "waiting");
  const doneCount = serials.filter((s) => s.status === "done").length;
  reactExports.useEffect(() => {
    const currentId = (nowServing == null ? void 0 : nowServing.id) ?? null;
    if (currentId && currentId !== prevNowServingIdRef.current && speechEnabled && isSpeechAvailable()) {
      try {
        const serial = (nowServing == null ? void 0 : nowServing.serial) ?? 0;
        const text = `Patient number ${serial} please come. আসুন পেশেন্ট নম্বর ${serial}`;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.85;
        utterance.pitch = 1;
        utterance.volume = 1;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
      } catch {
      }
    }
    prevNowServingIdRef.current = currentId;
  }, [nowServing, speechEnabled]);
  const handleFullscreen = () => {
    try {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {
        });
      }
    } catch {
    }
  };
  function handleAddWalkIn(entry) {
    const next = serials.length > 0 ? Math.max(...serials.map((s) => s.serial)) + 1 : 1;
    const newEntry = {
      ...entry,
      id: uid(),
      serial: next
    };
    const updated = [...serials, newEntry];
    setSerials(updated);
    try {
      localStorage.setItem(todayKeyLocal(), JSON.stringify(updated));
      const bc = new BroadcastChannel("clinic_queue_sync");
      bc.postMessage(updated);
      bc.close();
    } catch {
    }
  }
  const currentTimeStr = time.toLocaleTimeString("en-BD", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  const currentDateStr = time.toLocaleDateString("en-BD", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen bg-gray-950 text-white flex flex-col select-none",
      "data-ocid": "serial_display.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 sm:px-8 py-3 bg-gray-900/90 border-b border-gray-800 backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg sm:text-2xl font-bold text-white tracking-wide truncate", children: "Dr. Arman Kabir's Care" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-xs sm:text-sm mt-0.5", children: "Patient Queue Display" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:block text-center flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl sm:text-3xl font-bold text-white tabular-nums leading-tight", children: currentTimeStr }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-xs sm:text-sm font-medium", children: currentDateStr })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-1 justify-end", children: [
            allowWalkIn && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setShowWalkIn(true),
                className: "flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors",
                title: "Add walk-in patient to queue",
                "data-ocid": "serial_display.walkin_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Walk-In" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium ${isOnline ? "bg-emerald-900/40 border border-emerald-700/40 text-emerald-400" : "bg-red-900/40 border border-red-700/40 text-red-400"}`,
                "data-ocid": "serial_display.sync_status",
                children: [
                  isOnline ? /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(WifiOff, { className: "w-3.5 h-3.5" }),
                  isOnline ? "Synced" : "Offline"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setShowVideoPanel((v) => !v),
                className: `p-2.5 rounded-xl transition-colors ${showVideoPanel ? "bg-blue-800 hover:bg-blue-700" : "bg-gray-800 hover:bg-gray-700"}`,
                title: showVideoPanel ? "Hide video panel" : "Show video panel",
                "data-ocid": "serial_display.video_toggle",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  MonitorPlay,
                  {
                    className: `w-5 h-5 ${showVideoPanel ? "text-blue-300" : "text-gray-400"}`
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setSpeechEnabled((v) => !v),
                className: "p-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors",
                title: speechEnabled ? "Mute announcements" : "Enable announcements",
                "aria-label": speechEnabled ? "Mute announcements" : "Enable announcements",
                "data-ocid": "serial_display.speech_toggle",
                children: speechEnabled ? /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-5 h-5 text-emerald-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "w-5 h-5 text-gray-500" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: handleFullscreen,
                className: "p-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors",
                title: "Fullscreen",
                "aria-label": "Enter fullscreen",
                "data-ocid": "serial_display.fullscreen_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "w-5 h-5 text-gray-300" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:hidden flex items-center justify-between px-4 py-2 bg-gray-900/60 border-b border-gray-800/60 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-xs", children: currentDateStr }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white tabular-nums", children: currentTimeStr })
        ] }),
        hasError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "mx-4 mt-3 flex items-center gap-3 bg-red-900/40 border border-red-700/40 rounded-xl px-4 py-3 text-sm text-red-300",
            "data-ocid": "serial_display.error_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 shrink-0 text-red-400" }),
              "Queue data unavailable — reconnecting automatically. Check your connection."
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex-1 flex flex-col gap-4 p-3 sm:p-6 ${showVideoPanel ? "lg:flex-row" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `flex flex-col gap-4 ${showVideoPanel ? "lg:flex-1" : "flex-1"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex-1 bg-gray-900/60 rounded-2xl border border-gray-800 flex flex-col items-center justify-center py-8 px-4 min-h-[240px]",
                        "data-ocid": "serial_display.now_serving.panel",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: nowServing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            motion.div,
                            {
                              initial: { opacity: 0, scale: 0.9 },
                              animate: { opacity: 1, scale: 1 },
                              exit: { opacity: 0, scale: 0.9 },
                              transition: { duration: 0.35 },
                              className: "text-center w-full max-w-md",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm sm:text-base uppercase tracking-[0.25em] mb-4 font-medium", children: "Now Serving" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  motion.div,
                                  {
                                    animate: {
                                      boxShadow: [
                                        "0 0 0px #10b98180",
                                        "0 0 40px #10b98180",
                                        "0 0 0px #10b98180"
                                      ]
                                    },
                                    transition: {
                                      duration: 2,
                                      repeat: Number.POSITIVE_INFINITY,
                                      ease: "easeInOut"
                                    },
                                    className: "w-24 h-24 sm:w-40 sm:h-40 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-5 ring-4 ring-emerald-400/30",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl sm:text-7xl font-black text-white", children: nowServing.serial })
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 px-2 break-words leading-tight", children: nowServing.patientName }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-base sm:text-xl", children: [
                                  "Serial #",
                                  nowServing.serial
                                ] }),
                                speechEnabled && isSpeechAvailable() && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 inline-flex items-center gap-2 text-emerald-400 text-sm bg-emerald-900/30 border border-emerald-800/40 rounded-full px-3 py-1.5", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-3.5 h-3.5 animate-pulse" }),
                                  "Announcement active"
                                ] })
                              ]
                            },
                            nowServing.id
                          ) : serials.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            motion.div,
                            {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              className: "text-center",
                              "data-ocid": "serial_display.empty_state",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-12 h-12 sm:w-14 sm:h-14 text-gray-600" }) }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl sm:text-3xl font-bold text-gray-500 px-4", children: "No patients in queue" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mt-2 text-sm max-w-xs mx-auto leading-relaxed", children: "The queue is empty for today. Patients will appear here when added by the doctor." })
                              ]
                            },
                            "empty"
                          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            motion.div,
                            {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              className: "text-center",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-12 h-12 sm:w-14 sm:h-14 text-gray-600" }) }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl sm:text-3xl font-bold text-gray-500 px-4", children: "No patient currently being served" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mt-2 text-sm", children: "Waiting for the doctor to call the next patient" })
                              ]
                            },
                            "idle"
                          ) }),
                          waiting.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            motion.div,
                            {
                              initial: { opacity: 0, y: 12 },
                              animate: { opacity: 1, y: 0 },
                              className: "mt-6 px-6 sm:px-10 py-3 sm:py-4 bg-gray-800/80 rounded-2xl border border-amber-700/30 text-center",
                              "data-ocid": "serial_display.up_next",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-xs uppercase tracking-widest mb-1 font-medium", children: "Up Next" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg sm:text-3xl font-bold text-amber-400", children: [
                                  "#",
                                  waiting[0].serial,
                                  " — ",
                                  waiting[0].patientName
                                ] })
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "flex-1 bg-amber-900/20 border border-amber-800/30 rounded-xl px-4 py-3 text-center",
                          "data-ocid": "serial_display.waiting_count",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl sm:text-3xl font-bold text-amber-400", children: waiting.length }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-amber-600/80 text-xs uppercase tracking-wide mt-0.5 font-medium", children: "Waiting" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "flex-1 bg-emerald-900/20 border border-emerald-800/30 rounded-xl px-4 py-3 text-center",
                          "data-ocid": "serial_display.done_count",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl sm:text-3xl font-bold text-emerald-400", children: doneCount }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-emerald-600/80 text-xs uppercase tracking-wide mt-0.5 font-medium", children: "Completed" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "flex-1 bg-blue-900/20 border border-blue-800/30 rounded-xl px-4 py-3 text-center",
                          "data-ocid": "serial_display.total_count",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl sm:text-3xl font-bold text-blue-400", children: serials.length }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-600/80 text-xs uppercase tracking-wide mt-0.5 font-medium", children: "Total" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "bg-gray-900/60 rounded-2xl border border-gray-800 overflow-hidden",
                        "data-ocid": "serial_display.queue.list",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-3 border-b border-gray-800 flex items-center justify-between bg-gray-900/80", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-200 text-base", children: "Waiting Queue" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-amber-500 text-black text-xs font-bold px-2.5 py-0.5 rounded-full min-w-[1.5rem] text-center", children: waiting.length })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-y-auto max-h-48 sm:max-h-56 p-3 space-y-2", children: waiting.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "text-gray-600 text-sm text-center py-8",
                              "data-ocid": "serial_display.queue.empty_state",
                              children: "No patients waiting"
                            }
                          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: waiting.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            motion.div,
                            {
                              initial: { opacity: 0, x: 16 },
                              animate: { opacity: 1, x: 0 },
                              exit: { opacity: 0, x: -16 },
                              transition: { duration: 0.2, delay: idx * 0.03 },
                              className: `flex items-center gap-3 rounded-xl px-4 py-2.5 ${idx === 0 ? "bg-amber-900/30 border border-amber-700/30" : "bg-gray-800/60"}`,
                              "data-ocid": `serial_display.queue.item.${idx + 1}`,
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "div",
                                  {
                                    className: `w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-bold text-sm ${idx === 0 ? "bg-amber-500 text-black" : "bg-gray-700 text-white"}`,
                                    children: s.serial
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-white truncate text-sm", children: s.patientName }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500", children: [
                                    "Arrived: ",
                                    s.arrivalTime
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
                                  s.walkIn && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-emerald-600 text-white font-bold px-1.5 py-0.5 rounded", children: "Walk-In" }),
                                  idx === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-amber-500 text-black font-bold px-1.5 py-0.5 rounded", children: "NEXT" })
                                ] })
                              ]
                            },
                            s.id
                          )) }) })
                        ]
                      }
                    )
                  ]
                }
              ),
              showVideoPanel && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: 24 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: 24 },
                  className: "lg:w-[420px] xl:w-[500px] flex flex-col gap-3",
                  "data-ocid": "serial_display.video.panel",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-900/60 rounded-2xl border border-gray-800 overflow-hidden flex-1 flex flex-col min-h-[200px] sm:min-h-[280px]", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-gray-800 bg-gray-900/80 flex items-center justify-between", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(MonitorPlay, { className: "w-4 h-4 text-blue-400" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-200 text-sm", children: "Health Education" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full", children: "Live" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 relative bg-black flex flex-col", children: !videoLoadError ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "iframe",
                        {
                          src: videoUrl,
                          title: "Health Education",
                          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                          allowFullScreen: true,
                          className: "absolute inset-0 w-full h-full border-0",
                          loading: "lazy",
                          onError: () => setVideoLoadError(true)
                        },
                        videoUrl
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(HealthTipSlideshow, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2.5 bg-gray-900/90 border-t border-gray-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HealthTicker, {}) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2.5", children: HEALTH_FACTS.map((fact) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "bg-gray-900/50 border border-gray-800 rounded-xl p-3",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-emerald-400", children: fact.value }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-0.5 leading-snug", children: fact.label })
                        ]
                      },
                      fact.label
                    )) })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showWalkIn && /* @__PURE__ */ jsxRuntimeExports.jsx(
          WalkInModal,
          {
            open: showWalkIn,
            onClose: () => setShowWalkIn(false),
            onAdd: handleAddWalkIn
          }
        ) })
      ]
    }
  );
}
const HEALTH_TIPS = [
  "💧 Drink at least 8 glasses of water daily to stay healthy.",
  "🚶 Walk 30 minutes every day to maintain a healthy heart.",
  "🥦 Eat more vegetables and fruits for essential vitamins.",
  "😴 Get 7–8 hours of sleep every night for body recovery.",
  "🩺 Visit your doctor regularly for preventive check-ups.",
  "🚭 Avoid smoking — it causes heart disease and cancer.",
  "🧘 Manage stress with yoga, meditation, or deep breathing.",
  "💊 Never skip prescribed medicines without consulting your doctor."
];
const HEALTH_FACTS = [
  { value: "150 min", label: "Weekly exercise target" },
  { value: "5 servings", label: "Fruits & veggies per day" },
  { value: "8 hrs", label: "Recommended daily sleep" },
  { value: "<120/80", label: "Healthy blood pressure" }
];
function HealthTicker() {
  const [idx, setIdx] = reactExports.useState(0);
  const [visible, setVisible] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const iv = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % HEALTH_TIPS.length);
        setVisible(true);
      }, 400);
    }, 6e3);
    return () => clearInterval(iv);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      className: `text-xs text-gray-300 transition-opacity duration-400 ${visible ? "opacity-100" : "opacity-0"}`,
      style: { minHeight: "1.25rem" },
      children: HEALTH_TIPS[idx]
    }
  );
}
function SerialDisplay() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueueErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SerialDisplayInner, {}) });
}
export {
  SerialDisplay as default
};
