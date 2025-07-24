import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold leading-tight">
                Building Africa's Future through{" "}
                <span className="text-gradient">
                  AI & Innovation
                </span>
              </h1>
              
              <div className="text-2xl sm:text-3xl font-poppins font-semibold text-primary mb-4 animate-pulse">
                Learn AI. Build Solutions. Transform Ghana.
              </div>
              
              <p className="text-lg sm:text-xl text-muted-foreground font-montserrat leading-relaxed max-w-xl">
                Join the AI revolution in Africa. Learn cutting-edge AI skills, solve real problems, 
                and build a sustainable future with technology that works for our continent.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-hero text-white shadow-glow hover:shadow-neon transition-all duration-300 text-lg px-8 py-6"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg px-8 py-6"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 text-lg px-8 py-6"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Talk to AGT Bot
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
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

          {/* Right Side - Prince Fiebor Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Glow Effect Background */}
              <div className="absolute inset-0 gradient-hero rounded-3xl opacity-20 blur-3xl"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-card rounded-3xl shadow-card overflow-hidden">
                <img
                  src="/lovable-uploads/cbbf3aff-6c98-4e1a-b482-3c0f011acef7.png"
                  alt="Prince Fiebor - CEO of AGT TECH"
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay with CEO Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-charcoal/90 to-transparent p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-poppins font-semibold">Prince Fiebor</h3>
                    <p className="text-neon-green font-montserrat">CEO & Founder, AGT TECH</p>
                    <p className="text-sm text-gray-300 mt-1">Leading Africa's AI Revolution</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-neon-green/20 backdrop-blur-sm rounded-2xl p-4 animate-glow">
              <div className="text-neon-green text-2xl">🤖</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-royal-gold/20 backdrop-blur-sm rounded-2xl p-4 animate-glow">
              <div className="text-royal-gold text-2xl">🚀</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;