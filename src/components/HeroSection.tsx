import { useState, useEffect } from 'react';
import { GraduationCap, Rocket, Sparkles, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from './AnimatedSection';
import { WatchDemoDialog } from './WatchDemoDialog';
import { Link } from 'react-router-dom';

export function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  const fullText = 'TRANSFORM YOUR FUTURE WITH WORLD-CLASS EDUCATION';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float animation-delay-1000" />
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-warning/10 rounded-full animate-float animation-delay-2000" />
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-primary/5 rounded-full animate-float animation-delay-3000" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection animation="fade-in-up" delay={200}>
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-all duration-300">
            <Sparkles className="w-4 h-4 mr-2" />
            Welcome to the Future of Learning
          </Badge>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={400}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">
              {typedText}
              <span className="animate-blink">|</span>
            </span>
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={600}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Join over 100,000+ students worldwide in our premium learning platform. 
            Master new skills, advance your career, and unlock your potential with expert-led courses.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={800}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/courses">
              <Button 
                size="lg" 
                className="group px-8 py-4 text-lg font-semibold bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow"
              >
                <GraduationCap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Explore Courses
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group px-8 py-4 text-lg font-semibold border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              onClick={() => setShowDemoDialog(true)}
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={1000}>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                100K+
              </div>
              <div className="text-muted-foreground">Students</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-muted-foreground">Courses</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-warning mb-2 group-hover:scale-110 transition-transform duration-300">
                95%
              </div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Floating mascot */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center animate-float shadow-glow">
            <Rocket className="w-16 h-16 text-white animate-wiggle" />
          </div>
        </div>
      </div>

      <WatchDemoDialog 
        open={showDemoDialog} 
        onOpenChange={setShowDemoDialog} 
      />
    </section>
  );
}