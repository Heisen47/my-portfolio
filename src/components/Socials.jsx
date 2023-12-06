import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const Socials = () => {
  return (
    <div>
      <motion.div
        variants={slideIn("up", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <div className="flex flex-auto justify-between">
          <div>You can also contact me here.</div>
          <div className="flex gap-10">
            <a href="https://twitter.com/iWriteCode__" target="_blank">
              <Twitter />
            </a>
            <a
              href="https://www.linkedin.com/in/saptarshi-chakraborty-3031999march/"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a
              href="https://www.instagram.com/justlessthanmore/"
              target="_blank"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Socials, "contact");
