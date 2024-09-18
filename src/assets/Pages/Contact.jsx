import { useState } from "react"
import { CardNavigation } from "../Components/CardNavigation";
import { Link } from "react-router-dom"


import { TitleSlideAnimation } from "../Components/TitleSlideAnimation"

import {
    FaWhatsapp,
    FaFacebookF,
    FaInstagram,
    FaGithub,
    FaLinkedin
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";



export default function Contact() {

    const [name, setName] = useState("");

    const [description, setDescription] = useState("");

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        window.location.href = "https://api.whatsapp.com/send/?phone=6285837173009&text=Hallo+bilhaq%21+saya+" + name + ",+saya+mempunyai+keperluan+*" + description + "*+mohon+segera+balas%21&type=phone_number&app_absent=0"
    }

    const texts = [
        "Meet Me",
        "Reach Me",
        "Say Hi to Me"
    ]
    return (
        <div className="min-h-screen bg-custom-bg">
            <div className="absolute top-[-5] right-0 w-64 h-64 custom-radius opacity-100 blur-3xl z-1 bg-custom-button-text" style={{ marginTop: "-100px", }}></div>
            <div className="container mx-auto px-4 border-0 overflow-hidden" style={{ paddingTop: "100px", paddingBottom: "50px" }}>

                <div className="container mx-auto">
                    <h1 className="font-bold text-custom-headline gradient-text ml-1" style={{ fontSize: "40px", marginBottom: "-35px" }}>Contact</h1>
                    <h1 className="font-bold text-custom-headline gradient-text" style={{ fontSize: "70px", marginBottom: "-35px" }}>Me</h1>
                    <h2 className="font-bold mb-2"><TitleSlideAnimation color="text-custom-subtitle" texts={texts} size="2.25rem" /></h2>
                </div>

                <form onSubmit={handleSubmit}>

                    <div id="form-contact">

                        <div className="relative z-0 w-full mb-5 group">
                            <input type="name" value={name} onChange={handleChangeName} name="name" id="name" className="block text-white py-2.5 px-0 w-full text-sm text- bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-indigo-400 peer" placeholder=" " required />
                            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-indigo-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <textarea type="text" name="description" value={description} onChange={handleChangeDescription} id="description" className="block text-white py-2.5 px-0 w-full text-sm text- bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-indigo-400 peer mt-3" rows={3} placeholder=" " required />
                            <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-indigo-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                        </div>
                        <button id="submit" type="submit" className="button-contact justify-center flex">Submit</button>

                    </div>

                </form>

                <div className="icon-container p-5 flex justify-center">
                    <Link to="https://wa.me/6285837173009">
                        <FaWhatsapp style={{ border: "2px solid #25D366" }} title="WhatsApp" className='custom-logo-socials whatsapp' />
                    </Link>
                    <Link to="https://www.facebook.com/profile.php?id=100009509036838">
                        <FaFacebookF style={{ border: "2px solid #1877F2" }} title="Facebook" className='custom-logo-socials facebook' />
                    </Link>
                    <Link to="https://www.instagram.com/billy000_00/">
                        <FaInstagram style={{ border: "2px solid #E1306C" }} title="Instagram" className='custom-logo-socials instagram' />
                    </Link>
                    <Link to="mailto:silendprojeck@gmail.com">
                        <IoIosMail style={{ border: "2px solid #D93025" }} title="Email" className='custom-logo-socials mail' />
                    </Link>
                    <Link to="https://github.com/0xbillyyy">
                        <FaGithub style={{ border: "2px solid #181717" }} title="GitHub" className='custom-logo-socials github' />
                    </Link>
                    <Link to="https://www.linkedin.com/in/bilhaq-syahbani-sahatmojo-3911b21a0/">
                        <FaLinkedin style={{ border: "2px solid #0A66C2" }} title="LinkedIn" className='custom-logo-socials linkedin' />
                    </Link>
                </div>

            </div>
            <CardNavigation />
        </div >
    )
}