
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kishankada754@gmail.com",
      href: "mailto:kishankada754@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6305890115",
      href: "tel:+916305890115"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Kishank21",
      href: "https://github.com/Kishank21"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/kishan-k-9770a9293",
      href: "https://linkedin.com/in/kishan-k-9770a9293"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-purple-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="bg-slate-700/50 border-slate-600 hover:border-purple-500/50 transition-all duration-300 group">
              <CardHeader className="text-center pb-2">
                <contact.icon className="w-8 h-8 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white text-lg">{contact.label}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <a
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm break-all"
                >
                  {contact.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 rounded-lg border border-purple-500/30 max-w-2xl mx-auto">
            <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Location</h3>
            <p className="text-gray-300 mb-4">India • Available for Remote Work</p>
            
          </div>
        </div>
        
        <footer className="mt-20 pt-8 border-t border-slate-700 text-center">
          <p className="text-gray-400">
            © 2024 Kishan Kada. Built with passion and modern web technologies.
          </p>
        </footer>
      </div>
    </section>
  );
};
