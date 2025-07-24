import Navigation from "@/components/Navigation";
import SolutionsSection from "@/components/SolutionsSection";
import ChatbotWidget from "@/components/ChatbotWidget";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <SolutionsSection />
      </div>
      <ChatbotWidget />
    </div>
  );
};

export default Solutions;