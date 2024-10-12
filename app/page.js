import githubLogo from "./assets/images/github.png";
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
        <p className="mb-2">I work at Fidelity Investments as an Executive Graduate Trainee. I’m currently undergoing the flagship LEAP training program in full stack development which includes technologies like Angular, Spring, and Java. I’ve previously interned at Fidelity for a total of 7 months working on developing capabilities for the Billpay and Credit Card products. </p>
        <p>I graduated from Thiagarajar College of Engineering, Madurai in 2024 with a degree in Computer Science. I like developing web applications and specialize in MERN stack. Outside of coding, I’m an avid reader and love diving into random topics—whether it's tech-related or something completely different!</p>
      </div>
      <h2 className="text-2xl font-medium mb-4">contact me:</h2>
      <div className="lg:max-w-2xl flex text-lg font-light flex-wrap">

        <a href="https://github.com/sockalingam29" className="w-1/2 md:w-1/4 flex  justify-center items-center hover:text-[#d4d4d4] mt-2" target="_blank" rel="noopener noreferrer" >
          <Image src={githubLogo} alt="github logo" className="mr-2" width="18" height="18" loading="lazy" />
          Github
        </a>

        <a href="https://www.linkedin.com/in/sockalingam29/" className="w-1/2 md:w-1/4 flex  justify-center items-center hover:text-[#2966bc] mt-2" target="_blank" rel="noopener noreferrer">
          <svg stroke="currentColor" fill="currentColor" className="mr-2 text-[#2966bc]" strokeWidth="0" viewBox="0 0 448 512" size="17" height="17" width="17" xmlns="http://www.w3.org/2000/svg">
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
            </path>
          </svg>
          LinkedIn
        </a>

        <a href="mailto:kanna.sockalingam@gmail.com" className="w-1/2 md:w-1/4 flex  justify-center items-center hover:text-[#ea4435] mt-2" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="19" height="19" viewBox="0 0 32 32">
            <path fill="#ea4435" d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"></path><path fill="#00ac47" d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z" transform="rotate(180 26.5 16)"></path><path fill="#ffba00" d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"></path><path fill="#4285f4" d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"></path><path fill="#c52528" d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"></path>
          </svg>
          Email
        </a>

        <a href="https://www.instagram.com/socka_lingam/" className="w-1/2 md:w-1/4 flex  justify-center items-center hover:text-[#ee7270] mt-2" target="_blank" rel="noopener noreferrer">
          <svg stroke="currentColor" fill="currentColor" className="mr-2 text-[#ee7270]" strokeWidth="0" viewBox="0 0 448 512" size="16" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
            </path>
          </svg>
          Instagram
        </a>

      </div>
    </div>
  )
}
