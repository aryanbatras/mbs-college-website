"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

const QUICK_REPLIES = [
  "Admissions",
  "Programs",
  "Placements",
  "Campus Visit",
];

const BOT_RESPONSES: Record<string, string> = {
  "admissions": "For admissions, we accept students through JEE Main/JKBOPEE counseling and Minority Quota. Visit our Admissions page or call +91-191-2476227 for details.",
  "programs": "We offer 8 B.E. programs (CSE, IT, ECE, EE, ME, Civil, AI&ML) and MCA. Each program has excellent faculty and modern labs.",
  "placements": "Our placement record is excellent with 85%+ placement rate. Highest package: ₹7.2 LPA, Average: ₹4.5 LPA. Top recruiters include Infosys, Wipro, TCS.",
  "campus visit": "You can schedule a campus visit by contacting us at +91-191-2476227 or emailing principal@mbscet.edu.in. We'd be happy to show you around!",
  "default": "Thank you for your question! Our team will get back to you shortly. For immediate assistance, call +91-191-2476227.",
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Welcome to MBSCET! How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");

  const handleQuickReply = (reply: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text: reply,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Bot response
    setTimeout(() => {
      const response = BOT_RESPONSES[reply.toLowerCase()] || BOT_RESPONSES["default"];
      const botMessage: Message = {
        id: messages.length + 2,
        text: response,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: BOT_RESPONSES["default"],
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat trigger */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 lg:bottom-8 right-4 lg:right-8 z-40 size-14 flex items-center justify-center bg-accent text-paper hover:bg-accent-strong transition-colors shadow-lg shadow-accent/30"
        aria-label="Open chat"
      >
        <MessageCircle className="size-6" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 lg:bottom-8 right-4 lg:right-8 z-40 w-[350px] max-w-[calc(100vw-2rem)] bg-white shadow-2xl shadow-ink/20 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-ink text-paper">
              <div className="flex items-center gap-2">
                <Bot className="size-5" />
                <div>
                  <div className="text-sm font-medium">MBSCET Support</div>
                  <div className="text-[10px] text-paper/60">Online now</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-paper/60 hover:text-paper transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[400px]">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${message.sender === "user" ? "justify-end" : ""}`}
                >
                  {message.sender === "bot" && (
                    <div className="size-6 flex items-center justify-center bg-accent/10 shrink-0">
                      <Bot className="size-3 text-accent" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3 py-2 text-sm ${
                      message.sender === "user"
                        ? "bg-ink text-paper"
                        : "bg-ink/[0.03] text-ink"
                    }`}
                  >
                    {message.text}
                  </div>
                  {message.sender === "user" && (
                    <div className="size-6 flex items-center justify-center bg-ink/10 shrink-0">
                      <User className="size-3 text-ink" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick replies */}
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleQuickReply(reply)}
                  className="px-3 py-1.5 text-[11px] font-medium bg-ink/[0.03] text-ink-muted hover:bg-ink/[0.06] transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-ink/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 text-sm bg-ink/[0.03] focus:outline-none focus:bg-ink/[0.05] transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="size-9 flex items-center justify-center bg-accent text-paper hover:bg-accent-strong disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="size-4" />
              </button>
            </div>

            {/* Footer */}
            <div className="px-4 py-2 text-[10px] text-ink-faint text-center border-t border-ink/10">
              Powered by MBSCET AI Assistant
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
