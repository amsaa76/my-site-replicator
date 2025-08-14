import { Card } from "@/components/ui/card";
import { Shield, Coins, Users, Zap, Globe, Wallet } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "أمان متقدم",
      description: "حماية محفظتك بأحدث تقنيات الأمان في البلوك تشين"
    },
    {
      icon: Coins,
      title: "تداول سريع",
      description: "معاملات فائقة السرعة على شبكة Solana بأقل الرسوم"
    },
    {
      icon: Users,
      title: "مجتمع نشط",
      description: "انضم لمجتمع المطورين والمستثمرين المتحمسين"
    },
    {
      icon: Zap,
      title: "تقنية متطورة",
      description: "استفد من أحدث تقنيات Web3 و DeFi"
    },
    {
      icon: Globe,
      title: "وصول عالمي",
      description: "تداول واستثمر من أي مكان في العالم"
    },
    {
      icon: Wallet,
      title: "محفظة ذكية",
      description: "إدارة سهلة وآمنة لجميع أصولك الرقمية"
    }
  ];

  return (
    <section id="features" className="container py-24">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
          ✨ المميزات
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          لماذا تختار <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Dolphin؟</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          اكتشف المميزات التي تجعل مشروع Dolphin الخيار الأمثل للاستثمار في مستقبل العملات الرقمية
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={feature.title} className="feature-card group">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
              <feature.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;