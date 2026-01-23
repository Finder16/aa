export default function Section({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="mb-16">
            <h2 className="text-xl font-bold tracking-tight mb-8 text-black dark:text-white border-b pb-2 border-gray-100 dark:border-gray-800">
                {title}
            </h2>
            <div className="space-y-4">
                {children}
            </div>
        </section>
    );
}
