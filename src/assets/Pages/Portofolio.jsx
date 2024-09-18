import { useState, useEffect } from "react"
import { CardNavigation } from "../Components/CardNavigation";

import { TitleSlideAnimation } from "../Components/TitleSlideAnimation"


export default function Portofolio() {

    const baseURL = import.meta.env.BASE_URL

    const [portofolioData, setPortofolioData] = useState([])

    const texts = [
        "Collection of Works",
        "Serious Portfolio",
        "Chill Person"
    ]

    useEffect(() => {
        fetch("https://api.npoint.io/026d13a6c51808d7d77e")
            .then((response) => response.json())
            .then((data) => setPortofolioData(data))
            .catch((error) => console.log("error:", error))
    }, [])

    return (
        <div className="min-h-screen bg-custom-bg">
            <div className="absolute top-[-5] right-0 w-64 h-64 custom-radius opacity-100 blur-3xl z-1 bg-custom-button-text" style={{ marginTop: "-100px", }}></div>
            <div className="container mx-auto px-4 border-0 overflow-hidden" style={{ paddingTop: "100px" }}>

                <div className="container mx-auto">
                    <h1 className="font-bold text-custom-headline gradient-text ml-1" style={{ fontSize: "40px", marginBottom: "-35px" }}>My</h1>
                    <h1 className="font-bold text-custom-headline gradient-text" style={{ fontSize: "70px", marginBottom: "-35px" }}>Portofolio</h1>
                    <h2 className="font-bold mb-2"><TitleSlideAnimation color="text-custom-subtitle" texts={texts} size="2.25rem" /></h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-32">

                    {
                        portofolioData.map((item, index) => (
                            <div key={index} className="relative w-full h-64 bg-cover bg-center z-10 hover-slide flex justify-center items-center shadow" style={{ backgroundImage: `url(${baseURL + "img/portoku/" + item.image})` }}>
                                <div className="text-white text-center relative z-10 text-overlay-portofolio">
                                    <div className="title-portofolio px-3">
                                        {item.title}
                                    </div>
                                    <div>
                                        <a href={`${item.url}`} className="px-12 py-4 button-portofolio" target={"_blank"}>VIEW</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
            <CardNavigation />
        </div>
    )
}