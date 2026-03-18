import { ExternalLink, Accessibility } from "lucide-react";
import serviceProjectImg from "@/assets/service-project-monitoring.png";
import servicePerformanceImg from "@/assets/service-performance.png";
import serviceNieStateImg from "@/assets/service-nie-state.png";
import serviceNieMinistryImg from "@/assets/service-nie-ministry.png";
import serviceTwentyPointImg from "@/assets/service-twenty-point.png";

const services = [
  {
    title: "Project Monitoring",
    description: "Upload and manage project data across Ministries and Departments.",
    image: serviceProjectImg,
  },
  {
    title: "Performance Monitoring",
    description: "View real-time performance metrics and state-level monitoring data.",
    image: servicePerformanceImg,
  },
  {
    title: "NIE-I (State/UTs)",
    description: "National Institution for Excellence assessment portal for States/UTs.",
    image: serviceNieStateImg,
  },
  {
    title: "NIE-I (Ministry)",
    description: "Ministry-level institutional excellence evaluation and monitoring.",
    image: serviceNieMinistryImg,
  },
  {
    title: "Twenty Point Programme",
    description: "Track progress on the government's Twenty Point Programme initiatives.",
    image: serviceTwentyPointImg,
  },
];

const KeyServices = () => {
  return (
    <section className="py-16 key-services-section">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between mb-10">
          <h2 className="section-heading mb-0">Key Services</h2>
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-gov-navy flex items-center justify-center text-white hover:bg-gov-navy/90 transition-colors shrink-0"
            aria-label="Accessibility options"
          >
            <Accessibility className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group cursor-pointer"
            >
              <div className="p-4 pb-0">
                <div className="h-72 md:h-80 overflow-hidden rounded-lg bg-white">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 block"
                  />
                </div>
              </div>
              <div className="p-5 pt-4">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className="font-bold text-foreground text-base">{service.title}</h3>
                  <ExternalLink className="w-4 h-4 text-gov-green shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyServices;
