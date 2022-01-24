import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";
import Bar from "../components/Bar";
import { languages, tools } from "../data";

const resume = () => {
  return (
    <motion.div className="p-6 py-2" variants={routeAnimation} initial="initial" animate="animate" exit="exit">
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>

          <div>
            <h5 className="my-2 text-xl font-semibold">IT systems manager and programmer</h5>

            <p>Escola Secundária Emídio Navarro (2019-2022)</p>

            <p className="my-6">I am currently studying IT systems manager and programmer from Escola Secundária Emídio Navarro.</p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>

          <div>
            <h5 className="my-2 text-xl font-semibold">Website Developer</h5>

            <p>2Play+ (2020)</p>

            <p className="my-6">I was in this company for a short time but it helped to understand how a start-up works.</p>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>

          <div className="my-2">
            {
              languages.map(language => <Bar data={language} key={language.name} />)
            }
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>

          <div className="my-2">
            {
              tools.map(tool => <Bar data={tool} key={tool.name} />)
            }
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default resume;
