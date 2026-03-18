import heroImg from "@/assets/hero-infrastructure.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <img
        src={heroImg}
        alt="Infrastructure and Project Monitoring"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground max-w-4xl leading-tight drop-shadow-lg">
          Infrastructure and Project Monitoring Division
          (IPMD) One-Stop Infrastructure Portal
        </h2>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {[0, 1, 2, 3, 4].map((i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === 0 ? "bg-primary-foreground" : "bg-primary-foreground/40"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
