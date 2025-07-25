import Navigation from "@/components/Navigation";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, Clock, BookOpen } from "lucide-react";
import { useState } from "react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const blogPosts = [
    {
      title: "Getting Started with AI in Ghana: A Beginner's Guide",
      snippet: "Learn the basics of artificial intelligence and how it's transforming industries across Ghana...",
      category: "Tutorials",
      author: "Prince Fiebor",
      date: "January 15, 2024",
      readTime: "5 min read",
      image: "🤖",
      tags: ["AI", "Beginners", "Ghana"]
    },
    {
      title: "AGT TECH Success Story: Farmer John's AI Journey",
      snippet: "How a smallholder farmer in Kumasi increased his crop yield by 40% using our AGT FARM AI solution...",
      category: "Success Stories",
      author: "AGT Team",
      date: "January 12, 2024",
      readTime: "7 min read",
      image: "🌾",
      tags: ["Success", "Agriculture", "AI Solutions"]
    },
    {
      title: "AI Tools Every Ghanaian Student Should Know",
      snippet: "Discover the top AI tools that can help you excel in your studies and prepare for the future job market...",
      category: "Tutorials",
      author: "Prince Fiebor",
      date: "January 10, 2024",
      readTime: "6 min read",
      image: "🎓",
      tags: ["Education", "Students", "AI Tools"]
    },
    {
      title: "Upcoming AI Workshop: ChatGPT for Business Owners",
      snippet: "Join us for an intensive workshop on leveraging ChatGPT to grow your business in Ghana...",
      category: "Events",
      author: "AGT Team",
      date: "January 8, 2024",
      readTime: "3 min read",
      image: "💼",
      tags: ["Workshop", "Business", "ChatGPT"]
    },
    {
      title: "The Future of AI in African Healthcare",
      snippet: "Exploring how artificial intelligence is revolutionizing healthcare delivery across the African continent...",
      category: "AI News",
      author: "Dr. Ama Asante",
      date: "January 5, 2024",
      readTime: "8 min read",
      image: "🏥",
      tags: ["Healthcare", "Africa", "Future Tech"]
    },
    {
      title: "From Zero to AI Expert: Kwame's Learning Journey",
      snippet: "Follow Kwame Osei's transformation from complete beginner to AI freelancer earning $2000/month...",
      category: "Success Stories",
      author: "AGT Team",
      date: "January 3, 2024",
      readTime: "10 min read",
      image: "🚀",
      tags: ["Success", "Freelancing", "Career Change"]
    }
  ];

  const categories = ["All", "Tutorials", "Events", "Success Stories", "AI News"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.snippet.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colorMap = {
      "Tutorials": "bg-primary/20 text-primary",
      "Events": "bg-neon-green/20 text-neon-green",
      "Success Stories": "bg-accent/20 text-accent",
      "AI News": "bg-secondary/20 text-secondary"
    };
    return colorMap[category as keyof typeof colorMap] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold leading-tight">
              AGT TECH <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-montserrat leading-relaxed">
              Stay updated with the latest AI trends, success stories, tutorials, and insights 
              from the African artificial intelligence community.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category 
                    ? "gradient-hero text-white" 
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.title}
                className="gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-3 text-center">{post.image}</div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-poppins font-semibold leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground font-montserrat text-sm leading-relaxed">
                    {post.snippet}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full gradient-hero text-white hover:shadow-glow transition-all duration-300"
                    size="sm"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No articles found matching your search.</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
      
      <ChatbotWidget />
    </div>
  );
};

export default Blog;