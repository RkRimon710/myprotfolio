import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      title: "Felicity Northeast",
      description: "Women's fashion eCommerce website built on Shopify with elegant design, curated collections, and seamless shopping experience. Features responsive product galleries and mobile-optimized checkout.",
      url: "https://felicitynortheast.com",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["Women's Fashion", "eCommerce", "Shopify", "Mobile Responsive"],
      features: ["Fashion Collections", "Product Galleries", "Mobile Shopping", "Checkout Optimization"]
    },
    {
      title: "Interior Mojo LLC",
      description: "House floor warranty service website featuring comprehensive warranty management, customer portal, and streamlined claims processing. Built with user-friendly interface and automated workflow systems.",
      url: "https://interiormojollc.com",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Floor Warranty", "Service Portal", "Claims Management", "Customer Support"],
      features: ["Warranty Management", "Claims Processing", "Customer Portal", "Automated Workflows"]
    }
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing some of my recent Shopify development work and client success stories
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => window.open(project.url, '_blank')}
                    className="text-primary hover:text-primary-dark"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-medium text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group/btn"
                  onClick={() => window.open(project.url, '_blank')}
                >
                  View Live Site
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <Button variant="outline-hero" onClick={() => {
            const element = document.getElementById('contact');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}>
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;