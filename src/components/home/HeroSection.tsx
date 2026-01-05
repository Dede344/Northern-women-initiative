import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroImage from "@/assets/hero-women.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Empowered Northern Women"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container-section relative z-10 py-20">
        <div className="max-w-3xl">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full mb-6 animate-fade-in">
            <Heart size={16} className="text-secondary" />
            <span className="text-sm font-medium text-primary-foreground">Northern Women Initiative</span>
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6 animate-fade-in">
            Empowering Northern Women.{" "}
            <span className="text-gradient-gold">Strengthening Communities.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-in-delay-1">
            Building confidence, providing opportunities, and creating lasting impact across the North. 
            Together, we rise.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
            <Button variant="hero" size="xl" asChild>
              <Link to="/get-involved">
                Join the Initiative
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/about">
                Support the Mission
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-in-delay-2">
            <div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-secondary">500+</div>
              <div className="text-sm text-primary-foreground/70 mt-1">Women Empowered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-secondary">20+</div>
              <div className="text-sm text-primary-foreground/70 mt-1">Communities Reached</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-secondary">50+</div>
              <div className="text-sm text-primary-foreground/70 mt-1">Programs Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
