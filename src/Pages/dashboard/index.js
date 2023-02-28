import { useState } from "react";
import BillingHistory from "../../components/BillingHistory";
import Paragraph from "../../components/Paragraph";
import Card from "../../ui-components/Card";
import Modal from "../../ui-components/Modal";
import styles from "./Home.module.css";

export default function Dashboard() {
  const [modal, setModal] = useState(false);

  const handleClose = () => {
    //alert('closing');
    setModal(false)
  }

  console.log({modal})
  return (
    <div className={styles.container}>

      <section className='content'>

        <header style={{
          margin: '20px'
        }}>
          <h1 style={{ fontSize: '30px' }}>Plans and Billings</h1>
          <p>Manage your plans and billing</p>
        </header>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '10px'
        }}>
        <Card 
          heading="Basic Plan"
          subHeading="Our most popular plan for small teams."
          rightItem={() => {
            return <h2>$20 per month</h2>
          }}
        >
          <div style={{ margin: '10px' }}>
            <Paragraph />
          </div>
          
        </Card>

        <Card 
          heading="Payment method"
          subHeading="Change how you pay for plan"
          
        >
          <div style={{ margin: '10px' }}>
            <Paragraph />
          </div>
          
        </Card>
        </div>
        
      
        <BillingHistory />

        




        <button onClick={() => setModal(true)}>Mofoof</button>
      </section>


      <Modal 
        isOpen={modal}  
        onClose={handleClose}
        heading={'AIO Dashboard'}>

          <p>Welcome to aio dashboard</p>

      </Modal>

      
    </div>
  )
}
