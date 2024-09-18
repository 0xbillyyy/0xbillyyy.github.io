
import { CardNavigation } from "../Components/CardNavigation"
import { TitleSlideAnimation } from "../Components/TitleSlideAnimation"

import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaPython,
  FaLaravel,
  FaNpm,
  FaReact,
  FaBootstrap,
  FaWordpress,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiPowershell,
  SiCodeigniter,
  SiJquery,
  SiVite,
  SiTailwindcss,
  SiApache,
  SiMariadb,
  SiMysql,
  SiPostman
} from "react-icons/si";



export default function Tentang() {
  const texts = ["No Tests", "Just Stories!", "Simple Tales"];

  return (
    <div className="min-h-screen bg-custom-bg">
      <div className="absolute top-[-5] right-0 w-64 h-64 custom-radius opacity-100 blur-3xl z-1 bg-custom-button-text" style={{ marginTop: "-100px", }}></div>
      <div className="container mx-auto border-0 overflow-hidden" style={{ paddingTop: "100px" }}>
        <div className="p-6">
          <h1 className="font-bold text-custom-headline gradient-text" style={{ fontSize: "70px", marginBottom: "-35px" }}>About Me</h1>
          <h2 className="font-bold mb-2"><TitleSlideAnimation color="text-custom-subtitle" texts={texts} size="2.25rem" /></h2>
          <div className="text-gray-400 mb-4 text-justify">
            &quot;Hello 👋, My name is <span className='highlight-paragraph'>Bilhaq Syahbani Sahatmojo</span>, a Computer Engineering student at PGRI Kanjuruhan University Malang.
            Residing in Malang, I have a strong interest in technology, particularly in <span className='highlight-paragraph'>programming</span>, <span className='highlight-paragraph'>hacking</span>, and <span className='highlight-paragraph'>computer networking.</span>
            In this portfolio, you&apos;ll find my projects covering various aspects of the tech field, along with some achievements and other activities I&apos;ve been involved in.
            With hard work and a passion for learning, I aim to continue <span className='highlight-paragraph'>growing</span> and <span className='highlight-paragraph'>inspiring others through my work.</span>&quot;

            <h2 className='font-bold text-custom-subtitle mt-5 text-2xl'>
              My Abilities

            </h2>
            <div className="icon-container">
              <FaHtml5 color="#E34F26" title="HTML5" className='custom-logo-skills' />
              <FaCss3Alt color="#1572B6" title="CSS3" className='custom-logo-skills' />
              <FaPhp color="#8C8C8C" title="PHP" className='custom-logo-skills' />
              <FaPython color="#306998" title="Python" className='custom-logo-skills' />
              <FaLaravel color="#FF2D20" title="Laravel" className='custom-logo-skills' />
              <FaNpm color="#CB3837" title="NPM" className='custom-logo-skills' />
              <FaReact color="#61DAFB" title="React" className='custom-logo-skills' />
              <FaBootstrap color="#563D7C" title="Bootstrap" className='custom-logo-skills' />
              <FaWordpress color="#21759B" title="WordPress" className='custom-logo-skills' />
              <SiPowershell color="#012456" title="PowerShell" className='custom-logo-skills' />
              <SiCodeigniter color="#FF9D4D" title="CodeIgniter" className='custom-logo-skills' />
              <SiJquery color="#0769AD" title="jQuery" className='custom-logo-skills' />
              <SiVite color="#646CFF" title="Vite" className='custom-logo-skills' />
              <SiTailwindcss color="#38BDF8" title="Tailwind CSS" className='custom-logo-skills' />
              <SiApache color="#D73A2A" title="Apache" className='custom-logo-skills' />
              <SiMariadb color="#003545" title="MariaDB" className='custom-logo-skills' />
              <SiMysql color="#4479A1" title="MySQL" className='custom-logo-skills' />
              <SiPostman color="#FF6C37" title="Postman" className='custom-logo-skills' />
              <RiJavascriptFill color="#F7DF1E" title="JavaScript" className='custom-logo-skills' />
            </div>
          </div>
        </div>
      </div>

      <CardNavigation />
    </div>
  )
}
