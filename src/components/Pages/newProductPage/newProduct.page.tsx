import NewEditProductUpperPageOrg from "../../organisms/newEditProductUperPageorg/newEditProductUpperPage.org";

const NewProductsPage = () => {
  return (
    <div style={{ margin: 40 }}>
      <NewEditProductUpperPageOrg
        headingText="PRODUCTS"
        subheading="Add new product"
      />
      <div style={{ margin: 30 }}></div>
    </div>
  );
};

export default NewProductsPage;
