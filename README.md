# Vehicle Pre-Cooling

Web platform for validating demand for a remote vehicle pre-cooling service, and (once validated) running pilots and bookings.

## Status

Early foundation stage (P0). Application skeleton exists; no business features yet.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript, strict mode
- Tailwind CSS
- pnpm as package manager

Full rationale will be documented in an Architecture Decision Record.

## Development

Requires Node.js LTS and pnpm (see `package.json` → `packageManager`).

Also requires [gitleaks](https://github.com/gitleaks/gitleaks) (`brew install gitleaks`) — a
local pre-commit hook uses it to block commits containing secret-shaped values, before they ever
reach GitHub.

```bash
pnpm install   # also sets up the pre-commit hook (gitleaks + lint-staged) via husky
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

```bash
pnpm lint       # ESLint
pnpm build      # production build
```

## Contributing

`main` is protected — all changes go through a pull request. (A PR template is planned; until then, describe what changed, tests run, and any security/privacy impact in the PR body.)
