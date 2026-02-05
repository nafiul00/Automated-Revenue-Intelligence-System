"use client";

import { Navigation } from "@/components/layout/Navigation";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Table, FileSpreadsheet, Download, RefreshCw, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ExcelAutomationPage() {
    const reports = [
        { name: "Monthly Revenue Reconciliation", format: "Excel (Power Query)", status: "Auto-Refreshed", lastRun: "10m ago" },
        { name: "CFO Executive Summary", format: "Excel (VBA Enabled)", status: "Scheduled", lastRun: "1h ago" },
        { name: "Tax & Compliance Ledger", format: "CSV / XLSX", status: "Manual Trigger", lastRun: "1d ago" },
    ];

    return (
        <main className="min-h-screen bg-slate-950 pt-24 text-white">
            <Navigation />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4">Delivery Layer</Badge>
                    <h1 className="text-4xl font-bold font-display mb-6 sm:text-6xl">
                        Excel <span className="gradient-text">Automation</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-400">
                        Meeting executives where they live. We use SQL-connected Excel reporting to deliver CFO-ready formats automatically.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-3xl font-bold font-display mb-6">Bridging SQL & Spreadsheets</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Many BI tools fail because they force users away from their preferred tools. ARIS treats Excel as a first-class citizen in the reporting pipeline.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Live SQL-to-Excel connections via Power Query",
                                "Automated formatting and executive styling",
                                "Email delivery of CFO-ready workbooks",
                                "Immutable audit trail for every export",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                    <CheckCircle2 className="h-5 w-5 text-indigo-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl rounded-full" />
                        <Card className="relative bg-slate-900/80 border-white/10 overflow-hidden">
                            <div className="bg-emerald-600/20 px-4 py-2 border-b border-emerald-500/20 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <FileSpreadsheet className="h-4 w-4 text-emerald-500" />
                                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Excel Reporting Engine</span>
                                </div>
                                <Badge className="bg-emerald-500/20 text-emerald-400 text-[8px]">LIVE CONNECTION</Badge>
                            </div>
                            <CardContent className="p-0">
                                <div className="divide-y divide-white/5">
                                    {reports.map((report, i) => (
                                        <div key={i} className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="h-8 w-8 rounded bg-slate-800 flex items-center justify-center">
                                                    <Table className="h-4 w-4 text-slate-500" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold">{report.name}</div>
                                                    <div className="text-[10px] text-slate-500">{report.format}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="text-right">
                                                    <div className="text-[10px] text-emerald-500 font-bold">{report.status}</div>
                                                    <div className="text-[10px] text-slate-600">{report.lastRun}</div>
                                                </div>
                                                <Download className="h-4 w-4 text-slate-600 cursor-pointer hover:text-white" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Query Hub", desc: "Write once in SQL, refresh across 100+ linked sheets.", icon: RefreshCw },
                        { title: "Visual Logic", desc: "VBA and PowerQuery scripts handle complex formatting.", icon: FileSpreadsheet },
                        { title: "Direct Deliver", desc: "Automatically email reports to board members on schedule.", icon: Send },
                    ].map((feature, i) => (
                        <div key={i} className="text-center p-8 rounded-2xl bg-slate-900 border border-white/5">
                            <div className="mx-auto h-12 w-12 rounded-xl bg-indigo-600/10 flex items-center justify-center text-indigo-500 mb-6">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-xs text-slate-500 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
