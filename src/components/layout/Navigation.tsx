"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Shield, BarChart3, Workflow, LayoutDashboard, Menu, X, FileSpreadsheet, Share2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Solution", href: "/solution", icon: BarChart3 },
    { name: "Architecture", href: "/architecture", icon: Workflow },
    { name: "Automation", href: "/automation", icon: Share2 },
    { name: "Security", href: "/security", icon: Shield },
    { name: "Tech Stack", href: "/tech-stack", icon: LayoutDashboard },
    { name: "Excel", href: "/excel-automation", icon: FileSpreadsheet },
];

export function Navigation() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 shadow-lg shadow-indigo-500/20">
                            <BarChart3 className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white font-display">
                            Revenue<span className="text-indigo-500">Intel</span>
                        </span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-400"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-semibold leading-6 transition-colors hover:text-indigo-400",
                                pathname === item.href ? "text-indigo-500" : "text-slate-300"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
                    <Button variant="ghost" asChild>
                        <Link href="/login">Log in</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/signup">Get Started</Link>
                    </Button>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50 bg-slate-950 p-6">
                    <div className="flex items-center justify-between mb-8">
                        <Link href="/" className="flex items-center space-x-2">
                            <BarChart3 className="h-8 w-8 text-indigo-500" />
                            <span className="text-xl font-bold text-white uppercase italic">Revenue Intelligence</span>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-slate-400"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="space-y-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block text-lg font-semibold text-slate-300 hover:text-indigo-400"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-4 space-y-4">
                            <Button className="w-full" variant="outline" asChild>
                                <Link href="/login">Log in</Link>
                            </Button>
                            <Button className="w-full" asChild>
                                <Link href="/signup">Get Started</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
