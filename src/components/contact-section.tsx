import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "anthonyulrichkamdoummoafo@gmail.com",
      href: "mailto:anthonyulrichkamdoummoafo@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+237 672 770 525",
      href: "tel:+237672770525"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Douala, Cameroon",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/anthonyulrichkamdoummoafo", label: "GitHub" },
    { icon: Linkedin, href: "www.linkedin.com/in/anthony-kamdoum-653506264", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 opacity-0 animate-fade-in-up">
            <h2 className="gradient-text mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your next project to life? Let's discuss how we can work together to create something amazing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 opacity-0 animate-slide-in-left delay-200">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  Let's Start a Conversation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in new opportunities, whether it's a 
                  full-time position, freelance project, or just a chat about 
                  technology and development. Feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <Card key={info.label} className="p-4 hover:shadow-md transition-shadow">
                      <a 
                        href={info.href}
                        className="flex items-center space-x-4 group"
                      >
                        <div className="p-2 bg-gradient-accent rounded-lg">
                          <Icon className="h-5 w-5 text-accent-foreground" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{info.label}</div>
                          <div className="font-medium text-foreground group-hover:text-accent transition-colors">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    </Card>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-neutral-100 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors group"
                        aria-label={social.label}
                      >
                        <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability Status */}
              <Card className="p-6 bg-gradient-subtle border-none">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div>
                    <div className="font-medium text-foreground">Available for Work</div>
                    <div className="text-sm text-muted-foreground">
                      Currently accepting new projects and opportunities
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="opacity-0 animate-fade-in-up delay-400">
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                        First Name
                      </label>
                      <Input 
                        id="firstName"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                        Last Name
                      </label>
                      <Input 
                        id="lastName"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <Input 
                      id="subject"
                      placeholder="Project Discussion"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea 
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" variant="primary" className="w-full group">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;