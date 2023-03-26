import ActionButton from "../ui-components/ActionButton";
import Table from "../ui-components/Table";
import {
  FaCloudDownloadAlt,
  FaRegFilePdf,
  FaLongArrowAltDown,
} from "react-icons/fa";
import { useState } from "react";
import Modal from "../ui-components/Modal";

const table_column_heading = [
  {
    key: "invoice",
    heading: "Invoice",
  },
  {
    key: "billing-date",
    heading: "Billing date",
    icon: FaLongArrowAltDown,
  },
  {
    key: "amount",
    heading: "Amount",
  },
  {
    key: "plan",
    heading: "Plan",
  },
  {
    key: "users",
    heading: "Users",
  },
  {
    key: "action-btn",
    heading: "",
  },
];

const table_data = [
  {
    id: 1,
    invoice: {
      value: "Invoice #007 - Dec 2022",
      icon: FaRegFilePdf,
    },
    "billing-date": {
      value: "Dec 1, 2022",
    },
    amount: {
      value: "Rs. 4000",
    },
    plan: {
      value: "Basic Plan",
    },
    users: {
      value: "10 Users",
    },
    "action-btn": {
      component: () => (
        <ActionButton
          label="Download"
          Icon={FaCloudDownloadAlt}
          inverse={true}
          onClick={() => {
            alert('Welcome to aio dashboard presentation');
          }}
        />
      ),
    },
  },
  {
    id: 2,
    invoice: {
      value: "Invoice #007 - Dec 2022",
      icon: FaRegFilePdf,
    },
    "billing-date": {
      value: "Dec 1, 2022",
    },
    amount: {
      value: "Rs. 4000",
    },
    plan: {
      value: "Basic Plan",
    },
    users: {
      value: "10 Users",
    },
    "action-btn": {
      component: () => (
        <ActionButton
          label="Download"
          Icon={FaCloudDownloadAlt}
          inverse={true}
        />
      ),
    },
  },
];

const BillingHistory = () => {
  const [modal, setModal] = useState(false);
  const handleClose = () => {
    //alert('closing');
    setModal(false);
  };

  const openModal = () => {
    setModal(true);
  };
  return (
    <>
      <Table
        mainHeading={"Billing history"}
        subHeading={"Download your previous plan bill and usuage details."}
        headingRightItem={() => (
          <ActionButton
            onClick={openModal}
            label="Download All"
            Icon={FaCloudDownloadAlt}
          />
        )}
        heading={table_column_heading}
        data={table_data}
      />
      <Modal
        isOpen={modal}
        heading={"Download all Invoice"}
        onClose={handleClose}
        positiveText={'Download'}
        negativeText={'Cancel'}
      />
    </>
  );
};

export default BillingHistory;
