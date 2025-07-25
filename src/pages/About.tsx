import Navigation from "@/components/Navigation";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Users, BookOpen, Zap, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const methodSteps = [
    {
      icon: BookOpen,
      title: "Beginner-Friendly Courses",
      description: "Step-by-step AI courses designed for all skill levels"
    },
    {
      icon: Zap,
      title: "Real-Life Projects",
      description: "Hands-on projects for agriculture, education, and healthcare"
    },
    {
      icon: Users,
      title: "Community Training",
      description: "Community-based training to reach every region in Ghana"
    },
    {
      icon: Target,
      title: "Practical Experience",
      description: "Internships and collaboration with startups and local governments"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold leading-tight">
              About <span className="text-gradient">AGT TECH</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-montserrat leading-relaxed">
              All Generational Thinkers Technology - Building Africa's Future through AI & Innovation
            </p>
          </div>
        </div>
      </section>

      {/* Our Why Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="gradient-card border-border/50 overflow-hidden max-w-4xl mx-auto">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-poppins font-bold text-primary">
                Our Why
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <p className="text-lg text-muted-foreground font-montserrat leading-relaxed">
                Ghana and many African nations face major challenges: high unemployment, outdated education systems, 
                underdeveloped tech infrastructure, and brain drain. At AGT TECH, we believe Artificial Intelligence 
                is the bridge between Africa's problems and Africa's possibilities.
              </p>
              <p className="text-lg text-muted-foreground font-montserrat leading-relaxed">
                We're not just teaching technology – we're creating a movement that transforms how Africans think, 
                work, and solve problems using the power of AI.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <Card className="gradient-card border-border/50 overflow-hidden max-w-4xl mx-auto">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-poppins font-bold text-secondary">
                Our Story
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <p className="text-lg text-muted-foreground font-montserrat leading-relaxed">
                AGT TECH was born from a simple yet powerful vision: to democratize AI education across Africa. 
                Founded in Ghana by Prince Fiebor, our organization started as a grassroots initiative to address 
                the digital divide that has left many African youth behind in the global technology revolution.
              </p>
              <p className="text-lg text-muted-foreground font-montserrat leading-relaxed">
                Today, we've grown into a comprehensive platform that not only educates but also empowers 
                Africans to build AI solutions that address local challenges while competing on the global stage.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="gradient-card border-border/50 hover:shadow-card transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-poppins font-bold text-primary">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground font-montserrat leading-relaxed">
                  Our mission is to equip Africans of all generations with AI knowledge and tools to create 
                  lasting impact in their communities — through education, innovation, and problem-solving.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border/50 hover:shadow-card transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-poppins font-bold text-secondary">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground font-montserrat leading-relaxed">
                  A transformed Ghana where AI is used in agriculture, healthcare, education, governance, 
                  and youth employment — creating a new generation of problem-solvers and tech leaders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Founder - Prince Fiebor */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <Card className="gradient-card border-border/50 overflow-hidden max-w-6xl mx-auto">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-poppins font-bold text-accent">
                Meet the Founder - Prince Fiebor
              </CardTitle>
            </CardHeader>
            <CardContent className="grid lg:grid-cols-2 gap-8 items-center p-8">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground font-montserrat leading-relaxed">
                  Prince Fiebor is a visionary educator, builder, and founder of AGT TECH (All Generational Thinkers Technology). 
                  With a heart for transforming African youth through artificial intelligence, he leads with passion, 
                  integrity, and a hands-on approach to education and innovation.
                </p>
                <p className="text-lg text-muted-foreground font-montserrat leading-relaxed">
                  He has worked tirelessly to build technology communities, design scalable solutions, and mentor 
                  hundreds of young people to become tech leaders. Prince's core belief is that Africans should 
                  not only use technology but create it to solve real-world problems.
                </p>
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="text-primary font-montserrat font-semibold italic">
                    "If Africa takes AI seriously, we can solve our unique problems faster than ever before."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">- Prince Fiebor, CEO & Founder</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">📧 princefiebor10@gmail.com</p>
                  <p className="text-sm text-muted-foreground">📱 +233531554625</p>
                  <p className="text-sm text-muted-foreground">📍 Ghana</p>
                </div>
                <Button className="gradient-hero text-white">
                  Connect with Prince
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 gradient-hero rounded-3xl opacity-20 blur-3xl"></div>
                <img
                  src="/lovable-uploads/cbbf3aff-6c98-4e1a-b482-3c0f011acef7.png"
                  alt="Prince Fiebor - CEO of AGT TECH"
                  className="relative w-full h-auto object-cover rounded-3xl shadow-card"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Method */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-poppins font-bold mb-6">
              Our <span className="text-gradient">Method</span>
            </h3>
            <p className="text-lg text-primary font-poppins font-semibold">
              "We don't just teach AI. We use AI to build Ghana."
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {methodSteps.map((step, index) => (
              <Card 
                key={step.title}
                className="gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-poppins font-semibold mb-3 text-foreground">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground font-montserrat text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto text-center">
          <Card className="gradient-card border-border/50 overflow-hidden max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-poppins font-bold mb-4 text-gradient">
                Ready to Join the AI Revolution?
              </h3>
              <p className="text-lg text-muted-foreground font-montserrat mb-6 leading-relaxed">
                Be part of the movement transforming Africa through AI education and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/courses">
                  <Button size="lg" className="gradient-hero text-white">
                    Explore Our Courses
                  </Button>
                </Link>
                <Link to="/community">
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Join Our Community
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <ChatbotWidget />
    </div>
  );
};

export default About;