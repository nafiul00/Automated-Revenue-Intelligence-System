"use client";

import { Navigation } from "@/components/layout/Navigation";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Webhook, Key, RefreshCw, Activity, Terminal, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function APIHubPage() {
    const integrations = [
        { name: "Stripe", type: "Webhook", status: "Healthy", latency: "42ms" },
        { name: "SalesForce", type: "OAuth 2.0", status: "Healthy", latency: "115ms" },
        { name: "HubSpot", type: "API Key", status: "Healthy", latency: "89ms" },
        { name: "AWS S3", type: "IAM", status: "Healthy", latency: "24ms" },
    ];

    return (
        <main className="min-h-screen bg-slate-950 pt-24 text-white">
            <Navigation />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div>
                        <Badge variant="outline" className="mb-4">Developer Hub</Badge>
                        <h1 className="text-4xl font-bold font-display mb-2">API & <span className="gradient-text">Integration</span></h1>
                        <p className="text-slate-400">Manage data flows, webhooks, and secure authentication keys.</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-slate-800 border border-white/10 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                            <Terminal className="h-4 w-4" /> View API Docs
                        </button>
                        <button className="bg-indigo-600 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                            <Webhook className="h-4 w-4" /> Create Webhook
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Activity className="h-5 w-5 text-indigo-500" /> Active Ingestions
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {integrations.map((app, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-white/5 hover:bg-slate-800/50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500 font-bold">
                                                {app.name[0]}
                                            </div>
                                            <div>
                                                <div className="font-bold">{app.name}</div>
                                                <div className="text-[10px] text-slate-500 uppercase tracking-widest">{app.type}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-8">
                                            <div className="text-right hidden sm:block">
                                                <div className="text-[10px] text-slate-500 uppercase">Avg Latency</div>
                                                <div className="text-sm font-mono">{app.latency}</div>
                                            </div>
                                            <Badge variant="success" className="bg-emerald-500/10 text-emerald-500">{app.status}</Badge>
                                            <RefreshCw className="h-4 w-4 text-slate-600 cursor-pointer hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-indigo-500" /> Security Keys
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="p-4 rounded-xl bg-slate-800/30 border border-white/5">
                                    <div className="text-[10px] text-slate-500 uppercase mb-2">Production API Key</div>
                                    <div className="flex items-center justify-between font-mono text-xs bg-slate-950 p-2 rounded border border-white/5 text-slate-400">
                                        <span>sk_live_••••••••••••••••</span>
                                        <Key className="h-3 w-3 cursor-pointer hover:text-white" />
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-800/30 border border-white/5">
                                    <div className="text-[10px] text-slate-500 uppercase mb-2">Webhook Secret</div>
                                    <div className="flex items-center justify-between font-mono text-xs bg-slate-950 p-2 rounded border border-white/5 text-slate-400">
                                        <span>wh_sec_••••••••••••••••</span>
                                        <Key className="h-3 w-3 cursor-pointer hover:text-white" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-indigo-600/5 border-indigo-500/20">
                            <CardContent className="pt-6">
                                <h4 className="font-bold mb-2">Need a Custom Sink?</h4>
                                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                                    Our API Hub supports dynamic data normalization. Define your schema once and we'll handle the ETL logic automatically.
                                </p>
                                <button className="text-xs font-bold text-indigo-400 hover:text-indigo-300">Read Integration Guide →</button>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-slate-900 border border-white/5 font-mono text-[10px] text-slate-500">
                    <div className="flex items-center gap-2 mb-2 text-indigo-500">
                        <Terminal className="h-3 w-3" /> REALTIME_INSPECTOR v12.4
                    </div>
                    <div className="space-y-1">
                        <div>[21:12:45] GET /v1/revenue/daily - 200 OK (45ms)</div>
                        <div>[21:12:46] POST /v1/webhooks/stripe - 200 OK (12ms) [Event: invoice.paid]</div>
                        <div>[21:12:47] SYNC_JOB_STARTED - SalesForce [Priority: High]</div>
                        <div className="animate-pulse">[21:12:48] Listening for incoming events...</div>
                    </div>
                </div>
            </div>
        </main>
    );
}
