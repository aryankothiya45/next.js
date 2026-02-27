"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const LoginPopup = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        if (searchParams.get("alreadyLoggedIn") === "true") {
            alert("You are already logged in!");
            // Clean up the URL by replacing the current entry without the query param
            router.replace("/");
        }
    }, [searchParams, router]);

    return null;
};

export default LoginPopup;