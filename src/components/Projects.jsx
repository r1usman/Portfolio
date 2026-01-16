import { HiArrowRight, HiStar } from "react-icons/hi";
import { motion } from "framer-motion";

const projects = [
  {
    title: "The Wild Oasis Customer Website",
    url: "https://the-wild-oasis-usman.vercel.app",
    featured: false,
    description:
      "A booking platform where users can browse luxury cabins and reserve their stays. SEO and fast performance. The site includes secure social authentication, dynamic availability filtering, and a personalized guest profile area to manage reservations.",
    image:
      "https://res.cloudinary.com/dkylei5d0/image/upload/v1768566982/Screenshot_94_nxlawi.png",
    technologies: [
      "Next.js",
      "React Server Components",
      "Server Actions",
      "Tailwind CSS",
      "NextAuth.js",
      "Supabase",
    ],
  },
  {
    title: "The Wild Oasis Admin",
    url: "https://the-wild-oasis-omega-one.vercel.app",
    featured: true,
    description:
      "A comprehensive internal management dashboard designed for hotel employees to manage the day-to-day operations of the resort. It features a data-rich dashboard with interactive charts, real-time booking management, professional state management, and dark mode implementation",
    image:
      "https://res.cloudinary.com/dkylei5d0/image/upload/v1768567480/Screenshot_100_wskpnh.png",
    technologies: [
      "React",
      "React Query",
      "Styled Components",
      "React Hook Form",
      "React Router",
      "Supabase",
      "Recharts",
      "Vite",
    ],
  },
  {
    title: "Real Estate App with React and MongoDB",
    url: "https://vision-estate-esgw.onrender.com/",
    featured: true,
    description:
      "Real Estate Marketplace that enables users to list, browse, and manage properties with advanced search filters and a responsive UI. It features a secure JWT and Google OAuth authentication system and utilizes Redux Toolkit for professional-grade state management.",
    image:
      "https://res.cloudinary.com/dkylei5d0/image/upload/v1768564836/Screenshot_97_dhg4si.png",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "JWT",
      "Google OAuth",
      "Firebase",
      "Render",
    ],
  },

  {
    title: "Omnifood",
    url: "https://omnifood-usman1.netlify.app/",
    featured: false,
    description:
      "Omnifood is a premium AI-powered food subscription service that delivers personalized, healthy meals to your door 365 days a year, specifically tailored to your dietary needs and tastes.",
    image:
      "https://res.cloudinary.com/dkylei5d0/image/upload/v1768564728/Screenshot_99_trxhp2.png",
    technologies: ["Gatsby", "Styled Components", "Netlify"],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>

      <div>
        <ul className="group/list space-y-16">
          {projects.map((project, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer noopener"
                className="block"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-teal-500/30 transition-all duration-500 cursor-pointer"
                >
                  {/* Large Prominent Image */}
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="relative aspect-video overflow-hidden"
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-teal-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                    </motion.div>

                    {/* View Live indicator */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500 text-slate-900 font-semibold text-sm shadow-lg shadow-teal-500/30">
                        View Live
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 lg:p-8">
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-100 group-hover:text-teal-300 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    {project.technologies.length > 0 && (
                      <ul
                        className="mt-5 flex flex-wrap gap-2"
                        aria-label="Technologies used"
                      >
                        {project.technologies.map((tech, techIndex) => (
                          <motion.li
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.1 + techIndex * 0.03,
                            }}
                            viewport={{ once: true }}
                          >
                            <span className="skill-tag">{tech}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href="/archive"
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base transition-colors duration-300"
          >
            <span>
              View Full Project Archive
              <span className="inline-block">
                <HiArrowRight className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform duration-300 group-hover/link:translate-x-2 group-focus-visible/link:translate-x-2 motion-reduce:transition-none" />
              </span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
