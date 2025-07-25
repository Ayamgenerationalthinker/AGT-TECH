import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, GraduationCap, Lightbulb, Zap, MessageCircle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const heroSlides = [
    {
      title: "Success Stories",
      content: "500+ Africans trained in AI skills across Ghana",
      icon: "🎯"
    },
    {
      title: "Impact",
      content: "AI solutions deployed in agriculture and healthcare",
      icon: "🚀"
    },
    {
      title: "Community",
      content: "Growing network of African AI innovators",
      icon: "🤝"
    }
  ];

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
      icon: MessageCircle,
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
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold leading-tight">
              Empowering Africa with{" "}
              <span className="text-gradient">
                AI Education, Community & Tech Solutions
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground font-montserrat leading-relaxed max-w-3xl mx-auto">
              Join the AI revolution in Africa. Learn cutting-edge AI skills, solve real problems, 
              and build a sustainable future with technology that works for our continent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button 
                  size="lg" 
                  className="gradient-hero text-white shadow-glow hover:shadow-neon transition-all duration-300 text-lg px-8 py-6"
                >
                  Explore AI Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/community">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg px-8 py-6"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Join the AGT Community
                </Button>
              </Link>
            </div>

            {/* Hero Carousel */}
            <div className="mt-16">
              <Carousel className="w-full max-w-2xl mx-auto">
                <CarouselContent>
                  {heroSlides.map((slide, index) => (
                    <CarouselItem key={index}>
                      <Card className="gradient-card border-border/50">
                        <CardContent className="p-8 text-center">
                          <div className="text-4xl mb-4">{slide.icon}</div>
                          <h3 className="text-xl font-poppins font-semibold mb-2 text-primary">
                            {slide.title}
                          </h3>
                          <p className="text-muted-foreground font-montserrat">
                            {slide.content}
                          </p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            {/* Key Stats */}
            <div className="flex justify-center items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">10+</div>
                <div className="text-sm text-muted-foreground">AI Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
      
      <ChatbotWidget />
    </div>
  );
};

export default Index;
