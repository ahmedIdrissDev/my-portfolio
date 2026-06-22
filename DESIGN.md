# DESIGN DNA

The OpenAI design language observed presents a sophisticated blend of **authoritative minimalism** and **intelligent clarity**. It emanates a professional, confident, and forward-thinking persona, targeting a discerning audience that values precision and innovation. The visual energy is calm and structured, providing a highly focused experience without distraction.

## Visual Identity

*   **Design Mood:** Sophisticated, intelligent, premium, and understated.
*   **Emotional Tone:** Trustworthy, innovative, precise, and empowering.
*   **Visual Energy:** Calm, deliberate, high-contrast, yet approachable. Not flashy or aggressive.
*   **Target Audience Perception:** Tech-savvy professionals, advertisers, and businesses seeking cutting-edge, reliable AI solutions.
*   **Brand Personality:** Forward-thinking, authoritative, minimalist, clean, and focused on core value.

## Layout System

*   **Grid Logic:** A robust 12-column grid system is implied, providing structure and balance. Content is primarily centered within a contained maximum width (`~1280px`), ensuring readability on large displays while maintaining ample white space.
*   **Spacing Rhythm:** Generous and consistent vertical spacing between sections (e.g., 80-120px) creates a sense of openness and allows content to breathe. Internal component spacing is also consistent, following a clear scale.
*   **Section Density:** Low density overall. Content is never crowded, allowing each element to stand out. This contributes to a premium, editorial feel.
*   **Alignment Philosophy:** Main content blocks (hero, feature descriptions) are centered on the page. Text within these blocks is predominantly left-aligned for optimal readability. Navigation elements are typically spread-aligned (logo left, actions right). Two-column layouts balance text on one side with visuals on the other.
*   **Composition Patterns:** Hero sections feature large, impactful headlines with concise supporting text. Feature sets are organized in a symmetrical 3-column grid of cards. Informational sections often use a 2-column layout pairing explanatory text with a relevant visual or UI mockup.

## Typography System

*   **Font Categories:** A clean, modern sans-serif typeface, likely a humanist or geometric sans, chosen for high legibility and professional aesthetic.
*   **Display Font Style:** Bold, impactful, and large for primary headlines, typically rendered in pure black on white for maximum contrast and authority.
*   **Text Hierarchy:** Clearly defined scale. `H1` is dominant and commanding. `H2` is strong but supportive. Body text is comfortably sized for reading, with ample line height. Smaller text is used for meta-information but remains highly legible.
*   **Weight Usage:** Primarily uses `Bold (700)` for headlines and `Regular (400)` or `Medium (500)` for body text. Minimal use of lighter weights, maintaining a strong, direct voice.
*   **Scale Relationships:** A significant size difference between headings and body text, creating clear visual priority. Body text is on the larger side (18-20px) enhancing readability.
*   **Letter Spacing Behavior:** Generally standard. Headlines may have slightly tighter letter-spacing for visual cohesion, while body text maintains comfortable spacing for flow.

## Color Intelligence

*   **Primary Colors:** Dominated by a stark, high-contrast palette of **pure white (`#FFFFFF`)** for backgrounds and **pure black (`#000000`)** for primary text and calls to action. This choice conveys sophistication, clarity, and uncompromising professionalism.
*   **Accent Behavior:** Color accents are used sparingly and deliberately.
    *   **Buttons:** Primary buttons are solid black with white text. Secondary buttons are white with a black border and black text.
    *   **Gradients:** Subtle, desaturated, organic-toned gradients are introduced in specific components (e.g., 'Helpful resources' cards). These gradients lean towards muted greens, pale blues, and soft yellows, suggesting growth, natural ease, or innovation. They are never vibrant or primary, acting as a soft counterpoint to the monochromatic core. They are typically `linear-gradient` with low saturation and slight shifts in hue.
*   **Surface Hierarchy:** White serves as the default, primary surface. Components like cards and dropdowns often reside on white or a very subtle off-white (`#F9F9F9`), sometimes with a soft shadow to imply elevation. The gradient cards visually differentiate themselves through their unique backgrounds.
*   **Contrast Strategy:** The core strategy is maximum contrast (black on white) for all critical information and calls to action, ensuring excellent accessibility and immediate visual impact. Lower contrast is reserved for subtle design elements or secondary information, preventing visual noise.
*   **Brand Color Psychology:** Black and white project authority, sophistication, and a no-nonsense approach. The judicious use of soft, natural gradients introduces a human, organic, and aspirational touch, balancing the starkness and suggesting innovation that is approachable and beneficial.

