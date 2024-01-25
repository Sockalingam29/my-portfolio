import githubLogo from "./assets/images/github.png";
import leetcodeLogo from "./assets/images/leetcode.png";
import Image from 'next/image'


export default function Home() {
  return (
    <div className="px-4 my-16 mx-auto lg:w-4/5">
      <h1 className="text-3xl font-medium mb-14">hey, I'm sockalingam! 👋</h1>
      <div className="lg:max-w-2xl font-light mb-10">
        <p className="mb-2">I'm a final year Computer Science Engineering student at Thiagarajar College of Engineering, Madurai. I've interned as a Software Engineer at Fidelity Investments in Summer 2023.
          {/* <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 49 48" fill="none">
              <g clip-path="url(#clip0_933_28141)">
                <path d="M24.9434 48C38.1983 48 48.9434 37.2548 48.9434 24C48.9434 10.7452 38.1983 0 24.9434 0C11.6886 0 0.94342 10.7452 0.94342 24C0.94342 37.2548 11.6886 48 24.9434 48Z" fill="white" />
                <path d="M22.5996 27.795H29.2838L31.2396 29.0631H22.3059L18.3011 41.4571C16.0258 40.544 13.9543 39.1883 12.2067 37.4686C10.4592 35.7489 9.07035 33.6995 8.12074 31.4391C7.17113 29.1787 6.67963 26.7523 6.67472 24.3005C6.66982 21.8487 7.15161 19.4204 8.09217 17.1562C9.94318 12.7412 13.423 9.20846 17.8095 7.29094C22.196 5.37342 27.1523 5.2184 31.6501 6.85805C36.1478 8.4977 39.8416 11.8061 41.9649 16.0968C44.0882 20.3874 44.478 25.3309 43.0534 29.9013C41.9853 33.3728 39.9048 36.4463 37.0784 38.7276L32.1423 30.5031L39.0128 34.3359C39.0128 34.3359 39.0701 34.2929 39.0128 34.2499L30.0576 26.484L41.685 28.2607C41.728 28.2607 41.7423 28.2607 41.7423 28.2607L41.6707 28.1962L30.6952 24.3204L42.1005 21.5622C42.1005 21.5622 42.1005 21.5622 42.1005 21.5049L30.4229 22.2714L39.5787 15.3365C39.5787 15.3365 39.5214 15.2792 39.4999 15.3365L29.2122 20.552L34.879 10.5222C34.879 10.5222 34.879 10.4649 34.8432 10.5222L27.4355 19.1837L28.8683 7.721C28.8683 7.721 28.8253 7.67801 28.7895 7.721L25.3722 18.8326L22.3847 7.36995C22.3847 7.36995 22.3202 7.33413 22.2987 7.36995L23.1226 19.2625L16.0802 10.0923C16.0802 10.0923 16.0373 10.0923 16.0158 10.0923L21.3459 20.244L11.2731 14.749C11.2731 14.749 11.2158 14.749 11.2158 14.792L20.1781 22.1496L8.71545 20.9389C8.67247 20.9389 8.67247 20.9962 8.71545 21.0177L19.8343 24.2631L8.79426 27.5013C8.78949 27.506 8.78571 27.5115 8.78312 27.5177C8.78054 27.5238 8.77921 27.5304 8.77921 27.5371C8.77921 27.5438 8.78054 27.5504 8.78312 27.5565C8.78571 27.5627 8.78949 27.5683 8.79426 27.5729L20.1781 26.2834L11.2373 33.8416C11.2373 33.8416 11.1943 33.8846 11.2373 33.9061L11.3519 33.8631L18.5161 30.1162L20.1925 27.444H22.1053L20.7799 26.5055L25.2074 19.3986L22.5996 27.795Z" fill="#368727" />
              </g>
            </svg>
          </span> */}
        </p>
        <p>I like developing web applications and specialize in MERN stack. I actively participate in programming contests. I'm an avid reader and I love to learn any random topics that come my way.</p>
      </div>
      <div className="lg:max-w-2xl flex justify-around lg:justify-between text-lg font-light flex-wrap">

        <a href="https://github.com/sockalingam29" className="flex items-center hover:text-[#d4d4d4] mr-2" target="_blank" rel="noopener noreferrer" >
          <Image src={githubLogo} className="mr-2" width="18" height="18" />
          Github
        </a>

        <a href="https://www.linkedin.com/in/sockalingam29/" className="flex items-center hover:text-[#2966bc] mr-2" target="_blank" rel="noopener noreferrer">
          <svg stroke="currentColor" fill="currentColor" className="mr-2 text-[#2966bc]" stroke-width="0" viewBox="0 0 448 512" size="17" height="17" width="17" xmlns="http://www.w3.org/2000/svg">
            <title>LinkedIn</title>
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
            </path>
          </svg>
          LinkedIn
        </a>

        <a href="https://www.leetcode.com/socka29/" className="flex items-center hover:text-[#e7a41f] mr-2" target="_blank" rel="noopener noreferrer">
          <Image src={leetcodeLogo} className="mr-2" width="16" height="16" />
          Leetcode
        </a>

        <a href="https://www.instagram.com/socka_lingam/" className="flex items-center hover:text-[#ee7270] mr-2" target="_blank" rel="noopener noreferrer">
          <svg stroke="currentColor" fill="currentColor" className="mr-2 text-[#ee7270]" stroke-width="0" viewBox="0 0 448 512" size="16" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
            <title>Instagram</title>
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
            </path>
          </svg>
          Instagram
        </a>

      </div>
    </div>
  )
}
