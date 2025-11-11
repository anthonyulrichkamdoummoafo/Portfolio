import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/90 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 opacity-0 animate-fade-in-up">
          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-lg text-primary-foreground/80 font-medium opacity-0 animate-fade-in delay-200">
              Hello, I'm
            </p>
            <h1 className="text-white opacity-0 animate-fade-in-up delay-300">
              Kamdoum Moafo Anthony Ulrich
            </h1>
            <h2 className="text-2xl md:text-3xl text-accent font-semibold opacity-0 animate-fade-in-up delay-400">
              Senior Full-Stack Developer
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up delay-500">
            I craft beautiful, functional, and user-centered digital experiences. 
            With 6+ years of experience in modern web technologies, I turn ideas into reality.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up delay-600">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="group"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline-light" 
              size="lg"
              onClick={() => scrollToSection("#contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 opacity-0 animate-fade-in delay-700">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-accent transition-colors duration-200 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-accent transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:alex@example.com"
              className="text-primary-foreground/70 hover:text-accent transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in delay-1000">
          <button 
            onClick={() => scrollToSection("#about")}
            className="flex flex-col items-center text-primary-foreground/60 hover:text-accent transition-colors group"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-5 w-5 animate-bounce group-hover:translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;