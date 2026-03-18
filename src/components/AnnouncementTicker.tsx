const announcements = [
  "GDP estimates with base year 2022-23 release",
  "CPI Base Year Revision — February 2026",
  "National Internship in Official Statistics (NIOS) 2026-27 applications open",
  "CPI Base Year Revision updates available",
];

const AnnouncementTicker = () => {
  return (
    <div className="gov-gradient py-2 overflow-hidden">
      <div className="flex items-center">
        <span className="bg-gov-orange text-accent-foreground px-3 py-1 text-xs font-bold shrink-0 rounded-r z-10">
          Announcements 📢
        </span>
        <div className="overflow-hidden ml-4 flex-1">
          <div className="animate-ticker flex whitespace-nowrap gap-12">
            {[...announcements, ...announcements].map((item, i) => (
              <span key={i} className="text-primary-foreground text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementTicker;