## Shape Language

*   **Border Radius Philosophy:** Consistent, subtle rounding across all UI elements. Buttons, cards, input fields, and component containers uniformly utilize a small to medium border-radius (e.g., 4-8px). This choice provides a modern, friendly feel without becoming overly soft or playful.
*   **Sharp vs Soft Edges:** Predominantly soft edges due to the consistent application of border-radius. No overtly sharp or angular elements are present, contributing to a cohesive and gentle visual flow.
*   **Component Geometry:** Rectangular forms with rounded corners are the standard. Icons themselves are often contained within rounded rectangular shapes. The overall geometry is stable and predictable.
*   **Container Behavior:** Containers are clearly defined, often with subtle borders or shadows, to provide separation and hierarchy. Mockups are typically presented as images with a soft drop shadow, creating a sense of a physical screen or printed material.

## Component Patterns

*   **Feature Cards:** White background, subtle light border/shadow, consistent medium border-radius. Feature a large, outlined black icon at the top-left, followed by a bold H3 title and concise body text. Designed for uniform sizing within a grid.
*   **Resource Cards:** Distinct gradient background, consistent medium border-radius, square aspect ratio. Features a centered icon encased in a white rounded rectangle, with a bold title below.
*   **Primary Button (`Sign Up`, `Start now`):** Solid black background, white semi-bold text, consistent small border-radius. Includes an optional right-aligned arrow icon for indicative action.
*   **Secondary Button (`Log in`):** White background, 1px black border, black semi-bold text, consistent small border-radius.
*   **Dropdown Menu:** White background, medium border-radius, subtle shadow. Contains left-aligned menu items with defined hover states.
*   **Header:** Minimalist, fixed-width. OpenAI logo left, action buttons (Login, Signup) right.
*   **Section Headers:** Large, bold, centered H1 or H2, often followed by a centered paragraph of explanatory text.
*   **Text Blocks:** Well-structured paragraphs with ample line height and consistent left alignment, often paired with visual content.

## Motion Language

*   **Animation Personality:** Subtle, functional, and professional. Animations are designed to enhance user experience by indicating state changes or providing gentle feedback, rather than for decorative purposes.
*   **Transition Softness:** Smooth, `ease-out` timing curves are implied for a gentle and natural feel. Transitions are quick but not abrupt.
*   **Hover Philosophy:** Responsive and clear. Buttons exhibit subtle background/text color changes or slight lifts. Cards might show a slight elevation via shadow expansion or subtle `translateY`. Menu items show clear background fills.
*   **Motion Intensity:** Low intensity. No dramatic, bouncy, or overly complex animations. Focus is on clarity and quick feedback.
*   **Scroll Behavior:** Standard browser scrolling. No parallax, sticky headers with complex transformations, or on-scroll content reveal animations are evident.

---

# VISUAL PHILOSOPHY

The OpenAI design embodies a **"Quiet Authority"** philosophy. It rejects visual extravagance in favor of clarity, precision, and an almost academic gravitas, yet remains approachable through subtle design cues. The core strength lies in its uncompromising contrast and disciplined use of white space, which together convey a sense of a highly organized, intelligent, and premium digital experience. The design strategically employs desaturated, organic gradients as a controlled 'spark' of innovation and approachability, ensuring the brand feels contemporary and progressive without succumbing to generic tech aesthetics. This visual DNA ensures that interfaces built upon it are immediately recognizable as OpenAI: sophisticated, impactful, and deeply considered. It's a design that doesn't shout for attention; it commands it through intentional craft and a clear visual voice.

---

# DESIGN SYSTEM

## Tokens

