'use client';

import { useEffect, useState } from 'react';

// Simulates a real-time active-user count received from a server.
function fetchActiveUsers(): Promise<number> {
    // In a real app this would be a fetch() call.
    return Promise.resolve(Math.floor(Math.random() * 200) + 50);
}

export default function ActiveUsers() {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        // BUG 1 — Stale closure:
        // The interval callback closes over the initial value of `count` (0) and
        // never re-reads the updated state. As a result the displayed number will
        // appear stuck or behave unexpectedly.
        //
        // BUG 2 — Memory leak:
        // There is no cleanup function returned from this useEffect, so the interval
        // keeps running after the component unmounts, causing "setState on unmounted
        // component" warnings and wasted CPU cycles.
        setInterval(async () => {
            const users = await fetchActiveUsers();
            // Using `count` directly here instead of the functional updater form
            // means we always add to the stale captured value.
            setCount(count + users);
        }, 2000);

        // Missing dependency array — this effect re-runs on every render,
        // spawning a new interval each time.
    });

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Active Users</p>
            <p className="mt-1 text-3xl font-bold text-indigo-600">{count}</p>
        </div>
    );
}
