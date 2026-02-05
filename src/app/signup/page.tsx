"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { BarChart3, Mail, User, Building, ShieldCheck, ArrowRight, Lock, Globe } from "lucide-react";

export default function SignupPage() {
    const router = useRouter();

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem("userRole", "CEO"); // Default for demo signup
        router.push("/dashboard");
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4 lg:p-12 transition-colors duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

            <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Information Side */}
                <div className="space-y-8 p-4 lg:p-0">
                    <Link href="/" className="inline-flex items-center gap-3 group">
                        <div className="h-12 w-12 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/20 group-hover:scale-110 transition-transform">
                            <BarChart3 className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <span className="text-2xl font-black font-display text-slate-900 dark:text-white leading-none block">ARIS PRO</span>
                            <span className="text-[10px] font-mono text-slate-400 font-bold tracking-widest uppercase">Global Revenue Kernel</span>
                        </div>
                    </Link>

                    <div className="space-y-6">
                        <h1 className="text-5xl lg:text-6xl font-black font-display tracking-tighter text-slate-900 dark:text-white leading-[0.9]">
                            Join the <br />Future of <br /><span className="text-indigo-600">Automation.</span>
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed max-w-md">
                            Apply for a seat in our private revenue orchestration platform.
                            Built for high-velocity enterprise teams.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-4">
                        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 space-y-3">
                            <ShieldCheck className="h-6 w-6 text-indigo-600" />
                            <div className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">Strict Compliance</div>
                            <p className="text-[10px] text-slate-400 font-medium">Automatic audit trails for every transaction event.</p>
                        </div>
                        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 space-y-3">
                            <Globe className="h-6 w-6 text-purple-600" />
                            <div className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">Global Nodes</div>
                            <p className="text-[10px] text-slate-400 font-medium">Low-latency data ingestion across 12 world clusters.</p>
                        </div>
                    </div>
                </div>

                {/* Signup Card Side */}
                <Card className="border-slate-200 dark:border-white/5 bg-white/50 dark:bg-slate-900/40 backdrop-blur-3xl p-2 rounded-[2.5rem] shadow-2xl">
                    <CardHeader className="p-8 lg:p-10 text-center space-y-2">
                        <Badge variant="success" className="mx-auto px-4 py-1 rounded-xl font-black italic">Open Registration Cycle_01</Badge>
                        <CardTitle className="text-3xl font-black font-display text-slate-900 dark:text-white">Request Access</CardTitle>
                        <CardDescription className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Security documentation required for full activation</CardDescription>
                    </CardHeader>
                    <CardContent className="px-8 lg:px-10 pb-8 space-y-6">
                        <form onSubmit={handleSignup} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">First Identity</label>
                                    <input type="text" placeholder="SARAH" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl py-4 px-6 text-sm font-bold focus:ring-2 focus:ring-indigo-600 outline-none text-slate-900 dark:text-white transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600 uppercase" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Last Identity</label>
                                    <input type="text" placeholder="CHEN" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl py-4 px-6 text-sm font-bold focus:ring-2 focus:ring-indigo-600 outline-none text-slate-900 dark:text-white transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600 uppercase" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Entity Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                    <input type="email" placeholder="S.CHEN@XYZ-CORP.COM" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl py-4 pl-14 pr-6 text-sm font-bold focus:ring-2 focus:ring-indigo-600 outline-none text-slate-900 dark:text-white transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600 uppercase" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Organization Name</label>
                                <div className="relative">
                                    <Building className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                    <input type="text" placeholder="XYZ COMPANY LTD" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl py-4 pl-14 pr-6 text-sm font-bold focus:ring-2 focus:ring-indigo-600 outline-none text-slate-900 dark:text-white transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600 uppercase" />
                                </div>
                            </div>

                            <Button className="w-full h-16 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-[2rem] transition-all active:scale-[0.98] text-sm uppercase tracking-[0.2em] shadow-xl shadow-indigo-600/20 group">
                                Initialize Enrollment <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </form>

                        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2">
                            <Lock className="h-3 w-3" />
                            Request will be reviewed by XYZ Compliance Board within 24h
                        </div>
                    </CardContent>
                    <CardFooter className="px-10 pb-10 flex flex-col items-center border-t border-slate-100 dark:border-white/5 pt-6">
                        <p className="text-xs text-slate-500 font-medium">
                            Already verified on the kernel? <Link href="/login" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Establish Link</Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