### Colors
*   `--color-brand-primary`: `#000000` (Black - for primary text, buttons, borders)
*   `--color-brand-secondary`: `#FFFFFF` (White - for backgrounds, text on dark)
*   `--color-text-primary`: `#000000` (Main headings, strong body text)
*   `--color-text-secondary`: `#333333` (Standard body text for slightly softer contrast)
*   `--color-text-tertiary`: `#666666` (Subtle text, captions, copyright)
*   `--color-text-on-dark`: `#FFFFFF` (Text on black backgrounds)
*   `--color-surface-default`: `#FFFFFF` (Primary page background, card backgrounds)
*   `--color-surface-subtle`: `#F9F9F9` (Very light grey for subtle distinctions, e.g., mockup backgrounds)
*   `--color-surface-hover-light`: `#F5F5F5` (Light hover state for white elements)
*   `--color-surface-active-light`: `#EFEFEF` (Light active state for white elements)
*   `--color-border-primary`: `#000000` (Strong borders, e.g., secondary button)
*   `--color-border-subtle`: `#EEEEEE` (Faint borders, e.g., feature cards)
*   `--color-icon-primary`: `#000000`
*   `--color-icon-on-dark`: `#FFFFFF`
*   **Gradient Palette (Desaturated, Organic - for `ResourceCard` backgrounds)**
    *   `--gradient-green-start`: `hsl(150, 25%, 88%)`
    *   `--gradient-green-end`: `hsl(170, 25%, 88%)`
    *   `--gradient-yellow-start`: `hsl(60, 25%, 88%)`
    *   `--gradient-yellow-end`: `hsl(80, 25%, 88%)`
    *   `--gradient-blue-start`: `hsl(200, 25%, 88%)`
    *   `--gradient-blue-end`: `hsl(220, 25%, 88%)`
    *(Specific angles and color stops to be precisely extracted from images, typical `linear-gradient(135deg, var(--start), var(--end))`).*

### Typography
*   **Font Family:** `var(--font-primary): 'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';`
*   **Font Weights:**
    *   `--font-weight-regular`: 400
    *   `--font-weight-medium`: 500
    *   `--font-weight-semibold`: 600
    *   `--font-weight-bold`: 700
*   **Font Sizes (Responsive Scale):**
    *   `--font-size-h1`: clamp(3.5rem, 6vw, 5rem) (e.g., 56px to 80px)
    *   `--font-size-h2`: clamp(2.5rem, 4.5vw, 3rem) (e.g., 40px to 48px)
    *   `--font-size-h3`: clamp(1.5rem, 2.5vw, 2rem) (e.g., 24px to 32px)
    *   `--font-size-body-lg`: clamp(1.125rem, 1.5vw, 1.25rem) (e.g., 18px to 20px)
    *   `--font-size-body-md`: 1rem (16px)
    *   `--font-size-body-sm`: 0.875rem (14px)
*   **Line Heights:**
    *   `--line-height-heading`: 1.15
    *   `--line-height-body`: 1.6
*   **Letter Spacing:**
    *   `--letter-spacing-heading`: -0.02em
    *   `--letter-spacing-body`: normal

### Spacing (8px Grid System)
*   `--spacing-xxs`: 4px
*   `--spacing-xs`: 8px
*   `--spacing-sm`: 16px
*   `--spacing-md`: 24px
*   `--spacing-lg`: 40px
*   `--spacing-xl`: 64px
*   `--spacing-xxl`: 96px
*   `--spacing-xxxl`: 128px (Used between major sections)

### Border Radius
*   `--border-radius-xs`: 4px
*   `--border-radius-sm`: 6px (Buttons, small components)
*   `--border-radius-md`: 8px (Cards, dropdowns)
*   `--border-radius-lg`: 12px (Larger containers, if needed)

### Shadows
*   `--shadow-sm`: `0px 1px 3px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.05)`
*   `--shadow-md`: `0px 4px 12px rgba(0, 0, 0, 0.08), 0px 1px 4px rgba(0, 0, 0, 0.04)` (For dropdowns, lifted cards)
*   `--shadow-lg`: `0px 8px 24px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.05)` (For larger modals, prominent elements)

---

# COMPONENT ARCHITECTURE

## Navbar
*   **Structure:** `OpenAI` logo (`--color-brand-primary`) on the far left. A fixed-width, transparent background, with `Log in` (Secondary Button) and `Sign up` (Primary Button) on the far right.
*   **Spacing:** `padding: var(--spacing-md) var(--spacing-xxl)` (Vertical/Horizontal).
*   **Behavior:** Stays fixed at the top, transparent background.

## Primary Button
*   **Appearance:** `background: var(--color-brand-primary)`, `color: var(--color-text-on-dark)`, `border-radius: var(--border-radius-sm)`.
*   **Padding:** `padding: var(--spacing-xs) var(--spacing-md)`.
*   **Typography:** `font-size: var(--font-size-body-md)`, `font-weight: var(--font-weight-semibold)`.
*   **States:**
    *   `Hover`: `background: #1A1A1A`, `transform: translateY(-1px)`, `box-shadow: var(--shadow-sm)`.
    *   `Active`: `background: #000000`, `transform: translateY(0px)`.
    *   `Disabled`: `opacity: 0.5`, `cursor: not-allowed`.

