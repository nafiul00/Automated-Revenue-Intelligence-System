"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
    BarChart3,
    LayoutDashboard,
    Workflow,
    Database,
    Shield,
    Settings,
    LogOut,
    Bell,
    Search,
    ChevronRight,
    Menu,
    X,
    User,
    Activity,
    FileText,
    UserCircle,
    Sun,
    Moon,
    Fingerprint,
    type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { ARISChatbot } from "@/components/dashboard/ARISChatbot";
import { NotificationPopover } from "@/components/dashboard/NotificationPopover";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

interface DashboardShellProps {
    children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
    const pathname = usePathname();
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [role, setRole] = useState("CEO");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedRole = localStorage.getItem("userRole");
        if (savedRole) setRole(savedRole);

        if (!savedRole && pathname.startsWith("/dashboard")) {
            router.push("/login");
        }
    }, [pathname, router]);

    const navigation = [
        { name: "Executive Overview", href: "/dashboard", icon: LayoutDashboard },
        { name: "Revenue Analytics", href: "/dashboard/revenue", icon: BarChart3 },
        { name: "Automation Engine", href: "/dashboard/automation", icon: Workflow },
        { name: "API & Connectors", href: "/dashboard/integrations", icon: Database },
        { name: "Compliance & Security", href: "/dashboard/security", icon: Shield },
        { name: "Audit Reports", href: "/dashboard/audit", icon: FileText },
        { name: "Account Profile", href: "/dashboard/profile", icon: UserCircle },
        { name: "System Settings", href: "/dashboard/settings", icon: Settings },
    ];

    const handleLogout = () => {
        localStorage.removeItem("userRole");
        router.push("/login");
    };

    if (!mounted) return null;

    return (
        <div className="flex h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-700">
            {/* Desktop Sidebar */}
            <aside className={cn(
                "hidden lg:flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-[20px] transition-all duration-500 z-50 overflow-hidden",
                isSidebarOpen ? "w-72" : "w-24"
            )}>
                <div className="h-20 flex items-center px-6 mb-4">
                    <Link href="/dashboard" className="flex items-center gap-4 group">
                        <div className="shrink-0 h-11 w-11 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-xl shadow-indigo-600/20 group-hover:scale-110 transition-transform duration-500">
                            <BarChart3 className="h-6 w-6 text-white" />
                        </div>
                        {isSidebarOpen && (
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col">
                                <span className="font-black text-lg tracking-tight font-display leading-none text-slate-900 dark:text-white uppercase italic">ARIS <span className="text-indigo-600 font-black not-italic">PRO</span></span>
                                <span className="text-[9px] text-slate-400 font-black tracking-widest mt-1 opacity-70 uppercase">Kernel_v2.5_Stable</span>
                            </motion.div>
                        )}
                    </Link>
                </div>

                <nav className="flex-1 overflow-y-auto pt-4 px-4 space-y-2 custom-scrollbar">
                    <p className={cn("text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 ml-4 transition-opacity", !isSidebarOpen && "opacity-0")}>Core Interface</p>
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-4 px-4 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all group relative overflow-hidden",
                                    isActive
                                        ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-xl dark:shadow-none translate-x-1"
                                        : "text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                                )}
                            >
                                <item.icon className={cn("h-5 w-5 shrink-0 transition-transform group-hover:scale-110", isActive ? "text-indigo-400 dark:text-indigo-600" : "text-slate-400 group-hover:text-indigo-500")} />
                                {isSidebarOpen && <span>{item.name}</span>}
                                {isActive && (
                                    <motion.div layoutId="activeNav" className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-1.5 bg-indigo-600 dark:bg-indigo-500 rounded-l-full" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-6 space-y-3">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="w-full h-12 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-white/5 text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-all group border border-slate-100 dark:border-transparent"
                    >
                        <ChevronRight className={cn("h-5 w-5 transition-transform duration-500", isSidebarOpen && "rotate-180")} />
                        {isSidebarOpen && <span className="ml-3 text-[10px] font-black uppercase tracking-widest">Collapse Node</span>}
                    </button>
                    <button
                        onClick={handleLogout}
                        className="w-full h-12 flex items-center justify-center rounded-2xl border-2 border-slate-100 dark:border-white/5 text-slate-400 hover:text-rose-500 hover:border-rose-500/20 transition-all group"
                    >
                        <LogOut className="h-5 w-5" />
                        {isSidebarOpen && <span className="ml-3 text-[10px] font-black uppercase tracking-widest">Terminate Session</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] to-transparent pointer-events-none" />

                {/* Top Header */}
                <header className="h-20 flex items-center justify-between px-6 lg:px-10 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-[20px] sticky top-0 z-40 transition-colors duration-700">
                    <div className="flex items-center gap-6">
                        <button
                            className="lg:hidden h-12 w-12 flex items-center justify-center bg-slate-50 dark:bg-white/5 rounded-2xl text-slate-500 hover:text-indigo-600"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                        <div className="hidden sm:flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">XYZ_Node_01:</span>
                            </div>
                            <Badge variant="indigo" className="bg-indigo-500/5 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/20 px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest italic">
                                Production_Kernel_Operational
                            </Badge>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 lg:gap-8">
                        <div className="relative hidden md:block group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                            <input
                                placeholder="PROTOCOL SEARCH..."
                                className="w-48 lg:w-80 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl py-3 pl-12 pr-6 text-[10px] font-black tracking-widest focus:ring-2 focus:ring-indigo-600 dark:focus:ring-white outline-none transition-all placeholder:text-slate-400"
                            />
                        </div>

                        <div className="flex items-center gap-3 pr-4 border-r border-slate-200 dark:border-white/5">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="h-11 w-11 text-slate-500 hover:text-indigo-600 dark:hover:text-white rounded-2xl hover:bg-slate-100 dark:hover:bg-white/5 transition-all shadow-sm border border-slate-100 dark:border-transparent"
                            >
                                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </Button>
                            <NotificationPopover />
                        </div>

                        <button
                            onClick={() => router.push('/dashboard/profile')}
                            className="flex items-center gap-4 group p-1.5 pr-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-indigo-500/30 transition-all active:scale-95 shadow-sm"
                        >
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center p-0.5 shadow-xl shadow-indigo-600/20 group-hover:rotate-6 transition-transform duration-500">
                                <div className="h-full w-full rounded-[9px] bg-white dark:bg-[#020617] flex items-center justify-center overflow-hidden">
                                    <User className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                                </div>
                            </div>
                            <div className="text-left hidden xl:block">
                                <div className="text-[10px] font-black text-slate-900 dark:text-white leading-none mb-1 uppercase tracking-tight">XYZ_SYSTEM_EXEC</div>
                                <div className="text-[8px] text-indigo-600 dark:text-slate-500 font-black uppercase tracking-widest">{role}_CREDENTIALS</div>
                            </div>
                        </button>
                    </div>
                </header>

                {/* Dynamic Route Content */}
                <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-[#020617]/20 custom-scrollbar relative">
                    <div className="max-w-[1700px] mx-auto min-h-full">
                        {children}
                    </div>
                </main>

                {/* Floating Intelligence Bot */}
                <ARISChatbot />
            </div>

            {/* Mobile Navigation Sidebar */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 z-[100] flex lg:hidden">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative w-[320px] bg-white dark:bg-slate-950 flex flex-col h-full shadow-2xl"
                        >
                            <div className="h-24 flex items-center justify-between px-8 border-b border-slate-100 dark:border-white/5">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                                        <BarChart3 className="h-5 w-5 text-white" />
                                    </div>
                                    <span className="font-black text-xl uppercase italic tracking-tighter">ARIS <span className="text-indigo-600 font-black not-italic">PRO</span></span>
                                </div>
                                <button onClick={() => setIsMobileMenuOpen(false)} className="h-11 w-11 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/5 rounded-2xl transition-all">
                                    <X className="h-6 w-6 text-slate-400" />
                                </button>
                            </div>
                            <nav className="flex-1 p-6 space-y-3 overflow-y-auto">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-5 px-6 py-5 rounded-3xl text-xs font-black uppercase tracking-widest transition-all",
                                            pathname === item.href
                                                ? "bg-indigo-600 text-white shadow-2xl shadow-indigo-600/20"
                                                : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"
                                        )}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <item.icon className="h-6 w-6" />
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                            <div className="p-8 border-t border-slate-100 dark:border-white/5">
                                <Button onClick={handleLogout} variant="outline" className="w-full h-16 rounded-[2rem] border-rose-500/20 text-rose-500 hover:bg-rose-500/5 font-black uppercase tracking-widest text-[10px]">
                                    Terminate Session <LogOut className="ml-3 h-4 w-4" />
                                </Button>
                            </div>
                        </motion.aside>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
