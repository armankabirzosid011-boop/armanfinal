# Design Brief: Dr. Arman Kabir's Care

**Tone**: Refined medical minimalism — professional, trustworthy, information-dense clinical UI with vivid, purposeful color-coding for instant scanability and role identification.

**Palette — Patient Tabs & Clinical Sections** (light L, dark L+0.10):
| Section | L | C | H | Purpose |
|---------|---|---|---|----------|
| Overview | 0.55 | 0.18 | 200 | Core patient data, primary actions |
| Vitals | 0.60 | 0.15 | 170 | Teal vital signs (BP, Pulse, SpO₂, °F, RR, RBS, GCS) |
| Investigations | 0.58 | 0.17 | 260 | Purple lab results, trend graphs |
| History | 0.65 | 0.16 | 50 | Amber past medical/surgical history |
| Prescriptions | 0.58 | 0.19 | 10 | Rose/red medications, drug interactions |
| Procedures | 0.62 | 0.16 | 40 | Peach procedures, interventions |
| Complaints | 0.58 | 0.18 | 20 | Rose complaint tracking |
| Advice | 0.70 | 0.14 | 60 | Orange health guidance, counselling |
| Timeline | 0.62 | 0.15 | 130 | Green event history |
| Chat | 0.55 | 0.18 | 290 | Indigo messaging |
| Appointments | 0.62 | 0.15 | 130 | Green calendar, scheduling |
| Pending | 0.70 | 0.14 | 60 | Orange alerts, approvals |
| Handover | 0.65 | 0.16 | 50 | Amber shift handover notes |
| Referrals | 0.62 | 0.16 | 40 | Peach referral letters |
| SOAP Notes | 0.55 | 0.15 | 160 | Teal ward round notes |
| Account | 0.48 | 0.12 | 250 | Slate settings, profile |
| Inv. Payment | 0.60 | 0.15 | 170 | Teal billing, receipts |

**Role-Based Accent Colors**:
| Role | L | C | H | Badge Style |
|------|---|---|---|-------------|
| Admin | 0.55 | 0.18 | 200 | Blue badge, full app access |
| Consultant / Prof / Assoc Prof / Asst Prof | 0.55 | 0.18 | 200 | Blue badge, clinical lead |
| Registrar | 0.62 | 0.15 | 130 | Green badge, senior MO |
| Medical Officer | 0.60 | 0.15 | 170 | Teal badge, SOAP writer |
| Assistant Registrar | 0.65 | 0.16 | 50 | Amber badge, junior |
| Intern Doctor | 0.65 | 0.16 | 50 | Amber badge, draft notes |
| Nurse | 0.58 | 0.19 | 10 | Rose badge, vitals & MAR |
| Reception | 0.62 | 0.16 | 40 | Peach badge, admissions & billing |
| Patient | 0.48 | 0.12 | 250 | Slate badge, self-service |

**Vitals Verification States**:
| State | L | C | H | Badge |
|-------|---|---|---|-------|
| Drafted | 0.60 | 0.15 | 170 | Teal — awaiting review |
| Pending Review | 0.70 | 0.14 | 60 | Orange — MO action |
| Verified | 0.70 | 0.18 | 150 | Emerald — approved |
| Rejected | 0.55 | 0.22 | 25 | Red — resubmit required |

**Bed Management Colors**:
| Status | L | C | H | Tile Style |
|--------|---|---|---|------------|
| Available | 0.70 | 0.18 | 150 | Green — ready |
| Occupied | 0.55 | 0.22 | 25 | Red — in use |
| Reserved | 0.70 | 0.14 | 60 | Amber — 2-hour hold |
| Cleaning | 0.55 | 0.18 | 200 | Blue — post-discharge |

