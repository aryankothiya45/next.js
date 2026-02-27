"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const LoginPopup = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        if (searchParams.get("alreadyLoggedIn") === "true") {
            router.replace("/");
        }
    }, [searchParams, router]);

    return null;
};

export default LoginPopup;