import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-foreground text-center mb-4">Contact us</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          For queries related to projects, datasets, or programme implementation information,
          please contact the MoSPI support team.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gov-navy mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-foreground">
                  Sankhyiki Bhawan, GPOA Building, CBD Shahdara,
                  Near Karkardomma Court, Delhi - 110032
                </p>
                <a href="#" className="text-sm text-gov-green font-medium hover:underline">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gov-navy shrink-0" />
              <div>
                <p className="text-sm text-foreground">Helpline (IND) 1800 14556</p>
                <p className="text-xs text-muted-foreground">10:00 am to 6:00 pm IST</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gov-navy shrink-0" />
              <p className="text-sm text-foreground">doanna.cursi@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
