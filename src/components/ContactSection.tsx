import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { AnimatedSection } from './AnimatedSection';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message sent successfully! 🎉",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'support@eduplatform.com',
      description: 'Send us an email anytime',
      color: 'primary'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST',
      color: 'accent'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Education St, San Francisco, CA',
      description: 'Our headquarters',
      color: 'warning'
    }
  ];

  const faqs = [
    {
      question: 'How quickly do you respond?',
      answer: 'We typically respond within 24 hours on business days.'
    },
    {
      question: 'Do you offer phone support?',
      answer: 'Yes! Pro and Enterprise users get priority phone support.'
    },
    {
      question: 'Can I schedule a demo?',
      answer: 'Absolutely! We offer personalized demos for teams and enterprises.'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 bg-accent/10 text-accent border-accent/20">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get in Touch
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Have Questions?
              <span className="gradient-text"> We're Here to Help</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our support team is available 24/7 to help you succeed. 
              Whether you need technical help or course guidance, we're just a message away.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <AnimatedSection 
                key={index} 
                animation="fade-in-right" 
                delay={index * 100}
              >
                <Card className="hover-card group border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-${info.color}/10 group-hover:bg-${info.color}/20 transition-colors duration-300`}>
                        <info.icon className={`w-6 h-6 text-${info.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                          {info.title}
                        </h3>
                        <p className="text-foreground font-medium mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}

            {/* Quick FAQ */}
            <AnimatedSection animation="fade-in-right" delay={400}>
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Quick FAQ
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border/50 last:border-0 pb-3 last:pb-0">
                      <h4 className="font-medium text-sm mb-1">{faq.question}</h4>
                      <p className="text-xs text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <AnimatedSection animation="fade-in-up" delay={200}>
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Send className="w-6 h-6 text-primary" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What is this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your question or request..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      We typically respond within 24 hours. For urgent matters, please call us directly.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>

        {/* Additional Support Options */}
        <AnimatedSection animation="fade-in-up" delay={600}>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">More Ways to Get Help</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="hover-card border-0 bg-card/50 backdrop-blur-sm group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Live Chat</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get instant help with our 24/7 live chat support
                  </p>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-card border-0 bg-card/50 backdrop-blur-sm group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-semibold mb-2">Help Center</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Browse our comprehensive knowledge base
                  </p>
                  <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    Visit Help Center
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-card border-0 bg-card/50 backdrop-blur-sm group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-warning/20 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-warning" />
                  </div>
                  <h4 className="font-semibold mb-2">Schedule a Call</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Book a personalized consultation with our team
                  </p>
                  <Button variant="outline" size="sm" className="border-warning text-warning hover:bg-warning hover:text-warning-foreground">
                    Schedule Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}