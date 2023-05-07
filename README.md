## AIO Admin Dashboard

Developed this aio dashboard using nextjs with lots of love.

This dashboard comes with lots of features which can reduce development time.

## Available UI Components

Layout Component to provide you Header and Sidebar

```bash
<Layout>
    <p>Hello World</p>
</Layout>
```

Header Component with dropdown option and menus
Sidebar Navigation components
Page Header Component with page heading and subheading and action components

```bash
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
```

Section Component to wrap page content

```bash
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
```

Data Component to highlight important data

```bash
<DataCard
    label={"Total Revenue"}
    value={"23,34,450"}
    percentageValue={56.4}
    inverse={true}
/>
```
Table component

```bash
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
```

Graph Component
Modal Component

```bash
 <Modal
    isOpen={modal}
    onClose={handleClose}
    heading={"AIO Dashboard"}
    positiveText={"Save Changes"}
    negativeText={"Cancel"}
    onCancel={handleCancel}
    onSubmit={handleSubmit}
>
```

Action Buttons

```bash
<ActionButton
    onClick={() => setModal(true)}
    Icon={AiOutlinePlusCircle}
    label="Add New User"
/>
```
Input Text Component


```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


