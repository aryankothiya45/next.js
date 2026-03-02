import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer-container border-t mt-auto">
            <div className="px-6 py-10 flex flex-col items-center justify-center gap-3 mb-10">
                <div className="flex flex-col items-center gap-2">
                    {/* <p className="footer-label">Quick Links</p> */}
                    <nav className="flex flex-wrap justify-center gap-2">
                        <Link href="/about" className="sidebar-link px-2">About</Link>
                        <Link href="/contact" className="sidebar-link px-2">Contact</Link>
                        <Link href="/privacy" className="sidebar-link px-2">Privacy Policy</Link>
                        <Link href="/terms" className="sidebar-link px-2">Terms of Service</Link>
                    </nav>
                </div>
                
                <div className="w-full max-w-xs border-t border-dashed border-gray-200 pt-4 text-center">
                    <p className="text-sm font-medium text-gray-400">
                        © {new Date().getFullYear()} <span className="text-accent font-bold">ShopNext</span>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;