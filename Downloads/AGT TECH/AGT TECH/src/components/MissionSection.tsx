import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Globe, Zap } from "lucide-react";

const MissionSection = () => {
  const values = [
    {
      icon: Brain,
      title: "Empowerment",
      description: "Providing accessible AI education to unlock human potential across Africa"
    },
    {
      icon: Target,
      title: "Access",
      description: "Breaking down barriers to cutting-edge technology and knowledge"
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Fostering African-led solutions to global and local challenges"
    },
    {
      icon: Zap,
      title: "Africa-First",
      description: "Building technology solutions designed by Africans, for Africans"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold mb-6">
            Our <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-montserrat max-w-3xl mx-auto leading-relaxed">
            At AGT TECH, we believe that artificial intelligence is not just the future – 
            it's the key to solving Africa's most pressing challenges while creating unprecedented opportunities 
            for economic growth and social development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={value.title} 
              className="gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-poppins font-semibold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-montserrat text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground font-montserrat">Africans Empowered</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">10+</div>
              <div className="text-muted-foreground font-montserrat">AI Courses Created</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">50+</div>
              <div className="text-muted-foreground font-montserrat">Real Problems Solved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;