import { useEffect, useRef, useState } from "react";
import BillingHistory from "../../components/BillingHistory";
import Paragraph from "../../components/Paragraph";
import Card from "../../ui-components/Card";
import Modal from "../../ui-components/Modal";
import styles from "./Home.module.css";
import BarChartExample from "../../components/BarChartExample";
import DoughnutChartExample from "../../components/DoughnutChartExample";
import HeaderSection from "../../ui-components/HeaderSection";

export default function Dashboard() {
  const [modal, setModal] = useState(false);

  const handleClose = () => {
    //alert('closing');
    setModal(false);
  };

  return (
    <>
      <HeaderSection 
        heading={'Dashboard'}
        subHeading={'Welcome to aio dashboard'}
      />

      <section className={styles["section-container"]}>
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

          <Card
            heading="Payment method"
            subHeading="Change how you pay for plan"
          >
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
      </section>

      <section className={styles["section-container"]}>
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
      </section>

      <BillingHistory />

      <button onClick={() => setModal(true)}>Mofoof</button>

      <Modal isOpen={modal} onClose={handleClose} heading={"AIO Dashboard"}>
        <p>Welcome to aio dashboard</p>
      </Modal>
    </>
  );
}
