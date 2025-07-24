import Navigation from "@/components/Navigation";
import BlogSection from "@/components/BlogSection";
import ChatbotWidget from "@/components/ChatbotWidget";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <BlogSection />
      </div>
      <ChatbotWidget />
    </div>
  );
};

export default Blog;