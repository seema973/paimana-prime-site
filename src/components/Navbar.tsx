import { Button } from "@/components/ui/button";
import logoMospi from "@/assets/logo-mospi.png";
import logoDataForDevelopment from "@/assets/logo-data-for-development.png";
import logoSwachhBharat from "@/assets/logo-swachh-bharat.png";
import logoPaimana from "@/assets/logo-paimana.png";
import logoStaySafeOnline from "@/assets/logo-stay-safe-online.png";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-border py-3">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-4 md:gap-6 flex-wrap">
          <img
            src={logoMospi}
            alt="Ministry of Statistics and Programme Implementation, Government of India"
            className="h-14 md:h-16 w-auto object-contain"
          />
          <img
            src={logoDataForDevelopment}
            alt="Data for Development"
            className="h-12 md:h-14 w-auto object-contain hidden sm:block"
          />
          <img
            src={logoSwachhBharat}
            alt="Swachh Bharat Abhiyan - Clean India Mission"
            className="h-12 md:h-14 w-auto object-contain hidden sm:block"
          />
          <img
            src={logoPaimana}
            alt="PAIMANA - IPMD One-Stop Infrastructure Portal"
            className="h-12 md:h-16 w-auto object-contain"
          />
          <img
            src={logoStaySafeOnline}
            alt="Stay Safe Online"
            className="h-12 md:h-14 w-auto object-contain hidden sm:block"
          />
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Button variant="outline" className="border-2 border-gov-green text-gov-green bg-white hover:bg-gov-green/5 hover:border-gov-green">
            Login
          </Button>
          <Button className="bg-gov-green text-white hover:bg-gov-green/90 border-0">
            Signup
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
