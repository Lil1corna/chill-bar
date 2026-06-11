# CHILL BAR Design Rules

Scope: the entire repository.

- Preserve the CHILL BAR identity: keep the `Chill Bar` name, Pacifico logo styling, hero layout, hero background, dark premium lounge mood, glassmorphism, and gold accent palette.
- Do not rewrite the site from scratch. Improve the existing single-file Tailwind/CSS structure in `index.html` with focused, minimal changes.
- Public menu structure, RU/EN/AZ localization, and Supabase data flow are protected. Do not change table names, auth flow, or menu loading semantics unless the task explicitly requires it.
- Admin UI may be refined for usability: forms, upload preview, price editing, drag-and-drop ordering, loading states, mobile layout, and toast notifications.
- Keep menu cards visually consistent with the existing design. Only adjust them when needed for photos, ordering handles, or clear functional states.
- Use mobile-first checks for admin workflows. Verify desktop and mobile views after visual changes, including the menu, admin modal, add item form, price edit mode, file upload UI, and reorder mode.
- Prefer existing colors and spacing tokens. New styles should feel like premium dark glass with restrained gold highlights, not a new theme.
