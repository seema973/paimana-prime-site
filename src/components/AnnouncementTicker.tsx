import { useState } from "react";
import { Megaphone, Pause, Play } from "lucide-react";

const announcements = [
  "GDP estimates with base year 2022-23 release",
  "CPI Base Year Revision — February 2026",
  "National Internship in Official Statistics (NIOS) 2026-27 applications open",
  "CPI Base Year Revision — February 2026",
];

const AnnouncementTicker = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="flex items-stretch">
      {/* Left: Fixed orange - Announcement label */}
      <div className="bg-gov-orange px-4 py-2.5 flex items-center gap-2 shrink-0">
        <span className="text-white font-bold text-sm">Announcement</span>
        <Megaphone className="w-4 h-4 text-white shrink-0" />
      </div>

      {/* Center: Green background - Scrolling ticker */}
      <div className="bg-gov-green flex-1 overflow-hidden py-2.5">
        <div className="overflow-hidden">
          <div
            className={`animate-ticker flex whitespace-nowrap gap-12 items-center ${isPaused ? "animate-ticker-paused" : ""}`}
          >
            {[...announcements, ...announcements].map((item, i) => (
              <span key={i} className="text-white text-sm font-medium shrink-0">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Fixed orange - Pause/Play control */}
      <button
        type="button"
        onClick={() => setIsPaused(!isPaused)}
        className="bg-gov-orange px-4 py-2.5 flex items-center justify-center shrink-0 hover:bg-gov-orange/90 transition-colors"
        aria-label={isPaused ? "Play ticker" : "Pause ticker"}
      >
        {isPaused ? (
          <Play className="w-4 h-4 text-white" />
        ) : (
          <Pause className="w-4 h-4 text-white" />
        )}
      </button>
    </div>
  );
};

export default AnnouncementTicker;
