import Link from "next/link";

const Sidebar = () => {
    return(
        <aside className="w-56 border-r p-4">
            <h2 className="mb-4 text-lg font-bold">Menu</h2>
            <nav className="flex flex-col gap-2">
                <Link href="/" className="hover:underline">
                    Home 
                </Link>
            </nav>
        </aside>
    );
}

export default Sidebar;