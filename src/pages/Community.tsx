import Navigation from "@/components/Navigation";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MessageCircle, Users, Calendar, Trophy, ExternalLink, Mail, Phone } from "lucide-react";
import { useState } from "react";

const Community = () => {
  const [email, setEmail] = useState("");

  const testimonials = [
    {
      name: "Ama Adjei",
      role: "AI Student",
      location: "Accra, Ghana",
      quote: "AGT TECH transformed my career. I went from unemployed to earning $1500/month as an AI freelancer!",
      image: "👩🏾‍💻"
    },
    {
      name: "Kwame Osei",
      role: "Farmer",
      location: "Kumasi, Ghana",
      quote: "The AGT FARM AI helped me increase my crop yield by 40%. Technology is truly changing agriculture in Ghana.",
      image: "👨🏾‍🌾"
    },
    {
      name: "Sarah Mensah",
      role: "Teacher",
      location: "Cape Coast, Ghana",
      quote: "The AI tools I learned from AGT TECH have made my teaching so much more effective and engaging.",
      image: "👩🏾‍🏫"
    },
    {
      name: "Michael Asante",
      role: "Business Owner",
      location: "Tamale, Ghana",
      quote: "The chatbot we built with AGT TECH increased our customer satisfaction by 60%. Amazing results!",
      image: "👨🏾‍💼"
    }
  ];

  const upcomingEvents = [
    {
      title: "AI for Agriculture Workshop",
      date: "February 15, 2024",
      time: "2:00 PM GMT",
      type: "Workshop",
      attendees: "45+"
    },
    {
      title: "ChatGPT Mastery Webinar",
      date: "February 20, 2024",
      time: "6:00 PM GMT",
      type: "Webinar",
      attendees: "120+"
    },
    {
      title: "AI Community Meetup - Accra",
      date: "February 25, 2024",
      time: "4:00 PM GMT",
      type: "Meetup",
      attendees: "80+"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Ama Adjei", points: 2450, badge: "🏆" },
    { rank: 2, name: "Kwame Osei", points: 2180, badge: "🥈" },
    { rank: 3, name: "Sarah Mensah", points: 1950, badge: "🥉" },
    { rank: 4, name: "Michael Asante", points: 1720, badge: "⭐" },
    { rank: 5, name: "Grace Oppong", points: 1560, badge: "⭐" }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold leading-tight">
              Join the AGT <span className="text-gradient">Community</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-montserrat leading-relaxed">
              Connect with like-minded Africans learning AI, share experiences, and build 
              the future of technology in Africa together.
            </p>
          </div>
        </div>
      </section>

      {/* Community Platforms */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-poppins font-bold mb-4">
              Connect with Us
            </h2>
            <p className="text-lg text-muted-foreground font-montserrat">
              Join our community on your favorite platform
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-lg font-poppins font-semibold mb-2">WhatsApp Group</h3>
                <p className="text-sm text-muted-foreground mb-4">Daily discussions and support</p>
                <Button className="w-full gradient-hero text-white" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  Join WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-poppins font-semibold mb-2">Telegram Channel</h3>
                <p className="text-sm text-muted-foreground mb-4">Updates and announcements</p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Join Telegram
                </Button>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">💌</div>
                <h3 className="text-lg font-poppins font-semibold mb-2">Email Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">Weekly AI insights and tips</p>
                <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white" size="sm">
                  <Mail className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-lg font-poppins font-semibold mb-2">Discord Server</h3>
                <p className="text-sm text-muted-foreground mb-4">Real-time chat and events</p>
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Join Discord
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-poppins font-bold mb-4">
              Community <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground font-montserrat">
              Hear from our community members who are making a difference
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="gradient-card border-border/50 hover:shadow-card transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{testimonial.image}</div>
                    <div className="flex-1">
                      <blockquote className="text-muted-foreground font-montserrat italic mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <p className="font-poppins font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-primary">{testimonial.role}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events and Leaderboard */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Upcoming Events */}
            <div>
              <h2 className="text-2xl font-poppins font-bold mb-6 flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-primary" />
                Upcoming Events
              </h2>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <Card key={event.title} className="gradient-card border-border/50">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-poppins font-semibold mb-1">{event.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {event.date} at {event.time}
                          </p>
                          <div className="flex items-center space-x-4">
                            <Badge variant="outline">{event.type}</Badge>
                            <span className="text-xs text-muted-foreground flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              {event.attendees} attending
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Community Leaderboard */}
            <div>
              <h2 className="text-2xl font-poppins font-bold mb-6 flex items-center">
                <Trophy className="h-6 w-6 mr-2 text-accent" />
                Community Leaderboard
              </h2>
              <Card className="gradient-card border-border/50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {leaderboard.map((member, index) => (
                      <div key={member.name} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{member.badge}</span>
                          <div>
                            <p className="font-poppins font-medium">{member.name}</p>
                            <p className="text-xs text-muted-foreground">Rank #{member.rank}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-poppins font-bold text-primary">{member.points}</p>
                          <p className="text-xs text-muted-foreground">points</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto text-center">
          <Card className="gradient-card border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-poppins font-bold mb-4 text-gradient">
                Stay Connected
              </h3>
              <p className="text-muted-foreground font-montserrat mb-6">
                Get weekly AI insights, community updates, and exclusive content delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" className="gradient-hero text-white">
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <ChatbotWidget />
    </div>
  );
};

export default Community;