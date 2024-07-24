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
      subtitle: "Software Engineer Intern",
      date: "May -> Aug '24",
      image: "./images/BAE.jpg",
      detail:
        "I am really grateful to have been a part of the software team. I had the opportunity to develop features for various GPS receivers, upgrade component interfaces, and update IO messages in C/C++. It was a great experience and I learned a lot about the software development process.",
    },
    {
      id: 2,
      title: "BAE Systems",
      subtitle: "Systems Engineer Intern",
      date: "May -> Dec '23",
      image: "./images/BAE.jpg",
      detail:
        "I was on the Systems team, No Test for the Wicked, as a Co-op for BAE. I created test artifacts using Python, Excel, and IBM Doors. In addition, I performed assesment on GPS receiver software/hardware and ran continuous integration tests against incoming software as the program progressed.",
    },
    {
      id: 3,
      title: "MidAmerican Energy",
      subtitle: "Engineering Intern",
      date: "Apr -> Aug '22",
      image: "./images/MidAmWind.jpg",
      detail:
        "For my first internship, I supported Renewable Generation operations by reviewing project documentation and data mining wind turbine data for lightning protection system upgrades. I mainly used Excel to track information for over 3,000 turbines, and I built a system to automatically accept/reject reports. I also compiled turbine metadata to create maps of wind farms for contractors to use.",
    },
  ];
  const project = [
    {
      id: 1,
      title: "Sit With Me",
      subtitle: "React, MapLibre, FireStore",
      detail:
        "Won First Place Overall against 50 ISU students. Developed a social media website on a team of four, aiming to help students struggling with social anxiety by making that first question, 'Is that seat open?', a little easier.",
    },
    {
      id: 2,
      title: "CourtUp",
      subtitle: "React, Spring, MySQL",
      detail:
        "Full stack web application dedicated to finding basketball courts near you. Implemented endpoints to perform CRUD operations on various data models and handled web API requests to update the UI based on responses",
    },
    {
      id: 3,
      title: "Honda CB750k4",
      subtitle: "Project Bike",
      detail:
        "My joy... not yet my pride. Needs a decent amount of work to make it pretty, but I enjoy spending time on it.",
    },
    {
      id: 4,
      title: "CyFly",
      subtitle: "MATLAB, SolidWorks, xflr5",
      detail:
        "Researched and designed an aircraft theoretically capable of flight to complete a mission. Built MATLAB scripts to process airfoil data from xflr5 and presented the aircraft's performance.",
    },
    {
      id: 5,
      title: "Cyclone Rocketry",
      subtitle: "Student Org",
      detail:
        "Researched and manufactured parachute ejection systems for the SRAD Spaceport competitions. Created a reefing system to constrict the parachute at apogee, then fully expand later.",
    },
    {
      id: 6,
      title: "A380",
      subtitle: "SolidWorks",
      detail:
        "Collaborated on a scale model of an Airbus A380 in SolidWorks. Independently worked on the fuselage, undercarriage, horizontal stabilizers, and engine/wing connections. Also added a livery to show school pride.",
    },
    {
      id: 7,
      title: "Lighter Than Air",
      subtitle: "Freshman Class Project",
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
