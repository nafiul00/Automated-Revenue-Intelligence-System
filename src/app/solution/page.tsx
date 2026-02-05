"use client";

import { Navigation } from "@/components/layout/Navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { XCircle, CheckCircle2, TrendingUp, Clock, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function SolutionPage() {
    const problems = [
        { title: "Manual Reporting", desc: "Teams spend 15+ hours/week manually cleaning Excel files.", icon: Clock },
        { title: "Fragmented Data", desc: "Revenue data is scattered across CRM, Stripe, and internal ERPs.", icon: XCircle },
        { title: "Delayed Insights", desc: "Executive reports are often 7-10 days out of date.", icon: AlertTriangle },
    ];

    const solutions = [
        { title: "Automated Ingestion", desc: "n8n workflows pull and normalize data every 15 minutes.", icon: CheckCircle2 },
        { title: "Centralized SQL", desc: "One single source of truth for all revenue-related metrics.", icon: TrendingUp },
        { title: "Real-time AI BI", desc: "Python-driven forecasting and anomaly detection in real-time.", icon: CheckCircle2 },
    ];

    return (
        <main className="min-h-screen bg-slate-950 pt-24">
            <Navigation />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
                <div className="text-center mb-20">
                    <Badge variant="outline" className="mb-4">The Solution</Badge>
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display mb-6">
                        From Manual To <span className="gradient-text">Automated</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-400">
                        Modern revenue teams shouldn't be trapped in spreadsheets. ARIS automates the lifecycle from ingestion to insight.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Problems */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-rose-500 font-display flex items-center gap-2">
                            Legacy Architecture (The Problem)
                        </h2>
                        {problems.map((p, i) => (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                key={i}
                            >
                                <Card className="border-rose-500/10 bg-rose-500/5">
                                    <CardContent className="pt-6 flex gap-4">
                                        <div className="h-10 w-10 shrink-0 rounded-lg bg-rose-500/20 flex items-center justify-center">
                                            <p.icon className="h-6 w-6 text-rose-500" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-white text-lg">{p.title}</CardTitle>
                                            <p className="text-slate-400 mt-1">{p.desc}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Solution */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-emerald-500 font-display flex items-center gap-2">
                            Enterprise Automated Solution
                        </h2>
                        {solutions.map((s, i) => (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                key={i}
                            >
                                <Card className="border-emerald-500/20 bg-emerald-500/5 shadow-lg shadow-emerald-500/5">
                                    <CardContent className="pt-6 flex gap-4">
                                        <div className="h-10 w-10 shrink-0 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                                            <s.icon className="h-6 w-6 text-emerald-500" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-white text-lg">{s.title}</CardTitle>
                                            <p className="text-slate-400 mt-1">{s.desc}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-32 rounded-3xl overflow-hidden relative border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10" />
                    <div className="relative px-8 py-16 text-center">
                        <h2 className="text-3xl font-bold text-white font-display mb-4">Ready to automate your revenue intelligence?</h2>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">See how we reduce manual overhead by up to 90% while improving data accuracy.</p>
                        <button className="bg-white text-slate-950 px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all">
                            Request Architecture Deep-dive
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
