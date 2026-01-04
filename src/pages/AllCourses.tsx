import { useState } from 'react';
import { Code, Palette, BarChart, Camera, Cpu, Globe, Star, Clock, Users, Filter, BookOpen, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';

export default function AllCourses() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Development', 'Design', 'Business', 'Photography', 'AI/ML', 'Marketing', 'Data Science'];

  const allCourses = [
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
      category: 'Data Science',
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
      category: 'Marketing',
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
    },
    {
      id: 7,
      title: 'React Native Mobile Development',
      category: 'Development',
      instructor: 'James Wilson',
      rating: 4.8,
      students: 7200,
      duration: '40 hours',
      price: 159,
      originalPrice: 229,
      image: '📱',
      level: 'Intermediate',
      icon: Code,
      features: ['iOS & Android', 'Native Performance', 'App Store Publishing']
    },
    {
      id: 8,
      title: 'Advanced Photoshop Techniques',
      category: 'Design',
      instructor: 'Maria Garcia',
      rating: 4.7,
      students: 5400,
      duration: '30 hours',
      price: 69,
      originalPrice: 99,
      image: '🖼️',
      level: 'Intermediate',
      icon: Palette,
      features: ['Photo Manipulation', 'Digital Art', 'Advanced Filters']
    },
    {
      id: 9,
      title: 'Business Analytics with Excel',
      category: 'Business',
      instructor: 'Robert Brown',
      rating: 4.6,
      students: 4800,
      duration: '22 hours',
      price: 59,
      originalPrice: 89,
      image: '📈',
      level: 'Beginner',
      icon: BarChart,
      features: ['Data Visualization', 'Pivot Tables', 'Financial Modeling']
    }
  ];

  const filteredCourses = allCourses.filter(course => {
    const categoryMatch = selectedCategory === 'All' || course.category === selectedCategory;
    const searchMatch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
      {/* Header */}
      <div className="bg-background/80 backdrop-blur-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
              <h1 className="text-2xl font-bold">All Courses</h1>
            </div>
            <Badge variant="secondary" className="px-4 py-2">
              {filteredCourses.length} courses found
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <AnimatedSection animation="fade-in-up">
          <div className="mb-8 space-y-6">
            <div className="max-w-md">
              <Input
                type="text"
                placeholder="Search courses or instructors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Filter className="w-4 h-4" />
                Filter by category:
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
          </div>
        </AnimatedSection>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course, index) => (
            <AnimatedSection 
              key={course.id} 
              animation="fade-in-up" 
              delay={index * 50}
            >
              <Card className="hover-card h-full group overflow-hidden border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{course.image}</div>
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <course.icon className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground">{course.category}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {course.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-warning text-warning" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-3 h-3" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground">Includes:</div>
                    <div className="flex flex-wrap gap-1">
                      {course.features.slice(0, 2).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs px-2 py-0">
                          {feature}
                        </Badge>
                      ))}
                      {course.features.length > 2 && (
                        <span className="text-xs text-muted-foreground">+{course.features.length - 2} more</span>
                      )}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">${course.price}</span>
                    <span className="text-sm text-muted-foreground line-through">${course.originalPrice}</span>
                  </div>
                  <Button 
                    size="sm"
                    className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-soft"
                  >
                    Enroll
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <AnimatedSection animation="fade-in-up">
            <div className="text-center py-12">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No courses found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}