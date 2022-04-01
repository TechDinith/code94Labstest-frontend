import { Button } from "antd";
import starred from "../../../assets/starred.svg";

const FavoritBtnAtom = (props: any) => {
  return (
    <>
      <Button
        style={{
          borderRadius: 5,
          height: 39,
          borderColor: "#001eb9",
        }}
      >
        <img src={starred} alt="logo" />
      </Button>
    </>
  );
};

export default FavoritBtnAtom;
