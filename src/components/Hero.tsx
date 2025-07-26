import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
const rimonProfile = '/lovable-uploads/428d02fa-db1c-4cbf-b2f9-8c6c3751242d.png';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-hero">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <p className="text-primary font-medium mb-2 tracking-wide">
                SHOPIFY DEVELOPER
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                Hi, I'm{' '}
                <span className="text-primary">Rimon Khan</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Crafting High-Performance Shopify Stores
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Specializing in theme customization, speed optimization, SEO, and Klaviyo integrations. 
              I help eCommerce brands thrive online with cutting-edge Shopify solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                className="group"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline-hero" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-elegant">
                <img 
                  src={rimonProfile} 
                  alt="Rimon Khan - Shopify Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;