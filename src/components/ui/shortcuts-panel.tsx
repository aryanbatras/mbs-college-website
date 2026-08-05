"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Keyboard } from "lucide-react";

interface Shortcut {
  keys: string[];
  description: string;
  category: string;
}

const SHORTCUTS: Shortcut[] = [
  { keys: ["⌘", "K"], description: "Open search", category: "Navigation" },
  { keys: ["⌘", "/"], description: "Show shortcuts", category: "Navigation" },
  { keys: ["Esc"], description: "Close modal/menu", category: "Navigation" },
  { keys: ["↑", "↓"], description: "Navigate results", category: "Search" },
  { keys: ["↵"], description: "Select item", category: "Search" },
  { keys: ["T"], description: "Toggle theme", category: "Appearance" },
  { keys: ["?"], description: "Show shortcuts", category: "General" },
];

export function ShortcutsPanel() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+Shift+/ or Ctrl+Shift+/
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === "?") {
        e.preventDefault();
        setIsOpen(true);
      }
      // Just ? when not in input
      if (e.key === "?" && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const categories = [...new Set(SHORTCUTS.map((s) => s.category))];

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="size-8 flex items-center justify-center text-ink-faint hover:text-ink transition-colors"
        aria-label="Keyboard shortcuts"
        title="Keyboard shortcuts (?)"
      >
        <Keyboard className="size-4" />
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] bg-ink/50 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md bg-white shadow-2xl shadow-ink/20 mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-ink/10">
                <div className="flex items-center gap-2">
                  <Keyboard className="size-5 text-ink" />
                  <h2 className="text-base font-semibold text-ink">Keyboard Shortcuts</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-ink-faint hover:text-ink transition-colors"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Shortcuts list */}
              <div className="px-5 py-4 max-h-[60vh] overflow-y-auto">
                {categories.map((category) => (
                  <div key={category} className="mb-5 last:mb-0">
                    <h3 className="text-xs font-medium uppercase tracking-wider text-ink-faint mb-3">
                      {category}
                    </h3>
                    <div className="flex flex-col gap-2">
                      {SHORTCUTS.filter((s) => s.category === category).map((shortcut) => (
                        <div
                          key={shortcut.description}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm text-ink-muted">{shortcut.description}</span>
                          <div className="flex items-center gap-1">
                            {shortcut.keys.map((key, i) => (
                              <span key={i}>
                                <kbd className="inline-flex items-center justify-center min-w-[24px] h-6 px-1.5 text-[11px] font-mono font-medium text-ink bg-ink/[0.05] border border-ink/10">
                                  {key}
                                </kbd>
                                {i < shortcut.keys.length - 1 && (
                                  <span className="text-ink-faint mx-0.5">+</span>
                                )}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-ink/10 text-[11px] text-ink-faint text-center">
                Press <kbd className="px-1 py-0.5 bg-ink/[0.05] border border-ink/10 font-mono">?</kbd> to toggle this panel
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
