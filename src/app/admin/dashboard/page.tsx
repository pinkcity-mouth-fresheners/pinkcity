"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { auth } from "@/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import Logo from "../../../../public/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faSignOutAlt, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const AdminDashboardPage = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                router.push("/admin/login");
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [router]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push("/admin/login");
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
                <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Navigation Header */}
            <nav className="bg-white shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 relative">
                        <Image
                            src={Logo}
                            alt="PinkCity Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                        PinkCity Admin
                    </span>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex flex-col items-end">
                        <span className="text-sm font-medium text-gray-700">{user.displayName || "Admin User"}</span>
                        <span className="text-xs text-gray-400">{user.email}</span>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        title="Logout"
                    >
                        <FontAwesomeIcon icon={faSignOutAlt} className="text-lg" />
                    </button>
                </div>
            </nav>

            <main className="flex-grow p-6 md:p-10 max-w-7xl mx-auto w-full">
                <div className="flex flex-col gap-8">
                    {/* Welcome Section */}
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            Welcome back, {user.displayName?.split(" ")[0] || "Admin"}! 👋
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Manage your PinkCity application and view real-time analytics.
                        </p>
                    </div>

                    {/* Quick Stats / Actions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Firebase Analytics Card */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                            <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-500 mb-6 group-hover:scale-110 transition-transform">
                                <FontAwesomeIcon icon={faChartLine} className="text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Firebase Analytics</h3>
                            <p className="text-gray-500 text-sm mb-6">
                                View website traffic, user engagement, and conversation insights directly on the Firebase Console.
                            </p>
                            <a
                                href="https://console.firebase.google.com/u/0/project/pinkcity-cacf6/overview"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 bg-pink-500 text-white font-semibold rounded-xl hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200"
                            >
                                <span>Open Analytics</span>
                                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                            </a>
                        </div>

                        {/* Additional placeholder cards for future features */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 opacity-60 border-dashed">
                            <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 mb-6">
                                <span className="font-bold">+</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-400 mb-2">More Features</h3>
                            <p className="text-gray-400 text-sm">
                                Additional management tools will appear here in future updates.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="p-6 text-center text-gray-400 text-xs border-t border-gray-100 bg-white">
                &copy; {new Date().getFullYear()} PinkCity Mouth Freshener. All rights reserved.
            </footer>
        </div>
    );
};

export default AdminDashboardPage;
