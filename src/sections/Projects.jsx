import { ArrowUpRight, Github, PlayCircle, ExternalLink } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "The Wild Oasis Admin",
    url: "https://the-wild-oasis-omega-one.vercel.app",
    liveUrl: "https://drive.google.com/file/d/1EF6ma_1rhcSaPP1CB0TPV8JwoSNK0_nX/view?usp=drive_link",
    github:"https://github.com/r1usman/the-wild-oasis",
    featured: true,
    description:
      "An internal hotel management dashboard with interactive charts, real-time booking management, and dark mode.",
    image:
      "https://res.cloudinary.com/dkylei5d0/image/upload/v1770864172/wild_oasis_web_b5xcme.jpg",
    technologies: [
      "React Query",
      "Styled Components",
      "React Hook Form",
      "Supabase",
      "Recharts",
    ],
  },
  {
    title: "The Wild Oasis Customer Website",
    url: "https://the-wild-oasis-usman.vercel.app",
      liveUrl: "https://drive.google.com/file/d/1F6tZVn0CQYnnbGCIl7wLuVlo42_7069F/view?usp=drive_link",
    github:"https://github.com/r1usman/the-wild-oasis-website",
    featured: false,
    description:
      "A cabin booking platform with social auth, dynamic availability filtering, and a personalized guest profile area.",
    image:
      "https://res.cloudinary.com/dkylei5d0/image/upload/v1768566982/Screenshot_94_nxlawi.png",
    technologies: [
      "Next.js",
      "React Server Components",
      "Server Actions",
      "NextAuth.js",
      "Supabase",
    ],
  },
  
  {
    title: "VisionEstate Real Estate App",
    url: "https://vision-estate-esgw.onrender.com/",
    featured: true,
    liveUrl:"https://drive.google.com/file/d/178z8ycucrU1DVuCl085Hb7wMmG5AtZCO/view?usp=sharing",
    github:"https://github.com/r1usman/vision-estate",
    description:
      "A real estate marketplace with advanced search filters, JWT & Google OAuth auth, and Redux-powered state management.",
    image:
      "https://res.cloudinary.com/dkylei5d0/image/upload/v1768564836/Screenshot_97_dhg4si.png",
    technologies: [
      "MongoDB",
      "Redux Toolkit",
      "JWT",
      "Google OAuth",
      "Firebase",
      "Render",
    ],
  },
  {
  title: "Chatify",
  url: "", // Placeholder based on Sevalla deployment
  liveUrl: "https://drive.google.com/file/d/1yMB1S0zEOcILdJwnYvlm6rq9LH-7mTaZ/view?usp=drive_link",
  github: "https://github.com/r1usman/Chatify-master",
  featured: true, 
  description:
    "A real-time messaging app with JWT auth, presence indicators, typing notifications, and Socket.io live updates.",
  image:
    "https://res.cloudinary.com/dkylei5d0/image/upload/v1770865424/Screenshot_8_uep1nw.png", // Placeholder based on your Cloudinary pattern
  technologies: [
 
    "Socket.io",
    "Zustand",
    "JWT",
    "Cloudinary",
    "Arcjet",
    "DaisyUI",
    "Resend",
  ],
}
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48 sm:h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/80 transition-all duration-300 shadow-lg"
                  >
                    <PlayCircle className="w-5 h-5" />
                    Video Summary
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-all duration-300 shadow-lg"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-start justify-between"
                >
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.url && (
                    <ArrowUpRight
                      className="w-5 h-5 
                    text-muted-foreground group-hover:text-primary
                     group-hover:translate-x-1 
                     group-hover:-translate-y-1 transition-all"
                    />
                  )}
                </a>
                <p className="text-gray-300 text-base font-medium leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-sm font-semibold border border-border/50 text-gray-200 hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-3 border-t border-border/30">
                  <div className="flex items-center gap-4">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-300 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Site
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-300 hover:text-primary transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <PlayCircle className="w-4 h-4" />
                    Video Summary
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton
            href="https://github.com/r1usman"
            target="_blank"
            rel="noreferrer noopener"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
