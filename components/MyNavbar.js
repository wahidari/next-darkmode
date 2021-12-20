import Link from "next/link"
import dynamic from "next/dynamic";
import { FaBars } from "react-icons/fa";

const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
    ssr: false,
});

export default function MyNavbar() {
    return (
        <>
            <style jsx>
                {`
                .bg-navbar {
                    background: var(--color-bg-primary);
                }
                .nav-link {
                    color: var(--color-text-primary) !important;
                }
                .nav-link:hover {
                    color: #1e90ff !important;
                }
                .navbar-brand {
                    color: var(--color-text-primary) !important;
                }
                .icon-toggle {
                    color: var(--color-text-primary) !important;
                }
            `}
            </style>
            <div className="bg-navbar shadow-sm">
                <nav className="navbar navbar-expand-lg container">
                    <div className="container-fluid">
                        <Link href="/">
                            <a className="navbar-brand">Navbar</a>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="icon-toggle"><FaBars /></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto">
                                <Link href="/">
                                    <a className="nav-link" aria-current="page">Home</a>
                                </Link>
                                <Link href="/features">
                                    <a className="nav-link" aria-current="page">Features</a>
                                </Link>
                                <a className="nav-link" aria-current="page"><ThemeToggle /></a>
                                
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}