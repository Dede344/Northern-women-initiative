// // import Layout from "@/components/layout/Layout";
// // import { Button } from "@/components/ui/button";
// // import { Link } from "react-router-dom";
// // import { ArrowRight, Calendar, MapPin, Users, Clock, GraduationCap, BookOpen, Heart, Briefcase } from "lucide-react";
// // import { useState, useEffect } from "react";
// // import summitImage from "@/assets/summit-event.jpg";

// // interface TimeLeft {
// //   days: number;
// //   hours: number;
// //   minutes: number;
// //   seconds: number;
// // }

// // const upcomingEvents = [
// //   {
// //     title: "Northern Women Summit 2026",
// //     date: "November 1st, 2026",
// //     time: "9:00 AM - 5:00 PM",
// //     location: "Northern Nigeria",
// //     description: "Our flagship annual event bringing together hundreds of Northern women for inspiration, networking, and skill-building.",
// //     featured: true,
// //   },
// //   {
// //     title: "Leadership Workshop Series",
// //     date: "Monthly",
// //     time: "2:00 PM - 4:00 PM",
// //     location: "Virtual",
// //     description: "Monthly workshops focused on developing leadership skills and building confidence.",
// //     featured: false,
// //   },
// //   {
// //     title: "Skill Acquisition Training",
// //     date: "Bi-weekly",
// //     time: "10:00 AM - 1:00 PM",
// //     location: "Various Locations",
// //     description: "Hands-on training in various skills including tailoring, catering, and digital literacy.",
// //     featured: false,
// //   },
// //   {
// //     title: "Community Outreach Day",
// //     date: "Quarterly",
// //     time: "All Day",
// //     location: "Community Centers",
// //     description: "Join us in giving back through food drives, clothing donations, and educational support.",
// //     featured: false,
// //   },
// // ];

// // const pastEvents = [
// //   { title: "Women in Business Conference 2025", attendees: 200 },
// //   { title: "Girls Education Summit", attendees: 150 },
// //   { title: "Community Health Outreach", attendees: 300 },
// //   { title: "Entrepreneurship Bootcamp", attendees: 80 },
// // ];

// // const Events = () => {
// //   const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

// //   useEffect(() => {
// //     const targetDate = new Date("2026-11-01T09:00:00").getTime();

// //     const calculateTimeLeft = () => {
// //       const now = new Date().getTime();
// //       const difference = targetDate - now;

// //       if (difference > 0) {
// //         setTimeLeft({
// //           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
// //           hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
// //           minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
// //           seconds: Math.floor((difference % (1000 * 60)) / 1000),
// //         });
// //       }
// //     };

// //     calculateTimeLeft();
// //     const timer = setInterval(calculateTimeLeft, 1000);
// //     return () => clearInterval(timer);
// //   }, []);

// //   return (
// //     <Layout>
// //       {/* Hero Section */}
// //       <section className="bg-gradient-hero py-20">
// //         <div className="container-section">
// //           <div className="max-w-3xl">
// //             <span className="text-secondary font-medium text-sm uppercase tracking-wider">Events</span>
// //             <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
// //               Join Our Gatherings
// //             </h1>
// //             <p className="text-lg text-primary-foreground/90">
// //               From our flagship summit to workshops and community outreach, find events that inspire and connect.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Featured Event - Summit */}
// //       <section className="section-padding bg-background">
// //         <div className="container-section">
// //           <div className="grid lg:grid-cols-2 gap-12 items-center">
// //             <div className="relative rounded-2xl overflow-hidden shadow-elevated">
// //               <img
// //                 src={summitImage}
// //                 alt="Northern Women Summit"
// //                 className="w-full h-[400px] object-cover"
// //               />
// //               <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-medium text-sm">
// //                 Featured Event
// //               </div>
// //             </div>
// //             <div>
// //               <span className="text-secondary font-medium text-sm uppercase tracking-wider">Mark Your Calendar</span>
// //               <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
// //                 Northern Women Summit 2026
// //               </h2>
// //               <p className="text-muted-foreground text-lg mb-6">
// //                 Our flagship annual event bringing together hundreds of Northern women for a day of 
// //                 inspiration, networking, skill-building, and celebration.
// //               </p>
              
// //               <div className="space-y-3 mb-8">
// //                 <div className="flex items-center gap-3 text-muted-foreground">
// //                   <Calendar size={20} className="text-primary" />
// //                   <span>November 1st, 2026</span>
// //                 </div>
// //                 <div className="flex items-center gap-3 text-muted-foreground">
// //                   <Clock size={20} className="text-primary" />
// //                   <span>9:00 AM - 5:00 PM</span>
// //                 </div>
// //                 <div className="flex items-center gap-3 text-muted-foreground">
// //                   <MapPin size={20} className="text-primary" />
// //                   <span>Northern Nigeria</span>
// //                 </div>
// //                 <div className="flex items-center gap-3 text-muted-foreground">
// //                   <Users size={20} className="text-primary" />
// //                   <span>500+ Expected Attendees</span>
// //                 </div>
// //               </div>

// //               {/* Countdown */}
// //               <div className="mb-8 p-6 bg-muted rounded-xl">
// //                 <p className="text-sm font-medium text-foreground mb-4">Event starts in:</p>
// //                 <div className="flex gap-4">
// //                   {[
// //                     { value: timeLeft.days, label: "Days" },
// //                     { value: timeLeft.hours, label: "Hours" },
// //                     { value: timeLeft.minutes, label: "Mins" },
// //                     { value: timeLeft.seconds, label: "Secs" },
// //                   ].map((item) => (
// //                     <div key={item.label} className="text-center">
// //                       <div className="bg-primary text-primary-foreground text-2xl font-serif font-bold w-14 h-14 rounded-lg flex items-center justify-center">
// //                         {item.value.toString().padStart(2, "0")}
// //                       </div>
// //                       <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>

