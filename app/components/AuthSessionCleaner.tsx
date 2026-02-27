"use client";

import { useEffect } from "react";

const AuthSessionCleaner = () => {
    useEffect(() => {
        const handleUnload = () => {
            document.cookie= "auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; "
        };
        window.addEventListener("beforeunload",handleUnload);
        return () => {
            window.removeEventListener("beforeunload",handleUnload);
        };
    }, []);
    return null;
};

export default AuthSessionCleaner;