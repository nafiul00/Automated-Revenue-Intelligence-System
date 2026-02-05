"use client";

import { Navigation } from "@/components/layout/Navigation";
import { Badge } from "@/components/ui/Badge";
import { Shield, Lock, Fingerprint, Eye, ShieldCheck, History } from "lucide-react";
import { motion } from "framer-motion";

export default function SecurityPage() {
    const securityFeatures = [
        {
            title: "JWT Authentication",
            desc: "Secure, stateless authorization using JSON Web Tokens with encrypted payloads.",
            icon: Lock,
        },
        {
            title: "OAuth 2.0 Integration",
            desc: "Enterprise-grade identity providers (Google, Apple, Microsoft) for seamless SSO.",
            icon: Fingerprint,
        },
        {
            title: "Role-Based Access (RBAC)",
            desc: "Granular permissions system ensuring users only access authorized data layers.",
            icon: ShieldCheck,
        },
        {
            title: "Complete Audit Logs",
            desc: "Every data access and system change is logged with immutable timestamps.",
            icon: History,
        },
        {
            title: "Data Encryption",
            desc: "AES-256 encryption at rest and TLS 1.3 for all data in transit.",
            icon: Shield,
        },
        {
            title: "Real-time Monitoring",
            desc: "Automated anomaly detection for suspicious login patterns or data exports.",
            icon: Eye,
        },
    ];

    return (
        <main className="min-h-screen bg-slate-950 pt-24 text-white">
            <Navigation />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
                <div className="text-center mb-20">
                    <Badge variant="outline" className="mb-4">Enterprise Grade</Badge>
                    <h1 className="text-4xl font-bold font-display mb-6 sm:text-6xl">
                        Security & <span className="gradient-text">Trust</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-400">
                        Revenue data is your company's most sensitive asset. We treat it with institutional-grade security protocols.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {securityFeatures.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-indigo-500/30 transition-all hover:bg-slate-800/50"
                        >
                            <div className="p-3 rounded-2xl bg-slate-800 border border-white/5 w-fit mb-6 group-hover:bg-indigo-600/20 group-hover:text-indigo-400 transition-colors">
                                <f.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold font-display mb-3">{f.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 p-12 rounded-3xl bg-indigo-600/5 border border-indigo-500/20 text-center">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 mb-6">
                        <ShieldCheck className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold font-display mb-4">Compliance Ready</h2>
                    <p className="max-w-xl mx-auto text-slate-400 mb-8">
                        Our architecture is designed to support SOC2, GDPR, and HIPAA compliance requirements through rigorous data isolation and auditability.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Badge variant="outline" className="px-4 py-1">SOC2 Type II</Badge>
                        <Badge variant="outline" className="px-4 py-1">GDPR Compliant</Badge>
                        <Badge variant="outline" className="px-4 py-1">ISO 27001</Badge>
                    </div>
                </div>
            </div>
        </main>
    );
}
