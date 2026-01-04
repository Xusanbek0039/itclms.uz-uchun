import { useState } from 'react';
import { Check, Crown, Zap, Gift, CreditCard } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { AnimatedSection } from './AnimatedSection';

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      id: 1,
      name: 'Starter',
      description: 'Perfect for beginners exploring new skills',
      icon: Gift,
      monthly: 0,
      yearly: 0,
      color: 'accent',
      popular: false,
      features: [
        '3 Free courses',
        'Basic video quality',
        'Community access',
        'Course certificates',
        'Mobile app access',
        'Basic support'
      ]
    },
    {
      id: 2,
      name: 'Pro',
      description: 'Most popular choice for serious learners',
      icon: Zap,
      monthly: 29,
      yearly: 290, // 2 months free
      color: 'primary',
      popular: true,
      features: [
        'Unlimited courses',
        'HD video quality',
        'Priority community access',
        'Verified certificates',
        'Mobile + desktop apps',
        'Priority support',
        'Downloadable resources',
        'Progress tracking',
        'Learning paths'
      ]
    },
    {
      id: 3,
      name: 'Enterprise',
      description: 'For teams and organizations',
      icon: Crown,
      monthly: 99,
      yearly: 990, // 2 months free
      color: 'warning',
      popular: false,
      features: [
        'Everything in Pro',
        'Team management',
        'Advanced analytics',
        'Custom learning paths',
        'Dedicated support',
        'SSO integration',
        'API access',
        'Custom branding',
        'Bulk certificates',
        'LMS integration'
      ]
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.monthly === 0) return 'Free';
    const price = isYearly ? plan.yearly / 12 : plan.monthly;
    return `$${price.toFixed(0)}`;
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (plan.monthly === 0) return '';
    const yearlyMonthly = plan.yearly / 12;
    const savings = ((plan.monthly - yearlyMonthly) / plan.monthly * 100).toFixed(0);
    return `Save ${savings}%`;
  };

  const getColorClasses = (color: string, popular: boolean) => {
    const baseClasses = popular ? 'scale-105 shadow-glow border-2' : '';
    
    switch (color) {
      case 'primary':
        return `${baseClasses} border-primary/30 bg-primary/5`;
      case 'accent':
        return `${baseClasses} border-accent/30 bg-accent/5`;
      case 'warning':
        return `${baseClasses} border-warning/30 bg-warning/5`;
      default:
        return baseClasses;
    }
  };

  const getButtonClasses = (color: string, popular: boolean) => {
    if (popular) {
      return 'bg-gradient-primary hover:scale-105 shadow-glow';
    }
    
    switch (color) {
      case 'accent':
        return 'border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground';
      case 'warning':
        return 'border-2 border-warning text-warning hover:bg-warning hover:text-warning-foreground';
      default:
        return 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground';
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-primary/5 via-background to-warning/5">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 bg-warning/10 text-warning border-warning/20">
              <CreditCard className="w-4 h-4 mr-2" />
              Pricing Plans
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Choose Your
              <span className="gradient-text"> Learning Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Start for free or unlock premium features with our flexible pricing plans. 
              All plans include lifetime access to purchased courses.
            </p>

            {/* Billing toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-lg font-medium ${!isYearly ? 'text-primary' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-primary"
              />
              <span className={`text-lg font-medium ${isYearly ? 'text-primary' : 'text-muted-foreground'}`}>
                Yearly
              </span>
              {isYearly && (
                <Badge className="bg-accent/10 text-accent border-accent/20 animate-pulse">
                  Save 17%!
                </Badge>
              )}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection 
              key={plan.id} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <Card className={`hover-card h-full relative ${getColorClasses(plan.color, plan.popular)}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white px-6 py-2 text-sm font-semibold shadow-lg">
                      Most Popular 🔥
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br from-${plan.color} to-${plan.color}/60`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-end justify-center gap-2">
                      <span className="text-4xl md:text-5xl font-bold text-primary">
                        {getPrice(plan)}
                      </span>
                      {plan.monthly > 0 && (
                        <span className="text-muted-foreground text-lg mb-2">
                          /{isYearly ? 'mo' : 'month'}
                        </span>
                      )}
                    </div>
                    
                    {plan.monthly > 0 && isYearly && (
                      <div className="text-sm text-accent font-medium">
                        {getSavings(plan)}
                      </div>
                    )}
                    
                    {plan.monthly > 0 && isYearly && (
                      <div className="text-xs text-muted-foreground">
                        Billed annually (${plan.yearly})
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pb-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-${plan.color}/20 flex items-center justify-center`}>
                          <Check className={`w-3 h-3 text-${plan.color}`} />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button 
                    className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${getButtonClasses(plan.color, plan.popular)}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.monthly === 0 ? (
                      <>
                        <Gift className="w-5 h-5 mr-2" />
                        Start Free
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-5 h-5 mr-2" />
                        Get Started
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in-up" delay={400}>
          <div className="text-center mt-16">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">🎓 Student Discount Available</h3>
              <p className="text-muted-foreground mb-6">
                Students get 50% off all paid plans. Verify your student status to unlock exclusive pricing.
              </p>
              <Button variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Verify Student Status
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={600}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              All plans include 30-day money-back guarantee • No setup fees • Cancel anytime
            </p>
            <div className="flex justify-center gap-8 text-sm text-muted-foreground">
              <span>✓ Secure Payment</span>
              <span>✓ Instant Access</span>
              <span>✓ 24/7 Support</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}