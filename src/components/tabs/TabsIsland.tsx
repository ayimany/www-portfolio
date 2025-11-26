'use client'

import { useState } from 'react'

export type TabItem = {
    key: string
    label: string
    content: React.ReactNode
}

type TabsIslandProps = {
    items: TabItem[]
    initialKey?: string
    className?: string
}

export default function TabsIsland({ items, initialKey, className }: TabsIslandProps) {
    const safeInitialKey = initialKey ?? (items[0]?.key || '')
    const [active, setActive] = useState<string>(safeInitialKey)

    const activeItem = items.find(i => i.key === active) ?? items[0]

    return (
        <div className={`bg-white/80 backdrop-blur rounded-xl shadow-md border border-slate-200 ${className ?? ''}`}>
            {/* Tabs */}
            <div className="flex gap-2 p-2 border-b border-slate-200">
                {items.map(item => {
                    const selected = item.key === active
                    return (
                        <button
                            key={item.key}
                            type="button"
                            onClick={() => setActive(item.key)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-300 ${
                                selected
                                    ? 'bg-slate-900 text-white shadow-sm'
                                    : 'text-slate-700 hover:bg-slate-100'
                            }`}
                            aria-selected={selected}
                            role="tab"
                        >
                            {item.label}
                        </button>
                    )
                })}
            </div>

            {/* Content */}
            <div className="p-4 md:p-6" role="tabpanel">
                {activeItem?.content}
            </div>
        </div>
    )
}