// //               <Button variant="gold" size="xl" asChild>
// //                 <Link to="/get-involved">
// //                   Register Now
// //                   <ArrowRight size={20} />
// //                 </Link>
// //               </Button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Upcoming Events - 2026 Programs */}
// //       <section className="section-padding bg-muted">
// //         <div className="container-section">
// //           <div className="text-center mb-12">
// //             <span className="text-secondary font-medium text-sm uppercase tracking-wider">What's Coming</span>
// //             <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
// //               Our 2026 Programs
// //             </h2>
// //             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
// //               At Northern Women Initiative For Empowerment, Growth and Development, 2026 is a year of giving, empowering, and creating opportunities for Northern women and girls. Our programs are designed to address critical needs, support growth, and build stronger communities.
// //             </p>
// //           </div>
// //           <div className="max-w-4xl mx-auto">
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //               <div className="bg-card rounded-2xl p-6 border border-border shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer">
// //                 <h3 className="font-serif text-xl font-bold text-primary mb-2">Ramadan Feeding Initiative</h3>
// //                 <p className="text-muted-foreground text-lg">Providing nutritious meals to communities during Ramadan, spreading hope, care, and support to those in need.</p>
// //               </div>
// //               <div className="bg-card rounded-2xl p-6 border border-border shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer">
// //                 <h3 className="font-serif text-xl font-bold text-primary mb-2">Supporting School Girls</h3>
// //                 <p className="text-muted-foreground text-lg">Supplying essential educational materials to girls, ensuring they have the tools they need to succeed academically and reach their full potential.</p>
// //               </div>
// //               <div className="bg-card rounded-2xl p-6 border border-border shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer">
// //                 <h3 className="font-serif text-xl font-bold text-primary mb-2">Empowering Small Business Women</h3>
// //                 <p className="text-muted-foreground text-lg">Offering financial support and resources to women entrepreneurs, helping them grow their businesses and achieve independence.</p>
// //               </div>
// //               <div className="bg-card rounded-2xl p-6 border border-border shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer">
// //                 <h3 className="font-serif text-xl font-bold text-primary mb-2">Mentorship & Business Support</h3>
// //                 <p className="text-muted-foreground text-lg">Guiding women through mentorship, advising them on business growth, and supporting them in advertising and promoting their ventures to reach wider markets.</p>
// //               </div>
// //             </div>
// //             <p className="mt-8 text-muted-foreground text-lg text-center">
// //               Through these programs, we are committed to uplifting Northern women and girls, fostering growth, and creating lasting, positive impact in their lives, families, and communities.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Past Events */}
// //       <section className="section-padding bg-background">
// //         <div className="container-section">
// //           <div className="text-center mb-12">
// //             <span className="text-secondary font-medium text-sm uppercase tracking-wider">Our Journey</span>
// //             <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
// //               Past Events
// //             </h2>
// //             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
// //               A glimpse into the impactful events we've hosted, bringing together hundreds of Northern women.
// //             </p>
// //           </div>
// //           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {pastEvents.map((event) => (
// //               <div key={event.title} className="bg-muted rounded-2xl p-6 text-center card-hover">
// //                 <div className="text-4xl font-serif font-bold text-primary mb-2">{event.attendees}+</div>
// //                 <div className="text-sm text-muted-foreground">Attendees</div>
// //                 <h3 className="font-serif font-semibold text-foreground mt-4">{event.title}</h3>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Meet and Greet 2025 Gallery */}
// //       <section className="section-padding bg-background">
// //         <div className="container-section">
// //           <div className="text-center mb-10">
// //             <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">Meet and Greet 2025</h2>
// //           </div>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
// //             {[...Array(10)].map((_, i) => (
// //               <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer">
// //                 <img
// //                   src={`/assets/past-events/meet-greet-2025-${i+1}.jpg`}
// //                   alt={`Meet and Greet 2025 - ${i+1}`}
// //                   className="w-full h-48 object-cover mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:brightness-90 group-hover:blur-[1px]"
// //                   onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/300x192')}
// //                 />
// //                 <span className="text-primary text-base font-semibold mb-2 group-hover:text-secondary transition-colors duration-300">Meet and Greet 2025</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Northern Women Summit 2025 Gallery */}
// //       <section className="section-padding bg-background">
// //         <div className="container-section">
// //           <div className="text-center mb-10">
// //             <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">Northern Women Summit 2025</h2>
// //           </div>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
// //             {[...Array(10)].map((_, i) => (
// //               <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer">
// //                 <img
// //                   src={`/assets/past-events/summit-2025-${i+1}.jpg`}
// //                   alt={`Northern Women Summit 2025 - ${i+1}`}
// //                   className="w-full h-48 object-cover mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:brightness-90 group-hover:blur-[1px]"
// //                   onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/300x192')}
// //                 />
// //                 <span className="text-primary text-base font-semibold mb-2 group-hover:text-secondary transition-colors duration-300">Northern Women Summit 2025</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Past Events
// //       <section className="section-padding bg-background">
// //         <div className="container-section">
// //           <div className="text-center mb-12">
// //             <span className="text-secondary font-medium text-sm uppercase tracking-wider">Our Journey</span>
// //             <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
// //               Past Events
// //             </h2>
// //             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
// //               A glimpse into the impactful events we've hosted, bringing together hundreds of Northern women.
// //             </p>
// //           </div>
// //           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {pastEvents.map((event) => (
// //               <div key={event.title} className="bg-muted rounded-2xl p-6 text-center card-hover">
// //                 <div className="text-4xl font-serif font-bold text-primary mb-2">{event.attendees}+</div>
// //                 <div className="text-sm text-muted-foreground">Attendees</div>
// //                 <h3 className="font-serif font-semibold text-foreground mt-4">{event.title}</h3>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section> */}

// //       {/* CTA */}
// //       {/* <section className="section-padding bg-primary">
// //         <div className="container-section text-center">
// //           <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
// //             Don't Miss Our Next Event
// //           </h2>
// //           <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
// //             Join the movement and be part of transformative gatherings that inspire and empower.
// //           </p>
// //           <Button variant="hero" size="xl" asChild>
// //             <Link to="/get-involved">
// //               Register for Events
// //               <ArrowRight size={20} />
// //             </Link>
// //           </Button>
// //         </div>
// //       </section>
// //     </Layout>
// //   );
// // };

// // export default Events; */}

// import Layout from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { ArrowRight, Calendar, MapPin, Users, Clock, GraduationCap, BookOpen, Heart, Briefcase } from "lucide-react";
// import { useState, useEffect } from "react";
// import summitImage from "@/assets/summit-event.jpg";

// interface TimeLeft {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

