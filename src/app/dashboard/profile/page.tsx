"use client";

import { useState, useEffect } from "react";
import {
    User,
    Mail,
    Shield,
    Building2,
    Key,
    Clock,
    Lock,
    ChevronRight,
    ShieldCheck,
    Edit3,
    QrCode,
    Cpu,
    Zap,
    History
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function ProfilePage() {
    const [role, setRole] = useState("CEO");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedRole = localStorage.getItem("userRole");
        if (savedRole) setRole(savedRole);
    }, []);

    if (!mounted) return null;

    return (
        <div className="p-4 lg:p-8 space-y-8 animate-in fade-in duration-700">
            <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-3xl font-black font-display tracking-tight text-slate-900 dark:text-white leading-none mb-2 uppercase italic">Account Profile</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-bold opacity-80 uppercase tracking-tight">Managing your enterprise identity and security access.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="bg-white dark:bg-slate-900 border-slate-200 dark:border-white/5 h-11 px-6 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-sm">
                        <History className="h-4 w-4 mr-2" /> Session Logs
                    </Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-600/20 text-white h-11 px-6 rounded-2xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition-all">
                        <Edit3 className="h-4 w-4 mr-2" /> Edit Persona
                    </Button>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Card */}
                <Card className="lg:col-span-1 border-slate-200 dark:border-indigo-500/10 shadow-sm dark:shadow-none overflow-hidden relative">
                    <div className="absolute top-0 right-0 h-32 w-32 bg-indigo-500/10 dark:bg-indigo-500/10 blur-[60px] rounded-full -mr-16 -mt-16" />
                    <CardContent className="pt-12 pb-10 flex flex-col items-center text-center relative z-10">
                        <div className="h-28 w-28 rounded-[2.5rem] bg-gradient-to-br from-indigo-500 to-purple-600 p-1.5 mb-6 shadow-2xl shadow-indigo-500/30 group-hover:rotate-6 transition-transform duration-500">
                            <div className="h-full w-full rounded-[2.1rem] bg-white dark:bg-slate-900 flex items-center justify-center text-4xl font-black text-indigo-600 dark:text-indigo-400">
                                {role[0]}
                            </div>
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">XYZ Group Executive</h2>
                        <div className="flex flex-col gap-2 items-center mb-8">
                            <p className="text-[10px] text-slate-400 font-black tracking-[0.3em] uppercase">{role} CLEARANCE</p>
                            <Badge variant="success" className="px-4 py-1.5 rounded-xl border-emerald-500/10 italic"><ShieldCheck className="h-3 w-3 mr-2" /> ACTIVE_S_LINK</Badge>
                        </div>

                        <div className="w-full space-y-2">
                            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 text-[10px] font-bold uppercase tracking-widest group hover:border-indigo-500/30 transition-all">
                                <span className="text-slate-400">Account ID</span>
                                <span className="font-mono text-slate-900 dark:text-white">SDB-1992-UX</span>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 text-[10px] font-bold uppercase tracking-widest group hover:border-indigo-500/30 transition-all">
                                <span className="text-slate-400">Node Origin</span>
                                <span className="font-mono text-slate-900 dark:text-white">LONDON_CL_01</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Identity Details */}
                <div className="lg:col-span-2 space-y-8">
                    <Card className="border-slate-200 dark:border-white/5 shadow-sm overflow-hidden">
                        <CardHeader className="border-b border-slate-100 dark:border-white/5 pb-4 px-6 bg-slate-50/50 dark:bg-white/5">
                            <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white flex items-center gap-3">
                                <Cpu className="h-4 w-4 text-indigo-500" /> Identity Matrix
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-8 pt-8 px-6 pb-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Assigned Persona</label>
                                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 group hover:border-indigo-500/20 transition-all">
                                        <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                                            <User className="h-5 w-5" />
                                        </div>
                                        <span className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-tight">XYZ Executive Core</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Member Organization</label>
                                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 group hover:border-indigo-500/20 transition-all">
                                        <div className="h-10 w-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                                            <Building2 className="h-5 w-5" />
                                        </div>
                                        <span className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-tight">XYZ Company LTD.</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-slate-200 dark:border-white/5 shadow-sm overflow-hidden">
                        <CardHeader className="border-b border-slate-100 dark:border-white/5 pb-4 px-6 bg-slate-50/50 dark:bg-white/5">
                            <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white flex items-center gap-3">
                                <Shield className="h-4 w-4 text-emerald-500" /> Security Token Portal
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-8 px-6 pb-8">
                            {[
                                { label: "Biometric Verification", status: "FaceID & TouchID Active", icon: Zap, color: "text-amber-500", bg: "bg-amber-500/10" },
                                { label: "MFA Authentication", status: "Hardware FIDO2 Linked", icon: Key, color: "text-indigo-500", bg: "bg-indigo-500/10" },
                                { label: "API Global Token", status: "X-ARIS-PRO-09923 (Active)", icon: QrCode, color: "text-purple-500", bg: "bg-purple-500/10" },
                            ].map((s, i) => (
                                <div key={i} className="flex items-center justify-between p-5 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 group hover:border-indigo-500/30 transition-all cursor-pointer">
                                    <div className="flex items-center gap-5">
                                        <div className={cn("h-12 w-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110", s.bg, s.color)}>
                                            <s.icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-tight">{s.label}</div>
                                            <div className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-tighter">{s.status}</div>
                                        </div>
                                    </div>
                                    <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-white dark:bg-slate-900 shadow-sm opacity-0 group-hover:opacity-100 transition-all border border-slate-100 dark:border-white/5 active:scale-90">
                                        <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-indigo-500 transform group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            ))}
                            <div className="pt-4">
                                <Button variant="outline" className="w-full text-[10px] font-black uppercase tracking-[0.3em] bg-white dark:bg-slate-950/50 border-rose-500/20 text-rose-600 hover:bg-rose-500/10 h-14 rounded-[2rem] transition-all active:scale-95 group">
                                    <Lock className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform" /> Revoke Core Grid Sessions
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
