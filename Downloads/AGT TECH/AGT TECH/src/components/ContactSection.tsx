import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Send,
  Globe,
  Clock,
  Headphones,
  ExternalLink
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "general",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent! 🎉",
        description: "Thank you for contacting AGT TECH. Prince will respond within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "general",
        message: ""
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call or WhatsApp",
      info: "+233531554625",
      description: "Direct line to Prince Fiebor",
      action: "Call Now",
      href: "tel:+233531554625",
      color: "neon-green"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "princefiebor10@gmail.com",
      description: "Get a response within 24 hours",
      action: "Send Email",
      href: "mailto:princefiebor10@gmail.com",
      color: "primary"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      info: "Quick Support",
      description: "Instant messaging support",
      action: "Start Chat",
      href: "https://wa.me/233531554625",
      color: "neon-green"
    },
    {
      icon: Globe,
      title: "Office Location",
      info: "Accra, Ghana",
      description: "West Africa's AI Hub",
      action: "Get Directions",
      href: "#",
      color: "secondary"
    }
  ];

  const socialMedia = [
    {
      name: "TikTok",
      icon: "🎵",
      url: "https://tiktok.com/@agttech",
      followers: "10K+"
    },
    {
      name: "YouTube",
      icon: "📺",
      url: "https://youtube.com/@agttech",
      followers: "5K+"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com/company/agttech",
      followers: "3K+"
    },
    {
      name: "Instagram",
      icon: "📸",
      url: "https://instagram.com/agttech",
      followers: "8K+"
    }
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "courses", label: "Course Information" },
    { value: "partnership", label: "Partnership Opportunity" },
    { value: "media", label: "Media Inquiry" },
    { value: "technical", label: "Technical Support" },
    { value: "community", label: "Community & Events" }
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-montserrat max-w-3xl mx-auto leading-relaxed">
            Have questions about our courses, want to partner with us, or need AI consultation? 
            Prince Fiebor and the AGT TECH team are here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins font-bold flex items-center">
                  <Send className="h-6 w-6 mr-3 text-primary" />
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground font-montserrat">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+233 XXX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your inquiry, questions, or how we can help you..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gradient-hero text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending Message..."
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Direct Contact Methods */}
            <Card className="gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-poppins font-bold flex items-center">
                  <Headphones className="h-5 w-5 mr-2 text-primary" />
                  Direct Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={method.title} className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${getColorClasses(method.color)}`}>
                      <method.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{method.title}</h4>
                      <p className="text-sm text-primary font-medium">{method.info}</p>
                      <p className="text-xs text-muted-foreground mb-2">{method.description}</p>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="text-xs"
                        onClick={() => window.open(method.href, '_blank')}
                      >
                        {method.action}
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-poppins font-bold flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-secondary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Monday - Friday</span>
                  <span className="text-sm font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Saturday</span>
                  <span className="text-sm font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Sunday</span>
                  <span className="text-sm font-medium">Closed</span>
                </div>
                <div className="border-t border-border pt-3 mt-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                    <span className="text-sm text-neon-green font-medium">Currently Online</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    WhatsApp support available 24/7
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-poppins font-bold">
                  Follow Us
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Stay connected on social media
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {socialMedia.map((platform) => (
                    <Button
                      key={platform.name}
                      variant="outline"
                      size="sm"
                      className="h-auto p-3 flex flex-col items-center space-y-1"
                      onClick={() => window.open(platform.url, '_blank')}
                    >
                      <span className="text-lg">{platform.icon}</span>
                      <span className="text-xs font-medium">{platform.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {platform.followers}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="mt-16">
          <Card className="gradient-card border-border/50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-poppins font-bold mb-4 text-gradient">
                Need Quick Answers?
              </h3>
              <p className="text-lg text-muted-foreground font-montserrat mb-6 leading-relaxed">
                Check out our most frequently asked questions or chat with AGT Bot for instant help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View FAQ
                </Button>
                <Button size="lg" className="gradient-hero text-white">
                  Chat with AGT Bot
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;