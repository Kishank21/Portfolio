
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="w-48 h-48 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-6xl font-bold text-white">
              KK
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-50 blur-xl animate-pulse"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Kishan <span className="text-purple-400">Kada</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Aspiring Junior Software Developer specializing in Full-Stack Development & Machine Learning
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg">
              View Projects
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Kishank21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/kishan-k-9770a9293"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:kishankada754@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
