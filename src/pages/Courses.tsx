import Navigation from "@/components/Navigation";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, BookOpen, Filter } from "lucide-react";
import { useState } from "react";

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const courses = [
    {
      title: "ChatGPT for Beginners",
      description: "Master the fundamentals of AI conversation and prompt engineering to boost productivity",
      price: "GHS 150",
      duration: "4 weeks",
      students: "200+",
      rating: "4.9",
      level: "Beginner",
      category: "AI",
      image: "🤖"
    },
    {
      title: "Prompt Engineering Mastery",
      description: "Advanced techniques for getting the best results from AI tools and models",
      price: "GHS 300",
      duration: "6 weeks", 
      students: "150+",
      rating: "4.8",
      level: "Intermediate",
      category: "AI",
      image: "⚡"
    },
    {
      title: "AI Freelance Hustle",
      description: "Turn your AI skills into a profitable freelancing business serving global clients",
      price: "GHS 500",
      duration: "8 weeks",
      students: "100+", 
      rating: "4.9",
      level: "Advanced",
      category: "AI",
      image: "💼"
    },
    {
      title: "AI Tools for Professionals",
      description: "Specialized AI applications for teachers, business owners, and creative professionals",
      price: "GHS 250",
      duration: "5 weeks",
      students: "180+",
      rating: "4.7",
      level: "Intermediate",
      category: "AI",
      image: "🎯"
    },
    {
      title: "Machine Learning Fundamentals",
      description: "Learn the core concepts of machine learning and build your first predictive models",
      price: "GHS 400",
      duration: "8 weeks",
      students: "120+",
      rating: "4.8",
      level: "Intermediate",
      category: "ML",
      image: "🧠"
    },
    {
      title: "AI for Healthcare",
      description: "Apply AI techniques to solve healthcare challenges in African contexts",
      price: "GHS 600",
      duration: "10 weeks",
      students: "80+",
      rating: "4.9",
      level: "Advanced",
      category: "Health Tech",
      image: "🏥"
    },
    {
      title: "Deep Learning with Python",
      description: "Build neural networks and deep learning models for real-world applications",
      price: "GHS 550",
      duration: "12 weeks",
      students: "90+",
      rating: "4.7",
      level: "Advanced",
      category: "ML",
      image: "🐍"
    },
    {
      title: "Web Development for AI",
      description: "Learn to build web applications that integrate AI and machine learning models",
      price: "GHS 450",
      duration: "10 weeks",
      students: "110+",
      rating: "4.6",
      level: "Intermediate",
      category: "Web Dev",
      image: "🌐"
    }
  ];

  const filters = ["All", "AI", "ML", "Health Tech", "Web Dev"];

  const filteredCourses = activeFilter === "All" 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-neon-green/20 text-neon-green";
      case "Intermediate":
        return "bg-primary/20 text-primary";
      case "Advanced":
        return "bg-accent/20 text-accent";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold leading-tight">
              Master <span className="text-gradient">AI Skills</span> That Matter
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-montserrat leading-relaxed">
              From beginner-friendly introductions to advanced professional applications, 
              our courses are designed to transform how Africans work, create, and solve problems with AI.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            <div className="flex items-center mr-4 mb-2">
              <Filter className="h-5 w-5 text-muted-foreground mr-2" />
              <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
            </div>
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter 
                  ? "gradient-hero text-white" 
                  : "border-primary text-primary hover:bg-primary hover:text-white"
                }
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {filteredCourses.map((course, index) => (
              <Card 
                key={course.title}
                className="gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-3 text-center">{course.image}</div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current mr-1" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-poppins font-semibold leading-tight">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground font-montserrat text-sm leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary font-poppins">
                      {course.price}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      <BookOpen className="h-3 w-3 mr-1" />
                      Online
                    </Badge>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <Button 
                    className="w-full gradient-hero text-white hover:shadow-glow transition-all duration-300"
                    size="sm"
                  >
                    Enroll Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No courses found in this category.</p>
            </div>
          )}

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              View All Courses
            </Button>
          </div>
        </div>
      </section>
      
      <ChatbotWidget />
    </div>
  );
};

export default Courses;