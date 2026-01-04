import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { CoursesSection } from '@/components/CoursesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { InstructorsSection } from '@/components/InstructorsSection';
import { PricingSection } from '@/components/PricingSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      
      {/* Fixed Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <TestimonialsSection />
        <InstructorsSection />
        <PricingSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
