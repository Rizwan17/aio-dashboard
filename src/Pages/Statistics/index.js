import BarChartExample from "../../components/BarChartExample";
import DoughnutChartExample from "../../components/DoughnutChartExample";
import Card from "../../ui-components/Card";

const Statistics = () => {
  const cardContainer = {
    width: "400px",
    height: "300px",
    marginRight: "10px",
  };
  return (
    <>
      <header
        style={{
          margin: "20px",
        }}
      >
        <h1 style={{ fontSize: "30px" }}>Statistics Report</h1>
        <p>Visualise your data</p>
      </header>

      <div
        style={{
          display: "flex",
          margin: "10px",
        }}
      >
        <div style={cardContainer}>
          <Card
            heading="Bar Chart Example"
            subHeading="An Introduction to bar chart support on aio"
          >
            <BarChartExample />
          </Card>
        </div>
        <div style={cardContainer}>
          <Card
            heading="Doughnut Chart Example"
            subHeading="An Introduction to doughnut chart exmaple"
          >
            <DoughnutChartExample />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Statistics;
