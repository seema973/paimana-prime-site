import { ExternalLink } from "lucide-react";
import flagIndia from "@/assets/flag-india.png";

const GovHeader = () => {
  return (
    <div className="bg-gov-navy text-white text-xs py-1.5">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img src={flagIndia} alt="National Flag of India" className="h-5 w-auto object-contain" />
          <span className="font-medium">Government of India</span>
          <a href="https://www.india.gov.in/" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity" aria-label="Open India.gov.in">
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#main" className="text-white hover:opacity-90 transition-opacity">Skip to Main Content</a>
          <span className="text-white/50">|</span>
          <div className="flex items-center gap-1" role="group" aria-label="Font size">
            <button className="px-1.5 py-0.5 rounded hover:bg-white/20 transition-colors font-bold text-[10px] text-white/70" title="Decrease font size">A-</button>
            <button className="px-1.5 py-0.5 rounded bg-white/20 text-white font-bold text-xs" title="Normal font size">A</button>
            <button className="px-1.5 py-0.5 rounded hover:bg-white/20 transition-colors font-bold text-sm text-white/70" title="Increase font size">A+</button>
          </div>
          <span className="text-white/50">|</span>
          <button className="w-5 h-5 rounded border border-white/60 flex items-center justify-center hover:bg-white/20 transition-colors" title="High contrast" aria-label="Toggle high contrast">
            <span className="text-[10px]">⊞</span>
          </button>
          <select className="bg-transparent text-white border border-white/60 rounded px-2 py-0.5 cursor-pointer focus:outline-none focus:ring-1 focus:ring-white/50">
            <option value="en" className="bg-gov-navy text-white">English</option>
            <option value="hi" className="bg-gov-navy text-white">हिन्दी</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default GovHeader;
