const Skills = () => {
  return (
    <div className="skills-container">
      <div className="about">
        <h3 className="skillsh3">Skills</h3>
        <SkillsComponent />
      </div>
    </div>
  );
};

const SkillsComponent = () => {
  return (
    <div className="skills-component">
      <div className="text-skills"></div>
      <div className="video-skills"></div>
    </div>
  );
};

export default Skills;
