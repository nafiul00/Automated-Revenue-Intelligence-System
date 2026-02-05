"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
    TrendingUp,
    Users,
    Package,
    BarChart3,
    ArrowUpRight,
    ArrowDownRight,
    Workflow,
    ShieldCheck,
    Globe,
    Plus,
    Activity,
    Lock,
    X,
    Layout,
    Cpu,
    Zap,
    UserCheck,
    Database,
    Clock,
    DollarSign,
    Target,
    Settings,
    FileText,
    History
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import data from "@/lib/data.json";
import { RevenueLineChart, CategoryBarChart } from "@/components/dashboard/Charts";

export default function DashboardOverview() {
    const router = useRouter();
    const { metrics, trends, recent_sales } = data;
    const [showWidgetPanel, setShowWidgetPanel] = useState(false);
    const [role, setRole] = useState("CEO");

    useEffect(() => {
        const savedRole = localStorage.getItem("userRole");
        if (savedRole) setRole(savedRole);
    }, []);

    const kpis = useMemo(() => {
        const base = [
            { title: "Net Revenue", val: `৳${(metrics.revenue / 1000000).toFixed(1)}M`, trend: "+12.4%", sub: "Weekly Momentum", icon: TrendingUp, color: "indigo" },
            { title: "Volume Output", val: metrics.orders.toLocaleString(), trend: "+4.2%", sub: "Since last month", icon: Package, color: "emerald" },
            { title: "Active Partners", val: metrics.customer_count.toLocaleString(), trend: "+102", sub: "Net new this month", icon: Users, color: "purple" },
            { title: "Avg. Sale Order", val: `৳${metrics.avg_order_value.toLocaleString()}`, trend: "-0.4%", sub: "Price variance", icon: BarChart3, color: "amber" },
        ];

        if (role === "Employee") {
            return [
                { title: "My Sales Volume", val: `৳${(metrics.revenue * 0.05 / 1000).toFixed(1)}K`, trend: "+2.1%", sub: "Personal quota status", icon: Target, color: "indigo" },
                { title: "My Fulfilled Orders", val: "42", trend: "+3", sub: "Today's output", icon: Package, color: "emerald" },
                { title: "Client Satisfaction", val: "94%", trend: "+1.2%", sub: "Last 7 days", icon: Users, color: "purple" },
                { title: "Pending Tickets", val: "5", trend: "-2", sub: "Awaiting response", icon: Activity, color: "amber" },
            ];
        }

        if (role === "Admin") {
            return [
                { title: "System Uptime", val: "99.98%", trend: "Stable", sub: "Last 24 hours", icon: Activity, color: "emerald" },
                { title: "Active API Nodes", val: "12/12", trend: "Balanced", sub: "Node cluster status", icon: Database, color: "indigo" },
                { title: "Security Events", val: "0", trend: "Safe", sub: "Threat alerts blocked", icon: ShieldCheck, color: "rose" },
                { title: "User Sessions", val: "342", trend: "+12", sub: "Live connected users", icon: Users, color: "purple" },
            ];
        }

        return base;
    }, [metrics, role]);

    return (
        <div className="p-4 lg:p-8 space-y-8 relative min-h-screen animate-in fade-in duration-700">
            {/* Role-Based Header */}
            <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 mb-1">
                        <Badge variant="indigo" className="px-2 py-0 text-[8px] h-4">{role} PORTAL</Badge>
                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Node ID: XYZ-ALPHA-01</span>
                    </div>
                    <h1 className="text-3xl font-bold font-display tracking-tight text-slate-900 dark:text-white leading-none">
                        {role === "CEO" && "Strategic Command Center"}
                        {role === "CFO" && "Financial Intelligence Suite"}
                        {role === "Manager" && "Operations Orchestrator"}
                        {role === "Founder" && "Growth Vision Dashboard"}
                        {role === "Employee" && "Personal Execution Relay"}
                        {role === "Admin" && "System Infrascope"}
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                        {role === "CEO" && "High-level insights and executive revenue trends."}
                        {role === "CFO" && "Granular financial tracking, risk flags, and forecasts."}
                        {role === "Manager" && "Team performance metrics and operational efficiency."}
                        {role === "Founder" && "Venture growth, expansion ROI, and strategic health."}
                        {role === "Employee" && "Monitor your individual performance and daily tasks."}
                        {role === "Admin" && "Technical system health, user logs, and security monitoring."}
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    {role === "Admin" ? (
                        <Button variant="outline" size="sm" onClick={() => router.push('/dashboard/settings')} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-100 rounded-xl h-11 px-6 shadow-sm">
                            <Settings className="h-4 w-4 mr-2" /> Global Config
                        </Button>
                    ) : (
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShowWidgetPanel(true)}
                            className="bg-white dark:bg-slate-900 border-slate-200 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-slate-800 text-indigo-600 dark:text-indigo-400 border-indigo-500/20 rounded-xl h-11 px-6 font-black uppercase text-[10px] tracking-widest shadow-sm"
                        >
                            <Plus className="h-4 w-4 mr-2" /> Action Widget
                        </Button>
                    )}
                    <Button size="sm" onClick={() => router.push('/dashboard/automation')} className="bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-600/20 text-white rounded-xl h-11 px-6 font-black uppercase text-[10px] tracking-widest active:scale-95 transition-all">
                        <Activity className="h-4 w-4 mr-2" /> {role === "Admin" ? "Kernel Console" : "System Monitor"}
                    </Button>
                </div>
            </section>

            {/* Custom Widgets Panel */}
            <AnimatePresence>
                {showWidgetPanel && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowWidgetPanel(false)} className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-[100]" />
                        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25 }} className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800 z-[101] p-8 shadow-2xl">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800 dark:text-white"><Layout className="h-5 w-5 text-indigo-500" /> Interaction Nodes</h2>
                                <button onClick={() => setShowWidgetPanel(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-full text-slate-400"><X className="h-5 w-5" /></button>
                            </div>
                            <div className="space-y-6">
                                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Mount Specialized Widgets</p>
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        { title: "Regional Heatmap", icon: Globe, color: "text-indigo-500", bg: "bg-indigo-500/10" },
                                        { title: "Anomaly Probe", icon: Zap, color: "text-amber-500", bg: "bg-amber-500/10" },
                                        { title: "Compliance Auditor", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                                        { title: "Forecast Engine", icon: TrendingUp, color: "text-purple-500", bg: "bg-purple-500/10" },
                                    ].map((w, i) => (
                                        <button key={i} className="flex items-center gap-4 p-5 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-indigo-500/50 hover:bg-white dark:hover:bg-slate-800 transition-all group text-left active:scale-[0.98] active:bg-slate-100 dark:active:bg-slate-700">
                                            <div className={`h-12 w-12 rounded-2xl ${w.bg} flex items-center justify-center ${w.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}><w.icon className="h-6 w-6" /></div>
                                            <div className="flex-1">
                                                <div className="text-sm font-black text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 uppercase tracking-tight">{w.title}</div>
                                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter opacity-60">Deploy on grid</div>
                                            </div>
                                            <Plus className="h-4 w-4 text-slate-300 group-hover:text-indigo-500 group-hover:scale-125 transition-all" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {kpis.map((kpi, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} whileHover={{ y: -4 }}>
                        <Card className="hover:border-indigo-500/30 transition-all group cursor-pointer border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none bg-white dark:bg-white/5 active:scale-[0.98]">
                            <CardContent className="pt-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`p-2.5 rounded-2xl bg-${kpi.color}-500/10 text-${kpi.color}-500 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}><kpi.icon className="h-5 w-5" /></div>
                                    <Badge variant={kpi.trend.includes("+") ? "success" : "warning"} className="group-hover:px-4 transition-all duration-300">{kpi.trend}</Badge>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest group-hover:text-indigo-500/60 transition-colors">{kpi.title}</p>
                                    <div className="text-2xl font-black tracking-tight text-slate-900 dark:text-white leading-none mb-1 group-hover:translate-x-1 transition-transform">{kpi.val}</div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight opacity-60">{kpi.sub}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Role-Specific Main Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Core Visuals */}
                <Card className="lg:col-span-2 overflow-hidden border-slate-100 dark:border-white/5">
                    <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 dark:border-white/5 pb-4 px-6">
                        <div>
                            <CardTitle className="font-display text-slate-900 dark:text-white">
                                {role === "Admin" ? "System Load Intelligence" : "Performance Velocity Feed"}
                            </CardTitle>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 italic">
                                {role === "Employee" ? "Track your individual billing cycles." : "Real-time enterprise metrics aggregated in BDT."}
                            </p>
                        </div>
                        <Badge variant="indigo" className="px-4 py-1">LIVE DATA_LINK</Badge>
                    </CardHeader>
                    <CardContent className="pt-8">
                        <div className="h-72 w-full">
                            <RevenueLineChart data={trends} />
                        </div>
                        <div className="flex justify-between mt-6 text-[9px] text-slate-400 font-mono tracking-[0.2em] px-2 uppercase">
                            <span>T_Start</span>
                            <span className="text-indigo-500/40 animate-pulse">XYZ KERNEL_{role}_RELAY ACTIVE</span>
                            <span>T_Now</span>
                        </div>
                    </CardContent>
                </Card>

                {/* Right Column: Role-Specific Details */}
                <div className="space-y-8">
                    {role === "Admin" ? (
                        <Card className="bg-slate-900 text-white border-transparent">
                            <CardHeader className="pb-4 border-b border-white/5">
                                <CardTitle className="flex items-center gap-2 text-base"><Cpu className="h-5 w-5 text-indigo-400" /> Instance Monitor</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6 space-y-5">
                                {[
                                    { label: "Memory Pool", status: "Healthy", val: "4.2GB / 16GB", p: 25 },
                                    { label: "CPU Load", status: "Nominal", val: "12% Total", p: 12 },
                                    { label: "Storage", status: "Archiving", val: "1.2TB / 5TB", p: 24 },
                                ].map((sys, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest">
                                            <span>{sys.label}</span>
                                            <span className="text-indigo-400">{sys.val}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-indigo-500" style={{ width: `${sys.p}%` }} />
                                        </div>
                                    </div>
                                ))}
                                <Button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 h-10 rounded-xl font-bold uppercase text-[9px] tracking-[0.2em]">Open Cloud Terminal</Button>
                            </CardContent>
                        </Card>
                    ) : (
                        <Card className="border-slate-100 dark:border-white/5">
                            <CardHeader className="border-b border-slate-100 dark:border-white/5 pb-4 px-6">
                                <CardTitle className="font-display flex items-center gap-3 text-slate-900 dark:text-white">
                                    <Workflow className="h-5 w-5 text-purple-500" /> Status Nodes
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 pt-6">
                                {[
                                    { name: "Invoicing Relay", status: "Operational", rate: "100%", last: "2m ago" },
                                    { name: "Risk Detection", status: "Scanning", rate: "99.2%", last: "Active" },
                                    { name: "Audit Engine", status: "Idle", rate: "100%", last: "8h ago" },
                                ].map((job, i) => (
                                    <div key={i} className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 flex items-center justify-between hover:border-indigo-500/20 transition-all">
                                        <div className="space-y-0.5">
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">{job.name}</div>
                                            <div className="text-[10px] text-slate-400 font-medium">{job.last}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">{job.status}</div>
                                            <div className="h-1 w-12 bg-slate-200 dark:bg-slate-800 rounded-full mt-2 overflow-hidden">
                                                <div className="h-full bg-indigo-600" style={{ width: job.rate }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <Button variant="outline" size="sm" onClick={() => router.push('/dashboard/automation')} className="w-full text-[9px] uppercase font-bold tracking-[0.2em] border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 h-11 rounded-xl mt-4">
                                    Analyze Pipelines
                                </Button>
                            </CardContent>
                        </Card>
                    )}

                    <Card className={cn(
                        "backdrop-blur-md border-rose-100 dark:border-rose-900/30",
                        role === "Employee" ? "bg-indigo-50 dark:bg-indigo-900/10 border-indigo-100 dark:border-indigo-900/30" : "bg-rose-50 dark:bg-rose-500/5"
                    )}>
                        <CardHeader className="border-b border-black/5 dark:border-white/5 pb-4 px-6">
                            <CardTitle className={cn(
                                "font-display flex items-center gap-3 text-base font-bold",
                                role === "Employee" ? "text-indigo-600 dark:text-indigo-400" : "text-rose-600 dark:text-rose-500"
                            )}>
                                {role === "Employee" ? <UserCheck className="h-5 w-5" /> : <ShieldCheck className="h-5 w-5" />}
                                {role === "Employee" ? "Quota Feedback" : "System Verification"}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="flex items-start gap-4">
                                <div className={cn(
                                    "h-10 w-10 shrink-0 rounded-2xl flex items-center justify-center",
                                    role === "Employee" ? "bg-indigo-100 dark:bg-indigo-500/20 text-indigo-500" : "bg-rose-100 dark:bg-rose-500/20 text-rose-500"
                                )}>
                                    {role === "Employee" ? <TrendingUp className="h-6 w-6" /> : <Lock className="h-6 w-6" />}
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-tighter">
                                        {role === "Employee" ? "Quarterly Progress" : "Anomaly Detected"}
                                    </div>
                                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                        {role === "Employee"
                                            ? "You are 12% ahead of your personal revenue target. Keep up the momentum!"
                                            : "System intercepted high-frequency query from unauthorized node cluster."}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Role-Specific Data Table */}
            <Card className="border-slate-100 dark:border-white/5 bg-white dark:bg-white/5">
                <CardHeader className="flex flex-row items-center justify-between border-b border-slate-50 dark:border-white/5 p-6 bg-slate-50/50 dark:bg-white/5">
                    <div>
                        <CardTitle className="font-black uppercase tracking-widest text-slate-900 dark:text-white text-sm">
                            {role === "Admin" && "Security Audit Logs"}
                            {role === "Employee" && "My Transaction History"}
                            {(role === "CEO" || role === "CFO" || role === "Founder") && "Global Ingestion Ledger"}
                            {role === "Manager" && "Team Order Pipeline"}
                        </CardTitle>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 font-black uppercase tracking-tight">
                            {role === "Admin" ? "Verifying protocol integrity across all nodes." : `Displaying relevant records for the ${role} persona.`}
                        </p>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => router.push('/dashboard/audit')} className="text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-white dark:hover:bg-white/5 h-10 px-6 border border-slate-100 dark:border-transparent shadow-sm">Full Records</Button>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm whitespace-nowrap">
                            <thead>
                                <tr className="border-b border-slate-100 dark:border-slate-800/10 text-slate-400 dark:text-slate-500 text-[9px] uppercase font-black tracking-[0.3em] bg-slate-50/70 dark:bg-slate-900/40">
                                    <th className="px-8 py-5">ID_PROTOCOL</th>
                                    <th className="px-8 py-5">TIMESTAMP</th>
                                    <th className="px-8 py-5">ENTITY_ORIGIN</th>
                                    <th className="px-8 py-5">MAGNITUDE (৳)</th>
                                    <th className="px-8 py-5">STATUS_CODE</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/20">
                                {recent_sales.slice(0, 5).map((sale: any, i: number) => (
                                    <tr key={i} className="hover:bg-indigo-600/5 dark:hover:bg-indigo-500/5 transition-all group cursor-pointer active:scale-[0.99] origin-center" onClick={() => router.push('/dashboard/audit')}>
                                        <td className="px-8 py-5 font-mono text-[10px] text-slate-400 group-hover:text-indigo-500 transition-colors uppercase">TX_{sale.transaction_id}</td>
                                        <td className="px-8 py-5 text-xs font-black text-slate-600 dark:text-slate-300 uppercase italic tracking-tighter">{sale.transaction_date}</td>
                                        <td className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">{sale.region}</td>
                                        <td className="px-8 py-5 font-black text-slate-900 dark:text-white transition-colors text-base group-hover:scale-105 origin-left duration-300">৳{sale.net_amount.toLocaleString()}</td>
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] group-hover:animate-ping" />
                                                <span className="text-[9px] font-black text-emerald-600 dark:text-emerald-500 uppercase tracking-[0.2em] italic">Validated</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
