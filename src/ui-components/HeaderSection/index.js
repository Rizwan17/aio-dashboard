const HeaderSection = ({ heading, subHeading }) => {
  return (
    <header style={{ margin: "20px" }}>
      <h1 style={{ fontSize: "30px" }}>{heading}</h1>
      <p>{subHeading}</p>
    </header>
  );
};

export default HeaderSection;