## Secondary Button (Ghost Button)
*   **Appearance:** `background: transparent`, `color: var(--color-brand-primary)`, `border: 1px solid var(--color-brand-primary)`, `border-radius: var(--border-radius-sm)`.
*   **Padding:** `padding: var(--spacing-xs) var(--spacing-md)`.
*   **Typography:** `font-size: var(--font-size-body-md)`, `font-weight: var(--font-weight-semibold)`.
*   **States:**
    *   `Hover`: `background: var(--color-surface-hover-light)`.
    *   `Active`: `background: var(--color-surface-active-light)`.
    *   `Disabled`: `opacity: 0.5`, `cursor: not-allowed`.

## Feature Card (e.g., "Show up while people explore...")
*   **Structure:** Icon (large, outlined, `--color-icon-primary`) at top-left. `H3` title, followed by `body-lg` text.
*   **Appearance:** `background: var(--color-surface-default)`, `border: 1px solid var(--color-border-subtle)`, `border-radius: var(--border-radius-md)`.
*   **Padding:** `padding: var(--spacing-lg)`.
*   **Spacing:** `margin-bottom: var(--spacing-md)` between icon and title, title and body.
*   **States:**
    *   `Hover`: `box-shadow: var(--shadow-sm)`, `transform: translateY(-2px)`.

## Resource Card (e.g., "Ads in ChatGPT: The basics")
*   **Structure:** Centered, square card. Inner white rounded rectangle container for an outlined icon (`--color-icon-primary`). `H3` title below.
*   **Appearance:** `background: linear-gradient(135deg, var(--gradient-green-start), var(--gradient-green-end))`, `border-radius: var(--border-radius-md)`. `aspect-ratio: 1 / 1`.
*   **Padding:** `padding: var(--spacing-lg)`.
*   **Spacing:** `margin-bottom: var(--spacing-md)` between icon container and title.
*   **States:** No explicit hover state shown, but a subtle scale up (`transform: scale(1.01)`) or shadow could be applied.

## Dropdown Menu (e.g., `+ Create`)
*   **Structure:** Vertically stacked `MenuItem`s.
*   **Appearance:** `background: var(--color-surface-default)`, `border-radius: var(--border-radius-md)`, `box-shadow: var(--shadow-md)`.
*   **Padding:** `padding: var(--spacing-xs) 0`.
*   **MenuItem:** `padding: var(--spacing-sm) var(--spacing-md)`, `color: var(--color-text-primary)`, `font-size: var(--font-size-body-md)`.
*   **MenuItem States:**
    *   `Hover`: `background: var(--color-surface-hover-light)`.

## Section Header
*   **Structure:** Centered `H1` or `H2` title, followed by a centered `body-lg` paragraph.
*   **Spacing:** `margin-bottom: var(--spacing-md)` between title and paragraph. `margin-top/bottom: var(--spacing-xxxl)` for the whole section.

---

# MOTION SYSTEM

## Animation Vocabulary

*   **Entrance Animations:** Minimal. If content needs to appear dynamically, use a subtle `opacity` fade-in.
    *   `@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`
    *   `animation: fadeIn 200ms ease-out forwards;`
*   **Hover Interactions:** Quick, functional, and non-distracting.
    *   **Buttons:** `transition: background-color 150ms ease-out, transform 150ms ease-out, box-shadow 150ms ease-out;`
    *   **Cards:** `transition: transform 200ms ease-out, box-shadow 200ms ease-out;`
    *   **Dropdown Menu Items:** `transition: background-color 100ms ease-out;`
*   **Scroll Effects:** No custom scroll effects. Native browser scrolling only.
*   **Motion Timing Philosophy:** Fast (`100ms-250ms`), responsive, and subtle. `ease-out` for most elements to provide a natural deceleration and soft landing. Avoid `ease-in` or aggressive spring animations.

---

# FRONT-END SKILL RULES

## Design Rules

