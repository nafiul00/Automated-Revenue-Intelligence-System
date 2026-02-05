"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
    BarChart3,
    TrendingUp,
    Map,
    Layers,
    PieChart as PieChartIcon,
    ArrowRight,
    Filter,
    Download,
    Calendar,
    Target,
    Zap,
    Cpu
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import data from "@/lib/data.json";
import { RegionPieChart, CategoryBarChart } from "@/components/dashboard/Charts";
import { cn } from "@/lib/utils";

export default function RevenueAnalytics() {
    const { regions, categories } = data;

    // Numerical optimization for rendering
    const stats = useMemo(() => [
        { label: "Churn Vulnerability", val: "2.4%", desc: "Python Anomaly Engine predicts low churn risk across enterprise accounts.", color: "indigo", action: "Review Model", icon: Target },
        { label: "Expansion ROI", val: "12.8x", desc: "Current growth pipeline efficiency for existing Mid-Market segments.", color: "purple", action: "Pipeline", icon: Zap },
        { label: "Revenue Runway", val: "18 Mo", desc: "Financial projection based on current burn and retention rates in BDT.", color: "emerald", action: "Forecast", icon: Cpu },
    ], []);

    return (
        <div className="p-4 lg:p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-3xl font-black font-display tracking-tight text-slate-900 dark:text-white leading-none mb-2 uppercase italic">Revenue Intelligence Stream</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-bold opacity-80 uppercase tracking-tight">Granular breakdown of multi-channel revenue in BDT for XYZ Company LTD.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" className="bg-white dark:bg-slate-900 border-slate-200 dark:border-white/5 h-11 px-6 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-600 dark:text-slate-300 shadow-sm active:scale-95 transition-all">
                        <Calendar className="h-4 w-4 mr-2" /> Q1_2026_ACTIVE
                    </Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white h-11 px-6 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-indigo-600/20 active:scale-95 transition-all group">
                        <Download className="h-4 w-4 mr-2 group-hover:translate-y-0.5 transition-transform" /> Export Protocol Dataset
                    </Button>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Regional Performance */}
                <Card className="lg:col-span-2 border-slate-200 dark:border-white/5 shadow-sm overflow-hidden">
                    <CardHeader className="border-b border-slate-100 dark:border-white/5 pb-4 px-6 flex flex-row items-center justify-between bg-slate-50/50 dark:bg-white/5">
                        <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white text-sm font-black uppercase tracking-widest">
                            <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                                <Map className="h-5 w-5" />
                            </div>
                            Regional Output (৳)
                        </CardTitle>
                        <Badge variant="indigo" className="italic px-3 py-1 font-bold">Node_Active</Badge>
                    </CardHeader>
                    <CardContent className="pt-8 px-6 pb-8">
                        <div className="h-80 w-full pt-4">
                            <CategoryBarChart data={regions} />
                        </div>
                    </CardContent>
                </Card>

                {/* Product Distribution */}
                <Card className="border-slate-200 dark:border-white/5 shadow-sm overflow-hidden">
                    <CardHeader className="border-b border-slate-100 dark:border-white/5 pb-4 px-6 flex flex-row items-center justify-between bg-slate-50/50 dark:bg-white/5">
                        <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white text-sm font-black uppercase tracking-widest">
                            <div className="h-10 w-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                                <PieChartIcon className="h-5 w-5" />
                            </div>
                            Category Distribution
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-8 px-6 pb-8">
                        <div className="h-80 w-full">
                            <RegionPieChart data={categories} />
                        </div>
                        <div className="mt-4 p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-500/5 border border-indigo-100 dark:border-indigo-500/10">
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest text-center">Top Sector: Technology (৳4.2M)</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Advanced Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className={cn(
                            "bg-white dark:bg-slate-950/40 border-2 transition-all hover:scale-[1.02] overflow-hidden relative",
                            stat.color === "indigo" && "border-indigo-500/10 dark:border-white/5 shadow-sm hover:shadow-indigo-500/5",
                            stat.color === "purple" && "border-purple-500/10 dark:border-white/5 shadow-sm hover:shadow-purple-500/5",
                            stat.color === "emerald" && "border-emerald-500/10 dark:border-white/5 shadow-sm hover:shadow-emerald-500/5"
                        )}>
                            <div className={cn(
                                "absolute top-0 right-0 h-24 w-24 blur-[60px] rounded-full -mr-12 -mt-12",
                                stat.color === "indigo" && "bg-indigo-500/20",
                                stat.color === "purple" && "bg-purple-500/20",
                                stat.color === "emerald" && "bg-emerald-500/20"
                            )} />
                            <CardHeader className="pb-2 pt-8 px-8 relative z-10">
                                <CardTitle className={cn("text-[10px] uppercase font-black tracking-[0.3em] flex items-center gap-2", `text-${stat.color}-600 dark:text-${stat.color}-500`)}>
                                    <stat.icon className="h-4 w-4" /> {stat.label}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="px-8 pb-8 pt-2 relative z-10">
                                <div className="text-4xl font-black mb-3 text-slate-900 dark:text-white tracking-tighter">{stat.val}</div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-8 leading-relaxed font-bold uppercase tracking-tighter opacity-80">{stat.desc}</p>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className={cn(
                                        "w-full text-[10px] font-black uppercase tracking-[0.2em] rounded-[2rem] transition-all h-14 bg-white dark:bg-slate-900/50 active:scale-95 group",
                                        `border-${stat.color}-500/30 text-${stat.color}-600 dark:text-${stat.color}-400 hover:bg-${stat.color}-600/10 shadow-sm`
                                    )}
                                >
                                    {stat.action} Kernel <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
