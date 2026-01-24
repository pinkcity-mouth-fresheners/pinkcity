'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initAnalytics } from '@/firebase';
import { logEvent } from 'firebase/analytics';

function AnalyticsContent() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const logPageView = async () => {
            const analytics = await initAnalytics();
            if (!analytics) return;

            const url = pathname + (searchParams?.toString() ? '?' + searchParams.toString() : '');

            logEvent(analytics, 'page_view', {
                page_path: url,
            });
        };

        logPageView();
    }, [pathname, searchParams]);

    return null;
}

export default function AnalyticsProvider() {
    return (
        <Suspense fallback={null}>
            <AnalyticsContent />
        </Suspense>
    );
}