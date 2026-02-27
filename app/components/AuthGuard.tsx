"use client";

import {useEffect ,type ReactNode, useState } from 'react';
import { useRouter,usePathname } from 'next/navigation';

type AuthGuardProps ={
    children :ReactNode;
};

const AuthGuard = ({ children }:AuthGuardProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const [isChecking,setIsChecking] = useState<boolean>(true);

    useEffect((): void =>{
        if (typeof window === undefined) return;
        const auth: string | null = sessionStorage.getItem("isLoggedIn");
        
        if(pathname === "/login") {
            setIsChecking(false);
            return;
        }
        if(auth !== "true"){
            router.replace("/login");
            return;
        }
        setIsChecking(false);
    },[pathname,router]);

    if(isChecking){
        return(
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-lg font-semibold">Loading...</p>
            </div>
        );
    }

    return(
        <>{children}</>
    );
}

export default AuthGuard;