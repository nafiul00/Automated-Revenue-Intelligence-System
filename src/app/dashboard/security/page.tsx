"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck,
    Lock,
    Eye,
    Fingerprint,
    FileLock2,
    History,
    AlertCircle,
    Database,
    ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function SecurityManagement() {
    const policies = [
        { name: "RBAC Data Isolation (v2)", status: "Enforced", scope: "Organization", lastUpdate: "3d ago" },
        { name: "Auth_MFA_Enforced", status: "Active", scope: "User Layer", lastUpdate: "12m ago" },
        { name: "AES-256_Encryption_At_Rest", status: "Verified", scope: "SQL Cluster", lastUpdate: "Live" },
        { name: "GDPR_Compliance_Tunnels", status: "Audit Pass", scope: "Regional Ingest", lastUpdate: "Jan 2026" },
    ];

    return (
        <div className="p-4 lg:p-8 space-y-8 animate-in slide-in-from-right-4 duration-500">
            <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <Badge variant="outline" className="mb-2 bg-indigo-500/5 text-indigo-400 border-indigo-500/20">System Integrity 5.0</Badge>
                    <h1 className="text-2xl font-bold font-display tracking-tight text-white mb-1">Security & Compliance</h1>
                    <p className="text-slate-400 text-sm">Managing cryptographic bounds and role-based access controls.</p>
                </div>
                <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-xs">Security Dashboard</Button>
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">Download Certs</Button>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base font-display">
                            <ShieldCheck className="h-5 w-5 text-indigo-500" /> Security Policies
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {policies.map((p, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-lg bg-indigo-600/10 text-indigo-400 flex items-center justify-center">
                                            <Lock className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold font-mono uppercase tracking-tighter">{p.name}</div>
                                            <div className="text-[10px] text-slate-500">{p.scope} • Verified Security Logic</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-right hidden sm:block">
                                            <div className="text-[10px] text-slate-500 uppercase">Status</div>
                                            <div className="text-xs font-bold text-emerald-500">{p.status}</div>
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-slate-700 cursor-pointer hover:text-white" />
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
                                <Fingerprint className="h-5 w-5 text-purple-500" /> Identity Provider
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800">
                                <div className="text-xs font-medium">SSO Enforcement</div>
                                <Badge className="bg-emerald-500/10 text-emerald-500">100% Active</Badge>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800">
                                <div className="text-xs font-medium">JWT Token TTL</div>
                                <div className="text-xs font-bold font-mono">15m (Auto-Refresh)</div>
                            </div>
                            <Button variant="outline" size="sm" className="w-full text-xs font-bold border-white/5">Configure OAuth 2.0</Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-rose-500/5 border-rose-500/10">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertCircle className="h-5 w-5 text-rose-500" />
                                <h3 className="font-bold text-sm">Integrity Shield</h3>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed mb-4">
                                System detected and neutralized **42 localized anomalies** in the database layer during the last synchronization cycle.
                            </p>
                            <Button variant="ghost" size="sm" className="px-0 text-[10px] font-bold text-rose-500 hover:bg-transparent">VIEW INCIDENT LOGS →</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="text-base font-display">Cryptographic Audit Ledger</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3 font-mono text-[10px] text-slate-500 bg-black/30 p-4 rounded-xl border border-slate-800 h-40 overflow-y-auto">
                        <p>[21:04:01] <span className="text-indigo-400">INFO:</span> Generating new AES-256 session key for node_v4...</p>
                        <p>[21:04:05] <span className="text-indigo-400">INFO:</span> Rotating JWT signing secret for SSO_PROVIDER_01.</p>
                        <p>[21:04:10] <span className="text-emerald-400">AUDIT:</span> Data access validated for CEO_SECURE_BYPASS.</p>
                        <p>[21:04:15] <span className="text-rose-400">WARN:</span> Unexpected handshake at encrypted port 443 [192.168.1.12].</p>
                        <p>[21:04:16] <span className="text-emerald-400">AUDIT:</span> Request blocked by RBAC firewall. Security level maintained.</p>
                        <p className="animate-pulse">_</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
