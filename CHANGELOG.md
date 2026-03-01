# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-03-01

### Added

- Skeleton loading animation while the avatar image is loading.
- Named export: `import { Avatar } from "svelte-avatar"`.
- Netlify configuration (`netlify.toml`) for deploy previews.
- Unit tests with Vitest and `@testing-library/svelte`.

### Changed

- **Breaking:** Svelte 5 is now required as a peer dependency (`svelte >= 5`).
- **Breaking:** Migrated component to Svelte 5 syntax (uses `onerror`/`onload` event handler attributes instead of `on:` directives).
- Migrated codebase from JavaScript to TypeScript (`utils.ts`, `index.ts`, `Avatar.svelte` with `lang="ts"`).
- Replaced `jsconfig.json` with `tsconfig.json` with strict mode enabled.
- Switched bundler from Rollup to Vite.
- Replaced `svelte-kit` package tooling with `@sveltejs/package`.
- Updated all dev dependencies to their latest versions.
- Documentation site rebuilt with Vite and `svelte-highlight`.

### Removed

- Support for Svelte 3 and Svelte 4.
- Sapper compatibility notes from README.

## [1.2.0] - 2022-05-01

### Added

- `square` prop to render a square avatar instead of a circle.
- `randomBgColor` prop to generate a random background color.

### Changed

- Improved font-size scaling relative to avatar size and initials length.

## [1.1.0] - 2021-06-01

### Added

- `borderRadius` prop for custom border radius.
- `initials` prop to override auto-generated initials.

## [1.0.0] - 2020-05-31

### Added

- Initial release of `svelte-avatar`.
- `Avatar` component with image and name-initials fallback support.
- Props: `name`, `src`, `bgColor`, `textColor`, `size`, `style`.

[2.0.0]: https://github.com/wdtamagi/svelte-avatar/compare/v1.2.0...v2.0.0
[1.2.0]: https://github.com/wdtamagi/svelte-avatar/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/wdtamagi/svelte-avatar/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/wdtamagi/svelte-avatar/releases/tag/v1.0.0
