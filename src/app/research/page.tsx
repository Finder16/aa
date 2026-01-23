import Section from "@/components/Section";

export default function ResearchPage() {
    return (
        <main className="p-8 lg:p-12 max-w-3xl">
            <Section title="Vulnerability Research">
                <div className="space-y-10">

                    <div>
                        <h3 className="text-lg font-medium mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">Protocol</h3>
                        <ul className="space-y-4">
                            <li>
                                <div className="font-medium text-black dark:text-white">CVE-2025-66624 (BACnet)</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Out-of-bounds vulnerability (CVSS 7.5)</div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">Apache</h3>
                        <ul className="space-y-4">
                            <li>
                                <div className="font-medium text-black dark:text-white">CVE-2025-66524 (NiFi)</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Unsafe deserialization RCE (CVSS 7.5)</div>
                            </li>
                            <li>
                                <div className="font-medium text-black dark:text-white">CVE-2025-67895 (Airflow)</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Edge3 Worker RPC RCE</div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">Python Library</h3>
                        <ul className="space-y-4">
                            <li>
                                <div className="font-medium text-black dark:text-white">CVE-2025-67724 (Tornado)</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">XSS via unescaped reason phrase (CVSS 6.1)</div>
                            </li>
                            <li>
                                <div className="font-medium text-black dark:text-white">CVE-2025-67725 (Tornado)</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Event loop blocking DoS via HTTPHeaders.add (CVSS 7.5)</div>
                            </li>
                            <li>
                                <div className="font-medium text-black dark:text-white">CVE-2025-67726 (Tornado)</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Quadratic DoS via multipart parameters (CVSS 7.5)</div>
                            </li>
                            <li>
                                <div className="font-medium text-black dark:text-white">CVE-2025-69228 (aiohttp)</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Memory exhaustion DoS via Request.post() (CVSS 6.6)</div>
                            </li>
                            <li>
                                <div className="font-medium text-black dark:text-white">CVE-2025-69229 (aiohttp)</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Blocking CPU DoS via chunked messages (CVSS 6.6)</div>
                            </li>
                            <li>
                                <div className="font-medium text-black dark:text-white">CVE-2025-69230 (aiohttp)</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Cookie parser warning storm DoS (CVSS 6.5)</div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">QEMU</h3>
                        <ul className="space-y-4">
                            <li>
                                <div className="font-medium text-black dark:text-white">CVE-2025-14876</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Denial of Service in virtio device emulation (CVSS 5.5)</div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">Capstone</h3>
                        <ul className="space-y-4">
                            <li>
                                <div className="font-medium text-black dark:text-white">CVE-2025-68114 (Capstone Disassembler)</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Stack buffer overflow via vsnprintf (CVSS 4.8)</div>
                            </li>
                            <li>
                                <div className="font-medium text-black dark:text-white">CVE-2025-67873 (Capstone Disassembler)</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Heap buffer overflow via skipdata callback (CVSS 4.8)</div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">NASA</h3>
                        <ul className="space-y-4">
                            <li>
                                <div className="font-medium text-black dark:text-white">CVE-2026-21897 (CryptoLib)</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Out-of-bounds write in GVCID managed parameters (CVSS 7.3)</div>
                            </li>
                            <li>
                                <div className="font-medium text-black dark:text-white">CVE-2026-21898 (CryptoLib)</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Out-of-bounds read in AOS frame parsing (CVSS 7.5)</div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">Mobile Bug Bounty</h3>
                        <ul className="space-y-4">
                            <li>
                                <div className="font-medium text-black dark:text-white">Swiss Federal Railways (SBB) Mobile App</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Bug Bounty Reward: 800€</div>
                            </li>
                        </ul>
                    </div>

                </div>
            </Section>
        </main>
    );
}
