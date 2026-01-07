import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Users, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import summitImage from "@/assets/summit-event.jpg";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const upcomingEvents = [
  {
    title: "Northern Women Summit 2026",
    date: "November 1st, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Northern Nigeria",
    description: "Our flagship annual event bringing together hundreds of Northern women for inspiration, networking, and skill-building.",
    featured: true,
  },
  {
    title: "Leadership Workshop Series",
    date: "Monthly",
    time: "2:00 PM - 4:00 PM",
    location: "Virtual",
    description: "Monthly workshops focused on developing leadership skills and building confidence.",
    featured: false,
  },
  {
    title: "Skill Acquisition Training",
    date: "Bi-weekly",
    time: "10:00 AM - 1:00 PM",
    location: "Various Locations",
    description: "Hands-on training in various skills including tailoring, catering, and digital literacy.",
    featured: false,
  },
  {
    title: "Community Outreach Day",
    date: "Quarterly",
    time: "All Day",
    location: "Community Centers",
    description: "Join us in giving back through food drives, clothing donations, and educational support.",
    featured: false,
  },
];

const pastEvents = [
  { title: "Women in Business Conference 2025", attendees: 200 },
  { title: "Girls Education Summit", attendees: 150 },
  { title: "Community Health Outreach", attendees: 300 },
  { title: "Entrepreneurship Bootcamp", attendees: 80 },
];

const Events = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-11-01T09:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container-section">
          <div className="max-w-3xl">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">Events</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
              Join Our Gatherings
            </h1>
            <p className="text-lg text-primary-foreground/90">
              From our flagship summit to workshops and community outreach, find events that inspire and connect.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event - Summit */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={summitImage}
                alt="Northern Women Summit"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-medium text-sm">
                Featured Event
              </div>
            </div>
            <div>
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">Mark Your Calendar</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
                Northern Women Summit 2026
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our flagship annual event bringing together hundreds of Northern women for a day of 
                inspiration, networking, skill-building, and celebration.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar size={20} className="text-primary" />
                  <span>November 1st, 2026</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock size={20} className="text-primary" />
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={20} className="text-primary" />
                  <span>Northern Nigeria</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Users size={20} className="text-primary" />
                  <span>500+ Expected Attendees</span>
                </div>
              </div>

              {/* Countdown */}
              <div className="mb-8 p-6 bg-muted rounded-xl">
                <p className="text-sm font-medium text-foreground mb-4">Event starts in:</p>
                <div className="flex gap-4">
                  {[
                    { value: timeLeft.days, label: "Days" },
                    { value: timeLeft.hours, label: "Hours" },
                    { value: timeLeft.minutes, label: "Mins" },
                    { value: timeLeft.seconds, label: "Secs" },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="bg-primary text-primary-foreground text-2xl font-serif font-bold w-14 h-14 rounded-lg flex items-center justify-center">
                        {item.value.toString().padStart(2, "0")}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <Button variant="gold" size="xl" asChild>
                <Link to="/get-involved">
                  Register Now
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events - 2026 Programs */}
      <section className="section-padding bg-muted">
        <div className="container-section">
          <div className="text-center mb-12">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">What's Coming</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
              Our 2026 Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At Northern Women Initiative For Empowerment, Growth and Development, 2026 is a year of giving, empowering, and creating opportunities for Northern women and girls. Our programs are designed to address critical needs, support growth, and build stronger communities.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl p-6 border border-border shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Ramadan Feeding Initiative</h3>
                <p className="text-muted-foreground text-lg">Providing nutritious meals to communities during Ramadan, spreading hope, care, and support to those in need.</p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Supporting School Girls</h3>
                <p className="text-muted-foreground text-lg">Supplying essential educational materials to girls, ensuring they have the tools they need to succeed academically and reach their full potential.</p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Empowering Small Business Women</h3>
                <p className="text-muted-foreground text-lg">Offering financial support and resources to women entrepreneurs, helping them grow their businesses and achieve independence.</p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Mentorship & Business Support</h3>
                <p className="text-muted-foreground text-lg">Guiding women through mentorship, advising them on business growth, and supporting them in advertising and promoting their ventures to reach wider markets.</p>
              </div>
            </div>
            <p className="mt-8 text-muted-foreground text-lg text-center">
              Through these programs, we are committed to uplifting Northern women and girls, fostering growth, and creating lasting, positive impact in their lives, families, and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="text-center mb-12">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
              Past Events
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A glimpse into the impactful events we've hosted, bringing together hundreds of Northern women.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event) => (
              <div key={event.title} className="bg-muted rounded-2xl p-6 text-center card-hover">
                <div className="text-4xl font-serif font-bold text-primary mb-2">{event.attendees}+</div>
                <div className="text-sm text-muted-foreground">Attendees</div>
                <h3 className="font-serif font-semibold text-foreground mt-4">{event.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet and Greet 2025 Gallery */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">Meet and Greet 2025</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer">
                <img
                  src={`/assets/past-events/meet-greet-2025-${i+1}.jpg`}
                  alt={`Meet and Greet 2025 - ${i+1}`}
                  className="w-full h-48 object-cover mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:brightness-90 group-hover:blur-[1px]"
                  onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/300x192')}
                />
                <span className="text-primary text-base font-semibold mb-2 group-hover:text-secondary transition-colors duration-300">Meet and Greet 2025</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Northern Women Summit 2025 Gallery */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">Northern Women Summit 2025</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer">
                <img
                  src={`/assets/past-events/summit-2025-${i+1}.jpg`}
                  alt={`Northern Women Summit 2025 - ${i+1}`}
                  className="w-full h-48 object-cover mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:brightness-90 group-hover:blur-[1px]"
                  onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/300x192')}
                />
                <span className="text-primary text-base font-semibold mb-2 group-hover:text-secondary transition-colors duration-300">Northern Women Summit 2025</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="text-center mb-12">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
              Past Events
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A glimpse into the impactful events we've hosted, bringing together hundreds of Northern women.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event) => (
              <div key={event.title} className="bg-muted rounded-2xl p-6 text-center card-hover">
                <div className="text-4xl font-serif font-bold text-primary mb-2">{event.attendees}+</div>
                <div className="text-sm text-muted-foreground">Attendees</div>
                <h3 className="font-serif font-semibold text-foreground mt-4">{event.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-section text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
            Don't Miss Our Next Event
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join the movement and be part of transformative gatherings that inspire and empower.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/get-involved">
              Register for Events
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
