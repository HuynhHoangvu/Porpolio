import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechCard = ({ name, icon }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="w-28 h-28 flex flex-col items-center justify-center bg-tertiary rounded-2xl p-3 cursor-pointer border border-[#804dee20] hover:border-[#915EFF80] transition-all duration-300 hover:shadow-[0_10px_25px_rgba(145,94,255,0.25)] group"
    >
      <div className="w-12 h-12 flex items-center justify-center">
        <img
          src={icon}
          alt={name}
          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            // Safe fallback icon if CDN fails
            e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg";
          }}
        />
      </div>
      <p className="text-secondary group-hover:text-white text-[11px] font-semibold text-center mt-3 truncate w-full transition-colors duration-300">
        {name}
      </p>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-8 max-w-5xl mx-auto'>
      {technologies.map((technology) => (
        <TechCard key={technology.name} {...technology} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
