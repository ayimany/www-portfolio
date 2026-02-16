"use client";

import React, {useEffect, useState} from "react";
import {Check, Info} from "lucide-react";
import {Card} from "./Card";

interface NoticeBoxProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    storageKey?: string;
}

export function NoticeBox({
                              title,
                              description,
                              icon = <Info size={20} className="text-(--color-accent-primary)"/>,
                              storageKey = "notice-box-dismissed",
                          }: NoticeBoxProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const dismissed = localStorage.getItem(storageKey);
        if (!dismissed) {
            setIsVisible(true);
        }
    }, [storageKey]);

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem(storageKey, "true");
    };

    const handleCopy = () => {
        navigator.clipboard.writeText("https://human.ayimany.tech").then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    if (!isVisible) return null;

    return (
        <>
            {copied && (
                <div
                    className="fixed inset-0 z-(--z-tooltip) flex items-center justify-center animate-in fade-in duration-200">
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"/>
                    <div
                        className="relative bg-(--color-bg-elevated) border border-(--color-border-emphasis) px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in zoom-in-95 duration-200">
                        <div className="bg-pink-500 rounded-full p-1">
                            <Check size={16} className="text-white"/>
                        </div>
                        <span className="font-display font-bold text-lg text-foreground">
                            Check your clipboard.
                        </span>
                    </div>
                </div>
            )}
            <div className="fixed bottom-6 right-6 z-(--z-fixed) max-w-sm">
                <Card
                    className="p-4 shadow-xl border-(--color-border-emphasis) bg-(--color-bg-elevated) relative overflow-hidden group">
                    <div className="flex gap-4">
                        <div className="shrink-0 mt-1">
                            {icon}
                        </div>
                        <div className="flex-1 pr-6">
                            <h4 className="font-display font-bold text-base text-foreground mb-1">
                                {title}
                            </h4>
                            <p className="text-sm text-(--color-text-secondary) leading-relaxed">
                                {description}
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-end gap-4">
                        <button
                            onClick={handleDismiss}
                            className="text-xs font-medium px-3 py-1.5 rounded-md bg-(--color-accent-primary) text-(--color-text-inverse) hover:bg-(--color-accent-primary-hover) transition-colors cursor-pointer"
                        >
                            Got it
                        </button>
                        <button
                            onClick={handleCopy}
                            className="text-xs font-medium px-3 py-1.5 rounded-md bg-pink-300 text-black hover:bg-pink-400 transition-colors cursor-pointer relative"
                        >
                            {copied ? (
                                <span className="flex items-center gap-1">
                                <Check size={12}/>
                                Copied!
                            </span>
                            ) : (
                                "The pink button."
                            )}
                        </button>
                    </div>
                </Card>
            </div>
        </>
    );
}
