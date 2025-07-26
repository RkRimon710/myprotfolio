import { GraduationCap, Award, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      description: "Computer Science & Engineering from Dhaka University"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expertise",
      description: "Shopify theme development and store optimization"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Platforms",
      description: "Active on Fiverr and Upwork with excellent ratings"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Focused on speed optimization and user experience"
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a mission to create exceptional Shopify experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Hi there! I'm Rimon Khan
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a Shopify developer specializing in theme customization, speed optimization, SEO, 
                and Klaviyo integrations. With a Computer Science background from Dhaka University and 
                extensive experience working on Fiverr and Upwork, I help eCommerce brands thrive online.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My passion lies in creating high-performing, conversion-optimized Shopify stores that 
                not only look great but also drive real business results. I believe in the power of 
                clean code, thoughtful design, and data-driven optimization.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Education</h4>
              <div className="bg-card p-4 rounded-lg border-l-4 border-l-primary">
                <h5 className="font-medium text-foreground">Computer Science & Engineering (CSC)</h5>
                <p className="text-muted-foreground">Dhaka University</p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;