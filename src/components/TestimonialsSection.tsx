import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AnimatedSection } from './AnimatedSection';

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Martinez',
      role: 'Software Engineer at Google',
      image: '/placeholder.svg',
      rating: 5,
      text: 'This platform completely transformed my career. The full-stack development course was incredibly comprehensive and practical. I landed my dream job at Google just 3 months after completing the program!',
      course: 'Full Stack Development',
      badge: 'Top Scorer 🏆',
      company: 'Google'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'UX Designer at Apple',
      image: '/placeholder.svg',
      rating: 5,
      text: 'The UI/UX design course exceeded all my expectations. The instructors are world-class, and the project-based learning approach helped me build an amazing portfolio. Highly recommended!',
      course: 'UI/UX Design',
      badge: 'Alumni 🎓',
      company: 'Apple'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Data Scientist at Netflix',
      image: '/placeholder.svg',
      rating: 5,
      text: 'The AI & Machine Learning course was exactly what I needed to transition into data science. The hands-on projects with real datasets prepared me perfectly for my role at Netflix.',
      course: 'AI & Machine Learning',
      badge: 'Career Changer 🚀',
      company: 'Netflix'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Digital Marketing Manager',
      image: '/placeholder.svg',
      rating: 5,
      text: 'I doubled my salary after completing the digital marketing course. The strategies I learned helped me increase ROI by 300% for my current company. Best investment I ever made!',
      course: 'Digital Marketing',
      badge: 'Success Story ⭐',
      company: 'Startup Inc.'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Freelance Photographer',
      image: '/placeholder.svg',
      rating: 5,
      text: 'The photography course helped me turn my passion into a profitable business. I went from amateur to professional in just 6 months. The community support is incredible!',
      course: 'Digital Photography',
      badge: 'Entrepreneur 💼',
      company: 'Freelance'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/5 rounded-full animate-float animation-delay-2000" />
      
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 bg-warning/10 text-warning border-warning/20">
              <Star className="w-4 h-4 mr-2" />
              Student Success Stories
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What Our Students Say About
              <span className="gradient-text"> Their Transformation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful students who have transformed their careers and achieved their dreams through our courses.
            </p>
          </div>
        </AnimatedSection>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <AnimatedSection 
                key={`${testimonial.id}-${currentSlide}`}
                animation="fade-in-up" 
                delay={index * 100}
              >
                <Card className={`hover-card h-full group relative ${
                  index === 1 ? 'scale-105 border-primary/20 shadow-glow' : ''
                }`}>
                  <CardContent className="p-6">
                    {/* Quote icon */}
                    <div className="absolute top-4 right-4 text-primary/20">
                      <Quote className="w-8 h-8" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <p className="text-foreground mb-6 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                      "{testimonial.text}"
                    </p>

                    {/* Course badge */}
                    <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent">
                      {testimonial.course}
                    </Badge>

                    {/* Author info */}
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12 border-2 border-primary/20">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <Badge variant="outline" className="mt-1 text-xs bg-warning/10 border-warning/20 text-warning">
                          {testimonial.badge}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-primary w-6' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <AnimatedSection animation="fade-in-up" delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                85%
              </div>
              <div className="text-muted-foreground">Career Advancement</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-warning mb-2 group-hover:scale-110 transition-transform duration-300">
                150%
              </div>
              <div className="text-muted-foreground">Average Salary Increase</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                92%
              </div>
              <div className="text-muted-foreground">Course Completion</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}