import { useState } from 'react';
import { 
  Code, Palette, BarChart, Camera, Cpu, Globe, Star, 
  Clock, Users, Filter, BookOpen, ArrowLeft, Search, GraduationCap 
} from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';

export default function AllCourses() {
  const [selectedCategory, setSelectedCategory] = useState('Barchasi');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Barchasi', 'Dasturlash', 'Dizayn', 'Biznes', 'Fotografiya', 'AI/ML', 'Marketing', 'Ma’lumotlar ilmi'];

  const allCourses = [
    {
      id: 1,
      title: 'Full Stack Web Dasturlash (MERN)',
      category: 'Dasturlash',
      instructor: 'Anvar Narzullaev',
      rating: 4.9,
      students: 12400,
      duration: '60 soat',
      price: 1200000,
      originalPrice: 2000000,
      level: 'Boshlang‘ich',
      icon: Code,
      features: ['React & Node.js', 'Amaliy Loyihalar', 'Sertifikat']
    },
    {
      id: 2,
      title: 'UI/UX Dizayn Masterklass',
      category: 'Dizayn',
      instructor: 'Azamat Shamuzafarov',
      rating: 4.8,
      students: 8500,
      duration: '40 soat',
      price: 850000,
      originalPrice: 1200000,
      level: 'O‘rta',
      icon: Palette,
      features: ['Figma & Adobe XD', 'Portfolio yaratish', 'Design System']
    },
    {
      id: 3,
      title: 'Data Science va Sun’iy Intellekt',
      category: 'AI/ML',
      instructor: 'Mohirdev Guru',
      rating: 4.9,
      students: 5200,
      duration: '72 soat',
      price: 1500000,
      originalPrice: 2500000,
      level: 'Murakkab',
      icon: Cpu,
      features: ['Python & PyTorch', 'Machine Learning', 'Katta ma’lumotlar']
    },
    {
      id: 4,
      title: 'Raqamli Marketing va SMM',
      category: 'Marketing',
      instructor: 'Temur Adhamov',
      rating: 4.7,
      students: 9300,
      duration: '30 soat',
      price: 600000,
      originalPrice: 900000,
      level: 'Boshlang‘ich',
      icon: Globe,
      features: ['Targeting', 'SEO strategiyasi', 'Brending']
    },
    {
      id: 5,
      title: 'Biznes Analitika va Excel',
      category: 'Biznes',
      instructor: 'Akmal Paiziev',
      rating: 4.6,
      students: 4100,
      duration: '25 soat',
      price: 500000,
      originalPrice: 800000,
      level: 'Boshlang‘ich',
      icon: BarChart,
      features: ['Moliyaviy modellashtirish', 'Dashboardlar', 'Excel Pro']
    },
    {
      id: 6,
      title: 'Professional Fotografiya sirlari',
      category: 'Fotografiya',
      instructor: 'Rustam Sharipov',
      rating: 4.8,
      students: 3200,
      duration: '35 soat',
      price: 750000,
      originalPrice: 1100000,
      level: 'O‘rta',
      icon: Camera,
      features: ['Kompozitsiya', 'Lightroom/PS', 'Studiya ishi']
    }
  ];

  const filteredCourses = allCourses.filter(course => {
    const categoryMatch = selectedCategory === 'Barchasi' || course.category === selectedCategory;
    const searchMatch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Boshlang‘ich': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'O‘rta': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Murakkab': return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
      default: return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200">
      {/* Glassmorphism Header */}
      <div className="bg-black/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="outline" size="sm" className="rounded-full border-white/10 hover:bg-white/5">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Bosh sahifa
                </Button>
              </Link>
              <h1 className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent italic">
                AI HERITAGE KURSLARI
              </h1>
            </div>
            <Badge variant="outline" className="px-6 py-2 border-primary/30 bg-primary/5 text-primary-foreground text-sm rounded-full">
              {filteredCourses.length} ta kurs topildi
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <AnimatedSection animation="fade-in-up">
          <div className="mb-12 space-y-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Kurs nomi yoki instruktor bo'yicha qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 h-14 bg-white/5 border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all text-lg"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    selectedCategory === category 
                      ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                      : 'bg-white/5 border-white/10 hover:border-blue-400/50 text-slate-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCourses.map((course, index) => (
            <AnimatedSection key={course.id} animation="fade-in-up" delay={index * 100}>
              <Card className="group relative h-full bg-gradient-to-b from-white/10 to-white/5 border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-500">
                <CardHeader className="relative pb-0">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 rounded-2xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                      <course.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <Badge className={`${getLevelColor(course.level)} border uppercase text-[10px] tracking-widest`}>
                      {course.level}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold leading-tight group-hover:text-blue-400 transition-colors min-h-[56px]">
                    {course.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mt-2 text-slate-400">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-sm font-medium">{course.instructor}</span>
                  </div>
                </CardHeader>

                <CardContent className="mt-6 space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-black/20 text-xs">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span className="font-bold">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-blue-400" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-400">
                      <Clock className="w-3 h-3" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {course.features.map((feature, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-300 italic">
                        #{feature}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-4 border-t border-white/5 mt-auto pt-6 bg-white/5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-blue-400">
                      {course.price.toLocaleString()} söm
                    </span>
                    <span className="text-sm text-slate-500 line-through">
                      {course.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12 font-bold shadow-lg shadow-blue-900/20 transition-transform active:scale-95">
                    Kursga yozilish
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Not Found */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
            <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-2">Hech narsa topilmadi</h3>
            <p className="text-slate-400 text-lg">Boshqa kalit so'z bilan qidirib ko'ring</p>
          </div>
        )}
      </div>
    </div>
  );
}