// const upcomingEvents = [
//   {
//     title: "Northern Women Summit 2026",
//     date: "November 1st, 2026",
//     time: "9:00 AM - 5:00 PM",
//     location: "Northern Nigeria",
//     description: "Our flagship annual event bringing together hundreds of Northern women for inspiration, networking, and skill-building.",
//     featured: true,
//   },
//   {
//     title: "Leadership Workshop Series",
//     date: "Monthly",
//     time: "2:00 PM - 4:00 PM",
//     location: "Virtual",
//     description: "Monthly workshops focused on developing leadership skills and building confidence.",
//     featured: false,
//   },
//   {
//     title: "Skill Acquisition Training",
//     date: "Bi-weekly",
//     time: "10:00 AM - 1:00 PM",
//     location: "Various Locations",
//     description: "Hands-on training in various skills including tailoring, catering, and digital literacy.",
//     featured: false,
//   },
//   {
//     title: "Community Outreach Day",
//     date: "Quarterly",
//     time: "All Day",
//     location: "Community Centers",
//     description: "Join us in giving back through food drives, clothing donations, and educational support.",
//     featured: false,
//   },
// ];

// const pastEvents = [
//   { title: "Women in Business Conference 2025", attendees: 200 },
//   { title: "Girls Education Summit", attendees: 150 },
//   { title: "Community Health Outreach", attendees: 300 },
//   { title: "Entrepreneurship Bootcamp", attendees: 80 },
// ];

// // Programs for 2026 section
// const programs = [
//   {
//     id: "ramadan",
//     icon: Heart,
//     title: "Ramadan Feeding Initiative",
//     description: "Providing nutritious meals to communities during Ramadan, spreading hope, care, and support to those in need.",
//     features: [],
//   },
//   {
//     id: "school-girls",
//     icon: BookOpen,
//     title: "Supporting School Girls",
//     description: "Supplying essential educational materials to girls, ensuring they have the tools they need to succeed academically and reach their full potential.",
//     features: [],
//   },
//   {
//     id: "small-business",
//     icon: Briefcase,
//     title: "Empowering Small Business Women",
//     description: "Offering financial support and resources to women entrepreneurs, helping them grow their businesses and achieve independence.",
//     features: [],
//   },
//   {
//     id: "mentorship",
//     icon: GraduationCap,
//     title: "Mentorship & Business Support",
//     description: "Guiding women through mentorship, advising them on business growth, and supporting them in advertising and promoting their ventures to reach wider markets.",
//     features: [],
//   },
// ];

// const Events = () => {
//   const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

//   useEffect(() => {
//     const targetDate = new Date("2026-11-01T09:00:00").getTime();

//     const calculateTimeLeft = () => {
//       const now = new Date().getTime();
//       const difference = targetDate - now;

//       if (difference > 0) {
//         setTimeLeft({
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((difference % (1000 * 60)) / 1000),
//         });
//       }
//     };

//     calculateTimeLeft();
//     const timer = setInterval(calculateTimeLeft, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="bg-gradient-hero py-20">
//         <div className="container-section">
//           <div className="max-w-3xl">
//             <span className="text-secondary font-medium text-sm uppercase tracking-wider">Events</span>
//             <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
//               Join Our Gatherings
//             </h1>
//             <p className="text-lg text-primary-foreground/90">
//               From our flagship summit to workshops and community outreach, find events that inspire and connect.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Featured Event - Summit */}
//       <section className="section-padding bg-background">
//         <div className="container-section">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="relative rounded-2xl overflow-hidden shadow-elevated">
//               <img
//                 src={summitImage}
//                 alt="Northern Women Summit"
//                 className="w-full h-[400px] object-cover"
//               />
//               <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-medium text-sm">
//                 Featured Event
//               </div>
//             </div>
//             <div>
//               <span className="text-secondary font-medium text-sm uppercase tracking-wider">Mark Your Calendar</span>
//               <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
//                 Northern Women Summit 2026
//               </h2>
//               <p className="text-muted-foreground text-lg mb-6">
//                 Our flagship annual event bringing together hundreds of Northern women for a day of 
//                 inspiration, networking, skill-building, and celebration.
//               </p>
              
//               <div className="space-y-3 mb-8">
//                 <div className="flex items-center gap-3 text-muted-foreground">
//                   <Calendar size={20} className="text-primary" />
//                   <span>November 1st, 2026</span>
//                 </div>
//                 <div className="flex items-center gap-3 text-muted-foreground">
//                   <Clock size={20} className="text-primary" />
//                   <span>9:00 AM - 5:00 PM</span>
//                 </div>
//                 <div className="flex items-center gap-3 text-muted-foreground">
//                   <MapPin size={20} className="text-primary" />
//                   <span>Northern Nigeria</span>
//                 </div>
//                 <div className="flex items-center gap-3 text-muted-foreground">
//                   <Users size={20} className="text-primary" />
//                   <span>500+ Expected Attendees</span>
//                 </div>
//               </div>

