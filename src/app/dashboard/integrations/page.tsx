"use client";

import { motion } from "framer-motion";
import {
    Database,
    Share2,
    Globe,
    Key,
    RefreshCw,
    Plus,
    Search,
    CheckCircle2,
    XCircle,
    Activity
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function IntegrationsHub() {
    const connectors = [
        { name: "Stripe", source: "External API", status: "Connected", sync: "Real-time", load: "Active" },
        { name: "SalesForce CRM", source: "OAuth 2.0", status: "Connected", sync: "15m", load: "Idle" },
        { name: "HubSpot", source: "API Key", status: "Error", sync: "Daily", load: "Locked" },
        { name: "AWS S3 Bucket", source: "IAM Role", status: "Connected", sync: "Hourly", load: "Active" },
        { name: "Oracle ERP", source: "JDBC", status: "Pending", sync: "Manual", load: "Draft" },
    ];

    return (
        <div className="p-4 lg:p-8 space-y-8 animate-in zoom-in-95 duration-500">
            <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold font-display tracking-tight text-white mb-1">API & Connectors</h1>
                    <p className="text-slate-400 text-sm">Centralized management for your external revenue data sources.</p>
                </div>
                <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" /> New Connector
                </Button>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2">
                    <CardHeader className="flex flex-row items-center justify-between border-b border-slate-800 pb-4 mb-4">
                        <CardTitle className="text-base font-display">Active Connectors</CardTitle>
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2 h-3 w-3 text-slate-500" />
                            <input placeholder="Search apps..." className="bg-slate-900 border border-slate-800 rounded px-8 py-1.5 text-[10px] w-48 focus:outline-none" />
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-slate-800">
                            {connectors.map((c, i) => (
                                <div key={i} className="px-6 py-4 flex items-center justify-between group hover:bg-slate-900/50">
                                    <div className="flex items-center gap-4">
                                        <div className={`h-10 w-10 shrink-0 rounded-xl bg-slate-800 flex items-center justify-center font-bold text-lg ${c.status === 'Error' ? 'text-rose-500' : 'text-indigo-500'}`}>
                                            {c.name[0]}
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold flex items-center gap-2">
                                                {c.name}
                                                {c.status === 'Connected' ? <CheckCircle2 className="h-3 w-3 text-emerald-500" /> : c.status === 'Error' ? <XCircle className="h-3 w-3 text-rose-500" /> : null}
                                            </div>
                                            <div className="text-[10px] text-slate-500 uppercase tracking-widest">{c.source}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-12 text-right">
                                        <div className="hidden sm:block">
                                            <div className="text-[10px] text-slate-500 uppercase">Frequency</div>
                                            <div className="text-xs font-mono">{c.sync}</div>
                                        </div>
                                        <div className="w-24">
                                            <Badge variant={c.status === 'Connected' ? 'success' : c.status === 'Error' ? 'error' : 'outline'}>
                                                {c.status}
                                            </Badge>
                                        </div>
                                        <RefreshCw className="h-4 w-4 text-slate-600 hover:text-white cursor-pointer transition-colors" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-base font-display">
                                <Key className="h-4 w-4 text-amber-500" /> Access Keys
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase">Production Shell</span>
                                    <Badge className="bg-emerald-500/10 text-emerald-500 text-[8px] border-emerald-500/20">Active</Badge>
                                </div>
                                <div className="bg-slate-950 p-2 rounded text-[10px] font-mono border border-slate-800 flex items-center justify-between">
                                    <span className="text-slate-400">sk_aris_prod_••••••••</span>
                                    <Share2 className="h-3 w-3 cursor-pointer hover:text-white" />
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase">n8n Webhook Secret</span>
                                    <Badge className="bg-amber-500/10 text-amber-500 text-[8px] border-amber-500/20">Rotate Needed</Badge>
                                </div>
                                <div className="bg-slate-950 p-2 rounded text-[10px] font-mono border border-slate-800 flex items-center justify-between">
                                    <span className="text-slate-400">wh_aris_•••••••••</span>
                                    <RefreshCw className="h-3 w-3 cursor-pointer hover:text-white" />
                                </div>
                            </div>
                            <Button variant="outline" size="sm" className="w-full text-xs font-bold bg-slate-900">Manage API Policy</Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-indigo-600/5 border-indigo-500/10">
                        <CardContent className="pt-6">
                            <div className="h-10 w-10 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-400 mb-4">
                                <Activity className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold mb-2">Ingestion Health</h3>
                            <p className="text-xs text-slate-500 leading-relaxed mb-4">
                                Global ingestion success is currently at **99.9%** across all production tunnels. No packet loss detected in the last 24h.
                            </p>
                            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 w-[99.9%]" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
