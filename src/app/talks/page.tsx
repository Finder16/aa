import Section from "@/components/Section";

export default function TalksPage() {
    return (
        <main className="p-8 lg:p-12 max-w-3xl">
            <Section title="Talks & Presentations">
                <div className="space-y-8">
                    <ul className="space-y-6">
                        <li>
                            <div className="font-medium text-lg text-black dark:text-white leading-relaxed">
                                Zero-Click to Root: Breaking IoT Security Without Authentication
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 mt-2">
                                <span className="font-semibold text-black dark:text-white">Presenter</span>
                            </div>
                            <div className="text-sm text-gray-500 mt-1 italic">
                                EMUCON
                            </div>
                        </li>

                        <li>
                            <div className="font-medium text-lg text-black dark:text-white leading-relaxed">
                                Pre-Auth RCE in IPCAM : How I Became Big Brother
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 mt-2">
                                <span className="font-semibold text-black dark:text-white">Presenter</span>
                            </div>
                            <div className="text-sm text-gray-500 mt-1 italic">
                                Holyshield Conference
                            </div>
                        </li>

                        <li>
                            <div className="font-medium text-lg text-black dark:text-white leading-relaxed">
                                Hacking Trends and Penetration Testing
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 mt-2">
                                <span className="font-semibold text-black dark:text-white">Presenter</span>
                            </div>
                            <div className="text-sm text-gray-500 mt-1 italic">
                                아이온퓨처 (AION FUTURE)
                            </div>
                        </li>

                        <li>
                            <div className="font-medium text-lg text-black dark:text-white leading-relaxed">
                                Exploring Potential Vulnerabilities in Blockchain Through 1-Day Cases
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 mt-2">
                                <span className="font-semibold text-black dark:text-white">Presenter</span>
                            </div>
                            <div className="text-sm text-gray-500 mt-1 italic">
                                HSPACE
                            </div>
                        </li>

                        <li>
                            <div className="font-medium text-lg text-black dark:text-white leading-relaxed">
                                Analysis of Rosetta 2 Based on AOT and JIT Translation and Performance Comparison with QEMU
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 mt-2">
                                <span className="font-semibold text-black dark:text-white">Presenter</span>
                            </div>
                            <div className="text-sm text-gray-500 mt-1 italic">
                                Sunrin Internet Highschool
                            </div>
                        </li>
                    </ul>
                </div>
            </Section>
        </main>
    );
}
