const Project = ({ project }) => {
  return (
    <div className="wrapper" id="Projects">
      <h1>Projects</h1>
      <section className="proj-section">
        {project.map((project) => (
          <div className="proj-card" key={project.id}>
            <h2 className="proj-title">{project.title}</h2>
            {/* <img className="proj-img" src={project.img} alt="" /> */}
            <p className="proj-detail">{project.detail}</p>
            <h3 className="proj-subtitle">{project.subtitle}</h3>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Project;
