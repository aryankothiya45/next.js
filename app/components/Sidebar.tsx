import Link from "next/link";

const Sidebar = () => {
    return(
        <aside className="w-52 border-r p-4 flex flex-col gap-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2 px-2">
                Navigation
            </p>
            <nav className="flex flex-col gap-1">
                <Link href="/" className="sidebar-link">
                    🏠 Home
                </Link>
                <Link href="/?category=laptop" className="sidebar-link">
                    💻 Laptops
                </Link>
                <Link href="/?category=smartphone" className="sidebar-link">
                    📱 Smartphones
                </Link>
                <Link href="/?category=smartwatch" className="sidebar-link">
                    ⌚ Smartwatches
                </Link>
            </nav>
        </aside>
    );
}

export default Sidebar;