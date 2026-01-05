import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import summitImage from "@/assets/summit-event.jpg";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const EventHighlight = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set target date to November 1st, 2026
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

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
      <div className="bg-primary text-primary-foreground text-3xl md:text-4xl font-serif font-bold w-16 md:w-20 h-16 md:h-20 rounded-xl flex items-center justify-center shadow-lg">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-xs md:text-sm text-muted-foreground mt-2 font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <section className="section-padding bg-muted">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
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

          {/* Content */}
          <div>
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">Upcoming Event</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
              Northern Women Summit 2026
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Join hundreds of Northern women for a day of inspiration, networking, skill-building, 
              and celebration. Together, we'll learn, grow, and strengthen our bonds as a community.
            </p>

            {/* Event Details */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={20} className="text-primary" />
                <span>November 1st, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={20} className="text-primary" />
                <span>Northern Nigeria</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users size={20} className="text-primary" />
                <span>500+ Attendees Expected</span>
              </div>
            </div>

            {/* Countdown */}
            <div className="mb-8">
              <p className="text-sm font-medium text-foreground mb-4">Event starts in:</p>
              <div className="flex gap-4">
                <TimeBlock value={timeLeft.days} label="Days" />
                <TimeBlock value={timeLeft.hours} label="Hours" />
                <TimeBlock value={timeLeft.minutes} label="Mins" />
                <TimeBlock value={timeLeft.seconds} label="Secs" />
              </div>
            </div>

            <Button variant="gold" size="xl" asChild>
              <Link to="/events">
                Register Now
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHighlight;
