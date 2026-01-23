import Section from "@/components/Section";

export default function ProjectsPage() {
    return (
        <main className="p-8 lg:p-12 max-w-3xl">
            <Section title="Projects">
                <div className="space-y-8">

                    <div>
                        <h3 className="text-lg font-medium text-black dark:text-white">Synology Vulnerability Research</h3>
                        <p className="text-sm text-gray-500 mb-2">2025.05 ~ 2025.08</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium text-black dark:text-white">Telecom company’s second-half penetration testing — stealien</h3>
                        <p className="text-sm text-gray-500 mb-2">2025.09 ~ 2025.12</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium text-black dark:text-white">Blind penetration test for Hyundai Mobis overseas subsidiaries</h3>
                        <p className="text-sm text-gray-500 mb-2">2025.09.22 ~ 2025.11.14</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium text-black dark:text-white">An Analysis of Vulnerabilities in Windows Image Parsers(PL)</h3>
                        <p className="text-sm text-gray-500 mb-2">2025.09.05 ~ 2025.10.18</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium text-black dark:text-white">Windows GDI Vulnerability Research</h3>
                        <p className="text-sm text-gray-500 mb-2">2025.5 ~ 2025.6</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium text-black dark:text-white">Intelligent Traffic Analysis Training Data Generation — Cyber Operations Command</h3>
                        <p className="text-sm text-gray-500 mb-2">2025.02 ~ 2025.05</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium text-black dark:text-white">Lord Of Buffer Overflow Porting</h3>
                        <p className="text-sm text-gray-500 mb-2">2024.03 ~ 2025.2</p>
                        <p className="text-xs text-gray-500 mb-2">
                            <a href="https://github.com/hspace-io/HSPACE-LOB" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                https://github.com/hspace-io/HSPACE-LOB
                            </a>
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium text-black dark:text-white">Automated Analysis of IoT Vulnerabilities with Taint Analysis</h3>
                        <p className="text-sm text-gray-500 mb-2">2024.08 ~ 2024.11</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium text-black dark:text-white">Automated Incident Response Architecture on AWS</h3>
                        <p className="text-sm text-gray-500 mb-2">2023.11 ~ 2024.1</p>
                    </div>

                </div>
            </Section>
        </main>
    );
}
