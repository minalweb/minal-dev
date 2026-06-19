## 2025-05-15 - Responsive Navbar & Screen Reader Context
**Learning:** Portfolio navigation often lacks mobile support and descriptive link context, making them inaccessible to mobile users and screen readers. Generic link text like "Live Demo" is ambiguous without the project title.
**Action:** Always implement a mobile-responsive menu in the Navbar and use descriptive `aria-label` attributes for links (e.g., "View live demo of [title]") to provide necessary context for accessibility.
