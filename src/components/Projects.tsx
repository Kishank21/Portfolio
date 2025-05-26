
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Movie Recommendation System",
      description: "AI-driven recommendation engine using collaborative and content-based filtering algorithms to suggest personalized movie recommendations.",
      technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
      githubUrl: "https://github.com/Kishank21/Movie-Recommendation-System",
      demoUrl: "#",
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "Classic tic-tac-toe game implemented with a smooth and intuitive user interface using modern web technologies.",
      technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
      githubUrl: "https://github.com/Kishank21/Tic-Tac-Toe",
      demoUrl: "#",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-700/50 border-slate-600 hover:border-purple-500/50 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  
          

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
