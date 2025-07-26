import { Palette, Zap, Search, Mail, TrendingUp, Code, PaintBucket, Smartphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Shopify Theme Customization",
      description: "Custom theme development and modifications to match your brand perfectly. Creating unique, responsive designs that convert visitors into customers.",
      features: ["Custom Liquid Development", "Responsive Design", "Brand Integration", "User Experience Optimization"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Speed Optimization",
      description: "Comprehensive performance optimization to ensure your store loads lightning-fast. Improved Core Web Vitals and enhanced user experience.",
      features: ["Core Web Vitals Optimization", "Image Compression", "Code Minification", "Caching Implementation"]
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO for Shopify Stores",
      description: "Complete SEO optimization to improve your store's visibility in search engines. On-page and technical SEO implementation.",
      features: ["Technical SEO Audit", "Meta Tags Optimization", "Schema Markup", "Site Structure Improvement"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Klaviyo Email Marketing",
      description: "Professional Klaviyo integration and email marketing setup. Automated flows and campaigns to boost customer retention.",
      features: ["Email Flow Setup", "Segmentation Strategy", "Template Design", "Analytics Integration"]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Conversion Rate Optimization",
      description: "Data-driven CRO strategies to increase your store's conversion rates. A/B testing and user behavior analysis.",
      features: ["A/B Testing Setup", "User Journey Analysis", "Checkout Optimization", "Trust Signal Implementation"]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Development",
      description: "Full-stack development using Liquid, JSON, HTML, CSS, and JavaScript. Building custom features and integrations.",
      features: ["Liquid Programming", "JavaScript Development", "API Integrations", "Custom App Development"]
    },
    {
      icon: <PaintBucket className="w-6 h-6" />,
      title: "Graphic Design",
      description: "Professional graphic design services using Photoshop and Canva. Creating stunning visuals for your brand.",
      features: ["Logo Design", "Banner Creation", "Product Photography", "Brand Guidelines"]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Optimization",
      description: "Ensuring your Shopify store performs flawlessly on all mobile devices. Mobile-first design approach.",
      features: ["Mobile-First Design", "Touch Optimization", "Mobile Speed Enhancement", "Progressive Web App Features"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Shopify development services to help your eCommerce business succeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-muted-foreground flex items-center">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-card rounded-2xl p-8 shadow-card max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Take Your Shopify Store to the Next Level?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your project and see how I can help you achieve your eCommerce goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-primary font-medium">
                📞 +8801754489107
              </div>
              <div className="text-primary font-medium">
                ✉️ remonkhan420@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;