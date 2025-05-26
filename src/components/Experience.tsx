
export const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "1Stop",
      period: "Dec 2024 – Apr 2025",
      description: "Applied supervised/unsupervised learning algorithms and neural networks to solve real-world problems.",
      type: "internship"
    },
    {
      title: "Java Full Stack Intern",
      company: "SkillDzire",
      period: "May – July 2024",
      description: "Developed full-stack applications using HTML, CSS, JavaScript, Java, and DBMS technologies.",
      type: "internship"
    },
    {
      title: "B.Tech Computer Science",
      company: "Aditya Engineering College",
      period: "2021 – 2025",
      description: "CGPA: 7.63 - Focusing on software development and machine learning concepts.",
      type: "education"
    },
    {
      title: "Intermediate (MPC)",
      company: "Sri Chaitanya Junior College",
      period: "2019 – 2021",
      description: "CGPA: 8.99 - Mathematics, Physics, Chemistry with strong analytical foundation.",
      type: "education"
    }
  ];

  const certifications = [
    "Python Programming – NxtWave",
    "Responsive Website Design – NxtWave",
    "Python Certification – HackerRank",
    "C++ Certification – HackerRank",
    "Java Certification – HackerRank"
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & <span className="text-purple-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Professional Journey</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-400"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12 pb-8">
                  <div className="absolute left-2 w-4 h-4 bg-purple-400 rounded-full"></div>
                  <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h4 className="text-lg font-bold text-white">{exp.title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'internship' 
                          ? 'bg-green-600/20 text-green-300 border border-green-500/30' 
                          : 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                      }`}>
                        {exp.type === 'internship' ? 'Internship' : 'Education'}
                      </span>
                    </div>
                    <p className="text-purple-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-700/50 p-4 rounded-lg border border-slate-600 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-4"></div>
                    <span className="text-gray-300">{cert}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30">
              <h4 className="text-lg font-bold text-white mb-2">Current Goal</h4>
              <p className="text-gray-300">
                Actively applying for Software Developer roles, particularly interested in contributing to real-world applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
