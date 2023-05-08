## AIO Admin Dashboard

Developed this aio dashboard using nextjs with lots of love.

This dashboard comes with lots of features which can reduce development time.

## Available UI Components

## Layout Component to provide you Header and Sidebar

Layout Component brings up Top Header and Side Navigation Controls

```bash
import Layout from "@aio/components/layout";

const Home = props => (
    <Layout>
        <p>Hello World</p>
    </Layout>
)

```

## Page Header Component with page heading and subheading and action components

```bash
import HeaderSection from "@aio/components/HeaderSection";
import ActionButton from "@aio/components/ActionButton";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Profile = (props) => {
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
        </>
    );
}
```

## Section Component to wrap page content

Section component is a container which brings alignment and spacing for content


```bash
import Section from "@aio/components/Section";
import DataCard from "@aio/components/DataCard";

const Home = () => {
    return (
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
    );
}

```


## Table component

```bash
import Table from "@aio/components/Table";

const BillingHistory = () => {
    return (
        <Table
            # Main Heading of the table
            mainHeading={"Billing history"}
            # Sub Heading of the table
            subHeading={"Download your previous plan bill and usuage details."}
            # Table Right Side Component
            headingRightItem={() => (
                <ActionButton
                onClick={openModal}
                label="Download All"
                Icon={FaCloudDownloadAlt}
                />
            )}
            # Table Column Heading [{key: id, heading: Id }, ...]
            heading={table_column_heading}
            # Table Row data [{id: { value: 1 }}, ....]
            data={table_data}
        />
    );
}

```

## Modal Component

```bash
import Modal from "@aio/components/Modal";

const ExampleModal = (props) => {
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
        <Modal
            isOpen={modal}
            onClose={handleClose}
            heading={"AIO Dashboard"}
            positiveText={"Save Changes"}
            negativeText={"Cancel"}
            onCancel={handleCancel}
            onSubmit={handleSubmit}
        >
    );
}
 
```

## Input Text Component

```bash
import Input from "@aio/components/Input";

    <Input
        inputContainerStyle={{ padding: "15px 30px" }}
        type="text"
        placeholder="Email"
        onChange={(e) => console.log(e)}
        name="email"
        label={"Email"} />
```


```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


