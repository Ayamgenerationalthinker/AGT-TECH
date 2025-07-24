import Navigation from "@/components/Navigation";
import CoursesSection from "@/components/CoursesSection";
import ChatbotWidget from "@/components/ChatbotWidget";

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <CoursesSection />
      </div>
      <ChatbotWidget />
    </div>
  );
};

export default Courses;