"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessageCircle, Send, Loader2, Heart } from "lucide-react";
import { toast } from "sonner";
import api from "@/lib/axios";
import { motion, AnimatePresence } from "framer-motion";

interface FeedbackModalProps {
  variant?: "button" | "inline";
}

export function FeedbackModal({ variant = "button" }: FeedbackModalProps) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!message.trim()) return;
    setSending(true);
    try {
      await api.post("/api/feedback", { message: message.trim() });
      setSubmitted(true);
      setMessage("");
      toast.success("Thanks for your feedback!");
      setTimeout(() => {
        setOpen(false);
        setSubmitted(false);
      }, 2000);
    } catch {
      toast.error("Failed to send. Try again.");
    } finally {
      setSending(false);
    }
  };

  const trigger =
    variant === "inline" ? (
      <DialogTrigger className="text-xs font-medium text-petal hover:underline cursor-pointer inline">
        We&apos;d love to hear from you
      </DialogTrigger>
    ) : (
      <DialogTrigger className="text-xs font-medium text-muted-foreground hover:text-petal transition-colors cursor-pointer flex items-center gap-1">
        <MessageCircle className="w-3.5 h-3.5" />
        Feedback
      </DialogTrigger>
    );

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) setSubmitted(false);
      }}
    >
      {trigger}
      <DialogContent className="sm:max-w-sm">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-3 py-8"
            >
              <div className="w-14 h-14 rounded-full bg-petal-light/40 flex items-center justify-center">
                <Heart className="w-7 h-7 text-petal fill-petal" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground">Thank you!</h3>
              <p className="text-sm text-muted-foreground text-center">
                Your feedback means the world to us.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <DialogHeader>
                <DialogTitle className="font-heading text-lg">Send Feedback</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-2">
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What's on your mind? Bugs, ideas, love notes..."
                  className="min-h-[100px] resize-none"
                  maxLength={1000}
                />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{message.length}/1000</span>
                  <Button
                    onClick={handleSubmit}
                    disabled={!message.trim() || sending}
                    className="rounded-full gap-2 bg-petal hover:bg-petal/90 text-white"
                    size="sm"
                  >
                    {sending ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {sending ? "Sending..." : "Send"}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