//               {/* Countdown */}
//               <div className="mb-8 p-6 bg-muted rounded-xl">
//                 <p className="text-sm font-medium text-foreground mb-4">Event starts in:</p>
//                 <div className="flex gap-4">
//                   {[
//                     { value: timeLeft.days, label: "Days" },
//                     { value: timeLeft.hours, label: "Hours" },
//                     { value: timeLeft.minutes, label: "Mins" },
//                     { value: timeLeft.seconds, label: "Secs" },
//                   ].map((item) => (
//                     <div key={item.label} className="text-center">
//                       <div className="bg-primary text-primary-foreground text-2xl font-serif font-bold w-14 h-14 rounded-lg flex items-center justify-center">
//                         {item.value.toString().padStart(2, "0")}
//                       </div>
//                       <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <Button variant="gold" size="xl" asChild>
//                 <Link to="/get-involved">
//                   Register Now
//                   <ArrowRight size={20} />
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2026 Programs Section with Donate Buttons */}
//       <section className="section-padding bg-background">
//         <div className="container-section">
//           <div className="space-y-16">
//             {programs.map((program, index) => (
//               <div
//                 key={program.id}
//                 id={program.id}
//                 className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
//               >
//                 <div className={index % 2 === 1 ? "lg:order-2" : ""}>
//                   <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
//                     <program.icon className="w-8 h-8 text-primary" />
//                   </div>
//                   <h2 className="text-3xl font-serif font-bold text-foreground mb-4">{program.title}</h2>
//                   <p className="text-muted-foreground text-lg mb-6">{program.description}</p>
//                   <Button variant="burgundy" size="lg" asChild>
//                     <Link to="/donate">
//                       Donate
//                       <ArrowRight size={18} />
//                     </Link>
//                   </Button>
//                 </div>
//                 <div className={`rounded-2xl bg-muted p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
//                   <div className="aspect-square flex items-center justify-center">
//                     <program.icon className="w-32 h-32 text-primary/20" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Past Events */}
//       <section className="section-padding bg-background">
//         <div className="container-section">
//           <div className="text-center mb-12">
//             <span className="text-secondary font-medium text-sm uppercase tracking-wider">Our Journey</span>
//             <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
//               Past Events
//             </h2>
//             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//               A glimpse into the impactful events we've hosted, bringing together hundreds of Northern women.
//             </p>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {pastEvents.map((event) => (
//               <div key={event.title} className="bg-muted rounded-2xl p-6 text-center card-hover">
//                 <div className="text-4xl font-serif font-bold text-primary mb-2">{event.attendees}+</div>
//                 <div className="text-sm text-muted-foreground">Attendees</div>
//                 <h3 className="font-serif font-semibold text-foreground mt-4">{event.title}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="section-padding bg-primary">
//         <div className="container-section text-center">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
//             Don't Miss Our Next Event
//           </h2>
//           <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
//             Join the movement and be part of transformative gatherings that inspire and empower.
//           </p>
//           <Button variant="hero" size="xl" asChild>
//             <Link to="/get-involved">
//               Register for Events
//               <ArrowRight size={20} />
//             </Link>
//           </Button>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Events;

// import Layout from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { ArrowRight, Calendar, MapPin, Users, Clock } from "lucide-react";
// import { useState, useEffect } from "react";
// import summitImage from "@/assets/summit-event.jpg";

// // Program images
// import schoolgirl from "@/assets/schoolgirl.jpg";
// import businesssupport from "@/assets/businesssupport.jpg";
// import womenbusiness from "@/assets/womenbusiness.jpg";
// import ramadan from "@/assets/ramadan.jpg";

// interface TimeLeft {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

// const upcomingEvents = [
//   {
//     title: "Northern Women Summit 2026",
//     date: "November 1st, 2026",
//     time: "9:00 AM - 5:00 PM",
//     location: "Northern Nigeria",
//     description: "Our flagship annual event bringing together hundreds of Northern women for inspiration, networking, and skill-building.",
//     featured: true,
//   },
//   {
//     title: "Leadership Workshop Series",
//     date: "Monthly",
//     time: "2:00 PM - 4:00 PM",
//     location: "Virtual",
//     description: "Monthly workshops focused on developing leadership skills and building confidence.",
//     featured: false,
//   },
//   {
//     title: "Skill Acquisition Training",
//     date: "Bi-weekly",
//     time: "10:00 AM - 1:00 PM",
//     location: "Various Locations",
//     description: "Hands-on training in various skills including tailoring, catering, and digital literacy.",
//     featured: false,
//   },
//   {
//     title: "Community Outreach Day",
//     date: "Quarterly",
//     time: "All Day",
//     location: "Community Centers",
//     description: "Join us in giving back through food drives, clothing donations, and educational support.",
//     featured: false,
//   },
// ];

// const pastEvents = [
//   { title: "Women in Business Conference 2025", attendees: 200 },
//   { title: "Girls Education Summit", attendees: 150 },
//   { title: "Community Health Outreach", attendees: 300 },
//   { title: "Entrepreneurship Bootcamp", attendees: 80 },
// ];

// const programs = [
//   {
//     id: "ramadan",
//     title: "Ramadan Feeding Initiative",
//     description:
//       "Providing nutritious meals to communities during Ramadan, spreading hope, care, and support to those in need.",
//     image: ramadan,
//   },
//   {
//     id: "schoolgirls",
//     title: "Supporting School Girls",
//     description:
//       "Supplying essential educational materials to girls, ensuring they have the tools they need to succeed academically and reach their full potential.",
//     image: schoolgirl,
//   },
//   {
//     id: "smallbusiness",
//     title: "Empowering Small Business Women",
//     description:
//       "Offering financial support and resources to women entrepreneurs, helping them grow their businesses and achieve independence.",
//     image: womenbusiness,
//   },
//   {
//     id: "mentorship",
//     title: "Mentorship & Business Support",
//     description:
//       "Guiding women through mentorship, advising them on business growth, and supporting them in advertising and promoting their ventures to reach wider markets.",
//     image: businesssupport,
//   },
// ];

// const Events = () => {
//   const [timeLeft, setTimeLeft] = useState<TimeLeft>({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const targetDate = new Date("2026-11-01T09:00:00").getTime();

//     const calculateTimeLeft = () => {
//       const now = new Date().getTime();
//       const difference = targetDate - now;

//       if (difference > 0) {
//         setTimeLeft({
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((difference % (1000 * 60)) / 1000),
//         });
//       }
//     };

//     calculateTimeLeft();
//     const timer = setInterval(calculateTimeLeft, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="bg-gradient-hero py-20">
//         <div className="container-section">
//           <div className="max-w-3xl">
//             <span className="text-secondary font-medium text-sm uppercase tracking-wider">
//               Events
//             </span>
//             <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
//               Join Our Gatherings
//             </h1>
//             <p className="text-lg text-primary-foreground/90">
//               From our flagship summit to workshops and community outreach, find events that inspire and connect.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Featured Event - Summit */}
//       <section className="section-padding bg-background">
//         <div className="container-section">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="relative rounded-2xl overflow-hidden shadow-elevated">
//               <img
//                 src={summitImage}
//                 alt="Northern Women Summit"
//                 className="w-full h-[400px] object-cover"
//               />
//               <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-medium text-sm">
//                 Featured Event
//               </div>
//             </div>
//             <div>
//               <span className="text-secondary font-medium text-sm uppercase tracking-wider">
//                 Mark Your Calendar
//               </span>
//               <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
//                 Northern Women Summit 2026
//               </h2>
//               <p className="text-muted-foreground text-lg mb-6">
//                 Our flagship annual event bringing together hundreds of Northern women for a day of inspiration, networking, skill-building, and celebration.
//               </p>

