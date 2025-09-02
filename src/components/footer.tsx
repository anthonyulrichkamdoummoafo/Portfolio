import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-primary-foreground/80">
                © {currentYear} Alex Thompson. All rights reserved.
              </p>
            </div>

            {/* Made with love */}
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>and lots of coffee</span>
            </div>

            {/* Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-primary-foreground/80 hover:text-accent transition-colors font-medium"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;