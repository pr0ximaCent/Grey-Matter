import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import "tailwindcss/tailwind.css";
import Header from "../Header.jsx";

function HomePage() {
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
      <Header />
      <div style={{ textAlign: "center" }}>
        <h2
          style={{
            color: "#ffffff",
            margin: "0",
            padding: "10px",
            backgroundColor: "#111827",
            fontSize: "2rem",
          }}
        >
          Unlock the Secrets of Impactful Academic Writing
        </h2>
      </div>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ 
          marginTop: "20px", 
          padding: "0 20px",
          paddingBottom: "40px" // Added paddingBottom here
        }}
      >
        <Grid item xs={12} md={10} lg={8}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: "#ffffff",
              textAlign: "center",
              margin: "10px 0",
              fontSize: { xs: "16px", md: "20px" },
              lineHeight: "1.6",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            <p>
              Dive deep into the essentials of crafting research papers with our
              comprehensive guide. Whether you're starting from scratch or
              looking to refine your skills, this workshop will equip you with
              the tools you need.
            </p>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={6}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#ffffff",
                    textAlign: "left",
                    padding: "20px",
                    border: "2px solid #ffffff",
                    borderRadius: "8px",
                    backgroundColor: "#1f2937",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                    height: "100%",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <strong>Master Key Aspect 1:</strong> From selecting a
                  compelling topic to navigating the complexities of
                  publication, gain expert guidance on every aspect of academic
                  writing.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#ffffff",
                    textAlign: "left",
                    padding: "20px",
                    border: "2px solid #ffffff",
                    borderRadius: "8px",
                    backgroundColor: "#1f2937",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                    height: "100%",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <strong>Master Key Aspect 2:</strong> Practical strategies and
                  insights to ensure your research stands out and makes a
                  significant impact in the academic community.
                </Typography>
              </Grid>
            </Grid>
            <p>
              Elevate your academic journey and turn your ideas into published
              work that resonates with the global research community.
            </p>
          </Typography>
        </Grid>
      </Grid>

      {/* Slideshow Section */}
      <div
        className="mx-auto relative w-full h-full xl:w-[1280px] overflow-hidden"
        style={{ backgroundColor: "#374151" }}
      >
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slideIdx.map((slide, index) => (
            <img
              key={index}
              src={`/ResearchPaper/Paper Writing-Workshop_${slide}.jpg`}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover"
              style={{
                height: "calc(100vh - 180px)",
                objectFit: "cover",
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex justify-between items-center px-4">
          <button
            onClick={() =>
              setCurrentIndex(
                (prevIndex) =>
                  (prevIndex - 1 + slideIdx.length) % slideIdx.length
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
          {slideIdx.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex % slideIdx.length === index
                  ? "bg-white"
                  : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
