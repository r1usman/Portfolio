import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0"
    >
      <p className="leading-relaxed">
        Designed and coded with <span className="text-teal-300">❤️</span> by{" "}
        <span className="font-medium text-teal-300">Usman</span>. Built with{" "}
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 transition-colors duration-300"
        >
          React
        </a>
        ,{" "}
        <a
          href="https://vitejs.dev/"
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 transition-colors duration-300"
        >
          Vite
        </a>
        , and{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 transition-colors duration-300"
        >
          Tailwind CSS
        </a>
        . Animations powered by{" "}
        <a
          href="https://www.framer.com/motion/"
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 transition-colors duration-300"
        >
          Framer Motion
        </a>
        .
      </p>
      <p className="mt-4 text-xs text-slate-600">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </motion.footer>
  );
}

export default Footer;
