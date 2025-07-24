import Navigation from "@/components/Navigation";
import CommunitySection from "@/components/CommunitySection";
import ChatbotWidget from "@/components/ChatbotWidget";

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <CommunitySection />
      </div>
      <ChatbotWidget />
    </div>
  );
};

export default Community;