//               <div className="space-y-3 mb-8">
//                 <div className="flex items-center gap-3 text-muted-foreground">
//                   <Calendar size={20} className="text-primary" />
//                   <span>November 1st, 2026</span>
//                 </div>
//                 <div className="flex items-center gap-3 text-muted-foreground">
//                   <Clock size={20} className="text-primary" />
//                   <span>9:00 AM - 5:00 PM</span>
//                 </div>
//                 <div className="flex items-center gap-3 text-muted-foreground">
//                   <MapPin size={20} className="text-primary" />
//                   <span>Northern Nigeria</span>
//                 </div>
//                 <div className="flex items-center gap-3 text-muted-foreground">
//                   <Users size={20} className="text-primary" />
//                   <span>500+ Expected Attendees</span>
//                 </div>
//               </div>

//               {/* Countdown */}
//               <div className="mb-8 p-6 bg-muted rounded-xl">
//                 <p className="text-sm font-medium text-foreground mb-4">Event starts in:</p>
//                 <div className="flex gap-4">
//                   {[
//                     { value: timeLeft.days, label: "Days" },
//                     { value: timeLeft.hours, label: "Hours" },
//                     { value: timeLeft.minutes, label: "Mins" },
//                     { value: timeLeft.seconds, label: "Secs" },
//                   ].map((item) => (
//                     <div key={item.label} className="text-center">
//                       <div className="bg-primary text-primary-foreground text-2xl font-serif font-bold w-14 h-14 rounded-lg flex items-center justify-center">
//                         {item.value.toString().padStart(2, "0")}
//                       </div>
//                       <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <Button variant="gold" size="xl" asChild>
//                 <Link to="/get-involved">
//                   Register Now
//                   <ArrowRight size={20} />
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Events - 2026 Programs */}
//       <section className="section-padding bg-muted">
//         <div className="container-section">
//           <div className="text-center mb-12">
//             <span className="text-secondary font-medium text-sm uppercase tracking-wider">
//               What's Coming
//             </span>
//             <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
//               Our 2026 Programs
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               At Northern Women Initiative For Empowerment, Growth and Development, 2026 is a year of giving, empowering, and creating opportunities for Northern women and girls. Our programs are designed to address critical needs, support growth, and build stronger communities.
//             </p>
//           </div>

//           {/* New H3 Heading */}
//           <h3 className="text-2xl font-serif font-semibold text-foreground mb-8 text-center">
//             Our Key Programs Include:
//           </h3>

//           <div className="space-y-16">
//             {programs.map((program, index) => (
//               <div
//                 key={program.id}
//                 className={`grid lg:grid-cols-2 gap-12 items-center ${
//                   index % 2 === 1 ? "lg:flex-row-reverse" : ""
//                 }`}
//               >
//                 <div className={index % 2 === 1 ? "lg:order-2" : ""}>
//                   <h3 className="text-3xl font-serif font-bold text-foreground mb-4">{program.title}</h3>
//                   <p className="text-muted-foreground text-lg mb-6">{program.description}</p>
//                   <Button variant="burgundy" size="lg" className="mt-2">
//                     Donate
//                   </Button>
//                 </div>
//                 <div className={`rounded-2xl overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}>
//                   <img
//                     src={program.image}
//                     alt={program.title}
//                     className="w-full h-64 object-cover rounded-2xl"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Past Events */}
//       <section className="section-padding bg-background">
//         <div className="container-section">
//           <div className="text-center mb-12">
//             <span className="text-secondary font-medium text-sm uppercase tracking-wider">Our Journey</span>
//             <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
//               Past Events
//             </h2>
//             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//               A glimpse into the impactful events we've hosted, bringing together hundreds of Northern women.
//             </p>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {pastEvents.map((event) => (
//               <div key={event.title} className="bg-muted rounded-2xl p-6 text-center card-hover">
//                 <div className="text-4xl font-serif font-bold text-primary mb-2">{event.attendees}+</div>
//                 <div className="text-sm text-muted-foreground">Attendees</div>
//                 <h3 className="font-serif font-semibold text-foreground mt-4">{event.title}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Other sections like gallery and CTA remain unchanged */}
//     </Layout>
//   );
// };

// export default Events;

// import Layout from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { ArrowRight, Calendar, MapPin, Users, Clock } from "lucide-react";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import summitImage from "@/assets/summit-event.jpg";

// // Program images
// import schoolgirl from "@/assets/schoolgirl.jpg";
// import businesssupport from "@/assets/businesssupport.jpg";
// import womenbusiness from "@/assets/womenbusiness.jpg";
// import ramadan from "@/assets/ramadan.jpg";

// interface TimeLeft {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

// const pastEvents = [
//   { title: "Women in Business Conference 2025", attendees: 200 },
//   { title: "Girls Education Summit", attendees: 150 },
//   { title: "Community Health Outreach", attendees: 300 },
//   { title: "Entrepreneurship Bootcamp", attendees: 80 },
// ];

// const programs = [
//   {
//     id: "ramadan",
//     title: "Ramadan Feeding Initiative",
//     description:
//       "Providing nutritious meals to vulnerable communities during Ramadan, promoting compassion, unity, and dignity.",
//     image: ramadan,
//   },
//   {
//     id: "schoolgirls",
//     title: "Supporting School Girls",
//     description:
//       "Supplying essential educational materials to girls, ensuring they remain in school and achieve academic success.",
//     image: schoolgirl,
//   },
//   {
//     id: "smallbusiness",
//     title: "Empowering Small Business Women",
//     description:
//       "Providing financial support, resources, and training to women entrepreneurs to grow sustainable businesses.",
//     image: womenbusiness,
//   },
//   {
//     id: "mentorship",
//     title: "Mentorship & Business Support",
//     description:
//       "Guiding women through mentorship, business advisory services, advertising support, and market access.",
//     image: businesssupport,
//   },
// ];

