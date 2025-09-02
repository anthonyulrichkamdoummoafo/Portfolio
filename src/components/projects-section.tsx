import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include real-time inventory management, payment processing, and advanced analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tech: ["Vue.js", "D3.js", "Weather API", "Tailwind"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media metrics with real-time data visualization and reporting features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["React", "Chart.js", "Python", "FastAPI"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 opacity-0 animate-fade-in-up">
            <h2 className="gradient-text mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating expertise across various technologies and domains
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-12 mb-16">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className={`overflow-hidden hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in-up delay-${(index + 1) * 200}`}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/20 hover:bg-primary/10 transition-colors duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-accent-light text-accent font-medium rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Project Links */}
                      <div className="flex space-x-4 pt-4">
                        <Button variant="primary" size="sm" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center text-foreground opacity-0 animate-fade-in-up delay-600">
              More Projects
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => (
                <Card 
                  key={project.title}
                  className={`overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up delay-${700 + (index * 100)}`}
                >
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/20" />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h4 className="text-xl font-semibold text-foreground">{project.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded-md">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <div className="flex space-x-2">
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent/80 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent/80 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </div>
                      <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80">
                        Learn More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
