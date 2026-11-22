# MVSR Engineering College — Institutional Research & Development Web Portal

Official institutional Research & Development and Consultancy web portal for **Maturi Venkata Subba Rao (MVSR) Engineering College**, Hyderabad (Autonomous Institution, Affiliated to Osmania University, Approved by AICTE, Estd. 1981).

---

## Architecture & Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with institutional color system (Navy Blue `#002147`, Maroon `#800020`, Pure White `#FFFFFF`, Neutral Grays)
- **Animation**: GSAP 3 + ScrollTrigger for the architectural R&D block opening experience
- **Icons**: Lucide React
- **Data Architecture**: Structured verified datasets (`/data/`) representing official faculty profiles, patents, sponsored defense research grants, and governance committees.

---

## Features

1. **Immersive Architectural Opening Experience**:
   - Built using the photograph of the actual MVSR R&D Block (`IMG_5107.DNG`).
   - GSAP ScrollTrigger camera interpolation moving down the central checkered walkway toward the entrance doors.
   - Pinned sequence with bidirectional reverse scrolling, Skip Experience, and `prefers-reduced-motion` compliance.
2. **Official Institutional Header**:
   - Official MVSR circular emblem with exact aspect ratio preservation.
   - Stacked typography (`MVSR / ENGINEERING / COLLEGE`) and R&D Cell / M-MARTIC branding.
   - 9-category navigation with accessible dropdowns and responsive mobile drawer.
   - Reveal state linked to entrance sequence (header only appears inside the building on homepage).
3. **Verified Institutional Content**:
   - Osmania University approved Ph.D. Research Centers (CSE, ECE, Mechanical Engineering).
   - Sponsored defense projects (DRDO RCI, DRDL, ASL) and AICTE MODROBS grants.
   - Greater Hyderabad Municipal Corporation (GHMC) Third-Party Quality Control Agency status.
   - Indian Patent Office gazette publications and Patent Search Group committee.
   - Mandatory Central Library DrillBit Anti-Plagiarism Software verification protocol.
   - Global multi-category search across all research records.

---

## Getting Started

### Prerequisites

- Node.js (v18.17+ or v20+)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd "R&D WEB"

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

---

## Directory Structure

```
├── app/                  # Next.js App Router pages and layouts
│   ├── about/            # About R&D, Governance, Leadership, Content Inventory
│   ├── activities/       # Project EXPO, Symposiums, Workshops
│   ├── contact/          # Dean R&D Office, Requisition Submission Form
│   ├── infrastructure/   # 4,000+ sq. ft. Hub, M-MARTIC, Labs & Anechoic Chamber
│   ├── policies/         # Ethics, DrillBit Plagiarism, Incentives, Downloads
│   ├── projects/         # Sponsored DRDO Projects, GHMC Consultancy
│   ├── publications-ip/  # Patents, Patent Search Group, Scopus Publications
│   ├── research/         # OU Recognized Centers, Ph.D. Supervisors, Domains
│   ├── globals.css       # Global institutional styles
│   ├── layout.tsx        # Root layout with header and footer
│   └── page.tsx          # Homepage with opening sequence & research highlights
├── components/           # Modular React components
│   ├── animation/        # GSAP RDBlockEntryExperience
│   ├── navigation/       # Header, MvsrLogo, Branding, Dropdowns, Search
│   └── ui/               # GlobalSearchModal, Breadcrumbs
├── data/                 # Authenticated institutional datasets
├── public/               # Static assets (official emblem, building photograph)
└── styles/
```

---

## License

Institutional Property of Maturi Venkata Subba Rao (MVSR) Engineering College.
