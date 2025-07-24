import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import ChatbotWidget from "@/components/ChatbotWidget";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <ContactSection />
      </div>
      <ChatbotWidget />
    </div>
  );
};

export default Contact;