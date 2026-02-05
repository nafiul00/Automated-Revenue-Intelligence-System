"use client";

import { useState } from "react";
import {
    Bell,
    X,
    Info,
    AlertTriangle,
    CheckCircle2,
    Clock,
    ArrowRight,
    Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function NotificationPopover() {
    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState([
        { id: 1, type: "alert", title: "Anomaly Detected", msg: "Region APAC node reporting unusual ingestion latency.", time: "2m ago", read: false },
        { id: 2, type: "success", title: "Sync Complete", msg: "Monthly Stripe reconciliation finalized.", time: "1h ago", read: false },
        { id: 3, type: "info", title: "New Feature", msg: "Python Analytics Kernel v2.4 is now live.", time: "5h ago", read: true },
        { id: 4, type: "worker", title: "Worker Scaling", msg: "Auto-scaled to 12 workers for heavy load.", time: "8h ago", read: true },
    ]);

    const unreadCount = notifications.filter(n => !n.read).length;

    const markAllRead = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 text-slate-400 hover:text-white transition-colors"
            >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                    <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 bg-rose-500 rounded-full border-2 border-[#020617]" />
                )}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute right-0 mt-4 w-96 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
                        >
                            <div className="p-4 border-b border-slate-100 dark:border-white/5 flex items-center justify-between bg-indigo-500/5 dark:bg-indigo-600/5">
                                <div className="flex items-center gap-2">
                                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">Security Alerts</h3>
                                    <Badge variant="outline" className="text-[10px] bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20">{unreadCount} New</Badge>
                                </div>
                                <button
                                    onClick={markAllRead}
                                    className="text-[10px] font-bold text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 uppercase tracking-widest transition-colors"
                                >
                                    Mark all read
                                </button>
                            </div>

                            <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                                {notifications.length > 0 ? (
                                    notifications.map((n) => (
                                        <div
                                            key={n.id}
                                            className={cn(
                                                "p-4 border-b border-slate-50 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group cursor-pointer",
                                                !n.read && "bg-indigo-500/[0.02]"
                                            )}
                                        >
                                            <div className="flex gap-4">
                                                <div className={cn(
                                                    "h-10 w-10 shrink-0 rounded-xl flex items-center justify-center",
                                                    n.type === 'alert' ? "bg-rose-500/10 text-rose-500" :
                                                        n.type === 'success' ? "bg-emerald-500/10 text-emerald-500" :
                                                            n.type === 'worker' ? "bg-purple-500/10 text-purple-500" :
                                                                "bg-blue-500/10 text-blue-500"
                                                )}>
                                                    {n.type === 'alert' ? <AlertTriangle className="h-5 w-5" /> :
                                                        n.type === 'success' ? <CheckCircle2 className="h-5 w-5" /> :
                                                            n.type === 'worker' ? <Zap className="h-5 w-5" /> :
                                                                <Info className="h-5 w-5" />}
                                                </div>
                                                <div className="flex-1 space-y-1">
                                                    <div className="flex items-center justify-between">
                                                        <p className={cn("text-xs font-bold", !n.read ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400")}>{n.title}</p>
                                                        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">{n.time}</span>
                                                    </div>
                                                    <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">{n.msg}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-12 text-center">
                                        <div className="h-12 w-12 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mx-auto mb-4 text-slate-400 dark:text-slate-700">
                                            <CheckCircle2 className="h-6 w-6" />
                                        </div>
                                        <p className="text-xs text-slate-500">System is optimized and secure.</p>
                                    </div>
                                )}
                            </div>

                            <div className="p-3 bg-slate-50 dark:bg-slate-900/50 text-center border-t border-slate-100 dark:border-transparent">
                                <button className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline uppercase tracking-widest flex items-center justify-center gap-2 w-full">
                                    View Audit Ledger <ArrowRight className="h-3 w-3" />
                                </button>
                            </div>
                        </motion.div>

                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
