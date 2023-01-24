import ImageMasonry from "./imagemnsory";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="about samples">
        <h3 className="skillsh3">Samples</h3>
        <p>
          This is a display of my several landing pages, blogs,and web
          applications that I developed and I am proud of, please enjoy
          <span> .....</span>
        </p>
        <SkillsComponent />
      </div>
    </div>
  );
};

const SkillsComponent = () => {
  return (
    <div className="skills-component">
      <ImageMasonry />
    </div>
  );
};

export default Skills;