// const Events = () => {
//   const [timeLeft, setTimeLeft] = useState<TimeLeft>({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const targetDate = new Date("2026-11-01T09:00:00").getTime();
//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const diff = targetDate - now;
//       if (diff > 0) {
//         setTimeLeft({
//           days: Math.floor(diff / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
//           minutes: Math.floor((diff / (1000 * 60)) % 60),
//           seconds: Math.floor((diff / 1000) % 60),
//         });
//       }
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <Layout>
//       {/* HERO */}
//       <section className="bg-gradient-hero py-20">
//         <div className="container-section text-left">
//           <span className="text-secondary font-medium text-sm uppercase tracking-wider">
//             Events
//           </span>
//           <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
//             Join Our Gatherings
//           </h1>
//           <p className="text-lg text-primary-foreground/90 max-w-2xl">
//             From our flagship summit to outreach programs and empowerment initiatives,
//             our events inspire, connect, and uplift Northern women.
//           </p>
//         </div>
//       </section>

//       {/* FEATURED SUMMIT */}
//       <section className="section-padding bg-background">
//         <div className="container-section grid lg:grid-cols-2 gap-12 items-center">
//           <div className="relative rounded-2xl overflow-hidden shadow-elevated">
//             <img
//               src={summitImage}
//               alt="Northern Women Summit"
//               className="w-full h-[420px] object-cover"
//             />
//             <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
//               Featured Event
//             </span>
//           </div>

//           <div>
//             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
//               Northern Women Summit 2026
//             </h2>
//             <p className="text-muted-foreground text-lg mb-6">
//               Our flagship annual summit bringing together Northern women for leadership,
//               empowerment, networking, and sustainable development.
//             </p>
//             <div className="space-y-3 mb-8">
//               <div className="flex items-center gap-3">
//                 <Calendar className="text-primary" /> November 1st, 2026
//               </div>
//               <div className="flex items-center gap-3">
//                 <Clock className="text-primary" /> 9:00 AM – 5:00 PM
//               </div>
//               <div className="flex items-center gap-3">
//                 <MapPin className="text-primary" /> Northern Nigeria
//               </div>
//               <div className="flex items-center gap-3">
//                 <Users className="text-primary" /> 500+ Attendees
//               </div>
//             </div>
//             <div className="flex gap-4 mb-8">
//               {Object.entries(timeLeft).map(([label, value]) => (
//                 <div key={label} className="text-center">
//                   <div className="w-14 h-14 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-xl">
//                     {String(value).padStart(2, "0")}
//                   </div>
//                   <span className="text-xs capitalize">{label}</span>
//                 </div>
//               ))}
//             </div>
//             <Button variant="gold" size="xl" asChild>
//               <Link to="/get-involved">
//                 Register Now <ArrowRight size={18} />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* OUR 2026 PROGRAMS */}
//       <section className="section-padding bg-muted">
//         <div className="container-section">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold text-center mb-4">
//             Our 2026 Programs
//           </h2>
//           <h3 className="text-xl font-serif text-center mb-12">
//             Our Key Programs Include:
//           </h3>

//           <div className="space-y-20">
//             {programs.map((program, index) => {
//               const isEven = index % 2 === 0;
//               return (
//                 <motion.div
//                   key={program.id}
//                   initial={{ opacity: 0, x: isEven ? -100 : 100 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   transition={{ duration: 0.8 }}
//                   className={`grid lg:grid-cols-2 gap-12 items-center ${
//                     !isEven ? "lg:flex-row-reverse" : ""
//                   }`}
//                 >
//                   <div>
//                     <h3 className="text-3xl font-serif font-bold mb-4">
//                       {program.title}
//                     </h3>
//                     <p className="text-muted-foreground text-lg mb-6">
//                       {program.description}
//                     </p>
//                     <Button variant="burgundy">Donate</Button>
//                   </div>
//                   <img
//                     src={program.image}
//                     className="h-64 w-full object-cover rounded-2xl"
//                   />
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* PAST EVENTS */}
//       <section className="section-padding bg-background">
//         <div className="container-section">
//           <div className="text-center mb-12">
//             <span className="text-secondary font-medium text-sm uppercase tracking-wider">
//               Our Journey
//             </span>
//             <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
//               Past Events
//             </h2>
//             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//               A glimpse into the impactful events we've hosted, bringing together hundreds of Northern women.
//             </p>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {pastEvents.map((event) => (
//               <div
//                 key={event.title}
//                 className="bg-muted rounded-2xl p-6 text-center card-hover"
//               >
//                 <div className="text-4xl font-serif font-bold text-primary mb-2">
//                   {event.attendees}+
//                 </div>
//                 <div className="text-sm text-muted-foreground">Attendees</div>
//                 <h3 className="font-serif font-semibold text-foreground mt-4">
//                   {event.title}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* OUR PREVIOUS EVENTS */}
//       <section className="section-padding bg-background">
//         <div className="container-section">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">
//             Our Previous Events
//           </h2>

//           {/* Meet & Greet 2025 */}
//           <div className="text-center mb-6">
//             <h3 className="text-2xl font-serif font-bold text-burgundy mb-4">
//               Meet and Greet 2025
//             </h3>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {[...Array(10)].map((_, i) => (
//               <motion.img
//                 key={i}
//                 src={`/assets/past-events/meet-greet-2025-${i + 1}.jpg`}
//                 alt={`Meet and Greet 2025 - ${i + 1}`}
//                 className="w-full h-48 object-cover rounded-2xl"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/300x192')}
//               />
//             ))}
//           </div>

//           {/* Northern Women Summit 2025 */}
//           <div className="text-center mt-12 mb-6">
//             <h3 className="text-2xl font-serif font-bold text-burgundy mb-4">
//               Northern Women Summit 2025
//             </h3>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {[...Array(10)].map((_, i) => (
//               <motion.img
//                 key={i}
//                 src={`/assets/past-events/summit-2025-${i + 1}.jpg`}
//                 alt={`Northern Women Summit 2025 - ${i + 1}`}
//                 className="w-full h-48 object-cover rounded-2xl"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/300x192')}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Events;

// import Layout from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { ArrowRight, Calendar, MapPin, Users, Clock } from "lucide-react";
// import { motion, Variants } from "framer-motion";

// // Featured
// import summitImage from "@/assets/summit-event.jpg";

// // 2026 Programs
// import ramadan from "@/assets/ramadan.jpg";
// import schoolgirl from "@/assets/schoolgirl.jpg";
// import womenbusiness from "@/assets/womenbusiness.jpg";
// import businesssupport from "@/assets/businesssupport.jpg";

