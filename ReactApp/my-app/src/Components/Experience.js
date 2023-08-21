const Experience = ({ experience }) => {
  return (
    <div className="wrapper" id="Experience">
      <h1>Experience</h1>
      <section className="exper-section">
        {experience.map((experience) => (
          <div className="exper-card" key={experience.id}>
            <h2 className="exper-title">{experience.title}</h2>
            <h3 className="exper-subtitle">{experience.subtitle}</h3>
            <img className="exper-img" src={experience.image} alt="" />
            <p>{experience.detail}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Experience;
