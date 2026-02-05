"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Shield, Zap } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <div className="relative isolate overflow-hidden pt-14 text-white">
            {/* Background Decor */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-500 to-purple-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex">
                            <div className="relative flex items-center gap-x-1.5 rounded-full px-3 py-1 text-sm leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20 hover:ring-indigo-500/30">
                                <span className="flex h-1 w-1 rounded-full bg-indigo-500" />
                                V2.0 Now Live: Advanced Forecasting Engines
                                <ArrowRight className="h-4 w-4" />
                            </div>
                        </div>
                        <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl font-display leading-[1.1]">
                            Automate Your <span className="gradient-text">Revenue Intelligence</span> Lifecycle
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-400 max-w-xl">
                            I design secure, automated revenue intelligence systems that replace manual reporting with real-time business insight. Transforming raw data into executive decisions.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Button size="lg" asChild>
                                <Link href="/login">Launch Command Center</Link>
                            </Button>
                            <Link href="/architecture" className="text-sm font-semibold leading-6 text-white flex items-center">
                                System Architecture <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3"
                    >
                        {[
                            { icon: Zap, title: "90% Reduction", desc: "In manual reporting effort" },
                            { icon: Shield, title: "Secure-First", desc: "JWT, OAuth 2.0 & RBAC" },
                            { icon: BarChart3, title: "Real-time", desc: "Executive KPI visibility" },
                        ].map((feature, i) => (
                            <div key={i} className="flex flex-col gap-y-2 border-l border-white/10 pl-4">
                                <feature.icon className="h-6 w-6 text-indigo-500" />
                                <div className="text-sm font-bold text-white">{feature.title}</div>
                                <div className="text-xs text-slate-500">{feature.desc}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow"
                >
                    <div className="relative">
                        <div className="relative rounded-2xl border border-white/10 bg-slate-900/50 p-4 shadow-2xl backdrop-blur-sm">
                            <div className="flex items-center gap-x-2 border-b border-white/5 pb-4 mb-4">
                                <div className="flex gap-x-1.5">
                                    <div className="h-3 w-3 rounded-full bg-rose-500/20 border border-rose-500" />
                                    <div className="h-3 w-3 rounded-full bg-amber-500/20 border border-amber-500" />
                                    <div className="h-3 w-3 rounded-full bg-emerald-500/20 border border-emerald-500" />
                                </div>
                                <div className="text-[10px] text-slate-500 font-mono flex-1 text-center">ARIS_DASHBOARD_PREVIEW_V2.JSON</div>
                            </div>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-32 rounded-lg bg-slate-800/50 border border-white/5 animate-pulse" />
                                    <div className="h-32 rounded-lg bg-slate-800/50 border border-white/5" />
                                </div>
                                <div className="h-48 rounded-lg bg-indigo-500/5 border border-indigo-500/20 flex items-center justify-center">
                                    <BarChart3 className="h-12 w-12 text-indigo-500/20" />
                                </div>
                            </div>
                        </div>
                        {/* Floating Element */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -right-12 top-1/4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 backdrop-blur-md shadow-xl"
                        >
                            <div className="text-xs font-bold text-emerald-400">ANOMALY DETECTED</div>
                            <div className="text-lg font-bold text-white">+$42.5k</div>
                            <div className="text-[10px] text-emerald-500/70">Subscription Expansion</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
