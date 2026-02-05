"use client";

import { Navigation } from "@/components/layout/Navigation";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Workflow, Zap, Database, Shield, Bell, ArrowRight, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AutomationPage() {
    const workflows = [
        { name: "Daily Revenue Ingestion", triggers: "Cron (00:00)", nodes: 12, status: "Active" },
        { name: "Real-time Stripe Sync", triggers: "Webhook", nodes: 8, status: "Active" },
        { name: "Executive Report Generator", triggers: "Schedule", nodes: 15, status: "Active" },
        { name: "Anomaly Alert System", triggers: "Event", nodes: 6, status: "Testing" },
    ];

    return (
        <main className="min-h-screen bg-slate-950 pt-24 text-white">
            <Navigation />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
                <div className="text-center mb-20">
                    <Badge variant="outline" className="mb-4 text-purple-400 border-purple-500/20">The Automation Engine</Badge>
                    <h1 className="text-4xl font-bold font-display mb-6 sm:text-6xl">
                        n8n <span className="text-purple-500">Orchestration</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-400">
                        ARIS is powered by a sophisticated n8n workflow engine that handles complex data flows with enterprise reliability.
                    </p>
                </div>

                {/* Visual Workflow Simulation */}
                <Card className="mb-16 border-purple-500/10 bg-purple-500/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4">
                        <Badge className="bg-purple-600 text-white">LIVE_WORKFLOW_VIEWER</Badge>
                    </div>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Workflow className="h-5 w-5 text-purple-500" /> Subscription Renewal Logic
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="h-80 relative flex items-center justify-center gap-4 md:gap-12 overflow-hidden px-4 md:px-0">
                        {/* Nodes and Lines simulation */}
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 z-10 w-full md:w-auto">
                            <div className="p-4 rounded-xl bg-slate-900 border border-white/10 text-center w-32 shrink-0">
                                <Database className="h-6 w-6 mx-auto mb-2 text-blue-400" />
                                <div className="text-[10px] font-bold">Stripe Hook</div>
                            </div>
                            <div className="hidden md:block h-px w-12 bg-purple-500/50 relative">
                                <div className="absolute right-0 -top-1 border-t-4 border-l-4 border-transparent border-l-purple-500" />
                            </div>
                            <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/30 text-center w-32 shrink-0 animate-pulse shadow-lg shadow-purple-500/10">
                                <Zap className="h-6 w-6 mx-auto mb-2 text-purple-500" />
                                <div className="text-[10px] font-bold">Normalize</div>
                            </div>
                            <div className="hidden md:block h-px w-12 bg-purple-500/50 relative">
                                <div className="absolute right-0 -top-1 border-t-4 border-l-4 border-transparent border-l-purple-500" />
                            </div>
                            <div className="p-4 rounded-xl bg-slate-900 border border-white/10 text-center w-32 shrink-0">
                                <Shield className="h-6 w-6 mx-auto mb-2 text-emerald-400" />
                                <div className="text-[10px] font-bold">RBAC Check</div>
                            </div>
                            <div className="hidden md:block h-px w-12 bg-purple-500/50 relative">
                                <div className="absolute right-0 -top-1 border-t-4 border-l-4 border-transparent border-l-purple-500" />
                            </div>
                            <div className="p-4 rounded-xl bg-indigo-600 shadow-xl shadow-indigo-500/20 text-center w-32 shrink-0">
                                <Bell className="h-6 w-6 mx-auto mb-2 text-white" />
                                <div className="text-[10px] font-bold text-white">Alert Exec</div>
                            </div>
                        </div>
                        {/* Background Graph Lines */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                        </div>
                    </CardContent>
                    <div className="absolute bottom-4 left-6 text-[10px] text-slate-600 font-mono tracking-widest uppercase py-2">
                        Status: <span className="text-emerald-500">Executing...</span> | Step: Aggregate_Revenue_Metrics
                    </div>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-display">Workflow Catalog</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {workflows.map((wf, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-white/5">
                                        <div className="flex items-center gap-4">
                                            <div className="h-8 w-8 rounded-lg bg-purple-600/10 flex items-center justify-center">
                                                <Share2 className="h-4 w-4 text-purple-500" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold">{wf.name}</div>
                                                <div className="text-[10px] text-slate-500 uppercase">{wf.triggers} • {wf.nodes} Nodes</div>
                                            </div>
                                        </div>
                                        <Badge variant={wf.status === "Active" ? "success" : "warning"}>{wf.status}</Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="space-y-8">
                        <div className="p-8 rounded-3xl bg-indigo-600/5 border border-indigo-500/20">
                            <h3 className="text-xl font-bold font-display mb-4">Error Resilience</h3>
                            <p className="text-sm text-slate-400 leading-relaxed mb-6">
                                Our workflows implement "Continue on Fail" and "Retry" logic at every node. If an API is down, n8n queues the event and retries with exponential backoff.
                            </p>
                            <div className="flex gap-4">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold">100%</span>
                                    <span className="text-[10px] text-slate-500 uppercase">Detection Rate</span>
                                </div>
                                <div className="w-px h-10 bg-white/10" />
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold">0ms</span>
                                    <span className="text-[10px] text-slate-500 uppercase">Data Loss</span>
                                </div>
                            </div>
                        </div>

                        <Card>
                            <CardContent className="pt-6">
                                <h3 className="font-bold mb-2">Technical Insight</h3>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    n8n acts as the "Glue" between our PostgreSQL database and Python analytics engine. It handles the scheduling, the webhooks, and the initial data normalization before passing clean JSON to our analytics scripts.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    );
}
