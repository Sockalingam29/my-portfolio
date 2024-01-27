import githubLogo from "./assets/images/github.png";
import leetcodeLogo from "./assets/images/leetcode.png";
import myPhoto1 from "./assets/images/myPhoto1.webp";
import myPhoto2 from "./assets/images/myPhoto2.webp";
import myPhoto3 from "./assets/images/myPhoto3.webp";
import Image from 'next/image'

export default function Home() {
  const imageNum = Math.floor(Math.random() * 3) + 1;
  return (
    <div className="px-4 my-12 mx-auto lg:w-4/5">
      <Image src={imageNum == 1 ? myPhoto1 : (imageNum == 2 ? myPhoto2 : myPhoto3)} alt='my-photo' className="rounded-full border border-neutral-800 mb-6 h-24 w-24 object-cover" loading="lazy" />
      <h1 className="text-3xl font-medium mb-8">hey, I'm sockalingam! 👋</h1>
      <div className="lg:max-w-2xl font-light mb-8">
        <p className="mb-2">I'm a final year Computer Science Engineering student at Thiagarajar College of Engineering, Madurai. In my most recent position, I worked as a Software Engineering Intern at Fidelity Investments in Summer '23.</p>
        <p>I like developing web applications and specialize in MERN stack. I actively participate in programming contests. I'm an avid reader and I love to learn any random topics that come my way.</p>
      </div>
      <h1 className="text-2xl font-medium mb-4">follow me:</h1>
      <div className="lg:max-w-2xl flex text-lg font-light flex-wrap">

        <a href="https://github.com/sockalingam29" className="w-1/2 lg:w-1/4 flex lg:justify-start justify-center items-center hover:text-[#d4d4d4] mt-2" target="_blank" rel="noopener noreferrer" >
          <Image src={githubLogo} className="mr-2" width="18" height="18" loading="lazy" />
          Github
        </a>

        <a href="https://www.linkedin.com/in/sockalingam29/" className="w-1/2 lg:w-1/4 flex lg:justify-start justify-center items-center hover:text-[#2966bc] mt-2" target="_blank" rel="noopener noreferrer">
          <svg stroke="currentColor" fill="currentColor" className="mr-2 text-[#2966bc]" stroke-width="0" viewBox="0 0 448 512" size="17" height="17" width="17" xmlns="http://www.w3.org/2000/svg">
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
            </path>
          </svg>
          LinkedIn
        </a>

        <a href="https://www.leetcode.com/socka29/" className="w-1/2 lg:w-1/4 flex lg:justify-start justify-center items-center hover:text-[#e7a41f] mt-2" target="_blank" rel="noopener noreferrer">
          <Image src={leetcodeLogo} className="mr-2" width="16" height="16" loading="lazy" />
          Leetcode
        </a>

        <a href="https://www.instagram.com/socka_lingam/" className="w-1/2 lg:w-1/4 flex lg:justify-start justify-center items-center hover:text-[#ee7270] mt-2" target="_blank" rel="noopener noreferrer">
          <svg stroke="currentColor" fill="currentColor" className="mr-2 text-[#ee7270]" stroke-width="0" viewBox="0 0 448 512" size="16" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
            </path>
          </svg>
          Instagram
        </a>

      </div>
    </div>
  )
}
