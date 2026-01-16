Note: Market Oracle helps you make confident product decisions in seconds  
			<Market Oracle is a tool that provides merchants with market intelligence signals, tailoring them to their needs. Additionally, Market Oracle's agentic commerce integration tools are offered to provide smooth and experienced transition, instead of a uncertain path.>  

### **1) Onboarding + Tutorial Wizard + Info Center {[[UX]]}**

**Given** the user is on the home screen after sign-up
**When** the user enters the product for the first time
**Then** a floating “Getting Started” card must guide the user through the essential steps (search, filters, signals, export)
**And** the card must include “Skip”, “Next”, and “Replay tutorial” options
**And** the user must be able to open an “Info Center” from the dashboard at any time

---

### **2) Survey (Post-Signup Intake) {[[UX]], [[Backend]]}**

**Given** the user has just signed up (or first enters the dashboard)
**When** the user is prompted for onboarding preferences
**Then** the app must present a short survey (niche, target region, budget range, experience level, preferred platform)
**And** survey answers must be saved to the user profile
**And** the dashboard must personalize defaults (filters, recommendations, and warnings) based on survey responses

---

### **3) Seller / Competitor List Visibility (“Load More”) {[[UX]]}**
**Given** the user is on the main dashboard results view
**When** the user wants to see all sellers competing in the market for a selected query/product
**Then** the seller list must show an initial subset with a “Load more” control
**And** pressing “Load more” must append additional sellers until all are visible
**And** the UI must show a loading state and preserve scroll position

---

### **4) Image Search Input {[[Backend]], [[UX]]}**

**Given** the user is on the main dashboard
**When** the user wants to analyze the market using a product image
**Then** the app must allow image upload (and/or paste) as a search input
**And** the system must convert the image into a market query and return results in the same output format as text search
**And** the user must be able to edit/refine the derived query before running analysis

---

### **5) Prompt Health Tester (Weak Prompt Alert) {[[Middleware]]}**

**Given** the user is on the main dashboard and is about to run an analysis
**When** the user submits a prompt/query
**Then** the system must evaluate prompt quality (specificity, category clarity, region, constraints)
**And** if the prompt is weak, the app must display an alert with concrete improvement suggestions
**And** the user must be able to proceed anyway or apply suggested fixes with one click

---

### **6) PTSW Panel (Popular / Trend / Solution / Wow) {[[UX]], [[Backend]]}**

**Given** the user is viewing analysis output for a product/query
**When** the user wants to evaluate “winning product” potential
**Then** the app must display a dedicated “PTSW” panel
**And** the panel must show results for Popular, Trend, Solution, and Wow as distinct signals with brief explanations
**And** each signal must reference the underlying evidence source(s) used to compute it (at least at a high level)

---

### **7) Price Range Distribution Chart {[[UX]], [[Backend]]}**

**Given** the user is viewing analysis output for a product/query
**When** the user wants to understand market pricing
**Then** the app must display a price distribution chart 
**And** the chart must show min/median/max and typical price band(s)
**And** the user must be able to filter the chart by seller segment, region, and shipping speed (if available)

---

### **8) YoY Parameter (Historical Trend Backtracking) {[[Backend]], [[UX]]}**

**Given** the user is viewing analysis output
**When** the user wants to analyze historical market movement for a product/query
**Then** the app must provide a YoY view to backtrack product market trends over time
**And** the output must show at minimum a year-over-year comparison and a time-series view
**And** the user must be able to choose the time range (e.g., 6 months, 12 months, 24 months)

---

### **9) LTV Parameter (Selected Product Lifetime Value Panel) {[[Backend]], [[UX]]}**


**Given** the user is viewing analysis output and has selected one or more products
**When** the user wants to evaluate profitability potential over time
**Then** the app must display an LTV panel for the selected product(s)
**And** the panel must show LTV assumptions/inputs (editable if applicable) and the resulting LTV estimate
**And** the user must be able to compare LTV across multiple selected products side-by-side

---	  