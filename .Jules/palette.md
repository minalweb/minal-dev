## 2025-05-15 - [Light Theme Class Mapping]
**Learning:** The project uses `!important` in `globals.css` to map common white-colored Tailwind classes (e.g., `.text-white`, `.bg-white/10`) to dark/neutral colors. This forces a light-theme look even when using "dark" utility classes in the JSX.
**Action:** When adding new components, use semantic naming where possible or be aware that `.text-white` will actually appear as dark text.

## 2025-05-15 - [Three.js Type Errors]
**Learning:** The project uses Three.js but often lacks `@types/three` in the devDependencies, leading to TypeScript build failures during `next build`.
**Action:** When a build fails due to missing Three.js types, install `@types/three` or ensure the new code doesn't rely on strict type checking for those modules if the environment is restricted.
