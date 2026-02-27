"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Navbar =() => {
    const router = useRouter();
    const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const checkAuth =() => {
            const hasAuthCookie = document.cookie
            .split(";")
            .find((row) => row.trim().startsWith("auth="));

            setIsLoggedIn(hasAuthCookie?.split("=")[1] === "true");
        };

        checkAuth();
        window.addEventListener("focus",checkAuth);
        return () => {
            window.removeEventListener("focus",checkAuth);
        }; 
    }, []);

    const handleLogout = () : void => {
        document.cookie = "auth=; path=/; max-age=0;  expires=Thu, 01 Jan 1970 00:00:00 UTC; ";
        router.replace("/login");
    }

    return(
        <header className="border-b p-4 flex items-center justify-between">

            <div className="flex items-center gap-6">
                <h1 className="text-xl font-bold">
                    E-commerce
                </h1>

                <nav className="flex gap-4">
                    <Link
                        href = "/"
                        className="px-3 py-1 rounded bg-blue-400 capitalize"
                    >
                        all
                    </Link>
                    <Link
                        href = "/?category=laptop"
                        className="px-3 py-1 rounded bg-blue-400 capitalize"
                    >
                        laptop
                    </Link>
                    <Link
                        href = "/?category=smartphone"
                        className="px-3 py-1 rounded bg-blue-400 capitalize"
                    >
                        smartphone
                    </Link>
                    <Link
                        href = "/?category=smartwatch"
                        className="px-3 py-1 rounded bg-blue-400 capitalize"
                    >
                        smartwatch
                    </Link>
                </nav>
            </div>

            <div>
                {!isLoggedIn ? (
                    <Link
                        href = "/login"
                        className="px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
                    >
                        Login
                    </Link>
                ) : (
                    <button
                        onClick={handleLogout}
                        className="px-4 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                    >
                        Logout
                    </button>
                )}
            </div>
        </header>
    );
};

export default Navbar;