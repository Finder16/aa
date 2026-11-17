import Section from "@/components/Section";

export default function ResearchPage() {
  return (
    <main className="p-8 lg:p-12 max-w-3xl">
      <Section title="Vulnerability Research">
        <div className="space-y-10">

          <div>
            <h3 className="text-lg font-medium mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">Apple / macOS</h3>
            <ul className="space-y-4">
              <li>
                <div className="font-medium text-black dark:text-white">CVE-2026-43783 (DesktopServices)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Race condition leading to root privilege escalation</div>
              </li>
              <li>
                <div className="font-medium text-black dark:text-white">CVE-2026-43805 (IOKit)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Race condition allowing kernel memory writes</div>
              </li>
              <li>
                <div className="font-medium text-black dark:text-white">CVE-2026-28969 (IOKit)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Use-after-free causing unexpected system termination</div>
              </li>
              <li>
                <div className="font-medium text-black dark:text-white">CVE-2026-43672 (Assets)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Privacy restrictions bypass allowing unauthorized access to sensitive information</div>
              </li>
              <li>
                <div className="font-medium text-black dark:text-white">CVE-2026-43756 (Control Center)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Unauthorized access to sensitive user information</div>
              </li>
              <li>
                <div className="font-medium text-black dark:text-white">CVE-2026-43759 (CoreMedia)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Unauthorized access to sensitive user information</div>
              </li>
              <li>
                <div className="font-medium text-black dark:text-white">CVE-2026-43789 (CoreMedia)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Sandbox restriction bypass allowing access to sensitive information</div>
              </li>
              <li>
                <div className="font-medium text-black dark:text-white">CVE-2026-65345 (Storage)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Unauthorized access to sensitive user information</div>
              </li>
              <li>
                <div className="font-medium text-black dark:text-white">CVE-2026-65372 (Multi-Touch)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Privacy restrictions bypass allowing unauthorized access to protected information</div>
              </li>
              <li>
                <div className="font-medium text-black dark:text-white">CVE-2026-65404 (Accounts)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Privacy restrictions bypass allowing unauthorized access to protected information</div>
              </li>
              <li>
                <div className="font-medium text-black dark:text-white">CVE-2026-86921 (Siri)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Unauthorized file overwrite affecting restricted filesystem locations</div>
              </li>
              <li>
                <div className="font-medium text-black dark:text-white">CVE-2026-112487 (Storage)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Privilege escalation allowing an attacker to obtain root privileges</div>
              </li>
              <li>
                <div className="font-medium text-black dark:text-white">CVE-2026-112696 (Neural Engine)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Out-of-bounds write leading to kernel memory corruption</div>
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
            <h3 className="text-lg font-medium mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">NVIDIA</h3>
            <ul className="space-y-4">
              <li>
                <div className="font-medium text-black dark:text-white">CVE-2026-24156 (DALI)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Code execution (CVSS 7.3)</div>
              </li>
              <li>
                <div className="font-medium text-black dark:text-white">CVE-2026-24173 (Triton Inference Server)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Heap overflow (CVSS 7.5)</div>
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
            <h3 className="text-lg font-medium mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">QEMU</h3>
            <ul className="space-y-4">
              <li>
                <div className="font-medium text-black dark:text-white">CVE-2025-14876</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Denial of Service in virtio device emulation (CVSS 5.5)</div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">LangChain</h3>
            <ul className="space-y-4">
              <li>
                <div className="font-medium text-black dark:text-white">CVE-2026-26013</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Server-Side Request Forgery (CVSS 3.7)</div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">Envoy Proxy</h3>
            <ul className="space-y-4">
              <li>
                <div className="font-medium text-black dark:text-white">CVE-2026-26309</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Off-by-one write in JsonEscaper::escapeString() (CVSS 5.3)</div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">Tunnelblick</h3>
            <ul className="space-y-4">
              <li>
                <div className="font-medium text-black dark:text-white">CVE-2026-31893</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Local arbitrary file read via symlink following in tunnelblickd (CVSS 6.5)</div>
              </li>
            </ul>
          </div>

        </div>
      </Section>
    </main>
  );
}
