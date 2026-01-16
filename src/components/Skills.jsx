import { motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "C++", "Java"],
      icon: "💻",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
      icon: "🎨",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL"],
      icon: "⚙️",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Supabase"],
      icon: "🗄️",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Cloud & Tools",
      skills: ["AWS S3", "Docker", "Postman", "CI/CD", "Vercel"],
      icon: "☁️",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Libraries",
      skills: ["React Query", "Mongoose", "Redux", "Redis", "RabbitMQ"],
      icon: "📚",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Technical Skills"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Skills
        </h2>
      </div>

      <div className="space-y-8 group/list">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gradient-to-r lg:group-hover:from-slate-800/50 lg:group-hover:to-slate-800/30 lg:group-hover:shadow-2xl lg:group-hover:shadow-teal-500/10"></div>

            <div className="z-10 sm:col-span-2">
              <div className="flex items-center gap-3">
                <motion.span
                  className="text-3xl"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {category.icon}
                </motion.span>
                <h3
                  className={`font-bold text-sm uppercase tracking-wide bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                >
                  {category.title}
                </h3>
              </div>
            </div>

            <div className="z-10 sm:col-span-6">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <a
          className="inline-flex items-center font-medium leading-tight text-slate-200 group relative"
          aria-label="View GitHub Profile"
          href="https://github.com/r1usman"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="relative">
            <span className="border-b border-transparent pb-px transition-all duration-300 group-hover:border-teal-300 motion-reduce:transition-none">
              View My GitHub
            </span>
            <span className="whitespace-nowrap">
              <span className="border-b border-transparent pb-px transition-all duration-300 group-hover:border-teal-300 motion-reduce:transition-none">
                {" "}
                Profile
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none text-teal-300"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </span>
        </a>
      </motion.div>
    </section>
  );
}

export default Skills;
