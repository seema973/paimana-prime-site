import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-background border-b border-border py-3">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
              MoSPI
            </div>
            <div className="text-xs leading-tight">
              <div className="font-semibold text-foreground">Ministry of Statistics and</div>
              <div className="font-semibold text-foreground">Programme Implementation</div>
              <div className="text-muted-foreground text-[10px]">Government of India</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-2xl">🏛️</span>
            <span className="text-2xl">⚙️</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
            <span className="text-primary">P</span>
            <span className="text-gov-orange">A</span>
            <span className="text-primary">I</span>
            <span className="text-gov-orange">M</span>
            <span className="text-primary">A</span>
            <span className="text-gov-orange">N</span>
            <span className="text-primary">A</span>
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Login
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Signup
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
