import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Users, BookOpen, Sparkles, Shield } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

const coreValues = [
  { icon: Shield, title: "Confidence", description: "Building self-belief and courage in every woman we touch." },
  { icon: Users, title: "Solidarity", description: "Standing together, supporting each other through every challenge." },
  { icon: BookOpen, title: "Growth", description: "Continuous learning and development for lasting success." },
  { icon: Heart, title: "Faith", description: "Grounded in our beliefs and committed to our principles." },
  { icon: Sparkles, title: "Community Impact", description: "Creating meaningful, lasting change in our communities." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container-section">
          <div className="max-w-3xl">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
              Our Story of Empowerment
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Discover the journey, mission, and vision that drives the Northern Women Initiative forward.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-6">
              Why We Started
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              The Northern Women Initiative was born from a deeply personal belief—inspired by the legacy of 
              a father who taught that true success isn't measured by wealth, but by the impact we make in 
              others' lives.
            </p>
            <p className="text-muted-foreground text-lg">
              Witnessing the untapped potential of Northern women—their resilience, wisdom, and capacity for 
              greatness—sparked a vision: to create a platform where these women could connect, grow, and 
              transform not just their own lives, but their entire communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl p-10 shadow-card">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg">
                To empower women across the North socially, emotionally, academically, and economically—
                providing them with the tools, support, and opportunities they need to thrive and lead.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-10 shadow-card">
              <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg">
                A strong, connected network of Northern women who uplift each other, break barriers, 
                and create long-term positive change for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="text-center mb-12">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">What Guides Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value) => (
              <div key={value.title} className="text-center p-6 rounded-2xl bg-muted card-hover">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="section-padding bg-muted">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">From The Founder</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-6">
                A Message from Mariam
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As a mother, educator, mentor, and community leader, I understand the unique challenges 
                  Northern women face. I've walked this path, juggling multiple responsibilities while 
                  striving to make a difference.
                </p>
                <p>
                  The Northern Women Initiative is more than an organization—it's a family. A space where 
                  every woman's voice matters, where dreams are nurtured, and where we celebrate each 
                  other's victories as our own.
                </p>
                <p>
                  My commitment is simple: to serve, to uplift, and to ensure that no Northern woman 
                  ever feels alone in her journey. Together, we are unstoppable.
                </p>
              </div>
              <div className="mt-6">
                <p className="font-serif text-xl font-semibold text-foreground">Mariam</p>
                <p className="text-muted-foreground">Founder & President, Northern Women Initiative</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={founderImage}
                  alt="Mariam - Founder"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-elevated"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-section text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
            Ready to Join Our Movement?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Become part of a community that's changing lives across the North. Your journey starts here.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/get-involved">
              Get Involved Today
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
