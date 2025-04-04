
import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl: string;
  repoUrl: string;
  category: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce store owners with sales analytics, inventory management, and customer insights.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    imageUrl: "https://placehold.co/600x400/0A192F/64FFDA?text=E-Commerce+Dashboard",
    demoUrl: "#",
    repoUrl: "#",
    category: "web"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A full-featured task management application with drag-and-drop capabilities, user authentication, and real-time updates.",
    tags: ["Vue.js", "Express", "MongoDB", "Socket.io"],
    imageUrl: "https://placehold.co/600x400/0A192F/64FFDA?text=Task+Management+App",
    demoUrl: "#",
    repoUrl: "#",
    category: "app"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with a clean, modern design.",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    imageUrl: "https://placehold.co/600x400/0A192F/64FFDA?text=Portfolio+Website",
    demoUrl: "#",
    repoUrl: "#",
    category: "web"
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "A weather forecast application providing real-time weather data and 7-day forecasts for locations worldwide.",
    tags: ["React Native", "Weather API", "Redux", "Styled Components"],
    imageUrl: "https://placehold.co/600x400/0A192F/64FFDA?text=Weather+App",
    demoUrl: "#",
    repoUrl: "#",
    category: "app"
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const categories = [
    { id: "all", name: "All" },
    { id: "web", name: "Web" },
    { id: "app", name: "Apps" },
  ];
  
  const filteredProjects = activeCategory === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 section-container">
      <h2 className="heading-lg mb-10">
        <span className="text-primary">#</span> Projects
      </h2>
      
      <div className="flex justify-center mb-10">
        <div className="flex space-x-2 p-1 bg-accent/40 rounded-lg">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-md transition-all",
                activeCategory === category.id 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-accent"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card group">
            <div className="relative overflow-hidden h-48 sm:h-64">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground p-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
                {project.repoUrl && (
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground p-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform"
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                {project.title}
                <ArrowUpRight size={16} className="ml-2 text-primary" />
              </h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-xs bg-accent px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          See more projects on GitHub <Github size={16} />
        </a>
      </div>
    </section>
  );
};

export default Projects;
