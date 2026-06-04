'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initAnalytics } from '@/firebase';
import { logEvent } from 'firebase/analytics';

// 2026-06-04 (perf audit): Replaced useSearchParams() with a direct read of window.location.search.
// useSearchParams() forces this component into a Suspense boundary and extra client-side rendering
// work even on a fully static export. Reading the browser query string in the effect preserves
// utm/query tracking without that overhead, so the Suspense wrapper is no longer needed.
function AnalyticsContent() {
    const pathname = usePathname();

    useEffect(() => {
        const logPageView = async () => {
            const analytics = await initAnalytics();
            if (!analytics) return;

            const url = pathname + (window.location.search || '');

            logEvent(analytics, 'page_view', {
                page_path: url,
            });
        };

        logPageView();
    }, [pathname]);

    return null;
}

export default function AnalyticsProvider() {
    return <AnalyticsContent />;
}