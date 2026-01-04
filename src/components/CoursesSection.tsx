import { useState } from 'react';
import { Code, Palette, BarChart, Camera, Cpu, Globe, Star, Clock, Users, Filter, BookOpen } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from './AnimatedSection';
import { EnrollmentDialog } from './EnrollmentDialog';
import { Link } from 'react-router-dom';

export function CoursesSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showEnrollmentDialog, setShowEnrollmentDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const categories = ['All', 'Development', 'Design', 'Business', 'Photography', 'AI/ML'];

  const courses = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      category: 'Development',
      instructor: 'John Smith',
      rating: 4.9,
      students: 15420,
      duration: '45 hours',
      price: 129,
      originalPrice: 199,
      image: '🚀',
      level: 'Beginner',
      icon: Code,
      features: ['React & Node.js', 'Real Projects', 'Job Guarantee']
    },
    {
      id: 2,
      title: 'UI/UX Design Masterclass',
      category: 'Design',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      students: 12350,
      duration: '32 hours',
      price: 99,
      originalPrice: 149,
      image: '🎨',
      level: 'Intermediate',
      icon: Palette,
      features: ['Figma & Adobe XD', 'Portfolio Projects', 'Design System']
    },
    {
      id: 3,
      title: 'Data Science & Analytics',
      category: 'Business',
      instructor: 'Mike Chen',
      rating: 4.9,
      students: 8940,
      duration: '38 hours',
      price: 149,
      originalPrice: 219,
      image: '📊',
      level: 'Advanced',
      icon: BarChart,
      features: ['Python & R', 'Machine Learning', 'Real Datasets']
    },
    {
      id: 4,
      title: 'Digital Photography Pro',
      category: 'Photography',
      instructor: 'Lisa Williams',
      rating: 4.7,
      students: 6780,
      duration: '25 hours',
      price: 79,
      originalPrice: 119,
      image: '📸',
      level: 'Beginner',
      icon: Camera,
      features: ['Professional Techniques', 'Photo Editing', 'Portfolio Building']
    },
    {
      id: 5,
      title: 'AI & Machine Learning',
      category: 'AI/ML',
      instructor: 'Dr. Alex Kumar',
      rating: 4.9,
      students: 11230,
      duration: '52 hours',
      price: 199,
      originalPrice: 299,
      image: '🤖',
      level: 'Advanced',
      icon: Cpu,
      features: ['Deep Learning', 'TensorFlow & PyTorch', 'Industry Projects']
    },
    {
      id: 6,
      title: 'Digital Marketing Strategy',
      category: 'Business',
      instructor: 'Emma Davis',
      rating: 4.8,
      students: 9560,
      duration: '28 hours',
      price: 89,
      originalPrice: 139,
      image: '🌐',
      level: 'Intermediate',
      icon: Globe,
      features: ['SEO & SEM', 'Social Media', 'Analytics & ROI']
    }
  ];

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'Intermediate':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'Advanced':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      default:
        return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  const handleEnrollClick = (course: any) => {
    setSelectedCourse(course);
    setShowEnrollmentDialog(true);
  };

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 bg-accent/10 text-accent border-accent/20">
              <BookOpen className="w-4 h-4 mr-2" />
              Our Courses
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Premium Courses</span>
              <br />Designed for Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Learn from industry experts with our carefully crafted curriculum. 
              Each course includes hands-on projects, lifetime access, and career support.
            </p>
          </div>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection animation="fade-in-up" delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Filter className="w-4 h-4" />
              Filter by:
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-gradient-primary text-white shadow-glow' 
                    : 'hover:border-primary hover:text-primary'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <AnimatedSection 
              key={course.id} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <Card className="hover-card h-full group overflow-hidden border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{course.image}</div>
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <course.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">{course.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {course.title}
                  </h3>
                  
                  <p className="text-muted-foreground">by {course.instructor}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-warning text-warning" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">What you'll learn:</div>
                    <div className="flex flex-wrap gap-1">
                      {course.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">${course.price}</span>
                    <span className="text-lg text-muted-foreground line-through">${course.originalPrice}</span>
                  </div>
                  <Button 
                    className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-soft"
                    onClick={() => handleEnrollClick(course)}
                  >
                    Enroll Now
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in-up" delay={600}>
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                View All Courses
              </Button>
            </Link>
          </div>
        </AnimatedSection>

        <EnrollmentDialog 
          open={showEnrollmentDialog}
          onOpenChange={setShowEnrollmentDialog}
          course={selectedCourse}
        />
      </div>
    </section>
  );
}