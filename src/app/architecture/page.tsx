"use client";

import { Navigation } from "@/components/layout/Navigation";
import { Badge } from "@/components/ui/Badge";
import { Database, FileJson, Cpu, LayoutDashboard, Share2, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function ArchitecturePage() {
    const levels = [
        {
            name: "Data Source Layer",
            icon: Database,
            items: ["REST APIs", "SQL Databases", "Excel/CSV Ingestion", "Webhook Events"],
            color: "blue",
        },
        {
            name: "Automation Layer (n8n)",
            icon: Share2,
            items: ["Workflow Logic", "Data Normalization", "Error Handling", "Retry Logic"],
            color: "purple",
        },
        {
            name: "Processing Layer (Python/SQL)",
            icon: Cpu,
            items: ["Complex Aggregations", "Pandas Analytics", "Growth Forecasting", "Risk Scoring"],
            color: "indigo",
        },
        {
            name: "Intelligence Layer (BI)",
            icon: LayoutDashboard,
            items: ["Executive Dashboards", "Role-Based Access", "Automated Alerts", "Audit Logs"],
            color: "emerald",
        },
    ];

    return (
        <main className="min-h-screen bg-slate-950 pt-24 text-white">
            <Navigation />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
                <div className="text-center mb-20">
                    <Badge variant="outline" className="mb-4">System Design</Badge>
                    <h1 className="text-4xl font-bold font-display mb-6 sm:text-6xl">
                        Enterprise <span className="gradient-text">Architecture</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-400">
                        A layered approach designed for scalability, security, and real-time responsiveness.
                    </p>
                </div>

                {/* Stack Diagram */}
                <div className="flex flex-col gap-12 max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 hidden md:block" />

                    {levels.map((level, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                        >
                            <div className={i % 2 === 0 ? "md:order-1" : "md:order-2 md:text-right flex md:flex-col md:items-end"}>
                                <div className={`p-4 rounded-2xl bg-slate-900 border border-white/10 w-fit mb-4 ${i % 2 !== 0 ? "md:mb-4" : ""}`}>
                                    <level.icon className="h-8 w-8 text-indigo-400" />
                                </div>
                                <h3 className="text-2xl font-bold font-display mb-2">{level.name}</h3>
                                <div className="flex flex-wrap gap-2 mt-4 justify-start md:justify-end">
                                    {level.items.map((item, idx) => (
                                        <Badge key={idx} variant="outline" className="bg-slate-800/50">{item}</Badge>
                                    ))}
                                </div>
                            </div>

                            <div className={i % 2 === 0 ? "md:order-2" : "md:order-1"}>
                                <div className="h-64 rounded-3xl bg-indigo-500/5 border border-white/5 flex items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                                    <Layers className="h-24 w-24 text-indigo-500/10 transition-transform group-hover:scale-110" />
                                    <div className="absolute bottom-4 left-4 text-[10px] font-mono text-slate-600">LAYER_{i + 1}_METADATA.LOG</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 p-12 rounded-3xl bg-slate-900/50 border border-white/5">
                    <h3 className="text-2xl font-bold mb-8 font-display">Technology Deep-Dive</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-indigo-400 font-bold mb-2">n8n</div>
                            <p className="text-xs text-slate-500 leading-relaxed">Handles ingestion logic, webhook orchestration, and cross-service sync.</p>
                        </div>
                        <div>
                            <div className="text-indigo-400 font-bold mb-2">PostgreSQL</div>
                            <p className="text-xs text-slate-500 leading-relaxed">System-of-record for normalized revenue data and audit logs.</p>
                        </div>
                        <div>
                            <div className="text-indigo-400 font-bold mb-2">Python</div>
                            <p className="text-xs text-slate-500 leading-relaxed">Pandas/NumPy engines for cohort analysis and churn prediction.</p>
                        </div>
                        <div>
                            <div className="text-indigo-400 font-bold mb-2">Next.js</div>
                            <p className="text-xs text-slate-500 leading-relaxed">High-performance frontend with secure RPC and dashboard rendering.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
