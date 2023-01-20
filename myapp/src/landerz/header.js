const HeaderLogo = () => {
  return (
    <div className="header">
      <h2>Landerz</h2>
      <span>.</span>
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="navbar">
      <NavBarItem text="Home" />
      <NavBarItem text="Features" />
      <NavBarItem text="About Us" />
      <NavBarItem text="Testimonials" />
      <NavBarItem text="Blog" />
      <NavBarItem text="Contact" />
    </div>
  );
};

const NavBarItem = ({ text }) => {
  return <a href="#home-section">{text}</a>;
};

export { NavBar };
export default HeaderLogo;
