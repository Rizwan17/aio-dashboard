import BarChartExample from "../../components/BarChartExample";
import DoughnutChartExample from "../../components/DoughnutChartExample";
import Card from "@aio/components/Card";
import HeaderSection from "@aio/components/HeaderSection";
import Section from "@aio/components/Section";

const Statistics = () => {
  const cardContainer = {
    width: "400px",
    height: "300px",
    marginRight: "10px",
  };
  return (
    <>
      <HeaderSection
        heading={"Statistics Report"}
        subHeading={"Visualize your data"}
      />
      <Section>
        <Card
          heading="Bar Chart Example"
          subHeading="An Introduction to bar chart support on aio"
        >
          <BarChartExample />
        </Card>

        <Card
          heading="Doughnut Chart Example"
          subHeading="An Introduction to doughnut chart exmaple"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <DoughnutChartExample />
          </div>
        </Card>
      </Section>
    </>
  );
};

export default Statistics;
