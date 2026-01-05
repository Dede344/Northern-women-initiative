import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Heart, Sparkles } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Solidarity",
    description: "Standing together as one strong community of Northern women.",
  },
  {
    icon: BookOpen,
    title: "Growth",
    description: "Continuous learning and development for personal and professional success.",
  },
  {
    icon: Heart,
    title: "Faith",
    description: "Grounded in our beliefs and committed to positive change.",
  },
  {
    icon: Sparkles,
    title: "Impact",
    description: "Creating meaningful, lasting change in our communities.",
  },
];

const AboutSummary = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-6">
              A Movement of Northern Women{" "}
              <span className="text-primary">Rising Together</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Northern Women Initiative is a community-driven movement dedicated to empowering women 
              across the North—socially, emotionally, academically, and economically. We believe that 
              when women succeed, entire communities thrive.
            </p>
            <p className="text-muted-foreground mb-8">
              Founded on the principle that true success is measured by impact, not wealth, we provide 
              skill development, mentorship, and support systems that enable Northern women to reach 
              their full potential and uplift those around them.
            </p>
            <Button variant="burgundy" size="lg" asChild>
              <Link to="/about">
                Learn Our Story
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>

          {/* Right - Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`p-6 rounded-2xl card-hover ${
                  index % 2 === 0 ? "bg-muted" : "bg-card border border-border"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;
