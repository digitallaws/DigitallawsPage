# Graph Report - DigitallawsPage  (2026-10-27)

## Corpus Check
- 48 files · ~651,596 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 314 nodes · 329 edges · 30 communities (23 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `487a9eb7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- compilerOptions
- HomePage.tsx
- compilerOptions
- SiteLayout.tsx
- package.json
- dependencies
- AlliesMap.tsx
- ClientsBanner.tsx
- tsconfig.json
- Services.tsx
- What You Must Do When Invoked
- App.tsx
- executive_light_tech/DESIGN.md
- executive_dark_tech/DESIGN.md
- 3. Esquema de colores
- graphify reference: extra exports and benchmark
- PqrsPage.tsx
- graphify reference: query, path, explain
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- React + TypeScript + Vite
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- extraction-spec.md

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 20 edges
2. `compilerOptions` - 18 edges
3. `What You Must Do When Invoked` - 12 edges
4. `/graphify` - 10 edges
5. `scripts` - 8 edges
6. `graphify reference: extra exports and benchmark` - 8 edges
7. `Components` - 7 edges
8. `Components` - 6 edges
9. `useTheme()` - 5 edges
10. `graphify reference: query, path, explain` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Footer()` --calls--> `useTheme()`  [EXTRACTED]
  src/components/Footer.tsx → src/context/useTheme.ts
- `Navbar()` --calls--> `useTheme()`  [EXTRACTED]
  src/components/Navbar.tsx → src/context/useTheme.ts

## Import Cycles
- None detected.

## Communities (30 total, 7 thin omitted)

### Community 0 - "devDependencies"
Cohesion: 0.06
Nodes (33): autoprefixer, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, devDependencies, autoprefixer (+25 more)

### Community 1 - "compilerOptions"
Cohesion: 0.07
Nodes (26): DOM, DOM.Iterable, ES2022, src, vite/client, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly (+18 more)

### Community 2 - "HomePage.tsx"
Cohesion: 0.09
Nodes (18): About(), pillars, ContactCTA(), Hero(), Partners(), points, Product, Products (+10 more)

### Community 3 - "compilerOptions"
Cohesion: 0.09
Nodes (22): ES2023, node, vite.config.ts, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module (+14 more)

### Community 4 - "SiteLayout.tsx"
Cohesion: 0.15
Nodes (13): columns, Footer(), legalLinks, trustBadges, links, Navbar(), NavLink, ThemeProvider() (+5 more)

### Community 5 - "package.json"
Cohesion: 0.13
Nodes (14): name, overrides, vite, private, scripts, build, dev, format (+6 more)

### Community 6 - "dependencies"
Cohesion: 0.13
Nodes (15): dependencies, prop-types, react, react-dom, react-router-dom, react-simple-maps, @tailwindcss/vite, @vis.gl/react-google-maps (+7 more)

### Community 14 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 15 - "App.tsx"
Cohesion: 0.15
Nodes (14): App(), LegalDoc(), LegalDocProps, LegalSection, CookiesPage(), sections, NotFoundPage(), PrivacyPage() (+6 more)

### Community 16 - "executive_light_tech/DESIGN.md"
Cohesion: 0.14
Nodes (13): Brand & Style, Buttons, Cards & Modular Containers, Checkboxes & Radios, Chips & Badges, Colors, Components, Data Tables (+5 more)

### Community 17 - "executive_dark_tech/DESIGN.md"
Cohesion: 0.15
Nodes (12): Badges & Chips, Brand & Style, Buttons, Cards & Architecture Nodes, Checkboxes & Radios, Colors, Components, Elevation & Depth (+4 more)

### Community 18 - "3. Esquema de colores"
Cohesion: 0.17
Nodes (11): 1. Tipografía principal, 2. Escala tipográfica y espaciados, 3.1. Color de marca y acentos — ambos modos, 3.2. Modo oscuro — Executive Dark Tech 🌙, 3.3. Modo claro — Executive Light Tech ☀️, 3.4. Estados y notificaciones — ambos modos, 3. Esquema de colores, 4. Principios de aplicación (+3 more)

### Community 19 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 20 - "PqrsPage.tsx"
Cohesion: 0.25
Nodes (5): countries, genRadicado(), highlights, PqrsPage(), requestTypes

### Community 21 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 22 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 23 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 24 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 25 - "React + TypeScript + Vite"
Cohesion: 0.50
Nodes (3): Expanding the ESLint configuration, React Compiler, React + TypeScript + Vite

## Knowledge Gaps
- **178 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+173 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _178 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06060606060606061 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `HomePage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08866995073891626 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._