const HeaderSection = ({ heading, subHeading, rightItem = () => {} }) => {
  return (
    <header style={{ 
      margin: "20px",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between' 
    }}>
      <div>
        <h1 style={{ fontSize: "30px" }}>{heading}</h1>
        <p>{subHeading}</p>
      </div>
      {rightItem()}
    </header>
  );
};

export default HeaderSection;
