import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/r1usman", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/r1usman",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/r1usman",
    label: "Twitter",
  },
];

function Header({ activeSection }) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"
        >
          <a
            href="/"
            className="gradient-text inline-block hover:scale-105 transition-transform duration-300"
          >
            Usman
          </a>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl"
        >
          <span className="relative">
            Full Stack Developer
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-blue-500"></span>
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-xs leading-normal text-slate-400"
        >
          I build scalable, high-performance web applications with the{" "}
          <span className="text-teal-300 font-medium">MERN stack</span>.
        </motion.p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <motion.ul
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 w-max"
          >
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <a
                  href={`#${item.id}`}
                  className={`group flex items-center py-3 ${
                    activeSection === item.id ? "active" : ""
                  }`}
                >
                  <span
                    className={`mr-4 h-px transition-all duration-300 ease-out group-hover:w-16 group-hover:bg-teal-300 group-focus-visible:w-16 group-focus-visible:bg-teal-300 ${
                      activeSection === item.id
                        ? "w-16 bg-teal-300 shadow-lg shadow-teal-500/50"
                        : "w-8 bg-slate-600"
                    }`}
                  />
                  <span
                    className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 group-hover:text-teal-300 group-hover:translate-x-1 group-focus-visible:text-teal-300 ${
                      activeSection === item.id
                        ? "text-teal-300"
                        : "text-slate-500"
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </div>

      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="ml-1 mt-8 flex items-center gap-5"
        aria-label="Social media"
      >
        {socialLinks.map((link, index) => (
          <motion.li
            key={link.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
            className="text-xs shrink-0"
          >
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${link.label} (opens in a new tab)`}
              title={link.label}
              className="block text-slate-400 hover:text-teal-300 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <link.icon className="h-6 w-6" />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </header>
  );
}

export default Header;
