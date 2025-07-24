import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Lightbulb, Users, Phone } from "lucide-react";

const Index = () => {
  const quickLinks = [
    {
      icon: GraduationCap,
      title: "AI Courses",
      description: "Master AI skills with beginner-friendly courses",
      link: "/courses",
      color: "primary"
    },
    {
      icon: Lightbulb,
      title: "Solutions",
      description: "Discover AI solutions for African challenges",
      link: "/solutions", 
      color: "neon-green"
    },
    {
      icon: Users,
      title: "Community",
      description: "Join our growing community of AI enthusiasts",
      link: "/community",
      color: "accent"
    },
    {
      icon: Phone,
      title: "Contact",
      description: "Get in touch with our team",
      link: "/contact",
      color: "secondary"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      "neon-green": "bg-neon-green/10 text-neon-green border-neon-green/20",
      "primary": "bg-primary/10 text-primary border-primary/20",
      "secondary": "bg-secondary/10 text-secondary border-secondary/20",
      "accent": "bg-accent/10 text-accent border-accent/20"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <MissionSection />
      
      {/* Quick Links Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-4">
              Explore <span className="text-gradient">AGT TECH</span>
            </h2>
            <p className="text-lg text-muted-foreground font-montserrat max-w-2xl mx-auto">
              Discover our comprehensive AI ecosystem designed for Africa's future
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((item, index) => (
              <Card 
                key={item.title}
                className="gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl ${getColorClasses(item.color)}`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-poppins font-semibold">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground font-montserrat text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <Link to={item.link}>
                    <Button className="w-full gradient-hero text-white hover:shadow-glow transition-all duration-300">
                      Explore
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto text-center">
          <Card className="gradient-card border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold mb-4 text-gradient">
                Ready to Transform Africa with AI?
              </h3>
              <p className="text-lg text-muted-foreground font-montserrat mb-6 leading-relaxed">
                Join thousands of Africans learning AI skills and building solutions for the continent's future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/courses">
                  <Button size="lg" className="gradient-hero text-white">
                    Start Learning AI
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Learn About Us
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

export default Index;
