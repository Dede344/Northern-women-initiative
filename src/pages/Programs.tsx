import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Heart, Briefcase, MessageCircle, Users, BookOpen, Home, Handshake } from "lucide-react";

const programs = [
  {
    id: "empowerment",
    icon: GraduationCap,
    title: "Women Empowerment",
    description: "Comprehensive programs designed to build confidence, develop skills, and prepare women for leadership roles.",
    features: [
      "Skill development workshops",
      "Career guidance and counseling",
      "Leadership training programs",
      "Support groups and peer networks",
    ],
  },
  {
    id: "education",
    icon: BookOpen,
    title: "Educational Support",
    description: "Providing access to quality education and mentorship for women and girls across the North.",
    features: [
      "Online and physical teaching sessions",
      "Mentorship programs",
      "Girl-child literacy awareness",
      "Scholarship and educational resources",
    ],
  },
  {
    id: "charity",
    icon: Heart,
    title: "Charity & Community Work",
    description: "Extending a helping hand to vulnerable women and strengthening community bonds.",
    features: [
      "Community outreach programs",
      "Support for vulnerable women",
      "Collaborations with other NGOs",
      "Clothing, food, and education drives",
    ],
  },
  {
    id: "enterprise",
    icon: Briefcase,
    title: "Northern Women Enterprise",
    description: "Empowering women entrepreneurs with skills, resources, and market access.",
    features: [
      "Fashion & elegance training",
      "Business development workshops",
      "Market access & networking opportunities",
      "Financial literacy programs",
    ],
  },
];

const teamStructure = [
  {
    title: "Executive Leadership",
    roles: ["Founder & President", "Vice President", "Executive Director"],
    icon: Users,
  },
  {
    title: "Programs & Events",
    roles: ["Workshop coordination", "Volunteer management", "Summit planning"],
    icon: GraduationCap,
  },
  {
    title: "Education & Mentorship",
    roles: ["Curriculum development", "Mentor matching", "Education support"],
    icon: BookOpen,
  },
  {
    title: "Community & Welfare",
    roles: ["Outreach programs", "Donation management", "Social support"],
    icon: Home,
  },
  {
    title: "Media & Communications",
    roles: ["Social media", "Website content", "Public relations"],
    icon: MessageCircle,
  },
  {
    title: "Partnerships",
    roles: ["Corporate sponsorships", "NGO collaborations", "Strategic alliances"],
    icon: Handshake,
  },
];

const Programs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container-section">
          <div className="max-w-3xl">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">What We Do</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
              Programs & Initiatives
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Comprehensive programs designed to empower, educate, and uplift Northern women at every stage of their journey.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div
                key={program.id}
                id={program.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <program.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-4">{program.title}</h2>
                  <p className="text-muted-foreground text-lg mb-6">{program.description}</p>
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mt-1 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-secondary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="burgundy" size="lg" asChild>
                    <Link to="/get-involved">
                      Join This Program
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                </div>
                <div className={`rounded-2xl bg-muted p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-square flex items-center justify-center">
                    <program.icon className="w-32 h-32 text-primary/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Motivation */}
      <section id="motivation" className="section-padding bg-muted">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Weekly Motivational Series
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Every week, we share inspiring messages designed to uplift, encourage, and motivate 
              Northern women on their journey. Join our community to receive these powerful words 
              of wisdom directly.
            </p>
            <div className="bg-card rounded-2xl p-8 shadow-card text-left">
              <p className="text-lg italic text-muted-foreground mb-4">
                "Success is not just about what you accomplish in your life; it's about what you 
                inspire others to do. Rise, shine, and let your light guide others on their path."
              </p>
              <p className="font-serif font-semibold text-foreground">— This Week's Message</p>
            </div>
            <Button variant="gold" size="lg" className="mt-8" asChild>
              <Link to="/get-involved">
                Subscribe to Weekly Messages
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="text-center mb-12">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">Our Structure</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
              Northern Women Charity Team
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A dedicated team working together to deliver impact across all our programs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamStructure.map((dept) => (
              <div key={dept.title} className="bg-card rounded-2xl p-8 border border-border card-hover">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <dept.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{dept.title}</h3>
                <ul className="space-y-2">
                  {dept.roles.map((role) => (
                    <li key={role} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-section text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join our programs and become part of a movement that's transforming lives across the North.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/get-involved">
              Get Started Today
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
