import {motion} from "framer-motion"


const Skill = ({name, x, y}:any) => {
    return (  <motion.div className="flex items-center justify-center rounded-full font-semibold dark:bg-light/75 dark:text-dark bg-dark text-light
    py-3 px-6 shadow-dark cursor-pointer absolute
    lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent 
    xs:text-dark xs:dark:text-light xs:font-bold hover:!bg-yellow-100
    "  whileHover={{scale: 1.05}} 
    initial={{x:0, y:0}}
    whileInView={{x:x, y:y, transition:{duration:1.5},}}
   
    //use this to animate once
    // viewport={{once:true}}
    
    >
        {name}
    </motion.div> );
}
 
const Skills = () => {
    return ( <>
    <h2 className="font-bold text-8xl mt-64 w-full text-center text-dark dark:text-light md:text-6xl md:mt-32 ">Skills</h2>
    <div className="w-full h-screen   flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
    lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
    lg:bg-circularLightLg lg:dark:bg-circularDarkLg
    md:bg-circularLightMd md:dark:bg-circularDarkMd
    sm:bg-circularLightSm sm:dark:bg-circularDarkSm
    ">
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2
        "  whileHover={{scale: 1.05}}  >
            Code
        </motion.div>
        <Skill name="Firebase" x="-35vw" y="0vw"  />
        <Skill name="Dart" x="-13vw" y="8vw"  />
        <Skill name="Flutter" x="-18vw" y="-8vw"  />
        <Skill name="Mobile" x="-9vw" y="0vw"  />

        <Skill name="HTML" x="18vw" y="2vw"  />
        <Skill name="CSS" x="5vw" y="-10vw"  />
        <Skill name="Javascript" x="32vw" y="-5vw"  />
        <Skill name="ReactJS" x="4vw" y="13vw"  />
        <Skill name="NextJS" x="20vw" y="-15vw"  />
        <Skill name="Web" x="9vw" y="0vw"  />
        <Skill name="Figma" x="0vw" y="-19vw"  />
     
        <Skill name="Tailwind CSS" x="18vw" y="18vw"  />
    </div>
    </> );
}
 
export default Skills;