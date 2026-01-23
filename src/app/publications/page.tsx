import Section from "@/components/Section";

export default function PublicationsPage() {
    return (
        <main className="p-8 lg:p-12 max-w-3xl">
            <Section title="Publications">
                <div className="space-y-8">

                    {/* 2026 */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-400 border-b border-gray-100 dark:border-gray-800 pb-2 mb-4">2026</h3>
                        <ul className="space-y-6">
                            <li>
                                <div className="font-medium text-lg text-black dark:text-white leading-relaxed">
                                    ExplosionGuard: Policy Synthesis and Guardrails for Budget-Constrained Symbolic Execution
                                </div>
                                <div className="text-gray-600 dark:text-gray-400 mt-2">
                                    <span className="font-semibold text-black dark:text-white">Jaeyeong Lee</span> and GeonWoo Lee
                                </div>
                                <div className="text-sm text-gray-500 mt-1 italic">
                                    Korea Conference on Software Engineering (KCSE), 2026
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </Section>
        </main>
    );
}
