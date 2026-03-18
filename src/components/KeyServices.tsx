import { ExternalLink } from "lucide-react";
import serviceProjectImg from "@/assets/service-project-monitoring.jpg";
import servicePerformanceImg from "@/assets/service-performance.jpg";
import serviceNieStateImg from "@/assets/service-nie-state.jpg";
import serviceNieMinistryImg from "@/assets/service-nie-ministry.jpg";
import serviceTwentyPointImg from "@/assets/service-twenty-point.jpg";

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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-10">Key Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-md border border-border hover:shadow-lg transition-shadow group cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-foreground">{service.title}</h3>
                  <ExternalLink className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyServices;