// // Gallery Images (ns1 – ns14)
// import ns1 from "@/assets/ns1.jpg";
// import ns2 from "@/assets/ns2.jpg";
// import ns3 from "@/assets/ns3.jpg";
// import ns4 from "@/assets/ns4.jpg";
// import ns5 from "@/assets/ns5.jpg";
// import ns6 from "@/assets/ns6.jpg";
// import ns7 from "@/assets/ns7.jpg";
// import ns8 from "@/assets/ns8.jpg";
// import ns9 from "@/assets/ns9.jpg";
// import ns10 from "@/assets/ns10.jpg";
// import ns11 from "@/assets/ns11.jpg";
// import ns12 from "@/assets/ns12.jpg";
// import ns13 from "@/assets/ns13.jpg";
// import ns14 from "@/assets/ns14.jpg";

// /* ================= DATA ================= */

// const programs = [
//   {
//     id: "ramadan",
//     title: "Ramadan Feeding Initiative",
//     description:
//       "Providing nutritious meals to communities during Ramadan, spreading hope, care, and support to those in need.",
//     image: ramadan,
//   },
//   {
//     id: "schoolgirls",
//     title: "Supporting School Girls",
//     description:
//       "Supplying essential educational materials to girls, ensuring they have the tools they need to succeed academically.",
//     image: schoolgirl,
//   },
//   {
//     id: "womenbusiness",
//     title: "Empowering Small Business Women",
//     description:
//       "Offering financial support and resources to women entrepreneurs, helping them grow sustainable businesses.",
//     image: womenbusiness,
//   },
//   {
//     id: "mentorship",
//     title: "Mentorship & Business Support",
//     description:
//       "Guiding women through mentorship, business advisory, advertising, and market access.",
//     image: businesssupport,
//   },
// ];

// const summitImages = [
//   ns1, ns2, ns3, ns4, ns5, ns6, ns7,
//   ns8, ns9, ns10, ns11, ns12, ns13, ns14,
// ];

// /* ================= ANIMATIONS ================= */

// const container: Variants = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.18 },
//   },
// };

// const slideLeft: Variants = {
//   hidden: { opacity: 0, x: -60 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const slideRight: Variants = {
//   hidden: { opacity: 0, x: 60 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// /* 🔥 FIXED: slideUp was missing before */
// const slideUp: Variants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// };

// /* ================= PAGE ================= */

// export default function Events() {
//   return (
//     <Layout>

//       {/* HERO */}
//       <section className="bg-gradient-hero py-20">
//         <div className="container-section text-left">
//           <span className="text-secondary uppercase text-sm font-medium">
//             Events
//           </span>
//           <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
//             Our Events & Programs
//           </h1>
//           <p className="text-lg text-primary-foreground/90">
//             Empowering Northern women through impactful gatherings and initiatives.
//           </p>
//         </div>
//       </section>

//       {/* FEATURED EVENT */}
//       <section className="section-padding bg-background">
//         <div className="container-section grid lg:grid-cols-2 gap-12 items-center">
//           <img
//             src={summitImage}
//             alt="Northern Women Summit 2026"
//             className="rounded-2xl h-[380px] w-full object-cover"
//             loading="lazy"
//           />
//           <div>
//             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
//               Northern Women Summit 2026
//             </h2>

//             <div className="space-y-3 text-muted-foreground mb-6">
//               <div className="flex gap-3"><Calendar size={18} /> Nov 1, 2026</div>
//               <div className="flex gap-3"><Clock size={18} /> 9AM – 5PM</div>
//               <div className="flex gap-3"><MapPin size={18} /> Northern Nigeria</div>
//               <div className="flex gap-3"><Users size={18} /> 500+ Attendees</div>
//             </div>

//             <Button variant="gold" size="xl" asChild>
//               <Link to="/get-involved">
//                 Register Now <ArrowRight size={18} />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* 2026 PROGRAMS */}
//       <section className="section-padding bg-muted">
//         <div className="container-section">
//           <h2 className="text-center text-4xl font-serif font-bold text-gold mb-14">
//             Our 2026 Programs
//           </h2>

//           <motion.div
//             variants={container}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="space-y-24"
//           >
//             {programs.map((p, i) => (
//               <section
//                 key={p.id}
//                 id={p.id}
//                 className="grid lg:grid-cols-2 gap-10 items-center"
//               >
//                 <motion.div
//                   variants={i % 2 === 0 ? slideLeft : slideRight}
//                   className={i % 2 !== 0 ? "lg:order-2" : ""}
//                 >
//                   <h3 className="text-3xl font-serif font-bold mb-4">
//                     {p.title}
//                   </h3>
//                   <p className="text-lg text-muted-foreground mb-6">
//                     {p.description}
//                   </p>
//                   <Button variant="burgundy">Donate</Button>
//                 </motion.div>

//                 <motion.div
//                   variants={i % 2 === 0 ? slideRight : slideLeft}
//                   className={i % 2 !== 0 ? "lg:order-1" : ""}
//                 >
//                   <img
//                     src={p.image}
//                     alt={p.title}
//                     className="rounded-2xl h-[300px] w-full object-cover"
//                     loading="lazy"
//                   />
//                 </motion.div>
//               </section>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* PREVIOUS EVENTS + GALLERY */}
//       <section className="section-padding bg-background">
//         <div className="container-section">
//           <h2 className="text-center text-4xl font-serif font-bold mb-12">
//             Our Previous Events
//           </h2>

//           <h3 className="text-3xl font-serif font-bold text-burgundy mb-8 text-center">
//             Northern Women Summit 2025
//           </h3>

//           <motion.div
//             variants={container}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
//           >
//             {summitImages.map((img, i) => (
//               <motion.div
//                 key={i}
//                 variants={slideUp}
//                 className="group relative overflow-hidden rounded-2xl"
//               >
//                 <img
//                   src={img}
//                   alt="Summit Gallery"
//                   className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   loading="lazy"
//                 />
//                 <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-burgundy transition-all duration-500 group-hover:w-full" />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* VIDEO HIGHLIGHT */}
//       <section className="section-padding bg-muted">
//         <div className="container-section text-center">
//           <h2 className="text-4xl font-serif font-bold text-burgundy mb-10">
//             Event Video Highlight
//           </h2>

