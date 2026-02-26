import Link from "next/link";

const Navbar =() => {
    return(
        <header className="border-b p-4 flex items-center gap-6">
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
        </header>
    );
};

export default Navbar;