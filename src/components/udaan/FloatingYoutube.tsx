import { useState } from "react";
import { X } from "lucide-react";

export default function FloatingYoutube() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[9999] w-[360px] overflow-hidden rounded-2xl shadow-2xl border border-white/20 bg-black">
      <button
        onClick={() => setOpen(false)}
        className="absolute right-2 top-2 z-10 rounded-full bg-black/60 p-1 text-white hover:bg-black"
      >
        <X size={18} />
      </button>

      <iframe
        className="aspect-video w-full"
        src="https://www.youtube.com/embed/A7pOE7c78Bg?autoplay=1&mute=1&playsinline=1&rel=0"
        title="UDAAN Highlights"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}