import { MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const techStack = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "📜" },
  { name: "TypeScript", icon: "📘" },
  { name: "ReactJS", icon: "⚛️" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Framer Motion", icon: "🎬" },
  { name: "Redux Toolkit", icon: "🔄" },
  { name: "NodeJS", icon: "🟢" },
  { name: "ExpressJS", icon: "🚂" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Socket.IO", icon: "🔌" },
  { name: "Git", icon: "📂" },
  { name: "GitHub", icon: "🐙" },
  { name: "Vercel", icon: "▲" },
  { name: "Postman", icon: "📮" },
  { name: "Docker", icon: "🐳" },
  { name: "Jenkins", icon: "🔧" },
  { name: "C++", icon: "⚙️" },
  { name: "Figma", icon: "🎨" },
];

const education = {
  school: "COMSATS University Islamabad (CUI)",
  degree: "Bachelor of Computer Science",
  year: "2022 - 2026",
};

const experience = {
  title: "Academic / Independent Projects",
  role: "Full-Stack Developer",
  period: "July 2024 - Present",
  type: "Self-driven",
  points: [
    "Built multiple full-stack applications using React.js, Node.js, and MongoDB",
    "Practiced real-world scenarios like authentication, user dashboards, and REST API consumption",
    "Applied coursework concepts to develop responsive and scalable applications",
  ],
};

// Custom hook for scroll-triggered animations
const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation whenever element enters viewport
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

export const About = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [profileRef, profileVisible] = useScrollAnimation(0.2);
  const [educationRef, educationVisible] = useScrollAnimation(0.2);
  const [experienceRef, experienceVisible] = useScrollAnimation(0.2);
  const [techRef, techVisible] = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"
        />
        <div 
          className="absolute bottom-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float-reverse"
        />
        <div 
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse-slow"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-10 transition-all duration-700 ${
            headerVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-primary glow-text">Me</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column - Profile */}
          <div 
            ref={profileRef}
            className={`lg:w-64 shrink-0 transition-all duration-700 delay-100 ${
              profileVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="flex flex-col items-center">
              {/* Profile Image */}
              <div 
                className={`relative mb-4 group transition-all duration-700 delay-200 ${
                  profileVisible 
                    ? "opacity-100 scale-100" 
                    : "opacity-0 scale-90"
                }`}
              >
                <div 
                  className="absolute -inset-2 bg-linear-to-br from-primary/30 to-primary/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <img
                  src="/profile-photo.jpg"
                  alt="Profile"
                  className="relative w-44 h-52 object-cover rounded-lg border-2 border-white/10 group-hover:border-primary/50 transition-all duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Bio */}
              <p 
                className={`text-center text-gray-300 text-base leading-relaxed mb-3 transition-all duration-700 delay-300 ${
                  profileVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-4"
                }`}
              >
                Computer Science student and full-stack developer focused on building
                scalable, responsive web applications with modern JavaScript.
              </p>

              {/* Location */}
              <div
                className={`w-full mt-4 pt-4 border-t border-white/10 transition-all duration-700 delay-400 ${
                  profileVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="flex items-center justify-center gap-2 text-gray-300 text-base group cursor-default">
                  <MapPin className="w-4 h-4 text-primary group-hover:scale-125 transition-transform duration-300" />
                  <span className="group-hover:text-primary transition-colors duration-300">
                    Islamabad, Pakistan
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="flex-1 space-y-4">
            {/* Education */}
            <div 
              ref={educationRef}
              className={`transition-all duration-700 ${
                educationVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-xl font-bold text-primary mb-2">
                Education
              </h3>
              <div className="flex justify-between items-start p-2 rounded-lg hover:bg-white/5 transition-all duration-300">
                <div>
                  <h4 className="font-semibold text-white">{education.school}</h4>
                  <p className="text-base text-gray-300">{education.degree}</p>
                </div>
                <span className="text-base text-gray-300">{education.year}</span>
              </div>
            </div>

            {/* Experience */}
            <div 
              ref={experienceRef}
              className={`transition-all duration-700 delay-150 ${
                experienceVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-xl font-bold text-primary mb-2">
                Experience
              </h3>
              <div className="p-2 rounded-lg hover:bg-white/5 transition-all duration-300">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="font-semibold text-white">{experience.title}</h4>
                    <p className="text-base text-gray-300">{experience.role}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-base text-gray-300">{experience.period}</span>
                    <p className="text-sm text-gray-400">{experience.type}</p>
                  </div>
                </div>
                <ul className="space-y-1.5 mt-2">
                  {experience.points.map((point, idx) => (
                    <li 
                      key={idx} 
                      className={`flex items-start gap-2 text-base text-gray-300 hover:text-white transition-all duration-500 ${
                        experienceVisible 
                          ? "opacity-100 translate-x-0" 
                          : "opacity-0 -translate-x-4"
                      }`}
                      style={{ transitionDelay: experienceVisible ? `${300 + idx * 100}ms` : "0ms" }}
                    >
                      <span className="w-1 h-4 bg-primary rounded-full shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack (Full Width) */}
        <div
          ref={techRef}
          className={`mt-10 transition-all duration-700 delay-200 ${
            techVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl font-bold text-primary mb-4 text-center">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 hover:scale-110 hover:-translate-y-1 transition-all duration-300 text-base text-gray-200 cursor-default ${
                  techVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
                style={{ transitionDelay: techVisible ? `${400 + idx * 50}ms` : "0ms" }}
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float 10s ease-in-out infinite reverse;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(20px);
          }
          75% {
            transform: translateY(-25px) translateX(5px);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }
      `}</style>
    </section>
  );
};