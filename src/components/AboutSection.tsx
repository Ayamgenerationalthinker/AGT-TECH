import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Users, BookOpen, Zap } from "lucide-react";

const AboutSection = () => {
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold mb-6">
            About <span className="text-gradient">AGT TECH</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-montserrat max-w-3xl mx-auto leading-relaxed">
            All Generational Thinkers Technology - Building Africa's Future through AI & Innovation
          </p>
        </div>

        {/* Our Why Section */}
        <div className="mb-20">
          <Card className="gradient-card border-border/50 overflow-hidden">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl sm:text-3xl font-poppins font-bold text-primary">
                Our Why
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
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

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <Card className="gradient-card border-border/50 hover:shadow-card transition-all duration-300">
            <CardHeader className="text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-poppins font-bold text-primary">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
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
            <CardContent>
              <p className="text-muted-foreground font-montserrat leading-relaxed">
                A transformed Ghana where AI is used in agriculture, healthcare, education, governance, 
                and youth employment — creating a new generation of problem-solvers and tech leaders.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* About Prince Fiebor */}
        <div className="mb-20">
          <Card className="gradient-card border-border/50 overflow-hidden">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl sm:text-3xl font-poppins font-bold text-accent">
                About Prince Fiebor (CEO)
              </CardTitle>
            </CardHeader>
            <CardContent className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground font-montserrat leading-relaxed">
                  Prince Fiebor is a passionate tech visionary from Ghana and the founder of AGT TECH. 
                  Coming from a community where opportunities are limited, he made it his mission to create 
                  change using technology.
                </p>
                <p className="text-lg text-muted-foreground font-montserrat leading-relaxed">
                  With a deep love for computer science, teaching, and solving real-world problems, 
                  Prince is on a mission to empower Africans through AI. He believes that every African 
                  has the potential to be a tech leader and problem-solver.
                </p>
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

        {/* Our Method */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-poppins font-bold mb-6">
              Our <span className="text-gradient">Method</span>
            </h3>
            <p className="text-lg text-primary font-poppins font-semibold">
              "We don't just teach AI. We use AI to build Ghana."
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Call to Action */}
        <div className="text-center">
          <Card className="gradient-card border-border/50 overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold mb-4 text-gradient">
                Ready to Join the AI Revolution?
              </h3>
              <p className="text-lg text-muted-foreground font-montserrat mb-6 leading-relaxed">
                Be part of the movement transforming Africa through AI education and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-hero text-white">
                  Explore Our Courses
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Join Our Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;