**Ward Round Completion Badges**:
| Status | L | C | H | Badge |
|--------|---|---|---|-------|
| No Note Today | 0.55 | 0.22 | 25 | Red — incomplete |
| Intern Draft | 0.70 | 0.14 | 60 | Amber — awaiting MO |
| MO Reviewed | 0.55 | 0.18 | 200 | Blue — ready for Consultant |
| Finalized | 0.70 | 0.18 | 150 | Emerald — locked |

**Clinical Alert Colors**:
| Alert | L | C | H | Style |
|-------|---|---|---|-------|
| Sepsis | 0.55 | 0.22 | 25 | Red — critical |
| AKI | 0.65 | 0.18 | 60 | Orange — urgent |
| NEWS2 High | 0.70 | 0.14 | 60 | Amber — warning |
| Normal | 0.70 | 0.18 | 150 | Emerald — safe |

**Typography**: Bricolage Grotesque (display, 600–700 wt, headlines & section titles) + Plus Jakarta Sans (body, 400–600 wt, content & forms). Type scale: 12, 14, 16, 18, 20, 24, 28, 32. All temperature fields labeled °F. All clinical headers use gradient overlays (135° from full color to 70% opacity).

**Structural Zones**:
| Zone | Background | Border | Purpose |
|------|------------|--------|----------|
| Header (nav, breadcrumb) | `bg-card` | `border-b` | Sticky, clear section break |
| Left Sidebar (mobile: icon-only) | `bg-sidebar-background` | `border-r` (desktop) | Tab navigation, role colors, notification badges |
| Main Content | `bg-background` | — | Reading area, white space |
| Patient Card / Section | `bg-card` | `border-l` (color-coded) | Information hierarchy, left-border accent |
| Tab-Specific Header | `gradient-header-*` (135° angle) | — | Vivid color identification at glance |
| Status Badges | Color-coded 10% opacity bg | — | Drafted (teal), Pending (orange), Verified (emerald), Rejected (red) |

**Shapes**: `rounded-lg` (0.5rem) for cards & modals, `rounded-sm` (0.375rem) for inputs & badges, no radii on tab bar or header.

**Shadows**: `shadow-card` (0 1px 3px, subtle), `shadow-elevated` (0 4px 16px, modal/popover), `shadow-subtle` (0 1px 2px, hover states).

**Motion**: Tab switches & status updates fade in 200ms, slide-in-right for drawer/sidebar reveals, no bouncing or easing overshoot.

**Constraints**: No decorative gradients, no blur, no animations on chart rendering. Pure information clarity. Vivid status badges are the only color-driven emphasis — everything else supports hierarchy.

**Signature Details**:
1. Each patient tab has its own color-coded left border + tab header gradient
2. Vitals verification flow shows inline badge state changes (Drafted → Pending → Verified / Rejected)
3. Ward round patient cards show live completion badge (red/yellow/blue/green)
4. Bed grid uses color-coded tiles with icons for instant status scanning
5. Clinical alerts (Sepsis, AKI, NEWS2, Normal) appear as colored text with icon indicators
6. Role-based sidebar colors + notification badges for on-duty staff
7. Gradient headers on all major section cards reinforce visual categorization

**Responsive Design**: Mobile-first (full-width, stacked). Small screens (<md): single-column, tab bar scrolls horizontally, sidebar collapses to icon-only mode, bed grid wraps to 2 columns. Desktop (≥md): left sidebar fixed, main content takes full right width, bed grid shows 4+ columns, cards flow in 2–3 column grid.

**Accessibility**: All status badges include text labels + icons (not just color). Tab colors meet WCAG AA contrast ratios in both light and dark modes. Touch targets minimum 44×44px on mobile. Font sizes minimum 16px for body on mobile for bedside readability.

**Dark Mode**: Lightness +0.10 for all tab/role/alert colors. Background darkens to `0.12 L`, text lightens to `0.95 L`. Sidebar `bg-card` at `0.15 L` with `0.25 L` border for contrast. All gradient headers maintain saturation and hue, only lightness shifts.
