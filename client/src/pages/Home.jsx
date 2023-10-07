import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";

import {
  CustomButton
} from "../components";

import {
  headContainerAnimation,
  headTextAnimation,
  slideAnimation
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home inline-block" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./app_logo.png"
              alt="logo"
              className="w-12 h-12 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET&apos;S 
                <br className="xl:block"/> CREATE.
                <br className="xl:block"/> DESIGN.
                <br className="xl:block"/> DISPERSE.
              </h1>
            </motion.div>

            <motion.div className="flex flex-col gap-5" {...headTextAnimation}>
              <p className="max-w-md font-normal text-gray-600 text-base">
                Produce your own special and eccentric t-shirt with our top of the line 
                3D design tools.
                <strong>
                  &nbsp;Unleash your creativity
                </strong>
                &nbsp;and find what patterns suit you.
              </p>
            </motion.div>

            <CustomButton 
              type="filled"
              title="Start Designing"
              customStyles="w-fit px-4 py-2 font-bold text-sm"
              handleClick={() => state.intro = false}
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home;