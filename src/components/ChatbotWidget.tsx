import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi 👋 I'm AGT Bot! Ask me anything about our courses, mission, or AI in Ghana.",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('course') || lowerMessage.includes('learn')) {
      return "We offer amazing AI courses! 🚀 Our popular courses include ChatGPT for Beginners (GHS 150), Prompt Engineering Mastery (GHS 300), and AI Freelance Hustle (GHS 500). Which one interests you?";
    } else if (lowerMessage.includes('prince') || lowerMessage.includes('ceo')) {
      return "Prince Fiebor is our visionary CEO and founder! 👨🏿‍💼 He's passionate about empowering Africans with AI skills and has trained over 500 students across Ghana and beyond.";
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return "Our courses range from GHS 150 to GHS 500. 💰 We believe in making AI education accessible to all Africans. You can also join our community for free to get started!";
    } else if (lowerMessage.includes('ghana') || lowerMessage.includes('africa')) {
      return "AI is transforming Africa! 🌍 We're solving problems in healthcare, education, agriculture, and creating new opportunities for young entrepreneurs. Ghana is leading this revolution!";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('phone')) {
      return "You can reach us at +233531554625 📞 or visit our contact page. We're also active on WhatsApp, TikTok, and LinkedIn. Prince Fiebor personally responds to messages!";
    } else if (lowerMessage.includes('community') || lowerMessage.includes('join')) {
      return "Join our amazing community! 🤝 We have WhatsApp and Telegram groups where we share AI tips, job opportunities, and support each other. Click 'Join Community' to get started!";
    } else {
      return "That's a great question! 🤔 For detailed information, I recommend contacting Prince Fiebor directly at +233531554625 or exploring our courses. Is there something specific about AI or our programs you'd like to know?";
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-hero text-white shadow-glow hover:shadow-neon transition-all duration-300 ${
          isOpen ? 'hidden' : 'flex'
        } items-center justify-center animate-glow`}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-80 h-96 shadow-card gradient-card border-border animate-slide-in-right">
          <CardHeader className="pb-3 gradient-hero text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-poppins">
                AGT Bot 🤖
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-white/80">Online • Ready to help!</p>
          </CardHeader>
          
          <CardContent className="flex flex-col h-full p-0">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      message.isBot
                        ? 'bg-muted text-muted-foreground'
                        : 'gradient-hero text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-2xl text-sm text-muted-foreground">
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-current rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-current rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-1 h-1 bg-current rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Input Area */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask me anything..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="gradient-hero text-white"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatbotWidget;