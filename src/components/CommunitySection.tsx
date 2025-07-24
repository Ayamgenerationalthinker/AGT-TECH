import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Calendar, 
  Users, 
  Star, 
  Zap, 
  Heart,
  ExternalLink,
  Trophy,
  Target
} from "lucide-react";

const CommunitySection = () => {
  const communityFeatures = [
    {
      icon: MessageCircle,
      title: "WhatsApp Community",
      description: "Join our active WhatsApp group for daily AI tips, job opportunities, and peer support",
      members: "1,200+",
      action: "Join WhatsApp Group",
      color: "neon-green"
    },
    {
      icon: Users,
      title: "Telegram Channel",
      description: "Get instant updates on new courses, events, and AI breakthroughs in Africa",
      members: "800+",
      action: "Join Telegram",
      color: "primary"
    },
    {
      icon: Calendar,
      title: "Monthly Webinars",
      description: "Free live sessions with industry experts and successful AGT TECH graduates",
      members: "500+",
      action: "Register for Next Event",
      color: "secondary"
    },
    {
      icon: Trophy,
      title: "AI Challenges",
      description: "Participate in monthly coding challenges and win prizes while learning",
      members: "300+",
      action: "View Current Challenge",
      color: "accent"
    }
  ];

  const successStories = [
    {
      name: "Kwame Asante",
      role: "AI Developer",
      story: "Started as a complete beginner, now working with international clients",
      achievement: "Earned $5,000+ in first 6 months",
      course: "AI Freelance Hustle",
      image: "👨🏿‍💻"
    },
    {
      name: "Ama Osei",
      role: "EdTech Entrepreneur",
      story: "Built an AI-powered learning platform for rural schools",
      achievement: "Serving 2,000+ students",
      course: "ChatGPT for Beginners",
      image: "👩🏿‍💼"
    },
    {
      name: "Kofi Mensah",
      role: "Smart Farmer",
      story: "Uses AI to optimize crop yields and reduce waste on his farm",
      achievement: "Increased yields by 40%",
      course: "AI Tools for Professionals",
      image: "👨🏿‍🌾"
    }
  ];

  const upcomingEvents = [
    {
      title: "AI in Agriculture Workshop",
      date: "Feb 15, 2024",
      time: "2:00 PM GMT",
      speaker: "Prince Fiebor",
      attendees: "150+ registered"
    },
    {
      title: "Building Your First Chatbot",
      date: "Feb 22, 2024", 
      time: "3:00 PM GMT",
      speaker: "AGT TECH Team",
      attendees: "200+ registered"
    },
    {
      title: "Freelancing with AI Skills",
      date: "Mar 1, 2024",
      time: "4:00 PM GMT",
      speaker: "Community Graduates",
      attendees: "100+ registered"
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
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold mb-6">
            Join Our <span className="text-gradient">Community</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-montserrat max-w-3xl mx-auto leading-relaxed">
            Connect with like-minded Africans who are passionate about AI. Share knowledge, 
            get support, and build lasting relationships that will accelerate your AI journey.
          </p>
        </div>

        {/* Community Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {communityFeatures.map((feature, index) => (
            <Card 
              key={feature.title}
              className="gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl ${getColorClasses(feature.color)}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-lg font-poppins font-semibold">
                  {feature.title}
                </CardTitle>
                <Badge variant="outline" className="text-xs">
                  {feature.members} members
                </Badge>
              </CardHeader>
              
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground font-montserrat text-sm leading-relaxed">
                  {feature.description}
                </p>
                <Button 
                  size="sm" 
                  className="w-full gradient-hero text-white"
                >
                  {feature.action}
                  <ExternalLink className="h-3 w-3 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-poppins font-bold mb-4">
              Meet Our <span className="text-gradient">Success Stories</span>
            </h3>
            <p className="text-lg text-muted-foreground font-montserrat">
              Real people achieving real results with AGT TECH
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <Card 
                key={story.name}
                className="gradient-card border-border/50 hover:shadow-card transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-3">{story.image}</div>
                  <CardTitle className="text-lg font-poppins font-semibold">
                    {story.name}
                  </CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {story.role}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4 text-center">
                  <p className="text-muted-foreground font-montserrat text-sm leading-relaxed">
                    "{story.story}"
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-primary">
                        {story.achievement}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Graduate of: {story.course}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-poppins font-bold mb-4">
              Upcoming <span className="text-gradient">Events</span>
            </h3>
            <p className="text-lg text-muted-foreground font-montserrat">
              Free live sessions and workshops for our community
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={event.title}
                className="gradient-card border-border/50 hover:shadow-card transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-primary/20 text-primary">
                      Upcoming
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Users className="h-3 w-3 mr-1" />
                      {event.attendees}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-poppins font-semibold leading-tight">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {event.date} at {event.time}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-secondary" />
                      Speaker: {event.speaker}
                    </div>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="w-full gradient-hero text-white"
                  >
                    Register Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Programs */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="gradient-card border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-neon-green/10 text-neon-green rounded-2xl">
                    <Target className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-poppins font-bold">
                    Ambassador Program
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-montserrat leading-relaxed">
                  Become an AGT TECH Ambassador in your region. Help us spread AI education 
                  while earning rewards and building your leadership skills.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-neon-green rounded-full mr-2"></div>
                    Lead local AI workshops
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-neon-green rounded-full mr-2"></div>
                    Earn commissions on referrals
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-neon-green rounded-full mr-2"></div>
                    Get exclusive training and support
                  </li>
                </ul>
                <Button className="w-full gradient-hero text-white">
                  Apply to be an Ambassador
                </Button>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-accent/10 text-accent rounded-2xl">
                    <Heart className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-poppins font-bold">
                    Volunteer & Teach
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-montserrat leading-relaxed">
                  Share your AI knowledge and help fellow Africans on their learning journey. 
                  Volunteer as a mentor, tutor, or workshop facilitator.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                    One-on-one student mentoring
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                    Community workshop facilitation
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                    Content creation and review
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
                  Volunteer with Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="gradient-card border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold mb-4 text-gradient">
                Ready to Join the AGT Community?
              </h3>
              <p className="text-lg text-muted-foreground font-montserrat mb-6 leading-relaxed">
                Be part of Africa's largest AI learning community. Connect, learn, and grow together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-hero text-white">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Join WhatsApp Group
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Users className="h-5 w-5 mr-2" />
                  Join Telegram Channel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;