1.  **High Contrast Mandate:** Always prioritize pure black on pure white for primary content, headings, and calls-to-action to ensure maximum legibility and visual punch.
2.  **Generous Whitespace:** Implement `var(--spacing-xxxl)` between main sections and `var(--spacing-lg)` within component groups. Never visually crowd elements.
3.  **Consistent Soft Cornering:** All interactive elements and containers (`Button`, `Card`, `Input`, `Dropdown`) MUST use `var(--border-radius-sm)` or `var(--border-radius-md)`. Absolutely no sharp 0px corners or overly rounded "bubble" styles.
4.  **Gradient Isolation:** Gradients are strictly reserved for `ResourceCard` backgrounds. They must be desaturated, organic-toned, and `linear-gradient(135deg, ...)`. Do NOT use vibrant, high-contrast, or full-page gradients.
5.  **Icon Style Adherence:** All icons must be **outlined**, monochromatic (`var(--color-icon-primary)` or `var(--color-icon-on-dark)`), and maintain a consistent stroke weight. Avoid filled icons or multi-color icons.
6.  **Hierarchy Through Scale & Contrast:** Establish visual importance primarily through `font-size` and `color` contrast, not through excessive use of different colors or decorations.
7.  **No Generic SaaS Patterns:** Actively avoid common gradients (blue-purple, pink-orange), thin light-grey text, excessive card shadows, or default icon sets that would dilute the brand's distinctiveness.

## Typography Rules

*   **Font Pairing:** Use `var(--font-primary)` for all text elements. No secondary decorative fonts.
*   **Heading Logic:**
    *   `<h1>`: `font-size: var(--font-size-h1)`, `font-weight: var(--font-weight-bold)`, `color: var(--color-text-primary)`. `line-height: var(--line-height-heading)`.
    *   `<h2>`: `font-size: var(--font-size-h2)`, `font-weight: var(--font-weight-bold)`, `color: var(--color-text-primary)`. `line-height: var(--line-height-heading)`.
    *   `<h3>`: `font-size: var(--font-size-h3)`, `font-weight: var(--font-weight-bold)`, `color: var(--color-text-primary)`. `line-height: var(--line-height-heading)`.
*   **Body Text Sizing:** Default to `var(--font-size-body-lg)` for primary content. Use `var(--font-size-body-md)` for secondary content and `var(--font-size-body-sm)` for tertiary/meta information.
*   **Spacing Behavior:** `line-height: var(--line-height-body)` for all body text. Letter spacing should be `var(--letter-spacing-heading)` for headings and `var(--letter-spacing-body)` for body text.

## Layout Rules

*   **Container Widths:** All primary content sections must be wrapped in a container with `max-width: 1280px` and `margin: 0 auto`.
*   **Padding System:** Apply `padding-left/right: var(--spacing-xxl)` to the main page wrapper. Internal component padding must strictly follow `var(--spacing-system)`.
*   **Grid Behavior:** Default to a `display: grid` or flexbox system that can adapt to 1, 2, or 3 columns based on content and viewport. `gap` values should align with `--spacing-lg`.
*   **Section Rhythm:** Vertically separate all major page sections using `padding-top/bottom: var(--spacing-xxxl)`.

## Component Rules

*   **Button States:** All interactive buttons (`PrimaryButton`, `SecondaryButton`, etc.) must have distinct `hover` and `active` states defined by `transform: translateY`, `background-color`, and `box-shadow` changes, with animations matching the `Motion System`.
*   **Card Consistency:** All `Card` components (e.g., `FeatureCard`, `ResourceCard`) must maintain `var(--border-radius-md)`. `FeatureCard` should have `border: 1px solid var(--color-border-subtle)` and `ResourceCard` should use a `linear-gradient` from the `Gradient Palette`.
*   **Navigation:** The `Navbar` must be fixed at the top, visually subtle (transparent background), and maintain `var(--color-brand-primary)` for the logo and `Button` styles.
*   **Dropdown Elements:** `MenuItem` components within a `Dropdown` must have `background-color` changes on `hover` and retain `var(--color-text-primary)` for text.

## Animation Vocabulary

*   **Entrance Animations:** Only `opacity` fade-ins are permitted for dynamically loaded content. No sliding, scaling, or complex reveals. `duration: 200ms`, `easing: ease-out`.
*   **Hover Interactions:** Must be subtle, responsive, and use `ease-out` timing.
    *   Buttons: `transform: translateY(-1px)` and `background-color` changes.
    *   Cards: `transform: translateY(-2px)` and `box-shadow` expansion.
