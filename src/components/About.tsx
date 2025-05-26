
export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi, I'm Kishan Kada, an enthusiastic and dedicated software developer with a strong foundation in full-stack development. I recently completed my B.Tech in Computer Science at Aditya Engineering College, I bring hands-on experience from internships and self-driven projects, along with a passion for building efficient and user-friendly software solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h3 className="text-purple-400 font-semibold mb-2">Education</h3>
                <p className="text-gray-300">B.Tech Computer Science</p>
                <p className="text-sm text-gray-400">CGPA: 7.93</p>
              </div>
              
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h3 className="text-purple-400 font-semibold mb-2">Location</h3>
                <p className="text-gray-300">India</p>
                <p className="text-sm text-gray-400">Available for Remote Work</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4">My Interests</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Java
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Python Programming
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  HTML - CSS
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  JavaScript(Basic)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  SQL
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
