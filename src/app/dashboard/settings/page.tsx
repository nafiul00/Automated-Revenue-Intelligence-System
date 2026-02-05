"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
    Settings,
    Moon,
    Sun,
    Monitor,
    Bell,
    Shield,
    Globe,
    Cpu,
    Database,
    RefreshCw,
    Save,
    Palette
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
        }, 1000);
    };

    if (!mounted) return null;

    return (
        <div className="p-4 lg:p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-3xl font-black font-display tracking-tight text-slate-900 dark:text-white leading-none mb-2 uppercase italic">System Orchestration</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-bold opacity-80 uppercase tracking-tight">Configure XYZ Company LTD platform parameters and AI kernels.</p>
                </div>
                <Button size="sm" onClick={handleSave} disabled={isSaving} className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl h-11 px-8 font-black uppercase text-[10px] tracking-widest shadow-xl shadow-indigo-600/20 active:scale-95 transition-all">
                    {isSaving ? <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
                    Save Configuration
                </Button>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Theme & Display */}
                <div className="lg:col-span-2 space-y-8">
                    <Card className="bg-white dark:bg-slate-950/40 border-slate-200 dark:border-white/5 shadow-sm dark:shadow-2xl overflow-hidden">
                        <CardHeader className="border-b border-slate-100 dark:border-white/5 pb-4 px-6 bg-slate-50/50 dark:bg-white/5">
                            <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-3 text-slate-900 dark:text-white">
                                <Palette className="h-4 w-4 text-indigo-500" /> Interface & Identity
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-8 pt-8 px-6 pb-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { id: "light", name: "Day Mode", icon: Sun, desc: "High Contrast" },
                                    { id: "dark", name: "Night Mode", icon: Moon, desc: "Deep Indigo" },
                                    { id: "system", name: "Auto Link", icon: Monitor, desc: "OS Sync" },
                                ].map((t) => (
                                    <button
                                        key={t.id}
                                        onClick={() => setTheme(t.id)}
                                        className={cn(
                                            "flex flex-col items-center justify-center p-8 rounded-[2.5rem] border-2 transition-all gap-4 overflow-hidden relative group active:scale-95",
                                            theme === t.id
                                                ? "bg-slate-900 dark:bg-white border-slate-900 dark:border-white text-white dark:text-slate-950 shadow-2xl"
                                                : "bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/5 text-slate-500 hover:border-indigo-500/30 hover:bg-white dark:hover:bg-white/10 shadow-sm"
                                        )}
                                    >
                                        <div className={cn(
                                            "h-14 w-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500",
                                            theme === t.id ? "bg-white/20 dark:bg-slate-900/20 text-white dark:text-slate-900" : "bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 shadow-sm"
                                        )}>
                                            <t.icon className="h-7 w-7" />
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xs font-black uppercase tracking-[0.2em]">{t.name}</div>
                                            <div className="text-[9px] opacity-60 uppercase tracking-tighter mt-1 font-bold">{t.desc}</div>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-slate-100 dark:border-white/5 space-y-6">
                                <div className="flex items-center justify-between p-6 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 group hover:border-indigo-500/20 transition-all">
                                    <div>
                                        <div className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest">Visual Acceleration</div>
                                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-tight mt-1 opacity-70">Enables GPU-based animations for the command center.</p>
                                    </div>
                                    <div className="h-7 w-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center px-1 cursor-pointer transition-colors hover:bg-slate-300 dark:hover:bg-slate-700">
                                        <div className="h-5 w-5 bg-white dark:bg-white rounded-full ml-auto shadow-md" />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-slate-950/40 border-slate-200 dark:border-white/5 shadow-sm overflow-hidden">
                        <CardHeader className="border-b border-slate-100 dark:border-white/5 pb-4 px-6 bg-slate-50/50 dark:bg-white/5">
                            <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-3 text-slate-900 dark:text-white">
                                <Cpu className="h-4 w-4 text-purple-500" /> Automation Kernel
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6 pt-8 px-6 pb-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center justify-between p-6 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 group hover:border-indigo-500/20 transition-all">
                                    <div className="flex items-center gap-5">
                                        <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                            <RefreshCw className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest">Auto-Sync</div>
                                            <div className="text-[9px] text-slate-400 font-black mt-1 uppercase tracking-tighter">NODE_FREQ: 5 MIN</div>
                                        </div>
                                    </div>
                                    <select className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all cursor-pointer shadow-sm">
                                        <option>Fast (5m)</option>
                                        <option>Normal (1h)</option>
                                        <option>Lazy (1d)</option>
                                    </select>
                                </div>

                                <div className="flex items-center justify-between p-6 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 group hover:border-purple-500/20 transition-all">
                                    <div className="flex items-center gap-5">
                                        <div className="h-12 w-12 rounded-2xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                            <Database className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest">Retention</div>
                                            <div className="text-[9px] text-slate-400 font-black mt-1 uppercase tracking-tighter">DATA_POLICY_V4</div>
                                        </div>
                                    </div>
                                    <Badge variant="indigo" className="px-4 py-1.5 rounded-lg border-indigo-500/10 text-[9px] font-black italic">90_DAYS</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar Settings */}
                <div className="space-y-8">
                    <Card className="bg-white dark:bg-slate-950/40 border-slate-200 dark:border-white/5 shadow-sm overflow-hidden">
                        <CardHeader className="border-b border-slate-100 dark:border-white/5 pb-4 px-6 bg-slate-50/50 dark:bg-white/5">
                            <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">Platform Control</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6 pt-8 px-6 pb-8">
                            <div className="flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors border border-slate-100 dark:border-transparent">
                                        <Bell className="h-5 w-5" />
                                    </div>
                                    <span className="text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest">Node Alerts</span>
                                </div>
                                <button
                                    onClick={() => setNotifications(!notifications)}
                                    className={cn(
                                        "h-6 w-11 rounded-full transition-all flex items-center px-1 shadow-inner",
                                        notifications ? "bg-emerald-500" : "bg-slate-200 dark:bg-slate-800"
                                    )}
                                >
                                    <div className={cn("h-4 w-4 bg-white rounded-full transition-transform shadow-md", notifications ? "translate-x-5" : "translate-x-0")} />
                                </button>
                            </div>

                            <div className="flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors border border-slate-100 dark:border-transparent">
                                        <Shield className="h-5 w-5" />
                                    </div>
                                    <span className="text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest">RBAC Lock</span>
                                </div>
                                <div className="h-6 w-11 rounded-full bg-emerald-500 flex items-center px-1 shadow-inner opacity-40 cursor-not-allowed">
                                    <div className="h-4 w-4 bg-white rounded-full translate-x-5" />
                                </div>
                            </div>

                            <div className="flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors border border-slate-100 dark:border-transparent">
                                        <Globe className="h-5 w-5" />
                                    </div>
                                    <span className="text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest">Local Currency</span>
                                </div>
                                <Badge variant="success" className="px-4 py-1.5 rounded-xl border-emerald-500/10 font-black italic text-[9px]">৳_BDT_GATE</Badge>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-rose-50/50 dark:bg-rose-500/5 border-rose-100 dark:border-rose-500/10 backdrop-blur-md overflow-hidden relative group">
                        <div className="absolute top-0 right-0 h-24 w-24 bg-rose-500/10 blur-[60px] rounded-full -mr-12 -mt-12 group-hover:bg-rose-500/20 transition-all duration-700" />
                        <CardHeader className="border-b border-rose-100 dark:border-white/5 pb-4 px-6 bg-rose-100/20 dark:bg-rose-500/5">
                            <CardTitle className="text-[10px] font-black text-rose-600 dark:text-rose-500 uppercase tracking-[0.3em]">Protocol Overrides</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-6 px-6 pb-6 relative z-10">
                            <p className="text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-tight leading-relaxed opacity-70">
                                Critical actions impacting <span className="text-rose-600 underline decoration-rose-600/30 underline-offset-2">XYZ_GROUP_NODES</span> orchestration.
                            </p>
                            <Button variant="outline" className="w-full text-[9px] font-black uppercase tracking-[0.2em] border-rose-200 dark:border-rose-500/20 text-rose-600 hover:bg-rose-600 hover:text-white h-12 rounded-[1.5rem] transition-all duration-300 active:scale-95 group">
                                <span className="group-hover:tracking-[0.4em] transition-all duration-500">Purge Kernel Cache</span>
                            </Button>
                            <Button variant="outline" className="w-full text-[9px] font-black uppercase tracking-[0.2em] border-rose-200 dark:border-rose-500/20 text-rose-600 hover:bg-rose-600 hover:text-white h-12 rounded-[1.5rem] transition-all duration-300 active:scale-95 group">
                                <span className="group-hover:tracking-[0.4em] transition-all duration-500">Terminate n8n</span>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
