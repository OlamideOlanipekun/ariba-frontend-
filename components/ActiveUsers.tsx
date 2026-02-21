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
        const intervalId = setInterval(async () => {
            const users = await fetchActiveUsers();
            // Use functional updater to avoid stale closure — just set the latest count
            setCount(() => users);
        }, 2000);

        // Cleanup: clear the interval when the component unmounts
        return () => {
            console.log('ActiveUsers cleanup: clearing interval');
            clearInterval(intervalId);
        };
    }, []); // Empty dependency array — run only once on mount

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Active Users</p>
            <p className="mt-1 text-3xl font-bold text-indigo-600">{count}</p>
        </div>
    );
}
