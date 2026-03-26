import { useEffect, useMemo, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

type VoiceOverButtonProps = {
  text: string;
  className?: string;
};

function normalise(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

export function VoiceOverButton({ text, className = "" }: VoiceOverButtonProps) {
  const canSpeak = typeof window !== "undefined" && "speechSynthesis" in window;
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const cleaned = useMemo(() => normalise(text), [text]);

  useEffect(() => {
    return () => {
      if (!canSpeak) return;
      window.speechSynthesis.cancel();
    };
  }, [canSpeak]);

  const stop = () => {
    if (!canSpeak) return;
    window.speechSynthesis.cancel();
    utteranceRef.current = null;
    setIsPlaying(false);
  };

  const play = () => {
    if (!canSpeak) return;
    if (!cleaned) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleaned);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);
    utteranceRef.current = utterance;
    setIsPlaying(true);
    window.speechSynthesis.speak(utterance);
  };

  if (!canSpeak) return null;

  return (
    <button
      type="button"
      onClick={isPlaying ? stop : play}
      className={`inline-flex items-center gap-2 rounded-full border border-shell-stone/40 bg-background/60 px-4 py-2 text-xs uppercase tracking-luxury text-muted-foreground backdrop-blur-sm hover:text-foreground hover:border-shell-stone/70 transition-colors ${className}`}
      aria-label={isPlaying ? "Stop voice-over" : "Play voice-over"}
    >
      {isPlaying ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      <span>{isPlaying ? "Stop" : "Listen"}</span>
    </button>
  );
}

