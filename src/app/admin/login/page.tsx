"use client";

import React, { useState } from "react";
import Image from "next/image";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/firebase";
import Logo from "../../../../public/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const AdminLoginPage = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleGoogleLogin = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log("Logged in user:", user);
            // Redirect to the admin dashboard
            window.location.href = "/admin/dashboard";
        } catch (err: any) {
            console.error("Login Error:", err);
            setError(err.message || "Failed to sign in with Google.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[radial-gradient(circle,_#FE5E85,_#D93A61)] p-6">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden p-8 flex flex-col items-center gap-8 relative">
                {/* Decorative backgrounds */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-pinkcity/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pinkcity-dark/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-24 h-24 relative mb-2">
                        <Image
                            src={Logo}
                            alt="PinkCity Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
                        Admin Login
                    </h1>
                    <p className="text-gray-500 text-center text-sm">
                        Access the PinkCity Administrative Dashboard
                    </p>
                </div>

                <div className="w-full relative z-10 flex flex-col gap-6">
                    <button
                        onClick={handleGoogleLogin}
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                        {loading ? (
                            <div className="w-5 h-5 border-2 border-pinkcity border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            <FontAwesomeIcon icon={faGoogle} className="text-pink-500 text-lg group-hover:scale-110 transition-transform" />
                        )}
                        <span>{loading ? "Signing in..." : "Continue with Google"}</span>
                    </button>

                    {error && (
                        <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl animate-bounce">
                            {error}
                        </div>
                    )}
                </div>

                <div className="relative z-10 mt-4">
                    <p className="text-gray-400 text-xs">
                        &copy; {new Date().getFullYear()} PinkCity Mouth Freshener. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminLoginPage;
