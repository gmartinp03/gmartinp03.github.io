import "./App.css";
import Experience from "./Components/Experience";
import Introduction from "./Components/Introduction";
import NavBar from "./Components/NavBar";
import Project from "./Components/Project";
import Footer from "./Components/Footer";

function App() {
  const experience = [
    {
      id: 1,
      title: "BAE Systems",
      subtitle: "Technical Intern",
      image: "./images/BAE.jpg",
      detail:
        "From the Summer to winter of 2023, I am on Co-op for BAE, supporting the systems team. I primarily use Python, Excel, and DOORS to create test artifacts and perfrom assesment on GPS receiver software/haredware. I also run regression and integration tests to catch new failures as the program progesses.",
    },
    {
      id: 2,
      title: "MidAmerican Energy",
      subtitle: "Engineering Intern",
      image: "./images/MidAmWind.jpg",
      detail:
        "In the Summer of 2022, I supported renewable generation operations by reviewing project documentation and data mining turbine data for lightning protection system upgrades. I mainly used Excel to track serial numbers, dates, and turbine information for over 3,000 lightning protection systems and to automatically accept/reject reports. I also compiled turbine metadata to create standard reference maps for contractor use.",
    },
  ];
  const project = [
    {
      id: 1,
      title: "Sit With Me",
      subtitle: "React, MapLibre, FireStore",
      detail:
        "Won First Place Overall against 50 ISU students. Developed a social media website on a team of four, aiming to help students struggling with social anxiety and loneliness.",
    },
    {
      id: 2,
      title: "CourtUp",
      subtitle: "React, Spring, MySQL",
      detail:
        "Full stack web application dedicated to finding basketball courts near you. WIP",
    },
    {
      id: 3,
      title: "CyFly",
      subtitle: "MATLAB, SolidWorks, xflr5",
      detail:
        "Researched and designed an aircraft theoretically capable of flight to complete a mission. Built MATLAB scripts to process data from xflr5 and present the aircrafts performance.",
    },
    {
      id: 4,
      title: "Cyclone Rocketry",
      subtitle: "Student Org",
      detail:
        "Researched and manufactured parachute ejection systems for the SRAD Spaceport competitions. Created a reefing system to constrict the parachute",
    },
    {
      id: 5,
      title: "A380",
      subtitle: "SolidWorks",
      detail:
        "Collaborated on a scale model of an Airbus A380 in SolidWorks. Independantly worked on the fuselage, undercarriage, horizontal stabilizers, and engine/wing connections. Also added a livery to show school pride.",
    },
    {
      id: 6,
      title: "Lighter Than Air",
      subtitle: "Class Project",
      detail:
        "Constructed a balsa wood aircraft based on the 90's game show, Baggage. Worked on a team to ensure the craft was capable of stable flight while meeting a weight limit and budget.",
    },
  ];

  return (
    <div className="App">
      <NavBar />
      <main>
        <Introduction />
        <Experience experience={experience} />
        <Project project={project} />
        <Footer id="contact" />
      </main>
    </div>
  );
}

export default App;
