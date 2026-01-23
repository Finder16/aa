import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-full lg:w-72 lg:fixed lg:h-screen overflow-y-auto p-8 lg:p-12 lg:border-r border-gray-200 dark:border-gray-800 flex flex-col gap-8 bg-white dark:bg-[#1a1a1a]">
            <div>
                <h1 className="text-2xl font-bold tracking-tight mb-2">
                    Jaeyeong Lee
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Security Researcher
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-500">
                    Affiliations
                </h2>
                <ul className="space-y-3 text-sm">
                    <li>
                        <div className="font-medium">HSPACE</div>
                        <div className="text-gray-500 dark:text-gray-400 text-xs">Field Trainee (2025.07 ~ 2025.08)</div>
                    </li>
                    <li>
                        <div className="font-medium">Sunrin Internet Highschool</div>
                        <div className="text-gray-500 dark:text-gray-400 text-xs">Information Security (~ 2026.2)</div>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-500">
                    Menu
                </h2>
                <ul className="flex flex-col gap-2 text-sm">
                    <li>
                        <Link href="/" className="hover:underline block py-1">Home</Link>
                    </li>
                    <li>
                        <Link href="/publications" className="hover:underline block py-1">Publications</Link>
                    </li>
                    <li>
                        <Link href="/research" className="hover:underline block py-1">Research</Link>
                    </li>
                    <li>
                        <Link href="/projects" className="hover:underline block py-1">Projects</Link>
                    </li>
                    <li>
                        <Link href="/honors" className="hover:underline block py-1">Honors</Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-500">
                    Connect
                </h2>
                <ul className="flex flex-col gap-2 text-sm">
                    <li>
                        <a href="mailto:lee@jaeyeong.cc" className="hover:underline">lee@jaeyeong.cc</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/jaeyeong-lee-77025629a/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://x.com/07finder" target="_blank" rel="noopener noreferrer" className="hover:underline">X (@07finder)</a>
                    </li>
                    <li>
                        <a href="https://github.com/Finder16" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
