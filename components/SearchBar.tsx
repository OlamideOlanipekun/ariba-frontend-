'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';

interface SearchBarProps {
    onSearch?: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const query = searchParams.get('q') ?? '';

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const params = new URLSearchParams(searchParams.toString());

        if (value) {
            params.set('q', value);
        } else {
            params.delete('q');
        }

        router.replace(`${pathname}?${params.toString()}`);
        onSearch?.(value);
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
