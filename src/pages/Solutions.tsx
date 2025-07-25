import Navigation from "@/components/Navigation";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Stethoscope, Sprout, GraduationCap, MessageSquare, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Solutions = () => {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const solutions = [
    {
      icon: Stethoscope,
      title: "AGT HEALTH AI",
      subtitle: "Smart Healthcare for Rural Communities",
      description: "AI-powered diagnostic tools and health monitoring systems designed for rural Ghana",
      details: "Our healthcare AI platform provides early disease detection, symptom analysis, and health recommendations using machine learning. It works offline and supports local languages to serve communities with limited internet access.",
      impact: "Serving 50+ communities",
      color: "neon-green"
    },
    {
      icon: Sprout,
      title: "AGT FARM AI",
      subtitle: "Intelligent Agriculture Solutions",
      description: "Crop monitoring, disease detection, and yield prediction for Ghanaian farmers",
      details: "Using computer vision and satellite imagery, we help farmers identify crop diseases early, optimize irrigation, and predict harvest yields. Our system provides actionable insights via SMS for farmers without smartphones.",
      impact: "10+ farms improved",
      color: "primary"
    },
    {
      icon: GraduationCap,
      title: "AGT EDU AI",
      subtitle: "Personalized Learning Platforms",
      description: "AI tutors and adaptive learning systems for Ghanaian students",
      details: "Our educational AI creates personalized learning paths for students, provides instant feedback, and helps teachers identify learning gaps. It supports multiple languages and works with limited internet connectivity.",
      impact: "200+ students helped",
      color: "secondary"
    },
    {
      icon: MessageSquare,
      title: "AGT CHAT AI",
      subtitle: "Local Language Chatbots",
      description: "Customer service and information bots in local Ghanaian languages",
      details: "We build AI chatbots that understand and respond in Twi, Ga, Hausa, and other local languages. These bots help businesses provide 24/7 customer support and government agencies share important information.",
      impact: "15+ businesses served",
      color: "accent"
    },
    {
      icon: TrendingUp,
      title: "AGT PREDICT AI",
      subtitle: "Economic Forecasting Tools",
      description: "Unemployment prediction and economic trend analysis for policy makers",
      details: "Our AI models analyze economic data to predict unemployment trends, skill gaps, and economic opportunities. This helps government agencies and NGOs make data-driven decisions for youth employment programs.",
      impact: "Policy insights delivered",
      color: "royal-gold"
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedSolution(expandedSolution === index ? null : index);
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      "neon-green": "bg-neon-green/10 text-neon-green border-neon-green/20",
      "primary": "bg-primary/10 text-primary border-primary/20",
      "secondary": "bg-secondary/10 text-secondary border-secondary/20",
      "accent": "bg-accent/10 text-accent border-accent/20",
      "royal-gold": "bg-royal-gold/10 text-royal-gold border-royal-gold/20"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold leading-tight">
              AI <span className="text-gradient">Solutions</span> for Ghana
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-montserrat leading-relaxed">
              Transforming agriculture, healthcare, education, and business with AI solutions 
              designed specifically for African challenges and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <Card 
                key={solution.title}
                className="gradient-card border-border/50 hover:shadow-card transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center ${getColorClasses(solution.color)}`}>
                      <solution.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl font-poppins font-semibold mb-1">
                        {solution.title}
                      </CardTitle>
                      <p className="text-primary font-montserrat font-medium text-sm">
                        {solution.subtitle}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs whitespace-nowrap">
                      {solution.impact}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground font-montserrat leading-relaxed">
                    {solution.description}
                  </p>
                  
                  {expandedSolution === index && (
                    <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                      <p className="text-sm text-muted-foreground font-montserrat leading-relaxed">
                        {solution.details}
                      </p>
                      <Button 
                        size="sm" 
                        className="gradient-hero text-white"
                      >
                        Learn More
                      </Button>
                    </div>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpanded(index)}
                    className="w-full justify-center text-primary hover:bg-primary/10"
                  >
                    {expandedSolution === index ? (
                      <>
                        <ChevronUp className="h-4 w-4 mr-2" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4 mr-2" />
                        Show Details
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto text-center">
          <Card className="gradient-card border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-poppins font-bold mb-4 text-gradient">
                Ready to Transform Your Business with AI?
              </h3>
              <p className="text-lg text-muted-foreground font-montserrat mb-6 leading-relaxed">
                Partner with AGT TECH to develop custom AI solutions for your organization or community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="gradient-hero text-white">
                    Request a Consultation
                  </Button>
                </Link>
                <Link to="/blog">
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                    View Case Studies
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

export default Solutions;