import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import ChatbotWidget from "@/components/ChatbotWidget";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AboutSection />
      <ChatbotWidget />
    </div>
  );
};

export default About;