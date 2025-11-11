import { Download, Award, Coffee, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const AboutSection = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "6+" },
    { icon: Coffee, label: "Projects Delivered", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "30+" },
  ];

  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 opacity-0 animate-fade-in-up">
            <h2 className="gradient-text mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating exceptional digital experiences that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 opacity-0 animate-slide-in-left delay-200">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Building the Future, One Line of Code at a Time
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer with over 6 years of experience 
                  creating modern, scalable web applications. My journey began with a 
                  Computer Science degree and has evolved through working with startups 
                  and established companies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in React, Node.js, and cloud technologies, but I'm always 
                  eager to learn new tools and frameworks. When I'm not coding, you'll 
                  find me exploring new technologies, contributing to open source, or 
                  mentoring junior developers.
                </p>
              </div>

              {/* Skills Preview */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Core Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Node.js", "AWS", "PostgreSQL", "Docker"].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-accent-light text-accent font-medium rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Button variant="primary" size="lg" className="group">
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </Button>
            </div>

            {/* Stats */}
            <div className="space-y-6 opacity-0 animate-fade-in-up delay-400">
              <div className="grid gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={stat.label} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-accent rounded-lg">
                          <Icon className="h-6 w-6 text-accent-foreground" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                          <div className="text-muted-foreground">{stat.label}</div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Personal Touch */}
              <Card className="p-6 bg-gradient-subtle border-none">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Beyond Code</h4>
                  <p className="text-sm text-muted-foreground">
                    When I'm not coding, I enjoy hiking, photography, and experimenting 
                    with new coffee brewing methods. I believe the best solutions come 
                    from a balanced perspective.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;