import { useEffect } from "react"
import { CardNavigation } from "../Components/CardNavigation";
import { TitleSlideAnimation } from "../Components/TitleSlideAnimation"


export default function Graduation() {

    const texts = ["My Journey", "Throughout Life", "Until Now!"];


    useEffect(() => {
        // Inisialisasi AOS saat halaman dimuat
        window.AOS.init({
            duration: 1000,  // Durasi animasi dalam milidetik
            once: false,      // Jalankan animasi hanya sekali
        });
    }, []);
    return (
        <>
            <div className="min-h-screen bg-custom-bg">
                <div className="absolute top-[-5] right-0 w-64 h-64 custom-radius opacity-100 blur-3xl z-1 bg-custom-button-text" style={{ marginTop: "-100px", }}></div>
                <div className="container mx-auto border-0 overflow-hidden" style={{ paddingTop: "100px" }}>

                    <div className="grid grid-cols-10">

                        <div className="col-span-10 sm:col-span-3 container mx-auto">
                            <div className="container mx-auto px-6">
                                <h1 className="font-bold text-custom-headline gradient-text ml-1" style={{ fontSize: "40px", marginBottom: "-28px" }}>My</h1>
                                <h1 className="font-bold text-custom-headline gradient-text" style={{ fontSize: "70px", marginBottom: "-35px" }}>Education</h1>
                                <h2 className="font-bold mb-2"><TitleSlideAnimation color="text-custom-subtitle" texts={texts} size="2.25rem" /></h2>

                            </div>
                        </div>

                        <div className="col-span-10 sm:col-span-7" style={{ marginBottom: "100px" }}>


                            <div className="container mx-auto px-5">

                                <div className="relative">
                                    <div className="border-r-4 border-black absolute h-full top-0"  data-aos="fade-right" data-aos-delay="500" data-aos-duration="500" style={{ 'left': '9px' }}></div>
                                    <ul className="list-none m-0 p-0">
                                        <li className="mb-5  " >
                                            <div className="flex group items-center ">
                                                <div className="bg-gray-800 group-hover:bg-custom-bg-2 z-10 rounded-full border-4 border-black h-5 w-5" data-aos="fade-right" data-aos-delay="500" data-aos-duration="500">
                                                    <div className="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                                                </div>
                                                <div className="flex-1 ml-4 z-1 font-medium">
                                                    <div className="order-1 space-y-2 bg-custom-button rounded-lg shadow-only transition-ease px-6 py-4" data-aos="fade-left" data-aos-delay="500" data-aos-duration="500">
                                                        <h3 className="mb-3 font-bold text-white text-2xl">Informatics Engineering</h3>
                                                        <p className="pb-4 text-sm text-gray-100" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="200">PGRI Kanjuruhan University, Malang (2023 - Now)</p>
                                                        <hr />
                                                        <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100 text-justify">
                                                            I am a student of the Informatics Department at Universitas PGRI Kanjuruhan Malang, class of 2023. During my studies, I have been actively involved in campus activities, including joining the <span className="highlight-paragraph">Penalaran Student Activity Unit</span> and the <span className="highlight-paragraph">Informatics Student Association.</span> In these roles, I have contributed to various academic and organizational activities, while developing technical skills and leadership abilities that support my professional and personal growth.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mb-5  ">
                                            <div className="flex group items-center ">
                                                <div className="bg-gray-800 group-hover:bg-custom-bg-2 z-10 rounded-full border-4 border-black  h-5 w-5" data-aos="fade-right" data-aos-delay="500" data-aos-duration="500">
                                                    <div className="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                                                </div>
                                                <div className="flex-1 ml-4 z-1 font-medium">
                                                    <div className="order-1 space-y-2 bg-custom-button rounded-lg shadow-only transition-ease px-6 py-4" data-aos="fade-left" data-aos-delay="500" data-aos-duration="500">
                                                        <h3 className="mb-3 font-bold text-white text-2xl">Computer and Network Engineering</h3>
                                                        <p className="pb-4 text-sm text-gray-100" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="200">Vocational High School 2, Malang City (2019 - 2022)</p>
                                                        <hr />
                                                        <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100 text-justify">
                                                            I previously studied at SMKN 2 Kota Malang, specializing in <span className="highlight-paragraph">Computer and Network Engineering.</span> This program provided me with a solid foundation in technical skills and practical knowledge in computer systems and network management.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>


                                        <li className="mb-5  ">
                                            <div className="flex group items-center ">
                                                <div className="bg-gray-800 group-hover:bg-custom-bg-2 z-10 rounded-full border-4 border-black  h-5 w-5" data-aos="fade-right" data-aos-delay="500" data-aos-duration="500">
                                                    <div className="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                                                </div>
                                                <div className="flex-1 ml-4 z-1 font-medium">
                                                    <div className="order-1 space-y-2 bg-custom-button rounded-lg shadow-only transition-ease px-6 py-4" data-aos="fade-left" data-aos-delay="500" data-aos-duration="500">
                                                        <h3 className="mb-3 font-bold text-white text-2xl">Junior High School</h3>
                                                        <p className="pb-4 text-sm text-gray-100" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="200">Junior High School 19, Malang City (2016 - 2019)</p>
                                                        <hr />
                                                        <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100 text-justify">
                                                            I attended SMPN 19 Kota Malang from 2016 to 2019. During my time at this school, I developed a strong academic foundation and <span className="highlight-paragraph">participated in various extracurricular activities</span> that contributed to my personal growth and early development.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mb-5  ">
                                            <div className="flex group items-center ">
                                                <div className="bg-gray-800 group-hover:bg-custom-bg-2 z-10 rounded-full border-4 border-black  h-5 w-5" data-aos="fade-right" data-aos-delay="500" data-aos-duration="500">
                                                    <div className="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                                                </div>
                                                <div className="flex-1 ml-4 z-1 font-medium">
                                                    <div className="order-1 space-y-2 bg-custom-button rounded-lg shadow-only transition-ease px-6 py-4" data-aos="fade-left" data-aos-delay="500" data-aos-duration="500">
                                                        <h3 className="mb-3 font-bold text-white text-2xl">Elementary School</h3>
                                                        <p className="pb-4 text-sm text-gray-100" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="200">Bumiayu 2 Elementary School, Malang City (2010 - 2016)</p>
                                                        <hr />
                                                        <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100 text-justify">
                                                            I attended SD Bumiayu 2 Kota Malang from 2010 to 2016. During these formative years, <span className="highlight-paragraph">I built the fundamental skills and knowledge</span> that laid the groundwork for my subsequent academic and personal development.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
                <CardNavigation />
            </div>
        </>
    )
}