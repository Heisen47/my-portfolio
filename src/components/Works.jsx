import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import {
  BeginnerProjects,
  WorkingOnProjects,
  PlanToWorkOnProjects,
} from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import LazyLoad from "react-lazy-load";
import { ProjectCard } from "./ProjectCard";

function Works() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Projects</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
      </motion.div>

      <LazyLoad>
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of some of my work. Each project is breifly
            described with links to code repositories and live demos in it. I am
            planning to build some clones of mordern social media giants and
            learning new things along the way.
          </motion.p>
        </div>
      </LazyLoad>

      <div className="">
        <div className={`${styles.sectionSubText} text-center mt-10`}>
          Projects I have <span className="text-[#915EFF]">Built.</span>
        </div>
        <div className="mt-20 flex flex-wrap gap-7">
          {BeginnerProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
        <div className={`${styles.sectionSubText} text-center mt-10`}>
          Projects that I am 
          <span className="text-[#915EFF]"> working on right now.</span>
        </div>
        <div className="mt-20 flex flex-wrap gap-7">
          {WorkingOnProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
        {/* <div className={`${styles.sectionSubText} text-center mt-10`}>
          Projects that I am{" "}
          <span className="text-[#915EFF]">curious about and plan to do.</span>
        </div>
        <div className="mt-20 flex flex-wrap gap-7">
          {PlanToWorkOnProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div> */}
      </div>
    </>
  );
}

export default SectionWrapper(Works, "");
