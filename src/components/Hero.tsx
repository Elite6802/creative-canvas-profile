
import React, { useEffect, useState } from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
        <div className="flex flex-col justify-center">
          <p 
            className={cn(
              "text-primary font-medium mb-4 opacity-0", 
              isLoaded && "animate-fade-in"
            )}
            style={{ animationDelay: "200ms" }}
          >
            Hi there, I'm
          </p>
          <h1 
            className={cn(
              "heading-xl mb-4 opacity-0", 
              isLoaded && "animate-fade-in"
            )}
            style={{ animationDelay: "400ms" }}
          >
            <span className="text-foreground block">Your Name</span>
            <span className="text-secondary block mt-2">Web Developer</span>
          </h1>
          <p 
            className={cn(
              "text-muted-foreground text-lg mb-8 max-w-lg opacity-0", 
              isLoaded && "animate-fade-in"
            )}
            style={{ animationDelay: "600ms" }}
          >
            I build exceptional and accessible digital experiences for the web.
            Specializing in creating applications with modern technologies.
          </p>
          <div 
            className={cn(
              "flex flex-wrap gap-4 opacity-0", 
              isLoaded && "animate-fade-in"
            )}
            style={{ animationDelay: "800ms" }}
          >
            <a href="#projects" className="button-primary">
              View Projects
            </a>
            <a href="#contact" className="border border-primary text-primary px-5 py-2 rounded-md hover:bg-primary/10 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
        <div className={cn(
          "hidden lg:flex items-center justify-center opacity-0", 
          isLoaded && "animate-fade-in"
        )}
        style={{ animationDelay: "1000ms" }}>
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-background flex items-center justify-center overflow-hidden">
              {/* Replace with your profile image */}
              <div className="bg-muted text-6xl font-bold flex items-center justify-center w-full h-full">
                YN
              </div>
            </div>
          </div>
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary hover:text-primary/80 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDownCircle size={32} />
      </a>
    </section>
  );
};

export default Hero;
