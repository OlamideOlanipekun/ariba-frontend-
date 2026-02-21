# Frontend Technical Assessment — 60 Minutes

Welcome! This assessment evaluates your ability to debug, refactor, and implement features in a Next.js 15 (App Router) codebase. There are **3 tasks** of increasing complexity.

**Rules:**
- You may use the official docs (Next.js, React, MDN) but **no AI assistants**.
- Commit your changes after each task so progress is visible.
- Time limit: **60 minutes total**.

---

## Task 1 — Search Sync (15 min)

**File:** `components/SearchBar.tsx`

The search bar currently tracks user input in local component state only. When the user refreshes the page, the search value is lost and other components cannot read it.

**Your goal:**
Refactor `SearchBar` so that the search query is **read from and written to the URL's `searchParams`** (the `q` query parameter).

**Acceptance criteria:**
- Typing in the search bar updates `?q=...` in the URL without a full page reload.
- On page load, the input is pre-filled with the current value of `?q`.
- The `app/page.tsx` product list is **filtered** based on this URL param.

**Hints:**
- Look into `useRouter`, `useSearchParams`, and `usePathname` from `next/navigation`.
- You will need `'use client'` on the component.

---

## Task 2 — The Loop (20 min)

**File:** `components/ActiveUsers.tsx`

This component polls an endpoint every 2 seconds to display the number of active users. It has **two bugs**:

1. **Stale closure:** The count displayed never updates correctly because the interval captures a stale value.
2. **Memory leak:** The interval is never cleared when the component unmounts.

**Your goal:**
Fix both bugs.

**Acceptance criteria:**
- The displayed count updates correctly on every tick.
- Opening the DevTools console shows no "Can't perform a state update on an unmounted component" warnings.
- The interval is properly cleared on unmount (verify via `console.log` inside the cleanup).

**Hints:**
- Check the `useEffect` dependency array carefully.
- Every `setInterval` needs a matching `clearInterval`.

---

## Task 3 — Wishlist (25 min)

**File:** `context/WishlistContext.tsx` and `app/layout.tsx`

The app needs a global wishlist (liked items) that persists as users navigate between pages.

**Your goal:**
1. Complete `context/WishlistContext.tsx`:
   - Define a proper TypeScript interface for the context value.
   - Implement a `toggleWishlist(id: string)` function that adds or removes a product id.
   - Expose `wishlist` (the list of liked ids) and `toggleWishlist` from the provider.
2. Fix `app/layout.tsx` so `WishlistProvider` correctly wraps the application.
3. In `app/page.tsx`, wire up a ❤ button on each product card that calls `toggleWishlist` and visually reflects whether the item is in the wishlist.

**Acceptance criteria:**
- Clicking ❤ on a product adds it to the wishlist; clicking again removes it.
- The heart icon turns red when a product is in the wishlist.
- The wishlist state is shared across the whole app (does not reset on navigation).

---

## Scoring Rubric

| Task | Max Points |
|------|-----------|
| Task 1 — Search Sync | 30 |
| Task 2 — The Loop | 30 |
| Task 3 — Wishlist | 40 |
| **Total** | **100** |

Bonus points for: TypeScript strictness, clean code, and meaningful commit messages.

---

Good luck! 🚀
