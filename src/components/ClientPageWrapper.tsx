'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import { MobileProvider, useMobileInitialized } from '@/components/MobileProvider';
import Chatbot from '@/components/Chatbot';
import LoadingScreen from '@/components/LoadingScreen';

const BrochureOverlay = dynamic(() => import('@/components/BrochureOverlay'), { ssr: false });

const AppShell = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [isBrochureOpen, setIsBrochureOpen] = useState(false);
    const isInitialized = useMobileInitialized();

    const openBrochure = () => setIsBrochureOpen(true);
    const closeBrochure = () => setIsBrochureOpen(false);

    if (!isInitialized) {
        return <LoadingScreen />;
    }

    return (
        <>
            <Header onBrochureClick={openBrochure} />
            {isBrochureOpen && <BrochureOverlay onClose={closeBrochure} />}
            {children}
            <Chatbot />
        </>
    );
};

export default function ClientPageWrapper({ children }: { children: React.ReactNode }) {
    return (
        <MobileProvider>
            <AppShell>
                {children}
            </AppShell>
        </MobileProvider>
    );
}
