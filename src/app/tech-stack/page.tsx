"use client";

import { Navigation } from "@/components/layout/Navigation";
import { Badge } from "@/components/ui/Badge";
import { Server, Database, Code2, Globe, ShieldCheck, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function TechStackPage() {
    const stacks = [
        {
            category: "Automation & Workflow",
            tools: [
                { name: "n8n", desc: "Low-code workflow automation", icon: Server },
                { name: "Webhooks", desc: "Real-time event triggers", icon: Globe },
                { name: "Cron", desc: "Scheduled data syncs", icon: Server },
            ],
        },
        {
            category: "Data & Processing",
            tools: [
                { name: "PostgreSQL", desc: "Primary relational storage", icon: Database },
                { name: "Python", desc: "Pandas/NumPy for analytics", icon: Cpu },
                { name: "SQL", desc: "Metric aggregation layer", icon: Code2 },
            ],
        },
        {
            category: "Frontend & BI",
            tools: [
                { name: "Next.js 15", desc: "React framework for dashboards", icon: Globe },
                { name: "Tailwind CSS", desc: "Utility-first design system", icon: Globe },
                { name: "Framer Motion", desc: "High-fidelity interactions", icon: Globe },
            ],
        },
        {
            category: "Security",
            tools: [
                { name: "JWT", desc: "Secure session management", icon: ShieldCheck },
                { name: "OAuth 2.0", desc: "Social & SSO authentication", icon: ShieldCheck },
                { name: "RBAC", desc: "Role-based access logic", icon: ShieldCheck },
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-slate-950 pt-24 text-white">
            <Navigation />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
                <div className="text-center mb-20">
                    <Badge variant="outline" className="mb-4">The Engine</Badge>
                    <h1 className="text-4xl font-bold font-display mb-6 sm:text-6xl">
                        Modern <span className="gradient-text">Tech Stack</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-400">
                        A carefully curated selection of enterprise tools for speed, reliability, and security.
                    </p>
                </div>

                <div className="space-y-20">
                    {stacks.map((section, idx) => (
                        <div key={idx}>
                            <h2 className="text-2xl font-bold font-display mb-8 text-indigo-400 border-b border-indigo-500/20 pb-4">
                                {section.category}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.tools.map((tool, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="p-6 rounded-2xl bg-slate-900 border border-white/5 flex items-start gap-4"
                                    >
                                        <div className="p-3 rounded-xl bg-slate-800 text-indigo-400">
                                            <tool.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-white mb-1">{tool.name}</div>
                                            <div className="text-sm text-slate-500 leading-relaxed">{tool.desc}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-32 p-12 rounded-3xl bg-slate-900 border border-white/5 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold font-display mb-4">Why this stack?</h2>
                        <p className="text-slate-400 leading-relaxed">
                            By combining the agility of <strong>n8n</strong> with the power of <strong>Python</strong> and the scalability of <strong>PostgreSQL</strong>, we bridge the gap between "fast but fragile" and "solid but slow".
                            <br /><br />
                            Our choice of <strong>Next.js</strong> ensures executive dashboards feel as fast as desktop apps, even when processing millions of revenue data points.
                        </p>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5 text-center">
                            <div className="text-2xl font-bold text-indigo-400 mb-1">0.2s</div>
                            <div className="text-[10px] text-slate-500 uppercase tracking-widest">Dashboard Latency</div>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5 text-center">
                            <div className="text-2xl font-bold text-indigo-400 mb-1">99.9%</div>
                            <div className="text-[10px] text-slate-500 uppercase tracking-widest">Ingestion Uptime</div>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5 text-center">
                            <div className="text-2xl font-bold text-indigo-400 mb-1">ISO</div>
                            <div className="text-[10px] text-slate-500 uppercase tracking-widest">Standard Compliance</div>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5 text-center">
                            <div className="text-2xl font-bold text-indigo-400 mb-1">100%</div>
                            <div className="text-[10px] text-slate-500 uppercase tracking-widest">Automation Coverage</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
