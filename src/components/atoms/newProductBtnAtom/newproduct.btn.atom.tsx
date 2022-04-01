import { Button } from "antd";

const NewProductBtnAtom = (props: any) => {
  return (
    <>
      <Button
        style={{
          borderRadius: 5,
          backgroundColor: "#001eb9",
          width: 249,
          height: 39,
        }}
        type="primary"
      >
        New Product
      </Button>
    </>
  );
};

export default NewProductBtnAtom;
