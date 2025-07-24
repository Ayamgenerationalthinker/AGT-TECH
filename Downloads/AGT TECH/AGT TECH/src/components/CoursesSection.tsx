import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, BookOpen } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      title: "ChatGPT for Beginners",
      description: "Master the fundamentals of AI conversation and prompt engineering to boost productivity",
      price: "GHS 150",
      duration: "4 weeks",
      students: "200+",
      rating: "4.9",
      level: "Beginner",
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
      image: "🎯"
    }
  ];

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
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold mb-6">
            Master <span className="text-gradient">AI Skills</span> That Matter
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-montserrat max-w-3xl mx-auto leading-relaxed">
            From beginner-friendly introductions to advanced professional applications, 
            our courses are designed to transform how Africans work, create, and solve problems with AI.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {courses.map((course, index) => (
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
  );
};

export default CoursesSection;