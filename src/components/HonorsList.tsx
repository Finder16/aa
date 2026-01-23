"use client";

import { useState } from "react";

interface HonorItem {
    year: string;
    title: string;
    subtitle?: string;
    highlight?: boolean;
}

interface HonorsListProps {
    items: HonorItem[];
}

export default function HonorsList({ items }: HonorsListProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const initialCount = 5;
    const visibleItems = isExpanded ? items : items.slice(0, initialCount);

    return (
        <div className="space-y-4">
            <ul className="space-y-3 text-sm">
                {visibleItems.map((item, index) => (
                    <li key={index} className="flex gap-4 group">
                        <span className={`font-semibold min-w-10 ${item.highlight ? "text-gray-800 dark:text-gray-200" : "text-gray-400"}`}>
                            {item.year}
                        </span>
                        <div className="flex flex-col">
                            <span className={`${item.highlight ? "font-semibold text-black dark:text-white" : ""}`}>
                                {item.title}
                            </span>
                            {item.subtitle && (
                                <span className="text-gray-500 text-xs mt-0.5">{item.subtitle}</span>
                            )}
                        </div>
                    </li>
                ))}
            </ul>

            {items.length > initialCount && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 mt-2"
                >
                    {isExpanded ? (
                        <>
                            Show Less <span className="text-xs">▲</span>
                        </>
                    ) : (
                        <>
                            View All ({items.length} items) <span className="text-xs">▼</span>
                        </>
                    )}
                </button>
            )}
        </div>
    );
}
