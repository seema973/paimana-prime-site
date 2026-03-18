const GovHeader = () => {
  return (
    <div className="bg-gov-navy text-primary-foreground text-xs py-1.5">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🇮🇳</span>
          <span className="font-medium">Government of India</span>
          <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground ml-1">↗</a>
        </div>
        <div className="flex items-center gap-4">
          <span>Skip to Main Content</span>
          <div className="flex items-center gap-2">
            <button className="text-xs font-bold">A</button>
            <button className="text-sm font-bold">A</button>
            <button className="text-base font-bold">A</button>
          </div>
          <button className="w-5 h-5 rounded-full bg-primary-foreground/20" title="Contrast" />
          <span>+ More</span>
        </div>
      </div>
    </div>
  );
};

export default GovHeader;