*   **Scroll Effects:** Strictly no custom scroll effects, parallax, or element-reveals on scroll. Use native browser scrolling.
*   **Motion Timing Philosophy:** Keep all transitions and animations between `100ms` and `250ms`. Prioritize `ease-out` timing for a smooth, natural feel. Avoid `ease-in-out` for simple interactions to keep them snappy.

## Color System

*   **Brand Colors:** Strict usage of `var(--color-brand-primary)` and `var(--color-brand-secondary)` for core UI.
*   **Semantic Colors:** If success/error/warning states are introduced, they must be highly subtle (e.g., a small text label or thin border) and use desaturated tones to prevent visual disruption of the primary black and white theme. Avoid bright, dominant semantic color blocks.
*   **Surface System:** Default background is `var(--color-surface-default)`. `var(--color-surface-subtle)` can be used for very faint visual breaks.
*   **Elevation Hierarchy:** Use `var(--shadow-sm)` for subtle lifts and `var(--shadow-md)` for pronounced elements like dropdowns, always ensuring minimal blur and opacity.

## Iconography Rules

*   **Allowed Icon Styles:** Only line/outlined icons are permitted. Icons must be simple, geometric, and clear.
*   **Forbidden Icon Styles:** No solid filled icons (unless specifically within a `ResourceCard`'s white container), no gradients on icons themselves, no photorealistic or complex illustrations.
*   **Stroke Philosophy:** Maintain a consistent stroke weight (e.g., 2px) across all icons for visual unity.
*   **Visual Density:** Icons should have a medium visual density – neither too thin to be perceived nor too thick to be overwhelming.

---

# IMPLEMENTATION GUIDE

## Accessibility

*   **Contrast Requirements:** All text-to-background color combinations must meet WCAG AA standards. The black-on-white palette makes this straightforward, but care must be taken with `var(--color-text-tertiary)` on `var(--color-surface-default)`.
*   **Keyboard Interaction:** Ensure all interactive elements (`<a>`, `<button>`, form controls) are naturally tabbable and focusable. Implement a distinct, high-contrast `outline` (e.g., `2px solid var(--color-brand-primary)`) for all `:focus-visible` states.
*   **Motion Reduction Handling:** Integrate `@media (prefers-reduced-motion: reduce)` to disable all `transform` and `transition` properties, providing an instant state change for users with motion sensitivity.
*   **Semantic Structure:** Utilize HTML5 semantic tags (`<header>`, `<main>`, `<section>`, `<nav>`, `<h1>-<h6>`, `<p>`) appropriately. Use ARIA roles and properties for custom interactive components (e.g., `role="menu"` for dropdowns, `aria-label` for icons without visible text).
*   **Image Alt Text:** All images (OpenAI logo, mockups, icons) must have meaningful `alt` attributes for screen reader users. Decorative images should have empty `alt=""`.

---

# ANTI-AI-SLOP CHECKLIST

*   [x] **No Generic SaaS Styling:** The system explicitly avoids typical soft grey palettes, generic blue CTAs, and overused "blob" shapes.
*   [x] **Brand-Native Visual Distinction:** The stark black and white, paired with subtle organic gradients and authoritative typography, makes the brand visually unique.
*   [x] **Human-Designed Feel:** The generous spacing, thoughtful typography scale, and controlled use of color convey a meticulous, handcrafted quality, not a templated one.
*   [x] **Cohesive Design Language:** All components, colors, and typography choices work in harmony, reinforcing the core visual philosophy across all elements.
*   [x] **Intentionality of Every Choice:** Each design decision (e.g., high contrast, specific border-radius, limited gradients) is justified and serves the brand's objective of clarity and authority.
*   [x] **Scalable System:** The use of CSS variables (tokens), clear component rules, and layout instructions allows for consistent application across new interfaces.
*   [x] **Avoidance of Default SaaS Aesthetics:** No generic card designs, no default icon sets, no predictable gradients or "blurple" buttons.
*   [x] **No Tailwind Defaults:** Instructions are based on inherent design principles and specific token values, not generic utility classes or opinionated framework defaults.
*   [x] **"Modern Clean UI" is NOT an explanation:** The reasoning delves into emotional tone, brand personality, and psychological impact, far beyond surface-level descriptions.
*   [x] **Deep Reasoning for Visual Choices:** For instance, color choices explain *why* black/white and *why* desaturated gradients are used, not just what their hex values are.