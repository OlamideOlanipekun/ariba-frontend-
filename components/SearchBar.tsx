'use client';

import { useState } from 'react';

// TODO (Task 1): Refactor this component so the search query is stored in the
// URL as the `q` search parameter instead of local state.
// Hints:
//   - Import `useRouter`, `useSearchParams`, and `usePathname` from 'next/navigation'.
//   - On input change, push a new URL with the updated `?q=` param.
//   - Initialise the input value from `searchParams.get('q')` so it survives page reloads.
//   - Pass an `onSearch` prop (or lift state) if the parent needs the value — or let
//     the parent simply read it from the URL directly.

interface SearchBarProps {
    onSearch?: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    // ← local state only; not synced with the URL
    const [query, setQuery] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setQuery(value);
        onSearch?.(value);
        // TODO: also update `?q=` in the URL here
    }

    return (
        <div className="relative w-full max-w-md">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                🔍
            </span>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search products…"
                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-4 text-sm shadow-sm
                   focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
        </div>
    );
}
