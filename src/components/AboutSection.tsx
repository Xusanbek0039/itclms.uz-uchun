import { Target, Globe, Heart, Users, BookOpen, Trophy, Youtube, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from './AnimatedSection';

export function AboutSection() {
  const values = [
    {
      icon: Trophy,
      title: '5 Yillik Tajriba',
      description: "IT Creative Academy 5 yildan buyon O'zbekistonda sifatli IT ta'limini rivojlantirib kelmoqda.",
      color: 'text-primary'
    },
    {
      icon: Youtube,
      title: 'YouTube Hamjamiyati',
      description: "Husan Suyunov va IT Creative kanallari orqali minglab bepul darslar va bilimlar ulashamiz.",
      color: 'text-red-500' // YouTube rangi
    },
    {
      icon: Award,
      title: 'Sifatli Ta\'lim',
      description: "Biz shunchaki o'rgatmaymiz, biz bozor talabiga mos yuqori malakali kadrlar tayyorlaymiz.",
      color: 'text-warning'
    },
    {
      icon: Users,
      title: 'Katta Hamjamiyat',
      description: "O'quvchilarimiz va kuzatuvchilarimizdan iborat kuchli IT hamjamiyatini shakllantirdik.",
      color: 'text-primary'
    }
  ];

  const stats = [
    { icon: BookOpen, value: '500+', label: 'Video Darsliklar' },
    { icon: Users, value: '100K+', label: 'Obunachilar' },
    { icon: Trophy, value: '5 Yil', label: 'Bozorda' },
    { icon: Globe, value: '10K+', label: 'Muvaffaqiyatli Bitiruvchilar' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              IT Creative Academy haqida
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              5 Yillik Tajriba va
              <span className="gradient-text"> Zamonaviy Bilimlar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              2020-yildan buyon Husan Suyunov asos solgan IT Creative Academy minglab yoshlarga zamonaviy kasblarni egallashda yordam berib kelmoqda. Bizning maqsadimiz — sifatli IT ta'limini har bir inson uchun ochiq va tushunarli qilishdir.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <AnimatedSection animation="fade-in-right" delay={200}>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Bizning Missiyamiz</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Biz nafaqat kurslar tashkil etamiz, balki O'zbekiston IT ekotizimini rivojlantirishga hissa qo'shamiz. 
                Husan Suyunov boshchiligidagi jamoamiz YouTube orqali o'zbek tilidagi bepul va professional darslarni taqdim etishda kashfiyotchilardan hisoblanadi.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                IT Creative va Husan Suyunov YouTube kanallarimiz orqali dasturlash, dizayn va texnologiyalar olamidagi eng so'nggi bilimlar muntazam ulashib boriladi.
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