import { motion } from "motion/react";
import imgImage from "figma:asset/835eb199787cac95da4eabb7a2a2e64aa0093a39.png";
import imgImage1 from "figma:asset/69ce700aa985cda0e105acbd2d32ba0ca7219c84.png";
import imgImage2 from "figma:asset/f1ac34b888c1b348c9964bedfbe4c26a5bcc0ad1.png";
import svgPaths from "../imports/svg-e9w9uh0r91";

const courseImages = [imgImage, imgImage1, imgImage2];

function GlowEffect() {
  return (
    <div className="absolute inset-[4.26%_4.42%_4.42%_4.26%]">
      <div className="absolute inset-[-4.61%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 294 294">
          <g filter="url(#filter0_f_1_90)">
            <path d={svgPaths.p214679b1} fill="var(--fill-0, #272C45)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="293.231" id="filter0_f_1_90" width="293.231" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_90" stdDeviation="15" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function CourseCard({ image }: { image: string }) {
  return (
    <div className="content-stretch flex h-[130px] items-start justify-center overflow-clip relative rounded-[20px] shrink-0 w-[200px]">
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Course thumbnail" className="absolute h-[100.26%] left-0 max-w-none top-[-0.13%] w-full" src={image} />
        </div>
      </div>
    </div>
  );
}

function ScrollColumn({ images, direction }: { images: string[]; direction: "up" | "down" }) {
  // Duplicate images multiple times for seamless loop
  const duplicatedImages = [...images, ...images, ...images];
  
  return (
    <div className="flex flex-col gap-[20px]">
      <motion.div
        className="content-stretch flex flex-col gap-[20px] items-start"
        animate={{
          y: direction === "down" ? [0, -860] : [-860, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {duplicatedImages.map((img, index) => (
          <CourseCard key={index} image={img} />
        ))}
      </motion.div>
    </div>
  );
}

export default function FreeCourseScroller() {
  return (
    <div id="Free-Course-Scroller" className="relative size-full">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex items-start max-w-inherit px-[12px] py-[50px] relative size-full">
          <div className="bg-[#040924] box-border content-stretch flex gap-[50px] isolate items-start overflow-clip pl-0 pr-[48px] py-0 relative rounded-[30px] self-stretch shrink-0">
            {/* Content Section */}
            <div className="box-border content-stretch flex flex-col gap-[10px] h-full items-start min-w-[778px] p-[48px] relative shrink-0 z-[3]">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[48px] not-italic relative shrink-0 text-[32px] text-nowrap whitespace-pre text-white">
                  <p className="mb-0">Gabung Kelas Gratis, Perkuat</p>
                  <p>Fundamental Skills</p>
                </div>
              </div>
              
              <div className="box-border content-stretch flex flex-col items-start pb-[10px] pt-0 px-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">
                  <p className="mb-0">Mentor expert kami telah menyediakan ratusan kelas gratis yang bisa kamu</p>
                  <p>pelajari sekarang</p>
                </div>
              </div>
              
              <div className="bg-[#2447f9] box-border content-stretch flex items-start px-[16px] py-[12px] relative rounded-[50px] shrink-0">
                <a className="[white-space-collapse:collapse] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" href="https://buildwithangga.com/kelas">
                  <p className="cursor-pointer leading-[24px] whitespace-pre">Lihat Kelas Gratis Populer</p>
                </a>
              </div>
            </div>

            {/* Glow Effect Icon */}
            <div className="absolute content-stretch flex flex-col items-start left-[300px] overflow-clip top-0 z-[2]">
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[294px]">
                <div className="overflow-clip relative shrink-0 size-[294px]">
                  <GlowEffect />
                </div>
              </div>
            </div>

            {/* Animated Scrolling Columns */}
            <div className="h-[338px] relative shrink-0 w-[420px] z-[1] overflow-hidden">
              {/* Column 1 - Scroll Down */}
              <div className="absolute left-0 top-[-430px] overflow-hidden">
                <ScrollColumn images={courseImages} direction="down" />
              </div>

              {/* Column 2 - Scroll Up */}
              <div className="absolute left-[220px] top-[-408.5px] overflow-hidden">
                <ScrollColumn images={courseImages} direction="up" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}