//           <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
//             <iframe
//               className="w-full h-[240px] sm:h-[360px] md:h-[480px]"
//               src="https://www.youtube.com/embed/VIDEO_ID"
//               title="Event Highlights"
//               allowFullScreen
//             />
//           </div>
//         </div>
//       </section>

//       {/* PARTNERS */}
//       <section className="section-padding bg-background">
//         <div className="container-section text-center">
//           <h2 className="text-4xl font-serif font-bold mb-12">
//             Our Partners
//           </h2>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
//             {[1, 2, 3, 4, 5].map((i) => (
//               <div
//                 key={i}
//                 className="h-20 bg-muted rounded-xl flex items-center justify-center text-muted-foreground font-medium"
//               >
//                 Partner Logo
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//     </Layout>
//   );
// }

import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Users, Clock } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Featured
import summitImage from "@/assets/summit-event.jpg";

// 2026 Programs
import ramadan from "@/assets/ramadan.jpg";
import schoolgirl from "@/assets/schoolgirl.jpg";
import womenbusiness from "@/assets/womenbusiness.jpg";
import businesssupport from "@/assets/businesssupport.jpg";

// Gallery Images
import ns1 from "@/assets/ns1.jpg";
import ns2 from "@/assets/ns2.jpg";
import ns3 from "@/assets/ns3.jpg";
import ns4 from "@/assets/ns4.jpg";
import ns5 from "@/assets/ns5.jpg";
import ns6 from "@/assets/ns6.jpg";
import ns7 from "@/assets/ns7.jpg";
import ns8 from "@/assets/ns8.jpg";
import ns9 from "@/assets/ns9.jpg";
import ns10 from "@/assets/ns10.jpg";
import ns11 from "@/assets/ns11.jpg";
import ns12 from "@/assets/ns12.jpg";
import ns13 from "@/assets/ns13.jpg";
import ns14 from "@/assets/ns14.jpg";

/* ================= DATA ================= */

const programs = [
  {
    id: "ramadan",
    title: "Ramadan Feeding Initiative",
    description:
      "Providing nutritious meals to communities during Ramadan, spreading hope, care, and support to those in need.",
    image: ramadan,
  },
  {
    id: "schoolgirls",
    title: "Supporting School Girls",
    description:
      "Supplying essential educational materials to girls, ensuring they have the tools they need to succeed academically.",
    image: schoolgirl,
  },
  {
    id: "womenbusiness",
    title: "Empowering Small Business Women",
    description:
      "Offering financial support and resources to women entrepreneurs, helping them grow sustainable businesses.",
    image: womenbusiness,
  },
  {
    id: "mentorship",
    title: "Mentorship & Business Support",
    description:
      "Guiding women through mentorship, business advisory, advertising, and market access.",
    image: businesssupport,
  },
];

const summitImages = [
  ns1, ns2, ns3, ns4, ns5, ns6, ns7,
  ns8, ns9, ns10, ns11, ns12, ns13, ns14,
];

/* ================= ANIMATIONS ================= */

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ================= PAGE ================= */

export default function Events() {
  return (
    <Layout>

      {/* HERO — LEFT ALIGNED */}
      <section className="bg-gradient-hero py-24">
        <div className="container-section text-left">
          <span className="text-secondary uppercase text-sm font-medium">
            Events
          </span>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
            Our Events & Programs
          </h1>

          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Empowering Northern women through impactful gatherings and initiatives.
          </p>
        </div>
      </section>

      {/* MEET & GREET / FEATURED EVENT */}
      <section className="section-padding bg-background">
        <div className="container-section grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={summitImage}
            alt="Northern Women Summit 2026"
            className="rounded-2xl h-[380px] w-full object-cover"
            loading="lazy"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Northern Women Summit 2026
            </h2>

            <div className="space-y-3 text-muted-foreground mb-6">
              <div className="flex gap-3"><Calendar size={18} /> Nov 1, 2026</div>
              <div className="flex gap-3"><Clock size={18} /> 9AM – 5PM</div>
              <div className="flex gap-3"><MapPin size={18} /> Northern Nigeria</div>
              <div className="flex gap-3"><Users size={18} /> 500+ Attendees</div>
            </div>

            <Button variant="gold" size="xl" asChild>
              <Link to="/get-involved">
                Register Now <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 2026 PROGRAMS */}
      <section className="section-padding bg-muted">
        <div className="container-section">
          <h2 className="text-center text-4xl font-serif font-bold text-gold mb-14">
            Our 2026 Programs
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-24"
          >
            {programs.map((p, i) => (
              <section
                key={p.id}
                id={p.id}
                className="grid lg:grid-cols-2 gap-10 items-center"
              >
                <motion.div
                  variants={i % 2 === 0 ? slideLeft : slideRight}
                  className={i % 2 !== 0 ? "lg:order-2" : ""}
                >
                  <h3 className="text-3xl font-serif font-bold mb-4">
                    {p.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {p.description}
                  </p>
                  <Button variant="burgundy">Donate</Button>
                </motion.div>

                <motion.div
                  variants={i % 2 === 0 ? slideRight : slideLeft}
                  className={i % 2 !== 0 ? "lg:order-1" : ""}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="rounded-2xl h-[300px] w-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </section>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PREVIOUS EVENTS + GALLERY */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <h2 className="text-center text-4xl font-serif font-bold mb-12">
            Our Previous Events
          </h2>

          <h3 className="text-3xl font-serif font-bold text-burgundy mb-8 text-center">
            Northern Women Summit 2025
          </h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {summitImages.map((img, i) => (
              <motion.div
                key={i}
                variants={slideUp}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={img}
                  alt="Summit Gallery"
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-burgundy transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VIDEO HIGHLIGHT */}
      <section className="section-padding bg-muted">
        <div className="container-section text-center">
          <h2 className="text-4xl font-serif font-bold text-burgundy mb-10">
            Event Video Highlight
          </h2>

          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-[240px] sm:h-[360px] md:h-[480px]"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Event Highlights"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section-padding bg-background">
        <div className="container-section text-center">
          <h2 className="text-4xl font-serif font-bold mb-12">
            Our Partners
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-20 bg-muted rounded-xl flex items-center justify-center text-muted-foreground font-medium"
              >
                Partner Logo
              </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
