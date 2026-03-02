"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

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
                <main className="flex-1 p-6">{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default AppShell;    