import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Sprout, 
  GraduationCap, 
  Heart, 
  BriefcaseIcon, 
  Languages, 
  Users,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const SolutionsSection = () => {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const solutions = [
    {
      icon: Sprout,
      title: "AI for Agriculture",
      subtitle: "Smart Farming Solutions",
      description: "Revolutionizing farming with intelligent technology solutions",
      details: [
        "Crop disease detection using computer vision",
        "Weather forecasting and climate analytics",
        "Soil health monitoring and optimization",
        "Farm management and yield prediction",
        "Marketplace connections for farmers",
        "Real-time agricultural advisory services"
      ],
      impact: "Helping 1000+ farmers increase yields by 30%",
      color: "neon-green"
    },
    {
      icon: GraduationCap,
      title: "AI for Education",
      subtitle: "Transforming Learning",
      description: "Making quality education accessible to every Ghanaian student",
      details: [
        "AI-powered tutoring chatbots",
        "Personalized learning paths for students",
        "Automated grading and assessment systems",
        "Language learning tools for local dialects",
        "Virtual classroom management",
        "Educational content creation assistance"
      ],
      impact: "Reaching 5000+ students across rural Ghana",
      color: "primary"
    },
    {
      icon: Heart,
      title: "AI for Healthcare",
      subtitle: "Smart Medical Solutions",
      description: "Bringing advanced healthcare technology to underserved communities",
      details: [
        "Medical diagnosis assistance tools",
        "Telemedicine platforms for remote areas",
        "Health record management systems",
        "Disease outbreak prediction models",
        "Maternal health monitoring systems",
        "Mental health support chatbots"
      ],
      impact: "Supporting 50+ clinics and health centers",
      color: "accent"
    },
    {
      icon: BriefcaseIcon,
      title: "AI for Employment",
      subtitle: "Job Creation & Skills",
      description: "Creating new opportunities in the digital economy",
      details: [
        "AI-powered job matching platforms",
        "Skills assessment and development tools",
        "Resume optimization and interview prep",
        "Freelancing platforms for AI services",
        "Digital literacy training programs",
        "Entrepreneurship support systems"
      ],
      impact: "Creating jobs for 2000+ young Ghanaians",
      color: "secondary"
    },
    {
      icon: Languages,
      title: "AI in Local Languages",
      subtitle: "Preserving Our Heritage",
      description: "Building AI tools that understand and preserve Ghanaian languages",
      details: [
        "Twi, Ewe, and Ga language processing",
        "Voice recognition for local dialects",
        "Translation services between local languages",
        "Cultural content preservation tools",
        "Educational content in native languages",
        "Accessibility tools for non-English speakers"
      ],
      impact: "Preserving and digitizing 10+ local languages",
      color: "royal-gold"
    },
    {
      icon: Users,
      title: "Youth Empowerment AI",
      subtitle: "Empowering the Next Generation",
      description: "Creating platforms that help young Africans build AI-powered businesses",
      details: [
        "Youth entrepreneur incubation programs",
        "AI startup mentorship platforms",
        "Coding bootcamps and skill development",
        "Innovation challenges and competitions",
        "Funding and investment connection tools",
        "Community building and networking platforms"
      ],
      impact: "Empowering 3000+ young entrepreneurs",
      color: "neon-green"
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
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold mb-6">
            AI <span className="text-gradient">Solutions</span> for Ghana
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-montserrat max-w-3xl mx-auto leading-relaxed">
            Real AI applications solving real problems across agriculture, education, healthcare, 
            employment, languages, and youth empowerment in Ghana and Africa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <Card 
              key={solution.title}
              className="gradient-card border-border/50 hover:shadow-card transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-2xl ${getColorClasses(solution.color)}`}>
                      <solution.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-poppins font-semibold">
                        {solution.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground font-montserrat">
                        {solution.subtitle}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleExpanded(index)}
                    className="flex-shrink-0"
                  >
                    {expandedSolution === index ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-montserrat leading-relaxed">
                  {solution.description}
                </p>
                
                <Badge variant="outline" className={getColorClasses(solution.color)}>
                  {solution.impact}
                </Badge>

                {expandedSolution === index && (
                  <div className="mt-6 space-y-4 animate-fade-in">
                    <h4 className="font-poppins font-semibold text-foreground">
                      Key Features & Applications:
                    </h4>
                    <ul className="space-y-2">
                      {solution.details.map((detail, detailIndex) => (
                        <li 
                          key={detailIndex}
                          className="flex items-start space-x-2 text-sm text-muted-foreground font-montserrat"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Button 
                        size="sm" 
                        className="gradient-hero text-white"
                      >
                        Learn More About This Solution
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="gradient-card border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold mb-4 text-gradient">
                Ready to Implement AI Solutions?
              </h3>
              <p className="text-lg text-muted-foreground font-montserrat mb-6 leading-relaxed">
                Partner with us to bring these transformative AI solutions to your community, 
                organization, or business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-hero text-white">
                  Request a Consultation
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View Case Studies
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;