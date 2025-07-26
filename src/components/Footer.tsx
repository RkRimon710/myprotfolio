import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-primary mb-2">Rimon Khan</h3>
            <p className="text-muted-foreground">
              Shopify Developer | Theme Customization | Performance Optimization
            </p>
          </div>
          
          <div className="flex justify-center items-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} Rimon Khan. Made with</span>
            <Heart className="w-4 h-4 text-primary fill-current" />
            <span>for amazing Shopify stores.</span>
          </div>
          
          <div className="mt-4 text-xs text-muted-foreground">
            <p>Ready to elevate your eCommerce business? Let's connect!</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="tel:+8801754489107" className="hover:text-primary transition-colors">
                +8801754489107
              </a>
              <span>•</span>
              <a href="mailto:remonkhan420@gmail.com" className="hover:text-primary transition-colors">
                remonkhan420@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;