import svgPaths from "./svg-e9w9uh0r91";
import imgImage from "figma:asset/835eb199787cac95da4eabb7a2a2e64aa0093a39.png";
import imgImage1 from "figma:asset/69ce700aa985cda0e105acbd2d32ba0ca7219c84.png";
import imgImage2 from "figma:asset/f1ac34b888c1b348c9964bedfbe4c26a5bcc0ad1.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[48px] not-italic relative shrink-0 text-[32px] text-nowrap whitespace-pre">
        <p className="mb-0">Gabung Kelas Gratis, Perkuat</p>
        <p>Fundamental Skills</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[10px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">
        <p className="mb-0">Mentor expert kami juga telah menyediakan ratusan kelas gratis yang bisa kamu</p>
        <p>pelajari sekarang</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#2447f9] box-border content-stretch flex items-start px-[16px] py-[12px] relative rounded-[50px] shrink-0" data-name="Link">
      <a className="[white-space-collapse:collapse] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" href="https://buildwithangga.com/kelas">
        <p className="cursor-pointer leading-[24px] whitespace-pre">Lihat Kelas Gratis Popular</p>
      </a>
    </div>
  );
}

function Container1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-full items-start min-w-[778px] p-[48px] relative shrink-0 z-[3]" data-name="Container">
      <Heading />
      <Container />
      <Link />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[4.26%_4.42%_4.42%_4.26%]" data-name="Group">
      <div className="absolute inset-[-4.61%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 294 294">
          <g filter="url(#filter0_f_1_90)" id="Group">
            <path d={svgPaths.p214679b1} fill="var(--fill-0, #272C45)" id="Vector" />
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

function EllipseSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[294px]" data-name="Ellipse.svg fill">
      <div className="overflow-clip relative shrink-0 size-[294px]" data-name="Component 1">
        <Group />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[300px] overflow-clip top-0 z-[2]" data-name="icon">
      <EllipseSvgFill />
    </div>
  );
}

function Image() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.26%] left-0 max-w-none top-[-0.13%] w-full" src={imgImage} />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[130px] items-start justify-center overflow-clip relative rounded-[20px] shrink-0 w-[200px]" data-name="Container">
      <Image />
    </div>
  );
}

function Image1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.26%] left-0 max-w-none top-[-0.13%] w-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[130px] items-start justify-center overflow-clip relative rounded-[20px] shrink-0 w-[200px]" data-name="Container">
      <Image1 />
    </div>
  );
}

function Image2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.26%] left-0 max-w-none top-[-0.13%] w-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[130px] items-start justify-center overflow-clip relative rounded-[20px] shrink-0 w-[200px]" data-name="Container">
      <Image2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[20px] items-start left-0 pb-[430px] pt-0 px-0 top-[-430px]" data-name="Container">
      {[...Array(2).keys()].map((_, i) => (
        <Container5 key={i} />
      ))}
    </div>
  );
}

function Image3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.26%] left-0 max-w-none top-[-0.13%] w-full" src={imgImage} />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[130px] items-start justify-center overflow-clip relative rounded-[20px] shrink-0 w-[200px]" data-name="Container">
      <Image3 />
    </div>
  );
}

function Image4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.26%] left-0 max-w-none top-[-0.13%] w-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[130px] items-start justify-center overflow-clip relative rounded-[20px] shrink-0 w-[200px]" data-name="Container">
      <Image4 />
    </div>
  );
}

function Image5() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.26%] left-0 max-w-none top-[-0.13%] w-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[130px] items-start justify-center overflow-clip relative rounded-[20px] shrink-0 w-[200px]" data-name="Container">
      <Image5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[20px] items-start left-[220px] pb-0 pt-[21.5px] px-0 top-0" data-name="Container">
      {[...Array(2).keys()].map((_, i) => (
        <Container10 key={i} />
      ))}
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[338px] relative shrink-0 w-[420px] z-[1]" data-name="Container">
      <Container6 />
      <Container11 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#040924] box-border content-stretch flex gap-[50px] isolate items-start overflow-clip pl-0 pr-[48px] py-0 relative rounded-[30px] self-stretch shrink-0" data-name="Background">
      <Container1 />
      <Icon />
      <Container12 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full" data-name="Frame">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex items-start max-w-inherit px-[12px] py-[50px] relative size-full">
          <Background />
        </div>
      </div>
    </div>
  );
}