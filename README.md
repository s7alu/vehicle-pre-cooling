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

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

```bash
pnpm lint       # ESLint
pnpm build      # production build
```

## Contributing

`main` is protected — all changes go through a pull request. See the PR template for requirements.
