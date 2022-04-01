import { Button } from "antd";
import "../../../styles/commen.fonts.scss";

const NewProductBtnAtom = (props: any) => {
  return (
    <>
      <Button
        style={{
          borderRadius: 5,
          backgroundColor: "#001eb9",
          width: 200,
          height: 39,
          fontFamily: "Satoshi-Medium",
        }}
        type="primary"
      >
        New Product
      </Button>
    </>
  );
};

export default NewProductBtnAtom;
