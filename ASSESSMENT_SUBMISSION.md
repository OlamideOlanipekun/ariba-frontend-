# Technical Assessment Submission

This document explains the technical decisions, bug fixes, and feature implementations completed during the 60-minute assessment.

## Task 1 — Search Sync

### Objective
Sync the `SearchBar` component with the URL's `?q=` query parameter and ensure the product list filters accordingly.

### Implementation Details
- **SearchBar Component**: Refactored from local `useState` to use Next.js 15 navigation hooks (`useSearchParams`, `useRouter`, `usePathname`).
- **URL Synchronization**: The search bar now reads the initial value from the URL, allowing the search state to survive page refreshes. On every keystroke, `router.replace` is used to update the URL without a full page reload.
- **Filtering Logic**: In `app/page.tsx` (a Server Component), the `searchParams` prop is used to filter the `PRODUCTS` array case-insensitively before rendering.

---

## Task 2 — The Loop

### Objective
Fix a stale closure bug and a memory leak in the `ActiveUsers` component.

### Bug Fixes
- **Stale Closure**: The previous implementation referenced a captured `count` variable inside the `setInterval` callback. I replaced this with a functional updater `setCount(() => users)` to ensure the state is always based on the latest value (and conceptually, since it's a "fetch", we replace the old count with the new one).
- **Memory Leak**: Correctly used the `useEffect` cleanup pattern by storing the interval ID and calling `clearInterval(intervalId)` when the component unmounts.
- **Dependency Array**: Added an empty dependency array `[]` to the `useEffect` to ensure the interval is only created once on mount, rather than on every render.

---

## Task 3 — Wishlist

### Objective
Implement a global wishlist state that persists across navigation and reflects updates in the UI.

### Implementation Details
- **WishlistContext**: Created a robust `WishlistProvider` using the React Context API.
- **TypeScript Strictness**: Defined a `WishlistContextType` interface to ensure type safety for `wishlist` (string array of IDs) and `toggleWishlist`.
- **Global Provider**: Wrapped the entire application in `app/layout.tsx` with the `WishlistProvider`.
- **ProductCard Component**: Extracted the product card logic into a new `'use client'` component. This allows the use of the `useWishlist` hook at the item level without turning the entire `page.tsx` into a client component.
- **Interactive UI**: The heart icon toggle handles addition/removal from the wishlist and provides immediate visual feedback (changing icon and color).

---

## Verification
- Ran `npm run build` to verify TypeScript types and production build stability.
- Verified all tasks manually via `npm run dev`.
