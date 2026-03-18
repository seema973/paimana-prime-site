const GovHeader = () => {
  return (
    <div className="bg-gov-navy text-white text-xs py-1.5">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-base" role="img" aria-label="Indian flag">🇮🇳</span>
          <span className="font-medium">Government of India</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1" role="group" aria-label="Font size">
            <button className="px-1.5 py-0.5 rounded hover:bg-white/20 transition-colors font-bold text-[10px]" title="Decrease font size">A-</button>
            <button className="px-1.5 py-0.5 rounded hover:bg-white/20 transition-colors font-bold text-xs" title="Normal font size">A</button>
            <button className="px-1.5 py-0.5 rounded hover:bg-white/20 transition-colors font-bold text-sm" title="Increase font size">A+</button>
          </div>
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
