"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AppShell = ({children}: {children: React.ReactNode}) => {
    const pathname = usePathname();
    const isLoginpage = pathname === "/login";

    if(isLoginpage){
        return <>{children}</>;
    }

    return (
        <>
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="p-6">{children}</main>
            </div>
        </>
    );
};

export default AppShell;    