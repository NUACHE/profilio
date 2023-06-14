import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import AnimatedText from "../components/AnimatedText";
import { GithubIcon } from "../components/Icons";
import Lout from "../components/Lout";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import TransitionEffect from "../components/TransitionEffect";

const FeaturedProject = ({type, title, summary, img, link, github}:any) => {
    return ( <article className="w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    ">
           <div className="absolute top-0 -right-3 -z-10 w-[100.5%] h-[102%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
        <Link href={link} target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg "
        
        >
            <Image src={img} alt={title} className="w-full h-auto" />
        </Link>

        <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
            <span className="text-primary font-medium text-xl ">{type}</span>
            <Link href={link} target="_blank" className="hover:underline underline-offset-2" >
         <h2 className="my-2 w-full text-left text-4xl font-bold ">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark ">{summary}</p>
        <div  className="mt-2 flex items-center ">
        <Link href={github} target="_blank" className="w-10" >
           <GithubIcon className={""} />
        </Link>
        <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold" >
         Visit Project
        </Link>

        </div>
        </div>
    </article> );
}
 
const Project = ({title, type, img, link, github}:any) => {
    return ( 
        <article className="w-full flex flex-col items-center justify-center rounded-2xl relative
        border border-solid border-dark bg-light p-6 relative
        ">
                <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl" />
              <Link href={link} target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
        
        >
            <Image src={img} alt={title} className="w-full h-auto" />
        </Link>

        <div className="w-full flex flex-col items-start justify-between mt-4">
            <span className="text-primary font-medium text-xl ">{type}</span>
            <Link href={link} target="_blank" className="hover:underline underline-offset-2" >
         <h2 className="my-2 w-full text-left text-3xl font-bold ">{title}</h2>
        </Link>
      
        <div  className="w-full mt-2 flex items-center justify-between">
        <Link href={link} target="_blank" className="text-lg font-semibold underline" >
         Visit
        </Link>
        <Link href={github} target="_blank" className="w-8" >
           <GithubIcon className={""} />
        </Link>
      

        </div>
        </div>
        </article>
     );
}
 


const Projects = () => {
    return ( <>
    <Head>
        <title>MO | Projects Page</title>
        <meta name="description" content="any description" />
    </Head>
    <TransitionEffect />
    <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Lout  className={"pt-16"}>
            <AnimatedText text="Imagination Trumps Knowledge!" className={"mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"} />
            <div className="grid grid-cols-12 gap-24 gap-y-32">
                <div className="col-span-12 ">
                    <FeaturedProject 
                    
                    title="Crypto Screener Application"
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."

link="/"
github="/"
img={project1}
type="Featured Project"

                    
                    />
                </div>
                <div className="col-span-6 ">
                <Project 
                    
                    title="Crypto Screener Application"
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."

link="/"
github="/"
img={project1}
type="Featured Project"

                    
                    />
                </div>
                <div className="col-span-6 ">
                <Project 
                    
                    title="Crypto Screener Application"
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."

link="/"
github="/"
img={project1}
type="Featured Project"

                    
                    />
                </div>
                <div className="col-span-12 ">
                <FeaturedProject 
                    
                    title="Crypto Screener Application"
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."

link="/"
github="/"
img={project1}
type="Featured Project"

                    
                    />
                </div>
                <div className="col-span-6 ">
                <Project 
                    
                    title="Crypto Screener Application"
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."

link="/"
github="/"
img={project1}
type="Featured Project"

                    
                    />
                </div>
                <div className="col-span-6 ">
                <Project 
                    
                    title="Crypto Screener Application"
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."

link="/"
github="/"
img={project1}
type="Featured Project"

                    
                    />
                </div>
            </div>
        </Lout>
    </main>
    </> );
}
 
export default Projects;