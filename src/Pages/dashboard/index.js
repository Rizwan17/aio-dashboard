import { useEffect, useRef, useState } from "react";
import BillingHistory from "../../components/BillingHistory";
import Paragraph from "../../components/Paragraph";
import Card from "../../ui-components/Card";
import Modal from "../../ui-components/Modal";
import styles from "./Home.module.css";
import BarChartExample from "../../components/BarChartExample";
import DoughnutChartExample from "../../components/DoughnutChartExample";
import HeaderSection from "../../ui-components/HeaderSection";
import DataCard from "../../ui-components/DataCard";
import { SlCalender } from "react-icons/sl";
import ActionButton from "../../ui-components/ActionButton";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Section from "../../ui-components/Section";

export default function Dashboard() {
  const [modal, setModal] = useState(false);

  const handleClose = () => {
    //alert('closing');
    setModal(false);
  };

  const handleCancel = () => {
    setModal(false);
  }

  const handleSubmit = () => {
    alert('Submit is working..!');
    handleClose();
  }

  return (
    <>
      <HeaderSection
        heading={"Dashboard"}
        subHeading={"Welcome to aio dashboard"}
        rightItem={() => (
          <ActionButton
            onClick={() => setModal(true)}
            Icon={AiOutlinePlusCircle}
            label="Add New User"
          />
        )}
      />

      <Section>
        <DataCard
          label={"Total Revenue"}
          value={"23,34,450"}
          percentageValue={56.4}
          inverse={true}
        />
        <DataCard
          label={"Total Customer"}
          value={"45,09,333"}
          percentageValue={3.45}
        />
        <DataCard
          label={"Total Profit"}
          value={"43,54,111"}
          percentageValue={10.89}
        />
      </Section>

      <Section>
        <Card
          heading="Bar Chart Example"
          subHeading="Lets see how data is ploting on chartjs"
        >
          <BarChartExample />
        </Card>
        <Card
          heading="Doughnut Chart Example"
          subHeading="Lets see how data is ploting on chartjs"
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

      <Section>
        <Card
          heading="Basic Plan"
          subHeading="Our most popular plan for small teams."
          rightItem={() => {
            return <h2>$20 per month</h2>;
          }}
          footerLeft={() => {
            return (
              <div className={styles["date-placeholder"]}>
                <SlCalender />
                <p className="ml-5">5th Sep 2023</p>
              </div>
            );
          }}
          footerRight={() => {
            return (
              <ActionButton
                inverse={true}
                label="View"
                style={{ padding: "2px 5px", fontSize: 12 }}
              />
            );
          }}
        >
          <div style={{ margin: "10px" }}>
            <Paragraph />
            <Paragraph />
          </div>
        </Card>

        <Card heading="Payment method" subHeading="Change how you pay for plan">
          <div style={{ margin: "10px" }}>
            <Paragraph />
          </div>
        </Card>

        <Card
          heading="Basic Plan"
          subHeading="Our most popular plan for small teams."
          rightItem={() => {
            return <h2>$20 per month</h2>;
          }}
        >
          <div style={{ margin: "10px" }}>
            <Paragraph />
          </div>
        </Card>
      </Section>

      <BillingHistory />

      <Modal
        isOpen={modal}
        onClose={handleClose}
        heading={"AIO Dashboard"}
        positiveText={"Save Changes"}
        negativeText={"Cancel"}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      >
        <p>Welcome to aio dashboard</p>
      </Modal>
    </>
  );
}
