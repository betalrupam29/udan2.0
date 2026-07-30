import { useState } from "react";
import { X } from "lucide-react";

export default function FloatingYoutube() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="relative mt-5 w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
      <button
        onClick={() => setOpen(false)}
        className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-1.5 text-white hover:bg-black transition"
      >
        <X size={18} />
      </button>

      <iframe
        className="w-full aspect-[16/10]"
        src="https://www.youtube.com/embed/A7pOE7c78Bg?autoplay=1&mute=1&playsinline=1&rel=0"
        title="UDAAN Highlights"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}