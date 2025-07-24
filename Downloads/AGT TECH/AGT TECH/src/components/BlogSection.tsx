import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  User, 
  Search, 
  TrendingUp, 
  Lightbulb, 
  Code, 
  Brain, 
  Puzzle,
  ArrowRight
} from "lucide-react";

const BlogSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "How AI Can Help Reduce Unemployment in Ghana",
      summary: "Exploring the transformative potential of artificial intelligence in creating new job opportunities and empowering young Ghanaians in the digital economy.",
      author: "Prince Fiebor",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Employment",
      tags: ["#AIforAfrica", "#YouthTech", "#Employment"],
      image: "💼",
      featured: true
    },
    {
      id: 2,
      title: "5 Ways Students Can Learn AI Without a Laptop",
      summary: "Practical strategies for accessing AI education using smartphones, community centers, and innovative learning approaches designed for African students.",
      author: "Prince Fiebor",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Education",
      tags: ["#AIEducation", "#StudentLife", "#AccessibleLearning"],
      image: "📱",
      featured: false
    },
    {
      id: 3,
      title: "Top 3 AI Startups in Africa You Should Know About",
      summary: "Highlighting innovative African AI companies that are solving local problems and creating global impact with homegrown solutions.",
      author: "AGT TECH Team",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Innovation",
      tags: ["#AfricanStartups", "#AIInnovation", "#TechLeaders"],
      image: "🚀",
      featured: false
    },
    {
      id: 4,
      title: "Why Learning Machine Learning Is the New Gold",
      summary: "Understanding how machine learning skills have become the most valuable asset in today's economy and how Africans can tap into this goldmine.",
      author: "Prince Fiebor",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Skills",
      tags: ["#MachineLearning", "#SkillDevelopment", "#CareerGrowth"],
      image: "⚡",
      featured: true
    },
    {
      id: 5,
      title: "How Chatbots Will Change Education in Africa",
      summary: "Examining the revolutionary potential of AI-powered chatbots in making quality education accessible to every African child, regardless of location.",
      author: "AGT TECH Team",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "Education",
      tags: ["#Chatbots", "#EdTech", "#AccessibleEducation"],
      image: "🤖",
      featured: false
    },
    {
      id: 6,
      title: "AI in Agriculture: Feeding Africa's Future",
      summary: "How artificial intelligence is transforming farming practices across Africa, helping farmers increase yields while preserving the environment.",
      author: "Prince Fiebor",
      date: "2024-01-01",
      readTime: "12 min read",
      category: "Agriculture",
      tags: ["#SmartFarming", "#AgTech", "#SustainableAgriculture"],
      image: "🌾",
      featured: false
    }
  ];

  const categories = ["All", "Education", "Employment", "Innovation", "Skills", "Agriculture"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const getCategoryIcon = (category: string) => {
    const iconMap = {
      "Education": Brain,
      "Employment": TrendingUp,
      "Innovation": Lightbulb,
      "Skills": Code,
      "Agriculture": Brain
    };
    return iconMap[category as keyof typeof iconMap] || Puzzle;
  };

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold mb-6">
            AGT TECH <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-montserrat max-w-3xl mx-auto leading-relaxed">
            Fresh insights on AI, technology trends, and African innovation. 
            Stay updated with the latest developments in AI education and solutions.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer transition-all duration-200 ${
                  selectedCategory === category 
                    ? "bg-primary text-white" 
                    : "hover:bg-primary/10"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {selectedCategory === "All" && featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-poppins font-bold mb-6 text-center">
              Featured <span className="text-primary">Posts</span>
            </h3>
            <div className="grid lg:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <Card 
                  key={post.id}
                  className="gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-4xl">{post.image}</div>
                      <Badge className="bg-accent/20 text-accent">
                        Featured
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-poppins font-semibold leading-tight hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground font-montserrat text-sm leading-relaxed">
                      {post.summary}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button size="sm" variant="ghost" className="text-primary hover:text-primary/80">
                        Read More
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Posts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.map((post, index) => (
            <Card 
              key={post.id}
              className="gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{post.image}</div>
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-poppins font-semibold leading-tight hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-montserrat text-sm leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {post.author}
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 1).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button size="sm" variant="ghost" className="text-primary hover:text-primary/80">
                    Read More
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <Card className="gradient-card border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold mb-4 text-gradient">
                Stay Updated with AI in Ghana
              </h3>
              <p className="text-lg text-muted-foreground font-montserrat mb-6 leading-relaxed">
                Subscribe to our weekly newsletter: "AI in Ghana Digest" - Get the latest insights, 
                course updates, and success stories delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button className="gradient-hero text-white">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;