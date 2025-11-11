import { Code2, Database, Cloud, Smartphone, Globe, Settings } from "lucide-react";
import { Card } from "./ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion"],
      description: "Creating responsive, interactive user interfaces with modern frameworks"
    },
    {
      icon: Database,
      title: "Backend Development", 
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
      description: "Building scalable server-side applications and robust databases"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Vercel"],
      description: "Deploying and maintaining applications in cloud environments"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android", "Progressive Web Apps"],
      description: "Cross-platform mobile applications with native performance"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "WebGL", "WebRTC", "PWA"],
      description: "Modern web standards and cutting-edge browser technologies"
    },
    {
      icon: Settings,
      title: "Tools & Workflow",
      skills: ["Git", "VS Code", "Figma", "Jest", "Webpack", "Vite"],
      description: "Development tools and workflows for efficient collaboration"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 opacity-0 animate-fade-in-up">
            <h2 className="gradient-text mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience and continuous learning
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={category.title}
                  className={`p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up delay-${(index + 1) * 100}`}
                >
                  <div className="space-y-4">
                    {/* Icon & Title */}
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-accent rounded-lg">
                        <Icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {category.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>

                    {/* Skills List */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded-md hover:bg-accent-light hover:text-accent transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center opacity-0 animate-fade-in-up delay-700">
            <Card className="p-8 bg-gradient-subtle border-none max-w-3xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Always Learning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                  tools, and methodologies to stay at the forefront of web development. Currently 
                  diving deep into AI integration, Web3 technologies, and advanced performance optimization.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;