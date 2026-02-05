"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Shield, Lock, LayoutDashboard, ChevronRight, Fingerprint, Banknote, User, Users, UserCheck, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export default function LoginPage() {
    const router = useRouter();
    const [role, setRole] = useState("CEO");
    const [loading, setLoading] = useState(false);

    const roles = [
        { id: "CEO", name: "Chief Executive Officer", desc: "Enterprise HQ Insights", icon: Shield },
        { id: "CFO", name: "Chief Financial Officer", desc: "Treasury & Risk Matrix", icon: Banknote },
        { id: "Founder", name: "Strategic Founder", desc: "Venture Vision Board", icon: Fingerprint },
        { id: "Manager", name: "Operations Manager", desc: "Team Pulse & Trends", icon: Users },
        { id: "Employee", name: "Executive Employee", desc: "Personal KPI Relay", icon: UserCheck },
        { id: "Admin", name: "System Administrator", desc: "Security & Kernel Dev", icon: ShieldAlert },
    ];

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        localStorage.setItem("userRole", role);
        setTimeout(() => {
            router.push("/dashboard");
        }, 800);
    };

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] flex items-center justify-center p-4 lg:p-6 transition-colors duration-500">
            <div className="absolute inset-0 bg-indigo-500/5 dark:bg-indigo-500/5 backdrop-blur-[100px] pointer-events-none" />

            <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-5 bg-white dark:bg-slate-950 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/5 shadow-2xl dark:shadow-indigo-500/10 min-h-[700px]">
                {/* Visual Branding Side */}
                <div className="lg:col-span-2 flex flex-col justify-between bg-indigo-600 p-12 text-white relative overflow-hidden group">
                    <div className="relative z-10 flex items-center gap-3">
                        <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                            <Banknote className="h-7 w-7" />
                        </div>
                        <div>
                            <span className="text-2xl font-black font-display tracking-tight leading-none block">ARIS PRO</span>
                            <span className="text-[10px] font-mono opacity-60">KERNEL_REVISION_2.5</span>
                        </div>
                    </div>

                    <div className="relative z-10 space-y-6">
                        <h2 className="text-5xl font-black font-display leading-[0.95] tracking-tighter">
                            Autonomous <br />Revenue <br />Command.
                        </h2>
                        <div className="h-1 w-24 bg-white/30 rounded-full" />
                        <p className="text-indigo-100/70 text-sm leading-relaxed max-w-xs font-medium italic">
                            The private orchestration layer for XYZ Company LTD. Secure terminal access only.
                        </p>
                    </div>

                    <div className="relative z-10 flex flex-col gap-6">
                        <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-indigo-200">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 shadow-sm"><Shield className="h-3 w-3" /> FIPS-140-2</div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 shadow-sm"><Lock className="h-3 w-3" /> ISO 27001</div>
                        </div>
                        <div className="flex items-center gap-2 text-[9px] text-indigo-300 font-mono tracking-tighter">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            SECURE TUNNEL: ACTIVE_SSL_256_BIT
                        </div>
                    </div>

                    {/* Animated Background Decor */}
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-50" />
                </div>

                {/* Role Selection Side */}
                <div className="lg:col-span-3 bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-3xl p-8 lg:p-14 flex flex-col border-l border-slate-200 dark:border-white/5">
                    <div className="space-y-3 mb-10">
                        <div className="flex items-center justify-between">
                            <Badge variant="indigo" className="px-4 py-1.5 rounded-xl font-black text-[9px]">XYZ-HQ-PRIMARY</Badge>
                            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest font-black">Status: 200 OK</span>
                        </div>
                        <h1 className="text-3xl font-black font-display tracking-tight text-slate-800 dark:text-white leading-none">Biometric Auth Gate</h1>
                        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed">Select your organizational cleared persona below.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-8 flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {roles.map((r) => (
                                <button
                                    key={r.id}
                                    type="button"
                                    onClick={() => setRole(r.id)}
                                    className={cn(
                                        "flex flex-col p-5 rounded-3xl border-2 transition-all text-left group relative overflow-hidden h-32 justify-between",
                                        role === r.id
                                            ? "bg-white dark:bg-slate-900 border-indigo-600 shadow-[0_20px_40px_rgba(79,70,229,0.1)] dark:shadow-none"
                                            : "bg-white dark:bg-slate-900/40 border-slate-100 dark:border-white/5 text-slate-500 hover:border-indigo-500/30 hover:bg-white dark:hover:bg-slate-900"
                                    )}
                                >
                                    <div className="flex items-start justify-between">
                                        <div className={cn(
                                            "h-10 w-10 rounded-xl flex items-center justify-center transition-all",
                                            role === r.id ? "bg-indigo-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                                        )}>
                                            <r.icon className="h-5 w-5" />
                                        </div>
                                        {role === r.id && (
                                            <div className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center">
                                                <ChevronRight className="h-3 w-3 text-white" />
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <div className={cn("text-xs font-black uppercase tracking-widest", role === r.id ? "text-indigo-600 dark:text-indigo-400" : "text-slate-600 dark:text-slate-400")}>{r.name}</div>
                                        <div className="text-[9px] font-bold opacity-60 uppercase tracking-tighter mt-1">{r.desc}</div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="pt-4 mt-auto">
                            <Button
                                type="submit"
                                className="w-full h-16 bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-indigo-600 dark:hover:bg-indigo-50 font-black rounded-[2rem] transition-all active:scale-[0.98] text-sm uppercase tracking-[0.3em] shadow-xl dark:shadow-none mb-6"
                                disabled={loading}
                            >
                                {loading ? (
                                    <div className="flex items-center gap-3">
                                        <div className="h-5 w-5 border-4 border-slate-500 border-t-white rounded-full animate-spin" />
                                        <span>Syncing Encryption...</span>
                                    </div>
                                ) : (
                                    "Establish Secure Session"
                                )}
                            </Button>

                            <p className="text-[9px] text-slate-400 font-bold text-center uppercase tracking-[0.2em] leading-relaxed">
                                Personnel access protocol 9.04. Unauthorized attempts <br />
                                are logged and reported to the <span className="text-indigo-500">Security Kernel</span>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
