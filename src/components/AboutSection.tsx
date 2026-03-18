import { TrendingUp } from "lucide-react";
import aboutImg from "@/assets/about-paimana.jpg";

const AboutSection = () => {
  return (
    <section className="py-16 bg-section-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-4">About Paimana</h2>
        <h3 className="text-xl font-bold text-foreground mb-6">
          Transforming Governance Through Data
        </h3>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              PAIMANA (Project Analytics, Monitoring & Assessment Platform) is an
              integrated platform by the Government of India under the Ministry of
              Statistics & Programme Implementation.
            </p>
            <p>
              It acts as a central hub to monitor, assess, and improve government
              initiatives by providing real-time insights, analytics, and actionable data.
            </p>
            <p>
              PAIMANA enables better decision-making by bringing projects across
              ministries and states into one unified system — ensuring transparency,
              accountability, and efficiency in governance.
            </p>
          </div>
          <div className="relative">
            <img
              src={aboutImg}
              alt="About PAIMANA - Team working on governance analytics"
              className="rounded-xl shadow-lg w-full"
            />
            <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center gap-3 shadow-md">
              <div className="w-10 h-10 rounded-full bg-gov-orange flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <span className="text-2xl font-extrabold text-foreground">700+</span>
                <p className="text-xs text-muted-foreground">Projects Monitored</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
