import { TrendingUp } from "lucide-react";
import aboutImg from "@/assets/about-paimana.png";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-6">About Paimana</h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 max-w-[480px]">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              Transforming Governance Through Data
            </h3>
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
          </div>
          <div className="relative h-[300px] md:h-[360px] w-full">
            <div className="overflow-hidden rounded-xl h-full w-full">
              <img
                src={aboutImg}
                alt="About PAIMANA - Urban construction site with skyscrapers and highway at sunset"
                className="block w-full h-full object-cover rounded-xl"
                style={{ border: 'none', outline: 'none', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
              />
            </div>
            <div className="absolute -bottom-3 -left-3 z-10 bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
              <div className="w-10 h-10 rounded-full bg-gov-green flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-foreground block">700+</span>
                <p className="text-sm text-muted-foreground">Projects Monitored</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
