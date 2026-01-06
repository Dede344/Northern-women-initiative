import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Users, BookOpen, Sparkles, Shield } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

const coreValues = [
	{
		icon: Shield,
		title: "Empowerment",
		description: "Helping women and girls rise, lead, and thrive.",
	},
	{
		icon: Users,
		title: "Unity & Sisterhood",
		description: "Lifting each other to grow stronger together.",
	},
	{
		icon: BookOpen,
		title: "Education & Knowledge",
		description: "Creating access to learning and mentorship.",
	},
	{
		icon: Heart,
		title: "Gender Equality & Inclusion",
		description: "Advocating for fairness and opportunity.",
	},
	{
		icon: Sparkles,
		title: "Impact & Legacy",
		description: "Building lasting change for generations to come.",
	},
];

const About = () => {
	return (
		<Layout>
			{/* Hero Section */}
			<section className="bg-gradient-hero py-20">
				<div className="container-section">
					<div className="max-w-3xl">
						<span className="text-secondary font-medium text-sm uppercase tracking-wider">
							About Us
						</span>
						<h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
							Our Story of Empowerment
						</h1>
						<p className="text-lg text-primary-foreground/90">
							Discover the journey, mission, and vision that drives the Northern Women Initiative
							forward.
						</p>
					</div>
				</div>
			</section>

			{/* Our Story */}
			<section className="section-padding bg-background">
				<div className="container-section">
					<div className="max-w-4xl mx-auto text-center">
						<span className="text-secondary font-medium text-sm uppercase tracking-wider">
							Our Story
						</span>
						<h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-6">
							Why We Started
						</h2>
						<p className="text-muted-foreground text-lg mb-6">
							The Northern Women Initiative was born from a deeply personal belief—inspired by the
							legacy of a father who taught that true success isn't measured by wealth, but by the
							impact we make in others' lives.
						</p>
						<p className="text-muted-foreground text-lg">
							Witnessing the untapped potential of Northern women—their resilience, wisdom, and
							capacity for greatness—sparked a vision: to create a platform where these women
							could connect, grow, and transform not just their own lives, but their entire
							communities.
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
							<h3 className="text-2xl font-serif font-bold text-foreground mb-4">
								Our Mission
							</h3>
							<p className="text-muted-foreground text-lg">
								Our mission is to uplift, empower, and transform the lives of Northern women and
								girls, giving them the confidence, skills, and opportunities to reach their full
								potential and create meaningful impact in their families, communities, and beyond.
							</p>
						</div>
						<div className="bg-card rounded-2xl p-10 shadow-card">
							<div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
								<Eye className="w-8 h-8 text-secondary-foreground" />
							</div>
							<h3 className="text-2xl font-serif font-bold text-foreground mb-4">
								Our Vision
							</h3>
							<p className="text-muted-foreground text-lg">
								A strong, connected network of Northern women who uplift each other, break
								barriers, and create long-term positive change for generations to come.
							</p>
						</div>
					</div>

					{/* Updated Section: Commitment */}
					<div className="mt-16 bg-[#E8E0D5] py-12 px-6 rounded-lg">
						<h3 className="text-3xl font-serif font-bold text-secondary mb-8 text-center">
							We Are Committed To
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="flex items-start space-x-4">
								<div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold">
									1
								</div>
								<p className="text-lg text-foreground leading-relaxed">
									Promoting gender equality and inclusion, ensuring women and girls have
									equal access to opportunities and decision-making spaces.
								</p>
							</div>
							<div className="flex items-start space-x-4">
								<div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold">
									2
								</div>
								<p className="text-lg text-foreground leading-relaxed">
									Championing girl-child education, advocating for safe, quality learning
									environments and supporting girls to pursue their dreams without barriers.
								</p>
							</div>
							<div className="flex items-start space-x-4">
								<div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold">
									3
								</div>
								<p className="text-lg text-foreground leading-relaxed">
									Empowering women economically, through mentorship, skills development,
									and entrepreneurial support.
								</p>
							</div>
							<div className="flex items-start space-x-4">
								<div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold">
									4
								</div>
								<p className="text-lg text-foreground leading-relaxed">
									Fostering leadership and participation, helping women lead with
									confidence, courage, and dignity.
								</p>
							</div>
							<div className="flex items-start space-x-4">
								<div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold">
									5
								</div>
								<p className="text-lg text-foreground leading-relaxed">
									Building supportive communities, where women and girls are celebrated,
									uplifted, and equipped to overcome challenges together.
								</p>
							</div>
						</div>
						<p className="text-lg text-foreground mt-12 text-center italic">
							We believe that when women and girls are empowered, educated, and supported,
							communities flourish, and generations are transformed.
						</p>
					</div>
				</div>
			</section>

			{/* Core Values */}
			<section className="section-padding bg-background">
				<div className="container-section">
					<div className="text-center mb-12">
						<span className="text-secondary font-medium text-sm uppercase tracking-wider">
							What Guides Us
						</span>
						<h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mt-3 mb-4">
							Everything we do is guided by our values and principles:
						</h2>
					</div>
					<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
						{coreValues.map((value) => (
							<div
								key={value.title}
								className="text-center p-6 rounded-2xl bg-muted card-hover"
							>
								<div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
									<value.icon className="w-7 h-7 text-primary" />
								</div>
								<h3 className="font-serif text-lg font-semibold text-foreground mb-2">
									{value.title}
								</h3>
								<p className="text-sm text-muted-foreground">{value.description}</p>
							</div>
						))}
					</div>
					<p className="text-center text-muted-foreground text-lg mt-8">
						These values ensure that every Northern woman and girl is seen, supported, and celebrated.
					</p>
				</div>
			</section>

			{/* Founder's Message */}
			<section className="section-padding bg-muted">
				<div className="container-section">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="order-2 lg:order-1">
							<span className="text-secondary font-m text-3xl uppercase tracking-wider">
								About The Founder
							</span>
							{/* <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-6">
                About The Founder
              </h2> */}
							<div className="space-y-4 text-muted-foreground">
								<p>
									My name is Mrs Maryam Mohammed Nasir, and I am the founder of Northern Women
									Initiative For Empowerment, Growth and Development.
								</p>
								<p>
									For the past 14 years, I have lived in the United Kingdom, building my life in
									Scotland as a mother, a professional, and a businesswoman. But no matter the
									distance, my heart has always remained at home — with my people, my roots, and
									the women of Northern Nigeria. Their strength, resilience, and silent sacrifices
									have never left me.
								</p>
								<p>
									In January 2025, that love for community became action. I started this initiative
									with one clear intention: to build something meaningful and strong for Northern
									women — a space where they are seen, heard, supported, and celebrated. In just
									one year, this vision has grown into a movement that is touching lives and
									creating real impact.
								</p>
								<p>
									Our very first event was Northern WOMEN Meet & Greet, held in June, a beautiful
									gathering that brought together women from all walks of life — entrepreneurs,
									leaders, politicians, successful businesswomen, and women rich in knowledge and
									experience. Although I was unable to attend in person, my dedicated team managed
									every detail with excellence, proving that this initiative is built on strong
									leadership, trust, and shared vision.
								</p>
								<p>
									Later in the year, on 1st November, we hosted our first one-day summit in Nigeria,
									Northern Women’s Summer 2025 — a powerful gathering focused on inspiration,
									learning, and connection. I travelled from the UK to be present, because this work
									is deeply personal to me. Over 500 women participated in this summit, making it a
									truly historic and impactful moment for our community. The summit was more than an
									event; it was a moment of unity, growth, and hope. This summit is a foundation we
									intend to build on and will be held yearly, by the will of Allah.
								</p>
								<p>
									Today, we proudly support over 300 registered women members in Nigeria,
									particularly small business owners and aspiring entrepreneurs. We have also
									launched our first publication, Northern Women Magazine 2025, a celebration of
									Northern women — their stories, their excellence, and their voices.
								</p>
								<p>
									Although our registered membership is currently in Nigeria, we are intentionally
									working towards expanding and registering in Scotland and across the UK, with the
									vision of connecting Northern women at home and in the diaspora — building
									bridges, sharing opportunities, and growing together.
								</p>
								<p>
									This journey is deeply inspired by my late father, who taught me that success is
									not measured by money, but by the lives you touch and the impact you leave
									behind. His words live in this work.
								</p>
								<p>
									Northern Women Initiative is not just an organisation to me. It is my calling. It
									is service. It is love in action.
								</p>
								<p>And this is only the beginning.</p>
							</div>
							<div className="mt-6">
								<p className="font-serif text-xl font-semibold text-foreground">
									Hajiya Maryam Mohammed Nasir
								</p>
								<p className="text-muted-foreground">
									Founder, Northern Women Initiative For Empowerment, Growth and Development
								</p>
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
						Become part of a community that's changing lives across the North. Your journey
						starts here.
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
