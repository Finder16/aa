import Section from "@/components/Section";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 lg:p-12 max-w-3xl">
      {/* Bio */}
      <div className="mb-16">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
          I am Jaeyeong Lee, a South Korean security researcher and CTF player.
          I mainly work on security research projects and have a strong interest in automatically discovering vulnerabilities. I’m also deeply interested in every field that operates on computers.
        </p>
        <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex gap-2 items-start">
            <span className="font-semibold min-w-24">Education</span>
            <div className="flex flex-col">
              <span>Sunrin Internet Highschool, Information Security (2023.3 ~ 2026.2)</span>
              <span>Seoul Women&apos;s Univ, Cybersecurity Gifted Education (2024.05 ~ 2024.11)</span>
            </div>
          </div>

        </div>
      </div>

      {/* Experience / Affiliations */}
      <Section title="Experience">
        <ul className="space-y-4">
          <li>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 justify-between">
              <div>
                <div className="font-medium">HSPACE</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Field Trainee</div>
              </div>
              <div className="text-sm text-gray-500 font-mono">2025.07 ~ 2025.08</div>
            </div>
          </li>
          <li>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 justify-between">
              <div>
                <div className="font-medium">Korea Univ. Blockchain Valley</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Security Team (Research)</div>
              </div>
              <div className="text-sm text-gray-500 font-mono">2025.03 ~ 2025.07</div>
            </div>
          </li>
          <li>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 justify-between">
              <div>
                <div className="font-medium">Sunrin Internet Highschool</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Information Security</div>
              </div>
              <div className="text-sm text-gray-500 font-mono">2023.03 ~ 2026.02</div>
            </div>
          </li>
        </ul>
      </Section>

      {/* News */}
      <Section title="News">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm">
            <span className="font-mono text-gray-500 dark:text-gray-400 min-w-24">Mar 2026</span>
            <span>Participating in <strong>SECCON CTF Finals 2026</strong> (Tokyo).</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm">
            <span className="font-mono text-gray-500 dark:text-gray-400 min-w-24">Feb 2026</span>
            <span>Accepted to <strong>KCSE 2026</strong> (Ulsan).</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm">
            <span className="font-mono text-gray-500 dark:text-gray-400 min-w-24">Aug 2025</span>
            <span>Finalist in <strong>DEFCON 33 CTF</strong> (Las Vegas).</span>
          </div>
        </div>
      </Section>

      {/* Publications */}
      <Section title="Publications">
        <ul className="space-y-4">
          <li>
            <div className="font-medium text-black dark:text-white leading-relaxed">
              ExplosionGuard: Policy Synthesis and Guardrails for Budget-Constrained Symbolic Execution
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              <span className="font-semibold text-black dark:text-white">Jaeyeong Lee</span> and GeonWoo Lee
            </div>
            <div className="text-sm text-gray-500 mt-1 italic">
              Korea Conference on Software Engineering (KCSE), 2026
            </div>
          </li>
        </ul>
        <div className="mt-4 text-right">
          <Link href="/publications" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">View All Publications →</Link>
        </div>
      </Section>

      {/* Vulnerability Research */}
      <Section title="Vulnerability Research">
        <ul className="space-y-3">
          <li>
            <div className="font-medium">CVE-2026-21897 (NASA CryptoLib)</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Out-of-bounds write in GVCID managed parameters (CVSS 7.3)</div>
          </li>
          <li>
            <div className="font-medium">CVE-2026-21898 (NASA CryptoLib)</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Out-of-bounds read in AOS frame parsing (CVSS 7.5)</div>
          </li>
          <li>
            <div className="font-medium">CVE-2025-14876 (QEMU)</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Denial of Service in virtio device emulation (CVSS 5.5)</div>
          </li>
        </ul>
        <div className="mt-4 text-right">
          <Link href="/research" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">View All Research →</Link>
        </div>
      </Section>

      {/* Honors & Awards */}
      <Section title="Honors & Awards">
        <ul className="space-y-2 text-sm">
          <li className="flex gap-4">
            <span className="font-semibold min-w-8 text-gray-400">2025</span>
            <span>1st Place, <strong>Holyshield CTF 2025</strong></span>
          </li>
          <li className="flex gap-4">
            <span className="font-semibold min-w-8 text-gray-400">2025</span>
            <span>8th Place, <strong>DEFCON 33 Final</strong></span>
          </li>
          <li className="flex gap-4">
            <span className="font-semibold min-w-8 text-gray-400">2024</span>
            <span>KORAIL Vulnerability Award</span>
          </li>
        </ul>
        <div className="mt-4 text-right">
          <Link href="/honors" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">View All Honors →</Link>
        </div>
      </Section>

      {/* Projects */}
      <Section title="Projects">
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Blind penetration test for Hyundai Mobis overseas subsidiaries</h3>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              2025.09.22 ~ 2025.11.14
            </div>
          </div>
          <div>
            <h3 className="font-medium">Automated Analysis of IoT Vulnerabilities with Taint Analysis</h3>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Research project focusing on detecting vulnerabilities in IoT devices using taint analysis techniques.
            </div>
          </div>
          <div>
            <h3 className="font-medium">Intelligent Traffic Analysis Training Data Generation — Cyber Operations Command</h3>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Generated standard and malicious traffic datasets for training intelligent analysis models.
            </div>
          </div>
        </div>
        <div className="mt-4 text-right">
          <Link href="/projects" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">View All Projects →</Link>
        </div>
      </Section>
    </main>
  );
}
