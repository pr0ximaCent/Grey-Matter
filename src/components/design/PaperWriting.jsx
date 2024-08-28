import {useEffect, useState} from "react";
import Header from "../Header.jsx";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideIdx, setSlideIdx] = useState([]);

    useEffect(() => {
        const arr = [];
        for (let i = 1; i <= 62; i++) {
            arr.push(i);
        }
        setSlideIdx(arr);
    }, []);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slideIdx.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(slideInterval);
    }, [slideIdx.length]);

    return (
        <div>
            <Header/>
            <div className=" mx-auto relative w-full h-full xl:w-[1280px] overflow-hidden">
                <div
                    className="flex transition-transform ease-out duration-500"
                    style={{transform: `translateX(-${currentIndex * 100}%)`}}
                >
                    {slideIdx.map((slide, index) => (
                        <img
                            key={index}
                            src={`/ResearchPaper/Paper Writing-Workshop_${slide}.jpg`}
                            alt={`Slide ${index + 1}`}
                            className="w-full object-cover"
                        />
                    ))}
                </div>

                <div className="absolute inset-0 flex justify-between items-center px-4">
                    <button
                        onClick={() =>
                            setCurrentIndex(
                                (prevIndex) => (prevIndex - 1 + slideIdx.length) % slideIdx.length
                            )
                        }
                        className="bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-800"
                    >
                        &#10094;
                    </button>
                    <button
                        onClick={() =>
                            setCurrentIndex((prevIndex) => (prevIndex + 1) % slideIdx.length)
                        }
                        className="bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-800"
                    >
                        &#10095;
                    </button>
                </div>

                <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                    {[...Array(10)].map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full ${
                                currentIndex % 10 === index ? "bg-white" : "bg-gray-500"
                            }`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
