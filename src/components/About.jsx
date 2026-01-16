import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>

      <div className="space-y-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-slate-400 leading-relaxed"
        >
          Passionate Software Engineering student specializing in full-stack web
          development. I build scalable applications using the{" "}
          <span className="font-medium text-teal-300">MERN stack</span>, with
          expertise in <span className="text-slate-200">React</span>,{" "}
          <span className="text-slate-200">Next.js</span>,{" "}
          <span className="text-slate-200">Node.js</span>, and{" "}
          <span className="text-slate-200">MongoDB</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-slate-400 leading-relaxed"
        >
          I focus on creating clean, maintainable code and delivering
          high-quality software solutions. Whether it's building responsive
          interfaces or designing RESTful APIs, I enjoy solving complex problems
          with modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 pt-4"
        >
          <span className="text-2xl animate-float">📧</span>
          <a
            href="mailto:ru0300usman@gmail.com"
            className="font-medium text-slate-200 hover:text-teal-300 transition-colors duration-300 relative group"
          >
            ru0300usman@gmail.com
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-300 group-hover:w-full transition-all duration-300"></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
