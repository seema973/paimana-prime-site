const Footer = () => {
  const categories = [
    { title: "Category 1", items: ["Item", "Item", "Item", "Item"] },
    { title: "Category 2", items: ["Item", "Item", "Item", "Item"] },
    { title: "Category 3", items: ["Item", "Item", "Item", "Item"] },
    { title: "Category 4", items: ["Item", "Item", "Item", "Item"] },
  ];

  return (
    <footer className="bg-gov-navy text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-sm mb-2">Ministry of Statistics and Programme Implementation</h3>
            <p className="text-xs text-white/80 mb-3">Government of India</p>
            <p className="text-xs text-white/70 mb-3">
              Description or tagline about the product or company
            </p>
            <div className="flex gap-2">
              {["in", "f", "📸", "▶", "🐦"].map((icon, i) => (
                <span
                  key={i}
                  className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-xs cursor-pointer hover:bg-white/30 transition-colors"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
          {categories.map((cat, i) => (
            <div key={i}>
              <h4 className="font-semibold text-sm mb-3">{cat.title}</h4>
              <ul className="space-y-2">
                {cat.items.map((item, j) => (
                  <li key={j}>
                    <a href="#" className="text-xs text-white/70 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-sm">NIC</span>
              <span className="text-xs">GD</span>
            </div>
            <p className="text-xs text-white/70 mb-1">Ministry of Electronics & IT</p>
            <p className="text-xs text-white/70 mb-3">
              (MeitY), Government of India
            </p>
            <p className="text-xs text-white/70">Digital India Corporation</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/70">
          <span>© 2024 - Copyright UMG. All rights reserved. Powered by NeGD | MeitY Government of India</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
