import { MapPin, Phone, Mail } from "lucide-react";
import indiaGateImg from "@/assets/india-gate.png";

const ContactSection = () => {
  return (
    <section className="py-16 bg-white relative border-b-2 border-purple-600">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-foreground text-center mb-4">Contact us</h2>
        <p className="text-center text-muted-foreground mb-10 md:whitespace-nowrap">
          For queries related to projects, datasets, or programme implementation information, please contact the MoSPI support team.
        </p>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gov-green mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-foreground">
                  Sankhyiki Bhawan, GPOA Building, CBD Shahdara,
                  Near Karkardooma Court, Delhi - 110032
                </p>
                <a href="#" className="text-sm text-gov-orange font-medium hover:underline inline-flex items-center gap-1.5 mt-1">
                  <MapPin className="w-4 h-4 text-gov-green shrink-0" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block" />
          <div className="space-y-3 md:flex md:flex-col md:items-end">
            <div className="flex items-center gap-3 md:justify-end">
              <Phone className="w-5 h-5 text-gov-green shrink-0" />
              <div>
                <p className="text-sm text-foreground">Helpline (IND) 1800114556</p>
                <p className="text-xs text-muted-foreground">10:00 am to 6:00 pm IST</p>
              </div>
            </div>
            <div className="flex items-center gap-3 md:justify-end">
              <Mail className="w-5 h-5 text-gov-green shrink-0" />
              <p className="text-sm text-foreground">deanna.curtis@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center pointer-events-none">
        <img
          src={indiaGateImg}
          alt="India Gate"
          className="h-24 md:h-36 w-auto object-contain object-bottom block"
        />
      </div>
    </section>
  );
};

export default ContactSection;
