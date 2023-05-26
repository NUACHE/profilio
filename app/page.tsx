'use client'

import Image from "next/image";
import profilePic from "../public/images/profile/developer-pic-1.png"
import webPic from "../public/images/web.png"
import lightBulb from "../public/images/svgs/miscellaneous_icons_1.svg"
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "./components/Icons";
import Hireme from "./components/Hireme";
import Lout from "./components/Lout";
import TransitionEffect from "./components/TransitionEffect";
import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Home() {

 

  return (
    <>
      <TransitionEffect />

      <Lout className="pt-0 md:pt-16 sm:pt-8" >
        <main className="flex items-center text-dark w-full min-h-screen dark:text-light ">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full  ">
            <Carousel 
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={false}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            verticalSwipe={"natural"}
            
            >
                <div>
                <Image priority src={profilePic } alt="MO" className="w-full h-auto lg:hidden md:inline-block md:w-full" 
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 
                50vw
                "
                
                /> 
          
                </div>
                <div>
                <Image priority src={webPic } alt="MO" className="w-full h-auto lg:hidden md:inline-block md:w-full" 
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 
                50vw
                "
                
                /> 
             
                </div>
                <div>
                <Image priority src={profilePic } alt="MO" className="w-full h-auto lg:hidden md:inline-block md:w-full" 
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 
                50vw
                "
                
                /> 
                 
                </div>
            </Carousel>

                      {/* <Image priority src={profilePic } alt="MO" className="w-full h-auto lg:hidden md:inline-block md:w-full" 
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 
                50vw
                "
                
                /> */}

             


            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left 
        xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl 
        " />

              <p className="my-4 text-base font-medium md:text-sm sm:text-xs " >As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>

              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link href="/dummy.pdf" target="_blank" className="dark:text-dark dark:bg-light  flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
  hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base
  "
                  download={true}
                >Resume <LinkArrow className="!w-6 ml-1" /></Link>
                <Link href="mailto:michaelopoku790@gmail.com" target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >Contact</Link>
              </div>
            </div>
          </div>
          <Hireme />
          <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
            <Image src={lightBulb} alt="MO" className="w-full h-auto" />
          </div>
        </main>
      </Lout>


    </>

  )
}
