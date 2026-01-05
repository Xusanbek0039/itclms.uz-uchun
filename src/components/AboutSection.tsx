import { Trophy, Youtube, Award, Users, BookOpen, Globe, Star, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from './AnimatedSection';

export function AboutSection() {
  const values = [
    {
      icon: Trophy,
      title: '5 Yillik Tajriba',
      description: "2019-yildan beri IT Creative Academy O'zbekistonda sifatli IT ta'limi va dasturlash kurslarini rivojlantirib kelmoqda.",
      color: 'text-primary'
    },
    {
      icon: Youtube,
      title: 'Husan Suyunov YouTube',
      description: "IT Creative va Husan Suyunov YouTube kanallari orqali 100 mingdan ortiq yoshlarga bepul IT darslari taqdim etilmoqda.",
      color: 'text-red-500'
    },
    {
      icon: Star,
      title: 'Zomin IT Park Markazi',
      description: "Zomin tumanida IT Park bilan hamkorlikda zamonaviy IT markazi va sifatli ta'lim tizimini yo'lga qo'ydik.",
      color: 'text-warning'
    },
    {
      icon: Users,
      title: 'Katta IT Hamjamiyati',
      description: "O'zbekistonning barcha viloyatlaridan 20,000 dan ortiq o'quvchilar va dasturchilar hamjamiyati.",
      color: 'text-primary'
    }
  ];

  const stats = [
    { icon: BookOpen, value: '500+', label: 'Video Darsliklar' },
    { icon: Users, value: '100K+', label: 'YouTube Obunachilar' },
    { icon: Trophy, value: '5 Yil', label: 'Bozorda' },
    { icon: MapPin, value: 'Zomin', label: 'IT Park Filiali' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              IT Creative Academy - Husan Suyunov
            </Badge>
            {/* H2 tegi SEO uchun eng muhimi - bu yerda asosiy kalit so'zlar bor */}
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              IT Park Zomin va 
              <span className="gradient-text"> IT Creative Academy</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              2019-yilda **Husan Suyunov** tomonidan asos solingan **IT Creative Academy** bugungi kunda 
              O'zbekistondagi eng nufuzli IT maktablaridan biridir. Biz **IT Park Zomin** filialida va online platformamizda 
              eng zamonaviy dasturlash, dizayn va raqamli texnologiyalarni o'rgatamiz.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <AnimatedSection animation="fade-in-right" delay={200}>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 italic text-primary">Missiyamiz va Maqsadimiz</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Bizning asosiy maqsadimiz — O'zbekistonning chekka hududlarida ham, xususan **Zomin tumanida** yuqori sifatli IT ta'limini ochiq qilishdir. **Husan Suyunov** boshchiligidagi jamoamiz 
                professional IT mutaxassislarini tayyorlash orqali mamlakatimiz raqamli iqtisodiyotiga hissa qo'shmoqda.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                **IT Creative YouTube** kanali orqali biz o'zbek tilidagi bepul va professional darslarni 
                taqdim etishda kashfiyotchimiz. Biz shunchaki bilim bermaymiz, biz hayotlarni o'zgartiramiz.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
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
                    className="hover-card glass border border-primary/5 bg-card/50 backdrop-blur-sm group hover:border-primary/20 transition-all duration-300"
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
              
              {/* Dekorativ elementlar */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-1000" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}