import { useState } from 'react';
import { Github, Linkedin, Twitter, Award, BookOpen, Users, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AnimatedSection } from './AnimatedSection';
import { InstructorApplicationDialog } from './InstructorApplicationDialog';

export function InstructorsSection() {
  const [showApplicationDialog, setShowApplicationDialog] = useState(false);
  const instructors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      title: 'Lead UI/UX Designer',
      company: 'Google',
      expertise: 'UI/UX Design',
      image: '/placeholder.svg',
      bio: 'Former lead designer at Google with 10+ years of experience. Specialized in creating user-centered designs for millions of users.',
      students: 25000,
      courses: 8,
      rating: 4.9,
      badges: ['Expert 🧠', 'Awarded 🥇'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      id: 2,
      name: 'John Smith',
      title: 'Senior Full Stack Engineer',
      company: 'Meta',
      expertise: 'Web Development',
      image: '/placeholder.svg',
      bio: 'Full-stack engineer at Meta with expertise in React, Node.js, and cloud architecture. Built scalable systems for billions of users.',
      students: 32000,
      courses: 12,
      rating: 4.8,
      badges: ['Industry Leader 🚀', 'Top Rated ⭐'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      id: 3,
      name: 'Dr. Alex Kumar',
      title: 'AI Research Scientist',
      company: 'OpenAI',
      expertise: 'AI & Machine Learning',
      image: '/placeholder.svg',
      bio: 'AI researcher at OpenAI with PhD in Computer Science. Published 50+ papers and contributed to breakthrough AI models.',
      students: 18000,
      courses: 6,
      rating: 4.9,
      badges: ['Research Expert 🔬', 'PhD 🎓'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      id: 4,
      name: 'Emma Davis',
      title: 'Digital Marketing Director',
      company: 'Netflix',
      expertise: 'Digital Marketing',
      image: '/placeholder.svg',
      bio: 'Marketing director at Netflix with 12+ years of experience. Expert in growth hacking and performance marketing strategies.',
      students: 21000,
      courses: 10,
      rating: 4.8,
      badges: ['Growth Expert 📈', 'Marketing Pro 💼'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      id: 5,
      name: 'Mike Chen',
      title: 'Data Science Lead',
      company: 'Tesla',
      expertise: 'Data Science',
      image: '/placeholder.svg',
      bio: 'Data science lead at Tesla working on autonomous driving algorithms. Expert in Python, R, and machine learning.',
      students: 15000,
      courses: 7,
      rating: 4.9,
      badges: ['Data Expert 📊', 'Innovation Leader 🚗'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      id: 6,
      name: 'Lisa Williams',
      title: 'Professional Photographer',
      company: 'National Geographic',
      expertise: 'Photography',
      image: '/placeholder.svg',
      bio: 'Award-winning photographer with National Geographic. Traveled to 80+ countries capturing stunning visuals for major publications.',
      students: 12000,
      courses: 5,
      rating: 4.8,
      badges: ['Award Winner 🏆', 'World Traveler 🌍'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
  ];

  return (
    <section id="instructors" className="py-20 bg-gradient-to-br from-background to-accent/5">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Users className="w-4 h-4 mr-2" />
              Meet Our Experts
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Learn from
              <span className="gradient-text"> Industry Leaders</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our instructors are seasoned professionals from top companies like Google, Meta, Apple, and Netflix. 
              Learn cutting-edge skills from those who shape the industry.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <AnimatedSection 
              key={instructor.id} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <Card className="hover-card h-full group overflow-hidden border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  {/* Avatar and basic info */}
                  <div className="text-center mb-6">
                    <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                      <AvatarImage src={instructor.image} alt={instructor.name} />
                      <AvatarFallback className="bg-gradient-primary text-white font-bold text-lg">
                        {instructor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                      {instructor.name}
                    </h3>
                    <div className="text-muted-foreground text-sm mb-2">
                      {instructor.title} at {instructor.company}
                    </div>
                    
                    <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                      {instructor.expertise}
                    </Badge>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {instructor.bio}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                      <div className="flex items-center justify-center mb-1">
                        <Users className="w-4 h-4 text-primary mr-1" />
                      </div>
                      <div className="text-lg font-bold text-primary">{(instructor.students / 1000).toFixed(0)}K</div>
                      <div className="text-xs text-muted-foreground">Students</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-1">
                        <BookOpen className="w-4 h-4 text-accent mr-1" />
                      </div>
                      <div className="text-lg font-bold text-accent">{instructor.courses}</div>
                      <div className="text-xs text-muted-foreground">Courses</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-1">
                        <Award className="w-4 h-4 text-warning mr-1" />
                      </div>
                      <div className="text-lg font-bold text-warning">{instructor.rating}</div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {instructor.badges.map((badge, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="text-xs bg-warning/10 border-warning/20 text-warning"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  {/* Social links */}
                  <div className="flex justify-center gap-3">
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="h-8 w-8 hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                      style={{ transitionDelay: '0ms' }}
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="h-8 w-8 hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                      style={{ transitionDelay: '100ms' }}
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="h-8 w-8 hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                      style={{ transitionDelay: '200ms' }}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in-up" delay={600}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Want to become an instructor and share your expertise?
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow px-8 py-4 text-lg"
              onClick={() => setShowApplicationDialog(true)}
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Become an Instructor
            </Button>
          </div>
        </AnimatedSection>

        <InstructorApplicationDialog 
          open={showApplicationDialog}
          onOpenChange={setShowApplicationDialog}
        />
      </div>
    </section>
  );
}