type NavItem = { name: string; redirect: string };

export default function Navbar() {
    const navItems: NavItem[] = [
        { name: 'About Me', redirect: '/'},
        { name: 'Skills', redirect: '/skills'},
        { name: 'Competitions', redirect: '/competitions'},
        { name: 'Projects', redirect: '/projects'},
        { name: 'Certifications', redirect: '/certifications'},
    ];

    return (
        <nav className="flex items-center justify-between px-8 py-6 bg-white shadow-sm position: sticky top-0 z-10">
            <div className="text-2xl font-bold text-slate-800">
                Ayimany
            </div>
            <div className="flex gap-6">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.redirect}
                    >
                        <button
                            className="px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                        >
                            {item.name}
                        </button>
                    </a>
                ))}
            </div>
        </nav>
    );
}
