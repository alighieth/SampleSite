const Features = () => {
  return (
    <div className="features">
      <div className="featureSubtitle">Features</div>
      <FeatureCards
        title="Business Consulting"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at."
      />
    </div>
  );
};

const FeatureCards = ({ title, description }) => {
  return (
    <div className="featureCards">
      <div className="logo">
        <span className="icon-autorenew"></span>
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <a href="">Learn More</a>
    </div>
  );
};

export default Features;
