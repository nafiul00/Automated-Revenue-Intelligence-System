"use client";

import { useState, useRef, useEffect } from "react";
import {
    MessageSquare,
    Send,
    X,
    Bot,
    User,
    Sparkles,
    Minimize2,
    Maximize2,
    BrainCircuit
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function ARISChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { role: "bot", content: "Identity verified. I am the ARIS Intelligence Core. How can I assist with your revenue data today?", time: "System Boot" }
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
        setMessages(prev => [...prev, userMessage]);
        setInput("");

        // Simulated Bot Response
        setTimeout(() => {
            let response = "";
            const query = input.toLowerCase();

            if (query.includes("revenue")) {
                response = "The system is currently reporting $3.2M in net revenue for January 2026. Growth is trending at +5.2% WoW.";
            } else if (query.includes("anomaly") || query.includes("risk")) {
                response = "Last risk scan completed 14 minutes ago. 1 localized anomaly detected in the APAC region node. Security protocol 9 is active.";
            } else if (query.includes("excel") || query.includes("report")) {
                response = "I have scheduled the automated Excel summary for the CFO. Would you like me to trigger an immediate generation?";
            } else {
                response = "Processing query through the Python analytics kernel... Analysis suggests current trends remains stable within 2% of forecast.";
            }

            setMessages(prev => [...prev, {
                role: "bot",
                content: response,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }]);
        }, 1000);
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-[100]">
                <AnimatePresence>
                    {!isOpen && (
                        <motion.button
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            onClick={() => setIsOpen(true)}
                            className="h-14 w-14 rounded-2xl bg-indigo-600 text-white shadow-2xl shadow-indigo-500/40 flex items-center justify-center hover:bg-indigo-700 hover:scale-110 transition-all group"
                        >
                            <Sparkles className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            x: 0,
                            height: isMinimized ? "64px" : "500px",
                            width: "380px"
                        }}
                        exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
                        className="fixed bottom-6 right-6 z-[100] bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-[32px] shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="h-16 shrink-0 bg-indigo-600 px-6 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-lg bg-white/20 flex items-center justify-center">
                                    <BrainCircuit className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-sm font-black text-white uppercase italic tracking-tight leading-none">ARIS_AI</div>
                                    <div className="text-[10px] text-indigo-100/70 font-black tracking-widest uppercase leading-none mt-1">Intelligence Core</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button onClick={() => setIsMinimized(!isMinimized)} className="p-2 hover:bg-white/10 rounded-lg text-white">
                                    {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                                </button>
                                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg text-white">
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        {!isMinimized && (
                            <>
                                {/* Messages */}
                                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                    {messages.map((m, i) => (
                                        <div key={i} className={cn("flex flex-col", m.role === "user" ? "items-end" : "items-start")}>
                                            <div className={cn(
                                                "max-w-[80%] rounded-2xl px-4 py-3 text-xs leading-relaxed font-bold tracking-tight",
                                                m.role === "user"
                                                    ? "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white rounded-tr-none"
                                                    : "bg-indigo-600 text-white dark:bg-indigo-600/10 dark:text-slate-200 border border-indigo-500/10 dark:border-indigo-500/20 rounded-tl-none"
                                            )}>
                                                {m.content}
                                            </div>
                                            <span className="text-[8px] text-slate-400 dark:text-slate-600 uppercase font-black tracking-widest mt-1 px-1">
                                                {m.role === "bot" ? "PROTOCOL_ARIS" : "USER_ACCESS"} • {m.time}
                                            </span>
                                        </div>
                                    ))}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Input */}
                                <form onSubmit={handleSend} className="p-4 border-t border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/50 flex gap-2">
                                    <input
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Ask ARIS Intelligence..."
                                        className="flex-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2 text-xs focus:ring-1 focus:ring-indigo-500 outline-none placeholder:text-slate-400 dark:placeholder:text-slate-600 text-slate-900 dark:text-white"
                                    />
                                    <button type="submit" className="h-9 w-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/20">
                                        <Send className="h-4 w-4" />
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
