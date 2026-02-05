"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
    FileText,
    Download,
    Search,
    Filter,
    Calendar,
    FileSpreadsheet,
    FileJson,
    CheckCircle2,
    Clock,
    Plus,
    Database,
    Shield,
    Hash,
    Lock
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function AuditReports() {
    const reports = useMemo(() => [
        { title: "Monthly_Revenue_Summary_Jan2026", type: "PDF", owner: "CFO_System", date: "2026-02-01", size: "2.4MB", hash: "8a2f...1e02" },
        { title: "Tax_Compliance_Batch_772", type: "XLSX", owner: "Automation_Kernel", date: "2026-01-28", size: "14.1MB", hash: "9c1b...d931" },
        { title: "XYZ_Stripe_Reconciliation_Daily", type: "CSV", owner: "Ingestion_Bot", date: "2026-02-04", size: "840KB", hash: "4f2a...c021" },
        { title: "Annual_Forecast_Model_v3", type: "JSON", owner: "Executive_Team", date: "2026-01-15", size: "1.2MB", hash: "3e01...b842" },
        { title: "Risk_Assessment_Incident_v9", type: "PDF", owner: "Security_Audit", date: "2026-02-03", size: "4.8MB", hash: "7d91...a209" },
    ], []);

    const stats = useMemo(() => [
        { label: "Reports Generated", val: "152", sub: "LAST 30 CYCLES", icon: FileText, color: "indigo" },
        { label: "Storage Used", val: "1.2 GB", sub: "PLATFORM ARCHIVE", icon: Database, color: "purple" },
        { label: "Audit Integrity", val: "100%", sub: "BLOCKCHAIN HASH OK", icon: CheckCircle2, color: "emerald" },
        { label: "Active Jobs", val: "3 TASKS", sub: "PROCESSING_NODE_09", icon: Clock, color: "amber" },
    ], []);

    return (
        <div className="p-4 lg:p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-3xl font-black font-display tracking-tight text-slate-900 dark:text-white leading-none mb-2 uppercase italic">Audit Ledger & Security Reports</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-bold opacity-80 uppercase tracking-tight">Automated reporting history and verifiable financial audit trails for XYZ Company LTD.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" className="bg-white dark:bg-slate-900 border-slate-200 dark:border-white/5 h-11 px-6 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-600 dark:text-slate-300 shadow-sm">
                        <Calendar className="h-4 w-4 mr-2" /> Schedule Cycle
                    </Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-600/20 h-11 px-6 rounded-2xl font-black text-[10px] uppercase tracking-widest text-white active:scale-95 transition-all">
                        <Plus className="h-4 w-4 mr-2 font-black" /> Generate Protocol Report
                    </Button>
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none group hover:border-indigo-500/30 transition-all cursor-default overflow-hidden relative bg-white dark:bg-white/5">
                            <div className={cn("absolute bottom-0 right-0 h-16 w-16 opacity-[0.03] group-hover:scale-150 transition-transform", `text-${s.color}-500`)}>
                                <s.icon className="h-full w-full" />
                            </div>
                            <CardContent className="p-6">
                                <div className={cn(
                                    "h-12 w-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
                                    `bg-${s.color}-500/10 text-${s.color}-500`
                                )}>
                                    <s.icon className="h-6 w-6" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{s.label}</p>
                                    <div className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">{s.val}</div>
                                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1 opacity-80">{s.sub}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <Card className="border-slate-100 dark:border-white/5 shadow-sm overflow-hidden bg-white dark:bg-white/5">
                <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 dark:border-white/5 p-8 gap-6 bg-slate-50/50 dark:bg-white/5">
                    <div>
                        <CardTitle className="text-2xl font-black font-display text-slate-900 dark:text-white leading-none uppercase italic tracking-tight">Document Compliance Repository</CardTitle>
                        <p className="text-[10px] text-slate-400 mt-2 font-bold uppercase tracking-[0.2em] italic opacity-80 flex items-center gap-2">
                            <Lock className="h-3 w-3 text-indigo-500" /> Verifiable hash checks active on all system-generated files.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <input
                                placeholder="FILTER LEDGER ID..."
                                className="bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl pl-12 pr-6 py-4 text-[10px] font-black tracking-widest w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all placeholder:text-slate-400 uppercase"
                            />
                        </div>
                        <Button variant="outline" className="h-14 w-14 rounded-2xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"><Filter className="h-5 w-5 text-slate-400" /></Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="divide-y divide-slate-100 dark:divide-slate-800/30">
                        {reports.map((report, i) => (
                            <div key={i} className="px-8 py-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-indigo-500/5 transition-all group cursor-pointer border-l-4 border-transparent hover:border-indigo-600 active:scale-[0.99] origin-center">
                                <div className="flex items-center gap-6">
                                    <div className="h-14 w-14 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all shadow-sm group-hover:scale-105">
                                        {report.type === 'XLSX' ? <FileSpreadsheet className="h-7 w-7" /> : report.type === 'JSON' ? <FileJson className="h-7 w-7" /> : <FileText className="h-7 w-7" />}
                                    </div>
                                    <div>
                                        <div className="text-base font-black text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors uppercase tracking-tight mb-1">{report.title}</div>
                                        <div className="flex items-center gap-4">
                                            <Badge variant="indigo" className="text-[9px] h-5 py-0 px-2 font-black italic shadow-inner">{report.type}</Badge>
                                            <div className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{report.owner} • {report.size}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-16 text-right">
                                    <div className="hidden lg:block">
                                        <div className="text-[9px] text-slate-400 uppercase tracking-[0.2em] font-black mb-1.5 opacity-60 flex items-center gap-2 justify-end">
                                            <Hash className="h-3 w-3" /> SECURITY_HASH
                                        </div>
                                        <div className="text-[10px] font-mono font-bold text-indigo-600/60 dark:text-indigo-400/60 tracking-wider">SHA-256_{report.hash}</div>
                                    </div>
                                    <div className="hidden sm:block">
                                        <div className="text-[9px] text-slate-400 uppercase tracking-[0.2em] font-black mb-1.5 opacity-60">SIGNED_DATE</div>
                                        <div className="text-xs font-black text-slate-800 dark:text-slate-300 uppercase">{report.date}</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 rounded-2xl border border-transparent hover:border-slate-200 dark:hover:border-slate-800 hover:bg-white dark:hover:bg-slate-900 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all shadow-sm active:scale-90">
                                            <Download className="h-6 w-6 group-hover:scale-110 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
                <div className="p-8 border-t border-slate-100 dark:border-white/5 text-center bg-slate-50/20 dark:bg-slate-900/10">
                    <Button variant="ghost" className="text-slate-400 hover:text-indigo-600 dark:hover:text-white text-[11px] font-black uppercase tracking-[0.5em] transition-all py-8 w-full active:scale-95 group">
                        <span className="group-hover:tracking-[0.8em] transition-all duration-700">INITIALIZE FULL ARCHIVE SEQUENCER (2025_CYCLE)</span>
                    </Button>
                </div>
            </Card>
        </div>
    );
}
