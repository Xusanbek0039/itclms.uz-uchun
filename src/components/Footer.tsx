import { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, Phone, Heart, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from './ThemeToggle';
import { AnimatedSection } from './AnimatedSection';
import { StudentVerificationDialog } from './StudentVerificationDialog';

export function Footer() {
  const [showVerificationDialog, setShowVerificationDialog] = useState(false);
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    courses: [
      { name: 'Web Development', href: '#' },
      { name: 'Data Science', href: '#' },
      { name: 'UI/UX Design', href: '#' },
      { name: 'Digital Marketing', href: '#' },
      { name: 'Photography', href: '#' },
      { name: 'AI & Machine Learning', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Instructors', href: '#instructors' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Partnerships', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Community', href: '#' },
      { name: 'System Status', href: '#' },
      { name: 'Bug Reports', href: '#' },
      { name: 'Feature Requests', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
      { name: 'Refund Policy', href: '#' },
      { name: 'Accessibility', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'support@eduplatform.com' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: MapPin, text: '123 Education St, San Francisco, CA' }
  ];

  return (
    <footer className="bg-gradient-to-br from-background via-background to-primary/5 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <AnimatedSection animation="fade-in-up">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 mb-16 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full animate-float" />
            <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/10 rounded-full animate-float animation-delay-1000" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Stay Updated with Our Latest Courses
              </h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to know about new courses, 
                special offers, and learning tips from our expert instructors.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                />
                <Button 
                  variant="secondary" 
                  className="whitespace-nowrap bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  Subscribe
                </Button>
              </div>
              
              <p className="text-white/80 text-sm mt-4">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <AnimatedSection animation="fade-in-up" delay={100}>
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <span className="text-2xl font-bold gradient-text">EduPlatform</span>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Empowering learners worldwide with premium education experiences. 
                Join our global community and transform your future with world-class courses.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Theme Toggle */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Theme:</span>
                <ThemeToggle />
              </div>
            </div>
          </AnimatedSection>

          {/* Courses */}
          <AnimatedSection animation="fade-in-up" delay={200}>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Popular Courses</h4>
              <ul className="space-y-3">
                {footerLinks.courses.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm animated-underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <button 
                    onClick={() => setShowVerificationDialog(true)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center gap-1"
                  >
                    <ShieldCheck className="w-3 h-3" />
                    Verify Status
                  </button>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Company */}
          <AnimatedSection animation="fade-in-up" delay={300}>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm animated-underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Support */}
          <AnimatedSection animation="fade-in-up" delay={400}>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm animated-underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Legal */}
          <AnimatedSection animation="fade-in-up" delay={500}>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm animated-underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <AnimatedSection animation="fade-in-right">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} EduPlatform. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>for learners worldwide.</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-right">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden sm:block">Follow us:</span>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="w-9 h-9 hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <StudentVerificationDialog 
          open={showVerificationDialog}
          onOpenChange={setShowVerificationDialog}
        />
      </div>
    </footer>
  );
}