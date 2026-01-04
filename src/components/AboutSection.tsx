import { Target, Globe, Heart, Users, BookOpen, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from './AnimatedSection';

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest quality in every course and learning experience.',
      color: 'text-primary'
    },
    {
      icon: Globe,
      title: 'Inclusivity',
      description: 'Education should be accessible to everyone, everywhere, regardless of background.',
      color: 'text-accent'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We believe in the transformative power of passionate learning and teaching.',
      color: 'text-warning'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building connections and fostering collaboration among learners worldwide.',
      color: 'text-primary'
    }
  ];

  const stats = [
    { icon: BookOpen, value: '2M+', label: 'Lessons Completed' },
    { icon: Users, value: '150K+', label: 'Active Learners' },
    { icon: Trophy, value: '50K+', label: 'Certificates Issued' },
    { icon: Globe, value: '190+', label: 'Countries Reached' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              About EduPlatform
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Empowering Minds,
              <span className="gradient-text"> Transforming Lives</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Since 2020, we've been on a mission to democratize education and make world-class learning 
              accessible to everyone. Our platform combines cutting-edge technology with proven pedagogical 
              methods to create an unparalleled learning experience.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <AnimatedSection animation="fade-in-right" delay={200}>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe that education is the most powerful tool for personal and societal transformation. 
                Our platform brings together world-class instructors, innovative learning methodologies, 
                and cutting-edge technology to create learning experiences that are both engaging and effective.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking to advance your career, explore a new passion, or gain skills for 
                the future economy, we're here to support your learning journey every step of the way.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={400}>
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <Card 
                    key={index} 
                    className="hover-card glass border-0 bg-card/50 backdrop-blur-sm group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br from-background to-accent/10 group-hover:scale-110 transition-transform duration-300`}>
                          <value.icon className={`w-6 h-6 ${value.color}`} />
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-float" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full animate-float animation-delay-1000" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}