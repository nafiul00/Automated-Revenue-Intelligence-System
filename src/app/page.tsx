"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BarChart3, Lock, ShieldCheck, ArrowRight, Activity, Users, Database, Zap, Globe, Cpu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#020617] flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-hidden transition-colors duration-500">
      {/* Dynamic Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-indigo-500/10 via-indigo-500/5 to-transparent pointer-events-none" />
      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-indigo-600/10 dark:bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-purple-600/10 dark:bg-purple-600/5 blur-[120px] rounded-full pointer-events-none animate-pulse" />

      {/* Floating Elements Decor */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] dark:opacity-[0.07]">
        <div className="w-[800px] h-[800px] border-[1px] border-slate-900 dark:border-white rounded-full scale-150" />
        <div className="absolute w-[600px] h-[600px] border-[1px] border-slate-900 dark:border-white rounded-full rotate-45" />
      </div>

      <div className="max-w-5xl w-full relative z-10 text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="flex justify-center">
            <Badge variant="indigo" className="px-6 py-2 border-indigo-500/20 text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 dark:bg-indigo-500/5 uppercase font-black tracking-[0.4em] text-[10px] rounded-2xl shadow-sm">
              Next-Gen Revenue Core
            </Badge>
          </div>

          <h1 className="text-6xl lg:text-[6rem] font-black font-display tracking-tighter text-slate-900 dark:text-white leading-[0.85] mb-2">
            Automated <br />
            <span className="text-indigo-600 dark:text-indigo-500">Intelligence.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium italic">
            Proprietary orchestration layer for XYZ Company LTD. <br />
            Execute global revenue strategy through autonomous kernels.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button size="lg" className="bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-indigo-600 dark:hover:bg-indigo-50 h-16 px-12 text-base font-black rounded-3xl group shadow-2xl transition-all" asChild>
            <Link href="/login">
              ACCESS WORKSPACE <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <div className="group">
            <Button size="lg" variant="outline" className="h-16 px-12 text-base font-black rounded-3xl border-slate-200 dark:border-white/5 bg-transparent hover:bg-slate-100 dark:hover:bg-white/5 transition-all text-slate-600 dark:text-slate-300" asChild>
              <Link href="/signup">
                PARTNER ENROLLMENT <ShieldCheck className="ml-3 h-5 w-5 text-indigo-500 opacity-60 group-hover:opacity-100 transition-opacity" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-16 max-w-4xl mx-auto"
        >
          {[
            { label: "Active Nodes", val: "142 CLUSTERS", icon: Globe, color: "text-indigo-500" },
            { label: "Accounts Secured", val: "1,240 ENTITIES", icon: Users, color: "text-purple-500" },
            { label: "Cryptographic", val: "SHA-512 KERNEL", icon: Lock, color: "text-emerald-500" },
            { label: "Sync Engine", val: "v2.5 PRO_SYNC", icon: Cpu, color: "text-amber-500" },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white/50 dark:bg-slate-900/30 border border-slate-200 dark:border-white/5 text-center transition-all hover:border-indigo-500/20 group cursor-default">
              <div className={`flex justify-center mb-4 ${stat.color} group-hover:scale-110 transition-transform`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight">{stat.val}</div>
              <div className="text-[9px] text-slate-400 font-black uppercase tracking-widest mt-1.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <footer className="mt-auto pt-24 pb-12 flex flex-col items-center gap-4">
        <div className="flex gap-8 text-[10px] font-black text-slate-500 uppercase tracking-widest">
          <span className="hover:text-indigo-500 cursor-pointer">Protocol_V.09</span>
          <span className="hover:text-indigo-500 cursor-pointer">Encryption_Logs</span>
          <span className="hover:text-indigo-500 cursor-pointer">Entity_Status</span>
        </div>
        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.5em] font-mono">
          &copy; 2026 ARIS PRO | PRIVATE BUSINESS INFRASTRUCTURE
        </div>
      </footer>
    </main>
  );
}
