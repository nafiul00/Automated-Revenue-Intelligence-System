"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
    Workflow,
    Settings,
    Terminal,
    Activity,
    RefreshCw,
    Zap,
    Clock,
    Server,
    Code2,
    ChevronRight,
    LayoutDashboard,
    Database,
    Shield
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function AutomationSystem() {
    const pipelines = useMemo(() => [
        { name: "Global_Revenue_Ingestion_Core", status: "Active", uptime: "99.9%", load: "High", nodes: 14, color: "indigo" },
        { name: "Risk_Anomaly_Detection_Python", status: "Active", uptime: "100%", load: "Medium", nodes: 8, color: "emerald" },
        { name: "Executive_BI_Sync_v4", status: "Active", uptime: "98.5%", load: "Internal", nodes: 22, color: "purple" },
        { name: "Auto_Tax_Reconciler_EU", status: "Draft", uptime: "N/A", load: "N/A", nodes: 12, color: "amber" },
    ], []);

    const stats = useMemo(() => [
        { label: "Executions Today", val: "14,204", change: "+12%", icon: Activity, color: "indigo" },
        { label: "Success Rate", val: "99.98%", change: "+0.02%", icon: Zap, color: "purple" },
        { label: "Avg Latency", val: "145ms", change: "-12ms", icon: Clock, color: "emerald" },
        { label: "Worker Nodes", val: "32 Active", change: "Optimal", icon: Server, color: "amber" },
    ], []);

    return (
        <div className="p-4 lg:p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-3xl font-black font-display tracking-tight text-slate-900 dark:text-white leading-none mb-2 uppercase italic">Automation Engine</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-bold opacity-80 uppercase tracking-tight">Orchestration management for n8n workflows and Python analytics kernels.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" className="bg-white dark:bg-slate-900 border-slate-200 dark:border-white/5 h-11 px-6 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-sm">
                        <Settings className="h-4 w-4 mr-2" /> Kernel Config
                    </Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-600/20 text-white h-11 px-6 rounded-2xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition-all">
                        <Zap className="h-4 w-4 mr-2" /> Force Global Resync
                    </Button>
                </div>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-white dark:bg-white/5 border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none group hover:border-indigo-500/20 transition-all cursor-default">

                            <CardContent className="pt-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-2.5 rounded-xl bg-${stat.color}-500/10 text-${stat.color}-500 group-hover:scale-110 transition-transform`}>
                                        <stat.icon className="h-5 w-5" />
                                    </div>
                                    <Badge variant="success" className="text-[8px]">{stat.change}</Badge>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                                    <div className="text-2xl font-bold text-slate-800 dark:text-white leading-none mb-1">{stat.val}</div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Workflow Table */}
                <Card className="lg:col-span-2 border-slate-100 dark:border-white/5 shadow-sm overflow-hidden bg-white dark:bg-white/5">
                    <CardHeader className="border-b border-slate-50 dark:border-white/5 pb-4 px-6 flex flex-row items-center justify-between bg-slate-50/50 dark:bg-white/5">
                        <div>
                            <CardTitle className="font-black uppercase tracking-widest text-slate-900 dark:text-white text-sm">Workflow Orchestrator</CardTitle>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight mt-1 opacity-70">Real-time status of connected n8n pipelines.</p>
                        </div>
                        <Badge variant="indigo" className="px-4 py-1 font-black italic">LIVE_MONITOR_CONNECTED</Badge>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-slate-100 dark:divide-slate-800/30">
                            {pipelines.map((p, i) => (
                                <div key={i} className="flex items-center justify-between p-6 hover:bg-indigo-600/5 dark:hover:bg-indigo-500/5 transition-all group cursor-pointer active:scale-[0.995] origin-center">
                                    <div className="flex items-center gap-5">
                                        <div className={cn(
                                            "h-12 w-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-3",
                                            p.status === "Active" ? `bg-${p.color}-500/10 text-${p.color}-500` : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                                        )}>
                                            <Workflow className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-black text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors uppercase font-mono tracking-tighter italic">{p.name}</div>
                                            <div className="flex gap-3 items-center mt-1">
                                                <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] opacity-60">{p.nodes} Nodes</div>
                                                <div className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                                                <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] opacity-60">{p.load}_LOAD</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-10">
                                        <div className="text-right hidden sm:block">
                                            <div className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-1 opacity-50">Stability</div>
                                            <div className="text-xs font-mono font-black text-slate-600 dark:text-slate-300 group-hover:text-indigo-500 transition-colors">{p.uptime}</div>
                                        </div>
                                        <div className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center group-hover:bg-indigo-600/20 transition-all active:scale-90">
                                            <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-indigo-500 transform group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* System Output & Heatmap */}
                <div className="space-y-8">
                    <Card className="border-slate-800 bg-slate-900 overflow-hidden shadow-2xl">
                        <div className="bg-slate-800 px-5 py-3 flex items-center justify-between border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <Terminal className="h-3 w-3 text-indigo-400" />
                                <span className="text-[10px] font-mono font-black text-slate-300 uppercase tracking-[0.2em]">ARIS_KERNEL_SHELL</span>
                            </div>
                            <div className="flex gap-1.5">
                                <div className="h-2 w-2 rounded-full bg-rose-500" />
                                <div className="h-2 w-2 rounded-full bg-amber-500" />
                                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                            </div>
                        </div>
                        <CardContent className="p-5 bg-black/60">
                            <div className="font-mono text-[10px] space-y-2 text-slate-400 overflow-y-auto h-56 custom-scrollbar">
                                <p><span className="text-indigo-500 font-bold">[23:05:01]</span> INIT: Starting n8n orchestration instance...</p>
                                <p><span className="text-indigo-500 font-bold">[23:05:05]</span> CONNECT: Postgres SQL cluster attached (latency: 14ms)</p>
                                <p><span className="text-indigo-500 font-bold">[23:05:10]</span> PIPELINE: Ingestion: {`["STRIPE", "EBAY", "SHOPIFY"]`} started.</p>
                                <p><span className="text-emerald-500 font-bold">[23:05:12]</span> SUCCESS: Batch #14201 processed (+$4,221.00 net)</p>
                                <p><span className="text-indigo-500 font-bold">[23:05:15]</span> PYTHON: Analytics kernel v2.1 triggered for Daily_Close.</p>
                                <p><span className="text-amber-500 font-bold">[23:05:18]</span> WARN: Node RELAY_04 reporting high heat latency.</p>
                                <p className="animate-pulse"><span className="text-indigo-500 font-bold">[23:05:22]</span> LISTENING: Waiting for heartbeat signal...</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-indigo-600 border-transparent text-white relative overflow-hidden group hover:scale-[1.02] transition-transform shadow-xl shadow-indigo-600/20">
                        <div className="absolute top-0 right-0 h-48 w-48 bg-white/10 blur-[60px] rounded-full -mr-24 -mt-24 group-hover:scale-150 transition-transform duration-1000" />
                        <CardHeader className="pb-4 relative z-10">
                            <CardTitle className="font-display flex items-center gap-3 text-lg font-black uppercase tracking-tight">
                                <Database className="h-6 w-6" /> Data Re-Index
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-5 relative z-10 pt-2">
                            <p className="text-xs text-indigo-100 font-medium leading-relaxed opacity-80">
                                Re-synchronize historical revenue nodes. This will trigger a full ETL pipeline rewrite for all enterprise assets.
                            </p>
                            <Button className="w-full h-12 bg-white text-indigo-600 hover:bg-indigo-50 font-black rounded-2xl uppercase text-[10px] tracking-widest shadow-lg active:scale-95 transition-all group">
                                <span className="group-hover:scale-110 transition-transform">Initiate Deep Sync</span>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
